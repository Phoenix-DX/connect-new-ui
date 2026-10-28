# Item 8, step S4b: group D, second half (8 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-D.md`. MCP check of group D: `../review/item8-w23-errorpage.md` §5 (DEV = TST on
  every data action). Finding N5: `../review/item8-w23-errorpage.md` §4.
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `pages/LDM_Email_V2/hooks/useLdmEventEmail.ts`
- `pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts`
- `pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts`
- `pages/MilestoneDetail/hooks/useAccommodationHost.ts`
- `pages/MilestoneDetail/hooks/useMilestoneBlock.ts`
- `pages/MilestoneDetail/hooks/useMilestoneWrapper.ts`
- `pages/TransportDetail/hooks/useTransportDetail.ts`
- `pages/ViewDocuments/hooks/useViewDocuments.ts`

Tests: the `.test.tsx` file next to each of the eight hooks.

Docs: no README in these folders refers to W23. Not changed: platform files, the state files of the hooks, the page
files.

## Tests (written first)

The new and rewritten tests ran on the old hooks first: 23 tests failed, all on the new rule (LDM_Email 4,
LDM_EventDetail 5, LDM_MyEvents 5, AccommodationHost 3, MilestoneBlock 3, MilestoneWrapper 1, TransportDetail 1,
ViewDocuments 1). After the changes, three more assertions of a late answer expected "no call of the flow handler";
they now accept only the ignorable `ControllerDisposedException` (see D2). Final run: 6 hook folders, 18 files,
230 tests pass; the 6 page folders, 35 files, 342 tests pass.

| Hook | New or rewritten tests |
|---|---|
| useLdmEventEmail | R1 GetCoordinatorDetails answer after the unmount (no UserInfo read, no state write, nothing raised); R1 its failure after the unmount; R1 TryAgain failure after the unmount (new); R2 + R4 EventContact answers after the user left (`renderRoutes`): audit event, application event, message timer and AllowUpcomingNavigation run, no back navigation, `OutOfContextException` with the scope |
| useLdmEventDetail | R1 GetEventByEventId answer after the unmount (no RequestAPI audit event); R1 its failure after the unmount; R2 + R3 GetHouseholdCoordinates after the unmount (audit event runs, NavigateTo_WebMaps does not); R3 subscription checks after the unmount (audit event runs, no carousel preload, no event) (new); F40 race test: no audit event in total (see D3) |
| useLdmMyEvents | R1 timeline answer after the unmount (no audit event); R1 its failure (no UnknownError); R1 new filters, ResetFilters and SwipeUp after the unmount (new: no filter audit events, no raise) |
| useAccommodationHost | R1 GetAccommodationHost after the unmount (no Get_Document call); R1 Get_Document failure after the unmount (new); R2 + R3 CheckDirectoryAccess after the unmount (no event, no ViewHousehold); R2 no access after the unmount: the upgrade popup shows (new); the module-action test renamed, unchanged |
| useMilestoneBlock | R1 data action after the unmount (no GetCaptions); R1 GetCaptions failure after the unmount; R2 + R3 CheckDirectoryAccess after the unmount (all new); the GetCaptions failure test expects the scope argument |
| useMilestoneWrapper, useTransportDetail, useViewDocuments | the W23 tests renamed to R1; a failure after the unmount reaches the handler only as `ControllerDisposedException` |

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useLdmEventEmail | OnReady / TryAgain failure: raise after leaving | Fixed: `flow.fetch` (R1); TryAgain uses `flow.run` |
| useLdmEventEmail | SubmitEmail → `navigateBack()` | Fixed: R4 in `useNavigateBack` (platform); `flow.run` gives the scope. The audit events, the message timer (R5) and AllowUpcomingNavigation still run (`same` rows) |
| useLdmEventDetail | OnReady → RequestAPI_EventDetail audit after the unmount | Fixed: `flow.fetch` (R1) on GetEventByEventId; GetCoordinatorDetails too |
| useLdmEventDetail | OnReady failure: raise after leaving | Fixed: `flow.fetch` (R1) |
| useLdmEventDetail | GoToHousehold → setPreloadObject (inventory: unclear, closed by N5) | Fixed: the preload moves into the new own action NavigateTo_HouseholdCarousel (`flow.own`, R3), after the audit event (see D4) |
| useLdmEventDetail | GoToHousehold → onNavigateToHouseholdCarousel | Fixed: `flow.own` + `flow.events` (R3) |
| useLdmEventDetail | HostCardAddress → onNavigateToWebMaps | Fixed: `flow.events` (R3); it is the last step, so nothing else runs |
| useLdmMyEvents | GetMyTimelineData → RequestAPI_CalendarEvents audit | Fixed: `flow.fetch` (R1) in RefreshGetEventsForMyTimeline |
| useLdmMyEvents | GetMyTimelineData / SwipeUp failure: raise after leaving | Fixed: `flow.fetch`. `ControllerDisposedException` is a system exception, so the catch passes it on unchanged (no UnknownError) |
| useLdmMyEvents | MyTimelineFilter → MyTimelineApplyFilter; ResetFilters → MyTimelineClearFilter | Fixed: the flow stops at the R1 fetch inside GetMyTimelineData |
| useAccommodationHost | OnReady → Get_Document call after the unmount | Fixed: `flow.fetch` (R1) on both data actions; the `isReadyAlive` checks are gone |
| useAccommodationHost | ClickedMember → event and ViewHousehold log | Fixed: own action NavigateTo_HouseholdDetail (`flow.own`, R3) stops the flow before the log; the no-access popup still shows (R2) |
| useMilestoneBlock | ClickedMember → event and ViewHousehold log | Fixed: the same own action (`flow.own`, R3) |
| useMilestoneWrapper, useTransportDetail, useViewDocuments | no `react-extra` row | Local guards removed (`isAlive` checks, the `write` copy of ViewDocuments); the data action is in `flow.fetch` (R1), so a late failure no longer reaches the handler with its error |

