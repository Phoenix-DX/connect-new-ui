## Result
status: pass
summary: Added the CHANGELOG entry, set the PINChange move-map row to `moved`, noted the props-only PinCode (W14) in its row, and described PinCode and `usePINChange` in guides/shell.md.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/guides/shell.md
migration/refactor/handoffs/P6-G1-B-PINChange/docs.md

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md shell.md → 0 errors (warnings only)
npx prettier --check CHANGELOG.md shell.md → pass (CSV has no prettier parser)

## Deviations from the brief
none

## Questions for the user
none
