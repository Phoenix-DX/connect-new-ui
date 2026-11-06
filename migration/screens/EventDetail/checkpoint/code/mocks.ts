import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import {
  ORBIT_MILESTONE_TYPES,
  orbitEventsOfMember,
  orbitWorldId,
  type OrbitEvent,
  type OrbitMilestone,
  type OrbitMilestoneTypeMock,
} from '@/mocks/fictional/orbit';

/** DataActionGet_EventDetails of ScreenBlock_EventDetail as it travels, typed by the API contract (captured shape:
    analysis/calls.md § DataActionGet_EventDetails). */
type Get_EventDetailsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventDetail/DataActionGet_EventDetails'>
>;
/** Milestone_ScreenRec as it travels. */
type MilestoneWire = Get_EventDetailsWire['Response']['Milestones']['List'][number];

/* The four data actions of ScreenBlock_EventDetail were not recorded: fictional data from the shared Orbit world
   (src/mocks/fictional/orbit.ts) in the captured shapes (analysis/calls.md). Captured (dom/default.html of
   2026-11-06, the TST account global#1 with a real Orbit event): a host event of the signed-in household (type row
   "Host", :85-90), the "View Event Guest List" row (:92-100), host survey Confirmed (:189-198), the Host Allocation
   accordion with two accommodation rows, a meal row and the helper row (:213-275), three conference days with the first
   selected (:294-336), day 1 = Accommodation (hosts, home, View Guests) then a meeting with "Seat: Row 3" at 6:00 PM
   (:339-452), the Contact Orbit Helpdesk footer (:460-466); no documents, no QR code (empty header right, :52-56).
   The capture plan opens the route with the ids of that account (In_EventId 2085, In_MemberId 75835): the handlers
   translate them to the world's ids with orbitWorldId (ORBIT_TST_ID_ALIASES) and answer the conference of the world.
   Shapes mirrored from calls.md: Response.HostSurvey empty, OrbitEventType with Name / MainColorVar / MainIcon empty,
   MilestoneInfo dates at the null date and Description empty, transport fields of the milestone types empty.
   An event the member is not assigned to answers IsNullResponse True (the "no longer available" branch).
   contractHandler: the answers are checked against the API contract at compile time.
   Scenarios: real; loading (never answers: skeleton); error (HTTP 500: the offline capture's Service Interruption). */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE_TIME = '1900-01-01T00:00:00Z';
const NULL_DATE = '1900-01-01';

const MILESTONE_TYPES: readonly OrbitMilestoneTypeMock[] = Object.values(ORBIT_MILESTONE_TYPES);

/** OrbitMilestoneTypeRec of a milestone type id (transport fields empty, as captured). */
const milestoneType = (id: string): MilestoneWire['OrbitMilestoneType'] => {
  const t = MILESTONE_TYPES.find((m) => m.Id === id);
  return {
    Id: id,
    Is_Active: t?.Is_Active ?? false,
    Order: t?.Order ?? 0,
    Type: t?.Type ?? '',
    Name: t?.Name ?? '',
    MainColorVar: t?.MainColorVar ?? '',
    MainIcon: t?.MainIcon ?? '',
    CanHost: t?.CanHost ?? false,
    IsTransportMilestone: t?.IsTransportMilestone ?? false,
    IconTransportDeparture: '',
    IconTransportArrival: '',
    TransportHeaderClass: '',
    TravelInfoHeader: '',
    TravelInfoHeaderIcon: '',
  };
};

/** A milestone as a Milestone_ScreenRec of the itinerary: a DAY milestone filtered by its UTC start date. */
const milestoneRow = (m: OrbitMilestone): MilestoneWire => ({
  MilestoneId: m.MilestoneId,
  Type: m.OrbitMilestoneTypeId,
  Title: m.Title,
  MilestoneDateTime: m.MilestoneStartDateTime,
  TimeType: 'DAY',
  SequenceNo: m.SequenceNo ?? '0',
  DateForFilter: m.MilestoneStartDateTime.slice(0, 10),
  OrbitMilestoneType: milestoneType(m.OrbitMilestoneTypeId),
  MilestoneInfo: {
    HostId: m.host?.HostId ?? '0',
    Location: m.Location,
    Seating: m.Seating,
    MilestoneStartDateTime: NULL_DATE_TIME,
    MilestoneEndDateTime: NULL_DATE_TIME,
    DepartureLocation: '',
    ArrivalLocation: '',
    MilestoneHost: m.host?.MilestoneHost ?? '',
    Description: '',
  },
});

