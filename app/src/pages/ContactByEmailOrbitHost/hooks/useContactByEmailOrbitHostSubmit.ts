import { useState } from 'react';
import { sendContactEmail as sendOrbitContactEmail } from '@/api/message';
import type { ContactEmailFormSubmit } from '@/components/contact/ContactEmailForm';
import { showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import type { ContactByEmailOrbitHostInputs } from '@/pages/ContactByEmailOrbitHost/inputs';

/** ScheduleFeedbackMessageAfterTransition JS node: after 500 ms, `$public.FeedbackMessage.showFeedbackMessage(Message,
    1)` (success). A local copy, as in the other ContactByEmail pages (no import across routes). */
function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** SendContactEmail (server action of Connect2_OrbitMobile_BL, `UBTConnect/ActionSendContactEmail`): IsContactHelpdesk
    False, EventId 0, MilestoneId "", TargetMemberId 0, Subject = In_Subject, UserSubject = the form's subject, Message,
    EmailInfo {EventName, SenderFullName "", HostName, HostEmail, MilestoneName = In_MilestoneTitle, FormattedDateTime}.
    A write: mocked (P-MUTATION), never the real server. The screen does not read its output IsSuccess. */
async function sendContactEmail(
  inputs: ContactByEmailOrbitHostInputs,
  userSubject: string,
  message: string,
): Promise<void> {
  await sendOrbitContactEmail({
    isContactHelpdesk: false,
    eventId: '0',
    milestoneId: '',
    targetMemberId: '0',
    subject: inputs.In_Subject,
    userSubject,
    message,
    emailInfo: {
      EventName: inputs.In_EventName,
      SenderFullName: '',
      HostName: inputs.In_HostName,
      HostEmail: inputs.In_HostEmail,
      MilestoneName: inputs.In_MilestoneTitle,
      FormattedDateTime: inputs.In_FormattedDateTime,
    },
  });
}

/** @origin UBTConnect.ContactFlow.ContactByEmailOrbitHost
    The submit flow of the screen, for the shared form (decision Q6): IsLoading and Handler_SubmitForm on the form's
    Event_SubmitForm. The form runs `onBeforeSubmitForm` (AllowUpcomingNavigation, the first step of its
    OnClick_SubmitForm) just before the event. The screen has no data action, no OnReady, OnDestroy or
    OnParametersChanged. ScreenEvent_OnInitialize sets ContactByEmailForm.EmailTo = In_HostEmail; the form record is
    not sent (Handler_SubmitForm passes its own values), so nothing reads it and the hook does not keep it.

    Handler_SubmitForm: IsLoading = True; Subject and Message into the form; SendContactEmail (above); "Your message
    has been sent." after 500 ms; the previous screen. No audit event. An exception goes to the ContactFlow handler
    (Q3: raiseToFlowHandler); IsLoading stays True. */
export function useContactByEmailOrbitHostSubmit(inputs: ContactByEmailOrbitHostInputs): ContactEmailFormSubmit {
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);

  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    try {
      await sendContactEmail(inputs, eventSubject, eventMessage);
      scheduleFeedbackMessageAfterTransition('Your message has been sent.');
      navigateBack();
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  return {
    isLoading,
    onBeforeSubmitForm: allowUpcomingNavigation,
    onEventSubmitForm: (subject, message) => {
      void handlerSubmitForm(subject, message);
    },
  };
}
