# Roadmap — Lumina

## Critical
- [x] Convert `/blog` from a broken client-side fetch (`/api/posts`, doesn't exist) to a repo-native Markdown blog — `lib/posts.ts` + `app/blog/page.tsx` + `app/blog/[slug]/page.tsx`, build-verified. **Deploy this, then set `publishing.setup_status: done` in `project.md` so article briefs/content can start.**

## High
- [x] Fix `/faq` 404: added the missing `id="faq"` anchor + content to the homepage so the existing `next.config.js` redirect resolves. Needs deploy.
- [x] 301 the 12 legacy InboxZap blog posts (`/blog/post-1` … `/blog/post-12`) to `/blog` — added to `next.config.js`. Needs deploy. See `.seoagent/strategy/migration-plan.md`.
- [ ] Once `/blog` is deployed and confirmed live, generate the brief + write the PILLAR article for the `ai-meeting-assistant` cluster (see Content Plan below) — briefs/articles are intentionally not generated yet (publishing path not confirmed live).

## Medium
- [x] Add canonical + `Product`/`Offer` JSON-LD to `/pricing` (`app/pricing/page.tsx`).
- [x] Fix duplicate H1 on `/features` (`app/features/page.tsx`) — "Integrations" demoted to H2.
- [x] Fix stale InboxZap metadata in `app/layout.tsx` (title/description/OG → Lumina) + set `metadataBase`.
- [x] Add `Organization`/`SoftwareApplication`/`FAQPage` JSON-LD to `app/page.tsx` (already live in production; was missing from this repo checkout).
- [ ] Add non-empty, descriptive `alt` text (or `alt=""` if decorative) to the 3 homepage images once real product imagery replaces the placeholder SVGs.

## Content Plan (depth-first, one cluster)

Blocked until `publishing.setup_status: done` (see Critical above). Order below for when it is:

Cluster order: ai-meeting-assistant (only cluster — new positioning, no competing priorities yet)
- [ ] PILLAR ai-meeting-assistant — "ai meeting assistant"
- [ ] SUB_PILLAR ai-notetaker — "ai notetaker"
- [ ] SUB_PILLAR meeting-transcription-software — "meeting transcription software"
- [ ] SUB_PILLAR otter-ai-alternatives — "otter ai alternatives"
- [ ] SUB_PILLAR ai-meeting-summary-tool — "ai meeting summary tool"
- [ ] LONG_TAIL ai-meeting-assistant-for-teams — "ai meeting assistant for teams"
- [ ] LONG_TAIL automatic-meeting-notes-to-slack — "automatic meeting notes to slack"
- [ ] LONG_TAIL zoom-meeting-transcription-software — "zoom meeting transcription software"
- [ ] LONG_TAIL speaker-labeled-transcription-tool — "speaker labeled transcription tool"
- [ ] LONG_TAIL meeting-action-items-tracker — "meeting action items tracker"
- [ ] LONG_TAIL fireflies-ai-alternative — "fireflies ai alternative"
- [ ] LONG_TAIL best-ai-notetaker-for-zoom — "best ai notetaker for zoom"
- [ ] LONG_TAIL meeting-notes-app-for-remote-teams — "meeting notes app for remote teams"
- [ ] LONG_TAIL multilingual-meeting-transcription — "multilingual meeting transcription"

Full cluster detail: `.seoagent/strategy/clusters/ai-meeting-assistant.md`.

## Also noticed (outside SEO scope, flagging only)
- `npm install` reports `next@14.2.5` has a known security vulnerability (1 critical, 1 high via `npm audit`) — worth a dependency upgrade, unrelated to this audit.
