import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventsByMemberId, type EventsByMemberIdResult, type EventsSummaryItem } from '@/api/event';
import { fetchOrbitHouseholdMembers, type OrbitHouseholdMember } from '@/api/household';
import { CommunicationException } from '@/legacy/os/exceptions';
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { getPopupMeasurements, scrollContentToTop } from '@/pages/OrbitLanding/actions';
import { OrbitLandingFilter } from '@/pages/OrbitLanding/staticEntities';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { orbitLandingReducer } from './orbitLandingState';
import { useOrbitLanding, type OrbitLandingEvents } from './useOrbitLanding';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./orbitLandingState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./orbitLandingState')>();
  return { ...actual, orbitLandingReducer: vi.fn(actual.orbitLandingReducer) };
});
vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchOrbitHouseholdMembers: vi.fn(),
}));
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchEventsByMemberId: vi.fn(),
}));
/* The local reads and the scroll of the flows as spies; they run as compiled. */
vi.mock('@/pages/OrbitLanding/actions', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/pages/OrbitLanding/actions')>();
  return {
    ...actual,
    getPopupMeasurements: vi.fn(actual.getPopupMeasurements),
    scrollContentToTop: vi.fn(actual.scrollContentToTop),
  };
});
/* useFlowState sends a rejected OnReady to this flow handler; the member click sends its rejection here too. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores, with the saved block variables, read by useFlowState. */
const viewCache = vi.hoisted(() => {
  const cache: { restored: boolean; saved: unknown } = { restored: false, saved: undefined };
  return cache;
});
vi.mock('@/platform/navigation/hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/navigation/hooks')>();
  const { useState } = await import('react');
  return {
    ...actual,
    useWasRestoredFromCache: () => viewCache.restored,
    useViewState: <T,>(_name: string, initial: T) => useState<T>(() => (viewCache.saved as T | undefined) ?? initial),
  };
});

/* The flows of ScreenBlock_OrbitLanding with the two data actions and the flow handler replaced by spies. Fictional
   members (the signed-in user is the second one) and rows. */
const MEMBERS: OrbitHouseholdMember[] = [
  { memberId: '7301', firstName: 'Lucía', isSelected: false },
  { memberId: MOCK_USER_ID, firstName: 'Mateo', isSelected: false },
  { memberId: '7303', firstName: 'Valentina', isSelected: false },
];
const FUTURE = '2099-04-12T18:00:00Z';
const row = (id: string, sequenceNo: number, milestone = false): EventsSummaryItem => ({
  isMilestone: milestone,
  sequenceNo,
  endDateTime: FUTURE,
  event: { EventId: milestone ? '' : id, Title: `Conference ${id}` },
  milestone: {
    MilestoneId: milestone ? id : '',
    Title: `Bus ${id}`,
    OrbitMilestoneType: milestone ? { Id: 'mt-9', TransportHeaderClass: 'header-bus' } : {},
  },
});
const ANSWER: EventsByMemberIdResult = {
  events: [row('e2', 2), row('m1', 1, true), row('e3', 3)],
  yearFilter: [{ year: '2099', isSelected: false, count: 3 }],
};

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

