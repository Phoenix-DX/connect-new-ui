import { sendContactEmail as sendOrbitContactEmail } from '@/api/message';
import type { ContactByEmailOrbitHostInputs } from './types';

/* ContactByEmailOrbitHost has no data action (`dataFetchActionNames = []`, S :608). Its only server call is
   SendContactEmail, on the form's Event_SubmitForm (S :610-690). */

/** Screen inputs from the query string with the original names (P-PARAMS; S model :18-89). */
export function readInputs(params: URLSearchParams): ContactByEmailOrbitHostInputs {
  const text = (name: string) => params.get(name) ?? '';
  const entityId = params.get('In_EntityId');
  return {
    In_Subject: text('In_Subject'),
    In_MilestoneTitle: text('In_MilestoneTitle'),
    In_EventName: text('In_EventName'),
    In_HostName: text('In_HostName'),
    In_HostEmail: text('In_HostEmail'),
    In_FormattedDateTime: text('In_FormattedDateTime'),
    In_ContactLocality: text('In_ContactLocality'),
    In_ContactCountry: text('In_ContactCountry'),
    In_AvatarURL: text('In_AvatarURL'),
    In_EntityType: text('In_EntityType'),
    In_EntityId: entityId === null || entityId === '' ? '0' : entityId,
    In_Surname: text('In_Surname'),
  };
}

/** SendContactEmail(False, EventId 0, MilestoneId "", TargetMemberId 0, Subject = In_Subject, UserSubject = the
    form's subject, Message, EmailInfo {EventName, SenderFullName "", SenderEmail "", HostName, HostEmail,
    MilestoneName = In_MilestoneTitle, FormattedDateTime}) (server action of Connect2_OrbitMobile_BL, S :578-600,
    :625-650; `UBTConnect/ActionSendContactEmail`, in the domain api/message). A write: mocked (P-MUTATION), never the
    real server. Its output IsSuccess is not read by the screen. */
export async function sendContactEmail(
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
