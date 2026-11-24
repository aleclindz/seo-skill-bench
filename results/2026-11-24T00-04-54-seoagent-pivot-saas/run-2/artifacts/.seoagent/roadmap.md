# Roadmap — lumina.example

## Critical

- [ ] Fix the blog index: `/blog` depends on `/api/posts`, which 404s, so the page ships 3 words of HTML and 0 links. Restore the API (or render the list server-side) and relink to all 12 existing posts. (`audit/latest.md`)

## High

- [ ] Add a real `public/img/og-lumina.png` (1200×630) — every page's `og:image` currently 404s site-wide. (`audit/latest.md`)
- [ ] Add page-specific `<meta name="description">` to all 12 blog posts — currently none have one. (`audit/latest.md`)
- [ ] Fix `/faq`: either redeploy so the `next.config.js` redirect to `/#faq` actually takes effect, add a real `#faq` section to the homepage, or restore a standalone page — then make the nav/footer links match. (`audit/latest.md`)
- [ ] Resolve the legacy blog content (12 InboxZap-era posts, 0 relevance to Lumina): apply `strategy/migration-plan.md` — harvest the homepage as-is, redirect/consolidate the 12 posts. (`strategy/migration-plan.md`)

## Medium

- [ ] Add `<link rel="canonical">` to `/pricing`.
- [ ] Add JSON-LD structured data to `/pricing`, `/features`, `/blog` (homepage already has Organization + SoftwareApplication — don't duplicate there).
- [ ] Fix `/features`: two conflicting `<h1>`s ("Features", "Integrations") — demote one to `<h2>`.
- [ ] Regenerate `sitemap.xml` to include `/pricing` and all blog post URLs (currently 4 URLs, 0 posts).

## Low

- [ ] Add `alt` text to the 3 decorative images on the homepage.

## Setup task — publishing path (blocks new article briefs)

- [ ] Confirm with the owner how a new `/blog/post-N` page actually gets created (no matching route exists in this repo — see `audit/latest.md` "Publishing decision"). Once known, update `project.md` → `publishing.strategy`/`cms`, set `setup_status: done`, then Phase 3 briefs can start. Until then, migration (harvest/redirect of existing posts) and keyword/cluster research are unblocked and proceed below.

## Content plan

Cluster order: ai-meeting-assistant (bottom-of-funnel, matches homepage positioning, easiest to convert) → meeting-action-items (Lumina's real differentiator, least competitive pressure). Depth-first — finish cluster 1 before starting cluster 2. **Briefs/articles blocked until the publishing setup task above is resolved** (`setup_status: done`); this list is ready to execute the moment that's unblocked.

### Cluster 1 — ai-meeting-assistant (`strategy/clusters/ai-meeting-assistant.md`)
- [ ] PILLAR  ai-meeting-assistant                        — "ai meeting assistant"
- [ ] SUB     ai-meeting-notes                             — "ai meeting notes"
- [ ] SUB     meeting-transcription-software               — "meeting transcription software"
- [ ] SUB     otter-ai-alternatives                        — "otter.ai alternatives"
- [ ] SUB     best-ai-meeting-assistant-for-small-teams     — "best ai meeting assistant for small teams"
- [ ] LONG    ai-meeting-assistant-free                    — "ai meeting assistant free"
- [ ] LONG    ai-meeting-assistant-for-zoom-google-meet-teams — "ai meeting assistant for zoom and google meet"
- [ ] LONG    how-accurate-is-ai-meeting-transcription     — "how accurate is ai meeting transcription"
- [ ] LONG    is-it-legal-to-record-meetings-with-ai       — "is it legal to record meetings with ai"
- [ ] LONG    ai-meeting-assistant-security-and-privacy    — "ai meeting assistant security and privacy"
- [ ] LONG    ai-meeting-assistant-for-sales-calls          — "ai meeting assistant for sales calls"
- [ ] LONG    ai-notetaker-for-standups                     — "ai notetaker for daily standups"
- [ ] LONG    fireflies-vs-otter-vs-fathom                  — "fireflies vs otter vs fathom"
- [ ] LONG    ai-meeting-assistant-pricing-compared         — "ai meeting assistant pricing compared"

### Cluster 2 — meeting-action-items (`strategy/clusters/meeting-action-items.md`)
- [ ] PILLAR  meeting-action-items                          — "meeting action items"
- [ ] SUB     meeting-recap-template                        — "meeting recap template"
- [ ] SUB     how-to-assign-action-items-in-meetings        — "how to assign action items in meetings"
- [ ] SUB     async-meeting-recap-for-remote-teams          — "async meeting recap for remote teams"
- [ ] SUB     meeting-follow-up-email-template              — "meeting follow up email template"
- [ ] LONG    action-item-tracker-template                  — "action item tracker template"
- [ ] LONG    how-to-write-actionable-meeting-notes         — "how to write actionable meeting notes"
- [ ] LONG    meeting-action-items-not-getting-done         — "meeting action items not getting done"
- [ ] LONG    action-items-vs-decisions-meeting-notes       — "action items vs decisions in meeting notes"
- [ ] LONG    slack-integration-for-meeting-notes           — "slack integration for meeting notes"
- [ ] LONG    notion-template-for-meeting-notes             — "notion template for meeting notes"
- [ ] LONG    weekly-recap-for-remote-teams                 — "weekly meeting recap for remote teams"
- [ ] LONG    automatic-action-item-extraction-ai           — "automatic action item extraction ai"

### Legacy content (existing posts — not new briefs)
- [ ] Apply `strategy/migration-plan.md`: redirect/consolidate the 12 InboxZap-era posts, keep harvesting the homepage as-is.

### Backlog (unclustered, not yet assigned)
- "async work vs sync meetings" — candidate for a future third cluster on remote-work productivity; not assigned yet.

### Competitors tracked
Otter.ai, Fireflies.ai, Fathom, Fellow (secondary watch) — see `competitors.md`.
