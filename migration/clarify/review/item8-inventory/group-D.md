# W23 inventory, group D (13 hooks)

React lines: `app/src/pages/<Page>/hooks/<file>`. TST lines: dump file in
`/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/c658e23d-06e2-4426-a111-9e9cbc2d7280/scratchpad/w23D/`
(`<Block>.js` = `tst_source.py show`; `MUI.controller.js` = Connect2_OrbitMobile_MUI.controller.js; `Utils.controller.js` = UBTConnect_Utils.controller.js).
Common facts used below: `checkDirectoryAccess$Action` (MUI.controller.js:1085) is a module client action that calls `getDirectoryAccess$ServerAction` (R2).
`onApplicationEvent_ViewHousehold$Action` (MUI.controller.js:5969) is a module action (audit wrapper, runs after leaving if reached).
`app_Subscription_ShowUpgradePopUp$Action` (Utils.controller.js:48) is a module action (confirmAction): runs after leaving.
`cache_UserInfo_Get$Action` is a UBTConnect_Utils module action: runs after leaving. `navigateTo_*$Action` on the block controller = R3 stop (and R4).

### EventBooklet/hooks/useEventBooklet.ts (and eventBookletDataFlows.ts)
Origin: Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet. The block hook has no `isAlive` guard on side effects. `write` only skips `dispatch` after the unmount (useEventBooklet.ts:153-156).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `setBookletMaxRows` = module client action that sets two client variables, no server call (EventBooklet.js:3152; MUI.controller.js:6605). Not dropped | 3 timers (setTimeout 0) that start RefreshHelperRoles / RefreshEventFilters / RefreshEventGuests (server calls read) | useEventBooklet.ts:186-196, not guarded | Each timer calls `_refresh*$Action`, which starts with `ensureControllerAlive` (EventBooklet.js:3394 `RefreshEventGuests`): R3, stops silently if the block is left before the timer fires | react-extra (only when the user leaves between OnReady start and the timers; reads, no state effect) |
| RefreshEventGuests / Helpers / Filters (OnReady timers, view swap, search, clear filters, scroll, apply filters) | `fetchEventBookletGuests/Helpers/Filters` = `DataActionGet_EventBooklet*` (R1: EventBooklet.js:2006, 2034, 2062; refresh at 3407, 3644, 2300) | failure: `asUnknownError` throws UserException, then `raiseToFlowHandler` in `run` | eventBookletDataFlows.ts:128-133, 116-121, 140-145; useEventBooklet.ts:101-103, not guarded | R1: no answer, no catch: nothing runs, no message | react-extra (raise to flow handler after leaving, only on a failed fetch) |
| same, after the fetch | OnAfterFetch handlers (sync), `write` | state writes only (detached) | eventBookletDataFlows.ts:117-130 | R1: not run | same (state only, no visible effect) |
| OnAfterFetch_GetEventBookletFilters, helper roles not yet fetched | `getLocalHelperRoles` = local aggregate refresh (R1, EventBooklet.js:2138) | none inside | eventBookletDataFlows.ts:81 | R1: flow stops | same |
| ApplyFilters, invalid selection | `await onAfterFetchGetEventBookletFilters()` (hits R1 aggregate at EventBooklet.js:2138 only when helper roles not fetched) | Info toast "The chosen filters were invalid..." | useEventBooklet.ts:270-271, not guarded | R1 (only when the roles are not fetched yet): the toast at EventBooklet.js:2361 is not reached. When the roles are fetched there is no async gap, so both show it | react-extra (only in the "roles not fetched" case) |
| ApplyFilters, valid | `await refreshEventHelpers/Guests` (R1 data action, EventBooklet.js:2300, 3407) | `write popupFiltersKept` | useEventBooklet.ts:279-281 | R1: nothing | same (state only) |
| ClickedMember | `checkDirectoryAccess` (R2, MUI.controller.js:1085 -> `getDirectoryAccess$ServerAction`; call at EventBooklet.js:3710) | (a) parent event `onNavigateToHouseholdDetail` | useEventBooklet.ts:320-322, not guarded | `navigateTo_HouseholdDetail$Action` (EventBooklet.js:3717): R3 + R4, blocked silently | react-extra |
| ClickedMember | same | (b) ViewHousehold audit event (log only in the mock phase; TST: module wrapper) | useEventBooklet.ts:323, not guarded | not reached: the flow stops at the navigation (EventBooklet.js:3717 before 3721) | react-extra (log only) |
| ClickedMember, no access | same | `showUpgradePopUp` (confirm dialog) | useEventBooklet.ts:325, not guarded | `app_Subscription_ShowUpgradePopUp$Action` module action (EventBooklet.js:3736; Utils.controller.js:48) runs | same |
| ClickedMember, loading | none (no await before) | Info toast | useEventBooklet.ts:316 | sync, before any await | no post-await effect |

