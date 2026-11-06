import { describe, expect, it } from 'vitest';
import type { EventDetailsResult, Milestone_Screen } from '@/api/event';
import type { EventDetailInputs } from '@/pages/EventDetail/inputs';
import { SurveyStatus } from '@/pages/EventDetail/staticEntities';
import type { LocalSurveyStatus } from '@/platform/storage/localEntities';
import {
  clickedMilestoneTarget,
  eventDetailCallInputs,
  eventDetailReducer,
  INITIAL_EVENT_DETAIL_STATE,
  isEventHost,
  mayOpenHostSurvey,
  type EventDetailState,
} from './eventDetailState';

/* The state of ScreenBlock_EventDetail, without React. Fictional event of a hosting household. */

const milestone = (patch: Partial<Milestone_Screen>): Milestone_Screen => ({
  MilestoneId: '0',
  Title: '',
  MilestoneDateTime: '',
  TimeType: 'DAY',
  SequenceNo: '0',
  DateForFilter: '',
  ...patch,
});

const stayFri = milestone({
  MilestoneId: '7301-1',
  Title: 'Accommodation',
  DateForFilter: '2026-10-23',
  SequenceNo: '1',
  OrbitMilestoneType: { Id: 'accommodation-host', CanHost: true, Order: 3 },
  MilestoneInfo: { HostId: '990003' },
});
const meetingFri = milestone({
  MilestoneId: '7301-2',
  Title: 'Meeting',
  DateForFilter: '2026-10-23',
  SequenceNo: '2',
  OrbitMilestoneType: { Id: 'meeting-host', CanHost: false, Order: 1 },
});
const staySat = milestone({
  MilestoneId: '7301-3',
  Title: 'Accommodation',
  DateForFilter: '2026-10-24',
  SequenceNo: '1',
  OrbitMilestoneType: { Id: 'accommodation-host', CanHost: true, Order: 3 },
});
const arrival = milestone({ MilestoneId: '7301-0', Title: 'Arrival', TimeType: 'BEFORE' });

const result = (patch: Partial<EventDetailsResult['response']> = {}, days = ['2026-10-23', '2026-10-24']) =>
  ({
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
      Milestones: [stayFri, meetingFri, staySat],
      ...patch,
    },
    dateFilters: {
      HasBefore: false,
      HasAfter: false,
      DayFilterList: days.map((DateGroup, i) => ({ DateGroup, IsSelected: i === 1 })),
    },
    isNullResponse: false,
  }) satisfies EventDetailsResult;

const fetched = (r: EventDetailsResult = result()): EventDetailState =>
  eventDetailReducer(INITIAL_EVENT_DETAIL_STATE, { type: 'eventDetailsFetched', result: r });

const confirmed: LocalSurveyStatus = { Id: SurveyStatus.Confirmed, Label: 'Confirmed', JSON_Name: 'confirmed' };
const sent: LocalSurveyStatus = { Id: SurveyStatus.Sent, Label: 'Sent', JSON_Name: 'sent' };

describe('INITIAL_EVENT_DETAIL_STATE', () => {
  it('has the default values of the block variables', () => {
    expect(INITIAL_EVENT_DETAIL_STATE.isFetchingData).toBe(false);
    expect(INITIAL_EVENT_DETAIL_STATE.isEventDetailsFetched).toBe(false);
    expect(INITIAL_EVENT_DETAIL_STATE.userInformation).toEqual({
      userMemberId: '0',
      householderId: '0',
      spouseMemberId: '0',
    });
  });
});

