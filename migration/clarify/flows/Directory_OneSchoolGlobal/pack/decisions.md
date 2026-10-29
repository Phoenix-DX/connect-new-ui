# Recorded decisions and facts that name the elements of UI flow Directory_OneSchoolGlobal

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:33` (OneSchoolGlobalDetails): | OneSchoolGlobalDetails | `/UBTConnect/OneSchoolGlobalDetails` | 4 | 127 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-oneschoolglobaldetails |
- `migration/board.md:78` (OneSchoolGlobalEventDetail): | OneSchoolGlobalEventDetail | `/UBTConnect/OneSchoolGlobalEventDetail` |  | 35 |  | skip | V7 · skip:dead · no way in, input unused; revisit if a link appears (user, 2026-10-14) | - |  |

## change requests

- `migration/change-requests/CR-HouseholdCarousel-2.md:63` (OneSchoolGlobalDetails): SupperMeeting_Carousel, OneSchoolGlobalDetails, HomeFeed.
- `migration/change-requests/CR-MyBookmarks-1.md:41` (OneSchoolGlobalDetails): LocalityId, SupperMeeting_Details In_SubdivsionId, OneSchoolGlobalDetails In_OneSchoolGlobalId,
- `migration/change-requests/CR-W2A-1.md:8` (OneSchoolGlobalDetails): Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
- `migration/change-requests/CR-OneSchoolGlobalDetails-1.md:1` (OneSchoolGlobalDetails): # CR-OneSchoolGlobalDetails-1: shared Directory_EntityDetailsActions / ShareSheet popup differences on this route
- `migration/change-requests/CR-OneSchoolGlobalDetails-1.md:4` (OneSchoolGlobalDetails): - Raised by: OneSchoolGlobalDetails, 2026-10-15
- `migration/change-requests/CR-OneSchoolGlobalDetails-1.md:12` (OneSchoolGlobalDetails): - Evidence: `migration/screens/OneSchoolGlobalDetails/parity/default.json`: class `extra .ubt-skeleton-section` on
- `migration/change-requests/CR-OneSchoolGlobalDetails-1.md:28` (OneSchoolGlobalDetails): None possible in `src/screens/OneSchoolGlobalDetails` (both inside shared blocks); the route composes them unchanged.
- `migration/change-requests/CR-EventDetail-1.md:63` (OneSchoolGlobalDetails): - Regression parity run on: OrbitLanding, HomeFeed, Splash, Login, OneSchoolGlobalDetails, SupperMeeting_Details,

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:56` (OneSchoolGlobalDetails): | OneSchoolGlobalDetails | Q1 | fact | by code | migration/runtime-sources/UBTConnect.Directory_OneSchoolGlobal.controller.js (fetched read-only): handleError delegates to App_Common.handleError, so raiseToFlowHandler i |
- `migration/knowledge/auto-decisions-2026-10-15.md:57` (OneSchoolGlobalDetails): | OneSchoolGlobalDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
- `migration/knowledge/auto-decisions-2026-10-15.md:58` (OneSchoolGlobalDetails): | OneSchoolGlobalDetails | Q3 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
- `migration/knowledge/auto-decisions-2026-10-15.md:59` (OneSchoolGlobalDetails): | OneSchoolGlobalDetails | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59) |
- `migration/knowledge/navigation.md:36` (OneSchoolGlobalDetails): OneSchoolGlobalDetails, PINRegister, SupperMeeting_Details.
- `migration/knowledge/feature-flag-helpers.md:34` (OneSchoolGlobalDetails): | (direct) | launchDarkly_FF.mobileStudentInformation | true | OneSchoolGlobalDetails (`Connect_LaunchDarkly_PermissionCheck`) | section inside OneSchoolGlobalDetails |

## flags

- `migration/flags.md:49` (OneSchoolGlobalDetails): | `action:toggleBookmarkItem` (gone) (candidate) | flag check action | AssembleDetail, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:50` (OneSchoolGlobalDetails): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:53` (OneSchoolGlobalDetails): | `action:toggleDeleteConfirmationPopup` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Map, Notes, OneSchoolGlobalDetails … | - | open | - | **open** |
- `migration/flags.md:59` (OneSchoolGlobalDetails): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:116` (OneSchoolGlobalDetails): | `launchDarkly_FF.mobileStudentInformation` | static entity record | OneSchoolGlobalDetails | - | unavailable: mobileStudentInformation: student information section in OneSchoolGlobalDetails | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |
- `migration/flags.md:127` (OneSchoolGlobalDetails): - `action:connect_LaunchDarkly_PermissionCheck`: `UBTConnect.App_Common.BottomBarMenu.mvc.js`, `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`, `UBTConnect.controller.js`, `UBTConnect_Utils.controller.js`
- `migration/flags.md:219` (OneSchoolGlobalDetails): - `launchDarkly_FF.mobileStudentInformation`: `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js`
- `migration/flags.md:59` (OneSchoolGlobalEventDetail): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |

## parity exemptions

- `migration/parity-exemptions.json:89` (OneSchoolGlobalDetails): "evidence": "migration/screens/OneSchoolGlobalDetails/analysis/dom/loading.html:197-365 vs dom/offline.html; migration/screens/OneSchoolGlobalDetails/parity/loading.json, offline.json"
- `migration/parity-exemptions.json:512` (OneSchoolGlobalDetails): "evidence": "migration/screens/OneSchoolGlobalDetails/analysis/dom/default.html:61-62; migration/screens/OneSchoolGlobalDetails/parity/default.json (layout 390x26 -> 390x260)"
- `migration/parity-exemptions.json:783` (OneSchoolGlobalDetails): "evidence": "usePopupWidget re-applies disableScroll on every client-variable change as every OS controller does (OutSystems.js:530153 fireInitialize subscribes clientVariablesHandler; :527146 generation++ + scheduleFlush). TST's final html class then depends on whether an EntityDetailsActions model
- `migration/parity-exemptions.json:784` (OneSchoolGlobalDetails): "routeRegex": "/UBTConnect/OneSchoolGlobalDetails\\b"
- `migration/parity-exemptions.json:795` (OneSchoolGlobalDetails): "evidence": "usePopupWidget re-applies disableScroll on every client-variable change as every OS controller does (OutSystems.js:530153 fireInitialize subscribes clientVariablesHandler; :527146 generation++ + scheduleFlush). TST's final html class then depends on whether an EntityDetailsActions model
- `migration/parity-exemptions.json:807` (OneSchoolGlobalDetails): "evidence": "usePopupWidget re-applies disableScroll on every client-variable change as every OS controller does (OutSystems.js:530153 fireInitialize subscribes clientVariablesHandler; :527146 generation++ + scheduleFlush). TST's final html class then depends on whether an EntityDetailsActions model

## Decision ids on the board rows of the flow's screens

V4a, V7
