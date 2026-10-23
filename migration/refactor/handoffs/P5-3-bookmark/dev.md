## Result
status: pass
summary: Added `app/src/api/bookmark` (types, mapper, repository, keys, hooks, index, 3 test files) with the 10 bookmark
calls. The old `api.ts`/`types.ts` of BookmarksByGroup and MyBookmarks re-export the domain under their old names; the
Assemble and UBTConnect client actions call the domain. All quick checks pass. One older bug found, not changed (see Deviations).

## Files changed
app/src/api/bookmark/types.ts (added)
app/src/api/bookmark/mapper.ts (added)
app/src/api/bookmark/repository.ts (added)
app/src/api/bookmark/keys.ts (added)
app/src/api/bookmark/hooks.ts (added)
app/src/api/bookmark/index.ts (added)
app/src/api/bookmark/mapper.test.ts (added)
app/src/api/bookmark/repository.test.ts (added)
app/src/api/bookmark/hooks.test.tsx (added)
app/src/screens/BookmarksByGroup/api.ts (changed: keeps `readInputs`, re-exports the 4 calls)
app/src/screens/BookmarksByGroup/types.ts (changed: keeps `BookmarkItemWire` for mocks.ts, `BookmarksByGroupInputs`, `BookmarkNote`; re-exports the domain types)
app/src/screens/MyBookmarks/api.ts (changed: re-exports the 2 calls)
app/src/screens/MyBookmarks/types.ts (changed: keeps `GroupSummaryWire`, `BookmarkItemWire` for mocks.ts; re-exports the domain types)
app/src/shared/Connect2_Assemble_MUI/lib/actions.ts (shared, changed: `addBookmark`/`deleteBookmarkByBookmarkId` = domain functions; `callAction` import removed)
app/src/shared/UBTConnect/lib/actions.ts (shared, changed: `bookmarkServerActions` = domain functions; `BookmarkServerActions` uses the domain types; `callAction` import removed)
migration/refactor/handoffs/P5-3-bookmark/exemptions.json (added: `[]`)
migration/refactor/handoffs/P5-3-bookmark/dev.md (this file)

Possible merge conflicts (shared files):
- `shared/UBTConnect/lib/actions.ts`: my import line `import { addC2Bookmark, ... } from '@/api/bookmark';` replaces
  `import { callAction } from '@/api/client/callAction';` (line 10), directly above `import { fetchUnreadUpdateItemsCount } from '@/api/update';`
  (added by the update patch of base 9035805). Hunk 2 is in the bookmark section (lines 281-296).
- `shared/Connect2_Assemble_MUI/lib/actions.ts`: import line 7 (`callAction` → `@/api/bookmark`) and the bookmark section
  (lines 161-169). If the event patch also changes this file or removes its last `callAction` use, check line 7.
- Not changed: `Connect2_Assemble_MUI/lib/structures.ts`, `Connect2_OrbitMobile_MUI/**`, `Connect2_LegacyShared/**`,
  any event screen, `src/mocks/**`, `openapi.yaml`.

Domain contents:
- Repository (one call per function): `fetchBookmarkGroup` (ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup),
  `fetchBookmarkGroupSummaries` (ScreenBlock_MyBookmarks/DataActionGetGroupSummaries, sends every block variable),
  `fetchBookmarkById` (client action GetBookmarkById: New_GetBookmarkById when `hasBookmarkNote`, else GetBookmarkById),
  `deleteBookmark` and `updateBookmarkNote` (Connect2_MyBookmarks_MUI writes, answer Success as boolean),
  `addAssembleBookmark` / `deleteAssembleBookmark` (Connect2_Assemble_MUI), `addC2Bookmark` / `deleteC2Bookmark`
  (UBTConnect ServiceAPIAddBookmark2 / ServiceAPIDeleteBookmarkByBookmarkId2).
- Hooks: `useBookmarkGroupQuery`, `useBookmarkGroupSummariesQuery` (no caller yet; staleTime 0, gcTime 0, retry false,
  as the other domains). The server actions are not queries: the client actions call them on a user action.
- Types keep the shapes of the readers (no caller change): `Bookmark` (the BookmarksByGroup row) and
  `GroupSummaryBookmark` (the MyBookmarks item), as country has two shapes. The records that a client action takes as
  they are keep the OutSystems names: `AssembleBookmarkAdded` (Success, CreatedBookmarkResponse with every field),
  `C2BookmarkAdded` (Success, Bookmark_Added { Id, DateCreatedUtc }), `BookmarkDeleted` (Success).
- Call inputs are identical to before (names, order and values), so call parity does not change.

