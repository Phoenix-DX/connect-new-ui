# Item 8, step S2c: group A, the last hook (useMessageList): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-A.md`, section `pages/MessageList/hooks/useMessageList.ts`. MCP check of group A:
  `../review/item8-w23-errorpage.md` §5. The plan in `item8-S2a.md` ("Left") agrees with the inventory, and this step
  adds one own action (`updateMessageClear`, see D3).
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

- `pages/MessageList/hooks/useMessageList.ts` (code).
- `pages/MessageList/hooks/useMessageList.test.tsx` (new: the hook had no test file).

Not changed: `pages/MessageList/MessageList.test.tsx` (no assertion expects the old behaviour; it passes as it is),
the view components, the state files, platform files. No README in this folder. The hook had no "Decision W23" text.

## Tests (written first)

The new file has 16 tests. On the old hook, 13 failed and 3 passed (the 3 tests of live behaviour). One failure came
from a bad expected value in the test (the message type is `PLATFORM_MESSAGE_TYPE.info`, not `'info'`). It was
corrected before the hook change. After the change: 6 files, 50 tests pass in `src/pages/MessageList`.

| Group | Tests |
|---|---|
| After the unmount | R1 GetMessages of OnReady resolves (no SetUnreadNotificationsNumber, no raise); R1 GetMessages rejects (no raise); R1 OnParametersChanged during PullToRefresh (no PullToRefreshTriggered); R1 RefreshMessages(True) of a search (no ScrollToTop); R1 GetMessageInstanceById2 answers True and False (no NavigateTo_MessageDetail, no info message, no GetMessages refresh); R1 GetMessageInstanceById2 rejects (no raise); R2 + R3 Wrapper_MarkAllAsReadNotifications (RefreshMessages stops: no GetMessages, no SynchronizeNumberUnreadMessages); R2 failure of Wrapper_MarkAllAsReadNotifications (reaches the handler with the scope: `same` row); R2 + R3 MarkMessageAsRead (UpdateMessageRead stops: no decrement); R2 + R3 MarkMessageAsClear with IsRead False (UpdateMessageClear stops: no decrement); R1 load-more refresh of OnScrollEnding (the Promise settles without a rejection, no unread number) |
| Live | StrictMode: OnReady runs GetMessages once; a GetMessages failure reaches the handler with the scope; the own actions UpdateMessageRead and UpdateMessageClear decrement the counter (and IsEmptyMessage, HasUnreadMessages); a gone message shows the info message and refreshes GetMessages; Mark All as Read refreshes, then calls SynchronizeNumberUnreadMessages and sets IsShowLoading False |

The "no raise" checks use `raisedErrors()` (the spy calls without `IgnorableSystemException`), as in S1a D2.

## Behaviour changes (each `react-extra` row of the inventory)

| Flow | Row | Status |
|---|---|---|
| OnReady, PullToRefresh, RefreshMessages, filters, search, scroll | SetUnreadNotificationsNumber after GetMessages | Fixed: `flow.fetch(getMessages.refetch())` in `refreshGetMessages` (R1) |
| same | raiseToFlowHandler(result.error) after the unmount | Fixed: `flow.fetch` (R1). A live failure is still raised there, now with the scope |
| refreshMessages | ScrollToTop after GetMessages | Fixed: R1 (the refresh throws `ControllerDisposedException`) |
| OnParametersChanged | event PullToRefreshTriggered | Fixed: R1 stops the flow; the event uses `flow.events` (R3) |
| onClickGoToMessageDetail | event NavigateTo_MessageDetail | Fixed: `flow.fetch(fetchMessageInstanceExists(…))` (R1); the event uses `flow.events` (R3) |
| onClickGoToMessageDetail | info message "no longer available" | Fixed: R1 |
| onClickGoToMessageDetail | GetMessages refresh | Fixed: R1 |
| onClickGoToMessageDetail | raiseToFlowHandler on failure | Fixed: R1; the local try/catch is gone, `runAwaited` raises with the scope |
| onClickMarkAllAsRead | RefreshMessages | Fixed: `refreshMessages` is `flow.own` (R3, MessageList.js:1661) |
| onClickMarkAllAsRead | SynchronizeNumberUnreadMessages | Fixed: not reached (R3 stops the flow before it) |
| swipeEventsRead | DecrementReadMessagesCounter | Fixed: `updateMessageRead` is `flow.own` (R3, MessageList.js:1952) |
| swipeEventsClear | DecrementReadMessagesCounter if not read | Fixed: new own action `updateMessageClear(isRead)` with `flow.own` (R3, MessageList.js:1910) |

`same` rows (R2 failures of the three server actions): they still reach the flow handler, now with the flow scope
(`flow.run` or `runAwaited`). Every `void …()` of a widget handler that starts a flow is now `flow.run`. Deleted local
copies: `readyRef` (the OnReady once-guard: useFlowState runs OnReady once, item 8 §2.3) and the `events` ref (the
events go through `flow.events`).

## Differences from the design, with evidence

| # | Design or brief text | Built, with evidence |
|---|---|---|
| D1 | §2.5: a widget handler that starts a flow uses `flow.run` | `onGoToMessageDetail`, `onSwipeEventsRead`, `onSwipeEventsClear` and `onScrollEnding` must return a Promise (`MessageListView.tsx:52-60`): OSListItem keeps the class "active" until it settles (`OSListItem.tsx:11-22`) and OSList starts no new OnScrollEnding before (`OSList.tsx:136-143`). A local `runAwaited` keeps the Promise and sends an error to `raiseToFlowHandler(error, flow)`, as `useNotes` `onLoadMore` does (`useNotes.ts:175-180`). Before, `onScrollEnding` had no catch at all |
| D2 | — | A live GetMessages failure keeps today's behaviour: `refreshGetMessages` raises it and returns false; callers that ignore the result go on (see Q1) |
| D3 | S2a plan: three own actions | Four own actions: also `updateMessageClear`. The hook had the decrement inline; the inventory names `_updateMessageClear$Action` with its alive check (MessageList.js:1910, decrement inside) |
| D4 | §2.5: delete the local once-guards | `initializedRef` stays: it runs FocusCursor of a restored view once in the render (OnInitialize), which useFlowState does not cover |

## Questions

1. Q1 (not checked on TST, no access in this step): after a live GetMessages failure, OnScrollEnding (isLoadMore False),
   OnHandle_SearchHistorySelectedItem and OnParametersChanged (PullToRefreshTriggered) go on, because
   `refreshGetMessages` raises and returns false and these callers ignore the result. If TST stops the flow at the
   failure, these steps do not run there. Options: a) in S5 or a separate item, check MessageList.js (MCP and compiled
   TST), then make `refreshGetMessages` throw so the flow stops; b) keep. Recommendation: a.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (whole project, with the parallel agent's files at that time) |
| `npx eslint <2 changed files>` | pass, 0 problems (after one fix in the test: `expect.anything()` for the scope argument, as in `useBrowseCountries.test.tsx`) |
| `npx prettier --check <2 changed files>` | pass |
| `npx vitest run src/pages/MessageList` | 6 files, 50 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used about 37 tool calls (budget 60).

## Orchestrator checks (2026-10-28, end of group A)

- knip: 6 exported state types without users lost their `export`; 1 stale baseline row deleted (`MessageListEvents`).
  1086 rows, 0 new.
- `npm run ci` passed: 696 files, 4548 tests, no "Errors" line, build OK.
- Parity sweep of the 64 routes on port 5174 (end of group A): 64 of 64 clean.
- Open questions go to the user with the group report (S2a Q1, S2b Q1, S2c Q1).
