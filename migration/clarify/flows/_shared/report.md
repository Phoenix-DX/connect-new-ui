# Flow report: _shared

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Unit | 33 module client actions that 4 or more flows use; 67 client actions that no screen flow reaches (app start, network, push and deep links, orientation, store links, calendar helpers, ElementCache, sync); 13 client variables; 18 server and service actions. No screen of its own. |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `draft.json` and `notes.md` (reader), `app/src/platform/bootstrap/*`, `app/src/lib/ubtConnect/actions.ts`, `app/src/platform/feedback/networkStatus.ts`, TST `UBTConnect.controller.js` (UC), `UBT_AppManager_Mobile.controller.js`, `UBTConnectLibrary.controller.js`, KB pages of `pack/kb.md`, `migration/app-shell.spec.md` (U-decisions) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in section 6. |

## 1. Summary

- Counts by verdict: match 82 · partial 1 · missing 2 · differs 5 · mock-only 7 · n/a 97 · unclear 0 (same as `checklist.json`).
- F1 (minor): `GetShareType_FromEntity` tests `IsMyHousehold` inside the Household case; TST tests it after all entity cases. Latent: the only React caller passes `false`.
- F2 (info): the app start does not add the `preconnect` and `dns-prefetch` links for the MyEntertaining and Feed base URLs (`AddCustomHeadersJS`).
- Q1: the app-start failure shows no toast in React; TST passes the message to `ScreenController_RaiseError`.
- Status: every shared action that a built screen uses is in React and follows TST (46 of the 59 shared-action rows match). The app-start chain runs the TST steps in the TST order. The two changes of order and the extra steps have a recorded decision (CR-Search-3, plan v2). Push, deep-link plugins, Firebase, orientation, keyboard and store links are out by the decisions U12, U14, U16, U17 and U18. The calendar and recurrence helpers serve dead screens only.

Row ids below are `_shared-<nnn>` of `checklist.json`, written as `nnn`.

## 2. Actions

### 2.1 Shared client actions (33, used by 4 or more flows)

