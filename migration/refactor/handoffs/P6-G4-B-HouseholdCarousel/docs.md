## Result
status: pass
summary: Added the CHANGELOG entry and updated the move-map rows (page and 3 blocks), `calls-by-domain.md` (api.ts row removed, note added), the HouseholdDetails container README and follow-up F20 (closed, fixed in 3024d755). The block READMEs were already correct (dev). No overview or ADR change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/containers/HouseholdDetails/README.md
migration/refactor/followups.md

## Commands run
ste_lint.py on CHANGELOG.md, HouseholdDetails README → 0 errors
ste_lint.py on calls-by-domain.md → 1 error (rule 3.1, a long sentence in a line that this step did not change)
npx prettier --check (3 md files) → pass; move-map.csv has no prettier parser
mermaid check → not needed, no mermaid file changed

## Deviations from the brief
none

## Questions for the user
none
