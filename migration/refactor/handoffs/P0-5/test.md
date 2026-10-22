## Result
status: pass
summary: Integration test on the main tree passes. CI exit 0, stack.py check OK, ADR-15 accepted, move-map reproducible (329 rows). The prefetch run (worktree, before gate-review loop 2) also passed.

## Files changed
migration/refactor/handoffs/P0-5/test.md

## Commands run
npm --prefix app run ci → exit 0
stack.py check → "stack check: OK"
ADR-15 in migration/architecture.md → "(accepted)", accepted by user 2026-10-22T14:16:26
node migration/tools/refactor/move-map.mjs --check → exit 0 (329 rows: 265 blocks + 64 screens)
fresh run of move-map.mjs → exit 0; md5 of move-map.csv unchanged (7d343d8f...)
move-map.csv checks → 329 rows; 0 rows with "review" in notes; every source exists; 7 P5 rows present (5 CacheControl*, CacheControl_UserInfo_Wrapper, Directory_Updates)
ste_lint.py app/docs/refactor/duplicates.md → 0 errors, 7 warnings
git diff HEAD stat app/src, app/public → no change

## Diff review
1. openapi, mocks fixtures, public css: no change. Pass.
2. Deleted tests: none. Pass.
3. Scope: only P0-5 files; stack.json/architecture.md changes are the ADR-15 entry, 9 dev packages (5 new, vite/vitest/storybook/@storybook/react-vite security bumps listed in ADR-15) and the render side effect on the P-DIALOG row. refactor-plan-v2.md ignored as instructed. Pass.
4. @origin: no screen or block ported (docs and tool only). Pass.
5/6. No code move or behavior change. Pass.
7. No secret, PIN or email in the diff. Pass.

## Deviations from the brief
move-map.csv has an extra column `status`.

## Questions for the user
none