Fields that mappers drop, and their readers (searched also through the memory cache and `any`):
- AddBookmark2 `Bookmark_Added.BookmarkCategoryId` and `.ItemId`: the only reader is `toggleBookmarkItem_C2`, which reads
  `Id` and `DateCreatedUtc` (`shared/UBTConnect/lib/actions.ts:325-331`). The interface already typed only these two.
- AddBookmark (Assemble) drops nothing: `CreatedBookmarkResponse` goes into the memory cache `MyBookmarks`
  (`addBookmarkToCache`), so the mapper copies every field.
- MyBookmarks GetBookmarkById now gets the full `Bookmark` (before: the short MyBookmarks item). The block reads
  objectType, objectId, title, recordDisabled and recordNotAvailable only (`ScreenBlock_MyBookmarks.tsx:206-250`); the
  result is not stored.
- BookmarksByGroup and MyBookmarks list items keep exactly the same fields as before (same memory cache and view-state
  shapes).

## Commands run
`npm --prefix app run typecheck` → exit 0
`npx vitest run src/api/bookmark` → 3 files, 23 tests passed
`npx vitest run src/shared/Connect2_Assemble_MUI src/shared/UBTConnect/lib src/shared/UBTConnect/Directory_EntityDetailsActions src/shared/Connect2_MyBookmarks_MUI src/screens/BookmarksByGroup src/screens/MyBookmarks src/screens/AssembleDetail src/mocks/handlers.test.ts` → 17 files, 77 tests passed
`npx vitest run src/app/routes.test.ts src/platform/feedback/feedbackMessageAutoClose.test.tsx src/platform/session/auth.test.ts` → 3 files, 28 tests passed
`npx eslint src/api/bookmark src/screens/BookmarksByGroup src/screens/MyBookmarks src/shared/Connect2_Assemble_MUI src/shared/UBTConnect/lib src/shared/UBTConnect/Directory_EntityDetailsActions src/screens/AssembleDetail` → exit 0 (first run: 1 error, `no-unsafe-assignment` from a nested `expect.objectContaining` in mapper.test.ts; fixed)
`npm run format:check` → all files pass (after `npx prettier --write` on 3 new or changed files)
`npm run arch` → 0 errors, 202 warnings; no warning from `src/api/bookmark`; 2 warnings fewer than before (the two screen `api.ts` files no longer import `legacy/os/os-wire`)
`npx vitest run` (full suite, 3 runs, load average about 110 from other agents) → run 1: 3 failed / 1775 passed; run 2: 2 failed; run 3: 1 failed / 1777 passed. The failures are timing failures in `EntitiesCarousel.test.tsx` and `SupperMeeting_DetailsBlock.test.tsx` (waitFor while the skeleton is still shown); both files pass alone 3 times (25/25). They do not call bookmark code.
Parity: not run (no dev server for the worktree, as the master said).

## Deviations from the brief
- `git add -N app/src/api/bookmark` was run once by mistake (to see the diff stat of the new files). It was undone at once
  with `git rm --cached -r app/src/api/bookmark` (index only; the files are untouched). The index is as at the start.
- Removed the compiled-line references (`controller.js:1687-1749`) only from the two Assemble doc comments that I rewrote.
- Documents for the documenter: `app/src/api/README.md` (add `bookmark/`), `app/docs/refactor/calls-by-domain.md`,
  `app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md:77` ("`bookmarkServerActions` calls them through
  `callAction`": now through api/bookmark).
- Finding, not changed (an older bug; a fix changes behavior, so it is a follow-up for the master, not part of this step):
  the memory cache type `MyBookmarks` holds two shapes. `screens/BookmarksByGroup/components/actions.ts:20-30` puts and
  reads the camelCase `Bookmark` rows (`DIRECTORY_CACHE_TYPE_MY_BOOKMARKS = 'MyBookmarks'`, `staticEntities.ts:32`);
  `shared/Connect2_LegacyShared/lib/actions.ts:452-476` reads and writes OutSystems `BookmarkItem` records with the same
  type (`DirectoryCacheType.MyBookmarks`, `staticEntities.ts:46`) and the same group key. When a user opens BookmarksByGroup
  (Contacts) and then bookmarks a household in AssembleDetail, `addBookmarkToCache` gets a cache hit and sorts with
  `b.DateCreatedUtc.localeCompare(...)` on rows that have no `DateCreatedUtc`: TypeError after the server add and the local
  copy. `removeBookmarkFromCache` never finds a camelCase row (`p.ObjectId`). In OutSystems both use the same record.

## Questions for the user
none