/** A promise that the test settles later. */
function deferred<T>(): { promise: Promise<T>; resolve: (value: T) => void; reject: (error: unknown) => void } {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** A GetHouseholdMembers answer that the test gives later. */
function pendingMembers() {
  const answer = deferred<OrbitHouseholdMember[]>();
  vi.mocked(fetchOrbitHouseholdMembers).mockReturnValueOnce(answer.promise);
  return answer;
}
/** A GetEventsByMemberId answer that the test gives later. */
function pendingEvents() {
  const answer = deferred<EventsByMemberIdResult>();
  vi.mocked(fetchEventsByMemberId).mockReturnValueOnce(answer.promise);
  return answer;
}

function events(): OrbitLandingEvents {
  return {
    onNavigateToEventDetail: vi.fn(),
    onNavigateToPassportScan: vi.fn(),
    onNavigateToTransportDetail: vi.fn(),
    onNavigateToMyCalendarOrbit: vi.fn(),
  };
}

/** The audit events that the flows wrote to the log. */
const auditEvents = () =>
  vi
    .mocked(log.info)
    .mock.calls.filter(([message]) => message === 'ApplicationEvent')
    .map(([, data]) => data);
const membersBodies = () => vi.mocked(fetchOrbitHouseholdMembers).mock.calls.map(([inputs]) => inputs);
const eventsBodies = () => vi.mocked(fetchEventsByMemberId).mock.calls.map(([inputs]) => inputs);

async function loaded(handlers = events()) {
  const view = renderHook(() => useOrbitLanding(handlers), { wrapper });
  await settle();
  return { ...view, handlers };
}

beforeEach(() => {
  viewCache.restored = false;
  viewCache.saved = undefined;
  freshPage();
  appManager_SetCachedUserInfo({ CountryCode: 'AR' });
  vi.mocked(fetchOrbitHouseholdMembers).mockResolvedValue(MEMBERS);
  vi.mocked(fetchEventsByMemberId).mockResolvedValue(ANSWER);
  vi.spyOn(log, 'info');
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useOrbitLanding', () => {
  it('OnReady: the members, the first selected, its upcoming events, then the measurements and the signed-in member', async () => {
    const { result } = await loaded();
    expect(membersBodies()).toEqual([
      {
        SelectedMemberId: '0',
        IsFetchingData: true,
        EventFilter: 0,
        SortEventsASC: true,
        Popup_SortByOpened: false,
        Popup_FiltersOpened: false,
        CurrentMemberId: '0',
      },
    ]);
    expect(eventsBodies()).toEqual([
      expect.objectContaining({ SelectedMemberId: '7301', IsFetchingData: true, EventFilter: 1 }),
    ]);
    const { state } = result.current;
    expect(state.selectedMemberId).toBe('7301');
    expect(state.householdMembersList.map((m) => m.isSelected)).toEqual([true, false, false]);
    expect(state.isFetchingData).toBe(false);
    expect(state.isEventsDataFetched).toBe(true);
    // SetAndSortEvents(True, False) does not sort: the answer order stays.
    expect(state.eventsSummary.map((p) => p.sequenceNo)).toEqual([2, 1, 3]);
    expect(state.yearsSelection).toEqual(ANSWER.yearFilter);
    expect(state.currentMemberId).toBe(MOCK_USER_ID);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('shows the skeleton state while the members load', async () => {
    const members = pendingMembers();
    const { result } = renderHook(() => useOrbitLanding(events()), { wrapper });
    await settle();
    expect(result.current.state.isFetchingData).toBe(true);
    expect(result.current.state.isEventsDataFetched).toBe(false);
    members.resolve(MEMBERS);
    await settle();
    expect(result.current.state.isFetchingData).toBe(false);
  });

  it('StrictMode: OnReady runs once', async () => {
    const { result } = renderHook(() => useOrbitLanding(events()), { wrapper: strictWrapper });
    await settle();
    expect(fetchOrbitHouseholdMembers).toHaveBeenCalledTimes(1);
    expect(fetchEventsByMemberId).toHaveBeenCalledTimes(1);
    expect(result.current.state.isEventsDataFetched).toBe(true);
  });

  it('without members: no events call, IsFetchingData False', async () => {
    vi.mocked(fetchOrbitHouseholdMembers).mockResolvedValueOnce([]);
    const { result } = await loaded();
    expect(fetchEventsByMemberId).not.toHaveBeenCalled();
    expect(result.current.state).toMatchObject({ isFetchingData: false, isEventsDataFetched: false });
  });

  it('a failed call goes to the flow handler', async () => {
    const error = new CommunicationException('offline');
    vi.mocked(fetchEventsByMemberId).mockRejectedValueOnce(error);
    const { result } = await loaded();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(result.current.state.isFetchingData).toBe(true);
  });

  it('F40: a view left before the events answer and restored runs OnReady again: the skeleton clears', async () => {
    pendingEvents();
    const forward = renderHook(() => useOrbitLanding(events()), { wrapper });
    await settle();
    const saved = forward.result.current.state;
    expect(saved).toMatchObject({ isFetchingData: true, isEventsDataFetched: false, selectedMemberId: '7301' });
    forward.unmount();
    vi.mocked(fetchOrbitHouseholdMembers).mockClear();
    vi.mocked(fetchEventsByMemberId).mockClear();

    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderHook(() => useOrbitLanding(events()), { wrapper });
    expect(result.current.state.isFetchingData).toBe(true);
    await settle();
    expect(fetchOrbitHouseholdMembers).toHaveBeenCalledTimes(1);
    expect(fetchEventsByMemberId).toHaveBeenCalledTimes(1);
    expect(eventsBodies()).toEqual([expect.objectContaining({ SelectedMemberId: '7301', EventFilter: 1 })]);
    const { state } = result.current;
    expect(state).toMatchObject({
      isFetchingData: false,
      isEventsDataFetched: true,
      selectedMemberId: '7301',
      currentMemberId: MOCK_USER_ID,
    });
    expect(state.eventsSummary.map((p) => p.sequenceNo)).toEqual([2, 1, 3]);
    expect(auditEvents()).toEqual([]);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a view restored with the events keeps the filter and sort that the user set and makes no call', async () => {
    const { result: loadedView, unmount } = await loaded();
    act(() => {
      loadedView.current.onToggleSortPopup();
    });
    act(() => {
      loadedView.current.onApplySort(false);
    });
    const saved = loadedView.current.state;
    expect(saved.sortEventsASC).toBe(false);
    unmount();
    vi.mocked(fetchOrbitHouseholdMembers).mockClear();
    vi.mocked(fetchEventsByMemberId).mockClear();

    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderHook(() => useOrbitLanding(events()), { wrapper });
    await settle();
    expect(result.current.state).toEqual(saved);
    expect(fetchOrbitHouseholdMembers).not.toHaveBeenCalled();
    expect(fetchEventsByMemberId).not.toHaveBeenCalled();
  });

  it('a click on another member refreshes its events, then the SwitchMember event', async () => {
    const { result } = await loaded();
    const list = MEMBERS.map((m, i) => ({ ...m, isSelected: i === 2 }));
    const answer = pendingEvents();
    act(() => {
      result.current.onClickedHouseholdMember(list, '7303');
    });
    expect(result.current.state).toMatchObject({ selectedMemberId: '7303', isFetchingData: true });
    expect(result.current.state.householdMembersList).toEqual(list);
    expect(auditEvents()).toEqual([]);
    answer.resolve({ events: [], yearFilter: [] });
    await settle();
    expect(eventsBodies()[1]).toMatchObject({ SelectedMemberId: '7303', IsFetchingData: true });
    expect(result.current.state).toMatchObject({ isFetchingData: false, eventsSummary: [] });
    expect(auditEvents()).toEqual([{ EventId: 'b04c43dd-331e-4dff-a1d6-c0b701802451', MemberId: '7303' }]);
  });

  it('a click on the selected member keeps the list and makes no call', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onClickedHouseholdMember(result.current.state.householdMembersList, '7301');
    });
    await settle();
    expect(fetchEventsByMemberId).toHaveBeenCalledTimes(1);
    expect(auditEvents()).toEqual([]);
  });

  it('the popups toggle only with data; ApplyFilters and ApplySort close them and filter or sort the answer', async () => {
    const { result } = await loaded();
    act(() => {
      result.current.onToggleFilterPopup();
    });
    expect(result.current.state.popup_FiltersOpened).toBe(true);
    act(() => {
      result.current.onApplyFilters(OrbitLandingFilter.PastEvents, [{ year: '2099', isSelected: true, count: 3 }]);
    });
    expect(result.current.state).toMatchObject({
      popup_FiltersOpened: false,
      eventFilter: OrbitLandingFilter.PastEvents,
      eventsSummary: [],
    });
    act(() => {
      result.current.onApplyFilters(OrbitLandingFilter.UpcomingEvents, []);
    });
    // The filter popup was closed: ApplyFilters toggles it open again (as the block does).
    expect(result.current.state.popup_FiltersOpened).toBe(true);
    // SetAndSortEvents(True, True): sorted ascending.
    expect(result.current.state.eventsSummary.map((p) => p.sequenceNo)).toEqual([1, 2, 3]);
    act(() => {
      result.current.onToggleSortPopup();
    });
    act(() => {
      result.current.onApplySort(false);
    });
    expect(result.current.state.popup_SortByOpened).toBe(false);
    expect(result.current.state.sortEventsASC).toBe(false);
    expect(result.current.state.eventsSummary.map((p) => p.sequenceNo)).toEqual([3, 2, 1]);
    expect(auditEvents()).toEqual([
      { EventId: '54f62806-9b67-4a96-bca6-1cd0f0b90f51', Filter: '2', Years: '2099' },
      { EventId: '54f62806-9b67-4a96-bca6-1cd0f0b90f51', Filter: '1', Years: '' },
      { EventId: 'fae133ca-3809-49c9-956d-93b66d88e4b9', IsSortASC: 'false' },
    ]);
  });

  it('the popups stay closed while fetching', async () => {
    pendingMembers();
    const { result } = renderHook(() => useOrbitLanding(events()), { wrapper });
    await settle();
    act(() => {
      result.current.onToggleFilterPopup();
      result.current.onToggleSortPopup();
    });
    expect(result.current.state).toMatchObject({ popup_FiltersOpened: false, popup_SortByOpened: false });
  });

  it('the cards, View Passport details and My calendar raise the navigation events with the selected member', async () => {
    const { result, handlers } = await loaded();
    const [event, milestone] = [ANSWER.events[0], ANSWER.events[1]];
    act(() => {
      if (event) result.current.onEventCardClicked(event.event);
      if (milestone) result.current.onMilestoneCardClicked(milestone.milestone);
      result.current.onViewPassportDetails();
      result.current.onMyCalendarClicked();
    });
    expect(handlers.onNavigateToEventDetail).toHaveBeenCalledWith('e2', 'Conference e2', '7301');
    expect(handlers.onNavigateToTransportDetail).toHaveBeenCalledWith('m1', 'mt-9', 'Bus m1', '7301', 'header-bus');
    expect(handlers.onNavigateToPassportScan).toHaveBeenCalledWith('7301', MOCK_USER_ID);
    expect(handlers.onNavigateToMyCalendarOrbit).toHaveBeenCalledWith('7301');
    // ClickEvent: the EventId of the payload replaces the event id of the audit event (as in the old port).
    expect(auditEvents()).toEqual([
      { EventId: 'e2' },
      { EventId: '9547bf7f-8722-4025-858b-17ec5ca5f26b', MilestoneId: 'm1' },
    ]);
  });

  it('View Passport details does nothing without the signed-in member', async () => {
    setClientVar('UBT_AppManager.AppManager_UserExtended', '');
    const { result, handlers } = await loaded();
    expect(result.current.state.currentMemberId).toBe('0');
    act(() => {
      result.current.onViewPassportDetails();
    });
    expect(handlers.onNavigateToPassportScan).not.toHaveBeenCalled();
  });
});

