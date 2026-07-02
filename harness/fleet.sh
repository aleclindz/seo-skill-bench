#!/usr/bin/env bash
# Run the full entrant fleet against a fixture, then judge and build the leaderboard.
#
#   ./harness/fleet.sh [fixture] [runs] [parallel]
#
# Defaults: fixture=pivot-saas runs=3 parallel=3
# Requires an authenticated `claude` CLI (run `claude` once interactively if
# headless calls return 401).
set -uo pipefail
cd "$(dirname "$0")/.."

FIXTURE="${1:-pivot-saas}"
RUNS="${2:-3}"
PARALLEL="${3:-3}"

# Preflight: fail fast if headless auth is broken.
AUTH=$(claude -p "Reply with exactly: OK" --output-format json --max-turns 1 2>/dev/null | head -c 2000)
if echo "$AUTH" | grep -q '"is_error":true'; then
  echo "FATAL: headless 'claude -p' cannot authenticate. Run 'claude' interactively (/login) or set ANTHROPIC_API_KEY, then retry." >&2
  exit 1
fi
echo "preflight: headless claude OK"

SKILLS=$(node -e 'const s=require("./skills.json"); console.log(s.skills.map(x=>x.id).join("\n"))')
echo "fleet: $(echo "$SKILLS" | wc -l | tr -d ' ') entrants × $RUNS runs on $FIXTURE (parallel=$PARALLEL)"

echo "$SKILLS" | xargs -P "$PARALLEL" -I {} sh -c \
  'echo "[fleet] start {}"; node harness/run.mjs --skill {} --fixture '"$FIXTURE"' --runs '"$RUNS"' > "results/fleet-{}.log" 2>&1; echo "[fleet] done {} (exit $?)"'

echo "fleet complete. judging..."
for D in results/*-"$FIXTURE"/run-*; do
  [ -f "$D/judge.json" ] && continue
  node harness/judge.mjs --run "$D" --fixture "$FIXTURE" || echo "judge failed for $D (leaderboard will mark pending)"
done

node harness/leaderboard.mjs --fixture "$FIXTURE" --write
echo "done — see LEADERBOARD.md"
