import type { Milestone_Screen } from '@/api/event';
import { fetchEventDetails, fetchHasDocuments, fetchHasQRCode, fetchHostSurveyStatus } from '@/api/event';
import type { EventDetailInputs } from '@/pages/EventDetail/inputs';
import { showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import { getLocalSurveyStatusByJSONName } from '@/platform/storage/localEntities';
import { getContactHelpdeskSubject_Event, onApplicationEvent_GenerateQRCode } from './eventDetailActions';
import {
  clickedMilestoneTarget,
  eventDetailCallInputs,
  eventDetailReducer,
  INITIAL_EVENT_DETAIL_STATE,
  isEventHost,
  mayOpenHostSurvey,
  type EventDetailAction,
  type EventDetailState,
} from './eventDetailState';

/** The flows of ScreenBlock_EventDetail: OnReady (the four data actions, one after the other) and the click handlers
    of the view. The page calls this hook and gives the result to EventDetailView.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail */

/** The events of the block, which the screen handles. */
export interface EventDetailEvents {
  /** Event NavigateTo_TransportDetail(MilestoneId, OrbitMilestoneTypeId, MilestoneName, HeaderClass). */
  onNavigateToTransportDetail: (
    milestoneId: string,
    typeId: string,
    milestoneName: string,
    headerClass: string,
  ) => void;
  /** Event NavigateTo_EventBooklet. */
  onNavigateToEventBooklet: () => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
  /** Event NavigateTo_GenerateQRCode(EventStartDate, EventEndDate, EventLocation). */
  onNavigateToGenerateQRCode: (eventStartDate: string, eventEndDate: string, eventLocation: string) => void;
  /** Event NavigateTo_HostSurvey(HouseholderId, EventStartDate, EventEndDate). */
  onNavigateToHostSurvey: (householderId: string, eventStartDate: string, eventEndDate: string) => void;
  /** Event NavigateTo_MilestoneDetail(MilestoneId, EventName, MilestoneName, OrbitMilestoneTypeId, HostId). */
  onNavigateToMilestoneDetail: (
    milestoneId: string,
    eventName: string,
    milestoneName: string,
    orbitMilestoneTypeId: string,
    hostId: string,
  ) => void;
  /** Event NavigateTo_ViewDocuments(EventStartDate, EventEndDate, EventLocation). */
  onNavigateToViewDocuments: (eventStartDate: string, eventEndDate: string, eventLocation: string) => void;
  /** Event NavigateTo_Helpers(EventId, HostId, PreloadEventName, PreloadMilestoneName). */
  onNavigateToHelpers: (
    eventId: string,
    hostId: string,
    preloadEventName: string,
    preloadMilestoneName: string,
  ) => void;
}

/** The flags that the flows read. The page reads them. */
export interface EventDetailFlags {
  /** GetHasOrbitEventBooklet (flag mobileOrbitEventBooklet). */
  hasOrbitEventBooklet: boolean;
}

/** The handlers of the view, named as the client actions of the block. */
export interface EventDetailHandlers {
  /** OnClick_GenerateQRCode (header icon and the "GENERATE QR CODE" button). */
  onClickGenerateQRCode: () => void;
  /** OnClick_OpenDocuments (header paper-clip icon). */
  onClickOpenDocuments: () => void;
  /** OnClick_ViewEventBooklet ("View Event Guest List"). */
  onClickViewEventBooklet: () => void;
  /** OnClick_NavigateToHostSurvey ("Complete / View Host Survey"). */
  onClickNavigateToHostSurvey: () => void;
  /** OnHandle_ClickedMilestone (Card_Milestone ClickedMilestone). */
  onHandleClickedMilestone: (milestone: Milestone_Screen) => void;
  /** OnHandle_HostAllocationView (HostAllocation_List OnClick_View). */
  onHandleHostAllocationView: (milestoneId: string, typeId: string, milestoneName: string, hostId: string) => void;
  /** OnHandle_ViewHelpers (HostAllocation_List OnClick_ViewHelpers). */
  onHandleViewHelpers: (preloadMilestoneName: string) => void;
  /** OnHandle_ContactHelpdesk (ContactHelpdesk_Footer OnClick). */
  onHandleContactHelpdesk: () => void;
  /** OnHandle_ClickedDate (EventDateSelection ClickedDate). */
  onHandleClickedDate: (milestoneTimeTypeId: string, selectedDate: string, position: number) => void;
}

/** What the view reads: the block state and the handlers. */
export interface EventDetailFlows {
  state: EventDetailState;
  handlers: EventDetailHandlers;
}

/** The state and the flows of the event detail. The state comes from useFlowState and the view cache keeps it.
    OnReady runs before the first paint, once (decision W28: the old block ran it in a layout effect).
    Decision W23: OnReady runs to its end, as in the old port. After an unmount it still makes its calls (with the
    variables that it would have sent) and sends a failure to the flow handler; only its state writes stop. */
export function useEventDetail(
  inputs: EventDetailInputs,
  flags: EventDetailFlags,
  events: EventDetailEvents,
): EventDetailFlows {
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_EventDetail',
    reducer: eventDetailReducer,
    initial: INITIAL_EVENT_DETAIL_STATE,
    parameters: inputs,
    events,
    beforePaint: true,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => onReady(isAlive, restored),
  });

  /** OnReady. A view restored from the cache does nothing (pattern P-BACK). Otherwise IsFetchingData True (before the
      first paint), Get_EventDetails, the cached user ids, Get_HostSurveyStatus for a host event (then the local survey
      status), Get_HasDocuments, Get_HasQRCode when the selected day has milestones, then IsFetchingData False. A
      failure rejects, and useFlowState sends it to the flow handler. `isAlive` is true until the unmount. */
  const onReady = async (isAlive: IsAlive, restored: boolean): Promise<void> => {
    if (restored) return;
    /* The flow keeps its own copy of the state: the next calls send its variables, also after an unmount, when the
       state writes stop. No other flow writes the state while OnReady runs (the skeleton hides the controls). */
    let model = latest.current;
    const write = (action: EventDetailAction) => {
      model = eventDetailReducer(model, action);
      if (isAlive()) dispatch(action);
    };
    const variables = () => eventDetailCallInputs(model, parameters.current);

    write({ type: 'fetchStarted' });
    write({ type: 'eventDetailsFetched', result: await fetchEventDetails(variables()) });
    const user = (await getUserInformation()).Directory_UserCurrent;
    write({
      type: 'userInformationRead',
      userInformation: {
        userMemberId: user.MemberID,
        householderId: user.Directory_UserCurrent_Member.HouseholderId,
        spouseMemberId: user.Directory_UserCurrent_Member.SpouseId,
      },
    });
    if (isEventHost(model)) {
      const statusId = await fetchHostSurveyStatus(variables());
      write({ type: 'hostSurveyStatusFetched', statusId });
      if (statusId !== '') {
        write({ type: 'localSurveyStatusRead', localSurveyStatus: getLocalSurveyStatusByJSONName(statusId) });
      }
    }
    write({ type: 'hasDocumentsFetched', hasDocuments: await fetchHasDocuments(variables()) });
    if (model.eventDetails.Milestones.length > 0) {
      write({ type: 'qrCodeFetched', status: await fetchHasQRCode(variables()) });
    }
    write({ type: 'fetchEnded' });
  };

  const handlers: EventDetailHandlers = {
    onClickGenerateQRCode: () => {
      // Nothing once scanned; else NavigateTo_GenerateQRCode, then OnApplicationEvent_GenerateQRCode.
      const s = latest.current;
      if (s.hasScanned) return;
      const e = s.eventDetails;
      eventsRef.current.onNavigateToGenerateQRCode(e.EventStartDate, e.EventEndDate, e.Location);
      onApplicationEvent_GenerateQRCode(parameters.current.In_MemberId, parameters.current.In_EventId);
    },
    onClickOpenDocuments: () => {
      const e = latest.current.eventDetails;
      eventsRef.current.onNavigateToViewDocuments(e.EventStartDate, e.EventEndDate, e.Location);
    },
    onClickViewEventBooklet: () => {
      // GetHasOrbitEventBooklet: NavigateTo_EventBooklet, else an Info message.
      if (flags.hasOrbitEventBooklet) {
        eventsRef.current.onNavigateToEventBooklet();
        return;
      }
      showFeedbackMessage(
        "You don't have access to this feature. Please contact your event organiser for more information.",
        0,
      );
    },
    onClickNavigateToHostSurvey: () => {
      // A Sent survey that the user may not edit: an Error message; else NavigateTo_HostSurvey.
      const s = latest.current;
      if (!mayOpenHostSurvey(s)) {
        showFeedbackMessage('Only Householder is able to edit the survey.', 3);
        return;
      }
      eventsRef.current.onNavigateToHostSurvey(
        s.userInformation.householderId,
        s.eventDetails.EventStartDate,
        s.eventDetails.EventEndDate,
      );
    },
    onHandleClickedMilestone: (milestone) => {
      const target = clickedMilestoneTarget(milestone);
      if (target === null) return;
      if (target.kind === 'transport') {
        eventsRef.current.onNavigateToTransportDetail(
          target.milestoneId,
          target.typeId,
          target.milestoneName,
          target.headerClass,
        );
        return;
      }
      eventsRef.current.onNavigateToMilestoneDetail(
        target.milestoneId,
        parameters.current.In_EventName,
        target.milestoneName,
        target.typeId,
        target.hostId,
      );
    },
    onHandleHostAllocationView: (milestoneId, typeId, milestoneName, hostId) => {
      eventsRef.current.onNavigateToMilestoneDetail(
        milestoneId,
        parameters.current.In_EventName,
        milestoneName,
        typeId,
        hostId,
      );
    },
    onHandleViewHelpers: (preloadMilestoneName) => {
      // Cache_UserInfo_Get, then NavigateTo_Helpers(In_EventId, HouseholderId, In_EventName, PreloadMilestoneName).
      // An event flow without state writes: it runs to its end after an unmount (W23).
      void (async () => {
        try {
          const user = (await getUserInformation()).Directory_UserCurrent;
          const { In_EventId, In_EventName } = parameters.current;
          eventsRef.current.onNavigateToHelpers(
            In_EventId,
            user.Directory_UserCurrent_Member.HouseholderId,
            In_EventName,
            preloadMilestoneName,
          );
        } catch (e) {
          raiseToFlowHandler(e);
        }
      })();
    },
    onHandleContactHelpdesk: () => {
      const e = latest.current.eventDetails;
      const eventName = parameters.current.In_EventName;
      eventsRef.current.onNavigateToContactHelpdesk(
        getContactHelpdeskSubject_Event(eventName, e.EventStartDate, e.EventEndDate, e.Location),
        eventName,
      );
    },
    onHandleClickedDate: (milestoneTimeTypeId, selectedDate, position) => {
      dispatch({ type: 'dateClicked', milestoneTimeTypeId, selectedDate, position });
    },
  };

  return { state, handlers };
}
