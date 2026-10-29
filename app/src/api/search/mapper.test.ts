import { describe, expect, it } from 'vitest';
import {
  toBirthdayOptions,
  toFetchSearchResultsInputs,
  toFilteredRecentClickedResults,
  toGetFilteredRecentClickedResultsInputs,
  toSearchResults,
  type SearchResultWire,
} from './mapper';
import type { RecentClickedResultRow, SearchVariables } from './types';

/** A fictional search result as the server sends it: every field. */
const resultWire = (id: string, type: string, name: string, recordDisabled = false): SearchResultWire => ({
  Id: id,
  HouseholderId: '7300',
  Name: name,
  AdditionalInformation: type,
  Location: 'Bahia Blanca',
  Type: type,
  Latitude: '-38.7196',
  Longitude: '-62.2724',
  RecordDisabled: recordDisabled,
  Score: '12',
});

const variables: SearchVariables = {
  searchKeyCurrent: 'Rojas',
  searchKeyLastSearched: 'Vitale',
  hasSearched: true,
  selectedCategory: 'People',
  selectedCountryIds: ['AR'],
  bottomSheetIdFilter: 'b1-b39-b1',
  bottomSheetIdFilterIsLoaded: true,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  hasFiltersApplied: true,
  isBirthdayKeyWord: false,
  isBirthdaySearchEnabled: true,
  inSearchTargetId: '',
};

describe('search mapper', () => {
  it('toSearchResults keeps the three lists in the server order, without Score', () => {
    const results = toSearchResults({
      Households: { List: [resultWire('7300', 'Household', 'Rojas Household')] },
      People: {
        List: [resultWire('7302', 'Member', 'Lucía Rojas'), resultWire('7303', 'Member', 'Tomás Rojas', true)],
      },
      Places: { List: [] },
    });
    expect(results.households).toEqual([
      {
        id: '7300',
        householderId: '7300',
        name: 'Rojas Household',
        additionalInformation: 'Household',
        location: 'Bahia Blanca',
        type: 'Household',
        latitude: '-38.7196',
        longitude: '-62.2724',
        recordDisabled: false,
      },
    ]);
    expect(results.people.map((r) => [r.id, r.name, r.recordDisabled])).toEqual([
      ['7302', 'Lucía Rojas', false],
      ['7303', 'Tomás Rojas', true],
    ]);
    expect(results.places).toEqual([]);
  });

  it('toBirthdayOptions keeps the Connect_SearchBirthdayOptions part of each row', () => {
    expect(
      toBirthdayOptions({
        Count: 2,
        List: {
          List: [
            { Connect_SearchBirthdayOptions: { Name: 'Today', SearchName: 'Birthday Today', Order: 3 } },
            { Connect_SearchBirthdayOptions: { Name: 'Last Week', SearchName: 'Birthday Last Week', Order: 1 } },
          ],
        },
      }),
    ).toEqual([
      { name: 'Today', searchName: 'Birthday Today', order: 3 },
      { name: 'Last Week', searchName: 'Birthday Last Week', order: 1 },
    ]);
  });

  it('toFetchSearchResultsInputs sends the block variables and the defaults of the ones it does not set', () => {
    const inputs = toFetchSearchResultsInputs(variables, [{ Text: 'Members', Identifier: 'People' }], true);
    expect(inputs).toEqual({
      SearchKey_Current: 'Rojas',
      SearchKey_LastSearched: 'Vitale',
      HasSearched: true,
      TagList: { List: [{ Text: 'Members', Identifier: 'People', IconId: '', IsSelected: true, Enabled: true }] },
      SelectedCategory: 'People',
      SelectedCountryIds: { List: ['AR'] },
      IsLoading: true,
      BottomSheetId_Filter: 'b1-b39-b1',
      HasFiltersApplied: true,
      HasPeople: false,
      HasHouseholds: false,
      HasPlaces: false,
      isBirthdayKeyWord: false,
      isBirthdaySearchEnabled: true,
      BottomSheetId_Filter_IsLoaded: true,
      BottomSheetId_Filter_ShowSubscriptionOnClick: false,
      In_IsInScreenSearch: false,
      In_IsEventNavigation: false,
      In_SearchTargetId: '',
    });
  });
});

/* DataActionGet_FilteredRecentClickedResults (ScreenBlock_Search.mvc.js:34-52, 2158-2181 of the capture of 2026-10-29).
   Fictional rows of the directory cast. */
describe('DataActionGet_FilteredRecentClickedResults', () => {
  const row = (Id: string, EntityType: string, Name: string): RecentClickedResultRow => ({
    Id,
    UserId: 990001,
    EntityId: `73${Id}`,
    EntityType,
    HouseholderId: '7300',
    Name,
    AdditionalInformation: EntityType,
    Location: 'Bahia Blanca',
    SearchedOn: '2026-10-20T09:00:00',
    Latitude: '-38.7196',
    Longitude: '-62.2724',
    SearchTargetId: 'Global',
  });
  const rojas = row('42', 'Member', 'Lucía Rojas');
  const vitale = row('41', 'Household', 'Julián & Fiorella Vitale');

  it('sends the block variables with RecentClickedResults and an empty RecentClickedResults_Skeleton', () => {
    expect(toGetFilteredRecentClickedResultsInputs(variables, [], false, [rojas, vitale])).toMatchObject({
      SearchKey_Current: 'Rojas',
      SelectedCategory: 'People',
      IsLoading: false,
      RecentClickedResults: { List: [rojas, vitale] },
      RecentClickedResults_Skeleton: { List: [] },
    });
  });

  it('gives the rows in the server order and the ids to remove as text', () => {
    expect(
      toFilteredRecentClickedResults({
        Out_RecentClickedResults: { List: [vitale, rojas] },
        Out_IdsToRemove: { List: [43, '44'] },
      }),
    ).toEqual({ recentClickedResults: [vitale, rojas], idsToRemove: ['43', '44'] });
  });
});
