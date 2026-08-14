# SAFA — Packaging System ("The Ledger" language)

The packaging is the website is the lab report: paper, one espresso ink, sidr amber,
and a printed ledger table on every unit. No lifestyle imagery, no benefit icons —
the label reads like a document because the document is the product.

## System rules

1. **Two grounds, one family.** Classic/hero SKUs (jars, bottles) sit on **paper**
   (`#FBFAF6`, uncoated stock); companion/modern formats (collagen tub, sticks box,
   sachet boxes) sit on **ink** (`#26201A`, soft-touch). Shelf effect: the classics look
   like preserved goods, the companions like instruments — one house, two registers.
2. **Every label carries a ledger table** — harvest/origin/assay/batch rows with hairline
   rules — and a **batch QR** linking to the published report. The QR is a design element,
   boxed and captioned, never hidden on the back.
3. **The grade is front-of-pack.** Honey: wadi + harvest year. Black seed: the TQ%
   number, huge. Collagen: protein % and molecular weight. The number IS the hero image.
4. **The Source mark** sits at the masthead of every label; the Arabic صفا closes the
   composition bottom-right (bottom-left on RTL-primary export packaging).
5. **No halal seal until certified** — the word and seal are printed only from the first
   certified batch, with body + certificate № in the ledger table (brand claims rule).

## What the competitor packs taught us (captured 2026-08-14)

- **Reformed (adopted whole):** the datasheet pouch — neutral body + one colour-coded top
  panel per line + printed spec table, no hero imagery. Our pouch template (`pouch-*.svg`)
  is exactly this anatomy in SAFA's system: taupe = Marine Collagen, espresso = Coffee,
  forest = Matcha, amber = Qahwa.
- **Balqees (honey):** bare flint glass, front-panel-only label so the honey colour is the
  brand asset; premium tier signalled by label pattern density + metallic ink alone (their
  crimson lattice carries a 10× price jump); Arabic wordmark above Latin; separate gift
  architecture (rigid box + engraved olive-wood tool). Their gap: no closure ceremony on
  €250+ jars — our batch-numbered tamper band + Reserve foil is the answer.
- **Sunna (supplements):** one label template with colour-per-SKU across every format
  (pouch, carton, bottle) — range recognition at near-zero design cost; certification
  turned into a design language; three hard numbers on the front before any prose. Their
  gap: commodity white HDPE bottles and an unnamed halal star — we out-material them and
  print the certificate number or nothing.

## Colour (print)

| Role | Hex | Print approximation |
|---|---|---|
| Paper ground | #FBFAF6 | unprinted uncoated stock |
| Ink | #26201A | Pantone Black 4 C (warm espresso) |
| Sidr amber | #B97F24 | Pantone 7557 C |
| Amber light (on ink) | #E8A33D | Pantone 143 C |
| Pass green (assay "not detected") | #2E6B3F | Pantone 7734 C |

Finish: uncoated tactile stock; amber elements in the premium tier (Reserve, gift boxes)
switch to **gold foil**; ink SKUs use soft-touch lamination + spot matte varnish on the
mark. Jar lids: black metal, The Seal (ring variant) printed in amber on top.

## Type

- **Newsreader** (OFL) — product names & italic origin lines
- **Archivo** (OFL) — ledger tables, data, weights
- **Amiri** (OFL) — Arabic
- Production files must outline all text; both families are self-hostable, no license cost.

## Files

| File | SKU | Physical size |
|---|---|---|
| `sidr-jar-label.svg` | Sidr Honey 250 g jar, front | 70 × 90 mm |
| `collagen-label.svg` | Marine Collagen 300 g tub, front panel | 90 × 70 mm |
| `blackseed-label.svg` | Black Seed Oil 100 ml amber bottle, front | 50 × 80 mm |
| `sidr-sticks-box.svg` | Sidr Sticks box of 12, front | 160 × 112 mm |
| `pouch-marine-collagen.svg` | Marine Collagen stand-up pouch, front | 130 × 195 mm |
| `pouch-collagen-coffee.svg` | Collagen Coffee pouch, front | 130 × 195 mm |
| `pouch-collagen-matcha.svg` | Collagen Matcha pouch, front | 130 × 195 mm |
| `pouch-qahwa-collagen.svg` | Qahwa + Collagen pouch, front | 130 × 195 mm |
| `pouch-*-front.svg` / `pouch-*-back.svg` | Pouch hero fronts + full back faces (4 SKUs) | 130 × 195 mm |
| `*-back.svg` (jar, bottle, sticks) | Back faces: nutrition, directions, EU footer | matches front |
| `sachets-box.svg` + `sachet-single.svg` | Daily Sachets carton + 10 g stick sachet | 160 × 112 mm / 25 × 82 mm |
| `softgels-jar-label.svg` | Black Seed Softgels amber jar, front | 60 × 70 mm |
| `blackseed-honey-label.svg` | Black Seed Honey 250 g jar, front | 70 × 90 mm |
| `tasting-flight-box.svg` | Tasting Flight gift box lid | 180 × 124 mm |
| `morning-ritual-box.svg` | Morning Ritual kit box lid | 180 × 124 mm |

All SVGs are 10 units/mm. Back labels (nutrition declaration, NL/EN legal copy,
EU operator address) follow the same ledger grammar — to be produced with the final
legal text once supplier COAs are real (see `docs/03-supplier-qc-specs.md`).

## Structural notes per SKU

- **Sidr jar:** heavy straight-sided glass (Balqees uses rounded artisanal; we go
  apothecary-straight to match the document language), 250 g fill, tamper band printed
  with the batch number — tearing the band "opens the ledger".
- **Collagen tub:** matte black HDPE or (preferred) kraft-lined composite can with black
  metal lid; 300 g + calibrated brass-tone scoop. Refill pouches: kraft stand-up, same
  front label block printed 1-color ink.
- **Black seed bottle:** 100 ml amber pharma glass, black cap with integrated glass
  pipette (dose ritual), shrink band printed with batch №.
- **Sticks:** 10 g PET/PE laminate sticks, amber film with paper-look label panel;
  box holds 12 upright like a cigarette case, lid hinges open flat for gifting.
- **Tasting flight (wave 1 gift):** paper-ground rigid box, three 40 g mini jars in an
  ink-colored tray, a printed mini "ledger booklet" with each jar's COA.

## What's placeholder

Batch numbers, assay values and the QR target on these files are **layout placeholders**
(marked SF-25-0xx). They are replaced per production batch by the real COA values —
the label template intentionally makes that substitution a data-merge, not a redesign.
