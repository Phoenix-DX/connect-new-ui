import { fetchGmpMilestoneHost } from '@/api/event';
import type { MilestoneDetailInputs } from '@/pages/MilestoneDetail/inputs';
import { useFlowState } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  fetchesAtStart,
  INITIAL_MILESTONE_WRAPPER_STATE,
  milestoneWrapperBody,
  milestoneWrapperReducer,
  textToInteger,
  type MilestoneWrapperBody,
} from './milestoneWrapperState';

/** The flows of ScreenBlock_MilestoneWrapper: OnReady with DataActionGetGmpMilestoneHost (on demand) and its
    OnAfterFetch. The page calls this hook and gives the result to MilestoneWrapperView.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper */

/** What the view reads. */
export interface MilestoneWrapperFlows {
  /** The part of the block that shows. */
  body: MilestoneWrapperBody;
}

/** The state and the flows of the block. The state comes from useFlowState and the view cache keeps it.
    OnReady, before the first paint: a view restored from the cache does nothing; not from a
    notification with every optional input set (In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName) nothing either;
    otherwise IsFetchingData, UserMemberId = TextToInteger(AppManager_GetCachedUserInfo.MemberId) and
    GetGmpMilestoneHost, whose OnAfterFetch sets IsFetchingData False. Flow scope (item 8):
    GetGmpMilestoneHost is a data action (R1, `flow.fetch`): after the unmount its answer and its failure are dropped.
    A failed GetGmpMilestoneHost: TST runs OnAfterFetch only in the `.then` of callDataAction (block:1135-1143), and
    the runtime rejects without that step (OutSystems.js callServerDataSource). So IsFetchingData stays True and the error goes from
    OnReady to the flow handler (useFlowState). The UnknownError handler of OnAfterFetch (block:1156-1202) guards
    only its own assignment; it does not run for a failed fetch. */
export function useMilestoneWrapper(inputs: MilestoneDetailInputs): MilestoneWrapperFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper',
    reducer: milestoneWrapperReducer,
    initial: INITIAL_MILESTONE_WRAPPER_STATE,
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
    // The old port ran OnReady in a layout effect: from a notification, the first frame is the skeleton.
    beforePaint: true,
  });

  const onReady = async (restored: boolean) => {
    if (restored || !fetchesAtStart(parameters.current)) return;
    dispatch({ type: 'fetchStarted', userMemberId: textToInteger(appManager_GetCachedUserInfo().MemberId) });
    const s = latest.current;
    const p = parameters.current;
    // GetGmpMilestoneHost: a data action (R1).
    const response = await flow.fetch(
      fetchGmpMilestoneHost({
        UserMemberId: s.userMemberId,
        IsFetchingData: s.isFetchingData,
        In_FromNotification: p.In_FromNotification,
        In_MilestoneId: p.In_MilestoneId,
        In_EventId: p.In_EventId,
        In_HostId: p.In_HostId,
        In_OrbitMilestoneTypeId: p.In_OrbitMilestoneTypeId,
        In_MilestoneName: p.In_MilestoneName,
        In_EventName: p.In_EventName,
      }),
    );
    dispatch({ type: 'gmpMilestoneHostFetched', response });
  };

  return { body: milestoneWrapperBody(state, inputs) };
}
