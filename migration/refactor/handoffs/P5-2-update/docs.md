## Result
status: pass
summary: Recorded api/update in CHANGELOG, src/api/README.md, guides/api-and-mocks.md and calls-by-domain.md. move-map.csv has no row for these calls, so it is unchanged. Overview and ADR-15 need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/docs/guides/api-and-mocks.md
app/docs/refactor/calls-by-domain.md
migration/refactor/handoffs/P5-2-update/docs.md

## Commands run
ste_lint.py on the 4 files → 0 new errors (calls-by-domain.md keeps 1 old error, line 5, in HEAD)
npx prettier --check on the 4 files → pass

## Deviations from the brief
none

## Questions for the user
none
