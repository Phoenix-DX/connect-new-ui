import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { AdminEventItem, AdminLandingVariablesWire, AdminOrbitEventsWire } from './types';

/** GetAdminOrbitEvents_ScreenRec → the Event_ScreenRec of its card (typeConvertRecord of the view,
    ScreenBlock_AdminLanding.mvc.js view :301-308: EventId, Type, Title, OrbitEventType, EventInfo) and the row's
    TypeFriendly. Dates stay wire DateTimes (Card_Event formats them; the null date gives ""). */
export const toAdminEventItem = (w: AdminOrbitEventsWire): AdminEventItem => ({
  event: {
    EventId: w.OrbitSummaryItem.EventId,
    Type: w.OrbitSummaryItem.Type,
    Title: w.OrbitSummaryItem.Title,
    OrbitEventType: w.OrbitEventType,
    EventInfo: w.OrbitSummaryItem.EventInfo,
  },
  typeFriendly: w.OrbitSummaryItem.TypeFriendly,
});

/** DataActionGet_AdminEventsList (data action of ScreenBlock_AdminLanding, on demand: Refresh_GetEventsByMemberId,
    ctrl :445-505, dataFetchDependenciesOriginal -1 :434-436; captured call 2, phase load). No input parameters; the
    block variables travel as screenData.variables. */
export async function getAdminEventsList(vars: AdminLandingVariablesWire): Promise<AdminEventItem[]> {
  const out = await callAction(
    'Connect2_OrbitMobile_MUI',
    'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList',
    vars,
  );
  return osList(out.Response).map(toAdminEventItem);
}

/** GetMilestoneScanFF (server action of the screen, UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc.js ctrl
    :221-235; no inputs): IsScanPerMilestone. Not in the capture (it runs on a card click; TST had no card). */
export async function getMilestoneScanFF(): Promise<boolean> {
  const out = await callAction('UBTConnect', 'ActionGetMilestoneScanFF', {});
  return out.IsScanPerMilestone;
}

/** A DateTime screen input as the original puts it in the URL: ServerDataConverter.asString(value, DateTime) =
    the DateTime's toString(): "1900-01-01T00:00:00" for the null date, else toISOString() of the instant (the shell's
    dateTimeParam, osNavigate.ts:23-35). The Orbit DateTimes here are UTC wire values ("yyyy-MM-ddTHH:mm:ssZ"), so the
    instant is the wire value itself. */
export const wireDateTimeParam = (value: string): string =>
  value === '' || value.startsWith('1900-01-01') ? '1900-01-01T00:00:00' : new Date(value).toISOString();
