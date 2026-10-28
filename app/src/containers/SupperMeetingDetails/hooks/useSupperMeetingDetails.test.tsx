import { act, renderHook, waitFor } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchSubdivisionDetails,
  fetchSubdivisionHouseholds,
  type SubdivisionDetails,
  type SubdivisionHouseholdCard,
} from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { getPreloadObject } from '@/platform/navigation';
import { resetNavigation } from '@/platform/navigation/testRouter';
import { enterView, saveView } from '@/platform/navigation/viewCache';
import { INITIAL_SUPPER_MEETING_DETAILS_STATE, supperMeetingDetailsReducer } from './supperMeetingDetailsState';
import { useSupperMeetingDetails } from './useSupperMeetingDetails';

/* The flows of the supper meeting details, with both data actions, the reducer, the flow handler and the navigation
   replaced by spies. The supper meeting and its households are fictional (src/mocks/fictional/directory.ts). */
vi.mock('./supperMeetingDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./supperMeetingDetailsState')>();
  return { ...actual, supperMeetingDetailsReducer: vi.fn(actual.supperMeetingDetailsReducer) };
});
vi.mock('@/api/locality', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/locality')>()),
  fetchSubdivisionDetails: vi.fn(),
  fetchSubdivisionHouseholds: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
const { navigate } = vi.hoisted(() => ({ navigate: vi.fn() }));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

const SUBDIVISION: SubdivisionDetails = {
  Subdivision_Card: {
    SubdivisionId: '1210',
    Subdivision_Card_Content: { Name: 'Zapiola (Main Meeting Room)', Address: 'Zapiola 1450, Bahia Blanca' },
  },
};
const HOUSEHOLDS: SubdivisionHouseholdCard[] = [
  { HouseholdId: '42438', HouseholdName: 'Vitale', ChildrenNames: 'Sofia, Mateo' },
  { HouseholdId: '91004', HouseholdName: 'Ortiz', ChildrenNames: '' },
];
const CAROUSEL_ON = { hasCarouselEnabled: true };

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const strictWrapper = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <MemoryRouter>{children}</MemoryRouter>
  </StrictMode>
);
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** An answer that the test gives later. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve: (value: T) => {
      resolve(value);
    },
    reject: (error: unknown) => {
      reject(error);
    },
  };
}
/** Both data actions answer only when the test says so. */
function pendingAnswers() {
  const households = deferred<SubdivisionHouseholdCard[]>();
  const subdivision = deferred<SubdivisionDetails>();
  vi.mocked(fetchSubdivisionHouseholds).mockReturnValueOnce(households.promise);
  vi.mocked(fetchSubdivisionDetails).mockReturnValueOnce(subdivision.promise);
  return { households, subdivision };
}
/** The order in which the two data actions were called, by name. */
const callOrder = () =>
  [
    ...vi.mocked(fetchSubdivisionHouseholds).mock.invocationCallOrder.map((n) => [n, 'households'] as const),
    ...vi.mocked(fetchSubdivisionDetails).mock.invocationCallOrder.map((n) => [n, 'subdivision'] as const),
  ]
    .sort(([a], [b]) => a - b)
    .map(([, name]) => name);

/** The history entry of the memory router: the view cache keeps its saved view under this key. */
let entryKey = '';
/** The hook in the first entry of a memory router (the entry of a later back navigation). */
function renderInEntry() {
  return renderHook(
    () => {
      entryKey = useLocation().key;
      return useSupperMeetingDetails('1210', CAROUSEL_ON);
    },
    { wrapper },
  );
}
/** The user leaves the entry (the view cache saves the mounted view), then comes back to it by a back navigation. */
function leaveAndComeBack(view: { unmount: () => void }) {
  saveView(entryKey, undefined);
  view.unmount();
  enterView(entryKey, true, undefined);
}
/** Waits until both data actions answered (the supper meeting and its households are shown). */
async function waitForData(result: { current: ReturnType<typeof useSupperMeetingDetails> }) {
  await waitFor(() => {
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.households).toEqual({ isDataFetched: true, isError: false, list: HOUSEHOLDS });
  });
}
/** Runs the pending effects and the promises that they start (no timer). */
const flushEffects = () =>
  act(async () => {
    await Promise.resolve();
  });

beforeEach(() => {
  resetNavigation();
  vi.mocked(fetchSubdivisionDetails).mockResolvedValue(SUBDIVISION);
  vi.mocked(fetchSubdivisionHouseholds).mockResolvedValue(HOUSEHOLDS);
});
afterEach(() => {
  vi.clearAllMocks();
  resetNavigation();
});

