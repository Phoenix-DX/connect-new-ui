# Decisions of the clarify-screens questions

One row per question of the flow reports (§7). The answer is the user's. When the user accepted the recommendation
by id, the answer is the recommendation text of the report. Facts settled by the orchestrator's review are in
`review/G<n>-review.md`.

## App_Common (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | What does "Forgot Password?" do in the mock phase (F2)? | (a): the real reset page is not migrated, and (b) needs a toast text that no capture shows. | user, 2026-10-27 |
| Q2 | Do you accept the In_IsFromResetPIN order of Login in React (F4)? | (a): the end state is the same as on TST, and ADR-10 asks for the clear on logout. | user, 2026-10-27 |
| Q3 | When does Login get the device-awareness dialog (F3)? | (a): only the server login decides if a device is valid (KB UBT_AppManager `logic/device-awareness.md`). | user, 2026-10-27 |
| Q4 | Which event ends the Splash load in React (row 054)? | (a): the routing after the animation needs the session state that the app start sets. | user, 2026-10-27 |

## App_PIN (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | On PINRegister, "Back to login" runs the full `Connect_Logout` in React, but TST runs `AppManager_Logout` only (F2) | (a): the user sees no difference, and ADR-10 already asks for the clear. | user, 2026-10-27 |
| Q2 | Port `AppManager_SetPIN_IsRegistering` of `Pincode_Register` (F5)? | (a): no reader runs on the web. | user, 2026-10-27 |
| Q3 | PINUnlock goes to HomeFeed when `LastURL` is empty, but TST has no such branch (F3) | (a): an empty URL gives no defined screen in a single-page app. | user, 2026-10-27 |

## App_Policies (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Fact for the review pass: is the `Key` of `Get_MemoryCacheKey_UniqueKey` (UBTConnect_Utils) equal to `Client.UniqueCacheKey`? | (a): one MCP call settles it. | user, 2026-10-27 |
| Q2 | Keep the device id of `AcceptPolicies` in memory, or store it in `localStorage["UUID"]` as TST does (F4)? | (a): the server gets the same device id as from the original app. | user, 2026-10-27 |
| C4 |  | Follow TST: store the policy-acceptance device id in localStorage["UUID"] (one id per browser). Finding F4 stands; build it. Row 063. | user, 2026-10-27 |

## Home (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | FeedBlock_Services and FeedBlock_Updates keep the library cache defaults (F2) | (a): it matches TST, and useCommunityPopulationQuery on the same screen already does it. | user, 2026-10-27 |
| Q2 | Build the two states that the capture does not hold (the subscription banner, F1, and the open Dialog_GoExternalApp, F4) from the TST compiled view? | (a): the tree and the options are in the TST code; a capture adds only the pixels. | user, 2026-10-27 |
| Q3 | Does TST run FetchUpdates and GetServices again when HomeFeed comes back from the view cache (row 111)? | (a): one read-only check settles it. | user, 2026-10-27 |

## App_Menu (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | What does the OnException of the UI flow App_Menu do (row 040)? React sends every unhandled error of the Menu actions to the App_Common flow handler. | (b), then (a) when TST does not serve the file: TST is the source of truth. | user, 2026-10-27 |
| Q2 | Keep the Menu variables in the view cache (F1)? | (a): the runtime restores the screen variables, and the two other screens of the flow already do it. | user, 2026-10-27 |

## App_Menu_ContactUs (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Build the signed-out fields of ContactUsDetails (F1)? | (a): TST shows the fields, and the flow is blocked without them. | user, 2026-10-27 |
| C1 |  | Keep the React behaviour: the validators trim the input before the check (TST does not trim). Rows 122, 123 are differs by this decision. | user, 2026-10-27 |
| Q2 | Build the rating block ContactUs_Rate (F2)? | (a): the block is small, and three rules depend on it. | user, 2026-10-27 |
| Q3 | Behaviour of IsEmailValid and IsPhoneNumberValid in module UBTConnectLibrary: not in the dump, no KB page, and no TST source in the survey | (a): the file is a static script, and the comparison is short. | user, 2026-10-27 |
| Q4 | Fix the screen variables of DataAction_GetLocalityTimezone now (F3), or record the gap for the backend contract? | (a): the change is small, and the request then has the TST shape. | user, 2026-10-27 |

