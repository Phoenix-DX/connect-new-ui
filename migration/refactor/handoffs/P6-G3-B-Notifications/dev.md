## Result
status: pass
summary: Notifications as page: the screen flows moved from the page to `hooks/useNotifications.ts`, and the state, reducer and screen client actions moved to `hooks/notificationsState.ts`. The page now calls the hook and renders the same JSX. `api.ts` and `types.ts` are deleted and the code uses `@/api/notification` directly. The 8 component files carry `@origin`. A temporary old/new test gave the same DOM, call order and request variables (26 snapshots, normal and StrictMode). Typecheck, eslint, prettier, the full unit suite (2370 tests) and `arch_baseline.py check` (exit 0, 69 rows) pass.

## Files changed
app/src/pages/Notifications/NotificationsPage.tsx (rewritten: hook call + the same JSX)
app/src/pages/Notifications/Notifications.test.tsx (new)
app/src/pages/Notifications/api.ts (deleted)
app/src/pages/Notifications/types.ts (deleted)
app/src/pages/Notifications/mocks.ts (the wire type MessageListItemWire moved in from types.ts)
app/src/pages/Notifications/hooks/useNotifications.ts (new)
app/src/pages/Notifications/hooks/useNotifications.test.tsx (new)
app/src/pages/Notifications/hooks/notificationsState.ts (new)
app/src/pages/Notifications/hooks/notificationsState.test.ts (new)
app/src/pages/Notifications/components/actions.ts (the 3 screen client actions moved out; `isInRange` exported; domain types)
app/src/pages/Notifications/components/NotificationsList.tsx (@origin, domain type import)
app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx (@origin, domain type import)
app/src/pages/Notifications/components/Layout_MainPages_Upgrade.tsx (@origin only)
app/src/pages/Notifications/components/MoreActionSheet.tsx (@origin only)
app/src/pages/Notifications/components/Notification_ListItem.tsx (@origin only)
app/src/pages/Notifications/components/Notifications_Action.tsx (@origin only)
app/src/pages/Notifications/components/Notifications_Header.tsx (@origin only)
app/src/pages/Notifications/components/SortSheet.tsx (@origin only)
migration/tools/refactor/os-block-to-origin.py (new: first-line `// @os-block` → `/** @origin */`)
migration/refactor/handoffs/P6-G3-B-Notifications/dev.md (this report)

