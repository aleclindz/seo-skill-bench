---
domain: lumina.example
generated_at: 2026-07-07T19:09:33.929Z
assets: 13
harvest: 12
redirect: 1
sunset: 0
note: >-
  Per-asset migration plan for legacy ranking authority. Every disposition
  is backed by real Google Search Console impressions/position. Run this
  when the live positioning has shifted away from what history ranks for.
---

# Migration Plan — lumina.example

**New direction:** Lumina is an AI meeting assistant. It joins calls, records and transcribes them, and delivers a summary with decisions and action items. The company pivoted from InboxZap, an email-cleanup/inbox-zero tool, to Lumina, an AI meeting assistant — a different product and a different audience. Legacy blog content and some branded search demand still reflect the old InboxZap positioning. · saas · Teams and managers who run a lot of video meetings (Zoom/Meet/Teams) and want automatic notes, decisions, and action items.

**13 legacy assets** classified: 12 harvest · 1 redirect · 0 sunset.

## Analyst override (manual — reason below)

The automated relevance scorer above misfires on this dataset and its raw output should **not** be executed as written:

- It scores the **homepage** (`https://lumina.example/`) at 0% relevance and proposes redirecting it away — but the homepage IS the current Lumina positioning (confirmed live: title "Lumina — The AI Meeting Assistant for Teams", correct JSON-LD). **Corrected disposition: no action.** It's already on-strategy and performing well (18 clicks / 600 impressions, position 4.5) — do not redirect a site's own homepage.
- It scores all **12 legacy blog posts** at 50% relevance ("harvest") purely on shared generic vocabulary (e.g. "team"), but every post's actual topic — inbox zero, Gmail storage, unsubscribing from newsletters, email filters — has **zero substantive overlap** with meeting transcription/summaries. These aren't refreshable; the underlying content would have to be replaced wholesale, which isn't a harvest, it's new content under an old URL.
- Real GSC evidence for those 12 posts: ~13,900 combined impressions but only **7 total clicks** (≈0.05% CTR) at average positions 42–58 (page 5+, functionally invisible). There is no meaningful ranking authority here to preserve — the impression volume is noise from broad, high-volume informational queries the posts happen to loosely match, not earned authority. Redirecting them into meeting-assistant pages would also mismatch searcher intent (someone searching "gmail storage full" redirected to an AI meeting assistant page bounces immediately).

**Corrected disposition: sunset all 12 legacy blog posts.** They're already excluded from `sitemap.xml` (confirmed in `audit/evidence.md`) and were never in `app/blog/page.tsx`'s (broken) client-side listing — the fix is to make sure they stay unindexed and unlinked, not to invest more effort bridging them: leave the URLs resolving (avoid fresh 404s for any residual inbound links) but keep them out of the sitemap, nav, and blog index going forward, and treat them as fully retired. Do not write "refresh" content for these — write NEW on-strategy posts under new slugs instead (see roadmap).

The `harvest`/`redirect` sections below are the raw tool output, kept for the record — **superseded by the override above.**

## Harvest — refresh/repurpose into the new direction (keep the URL)

- [ ] `https://lumina.example/blog/post-1`
  - **Evidence (GSC):** 3900 impressions, 2 clicks, avg position 42.3
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (3900 impressions, 2 clicks, avg position 42.3). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-1 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-5`
  - **Evidence (GSC):** 1650 impressions, 1 clicks, avg position 45.3
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (1650 impressions, 1 clicks, avg position 45.3). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-5 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-4`
  - **Evidence (GSC):** 1380 impressions, 1 clicks, avg position 48.7
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (1380 impressions, 1 clicks, avg position 48.7). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-4 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-6`
  - **Evidence (GSC):** 1290 impressions, 1 clicks, avg position 44.6
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (1290 impressions, 1 clicks, avg position 44.6). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-6 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-10`
  - **Evidence (GSC):** 1080 impressions, 1 clicks, avg position 50.4
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (1080 impressions, 1 clicks, avg position 50.4). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-10 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-2`
  - **Evidence (GSC):** 1040 impressions, 1 clicks, avg position 46.9
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (1040 impressions, 1 clicks, avg position 46.9). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-2 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-12`
  - **Evidence (GSC):** 950 impressions, 0 clicks, avg position 54.1
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (950 impressions, 0 clicks, avg position 54.1). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-12 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-9`
  - **Evidence (GSC):** 870 impressions, 0 clicks, avg position 58.3
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (870 impressions, 0 clicks, avg position 58.3). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-9 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-11`
  - **Evidence (GSC):** 840 impressions, 0 clicks, avg position 52.6
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (840 impressions, 0 clicks, avg position 52.6). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-11 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-8`
  - **Evidence (GSC):** 690 impressions, 0 clicks, avg position 49.8
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (690 impressions, 0 clicks, avg position 49.8). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-8 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-3`
  - **Evidence (GSC):** 130 impressions, 0 clicks, avg position 47.2
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (130 impressions, 0 clicks, avg position 47.2). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-3 into the new narrative (keep the URL, retarget the content to the new positioning).
- [ ] `https://lumina.example/blog/post-7`
  - **Evidence (GSC):** 80 impressions, 0 clicks, avg position 55.8
  - **Why:** On-strategy for the new direction (relevance 50%) with real authority (80 impressions, 0 clicks, avg position 55.8). Bridgeable — keep the equity.
  - **Action:** Refresh/repurpose https://lumina.example/blog/post-7 into the new narrative (keep the URL, retarget the content to the new positioning).

## Redirect — 301 the legacy authority into the closest new page

- [ ] `https://lumina.example/`
  - **Evidence (GSC):** 600 impressions, 18 clicks, avg position 4.5
  - **Why:** Off-topic for the new direction (relevance 0%) but holds authority (600 impressions, 18 clicks, avg position 4.5). Don't throw the equity away.
  - **Action:** 301-redirect https://lumina.example/ into the most relevant new page (pass the authority forward).

## Redirect config (proposed — approval-gated)

These `redirect` dispositions can be expressed as 301s. Pick the target new
page for each, then apply (the operator shows the diff before writing):

```
https://lumina.example/  ->  <choose the closest new page>
```
