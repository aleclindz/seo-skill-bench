---
last_updated_at: 2026-11-24T00:40:00.000Z
---

# Roadmap — lumina.example

## High (technical — done this session)

- [x] Fix stale root-layout metadata (was still "InboxZap — Clean Your Inbox in Minutes") — `app/layout.tsx`
- [x] Add `app/features/page.tsx` and `app/pricing/page.tsx` — reconciled with the already-live content (these pages render live but had no repo source)
- [x] Fix `/features` duplicate `<h1>` (demoted the second to `<h2>`) and add missing JSON-LD on `/features` and `/pricing`, add missing canonical on `/pricing`
- [x] Fix `/faq` 404 — added an `id="faq"` section with real content + FAQPage schema to the homepage, so the existing `next.config.js` redirect (`/faq` → `/#faq`) resolves to something
- [x] Convert `/blog` from a client-side fetch to `/api/posts` (an endpoint that doesn't exist in this repo) to a server-rendered content collection (`content/blog/`) — crawlers could not see any blog content before this
- [x] Add `app/blog/[slug]/page.tsx` with per-post metadata + Article/FAQPage JSON-LD
- [x] Add blog posts to `app/sitemap.ts` (was static-only, never included posts)
- [x] Add 301 redirects for the 12 legacy InboxZap blog posts (`/blog/post-1`..`post-12` → `/`) — see `strategy/migration-plan.md`
- [x] Set `publishing.strategy: mdx_sync`, `content_dir: content/blog` in `project.md`

## High (strategy — done this session)

- [x] `context.md` drafted — documents the InboxZap → Lumina pivot
- [x] Migration plan run and corrected (`strategy/migration-plan.md`) — 40 legacy GSC assets dispositioned
- [x] Keyword research + cluster built for the new direction (`keywords.md`, `strategy/discovery.md`, `strategy/clusters/ai-meeting-assistant.md`)
- [x] PILLAR article drafted and published: `ai-meeting-assistant` (content/blog/ai-meeting-assistant.ts)

## High (next session — content, depth-first)

- [ ] SUB_PILLAR: meeting-action-items (target: "meeting action items" — thin SERP, matches Lumina's integration differentiator)
- [ ] SUB_PILLAR: ai-meeting-notes (target: "ai meeting notes")
- [ ] LONG_TAIL: ai-meeting-assistant-slack-notion (target: "ai meeting assistant slack notion integration" — first-mover)
- [ ] LONG_TAIL: free-ai-meeting-assistant-small-teams (target: "free ai meeting assistant for small teams")
- [ ] Once 2+ sub-pillars exist, add their "Read more →" links into the pillar's placeholder sections

## Medium

- [ ] SUB_PILLAR: meeting-transcription-software
- [ ] SUB_PILLAR: ai-meeting-minutes
- [ ] LONG_TAIL: how-to-write-meeting-minutes-with-ai
- [ ] LONG_TAIL: speaker-labeled-meeting-transcripts
- [ ] LONG_TAIL: ai-meeting-summary-tool-sales-teams
- [ ] LONG_TAIL: ai-notetaker-customer-success-calls
- [ ] LONG_TAIL: meeting-notes-automation-startups
- [ ] Capture real product screenshots (features/pricing currently use placeholder SVGs) per `references/screenshots.md`
- [ ] Add real `og-lumina.png` / logo assets to `public/` — OG tags reference `/img/og-lumina.png`, which doesn't exist in `public/` yet

## Low / hold

- [ ] LONG_TAIL: fireflies-vs-otter-alternative — hold until the pillar + 2 sub-pillars are live and Lumina has enough content depth to credibly position as an alternative
- [ ] "lumina vs fireflies" / "lumina vs otter" comparison pages — same hold condition

## Open owner decisions

- [ ] Confirm the 12 legacy `/blog/post-*` redirects (now in `next.config.js`) before deploy — these pages currently render live content (via a source outside this repo) that has no file backing here; once this repo deploys, the redirects replace that content. Review before shipping if those URLs should instead be preserved as-is on the current platform.
- [ ] `seoagent login` recommended — this session ran fully anonymous (no GSC cloud connection, no DataForSEO). Keyword priorities above are WebSearch-based H/M/L, not real volume/difficulty.
