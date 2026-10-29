# Item 8, step S5c: cleanup, part 3 (MessageDetail, MessageList, ContactUsDetails, MyTimelineFilterButton): build note (2026-10-28)

- Design: `../review/item8-solution.md` §2.5, §9 (S2a Q1 (a), S2c Q1 (a), S5a Q1 (a)). Facts: `../review/item8-w23-errorpage.md`
  §6. Platform: `item8-S5a.md` (`flow.run` catches a synchronous throw, `flow.runAwaited`, `onReady(flow, restored)`).
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No full `npx vitest run`, no `npm run ci`, no parity (another agent works in the same tree).

## Files

- `src/pages/MessageDetail/hooks/useMessageDetail.ts`, `useMessageDetail.test.tsx`
- `src/pages/MessageDetail/components/MessageDetailView.tsx` (the ViewOrbitEvent click, the prop type)
- `src/pages/MessageList/hooks/useMessageList.ts`, `useMessageList.test.tsx`
- `src/pages/ContactUsDetails/hooks/useContactUsDetails.ts`, `useContactUsDetails.test.tsx`
- `src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts`, `useMyTimelineFilterButton.test.tsx`
- `build/check-flow-fetch.mjs`: the two "open: item8-S5a.md Q1" rows and their comment line are deleted.

No platform file, no README and no other code file changed.

## Tests (written first)

The new and changed tests ran on the old code first: 11 failed, plus 1 unhandled rejection (the failed
Get_OrbitNotificationParameters of S2a Q1). After the change: 27 files, 281 tests passed in the four page folders.

- MessageDetail: "a failed Get_OrbitNotificationParameters goes to the flow handler once, with the flow scope";
  "another failure (StoreAdaptiveCardResponses, not a CommunicationException) goes to the flow handler once, with the
  flow scope; the promise resolves"; the CommunicationException test also checks that nothing is raised. Changed: the
  Orbit click tests settle instead of awaiting (helper `viewOrbitEvent`); "card submit after the unmount" now expects a
  resolved promise and one raise of the ControllerDisposedException with the scope (dropped by the handler).
- MessageList: a failed GetMessages stops OnScrollEnding before `isLoadMore = False`; stops
  OnHandle_SearchHistorySelectedItem (no ScrollToTop); stops OnParametersChanged before PullToRefreshTriggered; keeps
  the filters open in OnClick_ApplyFilters. Each test checks exactly one raise, with the scope. The OnReady failure
  test now checks one raise too.
- ContactUsDetails: unmount while DataAction_GetLocalityTimezone is pending (no reducer call, no raise); signed out,
  unmount while DataAction_GetCountriesNames is pending and then fails (no reducer call, no raise); a failed countries
  call raises with the scope; the time zone failure test now expects the scope. The reducer is a spy around the real one.
- MyTimelineFilterButton: unmount while GetEventLocalitiesForFilter is pending (no audit, no raise, nothing after the
  refresh runs: `getCurrentTimeInMill` is called once). The failure test now expects the scope. All tests render in a
  `MemoryRouter` (`useFlowScope` reads the history entry).

## Behaviour changes per hook

- MessageDetail (S2a Q1 (a)): `onClickViewOrbitEvent` returns `(id) => flow.run(…)`; a failed
  Get_OrbitNotificationParameters or Get_OrbitHostSurveyNotificationParameters now reaches the flow handler with the
  scope (before: an unhandled rejection). `adaptiveCardViewerOnExecuteAction` had a related gap: its error went to
  `raiseToFlowHandler(error)` without a scope in `NotificationDetailBlock`. It now uses `flow.runAwaited`, so the error
  goes to the handler with the scope (R6: no error page from a screen that is out of context), and the block still
  awaits the flow. `MessageDetailView.tsx:94` calls the handler in a block body; the prop type is `=> void`.
- MessageList (S2c Q1 (a)): `refreshGetMessages` throws the refetch error; `refreshMessages` returns `void`. The
  callers stop at the failed refresh, and the single raise comes from the top of the flow (`useFlowState`, `flow.run`,
  `flow.runAwaited`): no double raise. OnClick_ApplyFilters, OnClick_ResetFilters, OnClick_MarkAllAsRead and
  OnClick_GoToMessageDetail keep their visible behaviour (they stopped at `return` before).
