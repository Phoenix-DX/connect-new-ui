## Result
status: pass
summary: CHANGELOG entry added; move-map rows 29 and 336 set to `moved` (diff shows only these 2 rows); `event/` paragraph of api/README.md and calls-by-domain.md updated. overview.md needs no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/handoffs/P6-G6-B-ViewDocuments/docs.md

## Commands run
git diff HEAD -- app/docs/refactor/move-map.csv → only rows 29 and 336
ste_lint.py on the 3 .md files → 0 errors in the new text (calls-by-domain.md has 1 older error, a 39-word sentence at line 5)
prettier --check on the 3 .md files → pass (csv has no parser)

## Deviations from the brief
none

## Questions for the user
none
