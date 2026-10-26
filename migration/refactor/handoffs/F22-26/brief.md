# Brief · F22-26 · Restored views as OutSystems (F22, F24, F26)

Fix step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-24 ("ok tôi duyệt hết"), option C of
`migration/refactor/followups.md` rows F22, F24, F26. Advisors: Opus and Fable both chose C (confidence high for the
rule; medium on hidden refresh paths per page).

| Field | Value |
|---|---|
| Kind | behavior fix (approved by the user; rule 4 does not block it) |
| Parity level | visual, all routes |
| Developer model | opus |
| Handoff folder | `migration/refactor/handoffs/F22-26/` |

## The rule (decided)

OutSystems restores a view on a back navigation with its variables and makes no call, however long ago the user
left it. A forward visit always runs OnReady and its calls. Do this with the existing view cache:
`app/src/platform/navigation/flowState.ts` (`useFlowState` with `restore`, `restored` passed to `onReady`, the opt-in
`beforePaint` of W28). About 45 page and container hooks already do it. Do not add a time-based cache: no
`staleTime`, no TTL, no change to the query hooks (time-based caching is F37, a separate item).

## Read

- `migration/refactor/followups.md` rows F22, F24, F26 (and W27 in `migration/refactor/auto-decisions-2026-10-22.md`
  for F24).
- `app/src/platform/navigation/flowState.ts`, `viewCache.ts`; one hook that already does it right (for example
  `grep -rn "restored" app/src/pages --include=*.ts -l`).
- The OutSystems sources named in the `@origin` comments of each file below (TST compiled code under
  `migration/screens/<Route>/analysis/sources/`; never `migration/.raw/`).

## Change

1. **F22** `app/src/containers/SupperMeetingDetails` (routes SupperMeeting_Details and SupperMeeting_Carousel): on a
   restored view, keep the saved state (no skeleton) and skip both data actions in OnReady.
2. **F24** `app/src/pages/MilestoneDetail/hooks/useAccommodationHost.ts`: `restore` gives the saved state, OnReady
   skips the calls when `restored`. Keep the 2 former crash paths of the old page safe (optional input missing; a
   visit from a notification, then a member and back): when no state was saved for the entry, fetch as on a forward
   visit. No crash.
3. **F26** `app/src/pages/AssembleDetail` (`useAssembleEventContactList.ts`, `useAssembleEventContact.ts`,
   `useAttendeeSubdivision.ts`, `AssembleEventDetail_LocalitySubdivisionList`): move the block variables that
   OutSystems keeps (contact list, contacts, hall expansion state) from `useState`/`useReducer` to `useFlowState`, so
   a back navigation restores them; skip their calls when restored.
4. Before skipping a call, check the OutSystems block for a refresh path that must still run on a restored view:
   OnParametersChanged, an event from a child screen or block, a pull-to-refresh, a timer. Keep any such path. Report
   what you found per block in dev.md, with the source line references.
5. A restored parent can show data that a child screen changed. Do what OutSystems does (usually nothing); write the
   case in dev.md when you find one.
6. Keep `@origin` tags and the comment style of each file.

## Tests

- Per block: a forward visit calls the data actions; a back navigation to the restored view makes no call and shows
  the saved state (no skeleton); for F24 also the 2 former crash paths (no saved state → fetch, no crash).
- Update the page tests that assert the old refetch on back; list them in dev.md.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F22-26/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7 and W21 (+0.3 kB per step)
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG and other docs: the master and the documenter do them after the test.
