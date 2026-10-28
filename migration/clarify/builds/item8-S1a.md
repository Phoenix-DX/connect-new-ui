# Item 8, step S1a: group B, first half (7 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-B.md`. MCP check of group B: `../review/item8-w23-errorpage.md` §5 (DEV = TST).
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `containers/HouseholdDetails/hooks/useHouseholdDetails.ts`
- `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts`
- `pages/BrowseCountries/hooks/useBrowseCountries.ts`
- `pages/BrowseDirectory/hooks/useBrowseDirectory.ts`
- `pages/CountryList/hooks/useCountryList.ts`
- `pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts` (comment only)
- `pages/Household_Relations/hooks/useHouseholdRelations.ts`

Tests: `containers/HouseholdDetails/hooks/useHouseholdDetails.test.tsx` (new: the hook had no test file), and the
`.test.tsx` file next to each of the six other hooks.

Docs: `containers/SupperMeetingDetails/README.md` (the W23 paragraph is now "Flow scope (item 8)").

Not changed: platform files, `HouseholdDetailsContainer.tsx` (`onNonMemberClick` is in the hook).

## Tests (written first)

Before the hook changes, 17 tests failed, all on the new rule: 8 R1 tests (a failure after the unmount still
reached the handler; OnParametersChanged still started the refreshes), 4 R4 tests (the raise had no scope), 1 R3 timer
test, 1 R3 event-handler test, 3 assertions of the scope argument. After the changes: 24 files, 181 tests pass.

| Hook | New or rewritten tests |
|---|---|
| useBrowseCountries | R1 resolve and reject after the unmount (no state write, no raise); R2 popup after the unmount; R4 leave, then access: no navigation, `OutOfContextException` with the scope |
| useBrowseDirectory | R1 resolve and reject after the unmount; R3 unmount in the tick of OnInitialized: no map action; R4 row click after leaving; R2 popup after the unmount |
| useCountryList | R1 resolve and reject after the unmount (the catch does not bubble a user exception); new click test (access, popup); R2 popup after the unmount; R4 leave, then access |
| useHouseholdRelations | R1 failure of Get_MemberDetails and of Get_ParentHouseholdDetails after the unmount; R2 popup after the unmount; R4 OnClick_Member after leaving |
| useSupperMeetingDetails | the two W23 tests renamed to R1; the F1 test expects the scope argument |
| useHouseholdDetails (new file) | live OnInitialize; R1 GetHousehold resolve after the unmount (no event); R1 both failures after the unmount; R1 OnParametersChanged after the unmount (no `skeletonOnlyEnded`, no new refreshes); R3 Handler_NonMemberOnClick after the unmount: no navigation; R2 popup after the unmount; live click and failure with the scope |
| useHouseholdCarousel | the W23 test renamed to R2 (module action), unchanged |

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useHouseholdDetails | refreshHousehold, refreshCoordinates failure | Fixed: `flow.fetch` (R1); the "Refreshes" node uses `flow.run` (raise with the scope) |
| useHouseholdDetails | OnParametersChanged after the preview refresh | Fixed: `flow.fetch` stops the flow after the unmount |
| useHouseholdDetails | onNonMemberClick → navigate | Fixed: `onNonMemberHouseholdClick` is `flow.own` (R3, HouseholdDetails_Block.js:1745-1750); the click uses `flow.run`. The event `onHouseholdDataFetched` goes through `flow.events` |
| useBrowseCountries | OnReady failure raise | Fixed: `flow.fetch` |
| useBrowseCountries | statisticsListClicked → navigate | Fixed: R4 in `useOsNavigate` (platform); `flow.run` gives the scope |
| useBrowseDirectory | OnReady failure raise | Fixed: `flow.fetch` |
| useBrowseDirectory | statisticsListClicked → navigate | Fixed: R4 (platform); `flow.run` for the row and the map popup link |
| useBrowseDirectory | onMapInitialized timer | Fixed: Action_InvalidateMapSize is `flow.own` (R3); the two `raiseToFlowHandler` calls pass the scope |
| useCountryList | OnReady failure raise | Fixed: `flow.fetch`; `ControllerDisposedException` is a system exception, so the catch passes it on unchanged |
| useCountryList | statisticsClicked → navigate | Fixed: R4 (platform); `flow.run` |
| useHouseholdRelations | member, siblings failure raise | Fixed: `flow.fetch` in `refresh`; the `isAlive` parameters of the three refresh helpers are gone; the event uses `flow.events` |
| useHouseholdRelations | onClickMember → navigate | Fixed: R4 (platform); `flow.run` |

`same` rows: unchanged in behaviour. Deleted local copies: `readyStarted`, `newestReadyRun`, `write` (BrowseCountries,
BrowseDirectory, CountryList, SupperMeetingDetails) and `raiseLive` (SupperMeetingDetails). Every "Decision W23"
comment in these files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design text | Built, with evidence |
|---|---|---|
| D1 | §7.2: "the navigation stops" in a hook test | The hook tests mock `useOsNavigate`. A hoisted switch gives the hook the platform navigation, and the R4 tests use `renderRoutes` (`platform/navigation/testRouter.tsx`) to leave the entry. Tests only |
| D2 | §7.2: "no raise" | The raise spy gets the `ControllerDisposedException` or `OutOfContextException` that the real handler ignores (`legacy/os/exceptions.ts:83`), as in S0a test 3. The tests check that no other error reaches it (`raisedErrors()`) |
| D3 | §2.5: own action after an await → `flow.own` | OnReady of useHouseholdRelations and useHouseholdDetails keeps `if (!isAlive()) return` after GetUserInformation_Wrapper (inventory `same`; brief: `same` rows stay). Result as TST: nothing after the unmount |
| D4 | — | useHouseholdDetails keeps `isAlive` in `refreshHousehold` and `refreshCoordinates`: it guards a superseded OnParametersChanged run (open point 5 (a)) |
| D5 | — | useHouseholdCarousel: comment only (prompt). Its `unmounted` ref stays; no `useFlowScope` (see Q1) |

## Questions

1. Q1: useHouseholdCarousel keeps a local `unmounted` ref (a copy of `flow.alive`) and `void handlerEventMoved(…)`.
   Options: a) the cleanup step S5 changes it to `useFlowScope()` and `flow.run`; b) keep it. Recommendation: a.
2. Q2: the `isAlive` check after a module action in OnReady (D3). Options: a) in S5, when OnReady gets `flow`, use
   `flow.own` on Action_Refresh_Get_MemberDetails and the "Refreshes" node; b) keep the check. Recommendation: a.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (whole project, with the parallel agent's files at that time) |
| `npx eslint <14 changed code files>` | pass, 0 problems |
| `npx prettier --check <15 changed files>` | pass after `--write` on `useBrowseCountries.ts` and `useCountryList.ts` |
| `npx vitest run <the 7 hook folders>` | 24 files, 181 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used about 88 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of group B)

- knip: the hooks no longer use 9 exported state-action types; the orchestrator removed their `export`, removed the
  unused `FlowScope` type export of `platform/navigation/index.ts`, and deleted 2 stale baseline rows
  (`CountryListFlows`, `ReadyOnce`). 1087 rows, 0 new.
- `npm run ci` passed: 693 files, 4506 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/PopupMenu/PopupMenu.test.tsx` ("closes on a second anchor click and on dx-before-navigation", 48 ms):
  it passes alone 3 of 3 and in the next full run. A timing flake under load, not in group B files.
- Parity sweep of the 64 routes on port 5174 (end of group B, user rule of 2026-10-28): 64 of 64 clean.
- Questions S1a Q1, Q2 and S1b Q1 go to the user with the group report.
