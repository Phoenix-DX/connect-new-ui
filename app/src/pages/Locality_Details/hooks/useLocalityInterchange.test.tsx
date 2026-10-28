import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchInterchanges, type Interchange } from '@/api/locality';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { localityInterchangeReducer } from './localityBlocksState';
import { useLocalityInterchange } from './useLocalityInterchange';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./localityBlocksState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./localityBlocksState')>();
  return { ...actual, localityInterchangeReducer: vi.fn(actual.localityInterchangeReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchInterchanges: vi.fn(),
}));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  hasAccessToRegion: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs/subscription', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs/subscription')>()),
  showUpgradePopUp: vi.fn(),
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

/* Flow scope (item 8) of Locality_Interchange: GetInterchangesByLocalityId is a data action (R1,
   Locality_Interchange.js:237); HasAccessToRegion and App_Subscription_ShowUpgradePopUp are module actions (R2, :270,
   :313); the navigation is blocked by the platform out of context (R4, :304). The block opens locality 252. */
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderBlock = () => renderHook(() => useLocalityInterchange('252'), { wrapper });
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** A promise that the test settles. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable stop of a disposed block. */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof ControllerDisposedException));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchInterchanges).mockResolvedValue([]);
  vi.mocked(showUpgradePopUp).mockResolvedValue(undefined);
});

describe('useLocalityInterchange OnReady (flow scope, item 8)', () => {
  it('unmount while GetInterchangesByLocalityId is pending, the call answers: no state write, no raise', async () => {
    const call = pending<Interchange[]>();
    vi.mocked(fetchInterchanges).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localityInterchangeReducer).mockClear();
    call.resolve([]);
    await settle();
    expect(localityInterchangeReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while GetInterchangesByLocalityId is pending, the call fails: no state write, no raise', async () => {
    const call = pending<Interchange[]>();
    vi.mocked(fetchInterchanges).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localityInterchangeReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(localityInterchangeReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a failure while the block is there keeps the skeleton and goes to the flow handler with the flow scope', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchInterchanges).mockRejectedValue(error);
    const { result } = renderBlock();
    await settle();
    expect(result.current.isLoading).toBe(true);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });
});

describe('useLocalityInterchange Handler_NavigateToLocality (flow scope, item 8)', () => {
  it('access: Locality_Details of that locality', async () => {
    vi.mocked(hasAccessToRegion).mockResolvedValue(true);
    const { result } = renderBlock();
    await settle();
    result.current.onNavigateToLocality('7400', 'Argentina');
    await settle();
    expect(hasAccessToRegion).toHaveBeenCalledWith('7400', 'Argentina');
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      PreloadedLocalityLabel: '',
      LocalityId: '7400',
    });
    expect(showUpgradePopUp).not.toHaveBeenCalled();
  });

  it('unmount while HasAccessToRegion is pending, no access: the upgrade pop-up still shows (module action, R2)', async () => {
    const access = pending<boolean>();
    vi.mocked(hasAccessToRegion).mockReturnValue(access.promise);
    const { result, unmount } = renderBlock();
    await settle();
    result.current.onNavigateToLocality('7400', 'Argentina');
    unmount();
    access.resolve(false);
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(navigate).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a failure of the handler goes to the flow handler with the flow scope', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(hasAccessToRegion).mockRejectedValue(error);
    const { result } = renderBlock();
    await settle();
    result.current.onNavigateToLocality('7400', 'Argentina');
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(navigate).not.toHaveBeenCalled();
  });
});
