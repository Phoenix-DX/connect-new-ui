import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Search from './SearchPage';

/* The page with its flows (useSearch) in the app frame on a memory router, with the MSW mocks of the test setup
   (pages/Search/mocks.ts: the same fictional households, people and places for any term). */
const PATH = '/UBTConnect/Search';
const routes = {
  '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
  [PATH]: <Search />,
  '/UBTConnect/HouseholdCarousel': <p>HouseholdCarousel screen</p>,
  '/UBTConnect/Locality_Details': <p>Locality_Details screen</p>,
};

const searchInput = () => screen.getByPlaceholderText('Search for households, members or places.');
const submit = (term: string) => {
  fireEvent.change(searchInput(), { target: { value: term } });
  fireEvent.keyUp(searchInput(), { key: 'Enter' });
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Search page', () => {
  it('shows the search block: input, filter icon, category tags, bottom bar and the country filter sheet', () => {
    const { container } = renderRoutes(routes, PATH);
    const block = container.querySelector('[data-block="Directory_Search.ScreenBlock_Search"]');
    if (block === null) throw new Error('search block not rendered');
    expect(block.id).toBe('$b1');
    expect(block.querySelector('[data-block="Layouts.Layout_DetailPage"]')?.id).toBe('b1-$b1');
    expect(searchInput()).toBeInTheDocument();
    expect(block.querySelector('[data-block="App_CommonBlocks_Filter.FilterSheet_Icon"]')?.id).toBe('b1-$b3');
    for (const tag of ['All', 'Households', 'Members', 'Places']) expect(screen.getByText(tag)).toBeInTheDocument();
    expect(screen.queryByText('Showing results for')).toBeNull();
    const sheet = block.querySelector('[data-block="App_CommonBlocks_Filter.FilterSheet"]');
    expect(sheet?.id).toBe('b1-$b39');
    expect([...(sheet?.children ?? [])].map((c) => c.getAttribute('data-block'))).toEqual([
      'ConnectPatterns.BottomSheet',
      'CacheControl.CacheControl_AllCountries',
      'App_Cache.CacheControl_UserInfo_Wrapper',
      'NavigationHandler.BackNavigationHandler',
    ]);
  });

  it('a search shows the three sections with their counts; a member opens the household carousel', async () => {
    renderRoutes(routes, PATH);
    submit('Vitale');
    await waitFor(() => {
      expect(screen.getByText('3 Results')).toBeInTheDocument();
    });
    expect(screen.getByText('2 Results')).toBeInTheDocument();
    expect(screen.getByText('1 Results')).toBeInTheDocument();
    // If StartedDifferentSearch (ScreenBlock_Search.mvc.js:1207-1327): no caption while the input is the searched term.
    expect(screen.queryByText('Showing results for')).toBeNull();
    expect(screen.queryByText("'Vitale':")).toBeNull();
    const members = document.querySelector('#b1-MembersSection [data-block="CW_Search.SearchResult_Item"]');
    if (members === null) throw new Error('member result not rendered');
    fireEvent.click(members.querySelector('[data-container]') ?? members);
    expect(await screen.findByText('HouseholdCarousel screen')).toBeInTheDocument();
  });

  it('once the input differs from the last searched term, the caption shows that term', async () => {
    renderRoutes(routes, PATH);
    submit('Vitale');
    expect(await screen.findByText('1 Results')).toBeInTheDocument();
    fireEvent.change(searchInput(), { target: { value: 'Roj' } });
    expect(await screen.findByText('Showing results for')).toBeInTheDocument();
    expect(screen.getByText("'Vitale':")).toBeInTheDocument();
  });

  // Action_RefreshSearch (ScreenBlock_Search.mvc.js:2475-2533) with the SkeletonSection of the results.
  it('while the search loads, each section shows three loading rows inside the skeleton', async () => {
    sessionStorage.setItem('mock:latency', '300');
    renderRoutes(routes, PATH);
    submit('Vitale');
    const names = await screen.findAllByText('Loading Name');
    expect(names).toHaveLength(9);
    for (const name of names) expect(name.closest('.ubt-skeleton-section')).not.toBeNull();
    for (const section of ['b1-PlacesSection', 'b1-HouseholdsSection', 'b1-MembersSection'])
      expect(document.querySelectorAll(`#${section} [data-block="CW_Search.SearchResult_Item"]`)).toHaveLength(3);
    expect(await screen.findByText('1 Results')).toBeInTheDocument();
    expect(screen.queryByText('Loading Name')).toBeNull();
  });

  it('a search without results shows the no-match texts', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    renderRoutes(routes, PATH);
    submit('Zapata');
    expect(await screen.findByText(/We were not able to find a match/)).toBeInTheDocument();
    expect(screen.getByText(/Check for typos and spelling errors/)).toBeInTheDocument();
  });

  it('a text with "birthday" shows the birthday options; a click searches the option', async () => {
    renderRoutes(routes, PATH);
    fireEvent.change(searchInput(), { target: { value: 'birthday' } });
    const option = await screen.findByText('Birthday Today');
    fireEvent.click(option);
    expect(await screen.findByText('1 Results')).toBeInTheDocument();
    expect(searchInput()).toHaveValue('Birthday Today');
  });
});