describe('useOrbitLanding after an unmount (flow scope, item 8)', () => {
  /** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
  const raisedErrors = () =>
    vi
      .mocked(raiseToFlowHandler)
      .mock.calls.map(([error]) => error)
      .filter((error) => !(error instanceof IgnorableSystemException));
  const switchToSignedInMember = () => MEMBERS.map((m, i) => ({ ...m, isSelected: i === 1 }));

  it('R1: unmount while GetHouseholdMembers is pending: OnAfterFetch does not run: no Get_EventsByMemberId, no state write', async () => {
    const members = pendingMembers();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useOrbitLanding(events());
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(orbitLandingReducer).mockClear();
    members.resolve(MEMBERS);
    await settle();
    expect(fetchOrbitHouseholdMembers).toHaveBeenCalledTimes(1);
    expect(fetchEventsByMemberId).not.toHaveBeenCalled();
    expect(getPopupMeasurements).not.toHaveBeenCalled();
    expect(orbitLandingReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while Get_EventsByMemberId is pending: the answer is dropped: no sort, no scroll, no measurements', async () => {
    const answer = pendingEvents();
    const { unmount } = renderHook(() => useOrbitLanding(events()), { wrapper: strictWrapper });
    await settle();
    expect(fetchEventsByMemberId).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(orbitLandingReducer).mockClear();
    answer.resolve(ANSWER);
    await settle();
    expect(scrollContentToTop).not.toHaveBeenCalled();
    expect(getPopupMeasurements).not.toHaveBeenCalled();
    expect(orbitLandingReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: unmount while Get_EventsByMemberId is pending: its failure reaches no handler and writes no state', async () => {
    const answer = pendingEvents();
    const { unmount } = renderHook(() => useOrbitLanding(events()), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(orbitLandingReducer).mockClear();
    answer.reject(new CommunicationException('offline'));
    await settle();
    expect(raisedErrors()).toEqual([]);
    expect(orbitLandingReducer).not.toHaveBeenCalled();
  });

  it('R1: a member switch whose refresh answers after the unmount: no SwitchMember event, no state write', async () => {
    const { result, unmount } = await loaded();
    const answer = pendingEvents();
    act(() => {
      result.current.onClickedHouseholdMember(switchToSignedInMember(), MOCK_USER_ID);
    });
    unmount();
    vi.mocked(orbitLandingReducer).mockClear();
    answer.resolve(ANSWER);
    await settle();
    expect(fetchEventsByMemberId).toHaveBeenCalledTimes(2);
    expect(auditEvents()).toEqual([]);
    expect(orbitLandingReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('a member switch sends its failure to the flow handler with the flow scope', async () => {
    const { result } = await loaded();
    const error = new CommunicationException('offline');
    vi.mocked(fetchEventsByMemberId).mockRejectedValueOnce(error);
    act(() => {
      result.current.onClickedHouseholdMember(switchToSignedInMember(), MOCK_USER_ID);
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(auditEvents()).toEqual([]);
  });
});
