---
last_updated_at: 2026-07-07T22:00:00.000Z
tier: anonymous
data_source: WebSearch (H/M/L estimates — not DataForSEO; run `seoagent login` for real volume/difficulty)
---

# Strategy Discovery — lumina.example

## Why these clusters (not the GSC data)

`gsc/*.csv` is 100% legacy "InboxZap" (email-cleanup) demand — zero overlap with Lumina's current AI-meeting-assistant positioning. Per the pivot protocol, that history is handled separately as harvest/redirect/sunset (`strategy/migration-plan.md`); it is **not** used to seed this forward-looking keyword set. These three clusters are built from the live product (`audit/evidence.md`) + competitive-landscape WebSearch.

## Cluster priority — ai-meeting-notes first

**Recommended writing order: `ai-meeting-notes` → `tool-comparisons` → `meeting-productivity`.**

Rationale (ICP fit × easy-win density):
- **`ai-meeting-notes`** is the direct product-category hub — highest ICP fit (exactly what Lumina is), and the natural home for the pillar that every other cluster and the homepage should link up to. Plant this hub first.
- **`tool-comparisons`** is high commercial intent (bottom-funnel: "X alternatives", "X vs Y") and — per the competitor scan — every major player (Otter, Fireflies, Fathom, tl;dv) has content gaps a challenger's comparison page can slot into. Strong second: it converts well and the SERPs aren't dominated by unbeatable non-competitor authorities (Wikipedia/government), just other vendors — winnable with a genuinely useful comparison table.
- **`meeting-productivity`** is broader top-of-funnel (adjacent to Fellow's positioning) — good for volume and internal-linking depth, but least direct commercial intent. Do this last.

## H/M/L estimates (WebSearch-directional — not DataForSEO)

| Keyword | Volume | Difficulty | Intent | Notes |
|---|---|---|---|---|
| ai meeting assistant | H | H | Informational/Commercial | Category head term; every major competitor targets this — long-term pillar target, not an early win |
| ai meeting notes | M | M | Informational | Slightly less contested than the head term |
| meeting transcription software | M | M | Informational/Commercial | Overlaps with pure-transcription players (Rev, AssemblyAI) too |
| best ai meeting assistant | H | H | Commercial | Roundup format dominates (Zapier, PeopleManagingPeople, tl;dv itself) — hard but high-value if won |
| otter ai alternatives | M | L-M | Commercial | Named-competitor "alternatives" pages are a classic winnable pattern — first-mover priority |
| fireflies ai alternatives | M | L-M | Commercial | Same pattern; Fireflies' own content skews sales-team, leaves general-team searchers underserved |
| fathom alternatives | M | L-M | Commercial | Same pattern |
| ai meeting assistant for small teams | L-M | L | Commercial | Long-tail, matches Lumina's "free for teams up to 5" hook directly — easy win |
| ai meeting assistant with slack integration | L | L | Commercial | Long-tail, matches a real Lumina feature (Slack + Notion integrations) — first-mover-ish, easy win |
| how to run better team meetings | M | M | Informational | Broad productivity term, competes with Fellow/general productivity content |
| ai meeting action items | L-M | L | Informational/Commercial | Directly matches Lumina's core value prop ("decisions and action items") — easy win, low competition |

**Easy-win shortlist to lead with:** `ai meeting assistant for small teams`, `ai meeting assistant with slack integration`, `ai meeting action items`, and the three `*-alternatives` comparison terms — lower difficulty, directly matches shipped product features, and (for the alternatives pages) rides existing competitor search volume.

## Next step

Recommend `seoagent login` (free) to replace these WebSearch H/M/L estimates with real DataForSEO volume/difficulty for the top ~25 keywords, and to unlock GSC-grounded striking-distance data going forward. See `roadmap.md` for the article-level content plan.
