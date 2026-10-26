# Brief: P5-F9 (the CountryDetails/default timing flake under load)

Not a catalog step: the master wrote this brief by hand (follow-up F9 in `migration/refactor/followups.md`). Do not run
`rf.py start`, `stage` or `done`.

| Field | Value |
|---|---|
| Kind | fix (test tooling or app timing) |
| Parity level | strict, route CountryDetails (both references), runs under load; then `--all` once |
| Developer model | opus |
| Depends on | P5-2-country (d91327c) |
| Handoff folder | `migration/refactor/handoffs/P5-F9/` |

## Why

CountryDetails/default (self reference) sometimes fails with structure, style, layout and position differences, and
passes when it runs again:

- P1 verification: "CountryDetails default: structure 5, style 3, layout 2, position 2" (self only), then clean;
- P4-4 and later reports: "Passed on the second try (timing flake of the first try): CountryDetails/default [self]";
- P5-2-country: the first run with 4 jobs had "structure 4, style 4, layout 3, position 3" (self only); 3 single runs
  and a full rerun were clean.

The OutSystems reference does not show it. Phase 6 runs 3 to 4 parity runs at the same time, so the machine has more
load, and this flake would start fix loops for nothing. P4-F6 fixed a similar flake on EventDetail (late web font).

## Do

1. Reproduce it under load: run `--routes CountryDetails --ref self` several times while a second parity run of other
   routes runs at the same time (use `--out migration/refactor-parity/<name>` for both, see `migration/tools/README.md`,
   "Parallel runs"; `--jobs 4`). Count the failures before any change. Keep the per-state files of a failing run
   (`<out>/self/CountryDetails/default.json`, the diff images) and find what differs (which nodes, which part of the
   page: map, images, lists, async data).
2. Find the cause in the page (`app/src/screens/CountryDetails/` and the blocks it uses) or in the capture timing
   (`parity_check.cjs`, `refactor_parity.py`: what the capture waits for before the snapshot).
3. Fix it with the smallest change that does not change the final render. Allowed: the capture step of the parity tools
   (for example wait for a condition the page already exposes, the same for both sides), or app code of CountryDetails
   when the cause is there. Not allowed: `public/UBTConnect/css/**`, `src/mocks/**` fixtures, `src/api/openapi.yaml`,
   files under `migration/refactor-reference/`, a looser threshold, a mask, or a longer fixed sleep.
4. Prove it: the same load test after the fix with 0 failures in at least 10 runs, then one `--all --ref both` run with
   64/0 on both references.
5. When no cause is found in reasonable time, stop and report the evidence.

## Checks

- Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`.
- Dev server of this repo: http://localhost:5174 (`--app http://localhost:5174`). Port 5173 is another clone: never use
  it, never stop it.
- `node .claude/skills/outsystems-screen-spec/scripts/parity_check.cjs --self-test` when that file changes;
  `npm --prefix app run ci` when app code changes. Document a tool change in `migration/tools/README.md`.

## Report

Write `dev.md` in this folder: summary, the cause with evidence, files changed, run counts before and after.
