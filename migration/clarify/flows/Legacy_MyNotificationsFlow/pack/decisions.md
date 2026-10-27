# Recorded decisions and facts that name the elements of UI flow Legacy_MyNotificationsFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:15` (MessageDetail): | FeedItemDetail | `/UBTConnect/FeedItemDetail` | 3 | 80 | lite | build | V4b · from MessageDetail (and ConnectShare); Feed CMS = mock (D8 b) (user, 2026-10-14) | built | route-feeditemdetail |
- `migration/board.md:16` (MessageDetail): | MessageDetail | `/UBTConnect/MessageDetail` | 3 | 125 | full | build | V4b · target of MessageList, deep links, push; Feed CMS = mock (D8 b); Orbit/Assemble/LDM targets are in-app UBTConnect screens, now in scope (user, 2026-10-16) | built | route-messagedetail |
- `migration/board.md:16` (MessageList): | MessageDetail | `/UBTConnect/MessageDetail` | 3 | 125 | full | build | V4b · target of MessageList, deep links, push; Feed CMS = mock (D8 b); Orbit/Assemble/LDM targets are in-app UBTConnect screens, now in scope (user, 2026-10-16) | built | route-messagedetail |
- `migration/board.md:17` (MessageList): | MessageList | `/UBTConnect/MessageList` | 3 | 93 | full | build | V3a · D11(c): build both, bell picks by flag C2NewNotifications (true → Notifications) (user, 2026-10-14) | built | route-messagelist |

## app-shell.spec

