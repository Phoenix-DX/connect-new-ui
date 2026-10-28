# Item 8 S1b: group B, Locality_Details blocks, OneSchoolGlobalDetails, Photobook (build note, 2026-10-28)

Brief: `item8-wave-brief.md`. Inventory: `../review/item8-inventory/group-B.md` (rows from
`pages/Locality_Details/hooks/useLocalityDetails.ts` to the end). Design: `../review/item8-solution.md` §2.5, §4, §7.2.
React paths are under `app/src/`. No commit. No platform file changed.

## Files

| File | Change |
|---|---|
| `pages/Locality_Details/hooks/useLocalityDetails.ts` | `flow.fetch` on Get_LocalityDetails (R1); `setLocalityLabel = flow.own(localityLabelOf)` (R3), called only when the route has no LocalityId; `write` and `useReadyOnce` removed |
| `pages/Locality_Details/hooks/useLocalityHouseholdList.ts` | `flow.fetch` on GetLocalityHouseholds (R1); the bookmark reads of OnAfterFetch are after it; `write` and `useReadyOnce` removed |
| `pages/Locality_Details/hooks/useLocalityInterchange.ts` | `flow.fetch` on GetInterchangesByLocalityId (R1); `flow.run` on Handler_NavigateToLocality; `write` and `useReadyOnce` removed |
| `pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts` | `flow.fetch` on Get_OneSchoolGlobal_List (R1); onScrollEnding catch gets the scope; `write` and `useReadyOnce` removed |
| `pages/Locality_Details/hooks/useLocalitySubdivisions.ts` | the same as OneSchoolGlobal (Get_Subdivision_List) |
| `pages/Locality_Details/hooks/readyOnce.ts` | deleted: no file imports it now |
| `pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts` | comment only ("Decision W23" → "Flow scope (item 8)") |
| `pages/Photobook/hooks/usePhotobook.ts` | `flow.fetch` on GetLocalityHouseholdIds (R1); local `readyStarted` and `newestReadyRun` removed |
| `pages/Photobook/hooks/useHouseholdCaption.ts` | `useFlowScope()`; `flow.fetch` on DataActionGetHouseholdCaption (R1); `flow.run` on Handler_ClickedInfo; `mounted` ref removed |
| Tests: `useLocalityDetails.test.tsx`, `useLocalityHouseholdList.test.tsx`, `useOneSchoolGlobalDetails.test.tsx`, `usePhotobook.test.tsx`, `useHouseholdCaption.test.tsx` | the W23 tests are rewritten to the flow-scope rule |
| New tests: `useLocalityInterchange.test.tsx`, `useLocalityOneSchoolGlobal.test.tsx`, `useLocalitySubdivisions.test.tsx` (`pages/Locality_Details/hooks/`) | these hooks had no tests before |

## Tests (written first)

Red run before the hook changes: 12 tests failed, all on `react-extra` rows or on the scope argument of the raise.
Green run after: 15 files, 114 tests (folders `pages/Locality_Details`, `pages/Photobook`, `pages/OneSchoolGlobalDetails`).

- "No raise" means that no error other than the ignorable `ControllerDisposedException` reaches the mocked
  `raiseToFlowHandler` (a `raisedErrors()` filter). The real handler ignores that exception (`legacy/os/exceptions.ts:83`).
  This is the same pattern as `platform/navigation/flowScope.test.tsx:180`.
- Per hook: "unmount while the R1 call is pending, the call answers: no state write, no raise". Also "the call fails:
  no state write, no raise".
- R2 path (Interchange): "unmount while HasAccessToRegion is pending, no access: the upgrade pop-up still shows; no
  navigation; no raise".
- R3 path (Locality_Details): "no LocalityId, unmount while GetUserInformation_Wrapper is pending: Action_SetLocalityLabel
  stops the flow; no Get_LocalityDetails call, no state write". "With a LocalityId: the request still starts with the
  initialized variables; no state write".
- A failure while mounted reaches the flow handler with a scope (`toHaveBeenCalledWith(error, expect.anything())`).
- StrictMode tests (one OnReady, one call) are kept and pass with the once-guard of `useFlowState`.

## Behaviour changes per hook (`react-extra` rows)

