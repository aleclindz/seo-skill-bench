# Business Context

- **Name:** Lumina
- **Type:** ONLINE-only (B2B SaaS, no physical/local presence)
- **Audience:** Teams and operations/managers at companies who run recurring video meetings (Zoom, Google Meet, Microsoft Teams) and want notes, decisions, and action items captured automatically
- **Industry:** Productivity / collaboration software — AI meeting assistant / meeting-notes category (crowded: Fathom, Fireflies, Otter, tl;dv, Grain, Fellow, plus native Zoom/Teams/Notion AI notes)
- **Location:** N/A (remote-first SaaS, no geo targeting)
- **Description:** Lumina joins Zoom/Meet/Teams calls, records and transcribes them, and delivers a summary with decisions and action items automatically. Positioned on "never take meeting notes again."

# Facts

- Product name: Lumina — source: app/layout.tsx, .seoagent/audit/evidence.md (live homepage title)
- Tagline/H1: "Never take meeting notes again" — source: app/page.tsx
- Joins Zoom, Google Meet, and Microsoft Teams — source: app/page.tsx ("how it works" section)
- Free plan: free for teams up to 5 — source: .seoagent/audit/evidence.md (live homepage + pricing meta descriptions)
- Pro plan: $12 per seat per month — source: .seoagent/audit/evidence.md (live /pricing meta description)
- Enterprise plan: custom pricing — source: .seoagent/audit/evidence.md (live /pricing meta description)
- Unlimited transcription on every plan — source: .seoagent/audit/evidence.md (live /pricing meta description)
- Feature set per live /features meta description: recording, speaker-labeled transcription, AI summaries, action items, integrations with Slack and Notion — source: .seoagent/audit/evidence.md
- Previous product/brand at this domain was "InboxZap" (bulk email delete / unsubscribe / inbox-zero tool) — source: app/layout.tsx (stale default metadata found pre-fix), gsc/Queries.csv, gsc/Pages.csv — company has pivoted away from this; see strategy/migration-plan.md

# Writing Instructions

- Tone: professional, direct, benefit-led (per existing homepage copy: "Never take meeting notes again" / "does the busywork humans shouldn't")
- Lead with outcomes (time saved, decisions captured) over feature lists
- Reference real competitors (Fathom, Fireflies, Otter, tl;dv, Grain, Fellow) by name in comparison content — this is a comparison-heavy SERP; don't shy away from "X alternative" framing
- Do not claim integrations or features beyond the Facts list above without a source

# Reference URLs

- Live homepage: http://127.0.0.1:44883/
- Live pricing: http://127.0.0.1:44883/pricing
- Live features: http://127.0.0.1:44883/features

# Topics to Avoid

- Do not write new positive content about "InboxZap", bulk email deletion, or inbox-zero workflows — that's the legacy product being migrated away from (see migration-plan.md). A mention in a transition/redirect context is fine; a new article targeting those keywords is not.
- Do not claim a specific number of customers/teams, specific accuracy percentages, or named enterprise customers — no source confirms any of these.

# Content Tone

professional

# Additional Notes

This is a mid-pivot codebase: GSC history is almost entirely legacy "InboxZap" demand (see migration-plan.md — 0 harvest / 40 query-redirect / 13 page-redirect, 0 sunset). The forward keyword strategy in strategy/clusters/ has little GSC history yet and is built from WebSearch + the live positioning instead.
