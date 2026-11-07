import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchOneSchoolCards, type OneSchoolCard } from '@/api/locality';
import { ControllerDisposedException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { localityOneSchoolGlobalReducer } from './localityBlocksState';
import { useLocalityOneSchoolGlobal } from './useLocalityOneSchoolGlobal';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./localityBlocksState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./localityBlocksState')>();
  return { ...actual, localityOneSchoolGlobalReducer: vi.fn(actual.localityOneSchoolGlobalReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchOneSchoolCards: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* Flow scope (item 8) of Locality_OneSchoolGlobal: Get_OneSchoolGlobal_List is a data action (R1,
   Locality_OneSchoolGlobal.js:338). When the block is disposed at the answer, the answer and the failure are dropped.
   Fictional campuses of locality 252; a full page is 20 cards (GetOneSchoolGlobal_List_Offset). */
const TOWNS = ['Bahia Blanca', 'Tandil', 'Neuquen', 'Rosario', 'Mendoza'];
const card = (i: number): OneSchoolCard => {
  const town = TOWNS[i % TOWNS.length] ?? 'Bahia Blanca';
  return {
    communityBusinessId: String(1430 + i),
    signedURL: '/mock-images/placeholder-landscape.svg',
    name: `OneSchool ${town} ${i < TOWNS.length ? 'Campus' : `Campus ${Math.floor(i / TOWNS.length) + 1}`}`,
    localityName: town,
    localityId: String(250 + (i % TOWNS.length)),
    countryName: 'Argentina',
    countryCode: 'AR',
    phone: `+54 291 455 ${String(1000 + i)}`,
    email: `office.${town.toLowerCase().replace(' ', '')}@campus.example.org`,
  };
};
const FULL_PAGE = Array.from({ length: 20 }, (_, i) => card(i));

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderBlock = () =>
  renderHook(
    () =>
      useLocalityOneSchoolGlobal({
        localityId: '252',
        localityTimezoneData: { TimezoneName: 'America/Argentina/Buenos_Aires', TimezoneOffset: '-10800' },
      }),
    { wrapper },
  );
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
  vi.mocked(fetchOneSchoolCards).mockResolvedValue(FULL_PAGE);
});

describe('useLocalityOneSchoolGlobal OnReady (flow scope, item 8)', () => {
  it('unmount while Get_OneSchoolGlobal_List is pending, the call answers: no state write, no raise', async () => {
    const call = pending<OneSchoolCard[]>();
    vi.mocked(fetchOneSchoolCards).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localityOneSchoolGlobalReducer).mockClear();
    call.resolve(FULL_PAGE);
    await settle();
    expect(localityOneSchoolGlobalReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('unmount while Get_OneSchoolGlobal_List is pending, the call fails: no state write, no raise', async () => {
    const call = pending<OneSchoolCard[]>();
    vi.mocked(fetchOneSchoolCards).mockReturnValue(call.promise);
    const { unmount } = renderBlock();
    await settle();
    unmount();
    vi.mocked(localityOneSchoolGlobalReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(localityOneSchoolGlobalReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});

describe('useLocalityOneSchoolGlobal Handler_OnScrollEnding (flow scope, item 8)', () => {
  it('a full page: the next page; a failure while the block is there goes to the flow handler with the flow scope', async () => {
    const { result } = renderBlock();
    await settle();
    expect(result.current.isLoading).toBe(false);
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchOneSchoolCards).mockRejectedValue(error);
    await act(() => result.current.onScrollEnding());
    expect(fetchOneSchoolCards).toHaveBeenCalledTimes(2);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });

  it('unmount while the next page is pending, the call fails: the list is released, no raise', async () => {
    const { result, unmount } = renderBlock();
    await settle();
    const call = pending<OneSchoolCard[]>();
    vi.mocked(fetchOneSchoolCards).mockReturnValue(call.promise);
    let released = false;
    void result.current.onScrollEnding().then(() => {
      released = true;
    });
    unmount();
    vi.mocked(localityOneSchoolGlobalReducer).mockClear();
    call.reject(new Error('Request failed with status 500'));
    await settle();
    expect(released).toBe(true);
    expect(localityOneSchoolGlobalReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});
