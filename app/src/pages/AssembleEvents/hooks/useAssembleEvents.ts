import { fetchSubdivisionName } from '@/api/locality';
import { useFlowState } from '@/platform/navigation';
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
    - Flow scope (item 8): GetSubdivisionName is a data action (R1, `flow.fetch`): after the unmount its answer and
      its failure are dropped. GetCacheableUserInfo is a module action: it runs after the unmount, and its failure
      still goes to the flow handler with the scope; the state write after it is a no-op (`dispatch`).
    - Handler_AssyncException (an UnknownException) is not needed: the errors of the meeting list go to the flow
      handler directly. */
export function useAssembleEvents(inputs: AssembleEventsBlockInputs): AssembleEventsFlows {
  const { state, dispatch, parameters, flow } = useFlowState({
    viewName: VIEW_NAME,
    reducer,
    initial: INITIAL_STATE,
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  async function onReady(restored: boolean) {
    if (restored) return;
    const { subdivisionId, showBackNavigation, isUserSubdivision } = parameters.current;
    const subdivisionName = isUsersOwnSubdivision(subdivisionId)
      ? (await fetchUserSubdivision()).name // module action: not wrapped
      : await flow.fetch(
          fetchSubdivisionName({
            SubdivisionId: subdivisionId,
            ShowBackNavigation: showBackNavigation,
            IsUserSubdivision: isUserSubdivision,
          }),
        ); // R1
    dispatch({ subdivisionName });
  }

  return state;
}
