# Infrastructure gaps: what the React front end needs outside itself

Date: 2026-10-27. Branch `clarify-screens`, P2 item 3 of `PLAN.md`. This file answers one question: what must exist
outside the React front end so that the app behaves like UBTConnect on TST in production. It also lists what the
front end itself still lacks for that.

Sources:
- `review/aggregate.md`: 5332 checklist rows (157 mock-only, 58 native-only, 25 telemetry rows of U17, 112 findings).
- `review/followup.md`: 18 unclear rows settled, 4 candidate findings.
- the flow reports and packs under `flows/<Flow>/`, `decisions.md`, `review/G1-review.md` to `G4-review.md`.
- `migration/knowledge/*.md`, `migration/app-shell.spec.md` (U1-U21), `app/docs/reference/stack.md` (ADR-1 to ADR-16).
- `app/src/api/openapi.yaml` (the contract) and the product KB `00_overview/` pages.

Every need has its evidence: a row, a finding, a decision or a knowledge page. A need without such evidence carries
the label **not verified**. The sister file `architecture-current.md` describes the front end as built; this file
lists only the gaps.

How to read the gap table (§2): one row per capability. "TST today" names the OutSystems element that gives the
capability on TST. "React today" gives the status in the code with `file:line`. "Production needs" is the thing to
build or buy outside the front end. "Decisions" are the ids of `app-shell.spec.md` §12 (U), `decisions.md` (flow Qn),
the board (Dn) and the ADRs. "Findings" are the F ids of the flow reports that block the capability.

## 1. Summary

| Area | Status | Size |
|---|---|---|
| Backend for the service and server actions | mock only (MSW) | 165 endpoints in the contract, 41 of them writes; 157 mock-only rows |
| Identity and session | mock sign-in, no token, no callback | U4, U5, D3(a); App_Common rows 027-032 |
| PIN and biometrics | PIN local (hashed), biometrics hidden | U5, U13 |
| Push, deep links, share, orientation, keyboard, app launcher | not built (native only) | 58 native-only rows; U12, U14, U18 |
| Barcode scanner | vendored TST web scanner (ADR-11) | production ready; camera permission needed |
| Telemetry and audit | console sink only | 25 rows (U17); App Insights events and the application-event server action |
| Flags and site properties | constants at the TST values | 29 flag names in the rows; PROD values unknown |
| Static hosting, service worker, images | plan exists (ADR-9, ADR-14), signed URLs mocked | `/UBTConnect/` path, worker URL, `network-ping.txt`, image signing |
| Front-end work before cut-over | 3 blockers, 25 majors | §10 |

## 2. The gap table

