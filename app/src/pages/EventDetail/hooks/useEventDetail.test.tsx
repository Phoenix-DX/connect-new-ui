import { act, render, renderHook } from '@testing-library/react';
import { StrictMode, useLayoutEffect, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchEventDetails,
  fetchHasDocuments,
  fetchHasQRCode,
  fetchHostSurveyStatus,
  type EventDetailCallInputs,
  type EventDetailsResult,
  type Milestone_Screen,
} from '@/api/event';
import type { EventDetailInputs } from '@/pages/EventDetail/inputs';
import { SurveyStatus } from '@/pages/EventDetail/staticEntities';
import { showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { getLocalSurveyStatusByJSONName } from '@/platform/storage/localEntities';
import { eventDetailReducer, INITIAL_EVENT_DETAIL_STATE } from './eventDetailState';
import { useEventDetail, type EventDetailFlows } from './useEventDetail';

/** The reducer as a spy, so a test sees every state write. */
vi.mock('./eventDetailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./eventDetailState')>();
  return { ...actual, eventDetailReducer: vi.fn(actual.eventDetailReducer) };
});
vi.mock('@/api/event', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/event')>()),
  fetchEventDetails: vi.fn(),
  fetchHostSurveyStatus: vi.fn(),
  fetchHasDocuments: vi.fn(),
  fetchHasQRCode: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));
vi.mock('@/platform/storage/localEntities', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/storage/localEntities')>()),
  getLocalSurveyStatusByJSONName: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
/** A back navigation that the view cache restores (wasCurrentViewRestoredFromCache), read by useFlowState. */
const viewCache = vi.hoisted(() => ({ restored: false }));
vi.mock('@/platform/navigation/hooks', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation/hooks')>()),
  useWasRestoredFromCache: () => viewCache.restored,
}));

/* The flows of ScreenBlock_EventDetail, with the calls, the cached user, the local survey status, the feedback and
   the block events replaced by spies. Fictional event of a hosting household. */

const inputs: EventDetailInputs = {
  In_MemberId: '990001',
  In_EventId: '7301',
  In_EventName: 'Weekend Bible Conferences',
  In_FromNotification: false,
};

const milestone = (patch: Partial<Milestone_Screen>): Milestone_Screen => ({
  MilestoneId: '0',
  Title: '',
  MilestoneDateTime: '',
  TimeType: 'DAY',
  SequenceNo: '1',
  DateForFilter: '2026-10-23',
  ...patch,
});
const stay = milestone({
  MilestoneId: '7301-1',
  Title: 'Accommodation',
  OrbitMilestoneType: { Id: 'accommodation-host', CanHost: true, Order: 3 },
  MilestoneInfo: { HostId: '990003' },
});
const flight = milestone({
  MilestoneId: '7301-9',
  Title: 'Flight to Azul',
  OrbitMilestoneType: { Id: 'transport-flight', IsTransportMilestone: true, TransportHeaderClass: 'flight' },
});

function eventResult(patch: Partial<EventDetailsResult['response']> = {}): EventDetailsResult {
  return {
    response: {
      ...INITIAL_EVENT_DETAIL_STATE.eventDetails,
      EventId: '7301',
      MemberId: '990001',
      EventType: 'event-host',
      EventName: 'Weekend Bible Conferences',
      EventStartDate: '2026-10-23T09:00:00Z',
      EventEndDate: '2026-10-25T17:00:00Z',
      Location: 'Main Hall',
      Helpers: true,
      OrbitEventType: { Id: 'event-host', Type: 'Host' },
      Milestones: [stay],
      ...patch,
    },
    dateFilters: { HasBefore: false, HasAfter: false, DayFilterList: [{ DateGroup: '2026-10-23', IsSelected: true }] },
    isNullResponse: false,
  };
}

const confirmed = { Id: SurveyStatus.Confirmed, Label: 'Confirmed', JSON_Name: 'confirmed' };
const sent = { Id: SurveyStatus.Sent, Label: 'Sent', JSON_Name: 'sent' };

