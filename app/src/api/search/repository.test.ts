import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isCommunicationException } from '@/legacy/os/exceptions';
import { freshPage, recordBodies } from '@/test/testSupport';
import { fetchSearchBirthdayOptions, fetchSearchResults } from './repository';
import type { SearchVariables } from './types';

/* The MSW mocks of the test setup: pages/Search/mocks.ts answers DataActionFetchSearchResults with fictional people
   and places of the directory cast (the same answer for any term) and Get_SearchBirthdayOptions with its recording. */
const variables: SearchVariables = {
  searchKeyCurrent: 'Vitale',
  searchKeyLastSearched: 'Vitale',
  hasSearched: true,
  selectedCategory: 'All',
  selectedCountryIds: [],
  bottomSheetIdFilter: '',
  bottomSheetIdFilterIsLoaded: false,
  bottomSheetIdFilterShowSubscriptionOnClick: false,
  hasFiltersApplied: false,
  isBirthdayKeyWord: false,
  isBirthdaySearchEnabled: true,
  inSearchTargetId: '',
};

beforeEach(() => {
  freshPage();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('search repository', () => {
  it('fetchSearchResults calls DataActionFetchSearchResults of the block with its variables', async () => {
    const bodies = recordBodies('UBTConnect/ScreenBlock_Search/DataActionFetchSearchResults');
    const results = await fetchSearchResults(variables, [{ Text: 'All', Identifier: 'All', IsSelected: true }], true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'ScreenBlock_Search',
        action: 'DataActionFetchSearchResults',
      }),
    ]);
    expect(bodies).toEqual([
      expect.objectContaining({
        SearchKey_Current: 'Vitale',
        SelectedCategory: 'All',
        IsLoading: true,
        TagList: { List: [{ Text: 'All', Identifier: 'All', IconId: '', IsSelected: true, Enabled: true }] },
      }),
    ]);
    expect(results.households.length).toBeGreaterThan(0);
    expect(results.people.every((r) => r.type === 'Member')).toBe(true);
    expect(results.places.map((r) => r.type)).toEqual(['Locality']);
  });

  it('fetchSearchBirthdayOptions reads the recorded options with MaxRecords 50 and StartIndex 0', async () => {
    const bodies = recordBodies('UBTConnect/ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions');
    const options = await fetchSearchBirthdayOptions();
    expect(bodies).toEqual([{ MaxRecords: 50, StartIndex: 0 }]);
    expect(options.map((o) => o.searchName)).toContain('Birthday Today');
  });

  it('a failed fetch raises the CommunicationException of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const error: unknown = await fetchSearchResults(variables, [], true).catch((e: unknown) => e);
    expect(isCommunicationException(error)).toBe(true);
  });
});
