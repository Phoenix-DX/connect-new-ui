# Recorded decisions and facts that name the elements of UI flow App_Menu_ContactUs

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:39` (ContactUsDetails): | ContactUsDetails | `/UBTConnect/ContactUsDetails` | 5 | 77 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactusdetails |
- `migration/board.md:40` (ContactUsMenu): | ContactUsMenu | `/UBTConnect/ContactUsMenu` | 5 | 56 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactusmenu |

## app-shell.spec

- `migration/app-shell.spec.md:229` (ContactUsDetails): | CommonUI gate | `CommonUI_InsideLayout` OnInitialize | `HideLockScreen = not signed in or In_IgnoreLockScreen or NeedRegister` (CUI:533-537); inputs per screen: Login, PINUnlock `IgnoreLockScreen+IgnorePolicy` (Login p:…Login.mvc.js:654; PINUnlock p:…PINUnlock.mvc.js:164), PINRegister `ShowLockScr
- `migration/app-shell.spec.md:310` (ContactUsDetails): | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | `CacheControl_UserInfo_Wrapper` on Menu, CountryList, Profile, ContactUsDetails… | Menu calls:7, 101-107 | recorded, `Directory_UserCurrent` filled from the mock user (knowledge/mock-fixtures.md:25-27) |

## change requests

- `migration/change-requests/CR-Profile-2.md:6` (ContactUsDetails): - Other routes using it: every screen that calls ScreenController_ValidateWidgets / reads `<Form>.Valid` (Profile now; check ContactUsDetails, ContactByEmail*, Login before changing them)
- `migration/change-requests/CR-Profile-2.md:57` (ContactUsDetails): - Regression parity run on: Profile (default/loading/offline, all 0), Login, ContactUsDetails and
- `migration/change-requests/CR-Profile-2.md:60` (ContactUsDetails): validation `_this.validateWidget("")`, Login.mvc.js:355, :456), ContactUsDetails (assigns Input_FullName/Input_Email
- `migration/change-requests/CR-Profile-2.md:61` (ContactUsDetails): Valid + ValidationMessage, reads Form_ContactUs.Valid, ContactUsDetails.mvc.js:1910-1941; the route computes it by
- `migration/change-requests/CR-Profile-2.md:64` (ContactUsDetails): - Follow-up (foundation F8b, 2026-10-16): Login and ContactUsDetails now use the service. Login: both buttons call
- `migration/change-requests/CR-Profile-2.md:65` (ContactUsDetails): `validation.validate('')` before their action (Login.mvc.js:355, :456). ContactUsDetails: `OSForm` Form_ContactUs,
- `migration/change-requests/CR-Profile-2.md:68` (ContactUsDetails): (ContactUsDetails.mvc.js:1907-1958). New `UnbuiltValidationWidget` (tested): the signed-out widgets, whose markup is
- `migration/change-requests/CR-Profile-2.md:69` (ContactUsDetails): `<NotCaptured>`, still register in the Form so their Valid counts. Parity 0 on Login, ContactUsDetails, Profile.

## ADRs (stack.md)

- `app/docs/reference/stack.md:268` (ContactUsDetails): - Consequences: ContactUsDetails does not use a range slider library. A new use of a range slider needs a new ADR and a version check.

## knowledge

- `migration/knowledge/auto-decisions-2026-10-15.md:27` (ContactUsDetails): | ContactUsDetails | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): signed-out branch as one NotCaptured, logic kept, GetCountriesNames fictional empty list |
- `migration/knowledge/auto-decisions-2026-10-15.md:28` (ContactUsDetails): | ContactUsDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ContactUs_Rate NotCaptured; contacted-about-feedback checkbox built from shared IconText/Icon |
- `migration/knowledge/shell-facts.md:14` (ContactUsDetails): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/navigation.md:41` (ContactUsDetails): - Screens with the Anonymous role: ContactUsDetails, ContactUsMenu, InvalidPermissions, Locality_Details, Login,
- `migration/knowledge/audit-a1-empty-handlers.md:91` (ContactUsDetails): ContactUsDetails, Household_Relations, HouseholdDetails_Block, SupperMeeting_HouseholdList,
- `migration/knowledge/auto-decisions-2026-10-15.md:29` (ContactUsMenu): | ContactUsMenu | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): both branches built as compiled; signed out shows the single row 'General Questions or Suggestions' |
- `migration/knowledge/shell-facts.md:14` (ContactUsMenu): - Gate: 74 UBTConnect screens use `checkPermissions = OS.RolesInfo.checkRegistered()` (for example `HF p:UBTConnect.Home.HomeFeed.mvc.js:1069-1071`). 9 have an empty check: Splash (SPL:577), Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList,
- `migration/knowledge/navigation.md:35` (ContactUsMenu): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,
- `migration/knowledge/navigation.md:41` (ContactUsMenu): - Screens with the Anonymous role: ContactUsDetails, ContactUsMenu, InvalidPermissions, Locality_Details, Login,
- `migration/knowledge/auto-decisions-2026-10-15.md:28` (ContactUs_Rate): | ContactUsDetails | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ContactUs_Rate NotCaptured; contacted-about-feedback checkbox built from shared IconText/Icon |

## parity exemptions

- `migration/parity-exemptions.json:1013` (ContactUsDetails): "routeRegex": "^/UBTConnect/ContactUsDetails(\\?|$)",
- `migration/parity-exemptions.json:1015` (ContactUsDetails): "reason": "TST renders TextArea_Message with rows=3 (ContactUsDetails.mvc.js:1102 textLines: 3; OutSystemsReactWidgets TextArea rows = textLines), 81 px; the capture stripped rows (capture.js KEEP_ATTR, fixed for future captures), so the replayed reference shows the default 2 rows (60 px) and everyt
- `migration/parity-exemptions.json:1016` (ContactUsDetails): "evidence": "migration/screens/ContactUsDetails/parity/default.json (358×60 → 358×81, 358×90 → 358×111, offsets +21)"
- `migration/parity-exemptions.json:1024` (ContactUsDetails): "routeRegex": "^/UBTConnect/ContactUsDetails(\\?|$)",
- `migration/parity-exemptions.json:1027` (ContactUsDetails): "reason": "TST renders TextArea_Message with rows=3 (ContactUsDetails.mvc.js:1102 textLines: 3; OutSystemsReactWidgets TextArea rows = textLines), 81 px; the capture stripped rows (capture.js KEEP_ATTR, fixed for future captures), so the replayed reference shows the default 2 rows (60 px) and everyt
- `migration/parity-exemptions.json:1028` (ContactUsDetails): "evidence": "migration/screens/ContactUsDetails/parity/default.json (0,231 → 0,210); loading/offline 0,289 → 0,268 (same 21 px)"
- `migration/parity-exemptions.json:1036` (ContactUsDetails): "routeRegex": "^/UBTConnect/ContactUsDetails(\\?|$)",
- `migration/parity-exemptions.json:1038` (ContactUsDetails): "detailRegex": "^0\\.\\d\\d% pixels differ .*migration/screens/ContactUsDetails/parity/default\\.diff\\.png$",

## Decision ids on the board rows of the flow's screens

V4c
