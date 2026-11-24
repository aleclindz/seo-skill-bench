# Leaderboard

Fixture: **pivot-saas** · Model: **claude-sonnet-5** · Rubric: **v1.0.0** · Updated: 2026-11-24

> Full 100-point composite (detection 40 / trap avoidance 25 / judgment 25 / execution 10), median of all runs.

| # | Skill | Composite | Detection | Trap avoidance | Judgment | Execution | Skill fired | Footprint | Resident | Runs | Median time | Median cost |
|--:|-------|:--------:|:---------:|:--------------:|:--------:|:---------:|:-----------:|:---------:|:--------:|:----:|:-----------:|:-----------:|
| 1 | SEOAgent | **75.6** | 81% | 73% | 8.0/10 | 100% | 3 of 3 | light | 135t | 3 | 619s | $2.05 |
| 2 | Fire Your SEO Agency (leopard627) | **75.4** | 62% | 100% | 9.0/10 | 100% | 3 of 3 | light | 144t | 3 | 546s | $1.36 |
| 3 | Open SEO MCP Skills (Ryze AI) | **74.8** | 62% | 100% | 6.0/10 | 100% | 2 of 3 | medium | 540t | 3 | 434s | $1.17 |
| 4 | SEO Skills (Illyism) | **74.3** | 71% | 100% | 7.0/10 | 100% | 2 of 3 | heavy | 2970t | 3 | 476s | $1.23 |
| 5 | Vanilla baseline (no skill) | **74.0** | 48% | 100% | 7.0/10 | 100% | — | — | — | 3 | 454s | $1.03 |
| 6 | GEO-SEO Claude (zubair-trabzada) | **72.9** | 62% | 73% | 8.0/10 | 100% | 0 of 3 | heavy | 1102t | 3 | 545s | $1.49 |
| 7 | claude-seo | **72.3** | 62% | 100% | 7.0/10 | 100% | 0 of 3 | heavy | 2690t | 3 | 566s | $1.35 |
| 8 | claude-seo-skill (mangollc) | **69.7** | 48% | 73% | 7.0/10 | 100% | 1 of 3 | heavy | 1315t | 3 | 391s | $1.06 |
| 9 | Agentic SEO Skill | **67.9** | 71% | 73% | 6.0/10 | 100% | 2 of 3 | light | 106t | 3 | 481s | $1.41 |
| 10 | claude-seo-skills (lhitches) | **67.7** | 38% | 100% | 7.0/10 | 100% | 0 of 3 | medium | 358t | 3 | 415s | $0.91 |
| 11 | SEO/GEO Claude Skills | **67.1** | 33% | 100% | 8.0/10 | 100% | 1 of 3 | light | 20t | 3 | 433s | $0.89 |
| 12 | Marketing Skills (Corey Haines) | **66.1** | 71% | 73% | 6.0/10 | 100% | 2 of 3 | heavy | 4858t | 3 | 504s | $1.43 |
| 13 | seo-audit-skill (jeffli1993) | **64.6** | 52% | 73% | 7.0/10 | 100% | 2 of 3 | light | 157t | 3 | 526s | $1.46 |
| 14 | Distribb Skill | **62.9** | 62% | 73% | 6.0/10 | 100% | 3 of 3 | medium | 439t | 3 | 517s | $1.58 |
| 15 | claude-seo-skills (lionkiii) | **60.9** | 48% | 73% | 7.0/10 | 100% | 2 of 3 | heavy | 4848t | 3 | 503s | $1.26 |



## How to read this

- **Detection** — weighted share of the fixture's planted defects the skill actually found.
- **Trap avoidance** — 100% means zero hallucination events (never recommended "fixing" something that is demonstrably already fine).
- **Judgment** — blind panel median on the fixture's pre-registered judgment questions.
- **Skill fired** — in how many runs the installed skill was invoked (the Skill tool) or its files were read. Outside the composite. The prompt is uncoached, so a skill that never fires is being scored as the model alone; read its row against the baseline. Per-run receipts: `activation.json`; method: `node harness/activation.mjs`.
- **Footprint / Resident** — context cost, deliberately OUTSIDE the composite: Resident is the tokens the entrant's installed skill descriptions occupy in the system prompt of EVERY message (whether or not a skill fires; a collection pays per skill), banded light ≤280t / medium ≤1000t / heavy >1000t against the 50–280t per-skill range measured in "@skills: Attention Is All You Have" (Yin et al., 2026). Heavy resident footprints dilute the trigger reliability of everything else installed. Full numbers (activation + bundle tokens) in results/footprint.json; method + regeneration: `node harness/footprint.mjs`.
- Scores are medians across runs; a skill that only performs sometimes is an unreliable skill.
- Reproduce any row: `node harness/run.mjs --skill <id> --fixture pivot-saas --runs 3`.

_Maintained by [SEOAgent](https://seoagent.com), which enters its own skill — see the conflict-of-interest disclosure in RUBRIC.md._
