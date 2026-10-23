/** The route inputs of ContactByEmailLDMCoordinator, from the query string by their original names, with their
    OutSystems defaults. In_EventDate is "YYYY-MM-DD", "" for the null date. The screen has no data action: its only
    server action is SendContactLDMCoordinatorEmail (`@/api/message`), on Send.
    @origin UBTConnect.ContactFlow.ContactByEmailLDMCoordinator */
export interface ContactByEmailLDMCoordinatorInputs {
  In_AvatarURL: string;
  In_ContactName: string;
  In_EmailTo: string;
  In_Subject: string;
  In_EventDate: string;
  In_EventLocality: string;
}

/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** Screen inputs from the query string with the original names (P-PARAMS). */
export function readContactByEmailLDMCoordinatorInputs(params: URLSearchParams): ContactByEmailLDMCoordinatorInputs {
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
