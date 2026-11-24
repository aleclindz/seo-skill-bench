---
last_updated_at: 2026-11-24T00:40:00.000Z
source: WebSearch (anonymous — no DataForSEO account; H/M/L are directional, not volume data)
---

# Keyword Discovery — lumina.example

## Why this cluster, not the legacy GSC terms

Lumina's own Search Console history (`gsc/Queries.csv`, `gsc/Pages.csv`) is almost entirely **InboxZap** (email cleanup) queries — "bulk delete emails," "inbox zero," "gmail storage full," etc. That demand is real but belongs to a retired product; see `.seoagent/strategy/migration-plan.md` for the per-asset disposition. None of it seeds this cluster. The keywords below come from WebSearch against Lumina's actual current positioning (AI meeting assistant — see `context.md`).

## Market shape

The head term ("AI meeting assistant," "best AI meeting assistant") is dominated by well-funded, content-heavy incumbents: Fireflies, Otter, Fellow, Fathom, tl;dv, Grain, Circleback, Granola, Plaud (see `competitors.md`). Ranking a brand-new domain for the bare head term in the near term is unrealistic — **Low** priority for now, revisit once the long-tail cluster has traction and backlinks.

| Keyword | Priority | Why |
|---|---|---|
| ai meeting assistant | Low (near-term) | Pillar term, but SERP is 100% funded incumbents with years of content — write it for topical depth/internal-linking structure, not to rank #1 soon |
| ai meeting notes | Medium | Slightly less contested than "assistant," real search volume per SERP breadth |
| meeting transcription software | Medium | Commercial-investigation intent, aggregator-heavy (G2/Capterra) but still winnable with a strong comparison angle |
| ai meeting minutes | Medium | Informational, multiple "how to" guides ranking — featured-snippet opportunity (numbered-list format) |
| meeting action items | Medium-High | Less content competition than "meeting notes"; most results are no-code workflow templates (Zapier/n8n), not product content — thin SERP, real opening |
| ai meeting assistant slack notion integration | High (first-mover) | No dedicated competitor page found targeting this exact combination; matches Lumina's actual differentiator (see `competitors.md` § Observed gap) |
| fireflies vs otter alternative | Medium | High purchase intent, but requires Lumina to be positioned confidently as an alternative — hold until the pillar + sub-pillars are live |
| free ai meeting assistant for small teams | High | Fathom and a few others own "free," but "for small teams" + Lumina's 5-seat free plan is a specific angle not saturated |
| meeting action items to slack and notion | High (first-mover) | No-data on DataForSEO-style tools is expected this early — treat as first-mover opportunity per Lumina's real integrations, not as "no demand" |

## SERP patterns observed

- "best AI meeting assistant" / "X vs Y" → dominated by vendor-authored comparison pages and roundup blogs (DEV Community posts, G2, Zapier). Beatable only with a specific angle (integration depth), not a generic listicle.
- "how to write meeting minutes with AI" → how-to guides with numbered steps and a few PAA boxes ("can AI record meeting minutes?") — matches the pillar's FAQ-schema approach.
- "meeting action items ... Slack ... Notion" → mostly **no-code workflow templates** (Zapier, n8n), not meeting-assistant product content. This is a thin, winnable SERP for a direct product page/article.

## Next research pass

Once `seoagent login` is connected (or a DataForSEO-backed plan), re-run this with real volume/difficulty via `seoagent keywords --seed` (GSC — will mostly re-surface the legacy InboxZap terms, useful only for the migration plan) and `seoagent keywords --discover` anchored on "ai meeting assistant" once `keywords.md` has enough on-strategy seed terms for discovery to not degrade into generic noise.
