## Result
status: pass
summary: Set the Profile row of move-map.csv to `moved`, fixed page-template.md line 48, added a Profile note to calls-by-domain.md, and added the CHANGELOG entry. The one STE error is in line 5 of calls-by-domain.md, which this step did not change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/docs/guides/page-template.md

## Commands run
python3 migration/tools/ste_lint.py (3 md files) → 0 errors in CHANGELOG and page-template; 1 pre-existing error in calls-by-domain.md line 5
npx prettier --check (3 md files) → pass

## Deviations from the brief
The generated rows 43 and 53 of calls-by-domain.md are unchanged; a dated note at the end of the file explains that `screens/Profile/api.ts` is deleted (same method as the Menu note).

## Questions for the user
none
