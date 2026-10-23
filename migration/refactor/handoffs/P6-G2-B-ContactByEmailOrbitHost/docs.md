## Result
status: pass
summary: Recorded the step in the CHANGELOG, the move-map row 280 notes (status stays `moved`) and calls-by-domain (deleted `api.ts`). The ContactPersonCard README already names OrbitHost as a caller, so I did not change it.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
migration/refactor/handoffs/P6-G2-B-ContactByEmailOrbitHost/docs.md

## Commands run
ste_lint.py CHANGELOG.md → 0 errors
ste_lint.py calls-by-domain.md → 1 error (old: sentence > 25 words, same as before the step)
prettier --check CHANGELOG.md calls-by-domain.md → pass; move-map.csv has no prettier parser (csv)

## Deviations from the brief
none

## Questions for the user
none
