#!/usr/bin/env node
/* Starter-kit break-even model.
 *
 * Every plan on the site ships a free accessory kit with the first order. This
 * answers the only question that matters about that promise: how many orders
 * does a subscriber have to stay for before the kit has paid for itself?
 *
 *   net revenue / order   = retail x (1 - discount)
 *   contribution / order  = net revenue - (retail x cogsRate) - fulfilment
 *   break-even orders     = ceil(kit cost / contribution)
 *
 * Run:  node docs/kit-breakeven.mjs [--cogs 25,30,35]
 *
 * !! COGS IS AN ASSUMPTION. !! Nothing here is a supplier quote. Kit costs are
 * the proposed accessory values in build/data.mjs, also not quoted. When the
 * real numbers arrive, edit SKUS below and re-run — the table regenerates.
 */

const DISCOUNT   = 0.15;   // subscription discount shown on every plan card
const FULFILMENT = 5.95;   // pick, pack, box and EU postage, per order

/* retail = the price on the site; kit = sum of that product's accessory kit */
const SKUS = [
  { name: 'Sidr Honey',          retail: 49, kit: 35 },
  { name: 'Sidr Sticks',         retail: 39, kit: 24 },
  { name: 'Marine Collagen',     retail: 39, kit: 35 },
  { name: 'Daily Sachets',       retail: 45, kit: 35 },
  { name: 'Collagen Coffee',     retail: 42, kit: 56 },
  { name: 'Collagen Matcha',     retail: 44, kit: 65 },
  { name: 'Qahwa + Collagen',    retail: 44, kit: 59 },
  { name: 'Black Seed Oil',      retail: 29, kit: 29 },
  { name: 'Black Seed Softgels', retail: 27, kit: 29 },
];

const arg = process.argv.indexOf('--cogs');
const RATES = (arg > -1 ? process.argv[arg + 1] : '25,30,35')
  .split(',').map(s => Number(s.trim()) / 100);

const contribution = (retail, rate) =>
  retail * (1 - DISCOUNT) - retail * rate - FULFILMENT;

const pad = (s, n, right) => right ? String(s).padStart(n) : String(s).padEnd(n);
const w = Math.max(...SKUS.map(s => s.name.length));

console.log(`\nStarter-kit break-even — ${DISCOUNT * 100}% plan discount, EUR ${FULFILMENT} fulfilment/order\n`);
const worst = Math.max(...RATES);

console.log(
  pad('SKU', w) + '  ' + pad('Retail', 7, 1) + pad('Kit', 6, 1) + '   ' +
  RATES.map(r => pad(`@${(r * 100).toFixed(0)}%`, 14, 1)).join('') +
  pad('Kit budget', 12, 1) + pad('Over by', 9, 1));
console.log('-'.repeat(w + 15 + RATES.length * 14 + 21));

for (const s of SKUS) {
  const cells = RATES.map(r => {
    const c = contribution(s.retail, r);
    return pad(c <= 0 ? 'never' : `${Math.ceil(s.kit / c)} (${c.toFixed(2)})`, 14, 1);
  });
  /* what the kit may cost and still pay back inside 2 orders at worst-case COGS */
  const budget = 2 * contribution(s.retail, worst);
  const over   = s.kit - budget;
  console.log(
    pad(s.name, w) + '  ' + pad(s.retail, 7, 1) + pad(s.kit, 6, 1) + '   ' + cells.join('') +
    pad(budget.toFixed(2), 12, 1) + pad(over > 0 ? `+${over.toFixed(2)}` : 'ok', 9, 1));
}

console.log(`\nCell = orders to break even (contribution per order, EUR).`);
console.log(`Kit budget = what the kit may cost and still repay inside 2 orders at ${worst * 100}% COGS.`);
console.log(`Assumption, not a quote: COGS as a flat % of retail. Replace with real landed cost per SKU.\n`);
