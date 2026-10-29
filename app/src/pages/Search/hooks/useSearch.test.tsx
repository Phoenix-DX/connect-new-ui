import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchSearchResults, type SearchResult } from '@/api/search';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { IgnorableSystemException, OutOfContextException } from '@/legacy/os/os-exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { setPreloadObject } from '@/platform/navigation';
import { get_RecentClickedResults, saveRecentClickedResult } from '@/platform/storage/localEntities';
import { contractHandler } from '@/mocks/contract';
import { wireList } from '@/lib/os-wire';
import { server } from '@/test/setup';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage, recordBodies } from '@/test/testSupport';
import { initialTagList } from './searchState';
import { SEARCH_SCREEN_INPUTS, useSearch, type SearchFlags, type SearchFlows, type SearchInputs } from './useSearch';

const navigate = vi.fn();
/** On: the hook gets the platform navigation with its R4 check (the tests of a screen that the user left). */
const platformNavigation = vi.hoisted(() => ({ on: false }));
vi.mock('@/platform/navigation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation')>();
  return {
    ...actual,
    useOsNavigate: () => {
      const platform = actual.useOsNavigate();
      return platformNavigation.on ? platform : navigate;
    },
    setPreloadObject: vi.fn(),
  };
});
vi.mock('@/api/search', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/api/search')>();
  return { ...actual, fetchSearchResults: vi.fn(actual.fetchSearchResults) };
});
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
const FILTERED = 'UBTConnect/ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults';
const filteredCalls = () =>
  (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGet_FilteredRecentClickedResults').length;
/** A fictional result of the directory cast, as a click saves it. */
const clickedResult = (id: string, type: string, name: string) => ({
  id,
  type,
  householderId: '7300',
  name,
  additionalInformation: type,
  location: 'Bahia Blanca',
  latitude: '0',
  longitude: '0',
});

function renderSearch(inputs: SearchInputs = SEARCH_SCREEN_INPUTS, flags = FLAGS, onClick?: () => void) {
  const client = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
  return renderHook(() => useSearch(inputs, flags, { onEventSearchResultClick: onClick }), { wrapper });
}

/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3, R4). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
const searchCalls = () => (window.__osCalls ?? []).filter((c) => c.action === 'DataActionFetchSearchResults').length;
const wait = (ms: number) =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
  });

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
  platformNavigation.on = false;
  resetNavigation();
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

  // Event_HorizontalTagListChanged (ScreenBlock_Search.mvc.js:3929-3937).
  it('a tag change refreshes the recent clicked results with the new category, also before the first search', async () => {
    const clicked = (id: string, type: string, name: string) => ({
      id,
      type,
      householderId: '7300',
      name,
      additionalInformation: type,
      location: 'Bahia Blanca',
      latitude: '0',
      longitude: '0',
    });
    await saveRecentClickedResult('Global', clicked('7302', 'Member', 'Lucía Rojas'), 5);
    await saveRecentClickedResult('Global', clicked('7300', 'Household', 'Rojas Household'), 5);
    const search = renderSearch();
    await waitFor(() => {
      expect(search.result.current.recentClicked).toHaveLength(2);
    });
    act(() => {
      search.result.current.onTagListChanged(initialTagList('People'));
    });
    await waitFor(() => {
      expect(search.result.current.recentClicked.map((r) => r.Name)).toEqual(['Lucía Rojas']);
    });
    // The term is blank: Action_RefreshSearch ends at once, with no fetch.
    expect(search.result.current.state.hasSearched).toBe(false);
    expect(window.__osCalls?.map((c) => c.action)).not.toContain('DataActionFetchSearchResults');
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

  it('at start Get_RecentClickedResults (100 rows) goes once to Get_FilteredRecentClickedResults; a refresh reads 5 rows, no call', async () => {
    const names = ['Vitale', 'Rojas', 'Okafor', 'Lindqvist', 'Moreau', 'Tanaka', 'Haddad'];
    for (const [i, name] of names.entries())
      await saveRecentClickedResult('Global', clickedResult(String(7400 + i), 'Household', `${name} Household`), 10);
    const bodies = recordBodies(FILTERED);
    const search = renderSearch();
    expect(search.result.current.isFilteredRecentClickedFetched).toBe(false);
    await waitFor(() => {
      expect(search.result.current.isFilteredRecentClickedFetched).toBe(true);
    });
    await settle();
    expect(filteredCalls()).toBe(1);
    expect(bodies).toEqual([
      expect.objectContaining({
        RecentClickedResults_Skeleton: { List: [] },
        SelectedCategory: 'All',
        In_SearchTargetId: 'Global',
      }),
    ]);
    expect((bodies[0] as { RecentClickedResults: { List: unknown[] } }).RecentClickedResults.List).toHaveLength(7);
    // The mock keeps every sent row and removes none.
    expect(search.result.current.filteredRecentClicked).toHaveLength(7);
    expect(search.result.current.recentClicked).toHaveLength(7);
    act(() => {
      search.result.current.onChange('');
    });
    await waitFor(() => {
      expect(search.result.current.recentClicked).toHaveLength(5);
    });
    await settle();
    expect(filteredCalls()).toBe(1);
    expect(search.result.current.filteredRecentClicked).toHaveLength(7);
  });

  it('Out_IdsToRemove: TST deletes RecentClickedResults.Current, the first local row, and keeps the named one (B22)', async () => {
    await saveRecentClickedResult('Global', clickedResult('7302', 'Member', 'Lucía Rojas'), 5);
    await saveRecentClickedResult('Global', clickedResult('7300', 'Household', 'Rojas Household'), 5);
    const [first, other] = await get_RecentClickedResults('Global', '', 'All');
    if (!first || !other) throw new Error('two recent clicked results expected');
    server.use(
      contractHandler('UBTConnect', 'ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults', () => ({
        Out_RecentClickedResults: wireList([first]),
        Out_IdsToRemove: wireList([other.Id]),
      })),
    );
    const search = renderSearch();
    await waitFor(() => {
      expect(search.result.current.recentClicked.map((r) => r.Id)).toEqual([first.Id]);
    });
    expect(search.result.current.filteredRecentClicked.map((r) => r.Id)).toEqual([first.Id]);
    // The server named the other row, but the loop deleted the first one.
    expect((await get_RecentClickedResults('Global', '', 'All')).map((r) => r.Id)).toEqual([other.Id]);
  });

  it('a failed fetch goes to the flow handler', async () => {
    const search = renderSearch();
    await waitFor(() => {
      expect(search.result.current.isFilteredRecentClickedFetched).toBe(true);
    });
    sessionStorage.setItem('mock:mock', 'error');
    act(() => {
      search.result.current.onSubmit('Vitale');
    });
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
  });
});

