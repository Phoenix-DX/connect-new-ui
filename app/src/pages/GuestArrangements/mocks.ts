import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '@/mocks/contract';
import { orbitEvents, orbitGuestArrangements, type OrbitGuestTransport } from '@/mocks/fictional/orbit';

/* The wire shapes of DataActionGetGuestArrangements, typed by the API contract
   (Connect2_OrbitMobile_BL.GetGuestArrangements_ScreenRec). */
type GetGuestArrangementsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements'>
>;
/** GetGuestArrangements_Screen (Connect2_OrbitMobile_BL) as it travels. */
type GuestArrangementsScreenWire = GetGuestArrangementsWire['Response'];
type MilestoneTransportScreenWire = GuestArrangementsScreenWire['ArrivalDetails']['List'][number];

/* DataActionGetGuestArrangements was never recorded (no capture, no-capture.json): fictional answers from the shared
   Orbit world (src/mocks/fictional/orbit.ts orbitGuestArrangements, GuestArrangements Q1) in the contract's shape.
   Scenarios:
   - real: the arrangements of the visiting household that member In_MemberId belongs to, for event In_EventId
     (event 7301: the Herrera family, by coach, three members with special needs, three meal days; the Ramos family,
     by car, no special needs); the header shows that member. Any other member or event: HasData False, the empty
     record (texts "", null dates, empty lists) → "No guest arrangement data has been found…".
   - empty (every list emptied), loading (never answers: skeleton), error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE = '1900-01-01';
const NULL_DATE_TIME = '1900-01-01T00:00:00';

const nullable = (dateTime: string): string => (dateTime === '' ? NULL_DATE_TIME : dateTime);

/** MilestoneTransport_ScreenRec of a guest transport. */
const transport = (t: OrbitGuestTransport): MilestoneTransportScreenWire => ({
  MilestoneTransport: {
    Title: t.Title,
    Type: t.Type,
    TravelIdentifier: t.TravelIdentifier,
    Notes: t.Notes,
    SequenceNo: t.SequenceNo,
    MilestoneInfo: {
      DepartureLocation: t.DepartureLocation,
      ArrivalLocation: t.ArrivalLocation,
      MilestoneStartDateTime: nullable(t.MilestoneStartDateTime),
      MilestoneEndDateTime: nullable(t.MilestoneEndDateTime),
    },
  },
  OrbitMilestoneType: { ...t.milestoneType },
});

const EMPTY_RESPONSE: GuestArrangementsScreenWire = {
  MemberId: '0',
  Title: '',
  FirstName: '',
  LastName: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: NULL_DATE, EndDate: NULL_DATE },
  SpecialNeeds: wireList([]),
  ArrivalDetails: wireList([]),
  MealDetails: wireList([]),
  DepartureDetails: wireList([]),
};

/** The answer for member `memberId` and event `eventId`. */
export function guestArrangementsAnswer(memberId: string, eventId: string): GetGuestArrangementsWire {
  const arrangement = orbitGuestArrangements().find(
    (a) => a.EventId === eventId && a.household.members.some((mb) => mb.MemberId === memberId),
  );
  const event = orbitEvents().find((e) => e.EventId === eventId);
  if (!arrangement || !event) return { HasData: false, Response: EMPTY_RESPONSE };
  const h = arrangement.household;
  const member = h.members.find((mb) => mb.MemberId === memberId);
  return {
    HasData: true,
    Response: {
      MemberId: memberId,
      Title: member?.Title ?? '',
      FirstName: member?.FirstName ?? '',
      LastName: h.Surname,
      EventDetails: {
        Id: event.EventId,
        Name: event.Title,
        Location: event.EventLocation,
        StartDate: event.StartEventDate,
        EndDate: event.EndEventDate,
      },
      SpecialNeeds: wireList(
        h.members
          .filter((mb) => (arrangement.specialNeeds[mb.MemberId] ?? []).length > 0)
          .map((mb) => ({
            HouseholderId: h.HouseholderId,
            MemberId: mb.MemberId,
            LocalityId: h.LocalityId,
            Title: mb.Title,
            FirstName: mb.FirstName,
            LastName: h.Surname,
            SignedPhotoURL: '',
            SpecialNeeds: wireList((arrangement.specialNeeds[mb.MemberId] ?? []).map((n) => ({ ...n }))),
          })),
      ),
      ArrivalDetails: wireList(arrangement.arrivals.map(transport)),
      MealDetails: wireList(arrangement.meals.map((meal) => ({ ...meal }))),
      DepartureDetails: wireList(arrangement.departures.map(transport)),
    },
  };
}

/* GetDirectoryAccess and the signed photos of the member cards are answered by the shared mocks
   (GetDirectoryAccess: mocks/modules/Connect2_OrbitMobile_MUI/mocks.ts; ActionGetSignedImagesInBulk: pages/MilestoneDetail/mocks.ts). */
export const handlers: RequestHandler[] = [
  contractHandler(
    MODULE,
    'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements',
    ({ In_MemberId, In_EventId }) => guestArrangementsAnswer(In_MemberId ?? '', In_EventId ?? ''),
  ),
];