| Capability | TST today (element, evidence) | React today (`file:line`) | Production needs | Flows that depend on it | Decisions | Findings |
|---|---|---|---|---|---|---|
| Backend for the server and service actions | 157 mock-only rows: screen data actions, `ServiceAPI*` wrappers and `Action*` wrappers of UBTConnect, Connect2_*_MUI, Connect2_LegacyShared, UBTConnect_Utils (aggregate §1) | MSW answers the contract: `app/src/mocks/handlers.ts`, 76 `mocks.ts` files (55 under `pages/`), `app/src/mocks/modules/<Module>/` | One backend that implements `app/src/api/openapi.yaml` (165 endpoints, §3), same action names and wire types; the input fixes of §3.2 | every built flow (28) | stack row "Target backend" (`stack.md:30`), D3(a), R5(a) | App_Policies F1, App_Menu_ContactUs F3 |
| Identity: B2C login and callback | `AppManager_Login` opens the identity provider; `/UBT_AppManager/Callback` runs `ActionAppManager_Login` and routes by callback type (App_Common-027, 030; `knowledge/auth.md:9-11`; BR-UBTCON-304, 305) | `mockAuth.ts:12-32` signs in at once; `authProvider.ts:8-10` gives no production provider; `auth.ts:40-47` routes by U4 | An identity provider plus a BFF that keeps the tokens (`stack.md:26-27`); a callback that returns the callback type and the failure message; the reset-password policy (App_Common-031) | all signed-in flows | U4, U5, D3(a), App_Common Q1(a), Q2(a), Q3(a) | App_Common F2, F3, F4 |
| Device awareness and app context | `AppManager_SynchAppContext` (PIN settings, minimum versions, B2C names) and `AppManager_AfterInitialize` with TOTP (`app-shell.spec.md:299-300`); the server login decides if a device is valid (App_Common Q3) | fictional config in `platform/bootstrap/mocks.ts`; `AppManager_HandleDeviceAwarenessPopUp` not built (App_Common F3) | The two UBT_AppManager endpoints (both writes in the contract) without secrets in the answer (`app-shell.spec.md` §9a) | App_Common, App_PIN | U2, U16, App_Common Q3(a) | App_Common F3, F6 |
| PIN | `PIN_Set` keeps the PIN in localStorage (App_PIN-074); the lock is a client gate (`app-shell.spec.md:283-286`); `AppManager_Logout` runs `PIN_Delete` (App_Menu-049) | `platform/session/pin.ts:5-13, 25-32` (hashed, salted); `inactivity.ts` (1200 s overlay, U2) | Nothing on the server is verified. Open: U20 (does the server refuse calls while locked?). `CacheControl_Policies/DataActionGetCacheInfo` behind the unlock content (App_PIN-097) | App_PIN, App_Menu, lock overlay | U2, U5, U6, App_PIN Q1(a), Q2(a), Q3(a) | - |
| Biometrics | `AppManager_GetPIN_FingerprintReaderAvailable` decides the Biometric Login row and the fingerprint button (App_Menu-060, App_PIN-108) | constant false: `usePINBiometricsMenu.ts:12-16`, `PinUnlockMobile.tsx:49-51` | WebAuthn, decided per feature later (ADR-1); no server element verified | App_PIN, App_Menu | U13 (hide now) | - |
| Push notifications and `Wrapper_NotificationOpened` | FCM callbacks, local notifications, `SetLNCallbackJS` (_shared-097, 098, 158-175, 180, 190); the token `Firebase_CloudMessage_Token` lives in localStorage on TST (`app-shell.spec.md:280`); `Wrapper_NotificationOpened(MessageInstanceId)` is a server write of MessageDetail (Legacy_MyNotificationsFlow-099) | none; `startup.ts:88` refreshes the unread count at app start only (_shared-166 to 169); the contract has `Connect2_LegacyShared/ActionWrapper_NotificationOpened` (write) | Web Push with a push service and a device-token registration endpoint (not in the contract: **not verified**); the `Wrapper_NotificationOpened` endpoint; the deep-link routing of `FCM_DeeplinkCallback` (PINRegister, PINUnlock, screen) as a URL | Legacy_MyNotificationsFlow, App_Common_Blocks (bell badge) | U12 (none now), ADR-1 | - |
| Deep links and app links | `GetColdStartLinkURL`, `HandleOnResumeOpenLink`, `AndroidAppLinks`, `EventfulDeeplinks` rewrite `ConnectSharing/Details…` to `UBTConnect/ConnectShare` (_shared-027, 189; Legacy_Share-082 to 088; `knowledge/navigation.md:22-27`) | `resume.ts:12-17` returns ""; `OpenLinkOnResume.tsx:18-19` placeholders | Plain URLs. The host must answer the old `ConnectSharing/Details…` links after cut-over (redirect or route): **not verified** who serves them | Legacy_Share, App_PIN (resume link), Home | U14 (plain URLs), CR-Splash-2 | - |
| Share | `Get_ShareDetails` (Connect2_Sharing_CS, Legacy_Share-043), `ShareObject` write (Legacy_Share-094), `GetAvailableMembers`, `GetRecentlyShared`, `CS_ShareObject`, `CS_CreateShareProfileLink` (UBTConnect_Utils, _libraries-242); the external options need `AppManager_GetIsNative` (_libraries-116, 117) | mocks per ShareId; `containers/ShareSheet/README.md:78-84`: no external section, `ExternalShare` not ported; `deviceContext.ts:38` `isNativeDevice: false` | The six share endpoints; Web Share API for the external options later (ADR-1) | Legacy_Share, Home, Directory_CommonBlocks, Bookmarks | U14, U18, flag C2ExtendedShare (true on TST) | Legacy_MyNotificationsFlow F1 |
| Barcode scanner | `BarcodePlugin` web scanner `OSBarcodePlugin.js` when Cordova is absent (Legacy_OrbitAdminFlow-103) | vendored scanner behind `platform/device/barcodePlugin.ts:1-45`, `webBarcodeScanner.ts`; fictional scanner by default, `?scanner=web` | HTTPS and the camera permission; `GetScanEventQRCode` (Legacy_OrbitAdminFlow-108) and `Get_EventQRCode` (Legacy_OrbitQRCodeFlow-034) endpoints | Legacy_OrbitAdminFlow, Legacy_OrbitQRCodeFlow | ADR-11 | Legacy_OrbitAdminFlow F2 (minor) |
| Camera: PassportScan | DEV only; TST has no control, event or screen (Legacy_OrbitEventsFlow F3) | React shows the control and navigates to a route that does not exist (`OrbitLandingView.tsx:163-169`) | Nothing. Remove the control when Q2 is answered | Legacy_OrbitEventsFlow | Legacy_OrbitEventsFlow Q2 (open) | Legacy_OrbitEventsFlow F3 |
| Documents and files | `TryOpenFileInApp` falls to `window.open(url, "_blank")` on the web; the File plugin is Cordova-only (`knowledge/pwa-file-plugins.md` §2, §6); `GetEventDocuments`, `Get_Document` (Legacy_OrbitEventsFlow-A155, J007) | the same new-tab fallback (`actions.ts:318-345` per `pwa-file-plugins.md` §5); `handleDownload.ts:63-130` inert | The two document endpoints and document URLs that a browser tab can open (signed or session-bound: **not verified**) | Legacy_OrbitEventsFlow, Home (Feed PDF) | U18, PWA P8 | - |
| E-mail sending | `SendContactUsMessage`, `SendContactMemberEmail`, `SendContactLDMCoordinatorEmail` (Connect_Communication_CS), `SendContactEmail` (Connect2_OrbitMobile_BL), `UserContactUser` (Connect2_LegacyShared), `EventContact` (Connect2_OrbitMobile_MUI); the server picks the recipient (ContactFlow-109, BR-C2SVC-066) | mock handlers that store the mail in a collection (ContactFlow-047 to 126, App_Menu_ContactUs-041, Legacy_LDMEventsFlow-064, Legacy_LDMEventsFlow_V2-197) | The six e-mail endpoints and the mail service behind them, with the structures `UI_ContactByEmailForm`, `OrbitEmailInformation`, `UBT_Email.UserContactRequest` | ContactFlow, App_Menu_ContactUs, Legacy_LDMEventsFlow, Legacy_LDMEventsFlow_V2 | ContactFlow Q2(a) | App_Menu_ContactUs F1, F2 |
| Local storage and offline sync | IndexedDB client entities (notes, bookmarks, search history, recent searches, Orbit static entities); `Sync_Info_GetMain` gives `LocalEntities_App` and `OrbitStaticEntities` (App_Common-163, `pack/data.md:17-36`); `OfflineDataSync` is empty (BR-UBTCON-520, _shared-040) | `platform/storage/localEntities/*` (ADR-10), `pwa/persistStorage.ts`; `OfflineDataSync.tsx:17-28` no-op; sync-info mock in `platform/bootstrap/mocks.ts` | The `Sync_Info_GetMain` endpoint with `Sync_LocalEntities_GetApp`, `SyncAllOrbitEntities`, `UpdateFeed_MonthsToShow` behind it; no sync engine | App_Common, Bookmarks, Notes, Directory_Search, Legacy_OrbitEventsFlow | ADR-8, ADR-10, PWA P10 | - |
| Site properties | `Site.Embedd_B2CTenant` through `Sync_Info_GetMain.B2CTenant` (App_Common-163); `Site.IsKi` branches inside the data actions of five packs (`Directory_Household/pack/data.md:51` and four more) | `clientVars.ts:27` `Embedd_B2CTenant` from the sync mock; `IsKi` never reaches the client | The values stay on the server: `Sync_Info_GetMain` returns the tenant; the `IsKi` branches run inside the data actions | Home, Calendar, Legacy_MyNotificationsFlow, Directory_* | - | - |
| Feature flags | `GetHas…` helpers = per-user permission list from feature toggles, LaunchDarkly and token claims, built by UBT_AppManager at sign-in (`knowledge/feature-flag-helpers.md`, KB `azure_migration.md:114-119`); 29 flag names in the rows (aggregate §4) | `platform/flags/server.ts:13-17` answers the registry defaults (TST values of `flag-values-tst.json`); `resolve.ts` precedence default < server < override | One flag endpoint through the BFF (R5 a), evaluated per user; LaunchDarkly stays the flag store (KB target `azure_migration.md:123-131`); PROD values are unknown | every flow with a flag branch (§6) | R5(a), Bookmarks Q1(a), D1, D2, D11 | Legacy_OrbitAdminFlow Q2 (open) |
| Audit and application events | `zOnApplicationEvent_Wrapper` (Connect2_LegacyShared, `controller.js:7570`), `AddAuditEventDetailEvent`, `AzureInsights_CreateCustomEvent`, `AuditBookmarkSubscriptionEvent` (25 rows, aggregate §3 U17) | `log.info('ApplicationEvent', …)` through `platform/log/log.ts:1-30` (console sink, `addLogSink`) | An App Insights (or equal) sink and the server side of the application-event wrapper; the full payloads of §7 | ContactFlow, Legacy_LDMEventsFlow, Legacy_LDMEventsFlow_V2, Legacy_OrbitAdminFlow, Bookmarks, Legacy_Share | U17 (none now), ContactFlow Q1(a) | ContactFlow F1, Legacy_LDMEventsFlow_V2 F6 |
| Timers (client) | inactivity 1200 s (U2); unread badge every 5 min (App_Common-113, BR-UBTCON-171); embed token refresh every 10 min (Calendar-067); network ping every 30 s (U11); `Wait(5)` of the policies (App_Policies-047) | all five ported: `inactivity.ts`, `lib/ubtConnect/actions.ts:65-71`, `Embedded_MyEntertaining.tsx:22, 52-56`, `networkStatus.ts`, `usePendingPoliciesForm.ts:77-80` | Nothing on the client. Server timers (OutSystems Timers) are outside the front-end evidence: **not verified**; the KB maps them to Functions timers (`azure_migration.md:144`) | - | U2, U11 | - |
| Static assets and hosting | app under `/UBTConnect/`; icons `/UBTConnect/img/UBTConnect.AppLogo.*.png` (manifest); worker `/UBTConnect/pwaServiceWorker.js` (`knowledge/pwa-tst-service-worker.md`); `status/network-ping.txt` (U11); original CSS and scripts per screen | `pwa/manifest.json` (TST values), `sw/sw.ts` (Workbox, never caches API, `/bff/*`, `/UBT_AppManager/*`, the ping), `bootPlan.ts` (scope `/UBTConnect/`); vendored scripts (ADR-5, 7, 11) | A static host that serves `/UBTConnect/`, the worker at the TST URL from cut-over on (ADR-14), `network-ping.txt` with no cache, the icon paths; a CDN is **not verified** as a need | all | ADR-9, ADR-14, PWA P1-P16 | _shared F2 (preconnect links, info) |
| Images and signed URLs | `GetCacheableSignedImageURL` → `GetSignedImagesInBulk` (Connect2_LegacyShared; _libraries-245, Legacy_OrbitQRCodeFlow-036); `HandleImageLoadError` fallback image (`app-shell.spec.md:240`) | `api/image/repository.ts:12-20` calls `ActionGetSignedImagesInBulk`; placeholder images from `public/mock-images/` (`EntityLazyImage/mocks.ts:6-9`) | The bulk signing endpoint and the image store behind it; the fallback image `User_rectangle.png` on the host | 13 flows with `UBT_LazyImage` (_libraries §2.4) | Q-W2C-1 | Legacy_OrbitQRCodeFlow F2 (minor) |
| Monitors and alerts | App Insights cookies `ai_user`, `ai_session` and New Relic `nr2Users` on TST (`app-shell.spec.md:241, 277`); online state sent to App Insights (`shell-facts.md:102`) | none | Web monitoring with crash and error reports (ADR-1 names it); the provider is a later decision | all | U17 | - |
| Maps | Leaflet with OSM tiles in BrowseDirectory and CountryDetails; the Map screen is not built and `C2EnableMaps` is false on TST (`flows/Map/report.md` §1); `FetchData_CacheableHouseholds`, `FetchData_CacheableMapEntities` at app start (_shared-077, 078) | `lib/leaflet/json.ts:24` `OSM_TILE_URL`; both map caches mocked empty (`platform/bootstrap/mocks.ts:199, 206`) | The two Connect_Map_CS endpoints; a tile source with a usage policy for production: **not verified** | Directory_Locality, _shared | board Map `skip`, D2 | - |
| Embeds: Feed CMS and MyEntertaining | `Embedded_FeedCMS` with `DataActionGetFeedConfig(FeedItemId, B2CTenant)` (Home-049, 050); `Embedded_MyEntertaining` with `DataActionGetEntertainingConfig`, `AppManager_Get_UserIdToken` and `embed-entertaining.js` from `BaseURL` (Calendar-058, 059, 029); `preconnect` for both base URLs (_shared F2) | same-size mock pages (`FeedCms.tsx`, `connect2Entertaining.ts`); config mocks with empty values (`MyEntertaining/mocks.ts:9-15`) | The two config endpoints, the ID-token broker of UBT_AppManager_CS, the two external apps and their SDK scripts; their origins in the worker's "never cache" list | Home, Calendar | D8(b) | Calendar F1, F2 |
| Subscription checks | `App_Subscription_NavigateToUpgrade` (external `SubscriptionManageLink`), `App_Subscription_ShowUpgradePopUp`, `IsFreeSubscriptionPlan`, `AuditBookmarkSubscriptionEvent` (_libraries F1, Legacy_LDMEventsFlow_V2 F1, Bookmarks-100, Home F1) | `DialogAccessRestrictedAction.tsx`, `subscription.ts` exist; the two taps of _libraries F1 do nothing | The subscription fields of `GetUserInformation` and the manage link from the user record; no extra endpoint verified | _libraries, Home, Bookmarks, Legacy_LDMEventsFlow_V2 | _libraries Q3 (open), Home Q2(a) | _libraries F1, Home F1 |
| Adaptive cards | `AdaptiveCardViewer` with the Events host config; `StoreAdaptiveCardResponses` on submit (Legacy_MyNotificationsFlow F3, BR-C2LEG-463, 482) | marker (`NotificationDetailBlock.tsx:84-89`); the contract has `ActionStoreAdaptiveCardResponses` (write) | The endpoint and a card renderer in the stack | Legacy_MyNotificationsFlow | Legacy_MyNotificationsFlow Q3(a), after the stack confirmation | Legacy_MyNotificationsFlow F3 |
| Unsupported version | `Try_GetIsSupportedVersion` from the minimum versions of `SynchAppContext`; thresholds empty on TST (App_Common-172, BR-UBTCON-231, 233) | constants False; Browser True only with `?mock=unsupported-browser` (`lib/ubtConnect`) | The minimum versions in the app-context answer | App_Common, Directory_Search | U16 | App_Common F6 (info) |
| External apps and in-app browser | `OpenInApp_OpenExternalLink` through InAppBrowser (App_Menu-050); Assemble app launcher (Legacy_AssembleFlow-138); store links (_shared-042 to 059) | new tab (`lib/ubtConnectUtils`); `config.ts:14` `externalApps` URLs empty | The URLs of Orbit, Assemble and LDM in the build config | App_Menu, Legacy_AssembleFlow, Home | U18, CR-HomeFeed-1 | - |
| Orientation and keyboard | landscape lock on Photobook, `MobileKeyboardVisible` body class (_shared-142 to 155, 183 to 188) | none; no `visualViewport` code yet (_shared-185) | Nothing outside the front end | Directory_Photobook | U18 | - |

