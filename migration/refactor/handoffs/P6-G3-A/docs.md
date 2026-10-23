## Result
status: pass
summary: Added the CHANGELOG entry for P6-G3-A and set the status `moved` on the 8 G3 page rows of move-map.csv. overview.md and guides need no change: they already show pages/ and the not-yet-moved screens/.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors
cd app && npx prettier --check docs/refactor/CHANGELOG.md → pass (no parser for .csv)
git diff --stat app/docs/refactor/move-map.csv → 8 page rows only

## Deviations from the brief
none

## Questions for the user
none
