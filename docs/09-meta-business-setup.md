# Meta Business Manager — create it, or repair it

Ads do not launch until samples arrive, but **the account work has the longest lead time in the
whole plan** and none of it depends on the product. Domain verification, business verification
and a new ad account's spend ramp all take real calendar days. Start this now, in parallel with
the supplier conversation.

---

## First: which situation are you in?

| Situation | The easiest route |
|---|---|
| No Business Manager at all | §1 — build it clean. 45 minutes. |
| A BM exists but is a mess (personal page, old assets, wrong owner) | §1, but build a **new BM** and move the assets you want. Do not renovate. |
| BM exists and is **restricted / disabled** | §3. One appeal, done properly. |
| Ad account disabled but BM fine | §3 — usually recoverable; create a fresh ad account inside the same BM. |
| Personal profile flagged | §3, and stop. Do not open a new profile — it makes it permanent. |

Tell me which line you are on and I will write the specific next step. The rest of this file
assumes the common case: something half-built exists and we want a clean, verified structure.

---

## 1. The structure to build

Get the hierarchy right once and everything downstream (pixel, catalog, CAPI, permissions)
follows. Build in this order.

```
Your personal Facebook profile          ← the key to everything. Secure it first.
└── Business Manager (business.facebook.com)
    ├── Business verification (KvK)     ← slowest step, start early
    ├── Facebook Page                   ← owned by the BM, not by you personally
    ├── Instagram account (business)    ← connected to the Page
    ├── Verified domain                 ← safanutrition.eu / whichever domain wins
    ├── Dataset (pixel) + Conversions API
    ├── Product catalog                 ← fed by Shopify, not hand-built
    ├── Ad account (EUR, NL, correct timezone)
    └── Payment method + billing threshold
```

**Step 0 — secure the personal profile.** Two-factor on, recovery email and phone current, real
name matching your ID. Every asset below hangs off this profile; if it gets locked, the business
stops. Add a second admin (a real person with their own verified profile) to the BM the day you
create it, so a single lockout is not fatal.

**Step 1 — create the Business Manager** at business.facebook.com. Legal business name, business
email on the brand domain — not gmail. One BM for the brand. Resist creating a second one "for
testing"; two BMs fighting over one Page or domain is the most common self-inflicted mess.

**Step 2 — Page and Instagram.** Create the Page **inside** the BM so the BM owns it from birth.
Claiming a personally-created Page later works but is a step you can skip. Convert the Instagram
account to a business account and link it to the Page.

**Step 3 — verify the domain.** In Business Settings → Brand Safety → Domains. DNS TXT record is
the cleanest method. Do this as soon as the domain is bought: domain verification is what lets
you configure Aggregated Event Measurement and control link editing, and it gates things you will
want on day one of spending.

**Step 4 — business verification (KvK).** This is the one with a real dependency: it wants
official documents for the legal entity — for a Dutch BV, the **KvK extract**, plus a matching
business address and phone. `TASKS.md` still has the BV registration open, so **business
verification is blocked until the entity exists**. It is not blocked on anything else, so the
moment the KvK number lands, submit it. Unverified businesses hit limits that are annoying at
exactly the wrong moment.

**Step 5 — the ad account.** Create it inside the BM: currency **EUR**, country **Netherlands**,
timezone **Europe/Amsterdam**. These are permanent — a wrong timezone means every report you ever
read is offset, and the only fix is a new account. Add the payment method under the business, not
a personal card.

**Step 6 — pixel, catalog and CAPI, the easy way.** Do **not** hand-build these. Install the
**Facebook & Instagram sales channel** app in Shopify and connect it to the BM. It provisions the
dataset, wires the Conversions API server-side, syncs the product catalog, and keeps it synced.
Hand-installing a pixel in the theme in 2026 gives you worse signal and more work. Confirm
afterwards in Events Manager that purchase events arrive with a good event-match quality score and
that browser and server events are deduplicating.

Then let it collect data while you wait for samples. A dataset with a few weeks of real traffic
before the first campaign is worth more than any targeting decision you will make.

---

## 2. What only you can do

Per `CLAUDE.md` §8 — I cannot do these, and should not try:

- [ ] Create/secure the personal Facebook profile, 2FA on
- [ ] Create the Business Manager and add a second admin
- [ ] Create the Page and connect Instagram
- [ ] Buy the domain and add the DNS TXT record (I can produce the record once you have the value)
- [ ] Submit business verification with the KvK extract — **blocked on BV registration**
- [ ] Create the ad account and attach a business payment method
- [ ] Approve the Shopify ↔ Meta connection (OAuth consent)
- [ ] Complete any ID or SMS verification Meta asks for

Once the ad account exists, put `META_TOKEN` and `META_AD_ACCOUNT_ID` into `.env` and the
Competitor Intel and Data Intelligence agents can read from it — read-only, per the constitution.

---

## 3. If something is already restricted

The order matters, and restraint matters more than speed.

1. **Read the actual restriction.** Business Support Home tells you which asset is limited and
   under which policy. "Meta banned me" is usually one ad account, or one Page, not the account.
2. **Appeal once, completely.** One request for review, with the real business details, the
   domain, and the entity documents if you have them. Repeated appeals on the same case do not
   speed it up and can close the route.
3. **If an ad account is disabled but the BM is healthy** — create a fresh ad account inside the
   same verified BM and carry on. This is normal and usually the fastest path back to spending.
4. **Business verification is the real unlock.** Most restriction loops on a new commerce account
   end when a verified legal entity is attached. This is another reason the BV registration sits
   on the critical path.
5. **Do not** open a new personal profile, a new BM on a fresh device, or borrow someone else's
   account to get around a restriction. Meta links them, and a circumvention finding turns a
   temporary problem into a permanent one. If the current account is genuinely unrecoverable, the
   legitimate route is a new BM under the registered BV, with its own verified domain and
   documents — not a disguised version of the old one.

Two policy notes worth knowing before we write a single ad: supplements are a sensitive category,
and personal-health-attribute framing ("do you struggle with…") gets creatives rejected. Our
claims discipline in `docs/approved-claims.md` already keeps us the right side of that — the copy
that is illegal in the EU is also the copy that gets ads disapproved. That constraint is, for
once, on our side.

---

## Sequence, with the samples in it

| When | Meta work | Depends on |
|---|---|---|
| Now | Secure profile · create BM · Page + IG · buy domain + verify | Domain purchase |
| Now | Shopify sales-channel connection → dataset + CAPI + catalog | Store shell (exists) |
| On KvK | Submit business verification | BV registration |
| Ambient | Dataset collects real traffic; organic content on the Page | — |
| Samples arrive | Shoot real creative against approved claims; first campaigns | Samples, photography |

Nothing in the first three rows waits on the supplier. Do them now and launch day is a launch,
not a setup.
