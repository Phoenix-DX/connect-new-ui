import { useEffect, useReducer, useRef } from 'react';
import { sendContactFormEmail } from '@/api/message';
import { useScreenValidationService, type ValidationService } from '@/components/ui/os/OSValidation';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { preventNavigation, type NavigationEvent } from '@/lib/navigationEvent';
import {
  getTextAreaLineHeight,
  onApplicationEvent_ContactHelpdesk,
  onApplicationEvent_EmailHost,
  scheduleFeedbackMessageAfterTransition,
} from '@/pages/EmailContact/actions';
import type { EmailContactInputs } from '@/pages/EmailContact/inputs';
import {
  EMAIL_SENT,
  NO_HELPDESK_EMAIL,
  REQUIRED,
  hasUnsentText,
  initialOrbitContactFormState,
  isFilled,
  orbitContactFormIds,
  orbitContactFormReducer,
  toOrbitContactEmail,
  type OrbitContactFormAction,
  type OrbitContactFormState,
} from './orbitContactFormState';

/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm
    The flows of the Orbit contact form: OnInitialize, OnReady, the change, blur and key events of the fields,
    OnClick_Submit with SendContactEmail, and NavigationHandlerNavigation. The page calls this hook and gives the
    result to OrbitContactFormView. The block has no data action. The block keeps no view-cache state: a new visit
    starts from OnInitialize. */

/** The events of the block. */
export interface OrbitContactFormEvents {
  /** Event Submitted: raised after a sent e-mail. */
  onSubmitted: () => void;
}

/** The state and the handlers of the block. */
export interface OrbitContactForm {
  /** The block's validation service: the Form and its fields register in it. */
  validation: ValidationService;
  /** The block variables. */
  state: OrbitContactFormState;
  /** OnChange_InputSubject. */
  onUserSubjectChange: (userSubject: string) => void;
  /** OnBlur_InputSubject. */
  onUserSubjectBlur: () => void;
  /** OnChange_TextAreaMessage. */
  onMessageChange: (message: string) => void;
  /** OnBlur_TextAreaMessage. */
  onMessageBlur: () => void;
  /** OnKeyDown_TextAreaMessage. */
  onMessageKeyDown: () => void;
  /** OnKeyUp_TextAreaMessage. */
  onMessageKeyUp: () => void;
  /** The Submit button: validateWidget(Form), then OnClick_Submit. */
  onSubmitClick: () => void;
  /** NavigationHandlerNavigation, the Navigation event of NavigationConfirmationDialog. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** ScreenBlock_ContactForm with its instance id (`$b1`), its inputs (the screen inputs; In_MilestoneName =
    In_MilestoneTitle) and its event. */
export function useOrbitContactForm(
  blockId: string,
  inputs: EmailContactInputs,
  { onSubmitted }: OrbitContactFormEvents,
): OrbitContactForm {
  const ids = orbitContactFormIds(blockId);
  const helpdesk = inputs.In_IsContactHelpdesk;
  const validation = useScreenValidationService();
  // OnInitialize: LineCount = GetTextAreaLineHeight(In_Subject, 10).
  const [state, dispatchToView] = useReducer(orbitContactFormReducer, inputs.In_Subject, (subject) =>
    initialOrbitContactFormState(subject, getTextAreaLineHeight(subject, 10)),
  );
  // The flows read the newest variables: OutSystems assigns a variable at once, before the next render.
  const latest = useRef(state);
  const dispatch = (action: OrbitContactFormAction) => {
    latest.current = orbitContactFormReducer(latest.current, action);
    dispatchToView(action);
  };

  // OnReady: UserFullName = FirstName + " " + LastName of AppManager_GetCachedUserInfo.
  useEffect(() => {
    const user = appManager_GetCachedUserInfo();
    dispatch({ type: 'userFullNameAssigned', userFullName: `${user.FirstName} ${user.LastName}` });
    // OnReady runs once per block instance.
  }, []);

  /** TextArea_Message: valid when Trim(Message) <> "", else "Required field!" (OnChange_TextAreaMessage,
      OnBlur_TextAreaMessage, ValidateEmptyFields). */
  const validateMessage = () => {
    if (isFilled(latest.current.message)) validation.setWidgetValidity(ids.message, true, '');
    else validation.setWidgetValidity(ids.message, false, REQUIRED);
  };
  /** Input_Subject likewise with UserSubject (OnChange_InputSubject, OnBlur_InputSubject). */
  const validateSubject = () => {
    if (isFilled(latest.current.userSubject)) validation.setWidgetValidity(ids.subject, true, '');
    else validation.setWidgetValidity(ids.subject, false, REQUIRED);
  };

  /** OnClick_Submit, after the button's validateWidget(Form). Not while submitting: ValidateEmptyFields (the message;
      the subject for the host); a valid Form → IsSubmitting True, SendContactEmail, IsSubmitting False; a success
      clears Message, In_Subject and UserSubject, schedules "Your email has been sent.", raises Submitted, then the
      ContactHelpdesk / EmailHost audit event; IsSuccess False → the "no helpdesk email" message (Info). An invalid
      Form → IsSubmitting False. An exception goes to the flow handler (IsSubmitting stays True). */
  const onClickSubmit = async () => {
    if (latest.current.isSubmitting) return;
    validateMessage();
    if (!helpdesk) validateSubject();
    if (!validation.isValid(ids.form)) {
      dispatch({ type: 'submitEnded' });
      return;
    }
    dispatch({ type: 'submitStarted' });
    // The flow reads AppManager_GetCachedUserInfo again here; it does not use the result.
    appManager_GetCachedUserInfo();
    const isSuccess = await sendContactFormEmail(toOrbitContactEmail(inputs, latest.current));
    dispatch({ type: 'submitEnded' });
    if (!isSuccess) {
      showFeedbackMessage(NO_HELPDESK_EMAIL, PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    dispatch({ type: 'sent' });
    scheduleFeedbackMessageAfterTransition(EMAIL_SENT);
    onSubmitted();
    /* The audit payloads (ScreenBlock_ContactForm.mvc.js:1309-1333) are built after Empty Vars (:1286-1295): Message,
       In_Subject and UserSubject are "" by then, so TST sends an empty Subject and Message here. */
    if (helpdesk) {
      onApplicationEvent_ContactHelpdesk({
        EventId: inputs.In_EventId,
        EventTitle: inputs.In_EventName,
        Subject: '',
        Message: '',
      });
    } else {
      onApplicationEvent_EmailHost({
        MilestoneId: inputs.In_MilestoneId,
        EventId: inputs.In_EventId,
        EventTitle: inputs.In_EventName,
        HostName: inputs.In_HostName,
        Subject: '',
        Message: '',
      });
    }
  };

  return {
    validation,
    state,
    onUserSubjectChange: (userSubject) => {
      dispatch({ type: 'userSubjectChanged', userSubject });
      validateSubject();
    },
    onUserSubjectBlur: validateSubject,
    onMessageChange: (message) => {
      dispatch({ type: 'messageChanged', message });
      validateMessage();
    },
    onMessageBlur: validateMessage,
    onMessageKeyDown: () => {
      dispatch({ type: 'messageKeyDown' });
    },
    onMessageKeyUp: () => {
      dispatch({ type: 'messageKeyUp' });
    },
    onSubmitClick: () => {
      validation.validate(ids.form);
      onClickSubmit().catch(raiseToFlowHandler);
    },
    // A navigation with unsent text is prevented, so the dialog asks.
    onNavigation: (navigationEvent) => {
      if (hasUnsentText(latest.current, helpdesk)) preventNavigation(navigationEvent);
    },
  };
}
