import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { osList, wireList } from '@/lib/os-wire';
import type { SearchResultWire } from '@/api/search';
import { LOCALITY, LOCALITY_HOUSEHOLDS, householdName, type CastHousehold } from '@/mocks/fictional/directory';

/* Get_SearchBirthdayOptions: recorded (fixture UBTConnect ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions).
   DataActionFetchSearchResults was never recorded (no captured search, Q2): fictional people and places of the
   directory cast, the same
   answer for any term (the server-side matching is not known); scenario empty = no results, error = HTTP 500.
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

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions'),
  contractHandler('UBTConnect', 'ScreenBlock_Search/DataActionFetchSearchResults', () => ({
    Households: wireList(HOUSEHOLDS),
    People: wireList(PEOPLE),
    Places: wireList(PLACES),
  })),
  contractHandler('UBTConnect', 'ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults', (inputs) => ({
    Out_RecentClickedResults: wireList(osList(inputs.RecentClickedResults)),
    Out_IdsToRemove: wireList<string>([]),
  })),
];