/** The event In_EventId of the member In_MemberId in the world (ids of the capture plan translated first). */
const findEvent = (memberId: string, eventId: string): OrbitEvent | undefined =>
  orbitEventsOfMember(orbitWorldId(memberId)).find(
    (e) => e.EventId === orbitWorldId(eventId) && e.detail !== undefined,
  );

const EMPTY_EVENT: Get_EventDetailsWire['Response'] = {
  EventId: '0',
  MemberId: '0',
  EventType: '',
  EventName: '',
  EventStartDate: NULL_DATE_TIME,
  EventEndDate: NULL_DATE_TIME,
  Location: '',
  TypeOfEvent: '',
  IsBookletVisible: false,
  SetUpMeals: false,
  Meals: false,
  Accommodations: false,
  Helpers: false,
  Transport: false,
  GuestTransport: false,
  HostSurvey: { Id: '', Description: '' },
  OrbitEventType: { Id: '', Is_Active: false, Type: '', Name: '', MainColorVar: '', MainIcon: '' },
  Milestones: { List: [] },
};

export function eventDetailsAnswer(memberId: string, eventId: string): Get_EventDetailsWire {
  const e = findEvent(memberId, eventId);
  if (!e?.detail) {
    return {
      Response: EMPTY_EVENT,
      Response_DateFilters: { HasBefore: false, HasAfter: false, DayFilterList: { List: [] } },
      IsNullResponse: true,
    };
  }
  const d = e.detail;
  const milestones = e.milestones.map(milestoneRow);
  const days = [...new Set(milestones.map((m) => m.DateForFilter))].filter((day) => day !== NULL_DATE).sort();
  return {
    Response: {
      // The ids as the request sent them (a TST id of the capture plan stays as it is).
      EventId: eventId,
      MemberId: memberId,
      EventType: e.EventType.Id,
      EventName: e.Title,
      EventStartDate: e.StartEventDate,
      EventEndDate: e.EndEventDate,
      Location: e.EventLocation,
      TypeOfEvent: d.TypeOfEvent,
      IsBookletVisible: d.IsBookletVisible,
      SetUpMeals: d.SetUpMeals,
      Meals: d.Meals,
      Accommodations: d.Accommodations,
      Helpers: d.Helpers,
      Transport: d.Transport,
      GuestTransport: d.GuestTransport,
      HostSurvey: { Id: '', Description: '' },
      OrbitEventType: {
        Id: e.EventType.Id,
        Is_Active: e.EventType.Is_Active,
        Type: e.EventType.Type,
        Name: '',
        MainColorVar: '',
        MainIcon: '',
      },
      Milestones: { List: milestones },
    },
    Response_DateFilters: {
      HasBefore: false,
      HasAfter: false,
      DayFilterList: { List: days.map((day, i) => ({ DateGroup: day, IsSelected: i === 0 })) },
    },
    IsNullResponse: false,
  };
}

const detailOf = (memberId: string, eventId: string) => findEvent(memberId, eventId)?.detail;

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_EventDetail/DataActionGet_EventDetails', ({ In_MemberId, In_EventId }) =>
    eventDetailsAnswer(In_MemberId ?? '', In_EventId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus', ({ In_MemberId, In_EventId }) => ({
    Response: { Id: detailOf(In_MemberId ?? '', In_EventId ?? '')?.HostSurveyStatus ?? '', Description: '' },
  })),
  contractHandler(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HasDocuments', ({ In_MemberId, In_EventId }) => ({
    Response_HasDocuments: detailOf(In_MemberId ?? '', In_EventId ?? '')?.HasDocuments ?? false,
  })),
  contractHandler(MODULE, 'ScreenBlock_EventDetail/DataActionGet_HasQRCode', ({ In_MemberId, In_EventId }) => {
    const d = detailOf(In_MemberId ?? '', In_EventId ?? '');
    return { Response_HasQRCode: d?.HasQRCode ?? false, Response_HasScanned: d?.HasScanned ?? false };
  }),
  /* Captured call #1 (calls.md): the shell's HandleImageLoadError → zOnApplicationEvent_Wrapper →
     cacheLocalApplicationEvents chain, not made by this route (Q3); answered with no application events. */
  contractHandler('Connect2_LegacyShared', 'ActionGetAllApplicationEvents', () => ({ EventList: { List: [] } })),
];