## 3. The backend contract

### 3.1 By module

The contract `app/src/api/openapi.yaml` has 165 endpoints in 10 modules: 93 data actions, 27 client wrappers, 24
server actions, 18 `ServiceAPI` wrappers and 3 aggregates. 41 are writes (`x-os-writes: true`). The mock source is
fictional for 140 and recorded for 25. The table gives the counts and the writes per module.

| Module (contract) | Endpoints | Reads | Writes | Writes (names) | Mock today |
|---|---|---|---|---|---|
| UBTConnect | 57 | 42 | 15 | `AcceptPolicies`, `RequestPhotoUpdate`, `SendContactEmail`, `Sync_Info_GetMain`, `UpdateItem_MarkAsRead`, `Action_UI_UpdateItem_MarkAllAsRead`, `_MarkAsRead`, `_MarkAsUnread`, `AddBookmark2`, `DeleteBookmarkByBookmarkId2`, `Member_EditDetails_Service`, `SendContactLDMCoordinatorEmail`, `SendContactMemberEmail`, `SendContactUsMessage`, `Service_ConnectServices_ChangeOrder_Bulk` | 41 fictional, 16 recorded; `pages/*/mocks.ts`, `mocks/modules/UBTConnect/` |
| Connect2_OrbitMobile_MUI | 45 | 40 | 5 | `EventContact`, `GetBookletGuestsMaxRows`, `GetBookletHelpersMaxRows`, `PostHostSurvey`, `SendContactEmail` | 45 fictional; `pages/Orbit*/mocks.ts`, `mocks/modules/Connect2_OrbitMobile_MUI/` |
| Connect2_LegacyShared | 30 | 23 | 7 | `MarkMessageAsClear`, `MarkMessageAsRead`, `ShareObject`, `StoreAdaptiveCardResponses`, `UserContactUser`, `Wrapper_MarkAllAsReadNotifications`, `Wrapper_NotificationOpened` | 28 fictional, 2 recorded; `pages/MessageList/mocks.ts`, `mocks/modules/Connect2_LegacyShared/` |
| UBTConnect_Utils | 15 | 10 | 5 | `CS_CreateShareProfileLink`, `CS_ShareObject`, `AddNote`, `DeleteNoteByNoteId`, `UpdateNote` | 10 fictional, 5 recorded; `mocks/modules/UBTConnect_Utils/` |
| Connect2_Assemble_MUI | 6 | 4 | 2 | `AddBookmark`, `DeleteBookmarkByBookmarkId` | fictional; `mocks/modules/Connect2_Assemble_MUI/` |
| Connect2_MyBookmarks_MUI | 6 | 2 | 4 | `DeleteBookmarkByBookmarkId`, `GetBookmarkById`, `New_GetBookmarkById`, `New_UpdateBookmarkNote` | fictional; `mocks/modules/Connect2_MyBookmarks_MUI/` |
| UBTConnect_EmbedMyEntertaining | 2 | 1 | 1 | `AppManager_Get_UserIdToken` | fictional; `pages/MyEntertaining/mocks.ts:9-15` |
| UBT_AppManager | 2 | 0 | 2 | `AppManager_AfterInitialize`, `AppManager_SynchAppContext` | 1 recorded, 1 fictional; `platform/bootstrap/mocks.ts` |
| UBTConnect_EmbedFeed | 1 | 1 | 0 | - | fictional |
| UBTConnect_Notes_MCS | 1 | 1 | 0 | - | recorded |

