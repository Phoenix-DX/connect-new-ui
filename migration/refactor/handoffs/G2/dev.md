# Dev: G2 (one record shape in the `MyBookmarks` cache), a migration fix on `main`

Worktree: `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/wt-main`
(branch `main`, base d758cb1). Nothing is committed or staged.

## Result

- Status: **pass**
- Summary: the failing test came first. It reproduced the bug as `TypeError: Cannot read properties of undefined
  (reading 'localeCompare')` at `shared/Connect2_LegacyShared/lib/actions.ts:503`.
- Fix: BookmarksByGroup now keeps only one record shape in the cache, the OutSystems `BookmarkItem`. It calls the
  Connect2_LegacyShared `getCachedMyBookmarks` / `putCachedMyBookmarks`. Two mappers convert the rows:
  `toCacheRecord(row, group)` and `fromCacheRecord(record)`.
- Removed: the local cache writer, its TTL constant and `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS`. The screen's rendering and
  server calls do not change.
- Checks: the new test passes. The brief's suites pass (38 files, 149 tests), and so does the full suite (324 files,
  1458 tests). Typecheck, eslint and prettier on the changed files pass.
- The domain row does not keep 9 record fields, so `toCacheRecord` cannot fill them. They get the record defaults (see
  Questions).

## Cause

In OutSystems, the block's `BookmarkedItems` is a `Connect2_MyBookmarks_IS.BookmarkItem` record list
(`Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc.js` model :32). The block calls the
Connect2_LegacyShared `GetCachedMyBookmarks` (:2921-2932) and `PutCachedMyBookmarks` (:2163-2164, :2345-2346,
:2774-2775, :3173-3174) with this list. `AddBookmarkToCache` (runtime-sources `Connect2_LegacyShared.controller.js:1-60`:
ListFilter on ObjectId, ListAppend, ListSort on DateCreatedUtc descending) and `RemoveBookmarkFromCache` use the same
cache type, group key and record.

The port gave the block its own writer
(`screens/BookmarksByGroup/components/actions.ts`). This writer put the camelCase domain rows into the same cache type
and key. `addBookmarkToCache` then sorted rows that had no `DateCreatedUtc`, which raised the TypeError.
`removeBookmarkFromCache` never found a camelCase row, because the rows had no `ObjectId`.

## Files changed

All paths are under the worktree `app/`:
- `src/shared/Connect2_LegacyShared/lib/actions.test.ts`: new `describe` "(G2)". The test renders the BookmarksByGroup
  screen (`renderRoutes`, group Contacts) and waits for its OnAfterFetch cache write. Then it calls `addBookmarkToCache`
  with an AddBookmark answer (`addLegacyBookmark`, the mock of CreatedBookmarkResponse). The test checks these items:
  - The call does not throw and returns true.
  - The new row comes first.
  - `DateCreatedUtc` is in descending order and is never empty.
  - Every row has Group = Contacts.
  - `fromCacheRecord` restores the added record.
  - `toCacheRecord` → `fromCacheRecord` round-trips the rows.
  - `removeBookmarkFromCache` finds a seeded row.
- `src/screens/BookmarksByGroup/types.ts`: the domain `BookmarkItem` gets `dateCreatedUtc` (DateCreatedUtc, the sort key
  of AddBookmarkToCache).
- `src/screens/BookmarksByGroup/api.ts`: `toBookmarkItem` maps `DateCreatedUtc` from the wire row.
- `src/screens/BookmarksByGroup/components/actions.ts`: deleted the local `putCachedMyBookmarks`,
  `getCachedMyBookmarks` and `UNLIMITED_TIME_TO_LIVE_SECONDS`. Added `toCacheRecord(row, group)` and
  `fromCacheRecord(record)`, with the compiled-line references. `toCacheRecord` sets Group from the BookmarkGroup input
  and DateCreatedUtc from the wire row. `fromCacheRecord` is `toBookmarkItem`, because the cache record is the wire
  structure.
- `src/screens/BookmarksByGroup/components/staticEntities.ts`: deleted `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS` (it
  duplicated `DirectoryCacheType.MyBookmarks`).
- `src/screens/BookmarksByGroup/components/ScreenBlock_BookmarkGroup.tsx`: imports the Connect2_LegacyShared
  `getCachedMyBookmarks` / `putCachedMyBookmarks`. The restore (PreloadListSource_Bookmarks :2894-2957) maps the cached
  records with `fromCacheRecord`. The four PutCachedMyBookmarks calls go through a local `putCachedBookmarkedItems`,
  which maps the rows with `toCacheRecord(row, bookmarkGroup)`.

