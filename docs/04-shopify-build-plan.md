# SAFA — Shopify Build Plan

The static design in `site/` is the source of truth for look, copy and layout.
This maps it onto Shopify so the build is a port, not a reinvention.

## Theme strategy

**Recommended: buy one premium base theme and reskin it hard** — the same route Reformed
took (Vessel, customized) — rather than Dawn-with-CSS (Sunna's tell) or a full custom
theme at launch.

- Base candidates with editorial/serif-friendly bones and strong PDP flexibility:
  **Prestige**, **Ember**, or **Vessel**. Prestige is the closest starting point for the
  document-luxury register.
- Alternative if budget is tight at launch: Dawn as skeleton + the `site/` CSS ported into
  a `safa.css` — acceptable because our design is typography-and-hairlines, not
  JS-component-heavy. The tell is the layout, and we replace the layout.
- Fonts: self-host Newsreader, Archivo, Amiri as theme assets (`woff2`), all OFL. Do NOT
  use Shopify's font picker (no Newsreader/Amiri).

## Section map (homepage)

| Design section (site/index.html) | Shopify implementation |
|---|---|
| Announcement bar | Native announcement bar, one message, no rotation |
| Nav | Header section; "The Ledger" is a page link, not a collection |
| Specimen split hero + hstats strip | Custom section `hero-specimen` (image/SVG block + 3 stat blocks, schema-editable) |
| The Index (product ledger table) | Custom section `product-index`: blocks = product picker + 2 assay lines (metafields, see below) + price. Renders as table rows, NOT card grid |
| Companions shelf | Custom section `companion-shelf`: 4 product blocks with "COMPANION TO № _" label field |
| The Ledger proof plate + COA doc | Custom section `ledger-plate`; COA table rendered from the featured batch's metaobject |
| Provenance figure + editorial | Custom section `provenance-editorial` (rich text + figure image) |
| FAQ | Native collapsible-content section, restyled |
| Footer | Footer section + Arabic tagline block |

## PDP map (product.html)

| Design element | Shopify implementation |
|---|---|
| Assay card (batch table) | **Metaobject `batch`**: number, date, lab, rows[] of {parameter, value, pass?}, report PDF/URL. Product references current batch. This single structure powers PDP card, homepage COA plate, and the QR landing page |
| 1/2/3 jar ladder | Variants or a bundle app (Shopify Bundles is fine); "Most chosen" badge = variant metafield |
| Subscribe & Save 15% | Selling plan group via **Shopify Subscriptions** (free, sufficient at launch; upgrade to Recharge/Skio only when swap-per-cycle boxes are needed) |
| Accordions | Product metafields (origin, lab, enjoy, shipping) → collapsible rows |
| Honest comparison table | Section `honest-comparison`, editable rows |
| "From the same harvest" cross-sell | Section `companion-shelf` reused with product recommendations |

## The batch/QR system (the differentiator — build this properly)

1. Metaobject **`batch`** per production batch (fields above) + file upload of the COA PDF.
2. Page template `page.batch` rendering a batch by handle: `/pages/batch-sf-25-011`.
3. QR on every label points to that URL. Label data-merge pulls from the same metaobject
   so site and packaging can never disagree.
4. Halal certificate: metaobject `certificate` (body, number, expiry, scan PDF) —
   rendered on batch pages and the Ledger page ONLY when present and unexpired
   (the brand claims rule enforced in Liquid, not in memory).

## Apps (lean stack)

- Shopify Subscriptions (selling plans)
- Judge.me or Okendo for reviews — **collect from day one, show only real counts** (the
  anti-Sunna/anti-Reformed proof discipline)
- Shopify Bundles (kits: Morning Ritual, Tasting Flight)
- Loyalty (later, wave 2+): Smile or Rivo, auto-enrolled points per €1, Eid + birthday bonuses
- No scratch-card/gamification popups, no countdown timers, no shipping-protection upsell — ever

## Markets & languages

- Markets: NL first, EU shipping zone; prices in EUR, VAT-inclusive.
- Languages: EN launch; NL next (legal priority — on-pack + PDP legal text must be Dutch
  for NL retail); AR after (Shopify Translate & Adapt + `dir=rtl` styles — the ledger/table
  design mirrors cleanly; Amiri already in the font stack; test numerals in AR locale).
- Legal pages: imprint, privacy, T&C, returns — plus the standing disclaimer
  "food supplements are no substitute for a varied diet" on all supplement PDPs (EU rule).

## Launch checklist deltas

- Port `prefers-reduced-motion` guards with the CSS (already in `site/assets/style.css`).
- OG image per template (base `site/assets/og.png` shipped; generate per-product versions
  from the label art later).
- Rich snippets: `Product` + `Offer` structured data; `certification` property on batch
  pages once halal cert is live.

---

## Build log — 2026-09-02: catalogue seeded

The store shell exists (`hjqqqb-at.myshopify.com`, Basic plan, EUR, NL, Europe/Amsterdam) and
the **full catalogue is now in it**, generated from `build/data.mjs` so the store and the site
can never drift apart.

**What was created — 12 products, all DRAFT, 36 variants**

| Handle | Type | Pack ladder | House |
|---|---|---|---|
| `sidr-honey` · `sidr-sticks` · `black-seed-honey` · `tasting-flight` | Honey | 1/2/3 | honey |
| `marine-collagen` · `daily-sachets` · `collagen-coffee` · `collagen-matcha` · `qahwa-collagen` | Food supplement | 1/2/3 | collagen |
| `black-seed-oil` · `black-seed-softgels` | Food supplement | 1/2/3 | black-seed |
| `morning-ritual` | Gift set | 1/2/3 | kits |

- **Variants** carry the real price ladder with `compareAtPrice` for the save badges, SKUs
  `SAFA-<CODE>-<n>`, inventory untracked (nothing to count yet), `inventoryPolicy: CONTINUE`.
- **Metafields** in the `safa` namespace: `format`, `per_serving`, `house`, `allergen`,
  `batch_placeholder` (explicitly marked PLACEHOLDER so nobody mistakes it for a real batch).
- **Tags** drive everything: `house:*`, `wave-1` / `wave-2`, `preorder`, `allergen:fish`,
  `placeholder-assay`.
- **Smart collections** (rule-driven, so a new product joins automatically by tag):
  The Collagen Line · Raw Honey · Black Seed · Wave 1 — Launch.

**Three compliance rules enforced in the seeded copy**

1. **No invented lab values.** Every measured figure in `data.mjs` (HMF 4.2, TQ 2.1%, moisture
   16.8%, "none detected", the SF-25-0xx batch codes) is replaced with *"published per batch"*.
   Formulation figures — 10 g collagen, 80 mg vitamin C, caffeine, the 95/5 honey ratio — stay,
   because those are contractual spec, not measurements.
2. **No halal-certification claim.** Fixed at source too: `data.mjs` asserted a
   "halal-certified shell" on the softgels, which the constitution forbids until a certificate
   with body, number and expiry is on file. Now reads "fish gelatin — never bovine, never porcine".
3. **Allergens and the supplement disclaimer** on every SKU that needs them. Note the softgels
   carry the fish allergen from the **shell**, not from collagen — easy to miss.

**Also cleaned up:** the old HELDER-branded Dutch test product (which was ACTIVE) and four
superseded SAFA drafts including an off-strategy Shilajit SKU are now ARCHIVED, not deleted —
unarchive from the admin if any of them is wanted back.

### What is still to do on the store

1. **Theme.** Nothing is styled yet — the catalogue is data on the default theme. Buy Prestige
   (or the chosen base) and port `site/assets/style.css`; this is the biggest remaining piece
   and it needs a theme purchase first.
2. **Images.** Every product is imageless. The current visuals are AI-generated concepts; real
   studio packshots of production packs replace them before launch.
3. **Batch metaobjects + QR pages** per the section above — the differentiator, and it needs the
   first real COA to be worth building.
4. **Selling plans** (Subscribe & Save 15%) via Shopify Subscriptions.
5. **Markets, VAT and legal pages** — NL/EU, EUR VAT-inclusive, the four policy pages plus the
   supplement disclaimer page.
6. **Publish.** Everything stays DRAFT until there is stock, a COA and a price confirmed against
   real COGS. Do not flip status to ACTIVE to "preview" — use the theme preview.

**To regenerate the catalogue after editing `build/data.mjs`:** the seed is deterministic from
that file, so re-running it overwrites titles, copy, prices and metafields in place. Note that
`productSet` does *not* upsert on handle — pass the product `id` (or `identifier`) or it errors
with "handle already in use".
