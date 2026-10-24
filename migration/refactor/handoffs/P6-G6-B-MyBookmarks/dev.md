## Result
status: pass
summary: MyBookmarks is now a page. ScreenBlock_MyBookmarks is split into a flow hook (`hooks/useMyBookmarks.ts`, on `useFlowState`), a pure state file (`hooks/myBookmarksState.ts`) and a props-only view (`components/MyBookmarksView.tsx`). `api.ts`, `types.ts`, `components/staticEntities.ts` and the old block are deleted. A temporary old-vs-new test gave equal results in 13 scripts (8 of 8 runs). Typecheck, eslint, prettier, the full suite (2992 tests) and arch_baseline pass. HomeFeed and Login each grew by 0.02 kB gzip (route map only, see below).

## Files changed
app/src/pages/MyBookmarks/MyBookmarksPage.tsx (rewritten: the screen's OnHandle_NavigateTo_* handlers, a local `MyBookmarksBlock` that calls useMyBookmarks and renders the view, then CommonUiLayout; no compiled-line references)
app/src/pages/MyBookmarks/components/MyBookmarksView.tsx (new: the markup of the old block, props only, `@origin`)
app/src/pages/MyBookmarks/components/ScreenBlock_MyBookmarks.tsx (deleted: replaced by the view, the hook and the state file)
app/src/pages/MyBookmarks/hooks/useMyBookmarks.ts (new: OnInitialize, OnReady, RefreshBookmarkData, NavigateTo_BookmarkedItem, TryAgain; W23 write guard)
app/src/pages/MyBookmarks/hooks/myBookmarksState.ts (new: the variables, the reducer, restore, OnAfterFetch, ClearLocalLists, the messages, InitialTab, the preload items, CommunityBusinessType2)
app/src/pages/MyBookmarks/components/staticEntities.ts (deleted: CommunityBusinessType2 moved into myBookmarksState.ts)
app/src/pages/MyBookmarks/api.ts (deleted: the hook imports `fetchBookmarkGroupSummaries` and `fetchBookmarkById` from `@/api/bookmark`)
app/src/pages/MyBookmarks/types.ts (deleted: the domain types come from `@/api/bookmark`; the two wire types moved into mocks.ts)
app/src/pages/MyBookmarks/mocks.ts (edited: the wire types of GetGroupSummaries are local now; the handlers are unchanged)
app/src/pages/MyBookmarks/components/MyBookmarks_Album.tsx (edited: `@origin` instead of `// @os-block`; `BookmarkItem` type from `@/api/bookmark`)
app/src/pages/MyBookmarks/components/MyBookmarks_Card.tsx (edited: `@origin` only)
app/src/pages/MyBookmarks/components/NetworkWarning.tsx (edited: `@origin` only)
app/src/pages/MyBookmarks/MyBookmarks.test.tsx (new: page test in the app frame with the MSW mocks, 7 tests)
app/src/pages/MyBookmarks/components/MyBookmarksView.test.tsx (new: 6 tests)
app/src/pages/MyBookmarks/hooks/useMyBookmarks.test.tsx (new: 21 tests, 4 of them W23 unmount tests)
app/src/pages/MyBookmarks/hooks/myBookmarksState.test.ts (new: 10 tests)
migration/refactor/handoffs/P6-G6-B-MyBookmarks/dev.md (this report)

Unchanged: `api/bookmark` (the calls and types were already there), shared blocks, platform, docs, the baseline. No file of another G6 route.

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/MyBookmarks src/api/bookmark src/components/bookmark src/platform/navigation → exit 0, 25 files, 165 tests
cd app && npx vitest run (full suite) → exit 0, 524 files, 2992 tests
cd app && npx eslint --max-warnings 0 src/pages/MyBookmarks → exit 0
cd app && npx eslint . → 0 errors, 76 warnings (none in src/pages/MyBookmarks)
cd app && npx prettier --check src/pages/MyBookmarks → all files use Prettier code style
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (75 warnings, 75 rows, 0 new, 0 gone)
cd app && npm run arch → 188 warnings (189 before). src/pages/MyBookmarks has 3 rule-9 warnings (4 before): mocks.ts → os-wire (unchanged), MyBookmarks_Album.tsx → os-assets (unchanged), hooks/useMyBookmarks.ts → legacy/os/exceptions (the old block had 2: os-exceptions and exceptions)
cd app && npx knip → no unused file in src/pages/MyBookmarks; 4 exported prop or flow interfaces used only in their own file, as for the other finished pages
Bundle (vite build + node build/bundle-report.mjs HomeFeed Login MyBookmarks), base = a copy of the worktree with the index version of src/pages/MyBookmarks:
  HomeFeed 244.44 → 244.46 kB gzip (+0.02), Login 184.47 → 184.49 kB gzip (+0.02), MyBookmarks 203.77 → 204.42 kB gzip.
  Only the entry chunk changed for HomeFeed and Login: +9 bytes raw, all in the route map entry of the lazy MyBookmarks page (`__vite__mapDeps` gains the `flowState` chunk, which useFlowState needs). No module moved into the entry or a HomeFeed or Login chunk. Within the W21 tripwire (+0.3 kB per step), the same size as Photobook (+0.02).
Temporary old-vs-new test `src/__tmp_parity_mybookmarks/` (deleted). It rendered a copy of the index version of the page and block (imports pointed at `@/api/bookmark`) and the new page with renderRoutes, in 13 scripts; each script ran old, new, then old again. It compared the container DOM, the portals, the called actions, the request bodies of GetGroupSummaries and GetBookmarkById, the URL, the feedback message and the preload object (shown by the target stubs). Scripts:
- open (spinner, then the cards); open in StrictMode (one GetGroupSummaries)
- a pending GetGroupSummaries released with a network failure; the `empty` and `error` scenarios; error then Try again
- HTTP 500 without exception, a distributed transaction (UserException1 to the flow handler), a timeout message, an HTTP 502
- a household with the carousel, then back (view-cache restore and refresh)
- without the carousel flag: a household, 2 supper meetings, 2 localities
- View All and a group title
- a bookmark that is gone (message and refresh), a hidden record (info message), a disabled record (upgrade pop-up)
- a OneSchool Global entity and a Campus&Co entity (preload and target)
- leave while GetGroupSummaries runs (BottomBar Home), then back
- a policy to accept: Policy_Checker leaves at the mount, then back
Result: 13 of 13 equal in 8 of 8 runs. Two earlier runs had a harness flake (old against old again, in the BottomBar badge, with a 30 ms settle); with a 120 ms settle it did not come back.

## Deviations from the brief
- The page has a local component `MyBookmarksBlock` that calls `useMyBookmarks` and renders the view. With the hook in the page component, OnReady would run after the effects of CommonUI_InsideLayout (its sibling after the block), which changes the order against Policy_Checker. The old-vs-new script "a policy to accept" checks this order.
- `restoreMyBookmarks` returns the defaults when the saved state is the default object itself. This keeps the old behavior of a view that was left before its first assignment (the old block saved no model then and started from the defaults). The policy script reaches this path: the old and the new page both show the spinner on the back navigation.
- W23: the flows skip their state writes after the unmount. The old block wrote them to an unmounted component, so nothing visible changes (the view cache saves the state when the screen is left, not later). Calls, messages, the upgrade pop-up, the preload and the events still run after the unmount, and errors still go to the flow handler. 4 unit tests cover this. In one very rare case `latest` can now differ from the old one: the user leaves while GetGroupSummaries and GetBookmarkById both run, and GetGroupSummaries answers first. The old flow then used the new lists for the preload; the new flow uses the lists of the last write before the unmount. Both versions navigate after the unmount in that case.
- The view-cache name of the block state is `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks` (the old block used `Model`), as on the other pages (W27).
- MyBookmarks_Album, MyBookmarks_Card and NetworkWarning keep their names and compiled-line references: this step changed only their tag line and one type import. NetworkWarning stays a page copy (the shared one is a P7 row).
- I ran `npx prettier --write` (the project formatter) on 2 new files of this step (`hooks/myBookmarksState.ts`, `hooks/useMyBookmarks.test.tsx`). The temporary old-vs-new copies were written by a scratchpad script and deleted; no project file was edited by a shell command.
- For the documenter: `docs/refactor/calls-by-domain.md` (the `screens/MyBookmarks/api.ts` row → `pages/MyBookmarks/hooks/useMyBookmarks.ts` via `api/bookmark`), `move-map.csv` (row 22, ScreenBlock_MyBookmarks: status and shape `hook+component`, no container; row 310: the page), the CHANGELOG. `src/shared/Connect2_MyBookmarks_MUI/mocks.ts` still names `screens/MyBookmarks/mocks.ts` in a comment (not changed: shared file).

## Questions for the user
none
