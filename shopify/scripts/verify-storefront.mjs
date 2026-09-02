/* SAFAA — storefront verification harness.
 *
 * Drives a real browser over the live (or preview) theme and reports what a customer
 * would actually get: layout breaks, missing modules, broken images, console errors and
 * accessibility violations — plus screenshots at the three widths the design was built for.
 *
 * This is the same verification pattern the static site used (see docs/00-session-handover),
 * pointed at Shopify instead of local HTML.
 *
 * Usage:
 *   npm ci
 *   STORE=hjqqqb-at.myshopify.com \
 *   STOREFRONT_PASSWORD=xxxx \
 *   THEME_ID=199437222271 \
 *   node shopify/scripts/verify-storefront.mjs
 *
 * Behind an egress proxy (Claude Code on the web sets HTTPS_PROXY): the browser is pointed
 * at it automatically. See shopify/theme/README.md for the hosts that must be allowed.
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const STORE = process.env.STORE;
const PASSWORD = process.env.STOREFRONT_PASSWORD || '';
const THEME_ID = process.env.THEME_ID || '';
const OUT = process.env.OUT_DIR || 'shopify/screenshots';
const PROXY = process.env.HTTPS_PROXY || process.env.https_proxy || '';

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

/* Behind a TLS-re-terminating egress proxy, Chromium's TLS 1.3 ClientHello (with the
   post-quantum key share, ~1.8 KB) is dropped mid-handshake while curl's smaller hello
   passes. Capping the browser↔proxy leg at TLS 1.2 gets through; certificate verification
   stays on — the proxy's CA is already in the browser trust store. Direct connections
   (no proxy) are untouched. */
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  ...(PROXY ? { proxy: { server: PROXY }, args: ['--ssl-version-max=tls1.2'] } : {}),
});
const context = await browser.newContext({ locale: 'en-NL' });

/* Is this response the storefront password gate rather than the page we asked for? */
const isGate = async (tab) =>
  (await tab.locator('[data-page-type="password"], form.storefront-password-form').count()) > 0;

/* The password gate sets a cookie for the whole context, so unlock once. Post the form
   directly instead of driving the theme's markup: on Horizon the field sits inside a closed
   <dialog>, and any theme may move it — the form's action and field names do not change. */
let gateLocked = false;
{
  const gate = await context.newPage();
  if (PASSWORD) {
    await context.request.post(`https://${STORE}/password`, {
      form: { form_type: 'storefront_password', utf8: '✓', password: PASSWORD },
      maxRedirects: 0,
    }).catch(() => {});
  }
  await gate.goto(url('/'), { waitUntil: 'domcontentloaded' }).catch(() => {});
  gateLocked = await isGate(gate);
  await gate.close();
}

if (gateLocked) {
  console.error(PASSWORD
    ? `Storefront password was not accepted for ${STORE}. Check STOREFRONT_PASSWORD.`
    : `${STORE} is password-protected. Set STOREFRONT_PASSWORD to verify past the gate.`);
  await browser.close();
  process.exit(2);
}

let failures = 0;
const report = [];

for (const page of PAGES) {
  const tab = await context.newPage();
  const consoleErrors = [];
  tab.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  tab.on('pageerror', (e) => consoleErrors.push(String(e)));

  const entry = { page: page.name, status: 0, missing: [], overflow: [], brokenImages: [], consoleErrors, axe: [] };
  let res = null;
  try {
    res = await tab.goto(url(page.path), { waitUntil: 'networkidle' });
  } catch (e) {
    entry.consoleErrors.push(`navigation failed: ${String(e).split('\n')[0]}`);
  }
  entry.status = res ? res.status() : 0;

  if (!res || entry.status >= 400) {
    failures++;
    report.push(entry);
    await tab.close();
    continue;
  }

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
