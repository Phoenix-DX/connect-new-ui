import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventsForMyTimeline, type EventCalendar, type MyTimelineData } from '@/api/event';
import { NotRegisteredException, SystemException, UserException, isUserException } from '@/legacy/os/exceptions';
import type { HouseholdClick } from '@/pages/LDM_MyEvents_V2/components/EventCard_V2';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM } from '@/lib/orbit/actions';
import { ldmMyEventsReducer } from './ldmMyEventsState';
import { useLdmMyEvents, type LdmMyEventsEvents, type LdmMyEventsFlows } from './useLdmMyEvents';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./ldmMyEventsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./ldmMyEventsState')>();
  return { ...actual, ldmMyEventsReducer: vi.fn(actual.ldmMyEventsReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchEventsForMyTimeline: vi.fn(),
}));
vi.mock('@/lib/orbit/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/orbit/actions')>()),
  addAuditEvent_LDM: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', () => ({ showUpgradePopUp: vi.fn(() => Promise.resolve()) }));

/* The flows of the "My Timeline" block, with the call, the audit events and the block events replaced by spies.
   Fictional data (the LDM world of src/mocks/fictional/ldm.ts). */
const event = (eventHostId: string): EventCalendar =>
  ({ EventHostId: eventHostId, EventId: `7${eventHostId}`, Guests: [] }) as unknown as EventCalendar;
const ANSWER: MyTimelineData = {
  pastEvents: [{ CurrentMonthDate: 'September 2026', EventsCalendar: [event('88231')] }],
  upcomingEvents: [],
};
const events = (): LdmMyEventsEvents => ({
  onNavigateToEventDetail: vi.fn(),
  onNavigateToHouseholdCarousel: vi.fn(),
  onNavigateToContactByEmail: vi.fn(),
});
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (blockEvents = events()) => ({
  blockEvents,
  ...renderHook(() => useLdmMyEvents(blockEvents), { wrapper }),
});
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));
/** A promise that the test resolves or rejects. */
function pending<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
const auditNames = () => vi.mocked(addAuditEvent_LDM).mock.calls.map(([name]) => name);
const click = (overrides: Partial<HouseholdClick> = {}): HouseholdClick => ({
  householdId: '42438',
  householdName: 'Vitale, Matías & Lucía',
  currentRowNumber: 0,
  eventHostId: '88231',
  eventId: '70415',
  recordDisabled: false,
  isHosting: false,
  isHouseholdDisplayed: true,
  householdIdList: ['42438', '91004'],
  ...overrides,
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fetchEventsForMyTimeline).mockResolvedValue(ANSWER);
});

describe('useLdmMyEvents OnReady', () => {
  it('fetches the timeline once with the block variables, appends the answer and logs the request time', async () => {
    const { result } = renderFlows();
    expect(result.current.state.isFetchingMyTimeline).toBe(true);
    await settle();
    expect(fetchEventsForMyTimeline).toHaveBeenCalledTimes(1);
    expect(fetchEventsForMyTimeline).toHaveBeenCalledWith(
      expect.objectContaining({ CurrentEventView: 1, DefaultDateRangeInMonths: 24, IsFetchingMyTimeline: true }),
    );
    expect(result.current.state).toMatchObject({
      isFetchingMyTimeline: false,
      hasFetchError: false,
      pastEventsData: ANSWER.pastEvents,
    });
    expect(auditNames()).toEqual(['RequestAPI_CalendarEvents']);
  });

  it('runs once in StrictMode', async () => {
    const latest: { current: LdmMyEventsFlows | null } = { current: null };
    function Probe() {
      latest.current = useLdmMyEvents(events());
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
    expect(fetchEventsForMyTimeline).toHaveBeenCalledTimes(1);
    expect(auditNames()).toEqual(['RequestAPI_CalendarEvents']);
    expect(latest.current?.state.pastEventsData).toEqual(ANSWER.pastEvents);
  });

  it('a failed fetch shows the network warning, ends the fetch and raises UnknownError', async () => {
    vi.mocked(fetchEventsForMyTimeline).mockRejectedValue(new Error('Request failed with status 500'));
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toMatchObject({ hasFetchError: true, isFetchingMyTimeline: false });
    const raised = vi.mocked(raiseToFlowHandler).mock.lastCall?.[0];
    expect(isUserException(raised, 'Connect2_OrbitMobile_MUI.UnknownError')).toBe(true);
    expect((raised as UserException).message).toBe('Request failed with status 500');
    expect(auditNames()).toEqual([]);
  });

  it('raises a NotRegistered error again and keeps fetching; a system error goes on as it is', async () => {
    vi.mocked(fetchEventsForMyTimeline).mockRejectedValueOnce(new NotRegisteredException('not registered'));
    const first = renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.lastCall?.[0]).toBeInstanceOf(NotRegisteredException);
    expect(first.result.current.state).toMatchObject({ hasFetchError: true, isFetchingMyTimeline: true });

    const system = new SystemException('system');
    vi.mocked(fetchEventsForMyTimeline).mockRejectedValueOnce(system);
    const second = renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.lastCall?.[0]).toBe(system);
    expect(second.result.current.state.isFetchingMyTimeline).toBe(true);
  });
});

