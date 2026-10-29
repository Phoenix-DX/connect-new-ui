import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchBrowseCountriesStatistics, type CountryCard } from '@/api/country';
import { IgnorableSystemException, OutOfContextException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import {
  browseCountriesReducer,
  getSkeletonList_UI_CountryStatistics,
  onAfterFetch_GetCountriesStatistics,
  type BrowseCountriesState,
} from './browseCountriesState';
import { useBrowseCountries, type BrowseCountriesFlows } from './useBrowseCountries';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./browseCountriesState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./browseCountriesState')>();
  return { ...actual, browseCountriesReducer: vi.fn(actual.browseCountriesReducer) };
});
vi.mock('@/api/country', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/country')>()),
  fetchBrowseCountriesStatistics: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
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
  };
});
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), with the saved variables. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      return actual.useViewState(name, saved ?? initial);
    },
  };
});

/* The flows of BrowseCountries, with the call, the dialogs, the flow handler and the navigation replaced by spies.
   Fictional counts. */
const country = (countryCode: string, title: string): CountryCard => ({
  countryCode,
  statistics: {
    Title: title,
    Subtitle: '',
    AvatarURL: '',
    Statistics: [{ Name: 'Localities', Value: '6', IconColorId: '', IconId: '' }],
  },
});
const COUNTRIES = [country('JM', 'Jamaica'), country('NL', 'Netherlands')];

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useBrowseCountries(), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: BrowseCountriesFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useBrowseCountries();
    return null;
  }
  render(
    <StrictMode>
      <MemoryRouter>
        <Probe />
      </MemoryRouter>
    </StrictMode>,
  );
  return latestResult;
}
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** GetCountriesStatistics answers only when the test resolves or rejects it. */
function pending() {
  const call: { resolve: (value: CountryCard[]) => void; reject: (error: Error) => void } = {
    resolve: () => undefined,
    reject: () => undefined,
  };
  vi.mocked(fetchBrowseCountriesStatistics).mockReturnValue(
    new Promise((resolve, reject) => {
      call.resolve = resolve;
      call.reject = reject;
    }),
  );
  return call;
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R4). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchBrowseCountriesStatistics).mockResolvedValue(COUNTRIES);
});

describe('useBrowseCountries: OnReady', () => {
  it('shows 10 skeleton rows, then the countries with their flags, with one call', async () => {
    const call = pending();
    const { result } = renderFlows();
    expect(result.current.state).toEqual({
      countriesStatistics: getSkeletonList_UI_CountryStatistics(10),
      isDataFetched: false,
    });
    call.resolve(COUNTRIES);
    await settle();
    expect(fetchBrowseCountriesStatistics).toHaveBeenCalledTimes(1);
    expect(result.current.state).toEqual({
      countriesStatistics: onAfterFetch_GetCountriesStatistics(COUNTRIES),
      isDataFetched: true,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('keeps the skeleton rows and raises a failed fetch to the flow handler', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchBrowseCountriesStatistics).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.state.isDataFetched).toBe(false);
    expect(result.current.state.countriesStatistics).toEqual(getSkeletonList_UI_CountryStatistics(10));
  });

  it('keeps the countries of a restored view whose data was fetched, without a call', async () => {
    const saved: BrowseCountriesState = {
      countriesStatistics: onAfterFetch_GetCountriesStatistics(COUNTRIES),
      isDataFetched: true,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    await settle();
    expect(fetchBrowseCountriesStatistics).not.toHaveBeenCalled();
    expect(result.current.state).toEqual(saved);
  });

  it('refreshes a restored view whose data was not fetched', async () => {
    viewCache.restored = true;
    viewCache.saved = { countriesStatistics: getSkeletonList_UI_CountryStatistics(10), isDataFetched: false };
    const { result } = renderFlows();
    await settle();
    expect(fetchBrowseCountriesStatistics).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
  });
});

describe('useBrowseCountries after an unmount and in StrictMode (flow scope, item 8)', () => {
  afterEach(() => {
    platformNavigation.on = false;
    resetNavigation();
  });

  it('R1: unmount while GetCountriesStatistics is pending: the answer writes no state and raises nothing', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(browseCountriesReducer).mockClear();
    call.resolve(COUNTRIES);
    await settle();
    expect(fetchBrowseCountriesStatistics).toHaveBeenCalledTimes(1);
    expect(browseCountriesReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetCountriesStatistics is pending: its failure reaches no handler and writes no state', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(browseCountriesReducer).mockClear();
    call.reject(new Error('Service Interruption'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(browseCountriesReducer).not.toHaveBeenCalled();
  });

  it('HasAccessToRegion (a module action) answers after the unmount: the upgrade pop-up still shows (R2)', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    let answer: (hasAccess: boolean) => void = () => undefined;
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(new Promise((resolve) => (answer = resolve)));
    act(() => {
      result.current.onStatisticsListClicked('JM');
    });
    unmount();
    answer(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raisedErrors()).toEqual([]);
  });

  it('R4: HasAccessToRegion answers after the user left the screen: no navigation, the flow stops', async () => {
    platformNavigation.on = true;
    const screen: { current: BrowseCountriesFlows | null } = { current: null };
    function Screen() {
      screen.current = useBrowseCountries();
      return null;
    }
    const { router, at } = renderRoutes(
      { '/UBTConnect/BrowseCountries': <Screen />, '/UBTConnect/Updates': <p>Updates</p> },
      '/UBTConnect/BrowseCountries',
    );
    await settle();
    let answer: (hasAccess: boolean) => void = () => undefined;
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(new Promise((resolve) => (answer = resolve)));
    act(() => {
      screen.current?.onStatisticsListClicked('NL');
    });
    await act(() => router.navigate('/UBTConnect/Updates'));
    answer(true);
    await settle();
    expect(at()).toBe('/UBTConnect/Updates');
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(OutOfContextException), expect.anything());
    expect(raisedErrors()).toEqual([]);
  });

  it('runs OnReady once in StrictMode and still shows the countries', async () => {
    const result = renderStrict();
    await settle();
    expect(fetchBrowseCountriesStatistics).toHaveBeenCalledTimes(1);
    expect(result.current?.state.isDataFetched).toBe(true);
    expect(result.current?.state.countriesStatistics).toEqual(onAfterFetch_GetCountriesStatistics(COUNTRIES));
  });
});

describe('useBrowseCountries: Handler_StatisticsList_Clicked', () => {
  it('does nothing for an empty id', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('');
    });
    await settle();
    expect(hasAccessToRegion).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('opens BrowseDirectory with the country code when the user has access to the region', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('NL');
    });
    await settle();
    // HasAccessToRegion(LongIntegerToText(TextToLongInteger(Event_Id)), Event_Id): a country code is no number.
    expect(hasAccessToRegion).toHaveBeenCalledWith('0', 'NL');
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/BrowseDirectory', { CountryCode: 'NL' });
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('shows the upgrade pop-up when the user has no access to the region', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('JM');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('raises a failure of the handler to the flow handler', async () => {
    const error = new Error('No user information');
    vi.mocked(hasAccessToRegion).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onStatisticsListClicked('JM');
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(navigate).not.toHaveBeenCalled();
  });
});
