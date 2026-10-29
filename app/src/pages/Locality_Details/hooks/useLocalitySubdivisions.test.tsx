import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchSubdivisionCards, type SubdivisionCard } from '@/api/locality';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { localitySubdivisionsReducer } from './localityBlocksState';
import { useLocalitySubdivisions } from './useLocalitySubdivisions';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./localityBlocksState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./localityBlocksState')>();
  return { ...actual, localitySubdivisionsReducer: vi.fn(actual.localitySubdivisionsReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchSubdivisionCards: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* Flow scope (item 8) of Locality_Subdivisions: Get_Subdivision_List is a data action (R1, Locality_Subdivisions.js:437).
   When the block is disposed at the answer, the answer and the failure are dropped. The block opens locality 252. */
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderBlock = () => renderHook(() => useLocalitySubdivisions('252', { hasCarouselEnabled: false }), { wrapper });
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
  vi.mocked(fetchSubdivisionCards).mockResolvedValue([]);
});

describe('useLocalitySubdivisions OnReady (flow scope, item 8)', () => {
  it('unmount while Get_Subdivision_List is pending, the call answers: no state write, no raise', async () => {
    const call = pending<SubdivisionCard[]>();
    vi.mocked(fetchSubdivisionCards).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localitySubdivisionsReducer).mockClear();
    call.resolve([]);
    await settle();
    expect(localitySubdivisionsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while Get_Subdivision_List is pending, the call fails: no state write, no raise', async () => {
    const call = pending<SubdivisionCard[]>();
    vi.mocked(fetchSubdivisionCards).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localitySubdivisionsReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(localitySubdivisionsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a failure while the block is there goes to the flow handler with the flow scope', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchSubdivisionCards).mockRejectedValue(error);
    renderBlock();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });

  it('OnScrollEnding_RefreshSubdivisions is a no-op: nothing sets IsPaginated', async () => {
    const { result } = renderBlock();
    await settle();
    await act(() => result.current.onScrollEnding());
    expect(fetchSubdivisionCards).toHaveBeenCalledTimes(1);
  });
});
