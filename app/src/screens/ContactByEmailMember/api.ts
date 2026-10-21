import { callAction } from '../../lib/api';
import type { ContactByEmailForm, ContactByEmailMemberInputs } from './types';

/* ContactByEmailMember has no data action (controller `dataFetchActionNames = []`, mvc.js:640). The calls of the
   capture (Sync_Info_GetMain, GetUserInformation, CacheableMapEntities, CacheableHouseholds) are the shell's app start
   (src/shell/startup.ts). Its only server action is SendContactMemberEmail, on Send (Q1 → A pending). */

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value;

/** Screen inputs from the query string with the original names (mvc.js:160-224). */
export function readContactByEmailMemberInputs(params: URLSearchParams): ContactByEmailMemberInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_AvatarURL: text('In_AvatarURL'),
    In_ContactName: text('In_ContactName'),
    In_ContactSurname: text('In_ContactSurname'),
    In_ContactLocality: text('In_ContactLocality'),
    In_ContactCountry: text('In_ContactCountry'),
    In_EmailTo: text('In_EmailTo'),
    In_EntityType: text('In_EntityType'),
    In_EntityId: osLongInput(params.get('In_EntityId')),
    In_LDMEventDate: osDateInput(params.get('In_LDMEventDate')),
    In_LDMEventLocality: text('In_LDMEventLocality'),
    In_AuditEventId: text('In_AuditEventId'),
    In_OrbitEventTitle: text('In_OrbitEventTitle'),
    In_OrbitEventId: osLongInput(params.get('In_OrbitEventId')),
    In_OrbitMilestoneId: text('In_OrbitMilestoneId'),
    In_IsHousehold: osBoolean(params.get('In_IsHousehold')),
    In_HouseholdHeaderName: text('In_HouseholdHeaderName'),
  };
}

/** SendContactMemberEmail (mvc.js:628-636): the screen's ContactByEmailForm record as In_UI_ContactByEmailForm. A
    write: mocked (P-MUTATION), never the real server. */
export async function sendContactMemberEmail(form: ContactByEmailForm): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPISendContactMemberEmail', {
    In_UI_ContactByEmailForm: {
      FirstName: form.firstName,
      ContactMember: form.contactMember,
      EmailTo: form.emailTo,
      Subject: form.subject,
      Message: form.message,
    },
  });
}
