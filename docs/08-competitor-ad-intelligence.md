# Competitor ad intelligence — how we actually watch the space

Answers three questions: **which tool**, **what we look at**, and **what we are allowed to take**.
This is the operating manual for the Competitor Intel agent in `CLAUDE.md` §6.4.

---

## 1. Which tool — Meta's own, or Atria?

**Both, in that order, and not yet the paid one.**

### The free layer: Meta Ad Library (this is not a consolation prize)

Meta's Ad Library is the primary source, and for the EU it is unusually complete. Under the
Digital Services Act, every ad served to EU users sits in the public repository for about a year
— not just political ads, the way it used to be — with the creative, the page, and the run dates.
Since our competitors advertise into the EU/UK, the library shows us their creatives without a
subscription.

What it gives you free, per brand:
- Every currently running ad, and the **date each one started**
- How many creative variants are live at once
- The landing page each one points at
- EU reach figures on EU-served ads

What it does not give you: spend, ROAS, or any performance number. Nobody's tool gives you those
either — the paid tools infer them, and the inference is mostly **longevity**, which you can read
yourself for nothing (see §2).

The **Ad Library API** exists but is fussier than the marketing around it suggests: it was built
for political and issue ads, EU commercial coverage came in with the DSA, tokens expire on a
60-day cycle, and access needs a verified developer app. Worth wiring up once we have ad spend
and a reason to automate; not worth a day of work this month. Verify current commercial-ad API
coverage before building anything on it rather than trusting a blog post — including this one.

### The paid layer: Foreplay vs Atria

Roughly:

| | **Foreplay** (~$149–175/mo Workflow) | **Atria** (~$129/mo Core, annual) |
|---|---|---|
| Core job | Ad library + swipe file + briefing. **Spyder** auto-tracks competitor brands and alerts you when they launch a new ad | AI creative intelligence: ~25M-ad database, AI briefs, one-click batch launch to Meta, post-launch scoring per creative |
| Best when | You want a disciplined swipe file and a briefing pipeline for a designer/editor | You want the tool to surface patterns and feed a high-volume creative machine |
| Weak spot | Little creative production; you still make the ads | Competitor tracking is tiered; heavier tool than a pre-launch brand needs |

**Recommendation: neither one yet.** You are pre-launch with €0 of ad spend and samples not
yet in the country. A $150/month tool watching four brands is a subscription for a job the free
library does. Revisit at the point where you are running enough creative volume that a swipe
file and briefing pipeline pays for itself — realistically ~4–6 weeks after the first campaigns
go live. At that point **Foreplay's Spyder** is the better first buy for how we work: the bottleneck
will be turning observations into briefs, not finding ads.

### So what does "check competitors every day" actually look like?

It shouldn't be daily. Ad accounts do not change meaningfully day to day, and a daily ritual you
skip is worse than a weekly one you keep. The rhythm that matches how the data actually moves:

- **Weekly, Sunday** — the real review. 20 minutes, the checklist in §2, written into the digest
  format in §3. This is already the schedule in `CLAUDE.md` (Sunday 19:00 → `#competitors`).
- **Daily, only once we are spending** — a two-minute glance at *new launches* by the brands
  running our formats. Automate it before you do it by hand: a saved Ad Library search per brand,
  or Spyder alerts once bought.
- **Monthly** — the deeper pass: landing pages, price changes, new SKUs, packaging changes.

---

## 2. What to look at — the signals that mean something

Ranked by how much they actually tell you.

**1. Longevity. This is the whole game.** Ad Library shows a start date on every ad. A creative
still running after 30+ days is a creative that is making money — nobody keeps paying to serve a
loser. Ads that appear and vanish inside a week are tests. **The single most valuable free signal
in the category is the list of each competitor's ads that have been running longest.** Track the
start dates and everything else is context.

**2. Concentration.** Where is the budget pointed? If a brand is running 40 live variants and 30
of them are the same product with the same offer, that product is carrying them.

**3. Format and hook archetype.** UGC talking-head, studio product film, static spec card,
founder piece to camera, before/after (which we cannot run anyway). Note which archetype the
long-runners use — that is the format the audience responds to, and format is free to adopt.

**4. Offer mechanics.** Subscribe-and-save %, bundle ladders, free gift, free shipping threshold,
starter kit. These change slowly and they show what the margin can bear.

**5. Landing page destination.** Homepage, PDP, or an advertorial. A brand that sends cold traffic
to an advertorial is telling you the product needs explaining before it sells — useful, because
ours needs explaining more than theirs.

**6. New entrants.** Search the category terms, not just the named brands, or you will be watching
the wrong four companies in six months.

