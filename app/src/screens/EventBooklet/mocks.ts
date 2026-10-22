import type { RequestHandler } from 'msw';
import { osList, wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '@/mocks/contract';
import { orbitEventBooklets, type OrbitBookletMember } from '@/mocks/fictional/orbit';
import type {
  EventBookletFiltersResponseWire,
  EventBookletMemberWire,
  GetEventBookletFiltersWire,
  PaginationSettingsWire,
  SelectedFiltersWire,
} from './types';

/* The three booklet data actions were never recorded (no capture, no-capture.json): fictional answers from the shared
   Orbit world (src/mocks/fictional/orbit.ts orbitEventBooklets, EventBooklet Q1) in the contract's shape. The server
   side is not known: the mock filters and pages the way the screen asks (SelectedFilters, PaginationSettings), the
   conservative reading of the inputs:
   - search term: first name, last name, "first last" or host, case-insensitive ("Search guest or host name");
   - days: a member with one of the selected days; countries / localities: the member's country / locality is one of
     them; helper roles (helpers only): the member's role is one of them;
   - page: the members in OrderNo order, rows (PageNumber - 1) × MaxRows to PageNumber × MaxRows (MaxRows 0: all).
   Unknown event: empty filters, no guests, no helpers. Scenarios: real; empty (every list emptied: "There are no
   guests allocated to this event…"); loading (never answers: skeletons); error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE_TIME = '1900-01-01T00:00:00';

const booklet = (eventId: string) => orbitEventBooklets().find((b) => b.EventId === eventId);

const toWire = (m: OrbitBookletMember): EventBookletMemberWire => ({ ...m, Days: wireList([...m.Days]) });

/** The members that match the selected filters, one page. */
function page(
  members: readonly OrbitBookletMember[],
  filters: SelectedFiltersWire | undefined,
  pageNumber: number,
  maxRows: number,
  withRoles: boolean,
): EventBookletMemberWire[] {
  const term = (filters?.SearchTerm ?? '').trim().toLowerCase();
  const days = osList(filters?.DateRange)
    .filter((d) => d.IsSelected)
    .map((d) => d.DateGroup.slice(0, 10));
  const roles = osList(filters?.HelperRoles);
  const countries = osList(filters?.Countries);
  const localities = osList(filters?.Localities);
  const matches = members
    .filter((m) => {
      const names = [m.FirstName, m.LastName, `${m.FirstName} ${m.LastName}`, m.Host].map((s) => s.toLowerCase());
      return term === '' || names.some((s) => s.includes(term));
    })
    .filter((m) => days.length === 0 || m.Days.some((d) => days.includes(d)))
    .filter((m) => !withRoles || roles.length === 0 || roles.includes(m.Role))
    .filter((m) => countries.length === 0 || countries.includes(m.Country))
    .filter((m) => localities.length === 0 || localities.includes(m.Locality))
    .sort((a, b) => Number(a.OrderNo) - Number(b.OrderNo));
  const rows = maxRows > 0 ? matches.slice((pageNumber - 1) * maxRows, pageNumber * maxRows) : matches;
  return rows.map(toWire);
}

const pageOf = (p: PaginationSettingsWire | undefined, guests: boolean) => ({
  number: Math.max(1, (guests ? p?.Guest_PageNumber : p?.Helper_PageNumber) ?? 1),
  maxRows: (guests ? p?.Guest_MaxRows : p?.Helper_MaxRows) ?? 0,
});

/** Get_EventBookletFilters for event `eventId`. */
export function eventBookletFiltersAnswer(eventId: string): GetEventBookletFiltersWire {
  const b = booklet(eventId);
  const response: EventBookletFiltersResponseWire = {
    EventInfo: {
      EventId: b?.EventId ?? '0',
      EventName: b?.EventName ?? '',
      EventLocation: b?.EventLocation ?? '',
      EventLocationId: b?.EventLocationId ?? '0',
      EventCountry: b?.EventCountry ?? '',
      EventCountryCode: b?.EventCountryCode ?? '',
      EventStartDateTime: b?.EventStartDateTime ?? NULL_DATE_TIME,
      EventEndDateTime: b?.EventEndDateTime ?? NULL_DATE_TIME,
    },
    Filters: {
      EventDays: wireList([...(b?.eventDays ?? [])]),
      HelperRoles: wireList([...(b?.helperRoles ?? [])]),
      Countries: wireList(
        (b?.countries ?? []).map((c) => ({ CountryName: c.CountryName, Localities: wireList([...c.Localities]) })),
      ),
    },
  };
  return { Response: response };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters', ({ In_EventId }) =>
    eventBookletFiltersAnswer(In_EventId ?? ''),
  ),
  contractHandler(
    MODULE,
    'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests',
    ({ In_EventId, SelectedFilters, PaginationSettings }) => {
      const p = pageOf(PaginationSettings, true);
      return {
        Response: wireList(page(booklet(In_EventId ?? '')?.guests ?? [], SelectedFilters, p.number, p.maxRows, false)),
      };
    },
  ),
  contractHandler(
    MODULE,
    'ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers',
    ({ In_EventId, SelectedFilters, PaginationSettings }) => {
      const p = pageOf(PaginationSettings, false);
      return {
        Response: wireList(page(booklet(In_EventId ?? '')?.helpers ?? [], SelectedFilters, p.number, p.maxRows, true)),
      };
    },
  ),
];
