# SAFAA Shopify theme

The storefront design, as theme source. **This directory is the source of truth** — the live
theme is uploaded from here, never hand-edited in the Shopify code editor.

## What this is

A duplicate of Horizon with its **skin removed and replaced**. Horizon contributes only
plumbing that has no visual signature — cart drawer, product form, checkout handoff, the
theme editor, localisation, accessibility wiring. Every pixel a customer sees comes from
`sections/safaa-*.liquid` + `assets/safaa-base.css` (the design system, ported verbatim from
`site/assets/style.css`).

Theme: **SAFAA — house design**, `gid://shopify/OnlineStoreTheme/199437222271`, UNPUBLISHED.

| File | Role |
|---|---|
| `snippets/safaa-head.liquid` | Self-hosted @font-face + loads the design system. Rendered from `snippets/stylesheets.liquid` so it loads after `base.css` and wins on conflicts |
| `snippets/safaa-icon.liquid` | The house SVG icon set — same marks as the static site |
| `sections/safaa-product.liquid` | The PDP: gallery, verification strip, variant ladder, buy form, assay card, accordions, ingredient grid, comparison table |
| `sections/safaa-wordmark.liquid` | The oversized wordmark that closes the page |
| `assets/safaa-store.css` | Only what Shopify adds — header/footer chrome, variant tiles, the wordmark |
| `assets/safaa-base.min.css` | Minified build of `site/assets/style.css`, for upload |
| `templates/product.json` | Product template — **only** SAFAA sections; every Horizon section removed |

## Where the data comes from

Nothing is hardcoded in Liquid. The PDP renders from:

- **the product** — title, media, variants, prices, compare-at
- **`product.metafields.safa.spec`** — a JSON blob per product carrying the structured design
  data the static site had: bullets, assay rows, accordions, comparison table, ingredients,
  the kit contents. Generated from `build/data.mjs`, so the store and the site cannot drift.

Regenerate the spec payloads with the script pattern in
`docs/04-shopify-build-plan.md` → *Build log*.

## What Shopify changes about the design

Three things are deliberately different from `site/`, because Shopify owns them:

1. **The quantity ladder is real variants** posting to `/cart/add`, not a JS price calculator.
   The design is identical; the mechanism is real.
2. **The flavour picker links to sibling products** — each flavour is its own product in
   Shopify, so a `<select>` that swaps an image would be lying about what is in the cart.
3. **The plan card renders only when a selling plan exists.** No Subscribe & Save is
   configured yet, so it is currently hidden rather than faked.

## ⚠ Before publishing

- [ ] **Replace the external stylesheet.** `safaa-head.liquid` currently loads the design
  system from `https://safaa-sigma.vercel.app/assets/style.css` because `themeFilesUpsert`
  silently no-ops on URL bodies for text assets (it works for the binary fonts). Upload
  `assets/safaa-base.min.css` as a theme asset and flip the branch. **A storefront must not
  depend on a preview deployment staying up.**
- [ ] Homepage template (`templates/index.json`) — still Horizon's. The PDP is done first
  because that is where the design's distinctive modules live.
- [ ] Collection, cart, search and 404 templates.
- [ ] Header and footer sections — currently Horizon's, restyled by CSS only.
- [ ] Real product photography (the current images are AI-generated concepts).
- [ ] Selling plans, so the plan card appears.

## Seeing what was built

The storefront is a normal web page, so verifying it needs browser access to the shop
domain. The Shopify **Admin** API reaches the agent through an approved connector, which is
why products, images and theme files can be written from a sandboxed session — but the
**storefront** goes over ordinary HTTP egress, and in Claude Code on the web that is
governed by the environment's network policy.

`shopify/scripts/verify-storefront.mjs` closes that loop the moment access exists: it drives
a real Chromium over the theme, unlocks the storefront password, and reports missing
modules, horizontal overflow, broken images, console errors and axe violations, with
screenshots at 1440 / 768 / 375.

```bash
npm i -D playwright @axe-core/playwright
STORE=hjqqqb-at.myshopify.com \
STOREFRONT_PASSWORD=... \
THEME_ID=199437222271 \
CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
node shopify/scripts/verify-storefront.mjs
```

**Hosts that must be reachable** (allow these in the environment's network policy, or run
locally where no policy applies):

| Host | Why |
|---|---|
| `*.myshopify.com` | the storefront, now and after the dev store is replaced |
| `cdn.shopify.com` | theme assets and product images — without it every screenshot is unstyled and imageless |
| `safaa-sigma.vercel.app` | the static site, and the interim stylesheet link above |

Chromium is already present in the cloud image at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; only the npm packages and the egress
allowance are missing.
