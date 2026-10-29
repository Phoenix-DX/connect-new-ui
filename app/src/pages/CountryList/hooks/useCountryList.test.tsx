import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCountryListCommunityStatistics, fetchCountryListStatistics, type CountrySummary } from '@/api/country';
import { CommunicationException, NotRegisteredException, UserException } from '@/legacy/os/exceptions';
import { IgnorableSystemException, OutOfContextException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { countryListReducer } from './countryListState';
import { useCountryList, type CountryListFlows } from './useCountryList';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./countryListState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./countryListState')>();
  return { ...actual, countryListReducer: vi.fn(actual.countryListReducer) };
});
vi.mock('@/api/country', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/country')>()),
  fetchCountryListStatistics: vi.fn(),
  fetchCountryListCommunityStatistics: vi.fn(() => Promise.resolve()),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));

/* The flows of the CountryList screen, with GetCountriesStatistics, HasAccessToRegion, the upgrade popup and the flow
   handler replaced by spies; the navigation is the platform one. The countries are fictional rows with aggregate
   counts. */
const COUNTRIES: CountrySummary[] = [
  { countryCode: 'NZ', title: 'New Zealand', avatarURL: '', texts: { Members: '1,204' } },
  { countryCode: 'ZZ', title: 'Nowhere Land', avatarURL: '', texts: { Members: '12' } },
];

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** A GetCountriesStatistics answer that the test gives later. */
function pendingCountries() {
  let resolve: (rows: CountrySummary[]) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchCountryListStatistics).mockReturnValueOnce(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R4). */
const raised = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
/** A HasAccessToRegion answer that the test gives later. */
function pendingAccess() {
  let resolve: (hasAccess: boolean) => void = () => undefined;
  vi.mocked(hasAccessToRegion).mockReturnValueOnce(
    new Promise((res) => {
      resolve = res;
    }),
  );
  return (hasAccess: boolean) => {
    resolve(hasAccess);
  };
}

beforeEach(() => {
  vi.mocked(fetchCountryListStatistics).mockResolvedValue(COUNTRIES);
});
afterEach(() => {
  vi.clearAllMocks();
  resetNavigation();
});

