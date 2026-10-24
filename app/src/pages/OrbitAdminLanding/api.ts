/* DataActionGet_AdminEventsList of ScreenBlock_AdminLanding (on demand: Refresh_GetEventsByMemberId; the block
   variables travel with it) and the server action GetMilestoneScanFF of the screen (no inputs; it runs on a card
   click) are in the domain api/event. This module keeps the names that the screen uses. */
export { fetchAdminEvents as getAdminEventsList, fetchMilestoneScanFF as getMilestoneScanFF } from '@/api/event';

/** A DateTime screen input as the original puts it in the URL: ServerDataConverter.asString(value, DateTime) =
    the DateTime's toString(): "1900-01-01T00:00:00" for the null date, else toISOString() of the instant (the shell's
    dateTimeParam, osNavigate.ts:23-35). The Orbit DateTimes here are UTC wire values ("yyyy-MM-ddTHH:mm:ssZ"), so the
    instant is the wire value itself. */
export const wireDateTimeParam = (value: string): string =>
  value === '' || value.startsWith('1900-01-01') ? '1900-01-01T00:00:00' : new Date(value).toISOString();
