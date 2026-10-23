import type { EmailTargetInputs } from './types';

/* EmailTarget and ScreenBlock_Household_Email have no data action (S :318, H :706). The only server call is
   UserContactUser(UserContactRequest), the server action of ScreenBlock_Household_Email, on the Send click: a write,
   mocked (P-MUTATION), never the real server. It is in the domain api/message; this module keeps the name that the
   screen uses. */
export { sendUserContactEmail as userContactUser } from '@/api/message';

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** Screen inputs from the query string with the original names (P-PARAMS; S :106-146). */
export function readInputs(params: URLSearchParams): EmailTargetInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_HouseholdFirstName: text('In_HouseholdFirstName'),
    In_HouseholdFullName: text('In_HouseholdFullName'),
    EmailTo: text('EmailTo'),
    ContactBusinessType: text('ContactBusinessType'),
    InitialEmailSubject: text('InitialEmailSubject'),
    EmailHost: osBoolean(params.get('EmailHost')),
    IsFromLDM: osBoolean(params.get('IsFromLDM')),
    EventDate: osDateInput(params.get('EventDate')),
    EventLocality: text('EventLocality'),
  };
}