## Commands run
All commands ran from the worktree root or `app/`, with Node 24 on PATH.
`npm --prefix app run arch` (before) → exit 0; 217 warnings, of which 4 are in pages/Notifications (Rule 9: page → os-exceptions, page → exceptions, mocks → os-wire, Notification_ListItem → os-assets)
Temporary old/new comparison (`pages/Notifications/zzTmpDom.test.tsx` with a copy of the HEAD page in `pages/ZzOldNotifications/`, both deleted). The test runs 3 scenarios: (1) load, search change and submit, sort Apply, leave and back (view cache restore); (2) scrolled header, toggle search, second search input, kebab and Cancel, a UserException and a CommunicationException of FetchNotifications; (3) the mock scenarios `empty` and `error`. Each scenario ran without and with StrictMode → 26 of 26 snapshots are the same: DOM, the order of the calls, the request variables of GetDateRanges and FetchNotifications, and the errors that reach the flow handler.
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/Notifications src/api/notification src/mocks` → exit 0; 9 files, 47 tests (before the W23 tests)
`cd app && npx vitest run src/pages/Notifications` → exit 0; 3 files, 19 tests
Mutation check of the W23 guard (guard turned off for one run, then put back) → the 2 W23 tests fail, so they test the guard
`cd app && npx vitest run` (full suite) → exit 0; 441 files, 2370 tests
`cd app && npx eslint src/pages/Notifications` → exit 0; 0 problems
`npm --prefix app run lint` → exit 0; 0 errors, 70 warnings (the same count as the base)
`npm --prefix app run format:check` → exit 0
`npm --prefix app run arch` (after) → exit 0; 216 warnings. In pages/Notifications: hooks/useNotifications.ts → legacy/os/exceptions (Rule 9), mocks → os-wire, Notification_ListItem → os-assets. The two page warnings are now one hook warning. No Rule 4 or Rule 8 warning.
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0; 69 warnings, 69 rows, 0 new, 0 gone (the baseline has no Notifications row)
`npm --prefix app run build && node app/build/bundle-report.mjs` → exit 0. HomeFeed 755.68 kB raw / 245.63 kB gzip, Login 608.79 / 186.97. For the base, I built a copy of the git index (base = HEAD + the staged Search diff), made with `git show :<path>` in the scratchpad and deleted after: HomeFeed 755.68 / 245.59, Login 608.79 / 186.97. See deviation 7 for the +0.04 kB gzip.
I did not run the parity, the e2e suite or the dev server. The tester runs them.

## Deviations from the brief
1. Branch: this worktree is on `rf/prefetch-P6-G3-B-Notifications-56042eaf`, the prefetch branch that the master set up, not on `refactor/architecture`. The index holds the uncommitted P6-G3-B-Search diff. I did not stage, unstage or commit anything. The deletions of `api.ts` and `types.ts` are unstaged.
2. No `useFlowState`. The view cache keeps only three screen variables (P-BACK): CurrentSearchString, Filter_Updates and HasFiltersApplied. A restored view starts without the list, and OnReady fetches it again. `useFlowState` saves and restores the whole state record, so it would show the old list and its scroll after a back navigation. That is a behavior change. So `useNotificationsState` (in useNotifications.ts) keeps `useReducer` and a `latest` ref, the same pattern as ContactUsDetails. The three variables are one `useViewState` record named `App_Notifications.Notifications` (they were 3 keys before), and the restore works the same way. This follows Search, where one record replaced 13 keys. The record is written only when one of the three variables changes.
3. W23 (master note), how the flows follow it. The hook does not use `useFlowState`, so there is no `isAlive`. There is one guard: after the unmount, `dispatch` still updates `latest`, but it writes no screen state (no reducer dispatch to React, no view-cache write). A flow that already started goes on as the old port did. Its later server calls (FetchNotifications after GetDateRanges) send the same variables, for example the default filter. Its side effects still run, each once: `directory_Updates_RefreshBottomBarCount(true)`, and `raiseToFlowHandler` for an error. The unmount flag is set in a layout effect, so after the StrictMode double mount it is false again before the blocks' passive effects (SheetInitialized) run. A `started` ref keeps OnReady to one run under StrictMode. New tests in useNotifications.test.tsx: StrictMode runs OnReady once; unmount while GetDateRanges is pending, then answer → GetDateRanges 1, FetchNotifications 1 (with the default dates), bottom bar count 1, no view-cache write, no render after the unmount; and the same with an error → flow handler called once with BubbleGenericException.
4. R4: the 8 component files had a first-line `// @os-block <name>`. The kept script `migration/tools/refactor/os-block-to-origin.py` changed each one to `/** @origin <name> */` with the same name, and nothing else in the files changed. SortSheet.tsx and MoreActionSheet.tsx each hold two blocks (the App_CommonBlocks_Filter block and its App_Notifications wrapper). They keep one tag, the name they had. I removed the compiled-line references only in rewritten code: the page, the hook, the state file and the moved client actions. The component code keeps its references.
5. The screen client actions App_Notifications_AugmentDateRanges, App_Notifications_GetBreakpoints and SetDefaultFilters moved from `components/actions.ts` to `hooks/notificationsState.ts`, with the same logic. `components/actions.ts` keeps the block helpers (itemsOfRange, Get_ElapsedTime_Notification, DateTimeToText). It now exports the shared `isInRange`. The unused export `osDateOf` became module-private in the state file (Updates_SingleList has its own copy).
6. The blocks that only this route uses stay in `pages/Notifications/components/`: Layout_MainPages_Upgrade, Notification_ListItem, SortSheet and MoreActionSheet (move-map step B item 2). I did not change any shared block (`components/filter/FilterOptionChoice` is only imported).
7. F17: no new code in the HomeFeed or Login first load. The raw first-load bytes are the same as the base (755.68 and 608.79 kB), and Login gzip is the same (186.97). HomeFeed gzip went from 245.59 to 245.63 kB. I compared all chunks with the content hashes replaced by a placeholder. Every chunk is byte-identical to the base except two: NotificationsPage, and one list in the entry. That list is the preload list of the Notifications route: the same 21 chunks in a different order (the legacy exception chunks are now imported by the hook, which is the last import). The new entry is 9 bytes smaller gzipped. The +0.04 kB comes from the new hash characters in the import names of the first-load chunks. Any change to a lazy page changes the entry hash and so these names.
8. I ran `npx prettier --write` (the project formatter) on 4 files that I wrote: the page, the hook, the hook test and the state test.
9. Left for the documenter:
   - `move-map.csv`, the row `src/screens/Notifications/index.tsx`: shape `page+hook`, note "hook: pages/Notifications/hooks/useNotifications.ts; the view cache keeps 3 variables (no useFlowState)".
   - `calls-by-domain.md`: the Notifications `api.ts` is deleted. The page's flows call `fetchNotificationDateRanges` and `fetchNotifications` of `api/notification` directly.
   - The CHANGELOG entry. pages/Notifications has no README.

## Questions for the user
none
