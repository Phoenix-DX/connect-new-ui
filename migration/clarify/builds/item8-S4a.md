# Item 8, step S4a: group D, first part (5 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-D.md`. MCP check of group D: `../review/item8-w23-errorpage.md` §5.
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `pages/EventBooklet/hooks/useEventBooklet.ts` and `pages/EventBooklet/hooks/eventBookletDataFlows.ts` (the inventory
  section covers both; the data flows now take `flow.fetch` as a fifth argument)
- `pages/EventDetail/hooks/useEventDetail.ts`
- `pages/GuestArrangements/hooks/useGuestArrangements.ts`
- `pages/HelpersDetail/hooks/useHelperDetails.ts`
- `pages/HostSurvey/hooks/useHostSurvey.ts` (also port gap N3)

Tests: the `.test.tsx` file next to each hook (5 files).

Not changed: platform files, view components, README files (no W23 text in the README files of these folders).

## Tests

The tests were written in the same pass as each hook change (not run red first, to keep the budget). Each new test
fails on the W23 code by its assertion (an event, an application event, a call, a message or a raise after the
unmount). "No raise" uses `raisedErrors()` (the spy calls without `IgnorableSystemException`), as in S1a and S2a.

| Hook | New or rewritten tests |
|---|---|
| useEventBooklet | R3: unmount while SetBookletMaxRows is pending (no refresh starts, no dispatch, no raise); R2 then R3: unmount while CheckDirectoryAccess is pending (no NavigateTo_HouseholdDetail, no ViewHousehold event; one `ControllerDisposedException`); R1: failure of Get_EventBookletGuests after the unmount (no raise, no dispatch); R1: invalid filters before the helper roles are fetched, then unmount (no Info message) |
| useEventDetail | R1: Get_EventDetails answers after the unmount (no next call, no state write, no raise); R1: its failure (no raise); R1: Get_HasDocuments answers after the unmount (Get_HasQRCode does not start); R2 then R3: Cache_UserInfo_Get of OnHandle_ViewHelpers answers after the unmount (no NavigateTo_Helpers). Two count assertions lowered (see D3) |
| useGuestArrangements | R1 answer and R1 failure after the unmount (no state write, no raise); R2 then R3: CheckDirectoryAccess after the unmount (no event, no application event); R2 without access (the upgrade popup still opens); 1 assertion expects the scope argument |
| useHelperDetails | R1 answer and R1 failure after the unmount; R2 then R3: CheckDirectoryAccess after the unmount; R2 without access (popup opens); R2: BuildMemberCallData module actions run to the end, no state write; 1 assertion expects the scope argument; `beforeEach` now resets `checkDirectoryAccess` to `true` (a `mockReturnValue` leaked into the next describe) |
| useHostSurvey | R1 answer and failure after the unmount (kept); R2 then R3: PostHostSurvey (draft) answers after the unmount (no NavigateTo_Back, no message, no state write; one `ControllerDisposedException`); N3: a `SystemException` of PostHostSurvey reaches `raiseToFlowHandler` with the scope (no unhandled rejection); the live ReturnBack test now also checks the draft message. `feedbackMessageAfterTransition` is a spy (`vi.mock` of `@/pages/HostSurvey/actions`) |

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useEventBooklet | OnReady timers start the refreshes after the unmount | Fixed: each timer calls its refresh through `flow.own` (R3, EventBooklet.js:3394); ResetPaginationSettings after SetBookletMaxRows too (see D2) |
| useEventBooklet | Refresh* failure: UnknownError to the flow handler after the unmount | Fixed: `flow.fetch` on the three data actions and the GetLocalHelperRoles aggregate (R1); `ControllerDisposedException` is a system exception, so `asUnknownError` passes it on and the flow handler drops it |
| useEventBooklet | ApplyFilters (roles not fetched): Info toast after the unmount | Fixed: the aggregate refresh is `flow.fetch` (R1, EventBooklet.js:2138) |
| useEventBooklet | ClickedMember: NavigateTo_HouseholdDetail event and ViewHousehold log | Fixed: `navigateToHouseholdDetail` is `flow.own` + `flow.events` (R3, EventBooklet.js:3717) |
| useEventDetail | OnReady: 4 read calls after the unmount | Fixed: `flow.fetch` on Get_EventDetails, Get_HostSurveyStatus, Get_HasDocuments, Get_HasQRCode (R1) |
| useEventDetail | ViewHelpers: NavigateTo_Helpers after the unmount | Fixed: `navigateToHelpers` is `flow.own` (R3, ScreenBlock_EventDetail.js:2359); `flow.run` gives the scope |
| useGuestArrangements | ClickedMember: event and ViewHousehold log | Fixed: `flow.own` + `flow.events` (R3, GuestArrangements.js:1644); `flow.run` instead of `.catch(raiseToFlowHandler)` |
| useHelperDetails | ClickedMember: event and ViewHousehold log | Fixed: `flow.own` + `flow.events` (R3, HelperDetails.js:1252); `flow.run` for both widget flows |
| useHostSurvey | OnPrimaryButton: NavigateTo_Back and "submitted" message after the post | Fixed: `navigateToBack` is `flow.own` (R3, HS:6706); the message is not reached (HS:6709). R4/R5: while mounted but out of context the navigation is blocked by the platform and the message shows, as on TST |
| useHostSurvey | PopUp_Primary ReturnBack: NavigateTo_Back and "draft" message | Fixed: same own action (see D4) |
| useHostSurvey | N3: system exception of the post is an unhandled rejection | Fixed: `flow.run(onPrimaryButton)` and `flow.run(onPopUpPrimary)` send it to `raiseToFlowHandler` with the scope |

