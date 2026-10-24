# Docs · F43

Status: pass

## Result
- CHANGELOG: entry F43 added (`app/docs/refactor/CHANGELOG.md`).
- Move-map: rows 433-435 checked (phase F43, status moved, source and target as the git renames); no change needed.
- Old paths fixed: `app/docs/guides/api-and-mocks.md` (os-wire), `app/docs/guides/shared-code.md` (lib/ and legacy/os/ line), `app/docs/architecture/overview.md` (mermaid node `lib`).
- Left as history or not current: plan files, `docs/reference/stack.md` (rendered from stack.json, no path of the 3 files), dated CHANGELOG/reports.
- Not changed: ADR-15 (the rules did not change; the files returned to the place plan v2 §2.2 names). LazyImage README was fixed by the developer.
- Checks: ste_lint 0 errors on 4 files; prettier pass; check_mermaid pass.

## Files changed
- app/docs/refactor/CHANGELOG.md
- app/docs/guides/api-and-mocks.md
- app/docs/guides/shared-code.md
- app/docs/architecture/overview.md
