---
domain: lumina.example
generated_at: 2026-11-24T20:40:00.000Z
assets: 53
harvest: 1
redirect: 0
sunset: 52
note: >-
  Per-asset migration plan for legacy ranking authority. Hand-corrected —
  see "Why this overrides the automated classifier" below.
---

# Migration Plan — lumina.example

**New direction:** Lumina is an AI meeting assistant (joins calls, transcribes,
summarizes, generates action items) for B2B teams. The site previously ran
as **InboxZap**, an unrelated consumer email-cleanup / inbox-zero tool — a
full product pivot, not a rename of the same product.

**53 legacy assets** (1 homepage + 12 orphaned blog posts from
`gsc/Pages.csv`, 40 queries from `gsc/Queries.csv`): **1 harvest · 0 redirect
· 52 sunset.**

## Why this overrides the automated classifier

`seoagent migrate` was run against both CSVs (outputs preserved in git
history / `changelog.md`). Its word-overlap relevance score misfired here:
because `context.md` and `project.md` both *mention* "InboxZap" and
"inbox-zero" to explain the pivot, the classifier scored InboxZap-era queries
like `email cleanup app` and `inbox zero app` as **100% on-strategy** and
recommended *building new Lumina pages to target them* — and scored the
actual live homepage (`/`) as **0% on-strategy** and recommended
redirecting it away. Both are wrong: the homepage is the current page (not
legacy), and email-cleanup content is explicitly off-strategy per
`context.md` § Topics to Avoid. Dispositions below are reasoned by hand from
the same GSC evidence instead.

## Harvest — keep the URL, bridge the brand

- [ ] `https://lumina.example/` (current homepage)
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5 — and likely the landing page absorbing the branded queries below (not a separate legacy URL, so not "redirected" anywhere — it already *is* the destination).
  - **Branded query evidence:** `inboxzap` (320 impr, 14 clicks, pos 4.1), `inboxzap app` (96 impr, 3 clicks, pos 4.8), `inboxzap review` (150 impr, 1 click, pos 8.9) — real authority, decent positions, real clicks. People searching the *old brand name* are still finding and clicking into this page.
  - **Why:** This is not legacy — it's the live, correctly-positioned current page, already capturing the one piece of old-brand demand that's actually bridgeable (brand recall, not product intent).
  - **Action:** No structural change. **Recommend** (owner approval — this is a messaging/brand call, not a technical fix) adding one short line, e.g. in a footer note or FAQ: *"Lumina was formerly InboxZap — we rebuilt the product from the ground up as an AI meeting assistant."* This converts residual brand-name search traffic into oriented visitors instead of confused bounces, without resurrecting the old positioning anywhere else on the site.

## Sunset — off-topic, no bridgeable target, let decay

**12 orphaned blog posts** (`gsc/Pages.csv`) — InboxZap-era email-cleanup articles. All are off-topic for Lumina (0% relevance — meeting assistant vs. email cleanup are unrelated use cases, and email-cleanup content is on the `context.md` Topics-to-Avoid list). None are linked from current nav, the `/blog` index, or the sitemap (confirmed orphaned — see `audit/latest.md`). Impression counts are real but avg. position is 42–58 (page 4–6) with 0–2 clicks each — i.e. negligible actual authority despite the impression counts; there's no current or planned Lumina page a 301 could honestly land these on, so redirecting to the homepage would just be a mass irrelevant-redirect pattern (soft-404-like), not real equity transfer.

