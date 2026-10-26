import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  map_FitBoundsAuto,
  map_InvalidateSize,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from '@/lib/leaflet/actions';
import type L from '@/lib/leaflet/leaflet';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { useCountryDetails } from './useCountryDetails';

vi.mock('@/components/ui/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/components/ui/lib/actions')>()),
  bottomSheetOpen: vi.fn(),
}));
vi.mock('@/lib/leaflet/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/leaflet/actions')>()),
  map_FitBoundsAuto: vi.fn(),
  map_InvalidateSize: vi.fn(),
  map_Marker_OpenPopUp: vi.fn(),
  map_SetPopupBindingCallback: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the CountryDetails screen. GetLocalityStatistics is the MSW mock of the test setup: the recorded TST
   answer for Argentina (Bahia Blanca, Buenos Aires, Rosario), served for every country code. The map, the bottom
   sheets, the access check and the dialogs are spies. */
const FETCH = 'UBTConnect/CountryDetails/DataActionGetLocalityStatistics';

function setup(countryCode = 'AR') {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/UBTConnect/CountryDetails?CountryCode=${countryCode}`]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
  const view = renderHook(() => ({ flows: useCountryDetails(countryCode), location: useLocation() }), { wrapper });
  /** Waits until no fetch runs: a refetch while the first fetch of a country runs joins that fetch. */
  const settled = () =>
    waitFor(() => {
      expect(queryClient.isFetching()).toBe(0);
    });
  return { ...view, settled };
}
const fetchCount = () => calledActions().filter((c) => c === 'CountryDetails/DataActionGetLocalityStatistics').length;
const flush = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

beforeEach(() => {
  freshPage();
  vi.mocked(hasAccessToRegion).mockResolvedValue(true);
  vi.mocked(showUpgradePopUp).mockResolvedValue(undefined);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useCountryDetails', () => {
  it('OnReady: 10 skeleton rows and no map; then the localities, the country name, the map centre and markers', async () => {
    const bodies = recordBodies(FETCH);
    const { result } = setup();
    expect(result.current.flows).toMatchObject({ countryName: '', isLoaded: false, list: [], mapOptions: null });
    expect(result.current.flows.localities).toHaveLength(10);
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    const { flows } = result.current;
    expect(flows.countryName).toBe('Argentina');
    expect(flows.localities.map((l) => l.name)).toEqual(['Bahia Blanca', 'Buenos Aires', 'Rosario']);
    expect(flows.list).toBe(flows.localities);
    expect(flows.mapOptions?.Center).toEqual([flows.localities[0]?.latitude, flows.localities[0]?.longitude]);
    expect(flows.markersList.map((m) => m.Marker?.Id)).toEqual(['585', '924', '216']);
    expect(flows.startFilter).toEqual({ CountryIds: ['AR'] });
    expect(fetchCount()).toBe(1);
    expect(bodies).toEqual([
      { Local_MapId: '', SearchString: '', HasFiltersApplied: false, OriginalCountryCode: 'AR', CountryCode: 'AR' },
    ]);
  });

  it('a search keeps the matching localities (Action_DefineList); before any data it lists the skeleton rows', async () => {
    const { result } = setup();
    act(() => {
      result.current.flows.onSearchChanged('');
    });
    // A search event before the answer: Local_List is the skeleton Out list.
    expect(result.current.flows.list).toHaveLength(10);
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onSearchChanged('ROSA');
    });
    expect(result.current.flows.searchString).toBe('ROSA');
    expect(result.current.flows.list.map((l) => l.name)).toEqual(['Rosario']);
    act(() => {
      result.current.flows.onSearchChanged('');
    });
    expect(result.current.flows.list).toHaveLength(3);
  });

  it('Apply filters: another country fetches it; the same country refetches; no selection goes back to the original', async () => {
    const bodies = recordBodies(FETCH);
    const { result, settled } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onApplyFilters([{ SelectedIds: ['AU'] }], true);
    });
    await settled();
    expect(fetchCount()).toBe(2);
    act(() => {
      result.current.flows.onApplyFilters([{ SelectedIds: ['AU'] }], true);
    });
    await settled();
    expect(fetchCount()).toBe(3);
    act(() => {
      result.current.flows.onApplyFilters([{ SelectedIds: [] }], false);
    });
    await settled();
    expect(fetchCount()).toBe(4);
    await flush();
    expect(bodies.map((b) => (b as { CountryCode: string; HasFiltersApplied: boolean }).CountryCode)).toEqual([
      'AR',
      'AU',
      'AU',
      'AR',
    ]);
    expect(bodies[1]).toMatchObject({ HasFiltersApplied: true, OriginalCountryCode: 'AR' });
    expect(bodies[3]).toMatchObject({ HasFiltersApplied: false, OriginalCountryCode: 'AR' });
    expect(result.current.flows.startFilter).toEqual({ CountryIds: ['AR'] });
  });

  it('a locality opens Locality_Details with its label when the subscription covers the region', async () => {
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onLocalityClicked('924');
    });
    await waitFor(() => {
      expect(result.current.location.pathname).toBe('/UBTConnect/Locality_Details');
    });
    expect(hasAccessToRegion).toHaveBeenCalledWith('924', 'AR');
    expect(new URLSearchParams(result.current.location.search).get('PreloadedLocalityLabel')).toBe(
      'Buenos Aires, Argentina',
    );
    expect(new URLSearchParams(result.current.location.search).get('LocalityId')).toBe('924');
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('a locality outside the subscription shows the upgrade pop-up; an empty id does nothing', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValue(false);
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onLocalityClicked('');
    });
    await flush();
    expect(hasAccessToRegion).not.toHaveBeenCalled();
    act(() => {
      result.current.flows.onLocalityClicked('216');
    });
    await flush();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(result.current.location.pathname).toBe('/UBTConnect/CountryDetails');
  });

  it('W23: an access check that is pending when the screen closes still shows the upgrade pop-up, once', async () => {
    let answer: (hasAccess: boolean) => void = () => undefined;
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(
      new Promise((resolve) => {
        answer = resolve;
      }),
    );
    const { result, unmount } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onLocalityClicked('585');
    });
    unmount();
    answer(false);
    await flush();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a failed access check goes to the flow handler', async () => {
    const error = new Error('access check failed');
    vi.mocked(hasAccessToRegion).mockRejectedValueOnce(error);
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    act(() => {
      result.current.flows.onLocalityClicked('585');
    });
    await flush();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
  });

  it('the map: SetCallbacks binds the tooltip builder, whose link opens the locality; a marker opens its popup', async () => {
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    result.current.flows.onMapSetCallbacks('map-1');
    expect(map_SetPopupBindingCallback).toHaveBeenCalledWith('map-1', expect.any(Function));
    const callback = vi.mocked(map_SetPopupBindingCallback).mock.calls[0]?.[1];
    const marker = result.current.flows.markersList[2];
    if (!callback || !marker) throw new Error('no callback');
    const popup = callback(marker) as HTMLElement;
    const link = popup.querySelector('a');
    expect(link?.textContent).toBe(marker.Marker?.ExtraData);
    act(() => {
      link?.click();
    });
    await waitFor(() => {
      expect(result.current.location.pathname).toBe('/UBTConnect/Locality_Details');
    });
    expect(hasAccessToRegion).toHaveBeenCalledWith('216', 'AR');
    const markerObj = { openPopup: vi.fn() } as unknown as L.Marker;
    result.current.flows.onMarkerClicked(markerObj);
    expect(map_Marker_OpenPopUp).toHaveBeenCalledWith(markerObj);
  });

  it('the map: OnInitialized keeps the id and invalidates the size after a timeout; OnParametersChanged too', async () => {
    const { result } = setup();
    // Before OnInitialized there is no map id: nothing to invalidate.
    result.current.flows.onMapParametersChanged();
    expect(map_InvalidateSize).not.toHaveBeenCalled();
    result.current.flows.onMapInitialized('map-1');
    expect(map_InvalidateSize).not.toHaveBeenCalled();
    await flush();
    expect(map_InvalidateSize).toHaveBeenCalledWith('map-1');
    expect(map_FitBoundsAuto).toHaveBeenCalledWith('map-1');
    const error = new Error('no map');
    vi.mocked(map_InvalidateSize).mockImplementationOnce(() => {
      throw error;
    });
    result.current.flows.onMapParametersChanged();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
  });

  it('the bottom sheets: the country row opens the FilterSheet once it is loaded, or the upgrade pop-up; the info icon opens the legend', async () => {
    const { result } = setup();
    await waitFor(() => {
      expect(result.current.flows.isLoaded).toBe(true);
    });
    // The FilterSheet has not loaded: nothing happens.
    result.current.flows.onSelectCountryClicked();
    await flush();
    expect(bottomSheetOpen).not.toHaveBeenCalled();
    result.current.flows.onFilterSheetInitialized('filter-sheet');
    result.current.flows.onFilterSheetLoaded(false);
    result.current.flows.onSelectCountryClicked();
    await flush();
    expect(bottomSheetOpen).toHaveBeenCalledWith('filter-sheet');
    result.current.flows.onFilterSheetLoaded(true);
    result.current.flows.onSelectCountryClicked();
    await flush();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(bottomSheetOpen).toHaveBeenCalledTimes(1);
    result.current.flows.onLegendSheetInitialized('legend-sheet');
    result.current.flows.onLegendInfoClicked();
    expect(bottomSheetOpen).toHaveBeenLastCalledWith('legend-sheet');
  });
});
