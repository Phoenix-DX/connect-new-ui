# Clarify screens: index of the flow reports

One report per UI flow of `UBTConnect` (DEV model through the MCP as the checklist; TST is the source of truth).
Rows and verdicts come from `flows/<Flow>/checklist.json`; findings, questions and notes from `report.md` §5–§7.
Verdicts: match · partial · missing · differs · mock-only · n/a · unclear (meaning in `PLAN.md` §4).

## 1. Verdict matrix

| Group | Flow | Status | Rows | match | partial | missing | differs | mock-only | n/a | unclear | Findings (B/M/m/i) | Questions |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G1 | [App_Common](flows/App_Common/report.md) | draft | 182 | 129 | 4 | 3 | 19 | 4 | 20 | 3 | 0/1/2/3 | 4 |
| G1 | [App_PIN](flows/App_PIN/report.md) | draft | 131 | 117 | 4 | 0 | 3 | 1 | 6 | 0 | 0/0/1/4 | 3 |
| G1 | [App_Policies](flows/App_Policies/report.md) | draft | 90 | 73 | 6 | 0 | 2 | 2 | 5 | 2 | 0/1/3/2 | 2 |
| G1 | [Home](flows/Home/report.md) | draft | 148 | 122 | 5 | 0 | 1 | 5 | 14 | 1 | 0/0/3/1 | 3 |
| G1 | [App_Menu](flows/App_Menu/report.md) | draft | 122 | 110 | 1 | 0 | 3 | 4 | 3 | 1 | 0/0/1/1 | 2 |
| G1 | [App_Menu_ContactUs](flows/App_Menu_ContactUs/report.md) | draft | 147 | 104 | 11 | 21 | 0 | 3 | 6 | 2 | 1/2/0/0 | 4 |
| G1 | [App_Notifications](flows/App_Notifications/report.md) | draft | 120 | 102 | 2 | 4 | 0 | 2 | 9 | 1 | 0/2/0/0 | 3 |
| G1 | [App_Profile](flows/App_Profile/report.md) | draft | 110 | 70 | 11 | 21 | 0 | 2 | 6 | 0 | 0/1/1/4 | 1 |
| G1 | [App_Services](flows/App_Services/report.md) | draft | 81 | 67 | 6 | 2 | 0 | 2 | 2 | 2 | 0/2/3/2 | 4 |
| G2 | Directory_Locality | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_Household | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_Search | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_Photobook | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_SupperMeetings | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_OneSchoolGlobal | pending | |  |  |  |  |  |  |  | | |
| G2 | Directory_Updates | pending | |  |  |  |  |  |  |  | | |
| G3 | Bookmarks | pending | |  |  |  |  |  |  |  | | |
| G3 | Notes | pending | |  |  |  |  |  |  |  | | |
| G3 | Calendar | pending | |  |  |  |  |  |  |  | | |
| G3 | ContactFlow | pending | |  |  |  |  |  |  |  | | |
| G3 | Legacy_Share | pending | |  |  |  |  |  |  |  | | |
| G3 | Legacy_MyNotificationsFlow | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_OrbitEventsFlow | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_OrbitAdminFlow | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_OrbitQRCodeFlow | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_LDMEventsFlow | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_LDMEventsFlow_V2 | pending | |  |  |  |  |  |  |  | | |
| G4 | Legacy_AssembleFlow | pending | |  |  |  |  |  |  |  | | |
| G5 | Map | pending | |  |  |  |  |  |  |  | | |
| G5 | Deprecated_Calendar_PersonalEvent | pending | |  |  |  |  |  |  |  | | |
| G5 | zTemp_Flow | pending | |  |  |  |  |  |  |  | | |
| G5 | zDEV_Directory_CommunityBusinessBlocks | pending | |  |  |  |  |  |  |  | | |
| X | _shared | pending | |  |  |  |  |  |  |  | | |
| | **total (9/33 flows)** | | 1131 | 894 | 50 | 51 | 28 | 25 | 71 | 12 | 1/9/14/17 | |

## 2. Findings by severity (blocker and major first)