**The watchlist:** Reformed (feelreformed.com) · Sunna · Balqees · Noor Nutrition · Greenfield ·
Amaana. Reformed matters most — they run our exact formats. Balqees and Sunna matter for the
honey and halal-identity lanes. Search terms to sweep for new entrants: *halal collagen*,
*collagen coffee*, *collagen matcha*, *marine collagen NL*, *sidr honey*.

---

## 3. The weekly digest format

Written to `#competitors` Sunday 19:00. Keep it to one screen.

```
SAFA — competitor scan, week of [date]

NEW THIS WEEK
  [Brand] — [n] new creatives. [format]. [what changed]

LONG-RUNNERS (30d+, ranked by days live)
  [Brand] — [days] — [format] — [hook in one line] — [destination]

OFFERS
  [any change to price, bundle, subscription %, shipping threshold]

NEW ENTRANTS
  [brand, what they sell, where they are advertising]

READ
  One paragraph: what this suggests, and the one thing worth testing.
```

The last block is the only part that matters. A list of observations nobody acts on is a chore.

---

## 4. What we can take from a competitor's winning ad — and what we can't

This needs to be exact, because the instinct behind "copy their best ads and see if it works for
us" is a good one and the literal version of it is expensive.

### Take freely — this is how the category works

- **Structure and pacing** — where the hook lands, how long before the product appears, the order
  the objections get answered, how the offer is framed at the end
- **Format** — UGC vs studio, static vs video, aspect ratio, captions on/off, length
- **Hook archetype** — "the ritual you already have, upgraded" is a strategy, not property
- **Offer mechanics** — subscribe-and-save, bundle ladders, free starter kit, shipping thresholds
- **Landing page architecture** — the stacked-picker / quantity-tile / plan-card skeleton
  (already adopted from Reformed in `site/`, deliberately and openly)
- **Which products to advertise** — if their collagen matcha outruns their collagen coffee,
  that is market information about demand, and it is free

### Do not take — three separate reasons, each sufficient

- **Their footage, images, music, voiceover, or script.** Copyright. Recreating a shot list is
  fine; re-uploading their asset or reading their script over new footage is not.
- **Their claims.** This is the one that would actually hurt us. Reformed and Sunna advertise
  into the UK. Sunna's copy runs benefit and outcome claims for collagen; EFSA has authorised
  **no** health claim for collagen in the EU, and Reg. 1924/2006 covers ad captions exactly as it
  covers product pages. Their best-performing ad is very likely their most claim-heavy ad. Lifting
  its copy imports, into the Dutch market, precisely the legal exposure this brand is built to not
  have. Every ad we run goes through `docs/approved-claims.md` first, and the claim carrier is
  vitamin C, never the collagen.
- **Their trust artefacts.** Review counts, "87% saw results", "world's first", press logos,
  before/after imagery. Reformed's review count is inflated and Sunna's stats are uncited —
  `docs/01` documents both. Copying an invented number is not competitive research, and it is the
  one thing that would destroy a brand whose entire pitch is published proof.

### The loop that turns an observation into our ad

1. **Capture** — the ad, its start date, the brand. One line on why it is probably working.
2. **Abstract** — strip it to the mechanism in one sentence, with no words of theirs left.
   *"Ritual substitution: show the familiar morning object first, reveal the upgrade at 3s,
   never argue the science."*
3. **Rebuild** — write our version from the abstraction against `docs/approved-claims.md`, using
   our proof assets: the batch certificate, the named wadi, the QR, the ISO 3632 saffron report.
   The mechanism is theirs; the evidence is ours, and ours is the part they cannot answer.
4. **Test** — run it as its own variant with a clean read, not bundled into a mixed ad set.
5. **Log** — into `agent_actions` and the swipe file, with the source observation attached, so
   the pattern library compounds instead of being re-derived every quarter.

Step 2 is the one that keeps this legal and keeps it good. An ad rebuilt from an abstraction is
ours. An ad rebuilt from their script is theirs, with our logo on it — and it will underperform,
because their claims are doing the work in the original and we cannot make those claims.

---

## Sources

- [Meta Ad Library API limitations](https://adlibrary.com/posts/meta-ad-library-api-limitations)
- [EU DSA ad repositories — what developers can pull](https://adlibrary.com/posts/eu-dsa-ad-repositories-developers)
- [Foreplay vs Atria vs MagicBrief comparison](https://www.gethookd.ai/learn/foreplay-vs-atria-vs-magicbrief-vs-gethookd/)
- [Atria review and pricing](https://hackceleration.com/labs/review/atria)
