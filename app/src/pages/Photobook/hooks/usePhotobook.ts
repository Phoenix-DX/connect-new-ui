import { fetchLocalityHouseholdIds, type PhotobookHousehold, type SelectedHousehold } from '@/api/household';
import type { PhotobookInputs } from '@/pages/Photobook/inputs';
import { useFlowState } from '@/platform/navigation';
import { initialPhotobookState, photobookReducer } from './photobookState';

/** The flows of the Photobook screen: OnInitialize (the initial state), the data action GetLocalityHouseholdIds,
    fetched at start, and its OnAfterFetch. The page calls this hook and renders the carousel with the result.
    @origin UBTConnect.Directory_Photobook.Photobook */

/** What the page reads. */
export interface PhotobookFlows {
  /** IsLoading. */
  isLoading: boolean;
  /** GetLocalityHouseholdIds.List; null until the first answer (a restored view has its saved list at once). */
  households: PhotobookHousehold[] | null;
  /** SelectedHousehold. */
  selectedHousehold: SelectedHousehold;
}

/** The state and the flows of the screen. The state comes from useFlowState and the view cache keeps it.
    - The data action (Fetch At start) runs on every visit. A view that the view cache restores keeps its saved state
      (OnInitialize: IsViewRestoredFromCache sets nothing, Photobook.mvc.js:500-515) and shows its saved list at once;
      the call refreshes it in the background, without the loading state (pattern P-BACK), and its OnAfterFetch sets
      the list, SelectedHousehold.Position and IsLoading again.
    - Flow scope (item 8): GetLocalityHouseholdIds is a data action (R1, Photobook.js:379). The call that started runs
      to its end after an unmount, but its answer (OnAfterFetch, :542) and its failure are dropped. useFlowState runs
      the call once per screen, also in StrictMode (dev). */
export function usePhotobook(inputs: PhotobookInputs): PhotobookFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Directory_Photobook.Photobook',
    reducer: photobookReducer,
    initial: initialPhotobookState(inputs),
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render. A failure goes to the flow handler.
    onReady: () => fetchAtStart(),
  });

  /** DataActionGetLocalityHouseholdIds, then its OnAfterFetch. The call sends the screen variables as they are at
      fetch time. */
  const fetchAtStart = async () => {
    const { In_HouseholdId, In_LocalityId } = parameters.current;
    const households = await flow.fetch(
      fetchLocalityHouseholdIds({
        inHouseholdId: In_HouseholdId,
        inLocalityId: In_LocalityId,
        isLoading: latest.current.isLoading,
        selectedHousehold: latest.current.selectedHousehold,
      }),
    ); // R1
    dispatch({ type: 'localityHouseholdIdsFetched', households, householdId: In_HouseholdId });
  };

  return { isLoading: state.isLoading, households: state.households, selectedHousehold: state.selectedHousehold };
}
