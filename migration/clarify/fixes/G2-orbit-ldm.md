# Fix note: group G2 (Orbit and LDM details)

Minor findings wave of 2026-10-27. Brief: `migration/clarify/FIX.md`. No commit. Six findings are fixed. One finding
(Legacy_OrbitEventsFlow F6) needs no code change, because React already does what TST does.

## 1. Legacy_OrbitAdminFlow F2: "Failed to deserialize JSON" check ignores case

- TST evidence: `ScreenBlock_AdminEventDetail.mvc.js:1150`. The AllExceptions handler of OnHandle_ScanCode calls
  `Index(ExceptionMessage, "Failed to deserialize JSON", 0, False, True)`. The last argument is IgnoreCase True.
- Files changed:
  - `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts:75`: new helper `containsIgnoreCase`.
  - `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts:175`: the check uses `containsIgnoreCase`. Before,
    it used `message.includes(...)`, which is case-sensitive.
  - Tests: `adminEventDetailActions.test.ts` (helper) and `useAdminEventDetail.test.tsx` (a lower-case message from
    the member call shows the OrbitErrorMessage popup and goes to no flow handler).
- Tests: `npx vitest run src/pages/OrbitAdminEventDetail` (pass).
- Proposed verdict: `match` for Legacy_OrbitAdminFlow-075.

## 2. Legacy_OrbitAdminFlow F3: AdminMemberId from TextToInteger

- TST evidence: `ScreenBlock_AdminEventDetail.mvc.js:1018`.
  `AdminMemberId = IntegerToLongInteger(TextToInteger(AppManager_GetCachedUserInfo.MemberId))`. Runtime
  (`migration/runtime-sources/OutSystems.js`): TextToInteger returns 0 when the text does not match the integer
  format `^[-]?[0-9]+$`, or when the value is outside -2147483648 to 2147483647. IntegerToLongInteger keeps the value.
- Files changed:
  - `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts:67`: new helper `textToIntegerToLongInteger`.
    This helper is local to the page because `app/src/lib/` has no shared TextToInteger, and `lib/` is outside group G2.
  - `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts:139`: `ScannerAdminInfo.MemberId` uses the new
    helper instead of `textToLongInteger`.
  - Test: `adminEventDetailActions.test.ts`. An id in the Integer range is kept. An id outside the range gives 0. A text
    that is not an integer gives 0.
- Note: the runtime format also accepts the group separator of the locale (`[0-9]{1,3}(,[0-9]{3})*`). The helper
  does not accept it. A member id never has a group separator.
- Tests: `npx vitest run src/pages/OrbitAdminEventDetail` (pass).
- Proposed verdict: `match` for Legacy_OrbitAdminFlow-070.

## 3. Legacy_OrbitEventsFlow F6: GetTextAreaLineHeight width (no change)

- TST evidence: `ScreenBlock_ContactForm.mvc.js:1577-1584`. The JavaScript node GetTextAreaLineHeight is
  `var bD = document.querySelector("body"); ... var inputWidth = bD.clientWidth - 20;`. The variable `bD` is the
  document body, not the subject container.
- React: `app/src/pages/EmailContact/actions.ts:19-20` reads `document.querySelector('body')` and
  `body.clientWidth - 20`, the same as TST.
- Files changed: none.
- Proposed verdict: `match` for Legacy_OrbitEventsFlow-B027. The finding note misread the variable `bD` as the
  container. The reviewer must close finding F6.

## 4. Legacy_OrbitEventsFlow F8: pointer cursor of the booklet row cells

- TST evidence: `EventBooklet_MembersItem.mvc.js` view. The name Container has OnClick Click_Member and the host
  Container has OnClick Click_Host. `OutSystemsReactWidgets.js:1`: a Container with an onClick gets the inline style
  `cursor: pointer`.
- Files changed:
  - `app/src/pages/EventBooklet/components/EventBooklet_MembersItem.tsx:45, 70`: `style={{ cursor: 'pointer' }}` on
    the name cell and the host cell. The same pattern is in `CircleButton.tsx:49` and `Popup_OrbitLanding_Filters.tsx:92`.
  - `app/src/pages/EventBooklet/components/EventBooklet_MembersItem.test.tsx` (new): the style is on the two cells and
    not on the days cell. A click raises Click_Member and Click_Host.
- Tests: `npx vitest run src/pages/EventBooklet` (pass).
- Proposed verdict: `match` for Legacy_OrbitEventsFlow-K028 and Legacy_OrbitEventsFlow-J017.

## 5. Legacy_LDMEventsFlow_V2 F3: OnHandle_SwipeUp on the empty timeline

- TST evidence:
  - `MyTimeline_V2.mvc.js:651-690`: next to the ErrorScreen ("LDMs events not available."), the block
    `OutSystemsUI.Utilities.SwipeEvents` has WidgetId = the ErrorScreen id. Its SwipeUp runs SwipeEventSwipeUp
    (`:738-760`), which triggers the event EventsSwipeUp.
  - `OutSystemsUI_2_23.Utilities.SwipeEvents.mvc.js`: the view renders TouchEvents on WidgetId. OnGestureMove calls
    `Evt.preventDefault()` (`:417-421`). OnGestureEnd (`:263-340`) detects a swipe when an offset is more than
    Threshold 10 and a speed is more than Velocity 0.3. If |OffsetX| > |OffsetY|, the swipe is horizontal, else vertical.
  - `ScreenBlock_MyEvents_V2.mvc.js:2335-2368`: OnHandle_SwipeUp runs IncrementMyTimelineDates, then Refresh Query
    GetEventsForMyTimeline. It does not set IsFetchingMyTimeline, writes no audit event and has no exception handler.
