# Item 8, step S3c: group C, Orbit part (5 hooks): build note (2026-10-28)

- Brief: `item8-wave-brief.md`. Design: `../review/item8-solution.md` §2.5, §4, §7.2, §9. Inventory:
  `../review/item8-inventory/group-C.md`. MCP check of group C: `../review/item8-w23-errorpage.md` §5 (DEV = TST;
  Get_EventInformation, Get_AdminEventsList, Get_EventQRCode, Get_EventsByMemberId and Get_HouseholdMembers are
  IDataAction, R1). N1: `../review/item8-w23-errorpage.md` §4, deferred by the user (§9).
- The paths below are relative to `app/src/`.
- Nothing is committed. No `npm run ci`, no full Vitest run and no parity sweep (the orchestrator runs them).

## Files

Hooks (code):

- `pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts`
- `pages/OrbitAdminLanding/hooks/useAdminLanding.ts`
- `pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts` (comment only)
- `pages/OrbitLanding/hooks/useOrbitLanding.ts`
- `pages/QRCodeGenerate/hooks/useGenerateQrCode.ts`

Tests: the `.test.tsx` file next to each of the five hooks.

Docs: none. These folders have no README file, and no other file in them refers to W23. Not changed: platform files
and state files.

## Tests (written first)

The new and rewritten tests ran on the old hooks first: 14 failed, all on the new rule (useAdminEventDetail 6,
useOrbitLanding 5, useAdminLanding 2, useGenerateQrCode 1). Two tests passed on the old hooks by design (see D5).
After the changes: `src/pages/OrbitAdminEventDetail`, `OrbitAdminLanding`, `OrbitLanding` and `QRCodeGenerate` have
19 files and 170 tests, and all pass.

| Hook | New or rewritten tests |
|---|---|
| useAdminEventDetail | R1 Get_EventInformation resolves and rejects after the unmount: no state write, no raise. R3: the scan ends after the unmount, so OnHandle_ScanCode stops (no member read, no check-in, no message, only the LaunchQRCodeScanner audit event). R3: an unprocessable code after the unmount shows no message. R2 then R3: unmount while GetMemberByMemberId is pending, so the check-in still goes out and the flow stops at OnToggle_PopupQRCode (no QRCodeScanned). R2 then R3: unmount while the check-in is pending: no popup, no QRCodeScanned, no state write. R2 + R5: a failed scan after the unmount still shows the scanner message. A live click failure reaches the handler with the scope |
| useAdminLanding | R1 Get_AdminEventsList resolves and rejects after the unmount: no state write, no raise. R2: a card click whose event ends after the unmount still records OnApplicationEvent_ClickEvent (W23 test renamed, unchanged). A live click failure reaches the handler with the scope |
| useNavigateToEventDetail | The W23 test "still navigates after the unmount" is replaced. The hook now runs with the platform navigation (`renderRoutes`): on the current entry it opens OrbitAdminEventDetail. R4: after the user left, it throws `OutOfContextException` and does not navigate |
| useOrbitLanding | R1 GetHouseholdMembers resolves after the unmount: no Get_EventsByMemberId, no GetPopupMeasurements, no state write. R1 Get_EventsByMemberId resolves after the unmount: no scroll, no measurements, no state write. R1 Get_EventsByMemberId rejects after the unmount: no raise. R1: a member refresh that resolves after the unmount sends no SwitchMember. A live member-switch failure reaches the handler with the scope. `getPopupMeasurements` and `scrollContentToTop` are now spies around the real functions |
| useGenerateQrCode | R2: the signed URL resolves after the unmount, so Get_EventQRCode still goes out once with the assigned variables, with no state write (W23 test renamed). R1 Get_EventQRCode resolves and rejects after the unmount: no state write, no raise. R2: a signed URL failure after the unmount still reaches the handler with the scope |

The "no raise" checks use `raisedErrors()`: the spy calls without an `IgnorableSystemException`, as in S1a D2.

## Behaviour changes per hook (each `react-extra` row)

| Hook | Row | Status |
|---|---|---|
| useAdminEventDetail | OnReady/RefreshData: raise after the unmount | Fixed: `flow.fetch` on Get_EventInformation (R1) |
| useAdminEventDetail | OnHandle_ScanCode: UNPROCESSABLE_QR_CODE toast after leaving | Fixed: `onHandleScanCode` is `flow.own` (R3, ScreenBlock_AdminEventDetail.js:935) |
| useAdminEventDetail | GetMemberByMemberId and the signed URL after leaving | Fixed: the same R3 stop at the start of OnHandle_ScanCode |
| useAdminEventDetail | Check-in GetScanEventQRCode | Fixed when the scan ends after leaving (the R3 stop). The check-in still goes out when the flow is already inside OnHandle_ScanCode (R2, :995; tested) |
| useAdminEventDetail | QRCodeScanned audit event | Fixed: `onTogglePopupQRCode` is `flow.own` (R3, :1048). It comes before the audit (:1056) |
| useAdminEventDetail | raise of a system exception (module and R2 paths) | Fixed: `flow.run` gives the scope (R6 in the platform). The AllExceptions catch passes the `ControllerDisposedException` on (`isSystemException`) |
| useAdminLanding | OnReady: raise after the unmount | Fixed: `flow.fetch` on Get_AdminEventsList (R1) |
| useNavigateToEventDetail | GetMilestoneScanFF (`unclear`, N1) | Not ported: the user deferred N1 (`item8-solution.md` §9). The navigation has R4 in `useOsNavigate`. Only the comment changed (see D3) |
| useOrbitLanding | Get_EventsByMemberId after GetHouseholdMembers | Fixed: `flow.fetch` on GetHouseholdMembers (R1) |
| useOrbitLanding | `scrollContentToTop` after a sort | Fixed: `flow.fetch` on Get_EventsByMemberId (R1) |
| useOrbitLanding | GetPopupMeasurements and the cached user information (`.then` of OnReady) | Fixed: both fetches are R1, so the `.then` does not run |
| useOrbitLanding | SwitchMember audit event after the member refresh | Fixed: `flow.fetch` (R1) |
| useOrbitLanding | raise after the unmount (OnReady, member click) | Fixed: `flow.fetch`; `flow.run` for the member click |
| useGenerateQrCode | Get_EventQRCode failure after the unmount | Fixed: `flow.fetch` (R1). A failure of the signed URL module action still reaches the handler, with the scope (R2, R6) |

