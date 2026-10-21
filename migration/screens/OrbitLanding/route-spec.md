# Screen spec: OrbitLanding

Sources: SCR = `analysis/sources/pretty/UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc.js`, SB =
`…/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc.js`, HM =
`…/Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc.js`, dom = `analysis/dom/<state>.html`.

## 0. Summary
First Orbit route (reference for the other Orbit screens). Orbit is part of UBTConnect (`migration/knowledge/orbit-assemble-ldm.md`).
The landing shows:
- the members of the signed-in household (bar);
- "View Passport details";
- the Upcoming Events / Sort By toggles;
- the events of the member as Orbit cards (Card_Event / Card_Milestone), with the Orbit skeleton while fetching and NoInformation_Orbit when there is none;
- the Filters / Sort popups.

Captured states:
- default (5 members, 1 upcoming event);
- loading (skeleton, empty bar);
- offline (skeleton + Service Interruption message);
- popup-filters, popup-sort (steps: click the Upcoming Events / Sort By toggle).

Tier full, no inputs.

## 1. Entry and routing
`/UBTConnect/OrbitLanding`, no inputs (SCR view :128-131 `inputs: {}`). Navigation out (SCR ctrl :277-510), original names:
- EventDetail(In_EventId, In_MemberId, In_FromNotification False, In_EventName);
- TransportDetail(In_TargetMemberId, In_OrbitMilestoneTypeId, In_MilestoneId, In_HeaderClass, In_MilestoneName);
- PassportScan(LoginMemberId, TargetId);
- MyEntertaining(MyCalendarEventSourceId = type_MyCalendarEventSource.orbit "event-orbit").

EventDetail, TransportDetail and PassportScan are each behind GetHasOrbitAccess, else HomeFeed. EventDetail and TransportDetail also use FeedbackMessageAfterTransition("You don't have access to Orbit. …", 3).
EventDetail, TransportDetail and MyEntertaining are built [board.md]. PassportScan is not on the board, so it is not built. The links go to their original paths.

## 2. Component tree
`index.tsx` (screen) → `ScreenBlock_OrbitLanding` [built here] → `Layout_Orbit` [shared], which holds:
- MenuIcon__UpdatedOSUI [shared];
- Household_Members_Selection [built here];
- Card_Event / Card_Milestone / NoInformation_Orbit / Skeleton_Loading [shared];
- BottomBarMenu [shared] in BottomBar;
- the two Popup widgets (`OrbitLandingPopup`, portalled) with Popup_OrbitLanding_Filters (`b1-$b8`) / Popup_OrbitLanding_Sort (`b1-$b9`) [built here, from the survey sources and
dom/popup-*.raw.html].

Then `CommonUI_InsideLayout` [shared] (pack Block plan).

## 3. DOM and markup contract
As pack.md "Markup" (dom/default.html). Ids:
- block `$b1`
- Layout `b1-$b1`
- MenuIcon `b1-$b2`
- household `b1-$b3` (list `b1-b3-List_HouseholdMembers`, `position: relative`)
- card rows `b1-l1-60_<i>-$b4|$b5` (dom/default.html:121)
- NoInformation `b1-$b6`
- skeleton `b1-$b7` (dom/loading.html:94)
- popup roots `b1-RootPlaceholder_*` / `b1-Root_*`
- BottomBarMenu `$b2`
- CommonUI_InsideLayout `$b3`

Card list `data-virtualization-disabled` (dom/default.html:119; IsListVirtualizationDisabled True on TST).

## 4. Visual specification
Original Orbit theme CSS only (route CSS set); no route CSS. Selected member: inline `opacity: 1; border-bottom: 2px
solid var(--color-neutral-0);` (HM :204-207). Caret down/up by popup state (SB :436-458, :478-500).

## 5. Data model
Block variables SB model :46-87 (HouseholdMembersList, SelectedMemberId, IsFetchingData, EventsSummary, EventFilter
(null), SortEventsASC True, YearsSelection, Popup_*Opened, PopupMeasurements, CurrentMemberId). Wire/domain types in
`app/src/screens/OrbitLanding/types.ts`; rows converted to Event_Screen / Milestone_Screen as the view's
typeConvertRecord (SB :566-575, :612-620).

