import type { MessageDetail, MessageDetailCallInputs, MessageInstanceResult, MessageParameter } from '@/api/message';
import type { MessageDetailInputs } from '@/pages/MessageDetail/inputs';
import { MessageInfoType, MessageSenderTarget, MessageType, ParameterName } from '@/pages/MessageDetail/staticEntities';
import { clientVar } from '@/platform/session/session';

/** The state of ScreenBlock_MessageDetail and its reducer, the pure parts of its flows and view expressions, and the
    client actions of Connect2_LegacyShared that the block calls.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail */

/** The block state. The view cache keeps it, so a back navigation to the screen shows the last message at once. */
export interface MessageDetailState {
  /** The block variables (IsEntryScreen, IsLoading, ShowAssembleAction and the inputs). They travel with the data
      actions as screenData.variables. */
  variables: MessageDetailCallInputs;
  /** GetMessageInstance.Message; null until the first answer. */
  message: MessageDetail | null;
  /** GetMessageTemplateParametersByMessageTemplateId.List; null until it is refreshed. */
  parameters: MessageParameter[] | null;
}

/** The changes of the state. */
export type MessageDetailAction =
  /** GetMessageInstanceByIdOnAfterFetch, first node: MessageInstanceId = Message.MessageInstance.Id. */
  | { type: 'messageInstanceFetched'; message: MessageDetail }
  /** GetMessageTemplateParametersOnAfterFetch: the parameters; for Assemble, ShowAssembleAction. */
  | { type: 'templateParametersFetched'; parameters: MessageParameter[]; senderTargetId: number }
  /** The end of GetMessageInstanceByIdOnAfterFetch: the prepared message, IsLoading = False. */
  | { type: 'messagePrepared'; message: MessageDetail };

/** OnInitialize: the variables with their defaults and the block inputs. */
export function initialMessageDetailState(inputs: MessageDetailInputs): MessageDetailState {
  return {
    variables: {
      IsEntryScreen: false,
      IsLoading: true,
      ShowAssembleAction: false,
      MessageInstanceId: inputs.MessageInstanceId,
      MessageTemplateId: inputs.MessageTemplateId,
      HardwareId: inputs.HardwareId,
      isOriginPushNotification: inputs.isOriginPushNotification,
    },
    message: null,
    parameters: null,
  };
}

/** GetMessageTemplateParametersOnAfterFetch: ShowAssembleAction = both Assemble event ids are in the parameters. */
export function showAssembleAction(parameters: MessageParameter[]): boolean {
  const has = (name: number) => parameters.some((p) => p.parameterNameId === name);
  return has(ParameterName.AssembleEventParentId) && has(ParameterName.AssembleEventInstanceId);
}

export function messageDetailReducer(state: MessageDetailState, action: MessageDetailAction): MessageDetailState {
  switch (action.type) {
    case 'messageInstanceFetched':
      return {
        ...state,
        variables: { ...state.variables, MessageInstanceId: action.message.messageInstanceId ?? '0' },
        message: action.message,
      };
    case 'templateParametersFetched':
      return {
        ...state,
        parameters: action.parameters,
        variables:
          action.senderTargetId === MessageSenderTarget.Assemble
            ? { ...state.variables, ShowAssembleAction: showAssembleAction(action.parameters) }
            : state.variables,
      };
    case 'messagePrepared':
      return { ...state, message: action.message, variables: { ...state.variables, IsLoading: false } };
  }
}

/** The text of the ViewOrbitEvent button: "View Event" for Orbit, else "Go to Host Survey". */
export const orbitButtonText = (senderTargetId: number): string =>
  senderTargetId === MessageSenderTarget.Orbit ? 'View Event' : 'Go to Host Survey';

/** OS TextToLongInteger: the integer of the text, 0 when it is not an integer. */
export const textToLongInteger = (text: string): string =>
  /^\s*-?\d+\s*$/.test(text) ? String(BigInt(text.trim())) : '0';

/** The Orbit sender targets: Orbit and OrbitHostSurvey. */
export const isOrbitKind = (senderTargetId: number): boolean =>
  senderTargetId === MessageSenderTarget.Orbit || senderTargetId === MessageSenderTarget.OrbitHostSurvey;

