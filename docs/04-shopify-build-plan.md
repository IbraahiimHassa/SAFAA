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
