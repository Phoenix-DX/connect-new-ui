## Result
status: pass
summary: Added "Changes 2026-11-07 (TST sync)" and two Decisions-to-confirm bullets (exemption path `111_` to `\d+_`; OneSchool card id 132) to the route spec. Marked the drift row, added the changelog entry, re-ran check_route.py. STE lint: 0 errors in the route spec and the changelog.

## Files changed
migration/screens/Locality_Details/route-spec.md
migration/knowledge/tst-drift-2026-11-07.md
app/docs/CHANGELOG-sync.md
migration/route-check/routes/Locality_Details.md (written by check_route.py; it also rewrote APP_SHELL.md and ROUTES.md)

## Commands run
python3 tools/route-check/check_route.py Locality_Details → wrote the route file, APP_SHELL.md, ROUTES.md
python3 tools/docs/ste_lint.py <route-spec, CHANGELOG-sync> → 0 errors
python3 tools/docs/ste_lint.py tst-drift-2026-11-07.md → 2 errors (long sentences in rows of other routes, not mine)
check_mermaid: not run (no mermaid in my edits)

## Deviations from the brief
none

## Questions for the user
none
