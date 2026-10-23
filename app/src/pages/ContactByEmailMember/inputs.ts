/** The route inputs of ContactByEmailMember, from the query string by their original names, with their OutSystems
    defaults. Long Integers stay strings ("0" by default); In_LDMEventDate is "" for the null date. The screen has no
    data action: its only server action is SendContactMemberEmail (`@/api/message`), on Send.
    @origin UBTConnect.ContactFlow.ContactByEmailMember */
export interface ContactByEmailMemberInputs {
  In_AvatarURL: string;
  In_ContactName: string;
  In_ContactSurname: string;
  In_ContactLocality: string;
  In_ContactCountry: string;
  In_EmailTo: string;
  In_EntityType: string;
  In_EntityId: string;
  In_LDMEventDate: string;
  In_LDMEventLocality: string;
  In_AuditEventId: string;
  In_OrbitEventTitle: string;
  In_OrbitEventId: string;
  In_OrbitMilestoneId: string;
  In_IsHousehold: boolean;
  In_HouseholdHeaderName: string;
}

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value;

/** Screen inputs from the query string with the original names. */
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
