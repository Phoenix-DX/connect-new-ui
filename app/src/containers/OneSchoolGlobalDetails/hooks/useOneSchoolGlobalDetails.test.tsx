import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { OneSchoolGlobalDetails } from '@/api/locality';
import { fetchOneSchoolGlobalDetails } from '@/api/locality/repository';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
  oneSchoolGlobalDetailsCallInputs,
  oneSchoolGlobalDetailsReducer,
  type OneSchoolGlobalDetailsState,
} from './oneSchoolGlobalDetailsState';
import { useOneSchoolGlobalDetails, type OneSchoolGlobalDetailsFlows } from './useOneSchoolGlobalDetails';
import { testQueryClient } from '@/platform/navigation/testRouter';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./oneSchoolGlobalDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./oneSchoolGlobalDetailsState')>();
  return { ...actual, oneSchoolGlobalDetailsReducer: vi.fn(actual.oneSchoolGlobalDetailsReducer) };
});
/** The call of the query (useOneSchoolGlobalDetailsQuery of api/locality calls the repository function). */
vi.mock('@/api/locality/repository', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality/repository')>()),
  fetchOneSchoolGlobalDetails: vi.fn(),
}));
// The flow handler itself: the hook and the query-cache subscription (flowErrors.ts) both call it.
vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), with the saved variables. */
const viewCache = vi.hoisted((): { restored: boolean; saved: unknown } => ({ restored: false, saved: undefined }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(name: string, initial: T) => {
      const saved = viewCache.saved as T | undefined;
      return actual.useViewState(name, saved ?? initial);
    },
  };
});

/* The variables and the data action of OneSchoolGlobalDetails, with the call and the flow handler replaced by spies.
   Fictional school. */
const INPUTS = { In_OneSchoolGlobalId: '1430' };
const DETAILS: OneSchoolGlobalDetails = {
  card: {
    communityBusinessId: '1430',
    signedURL: '/mock-images/placeholder-landscape.svg',
    name: 'OneSchool Alem',
    address: '1240 Avenida Colon, Bahia Blanca',
    areasServed: 'Bahia Blanca, Tandil',
    businessLinks: [{ text: 'Campus website', link: 'https://campus.example.org', id: '7' }],
  },
  householdCoordinates: { Latitude: '-38.72', Longitude: '-62.27', UseCoordinates: true },
};

/** A new QueryClient per test, with the app's defaults (no retry). */
let client: QueryClient;
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={client}>
    <MemoryRouter>{children}</MemoryRouter>
  </QueryClientProvider>
);
const renderFlows = () => renderHook(() => useOneSchoolGlobalDetails(INPUTS), { wrapper });
/** The hook as the dev server renders it: StrictMode runs the mount effects twice. Returns the newest result. */
function renderStrict() {
  const latestResult: { current: OneSchoolGlobalDetailsFlows | null } = { current: null };
  function Probe() {
    latestResult.current = useOneSchoolGlobalDetails(INPUTS);
    return null;
  }
  render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <MemoryRouter>
          <Probe />
        </MemoryRouter>
      </QueryClientProvider>
    </StrictMode>,
  );
  return latestResult;
}
/** Lets the calls that started finish and the effects run (the query notifies its observers in a later task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 20)));
/** GetOneSchoolGlobalDetails answers only when the test resolves or rejects it. */
function pending() {
  const call: { resolve: (value: OneSchoolGlobalDetails) => void; reject: (error: Error) => void } = {
    resolve: () => undefined,
    reject: () => undefined,
  };
  vi.mocked(fetchOneSchoolGlobalDetails).mockReturnValue(
    new Promise((resolve, reject) => {
      call.resolve = resolve;
      call.reject = reject;
    }),
  );
  return call;
}

beforeEach(() => {
  vi.clearAllMocks();
  client = testQueryClient();
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchOneSchoolGlobalDetails).mockResolvedValue(DETAILS);
});