| Id | Action / element | OutSystems (DEV; TST where it differs) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | App_CommonFilter_CheckCountry: loop over SubscribedCountries | IsEnabled when a Code equals CountryCode (Trim, ToUpper) | `some((c) => sameId(c.Code, countryCode))` | match | `app/src/lib/ubtConnect/actions.ts:138-140`; BR-UBTCON-256 |
| 002-004 | App_CommonFilter_DefineOptionNames: ListClear, ListFilter by Id, append DisplayText when not empty | rebuilds SelectedNames | returns a copy with a new `SelectedNames` list | match | `actions.ts:124-134`; BR-UBTCON-269 |
| 005-008 | Directory_Updates_RefreshBottomBarCount: need-refresh test, server call, two client variables, else branch | DiffMinutes >= CheckFrequency or ForceRefresh | same test, `fetchUnreadUpdateItemsCount`, two `setClientVar` | match | `actions.ts:66-70`; BR-UBTCON-171; callers `BottomBar.tsx:66,75` |
| 009 | ExitApplicationForWebViewUpdate | `window.navigator.app.exitApp` after Delay | none; the exit dialog has its own `exitApp()` (`platform/navigation/exitConfirmation.ts:9-12`) | n/a | native only: U16 (app-shell.spec.md:348, 383); BR-UBTCON-506 |
| 010 | GetBookmarkCategoryId_ByEntityTypeId: Member | DEV: BookmarkCategory.Member. TST: raises InvalidAction "Bookmarks not available" (UC:7168-7171) | no Member case; default throws | match | `actions.ts:214-228`; React follows TST; section 6.1 D1 |
| 011 | same: Locality, Household, Interchange, SupperMeetings, OneSchoolGlobal | DEV: OneSchoolGlobal2. TST: `bookmarkCategory.oneSchoolGlobal` (UC:7205) | `BookmarkCategory.OneSchoolGlobal` | match | `actions.ts:216-225`; section 6.1 D2 |
| 012 | same: otherwise raise | InvalidAction "Bookmarks not available" | `throw new UserException('Bookmarks not available', 'UBTConnect.InvalidAction')` | match | `actions.ts:226-227` |
| 013-014 | GetNameAndSurname_ByFullName | last word = surname; name keeps a leading space per part | same | match | `actions.ts:201-207`; BR-UBTCON-259 |
| 015 | GetShareType_FromEntity: Member | raises "Share not available" | default throws | match | `actions.ts:180-195` |
| 016 | same: Locality, Interchange, Household, SupperMeetings, OneSchoolGlobal, FeedItem | six cases | same six cases | match | `actions.ts:182-192` |
| 017 | same: IsMyHousehold | tested after all entity cases: Household always returns Household; MyHousehold only when no entity case matched (UC:11100-11215, `if(vars.value.isMyHouseholdInLocal)` after the FeedItem case) | tested inside the Household case: `isMyHousehold ? MyHousehold : Household` | partial | `actions.ts:185-186`; F1 (minor). Latent: the only caller passes `false` (`containers/EntityDetailsActions/entityDetailsActionsState.ts:83`); BR-UBTCON-244 states the TST order |
| 018 | same: otherwise raise | "Share not available" | `throw` | match | `actions.ts:194` |
| 019 | GetSkeletonList_UI_HouseholdMembers | loop ListLength times | `Array.from({ length }, getSkeleton_UI_HouseholdMember)` | match | `actions.ts:361-363` |
| 020 | GetSkeleton_HouseholdActions | four flags True | same | match | `actions.ts:444-446` |
| 021 | GetSkeleton_UI_HouseholdCard | ConvertRecord into UI_Household_Card, Id "1" | `{ Id: '1', Household_Card_Content }` | match | `actions.ts:439-441`; the pack cuts the ConvertRecord text (about 220 characters) |
| 022 | GetSkeleton_UI_HouseholdCardContent | nine placeholder values | same nine values | match | `actions.ts:424-436` |
| 023 | GetSkeleton_UI_HouseholdDetails | card + actions | same | match | `actions.ts:450-452` |
| 024 | GetSkeleton_UI_HouseholdMember | FirstName, LastName, Initials "MM" | same plus `HasNavigation: true` | match | `actions.ts:356-358`; the structure default of HasNavigation is True (CR-HouseholdDetails-1.md:26) |
| 025 | GetSkeleton_UI_SubdivisionCard | content record | two React copies (shared lib and Locality_Details) | match | `actions.ts:367-380`; `pages/Locality_Details/components/actions.ts:60-70` |
| 026 | GetSkeleton_UI_SubdivisionCardContent | six placeholder values | same | match | `actions.ts:370-377` |
| 027 | GetURLFromEventDataURL | two Replace calls on a shared link | none; `getColdStartLinkURL()` returns '' | n/a | native only: callers are GetColdStartLinkURL (Splash) and HandleOnResumeOpenLink (app-link plugins), U14 (app-shell.spec.md:346, 381; knowledge/navigation.md:31-34); BR-UBTCON-515 |
| 028-029 | GetUserInformation_Wrapper: Cache_UserInfo_Get, output = Directory_UserCurrent, Wrapper_Assign | TST output is `.directory_UserCurrentAttr` (UC:13650) | `getUserInformation()` returns the whole record; callers read `.Directory_UserCurrent` (`actions.ts:401`); the assign is inlined | match | `platform/session/userInfo.ts:38-45` |
| 030 | GetUserInformation_Wrapper_Assign | Client.App_Policies_HasPolicyToAccept = HasPoliciesToAccept | same | match | `actions.ts:116-118`; BR-UBTCON-530 |
| 031 | Get_IsUnsupportedSystem | AppVersion or BrowserVersion | same | match | `lib/ubtConnect/unsupportedVersion.ts:31-34`; BR-UBTCON-232 |
| 032 | Get_IsUnsupportedVersion | calls Try_GetIsSupportedVersion; three outputs | constants: App and WebView `false`; Browser only in the mock scenario `unsupported-browser` | differs | `unsupportedVersion.ts:17-27`; U16 (app-shell.spec.md:348, 383), U2 no minimum versions on TST (:363) |
| 033-038 | HasAccessToRegion: ToLower, Global, Regional or AdvPlus, Free (country), Free (locality), otherwise | five branches | same five branches | match | `actions.ts:399-418`; BR-UBTCON-252 to 255 |
| 039 | IsHouseholdDetails_InAncestryModeView | `window.ancestryViewHouseholds.includes(id)` | none | n/a | dead on TST: no compiled screen or block calls it; the window list is only read, never written (UC:14324-14326). DEV lists 5 flows: section 6.1 D4; BR-UBTCON-518 |
| 040 | OfflineDataSync | empty action | no-op; the OSUI sync engine is not ported | match | `platform/device/OfflineDataSync/OfflineDataSync.tsx:17-28`; BR-UBTCON-520; U11 sync no-op (app-shell.spec.md:233) |
| 041 | OfflineDataSyncConfiguration | SyncOnOnline, SyncOnLogin, SyncOnResume True; RetryOnError False; 30 s | no values | n/a | the configuration only drives the empty sync; U11 (app-shell.spec.md:233); BR-UBTCON-521 |
| 042-044 | OpenGooglePlay_Chrome, _UBTConnect, _WebView | `window.open("market://…", "_system")` | none; the Browser variant hides the button (`UnsupportedVersionBrowser.tsx:23` `inHideButton`) | n/a | native only: U16 (app-shell.spec.md:348, 383); BR-UBTCON-524 to 526 |
| 045 | ScrollTop | `querySelector(container).scroll({top:0})`, catch → console.log | null check with `log.warn`, then `scroll` | match | `actions.ts:74-81`; same outcome on a missing container; callers pass the two inputs |
| 046 | SetResumeLoginLink | `window.applinks.resumeLoginLink = URL` | module variable, read and cleared by `getResumeLoginLink` | match | `platform/session/resume.ts:8-10,20-24`; U14 keeps the helper (app-shell.spec.md:381); BR-UBTCON-527 |
| 047-050 | ToggleBookmarkItem_C2: IsBookmarked test; delete branch; delete success; delete failure | as DEV and TST | same | match | `actions.ts:283-290`; BR-UBTCON-238 |
| 051 | same: LogMessage before AddBookmark2 | DEV only. TST (UC:17122-17298) has no LogMessage | none | match | React follows TST; section 6.1 D3 |
| 052-054 | same: AddBookmark2; add success (local copy + message); add failure | as DEV and TST | same | match | `actions.ts:293-303`; BR-UBTCON-237 |
| 055 | same: AllExceptions handler | not system → error message (UC `isSystem` test); DEV says log=True | `catch`: rethrow system, else error message; no log | match | `actions.ts:306-309`; no log: U17 no telemetry (app-shell.spec.md:384) |
| 056 | Try_GetIsSupportedVersion | UBT_AppManager version checks; exception → supported | not called | differs | U16 and U2 (app-shell.spec.md:348, 363, 383); BR-UBTCON-233 |
| 057 | Upgrade_UBTConnect | OpenGooglePlay_UBTConnect | none | n/a | native only: U16; the Native variant is not built |
| 058-059 | Upgrade_WebView: Android version from the user agent; Chrome below 10, else WebView; exit after 10 s | as DEV and TST (UC:17819-17890) | none | n/a | native only: U16; BR-UBTCON-234 |

