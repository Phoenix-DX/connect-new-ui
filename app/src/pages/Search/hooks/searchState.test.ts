import { describe, expect, it } from 'vitest';
import type { SearchResult } from '@/api/search';
import {
  INITIAL_SEARCH_STATE,
  NO_RESULTS,
  initialTagList,
  isBirthdayKeyWord,
  recentAsResult,
  searchReducer,
  selectedCategoryOf,
  showsCategory,
  validateSearchPhoneNumber,
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
});
