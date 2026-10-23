## Result
status: pass
summary: Set 4 move-map rows to `moved` (the 3 rows of the developer and row 267; no row duplicated). Added the `policy/` paragraphs to `app/src/api/README.md` and a note to `app/docs/refactor/calls-by-domain.md`. Added the CHANGELOG entry. overview.md, guides and ADR-15 need no change.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/CHANGELOG.md
app/docs/refactor/calls-by-domain.md
app/src/api/README.md

## Commands run
ste_lint.py on CHANGELOG.md and src/api/README.md → 0 errors (warnings only); calls-by-domain.md → 1 error (3.1 sentence of 39 words, line 5, unchanged from HEAD)
npx prettier --check on the 3 md files → pass
mermaid check → not needed (no diagram changed)

## Deviations from the brief
none

## Questions for the user
none