### 2.2 App-start chain (OnApplicationReady, UC:15262-15425)

The React counterpart is `app/src/platform/bootstrap/appStartSteps.ts` (`runAppStart`, `APP_START_STEPS`), `startup.ts` and `postLogin.ts`. TST order, part 1: four client variables → GetCallbacksJS → FRD_UserCallback_Set → FCM_DeeplinkCallback_Set → FCM_NotificationCallback_Set → NetworkDetetion_DefineCallbacks → AppManager_Mobile_OnAppReady → CheckKeyboardPlugin → OnApplicationReady_BottomBarSlider → OnApplicationReady_MobileKeyboardVisible. Part 2: Sync_Info_Main(false) → AddCustomHeadersJS → OnApplicationReady_ListenForLandscapeScreens → InitAndroidAppLinksPlugin → InitializeEventfulDeeplinks → SetLNCallbackJS → Is User Logged? → Connect_SetLoggedContext + Async_FetchCacheableMapEntitiesJS. Handler: AllExceptions → ScreenController_RaiseError.

| Id | Step (TST order) | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 176 | IsNavigateToHomeOnBack = False | client variable | `setClientVar('UBTConnect.IsNavigateToHomeOnBack', false)` | match | `appStartSteps.ts:180` |
| 177 | Bookmarks_IsSynched, Notifications_IsSynched, Notes_IsSynched = False | three client variables | same three | match | `appStartSteps.ts:181-183` |
| 178 | GetCallbacksJS: five callbacks (FRD, OnOnline, OnOffiline, FCM deep link, FCM notification) | proxies of five client actions | only the network pair | differs | `platform/feedback/networkStatus.ts:25-39`; U12 no push, U17 no telemetry (app-shell.spec.md:379, 384) |
| 179 | FRD_UserCallback_Set | UBT_AppManager, Firebase | none | n/a | native only: U17 |
| 180 | FCM_DeeplinkCallback_Set, FCM_NotificationCallback_Set | UBT_AppManager, push | none | n/a | native only: U12 |
| 181 | NetworkDetetion_DefineCallbacks(OnOnline, OnOffline, null) | UBT_AppManager NetworkDetection | `startNetworkDetection({ onOnline, onOffline, serverCalls })` from `useNetworkStatusEvents` | match | `networkStatus.ts:28-38`, mounted by `platform/feedback/dialogs/CommonUiHost.tsx:18`; U11 answer (app-shell.spec.md:368); the start order of the two NetworkDetection calls stays open there |
| 182 | AppManager_Mobile_OnAppReady | SynchAppContext → InitializeWebComponents_Priority → IsCordovaDefined → InitializeWebComponents (UBT_AppManager_Mobile.controller.js:112-128) | steps `synchAppContext` and `initializeWebComponents` (AfterInitialize when CheckDeviceOnReady and signed in) | match | `appStartSteps.ts:60-71,134-142`; `startup.ts:32-58` |
| 183 | CheckKeyboardPlugin | native keyboard plugin | none | n/a | native only: U18 (app-shell.spec.md:350, 385) |
| 184 | OnApplicationReady_BottomBarSlider | UBTConnectLibrary | step `bottomBarSlider` | match | `appStartSteps.ts:144-149` |
| 185 | OnApplicationReady_MobileKeyboardVisible | body runs only `if (window.cordova)`: keyboardDidShow/Hide → body class `dx-mobile-keyboard-visible` (UBTConnectLibrary.controller.js:7917-7955) | none; no `visualViewport` code either | n/a | native only; U18 names a visualViewport class as the web replacement, not built yet (no user impact in a desktop browser) |
| 186 | Sync_Info_Main(false) | right after MobileKeyboardVisible | step `syncInfoMain`, after `waitForFirstScreen` when signed in | differs | `appStartSteps.ts:150-156`; CR-Search-3.md:25, CR-Notes-1.md:15 |
| 187 | AddCustomHeadersJS(MyEntertainingURL, FeedURL) | adds `link rel=preconnect` and `rel=dns-prefetch` for both base URLs (UC:15512-15528); web code | none; `api/app/types.ts:81`: the two URLs are not read | missing | F2 (info) |
| 188 | OnApplicationReady_ListenForLandscapeScreens(["/UBTConnect/Photobook"]) | landscape lock on Photobook | none | n/a | native only (Cordova orientation): U18 no orientation lock; Photobook is built (board:34) |
| 189 | InitAndroidAppLinksPlugin, InitializeEventfulDeeplinks | native link plugins | placeholder blocks only (`OpenLinkOnResume.tsx:18-19`); `resume.ts:15-17` returns '' | n/a | native only: U14 |
| 190 | SetLNCallbackJS(FCM_DeeplinkCallback) | local-notification click callback | none | n/a | native only: U12 |
| 191 | Is User Logged? true: Connect_SetLoggedContext(Bookmarks, False, Bookmarks_C2, Notes), then both map caches without await | `getUserId() <> NullIdentifier` | step `setLoggedContext` (`connectSetLoggedContext(false, notes, bookmarks, bookmarks_C2)`), then `fetchCacheableMapData()` not awaited | match | `appStartSteps.ts:157-171,78-100`; `postLogin.ts:25-48` |
| 192 | Is User Logged? false | nothing more | `if (!isSignedIn()) return;` | match | `appStartSteps.ts:160` |
| 193 | AllExceptions → ScreenController_RaiseError(message) | not system → the App_Common handler (exception toast, U10 answer app-shell.spec.md:367) | `log.error('OnApplicationReady failed', e)`, no toast | unclear | `appStartSteps.ts:192-196`; Q1 |
| 194 | React-only steps: fetchFlags, waitForFirstScreen, loadOrbitStaticEntities, markAppReady | not in OnApplicationReady | four extra steps | differs | fetchFlags: plan v2 section 3.1 rule 3; waitForFirstScreen: CR-Search-3.md:25; markAppReady: plan v2 session machine (refactor-plan-v2.md:231-234); loadOrbitStaticEntities: runtime `initializeDatabase` (OutSystems.js:16, `appStartSteps.ts:175-179`) |

