---
domain: http://127.0.0.1:40195
generated_at: 2026-11-24T00:33:31.407Z
assets: 40
harvest: 8
redirect: 32
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
---

# Migration Plan — http://127.0.0.1:40195

**New direction:** Lumina: AI meeting assistant for teams — records, transcribes, and summarizes meetings into action items (Zoom/Meet/Teams, Slack/Notion integrations)

**40 legacy assets** classified: 8 harvest · 32 redirect · 0 sunset.

## ⚠ Analyst correction (read before acting on "Harvest" below)

`seoagent migrate` only ingested `gsc/Queries.csv` (query-level) — `gsc/Pages.csv` (URL-level) was not merged in. Its text-overlap heuristic also mis-tagged 7 of the 8 "harvest" rows below as **on-strategy** because they share the word "email" with phrasing in `context.md`'s own "Topics to Avoid" section — not because they are actually relevant to an AI meeting assistant. Manually re-checked against `context.md`'s real positioning:

- **`inboxzap` / `inboxzap app` / `inboxzap review`** (320 + 96 + 150 = 566 impressions, 18 clicks combined, positions 4–9) — the only real equity here. This is branded demand for the **retired product name**, not a feature keyword. Disposition: **brand-bridge, not harvest.** Don't build a page targeting the word "inboxzap" as a keyword. Instead keep the FAQ entry already added to the homepage ("Is Lumina the same company as InboxZap?" — see `app/page.tsx`) so anyone who searches the old brand name and clicks through lands on confirmation they found the right company.
- **`email cleanup app`, `email cleanup tools`, `best email cleaner`, `email overload`, `email anxiety`** (440 / 390 / 370 / 300 / 230 impressions, 0–1 clicks, positions 43–65) — off-topic for an AI meeting assistant despite the tool's "relevance" score. Reclassified **redirect**, same as the other legacy email queries below: pass the authority to the homepage, don't build content for them.

Corrected totals: **0 harvest · 40 redirect · 0 sunset** (all 8 "harvest" rows below are reclassified `redirect`, except the branded `inboxzap*` cluster, which is a brand-bridge handled via the homepage FAQ, not a URL redirect).

## Per-URL disposition (from `gsc/Pages.csv`) — the actual legacy blog posts

The rows above are *queries*; the pages that rank for them are `/blog/post-1` through `/blog/post-12` (3,900 → 80 impressions each, positions 42–58, 0–2 clicks — see `gsc/Pages.csv`). None of these posts exist as files in this repo, and none are topically close enough to Lumina to rewrite. All 12 are **redirect** to `/` to pass the accumulated authority forward instead of 404ing:

- [x] `/blog/post-1` … `/blog/post-12` → `/` (301) — implemented in `next.config.js` `redirects()`, 2026-11-24.

## Harvest — refresh/repurpose into the new direction (keep the URL)

**⚠ See the analyst correction above — none of the rows below should actually be harvested as written. Kept for the record of what the tool originally produced.**

- [ ] `email cleanup app`
  - **Evidence (GSC):** 440 impressions, 1 clicks, avg position 42.8
  - **Why:** On-strategy for the new direction (relevance 100%) with real authority (440 impressions, 1 clicks, avg position 42.8). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "email cleanup app" — real demand that fits the new direction.
- [ ] `email cleanup tools`
  - **Evidence (GSC):** 390 impressions, 0 clicks, avg position 53.7
  - **Why:** On-strategy for the new direction (relevance 100%) with real authority (390 impressions, 0 clicks, avg position 53.7). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "email cleanup tools" — real demand that fits the new direction.
- [ ] `best email cleaner`
  - **Evidence (GSC):** 370 impressions, 0 clicks, avg position 48.2
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (370 impressions, 0 clicks, avg position 48.2). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "best email cleaner" — real demand that fits the new direction.
- [ ] `inboxzap`
  - **Evidence (GSC):** 320 impressions, 14 clicks, avg position 4.1
  - **Why:** On-strategy for the new direction (relevance 100%) with real authority (320 impressions, 14 clicks, avg position 4.1). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "inboxzap" — real demand that fits the new direction.
