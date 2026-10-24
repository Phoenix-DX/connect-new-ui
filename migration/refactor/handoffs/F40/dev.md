# Dev · F40 · Restored view without data: one rule for every hook

## Result

Status: **pass**. Mode `new`, worktree branch `rf/fix-F40`. No commit.

The 4 hooks follow one rule now: a restored view calls again only when its saved state does not have the fetched
result. A restored view with the result makes no call (as before).

| Hook | Old skip check | New skip check |
|---|---|---|
| `useLdmEventDetail` | `restored && savedAtMount` (isSaved: any assignment, e.g. the coordinator answer) | `restored && !latest.current.isFetching` (GetEventByEventId answered) |
| `useAdminLanding` | `restored && hasStarted(latest)` (fetching or fetched) | `restored && latest.current.isDataFetched` |
| `useAdminEventDetail` | `restored && latest !== INITIAL` (identity) | `restored && latest.current.isDataFetched` |
| `useOrbitLanding` | `restored && latest !== INITIAL` (identity) | `restored && latest.current.isEventsDataFetched` |

- F40-a (LDM): `onReady(restored)` sends `addAuditEvent_LDM('RequestAPI_EventDetail')` only when `restored` is
  false. The restored re-run makes the same calls and writes. A forward visit is unchanged (fetch, then the audit). A
  forward flow that fails before the audit sends no audit (as before), and the restored re-run sends none either.
- F40-b (Orbit): only the skip check changed. OrbitLanding's filter, sort and year reset (`RESET_FILTERS_AND_SORT`)
  still runs only in `refreshGetEventsByMemberId`. A re-run happens only when the events answer is not in the saved
  state. Then the popups cannot have been used (`canTogglePopup` needs `!isFetchingData`), so the re-run resets no
  filter or sort that the user set.
- Each changed hook has the comment line "restored without data: call again (F40; OutSystems keeps the skeleton)".
  The JSDoc of each hook says what a restored view does. `@origin` tags are unchanged.
- `hasStarted` (adminLandingState.ts) had no other user, so I removed it with its unit test. The new restored-view
  tests in `useAdminLanding.test.tsx` replace that test (rule 8).
- Not changed: no shared helper (the brief says so), `flowState.ts`, the views, the `*State.ts` reducers, mocks and
  fixtures.

## Files changed

| File | Change |
|---|---|
| `app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts` | skip check on `isFetching`; audit only when `!restored`; removed the `savedAtMount` ref; JSDoc |
| `app/src/pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.test.tsx` | 3 new tests, 1 assertion added to an existing test |
| `app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.ts` | skip check on `isDataFetched`; removed the `hasStarted` import; JSDoc |
| `app/src/pages/OrbitAdminLanding/hooks/adminLandingState.ts` | removed `hasStarted` (no user left) |
| `app/src/pages/OrbitAdminLanding/hooks/adminLandingState.test.ts` | removed the `hasStarted` test and import (replaced by the hook tests below) |
| `app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.test.tsx` | view-cache mock (copied from the LDM test); 2 new tests |
| `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts` | skip check on `isDataFetched`; JSDoc |
| `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.test.tsx` | view-cache mock; 2 new tests |
| `app/src/pages/OrbitLanding/hooks/useOrbitLanding.ts` | skip check on `isEventsDataFetched`; comment and JSDoc |
| `app/src/pages/OrbitLanding/hooks/useOrbitLanding.test.tsx` | view-cache mock; 2 new tests |
| `migration/refactor/handoffs/F40/dev.md` | this report |

## Tests

New:

- LDM: "F40: left after the coordinator answer and before the event, back". The forward visit sends 1 audit (after
  the unmount, W23). The restored view fetches both again and shows the event. The total stays at 1 audit. Before
  this change, this saved state (`isSaved` true, no event) kept the loader for good.
- LDM: "F40: a restored view after a failed GetEventByEventId fetches again, without the audit event".
- LDM: "F40: a failure of the restored re-run sets HasFetchError and goes to the flow handler, without an audit event".
- AdminLanding, AdminEventDetail, OrbitLanding: "F40: a view left before the answer and restored runs OnReady
  again". Forward visit with a pending answer, then unmount, then a restored render with the saved state. The test
  checks: one call (for OrbitLanding, one members call and one events call), the skeleton clears, data shown, no
  audit event.
- AdminLanding, AdminEventDetail: "a view restored with the ... keeps it and makes no call".
- OrbitLanding: "a view restored with the events keeps the filter and sort that the user set and makes no call".

Changed:

- `useLdmEventDetail.test.tsx` › "a restored view that was left before the first assignment fetches again": added
  `expect(addAuditEvent_LDM).not.toHaveBeenCalled()`.
- `adminLandingState.test.ts` › removed "OnReady has started while fetching or after the fetch, not before" (the
  function is gone; the hook tests above replace it).

Already covered (unchanged): LDM forward visit sends 1 audit; LDM restored with data makes no call and sends no
audit; the page tests of the 4 screens for back navigation with data (no new call).

## Quick checks

- `npm --prefix app run typecheck`: pass.
- `npx vitest run src/pages/LDM_EventDetail_V2 src/pages/OrbitAdminLanding src/pages/OrbitAdminEventDetail src/pages/OrbitLanding`:
  17 files, 175 tests, all pass (hook, state, view and page tests).
- `npx eslint <the 10 changed files>`: pass. `npx prettier --check <same files>`: pass.
- Not run (tester): `npm run ci`, `lint:arch`, `arch_baseline.py`, parity, build and bundle report.

## Notes for the tester and the master

1. Error answers: when the saved state has a failed answer (no data), the restored view now calls again in all 4
   hooks. For LDM, the error screen used to stay; now the hook fetches again without the audit. This follows the
   rule "restored && data present" (as `useLocalitySubdivisions`). The re-run makes reads only.
2. OrbitLanding, open case (unchanged): the user switches the household member, then leaves before that answer. The
   saved state has `isEventsDataFetched` true and `isFetchingData` true, so the restored view keeps the skeleton (as
   before and as OutSystems). A full OnReady re-run would select the first member and lose the user's choice (brief:
   do not reset values that the user set). A re-run of only the events refresh, without the SwitchMember audit, would
   fix it. That is a new path, so I did not add it. Candidate follow-up.
3. OrbitLanding, edge case: the user clicks another member during the first events load, then leaves before both
   answers. The restored re-run runs OnReady, which selects the first member again. Before, the skeleton stayed for
   good.
4. OrbitLanding, edge case: a household without members (`isEventsDataFetched` false, `isFetchingData` false). A
   restored view makes one GetHouseholdMembers call again (a read, same result). No mock variant has this case.
5. Documents (documenter): `hasStarted` is gone. The JSDoc of the 4 hooks now describes the F40 rule. I did not
   update guides or followups (brief: "Not in this step").
6. Master status check: the master asked for a 3-line status through SendMessage during the run. This session has
   no SendMessage tool, so this report is the answer. Nothing was blocked. One Edit batch failed once because the
   auto-mode classifier gave no verdict; it passed on retry.

## Questions for the user

None.