### 2.3 Network

| Id | Action | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 147 | OnOffiline | App_NetworkStatus_IsOnline_IsPersistent = False | `onOffline` sets it false | match | `networkStatus.ts:32-34`; BR-UBTCON-523 |
| 148 | OnOnline | = True | `onOnline` sets it true | match | `networkStatus.ts:29-31`; BR-UBTCON-522 |

### 2.4 Push, deep links and telemetry callbacks (native only)

All rows are `n/a`: U12 (no push), U17 (no telemetry, Firebase RTDB), app-shell.spec.md:379, 384. TST has the same steps as DEV (reader check: UC:2569-2723, 2724-2760, 3268-3290, 14719-14790).

| Id | Action / step | OutSystems | Verdict | Note |
|---|---|---|---|---|
| 097, 158-165 | FCM_DeeplinkCallback: parse, Link = ScreenName or DeepLink, empty → end, LastURL = Link, PIN state, PINRegister when NeedRegister, PINUnlock when locked, NavigateToPage | push deep link | n/a | BR-UBTCON-223 to 225; the PIN screens exist in React (`usePinRegisterContent.ts:65` reads LastURL) |
| 098, 166-169 | FCM_NotificationCallback: parse, LN_MaybeTriggerLocalNotification, SynchronizeNumberUnreadMessages, Notifications_LastChecked | push received in the foreground | n/a | BR-UBTCON-226; `synchronizeNumberUnreadMessages` exists for the app start (`startup.ts:93-105`) |
| 099, 170-171 | FRD_UserCallback: ParseFirevaseEventValue; LogOut branch and else branch both empty | Firebase realtime database | n/a | BR-UBTCON-209; U17 |
| 140, 172-175 | LN_MaybeTriggerLocalNotification: DeepLink test, serialize, icon from extra data, TriggerForegroundNotification | local notification plugin | n/a | BR-UBTCON-227, 228; U12 |

