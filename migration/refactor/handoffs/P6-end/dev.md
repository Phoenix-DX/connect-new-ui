## Result
status: pass
summary: Deleted src/screens/ (only README.md was left) and the screens fallbacks (app/src/app/screens.ts, mocks/handlers.ts glob, handlers.test.ts, dep-cruiser rule text, refactor_parity.py route_entry). src/shared/ kept (W20). Typecheck, lint (0 errors, 76 warnings, as before) and full unit suite (639 files, 3925 tests) pass.

## Files changed
app/src/screens/README.md (deleted, plain rm)
app/src/app/screens.ts
app/src/app/router.tsx (comment)
app/src/mocks/handlers.ts
app/src/mocks/handlers.test.ts
app/.dependency-cruiser.cjs (rule text and regex `^src/app/`)
migration/tools/refactor_parity.py
migration/refactor/handoffs/P6-end/dev.md

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run → 639 files, 3925 tests passed
cd app && npm run lint → 0 errors, 76 warnings
find app/src/screens → absent; grep for imports/globs of screens/ in src, config, tools → none

## Deviations from the brief
none (shared/ kept per W20)

## Doc lines still naming src/screens/ (for the documenter)
Comments in code: app/src/api/client/callAction.ts:18; app/src/api/README.md:63,77; app/src/platform/bootstrap/mocks.ts:142; app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts:17-18; app/public/mock-embeds/my-entertaining.html:14.
Generator: migration/tools/docs_gen.py:64 writes `src/screens/<S>/` into docs/reference/screens.md (should write src/pages/<S>/).
migration/tools/README.md:37 (entry of a route).
app/docs: architecture/overview.md (50, 91, 138), guides/screens.md (8, 12), guides/page-template.md:25, guides/os-widgets.md (49, 85), guides/getting-started.md:33, guides/api-and-mocks.md:113, reference/screens.md (rows 9-end), app/src/screens README is gone. Plan/review docs (refactor-plan*.md) are historical.

## Questions for the user
none

## Loop 1
Cause: format:check failed on app/.dependency-cruiser.cjs (comment at line 44 fits on one line).
Fix: `npx prettier --write .dependency-cruiser.cjs` (formatting only), then `git add app/.dependency-cruiser.cjs`.
Checks: `npm --prefix app run format:check` → all files formatted; typecheck → exit 0; `prettier --check` on all other staged app files → clean.
Status: pass
