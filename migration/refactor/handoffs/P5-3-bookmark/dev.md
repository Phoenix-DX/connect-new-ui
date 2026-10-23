## Result
status: pass
summary: Resolved the two `git apply --3way` conflicts with the G2 fix on the main tree (BookmarksByGroup `api.ts`, `types.ts`):
the domain `Bookmark` keeps `dateCreatedUtc`, `toBookmark` maps it, and the screen `api.ts` re-exports it as `toBookmarkItem`
for `fromCacheRecord`. The clean files fit the G2 code. Typecheck, the suites (full run too), eslint, prettier and lint:arch pass.

## Files changed
Main tree, base 6196a07 (G2 merged). All files are staged; nothing is unmerged or unstaged.
app/src/api/bookmark/types.ts (added; `Bookmark` gets `dateCreatedUtc`, the sort key of AddBookmarkToCache)
app/src/api/bookmark/mapper.ts (added; `toBookmark` maps `DateCreatedUtc`)
app/src/api/bookmark/repository.ts (added)
app/src/api/bookmark/keys.ts (added)
app/src/api/bookmark/hooks.ts (added)
app/src/api/bookmark/index.ts (added; also exports `toBookmark`, as `api/event` exports two mappers)
app/src/api/bookmark/mapper.test.ts (added; the `toBookmark` test expects `dateCreatedUtc`)
app/src/api/bookmark/repository.test.ts (added)
app/src/api/bookmark/hooks.test.tsx (added)
app/src/screens/BookmarksByGroup/api.ts (changed, conflict resolved: keeps `readInputs`; re-exports the 4 calls and `toBookmark as toBookmarkItem`)
app/src/screens/BookmarksByGroup/types.ts (changed, conflict resolved: keeps `BookmarkItemWire` for mocks.ts, `BookmarksByGroupInputs`, `BookmarkNote`; re-exports the domain types)
app/src/screens/MyBookmarks/api.ts (changed: re-exports the 2 calls)
app/src/screens/MyBookmarks/types.ts (changed: keeps `GroupSummaryWire`, `BookmarkItemWire` for mocks.ts; re-exports the domain types)
app/src/shared/Connect2_Assemble_MUI/lib/actions.ts (shared, changed: `addBookmark`/`deleteBookmarkByBookmarkId` = domain functions; `callAction` import removed)
app/src/shared/UBTConnect/lib/actions.ts (shared, changed: `bookmarkServerActions` = domain functions; `BookmarkServerActions` uses the domain types; `callAction` import removed)
migration/refactor/handoffs/P5-3-bookmark/exemptions.json (added: `[]`)
migration/refactor/handoffs/P5-3-bookmark/dev.md (this file)

Not changed: `screens/BookmarksByGroup/components/actions.ts` (`toCacheRecord`, `fromCacheRecord`),
`ScreenBlock_BookmarkGroup.tsx`, `staticEntities.ts`, `shared/Connect2_LegacyShared/**` (the G2 code and its test),
`src/mocks/**`, `openapi.yaml`.

Conflict resolution:
- `api.ts`: "theirs" (the domain re-exports) plus `toBookmark as toBookmarkItem`. The "ours" side held the G2 copy of the
  4 calls and of `toBookmarkItem`; the calls are the same as the domain functions, and `toBookmarkItem` (with
  `dateCreatedUtc`) is now the domain `toBookmark`. `components/actions.ts` and the G2 test keep their imports.
- `types.ts`: "theirs" (the domain re-exports). The G2 field `dateCreatedUtc` moved into the domain `Bookmark`.
- W1 is kept: `toCacheRecord` is unchanged, so the rows that BookmarksByGroup writes keep the record defaults for `Type`,
  `PhotoDetails` and the 7 `DetailsJson` fields. The domain `Bookmark` does not get those fields.

Domain contents (unchanged from the prefetch, except `dateCreatedUtc`):
- Repository (one call per function): `fetchBookmarkGroup` (ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup),
  `fetchBookmarkGroupSummaries` (ScreenBlock_MyBookmarks/DataActionGetGroupSummaries, sends every block variable),
  `fetchBookmarkById` (client action GetBookmarkById: New_GetBookmarkById when `hasBookmarkNote`, else GetBookmarkById),
  `deleteBookmark` and `updateBookmarkNote` (Connect2_MyBookmarks_MUI writes, answer Success as boolean),
  `addAssembleBookmark` / `deleteAssembleBookmark` (Connect2_Assemble_MUI), `addC2Bookmark` / `deleteC2Bookmark`
  (UBTConnect ServiceAPIAddBookmark2 / ServiceAPIDeleteBookmarkByBookmarkId2).