The packs of the UBTConnect module name the producer modules behind these endpoints (`flows/<Flow>/pack/data.md`,
"Server and service actions called"): 80 distinct actions in 24 modules, 56 referenced service actions, 19 referenced
server actions and 5 own server actions. The legacy wrapper flows (Connect2_*_MUI) keep their server side in their own
modules, which the contract lists above.

| Producer module (packs) | Actions | Names | Used by (flows) |
|---|---|---|---|
| Connect_Geography_CS | 11 | `Get_Core_CountriesNames`, `Get_Core_LocalityTimezone`, `Get_LocalityCommunityBusinessContacts`, `Get_LocalityCommunityBusinessDetails`, `Get_UI_CommunityNumbers`, `Get_UI_CountryAddressInfo`, `Get_UI_CountryStatistics`, `Get_UI_LocalityDetails`, `Get_UI_LocalityDetailsWithStatistics`, `Get_UI_LocalityStatistics`, `Get_UI_MembersStatistics` | Directory_Locality, Home, App_Profile, App_Menu_ContactUs, Map, shared blocks |
| Connect_Household_CS | 11 | `GetHouseholdCoordinates`, `GetHouseholdDetails`, `GetHouseholdList_ByLocalityId`, `GetHouseholdList_BySubdivisionId`, `GetImageCaptions_Photobook`, `GetPhotobookHouseholds`, `Household_GetMemberSiblings`, `Household_GetMembers_Service`, `Member_ContactDetails_Service`, `Member_EditDetails_Service`, `Member_GetContext_Service` | Directory_*, App_Profile, shared blocks |
| Connect_Map_CS | 8 | `FetchData_CacheableHouseholds`, `FetchData_CacheableMapEntities` (app start); six Map-screen actions (screen not built) | _shared, Map |
| UBTConnect (own) | 5 | `Sync_Info_GetMain`, `RequestPhotoUpdate`, `UpdateItem_MarkAsRead`, `Get_CalendarViewOptions`, `Wait` | App_Common, App_Menu, Directory_Household, Calendar |
| Connect_Subdivision_CS | 4 | `GetInterchangeList_ByLocalityId`, `GetSubdivisionCardList_ByLocalityId`, `GetSubdivisionDetails_BySubdivisionId`, `GetSubdivisionLocation_BySubdivisionId` | Directory_Locality, Directory_SupperMeetings, shared blocks |
| UBTConnect_ServerConfigs | 4 | `GetExternalLinks_ElGusto`, `GetExternalPackages_CommunityTradelink`, `_HR100`, `_Trove` | Home (FeedBlock_Services, Home-075) |
| Connect_Updates_CS | 3 | `Get_UI_UpdateItems`, `Get_UI_UpdateItemsForHomePage`, `Get_UI_UpdateItems_UnreadCount_All` (+ the three `Action_UI_UpdateItem_*` writes of Home-113, Directory_Updates-008 to 010) | Home, Directory_Updates, bottom bar (20 flows) |
| Connect_Bookmarks_CS | 3 | `AddBookmark2`, `DeleteBookmarkByBookmarkId2`, `GetBookmarks` | 16 flows through `Directory_EntityDetailsActions` |
| Connect_Communication_CS | 3 | `SendContactUsMessage`, `SendContactMemberEmail`, `SendContactLDMCoordinatorEmail` | App_Menu_ContactUs, ContactFlow |
| Connect2_Notification_CS | 3 | `Get_UI_Notifications`, `Get_UI_NotificationDetails`, `Delete_Notifications` (the last two DEV only, App_Notifications Q3) | App_Notifications |
| Comms_CS | 3 | `MarkAllAsReadNotifications`, `MarkAsRead`, `ToggleRead`: DEV only, no TST evidence (App_Notifications Q3(a)) | App_Notifications (DEV) |
| ApplicationPolicies | 2 | `GetPoliciesToAccept`, `AcceptPolicies` | App_Policies |
| Connect_Notes_CS | 2 | `GetNotes`, `GetNotesByItemId` | Notes, shared blocks |
| Connect_CommunityBusiness_CS | 2 | `Get_OneSchoolGlobalDetails`, `Get_OneSchoolGlobalListByLocality` | Directory_OneSchoolGlobal, Directory_Locality |
| Connect_Services_CS | 2 | `Service_ConnectServices_GetByUser`, `Service_ConnectServices_ChangeOrder_Bulk` | App_Services, Home |
| Connect_Search_CS | 2 | `Connect_Search`, `Get_SearchResultsVisibilityStatus` | Directory_Search |
| Connect2_OrbitMobile_BL | 2 | `SendContactEmail`, `GetMilestoneScanFF` (DEV only, Legacy_OrbitAdminFlow F1) | ContactFlow, Legacy_OrbitAdminFlow |
| Connect2_MyBookmarks_BL | 2 | `AddBookmark`, `DeleteBookmarkByBookmarkId` | Legacy_AssembleFlow (_shared-073, 075) |
| Deprecated_Connect2_PersonalEvents | 2 | `PersonalEvent_Create`, `PersonalEvent_Get`: flag off, screens not built | Deprecated_Calendar_PersonalEvent |
| Connect2_Sharing_CS | 1 | `Get_ShareDetails` | Legacy_Share |
| Connect2_MyCalendar_BL | 1 | `GetEventsByCacheKeys`: dead screens (_shared-079) | - |
| Users | 1 | `User_GetName` | App_Common |
| (System) | 3 | `ListAppend`, `ListAppendAll`, `ListFilter`: client-side list helpers, no endpoint | - |

Outside the packs, the reports name these server elements of referenced modules: UBT_AppManager_CS
`AppManager_Login`, `AppManager_Logout`, `AppManager_Get_UserIdToken` (App_Common-027, App_Menu-049, Calendar-059);
UBTConnect_Utils `CacheControl_UserInfo` and `CacheControl_Policies` data actions, `Get_RuntimeVersion`,
`GetAvailableMembers`, `GetRecentlyShared`, `CS_ShareObject`, `CS_CreateShareProfileLink`, `AddNote`, `UpdateNote`,
`DeleteNoteByNoteId`, `Cache_SignedImageURL_Get` (App_Menu-009, 084, App_Common-142, _libraries-242 to 245);
Connect2_LegacyShared `GetMessages`, `GetMessageInstance`, `GetMessageInstanceById2`, `Wrapper_NotificationOpened`,
`GetAvailableUsers`, `ShareObject`, `GetSignedImagesInBulk`, `ActionGetCountriesBySubscription` (Legacy_MyNotificationsFlow-013
to 015, 099, 149 to 152; Legacy_Share-081 to 094; Legacy_AssembleFlow-029); the Orbit, Assemble and LDM V2 data
actions of Connect2_OrbitMobile_MUI and Connect2_Assemble_MUI (Legacy_OrbitEventsFlow-A026 to J007,
Legacy_OrbitAdminFlow-105 to 108, Legacy_AssembleFlow-153 to 159, Legacy_LDMEventsFlow_V2-023 to 197).

### 3.2 Inputs that the reports flag as wrong or missing

