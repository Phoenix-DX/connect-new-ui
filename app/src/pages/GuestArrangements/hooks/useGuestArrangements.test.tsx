import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, useEffect, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchGuestArrangements, type GuestArrangementsResult } from '@/api/event';
import { CommunicationException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { checkDirectoryAccess } from '@/lib/orbit/actions';
import { getContactHelpdeskSubject_Milestone } from './guestArrangementsActions';
import {
  EMPTY_GUEST_ARRANGEMENTS_DATA,
  guestArrangementsReducer,
  type GuestArrangementsBlockInputs,
} from './guestArrangementsState';
import { useGuestArrangements, type GuestArrangementsFlows } from './useGuestArrangements';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./guestArrangementsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./guestArrangementsState')>();
  return { ...actual, guestArrangementsReducer: vi.fn(actual.guestArrangementsReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchGuestArrangements: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  checkDirectoryAccess: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/platform/feedback/dialogs/subscription', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs/subscription')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache). */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of ScreenBlock_GuestArrangements, with the calls, the access check and the popup replaced by spies.
   Fictional guests: the Ortega family at the Rosario Spring Conference. */
const inputs: GuestArrangementsBlockInputs = {
  In_MemberId: '770104',
  In_EventId: '6402',
  In_HostId: '770001',
  In_MilestoneId: '31',
  In_PreloadEventName: 'Rosario Spring Conference',
  In_PreloadMilestoneName: 'Hosting the Ortegas',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};
const answer: GuestArrangementsResult = {
  HasData: true,
  Response: {
    ...EMPTY_GUEST_ARRANGEMENTS_DATA,
    MemberId: '770104',
    Title: 'Mr',
    FirstName: 'Tomás',
    LastName: 'Ortega',
    EventDetails: {
      Id: '6402',
      Name: 'Rosario Spring Conference',
      Location: 'Rosario, Santa Fe',
      StartDate: '2026-11-06T09:00:00Z',
      EndDate: '2026-11-08T18:00:00Z',
    },
  },
};

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

const events = { onNavigateToHouseholdDetail: vi.fn(), onContactHelpdesk: vi.fn() };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => useGuestArrangements(inputs, events), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
const applicationEvents = () => vi.mocked(log.info).mock.calls.filter((c) => c[0] === 'ApplicationEvent');

beforeEach(() => {
  vi.clearAllMocks();
  viewCache.restored = false;
  vi.spyOn(log, 'info').mockImplementation(() => undefined);
  vi.mocked(fetchGuestArrangements).mockResolvedValue(answer);
  vi.mocked(checkDirectoryAccess).mockResolvedValue(true);
});
afterEach(() => {
  vi.restoreAllMocks();
});

describe('useGuestArrangements', () => {
  it('OnReady runs before the paint: the call starts before the passive effects of the first commit', () => {
    vi.mocked(fetchGuestArrangements).mockReturnValue(new Promise(() => undefined));
    const callsSeenByPassiveEffect: number[] = [];
    /** Placed before the hook in the tree: its passive effect runs after every layout effect, before the hook's. */
    function PassiveProbe() {
      useEffect(() => {
        callsSeenByPassiveEffect.push(vi.mocked(fetchGuestArrangements).mock.calls.length);
      }, []);
      return null;
    }
    function Block() {
      useGuestArrangements(inputs, events);
      return null;
    }
    render(
      <MemoryRouter>
        <PassiveProbe />
        <Block />
      </MemoryRouter>,
    );
    expect(callsSeenByPassiveEffect).toEqual([1]);
  });

  it('RefreshData: IsFetchingData, then GetGuestArrangements with the block variables, then the answer', async () => {
    const call = pending<GuestArrangementsResult>();
    vi.mocked(fetchGuestArrangements).mockReturnValue(call.promise);
    const { result } = renderFlows();
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false, hasData: false });
    expect(fetchGuestArrangements).toHaveBeenCalledTimes(1);
    expect(fetchGuestArrangements).toHaveBeenCalledWith({ IsFetchingData: true, ...inputs });
    call.resolve(answer);
    await settle();
    expect(result.current.state).toEqual({
      guestArrangementsData: answer.Response,
      isFetchingData: false,
      isDataFetched: true,
      hasData: true,
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a view that the view cache restored makes no call', async () => {
    viewCache.restored = true;
    const { result } = renderFlows();
    await settle();
    expect(fetchGuestArrangements).not.toHaveBeenCalled();
    expect(result.current.state.isFetchingData).toBe(false);
  });

  it('a failed GetGuestArrangements goes to the flow handler and keeps the skeleton', async () => {
    const error = new CommunicationException('The connection has timed out');
    vi.mocked(fetchGuestArrangements).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false });
  });

  it('OnHandle_ClickedMember with access: NavigateTo_HouseholdDetail, then the application event', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('770101');
    });
    await settle();
    expect(checkDirectoryAccess).toHaveBeenCalledWith('770101', 'Member');
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledWith('770101');
    expect(applicationEvents()).toEqual([
      ['ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: '770101', MilestoneId: '31', EventId: '6402' }],
    ]);
    expect(vi.mocked(events.onNavigateToHouseholdDetail).mock.invocationCallOrder[0]).toBeLessThan(
      vi.mocked(log.info).mock.invocationCallOrder[0] ?? 0,
    );
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('OnHandle_ClickedMember without access: the upgrade popup, no navigation', async () => {
    vi.mocked(checkDirectoryAccess).mockResolvedValue(false);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('770101');
    });
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
    expect(applicationEvents()).toEqual([]);
  });

  it('OnHandle_ClickedMember: a failed access check goes to the flow handler', async () => {
    const error = new CommunicationException('The connection has timed out');
    vi.mocked(checkDirectoryAccess).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('770101');
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
  });

  it('OnHandle_ContactHelpdesk: the subject of the milestone and, as EventName, the milestone name', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onContactHelpdesk();
    });
    expect(events.onContactHelpdesk).toHaveBeenCalledWith(
      getContactHelpdeskSubject_Milestone(
        'accommodation-host',
        'Rosario Spring Conference',
        'Hosting the Ortegas',
        '2026-11-06T09:00:00Z',
        'Rosario, Santa Fe',
      ),
      'Hosting the Ortegas',
    );
    expect(vi.mocked(events.onContactHelpdesk).mock.calls[0]?.[0]).toContain(
      'Rosario Spring Conference - Hosting the Ortegas - Rosario, Santa Fe - ',
    );
  });
});

