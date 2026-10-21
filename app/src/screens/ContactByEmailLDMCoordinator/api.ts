import { callAction } from '../../lib/api';
import type { ContactByEmailForm, ContactByEmailLDMCoordinatorInputs } from './types';

/* ContactByEmailLDMCoordinator has no data action (`dataFetchActionNames = []`, S :478). Its only server call is
   SendContactLDMCoordinatorEmail, on the form's Event_SubmitForm. */

/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** Screen inputs from the query string with the original names (P-PARAMS; S :97-123). */
export function readInputs(params: URLSearchParams): ContactByEmailLDMCoordinatorInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_AvatarURL: text('In_AvatarURL'),
    In_ContactName: text('In_ContactName'),
    In_EmailTo: text('In_EmailTo'),
    In_Subject: text('In_Subject'),
    In_EventDate: osDateInput(params.get('In_EventDate')),
    In_EventLocality: text('In_EventLocality'),
  };
}

/** SendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm) (service action, S :466-476). A write: mocked
    (P-MUTATION), never the real server. */
export async function sendContactLDMCoordinatorEmail(form: ContactByEmailForm): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPISendContactLDMCoordinatorEmail', {
    In_UI_ContactByEmailForm: {
      FirstName: form.firstName,
      ContactMember: form.contactMember,
      EmailTo: form.emailTo,
      Subject: form.subject,
      Message: form.message,
    },
  });
}
