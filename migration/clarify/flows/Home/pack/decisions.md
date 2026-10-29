# Recorded decisions and facts that name the elements of UI flow Home

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:15` (FeedItemDetail): | FeedItemDetail | `/UBTConnect/FeedItemDetail` | 3 | 80 | lite | build | V4b · from MessageDetail (and ConnectShare); Feed CMS = mock (D8 b) (user, 2026-10-14) | built | route-feeditemdetail |
- `migration/board.md:14` (HomeFeed): | HomeFeed | `/UBTConnect/HomeFeed` | 2 | 139 | full | build | V2 · default screen · D8(b): Feed CMS iframe = same-size mock page, real URL pluggable later (Phase 4) (user, 2026-10-14) | built | route-homefeed |
- `migration/board.md:19` (HomeFeed): | Notes | `/UBTConnect/Notes` | 3 | 119 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-notes |
- `migration/board.md:21` (HomeFeed): | Search | `/UBTConnect/Search` | 3 | 95 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-search |
- `migration/board.md:22` (HomeFeed): | Services | `/UBTConnect/Services` | 3 | 24 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-services |
- `migration/board.md:23` (HomeFeed): | Updates_SingleList | `/UBTConnect/Updates_SingleList` | 3 | 123 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-updates-singlelist |

## app-shell.spec

- `migration/app-shell.spec.md:10` (HomeFeed): | `HF` | `migration/screens/HomeFeed/analysis/` (`<S>` = same folder of screen `<S>`) |
- `migration/app-shell.spec.md:11` (HomeFeed): | `p:<file>:N` / `r:<file>:N` | `<screen>/analysis/sources/pretty/<file>` / `sources/raw/<file>` (HomeFeed unless a screen is named) |
- `migration/app-shell.spec.md:23` (HomeFeed): | Home route | `/UBTConnect/HomeFeed` = DefaultScreen; SplashScreen = Splash (knowledge/navigation.md:7). What `/UBTConnect/` shows before sign-in: **unknown, U1** |
- `migration/app-shell.spec.md:24` (HomeFeed): | Captured | 2026-10-14, TST, phone 390×844 dpr 1, signed-in test account with a registered PIN (HF capture/capture-HomeFeed-default.json `env`; capture-notes.md:13) |
- `migration/app-shell.spec.md:94` (HomeFeed): | `UBTConnectLibrary.Layouts.Layout_HomePage` | HomeFeed, Profile | `.layout.layout-side.layout-native.ios-bounce.ubt-layout-home` style `--current-svg-height:260px` (HF dom:8) | Header_Title (logo), Header_Right (bell), HeaderContent, content (SVG + `SubLayout_HomePageSearch`), Bottom (bottom bar),
- `migration/app-shell.spec.md:130` (HomeFeed): | home | `connect-icon-home_fill` | Home | `/UBTConnect/HomeFeed` (BottomBarMenu:606-609) | – |
- `migration/app-shell.spec.md:184` (HomeFeed): | `Dialog_ExitConfirmation` (HomeFeed, Login) | back navigation with `Force=true` at queue priority −1 (p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:140; p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:322, 669-672) | `.connect-dialog-popup > .dx-c
- `migration/app-shell.spec.md:190` (HomeFeed): - `Dialog_GoExternalApp` (HomeFeed services).

## change requests