### EventDetail/hooks/useEventDetail.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_EventDetail. TST dump: ScreenBlock_EventDetail.js (Orbit_ScreenBlocks file).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchEventDetails` = `Get_EventDetails` data action refresh (R1: ScreenBlock_EventDetail.js:1713; OnReady 2023-2110) | next reads: `getUserInformation` (cache_UserInfo_Get, module action), `fetchHostSurveyStatus`, `fetchHasDocuments`, `fetchHasQRCode` (server call read) | useEventDetail.ts:138, 148, 154, 156, not guarded (only the state writes use `isAlive`) | R1: OnReady stops after the first data action; no other call | react-extra (4 read calls after the unmount; no visible effect) |
| OnReady, same | each later fetch is a data action refresh (R1: 1741, 1769, 1825) | state writes | useEventDetail.ts:137-158 | R1 | same (state only) |
| ViewHelpers | `getUserInformation` = `cache_UserInfo_Get$Action` module action, runs after leaving (ScreenBlock_EventDetail.js:2354) | parent event `onNavigateToHelpers` | useEventDetail.ts:232-239, not guarded | `navigateTo_Helpers$Action` (2359): R3 + R4, blocked | react-extra |
| ViewHelpers failure | same | `raiseToFlowHandler` | useEventDetail.ts:240-242, not guarded | a failure of the module action reaches the block handler (no ensure in module action) | same (assumed: `cache_UserInfo_Get` is a memory-cache module action without `ensureControllerAlive`, Utils.controller.js:929; its failure goes to the awaiting flow's handler. The cache getter's inner server call was not traced) |
| other handlers | no await | - | - | - | no post-await side effect |

### GuestArrangements/hooks/useGuestArrangements.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchGuestArrangements` = RefreshData -> data action (R1; ScreenBlock_GuestArrangements.js:1467-1520, `_refreshData` 1550) | `dispatch` only | useGuestArrangements.ts:75, guarded by `isAlive()` | R1 | no post-await side effect |
| ClickedMember | `checkDirectoryAccess` (R2; GuestArrangements.js:1637) | parent event `onNavigateToHouseholdDetail` | useGuestArrangements.ts:84, not guarded | `navigateTo_HouseholdDetail$Action` (1644): R3 + R4 blocked | react-extra |
| ClickedMember | same | ViewHousehold audit (log in the mock) | useGuestArrangements.ts:85, not guarded | not reached (flow stops at 1644 before 1648) | react-extra (log only) |
| ClickedMember, no access | same | `showUpgradePopUp` | useGuestArrangements.ts:87 | module action `app_Subscription_ShowUpgradePopUp$Action` (1665) runs | same |
| ClickedMember failure | same | `raiseToFlowHandler` via `.catch` | useGuestArrangements.ts:112 | a failure of the R2 server action reaches the screen exception handler | same |