- ContactUsDetails: `useFlowScope()`; OnReady runs `flow.run` + `flow.fetch(fetchCountryNames(…))`; the user information
  result runs `flow.run` + `flow.fetch(fetchLocalityTimezone(…))`. After the unmount: no state write, no raise. The
  once-guard of OnReady stays (no `useFlowState`: the screen has no view cache record).
- MyTimelineFilterButton: `useFlowScope()`; GetEventLocalitiesData runs in `flow.run` with
  `flow.fetch(fetchEventFilterLocalities(…))`. After the unmount: no SelectedFilters write, no
  `RequestAPI_EventLocalities` audit, no raise (as on TST, R1).

## Differences from the design (with evidence)

1. MessageList, a refetch result that is neither success nor error: the old code raised `result.error` (`null`); the
   new code goes on without OnAfterFetch_GetMessages. Reason: `throw result.error` with the type `Error | null` fails
   the lint rule `only-throw-error`. No case is known: react-query keeps the data of a cancelled refetch (status
   success) and shares the in-flight fetch when there is no data.
2. MessageList, OnClick_CloseSearchAndFilter: a failed refresh in OnClickSearchClear now also skips its `FocusCursor`
   (the error leaves both actions, as an OutSystems client action with no exception handler does). §6 checks only
   RefreshMessages, OnScrollEnding, OnHandle_SearchHistorySelectedItem and OnParametersChanged on TST. See Q1.
3. `NotificationDetailBlock.tsx` keeps its own catch (Handle Error CommunicationException of the block action,
   mvc.js:671-726). The MessageDetail handler never rejects now, so that catch is not reached from this page.

## Questions

Q1. OnClick_CloseSearchAndFilter → OnClickSearchClear → OnHandle_SearchHistorySelectedItem: when GetMessages fails,
does TST skip the FocusCursor at the end of OnClick_CloseSearchAndFilter? Options: (a) check the TST dump of
ScreenBlock_MessageList (OnClick_CloseSearchAndFilter, OnClickSearchClear: no catch → skip, as built); (b) accept it
without a check (the general OutSystems rule). Recommendation: (a), one grep in the dump by the orchestrator.

## Checks (from `app/`)

- `npx tsc --noEmit`: 0 errors.
- `npx eslint` on the 10 changed files: 0 problems (after fixes: typed matcher constants, `.resolves`, `isError`).
- `npx prettier --check` (and `--write`): the 10 files unchanged.
- `npx vitest run src/pages/MessageDetail src/pages/MessageList src/pages/ContactUsDetails src/pages/LDM_MyEvents_V2`:
  27 files, 281 tests passed, no "Errors" line.
- `npm run flow-fetch`: ok (33 awaits on the allow-list, 18 rows; before: 35 and 20).
- `npm run arch`: no dependency violations (144 known, ignored).
- Not run (brief): full vitest, `npm run unused`, `npm run ci`, parity. Parity scope: MessageDetail, MessageList,
  ContactUsDetails, LDM_MyEvents_V2.
- Tool calls: about 76 (over the budget of 70; parallel edits count one each).

## Orchestrator checks (2026-10-28, end of item 8)

- S5b Q1: closed by the orchestrator. `onClickOpenDocument` is in `pages/MilestoneDetail/hooks/useAccommodationHost.ts`;
  its synchronous catch now passes the scope (`raiseToFlowHandler(e, flow)`), the S4b D6 item.
- S5c Q1: closed by the TST code. OnClick_CloseSearchAndFilter runs OnClickSearchClear, then
  OnHandle_SearchHistorySelectedItem and RefreshMessages; their catches throw again, so the `.then` with FocusCursor
  does not run after a failed GetMessages (ScreenBlock_MessageList dump :2380-2452, :2139-2173). React does the same.
- `npm run unused` first (1 type export removed: `ConnectShareAction`), then `npm run ci`: 697 files, 4624 tests, no
  "Errors" line, `flow-fetch` 33 awaits on 18 allow rows, build OK.
- The one full parity sweep of item 8 (user rule), 64 routes on port 5174: 64 of 64 clean.
