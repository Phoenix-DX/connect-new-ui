/** The route inputs of ContactByEmailOrbitHost, from the query string by their original names, with their OutSystems
    defaults. In_EntityId is a Long Integer kept as a string ("0" by default, "0" = null). The screen has no data
    action: its only server action is SendContactEmail (`@/api/message`), on the form's Event_SubmitForm.
    @origin UBTConnect.ContactFlow.ContactByEmailOrbitHost */
export interface ContactByEmailOrbitHostInputs {
  In_Subject: string;
  In_MilestoneTitle: string;
  In_EventName: string;
  In_HostName: string;
  In_HostEmail: string;
  In_FormattedDateTime: string;
  In_ContactLocality: string;
  In_ContactCountry: string;
  In_AvatarURL: string;
  In_EntityType: string;
  In_EntityId: string;
  In_Surname: string;
}

/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names. */
export function readContactByEmailOrbitHostInputs(params: URLSearchParams): ContactByEmailOrbitHostInputs {
  const text = (name: string) => params.get(name) ?? '';
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
    In_EntityId: osLongInput(params.get('In_EntityId')),
    In_Surname: text('In_Surname'),
  };
}