- [ ] `/blog/post-1` — 3900 impr, 2 clicks, pos 42.3 ("How to Reach Inbox Zero in 2024")
- [ ] `/blog/post-5` — 1650 impr, 1 click, pos 45.3 ("Gmail Storage Full?")
- [ ] `/blog/post-4` — 1380 impr, 1 click, pos 48.7 ("Unsubscribe From Newsletters the Fast Way")
- [ ] `/blog/post-6` — 1290 impr, 1 click, pos 44.6
- [ ] `/blog/post-10` — 1080 impr, 1 click, pos 50.4
- [ ] `/blog/post-2` — 1040 impr, 1 click, pos 46.9 ("10 Gmail Filters That Save You an Hour a Day")
- [ ] `/blog/post-12` — 950 impr, 0 clicks, pos 54.1
- [ ] `/blog/post-9` — 870 impr, 0 clicks, pos 58.3
- [ ] `/blog/post-11` — 840 impr, 0 clicks, pos 52.6
- [ ] `/blog/post-8` — 690 impr, 0 clicks, pos 49.8
- [ ] `/blog/post-3` — 130 impr, 0 clicks, pos 47.2 ("How to Bulk Delete Emails")
- [ ] `/blog/post-7` — 80 impr, 0 clicks, pos 55.8

**Action (approval-gated — touches indexing):** add `<meta name="robots" content="noindex">` to these 12 posts (or their future `/blog/[slug]` route) rather than 301s. Leave them reachable at their existing URL (don't break any stray backlinks/direct traffic) but stop inviting Google to keep ranking off-strategy content. Do **not** refresh/repurpose them into Lumina content — that would mean writing about email cleanup on an AI-meeting-assistant site, which `context.md` explicitly rules out.

**37 non-branded legacy queries** (`gsc/Queries.csv`) — all are InboxZap-era demand (inbox zero, Gmail/Outlook filters, bulk email deletion, unsubscribing, storage cleanup). These are exactly the queries the 12 posts above rank for; there is no separate action per query beyond noindexing the posts. Grouped for completeness:

- Inbox-zero / overload: `how to reach inbox zero` (1180), `inbox zero method` (660), `inbox zero app` (520), `email overload` (300), `email anxiety` (230), `too many emails` (310), `declutter email inbox` (250)
- Gmail/Outlook filters & rules: `gmail filters guide` (340), `best gmail filters` (360), `gmail filter rules` (280), `automatic email sorting` (330), `auto sort emails gmail` (240), `email rules outlook` (300), `outlook sweep feature` (270), `outlook focused inbox tips` (190)
- Bulk delete / storage: `bulk delete emails` (210), `how to bulk delete emails in gmail` (400), `delete old emails` (420), `how to delete thousands of emails` (300), `mass delete emails gmail` (330), `gmail storage full` (790), `free up gmail storage` (450), `clear gmail space` (290), `gmail larger than search` (180), `archive vs delete email` (330), `should i archive or delete emails` (290)
- Unsubscribe / cleanup tools: `unsubscribe from newsletters` (560), `how to unsubscribe from emails` (490), `mass unsubscribe` (350), `stop spam newsletters` (260), `email cleanup app` (440), `email cleanup tools` (390), `best email cleaner` (370), `clean up inbox` (370), `inbox cleaner free` (310), `clean up outlook inbox` (350)

**Why sunset, not harvest:** every query above scored falsely "on-strategy" by the automated tool only because the direction text contains the word "inbox"/"email" while explaining the pivot — none of it fits a B2B meeting-assistant product, and none of it should receive new or refreshed content. **Why not redirect:** avg. position is 38–65 across the board (effectively page 4+), with ≤1 click each — there's no meaningful ranking authority to "pass forward," and no relevant Lumina page exists to honestly receive this traffic.

## Not a disposition — reconcile first

See `audit/latest.md` for a **blocking technical bug**: the `/blog` index and `/blog/[slug]` pages aren't in `app/` at all as server routes one would expect from the repo, `/blog` is a client-side shell that fetches `/api/posts` — and that endpoint 404s live. This is why the 12 posts above are orphaned (no working internal link path) even though their individual URLs still resolve. Fixing `/blog`'s rendering is a prerequisite for any *future* Lumina content strategy (Phase 2/3 pillar content), independent of this migration plan.
