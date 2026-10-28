# Item 8, step S5b: cleanup, part 2 (the group decisions S1a Q1/Q2, S2b Q1, S3a Q1, S4b D6): build note (2026-10-28)

- Design: `../review/item8-solution.md` §2.5 (author rules), §9 (user decisions of 2026-10-28: S1a Q1 (a), S1a Q2
  (a), S2b Q1 (a), S3a Q1 (a); open point 5 (a)). Earlier steps: `item8-S1a.md`, `item8-S2b.md`, `item8-S3a.md`,
  `item8-S4b.md` (D6), `item8-S5a.md` (platform: `onReady(flow, restored)`, `flow.run` catches a synchronous throw).
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep, no full test run, no dev server (the orchestrator runs them; another agent
  works in the same tree).

## Files

Hooks (6), and their tests (6). No platform file, no README changed (no folder README cites the deleted copies).

- `src/pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts`, `useHouseholdCarousel.test.tsx`
- `src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts`, `useHouseholdDetails.test.tsx`
- `src/pages/Household_Relations/hooks/useHouseholdRelations.ts`, `useHouseholdRelations.test.tsx`
- `src/pages/ConnectShare/hooks/useConnectShare.ts`, `useConnectShare.test.tsx`
- `src/pages/AssembleDetail/hooks/useAttendeeSubdivision.ts`, `useAttendeeSubdivision.test.tsx`
- `src/pages/ViewDocuments/hooks/useViewDocuments.ts`, `useViewDocuments.test.tsx`

## Tests (written first)

The new and changed tests ran on the old code first: 8 failed, and the run had 3 "Unhandled Rejection" errors (the
`void` sites of HouseholdCarousel and AttendeeSubdivision).

- useHouseholdCarousel (new): "R6: a failed swipe action goes to the flow handler with the flow scope (flow.run) and
  writes no variable". The test file now mocks `raiseToFlowHandler`.
- useHouseholdDetails (new): "R3: unmount while GetUserInformation_Wrapper is pending: the Refreshes node (flow.own)
  stops, no data action, no state write". The raise spy gets one `ControllerDisposedException` with the flow scope;
  `raisedErrors()` (without the ignorable ones) is empty.
- useHouseholdRelations (changed): the unmount test of GetUserInformation_Wrapper now names
  Action_Refresh_Get_MemberDetails (flow.own) and checks the same two points as above.
- useConnectShare (changed): "a failed audit goes to the flow handler with the flow scope" (it expected the call
  without a scope). New: "a failed upgrade popup of the alert timer goes to the flow handler with the flow scope
  (flow.run)".
- useAttendeeSubdivision (new, 2 cases): "the household click / share to Connect: a MaybeDisplaySubscriptionPopup
  failure goes to the flow handler with the flow scope (TST rethrows it, :770-773)". No anchor, no event.
- useViewDocuments (changed): "an UnknownError ... is raised again with the flow scope; another error keeps it": both
  raises carry the scope.

A scope check uses a typed predicate (`alive` is a function), not `expect.objectContaining({ alive:
expect.any(Function) })`: eslint `no-unsafe-assignment` fails on the `any` of `expect.any`.

## Behaviour changes per hook

| Hook | Decision | Change | Behaviour |
|---|---|---|---|
| useHouseholdCarousel | S1a Q1 (a) | The local `unmounted` ref and its layout effect are deleted: `useFlowScope()`, `if (!flow.alive()) return` after the module action. `onEventMoved` runs `flow.run(() => handlerEventMoved(i))` | Inventory row `same` kept: Directory_Updates_CarouselSwipeAction (R2) still marks the update read and lowers the count after leaving; the screen variables are not written. New: a failure of the swipe action goes to the flow handler with the scope. Before: an unhandled rejection, no message |
| useHouseholdDetails | S1a Q2 (a) | `refreshes` (the "Refreshes" node) is `flow.own(...)`. OnInitialize has no `if (!isAlive()) return` after GetUserInformation_Wrapper | After the unmount: the variable writes are no-ops (`dispatch`), `refreshes` throws `ControllerDisposedException` (ensureControllerAlive of Refresh_GetHouseholdDetail and _Coordinates, HouseholdDetails_Block.js:2326+, 2512+, called at :2677-2680, 2733), the flow handler ignores it. Same visible result as before: no data action, no state write. The `isAlive` checks in `refreshHousehold` and `refreshCoordinates` stay (open point 5 (a)) |
| useHouseholdRelations | S1a Q2 (a) | New own action `actionRefreshGetMemberDetails = flow.own(...)`: Actions_DefineLoading(True), then the refresh of Get_MemberDetails. OnReady has no `flow.alive()` check | After the unmount the action throws `ControllerDisposedException` (ensureControllerAlive, HouseholdRelations_Block.js:2094, OnReady :2136-2160), ignored by the handler. Same visible result: no call, no state write |
| useConnectShare | S2b Q1 (a) | Deleted: `initializeStarted`, `newestRun`, `write`, the `.catch(raiseToFlowHandler)` of OnInitialize, the import of `raiseToFlowHandler` and of the type `ConnectShareAction`. OnReady is `async (scope, restored) => { try { await onInitialize(restored) } finally { if (scope.alive()) setInitialized(true) } }`. The popup of the alert timer runs with `flow.run(showUpgradePopUp)` | Inventory rows `same` (2): unchanged (the module action runs to its end after the unmount, no state write, no timer). The once-guard in StrictMode comes from useFlowState (test "runs OnInitialize and OnReady once in StrictMode" passes). An OnInitialize exception and a popup failure now carry the flow scope (R6: a system exception of a left screen shows no error page) |
| useAttendeeSubdivision | S3a Q1 (a) | `onClickHousehold` and `onClickShareConnect` use `flow.run` instead of `void` | A failure of MaybeDisplaySubscriptionPopup reaches the flow handler with the scope, as on TST (the client action rethrows, AssembleEventDetail_AttendeeSubdivision.js:770-773). Before: an unhandled rejection. The comment "send no failure to the flow handler (as the old port)" is deleted |
| useViewDocuments | S4b D6 | `onDocumentClick`: the synchronous catch calls `raiseToFlowHandler(e, flow)` | The raise carries the scope (R6). No visible change while the screen shows |

