## Result
status: pass
summary: BookmarksByGroup is now a page with a flow hook (`useBookmarkGroup`, on `useFlowState`, no `beforePaint`), a pure state file (`bookmarkGroupState`) and a props-only view (`BookmarkGroupView`). `api.ts` is deleted, the input reader is in `inputs.ts`, and every file that ports a block has one `@origin`. A temporary old-vs-new test (deleted) ran 17 scripts (one in StrictMode, one W23 leave-while-pending). DOM, URL, calls, request bodies, feedback, MyBookmarks cache, preload and local bookmarks were the same in all 17. Typecheck, eslint, prettier, the full vitest suite (2996 tests) and arch_baseline pass. HomeFeed and Login first loads do not grow (W21).

## Files changed
app/src/pages/BookmarksByGroup/BookmarksByGroupPage.tsx (rewritten: reads the input and the 3 flags, calls useBookmarkGroup, renders BookmarkGroupView with the BottomBar, BackNavigationHandler (`b1-$b24`) and ShareSheet (`b1-$b25`, ShareableObject `b1-$b26`) slots, then CommonUiLayout; the NavigateTo_* events are unchanged)
app/src/pages/BookmarksByGroup/components/ScreenBlock_BookmarkGroup.tsx -> app/src/pages/BookmarksByGroup/components/BookmarkGroupView.tsx (plain mv, then rewritten: props only, the same markup, `@origin`, no compiled-line references)
app/src/pages/BookmarksByGroup/hooks/useBookmarkGroup.ts (new: OnInitialize (restore), OnReady/RefreshBookmarkData, OnClick_BookmarkedItem, OnHandle_BookmarkToggle, OnHandle_ShareItem, UpgradeSubscription, Handler_OnSaveBookmarkNote, Handler_CloseShareSheet, BackNavigationHandler)
app/src/pages/BookmarksByGroup/hooks/bookmarkGroupState.ts (new: state record, initial and restored state, 7 actions, reducer, call inputs, element ids)
app/src/pages/BookmarksByGroup/components/actions.ts -> app/src/pages/BookmarksByGroup/hooks/bookmarkGroupActions.ts (plain mv, then edited: imports `toBookmark` and `Bookmark` from `@/api/bookmark`; same functions; comments without compiled-line references)
app/src/pages/BookmarksByGroup/components/staticEntities.ts -> app/src/pages/BookmarksByGroup/staticEntities.ts (plain mv, unchanged: the hook, the actions, the view and the page use it)
app/src/pages/BookmarksByGroup/components/BookmarkNoteDialogs.tsx -> app/src/pages/BookmarksByGroup/components/BookmarkNoteAddEdit.tsx (plain mv, then edited: BookmarkNoteDelete split out, `@origin`)
app/src/pages/BookmarksByGroup/components/BookmarkNoteDelete.tsx (new: split from BookmarkNoteDialogs.tsx, unchanged code, `@origin`)
app/src/pages/BookmarksByGroup/components/Result_Item_Badge.tsx -> app/src/pages/BookmarksByGroup/components/LegacyResultItemBadge.tsx (plain mv, then edited: component and props renamed, `@origin` instead of `// @os-block`; markup unchanged)
app/src/pages/BookmarksByGroup/api.ts (deleted with rm: the hook and the actions import `@/api/bookmark` directly)
app/src/pages/BookmarksByGroup/inputs.ts (new: BookmarksByGroupInputs and readBookmarksByGroupInputs, from api.ts and types.ts)
app/src/pages/BookmarksByGroup/types.ts (edited: the domain type re-exports and the input type are removed; BookmarkItemWire (mocks.ts) and BookmarkNote stay)
app/src/pages/BookmarksByGroup/BookmarksByGroup.test.tsx (new: page in the app frame, 8 tests)
app/src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx (new: 8 tests)
app/src/pages/BookmarksByGroup/hooks/useBookmarkGroup.test.tsx (new: 21 tests, 4 of them W23)
app/src/pages/BookmarksByGroup/hooks/bookmarkGroupState.test.ts (new: 8 tests)
app/src/pages/BookmarksByGroup/hooks/bookmarkGroupActions.test.ts (new: 3 tests)
app/src/shared/Connect2_LegacyShared/lib/actions.test.ts (import line only: `fromCacheRecord`, `toCacheRecord` from the new path)
app/src/api/bookmark/types.ts (comment only: the path of toCacheRecord)
migration/refactor/handoffs/P6-G6-B-BookmarksByGroup/dev.md (this report)

