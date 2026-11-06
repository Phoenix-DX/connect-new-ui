import type { AssembleLocalityDetails } from '@/api/event';
import { useFlowState } from '@/platform/navigation';

/** The variable of the block AssembleEventDetail_LocalitySubdivisionList and the click on its header. The component
    AssembleEventDetail_LocalitySubdivisionList calls this hook.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList */

/** AssembleAttendeeSubdivisionList_Local.IsSelected: the halls of the locality show. */
interface LocalitySubdivisionListState {
  isSelected: boolean;
}

/** The click on DIV_Locality_Header: IsSelected = not IsSelected. */
type LocalitySubdivisionListAction = { type: 'selectionToggled' };

/** OnReady of a new visit: the local copy of the input, collapsed (IsSelected False). */
const INITIAL_LOCALITY_SUBDIVISION_LIST_STATE: LocalitySubdivisionListState = { isSelected: false };

/** The variable after the click (the only assignment of the block). */
const localitySubdivisionListReducer: (
  state: LocalitySubdivisionListState,
  action: LocalitySubdivisionListAction,
) => LocalitySubdivisionListState = (state) => ({ isSelected: !state.isSelected });

/** What the component renders and the handler of the header. */
export interface LocalitySubdivisionListFlows {
  /** IsSelected. */
  isSelected: boolean;
  /** The click on DIV_Locality_Header. */
  onToggleSelected: () => void;
}

/** The state of the block. `blockId` is the block instance id. The state comes from useFlowState and the view cache
    keeps it: a view that the view cache restored shows the locality expanded or collapsed as the user left it (OnReady
    does nothing when WasCurrentViewRestoredFromCache is True). The block has no call and no OnParametersChanged; the
    halls render from the input, which the local copy equals. */
export function useLocalitySubdivisionList(
  blockId: string,
  locality: AssembleLocalityDetails,
): LocalitySubdivisionListFlows {
  const { state, dispatch } = useFlowState({
    viewName: `Assemble.AssembleEventDetail_LocalitySubdivisionList#${blockId.replace(/\$/g, '')}`,
    reducer: localitySubdivisionListReducer,
    initial: INITIAL_LOCALITY_SUBDIVISION_LIST_STATE,
    parameters: { localityId: locality.LocalityId },
  });
  return {
    isSelected: state.isSelected,
    onToggleSelected: () => {
      dispatch({ type: 'selectionToggled' });
    },
  };
}