| Flow | Id | Severity | Screen / element | Finding | React location |
|---|---|---|---|---|---|
| App_Menu_ContactUs | F1 | blocker | ContactUsDetails / If not isLogged (Input_FullName, Input_Email, Input_PhoneNumber, Dropdown_Country, Input_Locality) | TST shows five more fields to a signed-out user: labels, inputs with Mandatory and MaxLength 50, the Country list from DataAction_GetCountriesNames, and their OnChange actions. React shows a `NotCaptured` placeholder. IsFormFilled needs all six trimmed fields, so Send stays disabled. A signed-out user opens the screen from "Need help? Contact Us" on Login (TST `Login.mvc.js:525`, React `LoginFooter.tsx:12`; BR-UBTCON-965) and cannot send a message. The three field messages of OnClick_SubmitForm have no widget to show on. | `app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:79-91`; `hooks/useContactUsDetails.ts:133-147` |
| App_Common | F1 | major | App_Common flow OnException / BubbleCommunicationException | TST tests `UBTConnect.BubbleCommunicationException` first and shows the communication toast (flow controller :31-39). `raiseToFlowHandler` has no such branch, so the error goes to `showExceptionMessage(message, false)`. For a non-ok answer the message is "Request failed with status N", and no rule of ShowExceptionMessage matches it. React shows the raw text as an error toast; TST shows "Service Interruption" (or "No internet connection…" offline). The screens that bubble errors: CountryList, Profile, Search, Services and EntityDetailsActions. Rows: 166. | `app/src/legacy/os/exceptions.ts:69-84`; `app/src/platform/feedback/bubbleErrors.ts:25-27` |
| App_Menu_ContactUs | F2 | major | ContactUsDetails / ContactUs_Rate, ContactUs_RateRateSelected | The rating block is not built, and no handler sets `Rate_SelectedRate`. On the feedback subject a signed-in user cannot give a rating (BR-UBTCON-975, BR-UBTCON-972). Send needs a message, because the rate stays 0 (BR-UBTCON-968). SendContactUsMessage always gets `Rate` 0 (BR-UBTCON-970). | `components/ContactUsMessageForm.tsx:63-65`; `hooks/contactUsDetailsState.ts:43-44` |
| App_Menu_ContactUs | F3 | major | ContactUsDetails / DataAction_GetLocalityTimezone, CacheControl_UserInfo_WrapperResult | TST keeps the user record in `LocalCacheControl_UserInformation` and sends it with the data action. The server reads `In_LocalityId` from it. React does not keep the record. Its call has no `LocalCacheControl_UserInformation`, `ContactUsForm`, `Description` or `MessagePrompt`. The recorded TST call had them, and the fixture converter dropped them. A real server does not get the locality id from this call. | `hooks/contactUsDetailsState.ts:262-282, 300-305` |
| App_Notifications | F1 | major | Notifications / If_HasNoNotifications, Notifications_NoItemsFound | When a completed fetch returns no notification, TST shows `Notifications_NoItemsFound`: a calendar icon, "No Notifications Found" and "We were unable to find any Notifications to display." (BR-UBTCON-983). React renders a `NotCaptured` marker without children, which renders nothing in a built app. The content area stays empty. | `app/src/pages/Notifications/NotificationsPage.tsx:155-156`; `app/src/platform/feedback/NotCaptured.tsx:7-8` |
| App_Notifications | F2 | major | Notifications_Header / If_HasBadge | TST shows the Badge only when `BadgeNumber > 0` (BR-UBTCON-981). React always renders it, so a section with no unread notification shows a red "0" badge. The mock gives every section an unread item, so the parity check does not see it. | `app/src/pages/Notifications/components/Notifications_Header.tsx:52` |
| App_Policies | F1 | major | AcceptPendingPolicies / Policy_Custom_AcceptPendingPolicies input PolicyApplications | TST sends `TextToIdentifier` of the Connect_Applications records: the GUID texts of Connect, Directory and Orbit (`static-entities-tst.json:2809`). React sends the names `Connect_Applications.Connect`, `.Directory` and `.Orbit`. The comment of `staticEntities.ts` says that the values are not in the compiled code; the TST values are in the knowledge file since 2026-10-15. The mock ignores the input. When the server finds no pending policy for these ids, the screen shows "You have accepted all required policies." and clears the flag after 5 seconds (BR-UBTCON-944), with no acceptance. | `app/src/pages/AcceptPendingPolicies/staticEntities.ts:14-20`; `app/src/pages/AcceptPendingPolicies/AcceptPendingPoliciesPage.tsx:12-13` |
| App_Profile | F1 | major | Profile / address section (`#isHouseholder_Address`, `#isHouseholder_Cache`, the householder checks of OnClick_Save) | For a householder, React shows the title "Address Information" in a NotCaptured marker only. Not built: the address lines, the Locality and Subdivision DropdownSearch, CacheControl_AllLocalities, CacheControl_AllSubdivisions and their Result actions, Action_RefreshSubdivionList, the two OnChanged actions, DropdownSearch_ForceResizeOnOpen and the householder checks of OnClick_Save (BR-UBTCON-988, 989, 994). A householder cannot edit the address, and a save skips the locality, subdivision and required-line checks. The only record of this choice is an auto-accepted answer (`migration/knowledge/auto-decisions-2026-10-15.md:64`). The board row of Profile does not name it. | `app/src/pages/Profile/ProfilePage.tsx:85-89`; `app/src/pages/Profile/hooks/useProfile.ts:106-107, 139-141` |
| App_Services | F1 | major | Services / OnClick_SaveChanges, exception handlers | TST sets `isLoading` to False in the CommunicationException and AllExceptions handlers, then raises the bubble exception. React raises the same exceptions but keeps `isLoading` True. The skeleton covers the lists, and "Save changes" stays disabled with the spinner until the user leaves the screen. The code comment and the test say "as in the original". No ADR, CR, board row or entry of `known-original-bugs.md` records it. | `app/src/pages/Services/hooks/useServices.ts:80-81, 98-100`; `app/src/pages/Services/Services.test.tsx:110-128` |
| App_Services | F2 | major | Services / GetServices failure | The runtime (`OutSystems.js:3853`) flushes the model and calls the screen `handleError` when a data fetch fails. App_Services passes the error to App_Common OnException, which shows the communication toast or the exception toast. React only sets the `list-error` class. The error of the query reaches no flow handler. CountryDetails has the same gap (`useCountryDetails.ts:110-115`). | `app/src/pages/Services/hooks/useServices.ts:46-52`; `app/src/api/client/queryClient.ts:15-18` |
| App_Common | F2 | minor | Login / "Forgot Password?" (Login, isResetPassword True) | TST sets IsResettingPassword (spinner, Login button disabled) and starts the reset-password policy of the identity provider. A completed reset ends with a success toast (IdP_OnResetPassword). React runs the built-in validation only: the click changes nothing on the screen. U4 covers "Login with UBT One" only, and no other record names this behaviour. Rows: 025, 031, 040. | `app/src/pages/Login/hooks/useLogin.ts:24-26, 97-99` |
| App_Common | F3 | minor | Login / OnReady, device awareness | React compares CallbackType with `'AppManager_JSUtils_CustomEvents.DeviceAwareness_InvalidDevice'`. The TST value is "DeviceAwareness_InvalidDevice" (`migration/knowledge/static-entities-tst.json:2643`), so `Login?CallbackType=DeviceAwareness_InvalidDevice` still runs DelayedMessage_Show. AppManager_HandleDeviceAwarenessPopUp is not built, so nothing opens ConfirmationDialog_ResetPassword. Rows: 033, 043. | `app/src/pages/Login/hooks/useLogin.ts:10-12, 82-87` |
| App_Menu | F1 | minor | Menu / view cache (row 006) | The runtime restores the screen variables of a view from the view cache (U19, P-BACK). TST Menu has no `IsViewRestoredFromCache` check: OnInitialize rebuilds MenuOptionList, and `LocalCacheControl_UserInformation` keeps its restored value. React keeps no Menu variable in the view cache. A Back to Menu starts with `isFetched` false, so the header shows the skeleton until CacheControl_UserInfo answers. TermsAndPoliciesMenu and PINBiometricsMenu use `useViewState`. No decision names the difference. | `app/src/pages/Menu/hooks/menuState.ts:17`; `app/src/pages/Menu/hooks/useMenu.ts:35` |
| App_PIN | F1 | minor | Block_PINRegister_ContentWrapper / ScreenEvent_OnInitialize | TST sets `UserName` from `AppManager_GetCachedUserInfo` (a synchronous, local AppManager record). React reads `getUserInformation()`: the `Directory_UserCurrent` record of the user-info cache. That read is asynchronous, and on a cache miss it calls the server action GetUserInformation. The name can come from another source in production, and the first render shows "Welcome " without the name. The README says the action has no counterpart, but `appManager_GetCachedUserInfo` now exists. | `app/src/platform/session/usePinRegisterContent.ts:87-95`; `app/src/components/auth/PinRegisterContent/README.md:49-51` |
| App_Policies | F2 | minor | Policy_Custom_AcceptPendingPolicies / GetPendingPolicies | The query keeps the TanStack defaults `refetchOnReconnect: true` and `networkMode: 'online'`. An offline-then-online event fetches the list again: every tick goes, but `isAllSelected` stays True, so Continue stays enabled and sends an empty list. While TanStack counts the browser offline, a fetch waits and the communication message does not show. OutSystems does not fetch on reconnect, and an offline call fails with the message. | `app/src/api/policy/hooks.ts:13-19` |
| App_Policies | F3 | minor | AcceptPendingPolicies / AcceptPendingPoliciesAcceptedAll | TST runs the screen action through `safeExecuteClientAction`: an exception goes to the screen handleError, then App_Policies and App_Common, which show the message. React has no catch: `continueOnClick` awaits `onAcceptedAll` outside its `try`, and the 5-second timer calls it with `void`. A failed user-info read (cache miss and network error) leaves an unhandled rejection and no message. | `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts:58-68`; `app/src/pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:84-87, 129` |
| App_Policies | F4 | minor | Policy_Custom_AcceptPendingPolicies / GetDeviceInfo | TST keeps one device id per browser in `localStorage["UUID"]` and sends it as `DeviceDetails.UniqueId`. React makes a new id on each page load. The server records of the acceptances get a different device id each time. The code cites "AGENTS rule 16, Q4", which is not a recorded decision of the kinds that this check accepts. | `app/src/pages/AcceptPendingPolicies/actions.ts:50-66` |
| App_Profile | F2 | minor | Profile / Input_Email, HomeNumber2, Input_MobileNumber, Input_WorkNumber | FormInput sets no `maxLength` and no `autoComplete`. TST limits Input_Email to 50 characters and the three phone inputs to 15. The phone inputs have `autocomplete="off"` in TST. A user can type longer values in React, and the save sends them. | `app/src/pages/Profile/components/FormInput.tsx:11-47`; `app/src/pages/Profile/components/PersonalInformationSection.tsx:60-68`; `app/src/pages/Profile/components/ContactInformationSection.tsx:55-63, 82-90, 117-125` |
| App_Services | F3 | minor | Services / Action_ChangeOrderLocal | TST sets `HasChanges` to True first and changes the lists in place. When a list action fails, the earlier steps stay. Example: a touch drag to the top of the favourites (NewOrder -1, bug B3) removes a row, then ListInsert2 fails. React works on copies and throws before it stores them, so the lists and `HasChanges` do not change. The rule "1:1, bugs included" (`known-original-bugs.md`, user 2026-10-14) applies. | `app/src/pages/Services/hooks/servicesState.ts:63-64, 98-101`; `app/src/pages/Services/hooks/useServices.ts:61-74` |
| App_Services | F4 | minor | Services / list actions of Action_ChangeOrderLocal | The runtime `List.checkIndex` raises "Index out of bounds. Index n for bounds [0, m]." (or "… for empty list."). The flow handler shows this text in the toast. React throws "Index out of range". | `app/src/pages/Services/hooks/servicesState.ts:26-30` |
| App_Services | F5 | minor | Services / screen title | The runtime sets `document.title` to the screen title ("Services") when the screen mounts (`OutSystemsReactView.js:2009`). No code of the React app sets `document.title`, so the tab shows "UBTConnect" on every screen. | `app/index.html:6`; `app/src/app/routes.generated.ts:31` (title present, not used) |
| Home | F1 | minor | FeedBlock_Updates / If not HasAccess (#DoesntHaveAccess) | TST: CustomContainer > container (text-align center) > container display-inline-block > IconText "Subscription upgrade required" (BlueDark, ExtraSmall, SemiBold) with Icon Lock (BlueDark, NonStandard_16). React renders the CustomContainer with plain text inside NotCaptured: no lock icon and no text style. A user without access to an update sees another banner. | `app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:109-123` |
| Home | F2 | minor | FeedBlock_Services / GetServices; FeedBlock_Updates / FetchUpdates | Both queries use the library defaults (gcTime 5 minutes, refetchOnReconnect true). TST fetches at block start: a new HomeFeed shows the skeleton page (five empty services, three loading rows) until the answer, and a reconnect does not fetch. React shows the old lists at once on a new visit, and fetches again after a reconnect. The comment of useFeedServicesQuery describes this; no decision record names it. | `app/src/api/service/hooks.ts:21-33`; `app/src/api/update/hooks.ts:10-16` |
| Home | F4 | minor | Dialog_GoExternalApp (UBTConnect_Utils) / open state | TST puts the icon in a container with "text-align: center" (:281) and the confirm label in a CustomContainer with display flex, row and centred items (:447-450). React leaves both out, and its component doc says so. The icon and the label do not get the TST alignment. | `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx:31-35, 71-125` |

Info findings: 17 (in the reports, §5).

## 3. Questions for the user, by group

### G1

| Flow | Id | Question | Recommendation | Answer |
|---|---|---|---|---|
| App_Common | Q1 | What does "Forgot Password?" do in the mock phase (F2)? | (a): the real reset page is not migrated, and (b) needs a toast text that no capture shows. | |
| App_Common | Q2 | Do you accept the In_IsFromResetPIN order of Login in React (F4)? | (a): the end state is the same as on TST, and ADR-10 asks for the clear on logout. | |
| App_Common | Q3 | When does Login get the device-awareness dialog (F3)? | (a): only the server login decides if a device is valid (KB UBT_AppManager `logic/device-awareness.md`). | |
| App_Common | Q4 | Which event ends the Splash load in React (row 054)? | (a): the routing after the animation needs the session state that the app start sets. | |
| App_PIN | Q1 | On PINRegister, "Back to login" runs the full `Connect_Logout` in React, but TST runs `AppManager_Logout` only (F2). Do you accept the extra cache clear on this path? | (a): the user sees no difference, and ADR-10 already asks for the clear. | |
| App_PIN | Q2 | Port `AppManager_SetPIN_IsRegistering` of `Pincode_Register` (F5)? | (a): no reader runs on the web. | |
| App_PIN | Q3 | PINUnlock goes to HomeFeed when `LastURL` is empty, but TST has no such branch (F3). Is this the decided behaviour? | (a): an empty URL gives no defined screen in a single-page app. | |
| App_Policies | Q1 | Fact for the review pass: is the `Key` of `Get_MemoryCacheKey_UniqueKey` (UBTConnect_Utils) equal to `Client.UniqueCacheKey`? | (a): one MCP call settles it. | |
| App_Policies | Q2 | Keep the device id of `AcceptPolicies` in memory, or store it in `localStorage["UUID"]` as TST does (F4)? | (a): the server gets the same device id as from the original app. | |
| Home | Q1 | FeedBlock_Services and FeedBlock_Updates keep the library cache defaults (F2). Do you want each new HomeFeed to fetch with the skeleton, as TST does? | (a): it matches TST, and useCommunityPopulationQuery on the same screen already does it. | |
| Home | Q2 | Build the two states that the capture does not hold (the subscription banner, F1, and the open Dialog_GoExternalApp, F4) from the TST compiled view? | (a): the tree and the options are in the TST code; a capture adds only the pixels. | |
| Home | Q3 | Does TST run FetchUpdates and GetServices again when HomeFeed comes back from the view cache (row 111)? | (a): one read-only check settles it. | |
| App_Menu | Q1 | What does the OnException of the UI flow App_Menu do (row 040)? React sends every unhandled error of the Menu actions to the App_Common flow handler. | (b), then (a) when TST does not serve the file: TST is the source of truth. | |
| App_Menu | Q2 | Keep the Menu variables in the view cache (F1)? | (a): the runtime restores the screen variables, and the two other screens of the flow already do it. | |
| App_Menu_ContactUs | Q1 | Build the signed-out fields of ContactUsDetails (F1)? | (a): TST shows the fields, and the flow is blocked without them. | |
| App_Menu_ContactUs | Q2 | Build the rating block ContactUs_Rate (F2)? | (a): the block is small, and three rules depend on it. | |
| App_Menu_ContactUs | Q3 | Behaviour of IsEmailValid and IsPhoneNumberValid in module UBTConnectLibrary: not in the dump, no KB page, and no TST source in the survey. React uses two regular expressions with no source. How do we confirm them? | (a): the file is a static script, and the comparison is short. | |
| App_Menu_ContactUs | Q4 | Fix the screen variables of DataAction_GetLocalityTimezone now (F3), or record the gap for the backend contract? | (a): the change is small, and the request then has the TST shape. | |
| App_Notifications | Q1 | NotificationDetails has no board row. Add one? | (a): TST is the source of truth, and the screen has no entry point on TST. | |
| App_Notifications | Q2 | Can the preload branch of ScreenEvent_OnInitialize (BR-UBTCON-982) run on TST? React does not port it. | (b): on TST, Notifications opens no carousel, and no item has a click handler. | |
| App_Notifications | Q3 | The DEV model of App_Notifications is newer than TST (§6.1). How do we track it? | (a): TST is the source of truth, and the DEV server calls (ToggleRead, Delete_Notifications, MarkAllAsReadNotifications) have no TST evidence yet. | |
| App_Profile | Q1 | Build the address section of the householder (F1), or keep it out of the app? | (a): the goal is a 1:1 replacement, and the householder is the member who edits the address. | |
| App_Services | Q1 | Behaviour of SortableList in module SortableJS: not in the dump, no KB page. Add the TST source of SetupList (`SortableJS.controller.js`) and check `setupList.ts` against it? | (a): the drag is the main interaction of the screen. | |
| App_Services | Q2 | After a failed save, reset `isLoading` as TST does, or keep the skeleton and the disabled button (F1)? | (a): the compiled code is clear, and the user can try the save again. | |
| App_Services | Q3 | Pass a failed `GetServices` fetch to the flow handler, as the runtime does (F2)? | (a), checked in the report of App_Common. | |
| App_Services | Q4 | Set `document.title` from the screen title ("Services") (F5)? | (a): a small shared change, 1:1 with TST. | |

## 4. DEV vs TST differences and KB disagreements

- **App_Common**: DEV≠TST rows 2; KB disagreements 3 (K1, K2, K3) — report §6
- **App_PIN**: DEV≠TST rows 0; KB disagreements 4 (K1, K2, K3, K4) — report §6
- **App_Policies**: DEV≠TST rows 1; KB disagreements 2 (K1, K2) — report §6
- **Home**: DEV≠TST rows 8; KB disagreements 2 (K1, K2) — report §6
- **App_Menu**: DEV≠TST rows 0; KB disagreements 2 (K1, K2) — report §6
- **App_Menu_ContactUs**: DEV≠TST rows 2; KB disagreements 3 (K1, K2, K3) — report §6
- **App_Notifications**: DEV≠TST rows 16; KB disagreements 3 (K1, K2, K3) — report §6
- **App_Profile**: DEV≠TST rows 0; KB disagreements 3 (K1, K2, K3) — report §6
- **App_Services**: DEV≠TST rows 0; KB disagreements 2 (K1, K2) — report §6
