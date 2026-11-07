## Result
status: pass
summary: Added the TST sync block and one decision bullet to route-spec.md, one CHANGELOG-sync entry, and the synced mark in the drift table. ste_lint has 0 errors in the changed route-spec and CHANGELOG. The drift file has 2 old errors in lines I did not write.

## Files changed
migration/screens/ContactByEmailMember/route-spec.md
migration/knowledge/tst-drift-2026-11-07.md
app/docs/CHANGELOG-sync.md

## Commands run
python3 tools/docs/ste_lint.py (3 files) → route-spec 0 errors, CHANGELOG 0 errors, drift 2 errors (sentences at lines 3 and 92, not mine)
check_mermaid.cjs → not needed, no mermaid in the changed files
route-check → not run: calls unchanged (dev.md)

## Deviations from the brief
none

## Questions for the user
none