| Endpoint | Gap | Evidence | Decision |
|---|---|---|---|
| `UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies` | React sends the names `Connect_Applications.Connect`, `.Directory`, `.Orbit`; TST sends the GUID texts of the records (`static-entities-tst.json:2809`) | App_Policies F1 (major), rows 016, 046 | no decision recorded |
| `UBTConnect/Policy_Custom_AcceptPendingPolicies/ActionAcceptPolicies` | `DeviceDetails.UniqueId` is a new id per page load; TST keeps one per browser in `localStorage["UUID"]` | App_Policies F4, row 063 | App_Policies Q2(a): store it as TST does |
| `UBTConnect/ContactUsDetails/DataActionDataAction_GetLocalityTimezone` | the call lacks `LocalCacheControl_UserInformation` (the server reads `In_LocalityId` from it), `ContactUsForm`, `Description`, `MessagePrompt` | App_Menu_ContactUs F3 (major), rows 038, 081 | Q4(a): fix now |
| `UBTConnect/ServiceAPISendContactUsMessage` | `Rate` is always 0 (rating block not built); the signed-out fields (name, e-mail, phone, country, locality) are not sent | App_Menu_ContactUs F1 (blocker), F2 (major) | Q1(a), Q2(a): build |
| `Connect2_LegacyShared/ActionUserContactUser` | `UserContactRequest` with 10 fields; `SenderPhone` stays at its default "" (`UBT_Email.model.js:207-211`) | Legacy_LDMEventsFlow row 063 (match, settled in G4 review) | - |
| `Connect2_OrbitMobile_MUI/ActionEventContact` | structure `UBT_Email.UserContactRequest`; the send stays mocked | Legacy_LDMEventsFlow_V2-197 | auto-decision |
| `Connect2_OrbitMobile_MUI/.../DataActionGetCoordinatorDetails`, `GetEventByEventId`, `GetHouseholdCoordinates` | the mocks ignore `EventHostId`; the real server must filter by it | Legacy_LDMEventsFlow_V2-093 | - |
| `UBTConnect/Updates_SingleList/DataActionFetchUpdates` | the mock ignores `Filter_Updates`; the real server must apply the filter, the search, the status, the sort and the countries | Directory_Updates-007, F3 (minor) | - |
| `UBTConnect/ServiceAPIAction_UI_UpdateItem_MarkAsRead`, `_MarkAsUnread` | the mock marks the HomeFeed collection, not the list of Updates_SingleList | Directory_Updates-009, 010 (CR-Updates_SingleList-1) | - |
| `Connect2_LegacyShared/ActionGetSignedImagesInBulk` | no mock in the demo; a failed call gives "" | Legacy_OrbitQRCodeFlow-036, row 099 | - |
| `UBTConnect/ActionRequestPhotoUpdate` | `Out_IsSuccess` is never assigned on the server (BR-UBTCON-183); the screen does not read it | App_Menu-011 | keep as TST |
| `Connect2_LegacyShared/ActionGetAvailableUsers` | Q2 deferred to the production phase (user, 2026-10-17) | Legacy_Share-092 | open |

## 4. Identity and session

Steps of the TST chain and what a production identity integration must give the front end. The `AuthProvider`
interface (`app/src/platform/auth/provider.ts:5-14`: `signIn`, `completeSignIn`, `signOut`, `getSession`) is the seam.

| Step | TST chain (evidence) | React today | Production must provide |
|---|---|---|---|
| 1 Sign-in start | Login → "Login with UBT One" → `AppManager_Login` → the B2C policy of UBT_AppManager (`auth.md:9`, App_Common-027; names `AzureB2C_ClientId`, `AzureB2C_LoginPolicy`, `AzureB2C_ResetPassPolicy`, `app-shell.spec.md:270`) | `mockAuth.signIn` does nothing; `completeSignIn` writes the mock session (`mockAuth.ts:19-25`) | `signIn(returnTo)` that leaves for the identity provider; a BFF that keeps the tokens and gives an HttpOnly cookie (`stack.md:26-27`); the protected path kept as the callback (`shell-facts.md` U1: `Login?In_IsFromInvalidPermissions=True`, `OutSystems_LastURL`) |
| 2 Callback | `/UBT_AppManager/Callback` → `ActionAppManager_Login` → OutSystems session; a navigation away before the forward loses the session (`auth.md:10-11`) | no callback route | a callback that ends in `completeSignIn()` with the callback type |
| 3 Routing by callback type | `IdP_OnLogin` → HomeFeed; `PIN_NeedRegistration` → PINRegister; `IdP_OnResetPassword` → success toast; failure → `FeedbackMessage_AutoClose` with the App Manager message (App_Common-030 to 032; BR-UBTCON-305) | `auth.ts:40-47`: PINRegister without a local PIN, else the resume link, else `OutSystems_LastURL`, else HomeFeed (U4) | the callback type and the failure message in the `completeSignIn` answer; the reset-password policy page (App_Common Q1(a): not migrated now) |
| 4 Post-login | `Connect_SetLoggedContext(True)`, `TriggerOfflineDataSync`, `ReplaceOnUpcomingNavigation` (App_Common-029, BR-UBTCON-304); then `Sync_Info_GetMain(isFromLogin=True)`, `GetUserInformation`, `GetNumberUnreadMessages`, the two map caches (`app-shell.spec.md:297-305`) | `postLogin.ts` runs the same calls; no offline sync (no-op) | the five endpoints of the table of `app-shell.spec.md` §10 |
| 5 App context | `AppManager_SynchAppContext` on every app start (PIN settings, minimum versions, identity names); `AppManager_AfterInitialize(EspaceName, MobileContext, TOTP)` when `CheckDeviceOnReady` and signed in (`app-shell.spec.md:299-300`, U2) | fictional config; `AfterInitialize` recorded | both endpoints; TST values: `PIN_Use` true, inactivity 1200 s, overlay, `EnforceOnReady` false, `EnableFingerprint` true, `CheckDeviceOnReady` true, no minimum versions (U2) |
| 6 Device awareness | the server login decides if a device is valid (App_Common Q3(a), KB `device-awareness.md`); `Login?CallbackType=DeviceAwareness_InvalidDevice` shows a delayed message (App_Common F3) | `useLogin.ts:82-87` compares the wrong constant (F3, minor); `AppManager_HandleDeviceAwarenessPopUp` not built | the callback type value `DeviceAwareness_InvalidDevice` (`static-entities-tst.json:2643`); the reset-password dialog is open work |
| 7 Device id | one id per browser in `localStorage["UUID"]`, sent as `DeviceDetails.UniqueId` of `AcceptPolicies` (App_Policies row 063; TST `:1385-1387` per `followup.md`) | a new id per page load (`AcceptPendingPolicies/actions.ts:50-66`); the row is `missing` since the follow-up pass, F4 stands | nothing on the server; the front end stores the id in `localStorage["UUID"]` (Q2(a)) |
| 8 PIN | `PIN_Check`, `PIN_Set`, `PIN_HasUnlocked`, `PIN_IsLocked`: client gate; new tab re-locks (`HasRenderedSplashInSession`, U3); registration starts the inactivity timer | `pin.ts`, `machine.ts`, `inactivity.ts`; hashed PIN (U5) | nothing verified on the server; U20 open: whether the server refuses calls while locked |
| 9 Inactivity | `InactivityTimer` 10 s check, timeout `PIN_SessionInactivity_Seconds` (1200), overlay in place (`app-shell.spec.md:228`, U2) | `inactivity.ts` with the same events | nothing; the values come from step 5 |
| 10 Logout | `Connect_Logout` = `Cache_InvalidateEverything` then `AppManager_Logout`: server logout, Firebase sign-out, telemetry, `PIN_Delete`, context re-sync, then Login (App_Common-153, App_Menu-049; BR-UBTCON-208) | `auth.ts:60-96`: memory cache and local entities cleared (ADR-10), `authProvider()?.signOut()` makes no call | `signOut()` that ends the BFF session and the identity-provider session; the Security branch of the flow handler (toast, logout, Login) on a 401 (U10 answer) |
| 12 App-start failure | a non-system exception of `OnApplicationReady` goes to `ScreenController_RaiseError` → `handleError` → the exception toast of App_Common (`UBTConnect.controller.js:15398-15417`, `UBTJavaScriptUtils.controller.js:3900`; `followup.md` _shared-193, candidate finding, U10) | `appStartSteps.ts:192-196` logs only, no toast | the app-start endpoints answer errors in the contract shape (`{ error, exception, specificType }`), so that the flow handler can show the toast; the front end raises the error to the handler |
| 11 Request protection | TST sends `x-csrftoken` and `outsystems-request-token` headers (`app-shell.spec.md:278`); no CSP on the document (`:287`) | `callAction` sends JSON POSTs (`openapi.yaml` header) | a CSRF token with the cookie session (TST uses one; the form is **not verified**); the error shape `{ error, exception, specificType }` so that `SecurityException` reaches the handler |

