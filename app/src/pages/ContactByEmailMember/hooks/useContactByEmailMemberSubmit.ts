import { useState } from 'react';
import { sendContactMemberEmail, type ContactByEmailForm } from '@/api/message';
import type { ContactEmailFormSubmit } from '@/components/contact/ContactEmailForm';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  addAuditEventDetailEvent,
  onApplicationEvent_EmailHost,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from '@/pages/ContactByEmailMember/actions';
import type { ContactByEmailMemberInputs } from '@/pages/ContactByEmailMember/inputs';
import {
  ApplicationEvents_Directory_EmailHousehold,
  OrbitApplicationEvent_EmailHost,
} from '@/pages/ContactByEmailMember/staticEntities';

/** @origin UBTConnect.ContactFlow.ContactByEmailMember
    The submit flow of the screen, for the shared form (decision Q6): IsLoading, OnInitialize (the ContactByEmailForm
    record) and Handler_SubmitForm on the form's Event_SubmitForm. The form runs `onBeforeSubmitForm`
    (AllowUpcomingNavigation, the first step of its OnClick_SubmitForm) just before the event. The screen has no
    OnReady, OnDestroy or OnParametersChanged.

    Handler_SubmitForm: IsLoading = True; Subject and Message into ContactByEmailForm; SendContactMemberEmail;
    AppManager_GetCachedUserInfo; EmailEvent = {EmailTo, NameOfSender = LastName + ", " + FirstName}.
    - In_AuditEventId = OrbitApplicationEvent.EmailHost: OnApplicationEvent_EmailHost(MilestoneId, EventId), then the
      flow ends (no message, no navigation).
    - Otherwise: when In_LDMEventDate <> NullDate or In_LDMEventLocality <> "", AddAuditEventDetailEvent(EmailHousehold,
      date, locality) and EventJSON = JSONSerialize(EmailEvent); then zOnApplicationEvent_Wrapper(EmailHousehold,
      EventJSON), "Your message has been sent." after 500 ms and the previous screen.
    An exception goes to the ContactFlow handler (Q3: raiseToFlowHandler); IsLoading stays True. */
export function useContactByEmailMemberSubmit(inputs: ContactByEmailMemberInputs): ContactEmailFormSubmit {
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize: FirstName = In_ContactName, ContactMember = In_ContactName, EmailTo = In_EmailTo.
  const [form] = useState<ContactByEmailForm>(() => ({
    firstName: inputs.In_ContactName,
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    subject: '',
    message: '',
  }));

  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const sent: ContactByEmailForm = { ...form, subject: eventSubject, message: eventMessage };
    try {
      await sendContactMemberEmail(sent);
      const user = appManager_GetCachedUserInfo();
      const emailEvent = { EmailTo: sent.emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` };
      if (inputs.In_AuditEventId === OrbitApplicationEvent_EmailHost) {
        onApplicationEvent_EmailHost({ MilestoneId: inputs.In_OrbitMilestoneId, EventId: inputs.In_OrbitEventId });
        return;
      }
      let eventJSON = '';
      if (inputs.In_LDMEventDate !== '' || inputs.In_LDMEventLocality !== '') {
        addAuditEventDetailEvent(
          ApplicationEvents_Directory_EmailHousehold,
          inputs.In_LDMEventDate,
          inputs.In_LDMEventLocality,
        );
        eventJSON = JSON.stringify(emailEvent);
      }
      zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, eventJSON);
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
