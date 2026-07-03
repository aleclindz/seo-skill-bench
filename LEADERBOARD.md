# Leaderboard

Fixture: **pivot-saas** · Model: **claude-sonnet-5** · Rubric: **v1.0.0** · Updated: 2026-07-03

> Full 100-point composite (detection 40 / trap avoidance 25 / judgment 25 / execution 10), median of all runs.

| # | Skill | Composite | Detection | Trap avoidance | Judgment | Execution | Runs | Median time | Median cost |
|--:|-------|:--------:|:---------:|:--------------:|:--------:|:---------:|:----:|:-----------:|:-----------:|
| 1 | claude-seo-skill (mangollc) | **72.3** | 57% | 100% | 7.0/10 | 50% | 3 | 901s | $3.29 |
| 2 | Agentic SEO Skill | **65.9** | 38% | 73% | 8.0/10 | 100% | 3 | 649s | $1.03 |
| 3 | claude-seo | **63.9** | 33% | 100% | 6.0/10 | 100% | 3 | 772s | $3.07 |
| 4 | SEO/GEO Claude Skills | **62.8** | 62% | 73% | 7.0/10 | 100% | 3 | 915s | $3.42 |
| 5 | claude-seo-skills (lhitches) | **60.9** | 38% | 73% | 6.0/10 | 100% | 3 | 927s | $1.87 |
| 6 | Distribb Skill | **59.6** | 43% | 100% | 4.0/10 | 100% | 3 | 732s | $2.25 |
| 7 | Vanilla baseline (no skill) | **59.5** | 24% | 100% | 6.0/10 | 100% | 3 | 763s | $1.99 |
| 8 | claude-seo-skills (lionkiii) | **57.2** | 48% | 73% | 6.0/10 | 100% | 3 | 1139s | $3.00 |
| 9 | SEOAgent | **51.1** | 38% | 64% | 6.0/10 | 50% | 3 | 2700s | — |



## How to read this

- **Detection** — weighted share of the fixture's planted defects the skill actually found.
- **Trap avoidance** — 100% means zero hallucination events (never recommended "fixing" something that is demonstrably already fine).
- **Judgment** — blind panel median on the fixture's pre-registered judgment questions.
- Scores are medians across runs; a skill that only performs sometimes is an unreliable skill.
- Reproduce any row: `node harness/run.mjs --skill <id> --fixture pivot-saas --runs 3`.

_Maintained by [SEOAgent](https://seoagent.com), which enters its own skill — see the conflict-of-interest disclosure in RUBRIC.md._
