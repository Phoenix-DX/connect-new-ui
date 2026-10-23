## Result
status: pass
summary: Added the opt-in `beforePaint` option to `useFlowState`. When it is set, OnReady runs once in a layout effect,
before the first paint. When it is not set (the default), the behavior does not change. Added unit tests for both
modes and documented the option in the page template. Typecheck, eslint, prettier and the full unit suite pass.

## Files changed
app/src/platform/navigation/flowState.ts
app/src/platform/navigation/flowState.test.tsx
app/docs/guides/page-template.md

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx eslint src/platform/navigation/flowState.ts src/platform/navigation/flowState.test.tsx → exit 0
cd app && npx prettier --check src/platform/navigation/flowState.ts src/platform/navigation/flowState.test.tsx docs/guides/page-template.md → exit 0 (prettier --write ran once on the test file)
cd app && npx vitest run src/platform/navigation/flowState.test.tsx → 22 passed (12 old + 10 new: 5 scenarios x 2 modes)
cd app && npx vitest run src/platform/navigation/ → 16 files, 90 tests passed
cd app && npx vitest run (full unit suite, by accident: an empty path list) → 516 files, 2920 tests passed

## Deviations from the brief
- PREFETCH: the work is in the worktree `wt-F17b` on branch `rf/prefetch-P6-F17-be5653d8` (base be5653d8), not on
  `refactor/architecture`, as the master ordered.
- The option does not change `useFlowState`'s return value. The reference hook `useReadyBeforePaint` also returns the
  block's liveness check for event flows (for example `useAccommodationHost` uses it for `write`). `useFlowState` does
  not return one. With `beforePaint: true`, the `isAlive` that `onReady` gets is the block's liveness check (true
  until the unmount). A page whose event flows need it keeps it from `onReady`, or keeps a small local check. Adding
  an `isAlive` return value would be an API addition that the step does not ask for.

## Option for the page developers

Type (in `FlowStateOptions<S, A, P, E>`, `@/platform/navigation`):

```ts
beforePaint?: boolean;
```

Final doc comment:

```ts
  /** Runs `onReady` before the first paint (decision W28). Set it when the old port of the screen or block ran OnReady
      in a `useLayoutEffect`. The hook reads it at the mount only; `onParametersChanged` does not change.
      - Off (the default): `onReady` runs in a passive effect, after the paint. StrictMode (dev) runs it twice: the
        first run's `isAlive` turns false at once.
      - On: `onReady` runs once, in a layout effect. A state write at its start renders before the screen paints, so
        the first frame does not show the state before OnReady. StrictMode (dev) runs it once.
      - On: `isAlive` is true until the unmount (it guards the state writes only, decision W23). `restored` and the
        flow handler are the same as in the default; a rejection goes to the flow handler, also after the unmount. */
  beforePaint?: boolean;
```

Use, in place of the page-local `useReadyBeforePaint(onReady)`:

```ts
const { state, dispatch, latest, parameters, events } = useFlowState({
  viewName,
  reducer,
  initial,
  parameters: inputs,
  events,
  beforePaint: true,
  onReady: async (isAlive, restored) => {
    /* the old OnReady */
  },
});
```

Tests (`flowState.test.tsx`, `describe.each` over both modes): the DOM when `flushSync` returns outside act (the first
paint: `count: 1` before the paint, `count: 0` after it), the order against the passive effects of the mount, the runs
in StrictMode (1 run before the paint, 2 runs after it), an unmount while OnReady is pending (the side effect runs
once, no state write, the rejection goes to the flow handler once), and the `restored` flag.

## Questions for the user
none