## Differences from the design (with evidence)

1. Task 5 names `onClickOpenDocument` and `onDocumentClick`. `onClickOpenDocument` is not in `useViewDocuments.ts`:
   it is in `src/pages/MilestoneDetail/hooks/useAccommodationHost.ts:155`, with `raiseToFlowHandler(e)` at `:170`
   (S4b D6: "onClickOpenDocument (AccommodationHost)"). That file is not on this step's file list, so it is not
   changed. See Q1.
2. useHouseholdDetails keeps `onReady: (scope, restored) => onInitialize(scope.alive, restored)`: the refresh helpers
   take an `IsAlive` for the superseded OnParametersChanged run (open point 5 (a)), and OnInitialize gives them
   `scope.alive`. The example in `docs/guides/page-template.md` stays correct.
3. ConnectShare order: `setInitialized(true)` now runs in the `finally` of OnReady, before useFlowState sends the
   rejection to the flow handler. Before, the raise came first (`.catch(...).finally(...)`). Both run in the same
   microtask chain, before the next render: no visible change.
4. ConnectShare popup: the 1 s timer callback is not a widget event, but it starts a flow
   (DelayedShowFreeSubscriptionAlertJS calls the screen action Action_SetShowFreeSubscriptionAlert, ConnectShare.js:366).
   `flow.run` gives its failure the scope; the timer runs only while the screen is mounted (it is cleared on unmount).
5. The R3 unmount tests see the `ControllerDisposedException` in the raise spy: the real handler drops it
   (`legacy/os/exceptions.ts:93`, `IgnorableSystemException`), as in S1a D2.

## Questions

Q1. `onClickOpenDocument` of AccommodationHost (`src/pages/MilestoneDetail/hooks/useAccommodationHost.ts:170`) still
calls `raiseToFlowHandler(e)` without the scope (S4b D6, the same case as ViewDocuments). Options: (a) a short
follow-up passes `flow` there and changes its test (`useAccommodationHost.test.tsx`), as in this step; (b) keep it
and record the difference. Recommendation: (a): one line and one test assertion, the same rule as ViewDocuments.

## Checks (from `app/`)

- `npx tsc --noEmit`: 0 errors. (A first run during the step showed 3 errors TS1345 in
  `src/pages/MessageList/hooks/useMessageList.ts`, a file of the other agent; the next run had 0.)
- `npx eslint` on the 12 changed files: 0 problems (11 `no-unsafe-assignment` in the first test draft fixed with the
  typed predicate).
- `npx prettier --check` on the 12 changed files: clean.
- `npx vitest run src/pages/HouseholdCarousel src/containers/HouseholdDetails src/pages/Household_Relations
  src/pages/ConnectShare src/pages/AssembleDetail src/pages/ViewDocuments`: 28 files, 224 tests passed, no "Errors"
  line.
- `npm run arch`: no dependency violations (144 known, ignored).
- Not run (brief): full `npx vitest run`, `npm run ci`, `npm run unused`, parity.

## Orchestrator checks (2026-10-28, end of item 8)

- S5b Q1: closed by the orchestrator. `onClickOpenDocument` is in `pages/MilestoneDetail/hooks/useAccommodationHost.ts`;
  its synchronous catch now passes the scope (`raiseToFlowHandler(e, flow)`), the S4b D6 item.
- S5c Q1: closed by the TST code. OnClick_CloseSearchAndFilter runs OnClickSearchClear, then
  OnHandle_SearchHistorySelectedItem and RefreshMessages; their catches throw again, so the `.then` with FocusCursor
  does not run after a failed GetMessages (ScreenBlock_MessageList dump :2380-2452, :2139-2173). React does the same.
- `npm run unused` first (1 type export removed: `ConnectShareAction`), then `npm run ci`: 697 files, 4624 tests, no
  "Errors" line, `flow-fetch` 33 awaits on 18 allow rows, build OK.
- The one full parity sweep of item 8 (user rule), 64 routes on port 5174: 64 of 64 clean.
