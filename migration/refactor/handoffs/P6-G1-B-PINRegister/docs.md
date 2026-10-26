## Result
status: pass
summary: CHANGELOG entry, 3 move-map rows (PINRegister `moved`; Pincode_Register and Block_PINRegister_ContentWrapper `hook+component` with the hook path in notes), two block READMEs and a shell.md paragraph on the PIN hooks. No overview or ADR-15 change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/guides/shell.md
app/src/components/auth/PinCodeRegister/README.md
app/src/components/auth/PinRegisterContent/README.md
migration/refactor/handoffs/P6-G1-B-PINRegister/docs.md

## Commands run
ste_lint.py on the 4 .md files → 0 errors (warnings only)
npx prettier --check on the 4 .md files → pass
check_mermaid → not run, no mermaid changed

## Deviations from the brief
none

## Questions for the user
none
