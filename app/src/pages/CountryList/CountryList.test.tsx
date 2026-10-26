import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import type { Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { useOsNavigate } from '@/platform/navigation';
import { createBackEvent, runBackHandlers } from '@/platform/navigation/backQueue';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage } from '@/test/testSupport';
import CountryList from './CountryListPage';

/* The page with its flows (useCountryList) in the app frame on a memory router, with the MSW mocks of the test setup:
   the recorded TST countries (17 countries with aggregate counts) and the mock user (locality Bahia Blanca, country
   Argentina, Global plan). */
const PATH = '/UBTConnect/CountryList';
const FETCH = 'CountryList/DataActionGetCountriesStatistics';

/** A route that the page opens: its name, and a back link. */
function Stub({ name }: { name: string }) {
  const navigate = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(-1 as never);
      }}
    >
      back from {name}
    </button>
  );
}

const routes = {
  [PATH]: <CountryList />,
  '/UBTConnect/CountryDetails': <Stub name="CountryDetails" />,
  '/UBTConnect/Locality_Details': <Stub name="Locality_Details" />,
  '/UBTConnect/Search': <Stub name="Search" />,
  '/UBTConnect/Updates_SingleList': <Stub name="Updates_SingleList" />,
};

const list = () => document.querySelector('[id="$b23"] .list');
const rows = () => [...document.querySelectorAll('[data-block="Directory_Locality.Statistics_TypedItem"]')];
const fetchCount = () => calledActions().filter((c) => c === FETCH).length;
const listLoaded = async () => {
  await waitFor(() => {
    expect(list()?.className).toBe('list list-group OSFillParent');
  });
};
const legendSheet = () => document.querySelector('.directory-legend-explanation');
const preventBlock = () => document.querySelector('[data-block="NavigationHandler.PreventBackNavigation"]');

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('CountryList page', () => {
  it('OnReady: GetCountriesStatistics once; the cards show the user geography and the list the countries', async () => {
    renderRoutes(routes, PATH);
    expect(list()?.className).toBe('list list-group list-loading OSFillParent');
    await listLoaded();
    expect(fetchCount()).toBe(1);
    expect(rows()).toHaveLength(17);
    expect(rows()[0]?.textContent).toContain('Argentina');
    expect(rows()[1]?.textContent).toContain('Australia');
    await waitFor(() => {
      expect(document.getElementById('$b10')?.textContent).toBe('Bahia Blanca');
    });
    expect(document.getElementById('$b11')?.textContent).toBe('3 Supper Meetings');
    expect(document.getElementById('$b15')?.textContent).toBe('Argentina');
    expect(document.getElementById('$b16')?.textContent).toBe('3 Localities');
    expect(screen.getByText('Browse by Country')).toBeInTheDocument();
    // OnAfterFetch_GetCountriesStatistics: every row has the flag image of its country.
    expect(rows().every((row) => row.querySelector('img') !== null)).toBe(true);
  });

  it('shows 10 skeleton rows in the loading list while GetCountriesStatistics runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, PATH);
    expect(list()?.className).toBe('list list-group list-loading OSFillParent');
    expect(rows()).toHaveLength(10);
  });

  it('a failed GetCountriesStatistics: the empty list with the error class, and the error goes to the flow handler', async () => {
    resetFeedbackMessages();
    server.use(
      http.post(`/api/UBTConnect/${FETCH}`, () => HttpResponse.json({ error: 'mock error' }, { status: 500 })),
    );
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(list()?.className).toBe('list list-group list-error OSFillParent');
    });
    // ListClear2: the skeleton rows go.
    expect(rows()).toHaveLength(0);
    expect(document.querySelector('[id="$b23"]')?.textContent).toBe('');
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    resetFeedbackMessages();
  });

  it('a country opens CountryDetails with its code (Global plan); back restores the list without a new fetch', async () => {
    const { at } = renderRoutes(routes, PATH);
    await listLoaded();
    fireEvent.click(screen.getByText('Australia'));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/CountryDetails?CountryCode=AU');
    });
    fireEvent.click(await screen.findByText('back from CountryDetails'));
    await waitFor(() => {
      expect(at()).toBe(PATH);
    });
    await listLoaded();
    expect(rows()).toHaveLength(17);
    expect(fetchCount()).toBe(1);
  });

  it('the cards open Locality_Details and CountryDetails of the user; the search input opens Search', async () => {
    const { at } = renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(document.getElementById('$b10')?.textContent).toBe('Bahia Blanca');
    });
    fireEvent.click(document.getElementById('$b7')?.querySelector('[data-container]') as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Locality_Details?LocalityId=585&PreloadedLocalityLabel=Bahia%20Blanca');
    });
    fireEvent.click(await screen.findByText('back from Locality_Details'));
    await waitFor(() => {
      expect(document.getElementById('$b15')?.textContent).toBe('Argentina');
    });
    fireEvent.click(document.getElementById('$b12')?.querySelector('[data-container]') as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/CountryDetails?CountryCode=AR');
    });
  });

  it('the info icon opens the legend sheet; while open, a back navigation closes it (PreventBackNavigation)', async () => {
    const { at } = renderRoutes(routes, PATH);
    await listLoaded();
    expect(legendSheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(preventBlock()).toBeNull();
    const info = document.getElementById('$b22');
    if (!info) throw new Error('no info icon');
    act(() => {
      fireEvent.click(info.querySelector('[data-container], span, i') ?? info);
    });
    await waitFor(() => {
      expect(legendSheet()).toHaveClass('osui-bottom-sheet--is-open');
    });
    expect(preventBlock()).not.toBeNull();
    const location: Location = { pathname: PATH, search: '', hash: '', state: null, key: 'k' };
    act(() => {
      expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(true);
    });
    expect(legendSheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(preventBlock()).toBeNull();
    expect(at()).toBe(PATH);
  });
});
