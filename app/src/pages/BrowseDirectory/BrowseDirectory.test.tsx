import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import L from 'leaflet';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import BrowseDirectory from './BrowseDirectoryPage';

/* The page with its flows (useBrowseDirectory) in the app frame on a memory router, with the MSW mocks: the reviewed
   TST recording of GetLocalityStatistics (three localities of Argentina). Leaflet runs in jsdom without tiles. */
const PATH = '/UBTConnect/BrowseDirectory';
const ACTION = 'BrowseDirectory/DataActionGetLocalityStatistics';
const routes = {
  [PATH]: <BrowseDirectory />,
  '/UBTConnect/Search': <p>Search screen</p>,
  '/UBTConnect/BrowseCountries': <p>BrowseCountries screen</p>,
  '/UBTConnect/Locality_Details': <p>Locality_Details screen</p>,
};

const title = () => document.querySelector('[data-block="Layouts.Layout_DetailPage"] .header-title')?.textContent;
const rowTitles = () =>
  [
    ...(document.getElementById('$b11')?.querySelectorAll('[data-block="ConnectCorePatterns.Statistics_ListItem"]') ??
      []),
  ].map((row) => [...row.querySelectorAll('[data-expression]')].find((e) => e.textContent !== '')?.textContent);
const screenCalls = () => calledActions().filter((a) => a === ACTION);
const hasMap = () =>
  document.getElementById('$b9') === null && document.querySelector('[data-block="Leaflet.LeafletMap"]') !== null;

/** Opens the page for Argentina and waits for the localities. */
async function open() {
  const view = renderRoutes(routes, `${PATH}?CountryCode=AR`);
  await waitFor(() => {
    expect(title()).toBe('Argentina');
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  vi.spyOn(L, 'tileLayer').mockImplementation(() => L.gridLayer() as L.TileLayer); // no tile server in tests
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(390);
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(300);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
  vi.restoreAllMocks();
});

describe('BrowseDirectory page', () => {
  it('shows "Browse Directory", the map skeleton and 10 skeleton rows while GetLocalityStatistics runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    expect(title()).toBe('Browse Directory');
    expect(document.getElementById('$b9')?.querySelector('.ubt-skeleton-section .leaflet-container')).not.toBeNull();
    expect(rowTitles()).toHaveLength(10);
    expect(screen.getByPlaceholderText('Search locality')).toBeInTheDocument();
    expect(screen.getByText('Select another country to view')).toBeInTheDocument();
  });

  it('shows the country name, the map and the localities of the answer, after one call with the country code', async () => {
    const bodies = recordBodies(`UBTConnect/${ACTION}`);
    await open();
    expect(rowTitles()).toEqual(['Bahia Blanca', 'Buenos Aires', 'Rosario']);
    expect(hasMap()).toBe(true);
    expect(document.querySelector('[data-block="Leaflet.LeafletMap"]')?.id).toBe('LeafletMap');
    expect(screenCalls()).toHaveLength(1);
    expect(bodies[0]).toMatchObject({ CountryCode: 'AR' });
    expect(document.getElementById('$b12')?.getAttribute('data-block')).toBe('App_Common.BottomBarMenu');
  });

  it('an answer without localities shows the country name and the map, without rows', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    await waitFor(() => {
      expect(hasMap()).toBe(true);
    });
    expect(title()).toBe('Argentina');
    expect(rowTitles()).toEqual([]);
  });

  it('the top section goes to BrowseCountries', async () => {
    const { at } = await open();
    fireEvent.click(screen.getByText('Select another country to view'));
    expect(await screen.findByText('BrowseCountries screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/BrowseCountries');
  });

  it('a row goes to Locality_Details with the locality and its label', async () => {
    const { at } = await open();
    fireEvent.click(screen.getByText('Buenos Aires'));
    expect(await screen.findByText('Locality_Details screen')).toBeInTheDocument();
    expect(at()).toBe(
      '/UBTConnect/Locality_Details?LocalityId=924&PreloadedLocalityLabel=Buenos%20Aires%2C%20Argentina',
    );
  });

  it('a back navigation to the screen restores the localities without a new call (view cache)', async () => {
    const { router, at } = await open();
    await act(() => router.navigate('/UBTConnect/Search'));
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    await act(() => router.navigate(-1));
    expect(at()).toBe(`${PATH}?CountryCode=AR`);
    expect(title()).toBe('Argentina');
    expect(rowTitles()).toEqual(['Bahia Blanca', 'Buenos Aires', 'Rosario']);
    await waitFor(() => {
      expect(hasMap()).toBe(true);
    });
    expect(screenCalls()).toHaveLength(1);
  });
});
