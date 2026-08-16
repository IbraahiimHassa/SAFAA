/* SAFA Nutrition — static site generator.
   Run: node build/build.mjs      Output: site/*.html
   Content lives in build/data.mjs. Templates live here. */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { site, nav, footer, props, ingredientLib, houseIngredients, products, catalogue, families, classics, formatSpec, formatTag, bestsellers } from './data.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');

/* ---------------- icons ---------------- */
const I = {
  doc:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  leaf:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 20c0-8 5-14 16-15 0 11-5.5 16-13 15"/><path d="M4 20c3-4 6.5-6.6 11-8.5"/></svg>',
  ship:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>',
  spoon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M13.5 3.5c1.8 1.8 1.8 4.7 0 6.5s-4.7 1.8-6.5 0 1-8.3 6.5-6.5z"/><path d="M9.5 11.5 5 20"/></svg>',
  fish:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 12c3.5-4.5 7.5-6 11-6 3 0 5.5 2.5 7 6-1.5 3.5-4 6-7 6-3.5 0-7.5-1.5-11-6z"/><circle cx="16.5" cy="10.5" r=".9" fill="currentColor" stroke="none"/><path d="M3 12 6 9m-3 3 3 3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3 5 6v6c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  car:   '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m2 4 4 4 4-4"/></svg>',
  arrow: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>',
  user:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
};

/* ---------------- shared chrome ---------------- */
/* Fonts are self-hosted (site/assets/fonts.css). Loading them from the Google CDN
   would send every EU visitor's IP to a third party on first paint — settled GDPR
   exposure, and a bad look for a brand that sells compliance discipline. */
const PRELOAD = [
  'fonts/newsreader-latin-400-500-n.woff2',
  'fonts/archivo-latin-400-900-n.woff2',
];

const LOGO = (c1 = '#26201A', c2 = '#B97F24') =>
  `<svg viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M26 104 V56 C26 22 94 22 94 56 V104" stroke="${c1}" stroke-width="7" stroke-linecap="round"/><path d="M60 46 C60 46 74 66 74 76 A14 14 0 1 1 46 76 C46 66 60 46 60 46 Z" fill="${c2}"/></svg>`;

const head = (p) => `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.meta}">
<meta property="og:title" content="${p.ogTitle || p.title}">
<meta property="og:description" content="${p.meta}">
<meta property="og:type" content="${p.ogType || 'website'}">
<meta property="og:image" content="assets/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="assets/og.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
${PRELOAD.map(f => `<link rel="preload" href="assets/${f}" as="font" type="font/woff2" crossorigin>`).join('\n')}
<link rel="stylesheet" href="assets/fonts.css">
<script>document.documentElement.classList.add('js')</script>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>

<div class="announce">${site.announce}</div>

<nav class="top" aria-label="Main">
  <div class="navin">
    <a class="brand" href="index.html" aria-label="SAFA Nutrition home">
      ${LOGO()}
      <span class="wm">SAFA<small>NUTRITION</small></span>
    </a>
    <ul class="navlinks">
${nav.map(n => `      <li><a href="${n.href}"${n.label === p.navKey ? ' aria-current="page"' : ''}>${n.label}${n.menu ? ` <span class="car">${I.car}</span>` : ''}</a>${
  n.menu ? `
        <div class="menu">${n.menu.map(([h, t, d, img]) =>
          `<a href="${h}"><img src="${img}" alt="" loading="lazy"><span style="font-weight:700;color:var(--fg)">${t}<span>${d}</span></span></a>`).join('')}</div>` : ''}</li>`).join('\n')}
    </ul>
    <div class="navr">
      <a class="ic srch" href="#" aria-label="Search">${I.search}</a>
      <a class="cur" href="#" aria-label="Currency: euro">EUR</a>
      <a class="ic" href="#" aria-label="Account">${I.user}</a>
      <a class="lang" href="#" lang="ar" aria-label="Arabic">صفا</a>
      <a class="cartbtn" href="#">Cart · 0</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="mobpanel" aria-label="Menu">
        <svg class="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        <svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>
      </button>
    </div>
  </div>
  <div class="mobpanel" id="mobpanel">
    <ul>
${nav.map(n => `      <li><a href="${n.href}">${n.label}</a>${n.menu ? `
        <ul class="sub">${n.menu.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul>` : ''}</li>`).join('\n')}
    </ul>
  </div>
</nav>
`;

const navJs = `(function(){
  var b=document.querySelector('.burger'),pnl=document.getElementById('mobpanel');
  if(!b||!pnl) return;
  b.addEventListener('click',function(){
    var open=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!open));
    pnl.classList.toggle('open',!open);
  });
})();`;