describe('useGuestArrangements after an unmount and in StrictMode (decision W23)', () => {
  it('after an unmount during GetGuestArrangements: no state write', async () => {
    const call = pending<GuestArrangementsResult>();
    vi.mocked(fetchGuestArrangements).mockReturnValue(call.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(guestArrangementsReducer).mockClear();
    call.resolve(answer);
    await settle();
    expect(fetchGuestArrangements).toHaveBeenCalledTimes(1);
    expect(guestArrangementsReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('after an unmount during GetGuestArrangements, a failure still goes to the flow handler once', async () => {
    const call = pending<GuestArrangementsResult>();
    vi.mocked(fetchGuestArrangements).mockReturnValue(call.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(guestArrangementsReducer).mockClear();
    const error = new CommunicationException('The connection has timed out');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(guestArrangementsReducer).not.toHaveBeenCalled();
  });

  it('after an unmount during CheckDirectoryAccess: the navigation event and the application event run once', async () => {
    const access = pending<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('770101');
    });
    unmount();
    vi.mocked(guestArrangementsReducer).mockClear();
    access.resolve(true);
    await settle();
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).toHaveBeenCalledWith('770101');
    expect(applicationEvents()).toHaveLength(1);
    expect(guestArrangementsReducer).not.toHaveBeenCalled();
  });

  it('after an unmount during CheckDirectoryAccess without access: the upgrade popup runs once', async () => {
    const access = pending<boolean>();
    vi.mocked(checkDirectoryAccess).mockReturnValue(access.promise);
    const { result, unmount } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickedMember('770101');
    });
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHouseholdDetail).not.toHaveBeenCalled();
  });

  it('in StrictMode: one GetGuestArrangements, and its answer is shown', async () => {
    const latestResult: { current: GuestArrangementsFlows | null } = { current: null };
    function Probe() {
      latestResult.current = useGuestArrangements(inputs, events);
      return null;
    }
    render(
      <StrictMode>
        <MemoryRouter>
          <Probe />
        </MemoryRouter>
      </StrictMode>,
    );
    await settle();
    expect(fetchGuestArrangements).toHaveBeenCalledTimes(1);
    expect(latestResult.current?.state).toMatchObject({ isFetchingData: false, isDataFetched: true, hasData: true });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });
});