Not changed: `shared/Connect2_LegacyShared/lib/actions.ts` (no change was necessary), `src/api/openapi.yaml`, the mock
fixtures, CSS, `.auth/` and `migration/.raw/`. The master's edits in `migration/` (board, feedback F1) are not mine.

## Commands run

All commands ran from `wt-main/app` with Node 24:
- `npx vitest run src/shared/Connect2_LegacyShared/lib/actions.test.ts -t "G2"`, before the fix: 1 failed (the
  TypeError above), 24 skipped.
- `npx vitest run src/shared/Connect2_LegacyShared/lib/actions.test.ts`, after the fix: 25 passed.
- `npx vitest run src/shared/Connect2_LegacyShared src/screens/BookmarksByGroup src/shared/Connect2_Assemble_MUI
  src/screens/MyBookmarks`: 38 files, 149 tests passed.
- `npx vitest run` (full suite): 324 files, 1458 tests passed.
- `npm run typecheck`: exit 0.
- `npx eslint <6 changed files>`: the first run had 1 error (`no-confusing-void-expression`, the `waitFor` callback in
  the new test). I fixed it, and the second run had exit 0.
- `npx prettier --check <6 changed files>`: all files are formatted.
- I did not run the parity, `npm run ci`, `route.py fixed`, `route.py ready` or any git write. The tester and the
  master do these.

## Deviations

- **A second agent wrote to the same worktree at the same time.** Between 13:34:12 and 13:35:07 (local time), another
  agent added a second "G2" `describe` to `actions.test.ts`. It imported the local `putCachedMyBookmarks` of
  BookmarksByGroup as `putFromBookmarksByGroup` and duplicated the imports. A short time later, it deleted its own block
  and kept mine.

  I did not undo any of its edits. After 13:35:07, I saw no more writes from it. The file now holds only the G2 test
  described above. Before the tester starts, the master must make sure that no other developer works on G2.
- The test fills the cache through the real screen (render), not through a cache function. The arrange step is the same
  before and after the fix. On `refactor/architecture`, the shared → screens import in a test is allowed: test files are
  out of the dependency-cruiser folder rules (`STORY_OR_TEST`, decision Q11).
- When the screen renders in the test, React writes the warning "`<a>` cannot contain a nested `<a>`" to stderr. This
  is the block's existing row DOM. The test does not fail. I did not change the block's rendering.
- Group comes from the route input, as the brief says. OutSystems keeps the server row's own Group in the cache. Both
  values are the same in the mocks (`legacyBookmarksOfGroup` returns only the rows of the requested group). No reader
  uses the Group of cached rows: AddBookmarkToCache reads the Group of the new record, and RemoveBookmarkFromCache gets
  the group as an input.
- Note for the merge into `refactor/architecture` and for P5-3-bookmark: the refactor branch uses `@/…` aliases in the
  import lines of these files. Thus, expect conflicts in the import lines. The domain `BookmarkItem` that P5-3 moves to
  `api/bookmark` must keep `dateCreatedUtc`. The P5-3 finding in `handoffs/P5-3-bookmark/dev.md` ("two shapes") is
  fixed by this change.

## Questions for the user

1. (Does not block the gate.) BookmarksByGroup's domain row does not keep these record fields:
   - `Type`
   - `PhotoDetails`
   - `DetailsJson.CountryCode`, `HouseHolderId`, `HouseholderName`, `MemberID`, `ServiceType`, `SubdivisionID` and
     `SubdivisionName`

   So the rows that BookmarksByGroup puts in the cache get the record defaults (Text "", Long Integer 0). OutSystems
   keeps the server values. In the compiled code that we have, no reader of the cache uses these fields:
   - AddBookmarkToCache reads ObjectId, DateCreatedUtc and the Group of the new record.
   - RemoveBookmarkFromCache reads ObjectId.
   - The block reads its domain fields.

   Options:
   - (a) Keep the defaults, as built now.
   - (b) Keep these fields, and the server's Group, in the domain row. Then the cache holds the exact server record.
     This change is larger, also on the P5-3 domain type.

   Recommendation: (a). No reader uses these fields, and the change stays small. Use (b) if a later port reads them.