const signup = `
<section class="signup" aria-labelledby="sign-h">
  <div class="wrap in">
    <div>
      <p class="kick">Before we open</p>
      <h2 id="sign-h">The first batches will be <em>small.</em></h2>
      <p class="secsub">We are not selling yet. Halal certification is in progress and no batch goes on sale before its lab report is published — so leave an address and we will write once, the day the first certified batch is live. Nothing else, and nothing sold on.</p>
    </div>
    <form class="signform" novalidate>
      <label class="vh" for="sign-email">Email address</label>
      <div class="row">
        <input id="sign-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required>
        <button type="submit">Keep me posted</button>
      </div>
      <p class="fine">One email at launch. Unsubscribe in a click. We never sell or share addresses \u2014 see Privacy.</p>
    </form>
  </div>
</section>`;

const foot = `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div class="fbrand">
        ${LOGO('#E8A33D', '#E8A33D')}
        <div class="ar" lang="ar" dir="rtl">صفا</div>
        <p>Purity you can trace. Trust you can taste.</p>
      </div>
${footer.map(([h, links]) => `      <div class="fcol">
        <b>${h}</b>
${links.map(([href, t]) => `        <a href="${href}">${t}</a>`).join('\n')}
      </div>`).join('\n')}
    </div>
    <div class="legal">
      <span>© 2026 SAFA Nutrition · Amsterdam, NL</span>
      <span>Honey is a food, not a medicine. Not suitable for children under 12 months.</span>
    </div>
  </div>
</footer>

<div class="toast" role="status" aria-live="polite"></div>
`;

/* ---------------- shared blocks ---------------- */
const shelf = (slugs, useGlass) => `<div class="shelf">
${slugs.map(s => { const c = catalogue[s]; const src = (useGlass && c.glass) || c.img; return `    <a class="scard" href="${c.href}">
      <span class="flag">${c.flag}</span>
      <span class="art"><img src="${src}" alt="${c.name}" loading="lazy"></span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="pr">${c.pr} <small>${c.note}</small></span>
    </a>`; }).join('\n')}
  </div>`;

/* the photo sits outside <details> — a closed <details> hides every child
   that isn't its <summary>, which would swallow the image */
const ingredientGrid = (keys) => {
  const n = keys.length;
  const cols = Math.min(n, 6);
  /* column counts go out as custom properties, never as an inline
     grid-template-columns — an inline declaration outranks every media query,
     which is what pinned this grid to six columns on a 390px screen */
  const cap = n < 4 ? `;max-width:${n * 260}px` : '';
  return `<div class="ingrid" style="--cols:${cols};--cols-md:${Math.min(cols, 3)}${cap}">
${keys.map(k => {
    const [name, body] = ingredientLib[k];
    return `    <div class="ing">
      <div class="top"><img src="assets/img/ingredients/${k}.jpg" alt="${name}" loading="lazy" width="600" height="600"></div>
      <details>
        <summary>${name}</summary>
        <div class="a">${body}</div>
      </details>
    </div>`;
  }).join('\n')}
  </div>`;
};

const propsStrip = () => `<div class="props">
  <div class="in">
${props.map(([ic, t, d]) => `    <div class="p">${I[ic]}<span><b>${t}</b><span>${d}</span></span></div>`).join('\n')}
  </div>
</div>`;