- [ ] `email overload`
  - **Evidence (GSC):** 300 impressions, 0 clicks, avg position 57.9
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (300 impressions, 0 clicks, avg position 57.9). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "email overload" — real demand that fits the new direction.
- [ ] `email anxiety`
  - **Evidence (GSC):** 230 impressions, 0 clicks, avg position 64.8
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (230 impressions, 0 clicks, avg position 64.8). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "email anxiety" — real demand that fits the new direction.
- [ ] `inboxzap review`
  - **Evidence (GSC):** 150 impressions, 1 clicks, avg position 8.9
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (150 impressions, 1 clicks, avg position 8.9). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "inboxzap review" — real demand that fits the new direction.
- [ ] `inboxzap app`
  - **Evidence (GSC):** 96 impressions, 3 clicks, avg position 4.8
  - **Why:** On-strategy for the new direction (relevance 100%) with real authority (96 impressions, 3 clicks, avg position 4.8). Bridgeable — keep the equity.
  - **Action:** Build/retarget an on-strategy page for "inboxzap app" — real demand that fits the new direction.

## Redirect — 301 the legacy authority into the closest new page

- [ ] `how to reach inbox zero`
  - **Evidence (GSC):** 1180 impressions, 1 clicks, avg position 41.2
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (1180 impressions, 1 clicks, avg position 41.2). Don't throw the equity away.
  - **Action:** Point the closest new page at "how to reach inbox zero" via a 301 from any legacy URL that ranks for it.
- [ ] `gmail storage full`
  - **Evidence (GSC):** 790 impressions, 1 clicks, avg position 43.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (790 impressions, 1 clicks, avg position 43.6). Don't throw the equity away.
  - **Action:** Point the closest new page at "gmail storage full" via a 301 from any legacy URL that ranks for it.
- [ ] `inbox zero method`
  - **Evidence (GSC):** 660 impressions, 0 clicks, avg position 44.7
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (660 impressions, 0 clicks, avg position 44.7). Don't throw the equity away.
  - **Action:** Point the closest new page at "inbox zero method" via a 301 from any legacy URL that ranks for it.
- [ ] `unsubscribe from newsletters`
  - **Evidence (GSC):** 560 impressions, 1 clicks, avg position 45.9
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (560 impressions, 1 clicks, avg position 45.9). Don't throw the equity away.
  - **Action:** Point the closest new page at "unsubscribe from newsletters" via a 301 from any legacy URL that ranks for it.
- [ ] `inbox zero app`
  - **Evidence (GSC):** 520 impressions, 1 clicks, avg position 38.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (520 impressions, 1 clicks, avg position 38.4). Don't throw the equity away.
  - **Action:** Point the closest new page at "inbox zero app" via a 301 from any legacy URL that ranks for it.
- [ ] `how to unsubscribe from emails`
  - **Evidence (GSC):** 490 impressions, 0 clicks, avg position 50.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (490 impressions, 0 clicks, avg position 50.6). Don't throw the equity away.
  - **Action:** Point the closest new page at "how to unsubscribe from emails" via a 301 from any legacy URL that ranks for it.
- [ ] `free up gmail storage`
  - **Evidence (GSC):** 450 impressions, 0 clicks, avg position 47.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (450 impressions, 0 clicks, avg position 47.1). Don't throw the equity away.
  - **Action:** Point the closest new page at "free up gmail storage" via a 301 from any legacy URL that ranks for it.
- [ ] `delete old emails`
  - **Evidence (GSC):** 420 impressions, 0 clicks, avg position 49.5
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (420 impressions, 0 clicks, avg position 49.5). Don't throw the equity away.
  - **Action:** Point the closest new page at "delete old emails" via a 301 from any legacy URL that ranks for it.