/** The "Is Notification Read?" part refreshes the template parameters for Sharing, Orbit and Assemble messages. */
export const needsTemplateParameters = (message: MessageDetail): boolean =>
  message.messageInfoTypeId === MessageInfoType.Sharing ||
  isOrbitKind(message.senderTargetId) ||
  message.senderTargetId === MessageSenderTarget.Assemble;

/** What GetMessageInstanceByIdOnAfterFetch does after it assigns the message:
    - `retracted`: IsRetracted, MessageRetractedFlow;
    - `noAccess`: no message, signed in: the "no access" message, then back to the list;
    - `login`: no message or a private message, signed out, NavigateTo_Login;
    - `cleared`: IsCleared, the "not available" message;
    - `open`: the message shows.
    A private message of another user is `cleared` or `open`: see {@link isPrivateMessageOfAnotherUser}. */
export type MessageAccess = 'retracted' | 'noAccess' | 'login' | 'cleared' | 'open';

/** The access decisions of GetMessageInstanceByIdOnAfterFetch, in their order. */
export function messageAccess(result: MessageInstanceResult, signedIn: boolean): MessageAccess {
  if (result.isRetracted) return 'retracted';
  if (result.message.messageInstanceId === null) return signedIn ? 'noAccess' : 'login';
  if (result.message.messageTemplateTypeId === MessageType.Private && !signedIn) return 'login';
  if (result.isCleared) return 'cleared';
  return 'open';
}

/** "Is Private?" for a signed-in user (SBMD:976-1011): a private message of another user. TST runs the "no access"
    message and then a loop break (do-while False), not a navigation: the flow goes on with the IsCleared check, and
    the message shows (decision Q4 (a); app/docs/known-original-bugs.md). */
export function isPrivateMessageOfAnotherUser(
  result: MessageInstanceResult,
  signedIn: boolean,
  userId: string | null,
): boolean {
  return (
    signedIn &&
    result.message.messageTemplateTypeId === MessageType.Private &&
    result.message.messageInstanceUserId !== Number(userId)
  );
}

/** The feedback messages of the block. */
export const MESSAGE_NO_ORBIT_ACCESS =
  "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";
export const MESSAGE_NO_HOST_SURVEY_ACCESS =
  "You don't have access to Orbit Host Survey. Please contact the Orbit Helpdesk if you have any questions.";
export const MESSAGE_NO_ASSEMBLE_ACCESS = "You don't have access to Assemble.";
export const MESSAGE_EVENT_NOT_ACCESSIBLE = 'Event is not accessible';
export const MESSAGE_FORM_THANKS = 'Thanks for filling out our form!';
export const MESSAGE_CHECK_CONNECTION = 'Please check your internet connection!';
export const MESSAGE_NOT_AVAILABLE = 'Sorry, this message is not available anymore.';
export const MESSAGE_NO_ACCESS = "You don't have access to that message";
export const MESSAGE_INVALID_ID = 'Invalid message detail id.';

/** The title expression of the layout: a message sent as a sender target shows the target name ("Meal Allocation"
    for LordsDayMeal); a message sent as a user shows the user name; "" before the first answer. */
export function messageTitle(message: MessageDetail | null): string {
  if (message === null) return '';
  if (message.sentAs === null) return message.userName;
  return message.senderTargetId === MessageSenderTarget.LordsDayMeal ? 'Meal Allocation' : message.senderTargetName;
}

/** Connect2_LegacyShared AddFirstSentence(In_UserFirstName, In_MessageContent): "Hello " + name + ", <br> <br>" +
    content. */
export function addFirstSentence(userFirstName: string, messageContent: string): string {
  return `Hello ${userFirstName}, <br> <br>${messageContent}`;
}

/** Connect2_LegacyShared DecrementReadWhatsNewsCounter: UnreadWhatsNewsNumber - 1 (not below 0), on the shell client
    variable added by CR-MessageDetail-1. */
export function decrementReadWhatsNewsCounter(): void {
  const unread = clientVar.unreadWhatsNewsNumber.get();
  clientVar.unreadWhatsNewsNumber.set(unread > 0 ? unread - 1 : 0);
}
