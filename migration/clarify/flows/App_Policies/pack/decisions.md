# Recorded decisions and facts that name the elements of UI flow App_Policies

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:9` (AcceptPendingPolicies): | AcceptPendingPolicies | `/UBTConnect/AcceptPendingPolicies` | 1 | 56 | lite | build | V1 · policy checker on 67 screens leads here; AcceptPolicies (write) mocked (user, 2026-10-14) | built | route-acceptpolicies |

## app-shell.spec

- `migration/app-shell.spec.md:99` (AcceptPendingPolicies): | `Layout_LoginFlow` | Login, PINRegister, PINChange, AcceptPendingPolicies; lock screen | `.ubt-layout--login` > `__svg`, `__header#Placeholder_Header`, `__content#Placeholder_Content`, `#Placeholder_CommonUI_Inside_Layout` (Login dom:8-35); lock variant adds `ubt-lock-screen connect-legacy-compati
- `migration/app-shell.spec.md:230` (AcceptPendingPolicies): | Policy checker | `Policy_Checker` (rendered when not `In_IgnorePolicy` and `App_Policies_HasPolicyToAccept`, CUI:240) | OnInitialize: flag true → `ResetReplaceOnUpcomingNavigation` → `/UBTConnect/AcceptPendingPolicies` (survey:UBTConnect.App_Policies.Policy_Checker.mvc.js:157-163). Flag written fr
- `migration/app-shell.spec.md:250` (AcceptPendingPolicies): | `App_Policies_HasPolicyToAccept` | `GetUserInformation_Wrapper_Assign` (UC:13686); AcceptPendingPolicies (survey:…AcceptPendingPolicies.mvc.js:670) | CommonUI, Policy_Checker |
- `migration/app-shell.spec.md:230` (Policy_Checker): | Policy checker | `Policy_Checker` (rendered when not `In_IgnorePolicy` and `App_Policies_HasPolicyToAccept`, CUI:240) | OnInitialize: flag true → `ResetReplaceOnUpcomingNavigation` → `/UBTConnect/AcceptPendingPolicies` (survey:UBTConnect.App_Policies.Policy_Checker.mvc.js:157-163). Flag written fr
- `migration/app-shell.spec.md:250` (Policy_Checker): | `App_Policies_HasPolicyToAccept` | `GetUserInformation_Wrapper_Assign` (UC:13686); AcceptPendingPolicies (survey:…AcceptPendingPolicies.mvc.js:670) | CommonUI, Policy_Checker |
- `migration/app-shell.spec.md:339` (Policy_Checker): | U7 | decision | Fictional mock user content and scenario toggles (`HasPoliciesToAccept`, subscription active/expired, householder) | Fills `GetUserInformation` and `GetCacheInfo`; drives Policy_Checker and Access Restricted | Recommend a fictional person in a recorded locality (place names kept) s
- `migration/app-shell.spec.md:400` (Policy_Checker): 4. Build `CommonUI` with the 40 infrastructure blocks (catalog/infra.json). It has: lock overlay + inactivity, Policy_Checker,

## change requests

- `migration/change-requests/CR-OrbitAdminLanding-1.md:15` (AcceptPendingPolicies): - The shell's mock record has only CountryCode (`app/src/shell/mockUser.ts` `mockCachedUserInfo`, CR-AcceptPendingPolicies-2:
- `migration/change-requests/CR-OrbitAdminLanding-1.md:53` (AcceptPendingPolicies): timing flake in 2 of 3 runs (alternating states; Menu does not read this action), clean on the third. AcceptPendingPolicies,
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:1` (AcceptPendingPolicies): # CR-AcceptPendingPolicies-1: legacy CSS — add the screen stylesheet of AcceptPendingPolicies
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:4` (AcceptPendingPolicies): - Raised by: AcceptPendingPolicies, 2026-10-14
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:10` (AcceptPendingPolicies): - `View.getCssDependencies` of `UBTConnect.App_Policies.AcceptPendingPolicies.mvc.js` (survey) lists
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:11` (AcceptPendingPolicies): `css/UBTConnect.App_Policies.AcceptPendingPolicies.css`.
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:12` (AcceptPendingPolicies): - `app/public/os-legacy.css` has no `/* ==== …App_Policies.AcceptPendingPolicies.css ==== */` section and no rule for
- `migration/change-requests/CR-AcceptPendingPolicies-1.md:18` (AcceptPendingPolicies): Append the original `UBTConnect/css/UBTConnect.App_Policies.AcceptPendingPolicies.css` of TST (a static file, read-only
- `migration/change-requests/CR-AcceptPendingPolicies-2.md:13` (Policy_Custom_AcceptPendingPolicies): `Policy_Custom_AcceptPendingPolicies` and sent with `DataActionGetPendingPolicies` (screen variables).

## knowledge

- `migration/knowledge/navigation.md:35` (AcceptPendingPolicies): - ConnectShare forwards to AcceptPendingPolicies, ContactUsMenu, FeedItemDetail, HomeFeed, HouseholdDetails, Login,

## flags

- `migration/flags.md:32` (AcceptPendingPolicies): | `action:jSUtils_Element_Operations_ToggleAttribute` (gone) (candidate) | flag check action | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents
- `migration/flags.md:52` (AcceptPendingPolicies): | `action:toggleCheckBox` (gone) (candidate) | flag check action | AcceptPendingPolicies | - | open | - | **open** |
- `migration/flags.md:62` (AcceptPendingPolicies): | `action:toggleSelectAllCheckBox` (gone) (candidate) | flag check action | AcceptPendingPolicies | - | open | - | **open** |
- `migration/flags.md:113` (AcceptPendingPolicies): | `clientVar:App_PIN_BiometricEnabled` (candidate) | client variable | AcceptPendingPolicies, AssembleDetail, AssembleEvents, Assemble_BrowseByCountry, Bookmarks, BookmarksByGroup, BrowseCountries, BrowseDirectory … | bookmarksbygroup, ldm_email, ldm_eventdetail, ldm_myevents, mybookmarks | unavaila
- `migration/flags.md:186` (Policy_Custom_AcceptPendingPolicies): - `action:toggleCheckBox`: `UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js`
- `migration/flags.md:196` (Policy_Custom_AcceptPendingPolicies): - `action:toggleSelectAllCheckBox`: `UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js`

## Decision ids on the board rows of the flow's screens

V1
