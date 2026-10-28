import { useRef, useState } from 'react';
import {
  fetchSubdivisionDetails,
  fetchSubdivisionHouseholds,
  type SubdivisionDetails,
  type SubdivisionHouseholdCard,
} from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
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

/** The state and the flows of the supper meeting details. The view cache keeps the state of both blocks.
    - Neither block has OnParametersChanged: In_SubdivsionId is read once.
    - OnReady: the refresh of DataActionGetSubdivisionHouseholds (the child block SupperMeeting_HouseholdList), then
      the refresh of DataActionGetSubdivision, both started at once, in the call order of the port before the
      refactor. A failed GetSubdivision keeps the skeleton; a failed GetSubdivisionHouseholds sets the Error status and
      keeps the skeleton rows. Each block runs OnReady through safeExecuteClientAction, so each failure then goes once
      to the block's handleError and the flow handler (SupperMeeting_DetailsBlock.mvc.js:720-722, 758-760;
      SupperMeeting_HouseholdList.mvc.js:324; F1, Q1 (a), user 2026-10-27). The message is an app-level side
      effect: it shows also after an unmount (W23).
    - A view that the view cache restored (a back navigation) keeps its saved state and makes no call: each block skips
      its skeleton and its refresh when it is restored from the cache (Get_IsViewRestoredFromCache in OnReady). A
      block whose data was not fetched in the saved state (no saved state, or the user left before the answer) refreshes
      as on a new visit.
    - OnClick_NavigateToHousehold: with the carousel flag, the preload object of every listed household and
      HouseholdCarousel; otherwise HouseholdDetails.
    - Decision W23: OnReady runs once per mount (StrictMode runs the mount effect again: the second run only replaces
      the liveness check). After an unmount, a started flow skips its state writes; its calls already ran. A failure
      after the unmount raises nothing (E9: TST shows no message for a left block; user 2026-10-28). */
export function useSupperMeetingDetails(
  inSubdivsionId: string,
  flags: SupperMeetingDetailsFlags,
): SupperMeetingDetailsFlows {
  const [subdivisionId] = useState(inSubdivsionId);
  const navigate = useOsNavigate();
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch, latest } = useFlowState({
    viewName: `Directory_SupperMeetings.SupperMeeting_DetailsBlock#${subdivisionId}`,
    reducer: supperMeetingDetailsReducer,
    initial: INITIAL_SUPPER_MEETING_DETAILS_STATE,
    parameters: { subdivisionId },
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write of the OnReady flow, skipped after the unmount (W23). */
  const write = (action: SupperMeetingDetailsAction) => {
    if (newestReadyRun.current()) dispatch(action);
  };
  /** A failed refresh goes to the flow handler while the block is mounted. After the unmount TST shows no message for
      the block the user left (E9, probe_fetch_errors.cjs --late; item2-solution.md §8.2, user 2026-10-28). */
  const raiseLive = (error: unknown) => {
    if (newestReadyRun.current()) raiseToFlowHandler(error);
  };

  /** OnReady of SupperMeeting_HouseholdList: the refresh of GetSubdivisionHouseholds. */
  const refreshHouseholds = async () => {
    let list: SubdivisionHouseholdCard[];
    try {
      list = await fetchSubdivisionHouseholds(subdivisionId);
    } catch (error) {
      write({ type: 'householdsFetchFailed' });
      raiseLive(error);
      return;
    }
    write({ type: 'householdsFetched', list });
  };

  /** ScreenEvent_OnReady of SupperMeeting_DetailsBlock: the refresh of GetSubdivision. */
  const refreshSubdivision = async () => {
    let subdivision: SubdivisionDetails;
    try {
      subdivision = await fetchSubdivisionDetails(subdivisionId);
    } catch (error) {
      raiseLive(error); // IsDataFetched stays False: the skeleton stays.
      return;
    }
    write({ type: 'subdivisionFetched', subdivision });
  };

  /** OnReady of both blocks. A block restored from the cache with its data does nothing. */
  const onReady = async (restored: boolean) => {
    const saved = latest.current;
    await Promise.all([
      restored && saved.households.isDataFetched ? undefined : refreshHouseholds(),
      restored && saved.isDataFetched ? undefined : refreshSubdivision(),
    ]);
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
