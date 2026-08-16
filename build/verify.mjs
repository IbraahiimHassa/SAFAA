/* Pre-deploy check: every page at three widths.
 *
 *   node build/build.mjs && (cd site && python3 -m http.server 8099 &) && node build/verify.mjs
 *
 * Looks for: horizontal document overflow, content cut off inside its own box,
 * broken images, console/page errors, and axe-core WCAG 2.0 A/AA violations.
 * Finishes by driving the PDP buy box and printing what it computes.
 *
 * Needs playwright (and optionally axe-core) resolvable from NODE_PATH:
 *   PLAYWRIGHT_DIR=/path/to/playwright node build/verify.mjs
 */
import { readFileSync } from 'node:fs';

const pw = await import(process.env.PLAYWRIGHT_DIR ?? 'playwright');
const { chromium } = pw.default ?? pw;   // playwright ships CJS; default holds the exports

const AXE = (() => {
  for (const u of [process.env.AXE_CORE, new URL('../node_modules/axe-core/axe.min.js', import.meta.url)]) {
    try { if (u) return readFileSync(u, 'utf8'); } catch {}
  }
  return null;
})();
const PAGES = ['index.html','product.html','marine-collagen.html','black-seed-oil.html','collagen-coffee.html','collagen-matcha.html','qahwa-collagen.html','sidr-sticks.html','black-seed-softgels.html','daily-sachets.html','black-seed-honey.html','tasting-flight.html','morning-ritual.html'];
const VIEWS = [[1440,900,'desktop'],[768,1000,'tablet'],[375,800,'mobile']];

const b = await chromium.launch();
let fail = 0;

for (const [w,h,vn] of VIEWS) {
  const ctx = await b.newContext({ viewport:{width:w,height:h} });
  for (const f of PAGES) {
    const p = await ctx.newPage();
    const errs = [];
    p.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
    p.on('pageerror', e => errs.push('pageerror: '+e.message));
    await p.goto('http://127.0.0.1:8099/'+f, {waitUntil:'networkidle'});
    await p.waitForTimeout(500);

    const overflow = await p.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);

    const broken = await p.evaluate(() => [...document.images]
      .filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src));

    /* Content spilling out of its own box does NOT widen the document, so the
       check above never sees it — that is how six 49px ingredient cards with
       their names hanging outside passed as clean. Flag any element whose
       content is wider than the box holding it, unless it scrolls on purpose. */
    const clipped = await p.evaluate(() => {
      const out = [];
      for (const el of document.querySelectorAll('body *')) {
        const over = el.scrollWidth - el.clientWidth;
        if (over <= 4) continue;                          // subpixel rounding
        const cs = getComputedStyle(el);
        if (!/hidden|clip/.test(cs.overflowX)) continue;  // spilling ≠ cut off
        if (cs.visibility === 'hidden' || cs.display === 'none') continue;
        if (cs.clipPath !== 'none' || el.classList.contains('vh')) continue; // a11y helpers
        const r = el.getBoundingClientRect();
        if (r.width < 20 || r.height < 8) continue;
        const tag = el.tagName.toLowerCase() +
          (el.className && typeof el.className === 'string'
            ? '.' + el.className.trim().split(/\s+/).join('.') : '');
        out.push(`${tag} +${over}px`);
      }
      return [...new Set(out)].slice(0, 6);
    });

    let axeOut = { violations: [] };
    if (vn !== 'tablet' && AXE) {
      await p.addScriptTag({ content: AXE });
      axeOut = await p.evaluate(async () =>
        await window.axe.run(document, { runOnly:{ type:'tag', values:['wcag2a','wcag2aa'] } }));
    }

    const v = axeOut.violations;
    const bad = overflow > 0 || clipped.length || broken.length || errs.length || v.length;
    if (bad) fail++;
    const parts = [];
    if (overflow > 0) parts.push(`overflow +${overflow}px`);
    if (clipped.length) parts.push(`clipped: ${clipped.join(', ')}`);
    if (broken.length) parts.push(`broken img: ${broken.join(', ')}`);
    if (errs.length) parts.push(`js: ${errs.join(' | ')}`);
    if (v.length) parts.push('axe: ' + v.map(x => `${x.id}(${x.nodes.length}) [${x.nodes[0].target}]`).join(', '));
    console.log(`${bad?'✗':'✓'} ${vn.padEnd(8)} ${f.padEnd(22)} ${parts.join(' · ')}`);
    await p.close();
  }
  await ctx.close();
}

/* interaction check on the PDP buy box */
const ctx = await b.newContext({ viewport:{width:1440,height:900} });
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8099/product.html', {waitUntil:'networkidle'});
const readBtn = () => p.textContent('.addcart');
console.log('\n— buy box —');
console.log('  default (plan, 1 jar):     ', (await readBtn()).trim());
await p.click('.qt:nth-child(3)');
console.log('  plan, 3 jars:              ', (await readBtn()).trim());
await p.click('#planOnce');
console.log('  one-time, 3 jars:          ', (await readBtn()).trim());
await p.selectOption('#pick1', { index: 1 });
console.log('  + Black Seed Oil companion:', (await readBtn()).trim());
console.log('  delivery date:             ', (await p.textContent('#delivDate')).trim());
await b.close();
console.log(fail ? `\n${fail} page/viewport combos with findings` : '\nAll pages clean.');
