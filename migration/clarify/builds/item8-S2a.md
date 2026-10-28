# Item 8, step S2a: group A, first part (4 of 5 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-A.md`. MCP check of group A: `../review/item8-w23-errorpage.md` §5.
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).
- **Not done: `pages/MessageList/hooks/useMessageList.ts`** (budget of 70 tool calls reached). See "Left".

## Files

Hooks (code):

- `pages/MessageDetail/hooks/useMessageDetail.ts`
- `pages/MessageDetail/hooks/useShareObjectDetail.ts`
- `pages/Notifications/hooks/useNotifications.ts`
- `pages/Notes/hooks/useNotes.ts`

Tests: `pages/MessageDetail/hooks/useShareObjectDetail.test.tsx` (new: the hook had no test file), and the `.test.tsx`
file next to each of the three other hooks.

Not changed: platform files, view components (`MessageDetailView.tsx`, `NotificationDetailBlock.tsx`), README files
(no W23 text in the README files of these folders).

## Tests

The tests were written in the same pass as each hook change (not run red first, to keep the budget). Each new test
fails on the W23 code by its assertion (for example a toast, a counter, a call or a user exception after the unmount).

| Hook | New or rewritten tests |
|---|---|
| useMessageDetail | R1 resolve after the unmount (no toast, no `replaceOnUpcomingNavigation`, no event, no state write); R1 with an unread message and a signed-out user (no counter, no Wrapper_NotificationOpened, no NavigateTo_Login); R1 failure (no raise); R2 then R3: Wrapper_NotificationOpened answers IsRetracted after the unmount (MessageRetractedFlow stops); R1 template parameters after the unmount (no Cache_UserInfo_Get); R2 then R3: Get_OrbitNotificationParameters after the unmount (no NavigateTo_OrbitMilestone); card submit: R1 refresh after the unmount (no "Thanks", the flow ends with an ignorable exception); card submit: StoreAdaptiveCardResponses fails after the unmount (the connection message shows, R5) |
| useShareObjectDetail (new file) | live GetShare (audit, then the share); R1 resolve after the unmount (no AuditShareViewEvent); R1 failure (no raise) |
| useNotifications | the two W23 tests rewritten: R1 GetDateRanges after the unmount (no FetchNotifications); R1 FetchNotifications after the unmount (no bottom bar count); R1 failure of FetchNotifications (no BubbleGenericException); 2 assertions expect the scope argument |
| useNotes | the two W23 tests rewritten: R3 GetNotes_Pills after the unmount (Refresh_GetNotes does not start); R1 GetNotes failure (no raise); new R1 GetNotes answer after the unmount (no second GetNotes_Pills); 1 assertion expects the scope argument |

The "no raise" checks use `raisedErrors()` (the spy calls without `IgnorableSystemException`), as in S1a D2.

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useMessageDetail | OnReady: toast "no access", leaveToMessageList, NavigateTo_Login, counters, Wrapper_NotificationOpened, the image, template and user reads | Fixed: `flow.fetch(fetchMessageInstance)` (R1); OnAfterFetch does not start |
| useMessageDetail | prepareMessage: retracted → leaveToMessageList | Fixed: `leaveToMessageList` is `flow.own` (R3, MessageDetail.js:1388); its event goes through `flow.events` |
| useMessageDetail | prepareMessage: after GetMessageTemplateParameters | Fixed: `flow.fetch` (R1) |
| useMessageDetail | onClickViewOrbitEvent: NavigateTo_OrbitMilestone / OrbitEvent / OrbitHostSurvey | Fixed: `flow.events` (R3, MessageDetailScreen.js:769, :827) |
| useMessageDetail | card submit: OnAfterFetch and "Thanks" after the refresh | Fixed: `flow.fetch` on the refresh (R1) |
| useMessageDetail | card submit: CommunicationException of the refresh | Fixed: after the unmount the refresh throws `ControllerDisposedException`; the catch passes it on, `NotificationDetailBlock` sends it to the flow handler, which drops it |
| useShareObjectDetail | AuditShareViewEvent after GetShare | Fixed: `flow.fetch` (R1). `isAlive` after the audit stays (superseded OnParametersChanged run, open point 5 (a)) |
| useNotifications | RefreshBottomBarCount after FetchNotifications | Fixed: `flow.fetch` (R1) |
| useNotifications | raise / BubbleGenericException after the unmount | Fixed: `flow.fetch`; `ControllerDisposedException` is a system exception, so `bubbleGenericException` passes it on unchanged; `flow.run` gives the scope |
| useNotifications | RefreshNotifications after GetDateRanges | Fixed: `flow.fetch` (R1) |
| useNotes | OnReady: Refresh_GetNotes after GetNotes_Pills | Fixed: `refreshGetNotes` is `flow.own` (R3, Notes.js:1076) |
| useNotes | ResetPillsVallues after GetNotes | Fixed: `flow.fetch` (R1) |
| useNotes | raise after the unmount (`run`, `onLoadMore`) | Fixed: `flow.fetch`; `flow.run`; `onLoadMore` passes the scope |

