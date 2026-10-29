# Recorded decisions and facts that name the elements of UI flow Directory_Household

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:31` (Household_Relations): | Household_Relations | `/UBTConnect/Household_Relations` | 4 | 101 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-household-relations |
- `migration/board.md:29` (HouseholdCarousel): | HouseholdCarousel | `/UBTConnect/HouseholdCarousel` | 4 | 167 | full | build | V3b · C2EnableCarousel=true on TST; opened from 15 screens (user, 2026-10-14) | built | route-householdcarousel |
- `migration/board.md:30` (HouseholdDetails): | HouseholdDetails | `/UBTConnect/HouseholdDetails` | 4 | 144 | full | build | V3b · 28 nav sites, 16 not behind the carousel flag (user, 2026-10-14) | built | route-householddetails |

## app-shell.spec

- `migration/app-shell.spec.md:327` (HouseholdCarousel): | household open | HouseholdCarousel | `C2EnableCarousel` on (TST) | HouseholdDetails built for the 16 unflagged sites (feature-flag-helpers.md:36) |
- `migration/app-shell.spec.md:48` (HouseholdDetails): <div class="portal-class" style="display:inline"><div><div class="popup-backdrop" data-popup-backdrop>…</div></div></div> <!-- popups (HouseholdDetails dom:1392-1404) -->
- `migration/app-shell.spec.md:186` (HouseholdDetails): | Popups portal | OSUI popups render in `body > .portal-class` (HouseholdDetails dom:1392-1404) | – | – |
- `migration/app-shell.spec.md:327` (HouseholdDetails): | household open | HouseholdCarousel | `C2EnableCarousel` on (TST) | HouseholdDetails built for the 16 unflagged sites (feature-flag-helpers.md:36) |

## change requests

- `migration/change-requests/CR-HouseholdCarousel-2.md:62` (Household_Relations): - Regression parity 0: HouseholdDetails, Household_Relations, Locality_Details, Profile (spouse), SupperMeeting_Details,
- `migration/change-requests/CR-W2A-1.md:7` (Household_Relations): CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject,
- `migration/change-requests/CR-W2A-1.md:40` (Household_Relations): Household_Relations 10, SupperMeeting_* 42, CountryList 5, …). So TST did not answer empty URLs, and its URLs are
- `migration/change-requests/CR-Profile-1.md:32` (Household_Relations): - Other routes: HouseholdDetails (9001), Household_Relations and Locality_Details never request household 9002; their
- `migration/change-requests/CR-Profile-1.md:35` (Household_Relations): Household_Relations, Locality_Details 0; HouseholdCarousel unchanged.
- `migration/change-requests/CR-Photobook-1.md:6` (HouseholdCarousel): - Other routes using it (catalog/blocks.md): HomeFeed, HouseholdCarousel, SupperMeeting_Carousel, Photobook
- `migration/change-requests/CR-Photobook-1.md:42` (HouseholdCarousel): baseline of 12:19); HouseholdCarousel default 95 (baseline 113; the 15 new ones are household member-list rows
- `migration/change-requests/CR-HouseholdCarousel-2.md:1` (HouseholdCarousel): # CR-HouseholdCarousel-2: HouseholdDetails_Block / Directory_EntityDetailsActions mocks — the carousel's four households
- `migration/change-requests/CR-HouseholdCarousel-2.md:4` (HouseholdCarousel): - Raised by: HouseholdCarousel, 2026-10-15
- `migration/change-requests/CR-HouseholdCarousel-2.md:10` (HouseholdCarousel): - `migration/screens/HouseholdCarousel/analysis/dom/default.html`: the four rendered slides show 5, 3, 6 and 6
- `migration/change-requests/CR-HouseholdCarousel-2.md:36` (HouseholdCarousel): - Regression parity run on: see the F4a report (HouseholdCarousel, HouseholdDetails).
- `migration/change-requests/CR-HouseholdCarousel-2.md:61` (HouseholdCarousel): popup-disable-scroll) in `migration/screens/HouseholdCarousel/proposed-exemptions.json`.
- `migration/change-requests/CR-HouseholdDetails-1.md:8` (HouseholdCarousel): - Other routes using them: HouseholdCarousel, Profile, Locality_Details, every route with Directory_EntityDetailsActions
- `migration/change-requests/CR-MilestoneDetail-2.md:8` (HouseholdDetails): HelpersDetail, HouseholdDetails Orbit cards)
- `migration/change-requests/CR-BookmarksByGroup-2.md:21` (HouseholdDetails): them 42438) describe different bookmark sets; a shared seed would keep HouseholdDetails' "Unmark" and this list
- `migration/change-requests/CR-BookmarksByGroup-2.md:35` (HouseholdDetails): done too (CR-MyBookmarks-2): 42438 (HouseholdDetails "Unmark") is a row of the one collection the list, GetBookmarkById
- `migration/change-requests/CR-Locality_Details-1.md:17` (HouseholdDetails): Contacts): 42438 (CR-HouseholdDetails-2 §2) and 91001 (the first fictional household of the Locality_Details list).
- `migration/change-requests/CR-Locality_Details-1.md:19` (HouseholdDetails): SynchBookmarks replaces the copy in one transaction (see CR-HouseholdDetails-2 §2), so GetLocal_Bookmark finds the row
- `migration/change-requests/CR-HouseholdCarousel-2.md:6` (HouseholdDetails): - Other routes using it: HouseholdDetails, Profile, Locality_Details (unchanged: their ids keep their answers)
- `migration/change-requests/CR-HouseholdCarousel-2.md:33` (HouseholdDetails): type (CR-HouseholdDetails-2 §1: households without phone / email, Gift from the Household menu). Slide 1 bookmarked:
- `migration/change-requests/CR-HouseholdCarousel-2.md:34` (HouseholdDetails): the legacy bookmark seed of household 42438 (CR-HouseholdDetails-2 §2). Not done (optional): 9002 non-member row and
- `migration/change-requests/CR-HouseholdCarousel-2.md:1` (HouseholdDetails_Block): # CR-HouseholdCarousel-2: HouseholdDetails_Block / Directory_EntityDetailsActions mocks — the carousel's four households
- `migration/change-requests/CR-HouseholdCarousel-2.md:5` (HouseholdDetails_Block): - Block: `app/src/shared/UBTConnect/HouseholdDetails_Block/mockData.ts` (`sampleHouseholds`)
- `migration/change-requests/CR-HouseholdCarousel-2.md:31` (HouseholdDetails_Block): - Change (F4a foundation owner, 2026-10-15): `HouseholdDetails_Block/mockData.ts` `sampleHouseholds['9003']` and
- `migration/change-requests/CR-HouseholdCarousel-2.md:47` (HouseholdDetails_Block): - `HouseholdDetails_Block/mockData.ts`: `SampleHousehold` gains optional `firstMemberId`, `memberShapes`, `noPhoto`,
- `migration/change-requests/CR-HouseholdCarousel-2.md:53` (HouseholdDetails_Block): - `HouseholdDetails_Block/mocks.ts`: answers `membersOf` and `nonMembers`; registers `markNoPhoto` (UBT_LazyImage) and
- `migration/change-requests/CR-HouseholdDetails-1.md:7` (HouseholdDetails_Block): `HouseholdDetails_Members_Block` + `HouseholdDetails_Block`, the ShareSheet popup (`src/shared/UBTConnect_Utils/ShareSheet`)
- `migration/change-requests/CR-HouseholdDetails-1.md:37` (HouseholdDetails_Block): - Expected change: OSList accepts the source's fetch status; Members block and HouseholdDetails_Block pass it through.
- `migration/change-requests/CR-HouseholdDetails-1.md:60` (HouseholdDetails_Block): - §3 `components/OSList`: `sourceDataFetchStatus` (+ `DataFetchStatus` 0/1/2, OutSystems.js Model.DataFetchStatus): ` list-loading` / ` list-error` before `OSFillParent`, storeListLength skips Fetching (OutSystemsReactWidgets.js pretty :1263-1267, :1325-1334). HouseholdDetails_Members_Block takes `i

