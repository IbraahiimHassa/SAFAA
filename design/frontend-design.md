# frontend-design.md — Halal Marine Collagen (werknaam "HELDER")

> **STATUS: FINAL — critic-verified.** Three directions were mocked and juried by the
> design-critic on screenshots. **Direction A "Het Dossier" won: 26/30, PASS (no criterion
> below 4)** — Distinctiveness 5 · Brief fit 5 · Match-or-beat 4 · Type craft 4 · Layout 4 ·
> Commercial 4. Runner-up: B "Diepte" (21/30) — see §10. The winner was developed into the
> high-fidelity homepage mockup (`mockups/helder-home.html`, screenshots at 1440 + 375) with the
> jury's three fixes applied. All token values below are final and ready to apply to the theme.
>
> Wordmark "HELDER" is a **placeholder**: the identity is type-set (no logo glyph), so any final
> name drops into the same system unchanged.

---

## 1. Direction: "Het Dossier" (Dutch rationalist document design)

The brand wins on **sourcing integrity and credibility**. The design literalizes that: the site is
composed like a beautiful scientific dossier — hairline rules, specification tables, mono-spaced
batch data, square corners, one warm accent. Dutch rationalist typography (the Crouwel/Total
Design lineage) applied to a category that is drowning in soft-focus lifestyle wellness. Nobody in
the supplement aisle designs like a document you can trust; that IS the differentiation.

- **vs. Sunna** (Dawn theme, General Sans, white + #0085D0 blue pills, black star-badge trust bar,
  beige lifestyle hero, scratch-card popups): we are quieter, sharper, document-grade. No badges,
  no gamification, no claim-shaped copy. Premium = restraint + proof.
- **Slop test:** category reflex for "halal marine collagen, women 30+" is blush/rose-gold
  femininity or aqua-teal-on-white "ocean" cliché; second-order reflex is sage/cream spa-wellness
  (cream body bg is banned anyway). Deep petrol ink + terracotta accent + mono dossier tables is
  neither. Clean.

References composed from: **Ritual** (single-ink discipline, traceability-as-content),
**Aesop** (descriptive-statements-as-luxury, square hairline restraint), **Bottega Veneta** card
(hairline buttons, type at a whisper), **Apple product** card (rationed accent, size-only
hierarchy). Sunna captured as the anti-reference.

---

## 2. Palette — exact hex, mapped to Shopify color scheme slots

OKLCH-derived, sRGB hex for Shopify settings. Strategy: *restrained* — tinted neutrals + one
accent under 10% of surface.

| Token | Hex | Role |
|---|---|---|
| `--ink` (Noordzee) | `#0E2F36` | Primary text, solid buttons, dark scheme bg |
| `--ink-2` | `#48646A` | Secondary text, captions |
| `--ground` | `#FFFFFF` | Body background (true white, chroma 0 — NOT cream) |
| `--wash` | `#F2F6F6` | Alternate section bg (cool petrol-tinted wash) |
| `--line` | `#D9E2E2` | Hairlines, borders, table rules |
| `--accent` (Terracotta) | `#C8573B` | ONE rationed accent: price emphasis, sale/status, key link hover. Never large surfaces |
| `--ink-on-dark` | `#F4F7F7` | Text on dark scheme |

### Shopify color schemes (Theme settings → Colors)

**Scheme 1 — "Licht" (default: most sections)**
- Background: `#FFFFFF`
- Foreground/Text: `#0E2F36`
- Solid button background: `#0E2F36` · Solid button label: `#FFFFFF`
- Outline button (secondary): `#0E2F36` (1px, square)
- Links/accents: `#0E2F36` underlined; hover `#C8573B`
- Shadow: none (use `#D9E2E2` hairlines instead)

**Scheme 2 — "Wash" (alternating sections: halal block, FAQ)**
- Background: `#F2F6F6` · Foreground: `#0E2F36`
- Solid button bg: `#0E2F36` · label `#FFFFFF` · Outline: `#0E2F36`

**Scheme 3 — "Diep" (inverse: footer, occasional chapter, announcement bar)**
- Background: `#0E2F36` · Foreground: `#F4F7F7`
- Solid button bg: `#F4F7F7` · label `#0E2F36` · Outline: `#F4F7F7`

**Scheme 4 — "Signaal" (use sparingly: promo banner only)**
- Background: `#C8573B` · Foreground: `#FFFFFF`
- Solid button bg: `#0E2F36` · label `#FFFFFF`

