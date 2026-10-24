import { useRef, useState } from 'react';
import {
  fetchSubdivisionDetails,
  fetchSubdivisionHouseholds,
  type SubdivisionDetails,
  type SubdivisionHouseholdCard,
} from '@/api/locality';
import { useFlag } from '@/platform/flags';
import { setPreloadObject, useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import type { CarouselPreloadedHouseholds } from '@/lib/ubtConnect/structures';
import {
  INITIAL_SUPPER_MEETING_DETAILS_STATE,
  supperMeetingDetailsReducer,
  type SupperMeetingDetailsAction,
  type SupperMeetingDetailsState,
} from './supperMeetingDetailsState';

/** The flows of the supper meeting details: the data actions of the blocks SupperMeeting_DetailsBlock and
    SupperMeeting_HouseholdList, and the navigation to a household.
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock */

/** The flag that the supper meeting details read: the household carousel (`C2EnableCarousel`,
    GetHasCarouselEnabled). */
export interface SupperMeetingDetailsFlags {
  hasCarouselEnabled: boolean;
}

/** Reads the flag of the supper meeting details. */
export function useSupperMeetingDetailsFlags(): SupperMeetingDetailsFlags {
  return { hasCarouselEnabled: useFlag('C2EnableCarousel') };
}

/** What the container renders and the handler of the household list event. */
export interface SupperMeetingDetailsFlows {
  /** In_SubdivsionId, as the blocks read it once. */
  subdivisionId: string;
  /** The state (rendered). */
  state: SupperMeetingDetailsState;
  /** OnClick_NavigateToHousehold, on Event_OnClick_Household(HouseholdId, HouseholdIdList) of the household list. */
  onClickNavigateToHousehold: (householdId: string, householdIdList: string[]) => void;
}

/** A view that the view cache restores starts again from the skeletons, and OnReady refreshes both data actions: the
    blocks keep no state over a back navigation (OutSystems skips the skeleton and the refresh of a restored view; the
    port before the refactor did not, and this hook keeps that behavior). */
const restartRestoredView = (): SupperMeetingDetailsState => INITIAL_SUPPER_MEETING_DETAILS_STATE;

/** The state and the flows of the supper meeting details.
    - Neither block has OnParametersChanged: In_SubdivsionId is read once.
    - OnReady: the refresh of DataActionGetSubdivisionHouseholds (the child block SupperMeeting_HouseholdList), then
      the refresh of DataActionGetSubdivision, both started at once, in the call order of the port before the
      refactor. A failed GetSubdivision keeps the skeleton; a failed GetSubdivisionHouseholds sets the Error status and
      keeps the skeleton rows. Neither failure goes to the flow handler.
    - OnClick_NavigateToHousehold: with the carousel flag, the preload object of every listed household and
      HouseholdCarousel; otherwise HouseholdDetails.
    - Decision W23: OnReady runs once per mount (StrictMode runs the mount effect again: the second run only replaces
      the liveness check). After an unmount, a started flow skips its state writes only; its calls already ran. */
export function useSupperMeetingDetails(
  inSubdivsionId: string,
  flags: SupperMeetingDetailsFlags,
): SupperMeetingDetailsFlows {
  const [subdivisionId] = useState(inSubdivsionId);
  const navigate = useOsNavigate();
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch } = useFlowState({
    viewName: `Directory_SupperMeetings.SupperMeeting_DetailsBlock#${subdivisionId}`,
    reducer: supperMeetingDetailsReducer,
    initial: INITIAL_SUPPER_MEETING_DETAILS_STATE,
    restore: restartRestoredView,
    parameters: { subdivisionId },
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady();
    },
  });

  /** A state write of the OnReady flow, skipped after the unmount (W23). */
  const write = (action: SupperMeetingDetailsAction) => {
    if (newestReadyRun.current()) dispatch(action);
  };

  /** OnReady of SupperMeeting_HouseholdList: the refresh of GetSubdivisionHouseholds. */
  const refreshHouseholds = async () => {
    let list: SubdivisionHouseholdCard[];
    try {
      list = await fetchSubdivisionHouseholds(subdivisionId);
    } catch {
      write({ type: 'householdsFetchFailed' });
      return;
    }
    write({ type: 'householdsFetched', list });
  };

  /** ScreenEvent_OnReady of SupperMeeting_DetailsBlock: the refresh of GetSubdivision. */
  const refreshSubdivision = async () => {
    let subdivision: SubdivisionDetails;
    try {
      subdivision = await fetchSubdivisionDetails(subdivisionId);
    } catch {
      return; // IsDataFetched stays False: the skeleton stays.
    }
    write({ type: 'subdivisionFetched', subdivision });
  };

  const onReady = async () => {
    await Promise.all([refreshHouseholds(), refreshSubdivision()]);
  };

  const onClickNavigateToHousehold = (householdId: string, householdIdList: string[]) => {
    if (flags.hasCarouselEnabled) {
      const preloaded: CarouselPreloadedHouseholds = {
        CarouselHouseholdItem: householdIdList.map((household) => ({ Household: household })),
      };
      setPreloadObject(preloaded);
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });
    } else {
      navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });
    }
  };

  return { subdivisionId, state, onClickNavigateToHousehold };
}
