## Result
status: pass
summary: Added the CHANGELOG entry, 4 tool rows in quality.md and the codemod usage in migration/tools/README.md. No overview, move-map or ADR-15 change (no folder moved; ADR-15 is not in migration/architecture.md yet). STE lint 0 errors; prettier ok.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/guides/quality.md
migration/tools/README.md
migration/refactor/handoffs/P0-3/docs.md

## Commands run
ste_lint.py on the 3 files → 0 errors (warnings only)
npx prettier --check (2 files under app/) → ok

## Deviations from the brief
none

## Questions for the user
none
