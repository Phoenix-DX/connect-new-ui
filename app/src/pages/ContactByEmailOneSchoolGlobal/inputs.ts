/** The route inputs of ContactByEmailOneSchoolGlobal, from the query string by their original names; a missing Text
    input is "". The screen has no data action: its only server action is SendContactMemberEmail (`@/api/message`), on
    Send.
    @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal */
export interface ContactByEmailOneSchoolGlobalInputs {
  In_EmailTo: string;
  In_ContactName: string;
}

/** Screen inputs from the query string with the original names. */
export function readContactByEmailOneSchoolGlobalInputs(params: URLSearchParams): ContactByEmailOneSchoolGlobalInputs {
  return {
    In_EmailTo: params.get('In_EmailTo') ?? '',
    In_ContactName: params.get('In_ContactName') ?? '',
  };
}
