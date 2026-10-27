# Recorded decisions and facts that name the elements of UI flow Directory_Updates

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:23` (Updates_SingleList): | Updates_SingleList | `/UBTConnect/Updates_SingleList` | 3 | 123 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-updates-singlelist |

## app-shell.spec

- `migration/app-shell.spec.md:97` (Updates_SingleList): | `Layout_MainPages_FixedTitle` | Updates_SingleList, Notes | adds `.layout-sticky-title`; header split `#HeaderTitle` / `#HeaderSearch` (Updates_SingleList dom:8-133) | as MainPages + HeaderContent list header |
- `migration/app-shell.spec.md:132` (Updates_SingleList): | updates | `connect-icon-list_alt` (inside `App_IconBadge`, `.ubt-badge.background-red`) | Updates | `/UBTConnect/Updates_SingleList` (627-630) | client var `Directory_Updates_UnreadCount`; refreshed on bottom-bar OnReady when older than `…CheckFrequency_Minut` → `ServiceAPIGet_UI_UpdateItems_Unrea
- `migration/app-shell.spec.md:312` (Updates_SingleList): | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | bottom bar OnReady when the count is stale | HF call-sites.md:68-69; Updates_SingleList calls:11 | recorded |

## change requests

- `migration/change-requests/CR-Photobook-1.md:40` (Updates_SingleList): gallery-scroll capture artifacts, see proposed-exemptions.json), loading 0, offline 0; Updates_SingleList clean;
- `migration/change-requests/CR-HomeFeed-2.md:8` (Updates_SingleList): - Other routes using it (survey sources): Home.FeedBlock_Updates (HomeFeed), Directory_Updates.Updates_SingleList
- `migration/change-requests/CR-Updates_SingleList-1.md:1` (Updates_SingleList): # CR-Updates_SingleList-1: mocks — one shared UI_UpdateItem collection with the Mark* write handlers
- `migration/change-requests/CR-Updates_SingleList-1.md:4` (Updates_SingleList): - Raised by: Updates_SingleList, 2026-10-15
- `migration/change-requests/CR-Updates_SingleList-1.md:8` (Updates_SingleList): - Other routes using it: HomeFeed (FeedBlock_Updates), Updates_SingleList; later HouseholdCarousel swipe (IsRead)
- `migration/change-requests/CR-Updates_SingleList-1.md:13` (Updates_SingleList): screens (`x-os-screens: ['HomeFeed', 'Updates_SingleList']`, openapi.yaml :2186-2251); MSW answers with the first
- `migration/change-requests/CR-Updates_SingleList-1.md:14` (Updates_SingleList): handler (glob order: HomeFeed before Updates_SingleList), so the Updates screen cannot answer them itself.
- `migration/change-requests/CR-Updates_SingleList-1.md:16` (Updates_SingleList): `HomeFeed.updateItems` (every Updates_SingleList item) `Collection.upsert` unshifts a partial row

## knowledge

- `migration/knowledge/navigation.md:25` (Updates_SingleList): - Updates goes to Updates_SingleList.
- `migration/knowledge/audit-a1-empty-handlers.md:55` (Updates_SingleList): | `screens/Updates_SingleList/components/SectionHeader.tsx:122` | UpdateItem_Header Click_MarkAll | SectionHeader.mvc.js:236 passes ShowMarkAll False: the link is never shown |
- `migration/knowledge/audit-a1-empty-handlers.md:55` (SectionHeader): | `screens/Updates_SingleList/components/SectionHeader.tsx:122` | UpdateItem_Header Click_MarkAll | SectionHeader.mvc.js:236 passes ShowMarkAll False: the link is never shown |
- `migration/knowledge/audit-a1-empty-handlers.md:55` (UpdateItem_Header): | `screens/Updates_SingleList/components/SectionHeader.tsx:122` | UpdateItem_Header Click_MarkAll | SectionHeader.mvc.js:236 passes ShowMarkAll False: the link is never shown |

## flags

- `migration/flags.md:11` (Updates_SingleList): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:28` (Updates_SingleList): | `action:handler_ToggleSearch` (gone) (candidate) | flag check action | Notifications, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:105` (Updates_SingleList): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc
- `migration/flags.md:112` (Updates_SingleList): | `action:refreshUpdatesAndFlags` (candidate) | flag check action | Notifications, Updates_SingleList | - | unavailable: not a feature flag: list item refresh (takes CurrentPosition) | - | not a flag (false positive): list item refresh (takes CurrentPosition); behaviour built as in the original (use
- `migration/flags.md:138` (Updates_SingleList): - `action:getHasCarouselEnabled`: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js`, `UBTConnect.Directory_Locality.Locality_Subdivisions.mvc.js`, `UBTConnect.Directory_Photobook.Photobook.mvc.js`, `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js`, `UBTConnect.Directory_
- `migration/flags.md:141` (Updates_SingleList): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:160` (Updates_SingleList): - `action:handler_ToggleSearch`: `UBTConnect.App_Notifications.Notifications.mvc.js`, `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`
- `migration/flags.md:179` (Updates_SingleList): - `action:refreshUpdatesAndFlags`: `UBTConnect.App_Notifications.Notifications.mvc.js`, `UBTConnect.Directory_Updates.Updates_SingleList.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:46` (Updates_SingleList): "reason": "Pixel side of SLIDER-LOADING-TIMEOUT: in the loading capture the slider appears after the 10 s SynchAppContext timeout, which the clone has no equivalent of yet (backlog: request timeouts). Auto-accepted recommendation in the user's 3h window 2026-10-15 (Updates_SingleList Q2).",
- `migration/parity-exemptions.json:47` (Updates_SingleList): "evidence": "migration/screens/Updates_SingleList/parity/loading.json; HomeFeed Q3; Updates_SingleList Q2"
- `migration/parity-exemptions.json:318` (Updates_SingleList): "reason": "On TST the slider is added by the app-start ForceRefresh about 2 s after the screen with an undefined duration ('undefinedms' animation never ends), so -appear stays; with 0 ms mock latency the clone's app start ends before the screen and the 0 ms first transition removes -appear. With th

## Decision ids on the board rows of the flow's screens

V3a
