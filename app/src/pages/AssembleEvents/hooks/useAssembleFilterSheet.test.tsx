import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableRegionSubscribedCountries } from '@/lib/legacyShared/actions';
import { assembleFilterSheetReducer, SHEET_TITLE_COUNTRIES, SHEET_TITLE_LOCALITIES } from './assembleFilterSheetState';
import { useAssembleFilterSheet, type AssembleFilterSheetEvents } from './useAssembleFilterSheet';
import { fetchUserSubdivision, type UserSubdivision } from './userSubdivision';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./assembleFilterSheetState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./assembleFilterSheetState')>();
  return { ...actual, assembleFilterSheetReducer: vi.fn(actual.assembleFilterSheetReducer) };
});
vi.mock('./userSubdivision', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./userSubdivision')>()),
  fetchUserSubdivision: vi.fn(),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableRegionSubscribedCountries: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));
vi.mock('@/lib/assemble/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/assemble/actions')>()),
  hasAccessToRegion: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: vi.fn(() => Promise.resolve(true)),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
/* useFlowState and the event flows send a rejection to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of Assemble_FilterSheet, with the user information, the subscribed countries, the access check, the
   dialogs and the flow handler replaced by spies. Countries are reference data; the supper meetings are fictional. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina', MembersCount: 268 },
  { Code: 'NZ', Name: 'New Zealand', MembersCount: 6284 },
  { Code: 'GB', Name: 'United Kingdom', MembersCount: 23560 },
];
const USER_HALL: UserSubdivision = { id: '1210', name: 'Zapiola (Main Meeting Room)' };
const REGION_ID = '1';

/** The shell's user information with a subscription region. */
function shellUserInfo() {
  const info = mockUserInformation();
  info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId = REGION_ID;
  return info;
}
/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res) => {
      resolve = res;
    }),
  );
  return { resolve };
}

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

let events: AssembleFilterSheetEvents;
const renderFlows = (strict = false) =>
  renderHook(() => useAssembleFilterSheet('b5', events), { wrapper: strict ? strictWrapper : wrapper });

beforeEach(() => {
  events = { onCancel: vi.fn(), onNavigateToSubdivision: vi.fn() };
  vi.mocked(fetchUserSubdivision).mockResolvedValue(USER_HALL);
  vi.mocked(getUserInformation).mockImplementation(() => Promise.resolve(shellUserInfo()));
  vi.mocked(getCacheableRegionSubscribedCountries).mockResolvedValue(COUNTRIES);
  vi.mocked(hasAccessToRegion).mockResolvedValue(true);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleFilterSheet', () => {
  it("OnReady: the user's supper meeting, then the subscribed countries of the region; fetched", async () => {
    const countries = pending<CountryWithMapPosition[]>(vi.mocked(getCacheableRegionSubscribedCountries));
    const { result } = renderFlows();
    expect(result.current).toMatchObject({ isCountriesDataFetched: false, screenTitle: SHEET_TITLE_COUNTRIES });
    await settle();
    expect(fetchUserSubdivision).toHaveBeenCalledTimes(1);
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledWith(REGION_ID);
    expect(result.current.isCountriesDataFetched).toBe(false);
    countries.resolve(COUNTRIES);
    await settle();
    expect(result.current).toMatchObject({
      countries: COUNTRIES,
      isCountriesDataFetched: true,
      isBottomBarVisible: false,
      isApplyEnabled: false,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the countries come', async () => {
    const { result } = renderFlows(true);
    await settle();
    expect(fetchUserSubdivision).toHaveBeenCalledTimes(1);
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(1);
    expect(result.current.countries).toEqual(COUNTRIES);
  });

  it('a failure of OnReady goes to the flow handler, and the Spinner stays', async () => {
    const error = new Error('Invalid country id.');
    vi.mocked(getCacheableRegionSubscribedCountries).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.isCountriesDataFetched).toBe(false);
  });

  it('W23: an unmount while the countries load skips the state writes; the call still runs', async () => {
    const countries = pending<CountryWithMapPosition[]>(vi.mocked(getCacheableRegionSubscribedCountries));
    const { unmount } = renderFlows();
    await settle();
    unmount();
    const writes = vi.mocked(assembleFilterSheetReducer).mock.calls.length;
    countries.resolve(COUNTRIES);
    await settle();
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(1);
    expect(vi.mocked(assembleFilterSheetReducer).mock.calls).toHaveLength(writes);
  });

  it('the search: a term filters the shown list; an empty term loads the countries again', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSearchTermChange(' ZEA');
    });
    expect(result.current).toMatchObject({ searchTerm: ' ZEA', countries: [COUNTRIES[1]] });
    act(() => {
      result.current.onSearchTermChange('');
    });
    await settle();
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(2);
    expect(result.current).toMatchObject({ searchTerm: '', countries: COUNTRIES });
  });

  it('a country without access: ConfirmAction of the FreeSubscriptionAlert dialog, the country step stays', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onCountryClicked('GB');
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('GB', '0');
    expect(confirmAction).toHaveBeenCalledWith('b5-FreeSubscriptionAlert');
    expect(result.current).toMatchObject({ showLocalitiesList: false, countryCode: '' });
  });

  it('a country, a supper meeting, Apply: NavigateToSubdivision; Link_Back; Cancel; the upgrade popup', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onCountryClicked('AR');
    });
    await settle();
    expect(result.current).toMatchObject({
      showLocalitiesList: true,
      screenTitle: SHEET_TITLE_LOCALITIES,
      countryCode: 'AR',
      countryName: 'Argentina',
      isBottomBarVisible: true,
      isApplyEnabled: false,
    });
    act(() => {
      result.current.onSelectedSubdivision('9202');
    });
    expect(result.current.isApplyEnabled).toBe(true);
    result.current.onApply();
    expect(events.onNavigateToSubdivision).toHaveBeenLastCalledWith('9202', false);
    act(() => {
      result.current.onSelectedSubdivision('1210');
    });
    result.current.onApply();
    expect(events.onNavigateToSubdivision).toHaveBeenLastCalledWith('1210', true);
    act(() => {
      result.current.onBackToCountries();
    });
    expect(result.current).toMatchObject({ showLocalitiesList: false, countryCode: '', isApplyEnabled: false });
    result.current.onCancel();
    expect(events.onCancel).toHaveBeenCalledTimes(1);
    result.current.onFreeSubscriptionAlert();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
  });
});
