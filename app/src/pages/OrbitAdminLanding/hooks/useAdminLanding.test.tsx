import { act, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchAdminEvents, type AdminEventItem } from '@/api/event';
import { CommunicationException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { adminLandingReducer } from './adminLandingState';
import { onApplicationEvent_ClickEvent } from './applicationEvents';
import { useAdminLanding, type AdminLandingEvents } from './useAdminLanding';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./adminLandingState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./adminLandingState')>();
  return { ...actual, adminLandingReducer: vi.fn(actual.adminLandingReducer) };
});
vi.mock('./applicationEvents', () => ({ onApplicationEvent_ClickEvent: vi.fn() }));
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchAdminEvents: vi.fn(),
}));
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));
/* useFlowState and the card click send a rejected flow to this flow handler. */
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

/* The flows of ScreenBlock_AdminLanding, with Get_AdminEventsList, the cached user, the audit event and the flow
   handler replaced by spies. The admin and the events are fictional. */
const EVENTS: AdminEventItem[] = [
  {
    event: {
      EventId: '7301',
      Type: 'Admin',
      Title: 'Weekend Bible Conferences',
      EventInfo: {
        StartEventDate: '2026-11-07T09:00:00Z',
        EndEventDate: '2026-11-08T17:00:00Z',
        EventLocation: 'Bahia Blanca Main Hall',
      },
    },
    typeFriendly: 'Weekend Conference Program',
  },
  {
    event: { EventId: '7302', Type: 'Admin', Title: 'Youth Day', EventInfo: { EventLocation: 'Azul Hall' } },
    typeFriendly: 'Youth Day',
  },
];

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
/** A Get_AdminEventsList answer that the test gives later. */
function pendingEvents() {
  let resolve: (rows: AdminEventItem[]) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  vi.mocked(fetchAdminEvents).mockReturnValueOnce(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    }),
  );
  return { resolve, reject };
}
/** A NavigateTo_EventDetail handler that the test ends later. */
function pendingNavigation() {
  let resolve: () => void = () => undefined;
  const events: AdminLandingEvents = {
    onNavigateToEventDetail: vi.fn(
      () =>
        new Promise<void>((res) => {
          resolve = res;
        }),
    ),
  };
  return {
    events,
    resolve: () => {
      resolve();
    },
  };
}
const noEvents = (): AdminLandingEvents => ({ onNavigateToEventDetail: vi.fn() });
const raised = () => vi.mocked(raiseToFlowHandler).mock.calls.map(([error]) => error);

function cachedUser(firstName: string, memberId: string) {
  const empty = { FirstName: '', MemberId: '' } as ReturnType<typeof appManager_GetCachedUserInfo>;
  vi.mocked(appManager_GetCachedUserInfo).mockReturnValue({ ...empty, FirstName: firstName, MemberId: memberId });
}

beforeEach(() => {
  viewCache.restored = false;
  viewCache.saved = undefined;
  vi.mocked(fetchAdminEvents).mockResolvedValue(EVENTS);
  cachedUser('Matías', '20517');
});
afterEach(() => {
  vi.clearAllMocks();
});

