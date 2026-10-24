import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, type Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import { UserException } from '@/legacy/os/exceptions';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { createBackEvent } from '@/platform/navigation/backQueue';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableRegionSubscribedCountries, getCacheableUserInfo } from '@/lib/legacyShared/actions';
import { defaultActionGetUserInformation_Output } from '@/mocks/modules/Connect2_LegacyShared/mockDefaults';
import { assembleFilterReducer, BROWSE_BY_COUNTRY, FILTER_BY_LOCALITY, NULL_ID } from './assembleFilterState';
import { useAssembleFilter, type AssembleFilterEvents } from './useAssembleFilter';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./assembleFilterState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./assembleFilterState')>();
  return { ...actual, assembleFilterReducer: vi.fn(actual.assembleFilterReducer) };
});
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  getCacheableUserInfo: vi.fn(),
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

/* The flows of ScreenBlock_Assemble_Filter, with the user information, the subscribed countries, the access check,
   the dialogs and the flow handler replaced by spies. Countries are reference data; the supper meeting ids are
   fictional. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina', MembersCount: 268 },
  { Code: 'NZ', Name: 'New Zealand', MembersCount: 6284 },
  { Code: 'GB', Name: 'United Kingdom', MembersCount: 23560 },
];
const USER_SUBDIVISION_ID = '7001';
const REGION_ID = '1';

/** The Connect2_LegacyShared user information with the user's own supper meeting. */
function legacyUserInfo() {
  const info = defaultActionGetUserInformation_Output().UserInformation;
  info.Subdivision.Id = USER_SUBDIVISION_ID;
  return info;
}
/** The shell's user information with a subscription region. */
function shellUserInfo() {
  const info = mockUserInformation();
  info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId = REGION_ID;
  return info;
}
/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
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
const location: Location = { pathname: '/UBTConnect/HomeFeed', search: '', hash: '', state: null, key: 'k' };
const backEvent = () => createBackEvent(location, false, () => undefined);
const raised = () => vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error);

let events: AssembleFilterEvents;
const renderFlows = (strict = false) =>
  renderHook(() => useAssembleFilter('$b2', events), { wrapper: strict ? strictWrapper : wrapper });

