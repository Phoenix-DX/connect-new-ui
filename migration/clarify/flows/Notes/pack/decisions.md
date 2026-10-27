# Recorded decisions and facts that name the elements of UI flow Notes

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:19` (Notes): | Notes | `/UBTConnect/Notes` | 3 | 119 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-notes |

## app-shell.spec

- `migration/app-shell.spec.md:97` (Notes): | `Layout_MainPages_FixedTitle` | Updates_SingleList, Notes | adds `.layout-sticky-title`; header split `#HeaderTitle` / `#HeaderSearch` (Updates_SingleList dom:8-133) | as MainPages + HeaderContent list header |

## change requests

- `migration/change-requests/CR-PINUnlock-4.md:30` (Notes): Not a shell change: the two calls start in the same millisecond on TST and their recorded order differs between captures (HomeFeed: MapEntities first; PINUnlock, Notes, Menu: Households first). parity_check.cjs now compares server calls that start within 2 ms of each other as an unordered set.
- `migration/change-requests/CR-W4A-1.md:11` (Notes): - Proposal: a `localBookmarks` local entity in the shell (same pattern as `localNotes`), synched like Notes at app start
- `migration/change-requests/CR-HouseholdCarousel-2.md:17` (Notes): Notes, Gift (no Call/Email: `connect-icon-gifting`, `-share`, `-tooltip`), the build shows Call/Email/Notes/Share;
- `migration/change-requests/CR-HouseholdDetails-2.md:15` (Notes): 1. **Household contact details**: TST shows 4 actions, Unmark | Notes | Gift | Share (dom/default.html, actions
- `migration/change-requests/CR-SupperMeeting_Details-1.md:33` (Notes): 1. **Supper meeting contact details**: TST shows 3 actions, Bookmark | Notes | Share (`parity/default.expected.png`;
- `migration/change-requests/CR-SupperMeeting_Details-1.md:36` (Notes): (`parity/default.json`: 2 × `CircleButton_IconPrimary` extra in build, "Notes" → "Call", "Share" → "Email").
- `migration/change-requests/CR-Notes-1.md:1` (Notes): # CR-Notes-1: shell local entities (mock) — a mock scenario starts with the local notes copy of another scenario
- `migration/change-requests/CR-Notes-1.md:4` (Notes): - Raised by: Notes, 2026-10-15

## knowledge

- `migration/knowledge/navigation.md:20` (Notes): - Two orphan `Destination Notes` nodes in `App_Common.BottomBarMenu.Event_BottomBar_Clicked`.
- `migration/knowledge/audit-a1-empty-handlers.md:63` (Notes): | `screens/Notes/components/ItemCard_ActionBar.tsx:28-31` | OnClickShare / OnClickUnbookmark | NoteCard_Item sets ShowUnbookmark and ShowShare False: never rendered |
- `migration/knowledge/runtime-sources.md:84` (Notes): | 33 flow controllers `UBTConnect.<Flow>.controller.js` (App_Common_Blocks, App_Common_Blocks_PopupDialogs, App_CommonBlocks_Filter, App_Menu_ContactUs, App_Notifications, App_Profile, Bookmarks, Calendar, Calendar_Events, Deprecated_Calendar_PersonalEvent, Directory_Caroussel, Directory_CommonBlock
- `migration/knowledge/audit-a1-empty-handlers.md:63` (NoteCard_Item): | `screens/Notes/components/ItemCard_ActionBar.tsx:28-31` | OnClickShare / OnClickUnbookmark | NoteCard_Item sets ShowUnbookmark and ShowShare False: never rendered |

## flags

- `migration/flags.md:11` (Notes): | `action:bottomSheetOnToggle` (gone) (candidate) | flag check action | Bookmarks, CountryDetails, CountryList, Map, Notes, Notifications, Search, Updates_SingleList | - | open | - | **open** |
- `migration/flags.md:46` (Notes): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:50` (Notes): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:53` (Notes): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:93` (Notes): | `action:getFlagURLByCountryCode` (candidate) | flag check action | Bookmarks, BrowseCountries, CountryDetails, CountryList, Map, MyCalendar, Notes, Notifications … | - | unavailable: not a feature flag: country flag image URL | - | not a flag (false positive): country flag image URL; behaviour bui
- `migration/flags.md:105` (Notes): | `action:getHasNewNotifications` (candidate) | flag check action | Bookmarks, CountryList, HomeFeed, MessageDetail, Notes, Updates_SingleList | - | unavailable: C2NewNotifications: bell and MessageDetail open Notifications (on) or MessageList (off); icon DOM unchanged | tst=off, prod=? | both branc

## parity exemptions

- `migration/parity-exemptions.json:2` (Notes): "_comment": "Accepted parity differences, decided by the user. Every entry has an id, a reason and evidence; the parity report counts how often each fires. Login entries: Q6 answered by the user (2026-10-14), migration/screens/Login/questions.json. PINUnlock entries (*-PINCODE): Q3 answered by the u
- `migration/parity-exemptions.json:39` (Notes): "reason": "The total-notes IconText of the Notes skeleton cards (ItemCard_WithNotes): the capture masks its digit as '•' where the build shows the count 0, and the narrower glyph moves the right-aligned list_alt icon. Same kind as CAPTURE-BADGE-MASKED-TEXT. Masked in DOM and pixel comparison for tha
- `migration/parity-exemptions.json:40` (Notes): "evidence": "migration/screens/Notes/analysis/dom/loading.html:267-289 (and offline.html:267, one per skeleton card b8-l1-61_0..5); migration/screens/Notes/parity/loading.diff.png, offline.diff.png (hotspots x≈320-338 at each card); Notes Q4, accepted by the user 2026-10-15"
- `migration/parity-exemptions.json:545` (Notes): "reason": "The loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails and GetSubdivisionHouseholds had failed: the actions menu left its skeleton (hasFetchError) with the Notes button in its neutral colours, and the household list shows list-error; the moc
- `migration/parity-exemptions.json:641` (Notes): "reason": "The member photo was masked by the capture (data-masked-src=\"user-image\", src removed, TST rendered 98x98): the replayed reference shows a broken image 100 px high, the clone the 98 px neutral placeholder (Q-W2C-1), so everything below the photo sits 1 px higher (Notes button top 212 → 
- `migration/parity-exemptions.json:665` (Notes): "reason": "Same capture artifact as CAPTURE-LOADING-FETCH-TIMEOUT-SUPPERMEETING (which already covers the Notes button b6): the loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails failed and HandleFetchError set EnableBookmark / EnableShare False (Bookm

## Decision ids on the board rows of the flow's screens

V3a
