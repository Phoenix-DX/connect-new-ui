import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchLocalityHouseholdIds, type PhotobookHousehold } from '@/api/household';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import type { PhotobookInputs } from '@/pages/Photobook/inputs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { resetViewCache } from '@/platform/navigation/viewCache';
import { photobookReducer } from './photobookState';
import { usePhotobook, type PhotobookFlows } from './usePhotobook';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./photobookState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./photobookState')>();
  return { ...actual, photobookReducer: vi.fn(actual.photobookReducer) };
});
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchLocalityHouseholdIds: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the Photobook screen, with the call and the flow handler replaced by spies. Fictional households. */
const inputs: PhotobookInputs = { In_HouseholdId: '7002', In_LocalityId: '252' };
const households: PhotobookHousehold[] = [
  { householdId: '7001', householdName: 'Ada & Tom Marlowe', locality: 'Nelson' },
  { householdId: '7002', householdName: 'Ben Harlow', locality: 'Nelson' },
];

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = () => renderHook(() => usePhotobook(inputs), { wrapper });
/** Lets the pending promises of the flows settle. */
const settle = () => act(() => Promise.resolve());

/** GetLocalityHouseholdIds answers or fails only when the test says so. */
function pendingCall() {
  let resolve: (value: PhotobookHousehold[]) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchLocalityHouseholdIds).mockReturnValue(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return {
    resolve: (value: PhotobookHousehold[]) => {
      resolve(value);
    },
    reject: (error: unknown) => {
      reject(error);
    },
  };
}

beforeEach(() => {
  resetViewCache();
  vi.mocked(fetchLocalityHouseholdIds).mockResolvedValue(households);
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('usePhotobook', () => {
  it('loads until GetLocalityHouseholdIds answers, then selects the position of In_HouseholdId', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    expect(result.current).toEqual({
      isLoading: true,
      households: null,
      selectedHousehold: { id: '7002', position: 0 },
    });
    call.resolve(households);
    await settle();
    expect(result.current).toEqual({ isLoading: false, households, selectedHousehold: { id: '7002', position: 1 } });
  });

  it('sends the screen inputs and the screen variables of OnInitialize', async () => {
    renderFlows();
    await settle();
    expect(fetchLocalityHouseholdIds).toHaveBeenCalledTimes(1);
    expect(fetchLocalityHouseholdIds).toHaveBeenCalledWith({
      inHouseholdId: '7002',
      inLocalityId: '252',
      isLoading: true,
      selectedHousehold: { id: '7002', position: 0 },
    });
  });

  it('sends a failure to the flow handler and keeps loading', async () => {
    const call = pendingCall();
    const { result } = renderFlows();
    const error = new Error('Request failed with status 500');
    call.reject(error);
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.households).toBeNull();
  });
});

/** The errors that reached the flow handler, without the ignorable stop of a disposed screen. */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof ControllerDisposedException));

/* Flow scope (item 8): GetLocalityHouseholdIds is a data action (R1, Photobook.js:379). When the screen is disposed at
   the answer, the answer and the failure are dropped, and its OnAfterFetch (:542) does not run. */
describe('usePhotobook after an unmount and in StrictMode (flow scope, item 8)', () => {
  it('unmount while GetLocalityHouseholdIds is pending, the call answers: one call, no state write, no raise', async () => {
    const call = pendingCall();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(photobookReducer).mockClear();
    call.resolve(households);
    await settle();
    expect(fetchLocalityHouseholdIds).toHaveBeenCalledTimes(1);
    expect(photobookReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while GetLocalityHouseholdIds is pending, the call fails: no state write, no raise', async () => {
    const call = pendingCall();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(photobookReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(photobookReducer).not.toHaveBeenCalled();
  });

  it('makes the call once in StrictMode and still writes the state', async () => {
    const latest: { current: PhotobookFlows | null } = { current: null };
    function Probe() {
      latest.current = usePhotobook(inputs);
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
    expect(fetchLocalityHouseholdIds).toHaveBeenCalledTimes(1);
    expect(latest.current).toEqual({ isLoading: false, households, selectedHousehold: { id: '7002', position: 1 } });
  });
});
