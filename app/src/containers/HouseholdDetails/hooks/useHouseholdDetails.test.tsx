import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchHousehold, fetchHouseholdCoordinates, type Household } from '@/api/household';
import { CommunicationException, IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import type { UI_HouseholdMember } from '@/lib/ubtConnect/structures';
import { householdDetailsReducer } from './householdDetailsState';
import { useHouseholdDetails, type HouseholdDetailsParameters } from './useHouseholdDetails';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./householdDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./householdDetailsState')>();
  return { ...actual, householdDetailsReducer: vi.fn(actual.householdDetailsReducer) };
});
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchHousehold: vi.fn(),
  fetchHouseholdCoordinates: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
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
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

/* The flows of HouseholdDetails_Block after the user left (flow scope, item 8), with the data actions, the user
   information, the access check, the popup and the navigation replaced by spies. A fictional household. */
const INPUTS: HouseholdDetailsParameters = {
  householdId: '42438',
  isEnabled: true,
  preview: { UsePreview: false, FormattedAddress: '' },
  showKebabMenu: false,
  checkVisibility: false,
  isSkeletonOnly: false,
  hideActions: false,
};
const FLAGS = { hasPhotobookAccess: true, hasExtendedShare: false };
const HOUSEHOLD: Household = {
  Household: {
    HouseholdCard: {
      Id: '42438',
      Household_Card_Content: { LocalityName: 'Bahia Blanca', CountryName: 'Argentina', LocalityId: '4107' },
    },
  },
  Out_HouseholdMembers: [],
  Out_NonHouseholdMembers: [],
  isVisible: true,
};
/** A married child in another household (Members block, Handler_NonMemberOnClick). */
const CHILD = { HouseholdId: '91004', LocalityName: 'Trelew', CountryName: 'Argentina' } as UI_HouseholdMember;

const events = { onHouseholdDataFetched: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (inputs = INPUTS) =>
  renderHook((props: { inputs: HouseholdDetailsParameters }) => useHouseholdDetails(props.inputs, FLAGS, events), {
    wrapper,
    initialProps: { inputs },
  });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** A promise that the test resolves or rejects. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getUserInformation).mockResolvedValue(mockUserInformation());
  vi.mocked(fetchHousehold).mockResolvedValue(HOUSEHOLD);
  vi.mocked(fetchHouseholdCoordinates).mockResolvedValue({});
});

describe('useHouseholdDetails after an unmount (flow scope, item 8)', () => {
  it('OnInitialize refreshes both data actions and raises HouseholdDataFetched', async () => {
    renderFlows();
    await settle();
    expect(fetchHousehold).toHaveBeenCalledTimes(1);
    expect(fetchHouseholdCoordinates).toHaveBeenCalledTimes(1);
    expect(events.onHouseholdDataFetched).toHaveBeenCalledWith('Bahia Blanca', 'Argentina', false);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('R1: unmount while GetHousehold is pending: no event, no state write, nothing raised', async () => {
    const household = pending<Household>();
    vi.mocked(fetchHousehold).mockReturnValueOnce(household.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(householdDetailsReducer).mockClear();
    household.resolve(HOUSEHOLD);
    await settle();
    expect(events.onHouseholdDataFetched).not.toHaveBeenCalled();
    expect(householdDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while both data actions are pending: their failures reach no handler', async () => {
    const household = pending<Household>();
    const coordinates = pending<object>();
    vi.mocked(fetchHousehold).mockReturnValueOnce(household.promise);
    vi.mocked(fetchHouseholdCoordinates).mockReturnValueOnce(coordinates.promise);
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(householdDetailsReducer).mockClear();
    household.reject(new CommunicationException('The connection has timed out'));
    coordinates.reject(new CommunicationException('The connection has timed out'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(householdDetailsReducer).not.toHaveBeenCalled();
  });

  it('R1: OnParametersChanged, unmount while the preview GetHousehold is pending: no new refreshes', async () => {
    const { rerender, unmount } = renderFlows({ ...INPUTS, isSkeletonOnly: true });
    await settle();
    expect(fetchHousehold).toHaveBeenCalledTimes(1);
    const household = pending<Household>();
    vi.mocked(fetchHousehold).mockReturnValueOnce(household.promise);
    rerender({ inputs: { ...INPUTS, preview: { UsePreview: true, FormattedAddress: '' }, isSkeletonOnly: false } });
    await settle();
    expect(fetchHousehold).toHaveBeenCalledTimes(2);
    unmount();
    household.resolve(HOUSEHOLD);
    await settle();
    // The flow stops at the data action (R1): no skeletonOnlyEnded write, no "Refreshes" node.
    expect(fetchHousehold).toHaveBeenCalledTimes(2);
    expect(fetchHouseholdCoordinates).toHaveBeenCalledTimes(1);
    expect(raisedErrors()).toEqual([]);
  });

  it('R3: Handler_NonMemberOnClick whose HasAccessToRegion answers after the unmount: no navigation', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    const access = pending<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(access.promise);
    act(() => {
      result.current.onNonMemberClick(CHILD);
    });
    unmount();
    access.resolve(true);
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('Trelew', 'Argentina');
    expect(navigate).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R2: Handler_NonMemberOnClick without access, answered after the unmount: the upgrade popup still shows', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    const access = pending<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValueOnce(access.promise);
    act(() => {
      result.current.onNonMemberClick(CHILD);
    });
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('Handler_NonMemberOnClick with access: HouseholdDetails of the child household; a failure goes to the handler', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onNonMemberClick(CHILD);
    });
    await settle();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdDetails', { HouseholdId: '91004' });
    const error = new Error('No user information');
    vi.mocked(hasAccessToRegion).mockRejectedValueOnce(error);
    act(() => {
      result.current.onNonMemberClick(CHILD);
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });
});
