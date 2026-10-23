import { useRef, useState } from 'react';
import { sendUserContactEmail } from '@/api/message';
import { useScreenValidationService, type ValidationService } from '@/components/ui/os/OSValidation';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useNavigateBack } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { preventNavigation, type NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import {
  ApplicationEvents_Directory_EmailHousehold,
  emailHouseholdEventAttachment,
  headerText,
  householdEmailIds,
  isFilled,
  scheduleFeedbackMessageAfterTransition,
  userContactRequest,
  zOnApplicationEvent_Wrapper,
} from './householdEmailState';

/** The variables and the flows of ScreenBlock_Household_Email: OnInitialize, OnChange_InputSubject,
    OnChange_InputMessage, OnSubmit_Email (with the UserContactUser call) and NavigationHandlerNavigation. The block has
    no data action. The page calls this hook and passes the result to HouseholdEmailView.
    @origin Connect2_LegacyShared.Email.ScreenBlock_Household_Email */

/** The inputs of the block that its flows read. */
export interface HouseholdEmailInputs {
  /** In_HouseholdFirstName: ContactMember and FirstName of the request. */
  inHouseholdFirstName: string;
  /** EmailTo of the request and of the EmailHousehold event. */
  emailTo: string;
  /** OnInitialize: the HeaderText of the title. */
  contactBusinessType: string;
  /** OnInitialize: the first Subject. */
  initialEmailSubject: string;
}

interface HouseholdEmailFlows {
  /** The validation service of Email_Form and its two fields (the widgets register in it). */
  validation: ValidationService;
  /** [HeaderText] of OnInitialize: the title is "Contact " + HeaderText. */
  title: string;
  /** [Subject] */
  subject: string;
  /** [Message] */
  message: string;
  /** [IsSending]: the "send email" button shows its spinner. */
  isSending: boolean;
  /** The Subject input changed: the new value, then OnChange_InputSubject. */
  onSubjectChange: (value: string) => void;
  /** The Message text area changed: the new value, then OnChange_InputMessage. */
  onMessageChange: (value: string) => void;
  /** The click of "send email": the built-in validation of Email_Form, then OnSubmit_Email. A failed flow goes to
      the flow handler. */
  onSubmit: () => void;
  /** NavigationHandlerNavigation of the NavigationConfirmationDialog: IsChange → PreventNavigation, so it asks. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** `id` is the block instance id; `onEmailSubmitted` is the EmailSubmitted event, raised after the call. */
export function useHouseholdEmail(
  id: string,
  inputs: HouseholdEmailInputs,
  onEmailSubmitted?: () => void,
): HouseholdEmailFlows {
  const ids = householdEmailIds(id);
  const validation = useScreenValidationService();
  const navigateBack = useNavigateBack();
  /* OnInitialize: IsSending False, Subject = InitialEmailSubject, Message = "", HeaderText. The restored-view reset
     of OnReady is not needed: the block is not kept in the view cache. */
  const [subject, setSubject] = useState(inputs.initialEmailSubject);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const latest = useRef({ subject, message, isChange: false });
  const [title] = useState(() => headerText(inputs.contactBusinessType));

  /** OnChange_InputSubject: Trim(Subject) <> "" → Valid True, message "", IsChange True; else IsChange False. */
  const onChangeInputSubject = () => {
    if (isFilled(latest.current.subject)) {
      validation.setWidgetValidity(ids.subject, true, '');
      latest.current.isChange = true;
    } else latest.current.isChange = false;
  };
  /** OnChange_InputMessage: the same for the message. */
  const onChangeInputMessage = () => {
    if (isFilled(latest.current.message)) {
      validation.setWidgetValidity(ids.message, true, '');
      latest.current.isChange = true;
    } else latest.current.isChange = false;
  };
  const updateSubject = (value: string) => {
    latest.current.subject = value;
    setSubject(value);
  };
  const updateMessage = (value: string) => {
    latest.current.message = value;
    setMessage(value);
  };

  /** OnSubmit_Email, after the built-in validation of Email_Form. */
  const onSubmitEmail = async () => {
    const s = latest.current;
    if (isFilled(s.subject)) {
      validation.setWidgetValidity(ids.subject, true, '');
      s.isChange = true;
    } else validation.setWidgetValidity(ids.subject, false, 'Required Field!');
    if (isFilled(s.message)) {
      validation.setWidgetValidity(ids.message, true, '');
      s.isChange = true;
    } else validation.setWidgetValidity(ids.message, false, 'Required Field!');
    // Both fields valid?
    if (!isFilled(s.message) || !isFilled(s.subject)) return;
    setIsSending(true);
    // IsOnline (GetNetworkStatus): navigator.onLine, as the other LDM routes.
    if (!navigator.onLine) {
      showFeedbackMessage('You cannot send emails without a network connection.', PLATFORM_MESSAGE_TYPE.error);
      setIsSending(false);
      return;
    }
    onChangeInputSubject();
    onChangeInputMessage();
    if (!validation.isValid(ids.form)) {
      if (!isFilled(s.subject)) updateSubject('');
      if (!isFilled(s.message)) updateMessage('');
      setIsSending(false);
      return;
    }
    s.isChange = false;
    const user = appManager_GetCachedUserInfo();
    await sendUserContactEmail(userContactRequest(inputs, { subject: s.subject, message: s.message }, user));
    onEmailSubmitted?.();
    zOnApplicationEvent_Wrapper(
      ApplicationEvents_Directory_EmailHousehold,
      emailHouseholdEventAttachment(inputs.emailTo, user),
    );
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    // IsSending = False; IsEmailSubmitted = True (not read by the view); Destination (PreviousScreen).
    setIsSending(false);
    navigateBack();
  };

  return {
    validation,
    title,
    subject,
    message,
    isSending,
    onSubjectChange: (value) => {
      updateSubject(value);
      onChangeInputSubject();
    },
    onMessageChange: (value) => {
      updateMessage(value);
      onChangeInputMessage();
    },
    onSubmit: () => {
      validation.validate(ids.form);
      onSubmitEmail().catch(raiseToFlowHandler);
    },
    onNavigation: (navigationEvent) => {
      if (latest.current.isChange) preventNavigation(navigationEvent);
    },
  };
}
