## Result
status: pass
summary: Updated CHANGELOG, move-map (rows 22 and 310), calls-by-domain (bookmark row), api/README (bookmark section) and followups (F28). Prettier passes; the STE lint error in calls-by-domain line 5 is old, not from this step.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/followups.md
migration/refactor/handoffs/P6-G6-B-MyBookmarks/docs.md

## Commands run
ste_lint.py on the changed .md files → 0 errors in the new text
prettier --check on the changed files under app/ → pass

## Deviations from the brief
none

## Questions for the user
none
