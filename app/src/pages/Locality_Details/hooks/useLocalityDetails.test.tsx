import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchLocalityDetails, type LocalityDetails } from '@/api/locality';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import type { LocalityDetailsInputs } from '@/pages/Locality_Details/inputs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { localityDetailsReducer, NO_LOCALITY_DETAILS } from './localityDetailsState';
import { useLocalityDetails, type LocalityDetailsFlags, type LocalityDetailsFlows } from './useLocalityDetails';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./localityDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./localityDetailsState')>();
  return { ...actual, localityDetailsReducer: vi.fn(actual.localityDetailsReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchLocalityDetails: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
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

/* The flows of the locality screen, with the calls and the navigation replaced by spies. The mock user lives in
   locality 585 ("Bahia Blanca, Argentina"); the route opens locality 252. Fictional data. */
const inputs: LocalityDetailsInputs = { LocalityId: '252', PreloadedLocalityLabel: 'Bahia Blanca, Argentina' };
const flags: LocalityDetailsFlags = { hasC1DirectoryView: true };
const DETAILS: LocalityDetails = {
  ...NO_LOCALITY_DETAILS,
  bretherenCount: 54,
  householdCount: 23,
  maiinHallLatitude: '-38.69',
  mainHallLongitude: '-62.29',
  localityName: 'Bahia Blanca',
  countryName: 'Argentina',
  countryCode: 'AR',
  timezoneName: 'America/Argentina/Buenos_Aires',
  timezoneOffset: '-10800',
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (screenInputs = inputs, screenFlags = flags) =>
  renderHook(() => useLocalityDetails(screenInputs, screenFlags), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: LocalityDetailsFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useLocalityDetails(inputs, flags);
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
/** A promise that the test resolves. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  const promise = new Promise<T>((r) => {
    resolve = r;
  });
  return { promise, resolve };
}
const sentLocalityId = () => vi.mocked(fetchLocalityDetails).mock.lastCall?.[0].LocalityId;

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getUserInformation).mockResolvedValue(mockUserInformation());
  vi.mocked(fetchLocalityDetails).mockResolvedValue(DETAILS);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('useLocalityDetails OnReady', () => {
  it('initializes the screen, then refreshes Get_LocalityDetails once with the screen variables', async () => {
    const { result } = renderFlows();
    expect(result.current.state.isScreenInitialized).toBe(false);
    await settle();
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(fetchLocalityDetails).toHaveBeenCalledTimes(1);
    expect(fetchLocalityDetails).toHaveBeenCalledWith(
      expect.objectContaining({
        LocalityId: '252',
        IsScreenInitialized: true,
        IsUserLocality: false,
        TagsList_SelectedTag: 'Households',
        LocalityLabel: 'Bahia Blanca, Argentina',
        PreloadedLocalityLabel: 'Bahia Blanca, Argentina',
        HeaderIsScrolled: false,
      }),
    );
    expect(result.current.state).toMatchObject({
      isScreenInitialized: true,
      isUserLocality: false,
      localityLabel: 'Bahia Blanca, Argentina',
      get_LocalityDetails: { isDataFetched: true, hasFetchError: false, localityDetails: DETAILS },
    });
  });

  it('opens the locality of the user when the route has no LocalityId', async () => {
    const { result } = renderFlows({ LocalityId: '0', PreloadedLocalityLabel: '' });
    await settle();
    expect(sentLocalityId()).toBe('585');
    expect(result.current.state).toMatchObject({ localityId: '585', isUserLocality: true });
    expect(result.current.state.tagsList.map((t) => t.Text)).toContain('My Household');
  });

  it('a failed Get_LocalityDetails marks the error and goes to the flow handler', async () => {
    const failure = new Error('Request failed with status 500');
    vi.mocked(fetchLocalityDetails).mockRejectedValue(failure);
    const { result } = renderFlows();
    await settle();
    expect(result.current.state.get_LocalityDetails).toMatchObject({ isDataFetched: false, hasFetchError: true });
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure, expect.anything());
  });
});

/** The errors that reached the flow handler, without the ignorable stop of a disposed screen (R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof ControllerDisposedException));

describe('useLocalityDetails after an unmount and in StrictMode (flow scope, item 8)', () => {
  it('no LocalityId: Action_SetLocalityLabel stops the flow after GetUserInformation_Wrapper (R3)', async () => {
    const user = pending<ReturnType<typeof mockUserInformation>>();
    vi.mocked(getUserInformation).mockReturnValue(user.promise);
    const { unmount } = renderFlows({ LocalityId: '0', PreloadedLocalityLabel: '' });
    unmount();
    vi.mocked(localityDetailsReducer).mockClear();
    user.resolve(mockUserInformation());
    await settle();
    expect(fetchLocalityDetails).not.toHaveBeenCalled();
    expect(localityDetailsReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(expect.any(ControllerDisposedException), expect.anything());
    expect(raisedErrors()).toEqual([]);
  });

  it('with a LocalityId: the request of Get_LocalityDetails still starts with the initialized variables (R1)', async () => {
    const user = pending<ReturnType<typeof mockUserInformation>>();
    vi.mocked(getUserInformation).mockReturnValue(user.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(localityDetailsReducer).mockClear();
    user.resolve(mockUserInformation());
    await settle();
    expect(fetchLocalityDetails).toHaveBeenCalledTimes(1);
    expect(fetchLocalityDetails).toHaveBeenCalledWith(
      expect.objectContaining({
        LocalityId: '252',
        IsScreenInitialized: true,
        LocalityLabel: 'Bahia Blanca, Argentina',
      }),
    );
    expect(localityDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while Get_LocalityDetails is pending, the call answers: no state write, no raise (R1)', async () => {
    const details = pending<LocalityDetails>();
    vi.mocked(fetchLocalityDetails).mockReturnValue(details.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(localityDetailsReducer).mockClear();
    details.resolve(DETAILS);
    await settle();
    expect(localityDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while Get_LocalityDetails is pending, the call fails: no state write, no raise (R1)', async () => {
    let fail: (error: unknown) => void = () => undefined;
    vi.mocked(fetchLocalityDetails).mockReturnValue(
      new Promise((_resolve, reject) => {
        fail = reject;
      }),
    );
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(localityDetailsReducer).mockClear();
    fail(new Error('Request failed with status 500'));
    await settle();
    expect(localityDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('runs OnReady once in StrictMode and still writes the state', async () => {
    const result = renderStrict();
    await settle();
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(fetchLocalityDetails).toHaveBeenCalledTimes(1);
    expect(result.current?.state).toMatchObject({
      isScreenInitialized: true,
      get_LocalityDetails: { isDataFetched: true, localityDetails: DETAILS },
    });
  });
});

describe('useLocalityDetails handlers', () => {
  it('OnClick_Search and OnClick_Maps (the main hall of the fetched details)', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onClickSearch();
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/Search');
    result.current.onClickMaps();
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/Map', {
      In_InitialLongitude: '-62.29',
      In_InitialLatitude: '-38.69',
    });
  });

  it('Handler_NavigateTo_BrowsebyLocation: CountryDetails with GetHasC1DirectoryView, else BrowseDirectory', async () => {
    const withC1 = renderFlows();
    await settle();
    withC1.result.current.onNavigateToBrowseByLocation();
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/CountryDetails', { CountryCode: 'AR' });
    const withoutC1 = renderFlows(inputs, { ...flags, hasC1DirectoryView: false });
    await settle();
    withoutC1.result.current.onNavigateToBrowseByLocation();
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/BrowseDirectory', { CountryCode: 'AR' });
  });

  it('Handler_NavigateTo_HouseholdDetails does nothing for NullIdentifier', async () => {
    const { result } = renderFlows();
    await settle();
    result.current.onNavigateToHouseholdDetails('0');
    expect(navigate).not.toHaveBeenCalled();
    result.current.onNavigateToHouseholdDetails('91002');
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/HouseholdDetails', { HouseholdId: '91002' });
  });

  it('Handler_NavigateTo_OneschoolGlobalDetails ignores a click inside a StopPropagationHelper', async () => {
    const { result } = renderFlows();
    await settle();
    const helper = document.createElement('div');
    helper.className = 'helper-stop-propagation';
    const inside = document.createElement('button');
    const outside = document.createElement('button');
    helper.append(inside);
    document.body.append(helper, outside);
    inside.addEventListener('click', () => {
      result.current.onNavigateToOneSchoolGlobalDetails('1430');
    });
    outside.addEventListener('click', () => {
      result.current.onNavigateToOneSchoolGlobalDetails('1431');
    });
    inside.click();
    expect(navigate).not.toHaveBeenCalled();
    outside.click();
    expect(navigate).toHaveBeenLastCalledWith('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: '1431' });
  });

  it('Handler_HorizontalTagListChanged selects the tag and scrolls the screen to the top', async () => {
    const screenEl = document.createElement('div');
    screenEl.className = 'active-screen';
    document.body.append(screenEl);
    screenEl.scrollTop = 120;
    const { result } = renderFlows();
    await settle();
    const tags = result.current.state.tagsList.map((t) => ({ ...t, IsSelected: t.Text === 'Interchange' }));
    act(() => {
      result.current.onTagsChanged(tags);
    });
    expect(result.current.state.tagsList_SelectedTag).toBe('Interchange');
    await act(
      () =>
        new Promise((resolve) => {
          requestAnimationFrame(() => {
            resolve(undefined);
          });
        }),
    );
    expect(screenEl.scrollTop).toBe(0);
  });

  it('OnHeaderScrolled sets HeaderIsScrolled', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onHeaderScrolled(true);
    });
    expect(result.current.state.headerIsScrolled).toBe(true);
  });
});
