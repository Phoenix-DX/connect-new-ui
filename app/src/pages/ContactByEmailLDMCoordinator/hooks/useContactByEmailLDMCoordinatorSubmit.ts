import { useState } from 'react';
import { sendContactLDMCoordinatorEmail, type ContactByEmailForm } from '@/api/message';
import type { ContactEmailFormSubmit } from '@/components/contact/ContactEmailForm';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  addAuditEventDetailEvent,
  LDMApplicationEvent_MyTimelineCoordinatorEmailed,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from '@/pages/ContactByEmailLDMCoordinator/actions';
import type { ContactByEmailLDMCoordinatorInputs } from '@/pages/ContactByEmailLDMCoordinator/inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailLDMCoordinator
    The submit flow of the screen, for the shared form (decision Q6): IsLoading, OnInitialize (the ContactByEmailForm
    record) and Handler_SubmitForm on the form's Event_SubmitForm. The form runs `onBeforeSubmitForm`
    (AllowUpcomingNavigation, the first step of its OnClick_SubmitForm) just before the event. The screen has no data
    action, no OnReady, OnDestroy or OnParametersChanged.

    Handler_SubmitForm: IsLoading = True; Subject and Message into ContactByEmailForm; SendContactLDMCoordinatorEmail;
    AppManager_GetCachedUserInfo; EmailEvent = {EmailTo, NameOfSender = LastName + ", " + FirstName};
    AddAuditEventDetailEvent(MyTimelineCoordinatorEmailed, 0, "", In_EventDate, In_EventLocality);
    zOnApplicationEvent_Wrapper(MyTimelineCoordinatorEmailed, JSONSerialize(EmailEvent)); "Your message has been sent."
    after 500 ms and the previous screen. An exception goes to the ContactFlow handler (Q3: raiseToFlowHandler);
    IsLoading stays True. */
export function useContactByEmailLDMCoordinatorSubmit(
  inputs: ContactByEmailLDMCoordinatorInputs,
): ContactEmailFormSubmit {
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize: FirstName = ContactMember = In_ContactName, EmailTo = In_EmailTo, Subject = In_Subject.
  const [form] = useState<ContactByEmailForm>(() => ({
    firstName: inputs.In_ContactName,
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    subject: inputs.In_Subject,
    message: '',
  }));

  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const sent: ContactByEmailForm = { ...form, subject: eventSubject, message: eventMessage };
    try {
      await sendContactLDMCoordinatorEmail(sent);
      const user = appManager_GetCachedUserInfo();
      const emailEvent = { EmailTo: sent.emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` };
      addAuditEventDetailEvent(
        LDMApplicationEvent_MyTimelineCoordinatorEmailed,
        inputs.In_EventDate,
        inputs.In_EventLocality,
      );
      zOnApplicationEvent_Wrapper(LDMApplicationEvent_MyTimelineCoordinatorEmailed, JSON.stringify(emailEvent));
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
