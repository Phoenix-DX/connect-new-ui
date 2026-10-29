import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchAssembleEventTypes,
  fetchAssembleMeetings,
  type AssembleEventFilter,
  type AssembleEventTypeItem,
  type AssembleMeeting,
} from '@/api/event';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { clearPreloadObject, getPreloadObject } from '@/platform/navigation/preload';
import { assembleSummaryListReducer, MAX_RECORDS } from './assembleSummaryListState';
import { useAssembleSummaryList, type AssembleSummaryListEvents } from './useAssembleSummaryList';
import { fetchUserSubdivision, type UserSubdivision } from './userSubdivision';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./assembleSummaryListState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./assembleSummaryListState')>();
  return { ...actual, assembleSummaryListReducer: vi.fn(actual.assembleSummaryListReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchAssembleEventTypes: vi.fn(),
  fetchAssembleMeetings: vi.fn(),
}));
vi.mock('./userSubdivision', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./userSubdivision')>()),
  fetchUserSubdivision: vi.fn(),
}));
/* useFlowState and the event flows send a rejection to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of AssembleSummary_List, with the data actions, the cached user and the flow handler replaced by spies.
   The supper meetings, meeting types and meetings are fictional. */
const USER_HALL: UserSubdivision = { id: '1210', name: 'Zapiola (Main Meeting Room)' };
const TYPES: AssembleEventTypeItem[] = [
  { Id: 'lords-supper', Title: "Lord's Supper" },
  { Id: 'prayer', Title: 'Prayer Meeting' },
];
const meeting = (i: number, extra: Partial<AssembleMeeting> = {}): AssembleMeeting => ({
  EventId: `1210-202611${String(10 + i)}-prayer`,
  SeriesId: '1210-series-prayer',
  DateTime: `2026-11-${String(10 + i)}T19:30:00`,
  IsUnavailable: false,
  ...extra,
});
const page = (n: number, from = 0) => Array.from({ length: n }, (_, i) => meeting(from + i));

/** An answer that the test gives later. */
function pending<T>(mock: { mockReturnValueOnce: (value: Promise<T>) => unknown }) {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  mock.mockReturnValueOnce(
    new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}

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
const queries = () => vi.mocked(fetchAssembleMeetings).mock.calls.map(([query]) => query);
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1, R3). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));
const callOrder = () =>
  [
    ...vi.mocked(fetchAssembleEventTypes).mock.invocationCallOrder.map((n) => [n, 'types'] as const),
    ...vi.mocked(fetchAssembleMeetings).mock.invocationCallOrder.map((n) => [n, 'meetings'] as const),
  ]
    .sort(([a], [b]) => a - b)
    .map(([, name]) => name);

let events: AssembleSummaryListEvents;
const renderFlows = (subdivisionId = '0', strict = false) =>
  renderHook(() => useAssembleSummaryList({ subdivisionId }, events), { wrapper: strict ? strictWrapper : wrapper });

