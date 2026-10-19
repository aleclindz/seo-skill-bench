---
last_updated_at: 2026-10-19T00:00:00Z
---

# Roadmap — Lumina

## Critical (done this session)

- [x] Fix stale InboxZap metadata in `app/layout.tsx`
- [x] Fix broken `/blog` (client shell + dead `/api/posts`) → repo-native markdown content collection
- [x] Run migration planning on legacy GSC authority → `strategy/migration-plan.md`, 301s added for 12 legacy posts

## High

- [ ] **Deploy this repo.** `/faq` 404s live even though `next.config.js` already has the correct redirect — the live site is running a build from before the fix. Nothing in this audit changes production until you ship it.
- [ ] Pick (or confirm) the real production domain. `lumina.example` is a placeholder used consistently across `robots.txt`, `sitemap.ts`, and every page's canonical/OG URLs — swap it for the real domain before launch.

## Medium

- [x] Add canonical + `Product` JSON-LD to `/pricing`
- [ ] Re-verify the `/pricing`-missing-from-sitemap finding after a fresh `seoagent crawl` (see audit — likely a domain-string comparison false positive, not a real gap)
- [ ] Regenerate `llms.txt` (`seoagent llms`) now that `/blog/ai-meeting-notes` exists — the current one predates it

## Content plan — cluster: ai-meeting-notes (depth-first)

- [x] PILLAR `ai-meeting-notes` — "ai meeting notes" (published, tracked)
- [ ] SUB_PILLAR `ai-meeting-minutes` — "ai meeting minutes"
- [ ] SUB_PILLAR `ai-notetaker-for-zoom` — "ai notetaker for zoom"
- [ ] LONG_TAIL `how-to-automate-meeting-minutes` — "how to automate meeting minutes"
- [ ] LONG_TAIL `meeting-recap-email-template` — "meeting recap email template"
- [ ] LONG_TAIL `action-items-from-meetings` — "action items from meetings"

Next cluster (after this one is complete): `ai-meeting-assistant-comparisons` — commercial-intent "vs"/"alternatives" content, more competitive, sequenced second on purpose.

## Low / follow-up

- [ ] Replace the 3 homepage placeholder illustrations with real product screenshots (`references/screenshots.md`) — no product UI was available to capture in this session.
- [ ] Upgrade `next` — `npm install` flagged 1 high + 1 critical known vulnerability in 14.2.5 (not an SEO item, but worth tracking).
