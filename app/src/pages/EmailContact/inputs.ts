/** The route inputs of EmailContact, from the query string by their original names, with their OutSystems defaults.
    Long Integers stay text ("0" = null). No built screen links to the route (EmailContact Q2: review URLs). The screen
    has no data action: its only server call is SendContactEmail of the contact form, on Submit (domain api/message).
    @origin UBTConnect.Legacy_OrbitEventsFlow.EmailContact */
export interface EmailContactInputs {
  /** True: the form writes to the Orbit helpdesk of the event; false: to the host. */
  In_IsContactHelpdesk: boolean;
  In_EventId: string;
  In_MilestoneId: string;
  In_TargetMemberId: string;
  /** The read-only subject of the helpdesk form. */
  In_Subject: string;
  /** In_MilestoneName of the contact form. */
  In_MilestoneTitle: string;
  In_EventName: string;
  /** The "To:" line of the host form. */
  In_HostName: string;
  In_HostEmail: string;
  In_FormattedDateTime: string;
}

/** Long Integer input: "0" for an absent or empty value. */
const longInteger = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** The screen inputs from the query string (P-PARAMS). A Boolean as OutSystems writes it ("True" / "False", any
    case); a Text input is "" when it is absent. */
export function readEmailContactInputs(params: URLSearchParams): EmailContactInputs {
  const text = (name: string) => params.get(name) ?? '';
  return {
    In_IsContactHelpdesk: text('In_IsContactHelpdesk').toLowerCase() === 'true',
    In_EventId: longInteger(params.get('In_EventId')),
    In_MilestoneId: text('In_MilestoneId'),
    In_TargetMemberId: longInteger(params.get('In_TargetMemberId')),
    In_Subject: text('In_Subject'),
    In_MilestoneTitle: text('In_MilestoneTitle'),
    In_EventName: text('In_EventName'),
    In_HostName: text('In_HostName'),
    In_HostEmail: text('In_HostEmail'),
    In_FormattedDateTime: text('In_FormattedDateTime'),
  };
}