/* ---------------- PDP ---------------- */
function pdp(p) {
  const kitTotal = p.kit.reduce((a, [, v]) => a + v, 0);
  const base = p.qty[0].p;
  const planPrice = Math.round(base * 0.85);

  const pins = p.pins.map(pin => `      <span class="pin${pin.side === 'r' ? ' r' : ''}" style="--x:${pin.x};--y:${pin.y}"${pin.head ? ' style2' : ''}><s>${pin.was}</s><b>${pin.label}</b></span>`)
    .join('\n').replace(/ style2/g, '');

  const pickers = p.pickers.map((pk, i) => `  <div class="pick">
    <label class="lab" for="pick${i}">${pk.lab}</label>
    <div class="pickbox hasdesc">
      <img class="pv" src="${pk.opts[0][2]}" alt="" id="pv${i}">
      <select id="pick${i}" data-pick="${i}">
${pk.opts.map(([v, d, img]) => {
    const m = v.match(/€(\d+)/);
    return `        <option data-img="${img}" data-desc="${d}" data-price="${m ? m[1] : 0}">${v}</option>`;
  }).join('\n')}
      </select>
      <span class="pd" id="pd${i}">${pk.opts[0][1]}</span>
      <span class="car">${I.car}</span>
    </div>
  </div>`).join('\n');

  const tiles = p.qty.map((q, i) => `      <label class="qt${i === 0 ? ' sel' : ''}">
        ${q.save ? `<span class="save">${q.save}</span>` : ''}
        <input type="radio" name="qty" value="${q.p}" data-u="${q.u}"${i === 0 ? ' checked' : ''}>
        <img src="${p.gallery[0][0].startsWith('products') ? 'assets/img/' + p.gallery[0][0] : 'assets/img/' + p.gallery[0][0]}" alt="" loading="lazy">
        <b>${q.n}</b>
        <span>${q.s}</span>
        <span class="u">€${q.p}${q.was ? ` <s style="color:var(--fg-muted)">€${q.was}</s>` : ''}<br>${q.u}</span>
      </label>`).join('\n');

  return head({
    title: p.title, meta: p.meta, navKey: p.navKey,
    ogTitle: `${p.name} · SAFA Nutrition`, ogType: 'product',
  }) + `
<main class="wrap">

<p class="crumbs"><a href="index.html">Home</a> · <a href="index.html#shop">Shop</a> · <span>${p.name}</span></p>

<div class="pdp">
  <div class="gal">
    <div class="main">
      <img id="galmain" src="assets/img/${p.gallery[0][0]}" alt="${p.name} — ${p.gallery[0][1]}" width="900" height="1117">
      ${p.preorder ? '' : `<span class="pins" aria-hidden="true">
${pins}
      </span>`}
      <span class="vsfoot">${p.vsfoot}</span>
    </div>
    ${p.preorder ? '' : `<div class="pinlist" aria-hidden="true">
${p.kit.map(([n, v]) => `      <span><span class="n">${n}</span><s>€${v}</s><b>Free</b></span>`).join('\n')}
    </div>`}
    <div class="strip">
${p.gallery.map((g, i) => `      <button type="button" class="galthumb${i === 0 ? ' sel' : ''}" data-img="assets/img/${g[0]}"><img src="assets/img/${g[0]}" alt="${g[1]}" loading="lazy"></button>`).join('\n')}
    </div>
  </div>

  <div>
    ${p.preorder ? `<p class="vstrip pending">
      ${I.doc}
      <b>Batch ${p.batch} — not yet tested</b>
      <span class="sep">·</span>
      <span>its report publishes before the first unit sells</span>
      <span class="sep">·</span>
      <a href="index.html#proof">How we publish</a>
    </p>` : `<p class="vstrip">
      ${I.shield}
      <b>Batch ${p.batch} verified</b>
      <span class="sep">·</span>
      <span>tested ${p.tested}</span>
      <span class="sep">·</span>
      <a href="index.html#proof">Read the lab report</a>
    </p>`}

    <div class="pdphead">
      <p class="flag">${p.flag}</p>
      <h1>${p.h1}</h1>
      <p class="cat">${p.cat}</p>
      <a class="nutlink" href="#nutrition">Nutritional information ${I.arrow}</a>
    </div>

    <ul class="bul">
${p.bullets.map(([ic, t]) => `      <li>${I[ic]}<span>${t}</span></li>`).join('\n')}
    </ul>

${pickers}

    <div class="qty">
      <span class="lab">Quantity — save more</span>
      <div class="qtiles">
${tiles}
      </div>
    </div>

    ${p.preorder ? `<div class="pre">
      <p class="lab">Availability</p>
      <div class="prebox">
        <b>Wave 2 — not yet shipping</b>
        <span>This batch is still in production. Its lab report goes live before a single jar is sold, and we will email you the day it does. Nothing is charged now.</span>
      </div>
    </div>` : `<div class="freq">
      <span class="lab">Frequency</span>

      <label class="plan sel" id="planSub">
        <input type="radio" name="freq" value="plan" checked>
        <span class="ph">
          <span class="dot"></span>
          <span class="ttl">Flexible plan</span>
          <span class="best">Best value</span>
        </span>
        <span class="free">+ Free starter kit &amp; free shipping</span>
        <span class="pr"><s>€${base}</s> <b id="planPr">€${planPrice}</b> <span class="per" id="planPer">${p.qty[0].u}</span></span>

        <span class="incl">
          <b>Includes:</b>
          <span class="row"><span class="n base">${p.name}</span><span class="f">€${planPrice}</span></span>
${p.kit.map(([n, v]) => `          <span class="row"><span class="n">${n}</span><s>€${v}</s><span class="f">Free</span></span>`).join('\n')}
          <span class="row"><span class="n">EU delivery</span><s>€5.95</s><span class="f">Free</span></span>
        </span>

        <span class="reass">
          <span>${I.check}No commitment</span>
          <span>${I.check}15% off every order</span>
          <span>${I.check}Skip or cancel anytime</span>
          <span>${I.check}Kit worth €${kitTotal}</span>
        </span>
      </label>

      <label class="plan" id="planOnce">
        <input type="radio" name="freq" value="once">
        <span class="ph">
          <span class="dot"></span>
          <span class="ttl">One-time purchase</span>
        </span>
        <span class="pr"><b>€${base}</b> <span class="per">${p.qty[0].u}</span></span>
      </label>
    </div>
    `}
    <div class="buy">
      <button class="addcart" type="button" data-add="${p.name}">${p.preorder ? 'Notify me when it ships' : `Add to cart — €${planPrice}`}</button>
      ${p.preorder
        ? `<p class="deliv">No payment taken · we email once batch ${p.batch} clears its lab report</p>`
        : `<p class="deliv">Delivered on <b id="delivDate">—</b> with tracked EU shipping</p>`}
    </div>

    <p class="pblurb">${p.blurb}</p>

    <div class="assay" id="nutrition">
      <div class="ah">${p.assayHead} <span>independently verified</span></div>
      <table>
${p.assay.map(([k, v, ok]) => `        <tr><td>${k}</td><td${ok ? ' class="pass"' : ''}>${v}</td></tr>`).join('\n')}
      </table>
      <p class="note">${p.assayNote}</p>
    </div>

    <div class="acc">
${p.acc.map(([t, body, open]) => `      <details${open ? ' open' : ''}>
        <summary>${t}</summary>
        <div class="a">${body}</div>
      </details>`).join('\n')}
    </div>
  </div>
</div>
</main>

<section class="wrap" aria-labelledby="ing-h" style="padding-top:0">
  <p class="kick">What's actually in it</p>
  <h2 id="ing-h">Ingredients, <em>and what we can prove.</em></h2>
  <p class="secsub">${p.ingNote || "Claims here use EFSA-authorised wording only. Where a benefit isn't authorised, we don't imply it — we publish the number instead."}</p>
  ${ingredientGrid(p.ing)}
</section>
${p.cmp ? `
<section class="wrap" aria-labelledby="cmp-h" style="padding-top:0">
  <p class="kick">The honest comparison</p>
  <h2 id="cmp-h">${p.cmp.h}</h2>
  <div class="cmp" tabindex="0" role="region" aria-label="How ${p.name} compares">
  <table>
    <tr>${p.cmp.cols.map((c, i) => `<th scope="col"${i === 3 ? ' class="safa"' : ''}>${c}</th>`).join('')}</tr>
${p.cmp.rows.map(r => `    <tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="safa"><span class="y">✓</span> ${r[3]}</td></tr>`).join('\n')}
  </table>
  </div>
</section>` : ''}
${p.film ? `
<section class="film wrap" aria-labelledby="film-h" style="padding-top:0">
  <p class="kick">On record</p>
  <h2 id="film-h">${p.film.h}</h2>
  <video class="filmone" controls muted loop playsinline preload="metadata" poster="${p.film.poster}" src="${p.film.src}" aria-label="${p.film.alt}"></video>
</section>` : ''}
${p.film2 ? `
<section class="film wrap" aria-labelledby="film-h" style="padding-top:0">
  <p class="kick">On record</p>
  <h2 id="film-h">${p.film2.h}</h2>
  <div class="filmgrid film2">
${p.film2.items.map(([src, poster, alt]) => `    <video controls muted loop playsinline preload="metadata" poster="${poster}" src="${src}" aria-label="${alt}"></video>`).join('\n')}
  </div>
</section>` : ''}

<section class="wrap" aria-labelledby="also-h" style="padding-top:0">
  <p class="kick">${p.also.kick}</p>
  <h2 id="also-h">${p.also.h}</h2>
  ${shelf(p.also.items)}
</section>
${signup}${foot}
<script>
${pageJs(p)}
</script>
</body>
</html>
`;
}