beforeEach(() => {
  events = { onCancel: vi.fn(), onNavigateToSubdivision: vi.fn() };
  vi.mocked(getCacheableUserInfo).mockImplementation(() => Promise.resolve(legacyUserInfo()));
  vi.mocked(getUserInformation).mockImplementation(() => Promise.resolve(shellUserInfo()));
  vi.mocked(getCacheableRegionSubscribedCountries).mockResolvedValue(COUNTRIES);
  vi.mocked(hasAccessToRegion).mockResolvedValue(true);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleFilter', () => {
  it("OnReady: the user's subdivision, then the subscribed countries of the region in both lists; fetched", async () => {
    const countries = pending<CountryWithMapPosition[]>(vi.mocked(getCacheableRegionSubscribedCountries));
    const { result } = renderFlows();
    expect(result.current.state.isCountriesDataFetched).toBe(false);
    await settle();
    expect(getCacheableUserInfo).toHaveBeenCalledTimes(1);
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledWith(REGION_ID);
    expect(result.current.state).toMatchObject({
      userSubdivisionId: USER_SUBDIVISION_ID,
      isCountriesDataFetched: false,
    });
    countries.resolve(COUNTRIES);
    await settle();
    expect(result.current.state).toMatchObject({
      screenTitle: BROWSE_BY_COUNTRY,
      countryDetailList: COUNTRIES,
      tempCountryDetailList: COUNTRIES,
      isCountriesDataFetched: true,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once and the countries come', async () => {
    const { result } = renderFlows(true);
    await settle();
    expect(getCacheableUserInfo).toHaveBeenCalledTimes(1);
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(1);
    expect(result.current.state.isCountriesDataFetched).toBe(true);
    expect(result.current.state.tempCountryDetailList).toEqual(COUNTRIES);
  });

  it('a failed GetCacheableRegionSubscribedCountries goes to the flow handler; the Spinner stays', async () => {
    const error = new UserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound');
    vi.mocked(getCacheableRegionSubscribedCountries).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    expect(raised()).toEqual([error]);
    expect(result.current.state.isCountriesDataFetched).toBe(false);
    expect(result.current.state.tempCountryDetailList).toEqual([]);
  });

  it('the search: a term filters CountryDetailList at once; an empty term loads both lists again', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSearchTermChange(' ZEA');
    });
    expect(result.current.state.searchTerm).toBe(' ZEA');
    expect(result.current.state.tempCountryDetailList.map((c) => c.Code)).toEqual(['NZ']);
    expect(result.current.state.countryDetailList).toEqual(COUNTRIES);
    act(() => {
      result.current.onSearchTermChange('Atlantis');
    });
    expect(result.current.state.tempCountryDetailList).toEqual([]);
    const reloaded = COUNTRIES.slice(0, 2);
    vi.mocked(getCacheableRegionSubscribedCountries).mockResolvedValueOnce(reloaded);
    act(() => {
      result.current.onSearchTermChange('');
    });
    await settle();
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(2);
    expect(result.current.state).toMatchObject({
      searchTerm: '',
      countryDetailList: reloaded,
      tempCountryDetailList: reloaded,
    });
  });

  it('a country with access: its localities show under "Filter by Locality"; Apply raises NavigateToSubdivision', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onCountryClicked('NZ');
    });
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('NZ', NULL_ID);
    expect(result.current.state).toMatchObject({
      countryCode: 'NZ',
      countryName: 'New Zealand',
      screenTitle: FILTER_BY_LOCALITY,
      showLocalitiesList: true,
      subdivisionId: NULL_ID,
    });
    act(() => {
      result.current.onSelectedSubdivision('7002');
    });
    expect(result.current.state.subdivisionId).toBe('7002');
    result.current.onApply();
    expect(events.onNavigateToSubdivision).toHaveBeenLastCalledWith('7002', false);
    act(() => {
      result.current.onSelectedSubdivision(USER_SUBDIVISION_ID);
    });
    result.current.onApply();
    expect(events.onNavigateToSubdivision).toHaveBeenLastCalledWith(USER_SUBDIVISION_ID, true);
    result.current.onCancel();
    expect(events.onCancel).toHaveBeenCalledTimes(1);
  });

  it('a country without access: ConfirmAction of the FreeSubscriptionAlert dialog, no state change', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    await settle();
    vi.mocked(assembleFilterReducer).mockClear();
    act(() => {
      result.current.onCountryClicked('GB');
    });
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('b2-FreeSubscriptionAlert');
    expect(assembleFilterReducer).not.toHaveBeenCalled();
    expect(result.current.state.showLocalitiesList).toBe(false);
  });

  it('an empty country code does nothing', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onCountryClicked('');
    });
    await settle();
    expect(hasAccessToRegion).not.toHaveBeenCalled();
  });

  it('FreeSubscriptionAlert of the locality filter: the upgrade pop-up; its failure goes to the flow handler', async () => {
    const error = new Error('pop-up');
    vi.mocked(showUpgradePopUp).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    result.current.onFreeSubscriptionAlert();
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raised()).toEqual([error]);
  });

  it('back while the localities show: the country list again, PreventNavigation, the content scrolls to the top', async () => {
    const content = document.createElement('div');
    content.className = 'content';
    document.body.append(content);
    content.scrollTop = 40;
    const frame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 0;
    });
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onCountryClicked('AR');
    });
    await settle();
    act(() => {
      result.current.onSelectedSubdivision('7002');
    });
    const event = backEvent();
    act(() => {
      result.current.onBackNavigation(event);
    });
    expect(event.defaultPrevented).toBe(true);
    expect(content.scrollTop).toBe(0);
    expect(result.current.state).toMatchObject({
      showLocalitiesList: false,
      screenTitle: BROWSE_BY_COUNTRY,
      subdivisionId: NULL_ID,
      countryCode: '',
      countryName: 'Argentina',
    });
    // On the country list, the back navigation goes on.
    vi.mocked(assembleFilterReducer).mockClear();
    const next = backEvent();
    result.current.onBackNavigation(next);
    expect(next.defaultPrevented).toBe(false);
    expect(assembleFilterReducer).not.toHaveBeenCalled();
    frame.mockRestore();
    content.remove();
  });

  it('W23: after the unmount, the started OnReady makes its calls once and writes no state', async () => {
    const userInfo = pending<ReturnType<typeof legacyUserInfo>>(vi.mocked(getCacheableUserInfo));
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useAssembleFilter('$b2', events);
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(assembleFilterReducer).mockClear();
    userInfo.resolve(legacyUserInfo());
    await settle();
    expect(getCacheableUserInfo).toHaveBeenCalledTimes(1);
    expect(getCacheableRegionSubscribedCountries).toHaveBeenCalledTimes(1);
    expect(assembleFilterReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: an exception after the unmount still goes to the flow handler, once, without a state write', async () => {
    const countries = pending<CountryWithMapPosition[]>(vi.mocked(getCacheableRegionSubscribedCountries));
    const { unmount } = renderFlows(true);
    await settle();
    unmount();
    vi.mocked(assembleFilterReducer).mockClear();
    const error = new UserException('Invalid country id', 'Connect2_LegacyShared.ObjectNotFound');
    countries.reject(error);
    await settle();
    expect(raised()).toEqual([error]);
    expect(assembleFilterReducer).not.toHaveBeenCalled();
  });

  it('W23: a country click that ends after the unmount still opens ConfirmAction once, and writes no state', async () => {
    const { result, unmount } = renderFlows(true);
    await settle();
    const noAccess = pending<boolean>(vi.mocked(hasAccessToRegion));
    act(() => {
      result.current.onCountryClicked('GB');
    });
    const access = pending<boolean>(vi.mocked(hasAccessToRegion));
    act(() => {
      result.current.onCountryClicked('NZ');
    });
    unmount();
    vi.mocked(assembleFilterReducer).mockClear();
    noAccess.resolve(false);
    access.resolve(true);
    await settle();
    expect(confirmAction).toHaveBeenCalledTimes(1);
    expect(confirmAction).toHaveBeenCalledWith('b2-FreeSubscriptionAlert');
    expect(assembleFilterReducer).not.toHaveBeenCalled();
  });
});
