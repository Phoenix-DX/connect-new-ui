import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ASSEMBLE_MEETINGS, USER_HALL_ID } from '@/mocks/fictional/assemble';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { BOOKLET_MAX_ROWS } from '@/shared/Connect2_OrbitMobile_MUI/lib/mocks';
import { server } from '@/test/setup';
import { toEventBookletPaginationInput, toEventBookletSelectedFiltersInput } from './mapper';
import {
  fetchAccommodationHost,
  fetchAccommodationHostDocument,
  fetchAdminEventInformation,
  fetchAdminEvents,
  fetchAssembleEvent,
  fetchAssembleEventTypes,
  fetchAssembleMeetings,
  fetchBookletGuestsMaxRows,
  fetchBookletHelpersMaxRows,
  fetchCoordinatorDetails,
  fetchEventBookletFilters,
  fetchEventBookletGuests,
  fetchEventBookletHelpers,
  fetchEventByEventId,
  fetchEventDetails,
  fetchEventDocuments,
  fetchEventQRCode,
  fetchEventsByMemberId,
  fetchEventsForMyTimeline,
  fetchGmpMilestoneHost,
  fetchGuestArrangements,
  fetchHasDocuments,
  fetchHasQRCode,
  fetchHelperDetails,
  fetchHostSurvey,
  fetchHostSurveyStatus,
  fetchMilestoneScanFF,
  fetchScanEventQRCode,
  fetchTransportDetail,
} from './repository';
import type {
  AccommodationHostCallInputs,
  AdminEventInformationCallInputs,
  AdminEventsCallInputs,
  AssembleEventCallInputs,
  AssembleMeetingListQuery,
  EventBookletCallInputs,
  EventDetailCallInputs,
  EventDocumentsCallInputs,
  EventQRCodeCallInputs,
  GmpMilestoneHostCallInputs,
  GuestArrangementsCallInputs,
  HelperDetailsCallInputs,
  HostSurveyCallInputs,
  LdmEventCallInputs,
  MyTimelineCallInputs,
  OrbitLandingCallInputs,
  ScannedMemberNames,
  ScannerAdmin,
  TransportDetailCallInputs,
} from './types';

/* The MSW mocks of the test setup: the fictional Orbit world (event 7301 of the signed-in household, its milestones
   7301-1 to 7301-5 and its booklet), the Assemble world (the meetings of the halls), the LDM world (five past meals)
   and the shared Orbit mocks (the booklet page sizes). The inputs are the block variables, as the screens send them. */

const EVENT_ID = '7301';
const EVENT_NAME = 'Weekend Bible Conferences - Bahia and Azul';

const eventDetailInputs: EventDetailCallInputs = {
  IsFetchingData: true,
  HasQRCode: false,
  HasScanned: false,
  HasDocuments: false,
  IsEventUnavailable: false,
  UserInformation: { UserMemberId: MOCK_USER_ID, HouseholderId: MOCK_USER_ID, SpouseMemberId: '0' },
  In_MemberId: MOCK_USER_ID,
  In_EventId: EVENT_ID,
  In_EventName: EVENT_NAME,
  In_FromNotification: false,
};

const bookletInputs: EventBookletCallInputs = {
  In_EventId: EVENT_ID,
  In_EventName: EVENT_NAME,
  IsFetchingData: true,
  IsGuestView: true,
  IsSearchMode: false,
  FiltersPopUp: false,
  HasFiltersApplied: false,
  SelectedFilters: toEventBookletSelectedFiltersInput({
    SearchTerm: '',
    DateRange: [],
    HelperRoles: [],
    Countries: [],
    Localities: [],
  }),
  PaginationSettings: toEventBookletPaginationInput({
    Guest_MaxRows: 10,
    Guest_PageNumber: 1,
    Guest_IsNewSearch: true,
    Guest_NoResults: false,
    Guest_ScrollThreshold: 200,
    Helper_MaxRows: 5,
    Helper_PageNumber: 1,
    Helper_IsNewSearch: true,
    Helper_NoResults: false,
    Helper_ScrollThreshold: 200,
  }),
};

