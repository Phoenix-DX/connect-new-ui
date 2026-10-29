# Recorded decisions and facts that name the elements of UI flow zDEV_Directory_CommunityBusinessBlocks

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:54` (CommunityBusinessDetails): | CommunityBusinessDetails | `/UBTConnect/CommunityBusinessDetails` |  | 64 |  | skip | V7 · skip:dead · zDEV flow; live links open CoomingSoon; revisit if TST links the real screen (user, 2026-10-14) | - |  |
- `migration/board.md:26` (CommunityBusinessDetails_CoomingSoon): | CommunityBusinessDetails_CoomingSoon | `/UBTConnect/CommunityBusinessDetails_CoomingSoon` | 4 | 10 | lite | build | V3d · D2(a): opened from MyBookmarks / BookmarksByGroup (user, 2026-10-14) | built | route-communitybusinessdetails-coomingsoon |

## app-shell.spec

- `migration/app-shell.spec.md:96` (CommunityBusinessDetails_CoomingSoon): | `Layout_MainPages` | CountryList, Locality_Details, CommunityBusinessDetails_CoomingSoon | `.ubt-layout-main.hide-header-on-scroll.layout-gray-background` + `.sticky-observer` (CountryList dom:8-13) | `.ubt-layout-main__title`, `.ubt-layout-main__search`, Content, Bottom (CountryList dom:18-110, 4

## change requests

- `migration/change-requests/CR-MyBookmarks-1.md:42` (CommunityBusinessDetails_CoomingSoon): CommunityBusinessDetails_CoomingSoon In_CommunityBusinessId; all built). Parity: see the batch report.
- `migration/change-requests/CR-BookmarksByGroup-1.md:42` (CommunityBusinessDetails_CoomingSoon): CommunityBusinessDetails_CoomingSoon In_CommunityBusinessId; all built). Parity: see the batch report.

## flags

- `migration/flags.md:92` (CommunityBusinessDetails): | `action:connect_LaunchDarkly_PermissionCheck` (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unav
- `migration/flags.md:96` (CommunityBusinessDetails): | `action:getHasC1DirectoryView` (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2Enab
- `migration/flags.md:103` (CommunityBusinessDetails): | `action:getHasNewBookmarks` (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2NewBook
- `migration/flags.md:115` (CommunityBusinessDetails): | `launchDarkly_FF.mobileDirectoryBookmarkNote` | static entity record | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: 

## Decision ids on the board rows of the flow's screens

D2(a, V3d, V7