`same` rows: unchanged (Cache_SignedImageURL_Get, Cache_UserInfo_Get, the connection message of a failed server action).

Deleted local copies: `readyStarted`, `newestReadyRun`, `write`, `isAlive` (useMessageDetail); `initializeStarted`,
`mounted`, `afterUnmount`, `m()`, `set`, `run` (useNotes: `dispatch`, `latest.current` and `flow.run` instead);
`unmounted` (useNotifications: `useFlowScope()` in `useNotificationsState`, `dispatch` is a no-op after the unmount).
Every "Decision W23" comment in these files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | §2.5: delete the local `readyStarted` | useNotes keeps `readyStarted` of its OnReady effect: it is not a copy of the useFlowState guard (OnReady runs after OnInitialize ends, on `state.isInitialized`) |
| D2 | §2.5: delete the local copies | useNotifications keeps its own reducer, `latest` and `started` (it has no `useFlowState`: the view cache keeps three variables only). Its `dispatch` now returns at once after the unmount, so `latest` no longer changes after the unmount (W23 kept it changing for the next calls; R1 stops those calls now) |
| D3 | §2.5: a widget handler that starts a flow uses `flow.run` | useMessageDetail returns `onClickViewOrbitEvent` and `adaptiveCardViewerOnExecuteAction` as Promises (the view and `NotificationDetailBlock` own the catch). Not changed: the change needs view files (not in my list). See Q1 |

## Questions

1. Q1: `MessageDetailView.tsx:94` calls `void onClickViewOrbitEvent?.(target)`: a failed Get_OrbitNotificationParameters
   is an unhandled rejection (no flow handler). Before item 8 too. Options: a) in S5, the hook returns
   `(id) => flow.run(() => …)` and the tests settle instead of awaiting; b) keep it. Recommendation: a.

## Left

- `pages/MessageList/hooks/useMessageList.ts` (inventory: 12 `react-extra` rows): not started. It has no hook test
  file (only `MessageList.test.tsx` at page level), so it needs a new test file as useHouseholdDetails did in S1a.
  Work: `flow.fetch` on `getMessages.refetch` and `fetchMessageInstanceExists` (R1); `refreshMessages`,
  `updateMessageRead`, `updateMessageClear` as `flow.own` (R3) after the R2 calls `markAllNotificationsAsRead`,
  `markMessageAsRead`, `markMessageAsClear`; `flow.events` for PullToRefreshTriggered and NavigateTo_MessageDetail;
  `flow.run` instead of `.catch(raiseToFlowHandler)`.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (whole project, with the parallel agent's files at that time) |
| `npx eslint <8 changed files>` | pass, 0 problems |
| `npx prettier --check <8 changed files>` | pass (no change by `--write`) |
| `npx vitest run src/pages/MessageDetail src/pages/Notifications src/pages/Notes src/pages/MessageList` | 21 files, 184 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used 68 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of group A)

- knip: 6 exported state types without users lost their `export`; 1 stale baseline row deleted (`MessageListEvents`).
  1086 rows, 0 new.
- `npm run ci` passed: 696 files, 4548 tests, no "Errors" line, build OK.
- Parity sweep of the 64 routes on port 5174 (end of group A): 64 of 64 clean.
- Open questions go to the user with the group report (S2a Q1, S2b Q1, S2c Q1).