describe('useSearch after an unmount (flow scope, item 8)', () => {
  it('R3: unmount while the term is saved: Action_ClearResults stops the flow, no FetchSearchResults', async () => {
    const search = renderSearch();
    await settle();
    act(() => {
      search.result.current.onSubmit('Vitale');
    });
    search.unmount();
    await wait(20);
    expect(searchCalls()).toBe(0);
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while FetchSearchResults is pending: its failure reaches no handler', async () => {
    const search = renderSearch();
    await settle();
    let fail: (error: unknown) => void = () => undefined;
    vi.mocked(fetchSearchResults).mockReturnValueOnce(new Promise((_resolve, reject) => (fail = reject)));
    act(() => {
      search.result.current.onSubmit('Vitale');
    });
    await waitFor(() => {
      expect(fetchSearchResults).toHaveBeenCalledTimes(1);
    });
    search.unmount();
    fail(new Error('Service Interruption'));
    await wait(20);
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: a tag change, unmount while Get_RecentClickedResults is pending: no search', async () => {
    const search = renderSearch();
    await settle();
    act(() => {
      search.result.current.onChange('Vitale');
    });
    await settle();
    act(() => {
      search.result.current.onTagListChanged(initialTagList('Households'));
    });
    search.unmount();
    await wait(20);
    expect(searchCalls()).toBe(0);
    expect(raisedErrors()).toEqual([]);
  });

  it('R3: with In_IsEventNavigation, unmount while the click is saved: no Event_SearchResultClick', async () => {
    const onClick = vi.fn();
    const search = renderSearch({ ...SEARCH_SCREEN_INPUTS, inIsEventNavigation: true }, FLAGS, onClick);
    await settle();
    await searchFor(search, 'Vitale');
    const [household] = search.result.current.state.results.households;
    act(() => {
      search.result.current.onResultClick(household as SearchResult);
    });
    search.unmount();
    await wait(20);
    expect(onClick).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R4: the user leaves while the click is saved: no navigation to Locality_Details, the flow stops', async () => {
    platformNavigation.on = true;
    const screen: { current: SearchFlows | null } = { current: null };
    function Screen() {
      screen.current = useSearch(SEARCH_SCREEN_INPUTS, FLAGS);
      return null;
    }
    const { router, at } = renderRoutes(
      { '/UBTConnect/Search': <Screen />, '/UBTConnect/Menu': <p>Menu</p> },
      '/UBTConnect/Search',
    );
    await settle();
    act(() => {
      screen.current?.onSubmit('Vitale');
    });
    await waitFor(() => {
      expect(screen.current?.state.results.places.length).toBeGreaterThan(0);
    });
    const [place] = screen.current?.state.results.places ?? [];
    act(() => {
      screen.current?.onResultClick(place as SearchResult);
    });
    await act(() => router.navigate('/UBTConnect/Menu'));
    await wait(20);
    expect(at()).toBe('/UBTConnect/Menu');
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(OutOfContextException), expect.anything());
    expect(raisedErrors()).toEqual([]);
  });
});
