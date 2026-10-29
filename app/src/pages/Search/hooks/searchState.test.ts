import { describe, expect, it } from 'vitest';
import type { SearchResult } from '@/api/search';
import {
  INITIAL_SEARCH_STATE,
  NO_RESULTS,
  initialTagList,
  isBirthdayKeyWord,
  loadingRow,
  recentAsResult,
  recentClickedIdsDeleted,
  searchReducer,
  selectedCategoryOf,
  showsCategory,
  validateSearchPhoneNumber,
  withLoadingRows,
} from './searchState';

const result = (id: string, type: string): SearchResult => ({
  id,
  householderId: '7300',
  name: 'Lucía Rojas',
  additionalInformation: type,
  location: 'Bahia Blanca',
  type,
  latitude: '0',
  longitude: '0',
  recordDisabled: false,
});

describe('search client actions', () => {
  it('initialTagList: All, Households, Members, Places; the selected category is selected', () => {
    expect(initialTagList('All')).toEqual([
      { Text: 'All', Identifier: 'All', IconId: '', IsSelected: true, Enabled: true },
      { Text: 'Households', Identifier: 'Households', IconId: '', IsSelected: false, Enabled: true },
      { Text: 'Members', Identifier: 'People', IconId: '', IsSelected: false, Enabled: true },
      { Text: 'Places', Identifier: 'Places', IconId: '', IsSelected: false, Enabled: true },
    ]);
    expect(
      initialTagList('Places')
        .filter((t) => t.IsSelected)
        .map((t) => t.Identifier),
    ).toEqual(['Places']);
  });

  it('isBirthdayKeyWord ignores the case; showsCategory accepts "", All and the own category', () => {
    expect(isBirthdayKeyWord('Birthday Today')).toBe(true);
    expect(isBirthdayKeyWord('Rojas')).toBe(false);
    expect(showsCategory('', 'People')).toBe(true);
    expect(showsCategory('All', 'People')).toBe(true);
    expect(showsCategory('People', 'People')).toBe(true);
    expect(showsCategory('Places', 'People')).toBe(false);
  });

  it('selectedCategoryOf: the Identifier of the selected tag, or ""', () => {
    expect(selectedCategoryOf(initialTagList('Households'))).toBe('Households');
    expect(selectedCategoryOf(initialTagList('none'))).toBe('');
  });

  it('validateSearchPhoneNumber: "+digits" needs 4 digits; other number-like text is invalid; names are valid', () => {
    expect(validateSearchPhoneNumber('+5491')).toEqual({ isValid: true, errorMessage: '' });
    expect(validateSearchPhoneNumber('+549')).toEqual({
      isValid: false,
      errorMessage: 'Please enter a valid phone number',
    });
    expect(validateSearchPhoneNumber('011 555-0100').isValid).toBe(false);
    expect(validateSearchPhoneNumber('Vitale').isValid).toBe(true);
  });

  it('recentAsResult: EntityId and EntityType become Id and Type; RecordDisabled False', () => {
    expect(
      recentAsResult({
        Id: '1',
        UserId: 990001,
        EntityId: '7302',
        EntityType: 'Member',
        HouseholderId: '7300',
        Name: 'Lucía Rojas',
        AdditionalInformation: 'Member',
        Location: 'Bahia Blanca',
        SearchedOn: '2026-03-12T10:30:00',
        Latitude: '0',
        Longitude: '0',
        SearchTargetId: '',
      }),
    ).toEqual({ ...result('7302', 'Member'), additionalInformation: 'Member' });
  });
});

