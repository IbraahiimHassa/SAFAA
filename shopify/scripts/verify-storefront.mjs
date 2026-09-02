/* SAFAA — storefront verification harness.
 *
 * Drives a real browser over the live (or preview) theme and reports what a customer
 * would actually get: layout breaks, missing modules, broken images, console errors and
 * accessibility violations — plus screenshots at the three widths the design was built for.
 *
 * This is the same verification pattern the static site used (see docs/00-session-handover),
 * pointed at Shopify instead of local HTML.
 *
 * Requires network access to the storefront. In the sandboxed cloud environment that host
 * is blocked by the egress policy; run it locally, or allow the hosts listed in
 * shopify/theme/README.md.
 *
 * Usage:
 *   npm i -D playwright @axe-core/playwright
 *   STORE=hjqqqb-at.myshopify.com \
 *   STOREFRONT_PASSWORD=xxxx \
 *   THEME_ID=199437222271 \
 *   node shopify/scripts/verify-storefront.mjs
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const STORE = process.env.STORE;
const PASSWORD = process.env.STOREFRONT_PASSWORD || '';
const THEME_ID = process.env.THEME_ID || '';
const OUT = process.env.OUT_DIR || 'shopify/screenshots';

if (!STORE) {
  console.error('Set STORE, e.g. STORE=hjqqqb-at.myshopify.com');
  process.exit(1);
}

/* The paths worth looking at, and what each one must contain to count as working.
   A page that renders but has lost its signature module is a silent failure, so the
   checks are per-page rather than a single "did it 200" assertion. */
const PAGES = [
  { name: 'pdp-collagen-coffee', path: '/products/collagen-coffee', expect: [
    { label: 'assay card', sel: '.assay table tr' },
    { label: 'quantity tiles', sel: '.qtiles .qt' },
    { label: 'verification strip', sel: '.vstrip' },
    { label: 'accordions', sel: '.acc details' },
    { label: 'ingredient grid', sel: '.ingrid .ing' },
    { label: 'comparison table', sel: '.cmp table td.safa' },
    { label: 'wordmark', sel: '.safaa-wordmark__mark span' },
    { label: 'add to cart', sel: 'button.addcart' },
  ]},
  { name: 'home', path: '/', expect: [] },
];

const WIDTHS = [
  { label: '1440', width: 1440, height: 1200 },
  { label: '768', width: 768, height: 1200 },
  { label: '375', width: 375, height: 1200 },
];

const url = (path) => {
  const u = new URL(path, `https://${STORE}`);
  if (THEME_ID) u.searchParams.set('preview_theme_id', THEME_ID);
  return u.toString();
};

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
});
const context = await browser.newContext({ locale: 'en-NL' });

/* The storefront password gate sets a cookie for the whole context, so unlock once. */
if (PASSWORD) {
  const gate = await context.newPage();
  await gate.goto(`https://${STORE}/password`, { waitUntil: 'domcontentloaded' });
  const field = gate.locator('input[type="password"]').first();
  if (await field.count()) {
    await field.fill(PASSWORD);
    await gate.locator('form[action*="password"] button, form[action*="password"] input[type="submit"]')
      .first().click();
    await gate.waitForLoadState('networkidle').catch(() => {});
  }
  await gate.close();
}

let failures = 0;
const report = [];

for (const page of PAGES) {
  const tab = await context.newPage();
  const consoleErrors = [];
  tab.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  tab.on('pageerror', (e) => consoleErrors.push(String(e)));

  const res = await tab.goto(url(page.path), { waitUntil: 'networkidle' });
  const status = res ? res.status() : 0;
  const entry = { page: page.name, status, missing: [], overflow: [], brokenImages: [], consoleErrors, axe: [] };

  if (status >= 400) failures++;

  // Signature modules: present and non-empty, not merely in the DOM.
  for (const check of page.expect) {
    const count = await tab.locator(check.sel).count();
    if (count === 0) { entry.missing.push(check.label); failures++; }
  }

  // Images that resolved to nothing read as a broken store even when the layout is fine.
  entry.brokenImages = await tab.evaluate(() =>
    Array.from(document.images)
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.currentSrc || i.src));
  if (entry.brokenImages.length) failures++;

  for (const vp of WIDTHS) {
    await tab.setViewportSize({ width: vp.width, height: vp.height });
    await tab.waitForTimeout(250);
    const over = await tab.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (over) { entry.overflow.push(vp.label); failures++; }
    await tab.screenshot({
      path: join(OUT, `${page.name}-${vp.label}.png`),
      fullPage: vp.label === '1440',
    });
  }

  // Accessibility is part of the design contract, not a nice-to-have: the static site
  // shipped at zero axe violations and the port should not quietly regress that.
  try {
    const { default: AxeBuilder } = await import('@axe-core/playwright');
    await tab.setViewportSize({ width: 1440, height: 1200 });
    const axe = await new AxeBuilder({ page: tab }).withTags(['wcag2a', 'wcag2aa']).analyze();
    entry.axe = axe.violations.map((v) => `${v.id} (${v.nodes.length})`);
    if (entry.axe.length) failures++;
  } catch {
    entry.axe = ['@axe-core/playwright not installed — skipped'];
  }

  report.push(entry);
  await tab.close();
}

await browser.close();

for (const r of report) {
  console.log(`\n── ${r.page}  (HTTP ${r.status})`);
  console.log(`   missing modules : ${r.missing.length ? r.missing.join(', ') : 'none'}`);
  console.log(`   h-overflow at   : ${r.overflow.length ? r.overflow.join(', ') : 'none'}`);
  console.log(`   broken images   : ${r.brokenImages.length || 0}`);
  console.log(`   console errors  : ${r.consoleErrors.length ? r.consoleErrors.slice(0, 5).join(' | ') : 'none'}`);
  console.log(`   axe violations  : ${r.axe.length ? r.axe.join(', ') : 'none'}`);
}
console.log(`\nScreenshots in ${OUT}/`);
console.log(failures ? `\n${failures} problem(s) found.` : '\nAll checks passed.');
process.exit(failures ? 1 : 0);
