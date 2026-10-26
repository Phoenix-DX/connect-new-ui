## Result
status: pass
summary: Added CHANGELOG entries for P2-1 and for the test commit 1bb105f. Set the P2-1 row of move-map.csv to `moved`. Updated the screens and api-and-mocks guides for the pages/ path, the glob fallback and the mock order.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/guides/screens.md
app/docs/guides/api-and-mocks.md

## Commands run
ste_lint.py on the 3 .md files → 0 errors (warnings only)
npx prettier --check on the 3 .md files → pass (prettier has no parser for the CSV)
check_mermaid.cjs → not run (no mermaid change; overview.md is unchanged)

## Deviations from the brief
- overview.md and ADR-15 are unchanged: the folders and rules are the same, only one route moved.
- screens.md had 2 old sentences over 25 words; I split them to reach 0 errors.

## Questions for the user
none
