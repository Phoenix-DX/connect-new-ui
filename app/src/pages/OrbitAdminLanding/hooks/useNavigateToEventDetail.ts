import { APP_ID } from '@/platform/navigation/paths';
import { useOsNavigate, type OsParams } from '@/platform/navigation';
import type { EventDetailTarget } from './adminLandingState';

/** OnHandle_NavigateToEventDetail of the screen OrbitAdminLanding: the handler of the block event
    NavigateTo_EventDetail. It only opens OrbitAdminEventDetail with the event's id, start date, location, name, end
    date and friendly type (the parameter names and order of the original; TST survey of 2026-10-13,
    UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js:244-252). The TST publish of 2026-10-27 added a
    GetMilestoneScanFF call and an OrbitAdminMilestones branch here (OrbitAdminLanding.js:244-290); the port waits
    with the new TST screens (N1, user 2026-10-28; Legacy_OrbitAdminFlow Q1 read the older survey).
    Flow scope (item 8): no await. A navigation from a screen that the user left does not happen (R4, useOsNavigate).
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding */
export function useNavigateToEventDetail(): (target: EventDetailTarget) => void {
  const navigate = useOsNavigate();
  return (target) => {
    navigate(`/${APP_ID}/OrbitAdminEventDetail`, orbitAdminEventDetailParams(target));
  };
}

/** The inputs of OrbitAdminEventDetail, in the order of the original URL. */
export const orbitAdminEventDetailParams = (target: EventDetailTarget): OsParams => ({
  In_EventId: target.eventId,
  In_EventStartDate: wireDateTimeParam(target.eventStartDate),
  In_EventLocation: target.eventLocation,
  In_EventName: target.eventName,
  In_EventEndDate: wireDateTimeParam(target.eventEndDate),
  In_EventTypeFriendly: target.eventTypeFriendly,
});

/** A DateTime screen input as the original puts it in the URL: ServerDataConverter.asString(value, DateTime), the
    toString() of the DateTime. The null date gives "1900-01-01T00:00:00", any other value the toISOString() of the
    instant (the dateTimeParam of platform/navigation/osNavigate.ts). The Orbit DateTimes here are UTC wire values
    ("yyyy-MM-ddTHH:mm:ssZ"), so the instant is the wire value itself. */
export const wireDateTimeParam = (value: string): string =>
  value === '' || value.startsWith('1900-01-01') ? '1900-01-01T00:00:00' : new Date(value).toISOString();
