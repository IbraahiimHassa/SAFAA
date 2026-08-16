# SAFA — Starter-Kit Break-Even

Every plan on the site promises a **free accessory kit with the first order**. That promise is
written into `build/data.mjs` and rendered on nine product pages. This document answers the only
question it raises: **how long does a subscriber have to stay before the kit has paid for itself?**

> **Read this first.** COGS here is an *assumption* — a flat percentage of retail, run at three
> levels. It is not a supplier quote. The kit costs are the proposed accessory values in
> `build/data.mjs`, also not quoted. Nothing below should be shown to an investor or used to set a
> price until real landed costs replace both. What the model *does* settle is the shape of the
> answer, which does not change when the inputs get sharper: which kits are affordable, which are
> not, and by how much.

## The model

```
net revenue / order   = retail × (1 − discount)
contribution / order  = net revenue − (retail × cogsRate) − fulfilment
break-even orders     = ⌈ kit cost ÷ contribution ⌉
```

| Input | Value | Source |
|---|---|---|
| Subscription discount | 15% | The plan card on every PDP |
| Fulfilment per order | €5.95 | Pick, pack, box, EU postage — **assumed** |
| COGS | 25% / 30% / 35% of retail | **Assumed.** Sensitivity range, not a quote |
| Retail prices | as shipped | `build/data.mjs` |
| Kit costs | as proposed | `build/data.mjs`, marked ⚠ PROPOSED |

Reproduce or re-run with new numbers:

```bash
node docs/kit-breakeven.mjs              # default 25/30/35
node docs/kit-breakeven.mjs --cogs 22,28 # or whatever the quotes say
```

Edit the `SKUS` table at the top of that script when supplier pricing lands. The table below is
its verbatim output.

## Break-even, by SKU and COGS scenario

Cell = orders needed to break even (contribution per order in brackets).

| SKU | Retail | Kit | @25% | @30% | @35% | Kit budget | Over by |
|---|---|---|---|---|---|---|---|
| Sidr Honey | €49 | €35 | 2 (23.45) | 2 (21.00) | 2 (18.55) | €37.10 | ok |
| Sidr Sticks | €39 | €24 | 2 (17.45) | 2 (15.50) | 2 (13.55) | €27.10 | ok |
| Marine Collagen | €39 | €35 | 3 (17.45) | 3 (15.50) | 3 (13.55) | €27.10 | +7.90 |
| Daily Sachets | €45 | €35 | 2 (21.05) | 2 (18.80) | 3 (16.55) | €33.10 | +1.90 |
| Collagen Coffee | €42 | €56 | 3 (19.25) | 4 (17.15) | 4 (15.05) | €30.10 | +25.90 |
| Collagen Matcha | €44 | €65 | 4 (20.45) | 4 (18.25) | 5 (16.05) | €32.10 | +32.90 |
| Qahwa + Collagen | €44 | €59 | 3 (20.45) | 4 (18.25) | 4 (16.05) | €32.10 | +26.90 |
| Black Seed Oil | €29 | €29 | 3 (11.45) | 3 (10.00) | 4 (8.55) | €17.10 | +11.90 |
| Black Seed Softgels | €27 | €29 | 3 (10.25) | 4 (8.90) | 4 (7.55) | €15.10 | +13.90 |

**Kit budget** = what the kit may cost and still repay inside two orders at the worst COGS
scenario (35%). **Over by** = how far the proposed kit exceeds that.

## What it says

**No SKU ever loses money on an order.** Contribution is positive in all 27 cells, from €23.45
(Sidr Honey at 25%) down to €7.55 (Softgels at 35%). The kit is never a hole that deepens — it is
a fixed acquisition cost that a positive per-order margin pays back. That is the reassuring half.

**Break-even ranges from 2 orders to 5.** That spread is the whole risk. DTC supplement
subscriptions typically lose the largest single cohort between order one and order two; a kit that
repays on order two is recovered by most subscribers, and a kit that needs five is recovered by a
minority. **Collagen Matcha at €65 is the outlier** — five orders at 35% COGS means the kit is
funded by the subscribers who were going to stay anyway, and given away to everyone else.

