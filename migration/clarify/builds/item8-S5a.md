# Item 8, step S5a: cleanup, part 1 (platform API, OnReady signature, check script): build note (2026-10-28)

- Design: `../review/item8-solution.md` §2.2, §2.3, §6 (points 4, 5), §7.1 (check script), §9 (decisions S3b Q1,
  S1b Q1). Earlier steps: `item8-S0a.md` to `item8-S4b.md`.
- The paths below are relative to `app/` unless they start with `migration/`.
- Nothing is committed. No parity sweep and no dev server (the orchestrator runs them).

## Files

Platform (code and tests):

- `src/platform/navigation/flowScope.ts`: `flow.run` also catches a synchronous throw; new `flow.runAwaited`
  (on the `FlowScope` interface).
- `src/platform/navigation/flowState.ts`: `onReady(flow, restored)` in place of `onReady(isAlive, restored)`; the
  `IsAlive` doc now covers `onParametersChanged` only.
- `src/platform/navigation/flowScope.test.tsx`, `src/platform/navigation/flowState.test.tsx`.

Hooks, `flow.runAwaited` in place of the hand-written equivalents (5):

- `src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts`, `useLocalitySubdivisions.ts` (`onScrollEnding`)
- `src/pages/MessageList/hooks/useMessageList.ts` (the local `runAwaited` helper is deleted; 4 handlers)
- `src/pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts` (the local `raise`; 4 handlers)
- `src/pages/Notes/hooks/useNotes.ts` (`onLoadMore`)

Hooks, OnReady signature (37 hooks changed; 13 more use `onReady: () => …` and need no change):

- 33 hooks: `onReady: (_isAlive, restored)` → `onReady: (_flow, restored)` (mechanical).
- 4 hooks that used OnReady's `isAlive`:
  - `src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts`: `(scope, restored) => onInitialize(scope.alive, restored)`
  - `src/pages/MessageDetail/hooks/useShareObjectDetail.ts`: `(scope) => refreshGetShare(scope.alive)`
  - `src/pages/Household_Relations/hooks/useHouseholdRelations.ts`: `onReady(restored)` checks `flow.alive()`
  - `src/pages/ConnectShare/hooks/useConnectShare.ts`: `newestRun.current = flow.alive` (the ref type is
    `() => boolean`)

Check script: new `build/check-flow-fetch.mjs` (the convention of `build/check-flags.mjs`); `package.json`: script
`flow-fetch`, and `npm run flow-fetch` in `npm run ci` after `flags` (a failing step).

