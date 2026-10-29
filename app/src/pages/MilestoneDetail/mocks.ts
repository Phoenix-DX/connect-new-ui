import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import {
  ORBIT_HOSTED_ROOMS,
  orbitEvents,
  type OrbitGuestHousehold,
  type OrbitMilestone,
  type OrbitRoom,
} from '@/mocks/fictional/orbit';
import { OrbitMilestoneType } from '@/lib/orbit/staticEntities';
import { mockSignedImageURL } from '@/components/ui/EntityLazyImage/mocks';

/* Wire shapes of DataActionGetAccommodationHost, typed by the API contract (captured shape: analysis/calls.md
   § DataActionGetAccommodationHost). */
type GetAccommodationHostWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost'>
>;
/** GetAccommodationHostResponse (Connect2_OrbitMobile_IS) as it travels. */
type AccommodationResponseWire = GetAccommodationHostWire['Response']['GetAccommodationHostResponse'];
type RoomWire = AccommodationResponseWire['Rooms']['List'][number];
type GuestWire = RoomWire['Guests']['List'][number];

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

/** A member row of GetAccommodationHost and of the five other blocks (the same IS record). */
const memberRow = (
  h: { HouseholderId: string; Surname: string; LocalityId: string },
  m: {
    MemberId: string;
    Title: string;
    FirstName: string;
    IsHouseholder: boolean;
    IsSpouse: boolean;
    Age: string;
    Phone: string;
  },
  extra: Partial<BlockMemberWire> = {},
): BlockMemberWire => ({
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
  ...extra,
});

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
      MemberInformation: wireList(h.members.filter((m) => memberIds.includes(m.MemberId)).map((m) => memberRow(h, m))),
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

/* ---- The five other milestone blocks (decision Q3 of Legacy_OrbitEventsFlow). Never captured: no TST account has
   a meal or a guest or helper accommodation milestone. Fictional data in the shapes of the API contract, around event
   7301 of the shared Orbit world: the Fernández household of Azul hosts a Saturday lunch (MealGuest, MealHost) and a
   Saturday dinner (MealHelper) for the two visiting families of ORBIT_HOSTED_ROOMS, and their accommodation for a
   night (AccommodationGuest, AccommodationHelper). A request for an event that is not in the world answers HasData
   False (the "still being organised" branch). ---- */

type MealGuestWire = ActionOutputs<PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_MealGuest/DataActionGetMealGuest'>>;
type BlockResponseWire = MealGuestWire['Response']['GetMealMilestoneGuestResponse'];
type BlockGuestWire = BlockResponseWire['Guests']['List'][number];
type BlockMemberWire = BlockGuestWire['MemberInformation']['List'][number];
type BlockHelperWire = BlockResponseWire['Helpers']['List'][number];

/** The host household of the five blocks (fictional; example.com address). */
const FERNANDEZ_HOST: BlockResponseWire['HostInformation'] = {
  CountryName: 'Argentina',
  Email: 'fernandez.family@example.com',
  FirstName: 'Ricardo',
  FormattedAddress: 'Avenida Mitre 1260, Azul, Buenos Aires',
  HomePhone: '+54 2281 42 1187',
  HouseholdName: 'Ricardo & Lucía',
  HouseholdSurname: 'Fernández',
  HouseholderId: '880301',
  LocalityId: '613',
  LocalityName: 'Azul',
  MobilePhone: '+54 9 2281 55 4410',
  Phone: '+54 9 2281 55 4410',
  SignedPhotoURL: '',
  Title: 'Mr',
  WorkPhone: '',
};

/** The photobook caption of the Fernández household: ExtractChildrenNamesFromCaptions keeps the children line. */
const FERNANDEZ_CAPTION =
  '<div class="photobook-caption">Ricardo &amp; Lucía FERNÁNDEZ<br /><nobr><strong>Tomás</strong><sup>14</sup></nobr> ' +
  '<nobr><strong>Valentina</strong><sup>11</sup></nobr><br />Azul</div>';

/** The two visiting households of ORBIT_HOSTED_ROOMS, each once. */
const visitingHouseholds = (): OrbitGuestHousehold[] => {
  const seen = new Map<string, OrbitGuestHousehold>();
  for (const room of ORBIT_HOSTED_ROOMS) for (const g of room.guests) seen.set(g.household.HouseholderId, g.household);
  return [...seen.values()];
};