`same` rows: unchanged in behaviour. Deleted local copies: `started` and `alive` (LDM_Email, LDM_MyEvents);
`readyStarted` and `newestReadyRun` (LDM_EventDetail); `readyIsAlive` (AccommodationHost, MilestoneBlock); `write` in
LDM_Email, LDM_EventDetail, LDM_MyEvents, AccommodationHost, MilestoneBlock and ViewDocuments. Every
`.catch(raiseToFlowHandler)` and `void …` of a widget handler in these hooks is now `flow.run`, except the four
LDM_MyEvents handlers that return a promise (D1). Every block event uses `flow.events`. Every "Decision W23" comment in
these files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design or brief text | Built, with evidence |
|---|---|---|
| D1 | Brief: a widget handler uses `flow.run` | useLdmMyEvents: `onScrollEnding`, `onSwipeUp`, `onMyTimelineFilter` and `onResetFilters` return the promise that the timeline waits for (`LdmMyEventsFlows`), and `flow.run` returns `void`. They use `.catch((e) => raiseToFlowHandler(e, flow))`, which is what `flow.run` does (`platform/navigation/flowScope.ts` `run`) |
| D2 | §7.2 "no raise" | As in S1a D2: after the unmount the handler gets `ControllerDisposedException`, which it ignores. The tests check that no other error reaches it (`raisedErrors()`), or that each call is that exception |
| D3 | Decision W36 (`migration/refactor/auto-decisions-2026-10-22.md:123`): one RequestAPI audit event per forward visit | When the user leaves before the GetEventByEventId answer, the forward flow now stops at the answer (R1), and the restored re-run sends no audit event (F40). The visit sends none. TST sends none too: R1 drops the answer, and OnReady of a restored view does nothing (`../flows/Legacy_LDMEventsFlow_V2/report.md:135`, ED :2007-2008). The F40 race test now expects 0 audit events |
| D4 | — | useLdmEventDetail GoToHousehold: SetPreloadObject now runs after the audit event, inside NavigateTo_HouseholdCarousel. TST order: the audit (EventDetail_V2.js:1582), then `navigateTo_HouseholdCarousel$Action` (1586), whose screen handler sets the preload (N5). The preload stays in the hook (the page file is not in this step) |
| D5 | Brief: "Use Edit/Write (no `sed -i`)" | As in S2b D1: the edits used a short Python script with exact-text replacements; each one asserted a single match. No `sed -i` |
| D6 | — | The sync catch of `onClickOpenDocument` (AccommodationHost) and `onDocumentClick` (ViewDocuments) keeps `raiseToFlowHandler(e)` without the scope: no await, and a ViewDocuments test asserts the one-argument call |

## Questions

None.

## For the orchestrator

- knip: these exported types may now be unused outside their state file: `LdmEventDetailPatch`
  (`ldmEventDetailState.ts`), `LdmMyEventsAction` (`ldmMyEventsState.ts`), `AccommodationHostAction`
  (`accommodationHostState.ts`), `MilestoneBlockAction` (`milestoneBlockState.ts`), `ViewDocumentsPatch`
  (`viewDocumentsState.ts`). `LdmEventEmailAction` is still used by `ldmEventEmailState.test.ts`. The state files are
  not in this step's file list.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass, 0 errors (whole project, with the parallel agents' files at that time) |
| `npx eslint <16 changed files>` | pass, 0 problems (after one fix in `useViewDocuments.test.tsx`) |
| `npx prettier --check <16 changed files>` | pass after `--write` |
| `npx vitest run <the 6 hook folders>` | 18 files, 230 tests pass; no "Errors" line |
| `npx vitest run <the 6 page folders>` | 35 files, 342 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used about 60 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of groups C and D, one gate by the user's decision)

- `npm run unused` first (user rule): 15 exported state types without users lost their `export`. 1086 rows, 0 new.
- `npm run ci` passed: 697 files, 4604 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/LegacyPopupMenu/LegacyPopupMenu.test.tsx` (an OnOpen spy, 0 calls under load): it passes alone 3 of 3
  and in the next full run. A timing flake, not in the files of groups C and D.
- Parity per change scope (user rule): 18 routes (AssembleDetail, AssembleEvents, Assemble_BrowseByCountry,
  OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, EventBooklet, EventDetail,
  GuestArrangements, HelpersDetail, HostSurvey, LDM_Email_V2, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail,
  TransportDetail, ViewDocuments): 18 of 18 clean.