### HelpersDetail/hooks/useHelperDetails.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_HelperDetails. TST dump: ScreenBlock_HelperDetails.js. Writes go through `write` (guarded by `blockAlive`, useHelperDetails.ts:105-107).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchHelperDetails` = `DataActionGetHelperDetails` (R1; HelperDetails.js:735; refresh 1324) | state writes | useHelperDetails.ts:114-115, guarded | R1 | no post-await side effect |
| ClickedMember | `checkDirectoryAccess` (R2; HelperDetails.js:1245) | parent event `onNavigateToHouseholdDetail` | useHelperDetails.ts:129, not guarded | `navigateTo_HouseholdDetail$Action` (1252): R3 + R4 blocked | react-extra |
| ClickedMember | same | ViewHousehold audit (log in mock) | useHelperDetails.ts:130, not guarded | not reached (stops at 1252, audit at 1256) | react-extra (log only) |
| ClickedMember, no access | same | `showUpgradePopUp` | useHelperDetails.ts:132, not guarded | module action runs (1271) | same |
| ClickedMember failure | same | `raiseToFlowHandler` | useHelperDetails.ts:135 | R2 failure reaches the screen handler | same |
| ClickedMemberPhone (BuildMemberCallData) | `getCacheableMemberContactList` (155), `getCacheableTimezoneInfo` (160), `fetchLegacySignedImageURL` (170) = Connect2_LegacyShared module client actions on the memory cache (HelperDetails.js:1004, 1022, 1044; Legacy.controller.js:3418, 4255, 3694). Module actions: run after leaving. The next steps are plain assignments in the same action (no `ensureControllerAlive` between them) | server/cache reads, then popup writes | useHelperDetails.ts:155, 160, 170; the popup writes use `write` (guarded); the reads are not guarded | the three module actions run; the assignments go to the disposed model | same (reads run in both; state writes dropped in both) |
| ClickedMemberPhone failure | same | `raiseToFlowHandler` via `.catch` | useHelperDetails.ts:200 | a failure of the cache fetch reaches the screen handler (R2 path) | same |