describe('useLdmMyEvents after the unmount (W23)', () => {
  it('a pending fetch logs its audit event once and changes no state', async () => {
    const answer = pending<MyTimelineData>();
    vi.mocked(fetchEventsForMyTimeline).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    const writes = vi.mocked(ldmMyEventsReducer).mock.calls.length;
    unmount();
    answer.resolve(ANSWER);
    await settle();
    expect(auditNames()).toEqual(['RequestAPI_CalendarEvents']);
    expect(vi.mocked(ldmMyEventsReducer).mock.calls.length).toBe(writes);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('a pending fetch that fails raises UnknownError once and changes no state', async () => {
    const answer = pending<MyTimelineData>();
    vi.mocked(fetchEventsForMyTimeline).mockReturnValue(answer.promise);
    const { unmount } = renderFlows();
    await settle();
    const writes = vi.mocked(ldmMyEventsReducer).mock.calls.length;
    unmount();
    answer.reject(new Error('Request failed with status 500'));
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(isUserException(vi.mocked(raiseToFlowHandler).mock.lastCall?.[0])).toBe(true);
    expect(vi.mocked(ldmMyEventsReducer).mock.calls.length).toBe(writes);
  });
});

describe('useLdmMyEvents handlers', () => {
  it('OnScrollEnding fetches the window 24 months older and appends it', async () => {
    const { result } = renderFlows();
    await settle();
    const firstFrom = result.current.state.pastEventFilters.FromDate;
    vi.mocked(fetchEventsForMyTimeline).mockResolvedValue({
      pastEvents: [{ CurrentMonthDate: 'March 2024', EventsCalendar: [event('88063')] }],
      upcomingEvents: [],
    });
    await act(() => result.current.onScrollEnding());
    expect(fetchEventsForMyTimeline).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetchEventsForMyTimeline).mock.lastCall?.[0].PastEventFilters.ToDate).toBe(firstFrom);
    expect(result.current.state.pastEventsData.map((g) => g.CurrentMonthDate)).toEqual([
      'September 2026',
      'March 2024',
    ]);
  });

  it('OnScrollEnding does nothing while the timeline fetches', async () => {
    vi.mocked(fetchEventsForMyTimeline).mockReturnValue(pending<MyTimelineData>().promise);
    const { result } = renderFlows();
    await settle();
    await act(() => result.current.onScrollEnding());
    expect(fetchEventsForMyTimeline).toHaveBeenCalledTimes(1);
  });

  it('OnHandle_SwipeUp: the window moves 24 months back and the timeline is fetched, without IsFetchingMyTimeline', async () => {
    const { result } = renderFlows();
    await settle();
    const firstFrom = result.current.state.pastEventFilters.FromDate;
    const answer = pending<MyTimelineData>();
    vi.mocked(fetchEventsForMyTimeline).mockReturnValue(answer.promise);
    let swipe: Promise<void> = Promise.resolve();
    act(() => {
      swipe = result.current.onSwipeUp();
    });
    expect(result.current.state.pastEventFilters.ToDate).toBe(firstFrom);
    expect(vi.mocked(fetchEventsForMyTimeline).mock.lastCall?.[0].PastEventFilters.ToDate).toBe(firstFrom);
    expect(result.current.state.isFetchingMyTimeline).toBe(false);
    answer.resolve({
      pastEvents: [{ CurrentMonthDate: 'March 2024', EventsCalendar: [event('88063')] }],
      upcomingEvents: [],
    });
    await act(() => swipe);
    expect(result.current.state.pastEventsData.map((g) => g.CurrentMonthDate)).toEqual([
      'September 2026',
      'March 2024',
    ]);
    expect(auditNames()).toEqual(['RequestAPI_CalendarEvents']);
  });

  it('OnHandle_SwipeUp: a failed fetch sets HasFetchError and goes to the flow handler as it is', async () => {
    const { result } = renderFlows();
    await settle();
    const failure = new UserException('Request failed with status 500');
    vi.mocked(fetchEventsForMyTimeline).mockRejectedValue(failure);
    await act(() => result.current.onSwipeUp());
    expect(result.current.state).toMatchObject({ hasFetchError: true, isFetchingMyTimeline: false });
    expect(vi.mocked(raiseToFlowHandler).mock.lastCall?.[0]).toBe(failure);
  });

  it('TryAgain fetches the timeline again', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onTryAgain();
    });
    await settle();
    expect(fetchEventsForMyTimeline).toHaveBeenCalledTimes(2);
  });

  it('an event click logs the audit event and raises NavigateTo_EventDetail', async () => {
    const { result, blockEvents } = renderFlows();
    await settle();
    result.current.onEventClicked('88154', '70342');
    expect(vi.mocked(addAuditEvent_LDM).mock.lastCall).toEqual(['MyTimelineEventClicked', { EventHostId: '88154' }]);
    expect(blockEvents.onNavigateToEventDetail).toHaveBeenCalledWith('88154', '70342');
  });

  it('a household click: hidden does nothing, disabled asks for the upgrade, else NavigateTo_HouseholdCarousel', async () => {
    const { result, blockEvents } = renderFlows();
    await settle();
    vi.mocked(addAuditEvent_LDM).mockClear();
    result.current.onHouseholdClicked(click({ isHouseholdDisplayed: false }));
    result.current.onHouseholdClicked(click({ recordDisabled: true }));
    await settle();
    expect(showUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(blockEvents.onNavigateToHouseholdCarousel).not.toHaveBeenCalled();
    result.current.onHouseholdClicked(click());
    await settle();
    expect(vi.mocked(addAuditEvent_LDM).mock.calls).toEqual([['MyTimelineHouseholdClicked', { HouseholdId: '42438' }]]);
    expect(blockEvents.onNavigateToHouseholdCarousel).toHaveBeenCalledWith('42438', ['42438', '91004']);
  });

  it('a call opens the phone popup only with a phone number', async () => {
    const { result } = renderFlows();
    await settle();
    act(() => {
      result.current.onPhoneCall({ ContactPopupData: { ShowPopup: true } });
    });
    expect(showFeedbackMessage).toHaveBeenCalledWith('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
    expect(result.current.state.contactByPhoneData).toEqual({});
    act(() => {
      result.current.onPhoneCall({ MobilePhone: '+54 291 555 0122', ContactPopupData: { ShowPopup: true } });
    });
    expect(result.current.state.contactByPhoneData.ContactPopupData?.ShowPopup).toBe(true);
    act(() => {
      result.current.onContactByPhoneClose();
    });
    expect(result.current.state.contactByPhoneData).toEqual({
      MobilePhone: '+54 291 555 0122',
      ContactPopupData: { ShowPopup: false },
    });
  });

  it('the email option of the message popup closes it and raises NavigateTo_ContactByEmail', async () => {
    const { result, blockEvents } = renderFlows();
    await settle();
    act(() => {
      result.current.onMessage({
        Email: 'jorge.perez@example.com',
        ContactPopupData: {
          ShowPopup: true,
          ImageURL: '/mock-images/placeholder-square.svg',
          Name: ' Jorge & Nora Pérez',
          Locality: 'Bahia Blanca',
          CountryName: 'Argentina',
        },
      });
    });
    expect(result.current.state.contactByMessageData.ContactPopupData?.ShowPopup).toBe(true);
    act(() => {
      result.current.onContactByMessageEmail();
    });
    expect(result.current.state.contactByMessageData.ContactPopupData?.ShowPopup).toBe(false);
    expect(blockEvents.onNavigateToContactByEmail).toHaveBeenCalledWith(
      '/mock-images/placeholder-square.svg',
      ' Jorge & Nora Pérez',
      'Bahia Blanca',
      'Argentina',
      'jorge.perez@example.com',
    );
  });
});
