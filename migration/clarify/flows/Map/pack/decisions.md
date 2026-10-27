# Recorded decisions and facts that name the elements of UI flow Map

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:73` (Map): | Map | `/UBTConnect/Map` |  | 185 |  | skip | V4a · skip:variant · entry icon in Locality_Details shown only if C2EnableMaps (TST=false); revisit when enabled (user, 2026-10-14) | - |  |

## app-shell.spec

- `migration/app-shell.spec.md:152` (Map): None. The app has no side menu. "Menu" is a screen. The user reaches it from the bottom bar. Only Map uses OSUI `Sidebar`, and the
- `migration/app-shell.spec.md:153` (Map): project skips Map (survey/osui.md:57; board.md).

## knowledge

- `migration/knowledge/static-entities-tst.json:3293` (Map): "map": "Map"
- `migration/knowledge/feature-flag-helpers.md:19` (Map): | GetHasMapsEnabled | outSystems_FF.C2EnableMaps | false | Directory_Locality | probably: access to Map |
- `migration/knowledge/runtime-sources.md:84` (Map): | 33 flow controllers `UBTConnect.<Flow>.controller.js` (App_Common_Blocks, App_Common_Blocks_PopupDialogs, App_CommonBlocks_Filter, App_Menu_ContactUs, App_Notifications, App_Profile, Bookmarks, Calendar, Calendar_Events, Deprecated_Calendar_PersonalEvent, Directory_Caroussel, Directory_CommonBlock

## flags

- `migration/flags.md:11` (Map): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:15` (Map): | `action:event_BottomSheetDetails_OnToggle` (gone) (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:16` (Map): | `action:event_BottomSheetExplore_OnToggle` (gone) (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:21` (Map): | `action:get_ActiveGeoJsonFeatureId` (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:22` (Map): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:33` (Map): | `action:map_GeoJSON_Feature_Remove` (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:43` (Map): | `action:onToggle_SidebarSearch` (gone) (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:44` (Map): | `action:onToggle_SidebarSettings` (gone) (candidate) | flag check action | Map | - | open | - | **open** |
- `migration/flags.md:134` (Map_PoIPreview): - `action:getFlagURLByCountryCode`: `UBTConnect.Directory_Locality.BrowseCountries.mvc.js`, `UBTConnect.Directory_Locality.CountryList.mvc.js`, `UBTConnect.Map.Map_PoIPreview.mvc.js`, `UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc.js`

## Decision ids on the board rows of the flow's screens

V4a
