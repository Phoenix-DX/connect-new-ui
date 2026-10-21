# Questions: EventBooklet

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data / review (answered)
- Question: No capture: which booklet does the mock world answer for Get_EventBookletFilters / Guests / Helpers, and how is the route reviewed?
- Evidence: no-capture.json; SB data actions :1995-2079; EventDetail OnHandle_NavigateTo_EventBooklet (flag mobileOrbitEventBooklet on)
- Options: A: fictional booklet of event 7301 in orbit.ts orbitEventBooklets (24 guests: Invite List of 5 visiting households in 5 localities of Argentina and Uruguay, Host Localities Molina and Acosta of Bahia Blanca; 7 helpers in 5 roles), reviewed from EventDetail of event 7301 or by direct URL | B: an empty booklet (NoResults in both views) (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [fact] server filters and paging (answered)
- Question: How does the server apply SelectedFilters (search term fields, day match, helper roles, countries, localities) and PaginationSettings (PageNumber, MaxRows) in Get_EventBookletGuests / Get_EventBookletHelpers?
- Evidence: SB view sends the block variables; contract Connect2_OrbitMobile_MUI__ScreenBlock_EventBooklet__DataActionGet_EventBookletGuests__Input; no MCP
- OutSystems MCP: not available (no MCP for route agents); conservative reversible mock: search in first name, last name, 'first last' or host (case-insensitive, prompt 'Search guest or host name'); a member with one selected day; role / country / locality in the selected lists (roles only for helpers); rows (PageNumber-1)*MaxRows..PageNumber*MaxRows in OrderNo order, MaxRows 0 = all
- Answer (user, 2026-10-16T15:03:09): No source: server-side search/day/role/country/locality/paging rules of the booklet data actions are not in the compiled code. Auto mode, no recommendation: keep the conservative mock as written in the spec. To confirm with the user. auto-accepted (user instruction 2026-10-16 night)

## Q3 [decision] booklet page size (CR-EventBooklet-1) (answered)
- Question: SetBookletMaxRows calls GetBookletGuestsMaxRows / GetBookletHelpersMaxRows (Connect2_OrbitMobile_MUI.controller.js:6515-6620, 8466-8530), missing from the API contract; Connect2_OrbitMobile_MUI.clientVariables.js (defaults of BookletGuestsMaxRows / BookletHelpersMaxRows) is not among the TST sources. Which page size until the CR is applied?
- Evidence: SB OnReady :3121-3194, ResetPaginationSettings :2744-2844; app/src/api/openapi.yaml (no operation)
- Options: A: CR-EventBooklet-1 (contract + shared client variables + SetBookletMaxRows), screen-local stand-in of 10 rows per page for guests and helpers (pages and the scroll-ending fetch reviewable) | B: no paging until the CR (MaxRows 0: every row at once) (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night): CR-EventBooklet-1 by foundation F17

## Q4 [decision] dropdown client actions (CR-EventBooklet-2) (answered)
- Question: PopUp_OrbitBookletFilters calls OSUI DropdownClear / DropdownClearValidation / DropdownTogglePopup and UBTConnect_Utils DropdownTags_CloseOtherOnClick (OSUI DropdownAPI.Close by name); the shared DropdownTags has no such client API. How is the popup built until it exists?
- Evidence: PF controller OnChange_DropdownSearch_Roles, ResetCheckboxes, OnHandle_ResetFilters, OnInitialized_Dropdowns, OnReady; app/src/shared/osui/DropdownTags/DropdownTags.tsx (no API)
- Options: A: CR-EventBooklet-2; until then DropdownClear is emulated by mounting the dropdown again with its cleared starting selection, the other three are no-ops | B: no emulation (a cleared selection stays visible in the dropdown) (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night): CR-EventBooklet-2 by foundation F17

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): fictional booklet of event 7301 (orbit.ts orbitEventBooklets). Review:; Q2 (fact): server filter/paging semantics as the mock reads them.; Q3 → A (pending orchestrator answer): CR-EventBooklet-1, page size stand-in 10. CR applied 2026-10-16 (F17): real client variables, stand-in removed.; Q4 → A (pending orchestrator answer): CR-EventBooklet-2, DropdownClear by remount, other dropdown actions no-ops. CR applied 2026-10-16 (F17): real DropdownClear / ClearValidation / TogglePopup / CloseOtherOnClick, remount removed.; Markup not captured: built from the compiled views. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T15:22:07): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
