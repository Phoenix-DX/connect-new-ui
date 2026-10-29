# Fix group B: restore from the view cache (U19)

Areas: `app/src/pages/Menu/`, `app/src/pages/EmailTarget/`, `app/src/pages/OrbitLanding/`,
`app/src/pages/MilestoneDetail/`. The group uses the `useViewState` and `useWasRestoredFromCache` API of
`platform/navigation` without changes to it. Result: 2 findings fixed, 1 finding with no code change (React already
matches TST), 1 finding open (it conflicts with a recorded decision).

## App_Menu F1: Menu keeps no variable in the view cache

- TST evidence: `UBTConnect.App_Menu.Menu.mvc.js:877-904`. OnInitialize builds `MenuOptionList` again and has no
  `IsViewRestoredFromCache` check. `LocalCacheControl_UserInformation` keeps its restored value. Decision App_Menu Q2
  (a), user, 2026-10-27.
- Files changed:
  - `app/src/pages/Menu/hooks/menuState.ts:17-34`: new record `MenuUserInformation` (user, isFetched) and
    `NO_USER_INFORMATION`. `MenuState` extends the record.
  - `app/src/pages/Menu/hooks/menuState.ts:117-121`: `initialMenuState(saved)` builds `MenuOptionList` from
    Menu_GetList and takes the user record from `saved`.
  - `app/src/pages/Menu/hooks/useMenu.ts:40-55`: `useViewState('LocalCacheControl_UserInformation', ...)` keeps the
    user record. The reducer starts from it. `onUserInformation` writes the reducer state and the view state.
- What changed: a Back to Menu shows the user header at once (isFetched True). The rows start as loading rows again
  until CacheControl_UserInfo answers, as in TST.
- Tests: `app/src/pages/Menu/hooks/menuState.test.ts:46` (restored OnInitialize).
  `app/src/pages/Menu/hooks/useMenu.test.tsx:74-105` (Back to Menu keeps the record; a new visit starts empty). The
  other `useMenu` tests now render in a `MemoryRouter`, because `useViewState` reads the location.
- Proposed verdict: row App_Menu-006 `match`.

## Legacy_LDMEventsFlow F2: EmailTarget subject on a restored view

- TST evidence: `Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js:976-1000`. OnReady reads
  `WasCurrentViewRestoredFromCache`. When it is True, OnReady sets ShowCancelPopup False, Subject "", Message "" and
  IsChange False.
- Files changed: `app/src/pages/EmailTarget/hooks/useHouseholdEmail.ts:68-72`. The hook reads
  `useWasRestoredFromCache()`. On a restored view, Subject starts at "". Message starts at "" and IsChange starts at
  False on every visit. ShowCancelPopup has no React port, because the view of the block does not read it.
- What changed: the state starts with the result of the TST OnReady, so the first render of a restored view shows the
  empty subject. A new visit still shows InitialEmailSubject.
- Tests: `app/src/pages/EmailTarget/EmailTarget.test.tsx:174-190`. The test opens EmailTarget, goes to a next
  screen, goes back. The subject and the message are empty. The back arrow goes back at once (IsChange False).
- Proposed verdict: rows Legacy_LDMEventsFlow-035 and -094 `match`.

## Legacy_OrbitEventsFlow F4: OnReady on a restored view (OrbitLanding, AccommodationHost)

- TST evidence: `ScreenBlock_OrbitLanding.mvc.js:1668` and `ScreenBlock_AccommodationHost.mvc.js:2381`. When
  `WasCurrentViewRestoredFromCache` is True, OnReady ends. TST makes no call, also when the saved view has no data.
- React: `app/src/pages/OrbitLanding/hooks/useOrbitLanding.ts:105` and
  `app/src/pages/MilestoneDetail/hooks/useAccommodationHost.ts:147` end only when the saved state has the data.
  Otherwise they call again.
- Status: **open, no code change.** The report says "no recorded decision", but a decision exists.
  - Advisor decision W34 (2026-10-22, F40, `migration/refactor/auto-decisions-2026-10-22.md:121`) keeps the call
    again as an intended deviation. W34 covers about 20 hooks.
  - `app/docs/guides/page-template.md:94-101` documents the rule and names `useOrbitLanding`.
  - The report recommendation says: "If the port needs the re-fetch, record the decision". W34 records it.
- Question for the user: keep W34 (the rows of F4 become `differs` by decision W34), or reverse W34?
  - A reversal of W34 is not local to group B. About 20 hooks and the page template change together.
    For these two hooks, the change is: return at once when `restored` is True. Update the tests
    `useOrbitLanding.test.tsx:209` (F40) and `useAccommodationHost.test.tsx:241`.
  - Recommendation: keep W34 and record F4 as `differs` by decision W34. A change of only these two hooks makes them
    differ from the other hooks and from the guide.

## Legacy_OrbitEventsFlow F5: MilestoneDetail, GetGmpMilestoneHost error

- TST evidence:
  - `ScreenBlock_MilestoneWrapper.mvc.js:1135-1143`: the data action calls `_onAfterFetch_GetGmpMilestoneHost$Action`
    only in the `.then` of `callDataAction`.
  - `migration/runtime-sources/OutSystems.js`, `callServerDataSource`: a failed call sets the fetch status to Error
    and rejects. So OnAfterFetch does not run when the fetch fails.
  - `:1156-1202`: the UnknownError handler is in OnAfterFetch. It guards only the assignment
    `IsFetchingData = False`, which raises no UnknownError.
  - `:1254-1258`: OnReady has no handler, so the rejection goes to the flow handler. IsFetchingData stays True and
    the skeleton stays.
- React: `useFlowState` sends the rejection of OnReady to `raiseToFlowHandler`
  (`app/src/platform/navigation/flowState.ts:112`). The skeleton stays. The test
  `app/src/pages/MilestoneDetail/hooks/useMilestoneWrapper.test.tsx:163` ("sends a failure to the flow handler and
  keeps the skeleton") checks this. The rejection is not unhandled.
- Files changed: `app/src/pages/MilestoneDetail/hooks/useMilestoneWrapper.ts:29-33`, a comment only. It records the
  TST path of a failed fetch.
- What changed: no behavior change. The report fix ("catch, IsFetchingData False, re-raise") hides the skeleton and
  shows the "Event not found" layout from a notification. TST does not do that.
- Proposed verdict: the row of F5 `match`. The finding is a misread of the OnAfterFetch handler.

## Tests run

- `npx vitest run src/pages/Menu src/pages/EmailTarget src/pages/MilestoneDetail src/pages/OrbitLanding`: 19 files,
  164 tests, all pass.
- `npx eslint src/pages/Menu src/pages/EmailTarget src/pages/MilestoneDetail/hooks/useMilestoneWrapper.ts`: 0
  problems.
- `npm run typecheck`: 0 errors in the files of group B. The run fails on
  `src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx:142-150`. That file is a change of another group.
