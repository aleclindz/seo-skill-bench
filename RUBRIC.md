# seo-skill-bench Rubric — v1.0.0

**Status: pre-registered and frozen.** These weights are fixed for all runs scored under
rubric v1.0.0. Any change to weights, components, or component definitions requires a
versioned rubric bump (v1.1.0, v2.0.0, …). Results produced under different rubric
versions are **not comparable** and must never be presented in the same ranking table.

## Composite score (0–100)

```
composite = 40 × detection + 25 × trap_avoidance + 25 × judgment + 10 × execution
```

where each component is normalized to [0, 1].

### 1. Defect detection — 40%

Deterministic, scored by `harness/score.mjs` against the fixture manifest.

Each fixture plants N true-positive defects, each with a severity weight (1–3) and a set
of published match patterns. A defect counts as **detected** if any of its match patterns
hits a segment of the run's transcript or produced artifacts (lowercased).

```
detection = Σ(weight of detected defects) / Σ(weight of all defects)
```

### 2. Trap avoidance — 25%

Deterministic. Each fixture plants M traps: things that are **already present and
correct** on the live site (e.g. existing Organization JSON-LD, complete Open Graph tags,
a permissive robots.txt). Recommending that one be added or fixed is an objectively
scored hallucination. Each trap has a weight (1–3) and published violation patterns.

```
trap_avoidance = 1 − Σ(weight of violated traps) / Σ(weight of all traps)
```

### 3. Judgment — 25%

The residual subjective component: strategy quality that cannot be answer-keyed. Each
fixture pre-registers judgment questions (e.g. for `pivot-saas`: intent inference,
migration planning, strategic balance), each with 0 and 10 anchor descriptions.

Scoring protocol: entrant names and identifying strings are stripped from the output;
a judge panel (ideally cross-model) scores each question 0–10 against the anchors;
the component is the **median** panel score across questions, scaled to [0, 1].

> **v1 status: pending.** `harness/judge.mjs` is a stub. Until it is implemented and a
> judging protocol run is published, composite scores should be reported as
> "75-point deterministic composite (judgment pending)" — do not silently impute a
> judgment score.

### 4. Execution — 10%

Deterministic, simple by design:

- **0.5** if the run produced at least one artifact (a file created or modified in the
  workspace, beyond the skill's own installation files).
- **0.5** if the session finished within the turn budget (`--max-turns 80`), i.e. the
  transcript ends with a final result rather than a turn-limit cutoff.

```
execution = artifact_produced × 0.5 + within_turn_budget × 0.5
```

## Repetition and reporting

Each entrant runs **N ≥ 3** times per fixture. The published score per entrant per
fixture is the **median** composite across runs; the spread (min–max) is published
alongside it. High variance is reported as a finding, not smoothed away.

**Invalid-run policy (uniform for every entrant):** a run whose transcript is empty
because the harness killed a hung process is a failed *measurement* — there is no
output to score — and is retried exactly once, with the original preserved as
`run-N-invalid` in the published results. Runs that produce any output at all score
as-is, however bad. A skill halting itself (auth gate, refusal, crash with output)
is a measured result, not an invalid run.

## Conflict of interest

This benchmark is maintained by SEOAgent (seoagent.com), which enters its own skill.
Mitigations: answer-key (deterministic) scoring dominates the composite; all fixtures,
weights, and match patterns are published in this repo before runs; the subjective
residual is blind-judged with entrant names stripped; and the harness is open and
dependency-free so anyone can re-run every number.

## Version history

- **v1.0.0** (2026-07-02) — initial pre-registration. 40/25/25/10 weights;
  judgment component pending (judge stub).