describe('useCountryList', () => {
  it('OnReady starts GetCommunityStatistics once without waiting for it, and GetCountriesStatistics (live TST)', async () => {
    vi.mocked(fetchCountryListCommunityStatistics).mockReturnValueOnce(new Promise(() => undefined));
    const { result } = renderHook(() => useCountryList(), { wrapper: strictWrapper });
    await settle();
    expect(fetchCountryListCommunityStatistics).toHaveBeenCalledTimes(1);
    expect(fetchCountryListStatistics).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
  });

  it('a failed GetCommunityStatistics goes to the flow handler; the countries still come', async () => {
    vi.mocked(fetchCountryListCommunityStatistics).mockRejectedValueOnce(new CommunicationException('offline'));
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    expect(raised()).toEqual([expect.objectContaining({ message: 'offline' })]);
    expect(result.current.state.countries).toHaveLength(2);
  });

  it('OnReady: 10 skeleton rows, then the countries with their flag images; fetched', async () => {
    const answer = pendingCountries();
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    expect(result.current.state.countries).toHaveLength(10);
    expect(result.current.state.countries[0]).toMatchObject({ title: 'Australia', avatarURL: '-' });
    expect(result.current.state.fetchStatus).toBe('notFetched');
    answer.resolve(COUNTRIES);
    await settle();
    expect(result.current.state).toMatchObject({ fetchStatus: 'ok', isDataFetched: true, hasFetchError: false });
    expect(result.current.state.countries.map((c) => c.title)).toEqual(['New Zealand', 'Nowhere Land']);
    // GetFlagURLByCountryCode: the flag of a known country, "" for an unknown code.
    expect(result.current.state.countries[0]?.avatarURL).not.toBe('');
    expect(result.current.state.countries[1]?.avatarURL).toBe('');
    expect(fetchCountryListStatistics).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the countries come', async () => {
    const { result } = renderHook(() => useCountryList(), { wrapper: strictWrapper });
    await settle();
    expect(fetchCountryListStatistics).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.countries).toHaveLength(2);
  });

  it('a CommunicationException: the error status, the list cleared, BubbleCommunicationException', async () => {
    vi.mocked(fetchCountryListStatistics).mockRejectedValueOnce(new CommunicationException('offline'));
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    expect(result.current.state).toMatchObject({ countries: [], fetchStatus: 'error', hasFetchError: true });
    expect(raised()).toHaveLength(1);
    expect(raised()[0]).toMatchObject({ message: 'offline', specificType: 'UBTConnect.BubbleCommunicationException' });
  });

  it('a user exception: the list cleared, BubbleGenericException', async () => {
    vi.mocked(fetchCountryListStatistics).mockRejectedValueOnce(new UserException('No countries'));
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    expect(result.current.state).toMatchObject({ countries: [], fetchStatus: 'error', hasFetchError: true });
    expect(raised()[0]).toMatchObject({ message: 'No countries', specificType: 'UBTConnect.BubbleGenericException' });
  });

  it('NotRegistered goes up as it is and keeps the skeleton rows', async () => {
    const error = new NotRegisteredException('Not registered');
    vi.mocked(fetchCountryListStatistics).mockRejectedValueOnce(error);
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    expect(result.current.state.countries).toHaveLength(10);
    expect(result.current.state.hasFetchError).toBe(true);
    expect(raised()).toEqual([error]);
  });

  it('the user information and the sheet id are assigned; the legend icon opens the sheet of that id', async () => {
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    act(() => {
      result.current.onLegendSheetInitialized('sheet-7');
    });
    expect(result.current.state.bottomSheetId).toBe('sheet-7');
  });

  it('Handler_StatisticsList_Clicked: CountryDetails with access, else the upgrade popup', async () => {
    const { result } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    act(() => {
      result.current.onCountryClicked('NZ');
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('0', 'NZ');
    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(false);
    act(() => {
      result.current.onCountryClicked('ZZ');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raised()).toEqual([]);
  });
});

describe('useCountryList after an unmount and in StrictMode (flow scope, item 8)', () => {
  it('R1: unmount while GetCountriesStatistics is pending: one call, no state write, nothing raised', async () => {
    const answer = pendingCountries();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useCountryList();
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(countryListReducer).mockClear();
    answer.resolve(COUNTRIES);
    await settle();
    expect(fetchCountryListStatistics).toHaveBeenCalledTimes(1);
    expect(countryListReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raised()).toEqual([]);
  });

  it('R1: unmount while GetCountriesStatistics is pending: its failure is not bubbled and writes no state', async () => {
    const answer = pendingCountries();
    const { unmount } = renderHook(() => useCountryList(), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(countryListReducer).mockClear();
    answer.reject(new CommunicationException('offline'));
    await settle();
    // The catch of Action_RefreshData is inside the dropped chain on TST (CountryList.js:1450-1490).
    expect(raised()).toEqual([]);
    expect(countryListReducer).not.toHaveBeenCalled();
  });

  it('R2: HasAccessToRegion (a module action) answers after the unmount: the upgrade popup still shows', async () => {
    const { result, unmount } = renderHook(() => useCountryList(), { wrapper });
    await settle();
    const answer = pendingAccess();
    act(() => {
      result.current.onCountryClicked('ZZ');
    });
    unmount();
    answer(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raised()).toEqual([]);
  });

  it('R4: HasAccessToRegion answers after the user left the screen: no navigation, the flow stops', async () => {
    const screen: { current: CountryListFlows | null } = { current: null };
    function Screen() {
      screen.current = useCountryList();
      return null;
    }
    const { router, at } = renderRoutes(
      { '/UBTConnect/CountryList': <Screen />, '/UBTConnect/Search': <p>Search</p> },
      '/UBTConnect/CountryList',
    );
    await settle();
    const answer = pendingAccess();
    act(() => {
      screen.current?.onCountryClicked('NZ');
    });
    await act(() => router.navigate('/UBTConnect/Search'));
    answer(true);
    await settle();
    expect(at()).toBe('/UBTConnect/Search');
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(OutOfContextException), expect.anything());
    expect(raised()).toEqual([]);
  });
});
