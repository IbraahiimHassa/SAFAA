# SAFAA — SAFA Nutrition brand & ecommerce design

Halal wellness house: wild Yemeni Sidr honey, halal marine collagen, cold-pressed black
seed oil. Positioning: **proof as product** — single named origins, per-batch published
lab reports, halal certification shown with body + number or not claimed at all.

## What's here

| Path | Contents |
|---|---|
| `docs/01-competitor-teardown.md` | Reformed / Balqees / Sunna teardown + where SAFA wins |
| `docs/02-product-strategy.md` | Product ladders, new-format companions, pricing & AOV mechanics, launch waves |
| `docs/03-supplier-qc-specs.md` | Procurement-grade QC specs per ingredient (send to suppliers) |
| `docs/04-shopify-build-plan.md` | Mapping the design onto Shopify (theme, sections, metaobjects, apps) |
| `brand/` | Brand guidelines (original concept HTML) + production logo SVGs |
| `packaging/` | Label/box SVGs per SKU + packaging system spec |
| `site/` | The shipped design: static homepage + Sidr honey PDP ("Apothecary Ledger" direction), with AI-generated product photography + promo film. **Vercel-ready:** import the repo, keep root directory as-is — `vercel.json` serves `site/` |

Open `site/index.html` in a browser to view the design. Verified: axe-core 0 violations
(WCAG 2.0 A/AA), no horizontal overflow at 375/768/1024/1440, no console errors, no-JS
fallback for all scroll animations, `prefers-reduced-motion` respected.

## Design direction (decided by design-critic jury, 2026-08-11)

**"Apothecary Ledger"** — paper ground, single espresso ink, sidr-amber accent;
Newsreader / Archivo / Amiri; products presented as a numbered index table with inline
assay data; the certificate of analysis rendered as a physical document. Runner-up
(over-ridable): "Batch Ledger" — same proof modules on a deep-green drenched ground.
Direction mockups for both live in the session archive; the jury scorecard is in the
design reference card (`website-designer-agent` repo).

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
| Product photography & film (`site/assets/img`, `site/assets/video`) | site, docs | **AI-generated concept visuals** (Higgsfield: nano-banana-pro images, Seedance clips) from our real label designs — replace with studio photography of actual production packs before launch; some generated pack text carries small AI typos |

No testimonial, award, review count or certification is invented anywhere on the site —
the trust architecture is built to be filled with real documents, not to fake them.
