import type { RequestHandler } from 'msw';
import { wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '../../mocks/contract';
import { orbitEventHelpers, orbitEvents, type OrbitHelperGroup } from '../../mocks/fictional/orbit';
import { scenario } from '../../mocks/scenario';
import type { GetHelperDetailsWire, HelperDetailsResponseWire, HelperWire } from './types';

/* DataActionGetHelperDetails was recorded without data (calls.md: OrbitMilestoneType and EventDetails empty, null dates,
   Helpers empty): fictional answers from the shared Orbit world (src/mocks/fictional/orbit.ts) in the captured shape.
   Scenarios:
   - real: the helper allocation of event In_EventId for host In_HostId (event 7301: none yet, as captured →
     "There is no Helper available."); EventDetails as captured (Id only, empty texts, null dates).
   - helpers (HelpersDetail Q2): the helpers of orbitEventHelpers() for an event the household hosts, with the event's
     name, location and dates (the Contact Orbit Helpdesk subject reads them), to review the helper list branch.
   - empty (every list emptied), loading (never answers: skeleton), error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE = '1900-01-01';

const EMPTY_MILESTONE_TYPE: GetHelperDetailsWire['Response']['OrbitMilestoneType'] = {
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

/** One HelperItem: the role and its members (MemberInformationRec, member locality from the household, as Orbit
    returns a helper's own locality; no meals, accommodation, guest arrangements, admin role or photo URL). */
const helperRow = (group: OrbitHelperGroup): HelperWire => ({
  Role: group.Role,
  MemberInformation: wireList(
    group.helpers.flatMap(({ household: h, memberIds }) =>
      h.members
        .filter((m) => memberIds.includes(m.MemberId))
        .map((m) => ({
          HouseholderId: h.HouseholderId,
          MemberId: m.MemberId,
          LocalityId: h.LocalityId,
          Locality: h.Locality,
          CountryCode: h.CountryCode,
          FirstName: m.FirstName,
          LastName: h.Surname,
          Title: m.Title,
          IsHouseholder: m.IsHouseholder,
          IsSpouse: m.IsSpouse,
          Age: m.Age,
          Phone: m.Phone,
          MiddayMeal: '',
          EveningMeal: '',
          Accommodation: { Host: '', HouseholderId: '0', MilestoneId: '' },
          HasGuestArrangements: false,
          HasOrbitAdminRole: false,
          SignedPhotoURL: '',
          HouseHolderId2: '0',
        })),
    ),
  ),
});

/** The answer for event `eventId` and host `hostId`. */
export function helperDetailsAnswer(eventId: string, hostId: string): GetHelperDetailsWire {
  const event = orbitEvents().find((e) => e.EventId === eventId);
  const allocation = event?.helperAllocation;
  const hosts = allocation !== undefined && allocation.HostId === hostId;
  const reviewHelpers = scenario() === 'helpers' && hosts;
  const groups = reviewHelpers ? orbitEventHelpers() : hosts ? allocation.groups : [];
  const response: HelperDetailsResponseWire = {
    EventDetails:
      reviewHelpers && event
        ? {
            Id: eventId,
            Name: event.Title,
            Location: event.EventLocation,
            StartDate: event.StartEventDate,
            EndDate: event.EndEventDate,
          }
        : { Id: event ? eventId : '0', Name: '', Location: '', StartDate: NULL_DATE, EndDate: NULL_DATE },
    Helpers: wireList(groups.map(helperRow)),
  };
  return { Response: { OrbitMilestoneType: EMPTY_MILESTONE_TYPE, GetHelperHost_Response: response } };
}

/* GetDirectoryAccess, the member contacts, timezone and signed photos of the helper cards are answered by the shared
   mocks (shared/Connect2_OrbitMobile_MUI/lib/mocks.ts, shared/Connect2_LegacyShared, MilestoneDetail/mocks.ts). */
export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_HelperDetails/DataActionGetHelperDetails', ({ In_EventId, In_HostId }) =>
    helperDetailsAnswer(In_EventId ?? '', In_HostId ?? ''),
  ),
];
