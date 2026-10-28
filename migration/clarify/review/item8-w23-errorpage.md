# Item 8: the W23 flows and the error page `_error.html` (2026-10-28)

Deferred items of item 2 (`item2-fetch-errors.md` §5, `item2-solution.md` §5.1 and §8.2), ordered by the user on
2026-10-28. Evidence order: the MCP (DEV) first where the model holds the fact, then the compiled TST code (live).
The runtime rules below are in the TST runtime, not in the model, so the MCP has no part in them.

`W<n>` = character offset in `migration/runtime-sources/OutSystems.js` (the live TST runtime).

## 1. What the TST runtime does after the user leaves a screen or a block

Decision W23 (`migration/refactor/auto-decisions-2026-10-22.md:99`) set the React rule. `isAlive` guards the state
writes only. The app-level side effects of a flow that started run to the end after the unmount: toast, navigation,
counters, notification-opened and other server calls. W23 says: "the OutSystems fact is not verified on TST". The TST runtime
gives these facts:

| # | Fact | Evidence (TST runtime) |
|---|---|---|
| R1 | A data action or a screen aggregate whose answer comes after the controller is disposed does nothing: the promise neither resolves nor rejects. OnAfterFetch does not run, and a failure reaches no handler | `callServerDataSource` W533101-533700 (`if(!b.isDisposed)` on both `then` and `catch`); `executeScreenClientAggregate` W535250 (the same check) |
| R2 | A server action called in a client action has no such check: its answer comes back, and the flow goes on | `innerCallServerAction` W523585 |
| R3 | A call to a client action of a disposed screen or block throws ControllerDisposedException. It is an IgnorableSystemException, so the flow stops and nothing shows | `ensureControllerAlive` W534313; exception class W49870 (extends IgnorableSystemException); `ignoreError` W324172 (`IgnorableSystemException` → ignored) |
| R4 | A navigation (Destination, NavigateBack and the others) from a flow of a screen that is no longer active throws OutOfContextException (ignorable): no navigation, the flow stops | `navigateTo` → `validateContext` (Navigation module W221750); `isOutOfContext` W518580 (`activeScreen.viewName !== callContext.viewName`) |
| R5 | A feedback message (Message node) has no context check: it shows, also after the user left | `FeedbackMessageService.showFeedbackMessage` (module W325288) |
| R6 | The error page opens only from a valid context: `navigateToErrorPage` returns when the context is out of context | `ErrorHandling` module W322831 (`o.isValidContext(s)`) |

E9 of item 2 (a failed fetch after the user left shows no message) is R1.

Live check of R3 and R4 on TST (2026-10-28, `../tools/probe_leave_rules.cjs`, read-only guard on,
`probe-leave-rules.json`):
- The probe opened BrowseCountries, kept its controller and a call context, and left for Menu.
- After the transition, the old context is out of context and the controller is disposed.
- `navigateTo` with the old context throws OutOfContextException; the path stays `/UBTConnect/Menu` (R4).
- The screen's own `Handler_StatisticsList_Clicked` throws ControllerDisposedException (R3).
- Timing: at the navigation call and 150 ms later, the old screen is still the active screen. The switch comes when the
  new screen is active. So on TST a flow of the old screen can still navigate while the new screen loads. The client actions of a flow or of a module have a no-op
`ensureControllerAlive` (W524880), for example App_Common and UBTConnect_Utils. They run after the user left.

So W23 differs from TST in three places:
- after R1, nothing of the flow runs (React: the side effects after the await run, and a failure reaches the flow handler);
- R4: no navigation from a left screen (React: the navigation runs);
- R3: a nested screen or block action stops (React: it runs).

R2 and R5 agree with W23 (a server action flow goes on, a toast shows).

## 2. The error page `_error.html`

Fetched read-only (static GET, standing rule, in the TST manifest): `migration/runtime-sources/UBTConnect._error.html`
(5017 B) and `UBTConnect.error.js` (487 B).