- [ ] `how to bulk delete emails in gmail`
  - **Evidence (GSC):** 400 impressions, 0 clicks, avg position 46.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (400 impressions, 0 clicks, avg position 46.8). Don't throw the equity away.
  - **Action:** Point the closest new page at "how to bulk delete emails in gmail" via a 301 from any legacy URL that ranks for it.
- [ ] `clean up inbox`
  - **Evidence (GSC):** 370 impressions, 0 clicks, avg position 51.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (370 impressions, 0 clicks, avg position 51.8). Don't throw the equity away.
  - **Action:** Point the closest new page at "clean up inbox" via a 301 from any legacy URL that ranks for it.
- [ ] `best gmail filters`
  - **Evidence (GSC):** 360 impressions, 0 clicks, avg position 49.9
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (360 impressions, 0 clicks, avg position 49.9). Don't throw the equity away.
  - **Action:** Point the closest new page at "best gmail filters" via a 301 from any legacy URL that ranks for it.
- [ ] `mass unsubscribe`
  - **Evidence (GSC):** 350 impressions, 0 clicks, avg position 56.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (350 impressions, 0 clicks, avg position 56.1). Don't throw the equity away.
  - **Action:** Point the closest new page at "mass unsubscribe" via a 301 from any legacy URL that ranks for it.
- [ ] `clean up outlook inbox`
  - **Evidence (GSC):** 350 impressions, 0 clicks, avg position 50.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (350 impressions, 0 clicks, avg position 50.8). Don't throw the equity away.
  - **Action:** Point the closest new page at "clean up outlook inbox" via a 301 from any legacy URL that ranks for it.
- [ ] `delete all promotional emails`
  - **Evidence (GSC):** 340 impressions, 0 clicks, avg position 55.2
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (340 impressions, 0 clicks, avg position 55.2). Don't throw the equity away.
  - **Action:** Point the closest new page at "delete all promotional emails" via a 301 from any legacy URL that ranks for it.
- [ ] `gmail filters guide`
  - **Evidence (GSC):** 340 impressions, 1 clicks, avg position 44.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (340 impressions, 1 clicks, avg position 44.1). Don't throw the equity away.
  - **Action:** Point the closest new page at "gmail filters guide" via a 301 from any legacy URL that ranks for it.
- [ ] `mass delete emails gmail`
  - **Evidence (GSC):** 330 impressions, 0 clicks, avg position 52.9
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (330 impressions, 0 clicks, avg position 52.9). Don't throw the equity away.
  - **Action:** Point the closest new page at "mass delete emails gmail" via a 301 from any legacy URL that ranks for it.
- [ ] `automatic email sorting`
  - **Evidence (GSC):** 330 impressions, 0 clicks, avg position 47.6
  - **Why:** Off-topic for the new direction (relevance 33%) but holds authority (330 impressions, 0 clicks, avg position 47.6). Don't throw the equity away.
  - **Action:** Point the closest new page at "automatic email sorting" via a 301 from any legacy URL that ranks for it.
- [ ] `archive vs delete email`
  - **Evidence (GSC):** 330 impressions, 0 clicks, avg position 45.4
  - **Why:** Off-topic for the new direction (relevance 33%) but holds authority (330 impressions, 0 clicks, avg position 45.4). Don't throw the equity away.
  - **Action:** Point the closest new page at "archive vs delete email" via a 301 from any legacy URL that ranks for it.
- [ ] `inbox cleaner free`
  - **Evidence (GSC):** 310 impressions, 0 clicks, avg position 58.6
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (310 impressions, 0 clicks, avg position 58.6). Don't throw the equity away.
  - **Action:** Point the closest new page at "inbox cleaner free" via a 301 from any legacy URL that ranks for it.
- [ ] `too many emails`
  - **Evidence (GSC):** 310 impressions, 0 clicks, avg position 60.5
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (310 impressions, 0 clicks, avg position 60.5). Don't throw the equity away.
  - **Action:** Point the closest new page at "too many emails" via a 301 from any legacy URL that ranks for it.
