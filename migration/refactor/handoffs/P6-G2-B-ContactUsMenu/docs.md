## Result
status: pass
summary: Added the CHANGELOG entry and set the move-map row of ContactUsMenu (moved, page + hook, notes from dev.md). No other document needs a change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors
cd app && npx prettier --check docs/refactor/CHANGELOG.md → pass (CSV has no prettier parser)

## Deviations from the brief
none

## Questions for the user
none