Docs: `docs/guides/page-template.md` (author rules); `migration/refactor/auto-decisions-2026-10-22.md` (W23 row: "Superseded
by item 8, the flow scope (user, 2026-10-28): migration/clarify/review/item8-solution.md").

## Tests (written first)

The new and changed platform tests ran on the old code first: 5 failed in `flowScope.test.tsx` (2 on the synchronous
throw of `run`, 3 on `runAwaited`, which did not exist). `flowState.test.tsx` was changed to the new signature before
the platform change.

New tests:

- `flowScope.test.tsx`: `run` sends a synchronous throw to the flow handler with the scope and does not throw;
  `run` of a `flow.own` action after the unmount: the `ControllerDisposedException` goes to the handler, no error
  page, the action does not run; `runAwaited` resolves with the value of the flow and only when the flow settles;
  a rejection and a synchronous throw go to the handler with the scope, and the promise resolves to `undefined`.
- `flowState.test.tsx`: "OnReady gets the flow scope of the instance; flow.alive() turns false on unmount" (replaces
  "isAlive turns false on unmount"); test 7 (StrictMode) now also checks that OnReady's scope is the `flow` that the
  hook returns.

The hook tests did not change: they pass on the new code.

## Behaviour changes

- `flow.run(f)`: a synchronous throw of `f` goes to `raiseToFlowHandler(e, scope)` (user, S3b Q1 (a)). Before, it
  left the widget handler as an uncaught error (the top-level filter of `ignorableErrors.ts` dropped it when it was
  an `IgnorableSystemException`). The flow still starts at once, in the call of the widget event.
- Notes `onLoadMore`: `refreshGetNotes` is a `flow.own` action. After the unmount its call throws at once; before, the
  `onLoadMore` promise then rejected with the `ControllerDisposedException`. Now it resolves, and the handler ignores
  the exception. No visible change.
- The other runAwaited sites keep their behaviour: their handlers are `async` functions (a throw is a rejection), and
  the timing of the raise (one `.catch`) is the same.
- `onReady(flow, restored)`: same meaning as before (OnReady's `isAlive` has been `flow.alive` since S0a).

## Differences from the design (with evidence)

1. Open point 4 (a) says "`onReady(flow, restored)`, `isAlive` type removed" (`item8-solution.md` §7.1, S5 row). The
   `IsAlive` type stays: `onParametersChanged(isAlive)` keeps its meaning (false for a superseded run, open point 5
   (a), user 2026-10-28; `flowState.ts`, the parameters effect). Users: `flowState.test.tsx`,
   `useHouseholdDetails.ts`, `useShareObjectDetail.ts`.
2. Inside the `useFlowState` options, a hook cannot read the `flow` that the same call returns: TypeScript reports
   TS7022/TS7023 (circular inference) for `onReady: () => refreshGetShare(flow.alive)`. The two hooks that pass
   `alive` on use the `flow` parameter of OnReady (`scope.alive`). The page template says so.
3. The check script is a failing step now, not a warning (design §7.1: "a warning until S5, then an error"). It is
   S5. Two hooks outside the inventory are on its allow-list until Q1 is decided.
4. The script keys an allow row on the callee (a module or server action, every file) or on `file | callee` (a local
   name). It reads the TypeScript AST (`typescript` is a dev dependency already), so comments and strings do not
   count. It does not see a data action that is not awaited directly (`.then`, a stored promise).

## Questions

Q1. The check script found two hooks that await a data action without a flow scope. Neither is in the item 8
inventory (`../review/item8-inventory/group-A.md` to `group-D.md`: no row for ContactUsDetails or
MyTimelineFilterButton).

- `src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:103`: `await fetchLocalityTimezone(…)`, the data action
  `ContactUsDetails/DataActionDataAction_GetLocalityTimezone` (`src/api/message/repository.ts`). The OnReady refresh
  of `DataAction_GetCountriesNames` (`:93`) is a data action too, with `.then` (not seen by the script). Both
  failures go to `raiseToFlowHandler` without a scope (R6).
- `src/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts:73`: `await fetchEventFilterLocalities(…)`, the
  data action `MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter`. After it, the block sets
  its filters and sends `addAuditEvent_LDM('RequestAPI_EventLocalities')`: on TST (R1) an unmount drops the answer,
  so the audit is not sent; here it is sent. A failure goes to `raiseToFlowHandler(e)` without a scope.

Options: (a) a small step S5x moves both hooks to `useFlowScope` / `useFlowState` with `flow.fetch` and `flow.run`,
with one unmount test each, after an MCP and TST check of the two data actions; (b) keep them and record the two
known differences; (c) (a) for MyTimelineFilterButton only (the audit is a server-visible difference). Recommendation:
(a): the same rule as the 55 hooks of the inventory, about 30 lines each, and the allow-list then shrinks by two rows.

## Checks (from `app/`)

- `npx tsc --noEmit` (`npm run typecheck`): 0 errors.
- eslint on the 45 changed code files: 0 problems (one `no-confusing-void-expression` fixed in `flowScope.ts`).
- prettier `--check` on every changed file: clean (`flowScope.test.tsx`, `check-flow-fetch.mjs`,
  `page-template.md` formatted with `--write`).
- `npm run unused`: knip 0 issues; unused exports 1086 baseline rows, 0 new, 0 stale. The knip hint "Remove from
  ignore: src/components/ui/DropdownSearch/index.ts" is not from this step.
- `npm run arch`: no dependency violations (144 known, ignored).
- `npm run flow-fetch`: ok (35 awaits on the allow-list, 20 rows).
- Full `npx vitest run`: 697 files, 4609 tests passed (4604 at the last commit + 5 new), no "Errors" line. The
  jsdom line "Not implemented: navigation to another Document" is printed by the error-page tests (S0b) and is not
  from this step.

## Orchestrator checks (2026-10-28)

- `npm run unused` first: 0 new, 0 stale. `npm run ci` passed (with the new `flow-fetch` step): 697 files, 4609 tests,
  no "Errors" line, build OK.
- Parity: not run for this step. The signature change touches about 50 hooks, so the scope is nearly every route; the
  one full sweep at the end of item 8 (user rule) covers it.
- Q1 facts (MCP, 2026-10-28): `DataAction_GetLocalityTimezone` (UBTConnect) and `GetEventLocalitiesForFilter`
  (Connect2_OrbitMobile_MUI) are IDataAction (R1). Q1 goes to the user.