Contrast (WCAG): `#0E2F36` on `#FFFFFF` = 12.9:1 ✓ · on `#F2F6F6` = 11.6:1 ✓ ·
`#F4F7F7` on `#0E2F36` = 12.3:1 ✓ · `#C8573B` on `#FFFFFF` = 4.6:1 ✓ (AA for large/emphasis use).

---

## 3. Typography

| Role | Face | Source | Weights | Notes |
|---|---|---|---|---|
| Headings | **Archivo** | Shopify font library ✓ (also Google Fonts) | 500, 600 | Grotesque with Dutch-rationalist flavor; set tight `-0.02em` |
| Body | **IBM Plex Sans** | Shopify font library ✓ (also Google Fonts) | 400, 500 | Neutral, credible, full NL diacritics |
| Data/labels | **IBM Plex Mono** | Shopify library ✓ (needs small CSS override — see below) | 400, 500 | Dossier tables, batch data, statuses, announcement bar |

**Theme settings:** Heading font → `Archivo` (weight Semi Bold 600). Body font → `IBM Plex Sans`
Regular. Dawn/Horizon's font picker only exposes two slots; load Plex Mono via a small custom-CSS
snippet (theme settings → Custom CSS) scoped to `.mono, .caption-with-letter-spacing,
.announcement-bar__message` — it is a Shopify-library font, so `font-family: "IBM Plex Mono",
monospace;` resolves after adding it in any font_picker once, or self-host the woff2 (OFL license,
free).

**Scale (desktop / mobile):**
- H1 hero: `clamp(3rem, 5.2vw, 4.6rem)` / line-height 1.04 / `-0.02em` / Archivo 600 — max 2–3 lines
- H2 section: `clamp(2rem, 3.4vw, 3rem)` / 1.1 / `-0.015em` / Archivo 600
- H3: 20px / Archivo 500
- Body: 16px / 1.6 · Lead: 17–18px / 1.65 · Caption/mono: 12–13px, letter-spacing `.03–.06em`
- Body measure: cap at 58ch. Secondary text color `#48646A`, never grey-on-grey below 4.5:1.

---

## 4. Spacing, radius, borders, buttons

- **Radius: 0px everywhere.** Square corners are the direction's signature (Aesop discipline).
  Shopify theme settings: buttons/inputs/cards corner radius → 0.
- **Borders:** 1px hairlines `#D9E2E2` for internal rules; 1px `#0E2F36` for emphatic frames
  (dossier card, status chips). No drop shadows anywhere — depth via rules and washes.
- **Buttons:** primary = solid `#0E2F36`, white label, `16px 32px` padding, Archivo 500 15px;
  secondary = 1px outline `#0E2F36`, transparent bg. Hover: primary → `#123B44`; secondary →
  `#F2F6F6` wash. 200ms ease-out. No pills (Sunna owns pills), no gradients.
- **Section rhythm:** major sections `py: 120px` desktop / `72px` mobile; the spec-strip and
  announcement rows are deliberately tight (18px) — rhythm through contrast, not one token.
- **Grid:** content max-width 1200–1440px, 56px side padding desktop / 24px mobile.

---

## 5. Homepage architecture → Shopify OS 2.0 sections (in order)

| # | Section | Shopify section type | Scheme | Content rule |
|---|---|---|---|---|
| 0 | Announcement | `announcement-bar` | 3 (Diep) or 1 | Mono 12px: "GRATIS VERZENDING IN NL & BE VANAF €35" |
| 1 | Header | `header` | 1 | Type wordmark (Archivo 600, tracked .18em — swappable), 4 links, cart |
| 2 | **Hero** | `image-banner` or custom `hero-dossier` | 1 | H1 "Marine collageen. Meer niet." + descriptive sub + verbatim vitamin-C claim + primary CTA "Bekijk het product — €34,95" + ghost CTA "Lees het etiket". Right column: the **dossier spec card** (custom liquid block or `multicolumn` variant) |
| 3 | **Spec strip (USP bar)** | `multicolumn` (text-only, 5 col) or custom marquee-less strip | 1, top+bottom 1px `#0E2F36` rules | Mono caps, descriptive facts ONLY: "TYPE I PEPTIDEN · 10 G PER DOSERING · MET VITAMINE C · ZONDER TOEVOEGINGEN · BEVAT: VIS" |
| 4 | **Featured product** | `featured-product` | 1 | Packshot, €34,95, 300 g, buy CTA + secondary "Bekijk het etiket (PDF)"; claim line verbatim under title |
| 5 | **Sourcing/transparency** | `multicolumn` 3-col or custom "chain" | 1 | "Van vangst tot pot: drie stappen, drie documenten." Steps: Herkomstverklaring → COA → Volledig etiket. Each step links a real document |
| 6 | **Halal-honesty block** | `image-with-text` (custom block) | 2 (Wash) | Headline "Halalcertificering: in aanvraag. En dat zeggen we eerlijk." + status chip "STATUS: AANVRAAG INGEDIEND — Q4 2026" + the **reserved-certificate frame** (dashed 1px frame: "Deze ruimte is gereserveerd voor ons halalcertificaat.") — honesty as designed proof |
| 7 | FAQ | `collapsible-content` | 2 | 5–6 items: dosering, smaak, allergenen, halal-status, verzending, retour |
| 8 | Newsletter | `newsletter` | 3 (Diep) | "Eén mail per maand. Batchnieuws, geen buzzwords." |
| 9 | Footer | `footer` | 3 | Wordmark line + KvK/voorwaarden/privacy in mono |