## 5. Native capabilities on the web

| Group | TST behaviour (rows) | React has | React needs (web substitute) | Decision |
|---|---|---|---|---|
| Push (FCM, local notifications) | `FCM_DeeplinkCallback`: parse, link = screen or deep link, PIN checks, navigate; `FCM_NotificationCallback`: local notification, `SynchronizeNumberUnreadMessages`, `Notifications_LastChecked` (_shared-097, 098, 158 to 175, 190) | nothing; unread count at app start only (`startup.ts:88`) | Web Push (service worker `push` event in `sw/sw.ts`), a push service, a token registration endpoint, the deep-link routing of the callback as a URL; iOS only for installed PWAs 16.4+ (ADR-1) | U12: none now, Web Push later |
| Deep links, app links | Android App Links and EventfulDeeplinks on cold start and resume; `ConnectSharing/Details…` → `UBTConnect/ConnectShare`; `SetResumeLoginLink` when locked or signed out (Legacy_Share-083 to 088, _shared-027, 189) | `resume.ts` keeps the resume link in memory; `getColdStartLinkURL` returns "" | plain URLs: ConnectShare reached by its URL; a server redirect for the old `ConnectSharing/Details…` links (**not verified**) | U14(a) |
| Share | `ExternalShare` (Share via, Copy link, WhatsApp, Signal, Outlook) only when `AppManager_GetIsNative` (_libraries-116, 117); `ShareEntity_ByURL` under C2ExtendedShare (Directory_CommonBlocks-123); `IsShareToOthers` on Household rows (Bookmarks-112) | the in-app share (recipients) is built; no external section (`ShareSheet/README.md:78-84`) | Web Share API and the clipboard for the external options (ADR-1), when the user asks for them | U14, U18 |
| Barcode | `CheckBarcodePlugin`, `ScanBarcode` with 9 arguments; web scanner when Cordova is absent (Legacy_OrbitAdminFlow-103, 060, 062) | vendored `OSBarcodePlugin.js` (ADR-11); fictional scanner by default | HTTPS and camera permission in production; nothing else | ADR-11 |
| Camera (PassportScan) | DEV only (Legacy_OrbitEventsFlow F3) | a control to a missing route | remove (Q2 open) | Legacy_OrbitEventsFlow Q2 |
| Orientation | landscape lock on `/UBTConnect/Photobook` (_shared-142, 143, 146, 155, 188) | `transitionEvents.ts:19-25` only | none (no full web equivalent, ADR-1) | U18(a) |
| Keyboard | `MobileKeyboardVisible` body class, Cordova only (_shared-183, 185) | none | `visualViewport` class, not built yet (_shared-185) | U18(a) |
| App launcher, store links | Assemble Android Maps launch (Legacy_AssembleFlow-138, Legacy_LDMEventsFlow_V2-074), `market://` links and `ExitApplication` (_shared-009, 042 to 059) | button without a handler (`UnsupportedVersion.tsx:48-53`); `exitApp()` | none; the store cards are placeholders | U16(a), U18(a) |
| In-app browser | `OpenInApp_OpenExternalLink` → InAppBrowser SYSTEM (App_Menu-050) | `window.open` in a new tab | nothing | U18(a), CR-HomeFeed-1 |
| File download and viewer | File, FileTransfer and FileViewer plugins; on the web `TryOpenFileInApp` falls to a new tab (`pwa-file-plugins.md` §2) | the same fallback; `HandleDownload` listeners inert (Legacy_OrbitEventsFlow-A161, J013) | nothing: a new tab is the TST web behaviour (P8) | U18, PWA P8 |
| Biometrics | `FingerprintScanner`, `App_PIN_BiometricEnabled`, `PINBiometricsMenu` (App_PIN-108, App_Menu-060) | reader check returns false | WebAuthn later (ADR-1); `components/auth/FingerprintScanner/README.md` names it | U13(a) |
| Telemetry callbacks | `FRD_UserCallback` (Firebase realtime database, both branches empty), `GetCallbacksJS` (_shared-099, 170, 171, 178, 179) | the network pair only (`networkStatus.ts:25-39`) | nothing: the Firebase branch is dead code on TST | U17 |

## 6. Flags and configuration

On TST every `GetHas…` helper is a per-user check of a permission list. UBT_AppManager builds that list at
sign-in from feature toggles, LaunchDarkly flags that are true, and the id-token claims (`feature-flag-helpers.md:4-6`;
KB `azure_migration.md:114-119`). The React registry holds the TST values of
`flag-values-tst.json` (probed 2026-10-14, one change on 2026-10-21) and no production call
(`platform/flags/server.ts:13-17`). PROD values are not known (Bookmarks Q1(a)).

| Flag (source) | TST value | Rows | Chooses between screens? | Production |
|---|---|---|---|---|
| C2EnableCarousel (OutSystems toggle) | true | 21 + 11 | HouseholdCarousel / HouseholdDetails | live flag |
| C2ExtendedShare | true | 15 | share UI inside screens | live flag |
| mobileOrbitAccess (LaunchDarkly) | true | 12 + 3 | Orbit entry | live flag |
| C2NewBookmarks, mobileDirectoryBookmarkNote, getHasNewBookmarks, getHasBookmarNote | true (since 2026-10-21), false | 10 + 9 + 6 + 4 | Bookmarks / New_MyBookmarks / MyBookmarks (D2) | live flag; PROD value decides the screen (Bookmarks Q1) |
| C2NewNotifications | false | 6 + 5 | bell → Notifications / MessageList (D11) | live flag |
| C2EnableMaps | false | 6 + 2 | Map access | live flag (Map not built) |
| C2EnablePersonalEvents | false | 5 | deprecated area | can stay constant |
| C2NewLDM | true | 3 + 2 | LDM V2 / V1 (D1) | live flag |
| mobilePhotobook, mobileOrbitHostSurvey, mobileOrbitEventBooklet, mobileAssemble | true | 3, 3, 3, 2 | entry of each feature | live flag |
| C2EnableSearchByBirthday, C2EnableC1DirectoryView, C2EnableFeed, C2EnableCustomServices, mobileStudentInformation, mobileDirectoryUpdateFeedDeceasedProfile | true | 3, 2, 1, -, -, - | behaviour inside screens; Directory tab target | live flag |
| mobileDirectoryLocalityContacts, MobileDirectoryHouseholdGallery | not probed; TST renders ComingSoon (Directory_Locality-157, Directory_Household-118) | 2 | DEV only branches | constant false until TST changes |
| Mobile-Directory-list-virtualization | unknown | 1 | list attribute (Legacy_OrbitAdminFlow-031) | open: Legacy_OrbitAdminFlow Q2 |