/** The cached user: member 990001, householder `householderId`. */
function user(householderId = '990001') {
  const info = mockUserInformation();
  return {
    ...info,
    Directory_UserCurrent: {
      ...info.Directory_UserCurrent,
      MemberID: '990001',
      Directory_UserCurrent_Member: {
        ...info.Directory_UserCurrent.Directory_UserCurrent_Member,
        HouseholderId: householderId,
        SpouseId: '990002',
      },
    },
  };
}

/** The order of the calls of OnReady, with the cached user read. */
const calls: string[] = [];
/** The variables that each call sent, by call. */
const sentVariables = new Map<string, EventDetailCallInputs[]>();
function record(name: string) {
  return (variables: EventDetailCallInputs) => {
    calls.push(name);
    sentVariables.set(name, [...(sentVariables.get(name) ?? []), variables]);
  };
}
const firstSent = (name: string) => sentVariables.get(name)?.[0];

function answers({
  event = eventResult(),
  status = 'confirmed',
  documents = true,
  qr = { hasQRCode: true, hasScanned: false },
} = {}) {
  vi.mocked(fetchEventDetails).mockImplementation((v) => {
    record('Get_EventDetails')(v);
    return Promise.resolve(event);
  });
  vi.mocked(fetchHostSurveyStatus).mockImplementation((v) => {
    record('Get_HostSurveyStatus')(v);
    return Promise.resolve(status);
  });
  vi.mocked(fetchHasDocuments).mockImplementation((v) => {
    record('Get_HasDocuments')(v);
    return Promise.resolve(documents);
  });
  vi.mocked(fetchHasQRCode).mockImplementation((v) => {
    record('Get_HasQRCode')(v);
    return Promise.resolve(qr);
  });
}

