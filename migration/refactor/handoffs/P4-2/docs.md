## Result
status: pass
summary: Updated CHANGELOG (P4-2 entry, F6 flake), shell guide (session status, events, deviations), overview (runtime table row) and ADR-15 (P4-2 lines). move-map.csv, mermaid diagrams and the other guides need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/guides/shell.md
app/docs/architecture/overview.md
migration/architecture.md
migration/refactor/handoffs/P4-2/docs.md

## Commands run
ste_lint.py on the 3 app docs → 0 errors (warnings only)
ste_lint.py migration/architecture.md → 20 errors, same as HEAD (before my edit; my lines add none)
npx prettier --check on the 3 app docs → pass
check_mermaid.cjs overview.md → no errors

## Deviations from the brief
none

## Questions for the user
none