/* ---------------- client script ---------------- */
function pageJs(p) {
  return `addEventListener('load',()=>document.body.classList.add('loaded'));
${navJs}

/* email capture — demo only, no ESP wired yet */
(function(){
  var f=document.querySelector('.signform'); if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var i=f.querySelector('input'), v=(i.value||'').trim();
    var ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    i.setAttribute('aria-invalid', ok?'false':'true');
    var t=document.querySelector('.toast'); if(!t) return;
    t.textContent = ok ? 'Thank you — we will write once, at launch (demo)' : 'That email address does not look right';
    t.classList.add('show'); clearTimeout(window.__st);
    window.__st=setTimeout(function(){t.classList.remove('show')},2600);
    if(ok) i.value='';
  });
})();

/* delivery date — next working day + 2 */
(function(){
  var el=document.getElementById('delivDate'); if(!el) return;
  var d=new Date(); d.setDate(d.getDate()+2);
  while(d.getDay()===0||d.getDay()===6) d.setDate(d.getDate()+1);
  var day=d.getDate(), s=(day%10==1&&day!=11)?'st':(day%10==2&&day!=12)?'nd':(day%10==3&&day!=13)?'rd':'th';
  el.textContent=d.toLocaleDateString('en-GB',{weekday:'long'})+' '+day+s+' '+d.toLocaleDateString('en-GB',{month:'long'});
})();

/* buy box */
var BASE=${JSON.stringify(p.qty.map(q => ({ p: q.p, u: q.u })))};
var tiles=[].slice.call(document.querySelectorAll('.qt'));
var plans=[].slice.call(document.querySelectorAll('.plan'));
var PRE=${p.preorder ? 'true' : 'false'};
var addBtn=document.querySelector('.addcart');
var planPr=document.getElementById('planPr'), planPer=document.getElementById('planPer');
var extra=0;

function money(n){return '€'+n}
function refresh(){
  var i=tiles.findIndex(function(t){return t.querySelector('input').checked});
  if(i<0) i=0;
  tiles.forEach(function(t,n){t.classList.toggle('sel',n===i)});
  var checked=document.querySelector('.plan input:checked');
  var onPlan=!!checked&&checked.value==='plan';
  plans.forEach(function(pl){pl.classList.toggle('sel',pl.querySelector('input').checked)});
  var base=BASE[i].p;
  var sub=Math.round(base*0.85);
  if(planPr) planPr.textContent=money(sub);
  if(planPer) planPer.textContent=BASE[i].u;
  if(PRE){ addBtn.textContent='Notify me when it ships'; return; }
  var total=(onPlan?sub:base)+extra;
  addBtn.textContent='Add to cart — '+money(total);
}
tiles.forEach(function(t){t.querySelector('input').addEventListener('change',refresh)});
plans.forEach(function(pl){pl.querySelector('input').addEventListener('change',refresh)});

/* pickers — swap preview, description and any add-on price */
[].slice.call(document.querySelectorAll('.pickbox select')).forEach(function(sel){
  var i=sel.dataset.pick;
  sel.addEventListener('change',function(){
    var o=sel.options[sel.selectedIndex];
    var pv=document.getElementById('pv'+i), pd=document.getElementById('pd'+i);
    if(pv) pv.src=o.dataset.img;
    if(pd) pd.textContent=o.dataset.desc;
    extra=0;
    [].slice.call(document.querySelectorAll('.pickbox select')).forEach(function(s){
      var op=s.options[s.selectedIndex];
      extra+=parseInt(op.dataset.price||0,10);
    });
    refresh();
  });
});

/* gallery */
var main=document.getElementById('galmain');
[].slice.call(document.querySelectorAll('.galthumb')).forEach(function(t){
  t.addEventListener('click',function(){
    main.src=t.dataset.img;
    document.querySelectorAll('.galthumb').forEach(function(x){x.classList.toggle('sel',x===t)});
  });
});

/* toast */
var toast=document.querySelector('.toast'),tt;
addBtn.addEventListener('click',function(){
  toast.textContent=PRE?${JSON.stringify(p.name)}+' — we will email you when it ships (demo)':${JSON.stringify(p.name)}+' — added to cart (demo)';
  toast.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('show')},2200);
});
refresh();`;
}

