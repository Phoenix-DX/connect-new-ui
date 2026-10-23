import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCountryListStatistics, type CountrySummary } from '@/api/country';
import { CommunicationException, NotRegisteredException, UserException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { countryListReducer } from './countryListState';
import { useCountryList } from './useCountryList';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./countryListState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./countryListState')>();
  return { ...actual, countryListReducer: vi.fn(actual.countryListReducer) };
});
vi.mock('@/api/country', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/country')>()),
  fetchCountryListStatistics: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the CountryList screen, with GetCountriesStatistics and the flow handler replaced by spies. The
   countries are fictional rows with aggregate counts. */
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
const raised = () => vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error);

beforeEach(() => {
  vi.mocked(fetchCountryListStatistics).mockResolvedValue(COUNTRIES);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useCountryList', () => {
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

  it('W23: after the unmount, the started flow makes its call once and writes no state', async () => {
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
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: an exception after the unmount still goes to the flow handler, once, without a state write', async () => {
    const answer = pendingCountries();
    const { unmount } = renderHook(() => useCountryList(), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(countryListReducer).mockClear();
    answer.reject(new CommunicationException('offline'));
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raised()[0]).toMatchObject({ specificType: 'UBTConnect.BubbleCommunicationException' });
    expect(countryListReducer).not.toHaveBeenCalled();
  });
});
