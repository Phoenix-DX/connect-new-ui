import { useCallback, useEffect, useLayoutEffect, useReducer, useRef } from 'react';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowScope, type FlowScope } from './flowScope';
import { useViewState, useWasRestoredFromCache } from './hooks';

/* The standard state of a flow hook (docs/guides/page-template.md): the state of a screen or block, its OnReady and
   OnParametersChanged flows, in one hook, so that the pages do not copy the refs and effects. */

/** Tells a running OnParametersChanged flow whether it is still current. It turns false when the screen or block
    unmounts, and also when the same trigger runs again: the older run then stops before it assigns anything (item 8
    §6, point 5 (a), user 2026-10-28). OnReady gets the flow scope instead (`flow.alive`). */
export type IsAlive = () => boolean;

/** The options of {@link useFlowState}. The OutSystems order is kept: OnInitialize (`initial`), the first render,
    then OnReady (`onReady`). */
export interface FlowStateOptions<S, A, P, E = undefined> {
  /** The name under which the view cache keeps the state. It is unique within the screen, for example
      `Module.Block#<id>`. */
  viewName: string;
  /** The pure reducer of the state. Give a module constant, so that `dispatch` stays the same function. */
  reducer: (state: S, action: A) => S;
  /** The state of a view that the view cache does not restore: the variables after OnInitialize. A restored view
      starts from its saved state instead. */
  initial: S;
  /** OnInitialize of a restored view (OutSystems runs OnInitialize on a back navigation too): it gets the saved state
      and gives the state of the first render. Without it, a restored view starts from its saved state as it is. */
  restore?: (saved: S) => S;
  /** The input parameters of the screen or block, as plain data: their JSON is the parameters key. */
  parameters: P;
  /** The event handlers that the parent gives (the block events). The flows call the newest ones through `events`. */
  events?: E;
  /** OnReady. It runs once per instance, after the first render, also in StrictMode (dev). `flow` is the flow scope
      of the instance, the same object as the `flow` that the hook returns (`flow.alive()` is true until the unmount).
      `restored` is true when the view cache restored the view (a back navigation), false on a new visit. */
  onReady?: (flow: FlowScope<E>, restored: boolean) => Promise<void>;
  /** Runs `onReady` before the first paint (decision W28). Set it when the old port of the screen or block ran OnReady
      in a `useLayoutEffect`. The hook reads it at the mount only; `onParametersChanged` does not change.
      - Off (the default): `onReady` runs in a passive effect, after the paint.
      - On: `onReady` runs in a layout effect. A state write at its start renders before the screen paints, so the
        first frame does not show the state before OnReady.
      Both modes run it once (item 8 §2.3), and send a rejection to the flow handler with the flow scope. */
  beforePaint?: boolean;
  /** OnParametersChanged. It runs after a render in which the parameters key changed, never after the first render. */
  onParametersChanged?: (isAlive: IsAlive) => Promise<void>;
}

/** What {@link useFlowState} gives a flow hook. */
export interface FlowState<S, A, P, E = undefined> {
  /** The rendered state. */
  state: S;
  /** Applies the action to `latest` at once, keeps the result for the view cache, and renders it. A no-op after the
      unmount: TST drops the answer of a disposed screen or block (R1, item 8 §2.3). */
  dispatch: (action: A) => void;
  /** The newest state, which the flows read: OutSystems assigns a variable at once, before the next render. */
  latest: { readonly current: S };
  /** The newest input parameters, which the flows read. */
  parameters: { readonly current: P };
  /** The newest event handlers, which the flows call. */
  events: { readonly current: E };
  /** The flow scope of the instance (flowScope.ts): `flow.fetch`, `flow.own`, `flow.events`, `flow.run`,
      `flow.runAwaited`. OnReady gets the same object. */
  flow: FlowScope<E>;
}

/**
 * The state and the flows of a flow hook. The rendered state comes from `reducer`; `dispatch` also updates `latest`
 * at once and saves the state for the view cache, so a back navigation to the view restores it (`useViewState`).
 * The hook calls the flows of the newest render, and sends a rejection to the flow handler (`raiseToFlowHandler`)
 * with the flow scope, so that a left screen opens no error page (R6).
 */
export function useFlowState<S, A, P, E = undefined>({
  viewName,
  reducer,
  initial,
  restore,
  parameters,
  events,
  onReady,
  beforePaint = false,
  onParametersChanged,
}: FlowStateOptions<S, A, P, E>): FlowState<S, A, P, E> {
  // Without the `events` option, E is `undefined` (its default), and so is the value.
  const flow = useFlowScope(events as E);
  const restoredFromCache = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<S>(viewName, initial);
  const [state, dispatchToView] = useReducer(reducer, saved, (s: S) =>
    restoredFromCache && restore !== undefined ? restore(s) : s,
  );
  const latest = useRef(state);
  const dispatch = useCallback(
    (action: A) => {
      if (!flow.alive()) return;
      latest.current = reducer(latest.current, action);
      setSaved(latest.current);
      dispatchToView(action);
    },
    [reducer, setSaved, flow],
  );

  const parametersRef = useRef(parameters);
  // Without the `events` option, E is `undefined` (its default), and so is the value.
  const eventsRef = useRef(events as E);
  const flowsRef = useRef({ onReady, onParametersChanged });
  useLayoutEffect(() => {
    parametersRef.current = parameters;
    eventsRef.current = events as E;
    flowsRef.current = { onReady, onParametersChanged };
  });

  const restoredRef = useRef(restoredFromCache);
  // The mode is fixed at the mount: one of the two effects below runs OnReady.
  const beforePaintRef = useRef(beforePaint);
  // OnReady once per instance: StrictMode (dev) runs the mount effects again on the same instance, with its refs kept
  // (item 8 §2.3). The scope's `alive` is true again after that second run.
  const readyStarted = useRef(false);
  useLayoutEffect(() => {
    if (!beforePaintRef.current || readyStarted.current) return;
    readyStarted.current = true;
    flowsRef.current.onReady?.(flow, restoredRef.current).catch((e: unknown) => {
      raiseToFlowHandler(e, flow);
    });
  }, [flow]);
  useEffect(() => {
    if (beforePaintRef.current || readyStarted.current) return;
    readyStarted.current = true;
    flowsRef.current.onReady?.(flow, restoredRef.current).catch((e: unknown) => {
      raiseToFlowHandler(e, flow);
    });
  }, [flow]);

  const parametersKey = JSON.stringify(parameters);
  const parametersKeyRef = useRef(parametersKey);
  useEffect(() => {
    if (parametersKeyRef.current === parametersKey) return undefined;
    parametersKeyRef.current = parametersKey;
    // `isAlive` of OnParametersChanged turns false at the next run too (item 8 §6, point 5 (a): kept).
    let alive = true;
    flowsRef.current
      .onParametersChanged?.(() => alive)
      .catch((e: unknown) => {
        raiseToFlowHandler(e, flow);
      });
    return () => {
      alive = false;
    };
  }, [parametersKey, flow]);

  return { state, dispatch, latest, parameters: parametersRef, events: eventsRef, flow };
}