describe('eventDetailReducer', () => {
  it('starts the fetch', () => {
    const s = eventDetailReducer(INITIAL_EVENT_DETAIL_STATE, { type: 'fetchStarted' });
    expect(s.isFetchingData).toBe(true);
    expect(s.isEventDetailsFetched).toBe(false);
  });

  it('keeps the milestones of the selected day after Get_EventDetails', () => {
    const s = fetched();
    expect(s.isEventDetailsFetched).toBe(true);
    expect(s.responseMilestones).toHaveLength(3);
    expect(s.responseHelpers).toBe(true);
    expect(s.eventDetails.Milestones.map((m) => m.MilestoneId)).toEqual(['7301-3']);
    expect(s.dateFilters.DayFilterList[1]?.IsSelected).toBe(true);
    expect(s.isEventUnavailable).toBe(false);
  });

  it('keeps the BEFORE milestones when the event has no days', () => {
    const s = fetched(result({ Milestones: [stayFri, arrival] }, []));
    expect(s.eventDetails.Milestones.map((m) => m.MilestoneId)).toEqual(['7301-0']);
  });

  it('takes an unavailable event as it comes', () => {
    const s = fetched({ ...result({ Milestones: [] }, []), isNullResponse: true });
    expect(s.isEventUnavailable).toBe(true);
    expect(s.eventDetails.Milestones).toEqual([]);
  });

  it('sets the host allocation when the local survey status is Confirmed', () => {
    const s = eventDetailReducer(fetched(), { type: 'localSurveyStatusRead', localSurveyStatus: [confirmed] });
    expect(s.localSurveyStatus).toEqual([confirmed]);
    expect(s.hostAllocation.map((m) => m.MilestoneId)).toEqual(['7301-1', '7301-3']);
  });

  it('keeps the host allocation for another survey status', () => {
    const s = eventDetailReducer(fetched(), { type: 'localSurveyStatusRead', localSurveyStatus: [sent] });
    expect(s.hostAllocation).toEqual([]);
  });

  it('sets the outputs of the other calls and ends the fetch', () => {
    let s = fetched();
    s = eventDetailReducer(s, {
      type: 'userInformationRead',
      userInformation: { userMemberId: '990001', householderId: '990001', spouseMemberId: '990002' },
    });
    s = eventDetailReducer(s, { type: 'hostSurveyStatusFetched', statusId: 'confirmed' });
    s = eventDetailReducer(s, { type: 'hasDocumentsFetched', hasDocuments: true });
    s = eventDetailReducer(s, { type: 'qrCodeFetched', status: { hasQRCode: true, hasScanned: false } });
    s = eventDetailReducer(s, { type: 'fetchEnded' });
    expect(s.userInformation.householderId).toBe('990001');
    expect(s.hostSurveyStatusId).toBe('confirmed');
    expect(s.hasDocuments).toBe(true);
    expect(s.hasQRCode).toBe(true);
    expect(s.hasScanned).toBe(false);
    expect(s.isFetchingData).toBe(false);
  });

  it('selects a clicked day and its milestones', () => {
    const s = eventDetailReducer(fetched(), {
      type: 'dateClicked',
      milestoneTimeTypeId: 'DAY',
      selectedDate: '2026-10-23',
      position: 0,
    });
    expect(s.eventDetails.Milestones.map((m) => m.MilestoneId)).toEqual(['7301-1', '7301-2']);
    expect(s.dateFilters.DayFilterList.map((d) => d.IsSelected)).toEqual([true, false]);
  });

  it('unselects every day for an edge', () => {
    const s = eventDetailReducer(fetched(result({ Milestones: [stayFri, arrival] })), {
      type: 'dateClicked',
      milestoneTimeTypeId: 'BEFORE',
      selectedDate: '',
      position: 0,
    });
    expect(s.eventDetails.Milestones.map((m) => m.MilestoneId)).toEqual(['7301-0']);
    expect(s.dateFilters.DayFilterList.map((d) => d.IsSelected)).toEqual([false, false]);
  });
});

describe('eventDetailCallInputs', () => {
  const inputs: EventDetailInputs = {
    In_MemberId: '990001',
    In_EventId: '7301',
    In_EventName: 'Weekend Bible Conferences',
    In_FromNotification: true,
  };

  it('sends the block variables and the inputs in the order of the block', () => {
    const variables = eventDetailCallInputs({ ...fetched(), isFetchingData: true, hasDocuments: true }, inputs);
    expect(variables).toEqual({
      IsFetchingData: true,
      HasQRCode: false,
      HasScanned: false,
      HasDocuments: true,
      IsEventUnavailable: false,
      UserInformation: { UserMemberId: '0', HouseholderId: '0', SpouseMemberId: '0' },
      In_MemberId: '990001',
      In_EventId: '7301',
      In_EventName: 'Weekend Bible Conferences',
      In_FromNotification: true,
    });
    expect(Object.keys(variables)).toEqual([
      'IsFetchingData',
      'HasQRCode',
      'HasScanned',
      'HasDocuments',
      'IsEventUnavailable',
      'UserInformation',
      'In_MemberId',
      'In_EventId',
      'In_EventName',
      'In_FromNotification',
    ]);
  });
});

describe('the decisions of the handlers', () => {
  it('knows a host event', () => {
    expect(isEventHost(fetched())).toBe(true);
    expect(isEventHost(fetched(result({ OrbitEventType: { Id: 'event-guest', Type: 'Guest' } })))).toBe(false);
  });

  it('lets only the householder or the spouse open a Sent survey', () => {
    const withUser = (userMemberId: string, spouseMemberId: string, status = sent): EventDetailState => ({
      ...fetched(),
      localSurveyStatus: [status],
      userInformation: { userMemberId, householderId: '990001', spouseMemberId },
    });
    expect(mayOpenHostSurvey(withUser('990001', '990002'))).toBe(true);
    expect(mayOpenHostSurvey(withUser('990002', '990001'))).toBe(true);
    expect(mayOpenHostSurvey(withUser('990004', '990005'))).toBe(false);
    expect(mayOpenHostSurvey(withUser('990004', '990005', confirmed))).toBe(true);
  });

  it('opens TransportDetail for a transport milestone', () => {
    const flight = milestone({
      MilestoneId: '7301-9',
      Title: 'Flight to Bahia Blanca',
      OrbitMilestoneType: { Id: 'transport-flight', IsTransportMilestone: true, TransportHeaderClass: 'flight' },
    });
    expect(clickedMilestoneTarget(flight)).toEqual({
      kind: 'transport',
      milestoneId: '7301-9',
      typeId: 'transport-flight',
      milestoneName: 'Flight to Bahia Blanca',
      headerClass: 'flight',
    });
  });

  it('opens MilestoneDetail for a meal or an accommodation, with the host id', () => {
    expect(clickedMilestoneTarget(stayFri)).toEqual({
      kind: 'detail',
      milestoneId: '7301-1',
      milestoneName: 'Accommodation',
      typeId: 'accommodation-host',
      hostId: '990003',
    });
    expect(clickedMilestoneTarget(staySat)).toMatchObject({ kind: 'detail', hostId: '0' });
  });

  it('does nothing for any other milestone type', () => {
    expect(clickedMilestoneTarget(meetingFri)).toBeNull();
    expect(clickedMilestoneTarget(milestone({}))).toBeNull();
  });
});
