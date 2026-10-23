## Result
status: pass
summary: Added the CHANGELOG entry for P6-G2-A and set the status `moved` on the 9 G2 page rows of move-map.csv. overview.md and guides need no change: they already show pages/ and the not-yet-moved screens/.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors (warnings only)
cd app && npx prettier --check docs/refactor/CHANGELOG.md → all files use Prettier code style (prettier has no parser for .csv)
git diff --stat app/docs/refactor/move-map.csv → 9 insertions, 9 deletions (9 page rows only)

## Deviations from the brief
none

## Questions for the user
none
