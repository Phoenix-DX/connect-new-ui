import type { Milestone_Screen } from '@/api/event';
import {
  fetchEventDetails,
  fetchEventNotes,
  fetchHasDocuments,
  fetchHasQRCode,
  fetchHostSurveyStatus,
} from '@/api/event';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import type { EventDetailInputs } from '@/pages/EventDetail/inputs';
import { showFeedbackMessage } from '@/platform/feedback';
import { useFlowState } from '@/platform/navigation';
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
  /** Handler_OnNotesChanged (ItemNotesSection On_NotesChanged): EventNotes = New_Notes. */
  onHandleNotesChanged: (notes: Notes) => void;
  /** Handler_OnNoteDeleted (ItemNotesSection On_NoteDeleted; WasLastNote is not read). */
  onHandleNoteDeleted: (noteId: string) => void;
}

/** What the view reads: the block state and the handlers. */
export interface EventDetailFlows {
  state: EventDetailState;
  handlers: EventDetailHandlers;
}

/** The state and the flows of the event detail. The state comes from useFlowState and the view cache keeps it.
    OnReady runs before the first paint, once (decision W28: the old block ran it in a layout effect).
    Flow scope (item 8): Get_EventDetails, Get_HostSurveyStatus, Get_HasDocuments and Get_HasQRCode are data actions
    (R1, `flow.fetch`; ScreenBlock_EventDetail.js:1713, :1741, :1769, :1825): after the unmount OnReady stops at the
    answer of the pending one; the next calls do not start, and a failure reaches no handler. Cache_UserInfo_Get is a
    module action (R2): it runs to its end. In OnHandle_ViewHelpers, NavigateTo_Helpers is an own action of the block
    (R3, `flow.own`; ScreenBlock_EventDetail.js:2359): after the unmount it stops the flow. The navigation of the parent
    from a left screen is blocked by the platform (R4). */
