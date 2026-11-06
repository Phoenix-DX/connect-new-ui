import type { MessageDetail, MessageDetailCallInputs, MessageInstanceResult, MessageParameter } from '@/api/message';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import type { FlowScope } from '@/platform/navigation/flowScope';
import { currentUserId, isSignedIn } from '@/platform/session/session';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { getUserInformation } from '@/platform/session/userInfo';
import { cache_SignedImageURL_Get } from '@/lib/ubtConnectUtils/actions';
import { Connect_Entity, ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import { buildAssembleNotificationContent } from './actions';
import {
  addFirstSentence,
  decrementReadWhatsNewsCounter,
  isOrbitKind,
  isPrivateMessageOfAnotherUser,
  MESSAGE_NO_ACCESS,
  MESSAGE_NOT_AVAILABLE,
  messageAccess,
  needsTemplateParameters,
  type MessageDetailAction,
  type MessageDetailState,
} from './messageDetailState';
import { MessageInfoType, MessageSenderTarget } from './staticEntities';

/** GetMessageInstanceByIdOnAfterFetch, the same flow in two places of TST:
    - Connect2_LegacyShared ScreenBlock_MessageDetail (SBMD:912-1208), used by the screen MessageDetail;
    - the screen NotificationDetails of UBTConnect (live TST 2026-11-05,
      UBTConnect.App_Notifications.NotificationDetails.mvc.js:972-1253), node for node the same.
    The two differ only in their server calls (the owner of the aggregate and of Wrapper_NotificationOpened) and in
    the handlers of NavigateTo_MessageList and NavigateTo_Login: the caller gives them.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail */

/** The server calls of the flow, with the owner of the caller. */
interface MessageInstanceCalls {
  /** The aggregate GetMessageTemplateParametersByMessageTemplateId (MaxRecords 50), sent with the variables. */
  fetchTemplateParameters: (variables: MessageDetailCallInputs) => Promise<MessageParameter[]>;
  /** The server action Wrapper_NotificationOpened(MessageInstanceId) → IsRetracted. */
  notificationOpened: (messageInstanceId: string) => Promise<boolean>;
}

/** The flow state of the caller (useFlowState) and its two navigations. */
interface MessageInstanceFlow {
  /** The flow scope: the aggregate is a data fetch (R1, `flow.fetch`). */
  flow: Pick<FlowScope, 'fetch'>;
  dispatch: (action: MessageDetailAction) => void;
  latest: { readonly current: MessageDetailState };
  /** The message (FeedbackMessage_AutoClose), ReplaceOnUpcomingNavigation and Handler_NavigateTo_MessageList; an own
      action of the caller (R3). MessageRetractedFlow is this sequence with the "not available" message. */
  leaveToMessageList: (message: string) => void;
  /** Handler_NavigateTo_Login. */
  navigateToLogin: () => void;
}

/** The error message of the flow, closed automatically (FeedbackMessage_AutoClose: no delay, no debounce). */
export function autoCloseError(message: string): void {
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

/** GetMessageInstanceByIdOnAfterFetch for one caller: `(result, restored)` runs the flow on an answer of
    GetMessageInstance; `restored` is WasCurrentViewRestoredFromCache. Make it again on each render, so it reads the
    newest handlers. */
export function createMessageInstanceAfterFetch(
  ctx: MessageInstanceFlow,
  calls: MessageInstanceCalls,
): (result: MessageInstanceResult, restored: boolean) => Promise<void> {
  const { flow, dispatch, latest } = ctx;

  /** The "Is Notification Read?" part. `variables` are the variables that the calls send. It returns null when the
      action ends early. */
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
      const isRetracted = await calls.notificationOpened(variables.MessageInstanceId); // server action (R2)
      if (isRetracted) {
        ctx.leaveToMessageList(MESSAGE_NOT_AVAILABLE); // MessageRetractedFlow (R3)
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
        parameters = await flow.fetch(calls.fetchTemplateParameters(variables)); // R1
        dispatch({ type: 'templateParametersFetched', parameters, senderTargetId: message.senderTargetId });
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

  return async (result: MessageInstanceResult, restored: boolean) => {
    // MessageInstanceId = Message.MessageInstance.Id. The flow keeps its own copy, which the next calls send.
    const variables = { ...latest.current.variables, MessageInstanceId: result.message.messageInstanceId ?? '0' };
    dispatch({ type: 'messageInstanceFetched', message: result.message });
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
        ctx.leaveToMessageList(MESSAGE_NOT_AVAILABLE);
        return;
      case 'noAccess':
        ctx.leaveToMessageList(MESSAGE_NO_ACCESS);
        return;
      case 'login':
        ctx.navigateToLogin();
        return;
      case 'open':
        break;
    }
    const prepared = await prepareMessage(result, variables, restored);
    if (prepared === null) return;
    dispatch({ type: 'messagePrepared', message: prepared });
  };
}
