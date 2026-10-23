import { useRef } from 'react';
import {
  fetchMessageInstance,
  fetchMessageTemplateParameters,
  type MessageDetail,
  type MessageDetailCallInputs,
  type MessageInstanceResult,
} from '@/api/message';
import { markNotificationOpened } from '@/api/notification';
import type { MessageDetailInputs } from '@/pages/MessageDetail/inputs';
import { MessageInfoType } from '@/pages/MessageDetail/staticEntities';
import { feedbackMessageAutoClose, PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, useFlowState, type IsAlive } from '@/platform/navigation';
import { currentUserId, isSignedIn } from '@/platform/session/session';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { getUserInformation } from '@/platform/session/userInfo';
import { cache_SignedImageURL_Get } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity, ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import {
  addFirstSentence,
  decrementReadWhatsNewsCounter,
  initialMessageDetailState,
  isOrbitKind,
  MESSAGE_INVALID_ID,
  MESSAGE_NO_ACCESS,
  MESSAGE_NOT_AVAILABLE,
  messageAccess,
  messageDetailReducer,
  needsTemplateParameters,
  type MessageDetailAction,
} from './messageDetailState';

/** The flows of ScreenBlock_MessageDetail: OnReady (the refresh of GetMessageInstance), GetMessageInstanceByIdOnAfterFetch
    (the access decisions, Wrapper_NotificationOpened, the sender photo, the template parameters and the Orbit
    greeting) and MessageRetractedFlow. The page calls this hook and passes the result to MessageDetailView.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail */

/** The events of the block, which the screen handles. */
export interface MessageDetailEvents {
  /** Event NavigateTo_MessageList(NoPermission). */
  onNavigateToMessageList: () => void;
  /** Event NavigateTo_Login. */
  onNavigateToLogin: () => void;
}

/** What the view reads. */
export interface MessageDetailFlows {
  /** [IsLoading]: true until the message is ready. */
  isLoading: boolean;
  /** GetMessageInstance.Message as the flows prepared it; null until the first answer. */
  message: MessageDetail | null;
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
    fetched: MessageDetail,
    variables: MessageDetailCallInputs,
    restored: boolean,
  ): Promise<MessageDetail | null> => {
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
      if (!restored) {
        const parameters = await fetchMessageTemplateParameters(variables);
        write({ type: 'templateParametersFetched', parameters, senderTargetId: message.senderTargetId });
      }
      if (isOrbitKind(message.senderTargetId)) {
        const userInformation = await getUserInformation();
        message = {
          ...message,
          messageContent: addFirstSentence(userInformation.Directory_UserCurrent.FirstName, message.messageContent),
        };
      }
      // Assemble: BuildAssembleNotificationContent (PlaceholderLib) is not ported (Q1): the content stays as fetched
      // and the NotCaptured marker of the action-button placeholder names it.
    }
    return message;
  };

  /** GetMessageInstanceByIdOnAfterFetch. */
  const onAfterFetchMessageInstance = async (result: MessageInstanceResult, restored: boolean) => {
    // MessageInstanceId = Message.MessageInstance.Id. The flow keeps its own copy: the next calls send it, also
    // after an unmount, when the state write is skipped.
    const variables = { ...latest.current.variables, MessageInstanceId: result.message.messageInstanceId ?? '0' };
    write({ type: 'messageInstanceFetched', message: result.message });
    switch (messageAccess(result, isSignedIn(), currentUserId())) {
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
    const prepared = await prepareMessage(result.message, variables, restored);
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

  return { isLoading: state.variables.IsLoading, message: state.message };
}