const orbitLandingInputs: OrbitLandingCallInputs = {
  SelectedMemberId: MOCK_USER_ID,
  IsFetchingData: true,
  EventFilter: 1,
  SortEventsASC: true,
  Popup_SortByOpened: false,
  Popup_FiltersOpened: false,
  CurrentMemberId: MOCK_USER_ID,
};

const guestArrangementsInputs: GuestArrangementsCallInputs = {
  IsFetchingData: true,
  In_MemberId: MOCK_USER_ID,
  In_EventId: EVENT_ID,
  In_HostId: '0',
  In_MilestoneId: '7301-1',
  In_PreloadEventName: EVENT_NAME,
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: '',
};

const helperDetailsInputs: HelperDetailsCallInputs = {
  IsFetchingData: true,
  IsFetchingPhoneData: false,
  In_EventId: EVENT_ID,
  In_PreloadEventName: EVENT_NAME,
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: '',
  In_HostId: '0',
};

const accommodationInputs: AccommodationHostCallInputs = {
  IsFetchingData: true,
  IsLoadingDocument: false,
  HasDocument: false,
  In_MilestoneId: '7301-1',
  In_EventId: EVENT_ID,
  In_HostId: '0',
  In_PreloadEventName: EVENT_NAME,
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: '',
};

const gmpMilestoneHostInputs: GmpMilestoneHostCallInputs = {
  In_EventId: EVENT_ID,
  In_MilestoneId: '7301-1',
  IsFetchingData: true,
};

const hostSurveyInputs: HostSurveyCallInputs = {
  IsFetchingData: true,
  IsAddingHelper: false,
  PositionToDelete: 0,
  SurveyDiscarded: false,
  SurveySubmitted: false,
  IsConfirmedSurvey: false,
  HasDataSteps: false,
  IsPostingSurvey: false,
  In_EventId: EVENT_ID,
  In_MemberId: MOCK_USER_ID,
  In_EventName: EVENT_NAME,
  In_EventStartDate: '',
  In_EventEndDate: '2026-11-08T20:00:00.000Z',
};

const transportInputs: TransportDetailCallInputs = {
  Title: 'Flight to Bahia Blanca',
  IsFetchingData: true,
  In_MilestoneId: '7301-T1',
  In_OrbitMilestoneTypeId: '',
  In_PreloadMilestoneName: 'Flight to Bahia Blanca',
  In_HeaderClass: '',
};

const documentsInputs: EventDocumentsCallInputs = {
  IsFetchingData: true,
  IsLoadingDocument: false,
  In_MemberId: MOCK_USER_ID,
  In_EventId: EVENT_ID,
  In_EventName: EVENT_NAME,
  In_EventLocation: 'Bahia Blanca Main Hall',
  In_EventStartDate: '1900-01-01T00:00:00',
  In_EventEndDate: '1900-01-01T00:00:00',
};

const qrCodeInputs: EventQRCodeCallInputs = {
  UserName: 'Lucia Vitale',
  UserLocation: 'Bahia Blanca, Argentina',
  UserSignedURL: '',
  IsFetchingData: true,
  In_MemberId: MOCK_USER_ID,
  In_EventId: EVENT_ID,
  In_EventName: EVENT_NAME,
  In_EventStartDate: '1900-01-01T00:00:00',
  In_EventEndDate: '1900-01-01T00:00:00',
  In_EventLocation: 'Bahia Blanca Main Hall',
};

const adminEventsInputs: AdminEventsCallInputs = {
  IsFetchingData: true,
  UserFirstName: 'Lucia',
  UserMemberId: MOCK_USER_ID,
};

