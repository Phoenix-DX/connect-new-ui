## Result
status: pass
summary: Added the CHANGELOG entry for P6-G4-A, set the status `moved` on the 13 G4 page rows of move-map.csv, and added follow-up F20 (Services.test.tsx flake) to migration/refactor/followups.md. overview.md and guides need no change: they already show pages/ and the not-yet-moved screens/.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
migration/refactor/followups.md

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors
cd app && npx prettier --check docs/refactor/CHANGELOG.md → pass (no parser for .csv)
git diff --stat app/docs/refactor/move-map.csv → 13 page rows only

## Deviations from the brief
none

## Questions for the user
none
