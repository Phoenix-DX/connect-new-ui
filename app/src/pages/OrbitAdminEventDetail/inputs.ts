import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';

/** The route inputs of OrbitAdminEventDetail, from the query string by their original names (P-PARAMS). OrbitAdminLanding
    opens the screen with them. The server calls of the screen are in the domains api/event, api/member and api/image.
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminEventDetail */
export interface AdminEventDetailInputs {
  /** In_EventId (Long Integer as text, "0" when absent). */
  In_EventId: string;
  In_EventName: string;
  /** DateTime as in the URL (the UTC instant, ServerDataConverter.asString = toISOString), or the null date
      "1900-01-01T00:00:00" when absent. */
  In_EventStartDate: string;
  /** As In_EventStartDate. */
  In_EventEndDate: string;
  In_EventLocation: string;
  In_EventTypeFriendly: string;
}

/** The OutSystems null DateTime as a URL input (ServerDataConverter.asString of the null date). */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** The screen inputs: a missing Long Integer is 0, a missing DateTime the null date, a missing Text "". */
export function readInputs(params: URLSearchParams): AdminEventDetailInputs {
  const dateTime = (name: string) => params.get(name) || NULL_DATE_TIME;
  return {
    In_EventId: textToLongInteger(params.get('In_EventId') ?? ''),
    In_EventName: params.get('In_EventName') ?? '',
    In_EventStartDate: dateTime('In_EventStartDate'),
    In_EventEndDate: dateTime('In_EventEndDate'),
    In_EventLocation: params.get('In_EventLocation') ?? '',
    In_EventTypeFriendly: params.get('In_EventTypeFriendly') ?? '',
  };
}
