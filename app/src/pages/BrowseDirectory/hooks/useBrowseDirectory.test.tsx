import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchLocalityCardList, type LocalityCard, type LocalityCardList } from '@/api/locality';
import type { MarkerWithWindow } from '@/components/directory/DirectoryMap';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  map_FitBoundsAuto,
  map_InvalidateSize,
  map_Marker_OpenPopUp,
  map_SetPopupBindingCallback,
} from '@/lib/leaflet/actions';
import type L from '@/lib/leaflet/leaflet';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { browseDirectoryReducer } from './browseDirectoryState';
import { useBrowseDirectory, type BrowseDirectoryFlows } from './useBrowseDirectory';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./browseDirectoryState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./browseDirectoryState')>();
  return { ...actual, browseDirectoryReducer: vi.fn(actual.browseDirectoryReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchLocalityCardList: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/lib/leaflet/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/leaflet/actions')>()),
  map_FitBoundsAuto: vi.fn(),
  map_InvalidateSize: vi.fn(),
  map_Marker_OpenPopUp: vi.fn(),
  map_SetPopupBindingCallback: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

/* The flows of the BrowseDirectory screen, with the calls, the map, the popup and the navigation replaced by spies.
   Fictional localities. */
const inputs = { CountryCode: 'AR' };
const locality = (id: string, name: string, latitude: number, longitude: number): LocalityCard => ({
  localityId: id,
  name,
  latitude,
  longitude,
  statistics: { Title: name, Subtitle: 'Chubut', AvatarURL: '', Statistics: [] },
});
const ANSWER: LocalityCardList = {
  localities: [locality('4107', 'Puerto Madryn', -42.7692, -65.0385), locality('4108', 'Trelew', -43.2489, -65.3051)],
  countryName: 'Argentina',
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useBrowseDirectory(inputs), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: BrowseDirectoryFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useBrowseDirectory(inputs);
    return null;
  }
  const view = render(
    <StrictMode>
      <MemoryRouter>
        <Probe />
      </MemoryRouter>
    </StrictMode>,
  );
  return { latestResult, ...view };
}
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** A promise that the test resolves. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  const promise = new Promise<T>((r) => {
    resolve = r;
  });
  return { promise, resolve };
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchLocalityCardList).mockResolvedValue(ANSWER);
  vi.mocked(hasAccessToRegion).mockResolvedValue(true);
});

