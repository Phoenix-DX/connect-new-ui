## Result
status: pass
summary: Documented the TST sync of Household_Relations: route-spec block "Changes 2026-11-07 (TST sync)" with two Decisions to confirm, drift row, CHANGELOG-sync entry, route-check report regenerated, api README line 101 fixed.

## Files changed
migration/screens/Household_Relations/route-spec.md
migration/knowledge/tst-drift-2026-11-07.md
app/docs/CHANGELOG-sync.md
app/src/api/README.md
migration/route-check/routes/Household_Relations.md (check_route.py output; the script also refreshed APP_SHELL.md and ROUTES.md)

## Commands run
python3 tools/route-check/check_route.py Household_Relations → wrote the route report, APP_SHELL.md, ROUTES.md
python3 tools/docs/ste_lint.py <changed .md files> → route-spec 0 errors; CHANGELOG-sync 0; api README 0; tst-drift 2 errors in lines 3 and 92, which existed before this change
node tools/docs/check_mermaid.cjs route-spec.md → no errors

## Deviations from the brief
Renamed the old name Get_ParentHouseholdDetails to Get_SibllingsRelations in route-spec sections 2a-15 (diagram, tables, text). The history note in section 16 keeps the old name.

## Questions for the user
none
