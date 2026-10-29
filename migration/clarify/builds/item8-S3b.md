# Item 8, step S3b: group C, Assemble filter and list blocks (4 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-C.md`. MCP check of group C: `../review/item8-w23-errorpage.md` §5 (DEV = TST;
  GetAssembleEventTypes, GetAssembleMeetingSummaryList and GetSubdivisionName are IDataAction, R1).
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `pages/AssembleEvents/hooks/useAssembleEvents.ts`
- `pages/AssembleEvents/hooks/useAssembleFilterSheet.ts`
- `pages/AssembleEvents/hooks/useAssembleSummaryList.ts`
- `pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts`

Tests: the `.test.tsx` file next to each of the four hooks, and the page test `pages/AssembleEvents/AssembleEvents.test.tsx`
(its W23 test asserted the calls after leaving; see D5).

Docs: no README in these folders. Not changed: platform files, the state files of the hooks.

## Tests (written first)

The new and rewritten tests ran on the old hooks first: 10 failed, all on the new rule (useAssembleEvents 1,
useAssembleSummaryList 4, useAssembleFilterSheet 2, useAssembleFilter 3). The other new tests cover `same` rows (module
actions) or state writes that W23 already skipped, so they pass on both. After the changes: 2 page folders, 13 files,
86 tests pass.

| Hook | New or rewritten tests |
|---|---|
| useAssembleEvents | the W23 test is now three: R1 GetSubdivisionName answer after the unmount (no name, no raise); R1 failure after the unmount (no raise); GetCacheableUserInfo (module) fails after the unmount: the user exception still goes to the flow handler with the scope |
| useAssembleFilterSheet | the W23 test is now three: R3 unmount while GetCacheableUserInfo is pending (FetchCountries does not start: no Cache_UserInfo_Get, no GetCacheableRegionSubscribedCountries, no state write, no raise); module answer of the countries after the unmount (no state write, no raise); HasAccessToRegion after the unmount (ConfirmAction still opens once; an access writes no state). New: a failed country click goes to the flow handler with the scope |
| useAssembleSummaryList | the W23 test is now four: R3 unmount while OnReady waits for the user (neither refresh starts); R1 answers of both data actions after the unmount (no state write, no raise); R1 failures after the unmount (no raise, no state write); R1 failure of the next page after the unmount. The "failed call" test also expects the scope argument |
| useAssembleFilter | the three W23 tests rewritten: R3 unmount while GetCacheableUserInfo is pending (FetchCountries does not start); module failure of the countries after the unmount (user exception still raised, with the scope, no state write); HasAccessToRegion after the unmount (ConfirmAction once, no state write, no raise). New: a failed country click goes to the flow handler with the scope. The FreeSubscriptionAlert test also expects the scope argument |
| AssembleEvents (page) | the W23 test is now R3: leave while OnReady waits for the user: only ActionGetUserInformation goes out; GetAssembleEventTypes, GetAssembleMeetingSummaryList and ActionGetCountriesBySubscription do not start |

The "no raise" checks use `raisedErrors()` (the spy calls without `IgnorableSystemException`), as in S1a D2.

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useAssembleEvents | OnReady raise after the unmount (R1 path; system exception only on the module path) | Fixed: `flow.fetch` on GetSubdivisionName (R1). On the module path the raise goes with the scope (`useFlowState`), so a system exception of a left screen opens no error page (R6) |
| useAssembleFilterSheet | OnReady → FetchCountries reads after the unmount | Fixed: FetchCountries is `flow.own` (R3, Assemble_FilterSheet.js:800) |
| useAssembleFilterSheet | OnReady raise from FetchCountries | Fixed: the R3 stop throws `ControllerDisposedException`; the flow handler drops it |
| useAssembleFilterSheet | onChangeSearchTerm raise (system exception only) | Fixed: `flow.run` gives the scope (R6) |
| useAssembleFilterSheet | goToBrowseCountry raise (system exception only) | Fixed: `flow.run` gives the scope (R6) |
| useAssembleSummaryList | OnReady → GetAssembleEventTypes call after the unmount | Fixed: refreshEventTypes is `flow.own` (R3, AssembleSummary_List.js:1565) |
| useAssembleSummaryList | OnReady → GetAssembleMeetingSummaryList call after the unmount | Fixed: refreshSummaryList is `flow.own` (R3, :1504) |
| useAssembleSummaryList | raise after R1 (OnReady, filter, Clear, tag, paging) | Fixed: `flow.fetch` on both data actions (R1, :658, :686); the widget handlers use `flow.run` |
| useAssembleFilter | OnReady → FetchCountries reads after the unmount | Fixed: FetchCountries is `flow.own` (R3, ScreenBlock_Assemble_Filter.js:1033) |
| useAssembleFilter | OnReady raise | Fixed: as useAssembleFilterSheet |
| useAssembleFilter | onChangeSearchTerm raise (system exception only) | Fixed: `flow.run` (R6) |
| useAssembleFilter | goToBrowseCountry raise (system exception only) | Fixed: `flow.run` (R6) |