export function useEventDetail(
  inputs: EventDetailInputs,
  flags: EventDetailFlags,
  events: EventDetailEvents,
): EventDetailFlows {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_EventDetail',
    reducer: eventDetailReducer,
    initial: INITIAL_EVENT_DETAIL_STATE,
    parameters: inputs,
    events,
    beforePaint: true,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** OnReady. A view restored from the cache does nothing (pattern P-BACK). Otherwise IsFetchingData True (before the
      first paint), Get_EventDetails, the cached user ids, Get_HostSurveyStatus for a host event (then the local survey
      status), Get_HasDocuments, Get_HasQRCode when the selected day has milestones, then IsFetchingData False. A
      failure rejects, and useFlowState sends it to the flow handler. Each call sends the block variables of that
      moment (`latest`). */
  const onReady = async (restored: boolean): Promise<void> => {
    if (restored) return;
    const variables = () => eventDetailCallInputs(latest.current, parameters.current);

    // FetchEventNotes is fetched at start (dependency 0, ScreenBlock_EventDetail.mvc.js:1580-1595): it starts with
    // OnReady and OnReady does not wait for it (captured before Get_EventDetails, calls.md #2).
    // OnAfterFetch_FetchEventNotes: EventNotes = FetchEventNotes.Notes. A failure keeps the default EventNotes, as
    // the fetch at start of GetCoordinatorDetails in LDM_EventDetail_V2.
    flow
      .fetch(fetchEventNotes(variables())) // R1
      .then((notes) => {
        dispatch({ type: 'eventNotesSet', notes });
      })
      .catch(() => {
        // EventNotes keeps its default (Total 0, no notes).
      });

    dispatch({ type: 'fetchStarted' });
    dispatch({ type: 'eventDetailsFetched', result: await flow.fetch(fetchEventDetails(variables())) }); // R1
    const user = (await getUserInformation()).Directory_UserCurrent; // R2: Cache_UserInfo_Get
    dispatch({
      type: 'userInformationRead',
      userInformation: {
        userMemberId: user.MemberID,
        householderId: user.Directory_UserCurrent_Member.HouseholderId,
        spouseMemberId: user.Directory_UserCurrent_Member.SpouseId,
      },
    });
    if (isEventHost(latest.current)) {
      const statusId = await flow.fetch(fetchHostSurveyStatus(variables())); // R1
      dispatch({ type: 'hostSurveyStatusFetched', statusId });
      if (statusId !== '') {
        dispatch({ type: 'localSurveyStatusRead', localSurveyStatus: getLocalSurveyStatusByJSONName(statusId) });
      }
    }
    dispatch({ type: 'hasDocumentsFetched', hasDocuments: await flow.fetch(fetchHasDocuments(variables())) }); // R1
    if (latest.current.eventDetails.Milestones.length > 0) {
      dispatch({ type: 'qrCodeFetched', status: await flow.fetch(fetchHasQRCode(variables())) }); // R1
    }
    dispatch({ type: 'fetchEnded' });
  };

  /** NavigateTo_Helpers(EventId, HostId, PreloadEventName, PreloadMilestoneName), an own action of the block (R3): the
      event NavigateTo_Helpers. */
  const navigateToHelpers = flow.own(
    (eventId: string, hostId: string, preloadEventName: string, preloadMilestoneName: string) => {
      flow.events.onNavigateToHelpers(eventId, hostId, preloadEventName, preloadMilestoneName);
    },
  );

  /** OnHandle_ViewHelpers: Cache_UserInfo_Get, then NavigateTo_Helpers(In_EventId, HouseholderId, In_EventName,
      PreloadMilestoneName). */
  const viewHelpers = async (preloadMilestoneName: string): Promise<void> => {
    const user = (await getUserInformation()).Directory_UserCurrent; // R2: Cache_UserInfo_Get
    const { In_EventId, In_EventName } = parameters.current;
    navigateToHelpers(In_EventId, user.Directory_UserCurrent_Member.HouseholderId, In_EventName, preloadMilestoneName);
  };

  const handlers: EventDetailHandlers = {
    onClickGenerateQRCode: () => {
      // Nothing once scanned; else NavigateTo_GenerateQRCode, then OnApplicationEvent_GenerateQRCode.
      const s = latest.current;
      if (s.hasScanned) return;
      const e = s.eventDetails;
      flow.events.onNavigateToGenerateQRCode(e.EventStartDate, e.EventEndDate, e.Location);
      onApplicationEvent_GenerateQRCode(parameters.current.In_MemberId, parameters.current.In_EventId);
    },
    onClickOpenDocuments: () => {
      const e = latest.current.eventDetails;
      flow.events.onNavigateToViewDocuments(e.EventStartDate, e.EventEndDate, e.Location);
    },
    onClickViewEventBooklet: () => {
      // GetHasOrbitEventBooklet: NavigateTo_EventBooklet, else an Info message.
      if (flags.hasOrbitEventBooklet) {
        flow.events.onNavigateToEventBooklet();
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
      flow.events.onNavigateToHostSurvey(
        s.userInformation.householderId,
        s.eventDetails.EventStartDate,
        s.eventDetails.EventEndDate,
      );
    },
    onHandleClickedMilestone: (milestone) => {
      const target = clickedMilestoneTarget(milestone);
      if (target === null) return;
      if (target.kind === 'transport') {
        flow.events.onNavigateToTransportDetail(
          target.milestoneId,
          target.typeId,
          target.milestoneName,
          target.headerClass,
        );
        return;
      }
      flow.events.onNavigateToMilestoneDetail(
        target.milestoneId,
        parameters.current.In_EventName,
        target.milestoneName,
        target.typeId,
        target.hostId,
      );
    },
    onHandleHostAllocationView: (milestoneId, typeId, milestoneName, hostId) => {
      flow.events.onNavigateToMilestoneDetail(
        milestoneId,
        parameters.current.In_EventName,
        milestoneName,
        typeId,
        hostId,
      );
    },
    onHandleViewHelpers: (preloadMilestoneName) => {
      flow.run(() => viewHelpers(preloadMilestoneName));
    },
    onHandleContactHelpdesk: () => {
      const e = latest.current.eventDetails;
      const eventName = parameters.current.In_EventName;
      flow.events.onNavigateToContactHelpdesk(
        getContactHelpdeskSubject_Event(eventName, e.EventStartDate, e.EventEndDate, e.Location),
        eventName,
      );
    },
    onHandleClickedDate: (milestoneTimeTypeId, selectedDate, position) => {
      dispatch({ type: 'dateClicked', milestoneTimeTypeId, selectedDate, position });
    },
    onHandleNotesChanged: (notes) => {
      dispatch({ type: 'eventNotesSet', notes });
    },
    onHandleNoteDeleted: (noteId) => {
      dispatch({ type: 'noteDeleted', noteId });
    },
  };

  return { state, handlers };
}
