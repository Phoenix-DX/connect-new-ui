# Recorded decisions and facts that name the elements of UI flow Bookmarks

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:53` (Bookmarks): | Bookmarks | `/UBTConnect/Bookmarks` |  | 117 |  | skip | V3d · D2 · skip:variant · branch 1, revisit if C2NewBookmarks=true (needs bottom bar routing: foundation CR) (user, 2026-10-14) | - |  |

## app-shell.spec

- `migration/app-shell.spec.md:133` (Bookmarks): | bookmarks | `connect-icon-contacts` | Bookmarks | LD `mobileDirectoryBookmarkNote` (TST off) and `C2NewBookmarks` (TST off) → `/UBTConnect/MyBookmarks`; other branches Bookmarks / New_MyBookmarks are skipped (633-665; board D2) | – |
- `migration/app-shell.spec.md:142` (Bookmarks): is not Home, Directory, Updates, Bookmarks or Menu (BottomBarMenu:678-679).
- `migration/app-shell.spec.md:220` (Bookmarks): | App start | `UBTConnect.OnApplicationReady` (registered UC:18593) | resets `IsNavigateToHomeOnBack`, `Bookmarks/Notifications/Notes_IsSynched` = False (UC:15272-15282); registers FRD/online/offline/FCM callbacks (15284-15316); `AppManager_Mobile_OnAppReady` → `AppManager_SynchAppContext` → `Initia
- `migration/app-shell.spec.md:323` (Bookmarks): | mybookmarks, bookmarksbygroup | MyBookmarks, BookmarksByGroup | bottom bar D2(a): `C2NewBookmarks`=false, `mobileDirectoryBookmarkNote`=false (board.md) | Bookmarks, New_MyBookmarks, New_BookmarksByGroup skip:variant |

## change requests

- `migration/change-requests/CR-AssembleDetail-2.md:43` (Bookmarks): "Added to your Bookmarks", Unmark on the Vitale household → ActionDeleteBookmarkByBookmarkId + "Removed from your
- `migration/change-requests/CR-AssembleDetail-2.md:44` (Bookmarks): Bookmarks".

## ADRs (stack.md)

- `app/docs/reference/stack.md:237` (Bookmarks): - P4-5 differences from §3.1: `meta.flagRedirect` is on 6 routes (Notifications, Bookmarks, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel), and `useOsNavigate` applies it. A URL that is opened directly is not redirected, the same as before. `capture-plan.json` has no flag v

## knowledge

- `migration/knowledge/navigation.md:26` (Bookmarks): - Bookmarks: see scope-review D2.
- `migration/knowledge/static-entities-tst.json:2816` (Bookmarks): "bookmarks": "Bookmarks",
- `migration/knowledge/static-entities-tst.json:5232` (Bookmarks): "bookmarks": "Bookmarks",
- `migration/knowledge/flag-values-tst.json:36` (Bookmarks): "evidence": "flag_probe.cjs on 2026-10-21 (global test account) and journey J33: Bookmarks in the bottom bar opens Bookmarks. The other values are from probedAt.",
- `migration/knowledge/flag-values-tst.json:37` (Bookmarks): "decision": "Bookmarks Q1 a (user, 2026-10-22): keep MyBookmarks (D2) until the PROD value is known."
- `migration/knowledge/feature-flag-helpers.md:14` (Bookmarks): | GetHasNewBookmarks | outSystems_FF.C2NewBookmarks | true since 2026-10-21 (false on 2026-10-14; Bookmarks Q1) | App_Common, Directory_CommonBlocks, Directory_Locality | yes: Bookmarks / New_MyBookmarks / MyBookmarks (D2) |
- `migration/knowledge/runtime-sources.md:84` (Bookmarks): | 33 flow controllers `UBTConnect.<Flow>.controller.js` (App_Common_Blocks, App_Common_Blocks_PopupDialogs, App_CommonBlocks_Filter, App_Menu_ContactUs, App_Notifications, App_Profile, Bookmarks, Calendar, Calendar_Events, Deprecated_Calendar_PersonalEvent, Directory_Caroussel, Directory_CommonBlock
- `migration/knowledge/runtime-sources.md:86` (Bookmarks): | `Connect2_MyBookmarks_MUI.controller.js` | 19 kB | MyBookmarks MUI actions (G3 Bookmarks, TST-only screens) |

## flags

- `migration/flags.md:11` (Bookmarks): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:12` (Bookmarks): | `action:bottomSheet_InternalOnToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:32` (Bookmarks): | `action:jSUtils_Element_Operations_ToggleAttribute` (gone) (candidate) | flag check action | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents
- `migration/flags.md:38` (Bookmarks): | `action:onToggle` (gone) (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, CountryDetails, CountryList, EventDetail, FeedItemDetail … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:46` (Bookmarks): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:50` (Bookmarks): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:53` (Bookmarks): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:92` (Bookmarks): | `action:connect_LaunchDarkly_PermissionCheck` (candidate) | flag check action | AssembleDetail, AssembleEvents, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails, CountryDetails … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unav

## Decision ids on the board rows of the flow's screens

D2, V3d