Production needs one flag endpoint through the BFF, evaluated per user (R5 a, `server.ts:9-11`), with the values
persisted for offline use (ADR-10). The KB target keeps LaunchDarkly as the one flag store, moves the OutSystems
toggles into it and the key into Key Vault (`azure_migration.md:123-131`). A flag that is false on TST and PROD, with
no built screen behind it, can stay a constant (C2EnableMaps, C2EnablePersonalEvents).

Configuration outside the flags: `Sync_Info_GetMain` returns `B2CTenant` (site property `Embedd_B2CTenant`), the two
embed base URLs, the site property `UpdatesFeed_MonthsToShow`, the local entities and the Orbit static entities
(`App_Common/pack/data.md:17-36`). `SynchAppContext` returns the PIN settings and the minimum versions (U2, U16).
`Site.IsKi` branches inside five data actions on the server.

The static entities come from `moduleinfo` on TST
(`static-entities.md`, `static-entities-tst.json`); the React app ships them in code (`lib/*/staticEntities.ts`).
The 94 client variables have compiled defaults (U8, `shell/client-variables.md`). The external app URLs (Orbit,
Assemble, LDM) are build-time config (`config.ts:14`).

## 7. Telemetry and audit

U17 keeps telemetry off in the mock phase. The 25 rows of aggregate §3 go to `log.info` through
`platform/log/log.ts` (console sink; `addLogSink` is the hook). Production needs two sinks.

| Sink | TST element | Event names and payloads (from the reports) | Rows |
|---|---|---|---|
| Application events (server) | `zOnApplicationEvent_Wrapper(AttachmentJSON, EventId)` of Connect2_LegacyShared (`controller.js:7570`), fed by `AddAuditEventDetailEvent` (Connect2_OrbitMobile_MUI) | `EventId` = `ApplicationEvents_Directory.EmailHousehold`, `LDMApplicationEvent.MyTimelineCoordinatorEmailed`; EventInfo JSON: dateLocalIso, logLevel 3, EventType "LDM", guest id and name, EventDate, EventLocality (Legacy_LDMEventsFlow-021); `{EmailTo, NameOfSender}` for EmailHousehold (row 066); `AuditBookmarkSubscriptionEvent(id)` (Bookmarks-076); `AddAuditClickedEvent(id, EventHostId, EventName, EventDate)` and `HouseholdId, HouseholdName` (Legacy_LDMEventsFlow_V2 F6) | ContactFlow-045, 046, 070, 072, 089, 136, 137; Legacy_LDMEventsFlow-017, 021, 066; Legacy_LDMEventsFlow_V2 rows 027, 028, 170; Bookmarks-076 |
| App Insights custom events (client) | `AzureInsights_CreateCustomEvent`; cookies `ai_user`, `ai_session`; online state (`shell-facts.md:102`) | `OnApplicationEvent_EmailHost` with `AuditPayload_EmailHost` {MilestoneId, EventId, EventTitle, HostName, Subject, Message}; `OnApplicationEvent_ContactHelpdesk` with {EventId, EventTitle, Subject, Message} (ContactFlow F1); `ClickEvent`, `LaunchQRCodeScanner`, `QRCodeScanned` (Legacy_OrbitAdminFlow-104); image load errors (`HandleImageLoadError`, `app-shell.spec.md:240`) | ContactFlow-068, 105; Legacy_OrbitAdminFlow-104 |

React sends two and one fields of the two Orbit payloads today (ContactFlow F1); ContactFlow Q1(a) asks for the full
TST payload when the sink is wired. `AuditShareViewEvent` is disabled on TST (Legacy_Share §6.1: nothing is sent).
The New Relic cookie `nr2Users` (`app-shell.spec.md:277`) has no element in the app code: **not verified** as a need.

## 8. Offline, storage and sync

| Item | TST | React | Production needs |
|---|---|---|---|
| Local entities | IndexedDB client entities: notes (`UBTConnect_Notes_MCS`), bookmarks (`UBTConnect_Bookmarks_MCS`), search history, recent searches, message search history, Orbit local entities (`runtime-sources.md`; ADR-10 context) | `platform/storage/localEntities/` (localBookmarks, localNotes, localSearchHistory, recentSearch, orbitStaticEntities); cleared on logout (`clearLocalEntities.ts`); `navigator.storage.persist()` (`pwa/persistStorage.ts`) | nothing extra; the privacy notice must name the data at rest (ADR-10 consequence) |
| `Sync_Info_Main` | at app start with False and after login with True; returns the local entities, the Orbit static entities, the tenant, the base URLs and the site properties (App_Common-156, 163; `pack/data.md:17-36`) | step `syncInfoMain` after `waitForFirstScreen` (_shared-186, differs by CR-Search-3); fictional mock | the endpoint with its three server actions behind it |
| Bookmark sync | `Connect_SetLoggedContext` → `Sync_Bookmarks…`; one IndexedDB transaction (ADR-8) | `appStartSteps.ts` `setLoggedContext` | the bookmark read endpoints (`GetBookmarks`, `DataActionGetAllBookmarksByGroup`, Bookmarks-069) |
| `OfflineDataSync` | empty action; the OSUI engine runs `SyncOnOnline`, `SyncOnLogin`, `SyncOnResume` with nothing to do (BR-UBTCON-520, _shared-040, 041; App_Common-123 to 126) | `OfflineDataSync.tsx:17-28` no-op | nothing |
| Network state | `NetworkDetection` pings `status/network-ping.txt` every 30 s in a visible tab; only `App_NetworkStatus_IsOnline_IsPersistent` changes (U11) | `networkStatus.ts`, `networkFirst.ts`; the ping is never cached (`sw.ts`) | the file `/UBTConnect/status/network-ping.txt` on the host, no cache |
| Service worker | `/UBTConnect/pwaServiceWorker.js`, cache-first precache of 1310 URLs, scope `/UBTConnect/` (`pwa-tst-service-worker.md`) | Workbox worker (ADR-9): precache, network-first navigations with a 4 s timeout, never API, `/bff/*`, `/UBT_AppManager/*`; `SKIP_WAITING` on a contract change, not wired until the BFF exists (`sw.ts` header) | the worker served at the TST URL from cut-over on, and it deletes the `UBTConnect-*` caches (ADR-14, phase 5, not implemented) |
| Memory cache | `MemoryClientCache` with `UnlimitedTimeToLiveSeconds` 604800 (`runtime-sources.md`); `Cache_InvalidateEverything` on logout | `api/client/cache.ts`, cleared on logout | nothing |

## 9. Static assets, hosting and monitoring

| Item | What the reports show | Open |
|---|---|---|
| Path and scope | the app lives under `/UBTConnect/` on the same origin as ConnectMobile; the worker scope must stay `/UBTConnect/` (`pwa-tst-service-worker.md`) | the production host of `/UBTConnect/` (not in the evidence) |
| Manifest and icons | `pwa/manifest.json` = TST values; icons at `/UBTConnect/img/UBTConnect.AppLogo.{48,96,192,512}.png`; `start_url` `/UBTConnect/` | the icon files on the host |
| CSS and scripts | original per-screen CSS unchanged (stack row Styling); vendored TST scripts: Virtual Select, PanZoom, OSBarcodePlugin (ADR-5, 7, 11); `os-assets.manifest.json` (`lib/os-assets.ts`) | none |
| Images | signed URLs from `GetSignedImagesInBulk` (_libraries-245); `User_rectangle.png` fallback (`app-shell.spec.md:240`); image cache 30 days in the worker (`sw.ts`) | the image store and the signing service; the signed URLs must be cacheable by the browser for 30 days or less (**not verified**) |
| Embeds | Feed CMS and MyEntertaining on other origins; TST adds `preconnect` and `dns-prefetch` for both (_shared F2) | the two origins and their SDK scripts; `preconnect` not ported (info) |
| Error page | TST precaches `_error.html` (`pwa-tst-service-worker.md`) | the React offline page = precached `index.html` (`swRoutes.ts` `offlinePageFor`) |
| CDN | no CDN appears in the evidence; the worker precaches hashed bundles | **not verified** as a need |
| Monitoring | App Insights and New Relic cookies on TST; `log.ts` console sink only | the provider (U17); the error shape of the contract for server errors; Lighthouse and PWA e2e exist for the build (ADR-12, 13) |
| Security headers | TST: HSTS present; no CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy (`app-shell.spec.md:287-288`) | the headers of the new host are a decision, not a parity item |

