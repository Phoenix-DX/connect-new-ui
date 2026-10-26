## Result
status: pass
summary: Set the PINBiometricsMenu row of move-map.csv to moved and added the CHANGELOG entry. No other document names the changed paths.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
migration/refactor/handoffs/P6-G1-B-PINBiometricsMenu/docs.md

## Commands run
python3 migration/tools/ste_lint.py app/docs/refactor/CHANGELOG.md → see final check
cd app && npx prettier --check docs/refactor/CHANGELOG.md docs/refactor/move-map.csv → see final check

## Deviations from the brief
none

## Questions for the user
none