`same` rows: unchanged in behaviour (GetCacheableUserInfo, Cache_UserInfo_Get, GetCacheableRegionSubscribedCountries,
HasAccessToRegion and ConfirmAction run after the unmount; the state writes after them are no-ops). Deleted local copies
in all four hooks: `readyStarted`, `newestReadyRun`, `write`. Every `.catch(raiseToFlowHandler)` of a widget handler is
now `flow.run`, also `onFreeSubscriptionAlert` (no inventory row; the same rule). Every "Decision W23" comment in these
files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design or brief text | Built, with evidence |
|---|---|---|
| D1 | Brief: "Use Edit/Write (no `sed -i`)" | The edits used a short Python script with exact-text replacements; each one asserted a single match, as the Edit tool does (as S2b D1). No `sed -i` |
| D2 | §2.5: an own action after an await is `flow.own` | In OnReady of useAssembleSummaryList the two refreshes start in `flow.run(async () => refresh…())`. `flow.own` throws at once (not as a rejection), and `run` calls `flow().catch(…)` (`platform/navigation/flowScope.ts`, `run`), so a direct `flow.run(() => refresh…())` would let the throw escape after the unmount. The `async` arrow turns it into a rejection. See Q1 |
| D3 | — | Refresh_EventList (an own action on TST) is not `flow.own`: only the tag, Apply and Clear handlers call it, with no await before it, so the block is alive at the call. The refresh inside it is `flow.own` |
| D4 | §2.5: a block event after an await uses `flow.events` | onCancel, onApply (NavigateToSubdivision) and onClickMeeting (NavigateTo_AssembleDetail) keep `eventsRef.current`: a widget handler calls them with no await before it (not an inventory row) |
| D5 | Brief: change only the hook files, their tests and README files | `pages/AssembleEvents/AssembleEvents.test.tsx` (a page test of these hooks) asserted the W23 calls after leaving. Its assertion now expects the R3 result (brief step 4: update assertions that still expect W23 behaviour). Test only |

## Questions

1. Q1: `flow.run` and a synchronous throw (D2). An own action (`flow.own`) throws at once after the unmount, and
   `flow.run` does not catch a synchronous throw. Options: a) a platform step (or S5) makes `run` also send a
   synchronous throw to the flow handler, so `flow.run(() => ownAction())` is safe; b) keep the author rule (an
   `async` arrow around an own action) and add it to the page template. Recommendation: a.

## For the orchestrator

- knip: these exported types are now used only in their state files: `AssembleFilterSheetPatch`
  (`assembleFilterSheetState.ts`), `AssembleSummaryListAction` (`assembleSummaryListState.ts`), `AssembleFilterPatch`
  (`assembleFilterState.ts`). The state files are not in this step's file list.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | 0 errors in these files. 4 errors in `pages/AssembleDetail/hooks/useAttendeeSubdivision.ts` (TS7022/TS7023, `latest`, `flow`, `setSelectedAssembleAttendeeListBookmarks`, `onParametersChanged`): a file of a parallel agent, in progress. Not fixed |
| `npx eslint <9 changed files>` | pass, 0 problems |
| `npx prettier --check <9 changed files>` | pass after `--write` on `useAssembleSummaryList.ts` and `useAssembleEvents.test.tsx` |
| `npx vitest run src/pages/AssembleEvents src/pages/Assemble_BrowseByCountry` | 13 files, 86 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used 25 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of groups C and D, one gate by the user's decision)

- `npm run unused` first (user rule): 15 exported state types without users lost their `export`. 1086 rows, 0 new.
- `npm run ci` passed: 697 files, 4604 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/LegacyPopupMenu/LegacyPopupMenu.test.tsx` (an OnOpen spy, 0 calls under load): it passes alone 3 of 3
  and in the next full run. A timing flake, not in the files of groups C and D.
- Parity per change scope (user rule): 18 routes (AssembleDetail, AssembleEvents, Assemble_BrowseByCountry,
  OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, EventBooklet, EventDetail,
  GuestArrangements, HelpersDetail, HostSurvey, LDM_Email_V2, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail,
  TransportDetail, ViewDocuments): 18 of 18 clean.