**EFSA discipline baked into layout:** the ONLY benefit-shaped sentence anywhere is the verbatim
authorized claim — "Vitamine C draagt bij tot de normale collageenvorming voor de normale werking
van de huid." — always attached to vitamine C, never re-worded, placed hero + product sections.
Everything else is descriptive (composition, dose, source, allergen, process). No star ratings, no
testimonial-shaped claims, no before/after imagery, no "beauty from within" framings.

---

## 6. Product page (PDP) guidance

- Layout: gallery left (square, hairline-framed, white bg packshots + one texture macro), buy
  column right. Title Archivo 600 28–32px; price 20px with `#C8573B` only if discounted.
- Under title, in this order: (1) descriptive one-liner "Gehydrolyseerde marine collageen
  peptiden, Type I, met vitamine C — 300 g poeder."; (2) verbatim vitamin-C claim as a quiet
  bordered note (1px `#D9E2E2`, not a highlight box); (3) allergen line in mono: "BEVAT: VIS".
- **Dossier tab block** replaces the usual icon-USP row: collapsible rows (OS 2.0 blocks) —
  Samenstelling / Dosering & gebruik / Herkomst & analyse (COA download per batch) /
  Halal-status (honest, links to certificering page) / Verzending & retour.
- Subscription (if offered later): plain radio rows, no "SAVE 20%!" badges — price difference
  stated in mono, matter-of-fact.
- No review stars while claims-compliance of imported review text is unverified (Regulation
  applies to republished testimonials). Reviews come later, moderated.

---

## 7. Imagery direction (for future packshots/lifestyle)

- **Packshot:** matte white/ink-labelled canister or pouch on pure white, hairline shadow only,
  straight-on, document-flat. Label design = same dossier typography (Archivo + Plex Mono spec table).
- **Texture macros:** collagen powder as landscape — drifts, scoop cross-sections; cool daylight,
  no golden-hour warmth. The powder is white-on-white: quiet luxury.
- **Water/light:** North Sea light through water columns, glass of water with powder dissolving —
  clarity as subject. Desaturated petrol/grey-green grade, never tropical aqua.
