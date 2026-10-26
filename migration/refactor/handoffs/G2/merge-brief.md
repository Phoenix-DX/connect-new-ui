# Brief: G2 merge (`main` into `refactor/architecture`)

Not a refactor step. Decision U3 (user, 2026-10-23): the G2 fix is made on `main` (commit `9a8093f`), then `main` is
merged into `refactor/architecture` before step P5-3-bookmark. The master ran `git merge main --no-commit --no-ff` on
the main tree. Three files have conflicts:

- `app/src/screens/BookmarksByGroup/components/ScreenBlock_BookmarkGroup.tsx`
- `app/src/screens/BookmarksByGroup/components/actions.ts`
- `app/src/shared/Connect2_LegacyShared/lib/actions.test.ts`

Evidence of the fix: `dev.md` and `test.md` in this folder. Cause of the conflicts: the refactor branch changed the
same files (for example `@/` import aliases, phases 1 to 5).

## Do

1. Resolve the three conflicts. Keep the G2 behavior from `main` (one OutSystems `BookmarkItem` cache shape, the
   Connect2_LegacyShared cache actions, `toCacheRecord` / `fromCacheRecord`, the failing-first test) and keep every
   change of the refactor branch (aliases, `@origin` tags, moved imports, domain re-exports). Check the files that
   merged without a conflict too (`api.ts`, `types.ts`, `staticEntities.ts`): they must compile with the refactor code.
2. `git add` the resolved files. No file stays unmerged. Do not commit; the master commits the merge.
3. Quick checks on the main tree: typecheck; `npx vitest run src/shared/Connect2_LegacyShared src/screens/BookmarksByGroup
   src/shared/Connect2_Assemble_MUI src/screens/MyBookmarks`; eslint and prettier on the changed files; `npm run
   lint:arch` (no new error or warning).
4. Do not change `src/api/openapi.yaml`, mock fixtures, CSS, `.auth/` or `migration/.raw/`.

## Gate (tester)

- `npm --prefix app run ci`.
- `refactor_parity.py --level strict --ref both --routes BookmarksByGroup,MyBookmarks` (or `--changed`) with
  `--app http://localhost:5174`.