### 2.5 Other unreached actions

**Helpers with a React copy** (functions called from expressions; the flow analysis does not list them as reached)

| Id | Action | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 095 | Directory_BrowseByCountry_TooltipBuilder | link with ExtraData text; click → LinkOnClickAction(Marker.Id) | same | match | `actions.ts:489-515`; BR-UBTCON-505; caller `useBrowseDirectory.ts:137` |
| 096 | Directory_Updates_MinDateToShow | MonthsToShow = 0 → NullDate, else today minus months | same, months passed as a parameter | match | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:174-176`; BR-UBTCON-162 |
| 106 | GetDescriptor_BretherenCount | "<Brethren plural>: N" | same | match | `actions.ts:144-146`; BR-UBTCON-532 |
| 108 | GetDescriptor_Subdivision_GenderSplit | "N Brothers & M Sisters" | same | match | `actions.ts:336-339`; BR-UBTCON-533 |
| 109 | GetDescriptor_Subdivision_HouseholdCount | "<Household plural>: N" | same | match | `actions.ts:149-151`; BR-UBTCON-534 |
| 111 | GetIconLabel_Interchange_Statistics | switch on six names → icon and colour | lookup table by name | match | `pages/Locality_Details/components/actions.ts:96-111`; BR-UBTCON-263 |
| 112 | GetLocalityCurrentTimeLabel | weekday, Connect time, "(UTC +/- h[:mm])" | same | match | `pages/Locality_Details/components/actions.ts:35-46` |
| 113 | GetLocalityLabel | "Locality, Country" | same | match | `actions.ts:456-458` |
| 114 | GetLocalityMenu | structure defaults | `LocalityMenu` constants with the same six texts | match | `pages/Locality_Details/components/staticEntities.ts:16-23` |
| 123 | Get_Cacheable_MapEntities | FetchData_CacheableMapEntities; five caches, TTL 7200 s | same five names and order; TTL 7200 s | match | `appStartSteps.ts:79-90`; `api/app/keys.ts:16`; BR-UBTCON-271 |
| 124 | Get_Cacheable_MapHouseholds | FetchData_CacheableHouseholds; two caches | same | match | `appStartSteps.ts:91-100`; BR-UBTCON-272 |
| 132 | Get_NoteCategoryId_ByEntityTypeId | seven cases, otherwise "Notes not available" | same | match | `actions.ts:156-176` |
| 139 | IsStringEquals | Trim; ToLower unless case sensitive | same | match | `actions.ts:384-388`; BR-UBTCON-260 |
| 150 | ToggleBookmarkItem (legacy) | delete: Info "Bookmark could not be removed. Please try again later." on failure; add failure silent | same | match | `lib/assemble/actions.ts:161-230`; BR-UBTCON-235, 236 |

**Dead screens** (MyCalendar, PersonalEventDetails, PersonalEventForm, Recurrence: skip:dead, migration/board.md:75, 82, 83, 85). Verdict `n/a` for every row; no React copy exists and none is needed.

| Id | Action |
|---|---|
| 091 | AreDatesInSameMonth |
| 092 | AreDatesInSameWeek |
| 093 | CompareRecurrence |
| 094 | DiffMonths |
| 100 | FormatEventDescriptionTime |
| 101 | GetDateOfFirstDayOfMonth |
| 102 | GetDateOfFirstDayOfWeek |
| 103 | GetDateOfLastDayOfMonth |
| 104 | GetDateOfLastDayOfWeek |
| 105 | GetDayLabel |
| 115 | GetMonthGrid |
| 116 | GetMonthGrid_ExtraRow |
| 117 | GetMonthName |
| 118 | GetRecurrenceDescription |
| 119 | GetRecurrencePatternTypeLabel |
| 120 | GetRecurrencePatternWeekIndexList |
| 121 | GetRecurrentWeekdaysLabelByRecurrence |
| 122 | GetStartingPosition |
| 127 | Get_LookupRSVPStatus |
| 128 | Get_LookupRecurrencePatternWeekIndex |
| 129 | Get_LookupRecurrenceType |
| 130 | Get_LookupReminderType |
| 133 | Get_UserEventFormFormattedDate |
| 134 | Get_WeekIndexOptionLabel |
| 137 | IsEventOnDay |
| 138 | IsItemAboveMaximumDate |
| 144 | MapRecurrencePatterDaysOfWeek |
| 145 | NullTime (no compiled caller on TST either) |
| 156 | ValidateRecurrence |
| 157 | ValidateWeeklyRecurrence |

**Dead on TST** (defined in `UBTConnect.controller.js`, no compiled screen or block calls them: grep of all `.mvc.js` and controller files of the survey). Verdict `n/a`.

| Id | Action | Note |
|---|---|---|
| 110 | GetDistinctYearsOptions | only caller Get_Years_Extra_Option_FlatList, itself without a caller; BR-UBTCON-182 describes its bug |
| 135 | Get_Years_Extra_Option_FlatList | `Notes_FilterSheet.tsx:25-33` builds the same "Filter by year" list from its input, a different action |
| 136 | HouseholdMember_GetShowContacts | BR-UBTCON-257 (age 21) has no caller on TST |
| 151-154 | UBTConnect_JSUtils_ElementCache_Get/SetObjProperty, Get/SetTextProperty | wrappers of UBTJavaScriptUtils; the static entity UBTConnect_JSUtils_ElementCache_Parent is not in React either |

**Owned by other flows** (a block of that flow calls the action on TST). Verdict `n/a`, see the report of the owner.

| Id | Action | Owner | Note |
|---|---|---|---|
| 107 | GetDescriptor_OneSchool_Event_Years | Directory_OneSchoolGlobal_Blocks | callers OneSchoolGlobal_Event_Card and _ListCard; the cards are not rendered: OneSchoolGlobalDetails shows ComingSoon on TST and in React (that report, lines 59-66). No React copy |
| 125 | Get_Descriptor_OneSchool_Event_TimeRange | Directory_OneSchoolGlobal_Blocks | same; no React copy |
| 141 | ListJoin | Directory_OneSchoolGlobal_Blocks | only caller GetDescriptor_OneSchool_Event_Years; BR-UBTCON-261 |
| 149 | TextListAppend_Function | Directory_OneSchoolGlobal_Blocks | only caller GetDescriptor_OneSchool_Event_Years |
| 131 | Get_NoteCategoryId_ByBookmarkCategoryId | Bookmarks | caller Bookmarks_Card_Item; the Bookmarks screen is not built (that report, section 2.n) |

**Native only** (Cordova plugins). Verdict `n/a`.

| Id | Action | Decision | Note |
|---|---|---|---|
| 142 | LockOrientationLandscapeIfNeeded | U18 no orientation lock (app-shell.spec.md:350, 385) | BR-UBTCON-274 |
| 143 | LockOrientationWithNavigationTransition | U18 | the transition events exist in React (`platform/navigation/transitionEvents.ts:19-25`); BR-UBTCON-276 |
| 146 | OnApplicationReady_ListenForLandscapeScreens | U18 | BR-UBTCON-273 |
| 155 | UnlockOrientationLandscapeIfNeeded | U18 | BR-UBTCON-275 |
| 126 | Get_FormattedDistance | Map skip:variant, `getHasMapsEnabled` false on TST (board:73; knowledge/flag-values-tst.json:13) | absent on TST: section 6.1 D5 |

## 3. Client variables

| Id | Variable | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 060 | App_NetworkStatus_IsOnline_IsPersistent | Boolean, default True | default `true`; written by the network callbacks; read by `exceptionMessages.ts:18` | match | `platform/session/clientVars.ts:28`; `networkStatus.ts:30,33` |
| 061 | App_Policies_HasPolicyToAccept | Boolean | written `userInfo.ts:44`; read `session.ts:193-194` | match | |
| 062 | Bookmarks_IsSynched | Boolean | false at app start, true after SynchBookmarksC2; read by `useEntityDetailsActions.ts:244` | match | `appStartSteps.ts:181`; `postLogin.ts:42` |
| 063 | ColumnsPerView | Integer, default 7 (GetMonthGrid) | none | n/a | dead screens (board:75, 82, 83, 85) |
| 064 | Directory_Updates_MonthsToShow | Integer | written from Sync_Info_Main; default 0 | match | `startup.ts:80`; `clientVars.ts:26` |
| 065 | Directory_Updates_UnreadCount | Integer | written `actions.ts:69`; read `BottomBar.tsx:62` | match | `clientVars.ts:23` |
| 066 | Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer, default 5 | default 5 | match | `clientVars.ts:25` |
| 067 | Directory_Updates_UnreadCount_LastCheck | Date Time | read and written in the refresh action | match | `actions.ts:66,70`; `clientVars.ts:24` |
| 068 | LastURL | Text, read and written | read `usePinRegisterContent.ts:65`; no writer in React | match | the writer of this unit, FCM_DeeplinkCallback, is native only (U12); other writers belong to their flows |
| 069 | Notes_IsSynched | Boolean | false at start, true after SyncNotes | match | `appStartSteps.ts:183`; `postLogin.ts:44` |
| 070 | Notifications_IsSynched | Boolean | false at start, true after the unread count | match | `appStartSteps.ts:182`; `postLogin.ts:46` |
| 071 | Notifications_LastChecked | Date Time | written `postLogin.ts:47`; read `useNotificationIcon.ts:34` | match | the FCM writer is native only (U12) |
| 072 | RowsPerMonth | Integer, default 5 | none | n/a | dead screens |

## 4. Server and service actions

| Id | Action | Module | React call | Verdict | Production needs / owner |
|---|---|---|---|---|---|
| 073 | AddBookmark | Connect2_MyBookmarks_BL | `lib/assemble/actions.ts:163` (api/bookmark); mocks `mocks/modules/Connect2_Assemble_MUI/mocks.ts:6-12`, `Connect2_MyBookmarks_MUI/mocks.ts:19,170` | mock-only | AddBookmark of Connect2_MyBookmarks_BL |
| 074 | AddBookmark2 | Connect_Bookmarks_CS | `api/bookmark/repository.ts:108-114` (`ServiceAPIAddBookmark2`); mock `containers/EntityDetailsActions/mocks.ts:35` | mock-only | AddBookmark2 (UBTConnect ServiceAPIAddBookmark2) |
| 075 | DeleteBookmarkByBookmarkId | Connect2_MyBookmarks_BL | `lib/assemble/actions.ts:167`; same mocks as 073 | mock-only | DeleteBookmarkByBookmarkId |
| 076 | DeleteBookmarkByBookmarkId2 | Connect_Bookmarks_CS | `api/bookmark/repository.ts:119-123`; mock `containers/EntityDetailsActions/mocks.ts:47-49` | mock-only | DeleteBookmarkByBookmarkId2 |
| 077 | FetchData_CacheableHouseholds | Connect_Map_CS | `api/app/repository.ts:45-47`; mock `platform/bootstrap/mocks.ts:206` (empty list) | mock-only | FetchData_CacheableHouseholds |
| 078 | FetchData_CacheableMapEntities | Connect_Map_CS | `api/app/repository.ts:39-41`; mock `platform/bootstrap/mocks.ts:199` (empty lists) | mock-only | FetchData_CacheableMapEntities |
| 079 | GetEventsByCacheKeys | Connect2_MyCalendar_BL | none | n/a | dead screens |
| 080 | GetHouseholdDetails | Connect_Household_CS | behind the data action `HouseholdDetails_Block/DataActionGetHousehold` (`api/household/repository.ts:43`). The reader's `repository.ts:135` is `Connect2_LegacyShared.ServiceAPIGetHouseholdDetails`, a different action (LegacyShareObject) | n/a | owned by Directory_Household_Blocks |
| 081 | GetNotesByItemId | Connect_Notes_CS | none under this name | n/a | owned by Directory_CommonBlocks (Directory_EntityDetailsActions) |
| 082 | GetSubdivisionLocation_BySubdivisionId | Connect_Subdivision_CS | none under this name | n/a | owned by Directory_CommonBlocks |
| 083 | Get_Core_LocalityTimezone | Connect_Geography_CS | behind `ContactUsDetails/DataActionDataAction_GetLocalityTimezone` (`api/schema.d.ts:1656`) | n/a | owned by App_Menu_ContactUs and Directory_OneSchoolGlobal |
| 084 | Get_OneSchoolGlobalDetails | Connect_CommunityBusiness_CS | behind `OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails` (`api/schema.d.ts:2030`) | n/a | owned by Directory_OneSchoolGlobal |
| 085 | Get_UI_UpdateItems_UnreadCount_All | Connect_Updates_CS | `api/update/repository.ts:70-73`; recorded mock `platform/bootstrap/mocks.ts:222` | mock-only | Get_UI_UpdateItems_UnreadCount_All |
| 086 | Household_GetMembers_Service | Connect_Household_CS | behind `Household_Card/DataActionGetMembers` (`api/household/repository.ts:106`) | n/a | owned by Directory_Household_Blocks |
| 087 | ListAppend | System | array push in each caller | match | `actions.ts:95` |
| 088 | ListAppendAll | System | spread or push in each caller | match | `pages/Locality_Details/hooks/localityBlocksState.ts:26` |
| 089 | Member_ContactDetails_Service | Connect_Household_CS | none under this name | n/a | owned by Directory_CommonBlocks (FetchContactDetails) |
| 090 | Wait (own server action) | UBTConnect | a 5 s timer in `usePendingPoliciesForm.ts:77-80` | n/a | owned by App_Policies (its report, row 047); BR-UBTCON-278 |

## 5. Findings

| Id | Severity | Element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | GetShareType_FromEntity, IsMyHousehold | TST tests IsMyHousehold after all entity cases (UC:11100-11215): a Household is always shared as Household, and MyHousehold is the result only when no entity case matched. React tests it inside the Household case. Latent today: the only caller passes `false` (`entityDetailsActionsState.ts:83`). BR-UBTCON-244 states the TST order. | `app/src/lib/ubtConnect/actions.ts:185-186` | Return `Household` in the Household case; after the switch cases, return `MyHousehold` when `isMyHousehold` is true, else throw | fixed 2026-10-27 (`fixes/A-shell.md`) |
| F2 | info | OnApplicationReady, AddCustomHeadersJS | TST adds `link rel="preconnect"` and `link rel="dns-prefetch"` to `document.head` for the MyEntertaining and Feed base URLs of Sync_Info_Main (UC:15512-15528). React drops the two URLs (`api/app/types.ts:81`) and adds no link. No visible behaviour; the embedded pages connect later. | `app/src/platform/bootstrap/startup.ts:75-86` | Keep the two URLs in the Sync_Info_Main mapper and add the four link elements after `syncInfoMain` | |
| F3 | major | OnApplicationReady / on exception All Exceptions → ScreenController_RaiseError | TST shows the exception toast for a non-system app-start failure (`UBTConnect.controller.js:15398-15417`, `UBTJavaScriptUtils.controller.js:3900`); React only logs (`appStartSteps.ts:192-196`). Row 193. User decision 2026-10-27 C3: build it. | `app/src/platform/bootstrap/appStartSteps.ts:192-196` | Raise the error to the App_Common handler (toast) as TST does. | |

## 6. DEV vs TST differences

### 6.1 Model (DEV) vs compiled code (TST)

| Id | Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|---|
| D1 | GetBookmarkCategoryId_ByEntityTypeId, Member | BookmarkType = BookmarkCategory.Member | raises InvalidAction "Bookmarks not available" (first branch) | TST | UC:7154-7266 (throw at :7171) |
| D2 | same, OneSchoolGlobal | BookmarkCategory.OneSchoolGlobal2 | `bookmarkCategory.oneSchoolGlobal`; a second Interchange test after it is unreachable | TST | UC:7205, 7212 |
| D3 | ToggleBookmarkItem_C2 | LogMessage("In_BookmarkType …") before AddBookmark2 | no LogMessage | TST | UC:17122-17298 |
| D4 | IsHouseholdDetails_InAncestryModeView | referenced by 5 flows | no compiled caller; `window.ancestryViewHouseholds` is only read | TST (no copy) | survey grep; UC:14324-14326 |
| D5 | Get_FormattedDistance | defined (folder Directory_Map) | no `define("UBTConnect.controller$Get_FormattedDistance")` | TST (no copy); Map is skip:variant | notes.md; board:73 |

### 6.2 KB pages vs TST

None. The rules the report cites agree with TST. BR-UBTCON-244 (share type) and BR-UBTCON-182 (distinct years) describe the TST behaviour, including its quirks.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | When the app start fails, TST passes the message to `ScreenController_RaiseError` (UC:15397-15417); the App_Common handler then shows the exception toast for a non-system exception (U10 answer, app-shell.spec.md:367). The captured runtime does not show whether the `Error` built by RaiseError counts as system. React only logs (`appStartSteps.ts:192-196`). Does React show the exception toast on an app-start failure? | A user whose app start fails sees nothing in React; on TST a toast is probable. The mock phase makes the failure rare. | (a) show the exception toast ("We're sorry, but an unexpected error…") on any non-system app-start failure; (b) keep the log only until the runtime check is settled | (a): U10 says other exceptions show the exception toast, and the cost of one extra toast is low |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 34 | 16 | 0 | 0 | 0 | 7 | 11 | 0 |
| ui | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 160 | 66 | 1 | 2 | 5 | 0 | 86 | 0 |
| strings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 194 | 82 | 1 | 2 | 5 | 7 | 97 | 0 |

Counts by group:

| Group | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| shared actions (2.1) | 59 | 46 | 1 | 0 | 2 | 0 | 10 | 0 |
| app-start chain (2.2) | 19 | 7 | 0 | 2 | 3 | 0 | 7 | 0 |
| network (2.3) | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| push, deep links, telemetry (2.4) | 21 | 0 | 0 | 0 | 0 | 0 | 21 | 0 |
| other unreached (2.5) | 62 | 14 | 0 | 0 | 0 | 0 | 48 | 0 |
| client variables (3) | 13 | 11 | 0 | 0 | 0 | 0 | 2 | 0 |
| server and service actions (4) | 18 | 2 | 0 | 0 | 0 | 7 | 9 | 0 |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| _shared-193 | `unclear` | `missing` | migration/runtime-sources/UBTConnect.controller.js:15398-15417; migration/runtime-sources/OutSystems.js:2; migration/shell/sources/UBTJavaScriptUtils.controller.js:3842, 3900; migration/app-shell.spec.md:367; app/src/platform/bootstrap/appStartSteps.ts:192-196 |

## 11. User decisions of 2026-10-27 on the candidate findings

- Row 193: stays `missing`; finding F3 (major) added by user decision 2026-10-27 C3.