## App_Notifications (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | NotificationDetails has no board row | (a): TST is the source of truth, and the screen has no entry point on TST. | user, 2026-10-27 |
| Q2 | Can the preload branch of ScreenEvent_OnInitialize (BR-UBTCON-982) run on TST? React does not port it. | (b): on TST, Notifications opens no carousel, and no item has a click handler. | user, 2026-10-27 |
| Q3 | The DEV model of App_Notifications is newer than TST (§6.1) | (a): TST is the source of truth, and the DEV server calls (ToggleRead, Delete_Notifications, MarkAllAsReadNotifications) have no TST evidence yet. | user, 2026-10-27 |

## App_Profile (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Build the address section of the householder (F1), or keep it out of the app? | (a): the goal is a 1:1 replacement, and the householder is the member who edits the address. | user, 2026-10-27 |

## App_Services (G1)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Behaviour of SortableList in module SortableJS: not in the dump, no KB page | (a): the drag is the main interaction of the screen. | user, 2026-10-27 |
| Q2 | After a failed save, reset `isLoading` as TST does, or keep the skeleton and the disabled button (F1)? | (a): the compiled code is clear, and the user can try the save again. | user, 2026-10-27 |
| Q3 | Pass a failed `GetServices` fetch to the flow handler, as the runtime does (F2)? | (a), checked in the report of App_Common. | user, 2026-10-27 |
| Q4 | Set `document.title` from the screen title ("Services") (F5)? | (a): a small shared change, 1:1 with TST. | user, 2026-10-27 |

## Directory_Photobook (G2)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Photobook_Carousel registers SplideEvent_Moved on the Splide "moved" event (TST Photobook_Carousel :1041) | Rows 074, 076 and 105 need a recorded decision. CR-Photobook-1 (:34-36) covers only the toggle-drag failure logs. The NO-CONSOLE rule (`migration/stack.json` rules.forbidden, `migration/architecture.md:117`) is a lint rule for the code, not a decision on the original's debug output. | user, 2026-10-27 |

## Directory_SupperMeetings (G2)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Pass a failed GetSubdivision or GetSubdivisionHouseholds refresh to the flow handler, as TST does (F1)? | (a), with the same answer as App_Services Q3. | user, 2026-10-27 |

## Directory_OneSchoolGlobal (G2)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | OneSchoolGlobalDetails is open, and a navigation opens it with another `In_OneSchoolGlobalId` | (c), then (a): a page that shows the data of the old id is an error for the user. | user, 2026-10-27 |
| Q2 | Set the document title per route, as the TST runtime does (F1)? | (a): it follows TST in one place for all routes. | user, 2026-10-27 |

## Directory_Updates (G2)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | On Back to Updates_SingleList, do you accept the scroll offsets of the shell view cache in place of the anchor mechanism of TST (rows 073, 074, 095; F2)? | (b), then (a) when the positions are equal. | user, 2026-10-27 |
| Q2 | Do you want one shared check of the referenced library blocks against their TST files (row 148)? | (a): one pass covers every flow at the lowest cost. | user, 2026-10-27 |

## Bookmarks (G3)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Is the PROD value of `C2NewBookmarks` known now? The decision Bookmarks Q1 a (2026-10-22) keeps MyBookmarks "until the PROD value is known"; TST has opened the DEV screen Bookmarks since 2026-10-21. | (a) until the PROD value is confirmed; the report stays valid for the MyBookmarks branch. | user, 2026-10-27 |
| Q2 | Supper Meeting rows of BookmarksByGroup (F1): build the IsMainHall colours from the compiled expressions now, or keep the NotCaptured marker until the Locations group is captured on TST? | (a): the expressions are complete and the tokens exist in the theme. | user, 2026-10-27 |