`same` rows: unchanged in behaviour (the plugin check, ScanBarcode, LaunchQRCodeScanner, the scanner toasts,
OnApplicationEvent_ClickEvent, the Get_EventQRCode call after the module action).

Deleted local copies: `readyStarted`, `newestReadyRun`, and `write` from useAdminEventDetail, useAdminLanding and
useOrbitLanding; `afterUnmount`, `m()` and `set` from useOrbitLanding; the `isAlive` parameter and guard of `assign`
from useGenerateQrCode. Each `.catch(raiseToFlowHandler)` of a widget handler is now `flow.run`. Each "Decision W23"
comment in these files is now "Flow scope (item 8)".

## Differences from the design, with evidence

| # | Design or brief text | What was built, with evidence |
|---|---|---|
| D1 | §2.5: `flow.events` for a block event after an await | useAdminLanding and useOrbitLanding also use `flow.events` for events that come before any await (`same` rows). At click time the block is alive, so the behaviour does not change. The code now uses one R3 model for all events, and `eventsRef` is no longer used |
| D2 | §2.5 (useMessageDetail): the `variables` copy goes away | useGenerateQrCode keeps its own `variables` copy. The signed URL module action runs after the unmount (R2), and Get_EventQRCode still goes out with the assigned variables (inventory `same` row, ScreenBlock_GenerateQRCode.js:792). `dispatch` is a no-op after the unmount, so `latest` would be stale. The copy is no longer a W23 guard |
| D3 | Prompt: do not add the GetMilestoneScanFF branch | Not added. The hook comment said "TST has no server call here … DEV only". That is outdated: the live TST survey has the call (`item8-w23-errorpage.md` §4 N1, `group-C.md` OrbitAdminLanding). The comment now states this, and says that N1 waits. No `useFlowScope` is added: the hook has no await today. The calling block event is R3 (`flow.events`) and the navigation is R4 |
| D4 | — | useAdminEventDetail: an unprocessable code that is scanned after the unmount no longer shows a toast (W23 showed it). This matches TST: the toast node (:1126) is inside OnHandle_ScanCode, after the R3 check (:935) |
| D5 | §7.2: tests first, red | Two new tests passed on the old hooks. The useNavigateToEventDetail R4 test passed because R4 has been in `useOsNavigate` since S0a; the old W23 test passed only because of its mocked navigation. The useAdminEventDetail R2 + R5 test passed because it is a `same` row |

## Questions

None.

## For the orchestrator

- knip: `AdminLandingPatch` (`OrbitAdminLanding/hooks/adminLandingState.ts:25`) and `OrbitLandingPatch`
  (`OrbitLanding/hooks/orbitLandingState.ts:40`) now have no users outside their state files. Their `export` may need
  to go. The state files are not in this step's file list.

## Checks (from `app/`)

| Command | Result |
|---|---|
| `npx tsc --noEmit` | 1 error, in another agent's file: `src/pages/TransportDetail/hooks/useTransportDetail.ts(68,35)`, "Cannot find name 'flow'" (group D, in progress). No errors in this step's files (an earlier run in this step had 0 errors) |
| `npx eslint <10 changed files>` | pass, 0 problems |
| `npx prettier --check <10 changed files>` | pass |
| `npx vitest run src/pages/OrbitAdminEventDetail src/pages/OrbitAdminLanding src/pages/OrbitLanding src/pages/QRCodeGenerate` | 19 files, 170 tests pass; no "Errors" line |
| `npm run arch` | pass, no new violation (144 known) |

The agent used 52 tool calls (budget 70).

## Orchestrator checks (2026-10-28, end of groups C and D, one gate by the user's decision)

- `npm run unused` first (user rule): 15 exported state types without users lost their `export`. 1086 rows, 0 new.
- `npm run ci` passed: 697 files, 4604 tests, no "Errors" line, build OK. One earlier run failed once on
  `components/ui/LegacyPopupMenu/LegacyPopupMenu.test.tsx` (an OnOpen spy, 0 calls under load): it passes alone 3 of 3
  and in the next full run. A timing flake, not in the files of groups C and D.
- Parity per change scope (user rule): 18 routes (AssembleDetail, AssembleEvents, Assemble_BrowseByCountry,
  OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, EventBooklet, EventDetail,
  GuestArrangements, HelpersDetail, HostSurvey, LDM_Email_V2, LDM_EventDetail_V2, LDM_MyEvents_V2, MilestoneDetail,
  TransportDetail, ViewDocuments): 18 of 18 clean.
