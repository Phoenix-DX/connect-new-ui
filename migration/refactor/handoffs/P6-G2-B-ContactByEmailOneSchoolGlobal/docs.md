## Result
status: pass
summary: Recorded the CHANGELOG entry, the move-map notes (row already `moved`) and the calls-by-domain note for the deleted `api.ts`. No other document needed a change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
migration/refactor/handoffs/P6-G2-B-ContactByEmailOneSchoolGlobal/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md calls-by-domain.md → CHANGELOG 0 errors; calls-by-domain 1 error (a sentence over 25 words, already in HEAD, not from this step)
cd app && npx prettier --check docs/refactor/CHANGELOG.md docs/refactor/calls-by-domain.md → pass (CSV has no prettier parser)

## Deviations from the brief
none

## Questions for the user
none