- Files changed:
  - `app/src/pages/LDM_MyEvents_V2/components/SwipeEvents.tsx` (new): a local copy of the SwipeEvents block. It renders
    the `Utilities.SwipeEvents` block with the shared `TouchEvents` block in it (`components/ui/TouchEvents`).
    `swipeDirection` is OnGestureEnd. The only user of the block is MyTimeline_V2. A shared copy in `components/ui`
    is outside group G2.
  - `app/src/pages/LDM_MyEvents_V2/components/MyTimeline_V2.tsx:144`: SwipeEvents (`$b7`) after the ErrorScreen, with
    WidgetId `<scope>-ErrorScreen`. New prop `onEventsSwipeUp`.
  - `app/src/pages/LDM_MyEvents_V2/components/LdmMyEventsView.tsx:105`: `onEventsSwipeUp={onSwipeUp}`.
  - `app/src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts:120, 164, 182`: `refreshGetEventsForMyTimeline` (the refresh
    and OnAfterFetch, shared with GetMyTimelineData) and `onHandleSwipeUp` (the older window, then the refresh). An
    error goes to the flow handler without a change.
  - Tests: `SwipeEvents.test.tsx` (new: OnGestureEnd rules, the block markup, a swipe up raises SwipeUp, the move event
    is cancelled). `useLdmMyEvents.test.tsx` has two new cases: a swipe up fetches the older window without
    IsFetchingMyTimeline and with no audit event. A failed fetch sets HasFetchError and goes to the flow handler.
- Tests: `npx vitest run src/pages/LDM_MyEvents_V2` (pass).
- Proposed verdict: `match` for Legacy_LDMEventsFlow_V2-166 and Legacy_LDMEventsFlow_V2-205.

## 6. Legacy_LDMEventsFlow_V2 F4: EventCard_Guests email when offline

- TST evidence: `EventCard_Guests.mvc.js:809-867`. OnHandle_ClickedEmail calls GetNetworkStatus. When the device is
  offline, it shows `"Please check your network connection and try again"` with type Info (0).
- Files changed:
  - `app/src/pages/LDM_MyEvents_V2/components/EventCard_Guests.tsx:93`: when offline, the handler shows this message
    with `showFeedbackMessage(..., PLATFORM_MESSAGE_TYPE.info)` before it returns. The GetNetworkStatus check stays
    `navigator.onLine`. This is the same as in `EventDetail_ListItem.tsx:74-76` and `navigateToMaps`.
    `platform/feedback/networkStatus.ts` has no GetNetworkStatus function. It only sets the client variable of
    NetworkDetection.
  - `app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx`: new case. When offline, the envelope of a guest shows the
    message (type 0) and opens no message popup.
- Tests: `npx vitest run src/pages/LDM_MyEvents_V2` (pass).
- Proposed verdict: `match` for Legacy_LDMEventsFlow_V2-212.

## 7. Legacy_LDMEventsFlow_V2 F5: EntityTypeId of the host contact popup

- TST evidence: `ScreenBlock_EventDetail_V2.mvc.js:2354` (OnHandle_ContactHost_Call) sets
  `ContactPopupData.EntityTypeId = Connect_Entity2.household` (value "Household",
  `migration/knowledge/static-entities-tst.json`). OnHandle_ContactHost_Message (`:1828`) and
  OnHandle_ContactOrganiser (`:2485`) set the same value.
- Files changed:
  - `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.ts:110`: `hostContactPopupData` sets
    `EntityTypeId: Connect_Entity.Household` (`lib/ubtConnectUtils/staticEntities`, the same TST values). The phone
    popup and the message popup of the host use this function.
  - `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.ts:152`: `organiserMessageData` sets the same value,
    as TST `:2485` does. This change is outside the finding row. The value has no effect on the display there,
    because IsAvatarImage is False. It makes the record 1:1.
  - `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.test.ts`: the expected records have
    `EntityTypeId: 'Household'`. A new case checks the phone popup.
- `ContactPopup.tsx` is not changed.
- Tests: `npx vitest run src/pages/LDM_EventDetail_V2 src/components/contact` (pass).
- Proposed verdict: `match` for Legacy_LDMEventsFlow_V2-109.

## Checks

- `npx vitest run src/pages/OrbitAdminEventDetail src/pages/EventBooklet src/pages/EmailContact src/pages/LDM_MyEvents_V2
  src/pages/LDM_EventDetail_V2 src/components/contact src/components/ui/TouchEvents`: 34 files, 251 tests, all pass.
- `npx eslint` and `npx prettier --check` on the changed files: no errors.
- `npm run typecheck`: no error in the files of group G2. The run fails on files of other groups:
  `src/containers/ShareSheet/useShareSheet.test.tsx:35` and `src/pages/BookmarksByGroup/components/BookmarkGroupView.test.tsx:142-150`.