## 10. Front-end work before cut-over

The blockers and majors of the reports (aggregate §5) with the user decision that applies (`decisions.md`). "Build now"
means the user chose the build option on 2026-10-27. "Open" means the question has no answer yet (INDEX §3). "No
decision recorded" means the report has the finding and no question; the fix follows the TST rule.

| Flow | Id | Severity | Finding (short) | Decision |
|---|---|---|---|---|
| App_Menu_ContactUs | F1 | blocker | signed-out fields of ContactUsDetails not built | Q1(a): build now |
| Legacy_OrbitEventsFlow | F1 | blocker | HostSurvey wizard not built | Q1: open |
| Legacy_OrbitEventsFlow | F2 | blocker | five milestone types render a marker | Q3: open |
| App_Common | F1 | major | `BubbleCommunicationException` branch missing in the flow handler | no decision recorded |
| App_CommonBlocks_Filter | F1 | major | accents not removed in the option-list search | no decision recorded |
| App_Menu_ContactUs | F2 | major | rating block not built | Q2(a): build now |
| App_Menu_ContactUs | F3 | major | `DataAction_GetLocalityTimezone` lacks four variables | Q4(a): fix now |
| App_Notifications | F1 | major | empty state not built | no decision recorded |
| App_Notifications | F2 | major | badge shown at 0 | no decision recorded |
| App_Policies | F1 | major | `PolicyApplications` sent as names, not record ids | no decision recorded |
| App_Profile | F1 | major | householder address section not built | Q1(a): build now |
| App_Services | F1 | major | `isLoading` stays True after a failed save | Q2(a): fix now |
| App_Services | F2 | major | a failed `GetServices` reaches no flow handler | Q3(a): fix now (shared fix with Calendar F1, Directory_SupperMeetings F1, CountryDetails) |
| Calendar | F1 | major | failed config fetch shows no toast | Q1(a): fix now |
| Directory_Search | F1 | major | "Showing results for" caption condition | no decision recorded |
| Directory_Search | F2 | major | recent list refresh on a chip change | no decision recorded |
| Directory_Search | F3 | major | three loading rows before a fetch | no decision recorded |
| Directory_SupperMeetings | F1 | major | failed refresh reaches no flow handler | Q1(a): fix now |
| Directory_Updates | F1 | major | empty state not built | no decision recorded |
| Legacy_LDMEventsFlow_V2 | F1 | major | guest tap opens the carousel with every guest | no decision recorded |
| Legacy_LDMEventsFlow_V2 | F2 | major | timeline filter popup not built | Q1: open |
| Legacy_MyNotificationsFlow | F1 | major | shared-item card of a Sharing message not built | Q2(a): build now |
| Legacy_MyNotificationsFlow | F2 | major | Orbit and Assemble action buttons not built | Q1(a): build now |
| Legacy_MyNotificationsFlow | F3 | major | adaptive-card viewer not built | Q3(a): build after the stack confirmation |
| Legacy_MyNotificationsFlow | F6 | major | private message of another user: leave instead of show | Q4(a): follow TST |
| Legacy_OrbitAdminFlow | F1 | major | DEV-only milestone branch | Q1: open |
| Legacy_OrbitEventsFlow | F3 | major | DEV-only "View Passport details" control | Q2: open |
| _libraries | F1 | major | subscription upgrade actions not ported | Q3: open |

Also before cut-over, from the decisions:
- `document.title` per route (App_Services Q4(a), Directory_OneSchoolGlobal Q2(a)).
- the device id in `localStorage["UUID"]` (App_Policies Q2(a); `followup.md` App_Policies-063 is now `missing`).
- the `visualViewport` keyboard class (U18, not built).
- the full audit payloads (ContactFlow Q1(a), when the U17 sink exists).
- the production `AuthProvider` (`authProvider.ts`: none today) and the worker at the TST URL (ADR-14, phase 5).

The four candidate findings of `review/followup.md` have no F id yet. They wait for the user: the two validators trim
the text before the check, TST does not (App_Menu_ContactUs-122, 123); `IsGuestView` starts true on TST, false in
React (Legacy_OrbitEventsFlow-A121). A failed app start shows the exception toast on TST, React logs only
(_shared-193). The device id store (App_Policies-063, F4).

## 11. Order of set-up

The dependencies run from the session to the screens. Each step names the rows that show the dependency.

1. **Identity and the BFF session.** Nothing signed-in runs without it. Every protected screen calls
   `checkRegistered` (`shell-facts.md` U1), and the app-start calls 2 to 7 need a session (`app-shell.spec.md` §10).
   This step gives steps 1 to 3 and 10 of §4 and the `AuthProvider` for production. Evidence: App_Common-027 to 032, 153.
2. **App-start and context endpoints.** `AppManager_SynchAppContext`, `AppManager_AfterInitialize`,
   `Sync_Info_GetMain`, `GetUserInformation` (user record, permissions, subscription), `GetNumberUnreadMessages`,
   the two map caches, `CacheControl_UserInfo` and `CacheControl_Policies`. Without them Splash never routes
   (App_Common Q4(a)) and HomeFeed does not mount. Evidence: `app-shell.spec.md:297-316`, App_Common-163, App_PIN-097,
   App_Menu-009, 084.
3. **The flag endpoint** through the BFF (R5 a), with the PROD values. The bottom bar, the bell and the Bookmarks
   screen choose their target by flag (D1, D2, D11; `feature-flag-helpers.md`). Until then: the TST constants.
4. **The read contract.** 93 data actions, 3 aggregates and the read wrappers, module by module in the order of §3.1.
   The signed-image endpoint comes first: 13 flows show photos. The React side makes the two input fixes of §3.2
   (App_Policies F1, App_Menu_ContactUs F3).
5. **The writes.** 41 endpoints, with the mail service behind the six e-mail actions and the application-event sink
   (§7). Evidence: ContactFlow-047 to 126, Bookmarks-071, 073, Legacy_Share-094, Legacy_MyNotificationsFlow-013 to 015, 099.
6. **Static hosting.** The `/UBTConnect/` path, the worker at `/UBTConnect/pwaServiceWorker.js` from cut-over on
   (ADR-14), `status/network-ping.txt`, the icons and the fallback image. Also the embed origins and the ID-token
   broker for Feed CMS and MyEntertaining (Home-050, Calendar-058, 059).
7. **Later, per feature.** Web Push and the token registration (U12), WebAuthn (U13), Web Share (U14, U18). Then the
   adaptive-card renderer (Legacy_MyNotificationsFlow Q3), the Map backend when `C2EnableMaps` turns on, and the
   monitoring provider (U17).

The five items to set up first: the identity provider with the BFF session (1); the app-start endpoints (2); the
flag endpoint (3). Then the read contract with image signing (4), and the static host with the worker URL and the
ping file (6).
