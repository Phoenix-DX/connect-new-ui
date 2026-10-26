import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import type { Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useOsNavigate } from '@/platform/navigation';
import { createBackEvent, runBackHandlers } from '@/platform/navigation/backQueue';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import CountryDetails from './CountryDetailsPage';

/* The page with its flows (useCountryDetails) in the app frame on a memory router, with the MSW mocks of the test
   setup: the recorded TST localities of Argentina (Bahia Blanca, Buenos Aires, Rosario), served for every country
   code, and the mock user (a Global plan). */
const PATH = '/UBTConnect/CountryDetails';
const FETCH = 'CountryDetails/DataActionGetLocalityStatistics';

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
  [PATH]: <CountryDetails />,
  '/UBTConnect/Locality_Details': <Stub name="Locality_Details" />,
};

const title = () => document.querySelector('[data-expression]')?.textContent;
const count = () => document.getElementById('$b19')?.textContent;
/** The List of localities, inside the content container $b10 (the layout has other lists). */
const list = () => document.querySelector('[id="$b10"] .list');
const listRows = () => [...(list()?.querySelectorAll('[data-block="Directory_Locality.Statistics_TypedItem"]') ?? [])];
const skeletonCards = () => [
  ...document.querySelectorAll('[id="$b20"] [data-block="Directory_Locality.Statistics_TypedItem"]'),
];
const map = () => document.querySelector('[data-block="Leaflet.LeafletMap"]');
const input = () => document.querySelector('[id="Block_SearchInput"] input') as HTMLInputElement;
const fetchCount = () => calledActions().filter((c) => c === FETCH).length;
const loaded = async () => {
  await waitFor(() => {
    expect(listRows()).toHaveLength(3);
  });
};
const legendSheet = () => document.querySelector('.directory-legend-explanation');
const filterSheet = () => document.querySelector('.bottom-sheet-higher-z-index');
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

describe('CountryDetails page', () => {
  it('OnReady: GetLocalityStatistics once; the title, the map, the count and the localities', async () => {
    const bodies = recordBodies(`UBTConnect/${FETCH}`);
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    expect(title()).toBe('Browse Directory');
    expect(skeletonCards()).toHaveLength(3);
    expect(map()).toBeNull();
    await loaded();
    expect(title()).toBe('Argentina');
    expect(count()).toBe('3 Localities');
    expect(listRows().map((r) => r.textContent)).toEqual([
      expect.stringContaining('Bahia Blanca'),
      expect.stringContaining('Buenos Aires'),
      expect.stringContaining('Rosario'),
    ]);
    expect(skeletonCards()).toHaveLength(0);
    expect(map()).not.toBeNull();
    expect(fetchCount()).toBe(1);
    expect(bodies).toEqual([
      { Local_MapId: '', SearchString: '', HasFiltersApplied: false, OriginalCountryCode: 'AR', CountryCode: 'AR' },
    ]);
  });

  it('while GetLocalityStatistics runs: the skeletons of the map, the count and three cards', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    expect(title()).toBe('Browse Directory');
    expect(document.querySelector('[id="$b9"] .leaflet-container')).not.toBeNull();
    expect(skeletonCards()).toHaveLength(3);
    expect(list()).toBeNull();
  });

  it('a failed GetLocalityStatistics: the offline state with "10 Localities" and an empty list', async () => {
    server.use(
      http.post(`/api/UBTConnect/${FETCH}`, () => HttpResponse.json({ error: 'mock error' }, { status: 500 })),
    );
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    await waitFor(() => {
      expect(list()).not.toBeNull();
    });
    expect(count()).toBe('10 Localities');
    expect(listRows()).toHaveLength(0);
    expect(skeletonCards()).toHaveLength(0);
    expect(map()).toBeNull();
    expect(title()).toBe('Browse Directory');
  });

  it('a search keeps Rosario; Rosario opens Locality_Details; back restores the search without a new fetch', async () => {
    const { at } = renderRoutes(routes, `${PATH}?CountryCode=AR`);
    await loaded();
    fireEvent.change(input(), { target: { value: 'ros' } });
    await waitFor(() => {
      expect(listRows()).toHaveLength(1);
    });
    fireEvent.click(screen.getByText('Rosario'));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Locality_Details?LocalityId=216&PreloadedLocalityLabel=Rosario%2C%20Argentina');
    });
    fireEvent.click(await screen.findByText('back from Locality_Details'));
    await waitFor(() => {
      expect(at()).toBe(`${PATH}?CountryCode=AR`);
    });
    await waitFor(() => {
      expect(listRows()).toHaveLength(1);
    });
    expect(listRows()[0]?.textContent).toContain('Rosario');
    expect(count()).toBe('3 Localities');
    expect(fetchCount()).toBe(1);
  });

  it('the info icon opens the legend sheet; while open, a back navigation closes it (PreventBackNavigation)', async () => {
    const { at } = renderRoutes(routes, `${PATH}?CountryCode=AR`);
    await loaded();
    expect(legendSheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(preventBlock()).toBeNull();
    act(() => {
      fireEvent.click(document.getElementById('$b16')?.querySelector('[data-container]') as Element);
    });
    await waitFor(() => {
      expect(legendSheet()).toHaveClass('osui-bottom-sheet--is-open');
    });
    expect(preventBlock()).not.toBeNull();
    const location: Location = { pathname: PATH, search: '?CountryCode=AR', hash: '', state: null, key: 'k' };
    act(() => {
      expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(true);
    });
    expect(legendSheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(preventBlock()).toBeNull();
    expect(at()).toBe(`${PATH}?CountryCode=AR`);
  });

  it('the country row opens the FilterSheet; Apply with Australia fetches its localities with HasFiltersApplied', async () => {
    const bodies = recordBodies(`UBTConnect/${FETCH}`);
    renderRoutes(routes, `${PATH}?CountryCode=AR`);
    await loaded();
    await waitFor(() => {
      expect(screen.queryAllByText('Australia').length).toBeGreaterThan(0);
    });
    expect(filterSheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    fireEvent.click(document.getElementById('$b3')?.querySelector('[data-container]') as Element);
    await waitFor(() => {
      expect(filterSheet()).toHaveClass('osui-bottom-sheet--is-open');
    });
    const australia = screen.getAllByText('Australia');
    fireEvent.click(australia[australia.length - 1] as Element);
    const apply = screen.getAllByText('Apply filters');
    fireEvent.click(apply[apply.length - 1] as Element);
    await waitFor(() => {
      expect(fetchCount()).toBe(2);
    });
    await loaded();
    await waitFor(() => {
      expect(bodies).toHaveLength(2);
    });
    expect(bodies[1]).toMatchObject({ HasFiltersApplied: true, OriginalCountryCode: 'AR', CountryCode: 'AU' });
  });
});
