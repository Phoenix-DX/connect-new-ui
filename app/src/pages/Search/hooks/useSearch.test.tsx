import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { SearchResult } from '@/api/search';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { setPreloadObject } from '@/platform/navigation';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage, recordBodies } from '@/test/testSupport';
import { initialTagList } from './searchState';
import { SEARCH_SCREEN_INPUTS, useSearch, type SearchFlags, type SearchInputs } from './useSearch';

const navigate = vi.fn();

vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
  setPreloadObject: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of ScreenBlock_Search with the MSW mocks of the test setup (pages/Search/mocks.ts: the same fictional
   households, people and places for any term; the recorded birthday options) and the in-memory local database. */
const FLAGS: SearchFlags = { birthdaySearch: true, carousel: true };
const SEARCH = 'UBTConnect/ScreenBlock_Search/DataActionFetchSearchResults';

function renderSearch(inputs: SearchInputs = SEARCH_SCREEN_INPUTS, flags = FLAGS, onClick?: () => void) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
  return renderHook(() => useSearch(inputs, flags, { onEventSearchResultClick: onClick }), { wrapper });
}

/** Lets the flows that started finish. */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

const searchFor = async (search: ReturnType<typeof renderSearch>, term: string) => {
  act(() => {
    search.result.current.onSubmit(term);
  });
  await waitFor(() => {
    expect(search.result.current.state.isLoading).toBe(false);
  });
  await settle();
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  vi.clearAllMocks();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('useSearch', () => {
  it('starts with SelectedCategory All; OnReady enables the birthday search and reads its options', async () => {
    const search = renderSearch();
    expect(search.result.current.state.selectedCategory).toBe('All');
    expect(search.result.current.state.tagList).toEqual(initialTagList('All'));
    expect(search.result.current.isBirthdaySearchEnabled).toBe(false);
    await waitFor(() => {
      expect(search.result.current.birthdayOptions.map((o) => o.searchName)).toContain('Birthday Today');
    });
    expect(search.result.current.isBirthdaySearchEnabled).toBe(true);
    expect(window.__osCalls?.map((c) => c.action)).not.toContain('DataActionFetchSearchResults');
  });

  it('without the flag, the birthday options are never read', async () => {
    const search = renderSearch(SEARCH_SCREEN_INPUTS, { ...FLAGS, birthdaySearch: false });
    await settle();
    expect(search.result.current.isBirthdaySearchEnabled).toBe(false);
    expect(window.__osCalls?.map((c) => c.action)).not.toContain('ScreenDataSetGet_SearchBirthdayOptions');
  });

  it('a submitted term saves it, fetches the results and shows the sections; the term becomes a recent term', async () => {
    const bodies = recordBodies(SEARCH);
    const search = renderSearch();
    await settle();
    await searchFor(search, 'Vitale');
    const { state } = search.result.current;
    expect([state.hasSearched, state.searchKeyCurrent, state.searchKeyLastSearched]).toEqual([
      true,
      'Vitale',
      'Vitale',
    ]);
    expect([state.hasHouseholds, state.hasPeople, state.hasPlaces]).toEqual([true, true, true]);
    expect(state.results.people.length).toBe(3);
    expect(bodies).toEqual([
      expect.objectContaining({
        SearchKey_Current: 'Vitale',
        SearchKey_LastSearched: 'Vitale',
        HasSearched: true,
        IsLoading: true,
        SelectedCategory: 'All',
        isBirthdaySearchEnabled: true,
        // The default of the block input (ScreenBlock_Search.mvc.js:121-122): Type_SearchTarget.Global.
        In_SearchTargetId: 'Global',
      }),
    ]);
    // Get_RecentSearchTerms leaves out the last searched term: it shows after the next search.
    await searchFor(search, 'Rojas');
    act(() => {
      search.result.current.onChange('');
    });
    await settle();
    expect(search.result.current.recentTerms.map((t) => t.SearchedTerm)).toEqual(['Vitale']);
  });

  it('an invalid phone number shows the error message and does not search', async () => {
    const search = renderSearch();
    await settle();
    act(() => {
      search.result.current.onSubmit('+549');
    });
    await settle();
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Please enter a valid phone number', messageType: 'error' }),
    );
    expect(search.result.current.state.hasSearched).toBe(false);
    expect(window.__osCalls?.map((c) => c.action)).not.toContain('DataActionFetchSearchResults');
  });

  it('a tag change searches again in its category; the filters search with the selected countries', async () => {
    const bodies = recordBodies(SEARCH);
    const search = renderSearch();
    await settle();
    await searchFor(search, 'Rojas');
    act(() => {
      search.result.current.onTagListChanged(initialTagList('People'));
    });
    await waitFor(() => {
      expect(bodies).toHaveLength(2);
    });
    await settle();
    expect(search.result.current.state.selectedCategory).toBe('People');
    expect([search.result.current.state.hasHouseholds, search.result.current.state.hasPeople]).toEqual([false, true]);
    expect(bodies[1]).toEqual(expect.objectContaining({ SelectedCategory: 'People' }));
    act(() => {
      search.result.current.onApplyFilters([{ Title: 'Countries', SelectedIds: ['AR'] }], 'Countries', true);
    });
    await waitFor(() => {
      expect(bodies).toHaveLength(3);
    });
    expect(bodies[2]).toEqual(
      expect.objectContaining({ SelectedCountryIds: { List: ['AR'] }, HasFiltersApplied: true }),
    );
    expect(search.result.current.state.hasFiltersApplied).toBe(true);
  });

  it('ClearString clears both keys and the results', async () => {
    const search = renderSearch();
    await settle();
    await searchFor(search, 'Rojas');
    act(() => {
      search.result.current.onClearString();
    });
    const { state } = search.result.current;
    expect([state.searchKeyCurrent, state.searchKeyLastSearched, state.hasSearched]).toEqual(['', '', false]);
    expect(state.results.people).toEqual([]);
  });

  it('a result click saves it and opens the carousel of the enabled households, a place its locality', async () => {
    const search = renderSearch();
    await settle();
    await searchFor(search, 'Vitale');
    const [person] = search.result.current.state.results.people;
    act(() => {
      search.result.current.onResultClick(person as SearchResult);
    });
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdCarousel', {
        In_StartingHouseholdId: person?.householderId,
      });
    });
    expect(setPreloadObject).toHaveBeenCalledWith({ CarouselHouseholdItem: expect.any(Array) as unknown });
    expect(search.result.current.recentClicked).toEqual([]); // the recent lists refresh with the next change
    const [place] = search.result.current.state.results.places;
    act(() => {
      search.result.current.onResultClick(place as SearchResult);
    });
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', { LocalityId: place?.id });
    });
  });

  it('a disabled result opens the upgrade popup; with In_IsEventNavigation a click raises Event_SearchResultClick', async () => {
    const onClick = vi.fn();
    const search = renderSearch({ ...SEARCH_SCREEN_INPUTS, inIsEventNavigation: true }, FLAGS, onClick);
    await settle();
    await searchFor(search, 'Vitale');
    const [household] = search.result.current.state.results.households;
    act(() => {
      search.result.current.onResultClick({ ...(household as SearchResult), recordDisabled: true });
    });
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    act(() => {
      search.result.current.onResultClick(household as SearchResult);
    });
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledWith(household);
    });
    expect(navigate).not.toHaveBeenCalled();
  });

  it('a failed fetch goes to the flow handler', async () => {
    const search = renderSearch();
    await settle();
    sessionStorage.setItem('mock:mock', 'error');
    act(() => {
      search.result.current.onSubmit('Vitale');
    });
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
  });
});