**The kits were sized by how nice the object is, not by what the SKU can carry.** That is the
actual defect, and it shows up cleanly in the last two columns. The two cheapest SKUs — Black Seed
Oil and Softgels, at €29 and €27 — were handed €29 kits, roughly double what they can support. The
three ritual SKUs (coffee, matcha, qahwa) were handed €56–65 kits against budgets around €30.

**The rule that falls out of the algebra.** At 35% COGS and 15% discount, two orders of
contribution equal `2 × (0.50 × retail − 5.95)`, which simplifies to:

> **Kit cost ≤ retail − €12.**

Memorable, exact under these assumptions, and it is the constraint the kits should have been
designed against in the first place. Re-derive it if the discount, fulfilment or COGS ceiling
moves — the €12 is not a constant of nature.

## Recommendation — resize the kits to their budgets

Keep the promise; shrink the object. Each kit below fits under its budget and, in most cases,
makes better product sense than what it replaces.

| SKU | Now | Proposed kit | Cost | Reasoning |
|---|---|---|---|---|
| Sidr Honey | €35 | unchanged — dipper, tasting spoon, booklet | €35 | Inside budget. The dipper is the ritual object worth keeping |
| Sidr Sticks | €24 | unchanged — linen pouch, booklet | €24 | Inside budget |
| Marine Collagen | €35 | dosing spoon, booklet | €21 | The tub already ships with a scoop — the beaker *and* spoon were redundant. Drop the €14 beaker |
| Daily Sachets | €35 | linen pouch, booklet | €24 | Sachets are pre-dosed. A measuring beaker for a pre-portioned format is an argument against the format |
| Collagen Coffee | €56 | double-wall glass, booklet | €28 | Keep the object the drink is *seen* in. The €19 frother becomes a paid add-on |
| Collagen Matcha | €65 | chasen whisk, booklet | €34 | The chasen is the iconic piece. Bowl + stand become a paid ritual set |
| Qahwa + Collagen | €59 | pair of finjan cups, booklet | €30 | Two cups say "share this" better than one pourer. The €29 dallah becomes the upsell |
| Black Seed Oil | €29 | booklet | €12 | At €29 retail the budget is €17. This SKU cannot carry hardware |
| Black Seed Softgels | €29 | booklet | €12 | Same. Softgels need no dosing instrument at all |

Every line then repays inside two orders at 35% COGS, except Matcha at €34 against a €32.10
budget — a €1.90 overshoot that clears at 25% and 30%, and which is worth accepting to keep the
chasen. The dropped pieces are not wasted: frother, matcha bowl and dallah are the natural paid
accessory range, which is margin rather than cost.

## Still needed before this is decision-grade

1. **Real COGS per SKU** — landed cost including duty, not a percentage guess. This is the single
   input that moves every cell.
2. **Real accessory quotes at volume** — the kit costs are estimates. A chasen at 500 units is not
   a chasen at 50.
3. **Actual fulfilment rate** — €5.95 is a placeholder until a 3PL quotes the box sizes.
4. **Observed retention**, once there is any — break-even in orders is only meaningful against how
   many orders subscribers actually place. Until then, two orders is the safe design target
   because it is the one most subscribers reach.

## Note on format

This was scoped as a spreadsheet. It is a script and a document instead: LibreOffice could not be
started in the build environment (three attempts, timing out at 29 s, 149 s and 259 s), so formula
recalculation could not be verified, and shipping an `.xlsx` whose formulas had never been
evaluated would have been worse than shipping nothing. `docs/kit-breakeven.mjs` is the model in
executable form — it recomputes in full from the inputs at the top, which is the property the
spreadsheet was wanted for. It can be rebuilt as a workbook on any machine with Excel or a working
LibreOffice.
