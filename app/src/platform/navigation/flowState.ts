import { useCallback, useEffect, useLayoutEffect, useReducer, useRef } from 'react';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useViewState, useWasRestoredFromCache } from './hooks';

/* The standard state of a flow hook (docs/guides/page-template.md): the state of a screen or block, its OnReady and
   OnParametersChanged flows, in one hook, so that the pages do not copy the refs and effects. */

/** Tells a running flow whether it is still current. It turns false when the same trigger runs again, or when the
    screen or block unmounts: the flow then stops before it assigns anything. */
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
  /** OnReady. It runs once, after the first render. `restored` is true when the view cache restored the view (a back
      navigation), false on a new visit. */
  onReady?: (isAlive: IsAlive, restored: boolean) => Promise<void>;
  /** Runs `onReady` before the first paint (decision W28). Set it when the old port of the screen or block ran OnReady
      in a `useLayoutEffect`. The hook reads it at the mount only; `onParametersChanged` does not change.
      - Off (the default): `onReady` runs in a passive effect, after the paint. StrictMode (dev) runs it twice: the
        first run's `isAlive` turns false at once.
      - On: `onReady` runs once, in a layout effect. A state write at its start renders before the screen paints, so
        the first frame does not show the state before OnReady. StrictMode (dev) runs it once.
      - On: `isAlive` is true until the unmount (it guards the state writes only, decision W23). `restored` and the
        flow handler are the same as in the default; a rejection goes to the flow handler, also after the unmount. */
  beforePaint?: boolean;
  /** OnParametersChanged. It runs after a render in which the parameters key changed, never after the first render. */
  onParametersChanged?: (isAlive: IsAlive) => Promise<void>;
}

/** What {@link useFlowState} gives a flow hook. */
export interface FlowState<S, A, P, E = undefined> {
  /** The rendered state. */
  state: S;
  /** Applies the action to `latest` at once, keeps the result for the view cache, and renders it. */
  dispatch: (action: A) => void;
  /** The newest state, which the flows read: OutSystems assigns a variable at once, before the next render. */
  latest: { readonly current: S };
  /** The newest input parameters, which the flows read. */
  parameters: { readonly current: P };
  /** The newest event handlers, which the flows call. */
  events: { readonly current: E };
}

/**
 * The state and the flows of a flow hook. The rendered state comes from `reducer`; `dispatch` also updates `latest`
 * at once and saves the state for the view cache, so a back navigation to the view restores it (`useViewState`).
 * The hook calls the flows of the newest render, and sends a rejection to the flow handler (`raiseToFlowHandler`).
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
  const restoredFromCache = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<S>(viewName, initial);
  const [state, dispatchToView] = useReducer(reducer, saved, (s: S) =>
    restoredFromCache && restore !== undefined ? restore(s) : s,
  );
  const latest = useRef(state);
  const dispatch = useCallback(
    (action: A) => {
      latest.current = reducer(latest.current, action);
      setSaved(latest.current);
      dispatchToView(action);
    },
    [reducer, setSaved],
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
  const readyStarted = useRef(false);
  const readyAlive = useRef(false);
  useLayoutEffect(() => {
    if (!beforePaintRef.current) return undefined;
    // StrictMode (dev) runs this effect again on the same view: the second run only turns the liveness check on again.
    readyAlive.current = true;
    if (!readyStarted.current) {
      readyStarted.current = true;
      flowsRef.current.onReady?.(() => readyAlive.current, restoredRef.current).catch(raiseToFlowHandler);
    }
    return () => {
      readyAlive.current = false;
    };
  }, []);
  useEffect(() => {
    if (beforePaintRef.current) return undefined;
    let alive = true;
    flowsRef.current.onReady?.(() => alive, restoredRef.current).catch(raiseToFlowHandler);
    return () => {
      alive = false;
    };
  }, []);

  const parametersKey = JSON.stringify(parameters);
  const parametersKeyRef = useRef(parametersKey);
  useEffect(() => {
    if (parametersKeyRef.current === parametersKey) return undefined;
    parametersKeyRef.current = parametersKey;
    let alive = true;
    flowsRef.current.onParametersChanged?.(() => alive).catch(raiseToFlowHandler);
    return () => {
      alive = false;
    };
  }, [parametersKey]);

  return { state, dispatch, latest, parameters: parametersRef, events: eventsRef };
}
