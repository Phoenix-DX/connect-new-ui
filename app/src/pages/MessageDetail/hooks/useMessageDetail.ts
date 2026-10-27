import { useRef } from 'react';
import {
  fetchMessageInstance,
  fetchMessageTemplateParameters,
  getOrbitHostSurveyNotificationParameters,
  getOrbitNotificationParameters,
  storeAdaptiveCardResponses,
  type MessageDetail,
  type MessageDetailCallInputs,
  type MessageInstanceResult,
  type MessageParameter,
} from '@/api/message';
import { isCommunicationException } from '@/platform/feedback/flowErrors';
import { markNotificationOpened } from '@/api/notification';
import type { MessageDetailInputs } from '@/pages/MessageDetail/inputs';
import {
  assembleEventParameters,
  buildAssembleNotificationContent,
  deserializeAdaptiveCardActionSubmitData,
  getHasAssemble,
  getHasOrbitAccess,
  getHasOrbitHostSurvey,
  substringJS,
  VIEW_EVENT_DATA_END,
  VIEW_EVENT_DATA_START,
} from '@/pages/MessageDetail/actions';
import { MessageInfoType, MessageSenderTarget } from '@/pages/MessageDetail/staticEntities';
import { feedbackMessageAutoClose, PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, useFlowState, type IsAlive } from '@/platform/navigation';
import { clientVar, currentUserId, isSignedIn } from '@/platform/session/session';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { getUserInformation } from '@/platform/session/userInfo';
import { cache_SignedImageURL_Get } from '@/lib/ubtConnectUtils/actions';
import { Connect_Entity, ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import {
  addFirstSentence,
  decrementReadWhatsNewsCounter,
  initialMessageDetailState,
  isOrbitKind,
  isPrivateMessageOfAnotherUser,
  MESSAGE_CHECK_CONNECTION,
  MESSAGE_EVENT_NOT_ACCESSIBLE,
  MESSAGE_FORM_THANKS,
  MESSAGE_INVALID_ID,
  MESSAGE_NO_ACCESS,
  MESSAGE_NO_ASSEMBLE_ACCESS,
  MESSAGE_NO_HOST_SURVEY_ACCESS,
  MESSAGE_NO_ORBIT_ACCESS,
  MESSAGE_NOT_AVAILABLE,
  messageAccess,
  messageDetailReducer,
  needsTemplateParameters,
  textToLongInteger,
  type MessageDetailAction,
} from './messageDetailState';

/** The flows of ScreenBlock_MessageDetail: OnReady (the refresh of GetMessageInstance), GetMessageInstanceByIdOnAfterFetch
    (the access decisions, Wrapper_NotificationOpened, the sender photo, the template parameters and the Orbit
    greeting) and MessageRetractedFlow. The page calls this hook and passes the result to MessageDetailView.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail */

/** The events of the block, which the screen handles (the block's Share_UI events go from the page to the screen
    handlers directly). */
export interface MessageDetailEvents {
  /** Event NavigateTo_MessageList(NoPermission). */
  onNavigateToMessageList: () => void;
  /** Event NavigateTo_Login. */
  onNavigateToLogin: () => void;
  /** Event NavigateTo_OrbitEvent(Event_MemberId, Event_EventId, Event_EventName). */
  onNavigateToOrbitEvent?: (memberId: string, eventId: string, eventName: string) => void;
  /** Event NavigateTo_OrbitMilestone(Event_MilestoneId, Event_EventId, Event_EventName). */
  onNavigateToOrbitMilestone?: (milestoneId: string, eventId: string, eventName: string) => void;
  /** Event NavigateTo_OrbitHostSurvey(Event_MemberId, Event_EventId, Event_EventName, Event_StartDate, Event_EndDate). */
  onNavigateToOrbitHostSurvey?: (
    memberId: string,
    eventId: string,
    eventName: string,
    startDate: string,
    endDate: string,
  ) => void;
  /** Event NavigateTo_AssembleEvent(EventParentId, EventInstanceId, EventTypeTitle). */
  onNavigateToAssembleEvent?: (eventParentId: string, eventInstanceId: string, eventTypeTitle: string) => void;
  /** Event AddAuditAndNavigateTo_EventEmail(Event_EventId, EventHostId). */
  onAddAuditAndNavigateToEventEmail?: (eventId: string, eventHostId: string) => unknown;
  /** Event AddAuditAndNavigateTo_EventDetail(EventHostId, EventId). */
  onAddAuditAndNavigateToEventDetail?: (eventHostId: string, eventId: string) => unknown;
}

/** What the view reads, and the block client actions that its widgets call. */
export interface MessageDetailFlows {
  /** [IsLoading]: true until the message is ready. */
  isLoading: boolean;
  /** GetMessageInstance.Message as the flows prepared it; null until the first answer. */
  message: MessageDetail | null;
  /** GetMessageTemplateParametersByMessageTemplateId.List; null until it is fetched (IsDataFetched False). */
  parameters: MessageParameter[] | null;
  /** [ShowAssembleAction]. */
  showAssembleAction: boolean;
  /** OnClick_ViewOrbitEvent(MessageSenderTargetId). */
  onClickViewOrbitEvent: (messageSenderTargetId: number) => Promise<void>;
  /** OnClick_ViewAssembleEvent(MessageSenderTargetId): the input is not read. */
  onClickViewAssembleEvent: () => void;
  /** AdaptiveCardViewerOnExecuteAction(CardPayload, ActionId, FormPayload), the handler of the NotificationDetailBlock
      event AdaptiveCardEventExecuted. */
  adaptiveCardViewerOnExecuteAction: (cardPayload: string, actionId: string, formPayload: string) => Promise<void>;
}

/** The error message of the block, closed automatically (FeedbackMessageAutoClose, no delay, no debounce). */
function autoCloseError(message: string): void {
  feedbackMessageAutoClose({
    title: '',
    message,
    messageType: 'error',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
}

/** The state and the flows of the message detail. The state comes from useFlowState and the view cache keeps it.
    Decision W23: a flow that started runs to its end, as in the old port. After an unmount it still shows its
    messages, navigates, lowers the counters and makes its calls; only its state writes stop (`isAlive`). */
export function useMessageDetail(inputs: MessageDetailInputs, events: MessageDetailEvents): MessageDetailFlows {
  /* OnReady runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call
     only replaces the liveness check, so the first flow writes the state while the screen is there and its side
     effects run once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  /** WasCurrentViewRestoredFromCache of this view, for the refresh after a card submit. */
  const restoredView = useRef(false);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
  } = useFlowState({
    viewName: 'MyNotifications.ScreenBlock_MessageDetail',
    reducer: messageDetailReducer,
    initial: initialMessageDetailState(inputs),
    parameters: inputs,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      restoredView.current = restored;
      return onReady(restored);
    },
  });

  /** The screen is still there: true until the unmount. */
  const isAlive: IsAlive = () => newestReadyRun.current();
  /** A state write of a flow, skipped after the unmount (W23). */
  const write = (action: MessageDetailAction) => {
    if (isAlive()) dispatch(action);
  };

  /** The message, ReplaceOnUpcomingNavigation and the event NavigateTo_MessageList. MessageRetractedFlow is this
      sequence with the "not available" message. */
  const leaveToMessageList = (message: string) => {
    autoCloseError(message);
    replaceOnUpcomingNavigation();
    eventsRef.current.onNavigateToMessageList();
  };

  /** The "Is Notification Read?" part of GetMessageInstanceByIdOnAfterFetch. `variables` are the block variables
      that the calls send. It returns null when the action ends early. */
  const prepareMessage = async (
    result: MessageInstanceResult,
    variables: MessageDetailCallInputs,
    restored: boolean,
  ): Promise<MessageDetail | null> => {
    const fetched = result.message;
    let message = fetched;
    if (!message.isRead) {
      if (message.messageInfoTypeId === MessageInfoType.WhatsNew) decrementReadWhatsNewsCounter();
      else decrementReadMessagesCounter();
      const isRetracted = await markNotificationOpened(variables.MessageInstanceId);
      if (isRetracted) {
        leaveToMessageList(MESSAGE_NOT_AVAILABLE);
        return null;
      }
    }
    if (message.sentAs === null) {
      // Cache_SignedImageURL_Get(TextToInteger(CreatedByMemberId), Member, Small) gives ProfileIconURL.
      const url = await cache_SignedImageURL_Get(message.createdByMemberId, Connect_Entity.Member, ImageSize.Small);
      message = { ...message, profileIconURL: url };
    }
    if (needsTemplateParameters(message)) {
      // A restored view keeps the parameters of its cached state.
      let parameters = latest.current.parameters ?? [];
      if (!restored) {
        parameters = await fetchMessageTemplateParameters(variables);
        write({ type: 'templateParametersFetched', parameters, senderTargetId: message.senderTargetId });
      }
      if (isOrbitKind(message.senderTargetId)) {
        const userInformation = await getUserInformation();
        message = {
          ...message,
          messageContent: addFirstSentence(userInformation.Directory_UserCurrent.FirstName, message.messageContent),
        };
      } else if (message.senderTargetId === MessageSenderTarget.Assemble) {
        // BuildAssembleNotificationContent(the parameters, MessageContent, the three PlaceholderDelimiters).
        const content = await buildAssembleNotificationContent(
          parameters,
          message.messageContent,
          result.placeholderDelimiters,
        );
        message = { ...message, messageContent: content };
      }
    }
    return message;
  };

  /** GetMessageInstanceByIdOnAfterFetch. */
  const onAfterFetchMessageInstance = async (result: MessageInstanceResult, restored: boolean) => {
    // MessageInstanceId = Message.MessageInstance.Id. The flow keeps its own copy: the next calls send it, also
    // after an unmount, when the state write is skipped.
    const variables = { ...latest.current.variables, MessageInstanceId: result.message.messageInstanceId ?? '0' };
    write({ type: 'messageInstanceFetched', message: result.message });
    const access = messageAccess(result, isSignedIn());
    if (
      (access === 'cleared' || access === 'open') &&
      isPrivateMessageOfAnotherUser(result, isSignedIn(), currentUserId())
    ) {
      // "Is Private?": FeedbackMessage_AutoClose2, then a loop break: the flow goes on (decision Q4 (a)).
      autoCloseError(MESSAGE_NO_ACCESS);
    }
    switch (access) {
      case 'retracted':
      case 'cleared':
        leaveToMessageList(MESSAGE_NOT_AVAILABLE);
        return;
      case 'noAccess':
        leaveToMessageList(MESSAGE_NO_ACCESS);
        return;
      case 'login':
        eventsRef.current.onNavigateToLogin();
        return;
      case 'open':
        break;
    }
    const prepared = await prepareMessage(result, variables, restored);
    if (prepared === null) return;
    write({ type: 'messagePrepared', message: prepared });
  };

  /** OnReady: both ids null, the "invalid id" message; else the refresh of GetMessageInstance. */
  const onReady = async (restored: boolean) => {
    const { MessageInstanceId, MessageTemplateId } = latest.current.variables;
    if (MessageInstanceId === '0' && MessageTemplateId === '0') {
      showFeedbackMessage(MESSAGE_INVALID_ID, PLATFORM_MESSAGE_TYPE.error);
      return;
    }
    const result = await fetchMessageInstance(latest.current.variables);
    await onAfterFetchMessageInstance(result, restored);
  };

  /** OnClick_ViewOrbitEvent (SBMD:1210-1378): with parameters, GetHasOrbitAccess; an Orbit message asks
      Get_OrbitNotificationParameters and opens the milestone (milestone, event and name known) or the event (event and
      name known, with the member id of Cache_UserInfo_Get); an OrbitHostSurvey message needs GetHasOrbitHostSurvey and
      asks Get_OrbitHostSurveyNotificationParameters, then opens the host survey when the four values are known. */
  const onClickViewOrbitEvent = async (messageSenderTargetId: number) => {
    const parameters = latest.current.parameters ?? [];
    if (parameters.length === 0) return;
    if (!getHasOrbitAccess()) {
      showFeedbackMessage(MESSAGE_NO_ORBIT_ACCESS, PLATFORM_MESSAGE_TYPE.error);
      return;
    }
    if (messageSenderTargetId === MessageSenderTarget.Orbit) {
      const p = await getOrbitNotificationParameters(parameters);
      if (p.orbitMilestoneId !== '' && p.orbitEventId !== '' && p.orbitEventName !== '') {
        eventsRef.current.onNavigateToOrbitMilestone?.(
          p.orbitMilestoneId,
          textToLongInteger(p.orbitEventId),
          p.orbitEventName,
        );
      } else if (p.orbitEventId !== '' && p.orbitEventName !== '') {
        const userInformation = await getUserInformation();
        eventsRef.current.onNavigateToOrbitEvent?.(
          userInformation.Directory_UserCurrent.MemberID,
          textToLongInteger(p.orbitEventId),
          p.orbitEventName,
        );
      }
    } else if (messageSenderTargetId === MessageSenderTarget.OrbitHostSurvey) {
      if (!getHasOrbitHostSurvey()) {
        showFeedbackMessage(MESSAGE_NO_HOST_SURVEY_ACCESS, PLATFORM_MESSAGE_TYPE.error);
        return;
      }
      const p = await getOrbitHostSurveyNotificationParameters(parameters);
      if (p.orbitEventId !== '' && p.orbitEventName !== '' && p.orbitStartDate !== null && p.orbitEndDate !== null) {
        const userInformation = await getUserInformation();
        eventsRef.current.onNavigateToOrbitHostSurvey?.(
          userInformation.Directory_UserCurrent.MemberID,
          textToLongInteger(p.orbitEventId),
          p.orbitEventName,
          p.orbitStartDate,
          p.orbitEndDate,
        );
      }
    }
  };

  /** OnClick_ViewAssembleEvent (SBMD:1415-1506): with parameters, GetHasAssemble ("You don't have access to
      Assemble." without it); NavigateTo_AssembleEvent when the parent and the instance ids are in the parameters. */
  const onClickViewAssembleEvent = () => {
    const parameters = latest.current.parameters ?? [];
    if (parameters.length === 0) return;
    if (!getHasAssemble()) {
      showFeedbackMessage(MESSAGE_NO_ASSEMBLE_ACCESS, PLATFORM_MESSAGE_TYPE.error);
      return;
    }
    const assemble = assembleEventParameters(parameters);
    if (assemble === null) return;
    eventsRef.current.onNavigateToAssembleEvent?.(
      assemble.eventParentId,
      assemble.eventInstanceId,
      assemble.eventTypeTitle,
    );
  };

  /** AdaptiveCardViewerOnExecuteAction (SBMD:1569-1737): FormPayload as AdaptiveCardActionSubmitData;
      - send_email: AddAuditAndNavigateTo_EventEmail(EventId, EventHostId); without an EventId, the ids come from the
        data of the card's "View Event" action (SubstringJS);
      - view_event: "Event is not accessible" (Info) when both ids are NullIdentifier, else
        AddAuditAndNavigateTo_EventDetail(EventHostId, EventId);
      - any other submit: StoreAdaptiveCardResponses, the refresh of GetMessageInstance (its OnAfterFetch runs again)
        and "Thanks for filling out our form!" (Info).
      Handle Error CommunicationException: "Please check your internet connection!" (Info). */
  const adaptiveCardViewerOnExecuteAction = async (cardPayload: string, actionId: string, formPayload: string) => {
    try {
      // AppManager_GetDeviceContext: the device UUID.
      const deviceHardwareId = clientVar.deviceUuid.get();
      const data = deserializeAdaptiveCardActionSubmitData(formPayload);
      if (data.submitType === 'send_email') {
        if (data.eventId === '0') {
          const content = latest.current.message?.adaptiveCardContent ?? '';
          const other = deserializeAdaptiveCardActionSubmitData(
            substringJS(VIEW_EVENT_DATA_START, VIEW_EVENT_DATA_END, content),
          );
          await eventsRef.current.onAddAuditAndNavigateToEventEmail?.(other.eventId, other.eventHostId);
        } else {
          await eventsRef.current.onAddAuditAndNavigateToEventEmail?.(data.eventId, data.eventHostId);
        }
      } else if (data.submitType === 'view_event') {
        if (data.eventId === '0' && data.eventHostId === '0') {
          showFeedbackMessage(MESSAGE_EVENT_NOT_ACCESSIBLE, PLATFORM_MESSAGE_TYPE.info);
        } else {
          await eventsRef.current.onAddAuditAndNavigateToEventDetail?.(data.eventHostId, data.eventId);
        }
      } else {
        await storeAdaptiveCardResponses({
          deviceHardwareId,
          adaptiveCardPayloadJSON: cardPayload,
          actionTaken: actionId,
          formDataJSON: formPayload,
          messageInstanceId: latest.current.variables.MessageInstanceId,
        });
        const result = await fetchMessageInstance(latest.current.variables);
        await onAfterFetchMessageInstance(result, restoredView.current);
        showFeedbackMessage(MESSAGE_FORM_THANKS, PLATFORM_MESSAGE_TYPE.info);
      }
    } catch (error) {
      if (!isCommunicationException(error)) throw error;
      showFeedbackMessage(MESSAGE_CHECK_CONNECTION, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  return {
    isLoading: state.variables.IsLoading,
    message: state.message,
    parameters: state.parameters,
    showAssembleAction: state.variables.ShowAssembleAction,
    onClickViewOrbitEvent,
    onClickViewAssembleEvent,
    adaptiveCardViewerOnExecuteAction,
  };
}