Unchanged: app/src/pages/BookmarksByGroup/mocks.ts. No platform, container, component, shared block or docs file changed.

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/BookmarksByGroup → exit 0, 5 files, 48 tests
cd app && npx vitest run src/pages/BookmarksByGroup src/shared/Connect2_LegacyShared/lib/actions.test.ts src/shared/Connect2_MyBookmarks_MUI → exit 0
cd app && npx vitest run (full) → first run 2 failed of 2996: 2 Services page tests timed out (1 s) under load; `npx vitest run src/pages/Services` twice → 30/30 pass; second full run → exit 0, 525 files, 2996 tests
cd app && npx eslint --max-warnings 0 src/pages/BookmarksByGroup src/shared/Connect2_LegacyShared/lib/actions.test.ts src/api/bookmark/types.ts → exit 0
cd app && npx eslint src → 0 errors, 76 warnings (75 baseline keys; one file has a duplicate key)
cd app && npx prettier --check (the changed files) → all files use Prettier code style
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 189 warnings (189 before). The route has 2 rule-9 warnings before and after; they moved with the code: hooks/useBookmarkGroup.ts → legacy/os/exceptions (isSystemException, exceptionMessage) and components/BookmarkGroupView.tsx → legacy/os/os-assets (osImage)
python3 migration/tools/refactor/arch_baseline.py check → 75 warnings, 75 baseline rows, 0 new, 0 gone
cd app && npx knip → no unused file in src/pages/BookmarksByGroup; 7 exported prop or flow interfaces that only their own file uses (as for the other finished pages)
Bundle (W21), `npx vite build` + `node build/bundle-report.mjs`, base = the index tree of the worktree (git write-tree 25d382b5, exported with git archive to the scratchpad and built there):
- HomeFeed: base 751.61 kB / 244.44 kB gzip → new 751.62 kB / 244.44 kB gzip
- Login: base 601.56 kB / 184.47 kB gzip → new 601.56 kB / 184.47 kB gzip
- BookmarksByGroupPage chunk (lazy): 19.54 kB / 6.48 kB gzip → 22.17 kB / 7.15 kB gzip (reducer and flow hook)
Temporary test `src/__tmp_parity_bbg/` (deleted, with its build outputs). It ran a copy of the old page (import lines of the copy changed with the Edit tool) against the new page in the app frame, old, new, then old again, and compared after each step: body innerHTML (React useId values normalized), URL, called actions, every request path and body, feedback messages, the MyBookmarks cache of the group, the preload object and the local bookmarks. Scripts:
- Contacts: open, row click (carousel on), back (view restore), row click after the restore
- Contacts: row click (carousel off → HouseholdDetails)
- Contacts: Unmark twice, then back to HomeFeed (preload)
- Contacts: Share with C2ExtendedShare on (sheet opens) and off ("Share to Connect", nothing opens)
- Share without a share type ("Coming soon") and on a disabled record (audit, FreeSubscriptionAlert)
- Row not found (message and refresh), not available (hidden message), disabled (upgrade popup)
- Locations: locality → Locality_Details, back, supper meeting → SupperMeeting_Details
- Locations: Share of a supper meeting, Unmark of a locality
- Entities (NoBookmarks); no BookmarkGroup input
- Scenarios error, empty, loading
- mobileDirectoryBookmarkNote on: New_GetBookmarkById and the BookmarkNote placeholder
- Leave while GetAllBookmarksByGroup is pending (W23: the cache is still written)
- StrictMode: open, Unmark, row click, back (GetAllBookmarksByGroup once)
Result: 17 of 17 equal, 4 runs. Snapshots wait 300 ms: at 5 ms the old page differed from itself (old vs old) in the share scripts, because the bulk image call of the ShareSheet member avatars comes at a varying time.