describe('useBrowseDirectory', () => {
  it('OnReady refreshes GetLocalityStatistics once: the skeleton rows, then the localities, the centre and the markers', async () => {
    const pending = deferred<LocalityCardList>();
    vi.mocked(fetchLocalityCardList).mockReturnValue(pending.promise);
    const { result } = renderFlows();
    expect(fetchLocalityCardList).toHaveBeenCalledTimes(1);
    expect(fetchLocalityCardList).toHaveBeenCalledWith('AR');
    expect(result.current.state.localities).toHaveLength(10);
    expect(result.current.state.isDataFetched).toBe(false);
    expect(result.current.state.Center).toEqual([]);
    pending.resolve(ANSWER);
    await settle();
    expect(result.current.state).toMatchObject({
      countryName: 'Argentina',
      isDataFetched: true,
      Center: [-42.7692, -65.0385],
    });
    expect(result.current.state.localities.map((l) => l.name)).toEqual(['Puerto Madryn', 'Trelew']);
    expect(result.current.state.MarkersList.map((m) => m.Marker?.Id)).toEqual(['4107', '4108']);
  });

  it('a failed GetLocalityStatistics goes to the flow handler and the list stays loading', async () => {
    const failure = new Error('Request failed with status 500');
    vi.mocked(fetchLocalityCardList).mockRejectedValue(failure);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure, expect.anything());
    expect(result.current.state.isDataFetched).toBe(false);
    expect(result.current.state.localities).toHaveLength(10);
  });

  it('Handler_BrowseCountries goes to BrowseCountries', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onBrowseCountries();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/BrowseCountries', {});
  });

  it('Handler_StatisticsList_Clicked goes to Locality_Details with the locality and its label', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('4108');
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('4108', 'AR');
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      LocalityId: '4108',
      PreloadedLocalityLabel: 'Trelew, Argentina',
    });
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('Handler_StatisticsList_Clicked shows the upgrade popup without access, and does nothing for an empty id', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValue(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('4107');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).not.toHaveBeenCalled();
    act(() => {
      result.current.onStatisticsListClicked('');
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledTimes(1);
  });

  it('a row id that is not in the list goes to Locality_Details with an empty label', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('5001');
    });
    await settle();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      LocalityId: '5001',
      PreloadedLocalityLabel: '',
    });
  });

  it('Action_InvalidateMapSize after OnInitialized; the list OnParametersChangedEv only Map_InvalidateSize; never before the map', () => {
    vi.useFakeTimers();
    try {
      const { result } = renderFlows();
      result.current.onStatisticsListParametersChanged();
      expect(map_InvalidateSize).not.toHaveBeenCalled();
      result.current.onMapInitialized('LeafletMap-LeafletMap');
      expect(map_InvalidateSize).not.toHaveBeenCalled();
      vi.runAllTimers();
      expect(map_InvalidateSize).toHaveBeenCalledWith('LeafletMap-LeafletMap');
      expect(map_FitBoundsAuto).toHaveBeenCalledWith('LeafletMap-LeafletMap');
      // StatisticsListOnParametersChhanged (BrowseDirectory.mvc.js:1025-1040): Map_InvalidateSize only.
      result.current.onStatisticsListParametersChanged();
      expect(map_InvalidateSize).toHaveBeenCalledTimes(2);
      expect(map_FitBoundsAuto).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });

  it('a failed Action_InvalidateMapSize goes to the flow handler', async () => {
    const failure = new TypeError('Map_InvalidateSize: no map');
    vi.mocked(map_InvalidateSize).mockImplementation(() => {
      throw failure;
    });
    const { result } = renderFlows();
    result.current.onMapInitialized('LeafletMap-LeafletMap');
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    result.current.onStatisticsListParametersChanged();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(2);
  });

  it('the popup of a marker links to Handler_StatisticsList_Clicked, and a marker click opens its popup', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onSetCallbacks('LeafletMap-LeafletMap');
    const [mapId, buildPopup] = vi.mocked(map_SetPopupBindingCallback).mock.calls[0] ?? [];
    expect(mapId).toBe('LeafletMap-LeafletMap');
    const marker = result.current.state.MarkersList[1] as MarkerWithWindow;
    const popup = buildPopup?.(marker) as HTMLElement;
    const link = popup.querySelector('a') as HTMLAnchorElement;
    expect(link.textContent).toBe('Trelew');
    act(() => {
      link.click();
    });
    await settle();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      LocalityId: '4108',
      PreloadedLocalityLabel: 'Trelew, Argentina',
    });
    const markerObj = {} as L.Marker;
    result.current.onMarkerClicked('4108', 'LeafletMap-LeafletMap', 'Locality', 'Trelew', -43.2, -65.3, markerObj);
    expect(map_Marker_OpenPopUp).toHaveBeenCalledWith(markerObj);
  });
});

describe('useBrowseDirectory after an unmount and in StrictMode (decision W23)', () => {
  it('a GetLocalityStatistics that answers after the unmount writes no state', async () => {
    const pending = deferred<LocalityCardList>();
    vi.mocked(fetchLocalityCardList).mockReturnValue(pending.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(browseDirectoryReducer).mockClear();
    pending.resolve(ANSWER);
    await settle();
    expect(fetchLocalityCardList).toHaveBeenCalledTimes(1);
    expect(browseDirectoryReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a row click whose HasAccessToRegion answers after the unmount still goes to Locality_Details once', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    const access = deferred<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValue(access.promise);
    act(() => {
      result.current.onStatisticsListClicked('4107');
    });
    unmount();
    vi.mocked(browseDirectoryReducer).mockClear();
    access.resolve(true);
    await settle();
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      LocalityId: '4107',
      PreloadedLocalityLabel: 'Puerto Madryn, Argentina',
    });
    expect(browseDirectoryReducer).not.toHaveBeenCalled();
  });

  it('a row click without access whose answer comes after the unmount still shows the upgrade popup once', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    const access = deferred<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValue(access.promise);
    act(() => {
      result.current.onStatisticsListClicked('4107');
    });
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('runs OnReady once in StrictMode and still loads the localities', async () => {
    const { latestResult } = renderStrict();
    await settle();
    expect(fetchLocalityCardList).toHaveBeenCalledTimes(1);
    expect(latestResult.current?.state.isDataFetched).toBe(true);
    expect(latestResult.current?.state.MarkersList).toHaveLength(2);
  });
});
