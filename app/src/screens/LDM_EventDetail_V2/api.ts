import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { CoordinatorDetailsData, EventByEventIdData, HouseholdCoordinates } from './types';

/** Module of the route's calls (screenservices/Connect2_OrbitMobile_MUI/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** The block inputs the server reads (screenData.variables of the captured calls, analysis/calls.md). */
export type EventDetailVariables = {
  EventHostId: string;
  EventId: string;
};

/** DataActionGetEventByEventId (data action of ScreenBlock_EventDetail_V2, fetched at start and refreshed in OnReady,
    ScreenBlock_EventDetail_V2.mvc.js ctrl :1388-1417, :1989-2066; captured call 2, phase load). */
export async function getEventByEventId(vars: EventDetailVariables): Promise<EventByEventIdData> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId', vars);
  const r = out.EventResponse;
  return {
    eventResponse: {
      Host: r.Host,
      Guests: osList(r.Guests),
      SpecialNeeds: {
        Diet: osList(r.SpecialNeeds.Diet),
        Mobility: osList(r.SpecialNeeds.Mobility),
        Other: osList(r.SpecialNeeds.Other),
      },
    },
    hasContent: out.Out_HasContent,
  };
}

/** DataActionGetCoordinatorDetails (data action of ScreenBlock_EventDetail_V2, fetched at start, ctrl :1364-1387;
    captured call 1, phase load). */
export async function getCoordinatorDetails(vars: EventDetailVariables): Promise<CoordinatorDetailsData> {
  const out = await callAction(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails', vars);
  return {
    coordinatorDetails: out.Out_CoordinatorDetails.GetCoordinatorDetailsResponse,
    hasContent: out.Out_HasContent,
  };
}

/** Server action GetHouseholdCoordinates(HouseholdId) (ctrl :1330-1350), called by OnHandle_HostCardAddress. */
export async function getHouseholdCoordinates(householdId: string): Promise<HouseholdCoordinates> {
  const out = await callAction(MODULE, 'ActionGetHouseholdCoordinates', { HouseholdId: householdId });
  return out.Response;
}

/** The screen inputs EventHostId and EventId (Long Integer, default 0) from the query string (P-PARAMS). */
export function readInputs(params: URLSearchParams): EventDetailVariables {
  return { EventHostId: params.get('EventHostId') ?? '0', EventId: params.get('EventId') ?? '0' };
}
