import { useState } from 'react';
import { sendContactEmail } from '@/api/message';
import type { ContactEmailFormSubmit } from '@/components/contact/ContactEmailForm';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import {
  onApplicationEvent_ContactHelpdesk,
  scheduleFeedbackMessageAfterTransition,
} from '@/pages/ContactByEmailOrbitHelpdesk/actions';
import type { ContactByEmailOrbitHelpdeskInputs } from '@/pages/ContactByEmailOrbitHelpdesk/inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk
    The submit flow of the screen, for the shared form (decision Q6): IsLoading and Handler_SubmitForm on the form's
    Event_SubmitForm. The form runs `onBeforeSubmitForm` (AllowUpcomingNavigation, the first step of its
    OnClick_SubmitForm) just before the event. The screen has no OnReady, OnDestroy or OnParametersChanged.
    ScreenEvent_OnInitialize sets the ContactByEmailForm record (FirstName, ContactMember, EmailTo = "", Subject =
    In_Subject). Only Handler_SubmitForm reads the record, and it overwrites Subject and Message first, so the hook
    keeps no record.

    Handler_SubmitForm: IsLoading = True; Subject and Message into the form; AppManager_GetCachedUserInfo;
    SendContactEmail(True, In_EventId, In_MilestoneId, In_TargetMemberId, Subject, "", Message, {EventName,
    SenderFullName = FirstName + " " + LastName, HostName, HostEmail, MilestoneName = In_MilestoneTitle,
    FormattedDateTime}); OnApplicationEvent_ContactHelpdesk; "Your message has been sent." after 500 ms; the previous
    screen. The screen does not read the output IsSuccess. An exception goes to the ContactFlow handler
    (raiseToFlowHandler); IsLoading stays True. */
export function useContactByEmailOrbitHelpdeskSubmit(
  inputs: ContactByEmailOrbitHelpdeskInputs,
): ContactEmailFormSubmit {
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);

  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    try {
      const user = appManager_GetCachedUserInfo();
      await sendContactEmail({
        isContactHelpdesk: true,
        eventId: inputs.In_EventId,
        milestoneId: inputs.In_MilestoneId,
        targetMemberId: inputs.In_TargetMemberId,
        subject: eventSubject,
        userSubject: '',
        message: eventMessage,
        emailInfo: {
          EventName: inputs.In_EventName,
          SenderFullName: `${user.FirstName} ${user.LastName}`,
          HostName: inputs.In_HostName,
          HostEmail: inputs.In_HostEmail,
          MilestoneName: inputs.In_MilestoneTitle,
          FormattedDateTime: inputs.In_FormattedDateTime,
        },
      });
      // AuditPayload_ContactHelpdesk (TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:564-570): Subject and
      // Message are those of ContactByEmailForm, set from the event (:538-541).
      onApplicationEvent_ContactHelpdesk({
        EventId: inputs.In_EventId,
        EventTitle: inputs.In_EventName,
        Subject: eventSubject,
        Message: eventMessage,
      });
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
