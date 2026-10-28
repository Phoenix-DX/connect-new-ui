# Item 8, step S2b: group A, second half (8 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-A.md`. MCP check of group A: `../review/item8-w23-errorpage.md` §5. Port gap N2:
  `../review/item8-w23-errorpage.md` §4 (approved by the user).
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `pages/Search/hooks/useSearch.ts`
- `pages/Updates_SingleList/hooks/useUpdatesSingleList.ts`
- `pages/HomeFeed/hooks/useFeedUpdates.ts` (also port gap N2)
- `pages/MyBookmarks/hooks/useMyBookmarks.ts`
- `pages/BookmarksByGroup/hooks/useBookmarkGroup.ts`
- `pages/LegacyShareObject/hooks/useProfileList.ts`
- `pages/LegacyShareObject/hooks/useShareObject.ts`
- `pages/ConnectShare/hooks/useConnectShare.ts` (comments only)

Tests: `pages/Updates_SingleList/hooks/useUpdatesSingleList.test.tsx` (new: the hook had no test file), and the
`.test.tsx` file next to each of the seven other hooks.

Docs: no README in these folders refers to W23. Not changed: platform files, the state files of the hooks.

## Tests (written first)

The new and rewritten tests ran on the old hooks first. They failed on the new rule: useUpdatesSingleList 8 of 8,
useSearch 5 of 5, useMyBookmarks 3, useBookmarkGroup 3, useProfileList 1. useFeedUpdates is the exception: the hook
change came first (see D2). After the changes: 7 folders, 36 files, 282 tests pass.

| Hook | New or rewritten tests |
|---|---|
| useUpdatesSingleList (new file) | R1 GetDateRanges resolve and reject after the unmount (no RefreshUpdates, no raise); R1 FetchUpdates resolve and reject after the unmount (no bottom bar count, no raise); R2 + R3 MarkAsRead and MarkAsUnread after the unmount (RefreshUpdatesAndFlags stops, no bar count); R2 + R3 MarkAllAsRead after the unmount (SetBadgeCountsToZero stops, no bar count, no refresh); R2 + R3 tap after the unmount (no scroll capture, no navigation); live MarkAsRead failure reaches the handler with the scope |
| useSearch | R3 unmount while the term is saved (Action_ClearResults stops, no FetchSearchResults); R1 FetchSearchResults failure after the unmount; R1 tag change, unmount during Get_RecentClickedResults (no search); R3 Event_SearchResultClick after the unmount; R4 leave, then the Locality click: no navigation, `OutOfContextException` with the scope |
| useFeedUpdates | N2: mark as read and unread call `ServiceAPIGet_UI_UpdateItems_UnreadCount_All` after the service action; R2 bar count after the block closes; the W23 test renamed to R2 (only the block closes, HomeFeed stays active: the navigation runs); R4 leave HomeFeed during MarkAsRead: no navigation, no message |
| useMyBookmarks | R1 OnReady failure after the unmount (no message, no raise); R1 answer after the unmount; R3 GetBookmarkById after the unmount (preload runs, event does not); R5 + R1 gone bookmark after the unmount (message and refresh call; the refresh failure is dropped) |
| useBookmarkGroup | R1 answer after the unmount (no cache write); R1 failure after the unmount (no message, no raise); R2 + R5 BookmarkToggle (renamed, unchanged); R3 row click after the unmount (cache write runs; no preload, no event) |
| useProfileList | R2 + R3 refused share after the unmount: no SubscriptionDenied; R2 + R5 failed share (renamed, unchanged) |
| useShareObject | the two W23 tests renamed to R2 (server actions), unchanged |
| useConnectShare | describe and one test renamed, unchanged |

## Behaviour changes per hook (each `react-extra` or `react-missing` row)