## Deviations from the brief
- Branch: I worked in the prefetch worktree `wt-BookmarksByGroup` (branch `rf/prefetch-P6-G6-B-BookmarksByGroup-66f01e66`), as the master told me. It is not `refactor/architecture`. Nothing is staged or committed: moves and deletes are plain `mv` and `rm`, the new files are untracked. The untracked root `node_modules` symlink of the worktree is not mine.
- Shape: hook+component, as move-map row 5 says. No container: one data action and a view under the criterion.
- `beforePaint` is not set (W28): the old block ran OnReady in a `useEffect`, after the paint.
- View cache: useFlowState keeps the state record under `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup`. The old block kept no view state: a restored view took the rows of the MyBookmarks cache (PreloadListSource_Bookmarks). The hook gives `restore`, which builds the state from GetCachedMyBookmarks and ignores the saved record. So a restored view shows the same rows as before, also a bookmark that another screen added with AddBookmarkToCache (page test).
- StrictMode: OnReady has a once-guard and the newest liveness check, as useAssembleFilter. GetAllBookmarksByGroup is sent once, as before.
- The flows read `latest` and `parameters` (page-template rule), not the values of the click's render. The result differs only when two flows overlap (for example two Unmark answers in flight): ListRemove and UpdatedTotal then apply to the newest list, as OutSystems assigns variables at once. The old port used the list of the click's render. The old-vs-new scripts have no such overlap.
- `IsFetchingBookmarks` in the request stays True, as in the old port.
- W23: the state writes after an await are skipped after the unmount. The server calls, PutCachedMyBookmarks, Delete_LocalBookmarkByBookmarkId, the feedback messages, the dialogs, SetPreloadObject and the NavigateTo_* events still run. 4 unit tests cover OnReady, a failed refresh, Unmark and a row click.
- Names: ScreenBlock_BookmarkGroup → BookmarkGroupView (move-map target). Result_Item_Badge → LegacyResultItemBadge, because move-map row 57 gives ResultItemBadge to NC_Result_Item_Badge (as LegacyPopupMenu). BookmarkNoteDialogs.tsx holds two blocks: it is split into BookmarkNoteAddEdit.tsx and BookmarkNoteDelete.tsx, one `@origin` each. The `data-block` names do not change.
- Slots: the page renders the BackNavigationHandler and the ShareSheet container into view slots, at the same places in the DOM. The view still imports ScrollAnchor (one per row) and NotCaptured from platform/, as other page views do (rule 4 covers src/components only). `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors` (the same function).
- Two files outside the route: the import line of `shared/Connect2_LegacyShared/lib/actions.test.ts`, and one comment path in `api/bookmark/types.ts`.
- Rule 6 slip: I created a temporary debug test file in `src/__tmp_parity_bbg/` with a shell heredoc, then deleted it at once without running it; I used the Edit tool instead. The folder is deleted.
- For the documenter:
  - move-map.csv row 5 (`ScreenBlock_BookmarkGroup.tsx`): status `moved`, shape hook+component. View: `components/BookmarkGroupView.tsx`. Hook: `hooks/useBookmarkGroup.ts`. State: `hooks/bookmarkGroupState.ts`.
  - move-map.csv row 271 (BookmarksByGroup page) can say: api.ts deleted, inputs.ts added, types.ts keeps BookmarkItemWire (mocks) and BookmarkNote; components renamed (LegacyResultItemBadge, BookmarkNoteAddEdit, BookmarkNoteDelete).
  - `app/docs/refactor/calls-by-domain.md` line 121 names `screens/BookmarksByGroup/api.ts`. The calls are now in `pages/BookmarksByGroup/hooks/useBookmarkGroup.ts` (imports `@/api/bookmark`).
  - `app/src/api/README.md` line 54 says the screen re-exports `toBookmark` as `toBookmarkItem`. Now `pages/BookmarksByGroup/hooks/bookmarkGroupActions.ts` (fromCacheRecord) imports `toBookmark` directly.
  - The CHANGELOG needs an entry.

## Questions for the user
none