describe('searchReducer', () => {
  it('inputChanged sets SearchKey_Current and isBirthdayKeyWord; searchKeySet sets only the key', () => {
    const typed = searchReducer(INITIAL_SEARCH_STATE, { type: 'inputChanged', text: 'birthday' });
    expect([typed.searchKeyCurrent, typed.isBirthdayKeyWord]).toEqual(['birthday', true]);
    const set = searchReducer(typed, { type: 'searchKeySet', text: 'Rojas' });
    expect([set.searchKeyCurrent, set.isBirthdayKeyWord]).toEqual(['Rojas', true]);
  });

  it('a search: resultsCleared, searchStarted, then resultsFetched shows the sections of the category', () => {
    const results = { households: [result('7300', 'Household')], people: [result('7302', 'Member')], places: [] };
    let state = searchReducer(INITIAL_SEARCH_STATE, { type: 'searchKeySet', text: 'Rojas' });
    state = searchReducer(state, { type: 'resultsCleared' });
    state = searchReducer(state, { type: 'searchStarted', searchKey: 'Rojas' });
    expect([state.hasSearched, state.searchKeyLastSearched, state.isLoading]).toEqual([true, 'Rojas', true]);
    const all = searchReducer(state, { type: 'resultsFetched', results, selectedCategory: 'All' });
    expect([all.isLoading, all.hasHouseholds, all.hasPeople, all.hasPlaces]).toEqual([false, true, true, false]);
    expect(all.results).toBe(results);
    const people = searchReducer(state, { type: 'resultsFetched', results, selectedCategory: 'People' });
    expect([people.hasHouseholds, people.hasPeople]).toEqual([false, true]);
  });

  it('resultsCleared keeps the Has<Section> flags; loadingEnded ends the loading', () => {
    const fetched = searchReducer(
      { ...INITIAL_SEARCH_STATE, hasSearched: true, isLoading: true },
      {
        type: 'resultsFetched',
        results: { ...NO_RESULTS, people: [result('7302', 'Member')] },
        selectedCategory: 'All',
      },
    );
    const cleared = searchReducer({ ...fetched, isLoading: true }, { type: 'resultsCleared' });
    expect([cleared.results, cleared.hasSearched, cleared.hasPeople, cleared.isLoading]).toEqual([
      NO_RESULTS,
      false,
      true,
      true,
    ]);
    expect(searchReducer(cleared, { type: 'loadingEnded' }).isLoading).toBe(false);
  });

  it('searchKeysCleared, tagListChanged and filtersApplied', () => {
    const state = { ...INITIAL_SEARCH_STATE, searchKeyCurrent: 'Rojas', searchKeyLastSearched: 'Rojas' };
    const cleared = searchReducer(state, { type: 'searchKeysCleared' });
    expect([cleared.searchKeyCurrent, cleared.searchKeyLastSearched]).toEqual(['', '']);
    const tags = initialTagList('Places');
    const tagged = searchReducer(state, { type: 'tagListChanged', tagList: tags });
    expect([tagged.selectedCategory, tagged.tagList]).toEqual(['Places', tags]);
    const filtered = searchReducer(state, {
      type: 'filtersApplied',
      selectedCountryIds: ['AR'],
      hasFiltersApplied: true,
    });
    expect([filtered.selectedCountryIds, filtered.hasFiltersApplied]).toEqual([['AR'], true]);
  });

  it('loadingRow: "Loading Name", "Name", "Loading Location", Type Household; the other attributes at their defaults', () => {
    expect(loadingRow()).toEqual({
      id: '',
      householderId: '',
      name: 'Loading Name',
      additionalInformation: 'Name',
      location: 'Loading Location',
      type: 'Household',
      latitude: '',
      longitude: '',
      recordDisabled: false,
    });
  });

  // Action_RefreshSearch (ScreenBlock_Search.mvc.js:2475-2533): LoadingList appended to each list in scope.
  it('withLoadingRows: three rows per list in scope of All or the own category; People rows have Type Member', () => {
    const types = (r: SearchResult[]) => r.map((x) => x.type);
    const all = withLoadingRows(NO_RESULTS, 'All');
    expect([types(all.places), types(all.households), types(all.people)]).toEqual([
      ['Household', 'Household', 'Household'],
      ['Household', 'Household', 'Household'],
      ['Member', 'Member', 'Member'],
    ]);
    expect(all.people.map((x) => x.name)).toEqual(['Loading Name', 'Loading Name', 'Loading Name']);
    const people = withLoadingRows(NO_RESULTS, 'People');
    expect([people.places.length, people.households.length, people.people.length]).toEqual([0, 0, 3]);
    const places = withLoadingRows(NO_RESULTS, 'Places');
    expect([places.places.length, places.households.length, places.people.length]).toEqual([3, 0, 0]);
    const households = withLoadingRows(NO_RESULTS, 'Households');
    expect([households.places.length, households.households.length, households.people.length]).toEqual([0, 3, 0]);
    // A null SelectedCategory is not All: no rows (the Places section still shows while loading).
    expect(withLoadingRows(NO_RESULTS, '')).toEqual(NO_RESULTS);
    // ListAppendAll appends after the rows already in the list.
    const kept = withLoadingRows({ ...NO_RESULTS, people: [result('7302', 'Member')] }, 'All');
    expect(kept.people.map((x) => x.id)).toEqual(['7302', '', '', '']);
  });

  it('searchStarted after resultsCleared fills the lists of SelectedCategory with the loading rows', () => {
    const state = searchReducer(
      { ...INITIAL_SEARCH_STATE, selectedCategory: 'Households', searchKeyCurrent: 'Rojas' },
      { type: 'resultsCleared' },
    );
    const started = searchReducer(state, { type: 'searchStarted', searchKey: 'Rojas' });
    expect(started.results).toEqual(withLoadingRows(NO_RESULTS, 'Households'));
    expect(started.results.households).toHaveLength(3);
  });
});

describe('recentClickedIdsDeleted (ScreenBlock_Search.mvc.js:2382-2395, known original bug B22)', () => {
  it('deletes RecentClickedResults.Current, the first row, once per id to remove, not the ids themselves', () => {
    expect(recentClickedIdsDeleted([{ Id: '40' }, { Id: '31' }, { Id: '32' }], ['31', '32'])).toEqual(['40', '40']);
  });

  it('deletes nothing without ids to remove; an empty list gives its empty item, Id 0', () => {
    expect(recentClickedIdsDeleted([{ Id: '40' }], [])).toEqual([]);
    expect(recentClickedIdsDeleted([], ['31'])).toEqual(['0']);
  });
});
