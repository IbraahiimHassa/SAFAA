/* SAFA Nutrition — site content model.
   One source of truth for all 8 pages. Edit here, run `node build/build.mjs`.

   ⚠ Every price, batch number and assay value below is PLACEHOLDER until real
   COAs and supplier quotes exist. See README.md "Real-content manifest".
   The `kit` values in particular are proposed accessory costs, not costed COGS. */

export const site = {
  name: 'SAFA Nutrition',
  announce: 'Ships across the EU · Free delivery over €55 · <em>Every batch published before it sells</em>',
  shipnote: 'Free EU delivery over €55 · ships same day before 15:00 CET',
};

/* --- navigation ------------------------------------------------------- */
export const nav = [
  { label: 'Shop all', href: 'index.html#shop', menu: [
    ['product.html', 'Wild Yemeni Sidr Honey', 'Raw · single wadi · 250 g', 'assets/img/products/sidr-honey/front.jpg'],
    ['marine-collagen.html', 'Halal Marine Collagen', 'Type I peptides · 300 g', 'assets/img/products/marine-collagen/front.jpg'],
    ['black-seed-oil.html', 'Cold-Pressed Black Seed Oil', 'TQ 2.1% verified · 100 ml', 'assets/img/products/black-seed-oil/front.jpg'],
    ['collagen-coffee.html', 'Collagen Coffee', 'Arabica · 25 cups', 'assets/img/products/collagen-coffee/front.jpg'],
    ['collagen-matcha.html', 'Collagen Matcha', 'Ceremonial · 25 bowls', 'assets/img/products/collagen-matcha/front.jpg'],
    ['qahwa-collagen.html', 'Qahwa + Collagen', 'Cardamom & saffron · wave 2', 'assets/img/products/qahwa-collagen/front.jpg'],
    ['sidr-sticks.html', 'Sidr Sticks', '12 × 10 g single-serve', 'assets/img/products/sidr-sticks/front.jpg'],
    ['daily-sachets.html', 'Daily Sachets', '30 pre-weighed doses', 'assets/img/products/daily-sachets/front.jpg'],
    ['black-seed-softgels.html', 'Black Seed Softgels', '60 × 1000 mg', 'assets/img/products/black-seed-softgels/front.jpg'],
    ['black-seed-honey.html', 'Black Seed Honey', 'Wave 2 · the bridge jar', 'assets/img/products/black-seed-honey/front.jpg'],
    ['tasting-flight.html', 'The Tasting Flight', 'Three 40 g minis, gift-boxed', 'assets/img/products/tasting-flight/front.jpg'],
    ['morning-ritual.html', 'The Morning Ritual', '14-day starter kit', 'assets/img/products/morning-ritual/front.jpg'],
  ]},
  { label: 'Honey', href: 'product.html', menu: [
    ['product.html', 'Wild Yemeni Sidr Honey', '250 g jar · harvest 2025', 'assets/img/products/sidr-honey/front.jpg'],
    ['sidr-sticks.html', 'Sidr Sticks', '12 single-serve sticks', 'assets/img/products/sidr-sticks/front.jpg'],
    ['black-seed-honey.html', 'Black Seed Honey', 'Wave 2', 'assets/img/products/black-seed-honey/front.jpg'],
    ['tasting-flight.html', 'The Tasting Flight', 'Three 40 g minis', 'assets/img/products/tasting-flight/front.jpg'],
  ]},
  { label: 'Collagen', href: 'marine-collagen.html', menu: [
    ['marine-collagen.html', 'Halal Marine Collagen', 'Unflavoured · 300 g', 'assets/img/products/marine-collagen/front.jpg'],
    ['collagen-coffee.html', 'Collagen Coffee', 'Single-origin arabica', 'assets/img/products/collagen-coffee/front.jpg'],
    ['collagen-matcha.html', 'Collagen Matcha', 'Ceremonial grade', 'assets/img/products/collagen-matcha/front.jpg'],
    ['qahwa-collagen.html', 'Qahwa + Collagen', 'Ours alone · wave 2', 'assets/img/products/qahwa-collagen/front.jpg'],
    ['daily-sachets.html', 'Daily Sachets', '30 pre-weighed doses', 'assets/img/products/daily-sachets/front.jpg'],
  ]},
  { label: 'Black seed', href: 'black-seed-oil.html', menu: [
    ['black-seed-oil.html', 'Cold-Pressed Black Seed Oil', '100 ml · TQ 2.1%', 'assets/img/products/black-seed-oil/front.jpg'],
    ['black-seed-softgels.html', 'Black Seed Softgels', '60 × 1000 mg', 'assets/img/products/black-seed-softgels/front.jpg'],
  ]},
  { label: 'Bundles & kits', href: 'morning-ritual.html', menu: [
    ['morning-ritual.html', 'The Morning Ritual', '14-day starter kit', 'assets/img/products/morning-ritual/front.jpg'],
    ['tasting-flight.html', 'The Tasting Flight', 'Three 40 g honeys, gift-boxed', 'assets/img/products/tasting-flight/front.jpg'],
    ['daily-sachets.html', 'Daily Sachets', '30 pre-weighed doses', 'assets/img/products/daily-sachets/front.jpg'],
  ]},
  { label: 'Lab reports', href: 'index.html#proof' },
];

export const footer = [
  ['Shop', [
    ['product.html', 'Sidr Honey'], ['marine-collagen.html', 'Marine Collagen'],
    ['black-seed-oil.html', 'Black Seed Oil'], ['index.html#fam-collagen', 'The collagen line'],
    ['morning-ritual.html', 'Bundles & kits'],
  ]],
  ['About', [
    ['index.html#proof', 'Lab reports'], ['index.html#origin', 'Where it comes from'],
    ['index.html#halal', 'Halal certification'], ['#', 'Wholesale'], ['#', 'Contact'],
  ]],
  ['Help', [
    ['#', 'Shipping & returns'], ['#', 'Manage subscription'],
    ['#', 'Privacy'], ['#', 'Terms'],
  ]],
];

/* --- value props (homepage strip) ------------------------------------- */
export const props = [
  ['doc', 'Lab report per batch', 'Published before the batch goes on sale'],
  ['pin', 'One named origin', 'A wadi, a harvest year, a species — never “blend”'],
  ['leaf', 'Nothing added', 'No fillers, flow agents or flavours, anywhere'],
  ['ship', 'Free EU delivery', 'Over €55 · dispatched from Amsterdam'],
];

/* --- ingredient library -----------------------------------------------
   Keyed so each product shows only what is actually in it. Photographed to a
   single spec (top-down, warm paper ground, one ingredient, no props, no text)
   so any subset still reads as one grid. */
export const ingredientLib = {
  'sidr-blossom':    ['Sidr (Ziziphus)', 'The autumn flowering of the Sidr tree in Wadi Do\'an. <b>Pollen analysis on every batch</b> is what proves the honey is monofloral — and what a blend can never show you.'],
  'raw-honey':       ['Raw, unheated honey', 'Coarse-strained at the apiary, never pasteurised. <b>HMF is stated per batch</b> — the number that tells you whether honey has been heated or aged.'],
  'marine-collagen': ['Marine collagen', 'Type I peptides hydrolysed from wild-caught fish skin to <b>~2 kDa, the size the absorption research used</b>. Marine by design: the lowest-friction halal choice.'],
  'nigella':         ['Nigella sativa', 'Ethiopian black seed, mechanically pressed below 40 °C. <b>Thymoquinone measured by HPLC</b> and printed on the front — the grade, not a range.'],
  'arabica':         ['Single-origin arabica', 'Lightly roasted and ground for the brew it is built for — hot water for the coffee, fine for the dallah. <b>Cupped per roast</b>, origin on the batch page.'],
  'matcha':          ['Ceremonial matcha', 'First-harvest, stone-ground in Japan. <b>Tested for lead and radiation</b> as standard for Japanese imports — both reports sit behind the QR.'],
  'cardamom':        ['Hail cardamom', 'True hail pods, ground fresh. The half of qahwa that people actually taste — and the half most blends cut with filler.'],
  'saffron':         ['Negin saffron', 'Negin-grade threads. Saffron is <b>the most adulterated spice on earth</b>, so ours ships with its own ISO 3632 grade on the batch page.'],
  'mct':             ['MCT powder', 'Coconut-derived, for body in the cup. It is what makes a collagen coffee froth like a flat white instead of sitting thin.'],
  'vitamin-c':       ['Vitamin C', 'Ascorbic acid at 80 mg — 100% RI. Carries the one authorised claim we are allowed to make: <b>vitamin C contributes to normal collagen formation</b> for the normal function of skin.'],
  'zinc-biotin':     ['Zinc & biotin', 'Zinc citrate and D-biotin at authorised levels. Both <b>contribute to the maintenance of normal hair, skin and nails</b> — EFSA wording, nothing embroidered on top.'],
};

/* what the homepage shows — the house, not any one product */
export const houseIngredients = ['sidr-blossom', 'raw-honey', 'marine-collagen', 'nigella', 'vitamin-c', 'zinc-biotin'];


/* --- best sellers: the collagen flavours, first thing after the hero ----- */
export const bestsellers = [
  { slug: 'marine-collagen',  flavour: 'Unflavoured',        per: '€1.30 / day' },
  { slug: 'collagen-coffee',  flavour: 'Coffee',             per: '€1.68 / cup' },
  { slug: 'collagen-matcha',  flavour: 'Matcha',             per: '€1.76 / bowl' },
  { slug: 'qahwa-collagen',   flavour: 'Qahwa',              per: '€1.76 / cup' },
];

/* --- the range, as it actually is: three goods, each with its formats -----
   The classic never leaves the shelf; the formats surround it. This is the
   strategy in docs/02, expressed as structure rather than as three loose
   shelves that hid which product belonged to which. */
export const families = [
  {
    id: 'honey', kick: 'Raw honey', classic: 'sidr-honey',
    line: 'One valley, one flowering — in whichever form the morning takes.',
    formats: ['sidr-sticks', 'black-seed-honey', 'tasting-flight'],
  },
  {
    id: 'collagen', kick: 'Daily collagen', classic: 'marine-collagen',
    line: 'One certified batch, poured into a ritual you already have.',
    formats: ['daily-sachets', 'collagen-coffee', 'collagen-matcha', 'qahwa-collagen'],
  },
  {
    id: 'blackseed', kick: 'Cold-pressed black seed', classic: 'black-seed-oil',
    line: 'One pressing, one thymoquinone grade — with the pepper or without it.',
    formats: ['black-seed-softgels'],
  },
];

