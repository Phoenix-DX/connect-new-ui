# Questions: Profile

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] householder address section (answered)
- Question: The householder-only part (If isHouseholder: Address Information list, Locality / Subdivision DropdownSearch, CacheControl_AllLocalities and CacheControl_AllSubdivisions, the dropdown checks of OnClick_Save) is not captured: the TST account is a householder's spouse. Build it now or render NotCaptured?
- Evidence: Profile.mvc.js:1269-1716 ($if isHouseholderVar), :2594-2659 (CacheControl_All* in $if isHouseholderVar), :3551-3600 (OnClick_Save dropdown checks); dom/default.html ids jump b27→b37; catalog/blocks.md:259 CacheControl_AllSubdivisions not built; DropdownSearch_ForceResizeOnOpen only touches .osui-dropdown-search (UBTConnect_Utils.controller.js:1458-1470)
- OutSystems MCP: not available (no MCP for route agents)
- Options: A: NotCaptured for the section (title 'Address Information' kept), no CacheControl_All* blocks, Save skips the dropdown checks | B: build it from the compiled code (own CacheControl_AllSubdivisions block, shared DropdownSearch and CacheControl_AllLocalities) (recommended: A)
- Answer (user, 2026-10-15T20:32:32): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): householder-only address section rendered as NotCaptured (no DropdownSearch, no CacheControl_AllLocalities/AllSubdivisions)

## Q2 [decision] mock user of the capture (answered)
- Question: The captured account is a householder's spouse (SpouseIsHouseholder True: Switch2/Switch3 and both notes shown, 'Display' texts → ShowMobile/ShowWork True; household with 3 members; GetCountryInfo sent CurrentCountryCode US). The shell mock user is neither (SpouseIsHouseholder False, HouseholderId 990002, AR). How should Profile get the captured data?
- Evidence: dom/default.html:362-394,414-440 (switches, 'Display … on your profile.'); Profile.mvc.js:1974,2053 ($if isHouseholder or isSpouse); fixture UBTConnect/DataActionGetCountryInfo/01-c52c670a.json inputs isSpouse true, CurrentCountryCode US; shell/mockUser.ts:70-73; HouseholdDetails_Block/mockData.ts:15 PROFILE_HOUSEHOLD_ID 9002
- OutSystems MCP: not available
- Options: A: route scenario 'spouse' (?mock=spouse, like Menu's 'householder'): answers CacheControl_UserInfo/DataActionGetCacheInfo with the shell mock user as spouse (HouseholderId 9002, DisplayMobile/WorkPhone True, Country_Code US, name with the captured lengths 6/4); capture plan Profile default state scenario 'spouse' | B: change request to the shell mock user (default user becomes a spouse in household 9002; affects other routes) (recommended: A)
- Answer (user, 2026-10-15T20:32:32): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): route scenario ?mock=spouse; capture-plan Profile scenarios.default = spouse

## Q3 [fact] built-in form validation (answered)
- Question: OnClick_Save runs ScreenController_ValidateWidgets (validationService.validate()) and reads DetailsForm.Valid. Which built-in checks and messages apply to the captured widgets (Email input type Email, Phone inputs, none mandatory)? The OutSystems runtime messages are not in the local sources.
- Evidence: Profile.mvc.js:3527-3531; UBTJavaScriptUtils.controller.js:4093-4096; runtime-sources/OutSystems.js has emailAddressValidate but no message texts
- OutSystems MCP: not available
- Answer (code, 2026-10-15T20:32:32): Built-in validation exists in the runtime: InputWithVariableWidget.validate (OutSystemsReactView.js ~211900): empty+mandatory → 'Required Value!'; non-empty with HTML5 validity invalid (type=email) or not acceptable for the data type → getInvalidValueMessage(type), default 'Invalid Value!' (OutSystems.js ~541500). The conservative build (no client check) is not 1:1 → CR-Profile-2 (foundation: shared widget validation), then Profile uses it.

## Q4 [decision] mocks: GetCountryInfo and save (answered)
- Question: (1) DataActionGetCountryInfo is recorded once (CurrentCountryCode US); another country (shell mock user AR) has no recording. (2) Member_EditDetails_Service is a write (never recorded). How to mock them?
- Evidence: fixtures index.json:61-66; openapi.yaml:2540-2553 (x-os-writes, fictional); PleaseNote 'changes may take up to 48 hours' (dom/default.html:206)
- OutSystems MCP: not available
- Options: A: GetCountryInfo serves the recorded answer for any country (matchInputs false; it only feeds FormattedAddress of the preview); Save answers success and keeps each submitted request in a store collection 'Profile.editRequests' (P-MUTATION) without changing the profile data (the server applies changes later) | B: fictional per-country address formats; Save also rewrites the mock user (recommended: A)
- Answer (user, 2026-10-15T20:32:32): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): GetCountryInfo serves the US recording for any country; Save answers success and keeps requests in the Profile.editRequests store

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): NotCaptured for the householder address section and the CacheControl_All*; Q2 → A (pending): `?mock=spouse` scenario (Profile mocks.ts) for the captured account; capture plan: Profile default; Q4 → A (pending): GetCountryInfo serves the recording for any country; Save success stored in `Profile.editRequests`.; Q3 (fact, pending): no client-side email validation message.; Capture plan (orchestrator): Profile `scenarios: {"default": "spouse"}` (Q2 → A), as Menu's `householder`.; CR-Profile-1 (open): HouseholdDetails_Block mock household 9002, third member with CTAs (dom/default.html:1675).; Proposed exemptions (`migration/screens/Profile/proposed-exemptions.json`, capture artifacts): switches' checked Feature flags: action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasPhotobookAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:33:52): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): NotCaptured for the householder address section and the CacheControl_All*; Q2 → A (pending): `?mock=spouse` scenario (Profile mocks.ts) for the captured account; capture plan: Profile default; Q4 → A (pending): GetCountryInfo serves the recording for any country; Save success stored in `Profile.editRequests`.; Q3 (fact, pending): no client-side email validation message.; Capture plan (orchestrator): Profile `scenarios: {"default": "spouse"}` (Q2 → A), as Menu's `householder`.; CR-Profile-1 (open): HouseholdDetails_Block mock household 9002, third member with CTAs (dom/default.html:1675).; Proposed exemptions (`migration/screens/Profile/proposed-exemptions.json`, capture artifacts): switches' checked Feature flags: action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasPhotobookAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T06:59:33): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
