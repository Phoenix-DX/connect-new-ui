import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchGmpMilestoneHost, type GmpMilestoneHost } from '@/api/event';
import type { MilestoneDetailInputs } from '@/pages/MilestoneDetail/inputs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useWasRestoredFromCache } from '@/platform/navigation/hooks';
import { resetViewCache } from '@/platform/navigation/viewCache';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { milestoneWrapperReducer, type MilestoneWrapperBody } from './milestoneWrapperState';
import { useMilestoneWrapper, type MilestoneWrapperFlows } from './useMilestoneWrapper';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./milestoneWrapperState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./milestoneWrapperState')>();
  return { ...actual, milestoneWrapperReducer: vi.fn(actual.milestoneWrapperReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchGmpMilestoneHost: vi.fn(),
}));
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** The view cache check that useFlowState reads: a test can say that the view was restored. */
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: vi.fn(() => false),
}));

/* The flows of ScreenBlock_MilestoneWrapper with the call, the cached user and the flow handler replaced by spies.
   Fictional milestone and event. */
const INPUTS: MilestoneDetailInputs = {
  In_FromNotification: true,
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '0',
  In_OrbitMilestoneTypeId: '',
  In_MilestoneName: 'Accommodation',
  In_EventName: 'Spring Youth Weekend - Tandil',
};
const ANSWER: GmpMilestoneHost = {
  MilestoneType: 'accommodation-host',
  MilestoneTitle: 'Hosted Nights',
  HostId: '770009',
  Status: { Success: true, ErrorMessage: '' },
};

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (inputs: MilestoneDetailInputs = INPUTS) =>
  renderHook(() => useMilestoneWrapper(inputs), { wrapper });
const settle = () => act(() => Promise.resolve());
/** The inputs of the accommodation host block, null for another body. */
const hostInputs = (body: MilestoneWrapperBody) => (body.kind === 'accommodationHost' ? body.inputs : null);

/** GetGmpMilestoneHost answers or fails only when the test says so. */
function pendingCall() {
  let resolve: (value: GmpMilestoneHost) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchGmpMilestoneHost).mockReturnValue(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return {
    resolve: (value: GmpMilestoneHost) => {
      resolve(value);
    },
    reject: (error: unknown) => {
      reject(error);
    },
  };
}

beforeEach(() => {
  resetViewCache();
  vi.mocked(fetchGmpMilestoneHost).mockResolvedValue(ANSWER);
  // The flow reads only MemberId of the cached user information.
  vi.mocked(appManager_GetCachedUserInfo).mockReturnValue({ MemberId: '880101' } as ReturnType<
    typeof appManager_GetCachedUserInfo
  >);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useMilestoneWrapper', () => {
  it('from a notification: the skeleton until GetGmpMilestoneHost answers, then the block of the answer', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    expect(result.current.body).toEqual({ kind: 'skeleton' });
    call.resolve(ANSWER);
    await settle();
    expect(hostInputs(result.current.body)).toEqual(
      expect.objectContaining({ In_HostId: '770009', In_PreloadMilestoneName: 'Hosted Nights' }),
    );
  });

  it('sends the screen inputs, IsFetchingData True and the cached member id', async () => {
    renderFlows();
    await settle();
    expect(fetchGmpMilestoneHost).toHaveBeenCalledTimes(1);
    expect(fetchGmpMilestoneHost).toHaveBeenCalledWith({
      UserMemberId: '880101',
      IsFetchingData: true,
      In_FromNotification: true,
      In_MilestoneId: '5501-1',
      In_EventId: '5501',
      In_HostId: '0',
      In_OrbitMilestoneTypeId: '',
      In_MilestoneName: 'Accommodation',
      In_EventName: 'Spring Youth Weekend - Tandil',
    });
  });

  it('does not call when not from a notification with every optional input set', async () => {
    const { result } = renderFlows({
      ...INPUTS,
      In_FromNotification: false,
      In_HostId: '770001',
      In_OrbitMilestoneTypeId: 'accommodation-host',
    });
    await settle();
    expect(fetchGmpMilestoneHost).not.toHaveBeenCalled();
    expect(result.current.body).toEqual(expect.objectContaining({ kind: 'accommodationHost' }));
  });

  it('calls when not from a notification and an optional input is missing, and keeps the screen inputs', async () => {
    const { result } = renderFlows({
      ...INPUTS,
      In_FromNotification: false,
      In_OrbitMilestoneTypeId: 'accommodation-host',
    });
    await settle();
    expect(fetchGmpMilestoneHost).toHaveBeenCalledTimes(1);
    expect(hostInputs(result.current.body)).toEqual(
      expect.objectContaining({ In_HostId: '0', In_PreloadMilestoneName: 'Accommodation' }),
    );
  });

  it('does nothing on a view that the view cache restored', async () => {
    vi.mocked(useWasRestoredFromCache).mockReturnValue(true);
    renderFlows();
    await settle();
    expect(fetchGmpMilestoneHost).not.toHaveBeenCalled();
    vi.mocked(useWasRestoredFromCache).mockReturnValue(false);
  });

  it('shows the Failed layout when the answer has no Success', async () => {
    vi.mocked(fetchGmpMilestoneHost).mockResolvedValue({ ...ANSWER, Status: { Success: false, ErrorMessage: '' } });
    const { result } = renderFlows();
    await settle();
    expect(result.current.body).toEqual({ kind: 'failed' });
  });

  it('sends a failure to the flow handler and keeps the skeleton', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    const error = new Error('Request failed with status 500');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.body).toEqual({ kind: 'skeleton' });
  });
});

describe('useMilestoneWrapper after an unmount and in StrictMode (decision W23)', () => {
  it('makes the call once and writes no state when the answer comes after the unmount', async () => {
    const call = pendingCall();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(milestoneWrapperReducer).mockClear();
    call.resolve(ANSWER);
    await settle();
    expect(fetchGmpMilestoneHost).toHaveBeenCalledTimes(1);
    expect(milestoneWrapperReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('sends a failure after the unmount to the flow handler, as the old port', async () => {
    const call = pendingCall();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(milestoneWrapperReducer).mockClear();
    const error = new Error('Request failed with status 500');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(milestoneWrapperReducer).not.toHaveBeenCalled();
  });

  it('makes the call once in StrictMode and still writes the state', async () => {
    const latest: { current: MilestoneWrapperFlows | null } = { current: null };
    function Probe() {
      latest.current = useMilestoneWrapper(INPUTS);
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
    expect(fetchGmpMilestoneHost).toHaveBeenCalledTimes(1);
    expect(latest.current?.body).toEqual(expect.objectContaining({ kind: 'accommodationHost' }));
  });
});