beforeEach(() => {
  events = { onNavigateToAssembleDetail: vi.fn() };
  vi.mocked(fetchUserSubdivision).mockResolvedValue(USER_HALL);
  vi.mocked(fetchAssembleEventTypes).mockResolvedValue(TYPES);
  vi.mocked(fetchAssembleMeetings).mockResolvedValue(page(MAX_RECORDS));
  clearPreloadObject();
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAssembleSummaryList', () => {
  it("OnReady: the user's supper meeting, then the meeting types and the first page of upcoming meetings", async () => {
    const { result } = renderFlows();
    expect(result.current).toMatchObject({ isSummaryFetched: false, isHeaderLoading: true, eventList: [] });
    await settle();
    expect(fetchUserSubdivision).toHaveBeenCalledTimes(1);
    expect(callOrder()).toEqual(['types', 'meetings']);
    expect(queries()[0]).toMatchObject({
      SubdivisionId: '0',
      LocalSubdivisionId: '1210',
      EventList_PageNumber: 1,
      MaxRecords: MAX_RECORDS,
      EventList_Filter: { AssembleFilterTimeOptionId: 'Upcoming Meetings', AssembleEventType: [] },
    });
    expect(result.current).toMatchObject({
      eventList: page(MAX_RECORDS),
      isSummaryFetched: true,
      isHeaderLoading: false,
      filterLabel: 'All Meeting Types',
      listHeaderLabel: 'From November 2026',
      isFiltered: false,
    });
    expect(result.current.filter.AssembleEventType).toEqual(
      TYPES.map((t) => ({ AssembleEventType: t, IsSelected: false })),
    );
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('another supper meeting: no user information; LocalSubdivisionId is the SubdivisionId', async () => {
    renderFlows('9202');
    await settle();
    expect(fetchUserSubdivision).not.toHaveBeenCalled();
    expect(queries()[0]).toMatchObject({ SubdivisionId: '9202', LocalSubdivisionId: '9202' });
  });

  it('StrictMode: OnReady runs once and the meetings come', async () => {
    const { result } = renderFlows('0', true);
    await settle();
    expect(fetchUserSubdivision).toHaveBeenCalledTimes(1);
    expect(fetchAssembleEventTypes).toHaveBeenCalledTimes(1);
    expect(fetchAssembleMeetings).toHaveBeenCalledTimes(1);
    expect(result.current.eventList).toHaveLength(MAX_RECORDS);
  });

  it('R3: unmount while OnReady waits for the user: neither refresh starts; no state write, no raise', async () => {
    const userHall = pending<UserSubdivision>(vi.mocked(fetchUserSubdivision));
    const { unmount } = renderFlows();
    await settle();
    unmount();
    vi.mocked(assembleSummaryListReducer).mockClear();
    userHall.resolve(USER_HALL);
    await settle();
    expect(fetchAssembleEventTypes).not.toHaveBeenCalled();
    expect(fetchAssembleMeetings).not.toHaveBeenCalled();
    expect(assembleSummaryListReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while both data actions are pending: their answers write no state and raise nothing', async () => {
    const types = pending<AssembleEventTypeItem[]>(vi.mocked(fetchAssembleEventTypes));
    const meetings = pending<AssembleMeeting[]>(vi.mocked(fetchAssembleMeetings));
    const { unmount } = renderFlows('9202');
    await settle();
    unmount();
    vi.mocked(assembleSummaryListReducer).mockClear();
    types.resolve(TYPES);
    meetings.resolve(page(MAX_RECORDS));
    await settle();
    expect(assembleSummaryListReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while both data actions are pending: their failures reach no handler and write no state', async () => {
    const types = pending<AssembleEventTypeItem[]>(vi.mocked(fetchAssembleEventTypes));
    const meetings = pending<AssembleMeeting[]>(vi.mocked(fetchAssembleMeetings));
    const { unmount } = renderFlows('9202');
    await settle();
    unmount();
    vi.mocked(assembleSummaryListReducer).mockClear();
    types.reject(new Error('types'));
    meetings.reject(new Error('meetings'));
    await settle();
    expect(assembleSummaryListReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while the next page loads: its failure reaches no handler', async () => {
    const { result, unmount } = renderFlows();
    await settle();
    const next = pending<AssembleMeeting[]>(vi.mocked(fetchAssembleMeetings));
    act(() => {
      result.current.onScrollEnding();
    });
    unmount();
    next.reject(new Error('Service Interruption'));
    await settle();
    expect(queries()).toHaveLength(2);
    expect(raisedErrors()).toEqual([]);
  });

  it('a failed call goes to the flow handler: the meeting types, then the meetings (the skeleton stays)', async () => {
    const typesError = new Error('types');
    const meetingsError = new Error('meetings');
    vi.mocked(fetchAssembleEventTypes).mockRejectedValueOnce(typesError);
    vi.mocked(fetchAssembleMeetings).mockRejectedValueOnce(meetingsError);
    const { result } = renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls.map(([e]) => e)).toEqual([typesError, meetingsError]);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(meetingsError, expect.anything());
    expect(result.current).toMatchObject({ isSummaryFetched: false, isHeaderLoading: true });
    expect(result.current.filter.AssembleEventType).toEqual([]);
  });

  it('a time tag: Refresh_EventList with the time option (list emptied, page 1, the content at the top)', async () => {
    const content = document.createElement('div');
    content.className = 'content';
    document.body.appendChild(content);
    content.scrollTop = 300;
    const { result } = renderFlows();
    await settle();
    const past = pending<AssembleMeeting[]>(vi.mocked(fetchAssembleMeetings));
    act(() => {
      result.current.onClickTag('Past Meetings');
    });
    expect(content.scrollTop).toBe(0);
    expect(result.current).toMatchObject({ eventList: [], isSummaryFetched: false });
    expect(result.current.filter.AssembleFilterTimeOptionId).toBe('Past Meetings');
    expect(queries()[1]).toMatchObject({
      EventList_PageNumber: 1,
      LocalSubdivisionId: '1210',
      EventList_Filter: { AssembleFilterTimeOptionId: 'Past Meetings' },
    });
    past.resolve([meeting(1)]);
    await settle();
    expect(result.current).toMatchObject({ eventList: [meeting(1)], listHeaderLabel: 'Since November 2026' });
    content.remove();
  });

  it('the drawer: toggle; Apply with a type closes it and filters; Clear unselects every type', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onToggleFilterDrawer();
    });
    expect(result.current.isShowFilterDrawer).toBe(true);
    const filter: AssembleEventFilter = {
      ...result.current.filter,
      AssembleEventType: result.current.filter.AssembleEventType.map((t, i) => ({ ...t, IsSelected: i === 1 })),
    };
    act(() => {
      result.current.onApplyFilters(filter);
    });
    await settle();
    expect(result.current).toMatchObject({
      isShowFilterDrawer: false,
      isFiltered: true,
      filterLabel: 'Meeting Types (1)',
      filter,
    });
    expect(queries()[1]?.EventList_Filter).toEqual(filter);
    act(() => {
      result.current.onClearFilters();
    });
    await settle();
    expect(result.current).toMatchObject({ isFiltered: false, filterLabel: 'All Meeting Types' });
    expect(result.current.filter.AssembleEventType.some((t) => t.IsSelected)).toBe(false);
    expect(queries()).toHaveLength(3);
  });

  it('OnScrollEnding: the next page after a full page, appended; nothing after a short page', async () => {
    const { result } = renderFlows();
    await settle();
    vi.mocked(fetchAssembleMeetings).mockResolvedValueOnce(page(3, MAX_RECORDS));
    act(() => {
      result.current.onScrollEnding();
    });
    // While the page loads, OnScrollEnding does nothing.
    act(() => {
      result.current.onScrollEnding();
    });
    await settle();
    expect(queries()).toHaveLength(2);
    expect(queries()[1]?.EventList_PageNumber).toBe(2);
    expect(result.current.eventList).toHaveLength(MAX_RECORDS + 3);
    act(() => {
      result.current.onScrollEnding();
    });
    await settle();
    expect(queries()).toHaveLength(2);
  });

  it('a card: nothing for an unavailable meeting; else the preload object, then NavigateTo_AssembleDetail', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onClickMeeting(meeting(4, { IsUnavailable: true }), 4);
    });
    expect(events.onNavigateToAssembleDetail).not.toHaveBeenCalled();
    expect(getPreloadObject()).toBeNull();
    act(() => {
      result.current.onClickMeeting(meeting(2), 2);
    });
    expect(getPreloadObject()).toEqual({ AssembleEventSummary: meeting(2), PreloadedFromListIndex: 2 });
    expect(events.onNavigateToAssembleDetail).toHaveBeenCalledWith(
      '1210-series-prayer',
      meeting(2).EventId,
      '2026-11-12T19:30:00',
    );
  });
});