| Hook | Row | Result |
|---|---|---|
| useLocalityDetails | OnReady after `getUserInformation`, LocalityId = 0 | Fixed: `flow.own` stops the flow at Action_SetLocalityLabel (R3, Locality_Details.js:1426-1431). Before, Get_LocalityDetails was still called |
| useLocalityDetails | OnReady, LocalityId <> 0 | `same`, kept: the request starts and `flow.fetch` drops the answer (R1) |
| useLocalityDetails | refreshLocalityDetails failure | Fixed: `flow.fetch` (R1, :1158) |
| useLocalityHouseholdList | bookmark reads after the fetch | Fixed: they are after `flow.fetch` and do not run after an unmount (R1, :346, :354) |
| useLocalityHouseholdList | OnReady failure | Fixed: `flow.fetch` |
| useLocalityInterchange | OnReady failure | Fixed: `flow.fetch` (R1, :237) |
| useLocalityInterchange | navigateToLocality → `navigate` | Fixed by the platform: `useOsNavigate` blocks out of context (R4, :304). The hook only uses `flow.run`. The hook test mocks `useOsNavigate`; `osNavigate.test.tsx` covers the block |
| useLocalityOneSchoolGlobal | OnReady failure, onScrollEnding failure | Fixed: `flow.fetch` in `refresh` (R1, :338) |
| useLocalitySubdivisions | OnReady failure | Fixed: `flow.fetch` (R1, :437) |
| useLocalitySubdivisions | onScrollEnding failure | Fixed in code (`flow.fetch` in `refresh`). Not reachable: nothing sets IsPaginated (`localityBlocksState.ts:87`); a test pins the no-op |
| useHouseholdCaption | failure raise after the unmount | Fixed: `flow.fetch` (R1, Photobook_Options_Left.js:494) |

`same` rows (useOneSchoolGlobalDetails, usePhotobook, useHouseholdCaption state writes): no behaviour change.

## Differences from the design, with evidence

1. `onScrollEnding` of OneSchoolGlobal and Subdivisions does not use `flow.run`. The list waits for the returned
   promise (`components/OneSchoolGlobal_List.tsx:53`, `components/Locality_Subdivisions.tsx:54`), and `flow.run`
   returns `void` (`platform/navigation/flowScope.ts:32`). The hooks use
   `onScrollEnding().catch((e) => { raiseToFlowHandler(e, flow); })`: the same handling as `flow.run`, and the promise
   is kept. A test checks that the promise resolves after an unmount.
2. useLocalityDetails: `userLocalityLabel` is `''` when the route has a LocalityId. `initializeScreen` reads it only
   for the user's own locality (`localityDetailsState.ts:84-90`). The state does not change.
3. usePhotobook is `same` in the inventory, but brief rule 2 removes the local `readyStarted` and `newestReadyRun`.
   The behaviour is the same, and the old tests pass with only the "no raise" filter.
4. useOneSchoolGlobalDetails has no `flow.fetch`. It is a query hook. Design §2.6 says R1 holds through the
   query-cache subscription (`platform/feedback/flowErrors.ts`).
5. `docs/refactor/graph.json` still lists `readyOnce.ts`. It is a generated file and is not in my file list.

## Questions

Q1. A promise-returning flow for list events (`onScrollEnding`). (a) Keep the explicit catch with the scope, as done
here. (b) Add a variant of `flow.run` to `FlowScope` that returns the promise (a platform change, S5). Recommendation:
(a) now. Choose (b) in S5 only if groups A, C and D have the same need.

## Checks (from `app/`)

- `npx tsc --noEmit`: exit 0, no errors.
- `npx eslint` (16 changed files): clean. `npx prettier --check`: all files formatted.
- `npx vitest run src/pages/Locality_Details src/pages/Photobook src/pages/OneSchoolGlobalDetails`: 15 files,
  114 tests passed, no "Errors" line.
- `npm run arch`: no dependency violations (144 known ignored).
- Not run, as the brief says: the full vitest, `npm run ci`, `npm run unused`, the parity sweep.

## Orchestrator checks (2026-10-28, end of group B)

- knip: the hooks no longer use 9 exported state-action types; the orchestrator removed their `export`, removed the
  unused `FlowScope` type export of `platform/navigation/index.ts`, and deleted 2 stale baseline rows
  (`CountryListFlows`, `ReadyOnce`). 1087 rows, 0 new.
- `npm run ci` passed: 693 files, 4506 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/PopupMenu/PopupMenu.test.tsx` ("closes on a second anchor click and on dx-before-navigation", 48 ms):
  it passes alone 3 of 3 and in the next full run. A timing flake under load, not in group B files.
- Parity sweep of the 64 routes on port 5174 (end of group B, user rule of 2026-10-28): 64 of 64 clean.
- Questions S1a Q1, Q2 and S1b Q1 go to the user with the group report.
