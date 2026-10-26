import type { OrbitContactEmail } from '@/api/message';
import type { EmailContactInputs } from '@/pages/EmailContact/inputs';

/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm
    The variables of the Orbit contact form, the reducer of their assignments and the pure rules of its flows. Pure:
    no React, no call. useOrbitContactForm runs the flows with them. */

/** The message of a mandatory field that is empty or only spaces. */
export const REQUIRED = 'Required field!';
/** MessageMaxLength default (IntegerToLongInteger(1000)). */
export const MESSAGE_MAX_LENGTH = 1000;
/** The Info message when SendContactEmail answers IsSuccess False. */
export const NO_HELPDESK_EMAIL =
  'There is currently no helpdesk email associated with this event, please try to contact us later. If your inquiry is urgent please contact your local Orbit Coordinator.';
/** The success message, shown after the navigation that the Submitted event starts. */
export const EMAIL_SENT = 'Your email has been sent.';

/** The block variables that the view and the flows read. */
export interface OrbitContactFormState {
  /** In_Subject: an input that the helpdesk text area is bound to (cleared after a send). */
  subject: string;
  userSubject: string;
  message: string;
  userFullName: string;
  isSubmitting: boolean;
  previousMessage: string;
  /** The rows of the helpdesk subject text area. */
  lineCount: number;
}

/** OnInitialize: the variables with their defaults, In_Subject and LineCount = GetTextAreaLineHeight(In_Subject, 10). */
export function initialOrbitContactFormState(subject: string, lineCount: number): OrbitContactFormState {
  return {
    subject,
    userSubject: '',
    message: '',
    userFullName: '',
    isSubmitting: false,
    previousMessage: '',
    lineCount,
  };
}

/** The assignments of the block flows. */
export type OrbitContactFormAction =
  /** OnReady: UserFullName = FirstName + " " + LastName of the cached user information. */
  | { type: 'userFullNameAssigned'; userFullName: string }
  /** Input_Subject changed (UserSubject). */
  | { type: 'userSubjectChanged'; userSubject: string }
  /** TextArea_Message changed (Message). */
  | { type: 'messageChanged'; message: string }
  /** OnKeyDown_TextAreaMessage: PreviousMessage = Message. */
  | { type: 'messageKeyDown' }
  /** OnKeyUp_TextAreaMessage: at MessageMaxLength, Message = PreviousMessage. */
  | { type: 'messageKeyUp' }
  /** OnClick_Submit with a valid form: IsSubmitting = True. */
  | { type: 'submitStarted' }
  /** OnClick_Submit with an invalid form, or after SendContactEmail: IsSubmitting = False. */
  | { type: 'submitEnded' }
  /** OnClick_Submit after a sent e-mail: Message, In_Subject and UserSubject = "". */
  | { type: 'sent' };

export function orbitContactFormReducer(
  state: OrbitContactFormState,
  action: OrbitContactFormAction,
): OrbitContactFormState {
  switch (action.type) {
    case 'userFullNameAssigned':
      return { ...state, userFullName: action.userFullName };
    case 'userSubjectChanged':
      return { ...state, userSubject: action.userSubject };
    case 'messageChanged':
      return { ...state, message: action.message };
    case 'messageKeyDown':
      return { ...state, previousMessage: state.message };
    case 'messageKeyUp':
      return state.message.length >= MESSAGE_MAX_LENGTH ? { ...state, message: state.previousMessage } : state;
    case 'submitStarted':
      return { ...state, isSubmitting: true };
    case 'submitEnded':
      return { ...state, isSubmitting: false };
    case 'sent':
      return { ...state, message: '', subject: '', userSubject: '' };
  }
}

/** The ids of the form widgets for the block instance id (`$b1` → `b1-Form`, ...). */
export interface OrbitContactFormIds {
  /** The instance id without `$`: the prefix of the ids of the block content. */
  prefix: string;
  form: string;
  inSubject: string;
  subject: string;
  message: string;
}

export function orbitContactFormIds(blockId: string): OrbitContactFormIds {
  const prefix = blockId.replace('$', '');
  return {
    prefix,
    form: `${prefix}-Form`,
    inSubject: `${prefix}-TextArea_In_Subject`,
    subject: `${prefix}-Input_Subject`,
    message: `${prefix}-TextArea_Message`,
  };
}

/** A mandatory text is valid when Trim(text) <> "" (ValidateEmptyFields). */
export const isFilled = (text: string): boolean => text.trim() !== '';

/** NavigationHandlerNavigation: the text that a navigation would discard. The helpdesk form checks the message, the
    host form the subject or the message. The dialog asks when this is true. */
export function hasUnsentText(state: OrbitContactFormState, isContactHelpdesk: boolean): boolean {
  return isContactHelpdesk ? state.message !== '' : state.userSubject !== '' || state.message !== '';
}

/** The inputs of SendContactEmail: IsContactHelpdesk, EventId, MilestoneId, TargetMemberId, In_Subject, UserSubject,
    Message and the EmailInfo {EventName, SenderFullName = UserFullName, HostName, HostEmail, MilestoneName =
    In_MilestoneTitle, FormattedDateTime}. */
export function toOrbitContactEmail(inputs: EmailContactInputs, state: OrbitContactFormState): OrbitContactEmail {
  return {
    isContactHelpdesk: inputs.In_IsContactHelpdesk,
    eventId: inputs.In_EventId,
    milestoneId: inputs.In_MilestoneId,
    targetMemberId: inputs.In_TargetMemberId,
    subject: state.subject,
    userSubject: state.userSubject,
    message: state.message,
    emailInfo: {
      EventName: inputs.In_EventName,
      SenderFullName: state.userFullName,
      HostName: inputs.In_HostName,
      HostEmail: inputs.In_HostEmail,
      MilestoneName: inputs.In_MilestoneTitle,
      FormattedDateTime: inputs.In_FormattedDateTime,
    },
  };
}
