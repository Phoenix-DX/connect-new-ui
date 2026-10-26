## Result
status: pass
summary: Updated the move-map row, calls-by-domain (row and step note), api/README.md (new `entertaining/` paragraph) and CHANGELOG. overview.md and the guides do not list api domains, so they are unchanged.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
app/docs/refactor/CHANGELOG.md
migration/refactor/handoffs/P6-G5-B-MyEntertaining/docs.md

## Commands run
ste_lint.py on the 3 changed .md files → 0 new errors (calls-by-domain.md keeps 1 old error at line 5)
npx prettier --check on the .md files under app/ → clean (the CSV has no prettier parser)

## Deviations from the brief
none

## Questions for the user
none
