import { useRef } from 'react';
import { fetchAdminEvents, type Event_Screen } from '@/api/event';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  adminEventsCallInputsOf,
  adminLandingReducer,
  clickEventPayloadOf,
  eventDetailTargetOf,
  hasStarted,
  INITIAL_ADMIN_LANDING_STATE,
  textToLongIntegerOrNull,
  type AdminLandingPatch,
  type AdminLandingState,
  type EventDetailTarget,
} from './adminLandingState';
import { onApplicationEvent_ClickEvent } from './applicationEvents';

/** The events of the block, which the screen handles. */
export interface AdminLandingEvents {
  /** Event NavigateTo_EventDetail(EventId, EventName, EventStartDate, EventEndDate, EventLocation,
      EventTypeFriendly). */
  onNavigateToEventDetail: (target: EventDetailTarget) => Promise<void> | void;
}

/** What the view reads, and the handler of the card clicks. */
export interface AdminLandingFlows {
  /** The block variables (rendered). */
  state: AdminLandingState;
  /** Card_Event ClickedEvent(EventSummary), with the TypeFriendly of the card's row. */
  onEventCardClicked: (eventSummary: Event_Screen, eventTypeFriendly: string) => void;
}

/** The flows of ScreenBlock_AdminLanding. The page calls this hook and gives the result to AdminLandingView.
    - OnReady: a view that the view cache restored does nothing (WasCurrentViewRestoredFromCache). Otherwise
      IsFetchingData True, UserFirstName and UserMemberId from AppManager_GetCachedUserInfo (the MemberId as a Long
      Integer, else the null identifier), then Refresh_GetEventsByMemberId: Get_AdminEventsList (on demand; it sends
      the block variables) and OnAfterFetch (EventsSummary = Response, IsFetchingData False).
    - OnHandle_EventCardClicked: the event NavigateTo_EventDetail, then OnApplicationEvent_ClickEvent.
    - Decision W23: after an unmount, a started flow skips its state writes only. Its error still goes to the flow
      handler, and a card click still navigates and records its audit event.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding */
export function useAdminLanding(events: AdminLandingEvents): AdminLandingFlows {
  /* OnReady runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call
     only replaces the liveness check, so the first flow writes the state while the screen is there. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding',
    reducer: adminLandingReducer,
    initial: INITIAL_ADMIN_LANDING_STATE,
    parameters: null,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write of the OnReady flow, skipped after the unmount (W23). */
  const write = (patch: AdminLandingPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  /** Refresh_GetEventsByMemberId: Get_AdminEventsList, then OnAfterFetch_Get_AdminEventsList. */
  const refreshGetEventsByMemberId = async () => {
    const eventsSummary = await fetchAdminEvents(adminEventsCallInputsOf(latest.current));
    write({ isDataFetched: true, eventsSummary, isFetchingData: false });
  };

  /** OnReady. A rejection goes to the flow handler (useFlowState); the skeleton stays. */
  const onReady = async (restored: boolean) => {
    if (restored && hasStarted(latest.current)) return;
    write({ isFetchingData: true });
    const userInformation = appManager_GetCachedUserInfo();
    write({
      userFirstName: userInformation.FirstName,
      userMemberId: textToLongIntegerOrNull(userInformation.MemberId),
    });
    await refreshGetEventsByMemberId();
  };

  /** OnHandle_EventCardClicked. */
  const eventCardClicked = async (eventSummary: Event_Screen, eventTypeFriendly: string) => {
    await eventsRef.current.onNavigateToEventDetail(eventDetailTargetOf(eventSummary, eventTypeFriendly));
    onApplicationEvent_ClickEvent(clickEventPayloadOf(eventSummary));
  };

  return {
    state,
    onEventCardClicked: (eventSummary, eventTypeFriendly) => {
      eventCardClicked(eventSummary, eventTypeFriendly).catch(raiseToFlowHandler);
    },
  };
}
