import type { ContactByEmailOneSchoolGlobalInputs } from './types';

/** Screen inputs from the query string with the original names (P-PARAMS); a missing Text input is "". */
export function readContactByEmailOneSchoolGlobalInputs(params: URLSearchParams): ContactByEmailOneSchoolGlobalInputs {
  return {
    In_EmailTo: params.get('In_EmailTo') ?? '',
    In_ContactName: params.get('In_ContactName') ?? '',
  };
}

/* SendContactMemberEmail (screen service ContactFlow/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail):
   the form record as In_UI_ContactByEmailForm; the action has no output. It is in the domain api/message; this module
   keeps the name that the screen uses. */
export { sendContactMemberEmail } from '@/api/message';
