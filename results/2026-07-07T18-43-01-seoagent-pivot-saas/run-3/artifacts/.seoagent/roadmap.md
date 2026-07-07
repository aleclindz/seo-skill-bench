---
last_updated_at: 2026-07-07T19:35:00.000Z
---

# Roadmap — lumina.example

## Critical (fixed this session)
- [x] `app/layout.tsx` stale "InboxZap" title/meta/OG → updated to Lumina branding
- [x] Blog rendered an empty client-side shell (`/api/posts` didn't exist) → converted to a repo-native `content/blog/` collection, server-rendered

## High
- [x] `/features` and `/pricing` had no source in this repo at all → scaffolded both, matching live title/meta/H1, fixed duplicate H1 on `/features` and missing canonical on `/pricing`, added JSON-LD to both
- [x] Dead `/faq` nav link (404 live; the configured redirect isn't active in prod, and `/#faq` didn't exist either) → added a real FAQ section + `FAQPage` schema to the homepage, pointed the nav link straight at `/#faq`
- [ ] **Migration: 301-redirect 12 legacy InboxZap blog posts** (see `strategy/migration-plan.md`) — proposed config below, **pending your approval** before writing to `next.config.js`
- [ ] Confirm `capture_complete: false` gap: re-crawl once `https://lumina.example` (canonical origin) is reachable — the current crawl ran against the local preview and may be under-reporting

## Medium
- [ ] Homepage rollup shows 3 images with no `alt` attribute (evidence.md § Site-wide rollup) — unfixable from this repo since `app/page.tsx` renders no `<img>` tags at all; the team needs to locate wherever that markup actually lives.
- [ ] Verify the "4 pages missing from sitemap.xml" finding against the canonical origin — likely a host-string artifact of crawling `127.0.0.1` against a sitemap generated with the `lumina.example` prefix, not a real gap (see `audit/latest.md`)
- [ ] Extend `lib/blog.ts` paragraph rendering to support internal links (currently plain-paragraph only) so posts can link into the cluster hub once it exists

## Content plan (depth-first — finish cluster 1 before starting cluster 2)

**Cluster 1 — `ai-meeting-assistant`** (highest ICP fit, the core product category) — see `.seoagent/strategy/clusters/ai-meeting-assistant.md` for the full article table.
- [x] LONG_TAIL `ai-meeting-notes` — "ai meeting notes" — published (`content/blog/ai-meeting-notes.md`)
- [ ] PILLAR `ai-meeting-assistant-guide` — "ai meeting assistant" — **write next**, every other article in this cluster should link up to it
- [ ] SUB_PILLAR `meeting-transcription-software` — "meeting transcription software"
- [ ] SUB_PILLAR `meeting-action-items-tool` — "meeting action items tool"
- [ ] LONG_TAIL `zoom-ai-notetaker` — "zoom ai notetaker"
- [ ] LONG_TAIL `google-meet-notetaker` — "google meet notetaker"
- [ ] LONG_TAIL `microsoft-teams-ai-notetaker` — "microsoft teams ai notetaker"
- [ ] LONG_TAIL (listicle) `best-ai-meeting-assistants` — "best ai meeting assistants"
- [ ] LONG_TAIL (comparison) `lumina-vs-fireflies` — "lumina vs fireflies"
- [ ] LONG_TAIL (comparison) `lumina-vs-otter-ai` — "lumina vs otter ai"
- [ ] LONG_TAIL (comparison) `lumina-vs-fathom` — "lumina vs fathom"
- [ ] LONG_TAIL `ai-notetaker-for-slack` — "ai notetaker for slack" (competitor gap — see `competitors.md`)
- [ ] LONG_TAIL `ai-notetaker-for-notion` — "ai notetaker for notion" (competitor gap)

**Cluster 2 — `meeting-productivity`** (queued — start only once cluster 1's spokes are done)
- Pillar: "run effective meetings"; sub-pillars: meeting best practices, reduce meeting time, async meeting alternatives; long-tails: meeting minutes, agenda template, follow-up email, decision log, why meetings run long.

## Growth sequencing (the actual strategy)

1. **Protect & harvest existing equity first.** The homepage is the only legacy asset already retargeted and performing (18 clicks, position 4.5) — nothing to do there. The 12 legacy blog posts hold real impressions (80–3,900 each) but zero topical relevance now; redirect them (below) rather than leaving them to decay uncontrolled or rebuilding the old InboxZap story.
2. **Build the new-direction cluster depth-first.** Finish `ai-meeting-assistant` (13 articles, 1 published) before starting `meeting-productivity` — a complete hub-and-spoke cluster signals topical authority; a scattering of articles across two clusters doesn't.
3. **Measure and iterate.** Once `seoagent login` connects GSC, watch whether the redirected legacy URLs hold their authority and whether the new cluster gains impressions; re-audit on a cadence.

## Proposed redirect config (approval-gated — not yet applied)

`.seoagent/strategy/migration-plan.md` classified 13 legacy URLs; one correction: the auto-classifier flagged `https://lumina.example/` itself as "redirect," which is wrong — the homepage is already the retargeted Lumina page and is the best-performing legacy asset. It should read **harvest** (done), not redirect. The other 12 (all InboxZap blog posts, zero topical overlap with Lumina) are genuine redirect candidates. Proposed target: the homepage, since no topically-closer Lumina content exists yet for old email-cleanup queries — once cluster 1 has content specifically matching a legacy query's residual traffic, retarget that one row to the more specific page.

```js
// next.config.js — proposed addition to redirects(), pending approval
{ source: '/blog/post-1', destination: '/', permanent: true },
{ source: '/blog/post-2', destination: '/', permanent: true },
{ source: '/blog/post-3', destination: '/', permanent: true },
{ source: '/blog/post-4', destination: '/', permanent: true },
{ source: '/blog/post-5', destination: '/', permanent: true },
{ source: '/blog/post-6', destination: '/', permanent: true },
{ source: '/blog/post-7', destination: '/', permanent: true },
{ source: '/blog/post-8', destination: '/', permanent: true },
{ source: '/blog/post-9', destination: '/', permanent: true },
{ source: '/blog/post-10', destination: '/', permanent: true },
{ source: '/blog/post-11', destination: '/', permanent: true },
{ source: '/blog/post-12', destination: '/', permanent: true },
```

## Cloud

Not connected. `seoagent login` (free, ~30s) would add: a dashboard, real Google Search Console data (this session used a manual CSV export), and real DataForSEO volume/difficulty for the keyword set above instead of H/M/L estimates.
