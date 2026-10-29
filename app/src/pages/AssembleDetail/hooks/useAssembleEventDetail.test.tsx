import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchAssembleEvent, type AssembleEventResult } from '@/api/event';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { showUnknownErrorMessage } from '@/pages/AssembleDetail/components/actions';
import { assembleEventDetailReducer } from './assembleEventDetailState';
import { useAssembleEventDetail, type AssembleEventDetailEvents } from './useAssembleEventDetail';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./assembleEventDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./assembleEventDetailState')>();
  return { ...actual, assembleEventDetailReducer: vi.fn(actual.assembleEventDetailReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchAssembleEvent: vi.fn(),
}));
vi.mock('@/pages/AssembleDetail/components/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/pages/AssembleDetail/components/actions')>()),
  getIANATimezone: () => 'America/Argentina/Buenos_Aires',
  showUnknownErrorMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of AssembleEventDetail with GetAssembleEvent, the service interruption message and the flow handler
   replaced by spies. The meeting is fictional. */
const INPUTS = { SeriesId: '1210-series-3', EventId: '1210-20260920-3', Start: '2026-09-20T18:00:00' };
const meeting = (summary: Partial<AssembleEventResult['AssembleEvent']['AssembleEventSummary']> = {}) =>
  ({
    IsNotFound: false,
    AssembleEvent: {
      AssembleEventSummary: {
        EventId: INPUTS.EventId,
        DateTime: '2026-09-20T18:00:00',
        Notes: '',
        AssembleEventType: { Title: 'Gospel Preaching' },
        ...summary,
      },
      AssembleAttendeeSubdivisionList: [],
      AssembleSpecialAttendeeSubdivisionList: [],
      AssembleAttendeeSpecialGuestList: [],
      GSMContactList: ['880101'],
    },
  }) satisfies AssembleEventResult;

/** An answer or a failure that the test gives later. */
function pending() {
  let resolve: (value: AssembleEventResult) => void = () => undefined;
  let reject: (error: Error) => void = () => undefined;
  vi.mocked(fetchAssembleEvent).mockReturnValueOnce(
    new Promise<AssembleEventResult>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return {
    resolve: (value: AssembleEventResult) => {
      resolve(value);
    },
    reject: (error: Error) => {
      reject(error);
    },
  };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

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

let events: AssembleEventDetailEvents;
const renderFlows = (strict = false) =>
  renderHook(() => useAssembleEventDetail('b2-$b4', INPUTS, events), { wrapper: strict ? strictWrapper : wrapper });

beforeEach(() => {
  events = { onUpdateTitle: vi.fn() };
  vi.mocked(fetchAssembleEvent).mockResolvedValue(meeting());
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleEventDetail', () => {
  it('OnReady: GetAssembleEvent with the inputs, DeviceTimezone and IsDataFetched; then UpdateTitle and fetched', async () => {
    const answer = pending();
    const { result } = renderFlows();
    expect(result.current).toEqual({
      deviceTimezone: 'America/Argentina/Buenos_Aires',
      isDataFetched: false,
      getAssembleEvent: null,
    });
    await settle();
    expect(fetchAssembleEvent).toHaveBeenCalledWith({
      ...INPUTS,
      DeviceTimezone: 'America/Argentina/Buenos_Aires',
      IsDataFetched: false,
    });
    answer.resolve(meeting());
    await settle();
    expect(result.current.isDataFetched).toBe(true);
    expect(result.current.getAssembleEvent).toEqual(meeting());
    expect(events.onUpdateTitle).toHaveBeenCalledWith('Gospel Preaching');
    expect(showUnknownErrorMessage).not.toHaveBeenCalled();
  });

  it('the null DateTime takes the Start input', async () => {
    vi.mocked(fetchAssembleEvent).mockResolvedValueOnce(meeting({ DateTime: '' }));
    const { result } = renderFlows();
    await settle();
    expect(result.current.getAssembleEvent?.AssembleEvent.AssembleEventSummary.DateTime).toBe(INPUTS.Start);
  });

  it('an IsUnavailable meeting: kept, the service interruption message, no title and not fetched', async () => {
    vi.mocked(fetchAssembleEvent).mockResolvedValueOnce(meeting({ IsUnavailable: true }));
    const { result } = renderFlows();
    await settle();
    expect(result.current.getAssembleEvent?.AssembleEvent.AssembleEventSummary.IsUnavailable).toBe(true);
    expect(result.current.isDataFetched).toBe(false);
    expect(showUnknownErrorMessage).toHaveBeenCalledTimes(1);
    expect(events.onUpdateTitle).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady runs once', async () => {
    const { result } = renderFlows(true);
    await settle();
    expect(fetchAssembleEvent).toHaveBeenCalledTimes(1);
    expect(events.onUpdateTitle).toHaveBeenCalledTimes(1);
    expect(result.current.isDataFetched).toBe(true);
  });

  it('a failed GetAssembleEvent goes to the flow handler; the skeleton stays', async () => {
    const error = new Error('Request failed with status 500');
    vi.mocked(fetchAssembleEvent).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([raised]) => raised)).toEqual([error]);
    expect(result.current.getAssembleEvent).toBeNull();
  });

  it('R1: unmount while GetAssembleEvent is pending: an unavailable meeting shows no message and writes no state', async () => {
    const answer = pending();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useAssembleEventDetail('b2-$b4', INPUTS, events);
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(assembleEventDetailReducer).mockClear();
    answer.resolve(meeting({ IsUnavailable: true }));
    await settle();
    expect(fetchAssembleEvent).toHaveBeenCalledTimes(1);
    // GetAssembleEvent_OnAfterFetch holds the message (AssembleEventDetail.js:933-934); it does not run (R1).
    expect(showUnknownErrorMessage).not.toHaveBeenCalled();
    expect(assembleEventDetailReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetAssembleEvent is pending: a meeting raises no UpdateTitle and writes no state', async () => {
    const answer = pending();
    const { unmount } = renderFlows(true);
    await settle();
    unmount();
    vi.mocked(assembleEventDetailReducer).mockClear();
    answer.resolve(meeting());
    await settle();
    expect(events.onUpdateTitle).not.toHaveBeenCalled();
    expect(assembleEventDetailReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while GetAssembleEvent is pending: its failure reaches no handler and writes no state', async () => {
    const answer = pending();
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(assembleEventDetailReducer).mockClear();
    answer.reject(new Error('Request failed with status 500'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(assembleEventDetailReducer).not.toHaveBeenCalled();
    expect(showUnknownErrorMessage).not.toHaveBeenCalled();
  });
});
