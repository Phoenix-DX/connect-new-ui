## Result
status: pass
summary: CHANGELOG entry added. Two move-map rows set to `moved`. calls-by-domain.md rows of the deleted `screens/MessageDetail/api.ts` now name `api/message/repository.ts` and `api/notification/repository.ts`. Demo note added to mock-fixtures.md. No other document needs a change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
migration/knowledge/mock-fixtures.md
migration/refactor/handoffs/P6-G3-B-MessageDetail/docs.md

## Commands run
ste_lint.py CHANGELOG.md, mock-fixtures.md → 0 errors (warnings only)
prettier --check CHANGELOG.md calls-by-domain.md → pass

## Deviations from the brief
none

## Questions for the user
none