### HostSurvey/hooks/useHostSurvey.ts
Origin: Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey. TST dump: ScreenBlock_HostSurvey.js. `dispatch` calls here are not guarded (state only).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchHostSurvey` = `DataActionGetHostSurvey` (R1; HostSurvey.js:4550; refresh 5517) | OnAfterFetch (state, local entity reads) | useHostSurvey.ts:196-203, guarded by `if (!isAlive()) return` | R1: nothing | same (both skip) |
| OnReady failure | same | swallow (`catch { return }`, no raise) | useHostSurvey.ts:192-195 | R1: no handler | same |
| OnPrimaryButton (confirm survey) | `postHostSurvey` = `_postHostSurvey$Action` -> `postHostSurvey$ServerAction` (R2; HostSurvey.js:6177, 6128; call at 6700) | parent event `onNavigateToBack` | useHostSurvey.ts:276 (navigateToBack 213-215), not guarded | `navigateTo_Back$Action` (6706): R3 + R4 blocked | react-extra |
| OnPrimaryButton | same | `feedbackMessageAfterTransition('Thank you, your survey has been submitted.')` | useHostSurvey.ts:277, not guarded | not reached: flow stops at `navigateTo_Back` (6706 before 6709) | react-extra |
| OnPrimaryButton, post state writes | same | `dispatch postFinished / postFailed` | useHostSurvey.ts:238, 241 | state of the disposed model | same (state only) |
| PopUp_Primary, ReturnBack | `postHostSurvey` (R2; HostSurvey.js:6290+38) | `closePopUp` (state), then `navigateToBack` | useHostSurvey.ts:319-321, not guarded | next node `_onHandle_PopUp_Close$Action` has `ensureControllerAlive` (HostSurvey.js:4971): R3 stops; navigation not reached | react-extra (navigation) |
| PopUp_Primary, ReturnBack | same | `feedbackMessageAfterTransition('...saved as a draft.')` | useHostSurvey.ts:322, not guarded | not reached (stops at PopUp_Close, 6330ff) | react-extra |
| post failure (user exception) | same | `postFailed` dispatch | useHostSurvey.ts:236-239 | the action's own handler sets IsPostingSurvey false (HostSurvey.js:6190-6205): state only | same (state only) |
| post failure (system exception) | same | `throw error` to the caller (no catch in `onPrimaryButton`/`onPopUpPrimary` callers: `void`) | useHostSurvey.ts:237, 428, 432 | R2 failure reaches the screen exception handler | unclear (React: `void onPrimaryButton()` has no catch, so it is an unhandled rejection, not the flow handler; this is a separate gap from W23) |
| other handlers | no await | - | - | - | no post-await side effect |

### LDM_Email_V2/hooks/useLdmEventEmail.ts
Origin: LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2. TST dump: ScreenBlock_Event_Email_V2.js. Writes use `write` (guarded by `alive`, useLdmEventEmail.ts:106-108).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady / TryAgain | `fetchEventEmailCoordinator` = `DataActionGetCoordinatorDetails` (R1; Email_V2.js:941; refresh 1018) | `appManager_GetCachedUserInfo` (module read, no server) and state writes | useLdmEventEmail.ts:129-130 | R1: stops before it | same (state only; the user-info read has no effect) |
| OnReady / TryAgain failure | same | `write fetchFailed` then `throw` to `raiseToFlowHandler` | useLdmEventEmail.ts:115-118, 191 | R1: no answer, no handler | react-extra (raise after leaving, only on a failed fetch) |
| SubmitEmail | `sendEventContactEmail` = `eventContact$ServerAction` (R2; Email_V2.js:1249) | `addAuditEventDetailEvent` (audit) | useLdmEventEmail.ts:154, not guarded | module action runs (1266) | same |
| SubmitEmail | same | `zOnApplicationEvent_Wrapper` (audit) | useLdmEventEmail.ts:155 | module action runs (1281) | same |
| SubmitEmail | same | `scheduleFeedbackMessageAfterTransition` (500 ms timer, then toast) | useLdmEventEmail.ts:156 | JS node with `setTimeout 500` + showFeedbackMessage (R5), no alive check (Email_V2.js:1284, 1625-1628) | same |
| SubmitEmail | same | `allowUpcomingNavigation` | useLdmEventEmail.ts:158 | module action runs (1297) | same |
| SubmitEmail | same | `navigateBack()` | useLdmEventEmail.ts:159, not guarded | `OS.Navigation.navigateBack` (1300): R4 blocked | react-extra |
| SubmitEmail | same | `write messageCleared` | useLdmEventEmail.ts:157 | state | same (state only) |
| SubmitEmail failure | same | `raiseToFlowHandler` | useLdmEventEmail.ts:177 | R2 failure reaches the screen handler | same |

### LDM_EventDetail_V2/hooks/useLdmEventDetail.ts
Origin: LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2. TST dump: ScreenBlock_EventDetail_V2.js. Writes use `write` (guarded by `newestReadyRun`, useLdmEventDetail.ts:128-130).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchEventByEventId` = `getEventByEventId$DataActRefresh` (R1; EventDetail_V2.js:2019; data action 1396) | `addAuditEvent_LDM('RequestAPI_EventDetail')` (audit write) | useLdmEventDetail.ts:151-153, not guarded (the code comment says it runs after the unmount, W23) | R1: the flow never reaches `addAuditRequestAPIEvent$Action` (2029) | react-extra |
| OnReady failure | same | `write hasEventFetchError`, then `throw e` to the flow handler | useLdmEventDetail.ts:154-157 | R1: no handler | react-extra (only on a failed fetch) |
| OnReady, coordinator | `fetchCoordinatorDetails` (not awaited by the flow; `.then/.catch` swallow) = `DataActionGetCoordinatorDetails` (R1; 1372) | `write coordinator` | useLdmEventDetail.ts:138-144, guarded | R1 | no post-await side effect |
| GoToHousehold | `isFreeSubscriptionPlan`, `isRegionalSubscriptionPlan` = UBTConnect_Utils module actions (EventDetail_V2.js:1545, 1551): run after leaving | `setPreloadObject` (global store) | useLdmEventDetail.ts:204, not guarded | no preload node in this block (grep "preload" has no hit in the dump); where TST stores the carousel preload is not in this block | unclear (needs the NavigationHandler preload used by `navigateTo_HouseholdCarousel`; the DEV model of the screen that holds the destination) |
| GoToHousehold | same | `addAuditEvent_LDM` (audit write) | useLdmEventDetail.ts:206-208, not guarded | `addAuditEventDetailEvent$Action` module action (1582) runs, because the awaited calls are module actions | same |
| GoToHousehold | same | parent event `onNavigateToHouseholdCarousel` | useLdmEventDetail.ts:209-212, not guarded | `navigateTo_HouseholdCarousel$Action` (1586): R3 + R4 blocked | react-extra |
| GoToHousehold (record disabled) / HostInformation | `showUpgradePopUp` (module action, 1538 / 2421) | none after | useLdmEventDetail.ts:174, 194 | - | no post-await side effect |
| HostCardAddress | `fetchHouseholdCoordinatesById` = `getHouseholdCoordinates$ServerAction` (R2; EventDetail_V2.js:2132) | `getOperatingSystem` (plugin read) | useLdmEventDetail.ts:233 | `CommonPluginController.getOperatingSystem$Action` module action (2173) runs | same |
| HostCardAddress | same | `addAuditEvent_LDM('MyTimelineGoogleMapsDirections')` | useLdmEventDetail.ts:234 | module action (2178) runs | same |
| HostCardAddress | same | parent event `onNavigateToWebMaps` | useLdmEventDetail.ts:235, not guarded | `navigateTo_WebMaps$Action` (2219) / `navigateTo_AndroidMaps$Action` (2210): R3 + R4 blocked | react-extra |
| HostCardAddress failure | same | `UserException` to `raiseToFlowHandler` | useLdmEventDetail.ts:236-245, 271 | R2 failure reaches the screen handler | same |
| other handlers | no await | - | - | - | no post-await side effect |

