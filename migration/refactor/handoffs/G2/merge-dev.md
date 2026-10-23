# Dev: G2 merge (`main` into `refactor/architecture`)

Main tree `/Users/khaitruong/Projects/connect-new`, branch `refactor/architecture`. The `git merge main --no-commit
--no-ff` of the master is still in progress (MERGE_HEAD = `9a8093f`). Nothing is committed. The merge is not aborted.

## Result

- Status: **pass**
- I resolved the 3 conflicts and staged them with `git add`. `git diff --name-only --diff-filter=U` is empty.
- Every conflict was in the import lines only. In each file, the body from `main` (the G2 fix) merged without a
  conflict. For each file:
  - I kept the `@/` alias import lines of the refactor branch.
  - I added the G2 imports with the alias of their current folder.
  - I removed the imports that G2 deleted.
- The staged result against HEAD has the same line counts per file as the G2 commit `9a8093f` (3, 29, 70, 3, 5, 56).
  Thus, the merge adds only the G2 change to the refactor code.
- The 3 files that merged without a conflict (`api.ts`, `types.ts`, `staticEntities.ts`) compile with the refactor
  code. No code on the refactor branch uses `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS` or the deleted local cache writer.
- Quick checks pass:
  - typecheck
  - the brief's vitest suites: 38 files, 149 tests (the same counts as on `main`). The G2 test is included.
  - eslint and prettier on the 6 changed files
  - `lint:arch`: 0 errors and 194 warnings. This is the P5-3-event baseline, so there is no new warning.

## Files changed

All files are under `app/src/`:
- `screens/BookmarksByGroup/components/ScreenBlock_BookmarkGroup.tsx`: conflict resolved. I kept the HEAD alias block
  and added `import { getCachedMyBookmarks, putCachedMyBookmarks } from '@/shared/Connect2_LegacyShared/lib/actions'`
  (G2). The `@os-block` tag is unchanged.
- `screens/BookmarksByGroup/components/actions.ts`: conflict resolved.
  - Kept: the HEAD aliases `@/platform/log/log`, `@/platform/feedback` and `@/screens/BookmarksByGroup/types`.
  - Added: the G2 imports `@/shared/Connect2_LegacyShared/lib/structures` (type `BookmarkItemRecord`) and
    `@/screens/BookmarksByGroup/api` (`toBookmarkItem`). The relative `../api` became an alias (rule 11).
  - Removed: `@/platform/storage/memoryCache` and `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS`. G2 deleted their only users.
  - Line order: the same as on `main`.
- `shared/Connect2_LegacyShared/lib/actions.test.ts`: conflict resolved. I kept the 4 HEAD aliases and added the 5 G2
  test imports with the alias of their current folder:
  - `@/mocks/fictional/directory`
  - `@/screens/BookmarksByGroup`
  - `@/screens/BookmarksByGroup/components/actions`
  - `@/platform/navigation/testRouter` (was `shell/navigation/testRouter`)
  - `@/shared/Connect2_MyBookmarks_MUI/mocks`
- `screens/BookmarksByGroup/api.ts`, `screens/BookmarksByGroup/types.ts` and
  `screens/BookmarksByGroup/components/staticEntities.ts`: merged by git without a conflict. I checked them and did not
  edit them.
- The `migration/screens/BookmarksByGroup/**` files that the merge stages come from `main` without a conflict. The
  refactor branch never changed them. I did not edit them.

## Commands run

Every command ran with Node 24.21.0 from `app/`:
- `npm run typecheck`: exit 0.
- `npx vitest run --maxWorkers=2 src/shared/Connect2_LegacyShared src/screens/BookmarksByGroup
  src/shared/Connect2_Assemble_MUI src/screens/MyBookmarks`: 38 files, 149 tests passed.
- `npx vitest run --maxWorkers=1 src/shared/Connect2_LegacyShared/lib/actions.test.ts -t "G2"`: 1 passed. This confirms
  that the G2 cross-screen test runs.
- `npx eslint <6 files>`: exit 0. `npx prettier --check <6 files>`: all files are formatted.
- `npm run lint:arch`: exit 0.
  - depcruise: 0 errors and 194 warnings, the same as the P5-3-event baseline in `handoffs/P5-3-event/dev.md`. The 3
    BookmarksByGroup warnings (rule 9, `legacy/os/`) were there before this merge.
  - eslint: 1 warning, which was there before (`OSPopup/usePopupWidget.ts`).
- Git: `git add` of the 3 resolved files only. I used no other git write.

## Deviations

- None. The merge commit is for the master to make. I did not run the full suite, `npm run ci` or the parity: the
  tester runs them.

## Questions for the user

None.
