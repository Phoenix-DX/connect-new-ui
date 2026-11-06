import type { LdmEventCallInputs } from '@/api/event';

/** The route inputs of LDM_EventDetail_V2, from the query string by their original names. They are the inputs of
    ScreenBlock_EventDetail_V2, which its two data actions send: `LdmEventCallInputs` of the domain api/event. The
    server calls of the block are in api/event (GetEventByEventId, GetCoordinatorDetails) and api/household
    (GetHouseholdCoordinates).
    @origin UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2 */
export type LdmEventDetailInputs = LdmEventCallInputs;

/** The screen inputs EventHostId and EventId (Long Integer, "0" when absent) from the query string (P-PARAMS). */
export function readLdmEventDetailInputs(params: URLSearchParams): LdmEventDetailInputs {
  return { EventHostId: params.get('EventHostId') ?? '0', EventId: params.get('EventId') ?? '0' };
}
