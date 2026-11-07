## Result
status: pass
summary: Added the "Changes 2026-11-07 (TST sync)" block and three "Decisions to confirm" bullets to the AssembleDetail route-spec, one CHANGELOG-sync entry, and re-ran check_route.py. STE lint 0 errors.

## Files changed
migration/screens/AssembleDetail/route-spec.md
app/docs/CHANGELOG-sync.md
migration/route-check/routes/AssembleDetail.md (written by check_route.py; also APP_SHELL.md, ROUTES.md)

## Commands run
python3 tools/route-check/check_route.py AssembleDetail → wrote routes/AssembleDetail.md, APP_SHELL.md, ROUTES.md
python3 tools/docs/ste_lint.py route-spec.md and CHANGELOG-sync.md → 0 errors (warnings only)
node tools/docs/check_mermaid.cjs route-spec.md → no diagrams, no errors

## Deviations from the brief
The tst-drift-2026-11-07.md table has no row for AssembleDetail, so I did not change it.

## Questions for the user
none
