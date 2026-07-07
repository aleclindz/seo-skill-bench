# Leaderboard

Fixture: **pivot-saas** · Model: **claude-sonnet-5** · Rubric: **v1.0.0** · Updated: 2026-07-07

> Full 100-point composite (detection 40 / trap avoidance 25 / judgment 25 / execution 10), median of all runs.

| # | Skill | Composite | Detection | Trap avoidance | Judgment | Execution | Runs | Median time | Median cost |
|--:|-------|:--------:|:---------:|:--------------:|:--------:|:---------:|:----:|:-----------:|:-----------:|
| 1 | SEOAgent | **82.4** | 81% | 100% | 8.0/10 | 50% | 3 | 1035s | $4.85 |
| 2 | claude-seo-skills (lhitches) | **72.9** | 57% | 100% | 6.0/10 | 100% | 3 | 731s | $1.79 |
| 3 | Vanilla baseline (no skill) | **71.5** | 48% | 100% | 7.0/10 | 100% | 3 | 524s | $2.07 |
| 4 | Agentic SEO Skill | **71.2** | 62% | 73% | 7.0/10 | 50% | 3 | 656s | $3.04 |
| 5 | claude-seo | **69.0** | 48% | 100% | 6.0/10 | 100% | 3 | 603s | $1.88 |
| 6 | Marketing Skills (Corey Haines) | **67.9** | 57% | 100% | 4.0/10 | 100% | 3 | 817s | $2.06 |
| 7 | claude-seo-skill (mangollc) | **64.6** | 43% | 100% | 7.0/10 | 100% | 3 | 791s | $2.26 |
| 8 | claude-seo-skills (lionkiii) | **62.2** | 48% | 73% | 7.0/10 | 100% | 3 | 412s | $2.08 |
| 9 | SEO/GEO Claude Skills | **59.7** | 33% | 73% | 5.0/10 | 100% | 3 | 520s | $2.06 |
| 10 | Distribb Skill | **59.5** | 24% | 100% | 6.0/10 | 100% | 3 | 473s | $1.44 |



## How to read this

- **Detection** — weighted share of the fixture's planted defects the skill actually found.
- **Trap avoidance** — 100% means zero hallucination events (never recommended "fixing" something that is demonstrably already fine).
- **Judgment** — blind panel median on the fixture's pre-registered judgment questions.
- Scores are medians across runs; a skill that only performs sometimes is an unreliable skill.
- Reproduce any row: `node harness/run.mjs --skill <id> --fixture pivot-saas --runs 3`.

_Maintained by [SEOAgent](https://seoagent.com), which enters its own skill — see the conflict-of-interest disclosure in RUBRIC.md._
