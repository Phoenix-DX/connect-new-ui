import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { osList, wireList } from '@/lib/os-wire';
import type { SearchResultWire } from '@/api/search';
import { ASSEMBLE_MEETINGS } from '@/mocks/fictional/assemble';
import { LOCALITY, LOCALITY_HOUSEHOLDS, SCHOOLS, householdName, type CastHousehold } from '@/mocks/fictional/directory';
import { LDM_PAST_EVENTS, ldmEventDay, ldmEventName } from '@/mocks/fictional/ldm';
import { Connect_EventTypes } from '@/lib/ubtConnect/staticEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';

/* Get_SearchBirthdayOptions: recorded (fixture UBTConnect ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions).
   DataActionFetchSearchResults was never recorded (no captured search, Q2): fictional people, places, events and
   schools of the fictional cast, the same answer for any term (the server-side matching is not known); scenario empty = no results, error = HTTP 500.
   DataActionGet_FilteredRecentClickedResults was recorded only with no recent clicks (empty lists, Search default of
   2026-10-29); the server filter is not known: the mock keeps every sent row and removes none. */
const result = (
  id: string,
  type: string,
  name: string,
  householderId: string,
  additionalInformation: string,
  location: string,
): SearchResultWire => ({
  Id: id,
  HouseholderId: householderId,
  Name: name,
  AdditionalInformation: additionalInformation,
  Location: location,
  Type: type,
  Latitude: '0',
  Longitude: '0',
  RecordDisabled: false,
  Score: '0',
  // The defaults of the record (live Connect_Search_CS.model.js SearchResultRec): a row that is not an event.
  DisplayHouseholdName: false,
  DisplayAddress: false,
  Event_IsPersonal: false,
  Event_EventTypeTitle: '',
  Event_HostSubdivisionId: '0',
  Event_HostHouseholderId: '0',
  Event_Source: '',
  Event_EventHostId: '',
  Event_StartDate: '1900-01-01',
  Event_EndDate: '1900-01-01',
  Event_OrbitEventType: '',
});

/* Results from the directory cast (src/mocks/fictional/directory.ts): two households of Bahia Blanca, three of their
   members and the locality. */
const [VITALE_H, , ROJAS] = LOCALITY_HOUSEHOLDS;
const household = (h: CastHousehold | undefined) =>
  result(h?.id ?? '0', 'Household', h ? householdName(h) : '', h?.id ?? '0', 'Household', LOCALITY.name);
const person = (id: string, h: CastHousehold | undefined, index: number) =>
  result(id, 'Member', `${h?.members[index]?.first ?? ''} ${h?.surname ?? ''}`, h?.id ?? '0', 'Member', LOCALITY.name);
const HOUSEHOLDS: SearchResultWire[] = [household(VITALE_H), household(ROJAS)];
const PEOPLE: SearchResultWire[] = [person('7001', VITALE_H, 0), person('7002', VITALE_H, 1), person('7302', ROJAS, 1)];
const PLACES: SearchResultWire[] = [result(LOCALITY.id, 'Locality', LOCALITY.name, '', 'Locality', LOCALITY.country)];

/* Events (live TST of 2026-11-05): the two next meetings of the Zapiola hall (src/mocks/fictional/assemble.ts; Id = the
   event id, Event_HostSubdivisionId = the hall) and the newest past LDM meal (src/mocks/fictional/ldm.ts; Id = the
   event id, Event_EventHostId, Event_HostHouseholderId = the host household). The event rows keep Type "" (the server
   value is not known). No Orbit event: Event_OrbitEventType stays "". */
const todayKey = (d: Date) =>
  `${String(d.getFullYear())}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const assembleEvents = (): SearchResultWire[] => {
  const today = todayKey(new Date());
  const hallId = ASSEMBLE_MEETINGS[0]?.HostingSubdivisionId ?? '0';
  return ASSEMBLE_MEETINGS.filter((m) => m.HostingSubdivisionId === hallId && m.DateTime.slice(0, 10) >= today)
    .slice(0, 2)
    .map((m) => ({
      ...result(m.EventId, '', m.AssembleEventType.Title, '0', m.HostingLocation, m.LocalityName),
      Event_EventTypeTitle: m.AssembleEventType.Title,
      Event_HostSubdivisionId: m.HostingSubdivisionId,
      Event_Source: Connect_EventTypes.Assemble,
      Event_StartDate: m.DateTime.slice(0, 10),
      Event_EndDate: m.DateTime.slice(0, 10),
    }));
};
const ldmEvents = (): SearchResultWire[] =>
  LDM_PAST_EVENTS.slice(0, 1).map((e) => ({
    ...result(e.eventId, '', ldmEventName(e), e.host.id, householdName(e.host), e.host.localityName),
    Event_HostHouseholderId: e.host.id,
    Event_EventHostId: e.eventHostId,
    Event_IsPersonal: true,
    Event_Source: Connect_EventTypes.LDM,
    Event_StartDate: ldmEventDay(e),
    Event_EndDate: ldmEventDay(e),
  }));
/* Schools: the OneSchool Global campuses of the locality (src/mocks/fictional/directory.ts). */
const SCHOOL_RESULTS: SearchResultWire[] = SCHOOLS.map((school) =>
  result(school.id, Connect_Entity.OneSchoolGlobal, school.name, '', Connect_Entity.OneSchoolGlobal, LOCALITY.name),
);

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions'),
  contractHandler('UBTConnect', 'ScreenBlock_Search/DataActionFetchSearchResults', () => ({
    Households: wireList(HOUSEHOLDS),
    People: wireList(PEOPLE),
    Places: wireList(PLACES),
    Events: wireList([...assembleEvents(), ...ldmEvents()]),
    Schools: wireList(SCHOOL_RESULTS),
  })),
  contractHandler('UBTConnect', 'ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults', (inputs) => ({
    Out_RecentClickedResults: wireList(osList(inputs.RecentClickedResults)),
    Out_IdsToRemove: wireList<string>([]),
  })),
];
