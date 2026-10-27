# Recorded decisions and facts that name the elements of UI flow App_Profile

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:44` (Profile): | Profile | `/UBTConnect/Profile` | 5 | 151 | full | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-profile |

## app-shell.spec

- `migration/app-shell.spec.md:94` (Profile): | `UBTConnectLibrary.Layouts.Layout_HomePage` | HomeFeed, Profile | `.layout.layout-side.layout-native.ios-bounce.ubt-layout-home` style `--current-svg-height:260px` (HF dom:8) | Header_Title (logo), Header_Right (bell), HeaderContent, content (SVG + `SubLayout_HomePageSearch`), Bottom (bottom bar),
- `migration/app-shell.spec.md:310` (Profile): | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | `CacheControl_UserInfo_Wrapper` on Menu, CountryList, Profile, ContactUsDetails… | Menu calls:7, 101-107 | recorded, `Directory_UserCurrent` filled from the mock user (knowledge/mock-fixtures.md:25-27) |

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:52` (Profile): Profile, Menu, MilestoneDetail: 0 unexempted differences; no exemption proposed. Menu showed a header-band pixel
- `migration/change-requests/CR-Profile-2.md:1` (Profile): # CR-Profile-2: platform input widgets — built-in validation (ValidateWidgets, Form.Valid, messages)
- `migration/change-requests/CR-Profile-2.md:4` (Profile): - Raised by: orchestrator for Profile, 2026-10-15 (Profile Q3 answered by code)
- `migration/change-requests/CR-Profile-2.md:6` (Profile): - Other routes using it: every screen that calls ScreenController_ValidateWidgets / reads `<Form>.Valid` (Profile now; check ContactUsDetails, ContactByEmail*, Login before changing them)
- `migration/change-requests/CR-Profile-2.md:7` (Profile): - Related question: Profile Q3
- `migration/change-requests/CR-Profile-2.md:19` (Profile): - Profile today: `app/src/screens/Profile/index.tsx:153-155` `detailsFormValid = () => true` (no client check).
- `migration/change-requests/CR-Profile-2.md:25` (Profile): the app overrides them (check the app's language resources first). Then Profile replaces `detailsFormValid` with it.
- `migration/change-requests/CR-Profile-2.md:28` (Profile): Profile keeps `detailsFormValid = () => true` (no client-side check); invalid email is sent to the mocked save.

## ADRs (stack.md)

- `app/docs/reference/stack.md:155` (Profile): - Context: osui:DropdownSearch (Profile) uses Virtual Select. TST bundles v1.3.0 (OutSystemsUI_2_23.VirtualSelect.js, MIT); npm virtual-select-plugin stops at 1.1.0 and no npm build matches the TST file (compared 2026-10-14).

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:64` (Profile): | Profile | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): householder-only address section rendered as NotCaptured (no DropdownSearch, no CacheControl_AllLocali |
- `migration/knowledge/auto-decisions-2026-10-15.md:65` (Profile): | Profile | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): route scenario ?mock=spouse; capture-plan Profile scenarios.default = spouse |
- `migration/knowledge/auto-decisions-2026-10-15.md:66` (Profile): | Profile | Q3 | fact | by code | Built-in validation exists in the runtime: InputWithVariableWidget.validate (OutSystemsReactView.js ~211900): empty+mandatory → 'Required Value!'; non-empty with HTML5 va |
- `migration/knowledge/auto-decisions-2026-10-15.md:67` (Profile): | Profile | Q4 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): GetCountryInfo serves the US recording for any country; Save answers success and keeps requests in the |
- `migration/knowledge/audit-a1-empty-handlers.md:58` (Profile): | `screens/Profile/index.tsx:518` | DropdownSearch OnChanged (locality, subdivision) | inside the NotCaptured address section (Q1, Profile.mvc.js:1269-1716) |
- `migration/knowledge/static-entities-tst.json:3260` (Profile): "householdDetailsAndProfile": "Household Details & Profile",

## flags

- `migration/flags.md:46` (Profile): | `action:tagToggleToggle` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, Profile, Recurrence … | - | open | - | **open** |
- `migration/flags.md:49` (Profile): | `action:toggleBookmarkItem` (gone) (candidate) | flag check action | AssembleDetail, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:50` (Profile): | `action:toggleBookmarkItem_C2` (gone) (candidate) | flag check action | Bookmarks, HouseholdCarousel, HouseholdDetails, Locality_Details, Map, Notes, OneSchoolGlobalDetails, Profile … | - | open | - | **open** |
- `migration/flags.md:59` (Profile): | `action:toggleLocationPopup` (gone) (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Map, OneSchoolGlobalDetails, OneSchoolGlobalEventDetail, Profile, SupperMeeting_Carousel … | - | open | - | **open** |
- `migration/flags.md:109` (Profile): | `action:getHasPhotobookAccess` (candidate) | flag check action | HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel | - | unavailable: mobilePhotobook: access to Photobook | tst=on, prod=? | default-only: TST value on (user, 2026-10-14) |

## parity exemptions

- `migration/parity-exemptions.json:914` (Profile): "routeRegex": "/UBTConnect/Profile\\b",
- `migration/parity-exemptions.json:916` (Profile): "reason": "A switch's checked state is a DOM property, not an attribute, so the captured HTML (dom/default.raw.html) replays both switches unchecked; TST had them on: the notes under them read \"Display mobile number on your profile.\" / \"Display work number on your profile.\" (If(ShowMobileNumber/
- `migration/parity-exemptions.json:917` (Profile): "evidence": "migration/screens/Profile/analysis/dom/default.html:372-374, :390, :414-416, :436; parity Profile/default (?mock=spouse): ::before background rgb(233,236,239) → rgb(0,129,156), ::after transform 4px → 28px on Switch2 and Switch3 only"
- `migration/parity-exemptions.json:926` (Profile): "routeRegex": "/UBTConnect/Profile\\b",
- `migration/parity-exemptions.json:929` (Profile): "evidence": "migration/screens/Profile/analysis/dom/default.html:720; parity Profile/default: LazyImage_Placeholder subtree 390x26 → 390x260"
- `migration/parity-exemptions.json:937` (Profile): "routeRegex": "/UBTConnect/Profile\\b",
- `migration/parity-exemptions.json:941` (Profile): "evidence": "migration/screens/Profile/analysis/dom/default.html:113-114, :128; parity Profile/default: offset in parent 129,206 → 107,205"
- `migration/parity-exemptions.json:949` (Profile): "routeRegex": "/UBTConnect/Profile\\b",

## Decision ids on the board rows of the flow's screens

V4c
