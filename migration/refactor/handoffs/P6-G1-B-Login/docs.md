## Result
status: pass
summary: Added the CHANGELOG entry and set the Login row of move-map.csv to `moved`. No other document names the changed paths (page-template.md already says api.ts becomes inputs.ts). Page-local blocks have no rows in move-map.csv, so none were added.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
migration/refactor/handoffs/P6-G1-B-Login/docs.md

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → 0 errors (58 warnings, same kind as older entries)
cd app && npx prettier --check docs/refactor/CHANGELOG.md → pass (prettier has no parser for CSV)

## Deviations from the brief
none

## Questions for the user
none
