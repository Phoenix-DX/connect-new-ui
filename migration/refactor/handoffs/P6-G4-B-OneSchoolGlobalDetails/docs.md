## Result
status: pass
summary: Updated the CHANGELOG, the move-map row, calls-by-domain, the locality paragraph of api/README and the header comment of api/locality/hooks.ts. overview.md and the guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (row 314: note only; status stays `moved`, as for the other G4 pages)
app/docs/refactor/calls-by-domain.md (app table row: `<ACTION>` replaced by the action name; new step note at the end)
app/src/api/README.md (locality paragraph: 12 calls, the new hook has a caller)
app/src/api/locality/hooks.ts (header comment text only, no code)

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md, README.md → 0 errors
python3 migration/tools/ste_lint.py calls-by-domain.md → 1 error (3.1, sentence of 39 words in line 5), present at HEAD, not from this step
npx prettier --check (after --write on calls-by-domain.md) → clean; the CSV has no prettier parser

## Deviations from the brief
none

## Questions for the user
none
