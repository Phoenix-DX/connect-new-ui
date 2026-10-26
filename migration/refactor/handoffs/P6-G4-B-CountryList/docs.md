## Result
status: pass
summary: Added the CHANGELOG entry. Set notes of move-map rows 284 and 165, removed the CountryList row from calls-by-domain.md and added a step note, and updated app/src/api/README.md line 13. The DirectoryLegendSheet README was already correct.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md

## Commands run
python3 migration/tools/ste_lint.py (4 files) → 0 errors, except calls-by-domain.md: 1 error (sentence > 25 words) that was there before this step
npx prettier --check (changed files under app/) → pass

## Deviations from the brief
none

## Questions for the user
none
