import type { EventEmailCallInputs } from '@/api/message';

/** @origin UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2
    The inputs of LDM_Email_V2 as the block ScreenBlock_Event_Email_V2 takes them: EventHostId becomes In_EventHostId,
    Long Integers stay text ("0" by default), EventDate is "YYYY-MM-DD" ("" for the null date). The type is the domain
    type of api/message, which DataActionGetCoordinatorDetails sends. */
export type EventEmailInputs = EventEmailCallInputs;

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** The screen inputs EventHostId, In_EventId, In_IsMessageGuest, In_IsContactOrganiser, EventDate and EventLocality
    from the query string, with the original names (P-PARAMS). */
export function readInputs(params: URLSearchParams): EventEmailInputs {
  return {
    In_EventHostId: osLongInput(params.get('EventHostId')),
    In_EventId: osLongInput(params.get('In_EventId')),
    In_IsMessageGuest: osBoolean(params.get('In_IsMessageGuest')),
    In_IsContactOrganiser: osBoolean(params.get('In_IsContactOrganiser')),
    EventDate: osDateInput(params.get('EventDate')),
    EventLocality: params.get('EventLocality') ?? '',
  };
}