const adminEventInformationInputs: AdminEventInformationCallInputs = {
  In_EventId: EVENT_ID,
  In_EventName: EVENT_NAME,
  In_EventStartDate: '1900-01-01T00:00:00',
  In_EventEndDate: '1900-01-01T00:00:00',
  In_EventLocation: 'Bahia Blanca Main Hall',
  In_EventTypeFriendly: 'Conference',
  IsFetchingData: true,
  IsProcessingData: false,
  QRCodePopupOpened: false,
};

const ldmInputs: LdmEventCallInputs = { EventHostId: '0', EventId: '0' };

const myTimelineInputs: MyTimelineCallInputs = {
  CurrentEventView: 1,
  DefaultDateRangeInMonths: 24,
  IsFiltering: false,
  IsFetchingMyTimeline: true,
  PastEventFilters: {
    FromDate: '',
    ToDate: '9999-12-31',
    Localities: [{ IdAsText: '252', Name: 'Bahia Blanca', IsSelected: true }],
  },
};

const assembleEventInputs: AssembleEventCallInputs = {
  EventId: ASSEMBLE_MEETINGS[0]?.EventId ?? '',
  SeriesId: '',
  Start: '',
  DeviceTimezone: 'America/Argentina/Buenos_Aires',
  IsDataFetched: false,
};

const meetingListQuery: AssembleMeetingListQuery = {
  SubdivisionId: USER_HALL_ID,
  LocalSubdivisionId: '0',
  EventList_Filter: {
    AssembleFilterTimeOptionId: 'Upcoming Meetings',
    AssembleEventType: [{ AssembleEventType: { Id: 'gospel', Title: 'Gospel Preaching' }, IsSelected: false }],
  },
  EventList_RangeFrom: '',
  EventsList_RangeTo: '',
  EventList_PageNumber: 1,
  MaxRecords: 50,
  DeviceTimezone: 'America/Argentina/Buenos_Aires',
};

const scannedMember: ScannedMemberNames = {
  FirstName: 'Mateo',
  Lastname: 'Herrera',
  LocalityName: 'Monte Hermoso',
  CountryName: 'Argentina',
};
const scanner: ScannerAdmin = {
  MemberId: MOCK_USER_ID,
  FirstName: 'Lucia',
  LastName: 'Vitale',
  Locality: 'Bahia Blanca',
  Country: 'Argentina',
};

/** The bodies of the requests that the calls send, by action path (/api/<Module>/<Owner>/<Action>). */
let sent: Promise<[string, unknown]>[] = [];
const sentBodies = async () => new Map(await Promise.all(sent));

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
  sent = [];
  server.events.on('request:start', ({ request }) => {
    sent.push(
      request
        .clone()
        .json()
        .then((body: unknown) => [new URL(request.url).pathname, body]),
    );
  });
});
afterEach(() => {
  server.events.removeAllListeners();
  sessionStorage.clear();
});

interface CallCase {
  name: string;
  run: () => Promise<unknown>;
  module: string;
  owner?: string;
  action: string;
  inputNames: string[];
}

const keys = (inputs: object) => Object.keys(inputs).sort();
const ORBIT = 'Connect2_OrbitMobile_MUI';

