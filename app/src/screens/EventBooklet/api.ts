import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type {
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletMemberWire,
  EventBookletVariablesWire,
  PaginationSettings,
  PaginationSettingsWire,
  SelectedFilters,
  SelectedFiltersWire,
} from './types';

/** Module and owner of the three data actions (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_EventBooklet/
    ScreenBlock_EventBooklet/DataActionGet_EventBooklet{Filters,Guests,Helpers}). All on demand (dataFetchDependencies
    -1, SB :1885-1890): OnReady → RefreshEventFilters / RefreshEventGuests through setTimeout 0, later the guest and
    helper refreshes of the search, the filters, the view swap and the scroll. SB = analysis/sources/
    Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** OutSystems null DateTime / Date: kept as "" for the components. */
const dateTime = (value: string): string => (value === '' || value.startsWith('1900-01-01') ? '' : value);

/** EventBookletMembersRec → domain (Days as "yyyy-MM-dd"). */
const toMember = (w: EventBookletMemberWire): EventBookletMember => ({
  MemberId: w.MemberId,
  HouseholderId: w.HouseholderId,
  Title: w.Title,
  FirstName: w.FirstName,
  LastName: w.LastName,
  Age: w.Age,
  Phone: w.Phone,
  IsHouseholder: w.IsHouseholder,
  Country: w.Country,
  CountryCode: w.CountryCode,
  Locality: w.Locality,
  LocalityId: w.LocalityId,
  IsHostLocality: w.IsHostLocality,
  Host: w.Host,
  HostHouseholderId: w.HostHouseholderId,
  Days: osList(w.Days).map((d) => d.slice(0, 10)),
  Role: w.Role,
  OrderNo: w.OrderNo,
});

/** SelectedFiltersRec as it travels. */
export const selectedFiltersWire = (f: SelectedFilters): SelectedFiltersWire => ({
  SearchTerm: f.SearchTerm,
  DateRange: wireList(f.DateRange.map((d) => ({ DateGroup: d.DateGroup ?? '', IsSelected: d.IsSelected ?? false }))),
  HelperRoles: wireList([...f.HelperRoles]),
  Countries: wireList([...f.Countries]),
  Localities: wireList([...f.Localities]),
});

/** PaginationSettings as it travels (ScrollThreshold Long Integers as text). */
export const paginationWire = (p: PaginationSettings): PaginationSettingsWire => ({
  ...p,
  Guest_ScrollThreshold: String(p.Guest_ScrollThreshold),
  Helper_ScrollThreshold: String(p.Helper_ScrollThreshold),
});

/** DataActionGet_EventBookletFilters (SB :2023-2050 data action, OnAfterFetch :2082-2278): Response (EventInfo and the
    filter lists). */
export async function getEventBookletFilters(vars: EventBookletVariablesWire): Promise<EventBookletFiltersResponse> {
  const out = await callAction(MODULE, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters', vars);
  const r = out.Response;
  return {
    EventInfo: {
      EventId: r.EventInfo.EventId,
      EventName: r.EventInfo.EventName,
      EventLocation: r.EventInfo.EventLocation,
      EventLocationId: r.EventInfo.EventLocationId,
      EventCountry: r.EventInfo.EventCountry,
      EventCountryCode: r.EventInfo.EventCountryCode,
      EventStartDateTime: dateTime(r.EventInfo.EventStartDateTime),
      EventEndDateTime: dateTime(r.EventInfo.EventEndDateTime),
    },
    Filters: {
      EventDays: osList(r.Filters.EventDays).map((d) => d.slice(0, 10)),
      HelperRoles: osList(r.Filters.HelperRoles),
      Countries: osList(r.Filters.Countries).map((c) => ({
        CountryName: c.CountryName,
        Localities: osList(c.Localities),
      })),
    },
  };
}

/** DataActionGet_EventBookletGuests (SB :2051-2079, OnAfterFetch :3528-3622): one page of guests (EventBookletMembers
    List). */
export async function getEventBookletGuests(vars: EventBookletVariablesWire): Promise<EventBookletMember[]> {
  const out = await callAction(MODULE, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests', vars);
  return osList(out.Response).map(toMember);
}

/** DataActionGet_EventBookletHelpers (SB :1995-2022, OnAfterFetch :3905-): one page of helpers. */
export async function getEventBookletHelpers(vars: EventBookletVariablesWire): Promise<EventBookletMember[]> {
  const out = await callAction(MODULE, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers', vars);
  return osList(out.Response).map(toMember);
}
