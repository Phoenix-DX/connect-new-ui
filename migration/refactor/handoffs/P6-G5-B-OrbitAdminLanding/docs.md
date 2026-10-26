## Result
status: pass
summary: Updated the 2 move-map rows, calls-by-domain, api/README, CHANGELOG and F23. No other document needed a change (the structure rules did not change).

## Files changed
app/docs/refactor/move-map.csv (row 24 status moved + hooks; row 316 note)
app/docs/refactor/calls-by-domain.md (2 api.ts rows removed, note added)
app/src/api/README.md (event domain note)
app/docs/refactor/CHANGELOG.md
migration/refactor/followups.md (F23)

## Commands run
ste_lint.py on 3 .md files → 0 new errors (calls-by-domain.md line 5 has 1 old error, not from this step)
prettier --check on the 3 .md files → pass (csv has no parser)

## Deviations from the brief
none

## Questions for the user
none
