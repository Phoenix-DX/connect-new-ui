## Result
status: pass
summary: Updated the CHANGELOG, move-map (rows 9 and 287), calls-by-domain, api/README and baseline.md for EventBooklet. The CHANGELOG notes `beforePaint: true` (W28) and that EventBooklet has no parity states (DOM evidence: the 16-scenario old-vs-new test). overview.md and ADR-15 need no change (no new folder or rule).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
app/docs/refactor/baseline.md (also reformatted by prettier: table column widths)

## Commands run
ste_lint.py on the 4 .md files → 0 errors, except calls-by-domain.md: 1 error (line 5, 39-word sentence, already there, not in my text)
npx prettier --write on the 4 .md files → formatted; --write was used, so the check is clean
check_mermaid.cjs → not run (no mermaid changed)

## Deviations from the brief
- Checked against the tree: arch baseline is 75 rows now (test.md), not 83 (dev.md), because later steps lowered it. The CHANGELOG states only the depcruise change 210 to 209 (dev.md), like the EventDetail entry.
- move-map.csv is not prettier-checked (no parser); edited with a script, 2 rows only.

## Questions for the user
none