| Hook | Row | Status |
|---|---|---|
| useSearch | refreshSearch → clearResults, fetchSearchResults after the local term save | Fixed: Action_ClearResults is `flow.own` (R3, Search.js:2754) |
| useSearch | FetchSearchResults catch: raise and clearResults (4 branches) | Fixed: `flow.fetch` (R1). The catch now throws, and `flow.run` raises with the scope. After the unmount the error is the system `ControllerDisposedException`: the last branch passes it on, the handler ignores it |
| useSearch | onTagListChanged → refreshSearch | Fixed: Get_RecentClickedResults in `flow.fetch` (TST screen aggregate, R1) |
| useSearch | itemClick → Event_SearchResultClick | Fixed: `flow.events` (R3) |
| useSearch | itemClick → Locality_Details, HouseholdCarousel, HouseholdDetails | Fixed: R4 in `useOsNavigate` (platform); `flow.run` gives the scope |
| useUpdatesSingleList | onReady: GetDateRanges → RefreshUpdates, raise | Fixed: `flow.fetch` (R1) |
| useUpdatesSingleList | refreshUpdates: bar count, raise | Fixed: `flow.fetch` (R1); RefreshUpdates is `flow.own` (R3) |
| useUpdatesSingleList | MarkAsRead and MarkAsUnread → bar count | Fixed: RefreshUpdatesAndFlags is `flow.own` (R3, US:1647) |
| useUpdatesSingleList | MarkAllAsRead → bar count, refreshUpdates | Fixed: new own action SetBadgeCountsToZero (`flow.own`, R3, US:2127); the TST order is kept (US:2984-3013) |
| useUpdatesSingleList | onClickUpdateItem: scroll capture, scroll anchor, preload, navigation | Fixed: the R3 stop in Handler_MarkAsRead ends the flow; the navigation also has R4 |
| useFeedUpdates | itemClick → HouseholdCarousel | Fixed: R4 (platform); `flow.run`. When only the block closes and HomeFeed stays active, the navigation runs, as on TST (`isOutOfContext` compares the active screen, W518580) |
| useFeedUpdates | N2: MarkAsRead and MarkAsUnread without Directory_Updates_RefreshBottomBarCount(True) | Fixed: `markAs` calls it after the service action and the read state (FeedBlock_Updates :751-770, :801-820). It is a module action, so it runs also after the block closed |
| useMyBookmarks | OnReady and tryAgain: error message and raise | Fixed: `flow.fetch` in refreshGetGroupSummaries (R1) |
| useMyBookmarks | refreshGetGroupSummaries failure in navigateToBookmarkedItem | Fixed: the same `flow.fetch` |
| useMyBookmarks | NavigateTo_* events | Fixed: `flow.events` (R3) |
| useBookmarkGroup | fetchBookmarks: cache write; refreshBookmarkData: scroll, message, raise | Fixed: `flow.fetch` (R1) |
| useBookmarkGroup | onClickBookmarkedItem: preload and events | Fixed: the own actions NavigateTo_HouseholdsCarousel, NavigateTo_CommunityBusinessDetail, NavigateTo_Locality and NavigateTo_Subdivision are `flow.own` (R3); the events use `flow.events` |
| useProfileList | SubscriptionDenied after the share | Fixed: `flow.events` (R3) |

`same` rows: unchanged in behaviour. Deleted local copies: `started` (Updates_SingleList); `readyStarted`,
`newestReadyRun` and `write` (MyBookmarks, BookmarkGroup, ShareObject); `alive` and `write` (ProfileList). Every
`.catch(raiseToFlowHandler)` and `void flow()` of a widget handler in these hooks is now `flow.run`. Every "Decision
W23" comment in these files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design or brief text | Built, with evidence |
|---|---|---|
| D1 | Brief: "Use Edit/Write (no `sed -i`)" | Most multi-line edits used a short Python script with exact-text replacements; each one asserted a single match, as the Edit tool does. No `sed -i` |
| D2 | §7.2: tests first | useFeedUpdates: the hook change came before its tests. The N2 test and the R4 test fail on the old hook by construction (no bar count call; `void itemClick` navigates). They were not run on it |
| D3 | §2.5 R1 for a query refresh | useProfileList: the GetAvailableUsers refresh is in `flow.fetch`. Its promise does not resolve after the unmount (the settle effect does not run), so this changes nothing; it makes the rule visible |
| D4 | — | useUpdatesSingleList Handler_MarkAllAsRead: the one state write is now three writes in the TST order (list, SetBadgeCountsToZero, isLoading). React renders them in one batch |
| D5 | Brief step 2: delete local copies | useConnectShare: comment only (prompt). Its `initializeStarted`, `newestRun` and `write` stay (see Q1) |
| D6 | Inventory note: `dispatch` is not guarded | Outdated: since S0a, `dispatch` is a no-op after the unmount (`platform/navigation/flowState.ts`, `if (!flow.alive()) return`) |

## Questions

1. Q1: useConnectShare keeps its local copies of the once-guard and of the liveness check (D5). Options: a) the
   cleanup step S5 moves them to `useFlowState` (`dispatch`, once per instance) and `flow.run`; b) keep them.
   Recommendation: a.

## For the orchestrator

- knip: these exported types may now be unused outside their state file: `BookmarkGroupAction`
  (`bookmarkGroupState.ts`), `MyBookmarksPatch` (`myBookmarksState.ts`), `ProfileListPatch` (`profileListState.ts`),
  `ShareObjectPatch` (`shareObjectState.ts`). The state files are not in this step's file list.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (whole project, with the parallel agent's files at that time) |
| `npx eslint <16 changed files>` | pass, 0 problems (after fixing 6 errors in the new test file) |
| `npx prettier --check <16 changed files>` | pass after `--write` on `useProfileList.test.tsx`, `useSearch.ts` and the two share hooks |
| `npx vitest run <the 7 hook folders>` | 36 files, 282 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used about 55 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of group A)

- knip: 6 exported state types without users lost their `export`; 1 stale baseline row deleted (`MessageListEvents`).
  1086 rows, 0 new.
- `npm run ci` passed: 696 files, 4548 tests, no "Errors" line, build OK.
- Parity sweep of the 64 routes on port 5174 (end of group A): 64 of 64 clean.
- Open questions go to the user with the group report (S2a Q1, S2b Q1, S2c Q1).
