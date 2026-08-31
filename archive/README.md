# archive/

**Nothing in this folder is live. Do not take colours, fonts, tokens, or copy from it.**

This folder exists because two files in this repo previously presented themselves as current
brand guidance while describing directions that were abandoned. Both were plausible enough to
mislead — one is literally titled "SAFA Nutrition — Brand Guidelines" — so they were moved
somewhere the name cannot be mistaken for authority.

## Where the live answers are

| Question | File |
|---|---|
| **Colours, type, spacing — the shipped design system** | `site/assets/style.css` — the `:root` block is the source of truth |
| Copy, prices, specs | `build/data.mjs` (never edit `site/*.html`, it is generated) |
| Design direction, one paragraph | `README.md` § Design direction |
| Current state of play | `docs/00-session-handover.md` |
| What may be claimed about the product | `docs/approved-claims.md` |
| Social / TikTok + Instagram lane | `docs/06-feed-universe.md` |

## What is in here

### `brand-guidelines-concept-2026-07.html`

The original July 2026 concept exploration: deep green `#143B2D`, cream `#F5ECD9`, gold
`#C6A052`, Fraunces + Archivo + Reem Kufi. **None of it shipped.** The live identity is warm
paper, espresso ink, sidr amber, Newsreader + Archivo + Amiri.

Kept because it is the record of the first pass at the brand's visual language, and because
the Arabic-type question it opens (Reem Kufi vs. the shipped Amiri) may come back.

It also predates the self-hosted-fonts decision and still loads webfonts from Google's CDN —
which the shipped site deliberately avoids so EU visitor IPs never reach it.

## What is NOT in here, and why

**`design/frontend-design.md` stays where it is.** It is stamped as superseded at the top, but
unlike the file above it still carries live reasoning: the "Het Dossier" thesis that the
shipped site is *still* built on, and the design-critic jury that chose it (26/30, per-criterion
scores in §10). Its §0 table maps archived tokens against shipped ones directly.

**`brand/logo/` stays too.** Those four SVGs — `seal`, `wordmark-lockup`, `source-mark-ink`,
`source-mark-on-ink` — are production masters. Worth knowing: they are referenced by nothing in
`build/`, `site/`, or `packaging/`, so either they are print/packaging masters used outside this
repo, or they are orphans from the concept era. Confirm before relying on them.

**Reference captures are in the vault**, not here: `ibrah-knowledge/02_References/web-design/`
holds `ritual.md`, `aesop.md`, `sunna-supplements.md` (the anti-reference), `bottega-veneta.md`,
and `helder-dossier.md`. They live there so they compound across projects instead of being
stranded in one repo.
