import { fetchTransportDetail, type TransportDetails } from '@/api/event';
import { getSkeletonLoadingIdFromMilestoneTypeId } from '@/pages/TransportDetail/actions';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import {
  contactHelpdeskEvent,
  initialTransportDetailState,
  transportDetailCallInputs,
  transportDetailReducer,
  type TransportDetailBlockInputs,
} from './transportDetailState';

/** The events of the block, which the screen handles. */
export interface TransportDetailEvents {
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
}

/** What the view reads, and its handler. */
export interface TransportDetailFlows {
  /** Title: the header title. */
  title: string;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Get_TransportDetail.IsDataFetched: the transport shows. */
  isDataFetched: boolean;
  /** TransportDetail: the answer of Get_TransportDetail. */
  transportDetail: TransportDetails;
  /** The skeleton of the milestone type (GetSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)). */
  skeletonLoadingId: number;
  /** OnHandle_ContactHelpdesk: the click of ContactHelpdesk_Footer. */
  onContactHelpdesk: () => void;
}

/** The flows of ScreenBlock_TransportDetail. The page calls this hook and passes the result to TransportDetailView.
    - OnInitialize: Title = In_PreloadMilestoneName, unless the view cache restores the view (the saved variables stay).
    - OnReady, before the first paint (useFlowState `beforePaint`, decision W28: the old port ran it in a layout
      effect), also on a restored view: IsFetchingData =
      True, then the refresh of Get_TransportDetail, then OnAfterFetch_GetTransportDetail (TransportDetail and Title
      from the answer, IsFetchingData = False). A failure keeps the skeleton and goes to the flow handler.
    - OnHandle_ContactHelpdesk raises NavigateTo_ContactHelpdesk with the subject of the transport.
    Decision W23: `isAlive` guards the state writes only. The flow has no app-level side effect after its call; a call
    that started runs to its end after an unmount, and a failure still goes to the flow handler. StrictMode runs
    OnReady once (one call).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail */
export function useTransportDetail(
  inputs: TransportDetailBlockInputs,
  events: TransportDetailEvents,
): TransportDetailFlows {
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_TransportDetail',
    reducer: transportDetailReducer,
    initial: initialTransportDetailState(inputs.In_PreloadMilestoneName),
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive) => onReady(isAlive),
    beforePaint: true,
  });

  /** OnReady: IsFetchingData = True, the refresh of Get_TransportDetail, then OnAfterFetch_GetTransportDetail. */
  const onReady = async (isAlive: IsAlive) => {
    dispatch({ type: 'fetchStarted' });
    const transportDetail = await fetchTransportDetail(transportDetailCallInputs(latest.current, parameters.current));
    if (isAlive()) dispatch({ type: 'fetched', transportDetail });
  };

  return {
    title: state.title,
    isFetchingData: state.isFetchingData,
    isDataFetched: state.isDataFetched,
    transportDetail: state.transportDetail,
    skeletonLoadingId: getSkeletonLoadingIdFromMilestoneTypeId(inputs.In_OrbitMilestoneTypeId),
    onContactHelpdesk: () => {
      const { subject, eventName } = contactHelpdeskEvent(latest.current, parameters.current);
      eventsRef.current.onNavigateToContactHelpdesk(subject, eventName);
    },
  };
}