## Notes (G3)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Does TST send the selected years (and sort) in `DataActionGetNotes` after Apply in the Notes filter sheet? Evidence: the screen passes its record `Notes_Filter` (`Notes.js:582`); the block model stores the input as is (` | A. The capture is a read; it settles the fact before a code change. | user, 2026-10-27 |

## Calendar (G3)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Pass a failed `DataActionGetEntertainingConfig` to the flow handler, as the runtime does (F1)? | (a): one fix for all fetches, 1:1 with TST. | user, 2026-10-27 |
| Q2 | Pass a failed token refresh to the flow handler, as TST does (F2)? | (a): the compiled code is clear, and the change is small. | user, 2026-10-27 |

## ContactFlow (G3)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | When telemetry is wired (U17), do the two Orbit app events send the full TST payload, with the subject and the message text (F1)? | (a): TST is the source of truth, and the sink stays a later step. | user, 2026-10-27 |
| Q2 | ContactByEmailMember with In_AuditEventId = EmailHost: after the send, TST shows no message, stays on the screen and keeps the button in the loading state | (a) for the mock phase; production decides on (b). | user, 2026-10-27 |

## Legacy_MyNotificationsFlow (G3)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | Build the Orbit and Assemble action button, the two click actions and the four navigation handlers of MessageDetail now (F2)? | (a): the code is in the TST files named in this report | user, 2026-10-27 |
| Q2 | Build the shared-item card of a Sharing message (F1) now or after the Legacy_Share report? | (a) | user, 2026-10-27 |
| Q3 | Add an adaptive-cards renderer to the stack (F3)? | (a), after the stack confirmation | user, 2026-10-27 |
| Q4 | For a private message of another user (F6): follow TST (toast, then show the message) or keep the React behaviour (toast, then back to the list)? | (a) | user, 2026-10-27 |

## Legacy_OrbitEventsFlow (G4)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | HostSurvey wizard (F1): build it now from the TST compiled code, or keep the placeholder? | (a) Build the HostSurvey wizard from the TST compiled code (model, controller and view of the ScreenBlock_HostSurvey files; mock for PostHostSurvey); recorded as build now, the build starts when the user orders it. | user, 2026-10-27 |
| C2 |  | Keep the React behaviour: IsGuestView starts false until the guests fetch (TST starts true). Row A121 is differs by this decision. | user, 2026-10-27 |
| Q2 | OrbitLanding "View Passport details" (F3): follow TST and remove it, or keep the DEV-only control? | (a) Follow TST: remove the DEV-only passport control, the event NavigateTo_PassportScan and its handler from OrbitLanding. Note for later comparison: the control and the screen PassportScan exist on DEV (dev-ahead.md). | user, 2026-10-27 |
| Q3 | MilestoneDetail (F2): build the five other milestone blocks from TST, or keep the placeholders? | (a) Build the five other milestone blocks (MealGuest, MealHost, MealHelper, AccommodationGuest, AccommodationHelper) from their TST files; recorded as build now. | user, 2026-10-27 |

## Legacy_OrbitAdminFlow (G4)

| Id | Question | Answer | By, date |
|---|---|---|---|
| Q1 | F1: remove the DEV-only milestone branch from OrbitAdminLanding? | (a) Follow TST: remove the GetMilestoneScanFF call, the milestone branch, the mock handler and the scanpermilestone scenario from OrbitAdminLanding. Note for later comparison: the branch and the screens OrbitAdminMilestones / OrbitAdminMilestoneDetail exist on DEV (dev-ahead.md). | user, 2026-10-27 |

## _shared (X)

| Id | Question | Answer | By, date |
|---|---|---|---|
| C3 |  | Finding accepted (major, F3): an app-start failure that is not a system exception must show the exception toast, as TST does. Build it. Row 193. | user, 2026-10-27 |
