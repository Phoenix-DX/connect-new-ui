import { useRef } from 'react';
import { fetchSubdivisionName } from '@/api/locality';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { fetchUserSubdivision, isUsersOwnSubdivision } from './userSubdivision';

/** The flows of the block ScreenBlock_AssembleEvents: its OnReady gives the SubdivisionName of the title. The page
    calls this hook and gives the result to AssembleEventsView.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents */

/** The inputs of the block (the screen inputs). */
export interface AssembleEventsBlockInputs {
  /** SubdivisionId (Long Integer as text; "0" is the user's own). */
  subdivisionId: string;
  /** ShowBackNavigation. */
  showBackNavigation: boolean;
  /** IsUserSubdivision. */
  isUserSubdivision: boolean;
}

/** The variables of the block. */
export interface AssembleEventsState {
  /** SubdivisionName: the name of the supper meeting in the title. */
  subdivisionName: string;
}

/** What the view of the block renders. */
export type AssembleEventsFlows = AssembleEventsState;

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents';
const INITIAL_STATE: AssembleEventsState = { subdivisionName: '' };
const reducer = (state: AssembleEventsState, patch: Partial<AssembleEventsState>): AssembleEventsState => ({
  ...state,
  ...patch,
});

/** The state and the flows of the block.
    - OnReady: a view that the view cache restored keeps its SubdivisionName and does nothing. Otherwise SubdivisionId
      0 gives the Subdivision.Name of GetCacheableUserInfo; another SubdivisionId gives the data action
      GetSubdivisionName (SubdivisionId, ShowBackNavigation, IsUserSubdivision). A failure goes to the flow handler.
    - Decision W23: after an unmount, the started flow skips its state write only. Its call and its error still run.
    - Handler_AssyncException (an UnknownException) is not needed: the errors of the meeting list go to the flow
      handler directly. */
export function useAssembleEvents(inputs: AssembleEventsBlockInputs): AssembleEventsFlows {
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there and calls once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch, parameters } = useFlowState({
    viewName: VIEW_NAME,
    reducer,
    initial: INITIAL_STATE,
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  async function onReady(restored: boolean) {
    if (restored) return;
    const { subdivisionId, showBackNavigation, isUserSubdivision } = parameters.current;
    const subdivisionName = isUsersOwnSubdivision(subdivisionId)
      ? (await fetchUserSubdivision()).name
      : await fetchSubdivisionName({
          SubdivisionId: subdivisionId,
          ShowBackNavigation: showBackNavigation,
          IsUserSubdivision: isUserSubdivision,
        });
    if (newestReadyRun.current()) dispatch({ subdivisionName });
  }

  return state;
}
