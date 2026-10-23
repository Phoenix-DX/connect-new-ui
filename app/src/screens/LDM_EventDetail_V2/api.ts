import { callAction } from '@/api/client/callAction';
import type { LdmEventCallInputs } from '@/api/event';
import type { HouseholdCoordinates } from './types';

/** Module of the route's calls (screenservices/Connect2_OrbitMobile_MUI/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

/* The block inputs that the server reads (EventHostId, EventId) and the two data actions of
   ScreenBlock_EventDetail_V2 (DataActionGetEventByEventId and DataActionGetCoordinatorDetails, fetched at start) are
   in the domain api/event. This module keeps the names that the screen uses. */
export type { LdmEventCallInputs as EventDetailVariables } from '@/api/event';
export {
  fetchCoordinatorDetails as getCoordinatorDetails,
  fetchEventByEventId as getEventByEventId,
} from '@/api/event';

/** Server action GetHouseholdCoordinates(HouseholdId) (ctrl :1330-1350), called by OnHandle_HostCardAddress. */
export async function getHouseholdCoordinates(householdId: string): Promise<HouseholdCoordinates> {
  const out = await callAction(MODULE, 'ActionGetHouseholdCoordinates', { HouseholdId: householdId });
  return out.Response;
}

/** The screen inputs EventHostId and EventId (Long Integer, default 0) from the query string (P-PARAMS). */
export function readInputs(params: URLSearchParams): LdmEventCallInputs {
  return { EventHostId: params.get('EventHostId') ?? '0', EventId: params.get('EventId') ?? '0' };
}
