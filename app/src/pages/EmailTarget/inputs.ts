/** The route inputs of EmailTarget, from the query string by their original names, with their OutSystems defaults.
    The screen and ScreenBlock_Household_Email have no data action. The only server call is UserContactUser, the
    server action of the block, on the Send click (`sendUserContactEmail` of api/message, called by
    `useHouseholdEmail`): a write, mocked (P-MUTATION), never sent to the real server.
    @origin UBTConnect.Legacy_LDMEventsFlow.EmailTarget */
export interface EmailTargetInputs {
  /** ContactMember and FirstName of the e-mail request. */
  In_HouseholdFirstName: string;
  /** The recipient line "To: " + In_HouseholdFullName. */
  In_HouseholdFullName: string;
  /** EmailTo (Email): the recipient of the e-mail request. */
  EmailTo: string;
  /** OnInitialize of the block: the HeaderText of the title. */
  ContactBusinessType: string;
  /** OnInitialize of the block: the first Subject. */
  InitialEmailSubject: string;
  /** OnEmailLDMEventParticipant_Handler: the host event instead of the guest event. */
  EmailHost: boolean;
  /** OnEmailLDMEventParticipant_Handler: the audit event is added only from LDM. */
  IsFromLDM: boolean;
  /** "YYYY-MM-DD", "" for an absent value or the null date. */
  EventDate: string;
  EventLocality: string;
}

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** Screen inputs from the query string with the original names (P-PARAMS). */
export function readEmailTargetInputs(params: URLSearchParams): EmailTargetInputs {
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