/* ---------------- homepage ---------------- */
function home() {

  return head({
    title: 'SAFA Nutrition — Sidr honey, halal collagen & black seed, sold with their papers',
    meta: 'Wild Yemeni Sidr honey, halal marine collagen and cold-pressed black seed oil — single named origins, third-party lab reports published per batch.',
    ogTitle: 'SAFA Nutrition — an honest house for ancient goods',
    navKey: 'Shop all',
  }) + `
<header class="hero">
  <div class="hleft">
    <p class="est">SAFA Nutrition · Amsterdam · Est. 2026</p>
    <h1>An honest house for <em class="inkline">ancient</em> goods.</h1>
    <p class="lead">Sidr honey from one wadi in Yemen. Marine collagen hydrolysed to a stated weight. Black seed pressed cold and measured. Sold with the paperwork — the way it should have always been done.</p>
    <div class="cta">
      <a class="btn" href="#shop">Shop all</a>
      <a class="btn line" href="#proof">See a lab report</a>
    </div>
  </div>
  <div class="hright">
    <div class="hart">
      <figure class="heroplate">
        <img class="heroshot" src="assets/img/10-life-honey.jpg" width="1600" height="1000"
             alt="Raw Wadi Do'an Sidr honey drizzled from a dipper, the 250 g jar beside it">
        <figcaption class="herodoc">
          <span class="hd-h"><b>CERTIFICATE OF ANALYSIS</b><span>Batch SF-25-011</span></span>
          <span class="hd-r"><span>Pollen analysis</span><b class="ok">Ziziphus — monofloral</b></span>
          <span class="hd-r"><span>C4 sugars · NMR</span><b class="ok">none detected</b></span>
          <span class="hd-r"><span>Antibiotic panel</span><b class="ok">none detected</b></span>
          <span class="hd-r"><span>HMF · moisture</span><b>4.2 mg/kg · 16.8%</b></span>
          <span class="hd-f">Published before this batch went on sale.</span>
        </figcaption>
      </figure>
    </div>
    <div class="hstats">
      <div><b>№ 011</b><span>batches published</span></div>
      <div><b>1 wadi</b><span>single named origin</span></div>
      <div><b>0 claims</b><span>we can't paper-prove</span></div>
    </div>
  </div>
</header>

${propsStrip()}

<main>

<section id="best" class="wrap" aria-labelledby="best-h">
  <div class="seclead">
    <div>
      <p class="kick">Best sellers</p>
      <h2 id="best-h">One dose, <em>four ways.</em></h2>
      <p class="secsub">The same certified Type I collagen — unflavoured, or already inside the cup you pour anyway.</p>
    </div>
    <a class="more" href="#shop">See the whole range →</a>
  </div>
  <div class="bgrid">
${bestsellers.map(({slug, flavour, per, tag, amber}) => { const c = catalogue[slug]; return `    <a class="bcard" href="${c.href}">
      <span class="bshot">${tag ? `<span class="btag${amber ? ' amber' : ''}">${tag}</span>` : ''}<img src="${c.img}" alt="${c.name}" loading="lazy"></span>
      <span class="bflav">${flavour}</span>
      <b>${c.name}</b>
      <span class="bmeta">From ${c.pr} <span>· ${per}</span></span>
      <span class="bbtn">Shop now</span>
    </a>`; }).join('\n')}
  </div>
</section>

<section id="shop" class="wrap" aria-labelledby="shop-h">
  <div class="seclead">
    <div>
      <p class="kick">The range</p>
      <h2 id="shop-h">Three goods, sold <em>with their papers.</em></h2>
      <p class="secsub">The classic never leaves the shelf. Around each one sit the formats that make it fit an actual morning — a stick instead of a spoon, a sachet instead of a scoop, the cup you already pour.</p>
    </div>
    <a class="more" href="morning-ritual.html">See bundles &amp; kits →</a>
  </div>

${families.map(f => {
  const c = catalogue[f.classic], k = classics[f.classic];
  return `  <div class="fam" id="fam-${f.id}">
    <a class="pcard classic" href="${c.href}">
      <span class="tag${k.amber ? ' amber' : ''}">${k.tag}</span>
      <span class="shot"><img src="${c.img}" alt="${c.name}" loading="lazy"></span>
      <span class="body">
        <span class="cat">${k.cat}</span>
        <h3>${c.name}</h3>
        <span class="desc">${k.desc}</span>
        <span class="facts">${k.facts.map(([t, ok]) => `<i${ok ? ' class="ok"' : ''}>${t}</i>`).join('')}</span>
        <span class="foot">
          <span class="price">${k.pr}<span class="per">${k.per}</span></span>
          <span class="go">Shop →</span>
        </span>
      </span>
    </a>
    <div class="formats">
      <p class="flabel"><b>Also as</b><span>${f.line}</span></p>
      <div class="frow" style="--n:${f.formats.length}">
${f.formats.map(sl => { const x = catalogue[sl]; return `        <a class="fcard" href="${x.href}">
          <span class="fshot">${formatTag[sl] ? `<span class="ftag">${formatTag[sl]}</span>` : ''}<img src="${x.img}" alt="${x.name}" loading="lazy"></span>
          <b>${x.name}</b>
          <span class="fspec">${formatSpec[sl]}</span>
        </a>`; }).join('\n')}
      </div>
    </div>
  </div>`; }).join('\n')}
</section>

<section class="wrap" aria-labelledby="ing-h">
  <p class="kick">What's actually in it</p>
  <h2 id="ing-h">Ingredients, <em>and what we can prove.</em></h2>
  <p class="secsub">Claims here use EFSA-authorised wording only. Where a benefit isn't authorised, we don't imply it — we publish the number instead.</p>
  ${ingredientGrid(houseIngredients)}
</section>

<section id="proof" class="plate" aria-labelledby="proof-h">
  <div class="wrap inner">
    <div>
      <p class="kick">Lab reports</p>
      <h3 class="pl" id="proof-h">Every batch is <em>published before it sells.</em></h3>
      <p class="body">Not a certificate on request. Not one PDF from 2023. Each batch goes to an accredited laboratory, and the results go online before a single unit is sold — pass or fail, in full, with the batch number printed on the pack.</p>
      <div class="steps">
        <div class="st"><i>1</i><span><b>The batch is made</b>One wadi, one press, one hydrolysis run — never blended after the fact.</span></div>
        <div class="st"><i>2</i><span><b>An accredited lab tests it</b>ISO 17025. Origin, purity, adulteration, contaminants, freshness.</span></div>
        <div class="st"><i>3</i><span><b>The report goes online</b>Published on the batch page — before the batch is listed for sale.</span></div>
        <div class="st"><i>4</i><span><b>The pack carries the QR</b>Scan any jar, pouch or bottle and read its own paperwork.</span></div>
      </div>
    </div>
    <div class="doc">
      <div class="dh"><b>CERTIFICATE OF ANALYSIS</b><span>Batch SF-25-011</span></div>
      <table>
        <tr><td>Pollen analysis</td><td class="pass">Ziziphus — monofloral</td></tr>
        <tr><td>C4 sugars</td><td class="pass">none detected</td></tr>
        <tr><td>NMR profile</td><td class="pass">consistent with raw honey</td></tr>
        <tr><td>Antibiotic panel (LC-MS/MS)</td><td class="pass">none detected</td></tr>
        <tr><td>HMF</td><td>4.2 mg/kg</td></tr>
        <tr><td>Diastase</td><td>16.4 DN</td></tr>
        <tr><td>Moisture</td><td>16.8%</td></tr>
      </table>
      <div class="dfoot">
        <svg class="qr" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" fill="none"/><g fill="#26201A"><rect x="2" y="2" width="10" height="10"/><rect x="4" y="4" width="6" height="6" fill="#FFF"/><rect x="5.5" y="5.5" width="3" height="3"/><rect x="28" y="2" width="10" height="10"/><rect x="30" y="4" width="6" height="6" fill="#FFF"/><rect x="31.5" y="5.5" width="3" height="3"/><rect x="2" y="28" width="10" height="10"/><rect x="4" y="30" width="6" height="6" fill="#FFF"/><rect x="5.5" y="31.5" width="3" height="3"/><rect x="16" y="4" width="2" height="2"/><rect x="20" y="4" width="2" height="2"/><rect x="18" y="8" width="2" height="2"/><rect x="22" y="10" width="2" height="2"/><rect x="16" y="14" width="2" height="2"/><rect x="26" y="16" width="2" height="2"/><rect x="30" y="18" width="2" height="2"/><rect x="34" y="22" width="2" height="2"/><rect x="20" y="20" width="2" height="2"/><rect x="24" y="24" width="2" height="2"/><rect x="28" y="28" width="2" height="2"/><rect x="32" y="32" width="2" height="2"/><rect x="18" y="30" width="2" height="2"/><rect x="22" y="34" width="2" height="2"/><rect x="16" y="24" width="2" height="2"/><rect x="30" y="12" width="2" height="2"/></g></svg>
        <span>Decorative pattern — real per-batch QR codes are generated at production. Placeholder values throughout until supplier COAs exist.</span>
      </div>
    </div>
  </div>
</section>

<section id="halal" class="wrap" aria-labelledby="halal-h" style="padding-top:0">
  <div class="halal">
    <div>
      <p class="kick">Halal certification</p>
      <h2 id="halal-h">The seal goes on <em>when the paper does.</em></h2>
      <p class="secsub">Every competitor in this category prints the word. Most cannot name the body that granted it, and none publish the certificate. We are doing it in the other order: certification first, then the word, then the seal \u2014 with the body and the number printed on the pack so you can check it yourself.</p>
      <div class="steps" style="margin-top:22px">
        <div class="st"><i>1</i><span><b>Marine by design</b>The collagen is fish-derived and the softgel shell with it \u2014 the lowest-friction position on the question, taken deliberately.</span></div>
        <div class="st"><i>2</i><span><b>Certification in progress</b>Scope and quote stage with a Dutch certifying body. No word, no seal, no claim until it is on file.</span></div>
        <div class="st"><i>3</i><span><b>Published when granted</b>Body, certificate number and expiry go on the pack and on this page, the same week they arrive.</span></div>
      </div>
    </div>
    <figure class="certframe">
      <div class="cf-in">
        <span class="cf-chip">Awaiting certificate</span>
        <span class="cf-mark" aria-hidden="true">\u062D\u0644\u0627\u0644</span>
        <span class="cf-note">Reserved for the halal certificate</span>
        <span class="cf-rows">
          <span><b>Certifying body</b><i>to be published</i></span>
          <span><b>Certificate \u2116</b><i>to be published</i></span>
          <span><b>Valid until</b><i>to be published</i></span>
        </span>
      </div>
      <figcaption>This frame stays empty until the document exists. It is the only honest thing to put here.</figcaption>
    </figure>
  </div>
</section>

<section class="wrap film" aria-labelledby="film-h">
  <p class="kick">The house, filmed</p>
  <h2 id="film-h">Every product, <em>in one reel.</em></h2>
  <p class="secsub">Thirty-four seconds: the honey, the sticks, the collagen and its three rituals, the black seed, the whole family.</p>
  <video class="filmone" style="max-width:none" controls muted loop playsinline preload="metadata" poster="assets/img/08-family-lineup.jpg" src="assets/video/safa-film.mp4" aria-label="SAFA Nutrition promotional film — the full product range"></video>
</section>

<section id="kits" class="wrap" aria-labelledby="gift-h" style="padding-top:0">
  <p class="kick">Kits &amp; gifting</p>
  <h2 id="gift-h">Where to start, <em>and what to give.</em></h2>
  <p class="secsub">Two boxes that cross the whole house — one to find out which of the three you actually keep doing, one to hand to somebody else.</p>
  <div class="shelf two">
${['morning-ritual', 'tasting-flight'].map(sl => { const c = catalogue[sl]; return `    <a class="scard" href="${c.href}">
      <span class="flag">${c.flag}</span>
      <span class="art"><img src="${c.img}" alt="${c.name}" loading="lazy"></span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="pr">${c.pr} <small>${c.note}</small></span>
    </a>`; }).join('\n')}
  </div>
</section>

<section id="origin" class="wrap" aria-labelledby="prov-h">
  <div class="prov">
    <figure class="fig">
      <img src="assets/img/10-life-honey.jpg" alt="Sidr honey drizzled from a dipper over labneh" loading="lazy">
      <figcaption>Wadi Do'an, Hadhramaut — the autumn Sidr flowering, harvest 2025.</figcaption>
    </figure>
    <div class="txt">
      <p class="kick">Where it comes from</p>
      <h2 id="prov-h">A valley, <em>not a country.</em></h2>
      <p>Most "Yemeni Sidr" on the European market names a country and stops there. A country is not a provenance — Yemen is nine hundred kilometres of different valleys, different flowerings and very different honey.</p>
      <p class="mut">Ours comes from one wadi, harvested at one flowering, and the pollen analysis on every batch is what turns that claim into a fact you can check. The same discipline runs through the house: a named species and molecular weight for the collagen, a named seed origin and a measured thymoquinone percentage for the black seed.</p>
      <div class="footnote"><b>The rule we hold ourselves to:</b> if we cannot show you the document, we do not print the claim. No halal seal until a named body and certificate number are on file. No review counts we haven't earned. No press logos we haven't been in.</div>
      <p class="arline" lang="ar" dir="rtl">صفا — نقاء يُتتبَّع إلى مصدره</p>
    </div>
  </div>
</section>

<section class="wrap" aria-labelledby="faq-h" style="padding-top:0">
  <p class="kick">Questions</p>
  <h2 id="faq-h">The things worth <em>asking.</em></h2>
  <div class="faq" style="margin-top:32px">
    <details open>
      <summary>Is SAFA halal certified?</summary>
      <div class="a">Certification is in progress. Until a named certifying body and certificate number are on file, we will not print the word or the seal on a pack — and we will publish both when they are. The marine collagen is fish-derived by design, which is the lowest-friction position on the question.</div>
    </details>
    <details>
      <summary>Why is the honey more expensive than supermarket honey?</summary>
      <div class="a">Because a monofloral, single-wadi, raw honey with a per-batch pollen analysis and adulteration screen is a different product from a blend. The comparison table on the honey page sets the two side by side, line by line.</div>
    </details>
    <details>
      <summary>What exactly comes free with a plan?</summary>
      <div class="a">Each product has a starter kit — the dipper and tasting spoon for honey, the beaker and dosing spoon for collagen, the chasen and bowl for matcha — plus the printed batch booklet and free EU delivery. It ships once, with your first order. Skip, pause or cancel at any time; nothing is clawed back.</div>
    </details>
    <details>
      <summary>Can I read a lab report before I buy?</summary>
      <div class="a">That's the point of publishing them first. Every batch page goes live before the batch is listed, and the QR on every pack links to the one that batch was tested under.</div>
    </details>
    <details>
      <summary>Do you ship outside the EU?</summary>
      <div class="a">EU-wide today, dispatched from Amsterdam, free over €55. UK and Gulf are the next markets — the labelling and certification work for both is underway.</div>
    </details>
  </div>
</section>

</main>
${signup}${foot}
<script>
addEventListener('load',()=>document.body.classList.add('loaded'));
${navJs}
/* email capture — demo only, no ESP wired yet */
(function(){
  var f=document.querySelector('.signform'); if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var i=f.querySelector('input'), v=(i.value||'').trim();
    var ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    i.setAttribute('aria-invalid', ok?'false':'true');
    var t=document.querySelector('.toast'); if(!t) return;
    t.textContent = ok ? 'Thank you — we will write once, at launch (demo)' : 'That email address does not look right';
    t.classList.add('show'); clearTimeout(window.__st);
    window.__st=setTimeout(function(){t.classList.remove('show')},2600);
    if(ok) i.value='';
  });
})();
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.pcard,.doc,.rule').forEach(function(el){io.observe(el)});
}else{
  document.querySelectorAll('.pcard,.doc,.rule').forEach(function(el){el.classList.add('in')});
}
var toast=document.querySelector('.toast');
</script>
</body>
</html>
`;
}

/* ---------------- render ---------------- */
writeFileSync(join(OUT, 'index.html'), home());
console.log('✓ index.html');
for (const p of products) {
  writeFileSync(join(OUT, p.file), pdp(p));
  console.log('✓ ' + p.file);
}
console.log('\nBuilt ' + (products.length + 1) + ' pages.');
