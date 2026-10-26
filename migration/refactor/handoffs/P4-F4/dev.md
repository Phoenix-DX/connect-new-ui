# P4-F4 developer report

## Result

Status: pass (loop 1: OnReady added to the hook, as the master asked)

New platform hook `useFlowState` in `app/src/platform/navigation/flowState.ts`, exported from the barrel
`@/platform/navigation` with the types `FlowState`, `FlowStateOptions` and `IsAlive`.

- Options: `viewName`, `reducer`, `initial`, `parameters`, and the optional `events`, `onReady(isAlive, restored)`
  and `onParametersChanged(isAlive)`.
- Result: `state` (rendered), `dispatch` (updates `latest` at once, saves the state for the view cache, renders),
  `latest` (newest state), `parameters` (newest inputs) and `events` (newest event handlers), all read-only.
- OutSystems order. OnInitialize is `initial`: the state of a view that the view cache does not restore. A restored
  view starts from its saved state. Then the first render. Then `onReady` runs once, in the mount effect. It gets
  `restored`: true after a back-navigation remount, false on a new visit. `isAlive` turns false on unmount.
- `onParametersChanged` runs when the parameters key (`JSON.stringify(parameters)`) changes. It does not run after the
  first render. `isAlive` turns false at the next run and on unmount.
- The hook calls the flows of the newest render, through one `flowsRef` that a layout effect updates. It sends a
  rejection of either flow to `raiseToFlowHandler`.

The code is the same as the code that `useHouseholdDetails.ts` had before the step: `useViewState`, `useReducer`, the
`latest` ref, the input, event and flow refs, `restoredRef`, the mount effect and `parametersKey`. Only `dispatch` is
now a stable function (`useCallback`). In the hook, the mount effect comes before the parameters effect, as it did in
the page. `useHouseholdDetails.ts` now passes `events`, `onReady` and `onParametersChanged` to the hook. It no longer
has React hooks of its own, refs or effects: the `react` import is gone. Its flow functions (`onInitialize`,
`onParametersChanged`, the refreshes) and the event handlers did not change. The container tests and the stories did
not change, and they pass. The full unit suite passes (343 files, 1608 tests).

The other 3 files with the same pattern are not changed. They change when their page moves in Phase 6:

- `app/src/shared/UBTConnect_Utils/SharePopup/SharePopup.tsx` (`parametersKey` with `lastKey`)
- `app/src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx` (`parametersKey` in a view-state record)
- `app/src/screens/Household_Relations/components/HouseholdRelations_Block.tsx` (`useViewState` with a
  `variablesRef`, `assign`, `propsRef`, `eventsRef`, `flowsRef` with `onReady`, `restoredRef`, the mount effect)

Notes for the documenter:

- `app/src/containers/HouseholdDetails/README.md` (Structure table) says that the hook runs the flows "with
  `useReducer`". It now runs them with `useFlowState`.
- In the page hook, the hook call comes first. The flows are declared later, so the options use forward arrows,
  for example `onReady: (isAlive, restored) => onInitialize(isAlive, restored)`. TypeScript and ESLint accept them
  because the arrows run only in effects.
- The page template can show this mapping: OnInitialize is `initial`, OnReady is `onReady`, OnParametersChanged is
  `onParametersChanged`, the block events are `events`. A page that needs `restored` before the first render
  calls `useWasRestoredFromCache()` itself. HouseholdRelations_Block does this for its skeleton.

## Files changed

- Added `app/src/platform/navigation/flowState.ts`: the hook `useFlowState` and the types `FlowState`,
  `FlowStateOptions` and `IsAlive`.
- Added `app/src/platform/navigation/flowState.test.tsx`: 11 tests.
  - State:
    - dispatch updates `latest` before the render;
    - a back navigation remounts the view with the saved state, and `latest` continues from it;
    - a new visit (push) starts from the initial state.
  - OnParametersChanged:
    - it runs only when the key changes (not on the first render, not for an equal key), and `isAlive` turns false
      at the next run and on unmount;
    - the hook calls the flow of the newest render;
    - a rejection goes to the flow handler.
  - OnReady:
    - it runs once, after the first render (the DOM shows the render, and a later render with other parameters does
      not run it again);
    - `isAlive` turns false on unmount;
    - `restored` is true after a back-navigation remount and false on a new visit;
    - a running flow calls the newest events and reads the newest parameters;
    - a rejection goes to the flow handler.
- Changed `app/src/platform/navigation/index.ts`: exports `useFlowState`, `FlowState`, `FlowStateOptions` and
  `IsAlive`.
- Changed `app/src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts`: uses `useFlowState` for the state,
  the refs, OnReady and OnParametersChanged (27 lines added, 59 removed).
- Not changed by the developer: `migration/metrics/ledger.csv` and `migration/refactor/auto-decisions-2026-10-22.md`.
  `git status` shows them as modified, but the master changed them.

## Commands run

All commands ran with `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`. Loop 1 ran the same commands again
after the change.

- `npm --prefix app run typecheck`: pass.
- `cd app && npx vitest run src/platform/navigation/flowState.test.tsx`: 11 passed.
- `cd app && npx vitest run src/platform/navigation src/containers/HouseholdDetails src/shared/UBTConnect/EntitiesCarousel_HouseholdDetails src/shared/UBTConnect/EntitiesCarousel_Element src/components/household src/app/RouteGuard.test.tsx src/shared/UBTConnect/BottomBarMenu`:
  19 files, 131 tests passed.
- `cd app && npx vitest run` (full unit suite): 343 files, 1608 tests passed.
- `cd app && npx eslint src/platform/navigation/flowState.ts src/platform/navigation/flowState.test.tsx src/platform/navigation/index.ts src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts`:
  no problems.
- `npm --prefix app run format:check`: all files pass.
- `cd app && npm run arch`, before and after the change: 0 errors and 210 warnings, the same warning list (2 more
  modules). No new cycle: `flowState.ts` imports `@/platform/feedback/flowErrors`, and that module does not import
  the navigation barrel.
- One test experiment, removed before this report. The first render passed flow A, and a layout-effect state update
  rendered again with flow B. Only flow A ran: React runs the mount effect of a commit before it renders again.

## Deviations

- The brief listed 4 outputs. The hook also returns `parameters` and `events`, the newest inputs and event handlers.
  They replace the page's `inputsRef` and `eventsRef` (the "refs for the newest inputs and events" in the Why
  section of the brief). The master asked in loop 1 to remove `eventsRef`.
- The hook has no separate `onInitialize` option. It is the smallest interface: a synchronous OnInitialize is the
  `initial` state of a new view, and a restored view keeps its saved state. The pilot's flow `onInitialize` is the
  OnReady of the block ("OnInitialize = OnReady" in its JSDoc), so the page passes it as `onReady`.
- The "newest flow" test of the loop-1 list covers `onReady` through a running flow that sees the newest events and
  parameters. The OnParametersChanged test checks the `flowsRef` itself ("calls the flow of the newest render"). For
  `onReady`, the newest flow at the mount effect is always the flow of the first commit, because React runs that
  effect before the next render (see the experiment above). A test that checks the `onReady` function itself cannot
  fail.
- `IsAlive` is exported from the platform, because it is the type of the flow arguments. The page hook no longer
  declares its own type.
- `dispatch` is stable (`useCallback` on `reducer` and the view-state setter). Before, it was a new function on each
  render. Nothing used its identity, so the behavior does not change.
- `events` has the generic type `E`, which defaults to `undefined`. The hook casts `events as E` once: without the
  option, E is `undefined` and so is the value.

## Questions for the user

None.