/** The visiting households as guests, with the household that hosts them for the nights (the Vitale household). */
const guestRows = (hostName: string, hostId: string, milestoneId: string): BlockGuestWire[] =>
  visitingHouseholds().map((h) => ({
    HouseholderId: h.HouseholderId,
    HouseholdName: '',
    LocalityId: h.LocalityId,
    Locality: h.Locality,
    CountryCode: h.CountryCode,
    DisplayDot: true,
    MemberInformation: wireList(
      h.members.map((m) =>
        memberRow(h, m, { Accommodation: { Host: hostName, HouseholderId: hostId, MilestoneId: milestoneId } }),
      ),
    ),
  }));

/** Two local helpers of the Fernández household's assembly (fictional), with their meals. */
const helperRows = (): BlockHelperWire[] => {
  const molina = { HouseholderId: '880311', Surname: 'Molina', LocalityId: '613' };
  const acosta = { HouseholderId: '880321', Surname: 'Acosta', LocalityId: '613' };
  const local = { Locality: 'Azul', CountryCode: 'AR' };
  return [
    {
      Role: 'CATERING',
      MemberInformation: wireList([
        memberRow(
          molina,
          {
            MemberId: '880312',
            Title: 'Mrs',
            FirstName: 'Graciela',
            IsHouseholder: false,
            IsSpouse: true,
            Age: '52',
            Phone: '+54 9 2281 55 7302',
          },
          { ...local, MiddayMeal: 'Fernández household', EveningMeal: 'Fernández household' },
        ),
      ]),
    },
    {
      Role: 'VEHICLE_DRIVER',
      MemberInformation: wireList([
        memberRow(
          acosta,
          {
            MemberId: '880321',
            Title: 'Mr',
            FirstName: 'Esteban',
            IsHouseholder: true,
            IsSpouse: false,
            Age: '47',
            Phone: '+54 9 2281 55 9156',
          },
          { ...local, EveningMeal: 'Molina household' },
        ),
      ]),
    },
  ];
};

/** Two guests with special needs (fictional). */
const specialNeedsRows = () => {
  const [herrera, ramos] = visitingHouseholds();
  const row = (h: OrbitGuestHousehold | undefined, index: number, type: string, notes: string) => {
    const m = h?.members[index];
    return {
      HouseholderId: h?.HouseholderId ?? '0',
      MemberId: m?.MemberId ?? '0',
      FirstName: m?.FirstName ?? '',
      LastName: h?.Surname ?? '',
      Title: m?.Title ?? '',
      LocalityId: h?.LocalityId ?? '0',
      SignedPhotoURL: '',
      SpecialNeeds: wireList([{ Category: 'Dietary', Notes: notes, Type: type }]),
    };
  };
  return [row(herrera, 2, 'Dietary', 'Gluten free'), row(ramos, 0, 'Allergy', 'Peanuts and tree nuts')];
};

/** The event of the request, the meal or night date (Saturday of the event at hh:mm UTC) and HasData. */
function blockEvent(eventId: string, hh: number, mm: number) {
  const e = orbitEvents().find((x) => x.EventId === eventId);
  const start = new Date(e?.StartEventDate ?? '1900-01-01T00:00:00Z');
  const day = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate() + 1, hh, mm));
  const accommodationHost = e?.milestones.find((m) => m.host !== undefined)?.host;
  return {
    found: e !== undefined,
    dateTime: day.toISOString().replace('.000Z', 'Z'),
    eventDetails: {
      Id: eventId,
      Name: e?.Title ?? '',
      Location: e?.EventLocation ?? '',
      StartDate: NULL_DATE,
      EndDate: NULL_DATE,
    },
    hostName: accommodationHost?.MilestoneHost ?? '',
    hostId: accommodationHost?.HostId ?? '0',
  };
}

/** The common part of the five responses. */
function blockResponse(eventId: string, milestoneId: string, type: string, title: string, hh: number, mm: number) {
  const b = blockEvent(eventId, hh, mm);
  return {
    found: b.found,
    b,
    common: {
      MilestoneId: milestoneId,
      MilestoneType: type,
      MilestoneDateTime: b.found ? b.dateTime : `${NULL_DATE}T00:00:00Z`,
      MilestoneTitle: b.found ? title : '',
      EventDetails: b.eventDetails,
    },
  };
}

export function mealGuestAnswer(eventId: string, milestoneId: string) {
  const { found, b, common } = blockResponse(eventId, milestoneId, OrbitMilestoneType.MealGuest, 'Lunch', 12, 30);
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetMealMilestoneGuestResponse: {
        ...common,
        HostInformation: FERNANDEZ_HOST,
        Meals: found,
        SetUpMeals: found,
        Guests: wireList(found ? guestRows(b.hostName, b.hostId, milestoneId) : []),
        Helpers: wireList(found ? helperRows() : []),
      },
    },
    HasData: found,
  };
}