### LDM_MyEvents_V2/hooks/useLdmMyEvents.ts
Origin: LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2. TST dump: ScreenBlock_MyEvents_V2.js. Writes use `write` (guarded by `alive`, useLdmMyEvents.ts:138-140). All timeline fetches are `getEventsForMyTimeline$DataActRefresh` (R1; MyEvents_V2.js:1500, 2353; data action 1227).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady, ScrollEnding, TryAgain (`getMyTimelineData`) | `fetchEventsForMyTimeline` (R1; `_getMyTimelineData$Action` 1470-1555) | `addAuditEvent_LDM('RequestAPI_CalendarEvents')` | useLdmMyEvents.ts:161, not guarded | R1: `addAuditRequestAPIEvent$Action` (1510) not reached | react-extra |
| same, failure | same | `throw` (NotRegistered / UserException / system) to `raiseToFlowHandler` | useLdmMyEvents.ts:162-169, 221, 240 | R1: no handler | react-extra (only on a failed fetch) |
| SwipeUp | `refreshGetEventsForMyTimeline` (R1; 2353) | none | useLdmMyEvents.ts:189-190 | R1 | no post-await side effect (failure: raise, same as above, react-extra) |
| MyTimelineFilter (changed filters) | `getMyTimelineData` (R1 inside the screen action `_getMyTimelineData$Action`, call at MyEvents_V2.js:2703) | `addAuditEventFilterEvent('MyTimelineApplyFilter')` | useLdmMyEvents.ts:200, not guarded | R1: the awaiting flow never continues, the audit at 2707 follows the call and is not reached | react-extra |
| ResetFilters | `getMyTimelineData` (R1; call at MyEvents_V2.js:1919) | `addAuditEventFilterEvent('MyTimelineClearFilter')` | useLdmMyEvents.ts:206, not guarded | R1: not reached (audit at 1923 follows the call) | react-extra |
| HouseholdClicked | `showUpgradePopUp` (module action, MyEvents_V2.js:1980) | none after | useLdmMyEvents.ts:212 | - | no post-await side effect |
| MyTimelineFilter (same filters), EventClicked, others | no await | - | - | - | no post-await side effect |

