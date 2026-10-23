## Result
status: pass
summary: Added the CHANGELOG entry, a `message/` section and two fixed lines in `app/src/api/README.md`, and one fixed line in `Directory_EntityDetailsActions/README.md`. No other document needs a change (`move-map.csv` has no row for these calls; no folder or layer changed).

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md

## Commands run
ste_lint.py on the 3 files → 0 errors (warnings only)
npx prettier --check on the 3 files → pass
mermaid check → not run (no mermaid file changed)

## Deviations from the brief
none

## Questions for the user
none
