import { getMilestoneScanFF } from '@/api/event';
import { APP_ID } from '@/platform/navigation/paths';
import { useOsNavigate, type OsParams } from '@/platform/navigation';
import type { EventDetailTarget } from './adminLandingState';

/** OnHandle_NavigateToEventDetail of the screen OrbitAdminLanding: the handler of the block event
    NavigateTo_EventDetail. It calls the server action GetMilestoneScanFF (module Connect2_OrbitMobile_BL; TST publish
    of 2026-10-27, live survey OrbitAdminLanding.mvc.js:218-227, 242-290; N1, user 2026-10-28). True: OrbitAdminMilestones
    with the event's id. False (the live TST value, probe 2026-10-28): OrbitAdminEventDetail with the event's id, start
    date, location, name, end date and friendly type (the parameter names and order of the original).
    Flow scope (item 8): GetMilestoneScanFF is a server action (R2, no wrap). A navigation from a screen that the user
    left does not happen (R4, useOsNavigate throws OutOfContextException).
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding */
export function useNavigateToEventDetail(): (target: EventDetailTarget) => Promise<void> {
  const navigate = useOsNavigate();
  return async (target) => {
    const isScanPerMilestone = await getMilestoneScanFF(); // R2
    if (isScanPerMilestone) {
      navigate(`/${APP_ID}/OrbitAdminMilestones`, { EventId: target.eventId });
    } else {
      navigate(`/${APP_ID}/OrbitAdminEventDetail`, orbitAdminEventDetailParams(target));
    }
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
