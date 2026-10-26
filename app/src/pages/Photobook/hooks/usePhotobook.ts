import { useRef } from 'react';
import { fetchLocalityHouseholdIds, type PhotobookHousehold, type SelectedHousehold } from '@/api/household';
import type { PhotobookInputs } from '@/pages/Photobook/inputs';
import { useFlowState, type IsAlive } from '@/platform/navigation';
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
    - The data action runs at start on a new visit. A view that the view cache restores with its list shows that list
      and does not call again, as in the old port (its query, never stale, came back from the view cache). A view
      restored without a list (left before the answer) calls again, with its saved variables.
    - Decision W23: the call that started runs to its end after an unmount, but its state write stops (`isAlive`).
    - A failure goes to the flow handler only while the screen is there, as in the old port (the query of the old
      port had no observer after the unmount). */
export function usePhotobook(inputs: PhotobookInputs): PhotobookFlows {
  /* The data action runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second
     run only replaces the liveness check, so the first call writes the state while the screen is there and the
     server gets one call. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'Directory_Photobook.Photobook',
    reducer: photobookReducer,
    initial: initialPhotobookState(inputs),
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      if (restored && latest.current.households !== null) return Promise.resolve();
      return fetchAtStart();
    },
  });

  /** The screen is still there: true until the unmount. */
  const isAlive: IsAlive = () => newestReadyRun.current();

  /** DataActionGetLocalityHouseholdIds, then its OnAfterFetch. The call sends the screen variables as they are at
      fetch time. */
  const fetchAtStart = async () => {
    const { In_HouseholdId, In_LocalityId } = parameters.current;
    let households: PhotobookHousehold[];
    try {
      households = await fetchLocalityHouseholdIds({
        inHouseholdId: In_HouseholdId,
        inLocalityId: In_LocalityId,
        isLoading: latest.current.isLoading,
        selectedHousehold: latest.current.selectedHousehold,
      });
    } catch (error) {
      // useFlowState sends the rejection to the flow handler.
      if (isAlive()) throw error;
      return;
    }
    if (isAlive()) dispatch({ type: 'localityHouseholdIdsFetched', households, householdId: In_HouseholdId });
  };

  return { isLoading: state.isLoading, households: state.households, selectedHousehold: state.selectedHousehold };
}