### MilestoneDetail/hooks/useAccommodationHost.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_AccommodationHost. TST dump: ScreenBlock_AccommodationHost.js. Writes use `write` (guarded by `readyIsAlive`, useAccommodationHost.ts:160-162). The first-fetch dispatch and the later dispatches use `isReadyAlive()`.

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchAccommodationHost` = `_refreshData$Action` -> `getAccommodationHost$DataActRefresh` (R1; AccommodationHost.js:2051; data action 1825; OnReady 2390) | second read `fetchAccommodationHostDocument` (server call read) | useAccommodationHost.ts:153, not guarded (the guard `if (!isReadyAlive()) return` is after it, line 154) | R1: `_refreshDocumentData$Action` (2393) is chained after `_refreshData` and is not reached | react-extra (one read call after the unmount; state writes are skipped by the guard) |
| ClickedMember | `checkDirectoryAccess` (R2; AccommodationHost.js:2476) | parent event `onNavigateToHouseholdDetail` | useAccommodationHost.ts:233, not guarded | `navigateTo_HouseholdDetail$Action` (2483): R3 + R4 blocked | react-extra |
| ClickedMember | same | ViewHousehold audit (log in the mock) | useAccommodationHost.ts:234-238, not guarded | not reached (2487 follows 2483) | react-extra (log only) |
| ClickedMember, no access | same | `showUpgradePopUp` | useAccommodationHost.ts:240 | module action runs (2504) | same |
| ClickedMember failure | same | `raiseToFlowHandler` | useAccommodationHost.ts:243 | R2 failure reaches the screen handler | same |
| ClickedMemberPhone (BuildMemberCallData) | `getCacheableMemberContactList` / `TimezoneInfo` / `SignedImageURL` = module client actions (AccommodationHost.js:2168, 2186, 2208) | popup writes (`write`, guarded) after module reads | useAccommodationHost.ts:263, 268, 278 | module actions run, assignments go to the disposed model | same |
| ClickedMemberPhone failure | same | `raiseToFlowHandler` via `.catch` | useAccommodationHost.ts:309 | handler reached (R2 path) | same |
| other handlers | no await | - | - | - | no post-await side effect |

### MilestoneDetail/hooks/useMilestoneBlock.ts
Origin: ScreenBlock_MealGuest; the hook serves five blocks (MealGuest, MealHost, MealHelper, AccommodationGuest, AccommodationHelper). TST dumps: ScreenBlock_MealGuest.js, _MealHost.js, _MealHelper.js, _AccommodationGuest.js, _AccommodationHelper.js. Writes use `write` (guarded by `readyIsAlive`, useMilestoneBlock.ts:153-155).

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) file:line | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `fetchMilestoneBlock` = `_refreshData$Action` -> data action refresh (R1; MealGuest.js:1352, 2217; MealHost.js:1472; MealHelper.js:2510; AccommodationGuest.js:1529; AccommodationHelper.js:2142) | start of `refreshCaptionsData` (server call read, not awaited) | useMilestoneBlock.ts:176-179, guarded by `if (!isReadyAlive()) return` | R1: the captions refresh (data action `getCaptions$DataActRefresh`, e.g. MealGuest.js:2301) is not reached | same (both skip) |
| ClickedMember | `checkDirectoryAccess` (R2; MealGuest.js:1400, MealHost.js:1619, MealHelper.js:2217, AccommodationGuest.js:1598, AccommodationHelper.js:1732) | parent event `onNavigateToHouseholdDetail` | useMilestoneBlock.ts:200, not guarded | `navigateTo_HouseholdDetail$Action` (MealGuest.js:1407 and the same pattern in the other four): R3 + R4 blocked | react-extra |
| ClickedMember | same | ViewHousehold audit (log in the mock) | useMilestoneBlock.ts:201-206, not guarded | not reached (MealGuest.js:1411 follows 1407) | react-extra (log only) |
| ClickedMember, no access | same | `showUpgradePopUp` | useMilestoneBlock.ts:208 | module action runs (MealGuest.js:1428) | same |
| ClickedMember failure | same | `raiseToFlowHandler` | useMilestoneBlock.ts:211 | R2 failure reaches the screen handler | same |
| ClickedMemberPhone (BuildMemberCallData) | `getCacheableMemberContactList`, `TimezoneInfo`, `SignedImageURL` (module actions; MealGuest.js:1543, 1561, 1583) | popup writes (`write`, guarded) after module reads | useMilestoneBlock.ts:235, 239, 249 | module actions run | same |
| ClickedHostPhone (BuildCallDataHost) | `fetchLegacySignedImageURL`, `getCacheableTimezoneInfo` (module actions; MealGuest.js:1285, 1291) | popup writes (guarded) | useMilestoneBlock.ts:300-302 | module actions run, no block action between them | same |
| ContactHostByMessage | `getCacheableTimezoneInfo`, `fetchLegacySignedImageURL` (module actions; MealGuest.js:2115, 2121) | popup writes (guarded) | useMilestoneBlock.ts:357-362 | module actions run | same |
| the three call flows, failure | same | `raiseToFlowHandler` via `.catch` | useMilestoneBlock.ts:272, 316, 370 | handler reached (module action failure on the R2 path) | same |
| other handlers | no await | - | - | - | no post-await side effect |

### MilestoneDetail/hooks/useMilestoneWrapper.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper. OnReady awaits `fetchGmpMilestoneHost` = `getGmpMilestoneHost$DataActRefresh` (R1; MilestoneWrapper.js:1256, data action 1136). The only effect after the await is `dispatch`, guarded by `if (isAlive())` (useMilestoneWrapper.ts:62). No post-await side effect.

### TransportDetail/hooks/useTransportDetail.ts
Origin: Orbit_ScreenBlocks.ScreenBlock_TransportDetail. OnReady awaits `fetchTransportDetail` = `get_TransportDetail$DataActRefresh` (R1; TransportDetail.js:508, data action 419). The only effect after the await is `dispatch`, guarded by `if (isAlive())` (useTransportDetail.ts:70). No post-await side effect.

### ViewDocuments/hooks/useViewDocuments.ts
Origin: Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments. OnReady awaits `fetchEventDocuments` = `getEventDocuments$DataActRefresh` (R1; ViewDocuments.js:1118, data action 664). The effects after the await are `write` calls guarded by `isAlive()` (useViewDocuments.ts:93-100). `onDocumentClick` and `onContactHelpdesk` have no await. No post-await side effect. (Note, outside the await rule: the `useHandleDownload` callbacks at useViewDocuments.ts:133-148 are plugin events, not flows with an await; a toast there is not checked.)

## Summary

Counts are side-effect rows after an await that are not plain state writes. `react-missing` is 0 everywhere: React never skips something that TST runs.

| Hook | Side effects | react-extra | react-missing | unclear |
|---|---|---|---|---|
| EventBooklet/useEventBooklet.ts | 6 | 5 | 0 | 0 |
| EventDetail/useEventDetail.ts | 3 | 2 | 0 | 0 |
| GuestArrangements/useGuestArrangements.ts | 4 | 2 | 0 | 0 |
| HelpersDetail/useHelperDetails.ts | 6 | 2 | 0 | 0 |
| HostSurvey/useHostSurvey.ts | 6 | 4 | 0 | 1 |
| LDM_Email_V2/useLdmEventEmail.ts | 7 | 2 | 0 | 0 |
| LDM_EventDetail_V2/useLdmEventDetail.ts | 9 | 4 | 0 | 1 |
| LDM_MyEvents_V2/useLdmMyEvents.ts | 4 | 4 | 0 | 0 |
| MilestoneDetail/useAccommodationHost.ts | 7 | 3 | 0 | 0 |
| MilestoneDetail/useMilestoneBlock.ts | 9 | 2 | 0 | 0 |
| MilestoneDetail/useMilestoneWrapper.ts | 0 | 0 | 0 | 0 |
| TransportDetail/useTransportDetail.ts | 0 | 0 | 0 | 0 |
| ViewDocuments/useViewDocuments.ts | 0 | 0 | 0 | 0 |

Patterns:
- P1 (nav after `checkDirectoryAccess`, 6 hooks: EventBooklet, GuestArrangements, HelperDetails, AccommodationHost, MilestoneBlock; EventDetail ViewHelpers): React runs the parent navigation event and the ViewHousehold audit log after the unmount. TST: R3 + R4 stop at `navigateTo_*`; the audit is not reached.
- P2 (audit/log after a data-action fetch): LDM_EventDetail_V2, LDM_MyEvents_V2 (4 audit calls). TST: R1 never reaches them.
- P3 (raise to flow handler after a failed R1 fetch): EventBooklet refresh flows, LDM_Email_V2, LDM_EventDetail_V2 OnReady, LDM_MyEvents_V2. TST: no handler.
- P4 (navigate/toast after a server write): HostSurvey (4), LDM_Email_V2 `navigateBack` (1). TST: R4 / R3 stop them; the LDM_Email toast is the JS node timer and shows in both.
- P5 (extra read calls after the first awaited fetch): EventDetail OnReady (4 reads), AccommodationHost OnReady (1 read), EventBooklet OnReady timers.
- Unclear: HostSurvey system-exception on post (React has no catch on the `void` call); LDM_EventDetail_V2 `setPreloadObject` (no preload node in the TST block).