- [ ] `how to delete thousands of emails`
  - **Evidence (GSC):** 300 impressions, 0 clicks, avg position 57.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (300 impressions, 0 clicks, avg position 57.4). Don't throw the equity away.
  - **Action:** Point the closest new page at "how to delete thousands of emails" via a 301 from any legacy URL that ranks for it.
- [ ] `email rules outlook`
  - **Evidence (GSC):** 300 impressions, 0 clicks, avg position 59.2
  - **Why:** Off-topic for the new direction (relevance 33%) but holds authority (300 impressions, 0 clicks, avg position 59.2). Don't throw the equity away.
  - **Action:** Point the closest new page at "email rules outlook" via a 301 from any legacy URL that ranks for it.
- [ ] `clear gmail space`
  - **Evidence (GSC):** 290 impressions, 0 clicks, avg position 54.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (290 impressions, 0 clicks, avg position 54.3). Don't throw the equity away.
  - **Action:** Point the closest new page at "clear gmail space" via a 301 from any legacy URL that ranks for it.
- [ ] `should i archive or delete emails`
  - **Evidence (GSC):** 290 impressions, 0 clicks, avg position 52.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (290 impressions, 0 clicks, avg position 52.4). Don't throw the equity away.
  - **Action:** Point the closest new page at "should i archive or delete emails" via a 301 from any legacy URL that ranks for it.
- [ ] `gmail filter rules`
  - **Evidence (GSC):** 280 impressions, 0 clicks, avg position 55.4
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (280 impressions, 0 clicks, avg position 55.4). Don't throw the equity away.
  - **Action:** Point the closest new page at "gmail filter rules" via a 301 from any legacy URL that ranks for it.
- [ ] `outlook sweep feature`
  - **Evidence (GSC):** 270 impressions, 0 clicks, avg position 46.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (270 impressions, 0 clicks, avg position 46.3). Don't throw the equity away.
  - **Action:** Point the closest new page at "outlook sweep feature" via a 301 from any legacy URL that ranks for it.
- [ ] `stop spam newsletters`
  - **Evidence (GSC):** 260 impressions, 0 clicks, avg position 62.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (260 impressions, 0 clicks, avg position 62.3). Don't throw the equity away.
  - **Action:** Point the closest new page at "stop spam newsletters" via a 301 from any legacy URL that ranks for it.
- [ ] `declutter email inbox`
  - **Evidence (GSC):** 250 impressions, 0 clicks, avg position 56.8
  - **Why:** Off-topic for the new direction (relevance 33%) but holds authority (250 impressions, 0 clicks, avg position 56.8). Don't throw the equity away.
  - **Action:** Point the closest new page at "declutter email inbox" via a 301 from any legacy URL that ranks for it.
- [ ] `auto sort emails gmail`
  - **Evidence (GSC):** 240 impressions, 0 clicks, avg position 53.1
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (240 impressions, 0 clicks, avg position 53.1). Don't throw the equity away.
  - **Action:** Point the closest new page at "auto sort emails gmail" via a 301 from any legacy URL that ranks for it.
- [ ] `bulk delete emails`
  - **Evidence (GSC):** 210 impressions, 0 clicks, avg position 51.3
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (210 impressions, 0 clicks, avg position 51.3). Don't throw the equity away.
  - **Action:** Point the closest new page at "bulk delete emails" via a 301 from any legacy URL that ranks for it.
- [ ] `outlook focused inbox tips`
  - **Evidence (GSC):** 190 impressions, 0 clicks, avg position 61.7
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (190 impressions, 0 clicks, avg position 61.7). Don't throw the equity away.
  - **Action:** Point the closest new page at "outlook focused inbox tips" via a 301 from any legacy URL that ranks for it.
- [ ] `gmail larger than search`
  - **Evidence (GSC):** 180 impressions, 0 clicks, avg position 39.8
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (180 impressions, 0 clicks, avg position 39.8). Don't throw the equity away.
  - **Action:** Point the closest new page at "gmail larger than search" via a 301 from any legacy URL that ranks for it.