const cases: CallCase[] = [
  {
    name: 'fetchAssembleEvent',
    run: () => fetchAssembleEvent(assembleEventInputs),
    module: 'Connect2_Assemble_MUI',
    owner: 'AssembleEventDetail',
    action: 'DataActionGetAssembleEvent',
    inputNames: keys(assembleEventInputs),
  },
  {
    name: 'fetchAssembleEventTypes',
    run: fetchAssembleEventTypes,
    module: 'Connect2_Assemble_MUI',
    owner: 'AssembleSummary_List',
    action: 'DataActionGetAssembleEventTypes',
    inputNames: [],
  },
  {
    name: 'fetchAssembleMeetings',
    run: () => fetchAssembleMeetings(meetingListQuery),
    module: 'Connect2_Assemble_MUI',
    owner: 'AssembleSummary_List',
    action: 'DataActionGetAssembleMeetingSummaryList',
    inputNames: keys(meetingListQuery),
  },
  {
    name: 'fetchEventsByMemberId',
    run: () => fetchEventsByMemberId(orbitLandingInputs),
    module: ORBIT,
    owner: 'ScreenBlock_OrbitLanding',
    action: 'DataActionGet_EventsByMemberId',
    inputNames: keys(orbitLandingInputs),
  },
  {
    name: 'fetchEventDetails',
    run: () => fetchEventDetails(eventDetailInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail',
    action: 'DataActionGet_EventDetails',
    inputNames: keys(eventDetailInputs),
  },
  {
    name: 'fetchHostSurveyStatus',
    run: () => fetchHostSurveyStatus(eventDetailInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail',
    action: 'DataActionGet_HostSurveyStatus',
    inputNames: keys(eventDetailInputs),
  },
  {
    name: 'fetchHasDocuments',
    run: () => fetchHasDocuments(eventDetailInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail',
    action: 'DataActionGet_HasDocuments',
    inputNames: keys(eventDetailInputs),
  },
  {
    name: 'fetchHasQRCode',
    run: () => fetchHasQRCode(eventDetailInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail',
    action: 'DataActionGet_HasQRCode',
    inputNames: keys(eventDetailInputs),
  },
  {
    name: 'fetchEventBookletFilters',
    run: () => fetchEventBookletFilters(bookletInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventBooklet',
    action: 'DataActionGet_EventBookletFilters',
    inputNames: keys(bookletInputs),
  },
  {
    name: 'fetchEventBookletGuests',
    run: () => fetchEventBookletGuests(bookletInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventBooklet',
    action: 'DataActionGet_EventBookletGuests',
    inputNames: keys(bookletInputs),
  },
  {
    name: 'fetchEventBookletHelpers',
    run: () => fetchEventBookletHelpers(bookletInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventBooklet',
    action: 'DataActionGet_EventBookletHelpers',
    inputNames: keys(bookletInputs),
  },
  {
    name: 'fetchBookletGuestsMaxRows',
    run: fetchBookletGuestsMaxRows,
    module: ORBIT,
    action: 'ActionGetBookletGuestsMaxRows',
    inputNames: [],
  },
  {
    name: 'fetchBookletHelpersMaxRows',
    run: fetchBookletHelpersMaxRows,
    module: ORBIT,
    action: 'ActionGetBookletHelpersMaxRows',
    inputNames: [],
  },
  {
    name: 'fetchGuestArrangements',
    run: () => fetchGuestArrangements(guestArrangementsInputs),
    module: ORBIT,
    owner: 'ScreenBlock_GuestArrangements',
    action: 'DataActionGetGuestArrangements',
    inputNames: keys(guestArrangementsInputs),
  },
  {
    name: 'fetchHelperDetails',
    run: () => fetchHelperDetails(helperDetailsInputs),
    module: ORBIT,
    owner: 'ScreenBlock_HelperDetails',
    action: 'DataActionGetHelperDetails',
    inputNames: keys(helperDetailsInputs),
  },
  {
    name: 'fetchAccommodationHost',
    run: () => fetchAccommodationHost(accommodationInputs),
    module: ORBIT,
    owner: 'ScreenBlock_AccommodationHost',
    action: 'DataActionGetAccommodationHost',
    inputNames: keys(accommodationInputs),
  },
  {
    name: 'fetchAccommodationHostDocument',
    run: () => fetchAccommodationHostDocument(accommodationInputs),
    module: ORBIT,
    owner: 'ScreenBlock_AccommodationHost',
    action: 'DataActionGet_Document',
    inputNames: keys(accommodationInputs),
  },
  {
    name: 'fetchGmpMilestoneHost',
    run: () => fetchGmpMilestoneHost(gmpMilestoneHostInputs),
    module: ORBIT,
    owner: 'ScreenBlock_MilestoneWrapper',
    action: 'DataActionGetGmpMilestoneHost',
    inputNames: keys(gmpMilestoneHostInputs),
  },
  {
    name: 'fetchHostSurvey',
    run: () => fetchHostSurvey(hostSurveyInputs),
    module: ORBIT,
    owner: 'ScreenBlock_HostSurvey',
    action: 'DataActionGetHostSurvey',
    inputNames: keys(hostSurveyInputs),
  },
  {
    name: 'fetchTransportDetail',
    run: () => fetchTransportDetail(transportInputs),
    module: ORBIT,
    owner: 'ScreenBlock_TransportDetail',
    action: 'DataActionGet_TransportDetail',
    inputNames: keys(transportInputs),
  },
  {
    name: 'fetchEventDocuments',
    run: () => fetchEventDocuments(documentsInputs),
    module: ORBIT,
    owner: 'ScreenBlock_ViewDocuments',
    action: 'DataActionGetEventDocuments',
    inputNames: keys(documentsInputs),
  },
  {
    name: 'fetchEventQRCode',
    run: () => fetchEventQRCode(qrCodeInputs),
    module: ORBIT,
    owner: 'ScreenBlock_GenerateQRCode',
    action: 'DataActionGet_EventQRCode',
    inputNames: keys(qrCodeInputs),
  },
  {
    name: 'fetchAdminEvents',
    run: () => fetchAdminEvents(adminEventsInputs),
    module: ORBIT,
    owner: 'ScreenBlock_AdminLanding',
    action: 'DataActionGet_AdminEventsList',
    inputNames: keys(adminEventsInputs),
  },
  {
    name: 'fetchMilestoneScanFF',
    run: fetchMilestoneScanFF,
    module: 'UBTConnect',
    action: 'ActionGetMilestoneScanFF',
    inputNames: [],
  },
  {
    name: 'fetchAdminEventInformation',
    run: () => fetchAdminEventInformation(adminEventInformationInputs),
    module: ORBIT,
    owner: 'ScreenBlock_AdminEventDetail',
    action: 'DataActionGet_EventInformation',
    inputNames: keys(adminEventInformationInputs),
  },
  {
    name: 'fetchScanEventQRCode',
    run: () => fetchScanEventQRCode(EVENT_ID, '990101', scannedMember, scanner),
    module: ORBIT,
    action: 'ActionGetScanEventQRCode',
    inputNames: ['ScannedQRCodeInfo'],
  },
  {
    name: 'fetchEventByEventId',
    run: () => fetchEventByEventId(ldmInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail_V2',
    action: 'DataActionGetEventByEventId',
    inputNames: keys(ldmInputs),
  },
  {
    name: 'fetchCoordinatorDetails',
    run: () => fetchCoordinatorDetails(ldmInputs),
    module: ORBIT,
    owner: 'ScreenBlock_EventDetail_V2',
    action: 'DataActionGetCoordinatorDetails',
    inputNames: keys(ldmInputs),
  },
  {
    name: 'fetchEventsForMyTimeline',
    run: () => fetchEventsForMyTimeline(myTimelineInputs),
    module: ORBIT,
    owner: 'ScreenBlock_MyEvents_V2',
    action: 'DataActionGetEventsForMyTimeline',
    inputNames: keys(myTimelineInputs),
  },
];

describe('event repository: one call per function', () => {
  it('covers the 29 calls of the domain', () => {
    expect(new Set(cases.map((c) => c.action)).size).toBe(29);
  });

  it.each(cases)('$name calls $action once, with its owner and input names', async (c) => {
    await c.run();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: c.module,
        action: c.action,
        inputNames: c.inputNames,
        ...(c.owner === undefined ? {} : { owner: c.owner }),
      }),
    ]);
  });

  it.each(cases)('$name raises the exception of callAction when the call fails', async (c) => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(c.run()).rejects.toThrow('Request failed with status 500');
  });
});

describe('event repository: the inputs that the calls send', () => {
  it('fetchHostSurvey sends a null input date ("") as the null DateTime and the other variables as they are', async () => {
    await fetchHostSurvey(hostSurveyInputs);
    expect((await sentBodies()).get(`/api/${ORBIT}/ScreenBlock_HostSurvey/DataActionGetHostSurvey`)).toEqual({
      ...hostSurveyInputs,
      In_EventStartDate: '1900-01-01T00:00:00',
    });
  });

  it('fetchEventsForMyTimeline sends the localities of the filter in a wrapped list', async () => {
    await fetchEventsForMyTimeline(myTimelineInputs);
    expect((await sentBodies()).get(`/api/${ORBIT}/ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline`)).toEqual({
      ...myTimelineInputs,
      PastEventFilters: {
        FromDate: '',
        ToDate: '9999-12-31',
        Localities: { List: [{ IdAsText: '252', Name: 'Bahia Blanca', IsSelected: true }] },
      },
    });
  });

  it('fetchAssembleMeetings sends the meeting types of the filter in a wrapped list', async () => {
    await fetchAssembleMeetings(meetingListQuery);
    const body = (await sentBodies()).get(
      '/api/Connect2_Assemble_MUI/AssembleSummary_List/DataActionGetAssembleMeetingSummaryList',
    );
    expect(body).toEqual({
      ...meetingListQuery,
      EventList_Filter: {
        AssembleFilterTimeOptionId: 'Upcoming Meetings',
        AssembleEventType: {
          List: [{ AssembleEventType: { Id: 'gospel', Title: 'Gospel Preaching' }, IsSelected: false }],
        },
      },
    });
  });

  it('fetchScanEventQRCode sends ScannedQRCodeInfo with the event, the member and the admin', async () => {
    await fetchScanEventQRCode(EVENT_ID, '990101', scannedMember, scanner);
    expect((await sentBodies()).get(`/api/${ORBIT}/ActionGetScanEventQRCode`)).toEqual({
      ScannedQRCodeInfo: {
        EventId: EVENT_ID,
        MilestoneId: '',
        MilestoneType: '',
        ScanDate: '1900-01-01T00:00:00',
        ScannedUserInformation: {
          MemberId: '990101',
          MemberFirstName: 'Mateo',
          MemberLastName: 'Herrera',
          MemberLocality: 'Monte Hermoso',
          MemberCountry: 'Argentina',
          MemberRole: '',
          MemberGuestRole: '',
          MemberTag: '',
          MemberRowAllocation: '',
          MemberRowAllocations: { List: [] },
          MemberSeatingPlan: '',
        },
        ScannerAdminInfo: {
          AdminMemberId: MOCK_USER_ID,
          AdminFirstName: 'Lucia',
          AdminLastName: 'Vitale',
          AdminLocality: 'Bahia Blanca',
          AdminCountry: 'Argentina',
        },
      },
    });
  });

  it('the booklet calls send SelectedFilters and PaginationSettings as they travel', async () => {
    await fetchEventBookletGuests(bookletInputs);
    const body = (await sentBodies()).get(`/api/${ORBIT}/ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests`);
    expect(body).toMatchObject({
      SelectedFilters: {
        SearchTerm: '',
        DateRange: { List: [] },
        HelperRoles: { List: [] },
        Countries: { List: [] },
        Localities: { List: [] },
      },
      PaginationSettings: { Guest_ScrollThreshold: '200', Helper_ScrollThreshold: '200' },
    });
  });
});

describe('event repository: the answers', () => {
  it('fetchEventDetails answers the event of the member, its itinerary and the days, null dates as ""', async () => {
    const result = await fetchEventDetails(eventDetailInputs);
    expect(result.isNullResponse).toBe(false);
    expect(result.response).toEqual(
      expect.objectContaining({ EventId: EVENT_ID, EventName: EVENT_NAME, Accommodations: true, Helpers: true }),
    );
    expect(result.response.Milestones.map((m) => m.MilestoneId)).toEqual([
      '7301-1',
      '7301-2',
      '7301-3',
      '7301-4',
      '7301-5',
    ]);
    expect(result.response.Milestones[0]?.MilestoneInfo?.MilestoneStartDateTime).toBe('');
    expect(result.dateFilters.DayFilterList.map((d) => d.IsSelected)).toEqual([true, false, false]);
  });

  it('fetchEventsByMemberId answers the events and milestones of the member as card records', async () => {
    const result = await fetchEventsByMemberId(orbitLandingInputs);
    expect(result.events.length).toBeGreaterThan(0);
    expect(result.events.some((e) => !e.isMilestone && e.event.EventId === EVENT_ID)).toBe(true);
    expect(result.yearFilter.every((y) => typeof y.count === 'number')).toBe(true);
  });

  it('fetchAccommodationHost keeps the member fields that the cards read and the null event dates as ""', async () => {
    const { hasData, accommodationData } = await fetchAccommodationHost(accommodationInputs);
    expect(hasData).toBe(true);
    expect(accommodationData.EventDetails).toEqual(
      expect.objectContaining({ Id: EVENT_ID, StartDate: '', EndDate: '' }),
    );
    const member = accommodationData.Rooms[0]?.Guests[0]?.MemberInformation[0];
    expect(Object.keys(member ?? {}).sort()).toEqual([
      'Age',
      'CountryCode',
      'EveningMeal',
      'FirstName',
      'HasGuestArrangements',
      'HasOrbitAdminRole',
      'HouseholderId',
      'IsHouseholder',
      'IsSpouse',
      'LastName',
      'Locality',
      'LocalityId',
      'MemberId',
      'MiddayMeal',
      'Phone',
      'SignedPhotoURL',
      'Title',
    ]);
  });

  it('fetchEventBookletGuests answers the days of each guest as Dates', async () => {
    const guests = await fetchEventBookletGuests(bookletInputs);
    expect(guests.length).toBeGreaterThan(0);
    expect(guests.flatMap((g) => g.Days).every((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))).toBe(true);
  });

  it('fetchAssembleMeetings and fetchAssembleEvent answer the counts and coordinates as numbers', async () => {
    const meetings = await fetchAssembleMeetings(meetingListQuery);
    expect(meetings.length).toBeGreaterThan(0);
    expect(typeof meetings[0]?.BrothersCount).toBe('number');
    expect(typeof meetings[0]?.HostingSubdivisionLatitude).toBe('number');
    const { IsNotFound, AssembleEvent } = await fetchAssembleEvent(assembleEventInputs);
    expect(IsNotFound).toBe(false);
    expect(AssembleEvent.AssembleEventSummary.EventId).toBe(assembleEventInputs.EventId);
    const halls = AssembleEvent.AssembleAttendeeSubdivisionList.flatMap((l) => l.AssembleAttendeeSubdivisionList);
    expect(halls.every((h) => typeof h.HouseholdCount === 'number')).toBe(true);
  });

  it('fetchEventsForMyTimeline answers the past meals by month with their guests unwrapped', async () => {
    const { pastEvents, upcomingEvents } = await fetchEventsForMyTimeline(myTimelineInputs);
    expect(pastEvents).toHaveLength(5);
    expect(pastEvents.every((g) => g.EventsCalendar.every((e) => Array.isArray(e.Guests)))).toBe(true);
    expect(upcomingEvents).toEqual([]);
  });

  it('fetchBookletGuestsMaxRows and fetchBookletHelpersMaxRows answer the page sizes', async () => {
    await expect(fetchBookletGuestsMaxRows()).resolves.toBe(BOOKLET_MAX_ROWS.guests);
    await expect(fetchBookletHelpersMaxRows()).resolves.toBe(BOOKLET_MAX_ROWS.helpers);
  });
});
