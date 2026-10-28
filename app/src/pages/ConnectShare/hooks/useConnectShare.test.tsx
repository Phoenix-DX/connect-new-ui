import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchShareDetails, type ShareDetails } from '@/api/share';
import { ServerException } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { replaceOnUpcomingNavigation, TransitionAnimation } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import { connectShareReducer } from './connectShareState';
import { useConnectShare, type ConnectShareView } from './useConnectShare';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./connectShareState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./connectShareState')>();
  return { ...actual, connectShareReducer: vi.fn(actual.connectShareReducer) };
});
vi.mock('@/api/share', () => ({ fetchShareDetails: vi.fn() }));
vi.mock('@/platform/session/userInfo', () => ({ getUserInformation: vi.fn(() => Promise.resolve({})) }));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  showUpgradePopUp: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const spy = vi.hoisted(() => ({ navigate: vi.fn(), back: vi.fn() }));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => spy.navigate,
  useNavigateBack: () => spy.back,
  replaceOnUpcomingNavigation: vi.fn(),
}));

/* The flows of the ConnectShare screen with the real client actions: Get_ShareDetails, the audit's
   GetUserInformation_Wrapper, the popup, the flow handler and the navigation are spies. Fictional shares. */
const share = (patch: Partial<ShareDetails>): ShareDetails => ({
  isShareAvailable: true,
  shareObjectTypeId: 'Household',
  objectId: '42438',
  shareItemId: '42438',
  canAccess: true,
  householderId: '0',
  ...patch,
});
const NO_ACCESS = share({ canAccess: false });

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (shareId = 'abc') => renderHook(() => useConnectShare({ ShareId: shareId }), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: ConnectShareView | null } = { current: null };
  function Probe() {
    latestResult.current = useConnectShare({ ShareId: 'abc' });
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
/** Runs the fake timers by `ms`, with the promises that they release. */
const advance = (ms: number) =>
  act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
/** Each raise to the flow handler: the error, and whether it carried a flow scope (the `flow` of useFlowState). */
const raisedWithScope = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error, scope]) => [
      error,
      typeof (scope as { alive?: unknown } | undefined)?.alive === 'function',
    ]);