export function mealHostAnswer(eventId: string, milestoneId: string) {
  const { found, b, common } = blockResponse(eventId, milestoneId, OrbitMilestoneType.MealHost, 'Lunch', 12, 30);
  const guests = found ? guestRows(b.hostName, b.hostId, milestoneId) : [];
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetMealMilestoneHostResponse: {
        ...common,
        AllocatedGuests: String(guests.reduce((n, g) => n + g.MemberInformation.List.length, 0)),
        Meals: found,
        SetUpMeals: found,
        Guests: wireList(guests),
        Helpers: wireList(found ? helperRows() : []),
        SpecialNeeds: wireList(found ? specialNeedsRows() : []),
      },
    },
    HasData: found,
  };
}

export function mealHelperAnswer(eventId: string, milestoneId: string) {
  const { found, b, common } = blockResponse(eventId, milestoneId, OrbitMilestoneType.MealHelper, 'Dinner', 20, 0);
  const guests = found ? guestRows(b.hostName, b.hostId, milestoneId) : [];
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetMealMilestoneHelperResponse: {
        ...common,
        GuestCount: String(guests.length),
        HelperCount: '2',
        HostInformation: FERNANDEZ_HOST,
        Guests: wireList(guests),
        Helpers: wireList(found ? helperRows() : []),
        SpecialNeeds: wireList(found ? specialNeedsRows() : []),
      },
    },
    HasData: found,
  };
}

export function accommodationGuestAnswer(eventId: string, milestoneId: string) {
  const { found, b, common } = blockResponse(
    eventId,
    milestoneId,
    OrbitMilestoneType.AccommodationGuest,
    'Accommodation',
    18,
    0,
  );
  const guests = found ? guestRows(b.hostName, b.hostId, milestoneId) : [];
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetAccommodationGuestResponse: {
        ...common,
        GuestCount: String(guests.length),
        HelperCount: '2',
        HostInformation: FERNANDEZ_HOST,
        Guests: wireList(guests),
        Helpers: wireList(found ? helperRows() : []),
      },
    },
    HasData: found,
  };
}

export function accommodationHelperAnswer(eventId: string, milestoneId: string) {
  const { found, common } = blockResponse(
    eventId,
    milestoneId,
    OrbitMilestoneType.AccommodationHelper,
    'Accommodation',
    18,
    0,
  );
  return {
    Response: {
      OrbitMilestoneType: EMPTY_MILESTONE_TYPE,
      GetAccommodationHelperResponse: {
        ...common,
        HostInformation: FERNANDEZ_HOST,
        Helpers: wireList(found ? helperRows() : []),
        SpecialNeeds: wireList([]),
        Rooms: wireList(found ? ORBIT_HOSTED_ROOMS.slice(0, 2).map(roomRow) : []),
      },
    },
    HasData: found,
  };
}

/** DataActionGetCaptions of a block: the Fernández caption for an event of the world, else Success False. */
const captionsAnswer = (eventId: string) => {
  const found = orbitEvents().some((e) => e.EventId === eventId);
  return { Success: found, PhotobookCaption: found ? FERNANDEZ_CAPTION : '' };
};

const milestoneBlockHandlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_MealGuest/DataActionGetMealGuest', ({ In_EventId, In_MilestoneId }) =>
    mealGuestAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_MealHost/DataActionGetMealHost', ({ In_EventId, In_MilestoneId }) =>
    mealHostAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_MealHelper/DataActionGetMealHelper', ({ In_EventId, In_MilestoneId }) =>
    mealHelperAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  contractHandler(
    MODULE,
    'ScreenBlock_AccommodationGuest/DataActionGetAccommodationGuest',
    ({ In_EventId, In_MilestoneId }) => accommodationGuestAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  contractHandler(
    MODULE,
    'ScreenBlock_AccommodationHelper/DataActionGetAccommodationHelper',
    ({ In_EventId, In_MilestoneId }) => accommodationHelperAnswer(In_EventId ?? '', In_MilestoneId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_MealGuest/DataActionGetCaptions', ({ In_EventId }) =>
    captionsAnswer(In_EventId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_MealHelper/DataActionGetCaptions', ({ In_EventId }) =>
    captionsAnswer(In_EventId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_AccommodationGuest/DataActionGetCaptions', ({ In_EventId }) =>
    captionsAnswer(In_EventId ?? ''),
  ),
  contractHandler(MODULE, 'ScreenBlock_AccommodationHelper/DataActionGetCaptions', ({ In_EventId }) =>
    captionsAnswer(In_EventId ?? ''),
  ),
];

export const handlers: RequestHandler[] = [
  ...milestoneBlockHandlers,
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