const events = {
  onNavigateToTransportDetail: vi.fn(),
  onNavigateToEventBooklet: vi.fn(),
  onNavigateToContactHelpdesk: vi.fn(),
  onNavigateToGenerateQRCode: vi.fn(),
  onNavigateToHostSurvey: vi.fn(),
  onNavigateToMilestoneDetail: vi.fn(),
  onNavigateToViewDocuments: vi.fn(),
  onNavigateToHelpers: vi.fn(),
};
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (hasOrbitEventBooklet = true) =>
  renderHook(() => useEventDetail(inputs, { hasOrbitEventBooklet }, events), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

beforeEach(() => {
  vi.clearAllMocks();
  calls.length = 0;
  sentVariables.clear();
  viewCache.restored = false;
  vi.mocked(getUserInformation).mockImplementation(() => {
    calls.push('Cache_UserInfo_Get');
    return Promise.resolve(user());
  });
  vi.mocked(getLocalSurveyStatusByJSONName).mockImplementation((jsonName) =>
    [confirmed, sent].filter((s) => s.JSON_Name === jsonName),
  );
  answers();
});
afterEach(() => {
  vi.restoreAllMocks();
});

describe('useEventDetail OnReady', () => {
  it('fetches the event, the user, the host survey, the documents and the QR code, in this order', async () => {
    const { result } = renderFlows();
    expect(result.current.state.isFetchingData).toBe(true);
    await settle();
    expect(calls).toEqual([
      'Get_EventDetails',
      'Cache_UserInfo_Get',
      'Get_HostSurveyStatus',
      'Get_HasDocuments',
      'Get_HasQRCode',
    ]);
    const s = result.current.state;
    expect(s.isFetchingData).toBe(false);
    expect(s.eventDetails.EventName).toBe('Weekend Bible Conferences');
    expect(s.userInformation).toEqual({ userMemberId: '990001', householderId: '990001', spouseMemberId: '990002' });
    expect(s.hostSurveyStatusId).toBe('confirmed');
    expect(s.localSurveyStatus).toEqual([confirmed]);
    expect(s.hostAllocation.map((m) => m.MilestoneId)).toEqual(['7301-1']);
    expect(s.hasDocuments).toBe(true);
    expect(s.hasQRCode).toBe(true);
  });

  it('sends the block variables of each step', async () => {
    renderFlows();
    await settle();
    expect(firstSent('Get_EventDetails')).toMatchObject({
      IsFetchingData: true,
      HasDocuments: false,
      UserInformation: { UserMemberId: '0', HouseholderId: '0', SpouseMemberId: '0' },
      In_MemberId: '990001',
      In_EventId: '7301',
      In_EventName: 'Weekend Bible Conferences',
      In_FromNotification: false,
    });
    expect(firstSent('Get_HostSurveyStatus')?.UserInformation).toEqual({
      UserMemberId: '990001',
      HouseholderId: '990001',
      SpouseMemberId: '990002',
    });
    expect(firstSent('Get_HasQRCode')).toMatchObject({ IsFetchingData: true, HasDocuments: true });
  });

  it('skips the host survey for a guest event and the QR code without milestones', async () => {
    answers({ event: eventResult({ OrbitEventType: { Id: 'event-guest', Type: 'Guest' }, Milestones: [] }) });
    const { result } = renderFlows();
    await settle();
    expect(calls).toEqual(['Get_EventDetails', 'Cache_UserInfo_Get', 'Get_HasDocuments']);
    expect(result.current.state.isFetchingData).toBe(false);
  });

  it('reads no local survey status when the host survey has no status', async () => {
    answers({ status: '' });
    const { result } = renderFlows();
    await settle();
    expect(getLocalSurveyStatusByJSONName).not.toHaveBeenCalled();
    expect(result.current.state.localSurveyStatus).toEqual([]);
  });

  it('does nothing on a view restored from the cache', async () => {
    viewCache.restored = true;
    renderFlows();
    await settle();
    expect(calls).toEqual([]);
  });

  it('sends a failure to the flow handler once and keeps the skeleton', async () => {
    const failure = new Error('Service Interruption');
    vi.mocked(fetchEventDetails).mockRejectedValue(failure);
    const { result } = renderFlows();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
    expect(result.current.state.isFetchingData).toBe(true);
    expect(getUserInformation).not.toHaveBeenCalled();
  });
});

describe('useEventDetail after an unmount and in StrictMode (decision W23)', () => {
  /** Get_EventDetails answers only when the test resolves it. */
  function pendingEventDetails() {
    let resolve: (value: EventDetailsResult) => void = () => undefined;
    let reject: (reason: unknown) => void = () => undefined;
    vi.mocked(fetchEventDetails).mockImplementation((v) => {
      record('Get_EventDetails')(v);
      return new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    });
    return {
      answerNow: () => {
        resolve(eventResult());
      },
      failNow: (reason: unknown) => {
        reject(reason);
      },
    };
  }

  it('still makes the next calls once, with the same variables, without a state write', async () => {
    const pending = pendingEventDetails();
    const { unmount } = renderFlows();
    unmount();
    vi.mocked(eventDetailReducer).mockClear();
    pending.answerNow();
    await settle();
    expect(calls).toEqual([
      'Get_EventDetails',
      'Cache_UserInfo_Get',
      'Get_HostSurveyStatus',
      'Get_HasDocuments',
      'Get_HasQRCode',
    ]);
    expect(firstSent('Get_HasQRCode')).toMatchObject({
      HasDocuments: true,
      UserInformation: { UserMemberId: '990001', HouseholderId: '990001', SpouseMemberId: '990002' },
    });
    // The flow computes its own copy of the state with the reducer: one call per action. A state write (dispatch)
    // would call the reducer again for each action, so exactly one call each means that no state write was made.
    const calledActions = vi.mocked(eventDetailReducer).mock.calls.map(([, action]) => action.type);
    expect(calledActions).toEqual([
      'eventDetailsFetched',
      'userInformationRead',
      'hostSurveyStatusFetched',
      'localSurveyStatusRead',
      'hasDocumentsFetched',
      'qrCodeFetched',
      'fetchEnded',
    ]);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('still sends a failure to the flow handler once', async () => {
    const pending = pendingEventDetails();
    const { unmount } = renderFlows();
    unmount();
    pending.failNow(new Error('Service Interruption'));
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
  });

  it('dispatches each action while the screen is there', async () => {
    renderFlows();
    await settle();
    const fetchEnded = vi
      .mocked(eventDetailReducer)
      .mock.calls.filter(([, action]) => action.type === 'fetchEnded').length;
    // The flow's own copy, the newest state of useFlowState and the rendered state of React.
    expect(fetchEnded).toBeGreaterThanOrEqual(3);
  });

  it('runs OnReady before the first paint (decision W28)', () => {
    /* Layout effects run in tree order and before the paint; passive effects run after every layout effect. The
       witness after the block sees the write of IsFetchingData True (a reducer call of dispatch) and the first call
       only when OnReady ran in a layout effect. */
    const seen: { fetchStarted: number; calls: number }[] = [];
    function Probe() {
      useEventDetail(inputs, { hasOrbitEventBooklet: true }, events);
      return null;
    }
    function Witness() {
      useLayoutEffect(() => {
        seen.push({
          fetchStarted: vi.mocked(eventDetailReducer).mock.calls.filter(([, a]) => a.type === 'fetchStarted').length,
          calls: vi.mocked(fetchEventDetails).mock.calls.length,
        });
      }, []);
      return null;
    }
    render(
      <MemoryRouter>
        <Probe />
        <Witness />
      </MemoryRouter>,
    );
    expect(seen).toHaveLength(1);
    expect(seen[0]?.calls).toBe(1);
    // The flow's own copy and the dispatch (newest state) apply the action before the witness runs.
    expect(seen[0]?.fetchStarted).toBeGreaterThanOrEqual(2);
  });

  it('runs OnReady once in StrictMode and still loads the event', async () => {
    const latestResult: { current: EventDetailFlows | null } = { current: null };
    function Probe() {
      latestResult.current = useEventDetail(inputs, { hasOrbitEventBooklet: true }, events);
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
    expect(fetchEventDetails).toHaveBeenCalledTimes(1);
    expect(fetchHasQRCode).toHaveBeenCalledTimes(1);
    expect(latestResult.current?.state.isFetchingData).toBe(false);
    expect(latestResult.current?.state.hostAllocation).toHaveLength(1);
  });
});

describe('useEventDetail handlers', () => {
  async function loaded(hasOrbitEventBooklet = true) {
    const view = renderFlows(hasOrbitEventBooklet);
    await settle();
    return view.result;
  }

  it('OnClick_GenerateQRCode raises NavigateTo_GenerateQRCode, then logs the audit event', async () => {
    const info = vi.spyOn(log, 'info').mockImplementation(() => undefined);
    const result = await loaded();
    result.current.handlers.onClickGenerateQRCode();
    expect(events.onNavigateToGenerateQRCode).toHaveBeenCalledWith(
      '2026-10-23T09:00:00Z',
      '2026-10-25T17:00:00Z',
      'Main Hall',
    );
    expect(info).toHaveBeenCalledWith('ApplicationEvent', expect.objectContaining({ OrbitEventId: '7301' }));
  });

  it('OnClick_GenerateQRCode does nothing once scanned', async () => {
    answers({ qr: { hasQRCode: true, hasScanned: true } });
    const result = await loaded();
    result.current.handlers.onClickGenerateQRCode();
    expect(events.onNavigateToGenerateQRCode).not.toHaveBeenCalled();
  });

  it('OnClick_OpenDocuments raises NavigateTo_ViewDocuments with the event dates and location', async () => {
    const result = await loaded();
    result.current.handlers.onClickOpenDocuments();
    expect(events.onNavigateToViewDocuments).toHaveBeenCalledWith(
      '2026-10-23T09:00:00Z',
      '2026-10-25T17:00:00Z',
      'Main Hall',
    );
  });

  it('OnClick_ViewEventBooklet opens the booklet with the flag, else shows an Info message', async () => {
    const result = await loaded(true);
    result.current.handlers.onClickViewEventBooklet();
    expect(events.onNavigateToEventBooklet).toHaveBeenCalledTimes(1);
    const off = await loaded(false);
    off.current.handlers.onClickViewEventBooklet();
    expect(events.onNavigateToEventBooklet).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      "You don't have access to this feature. Please contact your event organiser for more information.",
      0,
    );
  });

  it('OnClick_NavigateToHostSurvey opens the survey for the householder', async () => {
    const result = await loaded();
    result.current.handlers.onClickNavigateToHostSurvey();
    expect(events.onNavigateToHostSurvey).toHaveBeenCalledWith(
      '990001',
      '2026-10-23T09:00:00Z',
      '2026-10-25T17:00:00Z',
    );
  });

  it('OnClick_NavigateToHostSurvey shows an Error message for a Sent survey of another householder', async () => {
    answers({ status: 'sent' });
    vi.mocked(getUserInformation).mockResolvedValue(user('990007'));
    const result = await loaded();
    result.current.handlers.onClickNavigateToHostSurvey();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Only Householder is able to edit the survey.', 3);
    expect(events.onNavigateToHostSurvey).not.toHaveBeenCalled();
  });

  it('OnHandle_ClickedMilestone opens TransportDetail or MilestoneDetail, and nothing for other types', async () => {
    const result = await loaded();
    result.current.handlers.onHandleClickedMilestone(flight);
    expect(events.onNavigateToTransportDetail).toHaveBeenCalledWith(
      '7301-9',
      'transport-flight',
      'Flight to Azul',
      'flight',
    );
    result.current.handlers.onHandleClickedMilestone(stay);
    expect(events.onNavigateToMilestoneDetail).toHaveBeenCalledWith(
      '7301-1',
      'Weekend Bible Conferences',
      'Accommodation',
      'accommodation-host',
      '990003',
    );
    result.current.handlers.onHandleClickedMilestone(milestone({ OrbitMilestoneType: { Id: 'meeting-host' } }));
    expect(events.onNavigateToMilestoneDetail).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToTransportDetail).toHaveBeenCalledTimes(1);
  });

  it('OnHandle_HostAllocationView raises NavigateTo_MilestoneDetail with the event name of the screen', async () => {
    const result = await loaded();
    result.current.handlers.onHandleHostAllocationView('7301-3', 'accommodation-host', 'Accommodation', '990003');
    expect(events.onNavigateToMilestoneDetail).toHaveBeenCalledWith(
      '7301-3',
      'Weekend Bible Conferences',
      'Accommodation',
      'accommodation-host',
      '990003',
    );
  });

  it('OnHandle_ViewHelpers reads the cached user, then raises NavigateTo_Helpers', async () => {
    const result = await loaded();
    vi.mocked(getUserInformation).mockResolvedValue(user('990005'));
    result.current.handlers.onHandleViewHelpers('Helper');
    await settle();
    expect(events.onNavigateToHelpers).toHaveBeenCalledWith('7301', '990005', 'Weekend Bible Conferences', 'Helper');
  });

  it('OnHandle_ViewHelpers sends a failure to the flow handler', async () => {
    const result = await loaded();
    vi.mocked(getUserInformation).mockRejectedValue(new Error('no user'));
    result.current.handlers.onHandleViewHelpers('Helper');
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(events.onNavigateToHelpers).not.toHaveBeenCalled();
  });

  it('OnHandle_ContactHelpdesk raises NavigateTo_ContactHelpdesk with the subject of the event', async () => {
    const result = await loaded();
    result.current.handlers.onHandleContactHelpdesk();
    expect(events.onNavigateToContactHelpdesk).toHaveBeenCalledWith(
      'Weekend Bible Conferences - Main Hall - Fri 23 Oct 2026 - Sun 25 Oct 2026',
      'Weekend Bible Conferences',
    );
  });

  it('OnHandle_ClickedDate shows the milestones of the clicked edge', async () => {
    const result = await loaded();
    act(() => {
      result.current.handlers.onHandleClickedDate('BEFORE', '', 0);
    });
    expect(result.current.state.eventDetails.Milestones).toEqual([]);
    expect(result.current.state.dateFilters.DayFilterList[0]?.IsSelected).toBe(false);
  });
});
