## Result
status: pass
summary: Recorded api/country in the CHANGELOG, src/api/README.md, the API guide, page-template.md and calls-by-domain.md. move-map.csv, overview.md and ADR-15 need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/docs/guides/api-and-mocks.md
app/docs/guides/page-template.md
app/docs/refactor/calls-by-domain.md

## Commands run
ste_lint.py on the 5 files → 0 errors for CHANGELOG, README, guides; calls-by-domain.md keeps 1 old error (line 5, P0-4 text, not mine)
npx prettier --check on the 5 files → pass

## Deviations from the brief
- move-map.csv: the only row (CacheControl_AllCountries, target api/country/hooks.ts) is rewritten in P5-4, so its status stays empty.
- calls-by-domain.md: counts stay 6 files and 7 actions (the table lists domain assignment); added one note that the 7 actions are now in api/country.
- Later cleanup noted in the CHANGELOG: wire alias CacheControl_AllCountries in shared/UBTConnect_Utils/lib/structures.ts has no importer.

## Questions for the user
none
