import type { RequestHandler } from 'msw';
import { ORBIT_MEMBERS, orbitEventsOfMember, type OrbitEvent } from '@/mocks/fictional/orbit';
import { contractHandler } from '@/mocks/contract';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import type {
  Get_EventsByMemberIdWire,
  Get_HouseholdMembersWire,
  OrbitEventsSummaryWire,
  OrbitSummaryItemWire,
} from './types';

/* The two data actions of ScreenBlock_OrbitLanding were not recorded: fictional data from the shared Orbit world
   (src/mocks/fictional/orbit.ts) in the captured shapes (analysis/calls.md). Captured counts: 5 household members
   (dom/default.html:59-82), one upcoming event for the first member (dom/default.html:119-160).
   - Get_HouseholdMembers: the signed-in household, IsSelected False (OnAfterFetch selects the first row).
   - Get_EventsByMemberId: the events of SelectedMemberId (Matías and his parents attend the weekend conferences; his
     brother and sister have none, so they show NoInformation_Orbit), with one YearFilter row per year.
   contractHandler: the answers are checked against the API contract at compile time (CR-OrbitLanding-1).
   Scenarios: real; loading (never answers: skeleton); error (HTTP 500: the offline capture's Service Interruption). */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE_TIME = '1900-01-01T00:00:00Z';

const EMPTY_MILESTONE_TYPE: OrbitEventsSummaryWire['OrbitMilestoneType'] = {
  Id: '',
  Is_Active: false,
  Order: 0,
  Type: '',
  Name: '',
  MainColorVar: '',
  MainIcon: '',
  CanHost: false,
  IsTransportMilestone: false,
  IconTransportDeparture: '',
  IconTransportArrival: '',
  TransportHeaderClass: '',
  TravelInfoHeader: '',
  TravelInfoHeaderIcon: '',
};

const EMPTY_MILESTONE_INFO: OrbitSummaryItemWire['MilestoneInfo'] = {
  HostId: '0',
  Location: '',
  Seating: '',
  MilestoneStartDateTime: NULL_DATE_TIME,
  MilestoneEndDateTime: NULL_DATE_TIME,
  DepartureLocation: '',
  ArrivalLocation: '',
  MilestoneHost: '',
  Description: '',
};

/** An event as an event row of GetOrbitEventsSummary_Screen (MilestoneId empty, null milestone dates). */
const eventRow = (e: OrbitEvent): OrbitEventsSummaryWire => ({
  OrbitSummaryItem: {
    MilestoneId: '',
    EventId: e.EventId,
    Type: e.EventType.Type,
    Title: e.Title,
    DateTime: e.StartEventDate,
    SequenceNo: e.SequenceNo,
    MilestoneInfo: EMPTY_MILESTONE_INFO,
    EventInfo: { StartEventDate: e.StartEventDate, EndEventDate: e.EndEventDate, EventLocation: e.EventLocation },
  },
  OrbitEventType: { ...e.EventType },
  OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
});

/* Row order (F16, CR-OrbitAdminLanding-1 / CR-QRCodeGenerate-1): the signed-in user second, after the householder, so
   the first row (selected by OnAfterFetch) is not the signed-in user, as in the capture: TST had AppManager_UserExtended
   filled (localStorage key in capture/runtime-OrbitLanding.json; OrbitAdminLanding shows the cached FirstName) and still
   no My-calendar icon on the selected first member (HeaderRight empty, dom/default.html). Since the shell returns the
   mock user's MemberId, a signed-in user first would show the icon on load. Tapping the user's own chip shows it, as the
   compiled condition does (SelectedMemberId = CurrentMemberId). */
export function householdMembersAnswer(): Get_HouseholdMembersWire {
  const others = ORBIT_MEMBERS.filter((m) => m.MemberId !== MOCK_USER_ID);
  const user = ORBIT_MEMBERS.filter((m) => m.MemberId === MOCK_USER_ID);
  const rows = [...others.slice(0, 1), ...user, ...others.slice(1)];
  return {
    Response: { List: rows.map((m) => ({ MemberId: m.MemberId, FirstName: m.FirstName, IsSelected: false })) },
  };
}

export function eventsByMemberIdAnswer(selectedMemberId: string, today: Date = new Date()): Get_EventsByMemberIdWire {
  const events = orbitEventsOfMember(selectedMemberId, today);
  const years = [...new Set(events.map((e) => e.StartEventDate.slice(0, 4)))];
  return {
    Response: { List: events.map(eventRow) },
    YearFilter: {
      List: years.map((year) => ({
        Year: year,
        IsSelected: false,
        Count: events.filter((e) => e.StartEventDate.startsWith(year)).length,
      })),
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers', () => householdMembersAnswer()),
  contractHandler(MODULE, 'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId', ({ SelectedMemberId }) =>
    eventsByMemberIdAnswer(SelectedMemberId ?? ''),
  ),
];
