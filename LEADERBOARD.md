# Leaderboard

Fixture: **pivot-saas** · Model: **claude-sonnet-5** · Rubric: **v1.0.0** · Updated: 2026-07-07

> Full 100-point composite (detection 40 / trap avoidance 25 / judgment 25 / execution 10), median of all runs.

| # | Skill | Composite | Detection | Trap avoidance | Judgment | Execution | Runs | Median time | Median cost |
|--:|-------|:--------:|:---------:|:--------------:|:--------:|:---------:|:----:|:-----------:|:-----------:|
| 1 | SEOAgent | **84.9** | 81% | 100% | 9.0/10 | 50% | 3 | 779s | $4.46 |
| 2 | claude-seo-skills (lhitches) | **76.0** | 52% | 100% | 8.0/10 | 100% | 3 | 428s | $2.20 |
| 3 | Agentic SEO Skill | **75.4** | 71% | 73% | 9.0/10 | 100% | 3 | 590s | $2.81 |
| 4 | Vanilla baseline (no skill) | **73.0** | 71% | 100% | 6.0/10 | 100% | 3 | 405s | $2.31 |
| 5 | claude-seo-skill (mangollc) | **70.4** | 67% | 73% | 7.0/10 | 100% | 3 | 553s | $3.08 |
| 6 | claude-seo | **67.7** | 38% | 100% | 6.0/10 | 100% | 3 | 415s | $1.70 |
| 7 | claude-seo-skills (lionkiii) | **66.6** | 52% | 73% | 6.0/10 | 100% | 3 | 727s | $2.96 |
| 8 | Marketing Skills (Corey Haines) | **66.6** | 52% | 73% | 7.0/10 | 100% | 3 | 471s | $1.87 |
| 9 | SEO/GEO Claude Skills | **66.0** | 57% | 100% | 6.0/10 | 100% | 3 | 544s | $2.16 |
| 10 | Distribb Skill | **65.9** | 43% | 100% | 7.0/10 | 100% | 3 | 468s | $2.33 |



## How to read this

- **Detection** — weighted share of the fixture's planted defects the skill actually found.
- **Trap avoidance** — 100% means zero hallucination events (never recommended "fixing" something that is demonstrably already fine).
- **Judgment** — blind panel median on the fixture's pre-registered judgment questions.
- Scores are medians across runs; a skill that only performs sometimes is an unreliable skill.
- Reproduce any row: `node harness/run.mjs --skill <id> --fixture pivot-saas --runs 3`.

_Maintained by [SEOAgent](https://seoagent.com), which enters its own skill — see the conflict-of-interest disclosure in RUBRIC.md._
