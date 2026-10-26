## Result
status: pass
summary: Added the CHANGELOG entry, set the move-map row of BrowseDirectory (page, notes) and added the deleted `api.ts` to `calls-by-domain.md`. No other document needs a change (no folder, layer or rule changed).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
migration/refactor/handoffs/P6-G4-B-BrowseDirectory/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md → 0 errors
python3 migration/tools/ste_lint.py calls-by-domain.md → 1 error (sentence of 39 words, same at HEAD, not from this step)
cd app && npx prettier --check docs/refactor/CHANGELOG.md docs/refactor/calls-by-domain.md → pass (CSV has no parser)

## Deviations from the brief
Row 241 (Layout_DetailPage) not changed: its notes do not count importers.

## Questions for the user
none
