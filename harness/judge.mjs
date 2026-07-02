#!/usr/bin/env node
/**
 * Blind judgment scorer — STUB (rubric v1 ships with judgment "pending").
 *
 * The deterministic scorer (score.mjs) covers detection + trap avoidance.
 * The three judgment questions (J1–J3 in each fixture's manifest) need an
 * LLM judge. Protocol, when implemented:
 *
 *   1. ANONYMIZE: strip every skill/brand name from the run output before the
 *      judge sees it (replace with "Entrant"). The judge must never know who
 *      it is scoring — this kills brand bias.
 *   2. PANEL: >=3 judge calls per run, each with a distinct lens (strategy
 *      correctness / evidence grounding / practicality). Median wins.
 *   3. CROSS-MODEL: at least one judge should be a non-Anthropic model to
 *      break same-family bias (the runner is Claude; an all-Claude panel
 *      grades its own homework).
 *   4. ANCHORED SCALE: each judgment question in the manifest carries 0/5/10
 *      anchor descriptions; judges must quote the anchor they matched.
 *   5. The judge NEVER sees the manifest's defect/trap list — judgment
 *      questions only. Detection scoring stays deterministic.
 *
 * Planned usage:
 *   node harness/judge.mjs --run results/<dir>/run-N --fixture pivot-saas
 */
console.error(
  'judge.mjs is not implemented yet (rubric v1 ships with the judgment dimension marked "pending").\n' +
    'See the protocol in this file\'s header before implementing.'
);
process.exit(1);
