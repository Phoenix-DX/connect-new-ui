# Runtime scripts fetched from TST (evidence only)

Fetched read-only (static GET, no session) on 2026-10-14 after the user agreed ("Tải về, chỉ đọc" (English: "Download, read only")); stored in
`migration/runtime-sources/`. Evidence to port behaviour. Do not ship these files in the app or copy them verbatim.

| File | Size | What it answers |
|---|---|---|
| `OutSystemsUI_2_23.OutSystemsUI.js` | 1.3 MB | OSUI providers: BottomSheet (drag, scroll lock), Carousel (Splide options), Gallery, InlineSVG… |
| `UBTConnect_EmbedFeed.EmbedFeed.js` | 23 kB | Connect2Feed SDK: how the Feed CMS iframe URL and events are built |
| `OutSystems.js` | 640 kB | Client runtime: `Navigation.navigateTo` (cross-origin URLs) |
| `OutSystemsReactView.js` | 300 kB | React view runtime |
| `UBTConnect.appDefinition.js` | 1 kB | App definition (environment/app keys, home module, default transition) |
| `CommonPlugin.controller.js`, `CommonPlugin.PluginManager.js`, `Connect2_AppLauncherPlugin.controller.js` | — | Plugin checks (IsCordovaDefined, GetOperatingSystem) and the app launcher, for `OpenInApp_OpenApp` on the web (user, 2026-10-15) |
| `UBTConnect_Notes_MCS.{controller,entities,aggregates.IDB,model}.js` | — | Local notes cache (client entities in IndexedDB): CreateOrUpdate_LocalNote, Delete_LocalNoteByNoteId (user, 2026-10-15) |
| `moduleinfo.json` | 280 kB | `GET /UBTConnect/moduleservices/moduleinfo` (2026-10-15): URL versions, URL mappings, static-entity values per module |

Standing rule (user, 2026-10-15): missing static files of the TST manifest (scripts, css, moduleinfo) can be fetched
read-only without asking. Each file is listed here and reported to the user. Data calls and screenservices are never fetched.

| More files (2026-10-15) | Size | What it answers |
|---|---|---|
| `Connect2_LegacyShared.controller.js` | 526 kB | GetCacheableSignedPhotoURL, IOSMetaTags, IOSPreventSwipe, SetThemeClassToBody |
| `UBTConnectLibrary.ScrollAnimations.js` | 20 kB | `ScrollEvent`: header shadow / sticky title of the detail layouts |
| `ReactiveHtmlSanitizer.HtmlSanitizer.js`, `.controller.js` | 6 / 28 kB | SanitizedHtml allow lists and actions |
| `OutSystemsSettings.js` | 2 kB | Runtime env params: IndexedDBOffline = false, DateTimeRevamp = false, NullDatesTZAware = true… |

| `UBTConnect_EmbedMyEntertaining.controller.js` | — | MyEntertaining embed module actions (the external embed-entertaining.js is not a TST file: D8(b) mock) |
| `UBTConnect.App_Services.controller.js` | — | Services flow controller (flow exception handler) |
| `UBTConnect.entities.js`, `UBTConnect.aggregates.IDB.js` | — | UBTConnect client entities (recent searches, …) and their IndexedDB aggregates (CR-Search-1) |
| `OutSystemsReactWidgets.js` | — | Platform widgets: List / ListItem (swipe actions, OnScrollEnding, virtualization), Container, Link… |
| `Connect2_LegacyShared.clientVariables.js` | 2 kB | Unread counters (Notifications, PublicMessages, WhatsNews) |
| `Connect2_LegacyShared.entities.js`, `Connect2_LegacyShared.aggregates.IDB.js` | — | Legacy shared client entities (message search history) and their IndexedDB aggregates (CR-MessageList-3) |
| `OutSystemsUI_2_23.TouchTrack.js` | — | OSUI TouchEvents provider (wave 4) |
| `PanZoom.anvaka_panzoom_js.js` | 46 kB | PanZoom block script (customised anvaka panzoom, `?DkjKuM8SUDMWxmXWUXZevg`): vendored as-is in `app/src/vendor/panzoom/` (ADR-7, Photobook Q1); listed by F4b 2026-10-15 |
| `UBTConnect_Bookmarks_MCS.{controller,entities,aggregates.IDB,model}.js` | — | Local bookmarks client entities (CR-W4A-1) |
| `UBTConnect.Directory_Locality.controller.js` | 1 kB | Directory_Locality flow error handler → App_Common.handleError |
| `UBTConnect.Directory_OneSchoolGlobal.controller.js` | 1 kB | Flow error handler → App_Common.handleError |

