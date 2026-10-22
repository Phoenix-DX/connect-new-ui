## Result
status: pass
summary: Added the P2-2 CHANGELOG entry, fixed the stale "Data" section of the HouseholdDetails_Block README, and added one line on `household/` to `app/src/api/README.md`. No move-map, overview or guide change needed (no block moved, no folder-level flow change).

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/src/shared/UBTConnect/HouseholdDetails_Block/README.md
migration/refactor/handoffs/P2-2/docs.md

## Commands run
python3 migration/tools/ste_lint.py (3 files) → 0 errors (warnings only)
npx prettier --check (3 files) → pass
mermaid check → not needed, no mermaid file changed

## Deviations from the brief
none

## Questions for the user
none
