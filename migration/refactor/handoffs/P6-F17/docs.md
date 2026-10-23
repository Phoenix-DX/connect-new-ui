## Result
status: pass
summary: Checked the option text in page-template.md against flowState.ts (it matches); shortened it to meet the STE errors (sentence length, paragraph length). Added the CHANGELOG entry. overview.md and ADR-15 do not describe the OnReady timing, so they are unchanged.

## Files changed
app/docs/guides/page-template.md
app/docs/refactor/CHANGELOG.md
migration/refactor/handoffs/P6-F17/docs.md

## Commands run
python3 migration/tools/ste_lint.py app/docs/guides/page-template.md app/docs/refactor/CHANGELOG.md → 0 errors (warnings as before)
cd app && npx prettier --check docs/guides/page-template.md docs/refactor/CHANGELOG.md → pass
check_mermaid → not run (no mermaid changed)

## Deviations from the brief
none

## Questions for the user
none
