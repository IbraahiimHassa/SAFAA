# SAFAA — SAFA Nutrition brand & ecommerce design

Halal wellness house: wild Yemeni Sidr honey, halal marine collagen, cold-pressed black
seed oil. Positioning: **proof as product** — single named origins, per-batch published
lab reports, halal certification shown with body + number or not claimed at all.

## What's here

| Path | Contents |
|---|---|
| `docs/00-session-handover.md` | **Start here in a new session** — state of play, decisions, placeholders, next moves |
| `docs/01-competitor-teardown.md` | Reformed / Balqees / Sunna teardown + where SAFA wins |
| `docs/02-product-strategy.md` | Product ladders, new-format companions, pricing & AOV mechanics, launch waves |
| `docs/03-supplier-qc-specs.md` | Procurement-grade QC specs per ingredient (send to suppliers) |
| `docs/04-shopify-build-plan.md` | Mapping the design onto Shopify (theme, sections, metaobjects, apps) |
| `brand/` | Brand guidelines (original concept HTML) + production logo SVGs |
| `packaging/` | Label/box SVGs per SKU + packaging system spec |
| `build/` | The site generator — `data.mjs` (all copy, prices, specs) + `build.mjs` (templates). Run `node build/build.mjs` to regenerate every page in `site/` |
| `site/` | The shipped design: 8 generated HTML pages + one CSS design system, with AI-generated product photography + promo film. **Vercel-ready:** import the repo, keep root directory as-is — `vercel.json` serves `site/` |

Open `site/index.html` in a browser to view the design. Verified: axe-core 0 violations
(WCAG 2.0 A/AA), no horizontal overflow at 375/768/1440, no console errors, no-JS
fallback for all scroll animations, `prefers-reduced-motion` respected.

**Edit content in `build/data.mjs`, never in `site/*.html`** — the HTML is generated and
any hand-edit is overwritten on the next build.

## Design direction (revised 2026-08-15)

Paper ground `#FBFAF6`, single espresso ink `#26201A`, sidr-amber accent `#8A5A17`;
Newsreader (display) / Archivo (data & labels) / Amiri (Arabic). The certificate of
analysis rendered as a physical document; ingredient marks drawn as SVG, never stock
photography.

**Page architecture follows feelreformed.com's conversion skeleton** — annotated value
shot, stacked pickers, quantity tiles, plan card with a free starter kit, accordions,
ingredient science grid — while the visual identity stays SAFA's own. The earlier
"Apothecary Ledger" *vocabulary* (index / ledger / folios / assay / the house) was
dropped on 2026-08-15: it made a metaphor do navigation's job and read as a catalogue of
manuscripts rather than a shop. The look it named is retained.

Two slots in the reference layout are deliberately filled differently, because the
reference fills them with claims we've forbidden ourselves:

| Reference site | SAFA |
|---|---|
| "4.7 by 118,281 reviews" (Trustpilot shows a few hundred) | A batch verification strip: batch №, test date, link to the report |
| "As Seen In" press-logo row | Omitted until we have actually been in the press |

## ⚠ Real-content manifest (replace before anything ships)

Everything visual is real (SVG art, no stock, no placeholders). These **data points are
PLACEHOLDER** until real documents exist — each is marked in-file with plausible-but-fake
values and must be replaced with genuine records:

| Item | Where | Status |
|---|---|---|
| Batch numbers (SF-25-0xx) & all assay values (HMF 4.2, TQ 2.1%, moisture 16.8%, protein ≥90%…) | site pages, packaging SVGs | PLACEHOLDER — from real COAs per batch |
| Lab names (QSI Bremen mentioned in docs) | docs, QC specs | Intended partner — no engagement yet |
| Halal certifier + certificate № (HC-2026-0417 in mockups) | mockups only; live site copy already says "when on file" | PLACEHOLDER — obtain certification first |
| "№ 011 batches published / 1 wadi / 0 claims" hero stats | site/index.html | PLACEHOLDER counts — wire to real batch count at launch |
| Prices (€49/€39/€29 etc.) | site, docs | Proposed targets from competitive analysis — confirm margins |
| QR codes in SVGs | site + packaging | Decorative pattern — generate real QRs per batch page |
| Wadi Do'an sourcing, harvest year, "300 numbered jars" | site, packaging | Matches strategy intent — confirm against actual supplier contract |
| Reviews/testimonials | none shown anywhere | Deliberate: no fake social proof, collect real reviews from day one |
| Free-with-a-plan starter kits (dipper €14, chasen €22, dallah €29, frother €19…) | `build/data.mjs` → `kits`, shown on every PDP | **PLACEHOLDER accessory values** — proposed sourcing costs, never quoted. Confirm unit cost + landed shipping before this mechanic goes live; it is the largest single COGS commitment on the site |
| Product photography & film (`site/assets/img`, `site/assets/video`) | site, docs | **AI-generated concept visuals** (Higgsfield) from our real label designs — replace with studio photography of actual production packs before launch |
| `site/assets/video/safa-family.mp4` (also inside `safa-film.mp4`) | homepage film | Still carries the **old pack text** including "soffron" on the qahwa pouch. Not legible at playback size, but reshoot with real product before launch |
| Ingredient photography (`site/assets/img/ingredients`) | ingredient grids | AI-generated to a single spec. Deliberately contains **no text**, so nothing to mis-render — but they are illustrations of the ingredient, not photographs of our actual supply |
| Ritual glassware (`site/assets/img/ritual`) | homepage shelf, collagen galleries | AI-generated. Glassware is **deliberately unbranded** — printing a logo on it would reintroduce the AI-text problem |

No testimonial, award, review count or certification is invented anywhere on the site —
the trust architecture is built to be filled with real documents, not to fake them.
