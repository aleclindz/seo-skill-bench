# Roadmap — lumina.example

## Critical
_(none)_

## High
- [x] Server-render the blog index (`app/blog/page.tsx`) — was a dead client fetch to a 404'ing `/api/posts`.
- [x] Add blog posts to `app/sitemap.ts` (0 of 12 were listed).

## Medium
- [ ] Add canonical tag to `/pricing` — source not in this repo; hand off to its owner.
- [ ] Add JSON-LD to `/pricing` and `/features` — source not in this repo.
- [x] Reduce `/features` to a single `<h1>` — source not in this repo; recommendation only (demote "Integrations" to `<h2>`).
- [ ] Resolve `/blog/post-3` vs `/blog/post-7` cannibalization ("bulk delete emails") — handled via migration redirect, not a standalone content fix (both are legacy and leaving).
- [ ] Add a unique meta description to each of the 12 blog posts — source not in this repo.
- [ ] Add `BlogPosting` JSON-LD to the blog post template — source not in this repo.

## Low
- [ ] Add `alt` text to the 3 homepage images (hero + 2 step icons) — these exist on the live page but not in this repo's `app/page.tsx`; flag to whoever owns the deployed component.
- [ ] Get the live server to actually apply the `/faq → /#faq` redirect already declared in `next.config.js` (it currently 404s raw) — redirect target now exists (`#faq` section added to `app/page.tsx`).

## Migration — legacy InboxZap equity (see `.seoagent/strategy/migration-plan.md`)
- [x] Homepage (`/`) — **harvest**, keep as-is, already on-strategy.
- [ ] 12 legacy blog posts — **redirect** (301) into `/blog` now; re-point each to a topically-closer Lumina article once the content plan below ships. Prioritize by impressions: post-1 (3900), post-5 (1650), post-4 (1380), post-6 (1290), post-10 (1080), post-2 (1040), post-12 (950), post-9 (870), post-11 (840), post-8 (690), post-3 (130), post-7 (80).

## Content plan — forward clusters for Lumina (new positioning)

No GSC history exists yet for Lumina's own topics (all historical data is legacy InboxZap — see migration plan), so these are WebSearch/competitor-informed, not GSC-validated. Priority = H/M/L, never a numeric estimate. Depth-first: finish `ai-meeting-assistant` before starting the next cluster.

**Cluster: ai-meeting-assistant** (priority: H — ICP-direct, easiest to rank while young)
- [ ] PILLAR `ai-meeting-assistant` — "ai meeting assistant"
- [ ] SUB `meeting-transcription-software` — "meeting transcription software"
- [ ] SUB `automatic-meeting-notes` — "automatic meeting notes"
- [ ] SUB `meeting-action-items` — "meeting action items tool"
- [ ] LONG_TAIL `ai-notetaker-for-zoom` — "ai notetaker for zoom"
- [ ] LONG_TAIL `ai-notetaker-for-google-meet` — "ai notetaker for google meet"

**Cluster: meeting-productivity** (priority: M)
- [ ] SUB `meeting-recap-template` — "meeting recap template"
- [ ] LONG_TAIL `how-to-run-better-meetings` — "how to run better meetings"
- [ ] LONG_TAIL `meeting-notes-vs-transcripts` — "meeting notes vs transcripts"

Next session: write the `ai-meeting-assistant` brief first (per Phase 3 of the skill), once the publishing target for this content is confirmed (this repo has no `content/`/`posts/` directory yet — decide CMS vs `mdx_sync` before drafting).
