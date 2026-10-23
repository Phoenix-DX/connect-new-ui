import type { ContactByEmailOrbitHelpdeskInputs } from './types';

/* ContactByEmailOrbitHelpdesk has no data action (`dataFetchActionNames = []`, S :481). Its only server call is
   SendContactEmail, on the form's Event_SubmitForm (call-sites.md): the server action of Connect2_OrbitMobile_BL
   through `UBTConnect/ActionSendContactEmail`, a write, mocked (P-MUTATION), never the real server. The screen does
   not read its output IsSuccess. It is in the domain api/message; this module keeps the name that the screen uses. */
export { sendContactEmail } from '@/api/message';

/** Long Integer input: "0" for an absent or empty value. */
const longInteger = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names (P-PARAMS; S model :19-72, :96-140). */
export function readInputs(params: URLSearchParams): ContactByEmailOrbitHelpdeskInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_EventId: longInteger(params.get('In_EventId')),
    In_MilestoneId: text('In_MilestoneId'),
    In_TargetMemberId: longInteger(params.get('In_TargetMemberId')),
    In_Subject: text('In_Subject'),
    In_MilestoneTitle: text('In_MilestoneTitle'),
    In_EventName: text('In_EventName'),
    In_HostName: text('In_HostName'),
    In_HostEmail: text('In_HostEmail'),
    In_FormattedDateTime: text('In_FormattedDateTime'),
  };
}
