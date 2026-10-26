# Brief: P4-F4 (one platform hook for the standard flow state)

Not a catalog step: the master wrote this brief by hand (follow-up F4 in `migration/refactor/followups.md`, decision M2
in `migration/refactor/auto-decisions-2026-10-22.md`). Do not run `rf.py start`, `stage` or `done`.

| Field | Value |
|---|---|
| Kind | change |
| Parity level | strict, routes HouseholdDetails, HouseholdCarousel, Profile, Locality_Details (both references) |
| Developer model | opus |
| Depends on | P4-5 |
| Handoff folder | `migration/refactor/handoffs/P4-F4/` |

## Why

The pilot flow hook `app/src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts` has a state shape that about
60 pages will copy in Phase 6 (`app/docs/guides/page-template.md`, "Standard state shape of a flow hook"):

- `useReducer` for the rendered state, and a `latest` ref that follows every dispatch at once (OutSystems assigns
  variables at once, so a flow reads the newest value, not the rendered one);
- the `useViewState` store (`platform/navigation/hooks.ts`) that keeps the state over back navigation (`setSaved`);
- refs for the newest inputs and events, and `flowsRef` with `parametersKey` to run OnParametersChanged only when the
  inputs change.

The gate G-P2-4 (Opus, change 3) asked for one platform hook, so that pages do not copy this code.

## Do

1. Write one hook in `platform/` (choose the area; `platform/navigation/` holds `useViewState` today) that gives a flow
   hook: the rendered state, a `dispatch` that updates `latest` and the saved view state, `latest`, and the
   OnParametersChanged trigger. Keep it small and typed (generic reducer, state and action). Unit tests for: dispatch
   updates `latest` before the render; the saved state comes back after a remount with the same view name;
   OnParametersChanged runs only when the parameters key changes, not on the first render.
2. Use it in `useHouseholdDetails.ts`. The behavior must stay the same: the existing tests of the container and the
   stories pass without a change of their assertions.
3. Do not change the other 3 files with the same pattern (`shared/UBTConnect_Utils/SharePopup/SharePopup.tsx`,
   `shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx`, `screens/Household_Relations/components/
   HouseholdRelations_Block.tsx`): they change when their page moves in Phase 6. List them in dev.md.
4. Rules of plan v2 §1.4 apply (no behavior change, no deleted test, `@/` imports, no `src/mocks/**` change).

## Checks (developer quick checks)

- Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`.
- `npm --prefix app run typecheck`; `cd app && npx vitest run <changed tests>`; `npx eslint <changed files>`;
  `npm --prefix app run format:check`.

## Gate (tester)

- `npm --prefix app run ci`; `npm --prefix app run lint:arch` (no new warning).
- `python3 migration/tools/refactor_parity.py --level strict --routes HouseholdDetails HouseholdCarousel Profile
  Locality_Details --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P4-F4.md`.
- The dev server of this repo runs on http://localhost:5174. Port 5173 is another clone: never use it, never stop it.
- Diff review as in `.claude/agents/refactor-tester.md`.

## Docs (documenter)

- `app/docs/guides/page-template.md`: replace the "Standard state shape" bullet with the use of the new hook.
- CHANGELOG entry "P4-F4"; ADR-15 and `src/platform/README.md` when they list the platform hooks.

## Report

Each agent writes its file in this folder (`dev.md`, `test.md`, `docs.md`) with the handoff headings of the catalog
briefs: Result (status, summary), Files changed, Commands run, Deviations, Questions for the user.