describe('useSupperMeetingDetails', () => {
  it('OnReady: the skeletons first, then GetSubdivisionHouseholds and GetSubdivision with In_SubdivsionId', async () => {
    const { households, subdivision } = pendingAnswers();
    const { result } = renderHook(() => useSupperMeetingDetails('1210', CAROUSEL_ON), { wrapper });
    expect(result.current.state).toEqual(INITIAL_SUPPER_MEETING_DETAILS_STATE);
    expect(result.current.subdivisionId).toBe('1210');
    await settle();
    expect(callOrder()).toEqual(['households', 'subdivision']);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledWith('1210');
    expect(fetchSubdivisionDetails).toHaveBeenCalledWith('1210');

    subdivision.resolve(SUBDIVISION);
    await settle();
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.subdivision).toEqual(SUBDIVISION);
    expect(result.current.state.households.isDataFetched).toBe(false);

    households.resolve(HOUSEHOLDS);
    await settle();
    expect(result.current.state.households).toEqual({ isDataFetched: true, isError: false, list: HOUSEHOLDS });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a failed GetSubdivision keeps the skeleton; a failed GetSubdivisionHouseholds sets the Error status; each failure goes once to the flow handler (F1)', async () => {
    const subdivisionError = new Error('GetSubdivision down');
    const householdsError = new Error('GetSubdivisionHouseholds down');
    vi.mocked(fetchSubdivisionDetails).mockRejectedValueOnce(subdivisionError);
    vi.mocked(fetchSubdivisionHouseholds).mockRejectedValueOnce(householdsError);
    const { result } = renderHook(() => useSupperMeetingDetails('1210', CAROUSEL_ON), { wrapper });
    await settle();
    expect(result.current.state.isDataFetched).toBe(false);
    expect(result.current.state.subdivision).toEqual(INITIAL_SUPPER_MEETING_DETAILS_STATE.subdivision);
    expect(result.current.state.households).toEqual({
      isDataFetched: false,
      isError: true,
      list: INITIAL_SUPPER_MEETING_DETAILS_STATE.households.list,
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(2);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(householdsError);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(subdivisionError);
  });

  it('reads In_SubdivsionId once: a new input neither refetches nor changes the id', async () => {
    const { result, rerender } = renderHook(({ id }) => useSupperMeetingDetails(id, CAROUSEL_ON), {
      wrapper,
      initialProps: { id: '1210' },
    });
    await settle();
    rerender({ id: '9202' });
    await settle();
    expect(result.current.subdivisionId).toBe('1210');
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(1);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(1);
  });

  it('StrictMode: OnReady runs once and the data comes', async () => {
    const { result } = renderHook(() => useSupperMeetingDetails('1210', CAROUSEL_ON), { wrapper: strictWrapper });
    await settle();
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(1);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.households.list).toEqual(HOUSEHOLDS);
  });

  it('W23: after the unmount, the started flow makes its calls once and writes no state', async () => {
    const { households, subdivision } = pendingAnswers();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useSupperMeetingDetails('1210', CAROUSEL_ON);
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(supperMeetingDetailsReducer).mockClear();
    subdivision.resolve(SUBDIVISION);
    households.resolve(HOUSEHOLDS);
    await settle();
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(1);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(1);
    expect(supperMeetingDetailsReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('failures after the unmount write no state and raise nothing: TST shows no message for a block the user left (E9)', async () => {
    const { households, subdivision } = pendingAnswers();
    const { unmount } = renderHook(() => useSupperMeetingDetails('1210', CAROUSEL_ON), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(supperMeetingDetailsReducer).mockClear();
    subdivision.reject(new Error('down'));
    households.reject(new Error('down'));
    await settle();
    expect(supperMeetingDetailsReducer).not.toHaveBeenCalled();
    // probe_fetch_errors.cjs --late (migration/clarify/review/probe-fetch-errors-late.json): Back before the failure
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a back navigation to the restored view keeps the saved state and makes no call (no skeleton)', async () => {
    const first = renderInEntry();
    await waitForData(first.result);
    leaveAndComeBack(first);
    const { result } = renderInEntry();
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.subdivision).toEqual(SUBDIVISION);
    expect(result.current.state.households).toEqual({ isDataFetched: true, isError: false, list: HOUSEHOLDS });
    await flushEffects();
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(1);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(1);
  });

  it('a restored view without a saved state for the block calls both data actions, as a new visit', async () => {
    renderInEntry().unmount();
    // The entry is saved while the block is not mounted: its saved view has no state of the block.
    saveView(entryKey, undefined);
    enterView(entryKey, true, undefined);
    const { result } = renderInEntry();
    expect(result.current.state).toEqual(INITIAL_SUPPER_MEETING_DETAILS_STATE);
    await waitForData(result);
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(2);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(2);
  });

  it('a restored view saved before GetSubdivisionHouseholds answered refreshes the households only', async () => {
    const { subdivision } = pendingAnswers();
    const first = renderInEntry();
    subdivision.resolve(SUBDIVISION);
    await waitFor(() => {
      expect(first.result.current.state.isDataFetched).toBe(true);
    });
    leaveAndComeBack(first);
    const { result } = renderInEntry();
    expect(result.current.state.subdivision).toEqual(SUBDIVISION);
    expect(result.current.state.households.isDataFetched).toBe(false);
    await waitFor(() => {
      expect(result.current.state.households.list).toEqual(HOUSEHOLDS);
    });
    expect(fetchSubdivisionDetails).toHaveBeenCalledTimes(1);
    expect(fetchSubdivisionHouseholds).toHaveBeenCalledTimes(2);
  });

  it('OnClick_NavigateToHousehold with the carousel flag: every listed household preloaded, then HouseholdCarousel', async () => {
    const { result } = renderHook(() => useSupperMeetingDetails('1210', CAROUSEL_ON), { wrapper });
    await settle();
    result.current.onClickNavigateToHousehold('91004', ['42438', '91004']);
    expect(getPreloadObject()).toEqual({ CarouselHouseholdItem: [{ Household: '42438' }, { Household: '91004' }] });
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: '91004' });
  });

  it('OnClick_NavigateToHousehold without the carousel flag: HouseholdDetails, no preload object', async () => {
    const { result } = renderHook(() => useSupperMeetingDetails('1210', { hasCarouselEnabled: false }), { wrapper });
    await settle();
    result.current.onClickNavigateToHousehold('91004', ['42438', '91004']);
    expect(getPreloadObject()).toBeNull();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HouseholdDetails', { HouseholdId: '91004' });
  });
});
