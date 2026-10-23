# P5-F8 dev report

## Result
Status: pass. `refactor_parity.py` has `--out <dir>` (default `migration/refactor-parity/last`). All per-state output,
the self exemption files and the default report (`<out>/report.md`) go under it; only it is deleted at the start of a
run; a dir outside `migration/refactor-parity/` (or the root itself, or `..` tricks) is refused. `--record-self` is unchanged.
Checked as shared state: temp/lock files (none: only the `--out` json, exemptions json and diff pngs, all under the out
dir), `--diff-ref` (only a name in the pixel detail text, nothing written there), reference folder (read-only in compare),
`migration/screens` (stays clean), browser (parity_check.cjs launches its own, no persistent profile found by grep).
Remaining shared: `app/docs/refactor/graph.json` (only `--changed` without `--files` may rebuild it); noted in the README.
Not run (master note): the "one normal run without --out" check; the master runs it later. Default is unchanged in code
(`RUNS` constant is still the default of `--out`).

## Files changed
- migration/tools/refactor_parity.py (option, `resolve_out`, docstring)
- migration/tools/README.md (option row, parallel-run section with examples)
- migration/refactor/handoffs/P5-F8/dev.md

## Commands run
- `--out /tmp/x`, `--out migration/refactor-parity/../x`, `--out migration/refactor-parity`: each refused (self-check of the guard).
- Two runs at once on http://localhost:5174, `--jobs 2 --ref both`, `--out migration/refactor-parity/f8-a` (HomeFeed) and `f8-b` (Login):
  both PASS (outsystems 1/1, self 1/1), each folder held only its own route, report.md in each. Folders removed afterwards.
- `git status --short migration/screens`: empty.

## Deviations
- Normal run without `--out` skipped (another developer uses `last/`).

## Questions for the user
None.