Grep with line ranges; the files are large.

| More files (2026-10-15, W5-B) | Size | What it answers |
|---|---|---|
| `OutSystemsUI_2_23.VirtualSelect.js` (2026-10-15, W5-B) | 87 kB | Virtual Select v1.3.0 as bundled by OSUI 2.23 (provider of osui:DropdownSearch); also vendored byte-identical in `app/src/shared/osui/DropdownSearch/vendor/` (ADR-5, SOURCE.md) |
| `UBTConnect.Legacy_Share.controller.js` | 1.4 kB | 2026-10-15: Legacy_Share.handleError → trace + App_Common handleError (ConnectShare Q3) |
| `MemoryClientCache.controller.js` | 138 kB | 2026-10-15: UnlimitedTimeToLiveSeconds = 604800 s (BookmarksByGroup Q4); GetCacheableObject |

| More files (2026-10-16, wave 8 batch O-A1) | Size | What it answers |
|---|---|---|
| `Connect2_OrbitMobile_MUI.TimeFormat.js` | 5 kB | Global `TimeFormat` (getWeekDay, getMonth, getYear…) used by the Orbit date formatters (ListOfDaySelectors) |
| `OutSystemsUI_2_23.controller.js` | 2.4 MB | OSUI client actions: IsLayoutNative / IsWebApp (DeviceDetection), DEPRECATED_UpdateAccordion |
| `Connect2_OrbitMobile_MUI.entities.js` | 59 kB | Orbit client (local) entities with their static records (LocalOrbitMilestoneType …); fetched 2026-10-16 by wave 8 O-A2b (MilestoneHeader), `?F__q1S_GIk+MS894auar8A` |

| More files (2026-10-16, wave 8 batch O-A2) | Size | What it answers |
|---|---|---|
| `Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js` | 11 kB | View of Widgets.NetworkWarning (no pack): Animate topToBottom/normal, card texts, Try again button raises event TryAgain |

| More files (2026-10-16, wave 8 batch O-A2) | Size | What it answers |
|---|---|---|
| `Connect2_OrbitMobile_BL.model.js` | 100 kB | Orbit structures: Event_ScreenRec, Milestone_ScreenRec, OrbitEventTypeRec, OrbitMilestoneTypeRec (Card_Event, Card_Milestone) |
| `Connect2_OrbitMobile_IS.model.js` | 252 kB | EventInfoRec, MilestoneInfoRec (nested records of the Orbit screen structures) |
| `Connect2_OrbitMobile_MUI.model.js` | 1.1 MB | Orbit MUI static entities by record GUID: the six Admin* OrbitMilestoneType records have no value in the TST moduleinfo (resolve to undefined) |
| `Connect2_LegacyShared.model.js` | 946 kB | LegacyShared structures (Person_Contact_Options and later LegacyShared blocks) |

