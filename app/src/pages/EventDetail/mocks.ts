import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import {
  ORBIT_MILESTONE_TYPES,
  orbitEventsOfMember,
  type OrbitEvent,
  type OrbitMilestone,
  type OrbitMilestoneTypeMock,
} from '@/mocks/fictional/orbit';
import type { Get_EventDetailsWire, MilestoneWire } from './types';

/* The four data actions of ScreenBlock_EventDetail were not recorded: fictional data from the shared Orbit world
   (src/mocks/fictional/orbit.ts) in the captured shapes (analysis/calls.md). Captured (dom/default.html): event 7301
   as a host event of the signed-in household (type row "Host"), three conference days with the first selected
   (:198-246), day 1 = Accommodation (View Guests) then a meeting at 11:59 PM (:248-334), two hosted accommodation
   nights (:129-170), host survey Confirmed (:104-111), no documents, no QR code, no booklet.
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

const findEvent = (memberId: string, eventId: string): OrbitEvent | undefined =>
  orbitEventsOfMember(memberId).find((e) => e.EventId === eventId && e.detail !== undefined);

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
      EventId: e.EventId,
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
