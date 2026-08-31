# Product master data — Halal Marine Collageen + Vitamine C (hero SKU)

> Created 2026-07-06 as the Zapply-employee test product AND the working master data for the real
> launch SKU. Live in the trial store `hjqqqb-at.myshopify.com` (EUR, NL, trial plan).
> Everything here was written against `approved-claims.md` — do not edit copy without re-running
> the claims decision tree (§7 of that file).

## Identity
- **Working brand name:** HELDER (werktitel) — PLACEHOLDER ONLY. Brand name is a human decision
  (HUMAN ACTIONS in collagen.md); swap everywhere on decision. Chosen for the design test because
  it encodes the transparency positioning in Dutch.
- **Product title:** Halal Marine Collageen + Vitamine C — poeder, neutraal (300 g / 30 doseringen)
- **Shopify:** product `gid://shopify/Product/15773867803007`, handle
  `halal-marine-collageen-vitamine-c-poeder-neutraal-300-g-30-doseringen`, status ACTIVE,
  tag `TEST-PRODUCT` (remove at launch), type `Voedingssupplement`

## Formulation (spec — drives which claims are legal)
| Component | Per dosering (10 g scoop) | Why |
|---|---|---|
| Gehydrolyseerde marine collageen peptiden, Type I | 10 g | Hero ingredient. Carries ZERO claims itself. |
| Vitamine C | 80 mg = 100% RI | THE legal claim carrier — well above the ≥12 mg "source of" threshold. Skin/collagen-formation claim becomes available. |
- 30 doseringen / 300 g per zak. Neutrale smaak. Free-from: gluten, zuivel, soja, toegevoegde
  suikers, kunstmatige zoetstoffen (spec commitment — verify against final supplier COA).
- **Formulation rule inherited:** if a future reformulation drops vitamine C below 12 mg/portion,
  every benefit line on every surface becomes illegal and must come down. The claim attaches to
  the vitamin C, never to the collagen.

## Variants & pricing (EUR, modeled on market reference)
| Variant | SKU | Price | Compare-at | Inventory (test) |
|---|---|---|---|---|
| 1 zak (300 g) | COLL-MAR-300-1 | €34.95 | — | 100 |
| 3 zakken (900 g) | COLL-MAR-300-3 | €89.95 | €104.85 (~14% korting) | 50 |
- Market anchor: Sunna marine collagen £30 one-time / £24 sub; 3-bag £78. We priced premium-parity
  (€34.95) with a mid-teens bundle discount. Subscription tier deferred (needs an app; decide at launch).

## Claims actually used on the page (all verbatim-authorized or descriptive)
1. "Vitamine C draagt bij tot de normale collageenvorming voor de normale werking van de huid." ✔ authorized (Reg. 432/2012)
2. "Vitamine C draagt ook bij tot de bescherming van cellen tegen oxidatieve stress." ✔ authorized
3. Everything else is descriptive/structural: what it is, dose, amino acids, taste, free-from, usage.
4. **Fish allergen disclosure:** "Bevat: vis." — mandatory (Reg. 1169/2011), on page and label.
5. **Standard supplement disclaimer** (Dir. 2002/46/EC): varied-diet sentence + dosage + children — on page.

## Halal framing (until cert on file)
"Halal door bron" story + explicit "certificering in aanvraag" honesty block: we state publicly
that we will only write "halal-gecertificeerd" when body + number + expiry are published on the
page. This honesty IS the brand's trust play — keep it prominent, not buried.

## What we deliberately did NOT say (and why)
- No skin/hair/nails/joints/anti-aging outcomes for collagen — zero EFSA authorization exists (approved-claims.md §1).
- No "halal-gecertificeerd" — no certificate on file.
- No "world's first / only" lines — Sunna-style claim, banned by constitution §9 and unverifiable.
- No testimonial-shaped claims, no before/after imagery.
- **Candidate for later (needs consultant sign-off first):** protein claims — collagen is ~100%
  protein and Reg. 432/2012 authorizes "Protein contributes to the maintenance of muscle mass" /
  "…of normal bones" (conditions: ≥12% of energy from protein — a pure collagen powder likely
  qualifies). NOT in approved-claims.md yet, so NOT used (Rule 2). Flag for the regulatory review.

## Open items before real sale
- [ ] Brand name (replaces HELDER werktitel everywhere)
- [ ] Supplier + COA → fill in fish species/origin in the transparency block (placeholder promise is live on page)
- [ ] Halal certificate (body, number, expiry) → unlock "halal-gecertificeerd"
- [ ] Regulatory consultant sign-off on approved-claims.md (it is a working draft)
- [ ] Product imagery — real studio packshots of production packs. Concept visuals already exist
  (`site/assets/img/`), AI-generated against the shipped SAFA identity; grade to the live design
  system in `site/assets/style.css`, **not** to `design/frontend-design.md` (archived HELDER
  direction, cool petrol grade, superseded 2026-08-15)
- [ ] NVWA supplement notification; product liability insurance; upgrade store off trial plan
- [ ] Sunna market intel snapshot (2026-07-06): marine collagen 10 g/serving unflavoured, sub-and-save
  ~20% off, 3/6-bag bundles, trust-badge-heavy PDP, claims NOT EU-compliant (their weakness = our angle)
