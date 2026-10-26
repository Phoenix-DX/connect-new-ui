# Brief · F40 · Restored view without data: one rule for every hook

Fix step outside `steps.json` (no `rf.py` state). Decisions (advisors Opus + Fable, all agreed, auto-accepted under the
user instruction 2026-10-24, away: "Fable và Opus hãy giúp tôi tự trả lời và chọn lựa các mục F39, F40"); log rows in
`migration/refactor/auto-decisions-2026-10-22.md` (Window 5):

- F40 main (both high): keep the port rule. When the user left before a block's answer and comes back (restored view,
  saved state without the data), the hook calls again and shows the data. OutSystems keeps the skeleton for good (a
  defect, not a designed UX). Condition: the re-run path makes reads only, no side effect.
- F40-a (both high): `pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts` breaks the condition: the re-run also sends
  `addAuditEvent_LDM('RequestAPI_EventDetail')` again (the first flow already sent it after the unmount, decision W23).
  On the restored re-run, fetch but do not send the audit: one audit per forward visit, as OutSystems.
- F40-b (both high): 3 hooks reproduce the OutSystems skeleton instead of the port rule. Align them:
  `pages/OrbitAdminLanding/hooks/useAdminLanding.ts` (skips when `hasStarted = isFetchingData || isDataFetched`),
  `pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts` and `pages/OrbitLanding/hooks/useOrbitLanding.ts` (skip
  when the saved state is not the INITIAL object, by identity). New check: `restored && <the fetched result is present>`
  (data present, not "fetch started"). No shared helper in this step (advisors: a later, separate no-behavior-change
  step if wanted).

| Field | Value |
|---|---|
| Kind | behavior fix (approved through the advisors) |
| Parity level | visual, all routes (the race is not visible to parity; unit tests are the evidence) |
| Developer model | opus |
| Handoff folder | `migration/refactor/handoffs/F40/` |

## Read

- `app/src/platform/navigation/flowState.ts` (`restored`, saved state), one hook that already follows the rule (for
  example `pages/Locality_Details/hooks/useLocalitySubdivisions.ts`, `if (restored && latest.current.isDataFetched)`).
- The 4 hooks above, their `*State.ts` and tests. `lib/orbit/actions.ts` (`addAuditEvent_LDM`).
- Fact check of the re-run paths (all other calls are reads; no other side effect): summary in this brief; ask the
  master for the table when needed.

## Change

1. **LDM**: the hook knows a restored re-run from `restored` (the flag of `useFlowState`), not from guesswork. On that
   path, fetch the coordinator and the event and set the state as now, and skip the audit. A forward visit is unchanged
   (fetch, then the audit). If the forward flow fails before the audit, no audit (as now).
2. **Orbit (3 hooks)**: replace the `hasStarted` and INITIAL-identity checks by `restored && <data present>`. A
   restored view with data makes no call (as now). A restored view without data calls again and clears the skeleton.
   Keep everything else of each hook: the filter, sort and year reset of OrbitLanding runs only where it runs today
   (check that a re-run does not reset values the user set).
3. Keep `@origin` tags and the comment style. In each changed hook, one comment line: "restored without data: call
   again (F40; OutSystems keeps the skeleton)".

## Tests

- LDM: forward visit → 1 audit; leave before the answer, back → fetch again, 0 more audits (total 1); restored with
  data → no call, no audit.
- Each Orbit hook: restored while loading → one call, the skeleton clears, data shown; restored with data → no call.
- Existing tests pass; list any test you change in dev.md.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F40/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG and guides: the master and the documenter do them after the test.