| # | Fact | Evidence |
|---|---|---|
| P1 | The page is a separate HTML document. The runtime goes there with a full window change (`changeWindowLocation`). It first writes the message, the extra message and the exception info to sessionStorage (`ErrorPageMessage`, `ErrorPageExtraMessage`, `ErrorPageExceptionInfo`) | `navigateToErrorPage` W322831 |
| P2 | Markup: `#error-screen-wrapper` > `#error-screen-message-wrapper` (`#error-screen-message-text`, button `#error-screen-message-reload-button.error-screen-button`, `#error-screen-spinner`, `#error-screen-message-text-extra`) and `#exception-detail` ("Show Detail" button, hidden detail text) | `UBTConnect._error.html` body |
| P3 | Styles: body `#f2f2f2`; Open Sans 18 px `#333`; the message block 100 px from the top, 60 % wide, centred; the button text `#5DBDE6`, 120 px high; a 60 px CSS spinner; the spinner and the exception detail start hidden | `UBTConnect._error.html` `<style>` |
| P4 | Texts: the stored message, else `errorPageConfig.messages.defaultMessage`, else "There was an error processing your request."; the extra text, else `extraMessage`, else ""; the button `reloadLabel`, else "RELOAD". UBTConnect sets all of them to null and `showExceptionStack: false`. So the page shows the default message and "RELOAD", with no exception detail | `ErrorScreen` module W536056-538400; `migration/runtime-sources/UBTConnect.appDefinition.js` |
| P5 | A click on RELOAD hides the button, shows the spinner, and 2 s later loads the application root (`/UBTConnect/`) | `ErrorScreen` `u()` W537441; `reloadApplication` (Navigation module): `changeWindowLocation(<base path>)` |
| P7 | `handleError` stores an empty message (`s(e, undefined, undefined, t)`). So the page shows the default text, not the exception message. The exception message goes only to the log and to the hidden detail | `ErrorHandling` `l()` W322831 |
| P6 | The page writes the message to the log and flushes the logs to the server | `ErrorScreen` `a()` W536056 |

React today: `app/src/app/ErrorPageGate.tsx` renders `NotCaptured("error screen of the original app (_error.html)")`
with the exception message (item 2, design 5.1 b). `showErrorPage` (`app/src/platform/feedback/errorPage.ts`) is called
only by the last step of `raiseToFlowHandler` (`app/src/legacy/os/exceptions.ts:103`). It has no context check (R6).

## 3. The W23 hooks against TST

Four read-only agents compared 55 React hooks with their live TST code (`item8-inventory/group-A.md` to `group-D.md`).
They used the rules of §1. Each row is one side effect that a flow runs after an await.

| Group | Hooks | Side effects | react-extra | react-missing | unclear |
|---|---|---|---|---|---|
| A (messages, search, notes, updates, bookmarks, share) | 13 | 97 | 62 | 2 | 0 |
| B (directory, locality, household, photobook) | 15 | 38 | 23 | 0 | 0 |
| C (Assemble, Orbit admin, Orbit landing, QR code) | 14 | 54 | 36 | 0 | 2 |
| D (Orbit event blocks, LDM, milestones, documents) | 13 | 61 | 30 | 0 | 2 |
| Total | 55 | 250 | 151 | 2 | 4 |

`react-extra`: React runs the side effect after the user left; TST does not. No row is the other way round for W23.
The `same` rows are module client actions (for example the upgrade popup, the caches, the bookmark toggle) and toasts
(R5).

The react-extra rows fall into four patterns:

| # | Pattern | TST rule | Examples |
|---|---|---|---|
| X1 | The rest of a flow after a data action or an aggregate: the OnAfterFetch body (counters, the bottom bar count, audits, notification-opened, cache writes, more reads), its toasts, events and navigation | R1 | MessageDetail OnReady (`GetMessageInstance` is a data action with OnAfterFetch `GetMessageInstanceByIdOnAfterFetch`: MCP IDataAction, Connect2_LegacyShared); OrbitLanding; AssembleEventDetail toast; LDM audits |
| X2 | A failure of a data action or an aggregate goes to the flow handler (`raiseToFlowHandler`). `useFlowState` sends an OnReady or OnParametersChanged rejection to the flow handler, also after the unmount (`app/src/platform/navigation/flowState.ts:112, 121, 133`) | R1 | most hooks of groups B, C and D |
| X3 | A navigation or an event to the parent screen after an await. `useOsNavigate` has no context check | R3, R4 | the directory-access checks of 6 directory hooks and 6 Orbit hooks; HostSurvey after the post; LDM_Email_V2 back |
| X4 | A call to an own action of the screen or block after a server action (R2): the refresh, the read flags, the retracted flow | R3 | MessageDetail, MessageList, Updates_SingleList, Notes, Search, AdminEventDetail (the scan handler) |

Also, `dispatch` of `useFlowState` is not guarded after the unmount (`flowState.ts:82-87`). It updates the view cache.
TST drops the answer (R1), so a back navigation restores the state of the time of leaving.

## 4. Other findings of the inventory

| # | Finding | Evidence | Kind |
|---|---|---|---|
| N1 | TST added `GetMilestoneScanFF` and the milestone branch to OrbitAdminLanding in the publish of 2026-10-27. React removed them by the decision Legacy_OrbitAdminFlow Q1 (a) of 2026-10-27, which read the old survey | live survey: 13 hits of `MilestoneScan`; survey of 2026-10-13: 0 (`OrbitAdminLanding.mvc.js`); `group-C.md:155` | survey drift, needs a decision |
| N2 | FeedBlock_Updates: Mark as read and Mark as unread do not call `Directory_Updates_RefreshBottomBarCount(True)` after the server action | TST `FeedBlock_Updates` dump :751-770, :801-820; `group-A.md` (useFeedUpdates) | port gap |
| N3 | HostSurvey: a system exception of the post becomes an unhandled rejection (`void onPrimaryButton()`); TST sends it to the screen exception handler | `useHostSurvey.ts:237, 428, 432`; `group-D.md:75` | port gap |
| N4 | Assemble AttendeeSubdivision: TST calls `RememberFocusedScrollAnchor` before the household navigation; React does not | TST `AssembleEventDetail_AttendeeSubdivision` :747; `group-C.md:64` | port gap |
| N5 | LDM_EventDetail_V2 GoToHousehold sets the carousel preload after the subscription checks. On TST the screen handler `Handler_NavigateTo_HouseholdCarousel` sets it (`NavigationHandler.SetPreloadObject`); after leaving, that screen action stops (R3) | `useLdmEventDetail.ts:204`; TST `LDM_EventDetail_V2.mvc.js` `_handler_NavigateTo_HouseholdCarousel$Action`; `group-D.md:101` | react-extra (X3), closed |
| N6 | `ScreenBlock_MyBookmarks` and `ScreenBlock_BookmarkGroup` are not in the live survey (TST removed the modules, survey drift) | `group-A.md` sources note | known (deferred list) |

## 5. MCP checks per group (before each build wave, user, 2026-10-28)

The orchestrator checks the kind of each awaited call of a group with the MCP (DEV), one call at a time.

Group B (2026-10-28): DEV = TST on every call.

| Kind on the MCP | Names (module UBTConnect) |
|---|---|
| IDataAction (R1), each with the OnAfterFetch that the TST code calls in its `.then` where one exists | GetCountriesStatistics, GetLocalityStatistics, GetCommunityStatistics, GetHousehold, GetHousehold_Coordinates, Get_MemberDetails, Get_ParentHouseholdDetails, Get_LocalityDetails, GetLocalityHouseholds, GetInterchangesByLocalityId, Get_OneSchoolGlobal_List, Get_Subdivision_List, GetOneSchoolGlobalDetails, GetLocalityHouseholdIds (Fetch AtStart), GetHouseholdCaption, GetSubdivision, GetSubdivisionHouseholds |
| Module client action (runs after leaving) | HasAccessToRegion (folder User; calls `UBTConnect_Utils.Cache_UserInfo_Get`, then only assignments) |

