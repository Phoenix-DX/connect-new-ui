## Result
status: pass
summary: Added the "Changes 2026-11-07 (TST sync)" block and two bullets under "Decisions to confirm" in the route-spec, the synced mark in the drift table, and a CHANGELOG-sync entry. STE lint: 0 errors in the route-spec and the changelog.

## Files changed
migration/screens/OneSchoolGlobalDetails/route-spec.md
migration/knowledge/tst-drift-2026-11-07.md
app/docs/CHANGELOG-sync.md
migration/sync/handoffs/OneSchoolGlobalDetails/docs.md

## Commands run
python3 tools/docs/ste_lint.py (3 files) → route-spec 0 errors; changelog 0 errors; drift file 2 errors, both in rows of other routes (not changed by this item)
node tools/docs/check_mermaid.cjs route-spec.md → ok
route-check not re-run: no call, navigation or block change in the diff

## Deviations from the brief
none

## Questions for the user
none