describe('useOneSchoolGlobalDetails: OnReady and the data action', () => {
  it('starts from the OnReady values with the skeleton, then keeps the answer, with one call', async () => {
    const call = pending();
    const { result } = renderFlows();
    expect(result.current.state).toEqual(INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE);
    expect(result.current.details).toBeNull();
    expect(result.current.hasFetchError).toBe(false);
    call.resolve(DETAILS);
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledWith(
      oneSchoolGlobalDetailsCallInputs(INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE, INPUTS),
    );
    expect(result.current.details).toEqual(DETAILS);
    expect(result.current.state.GetOneSchoolGlobalDetails).toEqual(DETAILS);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('keeps the skeleton and raises a failed fetch to the flow handler once', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchOneSchoolGlobalDetails).mockRejectedValue(error);
    const { result } = renderFlows();
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(result.current.details).toBeNull();
    expect(result.current.hasFetchError).toBe(true);
    expect(result.current.state.GetOneSchoolGlobalDetails).toBeNull();
  });

  it('keeps the school of a view that the view cache restored with its data, without a call', async () => {
    const saved: OneSchoolGlobalDetailsState = {
      ...INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
      Selected_OneschoolGlobal_SubsectionId: 'About our campus',
      GetOneSchoolGlobalDetails: DETAILS,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    await settle();
    expect(fetchOneSchoolGlobalDetails).not.toHaveBeenCalled();
    expect(result.current.state).toEqual(saved);
    expect(result.current.details).toEqual(DETAILS);
    expect(result.current.hasFetchError).toBe(false);
  });

  it('refreshes a restored view without data, with the restored variables', async () => {
    const saved: OneSchoolGlobalDetailsState = {
      ...INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
      Selected_OneschoolGlobal_SubsectionId: 'About our campus',
      LocalIsBookmarked: true,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderFlows();
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledWith(oneSchoolGlobalDetailsCallInputs(saved, INPUTS));
    expect(result.current.details).toEqual(DETAILS);
  });
});

describe('useOneSchoolGlobalDetails: the button group and the actions menu', () => {
  it('sets the sub-section and the bookmark without a second call', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onSubsectionChange('About our campus');
    });
    act(() => {
      result.current.onChangeBookmark(true);
    });
    await settle();
    expect(result.current.state.Selected_OneschoolGlobal_SubsectionId).toBe('About our campus');
    expect(result.current.state.LocalIsBookmarked).toBe(true);
    expect(result.current.details).toEqual(DETAILS);
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
  });
});

/* Flow scope (item 8): DataActionGetOneSchoolGlobalDetails is a data action (R1, OneSchoolGlobalDetails_Block.js:1126).
   The query of api/locality drops the answer and the failure of an unmounted screen: the state write is an effect of
   the mounted hook, and the query-cache subscription skips a query without observers (flowErrors.ts). */
describe('useOneSchoolGlobalDetails after an unmount and in StrictMode (flow scope, item 8)', () => {
  it('unmount while the call is pending, the call answers: one call, no state write, no raise', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(oneSchoolGlobalDetailsReducer).mockClear();
    call.resolve(DETAILS);
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(oneSchoolGlobalDetailsReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('unmount while the call is pending, the call fails: no state write, no raise', async () => {
    const call = pending();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(oneSchoolGlobalDetailsReducer).mockClear();
    call.reject(new Error('Service Interruption'));
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
    expect(oneSchoolGlobalDetailsReducer).not.toHaveBeenCalled();
  });

  it('makes one call in StrictMode and still shows the school', async () => {
    const result = renderStrict();
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(result.current?.details).toEqual(DETAILS);
    expect(result.current?.state.GetOneSchoolGlobalDetails).toEqual(DETAILS);
  });

  it('raises a failure once in StrictMode', async () => {
    const error = new Error('Service Interruption');
    vi.mocked(fetchOneSchoolGlobalDetails).mockRejectedValue(error);
    const result = renderStrict();
    await settle();
    expect(fetchOneSchoolGlobalDetails).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(result.current?.hasFetchError).toBe(true);
  });
});