- **People (later, sparingly):** documentary, not aspirational-glow; hands, label-reading,
  routine moments. Modest styling by default (persona-respectful, never costume-y or "identity
  marketing"). No before/after, ever.
- Generated interim imagery (Firefly) allowed for water/texture only; packshots wait for the real
  product. Every image cool-graded toward `#0E2F36`.

## 8. Motion notes

Lens: **Jakub (production polish) primary, Emil (restraint) secondary** — e-commerce mapping.
- Scroll-entry: single quiet pattern site-wide — `translateY(12px)` + fade, 500–600ms,
  `cubic-bezier(0.16,1,0.3,1)`, IntersectionObserver, stagger 60–80ms within a group only.
- Hover: buttons 200ms bg shift; dossier rows get a `#F2F6F6` wash on hover; images may scale
  1.02 inside `overflow:hidden` over 600ms. Nothing bounces, nothing pulses.
- The reserved-certificate dashed frame may have ONE slow dash-offset drift (30s linear loop,
  opacity subtle) as the single signature ambient — optional, cut if it reads gimmicky.
- `prefers-reduced-motion`: all entrances become instant, ambient stops. Non-negotiable.

---

## 9. Exact Shopify theme setting values (apply now)

```
Colors → Scheme 1: bg #FFFFFF · text #0E2F36 · solid button #0E2F36 / label #FFFFFF ·
                   outline button #0E2F36 · links #0E2F36
Colors → Scheme 2: bg #F2F6F6 · text #0E2F36 · buttons as Scheme 1
Colors → Scheme 3: bg #0E2F36 · text #F4F7F7 · solid button #F4F7F7 / label #0E2F36
Colors → Scheme 4: bg #C8573B · text #FFFFFF · solid button #0E2F36 / label #FFFFFF
Typography → Headings: Archivo Semi Bold (600) · scale ~120%
Typography → Body: IBM Plex Sans Regular (400) · scale 100%
Buttons/inputs/cards → corner radius 0px · borders 1px · shadows OFF (0 opacity)
Custom CSS → .mono etc: font-family "IBM Plex Mono", monospace (Shopify library font, OFL)
```

## 10. Direction decisions + runner-up (critic verdict, 2026-07-07)

Jury: design-critic subagent, on full-page screenshots of all three mockups, judged against
Sunna (to beat) and Ritual/Aesop (quality bar). Six criteria, 1–5.

| Criterion | **A — Het Dossier** | B — Diepte | C — Helder Water |
|---|---|---|---|
| Distinctiveness / anti-slop | **5** | 4 | 3 |
| Brief fit | **5** | 3 | 3 |
| Match-or-beat references | **4** | 4 | 3 |
| Typographic hierarchy & craft | **4** | 4 | 3 |
| Layout, composition & rhythm | **4** | 3 | 4 |
| Commercial viability (Shopify) | **4** | 3 | 4 |
| **Total** | **26 — PASS** | 21 — borderline | 20 — borderline |

**Winner: A.** "The only direction where the brand's entire argument — transparency as archive,
not slogan — is the design itself." The productdossier hero hands the label-reading persona the
label as the hero; the reserved-certificate frame turns the certification gap into proof of
integrity.

**Runner-up (one line):** B "Diepte" — drenched deep-petrol Fraunces luxury; would win if it
designed the evidence into its dark chapters instead of asserting openness in italic copy. To
flip: use `mockups/direction-b-diepte.html` and swap §2–§4 tokens for deep `#0B272E` chapters +
Fraunces display.

**Jury's three fixes → applied in `helder-home.html`:**
1. Pack imagery as archival plate in the hero document (AFB. 01 — honest "ontwerpweergave"
   coded render pending the real shoot).
2. One sensory beat: AFB. 02 water plate (real photograph, archive-framed, mono caption).
3. Craft pass: heading re-break ("Van vangst tot pot: / drie stappen, drie documenten."),
   certificate frame height constrained, secondary CTAs restyled as hairline+mono document links.

**Build verification (hi-fi mockup):** 2 fix-iterations. Contrast computed in-page: lowest pair
6.35:1 (secondary text), body 14.2:1 — AA clean. No broken images, no horizontal overflow at 375
or 1440. Responsive verified at 1440 and 375 (screenshots saved). Slop scan on built output:
clean — no eyebrow dashes, no icon-card grids, no pills, no cream ground, no Inter/Geist, no
badge bars, accent rationed to one element.

## 11. Real-content manifest (liability guard)

| Item | Status |
|---|---|
| "Zeevis" source, vangstgebied, "gecontroleerde visserij" | **PLACEHOLDER** — pending supplier/COA |
| 10 g dose, 300 g size, €34,95, Type I, vitamine C 80 mg (100% RI) | REAL per brief (dose of vit C: **PLACEHOLDER** until formulation confirms ≥ source-of threshold) |
| Vitamin-C claim (Dutch, verbatim) | REAL — authorized wording, Reg. 432/2012 |
| "STATUS: AANVRAAG INGEDIEND — Q4 2026" | **PLACEHOLDER** — sync to actual cert application state |
| COA / herkomstverklaring / etiket-PDF links | **PLACEHOLDER** — documents don't exist yet |
| "Verzonden uit Amsterdam", shipping threshold €35 | **PLACEHOLDER** — confirm ops |
| All NL copy | DRAFT — flag for Abramo's native review before ship |
| AFB. 01 packshot (coded render in mockup) | **PLACEHOLDER** — replace with real archival-plate shoot of final packaging |
| AFB. 02 water plate photo | INTERIM — Unsplash (free license, photo-1548839140-29a749e1cf4d), replace with owned shoot before launch |
| "€ 1,17 per dosering" | REAL (derived: €34,95 / 30 doseringen) |
