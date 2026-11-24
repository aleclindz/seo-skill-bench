---
last_updated_at: 2026-10-19T00:00:00Z
---

# Roadmap — lumina.example

## Critical
- [ ] **Migrate 12 legacy InboxZap blog posts.** They carry real GSC authority (80–3,900 impressions each) but are 100% off-topic for Lumina. 301 each into `/blog` via `next.config.js` `redirects()` — proposed config in `.seoagent/strategy/migration-plan.md`, awaiting approval before writing.
- [ ] **Make `/blog` crawlable.** It renders a client-side shell (0 words / 0 links in server HTML) fetching `/api/posts`, which returns 404 live — no blog content is visible to search engines or to users with JS disabled/slow. Needs the content source fixed and the index server-rendered before any new article is published there.

## High
- [x] **Fix stale InboxZap metadata in `app/layout.tsx`.** Site-wide `<title>`/description/OG defaults still said "InboxZap — Clean Your Inbox in Minutes"; live site already serves the correct Lumina copy, so this was a repo/deploy drift risk (next deploy from this branch would have regressed live metadata). Fixed in this session.
- [ ] **Duplicate `<h1>` on `/features`** — a second `<h1>Integrations</h1>` mid-page should be `<h2>`. No corresponding route exists in this repo (`app/features` is not present) — flag to whoever owns that page's source.
- [ ] **`/pricing` missing `<link rel="canonical">` and all JSON-LD.** Confirmed live. No repo route exists for `/pricing` either — same ownership gap as `/features`.
- [ ] **`/faq` 404s live**, but `next.config.js` already has a `/faq → /#faq` redirect rule in this repo. The deployed site isn't running this rule — a deploy-sync gap, not a missing fix. Confirm the live deploy picks up this repo's `next.config.js`.

## Medium
- [ ] ~~**3 homepage images have no `alt` text** (inline SVG placeholders in the hero/how-it-works sections). `app/page.tsx` in this repo doesn't render these images at all — the live homepage has markup not present in this repo's `page.tsx` (another drift gap). Flag for reconciliation; once the real source is found, add descriptive `alt` text.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:45469/) already serves JSON-LD (Organization, SoftwareApplication) per evidence.md — this was a repo-source reconciliation, not a net-new addition.

## Content plan — AI Meeting Assistant cluster (depth-first)

Pillar first, finish the cluster before starting comparison pages.

- [ ] PILLAR  ai-meeting-assistant          — "ai meeting assistant"
- [ ] SUB     ai-meeting-notes              — "ai meeting notes"
- [ ] SUB     meeting-transcription-software — "meeting transcription software"
- [ ] SUB     meeting-action-items          — "meeting action items"
- [ ] SUB     ai-notetaker-slack-notion     — "ai notetaker for slack and notion"
- [ ] LONG    automate-meeting-follow-ups   — "how to automate meeting follow-ups"
- [ ] LONG    ai-meeting-assistant-remote-teams — "ai meeting assistant for remote teams"
- [ ] LONG    best-ai-notetaker-small-teams — "best ai notetaker for small teams"
- [ ] LONG    zoom-meeting-notes-automatically — "zoom meeting notes automatically"
- [ ] LONG    google-meet-transcription-tool — "google meet transcription tool"
- [ ] LONG    teams-meeting-transcription   — "microsoft teams meeting transcription"
- [ ] LONG    notion-meeting-notes-integration — "notion meeting notes integration"

Then the comparison sub-cluster:
- [ ] SUB     lumina-vs-fireflies           — "lumina vs fireflies"
- [ ] LONG    lumina-vs-otter               — "lumina vs otter ai"
- [ ] LONG    best-ai-meeting-assistant-small-teams — "best ai meeting assistant for small teams"

**Blocked on:** the `/blog` crawlability fix above — briefs/articles should not be generated until the publishing path renders server-side and resolves 200 (`references/publishing.md` brief pre-check).
