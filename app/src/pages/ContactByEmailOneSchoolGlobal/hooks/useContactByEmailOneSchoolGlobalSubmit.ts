import { useState } from 'react';
import { sendContactMemberEmail, type ContactByEmailForm } from '@/api/message';
import type { ContactEmailFormSubmit } from '@/components/contact/ContactEmailForm';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import {
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from '@/pages/ContactByEmailOneSchoolGlobal/actions';
import type { ContactByEmailOneSchoolGlobalInputs } from '@/pages/ContactByEmailOneSchoolGlobal/inputs';
import { ApplicationEvents_Directory_EmailHousehold } from '@/pages/ContactByEmailOneSchoolGlobal/staticEntities';

/** @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal
    The submit flow of the screen, for the shared form (decision Q6): IsLoading, OnInitialize (the ContactByEmailForm
    record) and Handler_SubmitForm on the form's Event_SubmitForm. The form runs `onBeforeSubmitForm`
    (AllowUpcomingNavigation, the first step of its OnClick_SubmitForm) just before the event.

    Handler_SubmitForm(Event_Subject, Event_Message): IsLoading = True; Subject and Message into ContactByEmailForm;
    SendContactMemberEmail; zOnApplicationEvent_Wrapper(EmailHousehold, ""); the delayed message "Your message has
    been sent."; the previous screen. No exception handler: on an error IsLoading stays True and the error goes to the
    flow handler (Q2 → A). */
export function useContactByEmailOneSchoolGlobalSubmit(
  inputs: ContactByEmailOneSchoolGlobalInputs,
): ContactEmailFormSubmit {
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  /* ScreenEvent_OnInitialize: ContactByEmailForm.ContactMember = In_ContactName, .EmailTo = In_EmailTo,
     .FirstName = In_ContactName. The record is never rendered. */
  const [form] = useState<ContactByEmailForm>(() => ({
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    firstName: inputs.In_ContactName,
    subject: '',
    message: '',
  }));

  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const sent: ContactByEmailForm = { ...form, subject: eventSubject, message: eventMessage };
    try {
      await sendContactMemberEmail(sent);
    } catch (error) {
      raiseToFlowHandler(error);
      return;
    }
    zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, '');
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    navigateBack();
  };

  return {
    isLoading,
    onBeforeSubmitForm: allowUpcomingNavigation,
    onEventSubmitForm: (subject, message) => {
      void handlerSubmitForm(subject, message);
    },
  };
}
