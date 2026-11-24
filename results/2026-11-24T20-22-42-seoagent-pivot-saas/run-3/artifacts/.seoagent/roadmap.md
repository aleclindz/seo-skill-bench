# Roadmap — Lumina

## Critical

- [x] Fix `/blog`'s broken client-side fetch to a nonexistent `/api/posts` endpoint — converted to server-rendered `content/blog/*.md` (this session; see `audit/latest.md`). Pending deploy.
- [ ] **Owner decision needed:** confirm where `/features`, `/pricing`, and `/blog/post-1`…`/post-12` are actually served from — they have no source file in this repo. Without this, canonical/schema fixes on those routes and the legacy-post 301s in `migration-plan.md` have nowhere to land.
- [ ] **Owner decision needed:** confirm whether this repo is meant to be redeployed as production. If yes: the InboxZap-metadata and `/blog` fixes in this session need a deploy to take effect (re-verify live before calling either "fixed").

## High

- [ ] Add a short FAQ section (`id="faq"`, 4-5 Q&As, paired with `FAQPage` JSON-LD) to the homepage — suggested copy below. Needed because `/faq` 301s to `/#faq` (once deployed) but that anchor doesn't exist yet.
  - Suggestion: "Is Lumina free?" → "Yes — free for teams up to 5, with unlimited transcription." / "How much does Pro cost?" → "$12 per seat per month, unlimited transcription included." / "Is there an Enterprise plan?" → "Yes, with custom pricing — contact us." / "Which meeting platforms does Lumina support?" → "Zoom, Google Meet, and Microsoft Teams."
- [ ] Configure the 301s in `strategy/migration-plan.md` once the owner confirms where `/blog/post-*` is served from (12 legacy posts → `/blog`; surviving `inboxzap`-branded URLs → `/`).
- [ ] Once the `/features`/`/pricing` source is located: add canonical tag to `/pricing`, add `Product`/`Offer` JSON-LD to `/pricing`, add `SoftwareApplication` JSON-LD to `/features`, demote the second `<h1>` ("Integrations") on `/features` to `<h2>`, add descriptive alt text to the homepage's 3 images.
- [ ] Fill `.seoagent/okf/` from `context.md` (currently scaffold placeholders) and run `seoagent okf publish`.

## Medium

- [ ] Re-run keyword research with `seoagent login` connected (GSC + DataForSEO) once available — this session's cluster priorities are WebSearch-directional only, no real volume data.
- [ ] Re-run `seoagent migrate --csv gsc/Queries.csv` periodically against fresh GSC exports to track legacy-demand decay.

## Content plan — AI Meeting Assistant for Teams cluster

Depth-first. Full detail in `strategy/clusters/ai-meeting-assistant-for-teams.md`. **Not yet written** — this is a one-shot session with no owner available to approve mid-build; per this skill's rule ("headless/one-shot, nobody to approve → stop at the plan"), no articles were generated. Approve this plan, then the next session writes the pillar first and works down.

- [ ] PILLAR `ai-meeting-assistant-for-teams` — "ai meeting assistant for teams"
- [ ] SUB_PILLAR `free-ai-meeting-assistant-for-small-teams` — "free ai meeting assistant for small teams"
  - [ ] LONG_TAIL `best-free-ai-meeting-assistant-for-small-teams`
- [ ] SUB_PILLAR `ai-meeting-assistant-alternatives-comparison` — "ai meeting assistant alternatives"
  - [ ] LONG_TAIL `fathom-alternative-for-teams`
  - [ ] LONG_TAIL `fireflies-alternative-for-small-teams`
  - [ ] LONG_TAIL `otter-ai-alternative`
- [ ] SUB_PILLAR `automate-meeting-action-items` — "automate meeting action items"
  - [ ] LONG_TAIL `how-to-automate-meeting-action-items`
  - [ ] LONG_TAIL `meeting-summary-tool-with-slack-integration`
  - [ ] LONG_TAIL `meeting-summary-tool-with-notion-integration`
- [ ] SUB_PILLAR `speaker-labeled-meeting-transcription` — "speaker labeled meeting transcription"
  - [ ] LONG_TAIL `ai-notetaker-for-zoom-meetings`
  - [ ] LONG_TAIL `ai-notetaker-for-google-meet`
  - [ ] LONG_TAIL `ai-notetaker-for-microsoft-teams`
- [ ] SUB_PILLAR `ai-meeting-notes-vs-manual-note-taking` — "ai meeting notes vs manual note taking"
  - [ ] LONG_TAIL `how-to-write-meeting-minutes-with-ai`

## Migration (legacy InboxZap authority)

See `strategy/migration-plan.md` for full detail.

- [x] Homepage — corrected to "harvest / no action" (tool mis-flagged it as off-topic redirect)
- [ ] 3 branded `inboxzap*` queries → redirect to `/` (needs owner: where is this served from)
- [ ] 12 legacy `/blog/post-N` URLs → redirect to `/blog` (needs owner: where is this served from)
