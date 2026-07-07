# Roadmap — lumina.example

## Done this session
- [x] Fixed stale InboxZap metadata in `app/layout.tsx` → Lumina
- [x] Server-rendered the blog index (`app/blog/page.tsx`) — was a client-side shell, invisible to crawlers
- [x] Reconciled repo/production drift: added missing `app/features/page.tsx` and `app/pricing/page.tsx` (single H1, canonical, JSON-LD)
- [x] Added homepage images with alt text + a real FAQ section (`#faq`) with `FAQPage` JSON-LD; fixed the dead `/faq` nav link
- [x] Extended `app/sitemap.ts` to include future blog posts
- [x] Migration plan: 301 all 12 legacy InboxZap blog posts to `/` (`.seoagent/strategy/migration-plan.md`, applied in `next.config.js`)

## Content plan — forward clusters (not yet written; next session)

Cluster order: ai-meeting-assistant (core ICP) → meeting-notes → transcription

### ai-meeting-assistant  [queued]
- [ ] PILLAR  ai-meeting-assistant        — "ai meeting assistant"
- [ ] SUB     ai-meeting-assistant-zoom   — "ai meeting assistant for zoom"
- [ ] LONG    meeting-assistant-vs-notetaker — "ai meeting assistant vs human note taker"

### meeting-notes  [queued]
- [ ] PILLAR  ai-meeting-notes            — "ai meeting notes"
- [ ] SUB     automatic-meeting-minutes   — "automatic meeting minutes"
- [ ] LONG    meeting-action-items-template — "meeting action items template"

### transcription  [queued]
- [ ] PILLAR  meeting-transcription-software — "meeting transcription software"
- [ ] SUB     speaker-labeled-transcripts — "speaker labeled transcripts"

Rationale: none of this has GSC history yet (0 impressions for any Lumina-relevant term today), so these clusters are pure forward strategy built from `context.md` + the new positioning — write these next, depth-first, once this session's technical fixes are reviewed.

## Open items / needs a human decision
- [ ] Confirm `/img/og-lumina.png` actually exists at that path in production (referenced in metadata across all pages; not verifiable from this repo — no `public/img/` assets are checked in).
- [ ] Decide whether the 12 redirected InboxZap posts should eventually be replaced with equivalent Lumina-audience content (e.g. "meeting overload" / "async vs sync meetings") to recapture some of that search demand under the new brand, rather than just letting the authority dead-end at `/`.