## 6. API calls
| Call | Phase | Where | Mock |
|---|---|---|---|
| DataActionGet_HouseholdMembers | load (OnReady) | Refresh_GetHouseholdMembers SB :1895-1929 | fictional (orbit.ts) |
| DataActionGet_EventsByMemberId | load, member click | Refresh_GetEventsByMemberId SB :1007-1040 | fictional, per SelectedMemberId |
App-start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages,
CacheableMapEntities / Households) are the shell's. Both data actions are on demand (dataFetchDependenciesOriginal -1,
one call each in the capture). Typed through the contract since CR-OrbitLanding-1 (foundation F9; Q1 bridge removed);
mocks with contractHandler.

## 7. State and lifecycle
OnReady (SB :1703-1769):
- Restored from cache → nothing (P-BACK, `useViewState('Model')`).
- Else: IsFetchingData True → Get_HouseholdMembers → OnAfterFetch (:1651-1702):
  - none → IsFetchingData False;
  - else: Response[0].IsSelected True, SelectedMemberId = its MemberId, HouseholdMembersList;
  - then Refresh_GetEventsByMemberId: ResetFiltersAndSort (:1261-1304, SortEventsASC True, EventFilter UpcomingEvents, YearsSelection empty);
  - then Get_EventsByMemberId → OnAfterFetch (:1200-1235): FilterEvents, SetAndSortEvents(True, False) (returns at "New Sort Order?", :1452-1456: no sort), YearsSelection = YearFilter, IsFetchingData False;
  - then CurrentMemberId = TextToInteger(AppManager_GetCachedUserInfo.MemberId).

GetPopupMeasurements (SB :1363-1433, JS :2200-2214) after the households: Top/Left from `.header`, Bottom from `.footer`.

Household_Members_Selection: OnInitialize InitialPosition (HM :327-362), OnRender scroll-to-selected while not found (HM :363-400).

## 8. Render logic
Content (SB :524-711):
- IsFetchingData → Skeleton_Loading(OrbitLanding).
- Else if fetched: EventsSummary not empty → list (milestone row: Card_Milestone IsSetUpMeals False; else Card_Event).
- Else if fetched: empty → NoInformation_Orbit("You currently have not been assigned to an event. Check with your locality invite coordinator if you have any questions.").

HeaderRight (SB :271-303): My calendar icon only when SelectedMemberId ≠ null and = CurrentMemberId.

Filter label (SB :430): "Past Events" for PastEvents, else "Upcoming Events".

## 9. Interactions and navigation
- Member click (HM :248-326 → SB :1103-1199): select, smooth scroll, new member → fetch its events, then OnApplicationEvent_SwitchMember.
- Passport (SB :1985-2020): nothing while fetching or CurrentMemberId 0, else NavigateTo_PassportScan(SelectedMemberId, CurrentMemberId).
- Event card (SB :1930-1984) → EventDetail + ClickEvent.
- Milestone card (SB :1305-1362) → TransportDetail + ClickMilestone.
- Toggles (SB :1041-1102) work only with members and when the screen is not fetching. They open the popups. The portal is at the end of <body>: `.portal-class` > portal root with the Root_* classes
  (CopyClassesAcrossPortal, Connect2_LegacyShared.controller.js :1534-1553) > `.popup-backdrop` > `#b1-Popup_*` style
  `top: <Top>px;` (Sort also `left: <Left>px;`).
- Filters popup:
  - Upcoming / Past radios (Upcoming clears the years).
  - With Past and years: "Clear all" / "Filter By" / one checkbox per year (not captured).
  - Apply → OnHandle_ApplyFilters (SB :1494-1572): close, EventFilter, YearsSelection, FilterEvents on Get_EventsByMemberId.Response, SetAndSortEvents(Upcoming, True), ApplyFilters audit event.
- Sort popup: Newest (False) / Oldest (True), Apply → OnHandle_ApplySort (SB :1603-1650): close, SetAndSortEvents(IsSortASC, False) → SortEvents by SequenceNo + ScrollContentToTop, ApplySortBy audit event.
- Close icons toggle the popup. No server call.
- Card_Template raises OnClick twice for a click in a placeholder (known original bug B7, kept).

