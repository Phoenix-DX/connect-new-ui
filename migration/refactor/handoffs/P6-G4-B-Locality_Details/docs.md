## Result
status: pass
summary: Added the CHANGELOG entry, updated `src/api/README.md` (locality and household sections) and added a note to `calls-by-domain.md`. The move-map row was already `moved`; no overview, guide or ADR-15 change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/docs/refactor/calls-by-domain.md

## Commands run
ste_lint.py on the 3 files → 0 errors in README and CHANGELOG; 1 error in calls-by-domain.md at line 5 (39-word sentence, existing text, not changed)
npx prettier --check on the 3 files → clean
mermaid check → not needed (no mermaid changed)

## Deviations from the brief
Move-map note of the Locality_Details row still says "api.ts, types.ts"; left as is (history of the move step).

## Questions for the user
none
