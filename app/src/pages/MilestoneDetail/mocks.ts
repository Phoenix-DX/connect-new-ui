import type { RequestHandler } from 'msw';
import { osList, wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '@/mocks/contract';
import { orbitEvents, type OrbitMilestone, type OrbitRoom } from '@/mocks/fictional/orbit';
import { OrbitMilestoneType } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { mockSignedImageURL } from '@/shared/UBTConnect_Utils/UBT_LazyImage/mocks';
import type { AccommodationResponseWire, GetAccommodationHostWire, GuestWire, RoomWire } from './types';

/* The two data actions of ScreenBlock_AccommodationHost were not recorded: fictional data from the shared Orbit world
   (src/mocks/fictional/orbit.ts, ORBIT_HOSTED_ROOMS) in the captured shapes (analysis/calls.md). Captured
   (dom/default.html:93-870): six rooms of the host's home with ten guests of two visiting households, no helpers, no
   special needs, no document. Shapes mirrored from calls.md: Response.OrbitMilestoneType empty, MilestoneId and
   MilestoneType empty, EventDetails with null Start / End dates, member Locality / CountryCode empty (the household's
   locality is on the GuestItem), HouseholdName empty, no photo URL (Card_MemberInformation asks the signed URL).
   A milestone that is not a hosted accommodation of the event answers HasData False (the "still being organised"
   branch). contractHandler: answers checked against the API contract at compile time.
   Scenarios: real; empty (every list emptied: "No guests have been allocated…"); loading (never answers: skeleton);
   error (HTTP 500). */

const MODULE = 'Connect2_OrbitMobile_MUI';
const NULL_DATE = '1900-01-01';

const EMPTY_MILESTONE_TYPE: GetAccommodationHostWire['Response']['OrbitMilestoneType'] = {
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

const roomRow = (room: OrbitRoom): RoomWire => ({
  RoomId: room.RoomId,
  RoomName: room.RoomName,
  RoomInformation: { Floor: room.Floor, Type: room.Type, Beds: room.Beds },
  Guests: wireList(
    room.guests.map(({ household: h, memberIds }): GuestWire => ({
      HouseholderId: h.HouseholderId,
      HouseholdName: '',
      LocalityId: h.LocalityId,
      Locality: h.Locality,
      CountryCode: h.CountryCode,
      DisplayDot: true,
      MemberInformation: wireList(
        h.members
          .filter((m) => memberIds.includes(m.MemberId))
          .map((m) => ({
            HouseholderId: h.HouseholderId,
            MemberId: m.MemberId,
            LocalityId: h.LocalityId,
            Locality: '',
            CountryCode: '',
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
    })),
  ),
});

const emptyResponse = (): AccommodationResponseWire => ({
  MilestoneId: '',
  MilestoneType: '',
  MilestoneDateTime: `${NULL_DATE}T00:00:00Z`,
  MilestoneTitle: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: NULL_DATE, EndDate: NULL_DATE },
  SpecialNeeds: { List: [] },
  Helpers: { List: [] },
  Rooms: { List: [] },
});

/** The hosted accommodation milestone In_MilestoneId of event In_EventId. */
function findMilestone(
  eventId: string,
  milestoneId: string,
): { title: string; location: string; m: OrbitMilestone } | undefined {
  const e = orbitEvents().find((x) => x.EventId === eventId);
  const m = e?.milestones.find(
    (x) => x.MilestoneId === milestoneId && x.OrbitMilestoneTypeId === OrbitMilestoneType.AccommodationHost,
  );
  return e && m ? { title: e.Title, location: e.EventLocation, m } : undefined;
}

export function accommodationHostAnswer(eventId: string, milestoneId: string): GetAccommodationHostWire {
  const found = findMilestone(eventId, milestoneId);
  if (!found)
    return {
      Response: { OrbitMilestoneType: EMPTY_MILESTONE_TYPE, GetAccommodationHostResponse: emptyResponse() },
      HasData: false,
    };
  const { m } = found;
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetAccommodationHostResponse: {
        ...emptyResponse(),
        MilestoneDateTime: m.MilestoneStartDateTime,
        MilestoneTitle: m.Title,
        EventDetails: {
          Id: eventId,
          Name: found.title,
          Location: found.location,
          StartDate: NULL_DATE,
          EndDate: NULL_DATE,
        },
        Rooms: wireList((m.rooms ?? []).map(roomRow)),
      },
    },
    HasData: true,
  };
}

/** DataActionGetGmpMilestoneHost (ScreenBlock_MilestoneWrapper, CR-MilestoneDetail-1; never captured: no notification
    state): the milestone of In_MilestoneId in the fictional Orbit world (any event), with its type, title and host
    (the household's allocation, "0" without one) and Status.Success; an unknown milestone answers Success False (the
    wrapper's "This Event could not be found" layout). ErrorMessage is not shown by the block: "". */
export function gmpMilestoneHostAnswer(milestoneId: string) {
  const m = orbitEvents()
    .flatMap((e) => e.milestones)
    .find((x) => x.MilestoneId === milestoneId);
  return {
    Response: {
      MilestoneType: m?.OrbitMilestoneTypeId ?? '',
      MilestoneTitle: m?.Title ?? '',
      HostId: m?.host?.HostId ?? '0',
      Status: { Success: m !== undefined, ErrorMessage: '' },
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost', ({ In_MilestoneId }) =>
    gmpMilestoneHostAnswer(In_MilestoneId ?? ''),
  ),
  contractHandler(
    MODULE,
    'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost',
    ({ In_EventId, In_MilestoneId }) => accommodationHostAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  /* No accommodation document in the mock world (captured DocumentURL and DocumentName empty; Q4). */
  contractHandler(MODULE, 'ScreenBlock_AccommodationHost/DataActionGet_Document', () => ({
    AccommodationHostDocument: { DocumentURL: '', DocumentName: '' },
  })),
  /* Captured call #3: the guests' photos through Connect2_LegacyShared GetCacheableSignedImageURL (Card_MemberInformation
     OnReady). Same rule as UBTConnect_Utils' GetSignedImagesInBulk (decision Q-W2C-1, UBT_LazyImage/mocks.ts): every
     captured photo showed an image (data-masked-src="user-image"), so a member gets the neutral square placeholder. */
  contractHandler('Connect2_LegacyShared', 'ActionGetSignedImagesInBulk', ({ BulkSignedImagesParameters }) => ({
    Results: wireList(
      osList(BulkSignedImagesParameters).map(({ Id, Type, Size }) => ({
        Id,
        Type,
        Size,
        SignedURL: mockSignedImageURL(Id, Type),
        Error: '',
      })),
    ),
  })),
];
