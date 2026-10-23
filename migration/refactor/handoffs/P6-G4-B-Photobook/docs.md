## Result
status: pass
summary: CHANGELOG entry, move-map row, api/README.md (household, 2 calls) and calls-by-domain.md (api.ts rows removed) updated. overview.md and the guides need no change. Checks pass; the 1 ste_lint error in calls-by-domain.md is old.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/handoffs/P6-G4-B-Photobook/docs.md

## Commands run
ste_lint.py on 4 changed .md files → 0 errors, except calls-by-domain.md: 1 error that HEAD has too (sentence over 25 words, not from this step)
prettier --check CHANGELOG.md, calls-by-domain.md, api/README.md → pass (move-map.csv: no parser, not checkable)
check_mermaid.cjs → not run, no mermaid changed

## Deviations from the brief
none

## Questions for the user
none