/* the three classics carry a fuller card than the formats do */
export const classics = {
  'sidr-honey': {
    cat: 'Raw honey', tag: 'The flagship',
    desc: "Raw, unfiltered, from one valley in Hadhramaut — the autumn Sidr bloom, coarse-strained and never heated.",
    facts: [['Ziziphus — monofloral', 1], ['HMF 4.2', 0], ['Moisture 16.8%', 0]],
    pr: '€49', per: 'Harvest 2025 · 250 g',
  },
  'marine-collagen': {
    cat: 'Daily collagen', tag: 'Most ordered', amber: 1,
    desc: 'Type I peptides hydrolysed to a stated weight, with the vitamin C, zinc and biotin that carry the authorised claims.',
    facts: [['Protein ≥90%', 1], ['~2 kDa', 0], ['Allergen: fish', 0]],
    pr: '€39', per: '€1.30 / day · 300 g',
  },
  'black-seed-oil': {
    cat: 'Cold-pressed oil', tag: 'TQ graded',
    desc: "Ethiopian Nigella sativa pressed below 40 °C. The thymoquinone number on the front is this batch's HPLC result.",
    facts: [['TQ 2.1% (HPLC)', 1], ['Solvent-free', 0], ['≤40 °C', 0]],
    pr: '€29', per: 'TQ verified per batch · 100 ml',
  },
};

/* short factual line under each format card */
export const formatSpec = {
  'sidr-sticks': '12 × 10 g sticks · €39',
  'black-seed-honey': 'Folded with nigella · €29',
  'tasting-flight': 'Three 40 g minis · €35',
  'daily-sachets': '30 pre-weighed doses · €45',
  'collagen-coffee': 'Single-origin arabica · €42',
  'collagen-matcha': 'Ceremonial grade · €44',
  'qahwa-collagen': 'Cardamom & saffron · €44',
  'black-seed-softgels': '60 × 1000 mg · €27',
};

/* --- the free-with-a-plan kit, per product ----------------------------
   ⚠ PROPOSED accessory values — confirm against real sourcing before launch. */
const kits = {
  honey:    [['Olive-wood honey dipper', 14], ['Ceramic tasting spoon', 9], ['Printed batch booklet', 12]],
  sticks:   [['Linen carry pouch', 12], ['Printed batch booklet', 12]],
  collagen: [['Glass measuring beaker', 14], ['Steel dosing spoon', 9], ['Printed batch booklet', 12]],
  coffee:   [['Electric milk frother', 19], ['Double-wall glass', 16], ['Steel scoop', 9], ['Printed batch booklet', 12]],
  matcha:   [['Bamboo chasen whisk', 22], ['Whisk stand', 12], ['Ceramic matcha bowl', 19], ['Printed batch booklet', 12]],
  qahwa:    [['Brass-finish dallah pourer', 29], ['Pair of finjan cups', 18], ['Printed batch booklet', 12]],
  oil:      [['Amber dosing pipette', 9], ['Glass shot cup', 8], ['Printed batch booklet', 12]],
};

