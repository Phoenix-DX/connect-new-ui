import { callAction } from '@/api/client/callAction';
import type { ContactByEmailFormRecord, ContactByEmailOneSchoolGlobalInputs } from './types';

/** Screen inputs from the query string with the original names (P-PARAMS); a missing Text input is "". */
export function readContactByEmailOneSchoolGlobalInputs(params: URLSearchParams): ContactByEmailOneSchoolGlobalInputs {
  return {
    In_EmailTo: params.get('In_EmailTo') ?? '',
    In_ContactName: params.get('In_ContactName') ?? '',
  };
}

/** SendContactMemberEmail (p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js controller :426-436, screen
    service ContactFlow/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail): the form record as
    In_UI_ContactByEmailForm; the action has no output. */
export async function sendContactMemberEmail(form: ContactByEmailFormRecord): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPISendContactMemberEmail', {
    In_UI_ContactByEmailForm: {
      ContactMember: form.contactMember,
      EmailTo: form.emailTo,
      FirstName: form.firstName,
      Message: form.message,
      Subject: form.subject,
    },
  });
}
