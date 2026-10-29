# Recorded decisions and facts that name the elements of UI flow App_Notifications

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:17` (Notifications): | MessageList | `/UBTConnect/MessageList` | 3 | 93 | full | build | V3a · D11(c): build both, bell picks by flag C2NewNotifications (true → Notifications) (user, 2026-10-14) | built | route-messagelist |
- `migration/board.md:20` (Notifications): | Notifications | `/UBTConnect/Notifications` | 3 | 96 | full | build | V3a · D11(c): build both, bell picks by flag C2NewNotifications (true → Notifications) (user, 2026-10-14) | built | route-notifications |

## app-shell.spec

- `migration/app-shell.spec.md:98` (Notifications): | `Layout_MainPages_Upgrade` | Notifications | `.mainpage-upgrade-container`, `.upgrade-header-top`, `.upgrade-header-top-search` (Notifications dom:8-77) | back-left title, search, HeaderContent actions |
- `migration/app-shell.spec.md:120` (Notifications): - A click opens `/UBTConnect/Notifications` when the flag `C2NewNotifications` is on. Otherwise it opens `/UBTConnect/MessageList`.
- `migration/app-shell.spec.md:220` (Notifications): | App start | `UBTConnect.OnApplicationReady` (registered UC:18593) | resets `IsNavigateToHomeOnBack`, `Bookmarks/Notifications/Notes_IsSynched` = False (UC:15272-15282); registers FRD/online/offline/FCM callbacks (15284-15316); `AppManager_Mobile_OnAppReady` → `AppManager_SynchAppContext` → `Initia
- `migration/app-shell.spec.md:325` (Notifications): | bell target | Notifications and MessageList | `C2NewNotifications` both ways, default off = MessageList (flags.md:106) | – |

## change requests

- `migration/change-requests/CR-Notifications-1.md:1` (Notifications): # CR-Notifications-1: serve the UBT_CW app logos used as notification avatars
- `migration/change-requests/CR-Notifications-1.md:4` (Notifications): - Raised by: Notifications, 2026-10-15
- `migration/change-requests/CR-Notifications-1.md:7` (Notifications): - Related question: Notifications Q2
- `migration/change-requests/CR-Notifications-1.md:10` (Notifications): - `migration/screens/Notifications/analysis/dom/default.html`: 10 of 19 notification avatars are
- `migration/change-requests/CR-Notifications-1.md:24` (Notifications): Applied by the foundation (user, 2026-10-15, Notifications Q2): the two logos were fetched read-only from TST and are
- `migration/change-requests/CR-MessageList-1.md:6` (Notifications): - Other routes using it: every route that renders an OutSystems List (P-LIST); Notifications (SynchronizeNumberUnreadMessages)

## ADRs (stack.md)

- `app/docs/reference/stack.md:143` (Notifications): - Context: Build screens use Leaflet (BrowseDirectory, CountryDetails), SortableJS (Services), ReactiveHtmlSanitizer (MessageDetail, Notifications, Photobook) and OSUI patterns with provider libraries: Carousel (Splide), DropdownSearch (Virtual Select), RangeSlider (noUiSlider + wNumb). Versions rea
- `app/docs/reference/stack.md:237` (Notifications): - P4-5 differences from §3.1: `meta.flagRedirect` is on 6 routes (Notifications, Bookmarks, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel), and `useOsNavigate` applies it. A URL that is opened directly is not redirected, the same as before. `capture-plan.json` has no flag v

## knowledge

- `migration/knowledge/audit-a1-empty-handlers.md:36` (Notifications): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo
- `migration/knowledge/audit-a1-empty-handlers.md:70` (Notifications): | PullToRefresh users (layouts, Notifications) | OnContentPull | gesture script not ported (README); off on Notifications |
- `migration/knowledge/audit-a1-empty-handlers.md:89` (Notifications): - Comment only: LDM_MyEvents_V2, Notifications; shared comments in Card_MemberInformation (HelpersDetail,
- `migration/knowledge/audit-a1-empty-handlers.md:98` (Notifications): LDM_MyEvents_V2, Notifications (FeedItemDetail has no capture).
- `migration/knowledge/static-entities-tst.json:1786` (Notifications): "notifications": "Notifications",
- `migration/knowledge/auto-decisions-2026-10-16.md:15` (Notifications): | Meaningful mocks B Q1 (TST test labels "Test Noti 56", "Notification 1/3/4/6"… unmasked in the capture) | **A (recommended)**: keep them | Parity compares unmasked text; MessageList Q4 / Notifications Q3 (user 2026-10-15) said reuse. |
- `migration/knowledge/feature-flag-helpers.md:16` (Notifications): | GetHasNewNotifications | outSystems_FF.C2NewNotifications | false | App_NotificationIcon, MessageDetail | yes: bell → Notifications / MessageList (D11) |
- `migration/knowledge/runtime-sources.md:31` (Notifications): | `Connect2_LegacyShared.clientVariables.js` | 2 kB | Unread counters (Notifications, PublicMessages, WhatsNews) |
- `migration/knowledge/audit-a1-empty-handlers.md:36` (Notifications_MoreActionSheet): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo

## flags

- `migration/flags.md:11` (Notifications): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:28` (Notifications): | `action:handler_ToggleSearch` (gone) (candidate) | flag check action | Notifications, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:93` (Notifications): | `action:getFlagURLByCountryCode` (candidate) | flag check action | Bookmarks, BrowseCountries, CountryDetails, CountryList, Map, MyCalendar, Notes, Notifications … | - | unavailable: not a feature flag: country flag image URL | - | not a flag (false positive): country flag image URL; behaviour bui
- `migration/flags.md:105` (Notifications): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc
- `migration/flags.md:112` (Notifications): | `action:refreshUpdatesAndFlags` (candidate) | flag check action | Notifications, Updates_SingleList | - | unavailable: not a feature flag: list item refresh (takes CurrentPosition) | - | not a flag (false positive): list item refresh (takes CurrentPosition); behaviour built as in the original (use
- `migration/flags.md:160` (Notifications): - `action:handler_ToggleSearch`: `UBTConnect.App_Notifications.Notifications.mvc.js`, `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`
- `migration/flags.md:179` (Notifications): - `action:refreshUpdatesAndFlags`: `UBTConnect.App_Notifications.Notifications.mvc.js`, `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:1567` (Notifications): "reason": "These calls start while the app-start chain (AfterInitialize, Sync_Info_GetMain, GetUserInformation) is still running; their place in the order depends on network timing (MessageList Q5, Notifications Q4). Counts are still compared.",
- `migration/parity-exemptions.json:1568` (Notifications): "evidence": "migration/screens/MessageList/parity/default.json; migration/screens/Notifications/parity/default.json; accepted by the user 2026-10-15; migration/screens/MessageList/parity/filter.json, search.json; MessageList Q12"

## Decision ids on the board rows of the flow's screens

D11(c, V3a
