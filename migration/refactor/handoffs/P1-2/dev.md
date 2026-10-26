## Result
status: pass
summary: Moved src/shell/ to platform/<area>/, legacy/os/ and app/ with the codemod (110 renames, 307 files with import lines changed). Typecheck, full vitest (324 files, 1457 tests) pass; eslint 0 errors.

## Files changed
- 110 files renamed from app/src/shell/** (git mv by the codemod) to app/src/platform/{session,bootstrap,navigation,feedback,feedback/dialogs,storage,storage/localEntities,device,bootstrap}, app/src/legacy/os, app/src/app (see `git status`)
- app/src/shell/README.md -> app/src/platform/README.md
- 307 files: import lines only (codemod)
- app/src/platform/{bootstrap/startup.ts,bootstrap/mocks.ts,storage/localEntities/orbitStaticEntities.ts,storage/localEntities/orbitStaticEntities.test.ts,device/deviceContext.ts,session/mockUser.ts}: one import line each (`@/api/schema`, codemod missed them)
- app/src/mocks/handlers.ts: glob `'../shell/**/mocks.ts'` -> `'../platform/**/mocks.ts'` (the codemod does not rewrite globs)
- app/docs/refactor/move-map.csv: 31 rows added with phase P1-2 (the map had none)
- app/docs/guides/shell.md: paths updated
- migration/tools/parity_sweep.py, migration/tools/README.md: `src/shell` -> `src/platform`, `src/legacy`

## Commands run
- node migration/tools/refactor/move.ts --map app/docs/refactor/move-map.csv --phase P1-2 → moved files; its own typecheck step failed on 6 `../api/schema` imports (fixed by hand)
- npm --prefix app run typecheck → exit 0
- cd app && npx vitest run (full) → 324 files, 1457 tests passed
- npx eslint <changed ts/tsx files> → 0 errors (3715 warnings, the rule-11 warn mode of P1-1)

## Deviations from the brief
- move-map.csv had no P1-2 rows, so I added them (per-file rows plus 4 folder rows: navigation, feedback, dialogs, localEntities). `dialogs/` goes to `platform/feedback/dialogs/` (both folders have an index.ts).
- Q9 applied (user auto-accept): mocks.ts and mocks.test.ts are in platform/bootstrap/; testSupport.ts is in src/test/. No platform/testing/ folder. move-map.csv rows updated, with the P5 follow-up note. Import lines of 35 files rewritten with migration/tools/refactor/fix-p1-2-testing.mjs (new). Quick checks: typecheck pass; vitest 305 files / 1360 tests pass; eslint 0 errors (warn-mode rules only).
- Hand edits beyond the codemod: 6 `api/schema` import lines and the glob in `mocks/handlers.ts` (without it the shell mock handlers would not load). Code comments that still say `src/shell` (index.html, .storybook/*, mocks/fictional/assemble.ts, localEntities/index.ts) were left (move step: no text changes).
- Empty leftover folders of src/shell removed. refactor_parity.py already lists platform/ and legacy/os in GLOBAL_PATHS; not changed.
- More than 40 files changed: allowed in a move step.

## Fix loop 1
- Ran prettier on `app/src/platform/bootstrap/startup.ts` and `app/src/screens/Notes/api.ts`. `npm run format:check` (whole app) passes.
- Deleted the helper `migration/tools/refactor/fix-p1-2-testing.mjs` (untracked, one-time use). The "Import lines of 35 files rewritten with ... fix-p1-2-testing.mjs" note above is history only; the file no longer exists.
- `rf.py diffcheck --move` → ok (110 renames). Typecheck passes.

## Questions for the user
- None.
