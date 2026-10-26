## Result
status: pass
summary: CHANGELOG entry added. W14 applied: 3 owner cells changed in arch-baseline.csv. move-map.csv and shell.md (Part B PIN paragraph, Part C dialogs export) updated. The block READMEs were already correct (dev.md).

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/arch-baseline.csv
app/docs/refactor/move-map.csv
app/docs/guides/shell.md
migration/refactor/handoffs/P6-G1-B-PINUnlock/docs.md

## Commands run
ste_lint.py shell.md CHANGELOG.md → 0 errors (warnings only)
npx prettier --write shell.md CHANGELOG.md → ok (CSV has no parser)
arch_baseline.py check → exit 0, 39 rows, 0 new, 0 gone

## Deviations from the brief
none

## Questions for the user
none
