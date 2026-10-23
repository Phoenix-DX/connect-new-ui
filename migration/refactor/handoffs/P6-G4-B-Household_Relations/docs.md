## Result
status: pass
summary: Updated CHANGELOG, move-map row, page-template list, api README, calls-by-domain. Checked each dev line against the tree; line numbers had moved, text matched.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (row 299, notes)
app/docs/guides/page-template.md (old-pattern list: 3 files to 2)
app/src/api/README.md (new household paragraph)
app/docs/refactor/calls-by-domain.md (note P6-G4-B-Household_Relations; table row left as the baseline record, as for Photobook)

## Commands run
ste_lint.py on 4 .md files → 0 errors in my text; 1 error in calls-by-domain.md line 5 existed before this step
prettier --check on the 4 .md files → pass (move-map.csv has no parser)

## Deviations from the brief
none

## Questions for the user
none