- `migration/change-requests/CR-Photobook-1.md:43` (FeedItemDetail): l1-1371, no carousel path), loading/offline as baseline except fewer class diffs. FeedItemDetail: no captured
- `migration/change-requests/CR-W2A-1.md:7` (FeedItemDetail): CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject,
- `migration/change-requests/CR-Search-1.md:45` (HomeFeed): - Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining (see the foundation report).
- `migration/change-requests/CR-BrowseDirectory-2.md:31` (HomeFeed): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-PINUnlock-1.md:25` (HomeFeed): HomeFeed (Q1 option A, pending the user's decision).
- `migration/change-requests/CR-F18-1.md:12` (HomeFeed): (`migration/screens/HomeFeed/capture/capture-HomeFeed-default.json`), a screen reached by a navigation has
- `migration/change-requests/CR-F18-1.md:22` (HomeFeed): - Handler: `migration/screens/HomeFeed/analysis/sources/raw/NavigationHandler.controller.js:1288-1490` (safeSetState patch:
- `migration/change-requests/CR-CountryDetails-2.md:41` (HomeFeed): - Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's
- `migration/change-requests/CR-Photobook-1.md:6` (HomeFeed): - Other routes using it (catalog/blocks.md): HomeFeed, HouseholdCarousel, SupperMeeting_Carousel, Photobook
- `migration/change-requests/CR-Photobook-1.md:41` (HomeFeed): HomeFeed clean; SupperMeeting_Carousel default style 52 / pseudo 6, loading class 4, offline 0 (fewer than the
- `migration/change-requests/CR-HomeFeed-1.md:8` (FeedBlock_Services): Calendar.MyEntertaining_Embedded, Home.FeedBlock_Services; OpenApp in Dialog_GoExternalApp (HomeFeed own block)
- `migration/change-requests/CR-HomeFeed-1.md:12` (FeedBlock_Services): - Expression / handler: `sources/pretty/UBTConnect.Home.FeedBlock_Services.mvc.js:1043-1047`
- `migration/change-requests/CR-HomeFeed-1.md:26` (FeedBlock_Services): FeedBlock_Services: the El Gusto branch and Dialog_GoExternalApp's GoToExternalApp call nothing for these two steps
- `migration/change-requests/CR-HomeFeed-1.md:36` (FeedBlock_Services): now calls the helper; FeedBlock_Services' El Gusto branch calls it (mvc :1042-1046). Tests: `UBTConnect_Utils/lib/actions.test.ts`.
- `migration/change-requests/CR-HomeFeed-1.md:44` (FeedBlock_Services): GoToExternalApp (raw mvc :620-629), reached from FeedBlock_Services Trove/HR100/CommunityTradelink (ConfirmAction, raw
- `migration/change-requests/CR-HomeFeed-2.md:8` (FeedBlock_Updates): - Other routes using it (survey sources): Home.FeedBlock_Updates (HomeFeed), Directory_Updates.Updates_SingleList
- `migration/change-requests/CR-HomeFeed-2.md:12` (FeedBlock_Updates): - Expression / handler: `sources/pretty/UBTConnect.Home.FeedBlock_Updates.mvc.js:640-668` (Event_ListItemOnClick,
- `migration/change-requests/CR-HomeFeed-2.md:33` (FeedBlock_Updates): (:1858-1866), ListAppend {Household, SwipeAction} (:1869-1875). FeedBlock_Updates' click now runs ListFilter(HasAccess) →
- `migration/change-requests/CR-Updates_SingleList-1.md:8` (FeedBlock_Updates): - Other routes using it: HomeFeed (FeedBlock_Updates), Updates_SingleList; later HouseholdCarousel swipe (IsRead)
- `migration/change-requests/CR-HouseholdCarousel-1.md:7` (FeedBlock_Updates): - Other routes using it: none directly; the preload items with a swipe action come from HomeFeed (FeedBlock_Updates)
- `migration/change-requests/CR-W4B-1.md:11` (Feed_Embeded): - **Impact to check:** callers that compare or send these constants (GetImageType_FromEntity, Feed_Embeded SharePopup

## ADRs (stack.md)

- `app/docs/reference/stack.md:204` (HomeFeed): - Decision: Replace @lhci/cli by lighthouse 13.4.1 (dev), driven by a small Node script (npm run lighthouse) with the ADR-12 scope: demo build served statically, HomeFeed / Search / OrbitLanding at mobile emulation, performance, accessibility, best practices, warning budgets, local filesystem output

## knowledge

- `migration/knowledge/navigation.md:35` (FeedItemDetail): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
- `migration/knowledge/audit-a1-empty-handlers.md:87` (FeedItemDetail): - Behaviour: HomeFeed, FeedItemDetail (Feed_Embeded); PINUnlock and the shell lock dialog, PINChange
- `migration/knowledge/audit-a1-empty-handlers.md:98` (FeedItemDetail): LDM_MyEvents_V2, Notifications (FeedItemDetail has no capture).
- `migration/knowledge/orbit-assemble-ldm.md:16` (HomeFeed): - Entry points in built screens already navigate to the original paths (HomeFeed FeedBlock_Services → OrbitLanding,
- `migration/knowledge/orbit-assemble-ldm.md:25` (HomeFeed): `GetServices.ExterrnalPackages_Trove`). Connect opens it through the external-app dialog (Services / HomeFeed
- `migration/knowledge/shell-facts.md:10` (HomeFeed): Keys: `AM`/`UC` = `migration/screens/HomeFeed/analysis/sources/raw/UBT_AppManager.controller.js` / `UBTConnect.controller.js`; `SPL` = `migration/screens/Splash/analysis/sources/pretty/UBTConnect.App_Common.Splash.mvc.js`, `ALE` = same folder `OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js`;
- `migration/knowledge/shell-facts.md:13` (HomeFeed): - Route table and default screen are not in local code. `UBTConnect.index.js`, `UBTConnect.appDefinition.js` and the runtime `OutSystems.js` appear in the survey `manifest`, but no source exists in the survey or in any screen capture. DefaultScreen = HomeFeed comes only from MCP/DEV (knowledge/navig
- `migration/knowledge/shell-facts.md:14` (HomeFeed): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/shell-facts.md:51` (HomeFeed): - Auto-close is CSS only: `.phone .feedback-message.feedback-message-autoclose`, animation `feedbackMessageSlideDownThenUpPhone`, `--message-autoclose-duration: 5000ms` (`migration/screens/HomeFeed/analysis/styles/bundle.css:4460-4462, 20374, 23078-23079`). No JS timer removes the node.
- `migration/knowledge/shell-facts.md:160` (HomeFeed): - `runtime-HomeFeed.json` lists the IndexedDB database `<envKey>-Users`. Only the IndexedDB branch builds this name
- `migration/knowledge/navigation.md:7` (HomeFeed): - `DefaultScreen = HomeFeed`, `SplashScreen = Splash`. [MCP; manifest]
- `migration/knowledge/orbit-assemble-ldm.md:16` (FeedBlock_Services): - Entry points in built screens already navigate to the original paths (HomeFeed FeedBlock_Services → OrbitLanding,
- `migration/knowledge/orbit-assemble-ldm.md:26` (FeedBlock_Services): FeedBlock_Services → `Dialog_GoExternalApp`, icon `UBT_Icons2.Trove`), already built as compiled. Nothing to add.
- `migration/knowledge/audit-a1-empty-handlers.md:28` (Feed_Embeded): | `app/src/shared/UBTConnect/Feed_Embeded/Feed_Embeded.tsx:62-66, :89` | Embedded_FeedCMS `OnDownloaded` (not passed) | `UBTConnect.Home.Feed_Embeded.mvc.js:169-182` → `Handle_Download` (:685-722): `OpenInApp_TryOpenFileInApp(Filename, URL, "connect-feed-documents", "pdf")` | wired to the shared `op
- `migration/knowledge/audit-a1-empty-handlers.md:64` (Feed_Embeded): | `shared/UBTConnect/Feed_Embeded/README.md` | SharePopup Event_ShareToOthers | native-only option; ShareEntity_ByURL not ported |
- `migration/knowledge/audit-a1-empty-handlers.md:65` (Feed_Embeded): | HandleDownload events (Feed_Embeded, ViewDocuments, MilestoneDetail AccommodationHost) | OnDownloadComplete / Error / Progress | raised only by the Cordova FileTransfer plugin |
- `migration/knowledge/audit-a1-empty-handlers.md:87` (Feed_Embeded): - Behaviour: HomeFeed, FeedItemDetail (Feed_Embeded); PINUnlock and the shell lock dialog, PINChange
- `migration/knowledge/pwa-file-plugins.md:47` (Feed_Embeded): - Callers: Feed_Embeded.tsx:65 (pdf, folder connect-feed-documents); ViewDocuments/ScreenBlock_ViewDocuments.tsx:153 + useHandleDownload :171;
- `migration/knowledge/pwa-file-plugins.md:49` (Feed_Embeded): (only mentions in the two blocks' comments and Feed_Embeded README).
- `migration/knowledge/auto-decisions-2026-10-16.md:90` (Feed_Embeded): | Audit A1 (empty handlers vs compiled; `migration/knowledge/audit-a1-empty-handlers.md`) | 2 real gaps fixed 1:1: Feed_Embeded OnDownloaded → OpenInApp_TryOpenFileInApp; Block_PINUnlock_ContentWrapper policy links → OpenPolicy (moved to UBTConnect_Utils lib); EventCard_Box / MarkAllAsRead / DeleteA

## flags

- `migration/flags.md:12` (FeedItemDetail): | `action:bottomSheet_InternalOnToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:22` (FeedItemDetail): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:38` (FeedItemDetail): | `action:onToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, EventDetail, FeedItemDetail … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:100` (FeedItemDetail): | `action:getHasExtendedShare` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | unavailable: C2ExtendedShare: extended share UI inside screens | tst=on, prod=? | default-onl
- `migration/flags.md:101` (FeedItemDetail): | `action:getHasFeedEnabled` (candidate) | flag check action | FeedItemDetail, HomeFeed, MessageDetail | - | unavailable: C2EnableFeed: Feed CMS part of HomeFeed | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:118` (FeedItemDetail): | `registeredCallbackEvents.onToggle` (candidate) | static entity record | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | unavailable: not a feature flag: bottom sheet toggle event | - | not a flag (false posi
- `migration/flags.md:12` (HomeFeed): | `action:bottomSheet_InternalOnToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:22` (HomeFeed): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:97` (HomeFeed): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:98` (HomeFeed): | `action:getHasCustomEvents` (candidate) | flag check action | HomeFeed | - | unavailable: C2EnableCustomServices: services part of HomeFeed | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:100` (HomeFeed): | `action:getHasExtendedShare` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | unavailable: C2ExtendedShare: extended share UI inside screens | tst=on, prod=? | default-onl
- `migration/flags.md:101` (HomeFeed): | `action:getHasFeedEnabled` (candidate) | flag check action | FeedItemDetail, HomeFeed, MessageDetail | - | unavailable: C2EnableFeed: Feed CMS part of HomeFeed | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:104` (HomeFeed): | `action:getHasNewLDM` (candidate) | flag check action | HomeFeed, LDM_MyEvents, MessageDetail, MyCalendar | ldm_myevents | unavailable: C2NewLDM: LDM V2 / V1 entry (LDM external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:105` (HomeFeed): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc
- `migration/flags.md:139` (FeedBlock_Services): - `action:getHasCustomEvents`: `UBTConnect.Home.FeedBlock_Services.mvc.js`
- `migration/flags.md:145` (FeedBlock_Services): - `action:getHasNewLDM`: `UBTConnect.Calendar.MyCalendar.mvc.js`, `UBTConnect.Home.FeedBlock_Services.mvc.js`, `UBTConnect.Legacy_LDMEventsFlow.LDM_MyEvents.mvc.js`, `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
- `migration/flags.md:138` (FeedBlock_Updates): - `action:getHasCarouselEnabled`: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`, `UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js`, `UBTConnect.Directory_Photobook.Photobook.mvc.js`, `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`, `UBTConnect.Directory_
- `migration/flags.md:141` (FeedBlock_Updates): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:141` (Feed_Embeded): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:142` (Feed_Embeded): - `action:getHasFeedEnabled`: `UBTConnect.Home.Feed_Embeded.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:2` (HomeFeed): "_comment": "Accepted parity differences, decided by the user. Every entry has an id, a reason and evidence; the parity report counts how often each fires. Login entries: Q6 answered by the user (2026-10-14), migration/screens/Login/questions.json. PINUnlock entries (*-PINCODE): Q3 answered by the u
- `migration/parity-exemptions.json:19` (HomeFeed): "reason": "The HomeFeed header logo is a broken image in the replayed reference (live capture 155x25); masked in DOM and pixel comparison, as CAPTURE-LOGO-REPLAY for Login.",
- `migration/parity-exemptions.json:20` (HomeFeed): "evidence": "migration/screens/HomeFeed/analysis/dom/default.html:24; parity/default.diff.png (1660 px on the logo); accepted by the user 2026-10-15 (HomeFeed finishing round)"
- `migration/parity-exemptions.json:27` (HomeFeed): "evidence": "migration/screens/HomeFeed/analysis/dom/loading.html:418, :509-510; parity/loading.diff.png (~4100 px in the Updates list); accepted by the user 2026-10-15 (HomeFeed finishing round)"
- `migration/parity-exemptions.json:47` (HomeFeed): "evidence": "migration/screens/Updates_SingleList/parity/loading.json; HomeFeed Q3; Updates_SingleList Q2"
- `migration/parity-exemptions.json:249` (HomeFeed): "reason": "The HomeFeed header logo is a broken 16x16 image in the replayed reference; the live capture rendered it 155x25 (data-rendered-size). Same artifact as CAPTURE-LOGO-REPLAY (Login Q6).",
- `migration/parity-exemptions.json:250` (HomeFeed): "evidence": "migration/screens/HomeFeed/analysis/dom/default.html:24; HomeFeed route agent proposal, 2026-10-15; accepted by the user 2026-10-15 (all 5)"
- `migration/parity-exemptions.json:259` (HomeFeed): "evidence": "migration/screens/HomeFeed/parity/default.json; HomeFeed route agent proposal, 2026-10-15; accepted by the user 2026-10-15 (all 5)",

## Decision ids on the board rows of the flow's screens

D8, D8(b, V2, V4b