## ADRs (stack.md)

- `app/docs/reference/stack.md:237` (HouseholdCarousel): - P4-5 differences from §3.1: `meta.flagRedirect` is on 6 routes (Notifications, Bookmarks, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel), and `useOsNavigate` applies it. A URL that is opened directly is not redirected, the same as before. `capture-plan.json` has no flag v
- `app/docs/reference/stack.md:173` (HouseholdDetails): - Context: SynchBookmarks / SynchBookmarksC2 (app start, via Sync_Info_GetMain) run DeleteAll then CreateOrUpdate as two IndexedDB transactions in the original (OutSystems.js deleteAll -> executeTransaction). A screen that reads LocalBookmark between the two steps sees no bookmark (menu shows Bookma
- `app/docs/reference/stack.md:175` (HouseholdDetails): - Consequences: Deviation from the 1:1 rule (bugs included): a read during the sync now sees either the old or the new rows, never none. No visible change on TST timing. Revert = two transactions again plus a timing exemption on HouseholdDetails default.
- `app/docs/reference/stack.md:249` (HouseholdDetails): - Scope and sequence (R1 b, R7 b): phases 0 to 7 in about 50 days, and phases 8 and 9 as a stretch goal. Phase 2 builds a walking skeleton on HouseholdDetails before the mass work.

## known original bugs

- `app/docs/known-original-bugs.md:13` (HouseholdDetails): | B5  | `UBTConnect` app start, SynchBookmarks / SynchBookmarksC2 (LocalBookmark)                                   | DeleteAll and CreateOrUpdate run as two IndexedDB transactions: a screen that reads the bookmarks between them sees none (menu shows Bookmark, not Unmark)                            

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:39` (Household_Relations): | Household_Relations | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the 3 capture-artifact exemptions are merged into parity-exemptions.json |
- `migration/knowledge/audit-a1-empty-handlers.md:45` (Household_Relations): | `screens/Household_Relations/components/HouseholdRelations_Block.tsx:286` | OnClick_Bookmark | HouseholdRelations_Block.mvc.js:1771-1792: breakpoints only |
- `migration/knowledge/audit-a1-empty-handlers.md:91` (Household_Relations): ContactUsDetails, Household_Relations, HouseholdDetails_Block, SupperMeeting_HouseholdList,
- `migration/knowledge/auto-decisions-2026-10-15.md:35` (HouseholdCarousel): | HouseholdCarousel | Q1 | decision |  | A — mock-only seed (fictional Locality_Details-like preload, 23 households, In_StartingHouseholdId first); real builds keep the empty carousel. auto-accepted (user instru |
- `migration/knowledge/auto-decisions-2026-10-15.md:36` (HouseholdCarousel): | HouseholdCarousel | Q2 | decision |  | A — CR-HouseholdCarousel-1 adds ActionUpdateItem_MarkAsRead to the contract + mock; until applied the swipe branch makes no call. auto-accepted (user instruction 2026-10- |
- `migration/knowledge/audit-a1-empty-handlers.md:49` (HouseholdCarousel): | `shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx:159` | BackNavigationHandlerBackNavigation | NotesSheet.mvc.js:610-628 (HouseholdCarousel copy): breakpoints only |
- `migration/knowledge/feature-flag-helpers.md:17` (HouseholdCarousel): | GetHasCarouselEnabled | outSystems_FF.C2EnableCarousel | true | 10 places: Directory_*, Home, Legacy_AssembleFlow | yes: HouseholdCarousel / HouseholdDetails |
- `migration/knowledge/feature-flag-helpers.md:43` (HouseholdCarousel): - The code opens HouseholdCarousel only when C2EnableCarousel is true (13/13 sites).
- `migration/knowledge/auto-decisions-2026-10-15.md:37` (HouseholdDetails): | HouseholdDetails | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the foundation applies CR-HouseholdDetails-1/2, then parity and ready |
- `migration/knowledge/auto-decisions-2026-10-15.md:38` (HouseholdDetails): | HouseholdDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): 3 capture/timing exemptions merged (…-HOUSEHOLDDETAILS-IMAGE, CAPTURE-MASKED-IMAGE-HOUSEHOLDDETAILS, C |
- `migration/knowledge/auto-decisions-2026-10-15.md:69` (HouseholdDetails): | SupperMeeting_Carousel | Q2 | fact | by code | Capture timing artifact. EntitiesCarousel_Element.mvc.js:240-307 passes In_IsSkeletonOnly only to the HouseholdDetails branch, never to EntitiesCarouse_lSupperMeetingDeta |
- `migration/knowledge/auto-decisions-2026-10-15.md:70` (HouseholdDetails): | SupperMeeting_Details | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-SupperMeeting_Details-1 and CR-HouseholdDetails-1, re-run parity, then ready; 3 capture exemp |
- `migration/knowledge/navigation.md:35` (HouseholdDetails): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
- `migration/knowledge/auto-decisions-2026-10-16.md:59` (HouseholdDetails): | MilestoneDetail Q1-Q6 | **A (recommended)** each | guest → HouseholdDetails; call popup without timezone; notification branch NotCaptured; no document; other milestone types NotCaptured; cloneQuery |
- `migration/knowledge/feature-flag-helpers.md:17` (HouseholdDetails): | GetHasCarouselEnabled | outSystems_FF.C2EnableCarousel | true | 10 places: Directory_*, Home, Legacy_AssembleFlow | yes: HouseholdCarousel / HouseholdDetails |
- `migration/knowledge/feature-flag-helpers.md:44` (HouseholdDetails): - HouseholdDetails has 28 sites. 16 of them are not behind that flag.
- `migration/knowledge/audit-a1-empty-handlers.md:91` (HouseholdDetails_Block): ContactUsDetails, Household_Relations, HouseholdDetails_Block, SupperMeeting_HouseholdList,
- `migration/knowledge/audit-a1-empty-handlers.md:45` (HouseholdRelations_Block): | `screens/Household_Relations/components/HouseholdRelations_Block.tsx:286` | OnClick_Bookmark | HouseholdRelations_Block.mvc.js:1771-1792: breakpoints only |

## flags

- `migration/flags.md:53` (Household_Relations): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:22` (HouseholdCarousel): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:46` (HouseholdCarousel): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:49` (HouseholdCarousel): | `action:toggleBookmarkItem` (gone) (candidate) | flag check action | AssembleDetail, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:50` (HouseholdCarousel): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:53` (HouseholdCarousel): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:59` (HouseholdCarousel): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:97` (HouseholdCarousel): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:100` (HouseholdCarousel): | `action:getHasExtendedShare` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | unavailable: C2ExtendedShare: extended share UI inside screens | tst=on, prod=? | default-onl
- `migration/flags.md:22` (HouseholdDetails): | `action:handler_BottomSheetOnToggle` (gone) (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | open | - | **open** |
- `migration/flags.md:46` (HouseholdDetails): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:49` (HouseholdDetails): | `action:toggleBookmarkItem` (gone) (candidate) | flag check action | AssembleDetail, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:50` (HouseholdDetails): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:53` (HouseholdDetails): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:59` (HouseholdDetails): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:97` (HouseholdDetails): | `action:getHasCarouselEnabled` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, HomeFeed, HouseholdCarousel, LDM_EventDetail, LDM_EventDetail_V2, LDM_MyEvents, LDM_MyEvents_V2 … | bookmarksbygroup, ldm_eventdetail, ldm_myevents, mybookmarks | unavailable: C2EnableCarousel: opens
- `migration/flags.md:100` (HouseholdDetails): | `action:getHasExtendedShare` (candidate) | flag check action | AssembleDetail, BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Map … | bookmarksbygroup | unavailable: C2ExtendedShare: extended share UI inside screens | tst=on, prod=? | default-onl
- `migration/flags.md:141` (HouseholdDetails_Block): - `action:getHasExtendedShare`: `Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js`, `Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc.js`, `Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js`
- `migration/flags.md:151` (HouseholdDetails_Block): - `action:getHasPhotobookAccess`: `UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js`

## parity exemptions

- `migration/parity-exemptions.json:620` (Household_Relations): "evidence": "migration/screens/Household_Relations/analysis/dom/loading.html:51, :229, :315 (Placeholder_LoadingSection class \"\", ubt-lazy-image--no-image); migration/screens/Household_Relations/parity/loading.json (3 class diffs); parity/offline.json clean"
- `migration/parity-exemptions.json:631` (Household_Relations): "evidence": "migration/screens/Household_Relations/analysis/dom/default.html:70-79; migration/screens/Household_Relations/parity/default.json (position diff)"
- `migration/parity-exemptions.json:640` (Household_Relations): "detailRegex": "^[0-2]\\.\\d\\d% pixels differ .*migration/screens/Household_Relations/parity/default\\.diff\\.png$",
- `migration/parity-exemptions.json:642` (Household_Relations): "evidence": "migration/screens/Household_Relations/analysis/dom/default.html:58; migration/screens/Household_Relations/parity/default.json (1.83 %, hotspots on text edges), default.diff.png"
- `migration/parity-exemptions.json:126` (HouseholdCarousel): "evidence": "migration/screens/HouseholdCarousel/analysis/states.json (loading/offline via /UBTConnect/Locality_Details); migration/screens/HouseholdCarousel/parity/loading.json, offline.json (structure 56 = 14 x 4 slides, all under b3-l1-1152_N-b2-b3-$b1 / b3-l1-1154_N-b2-b3-$b1); UBTConnect.Direct
- `migration/parity-exemptions.json:556` (HouseholdCarousel): "reason": "The loading capture held the TST requests until the OutSystems request timeout, so the household members lists show their fetch-error class (list-error) where the clone's loading scenario, which never answers, keeps list-loading. Only that exact swap is exempt (a missing list-loading stay
- `migration/parity-exemptions.json:557` (HouseholdCarousel): "evidence": "migration/screens/HouseholdCarousel/parity/loading.json (8 class diffs, slides 1-4)"
- `migration/parity-exemptions.json:1100` (HouseholdCarousel): "evidence": "migration/screens/HouseholdCarousel/analysis/dom/default.html (img b3-l1-1152_0..3-b2-b3-b1-b4-b2-Image: data-masked-src=\"user-image\", data-rendered-size=\"390x259\"); migration/screens/HouseholdCarousel/parity/default.json (40 layout diffs, 10 per slide, all 390x26 -> 390x260 under L
- `migration/parity-exemptions.json:1101` (HouseholdCarousel): "routeRegex": "^/UBTConnect/HouseholdCarousel(\\?|$)"
- `migration/parity-exemptions.json:1110` (HouseholdCarousel): "routeRegex": "/UBTConnect/HouseholdCarousel\\b",
- `migration/parity-exemptions.json:1114` (HouseholdCarousel): "evidence": "migration/screens/HouseholdCarousel/analysis/dom/loading.html (<div aria-hidden=\"true\" id=\"reactContainer\">, AddressPopup b3-l1-1152_0..3-b2-b3-b1-b13-$b2); migration/screens/HouseholdDetails/analysis/dom/loading.html (<div id=\"reactContainer\">, direct open, 'Household gallery' :1
- `migration/parity-exemptions.json:1587` (HouseholdCarousel): "evidence": "migration/screens/Locality_Details/parity/default.json; app/src/shell/memoryCache.ts getCacheableObjectInBulk; migration/screens/HouseholdCarousel/pack.md Calls #14, #15, #19 (2 vs 3 batches, HouseholdCarousel proposal merged here)"
- `migration/parity-exemptions.json:125` (HouseholdDetails): "reason": "The loading and offline states were captured via Locality_Details (states.json `via`), so on TST the app start had finished and the user-info cache was filled: HouseholdDetails_Block's OnReady passed GetUserInformation_Wrapper (mvc.js:2700-2710), set the skeleton household ('Example & Exa
- `migration/parity-exemptions.json:126` (HouseholdDetails): "evidence": "migration/screens/HouseholdCarousel/analysis/states.json (loading/offline via /UBTConnect/Locality_Details); migration/screens/HouseholdCarousel/parity/loading.json, offline.json (structure 56 = 14 x 4 slides, all under b3-l1-1152_N-b2-b3-$b1 / b3-l1-1154_N-b2-b3-$b1); UBTConnect.Direct
- `migration/parity-exemptions.json:466` (HouseholdDetails): "evidence": "migration/screens/HouseholdDetails/analysis/dom/loading.html:50-60 (Placeholder_LoadingSection class \"\", ubt-lazy-image--no-image); migration/screens/HouseholdDetails/parity/loading.json"
- `migration/parity-exemptions.json:477` (HouseholdDetails): "evidence": "migration/screens/HouseholdDetails/analysis/dom/default.html:56-57; migration/screens/HouseholdDetails/parity/default.json"
- `migration/parity-exemptions.json:545` (HouseholdDetails): "reason": "The loading capture held the TST requests until the OutSystems request timeout, so FetchContactDetails and GetSubdivisionHouseholds had failed: the actions menu left its skeleton (hasFetchError) with the Notes button in its neutral colours, and the household list shows list-error; the moc
- `migration/parity-exemptions.json:817` (HouseholdDetails): "routeRegex": "/UBTConnect/HouseholdDetails\\b",
- `migration/parity-exemptions.json:818` (HouseholdDetails): "detailRegex": "^0\\.\\d\\d% pixels differ .*migration/screens/HouseholdDetails/parity/default\\.diff\\.png$",
- `migration/parity-exemptions.json:820` (HouseholdDetails): "evidence": "migration/screens/HouseholdDetails/parity/default.json (pixel 0.15%, worst tile 7.0% at 320,720), default.expected.png vs default.build.png rows 1-2; F5 report 2026-10-15"
- `migration/parity-exemptions.json:125` (HouseholdDetails_Block): "reason": "The loading and offline states were captured via Locality_Details (states.json `via`), so on TST the app start had finished and the user-info cache was filled: HouseholdDetails_Block's OnReady passed GetUserInformation_Wrapper (mvc.js:2700-2710), set the skeleton household ('Example & Exa
- `migration/parity-exemptions.json:126` (HouseholdDetails_Block): "evidence": "migration/screens/HouseholdCarousel/analysis/states.json (loading/offline via /UBTConnect/Locality_Details); migration/screens/HouseholdCarousel/parity/loading.json, offline.json (structure 56 = 14 x 4 slides, all under b3-l1-1152_N-b2-b3-$b1 / b3-l1-1154_N-b2-b3-$b1); UBTConnect.Direct
- `migration/parity-exemptions.json:554` (HouseholdDetails_Block): "pathRegex": "\\[Directory_Household\\.HouseholdDetails_Block\\] > .*\\[Layouts\\.SubLayout_Section\\] > .*div\\.OSFillParent\\.list(\\.[^ >]*)?$",

## Decision ids on the board rows of the flow's screens

V3b, V4a