/* --- products ---------------------------------------------------------- */
export const products = [
  {
    slug: 'sidr-honey', file: 'product.html', navKey: 'Honey',
    name: 'Wild Yemeni Sidr Honey',
    h1: 'Wild Yemeni <em>Sidr</em> Honey',
    title: 'Wild Yemeni Sidr Honey — Wadi Do\'an, Harvest 2025 · SAFA Nutrition',
    meta: 'Raw, unfiltered, single-wadi Yemeni Sidr honey. Pollen-verified origin, per-batch published lab report. Harvest 2025, 250 g.',
    flag: 'Signature · Harvest 2025',
    cat: 'Raw honey · Single wadi · 250 g',
    sub: 'Raw · unfiltered · single wadi · 250 g — from the autumn flowering of the Sidr tree in Wadi Do\'an, Hadhramaut. Coarse-strained only, never heated, never blended.',
    dir: 'products/sidr-honey', kit: kits.honey,
    ing: ["sidr-blossom", "raw-honey"],
    ingNote: 'Two things, and one of them is a flower. The ingredients list on this jar reads: <b>honey</b>. Everything else here is what we measured, not what we mixed in.',
    batch: 'SF-25-011', tested: '12 Aug 2026',
    bullets: [
      ['leaf', 'One valley, one flowering — not a country, not a blend'],
      ['doc', 'Pollen, adulteration and antibiotic screens published per batch'],
      ['spoon', 'Raw and coarse-strained — the pollen stays in the jar'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Olive-wood dipper' },
      { x: '15%', y: '66%', was: '€9', label: 'Ceramic spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Every jar ships with its lab report',
    pickers: [
      { lab: 'Select format', opts: [
        ['250 g jar — the shelf classic', 'Spoon, drizzle, gift. 17 servings.', 'assets/img/products/sidr-honey/front.jpg'],
        ['12 × 10 g sticks — pocketable', 'Same batch, no spoon needed.', 'assets/img/products/sidr-sticks/front.jpg'],
        ['3 × 40 g tasting flight', 'Do\'an, Black Seed, Reserve — gift-boxed.', 'assets/img/products/tasting-flight/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the honey.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Black Seed Oil 100 ml — €29', 'The sunnah spoon: honey and nigella together.', 'assets/img/products/black-seed-oil/front.jpg'],
        ['+ Marine Collagen 300 g — €39', 'The daily anchor, stirred into anything.', 'assets/img/products/marine-collagen/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Jar', s: '250 g · ≈17 servings', p: 49, u: '€2.88 / serving' },
      { n: '2 Jars', s: 'one to keep, one to gift', p: 89, was: 98, save: 'Save 9%', u: '€2.62 / serving' },
      { n: '3 Jars', s: 'a season\'s supply', p: 125, was: 147, save: 'Save 15%', u: '€2.45 / serving' },
    ],
    assayHead: 'BATCH SF-25-011', assayNote: 'The full certificate ships in the box and lives on this batch\'s page — scan the jar\'s QR.',
    assay: [
      ['Pollen origin', 'Ziziphus — monofloral', 1],
      ['Adulteration screen (C4 + NMR)', 'none detected', 1],
      ['Antibiotic panel', 'none detected', 1],
      ['HMF · freshness', '4.2 mg/kg'],
      ['Moisture', '16.8%'],
    ],
    blurb: 'Sidr honey is dark, caramel-deep and finishes with a gentle bitterness — treat it like a single-estate olive oil and taste it plain first.',
    acc: [
      ['Origin & harvest', 'One valley: Wadi Do\'an, Hadhramaut, Yemen. One flowering: the autumn Sidr bloom of 2025. Hives sit on the wadi ledges among the trees; the honey is coarse-strained at the apiary and never heated above hive temperature, so the pollen — our proof of origin — stays in the jar.<table><tr><td>Region</td><td>Wadi Do\'an, Hadhramaut</td></tr><tr><td>Harvest</td><td>Autumn 2025</td></tr><tr><td>Floral source</td><td>Ziziphus spina-christi (Sidr)</td></tr><tr><td>Processing</td><td>Raw · coarse-strained · unblended</td></tr></table>', 1],
      ['What the lab checked', 'Every batch goes to an independent, ISO 17025-accredited honey laboratory before sale: pollen analysis to confirm monofloral Sidr, C4-sugar and NMR screens against syrup adulteration, an LC-MS/MS antibiotic panel, plus HMF, diastase and moisture for freshness. If a batch fails any line, it is not bottled under this label.'],
      ['How to enjoy it', 'By the spoon, on the sunnah of mornings; stirred into warm (not hot) water or milk; over labneh, porridge or good bread. Sidr is dark, caramel-deep with a gentle bitter finish — treat it like a single-estate olive oil: taste it plain first.'],
      ['Shipping & returns', 'EU-wide delivery, free over €55. Orders before 15:00 CET ship the same working day from Amsterdam. Unopened jars can be returned within 30 days; if a jar arrives damaged we replace it without a form-filling ceremony.'],
    ],
    gallery: [
      ['products/sidr-honey/front.jpg', 'Front of the jar'],
      ['products/sidr-honey/back.jpg', 'Back of the jar — nutrition and the record'],
      ['10-life-honey.jpg', 'Sidr honey drizzled over labneh'],
      ['07-sticks-box.jpg', 'Sidr Sticks companion box'],
    ],
    cmp: {
      h: 'Supermarket honey, "Sidr-style", <em>and ours.</em>',
      cols: ['What you\'re told', 'Typical blend', '"Sidr-style" imports', 'SAFA Sidr — Do\'an'],
      rows: [
        ['Origin on label', '"EU / non-EU blend"', '"Yemen" (unverified)', 'Named wadi + harvest year'],
        ['Floral source proof', 'None', 'None', 'Pollen analysis, published'],
        ['Adulteration testing', 'Spot checks', 'Rarely', 'C4 + NMR, every batch'],
        ['Heat treatment', 'Pasteurised', 'Often', 'Raw — HMF stated per batch'],
        ['Lab report you can read', 'No', 'No', 'QR on every jar'],
      ],
    },
    film: { h: 'The harvest, <em>on record.</em>', src: 'assets/video/safa-honey.mp4', poster: 'assets/img/10-life-honey.jpg', alt: 'Sidr honey pouring, cinematic film' },
    also: { kick: 'Completes the ritual', h: 'From the same <em>harvest.</em>', items: ['sidr-sticks', 'black-seed-honey', 'tasting-flight', 'morning-ritual'] },
  },

  {
    slug: 'marine-collagen', file: 'marine-collagen.html', navKey: 'Collagen',
    name: 'Halal Marine Collagen',
    h1: 'Halal <em>Marine</em> Collagen',
    title: 'Halal Marine Collagen — Type I peptides, unflavoured · SAFA Nutrition',
    meta: 'Type I marine collagen peptides at ≥90% protein and ~2 kDa, with vitamin C, zinc and biotin. Per-batch lab report published.',
    flag: 'The daily anchor',
    cat: 'Type I peptides · Unflavoured · 300 g, 30 doses',
    sub: 'Type I peptides · unflavoured · 300 g, 30 doses — hydrolysed from wild-caught fish to a stated molecular weight, with the vitamin C, zinc and biotin that carry the authorised claims. No fillers, no flavours, no guesswork.',
    dir: 'products/marine-collagen', kit: kits.collagen,
    ing: ["marine-collagen", "vitamin-c", "zinc-biotin"],
    batch: 'SF-25-021', tested: '09 Aug 2026',
    bullets: [
      ['doc', '≥90% protein and ~2 kDa — stated, not implied'],
      ['fish', 'Marine by design: the lowest-friction halal choice'],
      ['leaf', 'No maltodextrin, no flow agents, no flavours'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Glass beaker' },
      { x: '15%', y: '66%', was: '€9', label: 'Steel dosing spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: '10 g Type I collagen per dose',
    pickers: [
      { lab: 'Select flavour', opts: [
        ['Unflavoured — stir into anything', 'Dissolves clear, tastes of nothing.', 'assets/img/products/marine-collagen/front.jpg'],
        ['Coffee — single-origin arabica', 'The same dose, poured as your morning cup.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['Matcha — ceremonial grade', 'Whisked as always, dose dissolved inside.', 'assets/img/products/collagen-matcha/front.jpg'],
        ['Qahwa — cardamom & saffron', 'Wave 2. The ritual no one else sells.', 'assets/img/products/qahwa-collagen/front.jpg'],
      ]},
      { lab: 'Select format', opts: [
        ['300 g pouch — 30 doses', 'Scoop included. The daily workhorse.', 'assets/img/products/marine-collagen/front.jpg'],
        ['30 daily sachets — pre-weighed', 'A torn sachet is a finished ritual.', 'assets/img/products/daily-sachets/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Pouch', s: '300 g · 30 doses', p: 39, u: '€1.30 / day' },
      { n: '2 Pouches', s: '60 days', p: 72, was: 78, save: 'Save 8%', u: '€1.20 / day' },
      { n: '3 Pouches', s: 'a season\'s supply', p: 99, was: 117, save: 'Save 15%', u: '€1.10 / day' },
    ],
    assayHead: 'BATCH SF-25-021',
    assayNote: '"Vitamin C contributes to normal collagen formation for the normal function of skin." Biotin and zinc contribute to the maintenance of normal hair, skin and nails. Full certificate on this batch\'s page — scan the pouch\'s QR.',
    assay: [
      ['Protein (dry basis)', '≥ 90%', 1],
      ['Hydroxyproline', 'confirms true collagen', 1],
      ['Avg. molecular weight', '~2 kDa — stated, not implied'],
      ['Heavy metals panel', 'within limits', 1],
      ['Odour / taste', 'neutral — no fishy note', 1],
    ],
    blurb: 'One 10 g scoop into water, juice, coffee or yoghurt. It dissolves clear and tastes of nothing — which is the whole point.',
    acc: [
      ['Source & process', 'One named source: wild-caught fish skin, species declared on every batch page. Enzymatically hydrolysed — no solvents, no bleaching — to peptides averaging 2 kDa, the size the absorption research actually used. Formulated with ascorbic acid, zinc citrate and D-biotin. Nothing else.<table><tr><td>Source</td><td>wild-caught fish (species on batch page)</td></tr><tr><td>Type</td><td>I, hydrolysed peptides</td></tr><tr><td>Excipients</td><td>none — no maltodextrin, no flow agents</td></tr><tr><td>Allergen</td><td>fish</td></tr></table>', 1],
      ['What the lab checked', 'Protein content by Kjeldahl (the filler test — cheap powders run 70–80%), hydroxyproline (proves it is collagen, not whey), molecular-weight distribution, heavy metals, microbiology, and a cup test for fishy off-notes — the number one giveaway of poorly deodorised collagen. Every batch, accredited lab, published before sale.'],
      ['How to use it', 'One 10 g scoop into anything — water, juice, coffee, yoghurt. It dissolves clear and tastes of nothing. Daily, with or without food. Prefer it pre-portioned? The Daily Sachets are the same batch in thirty torn-and-done sticks.'],
      ['Shipping & returns', 'EU-wide delivery, free over €55. Orders before 15:00 CET ship the same working day from Amsterdam. Unopened pouches returnable within 30 days.'],
    ],
    gallery: [
      ['products/marine-collagen/front.jpg', 'Front of the pouch'],
      ['ritual/glass-collagen.jpg', 'Dissolved clear in a glass of water'],
      ['products/marine-collagen/back.jpg', 'Back of the pouch — spec table and the record'],
      ['products/marine-collagen/use.jpg', 'Collagen dissolving clear in a glass'],
      ['products/daily-sachets/front.jpg', 'Daily Sachets companion box'],
    ],
    cmp: {
      h: 'Typical collagen, "premium" collagen, <em>and ours.</em>',
      cols: ['What you\'re told', 'Typical powder', '"Premium" DTC', 'SAFA Marine Collagen'],
      rows: [
        ['Protein content', '70–80%, undisclosed', '"high protein"', '≥90%, on the batch page'],
        ['Molecular weight', 'not stated', '"hydrolysed"', '~2 kDa, distribution published'],
        ['Species & source', '"marine blend"', '"wild-caught"', 'named per batch'],
        ['Halal status', 'unstated', 'a logo, no number', 'marine by design; certificate № or nothing'],
        ['Lab report you can read', 'no', 'on request', 'QR on every pouch'],
      ],
    },
    film: { h: 'It dissolves <em>clear.</em>', src: 'assets/video/products/marine-collagen.mp4', poster: 'assets/img/products/marine-collagen/use.jpg', alt: 'Collagen powder dissolving clear in a glass of water' },
    also: { kick: 'The same dose, other rituals', h: 'Carry it in your <em>morning cup.</em>', items: ['collagen-coffee', 'collagen-matcha', 'qahwa-collagen', 'daily-sachets'] },
  },

  {
    slug: 'black-seed-oil', file: 'black-seed-oil.html', navKey: 'Black seed',
    name: 'Cold-Pressed Black Seed Oil',
    h1: 'Black Seed <em>Oil</em>',
    title: 'Cold-Pressed Black Seed Oil — TQ 2.1% verified · SAFA Nutrition',
    meta: 'Cold-pressed Ethiopian Nigella sativa oil with thymoquinone measured by HPLC and printed per batch. 100 ml, solvent-free.',
    flag: 'Cold-pressed · TQ 2.0+',
    cat: 'Nigella sativa · Ethiopian seed · 100 ml',
    sub: 'Nigella sativa · Ethiopian seed · 100 ml — pressed cold, never refined, never diluted. The thymoquinone number on the front is this batch\'s HPLC result, not a marketing range.',
    dir: 'products/black-seed-oil', kit: kits.oil,
    ing: ["nigella"],
    ingNote: 'One ingredient. The whole product is a single cold-pressed seed — so the only thing worth proving is what is in it, and at what strength.',
    batch: 'SF-25-031', tested: '07 Aug 2026',
    bullets: [
      ['doc', 'Thymoquinone % measured by HPLC and printed on the front'],
      ['leaf', 'Mechanically pressed below 40 °C — solvent-free'],
      ['pin', 'One seed origin: Ethiopia, harvest year named'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €29', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€9', label: 'Dosing pipette' },
      { x: '15%', y: '66%', was: '€8', label: 'Glass shot cup' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'TQ 2.1% — this batch, by HPLC',
    pickers: [
      { lab: 'Select format', opts: [
        ['100 ml oil — pipette bottle', '20 daily teaspoons. Peppery, as the seed is.', 'assets/img/products/black-seed-oil/front.jpg'],
        ['60 softgels — 1000 mg', 'The same TQ-graded oil, without the pepper.', 'assets/img/products/black-seed-softgels/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the oil.', 'assets/img/products/black-seed-oil/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'The sunnah spoon: a teaspoon stirred into honey.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Black Seed Softgels — €27', 'Oil at home, softgels when travelling.', 'assets/img/products/black-seed-softgels/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Bottle', s: '100 ml · 20 teaspoons', p: 29, u: '€1.45 / day' },
      { n: '2 Bottles', s: '40 days', p: 53, was: 58, save: 'Save 9%', u: '€1.33 / day' },
      { n: '3 Bottles', s: 'a season\'s supply', p: 75, was: 87, save: 'Save 14%', u: '€1.25 / day' },
    ],
    assayHead: 'BATCH SF-25-031', assayNote: 'Where manuka has MGO, black seed now has a number: the TQ% on the front of every bottle, with the chromatogram behind the QR.',
    assay: [
      ['Thymoquinone (HPLC)', '2.1% — this batch', 1],
      ['Pressing', 'mechanical, ≤ 40 °C', 1],
      ['Solvent residue', 'none detected', 1],
      ['Fatty-acid fingerprint', 'pure N. sativa — no dilution', 1],
      ['Peroxide value', 'fresh — within spec', 1],
    ],
    blurb: 'One teaspoon daily — plain like an espresso, or stirred into a spoon of Sidr honey. Peppery by nature; that is the seed, not a flaw.',
    acc: [
      ['Origin & pressing', 'Single-origin Nigella sativa seed from Ethiopia, harvest year on the label, mechanically pressed below 40 °C. Unrefined, unbleached, undiluted — the fatty-acid fingerprint on every batch page proves no cheaper oil was ever near it.<table><tr><td>Seed origin</td><td>Ethiopia, harvest 2025</td></tr><tr><td>Extraction</td><td>cold press, solvent-free</td></tr><tr><td>Refining</td><td>none</td></tr><tr><td>Bottle</td><td>100 ml amber pharma glass, pipette cap</td></tr></table>', 1],
      ['What the lab checked', 'Thymoquinone by HPLC (the grade we print), peroxide and anisidine values for freshness, the full fatty-acid profile against dilution, hexane residue against solvent extraction, heavy metals and aflatoxins. Every batch, published first.'],
      ['How to use it', 'One teaspoon (5 ml) daily — plain if you take it like an espresso, or stirred into a spoon of Sidr honey, which is exactly why the Black Seed Honey jar exists. Peppery by nature; that is the seed, not a flaw.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened bottles returnable within 30 days.'],
    ],
    gallery: [
      ['products/black-seed-oil/front.jpg', 'Front of the bottle'],
      ['products/black-seed-oil/back.jpg', 'Back of the bottle — the record'],
      ['products/black-seed-oil/use.jpg', 'Oil dropped onto a spoon of honey'],
      ['products/black-seed-softgels/front.jpg', 'Black Seed Softgels companion'],
    ],
    cmp: {
      h: 'Typical black seed oil <em>and ours.</em>',
      cols: ['What you\'re told', 'Amazon-tier', '"Premium"', 'SAFA TQ 2.0+'],
      rows: [
        ['Thymoquinone', 'not stated', '"high TQ" range', 'this batch\'s HPLC %, on the front'],
        ['Seed origin', 'unstated blend', '"premium seeds"', 'Ethiopia, harvest year named'],
        ['Extraction', 'often solvent', '"cold-pressed"', '≤40 °C, hexane test published'],
        ['Dilution check', 'none', 'none', 'fatty-acid fingerprint per batch'],
        ['Freshness', 'unknown', 'best-before only', 'peroxide + anisidine per batch'],
      ],
    },
    film2: { h: 'One oil, <em>two ways.</em>', items: [
      ['assets/video/products/black-seed-oil.mp4', 'assets/img/06-bottle-blackseed.jpg', 'Black seed oil dropped onto a spoon of honey'],
      ['assets/video/products/black-seed-softgels.mp4', 'assets/img/products/black-seed-softgels/use.jpg', 'Softgels taken with a glass of water'],
    ]},
    also: { kick: 'Completes the ritual', h: 'The seed, the spoon, <em>the pair.</em>', items: ['sidr-honey', 'sidr-sticks', 'marine-collagen', 'black-seed-softgels'] },
  },

  {
    slug: 'collagen-coffee', file: 'collagen-coffee.html', navKey: 'Collagen',
    name: 'Collagen Coffee',
    h1: 'Collagen <em>Coffee</em>',
    title: 'Collagen Coffee — single-origin arabica with marine collagen · SAFA Nutrition',
    meta: 'Single-origin arabica carrying a full 10 g marine collagen dose per cup. 414 g, 25 servings.',
    flag: 'The ritual line · With marine collagen',
    cat: 'Single-origin arabica · 414 g, 25 servings',
    sub: 'Single-origin arabica · 414 g, 25 servings — your morning coffee rebuilt to carry a full 10 g marine collagen dose. Same ritual, same taste, one quiet upgrade.',
    dir: 'products/collagen-coffee', kit: kits.coffee,
    ing: ["arabica", "marine-collagen", "mct", "vitamin-c"],
    batch: 'SF-25-021', tested: '09 Aug 2026',
    bullets: [
      ['spoon', '10 g Type I collagen in the cup you already pour'],
      ['doc', 'Same certified collagen batch as the unflavoured pouch'],
      ['leaf', 'Tastes like coffee — because it is coffee'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €56', label: 'Free with a plan' },
      { x: '15%', y: '30%', was: '€19', label: 'Electric frother' },
      { x: '15%', y: '62%', was: '€16', label: 'Double-wall glass' },
      { x: '85%', y: '46%', side: 'r', was: '€9', label: 'Steel scoop' },
    ],
    vsfoot: '10 g collagen · 78 mg caffeine per cup',
    pickers: [
      { lab: 'Select flavour', opts: [
        ['Coffee — single-origin arabica', 'Lightly roasted, ground for hot brewing.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['Matcha — ceremonial grade', 'Stone-ground, first harvest.', 'assets/img/products/collagen-matcha/front.jpg'],
        ['Qahwa — cardamom & saffron', 'Wave 2. The ritual no one else sells.', 'assets/img/products/qahwa-collagen/front.jpg'],
        ['Unflavoured — stir into anything', 'The daily workhorse pouch.', 'assets/img/products/marine-collagen/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the coffee.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'Sweeten it with the house flagship.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Daily Sachets — €45', 'Thirty pre-weighed doses for the days you skip coffee.', 'assets/img/products/daily-sachets/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Pouch', s: '25 cups · a working month', p: 42, u: '€1.68 / cup' },
      { n: '2 Pouches', s: '50 cups', p: 76, was: 84, save: 'Save 10%', u: '€1.52 / cup' },
      { n: '3 Pouches', s: 'a season\'s supply', p: 105, was: 126, save: 'Save 17%', u: '€1.40 / cup' },
    ],
    assayHead: 'PER CUP', assayNote: 'The collagen is the same certified batch as the Marine Collagen pouch — one ingredient, traced once, poured into a second ritual. Allergen: contains fish.',
    assay: [
      ['Caffeine', '78 mg — what a coffee should be'],
      ['Marine collagen', '10 g · Type I', 1],
      ['Protein', '15 g / serving'],
      ['Vitamin C', '80 mg · 100% RI'],
      ['Taste', 'coffee. just coffee', 1],
    ],
    blurb: 'Two scoops per cup, hot water, stir ten seconds. One cup carries the day\'s full dose — the rest of your coffees stay ordinary coffee.',
    acc: [
      ['The coffee & the dose', 'Lightly roasted single-origin arabica, ground for hot brewing, blended with hydrolysed marine collagen peptides and MCT powder for body. Two scoops per cup, hot water, stir ten seconds — it tastes like coffee because it is coffee. 83 kcal, 0.1 g carbohydrate.', 1],
      ['What the lab checked', 'The collagen carries its own batch record — protein, molecular weight, heavy metals, cup test. The coffee is cupped per roast. Both live on this batch\'s page behind the QR.'],
      ['How to use it', 'Two scoops (16.5 g) per cup. Hot water or your machine\'s americano. Milk-drinker? It froths into a flat white without complaint. One cup carries the day\'s full dose — the rest of your coffees stay ordinary coffee.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET from Amsterdam. Unopened pouches returnable within 30 days.'],
    ],
    gallery: [
      ['products/collagen-coffee/front.jpg', 'Front of the pouch'],
      ['ritual/glass-coffee.jpg', 'The cup it becomes'],
      ['products/collagen-coffee/back.jpg', 'Back of the pouch — spec table'],
      ['products/collagen-coffee/use.jpg', 'Collagen coffee poured'],
      ['08-family-lineup.jpg', 'The ritual line in a row'],
    ],
    cmp: {
      h: 'Ordinary coffee, "protein coffee", <em>and ours.</em>',
      cols: ['What you\'re told', 'Your normal coffee', '"Protein" coffee', 'SAFA Collagen Coffee'],
      rows: [
        ['Collagen per cup', 'none', '"added collagen"', '10 g Type I, stated per cup'],
        ['Which collagen', '\u2014', 'unnamed blend', 'the same batch as our pouch, traced'],
        ['Molecular weight', '\u2014', 'not stated', '~2 kDa, distribution published'],
        ['What it tastes of', 'coffee', 'often chalky', 'coffee \u2014 that is the whole point'],
        ['Lab report you can read', 'n/a', 'no', 'QR on every pouch'],
      ],
    },
    film: { h: 'Poured, <em>not promised.</em>', src: 'assets/video/products/collagen-coffee.mp4', poster: 'assets/img/products/collagen-coffee/use.jpg', alt: 'Frothy collagen coffee being poured' },
    also: { kick: 'The rest of the ritual', h: 'One dose, <em>four ways.</em>', items: ['marine-collagen', 'collagen-matcha', 'qahwa-collagen', 'sidr-sticks'] },
  },

  {
    slug: 'collagen-matcha', file: 'collagen-matcha.html', navKey: 'Collagen',
    name: 'Collagen Matcha',
    h1: 'Collagen <em>Matcha</em>',
    title: 'Collagen Matcha — ceremonial grade with marine collagen · SAFA Nutrition',
    meta: 'Ceremonial-grade Japanese matcha with a full 10 g marine collagen dose whisked inside. 286 g, 25 servings.',
    flag: 'The ritual line · With marine collagen',
    cat: 'Ceremonial grade · 286 g, 25 servings',
    sub: 'Ceremonial grade · 286 g, 25 servings — stone-ground Japanese matcha with the day\'s full 10 g marine collagen dose whisked invisibly inside. Green as it should be.',
    dir: 'products/collagen-matcha', kit: kits.matcha,
    ing: ["matcha", "marine-collagen", "vitamin-c"],
    batch: 'SF-25-021', tested: '09 Aug 2026',
    bullets: [
      ['spoon', '10 g Type I collagen, whisked invisibly inside'],
      ['leaf', 'First-harvest ceremonial grade, stone-ground in Japan'],
      ['doc', 'Radiation and lead tested as standard for Japanese imports'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €65', label: 'Free with a plan' },
      { x: '15%', y: '30%', was: '€22', label: 'Bamboo chasen' },
      { x: '15%', y: '62%', was: '€19', label: 'Ceramic bowl' },
      { x: '85%', y: '46%', side: 'r', was: '€12', label: 'Whisk stand' },
    ],
    vsfoot: '10 g collagen · ceremonial grade',
    pickers: [
      { lab: 'Select flavour', opts: [
        ['Matcha — ceremonial grade', 'Stone-ground, first harvest.', 'assets/img/products/collagen-matcha/front.jpg'],
        ['Coffee — single-origin arabica', 'Lightly roasted, ground for hot brewing.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['Qahwa — cardamom & saffron', 'Wave 2. The ritual no one else sells.', 'assets/img/products/qahwa-collagen/front.jpg'],
        ['Unflavoured — stir into anything', 'The daily workhorse pouch.', 'assets/img/products/marine-collagen/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the matcha.', 'assets/img/products/collagen-matcha/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'The traditional sweetener for a bitter bowl.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Daily Sachets — €45', 'Thirty pre-weighed doses for travelling.', 'assets/img/products/daily-sachets/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Pouch', s: '25 bowls · a working month', p: 44, u: '€1.76 / bowl' },
      { n: '2 Pouches', s: '50 bowls', p: 79, was: 88, save: 'Save 10%', u: '€1.58 / bowl' },
      { n: '3 Pouches', s: 'a season\'s supply', p: 110, was: 132, save: 'Save 17%', u: '€1.47 / bowl' },
    ],
    assayHead: 'PER BOWL', assayNote: 'Same certified collagen batch as the Marine Collagen pouch. The matcha\'s origin and harvest sit on this batch\'s page. Allergen: contains fish.',
    assay: [
      ['Caffeine', '45 mg — gentler than coffee'],
      ['Marine collagen', '10 g · Type I', 1],
      ['Protein', '10 g / serving'],
      ['Vitamin C', '80 mg · 100% RI'],
      ['Grade', 'ceremonial, first harvest', 1],
    ],
    blurb: 'One scoop, 80 °C water — never boiling, it scorches the leaf. Whisk in a W motion, or thick with less water for a latte.',
    acc: [
      ['The matcha & the dose', 'First-harvest, stone-ground ceremonial matcha from Japan, blended with hydrolysed marine collagen peptides. One scoop per bowl, 80 °C water, whisk. Drink it straight or as a latte — the collagen dissolves clear and changes nothing about the taste.', 1],
      ['What the lab checked', 'The collagen carries its full batch record; the matcha is tested for radiation and lead as standard for Japanese imports. Both reports behind the QR.'],
      ['How to use it', 'One scoop (11.4 g), 80 °C water — never boiling, it scorches the leaf. Whisk in a W motion. For a latte: whisk thick with less water, pour over warm milk.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened pouches returnable within 30 days.'],
    ],
    gallery: [
      ['products/collagen-matcha/front.jpg', 'Front of the pouch'],
      ['ritual/glass-matcha.jpg', 'The bowl it becomes'],
      ['products/collagen-matcha/back.jpg', 'Back of the pouch — spec table'],
      ['products/collagen-matcha/use.jpg', 'Matcha whisked to a foam'],
      ['08-family-lineup.jpg', 'The ritual line in a row'],
    ],
    cmp: {
      h: 'Supermarket matcha, "collagen matcha", <em>and ours.</em>',
      cols: ['What you\'re told', 'Culinary-grade matcha', '"Collagen matcha"', 'SAFA Collagen Matcha'],
      rows: [
        ['Grade', 'culinary, often dull', '"premium"', 'ceremonial, first harvest'],
        ['Collagen per bowl', 'none', '"contains collagen"', '10 g Type I, stated per bowl'],
        ['Import testing', 'rarely shown', 'not shown', 'lead and radiation, published'],
        ['Sweeteners / fillers', 'often added', 'usually added', 'none \u2014 matcha and collagen only'],
        ['Lab report you can read', 'no', 'no', 'QR on every pouch'],
      ],
    },
    film: { h: 'Whisked, <em>as always.</em>', src: 'assets/video/products/collagen-matcha.mp4', poster: 'assets/img/products/collagen-matcha/use.jpg', alt: 'Matcha being whisked to a foam' },
    also: { kick: 'The rest of the ritual', h: 'One dose, <em>four ways.</em>', items: ['marine-collagen', 'collagen-coffee', 'qahwa-collagen', 'sidr-honey'] },
  },

  {
    slug: 'qahwa-collagen', file: 'qahwa-collagen.html', navKey: 'Collagen', preorder: true,
    name: 'Qahwa + Collagen',
    h1: 'Qahwa + <em>Collagen</em>',
    title: 'Qahwa + Collagen — Arabic coffee with cardamom, saffron and marine collagen · SAFA Nutrition',
    meta: 'Arabic coffee with true hail cardamom and negin saffron, carrying a full 10 g marine collagen dose. 380 g, 25 servings.',
    flag: 'The ritual line · Ours alone · Wave 2',
    cat: 'Arabic coffee, cardamom & saffron · 380 g, 25 servings',
    sub: 'Arabic coffee, cardamom &amp; saffron · 380 g, 25 servings — the qahwa your family already brews, rebuilt to carry a full 10 g collagen dose. The ritual line no one else can follow.',
    dir: 'products/qahwa-collagen', kit: kits.qahwa,
    ing: ["arabica", "cardamom", "saffron", "marine-collagen"],
    batch: 'SF-25-041', tested: 'wave 2 — before first sale',
    bullets: [
      ['spoon', '10 g Type I collagen dissolved silently in the simmer'],
      ['leaf', 'True hail cardamom and negin-grade saffron threads'],
      ['doc', 'Saffron ships with its own ISO 3632 grade per batch'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €59', label: 'Free with a plan' },
      { x: '15%', y: '30%', was: '€29', label: 'Dallah pourer' },
      { x: '15%', y: '62%', was: '€18', label: 'Two finjan cups' },
      { x: '85%', y: '46%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: '10 g collagen · one dallah, one dose',
    pickers: [
      { lab: 'Select flavour', opts: [
        ['Qahwa — cardamom & saffron', 'The dallah blend, with a full dose inside.', 'assets/img/products/qahwa-collagen/front.jpg'],
        ['Coffee — single-origin arabica', 'Lightly roasted, ground for hot brewing.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['Matcha — ceremonial grade', 'Stone-ground, first harvest.', 'assets/img/products/collagen-matcha/front.jpg'],
        ['Unflavoured — stir into anything', 'The daily workhorse pouch.', 'assets/img/products/marine-collagen/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the qahwa.', 'assets/img/products/qahwa-collagen/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'Qahwa and honey, the way it is served.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Sidr Sticks — €39', 'A stick beside the finjan.', 'assets/img/products/sidr-sticks/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Pouch', s: '25 servings · pre-order', p: 44, save: 'Wave 2', u: '€1.76 / cup' },
      { n: '2 Pouches', s: '50 servings', p: 79, was: 88, save: 'Save 10%', u: '€1.58 / cup' },
      { n: '3 Pouches', s: 'a season\'s supply', p: 110, was: 132, save: 'Save 17%', u: '€1.47 / cup' },
    ],
    assayHead: 'PER CUP', assayNote: 'Launching in wave 2 — the batch page goes live before the first pouch sells, like everything else in the house. Allergen: contains fish.',
    assay: [
      ['Caffeine', '62 mg / cup'],
      ['Marine collagen', '10 g · Type I', 1],
      ['Cardamom', 'true hail, ground'],
      ['Saffron', 'negin threads'],
      ['Taste', 'qahwa, as it should be', 1],
    ],
    blurb: 'Two scoops per small dallah. To the edge of a simmer, twice — never a rolling boil. Rest a minute, pour, serve with dates.',
    acc: [
      ['The qahwa & the dose', 'Lightly roasted arabica ground fine for the dallah, with true hail cardamom and negin-grade saffron threads — the blend your grandmother would recognise — plus hydrolysed marine collagen that dissolves silently in the simmer.', 1],
      ['How to brew it', 'Two scoops (15.2 g) per small dallah. Bring to the edge of a simmer — never a rolling boil — twice. Rest a minute, pour into small cups, serve with dates. One dallah carries the full daily dose.'],
      ['What the lab checked', 'Collagen batch record (protein, MW, metals, cup test) plus saffron authenticity — negin threads are the most-adulterated spice on earth, so ours ships with its own ISO 3632 grade on the batch page.'],
      ['Shipping & returns', 'Wave 2 pre-orders ship the week the first batch clears its lab report. EU-wide, free over €55.'],
    ],
    gallery: [
      ['products/qahwa-collagen/front.jpg', 'Front of the pouch'],
      ['ritual/glass-qahwa.jpg', 'The finjan it becomes'],
      ['products/qahwa-collagen/back.jpg', 'Back of the pouch — spec table'],
      ['09-life-qahwa.jpg', 'The morning qahwa ritual'],
      ['08-family-lineup.jpg', 'The ritual line in a row'],
    ],
    cmp: {
      h: 'Café qahwa, instant qahwa, <em>and ours.</em>',
      cols: ['What you\'re told', 'Café qahwa', 'Instant qahwa mix', 'SAFA Qahwa + Collagen'],
      rows: [
        ['Cardamom', 'varies by hand', 'flavouring', 'true hail pods, ground fresh'],
        ['Saffron', 'rarely real', 'colouring', 'negin threads, ISO 3632 graded'],
        ['Collagen per cup', 'none', 'none', '10 g Type I, dissolved in the simmer'],
        ['Sugar', 'often added', 'usually added', 'none'],
        ['Lab report you can read', 'no', 'no', 'QR on every pouch'],
      ],
    },
    film: { h: 'The ritual, <em>on record.</em>', src: 'assets/video/safa-qahwa.mp4', poster: 'assets/img/09-life-qahwa.jpg', alt: 'Morning qahwa ritual film' },
    also: { kick: 'The rest of the ritual', h: 'One dose, <em>four ways.</em>', items: ['marine-collagen', 'collagen-coffee', 'collagen-matcha', 'sidr-honey'] },
  },

  {
    slug: 'sidr-sticks', file: 'sidr-sticks.html', navKey: 'Honey',
    name: 'Sidr Sticks',
    h1: 'Sidr <em>Sticks</em>',
    title: 'Sidr Sticks — single-serve sticks of the Wadi Do\'an harvest · SAFA Nutrition',
    meta: 'Twelve 10 g single-serve sticks of raw Wadi Do\'an Sidr honey — the same batch as the 250 g jar.',
    flag: 'Companion to the jar · Same harvest',
    cat: '12 × 10 g single-serve · Net 120 g',
    sub: '12 × 10 g single-serve sticks · Net 120 g — the exact honey from the 250 g jar, batch for batch, poured into a stick you can carry. Tear, pour, done.',
    dir: 'products/sidr-sticks', kit: kits.sticks,
    ing: ["sidr-blossom", "raw-honey"],
    ingNote: 'The ingredients list reads: <b>honey</b>. Same batch as the jar, same single flowering — just poured into a stick.',
    batch: 'SF-25-011', tested: '12 Aug 2026',
    bullets: [
      ['spoon', 'Ten grams is one honest spoonful — the dose stays true'],
      ['doc', 'Same batch, same published report as the 250 g jar'],
      ['leaf', 'Cold-filled — never heated to make it flow'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €24', label: 'Free with a plan' },
      { x: '15%', y: '38%', was: '€12', label: 'Linen carry pouch' },
      { x: '85%', y: '58%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Same batch as the jar — SF-25-011',
    pickers: [
      { lab: 'Select format', opts: [
        ['12 × 10 g sticks — pocketable', 'Gym bag, desk drawer, carry-on, suhoor away.', 'assets/img/products/sidr-sticks/front.jpg'],
        ['250 g jar — the shelf classic', 'Spoon, drizzle, gift. 17 servings.', 'assets/img/products/sidr-honey/front.jpg'],
        ['3 × 40 g tasting flight', 'Do\'an, Black Seed, Reserve — gift-boxed.', 'assets/img/products/tasting-flight/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the sticks.', 'assets/img/products/sidr-sticks/front.jpg'],
        ['+ Black Seed Softgels — €27', 'The travel pair: a stick and a softgel.', 'assets/img/products/black-seed-softgels/front.jpg'],
        ['+ Daily Sachets — €45', 'Collagen in the same torn-and-done format.', 'assets/img/products/daily-sachets/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Box', s: '12 sticks · the travel week', p: 39, u: '€3.25 / stick' },
      { n: '2 Boxes', s: '24 sticks', p: 70, was: 78, save: 'Save 10%', u: '€2.92 / stick' },
      { n: '3 Boxes', s: '36 sticks', p: 99, was: 117, save: 'Save 15%', u: '€2.75 / stick' },
    ],
    assayHead: 'BATCH SF-25-011', assayNote: 'One QR, one report: the sticks carry the same batch page as the jar they were filled from.',
    assay: [
      ['Honey', 'raw Wadi Do\'an Sidr — nothing else', 1],
      ['Pollen origin', 'Ziziphus — monofloral', 1],
      ['Per stick', '10 g · 33 kcal'],
      ['Batch', 'identical to the 250 g jar', 1],
      ['Filling', 'cold — never heated', 1],
    ],
    blurb: 'A jar asks for a spoon, a counter and a calm morning. A stick asks for nothing.',
    acc: [
      ['Why sticks', 'A jar asks for a spoon, a counter and a calm morning. A stick asks for nothing — gym bag, desk drawer, carry-on, suhoor away from home. Ten grams is one honest spoonful: the dose stays true wherever the day happens.', 1],
      ['What\'s inside', 'Raw Yemeni Sidr honey, batch SF-25-011 — the same coarse-strained, never-heated harvest as the jar. Cold-filled into food-grade sticks. Ingredients list: honey. Not suitable for infants under 12 months.'],
      ['How to use it', 'Tear the corner, pour it straight, or into warm water, tea or over breakfast. One stick, one sitting — no sticky jar edge, no spoon to wash.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened boxes returnable within 30 days.'],
    ],
    gallery: [
      ['products/sidr-sticks/front.jpg', 'Front of the box'],
      ['products/sidr-sticks/back.jpg', 'Back of the box — the record'],
      ['products/sidr-sticks/use.jpg', 'A stick torn and poured into tea'],
      ['products/sidr-honey/front.jpg', 'The 250 g jar it came from'],
    ],
    cmp: {
      h: 'Supermarket honey sticks <em>and ours.</em>',
      cols: ['What you\'re told', 'Honey sachets', '"Artisan" sticks', 'SAFA Sidr Sticks'],
      rows: [
        ['What is inside', '"blossom honey" blend', 'unstated origin', "raw Wadi Do'an Sidr, one wadi"],
        ['Floral source proof', 'none', 'none', 'pollen analysis, published'],
        ['Heat treatment', 'pasteurised to flow', 'usually heated', 'cold-filled, never heated'],
        ['Traceable to a batch', 'no', 'no', 'same batch page as the jar'],
        ['Lab report you can read', 'no', 'no', 'QR on every box'],
      ],
    },
    film: { h: 'Tear. Pour. <em>Done.</em>', src: 'assets/video/products/sidr-sticks.mp4', poster: 'assets/img/products/sidr-sticks/use.jpg', alt: 'Honey stick torn and poured into tea' },
    also: { kick: 'From the same harvest', h: 'The jar it <em>came from.</em>', items: ['sidr-honey', 'black-seed-oil', 'marine-collagen', 'collagen-coffee'] },
  },
  {
    slug: 'black-seed-softgels', file: 'black-seed-softgels.html', navKey: 'Black seed',
    name: 'Black Seed Softgels',
    h1: 'Black Seed <em>Softgels</em>',
    title: "Black Seed Softgels — 1000 mg, TQ-graded, halal-certified shell · SAFA Nutrition",
    meta: 'Sixty 1000 mg softgels of the same cold-pressed, TQ-graded Nigella sativa oil as the bottle, in a halal-certified shell.',
    flag: 'Companion to the oil',
    cat: '60 softgels · 1000 mg · halal-certified shell',
    sub: "60 × 1000 mg — the same cold-pressed, TQ-graded oil that goes into the bottle, sealed into a softgel. For the mornings a spoon is not practical, and for anyone who cannot get past the pepper.",
    dir: 'products/black-seed-softgels', kit: kits.oil,
    batch: 'SF-25-032', tested: '07 Aug 2026',
    bullets: [
      ['doc', 'Filled from the same TQ-graded batch as the 100 ml bottle'],
      ['leaf', 'Halal-certified fish-gelatin shell — never bovine'],
      ['spoon', 'No pepper, no aftertaste, no measuring'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €29', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€9', label: 'Dosing pipette' },
      { x: '15%', y: '66%', was: '€8', label: 'Glass shot cup' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Same oil, same batch, no pepper',
    pickers: [
      { lab: 'Select format', opts: [
        ['60 softgels — 1000 mg', 'Two a day. Thirty days, no spoon.', 'assets/img/products/black-seed-softgels/front.jpg'],
        ['100 ml oil — pipette bottle', 'The classic. Peppery, as the seed is.', 'assets/img/products/black-seed-oil/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the softgels.', 'assets/img/products/black-seed-softgels/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'The sunnah spoon, the traditional way.', 'assets/img/products/sidr-honey/front.jpg'],
        ['+ Sidr Sticks — €39', 'The travel pair: a stick and a softgel.', 'assets/img/products/sidr-sticks/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Jar', s: '60 softgels · 30 days', p: 27, u: '€0.90 / day' },
      { n: '2 Jars', s: '60 days', p: 49, was: 54, save: 'Save 9%', u: '€0.82 / day' },
      { n: '3 Jars', s: "a season's supply", p: 69, was: 81, save: 'Save 15%', u: '€0.77 / day' },
    ],
    assayHead: 'BATCH SF-25-032', assayNote: 'The softgels are filled from the oil batch named above — one pressing, one lab report, two formats. Allergen: fish (shell).',
    assay: [
      ['Thymoquinone (HPLC)', '2.1% — same batch as the oil', 1],
      ['Oil per softgel', '1000 mg'],
      ['Shell', 'fish gelatin — halal-certified line', 1],
      ['Solvent residue', 'none detected', 1],
      ['Peroxide value', 'fresh — within spec', 1],
    ],
    blurb: 'Two softgels daily with water, with or without food. Same oil, same batch record, none of the pepper.',
    acc: [
      ['What is inside', 'Cold-pressed Ethiopian Nigella sativa oil — the same pressing as the 100 ml bottle, carrying the same thymoquinone grade — sealed into a halal-certified fish-gelatin softgel. Nothing else: no carrier oils, no fillers, no titanium dioxide.<table><tr><td>Oil per softgel</td><td>1000 mg</td></tr><tr><td>Shell</td><td>fish gelatin, halal-certified line</td></tr><tr><td>Softgels per jar</td><td>60</td></tr><tr><td>Allergen</td><td>fish (shell)</td></tr></table>', 1],
      ['What the lab checked', 'The oil carries the full black seed panel — thymoquinone by HPLC, peroxide and anisidine, fatty-acid profile against dilution, hexane residue, heavy metals and aflatoxins. The shell is certified separately; both records sit behind the QR.'],
      ['How to use it', 'Two softgels a day with water. If you already take the oil by spoon, these are for travel and for the office — same dose, no bottle to spill and no taste to negotiate.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened jars returnable within 30 days.'],
    ],
    gallery: [
      ['products/black-seed-softgels/front.jpg', 'Front of the jar'],
      ['products/black-seed-softgels/detail.jpg', 'Softgel macro'],
      ['products/black-seed-softgels/use.jpg', 'Taken with a glass of water'],
      ['products/black-seed-oil/front.jpg', 'The oil it is filled from'],
    ],
    ing: ['nigella'],
    ingNote: 'One ingredient, in a capsule instead of a spoon. The shell is the only other thing in the jar, and it is certified separately.',
    film: { h: 'The same dose, <em>without the spoon.</em>', src: 'assets/video/products/black-seed-softgels.mp4', poster: 'assets/img/products/black-seed-softgels/use.jpg', alt: 'Black seed softgels taken with a glass of water' },
    also: { kick: 'The same seed, other forms', h: 'The oil it <em>came from.</em>', items: ['black-seed-oil', 'sidr-honey', 'sidr-sticks', 'morning-ritual'] },
  },

  {
    slug: 'daily-sachets', file: 'daily-sachets.html', navKey: 'Collagen',
    name: 'Daily Sachets',
    h1: 'Daily <em>Sachets</em>',
    title: 'Daily Sachets — 30 pre-weighed 10 g collagen doses · SAFA Nutrition',
    meta: 'Thirty pre-weighed 10 g sachets of the same certified Type I marine collagen as the 300 g pouch. One sachet, one day.',
    flag: 'Companion to the pouch',
    cat: '30 × 10 g sachets · Type I marine collagen',
    sub: 'Thirty pre-weighed 10 g doses of the same certified collagen that fills the 300 g pouch. No scoop, no guesswork, no half-doses — one sachet is one day, wherever the day happens.',
    dir: 'products/daily-sachets', kit: kits.collagen,
    batch: 'SF-25-021', tested: '09 Aug 2026',
    bullets: [
      ['doc', 'Same certified batch as the 300 g pouch'],
      ['spoon', 'One sachet is exactly one 10 g dose — no scoop to lose'],
      ['leaf', 'Dissolves clear into anything, hot or cold'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Glass beaker' },
      { x: '15%', y: '66%', was: '€9', label: 'Steel dosing spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'One sachet · one 10 g dose',
    pickers: [
      { lab: 'Select format', opts: [
        ['30 sachets — pre-weighed', 'Torn and done. Thirty days.', 'assets/img/products/daily-sachets/front.jpg'],
        ['300 g pouch — 30 doses', 'The daily workhorse, scoop included.', 'assets/img/products/marine-collagen/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the sachets.', 'assets/img/products/daily-sachets/front.jpg'],
        ['+ Sidr Sticks — €39', 'The travel pair: a stick and a sachet.', 'assets/img/products/sidr-sticks/front.jpg'],
        ['+ Collagen Coffee — €42', 'A sachet for travel, a cup for home.', 'assets/img/products/collagen-coffee/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Box', s: '30 sachets · 30 days', p: 45, u: '€1.50 / day' },
      { n: '2 Boxes', s: '60 days', p: 82, was: 90, save: 'Save 9%', u: '€1.37 / day' },
      { n: '3 Boxes', s: "a season's supply", p: 114, was: 135, save: 'Save 16%', u: '€1.27 / day' },
    ],
    assayHead: 'BATCH SF-25-021', assayNote: 'Filled from the same hydrolysis run as the 300 g pouch — one batch record covers both. Allergen: fish.',
    assay: [
      ['Protein (dry basis)', '≥ 90%', 1],
      ['Per sachet', '10 g · Type I'],
      ['Avg. molecular weight', '~2 kDa — stated, not implied'],
      ['Heavy metals panel', 'within limits', 1],
      ['Odour / taste', 'neutral — no fishy note', 1],
    ],
    blurb: 'Tear, pour, stir. The sachet exists because a scoop at the bottom of a pouch is the reason most people stop.',
    acc: [
      ['Why sachets', 'A pouch and a scoop ask you to measure something at seven in the morning, and a half-scoop is how a daily habit quietly becomes a weekly one. A sachet is the dose, already decided — and it fits in a bag, a drawer or a suitcase.', 1],
      ['What the lab checked', 'Identical to the pouch: protein by Kjeldahl, hydroxyproline, molecular-weight distribution, heavy metals, microbiology and a cup test for off-notes. One batch, one published report, two formats.'],
      ['How to use it', 'One sachet into anything — water, juice, coffee, yoghurt. It dissolves clear and tastes of nothing. Daily, with or without food.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened boxes returnable within 30 days.'],
    ],
    gallery: [
      ['products/daily-sachets/front.jpg', 'Front of the box'],
      ['ritual/glass-collagen.jpg', 'Dissolved clear in a glass'],
      ['products/marine-collagen/use.jpg', 'Stirred into a glass'],
      ['products/marine-collagen/front.jpg', 'The 300 g pouch it is filled from'],
    ],
    ing: ['marine-collagen', 'vitamin-c', 'zinc-biotin'],
    film: { h: 'It dissolves <em>clear.</em>', src: 'assets/video/products/marine-collagen.mp4', poster: 'assets/img/products/marine-collagen/use.jpg', alt: 'Collagen dissolving clear in a glass of water' },
    also: { kick: 'The same dose, other rituals', h: 'One dose, <em>four ways.</em>', items: ['marine-collagen', 'collagen-coffee', 'collagen-matcha', 'morning-ritual'] },
  },

  {
    slug: 'black-seed-honey', file: 'black-seed-honey.html', navKey: 'Honey', preorder: true,
    name: 'Black Seed Honey',
    h1: 'Black Seed <em>Honey</em>',
    title: "Black Seed Honey — Sidr honey folded with cold-pressed nigella · SAFA Nutrition",
    meta: "Wadi Do'an Sidr honey folded with our own cold-pressed black seed oil. Two published batch records in one jar. Wave 2.",
    flag: 'The bridge jar · Wave 2',
    cat: 'Sidr honey with cold-pressed nigella · 250 g',
    sub: "The sunnah spoon, already mixed: Wadi Do'an Sidr honey folded cold with our own TQ-graded black seed oil. Two products, two published batch records, one jar and one spoon in the morning.",
    dir: 'products/black-seed-honey', kit: kits.honey,
    batch: 'SF-25-051', tested: 'wave 2 — before first sale',
    bullets: [
      ['doc', 'Carries both batch records — the honey and the oil'],
      ['leaf', 'Folded cold, never heated to blend'],
      ['spoon', 'The sunnah morning spoon, without the measuring'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Olive-wood dipper' },
      { x: '15%', y: '66%', was: '€9', label: 'Ceramic spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Two batch records, one jar',
    pickers: [
      { lab: 'Select format', opts: [
        ['250 g jar — the bridge jar', 'Honey and nigella, already folded.', 'assets/img/products/black-seed-honey/front.jpg'],
        ['250 g Sidr Honey — plain', 'The classic, nothing added.', 'assets/img/products/sidr-honey/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the jar.', 'assets/img/products/black-seed-honey/front.jpg'],
        ['+ Black Seed Oil 100 ml — €29', 'For anyone who wants to fold their own.', 'assets/img/products/black-seed-oil/front.jpg'],
        ['+ The Tasting Flight — €35', 'All three honeys, gift-boxed.', 'assets/img/products/tasting-flight/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Jar', s: '250 g · wave 2 pre-order', p: 29, save: 'Wave 2', u: '€1.71 / serving' },
      { n: '2 Jars', s: 'one to keep, one to gift', p: 54, was: 58, save: 'Save 7%', u: '€1.59 / serving' },
      { n: '3 Jars', s: "a season's supply", p: 75, was: 87, save: 'Save 14%', u: '€1.47 / serving' },
    ],
    assayHead: 'BATCH SF-25-051', assayNote: 'Launching in wave 2. Both parent batch pages — the honey and the oil — go live before the first jar sells, like everything else in the house.',
    assay: [
      ['Honey base', "raw Wadi Do'an Sidr — SF-25-011", 1],
      ['Black seed oil', 'cold-pressed, TQ 2.1% — SF-25-031', 1],
      ['Blending', 'folded cold, never heated', 1],
      ['Ratio', '95% honey · 5% oil'],
      ['Ingredients', 'honey, black seed oil. Nothing else', 1],
    ],
    blurb: 'A spoon in the morning. Peppery at the finish where the nigella comes through, which is exactly how you know it is in there.',
    acc: [
      ['Why this jar exists', 'The sunnah morning spoon is honey and black seed together, and most people end up holding two containers and guessing a ratio. This is that spoon, decided: our Sidr honey folded cold with our own black seed oil, at a ratio that carries a meaningful dose of nigella without burying the honey.', 1],
      ['What the lab checked', 'Nothing new — both halves arrive already tested. The honey carries its pollen, adulteration, antibiotic and freshness panel; the oil carries its thymoquinone, peroxide, fatty-acid and solvent panel. The jar names both batch numbers so you can read either report.'],
      ['How to use it', 'One spoon in the morning, plain or in warm water. Not suitable for infants under 12 months. Peppery at the finish — that is the seed, not a fault.'],
      ['Shipping & returns', 'Wave 2 pre-orders ship the week the first batch clears its lab report. EU-wide, free over €55.'],
    ],
    gallery: [
      ['products/black-seed-honey/front.jpg', 'Front of the jar'],
      ['10-life-honey.jpg', 'Drizzled over labneh'],
      ['products/black-seed-oil/use.jpg', 'Oil onto a spoon of honey'],
      ['products/sidr-honey/front.jpg', 'The Sidr honey it starts from'],
    ],
    ing: ['sidr-blossom', 'raw-honey', 'nigella'],
    ingNote: 'Two ingredients, and we publish a lab report for each of them. The list on the jar reads: honey, black seed oil.',
    film: { h: 'The spoon, <em>already made.</em>', src: 'assets/video/products/black-seed-oil.mp4', poster: 'assets/img/products/black-seed-oil/use.jpg', alt: 'Black seed oil dropped onto a spoon of honey' },
    also: { kick: 'Either half, on its own', h: 'The two it <em>comes from.</em>', items: ['sidr-honey', 'black-seed-oil', 'black-seed-softgels', 'tasting-flight'] },
  },

  {
    slug: 'tasting-flight', file: 'tasting-flight.html', navKey: 'Honey',
    name: 'The Tasting Flight',
    h1: 'The Tasting <em>Flight</em>',
    title: 'The Tasting Flight — three 40 g honeys, gift-boxed with the report booklet · SAFA Nutrition',
    meta: "Three 40 g honeys — Wadi Do'an Sidr, Black Seed Honey and the Reserve lot — boxed with the printed batch booklet.",
    flag: 'The gifting door',
    cat: 'Three 40 g jars · gift-boxed with the booklet',
    sub: "Three 40 g jars — Wadi Do'an Sidr, Black Seed Honey and the Reserve lot — boxed with the printed batch booklet. The way to try the range without committing to a full jar, and the way to give it.",
    dir: 'products/tasting-flight', kit: kits.honey,
    batch: 'SF-25-011', tested: '12 Aug 2026',
    bullets: [
      ['spoon', 'Three honeys, side by side, at tasting size'],
      ['doc', 'The printed batch booklet for all three, in the box'],
      ['leaf', 'Nothing added to any of them'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Olive-wood dipper' },
      { x: '15%', y: '66%', was: '€9', label: 'Ceramic spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Three honeys · one printed booklet',
    pickers: [
      { lab: 'Select format', opts: [
        ['3 × 40 g flight — gift-boxed', "Do'an, Black Seed and Reserve.", 'assets/img/products/tasting-flight/front.jpg'],
        ['250 g jar — the shelf classic', 'If you already know which one.', 'assets/img/products/sidr-honey/front.jpg'],
        ['12 × 10 g sticks — pocketable', 'Same honey, no spoon needed.', 'assets/img/products/sidr-sticks/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the flight.', 'assets/img/products/tasting-flight/front.jpg'],
        ['+ Sidr Sticks — €39', 'Something to carry after the tasting.', 'assets/img/products/sidr-sticks/front.jpg'],
        ['+ The Morning Ritual — €59', 'The full fourteen-day starter kit.', 'assets/img/products/morning-ritual/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Box', s: '3 × 40 g · gift-boxed', p: 35, u: '€11.67 / jar' },
      { n: '2 Boxes', s: 'one to keep, one to give', p: 66, was: 70, save: 'Save 6%', u: '€11.00 / jar' },
      { n: '3 Boxes', s: 'the season of giving', p: 93, was: 105, save: 'Save 11%', u: '€10.33 / jar' },
    ],
    assayHead: 'BATCHES IN THIS BOX', assayNote: 'Every jar in the flight carries its own batch number and its own published report — the booklet in the box prints all three side by side.',
    assay: [
      ['Wadi Do\'an Sidr', 'SF-25-011 · pollen verified', 1],
      ['Black Seed Honey', 'SF-25-051 · wave 2', 1],
      ['Reserve lot', 'single apiary — numbered'],
      ['Per jar', '40 g · ≈3 servings'],
      ['Booklet', 'printed, all three reports', 1],
    ],
    blurb: 'Taste them plain and in order — Sidr first, then Reserve, then Black Seed last, because the nigella will hold on to your palate.',
    acc: [
      ['What is in the box', "Three 40 g jars in a lined gift box with the printed batch booklet. Wadi Do'an Sidr is the house flagship; the Reserve lot is a single-apiary selection from the same wadi; Black Seed Honey is the Sidr folded with our cold-pressed nigella.", 1],
      ['What the lab checked', 'Each honey carries the full panel — pollen analysis for floral origin, C4 and NMR against syrup adulteration, an antibiotic screen, plus HMF, diastase and moisture for freshness. Three jars, three reports, all printed in the booklet.'],
      ['How to taste them', 'Room temperature, clean spoon between each, and taste them plain before anything else. Sidr is caramel-deep with a gentle bitter finish; the Reserve is rounder; the Black Seed carries a peppery tail.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Gift note on request at checkout. Unopened boxes returnable within 30 days.'],
    ],
    gallery: [
      ['products/tasting-flight/front.jpg', 'The gift box, open'],
      ['10-life-honey.jpg', 'Sidr honey drizzled'],
      ['products/sidr-honey/front.jpg', 'The full-size jar'],
      ['products/black-seed-honey/front.jpg', 'Black Seed Honey'],
    ],
    ing: ['sidr-blossom', 'raw-honey'],
    ingNote: 'Two things, and one of them is a flower. Every jar in this box lists one ingredient: honey.',
    film: { h: 'The harvest, <em>on record.</em>', src: 'assets/video/safa-honey.mp4', poster: 'assets/img/10-life-honey.jpg', alt: 'Sidr honey pouring, cinematic film' },
    also: { kick: 'After the tasting', h: 'The full-size <em>jars.</em>', items: ['sidr-honey', 'black-seed-honey', 'sidr-sticks', 'morning-ritual'] },
  },

  {
    slug: 'morning-ritual', file: 'morning-ritual.html', navKey: 'Bundles & kits',
    name: 'The Morning Ritual',
    h1: 'The Morning <em>Ritual</em>',
    title: 'The Morning Ritual — a fourteen-day starter kit across the whole house · SAFA Nutrition',
    meta: 'Fourteen mornings in one box: Sidr sticks, collagen sachets and black seed softgels, at the dose we would actually take.',
    flag: 'The starter kit',
    cat: '14 days · sticks, sachets and softgels',
    sub: 'Fourteen mornings in one box: seven Sidr honey sticks, seven collagen sachets and twenty-eight black seed softgels. The whole house at the dose we would actually take it, before you commit to a full jar of anything.',
    dir: 'products/morning-ritual', kit: kits.collagen,
    batch: 'SF-25-011 · 021 · 032', tested: 'all three published',
    bullets: [
      ['doc', 'Three products, three published batch reports, one box'],
      ['spoon', 'Pre-portioned — nothing to measure for fourteen days'],
      ['leaf', 'The honest way to try the range before a full jar'],
    ],
    pins: [
      { x: '50%', y: '9%', head: true, was: 'Kit worth €35', label: 'Free with a plan' },
      { x: '15%', y: '34%', was: '€14', label: 'Glass beaker' },
      { x: '15%', y: '66%', was: '€9', label: 'Steel dosing spoon' },
      { x: '85%', y: '50%', side: 'r', was: '€12', label: 'Batch booklet' },
    ],
    vsfoot: 'Fourteen mornings · three batch reports',
    pickers: [
      { lab: 'Select format', opts: [
        ['14-day kit — sticks, sachets, softgels', 'The whole house, pre-portioned.', 'assets/img/products/morning-ritual/front.jpg'],
        ['The Tasting Flight — 3 × 40 g', 'Honey only, gift-boxed.', 'assets/img/products/tasting-flight/front.jpg'],
      ]},
      { lab: 'Add a companion', opts: [
        ['No companion', 'Just the kit.', 'assets/img/products/morning-ritual/front.jpg'],
        ['+ Collagen Coffee — €42', 'For the mornings you want a cup, not a sachet.', 'assets/img/products/collagen-coffee/front.jpg'],
        ['+ Sidr Honey 250 g — €49', 'The full jar, for when the sticks run out.', 'assets/img/products/sidr-honey/front.jpg'],
      ]},
    ],
    qty: [
      { n: '1 Kit', s: '14 mornings', p: 59, u: '€4.21 / morning' },
      { n: '2 Kits', s: '28 mornings', p: 108, was: 118, save: 'Save 8%', u: '€3.86 / morning' },
      { n: '3 Kits', s: 'six weeks, or three gifts', p: 152, was: 177, save: 'Save 14%', u: '€3.62 / morning' },
    ],
    assayHead: 'THE BATCHES IN THIS BOX', assayNote: 'Three products, three separate published reports. The booklet in the box prints all three, and every sachet, stick and jar carries the QR for its own.',
    assay: [
      ['Sidr honey sticks', 'SF-25-011 · pollen verified', 1],
      ['Collagen sachets', 'SF-25-021 · protein ≥90%', 1],
      ['Black seed softgels', 'SF-25-032 · TQ 2.1%', 1],
      ['Duration', '14 mornings'],
      ['Allergen', 'fish (collagen, softgel shell)'],
    ],
    blurb: 'A stick of honey, a sachet of collagen, two softgels. Fourteen mornings is long enough to know whether a habit is going to hold.',
    acc: [
      ['What is in the box', 'Seven 10 g Sidr honey sticks, seven 10 g collagen sachets and twenty-eight 1000 mg black seed softgels, with the printed batch booklet covering all three. Enough for fourteen mornings if you alternate the honey and the collagen, or seven if you take both together.', 1],
      ['What the lab checked', 'Each of the three arrives already tested and published: pollen and adulteration panels for the honey, protein and molecular weight for the collagen, thymoquinone and freshness for the black seed. Three reports, printed in the booklet and behind the QR on every unit.'],
      ['How to use it', 'A stick of honey by the spoon or in warm water; a sachet of collagen into whatever you are already drinking; two softgels with water. In any order — the point of the kit is to find which of the three you actually keep doing.'],
      ['Shipping & returns', 'EU-wide, free over €55. Same-day dispatch before 15:00 CET. Unopened kits returnable within 30 days.'],
    ],
    gallery: [
      ['products/morning-ritual/front.jpg', 'The kit, open'],
      ['products/sidr-sticks/use.jpg', 'A stick poured into tea'],
      ['ritual/glass-collagen.jpg', 'Collagen dissolved clear'],
      ['products/black-seed-softgels/use.jpg', 'Softgels with water'],
    ],
    ing: ['sidr-blossom', 'raw-honey', 'marine-collagen', 'nigella'],
    film: { h: 'Quiet mornings, <em>on record.</em>', src: 'assets/video/safa-family.mp4', poster: 'assets/img/08-family-lineup.jpg', alt: 'The SAFA product family, cinematic film' },
    also: { kick: 'When the kit runs out', h: 'The full-size <em>house.</em>', items: ['sidr-honey', 'marine-collagen', 'black-seed-softgels', 'daily-sachets'] },
  },

];

/* --- catalogue entries used by cross-sell shelves & card grids --------- */
export const catalogue = {
  'sidr-honey':          { href: 'product.html', name: 'Wild Yemeni Sidr Honey', flag: 'The house flagship', img: 'assets/img/products/sidr-honey/front.jpg', desc: 'Raw, pollen-verified, single wadi.', pr: '€49', note: '· 250 g' },
  'marine-collagen':     { href: 'marine-collagen.html', name: 'Marine Collagen', flag: 'The daily anchor', img: 'assets/img/products/marine-collagen/front.jpg', desc: 'Type I peptides, unflavoured — the workhorse.', pr: '€39', note: '· €1.30 / day' , glass: 'assets/img/ritual/glass-collagen.jpg' },
  'black-seed-oil':      { href: 'black-seed-oil.html', name: 'Black Seed Oil', flag: 'Cold-pressed', img: 'assets/img/products/black-seed-oil/front.jpg', desc: 'TQ 2.1% verified — the classic, measured.', pr: '€29', note: '· 100 ml' },
  'collagen-coffee':     { href: 'collagen-coffee.html', name: 'Collagen Coffee', flag: 'The ritual line', img: 'assets/img/products/collagen-coffee/front.jpg', desc: 'Single-origin arabica carrying the day\'s dose.', pr: '€42', note: '· 25 cups' , glass: 'assets/img/ritual/glass-coffee.jpg' },
  'collagen-matcha':     { href: 'collagen-matcha.html', name: 'Collagen Matcha', flag: 'The ritual line', img: 'assets/img/products/collagen-matcha/front.jpg', desc: 'Ceremonial matcha, whisked as always.', pr: '€44', note: '· 25 bowls' , glass: 'assets/img/ritual/glass-matcha.jpg' },
  'qahwa-collagen':      { href: 'qahwa-collagen.html', name: 'Qahwa + Collagen', flag: 'Ours alone', img: 'assets/img/products/qahwa-collagen/front.jpg', desc: 'Cardamom-and-saffron qahwa with a full dose.', pr: '€44', note: '· wave 2' , glass: 'assets/img/ritual/glass-qahwa.jpg' },
  'sidr-sticks':         { href: 'sidr-sticks.html', name: 'Sidr Sticks', flag: 'Same honey, new form', img: 'assets/img/products/sidr-sticks/front.jpg', desc: 'Twelve 10 g single-serve sticks.', pr: '€39', note: '· 12 sticks' },
  'daily-sachets':       { href: 'daily-sachets.html', name: 'Daily Sachets', flag: 'Companion to collagen', img: 'assets/img/products/daily-sachets/front.jpg', desc: 'Thirty pre-weighed doses. Torn and done.', pr: '€45', note: '· 30 days' },
  'black-seed-softgels': { href: 'black-seed-softgels.html', name: 'Black Seed Softgels', flag: 'Companion to the oil', img: 'assets/img/products/black-seed-softgels/front.jpg', desc: '1000 mg of the same TQ-graded oil, no pepper.', pr: '€27', note: '· 60 softgels' },
  'black-seed-honey':    { href: 'black-seed-honey.html', name: 'Black Seed Honey', flag: 'The bridge jar', img: 'assets/img/products/black-seed-honey/front.jpg', desc: 'Sidr-grade honey infused with cold-pressed nigella.', pr: '€29', note: '· wave 2' },
  'tasting-flight':      { href: 'tasting-flight.html', name: 'The Tasting Flight', flag: 'The gifting door', img: 'assets/img/products/tasting-flight/front.jpg', desc: 'Three 40 g honeys with the report booklet.', pr: '€35', note: '· gift-boxed' },
  'morning-ritual':      { href: 'morning-ritual.html', name: 'The Morning Ritual', flag: 'The starter kit', img: 'assets/img/products/morning-ritual/front.jpg', desc: 'Fourteen mornings of sticks, sachets and softgels.', pr: '€59', note: '· 14 days' },
};
