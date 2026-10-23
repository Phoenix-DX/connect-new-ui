## Result
status: pass
summary: Added the CHANGELOG entry, set move-map rows 7 and 285 to `moved` with the new hook files, and added the EmailContact line to calls-by-domain.md. overview.md, the guides and ADR-15 need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
migration/refactor/handoffs/P6-G2-B-EmailContact/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md → 0 errors (warnings only)
python3 migration/tools/ste_lint.py calls-by-domain.md → 1 error (sentence > 25 words), already in HEAD; no new error
cd app && npx prettier --check docs/refactor/CHANGELOG.md docs/refactor/calls-by-domain.md → pass; move-map.csv has no prettier parser
mermaid check → not run, no mermaid file changed

## Deviations from the brief
none

## Questions for the user
none