describe('useAdminLanding', () => {
  it('OnReady: the skeleton with the cached first name, then the admin events', async () => {
    const answer = pendingEvents();
    const { result } = renderHook(() => useAdminLanding(noEvents()), { wrapper });
    await settle();
    expect(result.current.state).toEqual({
      isFetchingData: true,
      eventsSummary: [],
      userFirstName: 'Matías',
      userMemberId: '20517',
      isDataFetched: false,
    });
    // Get_AdminEventsList sends the block variables as they are when it starts.
    expect(fetchAdminEvents).toHaveBeenCalledWith({
      IsFetchingData: true,
      UserFirstName: 'Matías',
      UserMemberId: '20517',
    });
    answer.resolve(EVENTS);
    await settle();
    expect(result.current.state).toMatchObject({ isFetchingData: false, isDataFetched: true, eventsSummary: EVENTS });
    expect(fetchAdminEvents).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a MemberId that is not a whole number sends the null identifier', async () => {
    cachedUser('', 'not-a-number');
    renderHook(() => useAdminLanding(noEvents()), { wrapper });
    await settle();
    expect(fetchAdminEvents).toHaveBeenCalledWith({ IsFetchingData: true, UserFirstName: '', UserMemberId: '0' });
  });

  it('StrictMode: OnReady runs once and the events come', async () => {
    const { result } = renderHook(() => useAdminLanding(noEvents()), { wrapper: strictWrapper });
    await settle();
    expect(fetchAdminEvents).toHaveBeenCalledTimes(1);
    expect(result.current.state.isDataFetched).toBe(true);
    expect(result.current.state.eventsSummary).toHaveLength(2);
  });

  it('a failed Get_AdminEventsList goes to the flow handler, once; the skeleton stays', async () => {
    const error = new CommunicationException('offline');
    vi.mocked(fetchAdminEvents).mockRejectedValueOnce(error);
    const { result } = renderHook(() => useAdminLanding(noEvents()), { wrapper: strictWrapper });
    await settle();
    expect(raised()).toEqual([error]);
    expect(result.current.state).toMatchObject({ isFetchingData: true, isDataFetched: false, eventsSummary: [] });
  });

  it('F40: a view left before the answer and restored runs OnReady again: one call, the skeleton clears', async () => {
    pendingEvents();
    const forward = renderHook(() => useAdminLanding(noEvents()), { wrapper });
    await settle();
    const saved = forward.result.current.state;
    expect(saved).toMatchObject({ isFetchingData: true, isDataFetched: false });
    forward.unmount();
    vi.mocked(fetchAdminEvents).mockClear();

    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderHook(() => useAdminLanding(noEvents()), { wrapper });
    expect(result.current.state.isFetchingData).toBe(true);
    await settle();
    expect(fetchAdminEvents).toHaveBeenCalledTimes(1);
    expect(fetchAdminEvents).toHaveBeenCalledWith({
      IsFetchingData: true,
      UserFirstName: 'Matías',
      UserMemberId: '20517',
    });
    expect(result.current.state).toMatchObject({ isFetchingData: false, isDataFetched: true, eventsSummary: EVENTS });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a view restored with the events keeps them and makes no call', async () => {
    const saved = {
      isFetchingData: false,
      eventsSummary: EVENTS,
      userFirstName: 'Matías',
      userMemberId: '20517',
      isDataFetched: true,
    };
    viewCache.restored = true;
    viewCache.saved = saved;
    const { result } = renderHook(() => useAdminLanding(noEvents()), { wrapper });
    await settle();
    expect(result.current.state).toEqual(saved);
    expect(fetchAdminEvents).not.toHaveBeenCalled();
    expect(appManager_GetCachedUserInfo).not.toHaveBeenCalled();
  });

  it('a card click: NavigateTo_EventDetail with the TypeFriendly of the row, then the audit event', async () => {
    const navigation = pendingNavigation();
    const { result } = renderHook(() => useAdminLanding(navigation.events), { wrapper });
    await settle();
    const [first] = EVENTS;
    if (!first) throw new Error('no event');
    act(() => {
      result.current.onEventCardClicked(first.event, first.typeFriendly);
    });
    expect(navigation.events.onNavigateToEventDetail).toHaveBeenCalledWith({
      eventId: '7301',
      eventName: 'Weekend Bible Conferences',
      eventStartDate: '2026-11-07T09:00:00Z',
      eventEndDate: '2026-11-08T17:00:00Z',
      eventLocation: 'Bahia Blanca Main Hall',
      eventTypeFriendly: 'Weekend Conference Program',
    });
    // OnApplicationEvent_ClickEvent comes after the event handler ends.
    expect(onApplicationEvent_ClickEvent).not.toHaveBeenCalled();
    navigation.resolve();
    await settle();
    expect(onApplicationEvent_ClickEvent).toHaveBeenCalledTimes(1);
    expect(onApplicationEvent_ClickEvent).toHaveBeenCalledWith({
      EventId: '7301',
      EventTitle: 'Weekend Bible Conferences',
      EventLocation: 'Bahia Blanca Main Hall',
      EventStartDate: '2026-11-07T09:00:00Z',
      EventEndDate: '2026-11-08T17:00:00Z',
    });
  });

  it('a card click whose handler fails goes to the flow handler, without the audit event', async () => {
    const error = new CommunicationException('offline');
    const events: AdminLandingEvents = { onNavigateToEventDetail: vi.fn(() => Promise.reject(error)) };
    const { result } = renderHook(() => useAdminLanding(events), { wrapper });
    await settle();
    act(() => {
      result.current.onEventCardClicked({ EventId: '7302' }, 'Youth Day');
    });
    await settle();
    expect(raised()).toEqual([error]);
    expect(onApplicationEvent_ClickEvent).not.toHaveBeenCalled();
  });

  it('W23: after the unmount, the started OnReady makes its call once and writes no state', async () => {
    const answer = pendingEvents();
    let renders = 0;
    const { unmount } = renderHook(
      () => {
        renders += 1;
        return useAdminLanding(noEvents());
      },
      { wrapper: strictWrapper },
    );
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(adminLandingReducer).mockClear();
    answer.resolve(EVENTS);
    await settle();
    expect(fetchAdminEvents).toHaveBeenCalledTimes(1);
    expect(adminLandingReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: an error after the unmount still goes to the flow handler, once, without a state write', async () => {
    const answer = pendingEvents();
    const { unmount } = renderHook(() => useAdminLanding(noEvents()), { wrapper: strictWrapper });
    await settle();
    unmount();
    vi.mocked(adminLandingReducer).mockClear();
    const error = new CommunicationException('offline');
    answer.reject(error);
    await settle();
    expect(raised()).toEqual([error]);
    expect(adminLandingReducer).not.toHaveBeenCalled();
  });

  it('W23: a card click that started before the unmount still records its audit event, once', async () => {
    const navigation = pendingNavigation();
    const { result, unmount } = renderHook(() => useAdminLanding(navigation.events), { wrapper: strictWrapper });
    await settle();
    act(() => {
      result.current.onEventCardClicked({ EventId: '7302', Title: 'Youth Day' }, 'Youth Day');
    });
    unmount();
    vi.mocked(adminLandingReducer).mockClear();
    navigation.resolve();
    await settle();
    expect(navigation.events.onNavigateToEventDetail).toHaveBeenCalledTimes(1);
    expect(onApplicationEvent_ClickEvent).toHaveBeenCalledTimes(1);
    expect(adminLandingReducer).not.toHaveBeenCalled();
  });
});
