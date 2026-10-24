## Result
status: pass
summary: Added the P8-2 entry to CHANGELOG, the metric section to the P8-2 report, a usage section for the CSS tools in guides/shell.md, the relaxed dry run in handoffs/P8-2/relaxed-plan/, and follow-up row F45. No move-map, overview or ADR-15 change (no folder or rule changed).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/reports/P8-2.md
app/docs/guides/shell.md
migration/refactor/followups.md (row F45)
migration/refactor/handoffs/P8-2/relaxed-plan/coverage-summary.json
migration/refactor/handoffs/P8-2/relaxed-plan/plan-output.txt
migration/refactor/handoffs/P8-2/docs.md

## Commands run
- css-prune.py --help → ok; plan mode never writes a stylesheet
- css-prune.py --raw handoffs/P8-2/coverage --out handoffs/P8-2/relaxed-plan plan --relax → 1,604,826 -> 1,332,979 B (-271,847 B); git status shows the same 3 modified CSS files as before
- ste_lint.py (CHANGELOG, P8-2 report, shell.md, followups.md) → 0 errors
- prettier --check (CHANGELOG, report, shell.md) → pass (CHANGELOG was reformatted with --write; diff is only the new entry)
- check_mermaid: not run, no mermaid file changed

## Deviations from the brief
- The dry run has no per-file list of deleted selectors: `plan` writes only sizes and rule counts (`deleted-selectors/` is written by `apply`, which changes files). Saved: per-file sizes, rule counts per guard (coverage-summary.json) and the console output (plan-output.txt).
- The estimate is now measured from the loop-1 state (1,604,826 B), so it is -271,847 B (the earlier -272 kB was from 1,605,845 B).
- The comment in css-coverage-preload.cjs names `css-coverage.py`, which does not exist (aggregation is in css-prune.py). Not changed: code file.

## Questions for the user
none
