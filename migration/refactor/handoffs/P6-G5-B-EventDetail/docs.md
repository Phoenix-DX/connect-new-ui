## Result
status: pass
summary: CHANGELOG entry added (names `beforePaint: true`, W28). move-map rows 10 (moved) and 288 (note), calls-by-domain and api/README updated. overview.md and guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md

## Commands run
ste_lint.py on the 3 .md files → 0 errors in CHANGELOG and api/README; 1 error in calls-by-domain.md (sentence > 25 words), already in HEAD (not from this step)
prettier --check on the 3 .md files → pass
No mermaid change.

## Deviations from the brief
Checked against the tree: api.ts is gone, hooks and view exist, row 288 status was already `moved`. The 25-line pre-existing calls-by-domain app-table row for EventDetail stays, as for the other G5 steps (an end note says it is deleted).

## Questions for the user
none
