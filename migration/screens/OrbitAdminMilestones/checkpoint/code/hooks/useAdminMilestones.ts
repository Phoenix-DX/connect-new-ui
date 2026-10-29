import { fetchAdminMilestones, type Milestone_Screen } from '@/api/event';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useFlowState } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { AdminMilestonesInputs } from '@/pages/OrbitAdminMilestones/inputs';
import {
  adminMilestonesCallInputsOf,
  adminMilestonesReducer,
  INITIAL_ADMIN_MILESTONES_STATE,
  memberIdOrNull,
  milestoneDetailTargetOf,
  missingDataMessage,
  missingDataOf,
  type AdminMilestonesState,
  type MilestoneDetailTarget,
} from './adminMilestonesState';

/** The events of the block, which the screen handles. */
interface AdminMilestonesEvents {
  /** Event NavigateTo_MilestoneDetail(EventId, MilestoneId, MilestoneName, MilestoneDate, MilestoneDescription,
      MilestoneStartDate, MilestoneEndDate). */
  onNavigateToMilestoneDetail: (target: MilestoneDetailTarget) => Promise<void> | void;
}

/** What the view reads, and the handler of the card clicks. */
interface AdminMilestonesFlows {
  /** The block variables (rendered). */
  state: AdminMilestonesState;
  /** Card_Milestone ClickedMilestone, with the current row of the list. */
  onMilestoneCardClicked: (milestone: Milestone_Screen) => void;
}

/** The flows of ScreenBlock_AdminMilestones. The page calls this hook and gives the result to AdminMilestonesView.
    - OnReady: a view that the view cache restored with the Get_AdminMilestoneList answer does nothing
      (WasCurrentViewRestoredFromCache); restored without the answer, OnReady runs again (F40, as useAdminLanding).
      Otherwise IsFetchingData True, UserFirstName and UserMemberId from AppManager_GetCachedUserInfo (the MemberId as
      a Long Integer, else the null identifier), then Refresh_GetMilestonesByEventId: Get_AdminMilestoneList (on
      demand; it sends the block variables and EventId) and OnAfterFetch (Milestones = Response, IsFetchingData False).
    - Handler_ClickedMilestone: without a MilestoneId, the Info message of the missing data; else the event
      NavigateTo_MilestoneDetail.
    - Flow scope (item 8): Get_AdminMilestoneList is a data action (R1, `flow.fetch`): after the unmount its answer and
      its failure are dropped, and OnAfterFetch does not run. The block event goes through `flow.events` (R3). The
      card click is a widget handler (R6, `flow.run`).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones */
export function useAdminMilestones(inputs: AdminMilestonesInputs, events: AdminMilestonesEvents): AdminMilestonesFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: `Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones#${inputs.EventId}`,
    reducer: adminMilestonesReducer,
    initial: INITIAL_ADMIN_MILESTONES_STATE,
    parameters: inputs,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** Refresh_GetMilestonesByEventId: Get_AdminMilestoneList, then OnAfterFetch_Get_AdminMilestoneList. */
  const refreshGetMilestonesByEventId = async () => {
    const milestones = await flow.fetch(
      fetchAdminMilestones(adminMilestonesCallInputsOf(latest.current, parameters.current.EventId)),
    ); // R1
    dispatch({ isDataFetched: true, milestones, isFetchingData: false });
  };

  /** OnReady. A rejection goes to the flow handler (useFlowState); the skeleton stays. */
  const onReady = async (restored: boolean) => {
    // restored without data: call again (F40; OutSystems keeps the skeleton)
    if (restored && latest.current.isDataFetched) return;
    dispatch({ isFetchingData: true });
    const userInformation = appManager_GetCachedUserInfo();
    dispatch({
      userFirstName: userInformation.FirstName,
      userMemberId: memberIdOrNull(userInformation.MemberId),
    });
    await refreshGetMilestonesByEventId();
  };

  /** Handler_ClickedMilestone. */
  const clickedMilestone = async (milestone: Milestone_Screen) => {
    const errorMessage = missingDataOf(milestone);
    if (errorMessage === '') {
      await flow.events.onNavigateToMilestoneDetail(milestoneDetailTargetOf(parameters.current.EventId, milestone)); // R3
    } else {
      showFeedbackMessage(missingDataMessage(errorMessage), PLATFORM_MESSAGE_TYPE.info);
    }
  };

  return {
    state,
    onMilestoneCardClicked: (milestone) => {
      flow.run(() => clickedMilestone(milestone));
    },
  };
}