/** A promise that the test resolves or rejects. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (reason: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchShareDetails).mockResolvedValue(share({}));
  vi.mocked(getUserInformation).mockResolvedValue({} as Awaited<ReturnType<typeof getUserInformation>>);
});
afterEach(() => {
  vi.useRealTimers();
});

describe('useConnectShare', () => {
  it('renders nothing until OnInitialize ends, then goes to the shared object with ReplaceOnUpcomingNavigation', async () => {
    const pending = deferred<ShareDetails>();
    vi.mocked(fetchShareDetails).mockReturnValue(pending.promise);
    const { result } = renderFlows('abc');
    expect(fetchShareDetails).toHaveBeenCalledWith('abc');
    expect(result.current.isInitialized).toBe(false);
    pending.resolve(share({}));
    await settle();
    expect(result.current.isInitialized).toBe(true);
    expect(result.current.state).toMatchObject({
      isRedirect: true,
      redirect: { shareObjectTypeId: 'Household', attributesId: '42438' },
    });
    expect(replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(spy.navigate).toHaveBeenCalledTimes(1);
    expect(spy.navigate).toHaveBeenCalledWith(
      '/UBTConnect/HouseholdDetails',
      { HouseholdId: '42438' },
      { transition: TransitionAnimation.None },
    );
    expect(vi.mocked(replaceOnUpcomingNavigation).mock.invocationCallOrder[0]).toBeLessThan(
      spy.navigate.mock.invocationCallOrder[0] ?? 0,
    );
  });

  it.each([
    ['OneSchool Global', '/UBTConnect/OneSchoolGlobalDetails'],
    ['Feed', '/UBTConnect/FeedItemDetail'],
    ['Supper Meeting', '/UBTConnect/SupperMeeting_Details'],
  ])(
    'Action_Redirect opens a %s share with TransitionAnimation.None (ConnectShare.mvc.js:461-485)',
    async (type, path) => {
      vi.mocked(fetchShareDetails).mockResolvedValue(share({ shareObjectTypeId: type }));
      renderFlows('abc');
      await settle();
      expect(spy.navigate).toHaveBeenCalledTimes(1);
      expect(spy.navigate).toHaveBeenCalledWith(path, expect.anything(), { transition: TransitionAnimation.None });
    },
  );

  it('a type that Action_Redirect does not route sets IsRedirect False, so the share detail shows', async () => {
    vi.mocked(fetchShareDetails).mockResolvedValue(share({ shareObjectTypeId: 'Locality', objectId: '1001' }));
    const { result } = renderFlows();
    await settle();
    expect(replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(spy.navigate).not.toHaveBeenCalled();
    expect(result.current.isInitialized).toBe(true);
    expect(result.current.state).toMatchObject({ statusMessage: '', isRedirect: false });
  });

  it('without access: the status message, then after 1 s ShowFreeSubscriptionAlert and the upgrade popup', async () => {
    vi.useFakeTimers();
    vi.mocked(fetchShareDetails).mockResolvedValue(NO_ACCESS);
    const { result } = renderFlows();
    await advance(0);
    expect(result.current.isInitialized).toBe(true);
    expect(result.current.state).toMatchObject({
      statusMessage: "You don't have access to shared item",
      showFreeSubscriptionAlert: false,
      isRedirect: false,
    });
    await advance(999);
    expect(showUpgradePopUp).not.toHaveBeenCalled();
    await advance(1);
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(result.current.state.showFreeSubscriptionAlert).toBe(true);
    expect(replaceOnUpcomingNavigation).not.toHaveBeenCalled();
    expect(spy.navigate).not.toHaveBeenCalled();
  });

  it('a failed upgrade popup of the alert timer goes to the flow handler with the flow scope (flow.run)', async () => {
    vi.useFakeTimers();
    const failure = new Error('popup failed');
    vi.mocked(fetchShareDetails).mockResolvedValue(NO_ACCESS);
    vi.mocked(showUpgradePopUp).mockRejectedValueOnce(failure);
    renderFlows();
    await advance(1000);
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(raisedWithScope()).toEqual([[failure, true]]);
  });

  it('an unavailable share shows its message and no popup', async () => {
    vi.useFakeTimers();
    vi.mocked(fetchShareDetails).mockResolvedValue(share({ isShareAvailable: false }));
    const { result } = renderFlows();
    await advance(1000);
    expect(result.current.state.statusMessage).toBe('This shared item is no longer available');
    expect(showUpgradePopUp).not.toHaveBeenCalled();
    expect(result.current.state.showFreeSubscriptionAlert).toBe(false);
  });

  it('a server exception shows its message and runs the audit', async () => {
    vi.mocked(fetchShareDetails).mockRejectedValue(new ServerException('Share not found'));
    const { result } = renderFlows();
    await settle();
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(result.current.isInitialized).toBe(true);
    expect(result.current.state.statusMessage).toBe('Share not found');
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a failed audit goes to the flow handler with the flow scope, and the screen renders with the first variables', async () => {
    const failure = new ServerException('Request failed with an error');
    vi.mocked(fetchShareDetails).mockRejectedValue(new ServerException('Share not found'));
    vi.mocked(getUserInformation).mockRejectedValue(failure);
    const { result } = renderFlows();
    await settle();
    expect(raisedWithScope()).toEqual([[failure, true]]);
    expect(result.current.isInitialized).toBe(true);
    expect(result.current.state.statusMessage).toBe('');
  });
});

describe('useConnectShare after an unmount and in StrictMode (flow scope, item 8)', () => {
  it('a Get_ShareDetails that fails after the unmount still runs the audit once and writes no state', async () => {
    vi.useFakeTimers();
    const pending = deferred<ShareDetails>();
    vi.mocked(fetchShareDetails).mockReturnValue(pending.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(connectShareReducer).mockClear();
    pending.reject(new ServerException('Share not found'));
    await advance(1000);
    expect(fetchShareDetails).toHaveBeenCalledTimes(1);
    expect(getUserInformation).toHaveBeenCalledTimes(1);
    expect(connectShareReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
    expect(showUpgradePopUp).not.toHaveBeenCalled();
    expect(spy.navigate).not.toHaveBeenCalled();
  });

  it('R3: a share that answers after the unmount starts no alert timer and no redirect', async () => {
    vi.useFakeTimers();
    const pending = deferred<ShareDetails>();
    vi.mocked(fetchShareDetails).mockReturnValue(pending.promise);
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(connectShareReducer).mockClear();
    pending.resolve(NO_ACCESS);
    await advance(2000);
    expect(connectShareReducer).not.toHaveBeenCalled();
    expect(showUpgradePopUp).not.toHaveBeenCalled();
    expect(replaceOnUpcomingNavigation).not.toHaveBeenCalled();
    expect(spy.navigate).not.toHaveBeenCalled();
  });

  it('the alert timer stops when the screen unmounts before 1 s', async () => {
    vi.useFakeTimers();
    vi.mocked(fetchShareDetails).mockResolvedValue(NO_ACCESS);
    const { unmount } = renderFlows();
    await advance(500);
    unmount();
    await advance(1000);
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('runs OnInitialize and OnReady once in StrictMode and still writes the state', async () => {
    const { latestResult } = renderStrict();
    await settle();
    expect(fetchShareDetails).toHaveBeenCalledTimes(1);
    expect(latestResult.current?.isInitialized).toBe(true);
    expect(latestResult.current?.state.isRedirect).toBe(true);
    expect(spy.navigate).toHaveBeenCalledTimes(1);
  });
});
