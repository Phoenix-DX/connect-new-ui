/** The route inputs of ContactByEmailOrbitHelpdesk, from the query string by their original names, with their
    OutSystems defaults. Long Integers stay strings ("0" by default). The screen has no data action: its only server
    action is SendContactEmail (`@/api/message`), on Send.
    @origin UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk */
export interface ContactByEmailOrbitHelpdeskInputs {
  In_EventId: string;
  In_MilestoneId: string;
  In_TargetMemberId: string;
  In_Subject: string;
  In_MilestoneTitle: string;
  In_EventName: string;
  In_HostName: string;
  In_HostEmail: string;
  In_FormattedDateTime: string;
}

/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names. */
export function readContactByEmailOrbitHelpdeskInputs(params: URLSearchParams): ContactByEmailOrbitHelpdeskInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_EventId: osLongInput(params.get('In_EventId')),
    In_MilestoneId: text('In_MilestoneId'),
    In_TargetMemberId: osLongInput(params.get('In_TargetMemberId')),
    In_Subject: text('In_Subject'),
    In_MilestoneTitle: text('In_MilestoneTitle'),
    In_EventName: text('In_EventName'),
    In_HostName: text('In_HostName'),
    In_HostEmail: text('In_HostEmail'),
    In_FormattedDateTime: text('In_FormattedDateTime'),
  };
}