- Hooks: `useBookmarkGroupQuery`, `useBookmarkGroupSummariesQuery` (no caller yet; staleTime 0, gcTime 0, retry false).
- Types keep the shapes of the readers: `Bookmark` (the BookmarksByGroup row, with `dateCreatedUtc` since G2) and
  `GroupSummaryBookmark` (the MyBookmarks item). `AssembleBookmarkAdded`, `C2BookmarkAdded` and `BookmarkDeleted` keep
  the OutSystems names, because the client actions take these records as they are.
- Call inputs are identical to before (names, order and values), so call parity does not change.

Fields that mappers drop, and their readers:
- AddBookmark2 `Bookmark_Added.BookmarkCategoryId` and `.ItemId`: the only reader is `toggleBookmarkItem_C2`, which reads
  `Id` and `DateCreatedUtc`.
- AddBookmark (Assemble) drops nothing: `CreatedBookmarkResponse` goes into the memory cache `MyBookmarks`.
- `toBookmark` drops `Group`, `Type`, `PhotoDetails` and 7 `DetailsJson` fields, as the G2 `toBookmarkItem` did (W1).
- MyBookmarks GetBookmarkById now gets the full `Bookmark`. The block reads objectType, objectId, title, recordDisabled
  and recordNotAvailable only; the result is not stored.

## Commands run
All on the main tree, from `app/`, Node 24.
`npm run typecheck` → exit 0
`npx vitest run src/api/bookmark src/shared/Connect2_LegacyShared src/shared/Connect2_Assemble_MUI src/shared/UBTConnect/lib src/shared/UBTConnect/Directory_EntityDetailsActions src/shared/Connect2_MyBookmarks_MUI src/screens/BookmarksByGroup src/screens/MyBookmarks src/screens/AssembleDetail src/mocks/handlers.test.ts` → 47 files, 207 tests passed (the G2 test in `Connect2_LegacyShared/lib/actions.test.ts` included)
`npx vitest run` (full suite) → 367 files, 1921 tests passed
`npx eslint src/api/bookmark src/screens/BookmarksByGroup src/screens/MyBookmarks src/shared/Connect2_Assemble_MUI/lib/actions.ts src/shared/UBTConnect/lib/actions.ts src/shared/Connect2_LegacyShared/lib/actions.test.ts` → exit 0
`npx prettier --check <the same paths>` → all files pass
`npm run lint:arch` → exit 0; depcruise 0 errors, 192 warnings; ESLint 1 warning (`components/ui/os/OSPopup/usePopupWidget.ts`, not in this step). No warning from `src/api/bookmark`. The warnings of the changed shared files (`legacy/os` imports) exist at HEAD. The two screen `api.ts` files no longer import `legacy/os/os-wire` (2 fewer warnings).
`grep` for conflict markers, `DIRECTORY_CACHE_TYPE_MY_BOOKMARKS` and the deleted local cache writer in `src` → none. The cache calls go to `shared/Connect2_LegacyShared/lib/actions.ts`.
Parity: not run (the tester runs it).

## Deviations from the brief
- Resume on the main tree after the master's `git apply --3way` of the prefetch diff. Prefetch notes: the prefetch ran in a
  worktree on an older base. There, `git add -N app/src/api/bookmark` was run once by mistake and undone at once (index
  only).
- `api/bookmark/index.ts` also exports the mapper `toBookmark`, because `fromCacheRecord` (G2) needs the wire → row mapper.
  This does not keep a second copy in the screen. The precedent is `api/event/index.ts`, which exports two mappers.
- The prefetch finding ("the `MyBookmarks` cache holds two shapes") is fixed by G2 (commit 9a8093f, merged in 6196a07).
  It is no longer open.
- Removed the compiled-line references (`controller.js:1687-1749`) only from the two Assemble doc comments that I rewrote.
- Documents for the documenter: `app/src/api/README.md` (add `bookmark/`, and that the barrel exports `toBookmark` for the
  MyBookmarks cache of BookmarksByGroup), `app/docs/refactor/calls-by-domain.md`,
  `app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md:77` ("`bookmarkServerActions` calls them through
  `callAction`": now through api/bookmark).

## Questions for the user
none