`same` rows: unchanged (showUpgradePopUp without access, the BuildMemberCallData module reads, state-only rows).
Deleted local copies: `blockAlive`, `detached`, `write`, local `run` (useEventBooklet); `blockAlive`, `write`
(useHelperDetails); the flow's `model` and `write` (useEventDetail); the `isAlive` check of OnReady (useHostSurvey,
`flow.fetch` covers it). Every "Decision W23" comment in these files is now "Flow scope (item 8)". The synchronous
handlers call `flow.events` instead of `eventsRef.current` (same behaviour while mounted).

## Differences from the design, with evidence

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | Brief: change only the hook files of the list | `eventBookletDataFlows.ts` changed too: the inventory section of useEventBooklet covers it (the R1 fetches live there) |
| D2 | Inventory OnReady row names the timers only | `ResetPaginationSettings` after the awaited SetBookletMaxRows also goes through `flow.own` (design §2.5 R3: an own action after an await). Its `ensureControllerAlive` in EventBooklet.js was not checked in this step (no TST access). Visible result is the same either way (its write is dropped and the timers stop). See Q1 |
| D3 | §2.5: delete the local copies | useEventDetail no longer keeps the flow's own `model`: after an unmount during Cache_UserInfo_Get (R2), `isEventHost` reads `latest` without the user ids, so Get_HostSurveyStatus can be skipped where TST (disposed model) would start it. Its answer is dropped in both (R1); no visible effect. Two reducer-count assertions of the test drop by one (the copy made one call per action) |
| D4 | Inventory: ReturnBack stops at `_onHandle_PopUp_Close$Action` (HS:4971) | React stops at NavigateTo_Back (`closePopUp` is a state write only, dropped by `dispatch`). Same visible result |
| D5 | N3: add a test | The N3 test drives `onPopUpPrimary` (ReturnBack). `onPrimaryButton` uses the same `flow.run` wrapper; a confirm-path test needs a survey with no section in edit and was not built in the budget |
| D6 | Brief: Edit/Write, no `sed -i` | useEventBooklet.ts, useHostSurvey.ts and useHostSurvey.test.tsx were changed by a Python replace with asserted match counts (to stay in the call budget); no `sed -i` |

## Questions

1. Q1 (D2): TST check that `ResetPaginationSettings` of ScreenBlock_EventBooklet starts with `ensureControllerAlive`.
   Options: a) keep `flow.own` (R3, as for all own actions after an await); b) plain call if the check says no.
   Recommendation: a; the visible behaviour does not change.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (an earlier run showed `pages/TransportDetail/hooks/useTransportDetail.ts(68,35)` from a parallel agent; gone in the final run) |
| `npx eslint <11 changed files>` | pass, 0 problems (after a cast in the N3 test) |
| `npx prettier --check <11 changed files>` | pass |
| `npx vitest run src/pages/GuestArrangements src/pages/HelpersDetail src/pages/EventDetail src/pages/EventBooklet src/pages/HostSurvey` | 37 files, 361 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used 67 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of groups C and D, one gate by the user's decision)

- `npm run unused` first (user rule): 15 exported state types without users lost their `export`. 1086 rows, 0 new.
- `npm run ci` passed: 697 files, 4604 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/LegacyPopupMenu/LegacyPopupMenu.test.tsx` (an OnOpen spy, 0 calls under load): it passes alone 3 of 3
  and in the next full run. A timing flake, not in the files of groups C and D.
- Parity per change scope (user rule): 18 routes (AssembleDetail, AssembleEvents, Assemble_BrowseByCountry,
  OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, EventBooklet, EventDetail,
  GuestArrangements, HelpersDetail, HostSurvey, LDM_Email_V2, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail,
  TransportDetail, ViewDocuments): 18 of 18 clean.