Group A (2026-10-28): DEV = TST on every call that the MCP holds.

| Kind on the MCP | Names |
|---|---|
| IDataAction (R1) | Connect2_LegacyShared: GetMessageInstance, GetShare, GetAvailableUsers (Fetch AtStart), GetMessageInstanceById2, GetMessages. UBTConnect: FetchUpdates, GetNotes, FetchNotifications, GetDateRanges, FetchSearchResults, Get_FilteredRecentClickedResults |
| IScreenAggregate (R1) | Connect2_LegacyShared: GetMessageTemplateParametersByMessageTemplateId, GetShareObjectTypeById (Fetch AtStart). UBTConnect: Get_SearchBirthdayOptions |
| Not on the MCP | `Connect2_MyBookmarks_MUI` (GetGroupSummaries, GetAllBookmarksByGroup): the module is not open in Service Studio, and TST removed it (N6). The TST evidence is the earlier static fetch |

The server actions of group A (for example Wrapper_NotificationOpened, MarkMessageAsRead, the MarkAsRead and
MarkAllAsRead actions) are `callServerAction` calls in the TST code (R2).

Group C (2026-10-28, after the user opened Connect2_Assemble_MUI in Service Studio): DEV = TST on every call.

| Kind on the MCP | Names |
|---|---|
| IDataAction (R1) | Connect2_Assemble_MUI: GetAssembleEvent, GetAssembleEventTypes, GetAssembleMeetingSummaryList, GetSubdivisionName. Connect2_OrbitMobile_MUI: Get_EventInformation, Get_AdminEventsList, Get_EventQRCode, Get_EventsByMemberId, Get_HouseholdMembers. UBTConnect: GetAssembleNotes (Fetch AtStart) |

Group D (2026-10-28): DEV = TST on every call.

| Kind on the MCP | Names (module Connect2_OrbitMobile_MUI) |
|---|---|
| IDataAction (R1) | GetAccommodationGuest, GetCaptions, GetAccommodationHelper, GetAccommodationHost, Get_Document, Get_EventBookletFilters, Get_EventBookletGuests, Get_EventBookletHelpers, FetchEventNotes (Fetch AtStart), Get_EventDetails, Get_HasDocuments, Get_HasQRCode, Get_HostSurveyStatus, GetCoordinatorDetails, GetEventByEventId, GetGuestArrangements, GetHelperDetails, GetHostSurvey, GetMealGuest, GetMealHelper, GetMealHost, GetGmpMilestoneHost, GetEventsForCalendar, GetEventsForMyTimeline, Get_TransportDetail, GetEventDocuments |

All four groups are checked: 76 data actions and aggregates, all of the kind that the TST code shows.

## 6. Facts for the cleanup step S5

- S2c Q1, MessageList (2026-10-28). The screen action RefreshMessages refreshes GetMessages and has no exception
  handler (MCP IScreenAction RefreshMessages, Connect2_LegacyShared). In the TST code, its catch and the catch of
  OnScrollEnding throw the error again (`ScreenBlock_MessageList` dump :1654-1707, :1829-1902). So a failed GetMessages
  stops OnScrollEnding before `isLoadMore = False`, and also OnHandle_SearchHistorySelectedItem and OnParametersChanged
  (PullToRefresh before the PullToRefreshTriggered event, :1529-1588, :1756-1795). The error goes to the flow handler
  once. React (`useMessageList.ts` `refreshGetMessages`) raises and returns false, and its callers go on. S5 makes it
  throw (the user's decision (a)).
