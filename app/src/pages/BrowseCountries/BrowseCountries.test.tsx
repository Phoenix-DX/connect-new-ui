import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage } from '@/test/testSupport';
import BrowseCountries from './BrowseCountriesPage';

/* The page with its flows (useBrowseCountries) in the app frame on a memory router, with the MSW mocks: the recorded
   TST countries (17 rows, Argentina first). The mock user has the Global plan, so every country opens. */
const PATH = '/UBTConnect/BrowseCountries';
const HOME = '/UBTConnect/HomeFeed';
const DIRECTORY = '/UBTConnect/BrowseDirectory';
const GET_COUNTRIES = 'BrowseCountries/DataActionGetCountriesStatistics';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [DIRECTORY]: <p>BrowseDirectory screen</p>,
  [PATH]: <BrowseCountries />,
};

const cards = () => [...document.querySelectorAll('[data-block="ConnectCorePatterns.Statistics_ListItem"]')];
/** Clicks the text of a country card; the click reaches the clickable container of Statistics_ListItem. */
const clickCard = (index: number) => {
  fireEvent.click(cards()[index]?.querySelector('span') as Element);
};
const isSkeleton = () => document.querySelector('.ubt-skeleton-section') !== null;
const countriesCalls = () => calledActions().filter((action) => action === GET_COUNTRIES);

/** Opens the page after HomeFeed and waits for the countries. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(PATH));
  await waitFor(() => {
    expect(isSkeleton()).toBe(false);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('BrowseCountries page', () => {
  it('shows the detail layout "Browse by country" with the countries, the bottom bar and CommonUI', async () => {
    const { container } = await open();
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    expect(layout?.id).toBe('$b1');
    expect(layout?.querySelector('.header-title')?.textContent).toBe('Browse by country');
    expect(container.querySelector('[data-block="Directory_Locality.StatisticsList"]')?.id).toBe('$b2');
    expect(container.querySelector('input[type="search"]')?.getAttribute('placeholder')).toBe('Search country');
    expect(cards()).toHaveLength(17);
    expect(cards()[0]?.textContent).toContain('Argentina');
    expect(cards()[16]?.textContent).toContain('United States');
    expect(container.querySelector('[data-block="App_Common.BottomBarMenu"]')?.id).toBe('$b3');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b4');
    expect(countriesCalls()).toHaveLength(1);
  });

  it('shows 10 skeleton rows while GetCountriesStatistics runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, PATH);
    expect(isSkeleton()).toBe(true);
    expect(cards()).toHaveLength(10);
    expect(cards()[0]?.textContent).toContain('Australia');
  });

  it('keeps the skeleton rows and shows the error message when GetCountriesStatistics fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(isSkeleton()).toBe(true);
    expect(cards()).toHaveLength(10);
  });

  it('opens BrowseDirectory with the country code of the clicked country', async () => {
    const view = await open();
    expect(cards()[2]?.textContent).toContain('Barbados');
    clickCard(2);
    await waitFor(() => {
      expect(view.at()).toBe(`${DIRECTORY}?CountryCode=BB`);
    });
  });

  it('shows the same countries after a back navigation, without a second call', async () => {
    const view = await open();
    clickCard(1);
    await waitFor(() => {
      expect(view.at()).toBe(`${DIRECTORY}?CountryCode=AU`);
    });
    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(PATH);
    expect(isSkeleton()).toBe(false);
    expect(cards()).toHaveLength(17);
    expect(cards()[1]?.textContent).toContain('Australia');
    expect(countriesCalls()).toHaveLength(1);
  });
});