| More files (2026-10-16, foundation F9: contract for the 23 Orbit / LDM / Assemble screens) | Size | What it answers |
|---|---|---|
| 45 `.mvc.js` of the 12 not yet captured Orbit / LDM / Assemble screens and their blocks (`UBTConnect.Legacy_OrbitEventsFlow.{EventBooklet,GuestArrangements,TransportDetail,ViewDocuments,EmailContact}`, `UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail`, `UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate`, `UBTConnect.Legacy_LDMEventsFlow.EmailTarget`, `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2`, `UBTConnect.ContactFlow.ContactByEmail{OrbitHost,LDMCoordinator}`, `UBTConnect.Legacy_AssembleFlow.AssembleDetail`, 30 `Connect2_OrbitMobile_MUI.*` blocks incl. `Popup_QRCodeScan`, `ScreenBlock_AdminEventDetail`, `ScreenBlock_Accommodation*/Meal*`, `ScreenBlock_ContactForm`, `ScreenBlock_Event_Email_V2`, `Agenda_V2`; `Connect2_LegacyShared.Calendars.{DayCalendar,EventCalendarWeekMonth}`, `UBTConnect_Utils.CW_Share.ShareableObject_Generic`) | 2.2 MB | Current TST code of those screens: TST changed after the survey of 2026-10-13 (e.g. `ScannedUserRec` moved to Connect2_OrbitMobile_BL, new call `GetMilestoneScanFF` in OrbitAdminLanding's closure). Only files whose content differs from the survey / earlier copies beyond BOM and line endings were kept (URL tokens from a fresh `moduleservices/moduleinfo`, not stored). `contract_gen.py` reads this folder (newest copy wins) |
| `APIDomain_Directory_IS.model.js` | 1.1 MB | Directory structures, newer than `migration/contract/sources/raw` (2026-10-14): `Directory_MemberById` used by `ScannedUserRec` |

Fetched in F9 but **not kept**: `Connect_Search_CS.model.js` (TST added `SearchResult.DisplayAddress` / `DisplayHouseholdName`, Boolean). If kept, it changes the
contract of the finished Search and ShareSheet mocks. The foundation owner decides this (F9 report). The 2026-10-14 copy in `migration/contract/sources/raw` stays in use.
| `BarcodePlugin.controller.js`, `BarcodePlugin.OSBarcodePlugin.js` | 55 kB, 405 kB | 2026-10-16: CheckBarcodePlugin errors (0011 Cordova, 0012 plugin), PWA web scanner (OrbitAdminEventDetail Q2) |
| `Connect2_OrbitMobile_MUI.clientVariables.js` | small | 2026-10-17: booklet page-size client variable defaults (EventBooklet CR-EventBooklet-1) |
| `UBTConnect.pwa-manifest.json` (GET `/UBTConnect/moduleservices/pwa/manifest`) | 789 B | 2026-10-16, PWA phase 0 F1 (user approved): name/short_name "Connect 2.0", display standalone, background `#ffffff`, theme `#1992ab`, icons `/UBTConnect/img/UBTConnect.AppLogo.{48,96,192,512}.png`, start_url `/UBTConnect/`, orientation portrait, no `scope` (defaults to `/UBTConnect/`) |
| `FileTransferPlugin.controller.js`, `FileTransferPlugin.wrapper.js`, `FilePlugin.controller.js`, `FilePlugin.wrapper.js`, `FileViewerPlugin.controller.js`, `FileViewerPlugin.wrapper.js`, `FirebaseCloudMessagingPlugin.controller.js` | 117 kB, 13 kB, 433 kB, 34 kB, 211 kB, 4 kB, 121 kB | 2026-10-16, PWA phase 0 F3/F4 (standing rule): the plugins' PWA wrappers (file download via XHR blob + `<a download>`, `OSFileTransferWrapper.Instance`), FCM web behaviour |
| `UBTConnect.AppLogo.48.png`, `.96.png`, `.192.png`, `.512.png` (GET `/UBTConnect/img/UBTConnect.AppLogo.<n>.png`) | 2 kB, 6.5 kB, 22.6 kB, 116 kB | 2026-10-16, PWA-1 (standing approval for TST static files): the four manifest icons of `UBTConnect.pwa-manifest.json`, PNG RGBA at the declared sizes. Kept in `app/public/os-assets/UBTConnect/img/` and served at their TST paths `/UBTConnect/img/…` (dev middleware, static copy at build) |
| `UBTConnect.status.network-ping.txt` (GET `/UBTConnect/status/network-ping.txt`, in the survey manifest) | 4 B | 2026-10-16, PWA-2 (standing approval for TST static files): the NetworkDetection ping file (shell-facts U11). Body `pong` (no newline), `text/plain`, TST sends `cache-control: max-age=2592000` (the ping bypasses it with `cache: "no-store"` + `d=<now>`). Copied unchanged to `app/public/UBTConnect/status/network-ping.txt` (served at the TST path in dev, demo and production) |
| `BarcodePlugin.model.js` (GET `/UBTConnect/scripts/BarcodePlugin.model.js?qE1Ma+YMtsborg7hFlEr1w`) | 34 kB | 2026-10-16, PWA-3 (standing approval for TST static files): ScanResultRec (Text ← JSON `ScanResult`, Format ← `format`), ScannerResultInternalRec, for the ADR-11 port. Also tried `/UBTConnect/scripts/barcodeplugin.js.LICENSE.txt` (named on line 1 of OSBarcodePlugin.js) and `BarcodePlugin.OSBarcodePlugin.js.LICENSE.txt`: 404, not served by TST. |
| `UBTConnect.favicon.png` (GET `/UBTConnect/favicon.png?l+MR0Ib_ZmEf_QXqY9HEnQ`, in the TST moduleinfo manifest) | 1.6 kB | 2026-10-17 (standing approval for TST static files): PNG 43×43 RGBA (OutSystems red ring). Every original layout runs OutSystems UI `AddFavicon("favicon.png")` (`OutSystemsUI.js` `Utils.AddFavicon`: `<link type="image/x-icon" rel="shortcut icon">` in `<head>`). Copied unchanged to `app/public/UBTConnect/favicon.png`; `app/index.html` links it |
| `UBTConnect.pwaServiceWorker.js` (GET `/UBTConnect/pwaServiceWorker.js`, **not** in the moduleinfo manifest: approved by the user for this one file, 2026-10-17) | 133 kB | PWA F2: TST's service worker (scope `/UBTConnect/`). Precache of 1310 versioned URLs, cache-first fetch with 90 navigation mappings to the cached `index.html`, activate deletes old `UBTConnect-*` caches. Summary and cutover consequences: `migration/knowledge/pwa-tst-service-worker.md` |
| `UBTConnect.controller.js`, `UBTConnect.model.js`, `UBTConnect.clientVariables.js`, `UBTConnect.languageResources.js` (GET `/UBTConnect/scripts/<file>`, in the survey manifest) | 1.26 MB, 1.69 MB, 15 kB, 2 kB | 2026-10-21 (standing approval for TST static files): module-level client actions (201 defined, call graph between them), structure records, the 28 client variables, and the language resources (default validation messages only: no extra locale). Used for the spec-coverage check against the DEV MCP inventory |

| Files fetched 2026-10-27 (clarify-screens, standing rule) | Size | What it answers |
|---|---|---|
| 33 flow controllers `UBTConnect.<Flow>.controller.js` (App_Common_Blocks, App_Common_Blocks_PopupDialogs, App_CommonBlocks_Filter, App_Menu_ContactUs, App_Notifications, App_Profile, Bookmarks, Calendar, Calendar_Events, Deprecated_Calendar_PersonalEvent, Directory_Caroussel, Directory_CommonBlocks, Directory_Household, Directory_Household_Blocks, Directory_Interchange, Directory_OneSchoolGlobal_Blocks, Directory_Photobook, Directory_Search, Directory_SupperMeetings, Directory_Updates, Legacy_AssembleFlow, Legacy_LDMEventsFlow, Legacy_LDMEventsFlow_V2, Legacy_MyBookmarks, Legacy_MyNotificationsFlow, Legacy_OrbitAdminFlow, Legacy_OrbitEventsFlow, Legacy_OrbitQRCodeFlow, Map, Notes, SubLayout, zDEV_Directory_CommunityBusinessBlocks, zTemp_Flow) | 1–2 kB each | The UI-flow exception handler of each flow (OnException → App_Common.handleError), asked by the App_Menu and App_Policies flow reports |
| `Connect2_Assemble_MUI.controller.js` | 122 kB | Assemble MUI actions (G4 Legacy_AssembleFlow) |
| `Connect2_MyBookmarks_MUI.controller.js` | 19 kB | MyBookmarks MUI actions (G3 Bookmarks, TST-only screens) |
| `NavigationHandler.controller.js` | 110 kB | AllowUpcomingNavigation, PreventNavigation, ReplaceOnUpcomingNavigation, back handling |
| `SortableJS.controller.js` | 16 kB | SortableList SetupList: deny lists, drag indexes (App_Services Q1) |
| `UBT_AppManager.controller.js` | 596 kB | AppManager: PIN_Check, Pincode register/unlock logic, AppManager_Logout, cached user info |
| `UBT_AppManager_Mobile.controller.js` | 112 kB | Fingerprint / PinUnlock_MobileWrapper actions |
| `UBTConnect_Utils.controller.js` | 375 kB | Utils client actions: Menu_GetList, Get_MemoryCacheKey_UniqueKey, OpenPolicy, CacheControl_* (App_Menu, App_Policies Q1) |
| `UBTConnectLibrary.controller.js` | 577 kB | Library client actions: IsEmailValid, IsPhoneNumberValid, FormatConnectDate_*, BottomSheet_*, FormatClasses (App_Menu_ContactUs Q3) |
| `UBT_Email.model.js`, `UBT_Email.referencesHealth.js` | 66 kB, 1 kB | UBT_Email record types (UserContactRequestRec: SenderPhone default ""), fetched 2026-10-27 for the Legacy_LDMEventsFlow report |
| `UBTConnectLibrary.model.js`, `OutSystemsUI_2_23.model.js` | 417 kB, 568 kB | Record types and defaults of the library and OSUI blocks (ButtonOptionsRec, SearchInputRec, Carousel records), fetched 2026-10-27 for the _libraries report |
| `OutSystemsUI_2_23.NoUISlider.js` (GET `/UBTConnect/scripts/OutSystemsUI_2_23.NoUISlider.js?6sSayZKS_znR1XPjt2IofQ`, in the moduleinfo manifest) | 28 kB | noUiSlider 15.8.1, the provider of the OSUI RangeSlider: target classes, base, connect, origin, handle, pips markup, tap, drag and keyboard handlers, aria values with one decimal. Fetched 2026-10-27 for the ContactUs_Rate port (App_Menu_ContactUs F2, build B1) |
| `Connect2_LegacyShared.AdaptiveCards.js` | 1.2 MB | 2026-10-27, build wave B9 (standing approval for TST static files): the Microsoft Adaptive Cards SDK bundle (webpack UMD, global `AdaptiveCards`) that `Connect2_LegacyShared.Widgets.AdaptiveCardViewer` uses; schema versions declared in the bundle (`Versions.v1_x`) give the SDK line; evidence for the library decision PD7 |
| `PlaceholderLib.controller.js` | 39 kB | 2026-10-27, build wave B9 (standing approval): the PlaceholderLib module (SetTextPlaceholdersValue, used by BuildAssembleNotificationContent of MessageDetail); evidence for PD8 |
| `PlaceholderLib.model.js` | 16 kB | 2026-10-28 (standing approval, decision PD8): the PlaceholderLib records (PlaceholderRec: PlaceholderFunctionId, Parameters; PlaceholderParametersRec: Parameter1, Parameter2) for the port of SetTextPlaceholdersValue |
| `Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc.js` | 125 kB | 2026-10-28 (standing approval): the live TST block, fetched after the parity sweep showed `orbit-landing-passport-cont` in the TST capture; it has `OnHandle_ViewPassportDetails` and the event NavigateTo_PassportScan, which the survey copy of 2026-10-13 lacks (TST deployed the control between the survey and the capture). `tst_source.py` prefers this file over the survey copy. Evidence for PD13 |
