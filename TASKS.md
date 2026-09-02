# Tasks

> New session? Read `docs/00-session-handover.md` first.

## Active

- [ ] **Review the rebuilt site** - conversion-first architecture (feelreformed.com skeleton, SAFA visual identity); the "ledger/index/folio" vocabulary is gone - today
  - Open `site/index.html` + `site/product.html`; content now lives in `build/data.mjs`, run `node build/build.mjs` to regenerate
- [ ] **Cost the free-with-a-plan starter kits** - the single largest COGS commitment on the site, and currently all placeholder numbers - today
  - Per family: honey €35 (olive-wood dipper, ceramic spoon, booklet) · collagen €35 · coffee €56 · matcha €65 · qahwa €59 · oil €29 · sticks €24
  - Decide: ship once with first order (current copy) vs. spread across cycles; confirm margin survives at the 15% subscription discount
- [ ] **Review the two Arabic lines** - flagged ⚠ DRAFT: footer tagline `صفا — نقاء يُتتبَّع إلى مصدره` and label line - today
- [ ] **Confirm pricing targets against margins** - €49 honey / €39 collagen / €29 BSO + companion prices are competitive-analysis proposals, not costed - today
  - Needs rough COGS per SKU (supplier quotes below feed this)
- [ ] **Trademark + domain check** - EUIPO search "SAFA Nutrition", secure domain (safanutrition.eu / .com) before any supplier outreach names the brand - today
- [ ] **Send QC spec to 2-3 sidr honey suppliers** - copy the honey section of `docs/03-supplier-qc-specs.md` into an RFQ; request golden sample + pollen report - today/tomorrow
  - Candidate route: Hadhramaut cooperatives via Gulf importers; ask explicitly for Wadi Do'an, autumn harvest, batch-coded
- [ ] **Send the collagen-drinks sample request** — the message is written and ready in `docs/07-supplier-sample-request.md` (email + short version); attach `docs/03` SKU 2 + SKU 4 - today
  - Ask covers: production-batch samples of matcha/qahwa/coffee ×2 each, batch COAs, halal cert with body + number, MOQ, pilot batch, price at 500/1,000/2,500, and the two technical questions (10 g loading, hot-cup fishy note)
  - Decide first whether the email names the brand — depends on the EUIPO/domain check below
- [ ] **Send QC spec to collagen + BSO white-label CMOs** - Elit Biotech (DE), White Label Collagen, BF-ESSE, A4 Group, build-your-own-brand.com - today/tomorrow
  - Ask: marine collagen per spec (protein ≥90%, MW report), BSO with TQ% by HPLC, halal-certified lines, MOQs + pilot batch pricing
- [ ] **Email halal certifier for scope + quote** - Halal Correct or HQC (NL) - certification is the gate for the word "halal" on anything
- [ ] **Email QSI Bremen** - price the per-batch honey panel (pollen, C4+NMR, antibiotics, HMF/diastase/moisture)
- [ ] **Start the Meta Business Manager work** — longest lead time in the plan, blocks nothing else. See `docs/09-meta-business-setup.md`
  - Secure the personal profile (2FA) → create the BM → Page + Instagram → buy the domain and verify it by DNS TXT → connect the Shopify Facebook & Instagram channel for pixel + CAPI + catalog
  - **Business verification is blocked on the BV/KvK registration** — submit the moment the KvK number exists
  - Tell Claude which state the current account is in (none / messy / restricted) for the specific next step
- [ ] **Set up the weekly competitor scan** — Meta Ad Library, free, 20 min on Sundays. See `docs/08-competitor-ad-intelligence.md`
  - Do NOT buy Foreplay or Atria yet: €0 ad spend today makes a $150/mo tool premature. Revisit ~4-6 weeks after first campaigns
  - The signal that matters: ad **start dates**. An ad running 30+ days is a winner, and that is free to read
- [ ] **Open the Shopify store shell** - Basic plan, EUR, NL market, connect domain - can hand the theme port to Claude once the shell exists

## Waiting On

- [ ] **Supplier golden samples + COAs** - blocks final label data, batch pages, and honest pricing - since 2026-08-11 (outreach not yet sent)
- [ ] **Halal certificate (body + № + expiry)** - blocks the word/seal on packaging and site

## Someday

- [ ] **Delegate to Claude:** NL/AR site versions (RTL), Shopify theme port per `docs/04`, batch-page template + real QR generation, per-product OG images
- [ ] **Reserve tier** - numbered-jar Sidr Reserve once a single-apiary lot is secured
- [ ] **Ramadan Suhoor/Iftar box** - pre-order flow ~6 weeks before Ramadan (Sunna's sold-out SKU proved demand)
- [ ] **Wave 2 SKUs** - Black Seed Honey, Qahwa+Collagen, TQ 3.0+ tier, softgels

## Done

- [x] ~~Shopify catalogue seeded: 12 products / 36 variants / 4 smart collections, all DRAFT, generated from `build/data.mjs`; stale HELDER test product + 4 superseded drafts archived~~ (2026-09-02)
- [x] ~~Supplier sample request for the three collagen drinks written, plus QC spec SKU 4 (flavoured blends) in `docs/03`~~ (2026-09-02)
- [x] ~~Competitor ad-intelligence system + Meta Business Manager setup path documented (`docs/08`, `docs/09`)~~ (2026-09-02)
- [x] ~~Removed the "halal-certified shell" claim from the softgels everywhere — no certificate is on file~~ (2026-09-02)

- [x] ~~Full media library: variation-pack visuals, usage stills, 6 usage films, 4 vertical reels~~ (2026-08-14)

- [x] ~~All 7 product pages built (front/back galleries, assay cards, price ladders)~~ (2026-08-14)
- [x] ~~Front + back visuals per product; Reformed-matrix strategy; Vercel config~~ (2026-08-14)

- [x] ~~Competitor research (Reformed, Balqees, Sunna) + reformatting strategy~~ (2026-08-11)
- [x] ~~Supplier QC specs per ingredient~~ (2026-08-11)
- [x] ~~Logo concept archived + production variants~~ (2026-08-11)
- [x] ~~Website design: 3 directions → critic verdict → homepage + Sidr PDP built & verified~~ (2026-08-11)
- [x] ~~Packaging system: 4 SKU labels + print spec~~ (2026-08-11)
- [x] ~~All three repos pushed to claude/halal-wellness-ecommerce-adg9xs~~ (2026-08-11)
