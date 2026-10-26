## Result
status: pass
summary: CHANGELOG entry added; move-map row of CountryDetails, calls-by-domain (row removed, note added), page-template, api/README and api-and-mocks updated. Prettier passes; STE lint has 0 new errors.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/guides/page-template.md
app/docs/guides/api-and-mocks.md
app/src/api/README.md
migration/refactor/handoffs/P6-G4-B-CountryDetails/docs.md

## Commands run
prettier --check on the changed files → pass
ste_lint.py on the changed files → 0 errors in the new text; calls-by-domain.md keeps 1 old error (3.1, line 5)

## Deviations from the brief
none. overview.md and ADR-15 need no change (no folder or rule change).

## Questions for the user
none