## 10. Sequence diagrams
See `analysis/diagrams.md` (OnReady chain); the chain above is the build's order.

## 11. Error handling and feedback
A failed data action leaves IsFetchingData True (skeleton) and reaches the flow handler: CommunicationException →
ShowCommunicationExceptionMessage ("Service Interruption", dom/offline.html:2-17) via `raiseToFlowHandler`.

## 12. Strings
"View Passport details", "Upcoming Events", "Past Events", "Sort By", the NoInformation message, the no-access message
(SCR :340, :497) — literal as compiled.

## 13. Accessibility, platform and security notes
Orbit audit events (OnApplicationEvent_*) → log only (telemetry decision U17), no personal fields. Server-side: both
data actions must authorize the member ids against the signed-in household (SelectedMemberId comes from the client).

## 13a. Feature flags
`mobileOrbitAccess` (GetHasOrbitAccess, default-only on): read with `useFlagOn`, both branches of the three navigation
handlers built. The other pack flags belong to BottomBarMenu / CommonUI (shared).

## 14. Unclear points
- Q1 (decision, answered A) [questions.md Q1]: contract missing the two data actions → CR-OrbitLanding-1; the `@ts-expect-error` bridge is removed [CR-OrbitLanding-1.md].
- Q2 (decision, answered A): the popups were then captured (popup-filters, popup-sort) and are built from the compiled views. The Past / years part of the Filters popup is not in a capture (built from the compiled view).
- Q4 (decision): popup states differ only in pixels (TST measured header 204 vs 174; replay draws radios unchecked). Keep the faithful build, narrow pixel exemption (answered A) [questions.md Q4].
- Q3 (decision): CurrentMemberId 0 in the mock (shell keeps MemberId empty) → keep (answered A) [questions.md Q3].

## 15. Acceptance criteria
- Parity of default, loading, offline, popup-filters, popup-sort (two runs).
- A member switch fetches that member's events.
- An empty member shows NoInformation_Orbit.
- An event card opens `/UBTConnect/EventDetail?In_EventId=7301&In_MemberId=…&In_FromNotification=False&In_EventName=…`.

## 16. Decisions to confirm
- Q1 → A, Q2 → A, Q3 → A (answered by the orchestrator); Q4 → A (answered) [questions.md Q4].
- Popup widget port: the Popup's componentDidUpdate setState re-render is ported in `OrbitLandingPopup` (keeps
  `popup-disable-scroll` with the Filters popup open); a candidate for the shared `usePopupWidget`.
- Mock data (fictional, `app/src/mocks/fictional/orbit.ts`, shared with later Orbit routes):
  - Orbit members = the signed-in Vitale household, Matías (mock user) first.
  - The event "Weekend Bible Conferences - Bahia and Azul" (captured title word lengths), Guest type purple.
  - Dates: Friday-Sunday at least a week ahead of today (relative dates keep it "upcoming").
  - Matías and his parents attend. Valeria and Ignacio have no event (NoInformation branch, not captured).
  - Milestones with host households for later routes.
- Proposed exemptions (proposed-exemptions.json): `ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE` (shimmer phase),
  `ORBITLANDING-POPUP-TOP-AND-RADIO-CHECKED` (Q4).
- CR-OrbitLanding-1 (contract).

## 17. Patterns used
P-PARAMS, P-STATES, P-DATA, P-MOCKS, P-CALLS, P-BACK, P-LIST (OSList), P-FLAGS, P-OSUI (none rendered), P-MUTATION (no
writes: statefulHandler only to answer per member).

## 18. Builder notes
Files: `app/src/screens/OrbitLanding/{index.tsx,types.ts,api.ts,mocks.ts,components/{ScreenBlock_OrbitLanding,
Household_Members_Selection,OrbitLandingPopup,Popup_OrbitLanding_Filters,Popup_OrbitLanding_Sort}.tsx,
components/{actions,staticEntities}.ts}`, shared mock `app/src/mocks/fictional/orbit.ts`.