- `migration/app-shell.spec.md:33` (MessageDetail): - Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare,
- `migration/app-shell.spec.md:101` (MessageDetail): | Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline
- `migration/app-shell.spec.md:33` (MessageList): - Connect2 module screens add `connect-theme` (MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare,
- `migration/app-shell.spec.md:101` (MessageList): | Connect2 `Layout.Layout` → `BaseLayout_UpdatedOSUI` | MyBookmarks, BookmarksByGroup, MessageList, MessageDetail, ConnectShare, LegacyShareObject | `.backwards-compatibility.connect-theme` > `.layout….aside-overlay.connect-theme` > `.main.screen` (MyBookmarks dom:10-20; BookmarksByGroup dom[offline
- `migration/app-shell.spec.md:120` (MessageList): - A click opens `/UBTConnect/Notifications` when the flag `C2NewNotifications` is on. Otherwise it opens `/UBTConnect/MessageList`.
- `migration/app-shell.spec.md:325` (MessageList): | bell target | Notifications and MessageList | `C2NewNotifications` both ways, default off = MessageList (flags.md:106) | – |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:6` (MessageDetail): - Other routes using it: OrbitLanding (CurrentMemberId = cached MemberId), MessageDetail, ContactByEmail*, LDM_Email_V2
- `migration/change-requests/CR-OrbitAdminLanding-1.md:46` (MessageDetail): of OrbitLanding Q3 (CurrentMemberId 0). MessageDetail reads GetUserInformation, not this action (unaffected).
- `migration/change-requests/CR-OrbitAdminLanding-1.md:51` (MessageDetail): scenario noadminevents), OrbitLanding (5 states), MessageDetail, ContactByEmailMember, ContactByEmailOneSchoolGlobal,
- `migration/change-requests/CR-W3Y-1.md:7` (MessageDetail): - Other routes using it (catalog/blocks.md): BookmarksByGroup, LegacyShareObject, MessageDetail
- `migration/change-requests/CR-W3Y-1.md:37` (MessageDetail): ActionGetSignedPhotosInBulk` (screens BookmarksByGroup, LegacyShareObject, MessageDetail), controller copied to
- `migration/change-requests/CR-W3A-1.md:6` (MessageDetail): - Other routes using it (catalog/blocks.md): BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- `migration/change-requests/CR-W2A-1.md:8` (MessageDetail): Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
- `migration/change-requests/CR-MessageDetail-1.md:1` (MessageDetail): # CR-MessageDetail-1: client variable Connect2_LegacyShared.UnreadWhatsNewsNumber
- `migration/change-requests/CR-W3A-1.md:6` (MessageList): - Other routes using it (catalog/blocks.md): BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- `migration/change-requests/CR-MessageList-2.md:1` (MessageList): # CR-MessageList-2: serve the UBT_CW module images at /UBT_CW/img/
- `migration/change-requests/CR-MessageList-2.md:3` (MessageList): - Status: applied (record updated 2026-10-21: both files are in `app/public/os-assets/UBT_CW/img/`; MessageList parity 0)
- `migration/change-requests/CR-MessageList-2.md:4` (MessageList): - Raised by: MessageList, 2026-10-15
- `migration/change-requests/CR-MessageList-2.md:6` (MessageList): - Other routes using it: any route whose data carries `/UBT_CW/img/…` URLs (MessageList ProfileIconURL)
- `migration/change-requests/CR-MessageList-2.md:7` (MessageList): - Related question: none (missing static files; MessageList parity default, pixel hotspots x 0-60, rows 0-4)
- `migration/change-requests/CR-MessageList-2.md:10` (MessageList): - `migration/screens/MessageList/analysis/dom/default.html`: message rows 0-4, 13-15, 17-18 render
- `migration/change-requests/CR-MessageList-3.md:1` (MessageList): # CR-MessageList-3: local message search history (Connect2_LegacyShared client entities)

## ADRs (stack.md)

- `app/docs/reference/stack.md:143` (MessageDetail): - Context: Build screens use Leaflet (BrowseDirectory, CountryDetails), SortableJS (Services), ReactiveHtmlSanitizer (MessageDetail, Notifications, Photobook) and OSUI patterns with provider libraries: Carousel (Splide), DropdownSearch (Virtual Select), RangeSlider (noUiSlider + wNumb). Versions rea

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:17` (MessageDetail): OrbitAdminLanding, LDM_MyEvents_V2, AssembleEvents; MessageDetail Orbit/Assemble handlers): they work once built.
- `migration/knowledge/shell-facts.md:14` (MessageDetail): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/navigation.md:37` (MessageDetail): - `DeeplinkHandlerCentralOnDeeplinkOpen` also opens AssembleDetail and MessageDetail. [MCP]
- `migration/knowledge/navigation.md:42` (MessageDetail): MessageDetail, MessageList, PINBiometricsMenu, Splash. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:71` (MessageDetail): | `screens/MessageDetail` | AdaptiveCardEventExecuted, ShareObjectDetail events | not captured (Q1, Q2) |
- `migration/knowledge/mock-fixtures.md:65` (MessageDetail): - The MessageList mock rows have MessageTemplateTypeId 1 (Private) and MessageInstance.UserId 0. The MessageDetail mock copies both values.
- `migration/knowledge/mock-fixtures.md:66` (MessageDetail): - When you open a row while signed in, MessageDetail shows "You don't have access to that message" and goes back to the list.
- `migration/knowledge/mock-fixtures.md:67` (MessageDetail): - The old port did the same. The refactor of P6-G3-B-MessageDetail did not change it (`src/pages/MessageDetail/hooks/useMessageDetail.ts`).
- `migration/knowledge/shell-facts.md:14` (MessageList): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/navigation.md:42` (MessageList): MessageDetail, MessageList, PINBiometricsMenu, Splash. [MCP]
- `migration/knowledge/audit-a1-empty-handlers.md:56` (MessageList): | `screens/MessageList/index.tsx` | NavigateTo_B2CCallback / NavigateTo_B2CLanding | raised only by B2C_SignInFlowController* handlers of ScreenBlock_MessageList (:1451-1480, :2349+), whose block is not in the view: dead |
- `migration/knowledge/mock-fixtures.md:64` (MessageList): ## MessageList rows are private (demo note, 2026-10-24)
- `migration/knowledge/mock-fixtures.md:65` (MessageList): - The MessageList mock rows have MessageTemplateTypeId 1 (Private) and MessageInstance.UserId 0. The MessageDetail mock copies both values.
- `migration/knowledge/auto-decisions-2026-10-16.md:15` (MessageList): | Meaningful mocks B Q1 (TST test labels "Test Noti 56", "Notification 1/3/4/6"… unmasked in the capture) | **A (recommended)**: keep them | Parity compares unmasked text; MessageList Q4 / Notifications Q3 (user 2026-10-15) said reuse. |
- `migration/knowledge/feature-flag-helpers.md:16` (MessageList): | GetHasNewNotifications | outSystems_FF.C2NewNotifications | false | App_NotificationIcon, MessageDetail | yes: bell → Notifications / MessageList (D11) |
- `migration/knowledge/runtime-sources.md:32` (MessageList): | `Connect2_LegacyShared.entities.js`, `Connect2_LegacyShared.aggregates.IDB.js` | — | Legacy shared client entities (message search history) and their IndexedDB aggregates (CR-MessageList-3) |

## flags

- `migration/flags.md:94` (MessageDetail): | `action:getHasAssemble` (candidate) | flag check action | MessageDetail | - | unavailable: mobileAssemble: Assemble entry (external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:99` (MessageDetail): | `action:getHasDeceasedProfileAccess` (candidate) | flag check action | MessageDetail | - | unavailable: mobileDirectoryUpdateFeedDeceasedProfile: deceased profile updates inside screens | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:101` (MessageDetail): | `action:getHasFeedEnabled` (candidate) | flag check action | FeedItemDetail, HomeFeed, MessageDetail | - | unavailable: C2EnableFeed: Feed CMS part of HomeFeed | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:104` (MessageDetail): | `action:getHasNewLDM` (candidate) | flag check action | HomeFeed, LDM_MyEvents, MessageDetail, MyCalendar | ldm_myevents | unavailable: C2NewLDM: LDM V2 / V1 entry (LDM external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:105` (MessageDetail): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc
- `migration/flags.md:106` (MessageDetail): | `action:getHasOrbitAccess` (candidate) | flag check action | EmailContact, EventDetail, GuestArrangements, HelpersDetail, MessageDetail, MilestoneDetail, OrbitLanding, TransportDetail … | - | unavailable: mobileOrbitAccess: Orbit entry (external) | tst=on, prod=? | default-only: TST value on (user
- `migration/flags.md:108` (MessageDetail): | `action:getHasOrbitHostSurvey` (candidate) | flag check action | EventDetail, MessageDetail | - | unavailable: mobileOrbitHostSurvey: Orbit HostSurvey entry (external) | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:145` (MessageDetail): - `action:getHasNewLDM`: `UBTConnect.Calendar.MyCalendar.mvc.js`, `UBTConnect.Home.FeedBlock_Services.mvc.js`, `UBTConnect.Legacy_LDMEventsFlow.LDM_MyEvents.mvc.js`, `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
- `migration/flags.md:63` (MessageList): | `action:toggleShowFilters` (gone) (candidate) | flag check action | MessageList | - | open | - | **open** |
- `migration/flags.md:64` (MessageList): | `action:toggleShowSearch` (gone) (candidate) | flag check action | BookmarksByGroup, MessageList, New_BookmarksByGroup | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:105` (MessageList): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc

## parity exemptions

- `migration/parity-exemptions.json:362` (MessageDetail): "evidence": "migration/screens/MessageDetail/analysis/dom/default.html:31 (data-original-href=\"#\"); migration/screens/MessageDetail/parity/default.json",
- `migration/parity-exemptions.json:374` (MessageDetail): "reason": "The Spinner's ::before rotates (CSS animation); the capture and the build are photographed at different rotation phases (transform matrix differs). Auto-accepted recommendation in the user's 3h window 2026-10-15 (MessageDetail Q3).",
- `migration/parity-exemptions.json:375` (MessageDetail): "evidence": "migration/screens/MessageDetail/parity/loading.json, offline.json; MessageDetail Q3"
- `migration/parity-exemptions.json:33` (MessageList): "evidence": "migration/screens/Search/parity/default.json; Search Q4; accepted by the user 2026-10-15; migration/screens/MessageList/parity/search.json; MessageList Q8"
- `migration/parity-exemptions.json:54` (MessageList): "evidence": "migration/screens/MessageList/parity/filter.json; MessageList Q11"
- `migration/parity-exemptions.json:352` (MessageList): "reason": "The pull-to-refresh element fades in with the 1 s @keyframes fadein-pull-to-refresh (opacity 0 until 66 %): the capture and the build are read at different phases (MessageList Q6).",
- `migration/parity-exemptions.json:353` (MessageList): "evidence": "migration/screens/MessageList/parity/default.json; original CSS @keyframes fadein-pull-to-refresh; accepted by the user 2026-10-15"
- `migration/parity-exemptions.json:385` (MessageList): "evidence": "migration/screens/MessageList/parity/search.json; analysis/dom/default.html vs dom/search.html; MessageList Q9"
- `migration/parity-exemptions.json:398` (MessageList): "evidence": "migration/screens/MessageList/parity/search.json; analysis/dom/default.html vs dom/search.html; MessageList Q9"
- `migration/parity-exemptions.json:412` (MessageList): "evidence": "migration/screens/MessageList/parity/filter.json; MessageList Q10"
- `migration/parity-exemptions.json:422` (MessageList): "evidence": "migration/screens/MessageList/parity/filter.json; MessageList Q10"

## Decision ids on the board rows of the flow's screens

D11(c, D8, V3a, V4b
