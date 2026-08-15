# SAFA — Session Handover (2026-08-14)

Read this first in a new session. It says what exists, what's decided, what's fake,
and what to do next. Everything below is committed on branch
`claude/halal-wellness-ecommerce-adg9xs` across three repos.

## The one-paragraph brief

SAFA Nutrition is a halal wellness house launching in the EU (Amsterdam, NL market first)
with wild Yemeni Sidr honey, halal marine collagen and cold-pressed black seed oil.
The positioning is **proof as product**: single named origins, per-batch lab reports
published *before* the batch sells, and the word "halal" printed only with a named
certifying body and certificate number. The strategy adopts Reformed's
(feelreformed.com) architecture wholesale — the classic never disappears, modern
formats surround it — and beats Balqees on halal identity + subscriptions while
beating Sunna on materials, design and published proof.

## Repos and branches (all on `claude/halal-wellness-ecommerce-adg9xs`)

| Repo | Contains |
|---|---|
| **IbraahiimHassa/SAFAA** | Everything for the brand: docs, packaging SVGs, the website, all media |
| **IbraahiimHassa/LogoDesign** | Concept 025 — the SAFA "Source" mark with construction rationale |
| **IbraahiimHassa/website-designer-agent** | Reference cards: feelreformed + balqees (inbound), safa-ledger (outbound), PROVEN-PIECES rows |

## What exists in SAFAA

```
docs/     00 handover (this) · 01 competitor teardown · 02 product strategy
          03 supplier QC specs · 04 Shopify build plan
brand/    brand-guidelines.html (original concept) + logo/ production SVGs
packaging/ 20+ label SVGs: fronts, backs, pouches, variation packs + README (print spec)
site/     8 HTML pages, one CSS design system, all photography + film — Vercel-ready
social/   4 vertical 9:16 reels for TikTok/Instagram
TASKS.md  the live to-do list
```

### The website (8 pages, all verified)
`index.html` (homepage) · `product.html` (Sidr honey) · `marine-collagen.html` ·
`collagen-coffee.html` · `collagen-matcha.html` · `qahwa-collagen.html` ·
`black-seed-oil.html` · `sidr-sticks.html`

Every product page follows the same pattern: front/back click-to-swap gallery,
assay card above the buy box, 1/2/3 price ladder with live price updates and a
Subscribe & Save 15% toggle, ledger accordions, an "On record" usage film, and a
cross-sell shelf. Verified across all 8 pages at 1440 and 375 px:
**0 horizontal overflow, 0 JS errors, 0 axe (WCAG 2.0 A/AA) violations, 0 broken images.**

### Media library (all AI-generated concept visuals — see the honesty section)
- **7 products × front + back** packshots in `site/assets/img/products/<slug>/`
- **5 variation packs** designed and shot: Daily Sachets (+ single sachet),
  Black Seed Softgels (+ macro), Black Seed Honey, Tasting Flight, Morning Ritual
- **6 usage stills** (`use.jpg` per product) + lifestyle scenes + family lineup
- **9 films (16:9)** in `site/assets/video/`: honey pour, qahwa morning, family sweep,
  collagen dissolve, coffee froth-pour, matcha whisk, softgels + water,
  black seed bottle sweep, honey stick into tea
- **4 reels (9:16)** in `social/`: collagen, coffee, matcha, sidr sticks

## Decisions already made (don't re-litigate)

1. **Design direction: "Apothecary Ledger"** — chosen by design-critic jury 25/30 over a
   green-drenched and a dark-cellar direction. Paper ground `#FBFAF6`, single espresso ink
   `#26201A`, sidr amber `#B97F24`/`#8A5A17`, pass-green `#2E6B3F`. Type: Newsreader
   (serif) + Archivo (data) + Amiri (Arabic), all OFL and self-hostable.
   Signature moves: products as a numbered **index table** (never card grids), the
   **COA rendered as a physical document**, roman folios, per-day pricing.
2. **Marine (fish) collagen, not bovine** — lowest-friction halal choice.
3. **Reformed's matrix adopted whole**: Collagen Coffee and Collagen Matcha run directly
   (their proven lanes), Qahwa + Collagen is the lane they can't follow. Black seed's
   companion format is **softgels** (1000 mg, halal-certified shell).
4. **Packaging**: two grounds, one family — classics on paper, companions on ink;
   printed ledger table + batch QR on every unit; the grade is front-of-pack
   (wadi + harvest year / TQ% / protein + MW).
5. **Claims discipline**: EFSA-authorised wording only, no halal seal before certification,
   no invented reviews or stats anywhere.

## ⚠ What is placeholder / fake (never ship as-is)

Full manifest is in `README.md`, but the critical ones:
- **All batch numbers (SF-25-0xx) and assay values** (HMF 4.2, TQ 2.1%, moisture 16.8%,
  protein ≥90%) — replace from real COAs.
- **Halal certifier + certificate №** — obtain certification first.
- **Prices** (€49/€39/€29 etc.) — competitive-analysis targets, not costed against COGS.
- **Hero stats** "№ 011 batches published" — wire to a real count.
- **QR codes** — decorative patterns; generate real ones per batch page.
- **All photography and film** — AI-generated from our real label designs. Good enough
  for concept, marketing and investor/supplier conversations; replace with studio
  photography of actual production packs before launch. Some generated pack text carries
  small AI typos (e.g. "arobica", "solvont-free") — the print files (SVGs) are correct.
- **"Add to cart"** is a demo toast — no checkout wired.

## Deployment

`vercel.json` sits at the repo root with `"outputDirectory": "site"`.
**Import SAFAA into Vercel with Root Directory = SAFAA (root)** — do not select `site/`,
or the config is missed. Framework preset "Other", no build command. Redeploy after any push.

## Where the work stands — next moves

**Blocked on Abramo (real-world, tracked in TASKS.md):**
- Send QC specs to honey suppliers + collagen/BSO white-label CMOs (docs/03 is the RFQ)
- Email halal certifier (Halal Correct / HQC) and QSI Bremen — longest lead times
- Trademark + domain check for "SAFA Nutrition"; confirm pricing against real COGS

**Delegable to Claude next session (pick any):**
1. **Pages for the kit/gift SKUs** — Daily Sachets, Softgels, Black Seed Honey,
   Tasting Flight, Morning Ritual (visuals already exist; pattern is established)
2. **NL + AR versions** with true RTL — the ledger/table design mirrors cleanly;
   Amiri is already in the stack
3. **Shopify port** per `docs/04` — batch metaobjects, real QR batch pages, selling plans
4. **More social content** — variants per product for a real content calendar;
   the macro oil-drop *video* failed twice (liquid-physics macro) and is worth retrying
5. **Per-product OG images** for link previews

## Tooling notes (saves time next session)

- Higgsfield: **nano_banana_pro** for stills (best label-text fidelity — always pass the
  rendered label SVG as an image reference), **seedance_2_0** for film (~54 credits/clip;
  pass `declined_preset_id: "24bae836-2c4a-48e0-89b6-49fcc0b21612"` or it returns a preset
  recommendation instead of submitting). Credits used across the project: ~840. Remaining: ~4,240.
- Label SVGs render to PNG via Playwright (`chromium-1194` in `/opt/pw-browsers/`), then
  upload → `media_confirm` → use as generation references.
- Verification script pattern: Playwright over all pages checking overflow, broken images,
  JS errors, and axe-core violations. Re-run it after any site change.
