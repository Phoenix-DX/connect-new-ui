import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { LOCALITY, LOCALITY_HOUSEHOLDS, MOCK_USER, VITALE, type CastHousehold } from './directory';

/* The fictional Orbit world of the mock app (user rule 2026-10-16, migration/knowledge/mock-fixtures.md "Fictional text
   must be meaningful"), shared by every Orbit route (OrbitLanding, EventDetail, MilestoneDetail, …) and consistent
   with directory.ts: the Orbit members are the signed-in user's household (Vitale, 42438), the event takes place in
   its locality, and the household takes part as a host: it hosts two visiting families in its home for the conference
   nights (EventDetail/default, same account: type "Host", host survey Confirmed, host allocation; EventDetail Q4;
   MilestoneDetail/default: six rooms, ORBIT_HOSTED_ROOMS).

   Captured on TST (OrbitLanding/default, a full-permission account): one upcoming event, purple with
   the meeting icon, three days long; title of the captured word lengths 7 5 11 1 5 3 4 (it wraps as the original),
   held jointly with the Azul assembly at the locality's hall. The dates are relative to today, so that the event stays "upcoming" for the landing's filter (end date not
   older than CurrDate() - 22 days, ScreenBlock_OrbitLanding.mvc.js ctrl :1796-1806) whenever the mock runs.

   Values here are domain data in OutSystems field names where a shared Orbit structure exists
   (src/lib/orbit/structures.ts); each route maps them to its own wire shape in its mocks.ts. */

/** An Orbit member of the signed-in household. Long Integer ids as text. */
export interface OrbitMember {
  MemberId: string;
  FirstName: string;
}

/** The Orbit members of the signed-in household, as Get_HouseholdMembers lists them: the signed-in user first
    (MOCK_USER_ID, the shell's mock user), then the rest of the household in directory order. */
export const ORBIT_MEMBERS: readonly OrbitMember[] = [
  { MemberId: MOCK_USER_ID, FirstName: MOCK_USER.firstName },
  ...VITALE.members
    .filter((m) => m.first !== MOCK_USER.firstName)
    .map((m, i) => ({ MemberId: String(990002 + i), FirstName: m.first })),
];

const memberId = (firstName: string): string => ORBIT_MEMBERS.find((m) => m.FirstName === firstName)?.MemberId ?? '';

/** OrbitEventType records (Sync_Info_GetMain OrbitStaticEntities.OrbitEventTypes). Only the type the capture shows is
    defined: Guest ('event-guest', static entity Connect2_OrbitMobile_MUI.orbitEventType), purple, meeting icon
    (OrbitLanding dom/default.html:121-130). */
export const ORBIT_EVENT_TYPES = {
  guest: {
    Id: 'event-guest',
    Is_Active: true,
    Type: 'event-guest',
    Name: 'Guest',
    MainColorVar: 'purple',
    MainIcon: 'orbit-icon-meeting',
  },
  /** Host ('event-host'): how the signed-in household takes part in event 7301 on TST. The EventDetail capture of the
      same landing card shows the type row "Host" (OrbitEventType.Type), the host survey and the host allocation
      (EventDetail dom/default.html:89-196; ScreenBlock_EventDetail.mvc.js :552, :778, :1857). Same colour and icon as
      the landing card, which renders only MainColorVar and MainIcon (Card_Event.tsx:25, :40). EventDetail Q4. */
  host: {
    Id: 'event-host',
    Is_Active: true,
    Type: 'Host',
    Name: 'Host',
    MainColorVar: 'purple',
    MainIcon: 'orbit-icon-meeting',
  },
} as const;

/** OrbitMilestoneType records (Sync_Info_GetMain OrbitStaticEntities.OrbitMilestoneTypes; Ids = static entity
    Connect2_OrbitMobile_MUI.orbitMilestoneType). Captured on EventDetail: accommodation purple with the accommodation
    icon, named "Accommodation" (dom/default.html:131-133, :250-262: "Accommodation:" of the host allocation row);
    meeting green with the video-meeting icon (:300-312); helper with the person-wave icon (:173-176). Only the
    accommodation type can be hosted (the host allocation lists the CanHost milestones, GetHostAllocation, and the
    capture lists only accommodation rows). Type "Host" of accommodation-host and helper-host: the " (Host)" of the
    MilestoneHeader captures (components/orbit/MilestoneHeader/__captures__/v1.html, v2.html: Name + " ("
    + LocalOrbitMilestoneType.Type + ")"); meeting-host's Type is not captured. Order is fictional. The shell's app
    start syncs these records into LocalOrbitMilestoneType (shell/mocks.ts Sync_Info_GetMain, CR-EventDetail-1). */
export const ORBIT_MILESTONE_TYPES = {
  accommodationHost: {
    Id: 'accommodation-host',
    Is_Active: true,
    Order: 1,
    Type: 'Host',
    Name: 'Accommodation',
    MainColorVar: 'purple',
    MainIcon: 'orbit-icon-accommodation',
    CanHost: true,
    IsTransportMilestone: false,
  },
  meetingHost: {
    Id: 'meeting-host',
    Is_Active: true,
    Order: 3,
    Type: 'meeting-host',
    Name: 'Meeting',
    MainColorVar: 'green',
    MainIcon: 'orbit-icon-video-meeting',
    CanHost: false,
    IsTransportMilestone: false,
  },
  helper: {
    Id: 'helper-host',
    Is_Active: true,
    Order: 5,
    Type: 'Host',
    Name: 'Helper',
    MainColorVar: 'orange',
    MainIcon: 'orbit-icon-person-wave',
    CanHost: false,
    IsTransportMilestone: false,
  },
} as const;

export type OrbitMilestoneTypeMock = (typeof ORBIT_MILESTONE_TYPES)[keyof typeof ORBIT_MILESTONE_TYPES];

/** SurveyStatus records (Sync_Info_GetMain OrbitStaticEntities.SurveyStatus → local entity LocalSurveyStatus; Ids =
    static entity Connect2_OrbitMobile_MUI.surveyStatus). Captured: the "Confirmed" label of status 2 (EventDetail
    dom/default.html:104-111). The other labels and every JSON_Name are fictional (EventDetail Q5, CR-EventDetail-1). */
export const ORBIT_SURVEY_STATUSES = [
  { Id: '1', Label: 'Unable to Host', JSON_Name: 'unable_to_host' },
  { Id: '2', Label: 'Confirmed', JSON_Name: 'confirmed' },
  { Id: '3', Label: 'Sent', JSON_Name: 'sent' },
  { Id: '4', Label: 'Pending', JSON_Name: 'pending' },
] as const;

/* The other static lists of Sync_Info_GetMain OrbitStaticEntities, which the app start writes to the local entities
   the host survey reads (SyncAllOrbitStaticEntities, CR-HostSurvey-1). Ids = the TST static entities of
   Connect2_OrbitMobile_MUI (migration/knowledge/static-entities-tst.json: hostSurveyStep, houseFloor, genderPreference,
   bedSize, mealType, helperStatus, helperRole, vehicleOwner, vehicleType). Captured (HostSurvey/default): a confirmed
   survey shows the summary step and no data step (header class orbit-host-survey-no-steps, dom/default.html:99), the
   floor labels "Ground Floor" and "Second Floor" and an 8-letter floor (:225, :289), the gender labels "Male" and two
   6-letter labels (:500). Every other label, JSON_Name and Order is fictional; the JSON_Names are the ones the rooms of
   orbitHostSurveys use (Floor, GenderPreference, Beds). GetLocalHouseFloors and GetLocalGenderPreferences read the
   first 4 rows by Order (HS :3580-3616, :4430-4463), so the floors the rooms use come first. */

/** HostSurveyStep records (Id, HeaderLabel, AddLabel, Order, IsDataStep). */
export const ORBIT_HOST_SURVEY_STEPS = [
  { Id: 4, HeaderLabel: 'Host Survey', AddLabel: '', Order: 1, IsDataStep: false },
  { Id: 5, HeaderLabel: 'Accommodation', AddLabel: 'Room', Order: 2, IsDataStep: true },
  { Id: 2, HeaderLabel: 'Meal Options', AddLabel: 'Meal', Order: 3, IsDataStep: true },
  { Id: 6, HeaderLabel: 'Helpers', AddLabel: 'Helper', Order: 4, IsDataStep: true },
  { Id: 1, HeaderLabel: 'Vehicles', AddLabel: 'Vehicle', Order: 5, IsDataStep: true },
  { Id: 3, HeaderLabel: 'Summary', AddLabel: '', Order: 6, IsDataStep: false },
] as const;

/** HouseFloor records (Id, Label, JSON_Name, Order). */
export const ORBIT_HOUSE_FLOORS = [
  { Id: 1, Label: 'Basement', JSON_Name: 'basement', Order: 1 },
  { Id: 5, Label: 'Ground Floor', JSON_Name: 'ground', Order: 2 },
  { Id: 6, Label: 'First Floor', JSON_Name: 'first', Order: 3 },
  { Id: 3, Label: 'Second Floor', JSON_Name: 'second', Order: 4 },
  { Id: 4, Label: 'Third Floor', JSON_Name: 'third', Order: 5 },
  { Id: 2, Label: 'Lower Ground Floor', JSON_Name: 'lower_ground', Order: 6 },
  { Id: 7, Label: 'Attic', JSON_Name: 'attic', Order: 7 },
] as const;

/** GenderPreference records (Id, Label, JSON_Name, Order). */
export const ORBIT_GENDER_PREFERENCES = [
  { Id: 3, Label: 'Male', JSON_Name: 'MALE', Order: 1 },
  { Id: 4, Label: 'Female', JSON_Name: 'FEMALE', Order: 2 },
  { Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 3 },
  { Id: 1, Label: 'Either', JSON_Name: 'EITHER', Order: 4 },
] as const;

/** BedSize records (Long Integer Id as text, Label, JSON_Name, Order). */
export const ORBIT_BED_SIZES = [
  { Id: '3', Label: 'Single', JSON_Name: 'SINGLE', Order: 1 },
  { Id: '4', Label: 'King Single', JSON_Name: 'KING_SINGLE', Order: 2 },
  { Id: '5', Label: 'Double', JSON_Name: 'DOUBLE', Order: 3 },
  { Id: '1', Label: 'Queen', JSON_Name: 'QUEEN', Order: 4 },
  { Id: '2', Label: 'King', JSON_Name: 'KING', Order: 5 },
] as const;

/** MealType records (Id, Label, JSON_Name, Order). */
export const ORBIT_MEAL_TYPES = [
  { Id: 1, Label: 'Midday Meal', JSON_Name: 'MIDDAY', Order: 1 },
  { Id: 2, Label: 'Evening Meal', JSON_Name: 'EVENING', Order: 2 },
] as const;

/** HelperStatus records (Id, Label, JSON_Name, Order). */
export const ORBIT_HELPER_STATUSES = [
  { Id: 4, Label: 'Pending', JSON_Name: 'pending', Order: 1 },
  { Id: 3, Label: 'Approved', JSON_Name: 'approved', Order: 2 },
  { Id: 2, Label: 'Denied', JSON_Name: 'denied', Order: 3 },
  { Id: 1, Label: 'Removed', JSON_Name: 'removed', Order: 4 },
] as const;

/** HelperRole records (Id, Label, JSON_Name, Order, isReadOnly). */
export const ORBIT_HELPER_ROLES = [
  { Id: 6, Label: 'Helper', JSON_Name: 'HELPER', Order: 1, isReadOnly: false },
  { Id: 1, Label: 'Usher', JSON_Name: 'USHER', Order: 2, isReadOnly: false },
  { Id: 2, Label: 'First Aid', JSON_Name: 'FIRST_AID', Order: 3, isReadOnly: false },
  { Id: 3, Label: 'Catering', JSON_Name: 'CATERING', Order: 4, isReadOnly: false },
  { Id: 4, Label: 'Helpdesk', JSON_Name: 'HELPDESK', Order: 5, isReadOnly: false },
  { Id: 5, Label: 'Cleaning', JSON_Name: 'CLEANING', Order: 6, isReadOnly: false },
  { Id: 7, Label: 'Travel Coordinator', JSON_Name: 'TRAVEL_COORDINATOR', Order: 7, isReadOnly: false },
  { Id: 8, Label: 'Vehicle Driver', JSON_Name: 'VEHICLE_DRIVER', Order: 8, isReadOnly: false },
  { Id: 9, Label: 'Venue Assistance', JSON_Name: 'VENUE_ASSISTANCE', Order: 9, isReadOnly: false },
  { Id: 10, Label: 'Car Parking', JSON_Name: 'CAR_PARKING', Order: 10, isReadOnly: false },
  { Id: 11, Label: 'Babysitter', JSON_Name: 'BABYSITTER', Order: 11, isReadOnly: false },
  { Id: 12, Label: 'Security', JSON_Name: 'SECURITY', Order: 12, isReadOnly: false },
] as const;

/** VehicleOwner records (Long Integer Id as text, Label, JSON_Name, Order). */
export const ORBIT_VEHICLE_OWNERS = [
  { Id: '2', Label: 'Host', JSON_Name: 'HOST', Order: 1 },
  { Id: '1', Label: 'Host (Hire)', JSON_Name: 'HOST_HIRE', Order: 2 },
  { Id: '3', Label: 'Helper', JSON_Name: 'HELPER', Order: 3 },
  { Id: '4', Label: 'Guest', JSON_Name: 'GUEST', Order: 4 },
] as const;

/** VehicleType records (Long Integer Id as text, Label, JSON_Name, Order). */
export const ORBIT_VEHICLE_TYPES = [
  { Id: '5', Label: 'Car', JSON_Name: 'CAR', Order: 1 },
  { Id: '3', Label: 'SUV', JSON_Name: 'SUV', Order: 2 },
  { Id: '1', Label: 'Van', JSON_Name: 'VAN', Order: 3 },
  { Id: '2', Label: 'Mini Bus', JSON_Name: 'MINI_BUS', Order: 4 },
  { Id: '7', Label: 'Coach', JSON_Name: 'COACH', Order: 5 },
  { Id: '6', Label: 'Taxi', JSON_Name: 'TAXI', Order: 6 },
  { Id: '8', Label: 'Utility', JSON_Name: 'UTILITY', Order: 7 },
  { Id: '4', Label: 'None', JSON_Name: 'NONE', Order: 8 },
] as const;

/** A host allocation of a milestone: the household that hosts the guest (MilestoneInfo.HostId / MilestoneHost). */
export interface OrbitHostAllocation {
  HostId: string;
  MilestoneHost: string;
  /** The hosting household's e-mail address (ContactByEmailOrbitHost In_HostEmail; example.com, fictional). */
  HostEmail: string;
}

/** The Orbit Helpdesk's e-mail address: the server sends ContactByEmailOrbitHelpdesk's e-mails there (the client only
    sends IsContactHelpdesk True; example.com, fictional). */
export const ORBIT_HELPDESK_EMAIL = 'orbit.helpdesk@example.com';

/** A milestone of an event, in Milestone_ScreenRec terms (OrbitMilestoneType Id from the static entity
    Connect2_OrbitMobile_MUI.orbitMilestoneType). Dates are UTC wire DateTimes. */
export interface OrbitMilestone {
  MilestoneId: string;
  OrbitMilestoneTypeId: string;
  Title: string;
  MilestoneStartDateTime: string;
  MilestoneEndDateTime: string;
  Location: string;
  Seating: string;
  Description: string;
  host?: OrbitHostAllocation;
  /** Order of the milestone within its day (Milestone_ScreenRec.SequenceNo; the itinerary sorts a day by it). */
  SequenceNo?: string;
  /** Rooms of a hosted accommodation milestone with the guests allocated to each (GetAccommodationHost Rooms). */
  rooms?: readonly OrbitRoom[];
}

/** A guest of a hosted accommodation (MemberInformationRec of GetAccommodationHost). Long Integer ids as text. */
export interface OrbitGuestMember {
  MemberId: string;
  Title: string;
  FirstName: string;
  IsHouseholder: boolean;
  IsSpouse: boolean;
  Age: string;
  /** "" = no phone (no phone icon). */
  Phone: string;
}

/** A visiting household (GuestItem of GetAccommodationHost: HouseholderId, locality and country of the household). */
export interface OrbitGuestHousehold {
  HouseholderId: string;
  Surname: string;
  LocalityId: string;
  Locality: string;
  CountryCode: string;
  members: readonly OrbitGuestMember[];
}

/** A room of the host's home and the guests allocated to it, per household (RoomItem of GetAccommodationHost). */
export interface OrbitRoom {
  RoomId: string;
  RoomName: string;
  Floor: string;
  /** RoomInformation.Type: who the room is for (Couple, Female, Male). */
  Type: string;
  Beds: string;
  guests: readonly { household: OrbitGuestHousehold; memberIds: readonly string[] }[];
}

/* The two families the household hosts for the conference nights (MilestoneDetail/default, a full-permission account,
   dom/default.html:93-870). Captured: six rooms in this order, "Room: 1-Master Guest" on the Ground Floor, a room on
   the Second Floor, "Room: Guest 1", "Room: Guest 2", "Room: Guest 3" (type Male); room titles, floors, types, beds,
   names, localities and ages are fictional with the captured lengths where they were masked (title 2-4 letters, names
   and surnames of the captured word lengths, locality "San Nicolás" 3 7 and "Necochea" 8 + " - AR"). Ages as captured
   (43 43, two one-digit, 20 17, 40 42, 12, 10); a dot on the parents' photos (DisplayDot, householder or spouse); a
   phone icon for the adults and the two eldest daughters only; no guest arrangements, no Orbit admin. */
const HERRERA: OrbitGuestHousehold = {
  HouseholderId: '880101',
  Surname: 'Herrera',
  LocalityId: '611',
  Locality: 'San Nicolás',
  CountryCode: 'AR',
  members: [
    {
      MemberId: '880101',
      Title: 'Mr',
      FirstName: 'Martín',
      IsHouseholder: true,
      IsSpouse: false,
      Age: '43',
      Phone: '+54 336 555 0141',
    },
    {
      MemberId: '880102',
      Title: 'Mrs',
      FirstName: 'Laura',
      IsHouseholder: false,
      IsSpouse: true,
      Age: '43',
      Phone: '+54 336 555 0142',
    },
    {
      MemberId: '880103',
      Title: 'Miss',
      FirstName: 'Carola',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '20',
      Phone: '+54 336 555 0143',
    },
    {
      MemberId: '880104',
      Title: 'Miss',
      FirstName: 'Antonia',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '17',
      Phone: '+54 336 555 0144',
    },
    {
      MemberId: '880105',
      Title: 'Miss',
      FirstName: 'Natalia',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '9',
      Phone: '',
    },
    {
      MemberId: '880106',
      Title: 'Miss',
      FirstName: 'Emilia',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '7',
      Phone: '',
    },
  ],
};

const RAMOS: OrbitGuestHousehold = {
  HouseholderId: '880201',
  Surname: 'Ramos',
  LocalityId: '612',
  Locality: 'Necochea',
  CountryCode: 'AR',
  members: [
    {
      MemberId: '880201',
      Title: 'Mr',
      FirstName: 'Pedro',
      IsHouseholder: true,
      IsSpouse: false,
      Age: '40',
      Phone: '+54 2262 55 0151',
    },
    {
      MemberId: '880202',
      Title: 'Mrs',
      FirstName: 'Sonia',
      IsHouseholder: false,
      IsSpouse: true,
      Age: '42',
      Phone: '+54 2262 55 0152',
    },
    {
      MemberId: '880203',
      Title: 'Miss',
      FirstName: 'Inés',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '12',
      Phone: '',
    },
    {
      MemberId: '880204',
      Title: 'Mr',
      FirstName: 'Felipe',
      IsHouseholder: false,
      IsSpouse: false,
      Age: '10',
      Phone: '',
    },
  ],
};

/** The rooms of the Vitale home and their guests, the same for both conference nights. */
export const ORBIT_HOSTED_ROOMS: readonly OrbitRoom[] = [
  {
    RoomId: '4101',
    RoomName: '1-Master Guest',
    Floor: 'Ground Floor',
    Type: 'Couple',
    Beds: '1',
    guests: [{ household: HERRERA, memberIds: ['880101', '880102'] }],
  },
  {
    RoomId: '4102',
    RoomName: 'Bedroom Three',
    Floor: 'Second Floor',
    Type: 'Female',
    Beds: '2',
    guests: [{ household: HERRERA, memberIds: ['880105', '880106'] }],
  },
  {
    RoomId: '4103',
    RoomName: 'Studio',
    Floor: 'Basement',
    Type: 'Female',
    Beds: '2',
    guests: [{ household: HERRERA, memberIds: ['880103', '880104'] }],
  },
  {
    RoomId: '4104',
    RoomName: 'Guest 1',
    Floor: 'Upstairs',
    Type: 'Couple',
    Beds: '1',
    guests: [{ household: RAMOS, memberIds: ['880201', '880202'] }],
  },
  {
    RoomId: '4105',
    RoomName: 'Guest 2',
    Floor: 'Upstairs',
    Type: 'Female',
    Beds: '1',
    guests: [{ household: RAMOS, memberIds: ['880203'] }],
  },
  {
    RoomId: '4106',
    RoomName: 'Guest 3',
    Floor: 'Upstairs',
    Type: 'Male',
    Beds: '1',
    guests: [{ household: RAMOS, memberIds: ['880204'] }],
  },
];

/** Helpers of a hosting household for an event, per role (HelperItem of GetHelperDetails: Role and its members). */
export interface OrbitHelperGroup {
  /** HelperItem.Role as the server sends it; HelpersDetail shows it as GetFormattedStringFromHelperType ("Catering/s").
      Texts are fictional, upper case, after the TST static entity Connect2_OrbitMobile_MUI.helperRole (catering, usher,
      …; HelpersDetail Q2). */
  Role: string;
  helpers: readonly { household: OrbitGuestHousehold; memberIds: readonly string[] }[];
}

/** Whole years between "Born d Mon yyyy" (directory.ts) and `today`. */
const ageOn = (born: string, today: Date): string => {
  const b = new Date(`${born.replace('Born ', '')} UTC`);
  const birthdayPassed =
    today.getUTCMonth() > b.getUTCMonth() ||
    (today.getUTCMonth() === b.getUTCMonth() && today.getUTCDate() >= b.getUTCDate());
  return String(today.getUTCFullYear() - b.getUTCFullYear() - (birthdayPassed ? 0 : 1));
};

/** A household of the locality (directory.ts) as an Orbit household: member ids = household id + position, titles
    Mr / Mrs for the parents and `childTitles` for the children, a Bahia Blanca mobile number for the adults. */
function localityHousehold(surname: string, childTitles: readonly string[], today: Date): OrbitGuestHousehold {
  const h = LOCALITY_HOUSEHOLDS.find((x) => x.surname === surname) as CastHousehold;
  const parents = h.spouse ? 2 : 1;
  return {
    HouseholderId: h.id,
    Surname: h.surname,
    LocalityId: LOCALITY.id,
    Locality: LOCALITY.name,
    CountryCode: LOCALITY.countryCode,
    members: h.members.map((m, k) => {
      const age = ageOn(m.born, today);
      return {
        MemberId: `${h.id}${String(k + 1)}`,
        Title: k === 0 ? 'Mr' : k < parents ? 'Mrs' : (childTitles[k - parents] ?? ''),
        FirstName: m.first,
        IsHouseholder: k === 0,
        IsSpouse: k === 1 && parents === 2,
        Age: age,
        Phone: Number(age) >= 18 ? `+54 291 555 ${h.id.slice(-2)}${String(k + 1)}0` : '',
      };
    }),
  };
}

/** The helpers allocated to the Vitale household for the conference (HelpersDetail, scenario `helpers`, Q2): the
    Suárez couple cooks for the guests and Pedro Gallardo with his son Santiago usher at the hall. On TST the household
    had no helper allocated yet (HelpersDetail/default: "There is no Helper available."), so event 7301 keeps an empty
    helper allocation in the real scenario. */
export function orbitEventHelpers(today: Date = new Date()): OrbitHelperGroup[] {
  const suarez = localityHousehold('Suárez', ['Mr', 'Miss'], today);
  const gallardo = localityHousehold('Gallardo', ['Mr', 'Miss'], today);
  return [
    {
      Role: 'CATERING',
      helpers: [{ household: suarez, memberIds: suarez.members.slice(0, 2).map((m) => m.MemberId) }],
    },
    {
      Role: 'USHER',
      helpers: [
        { household: gallardo, memberIds: [gallardo.members[0], gallardo.members[2]].map((m) => m?.MemberId ?? '') },
      ],
    },
  ];
}

/** What EventDetail shows about an event for the signed-in household beyond the landing row (Get_EventDetails,
    Get_HostSurveyStatus, Get_HasDocuments, Get_HasQRCode of ScreenBlock_EventDetail). */
export interface OrbitEventDetail {
  /** Response.TypeOfEvent: the kind of event (window icon row). */
  TypeOfEvent: string;
  IsBookletVisible: boolean;
  SetUpMeals: boolean;
  Meals: boolean;
  Accommodations: boolean;
  Helpers: boolean;
  Transport: boolean;
  GuestTransport: boolean;
  /** JSON_Name of the household's host survey status (Get_HostSurveyStatus Response.Id; ORBIT_SURVEY_STATUSES). */
  HostSurveyStatus: string;
  HasDocuments: boolean;
  HasQRCode: boolean;
  HasScanned: boolean;
}

/** An Orbit event with the members assigned to it and their milestones. */
export interface OrbitEvent {
  EventId: string;
  Title: string;
  EventType: (typeof ORBIT_EVENT_TYPES)[keyof typeof ORBIT_EVENT_TYPES];
  StartEventDate: string;
  EndEventDate: string;
  EventLocation: string;
  /** SequenceNo of the summary row (the landing sorts by it). */
  SequenceNo: string;
  /** MemberIds of the household members assigned to the event. */
  attendees: readonly string[];
  milestones: readonly OrbitMilestone[];
  /** The event as EventDetail shows it (absent: an event without detail data). */
  detail?: OrbitEventDetail;
  /** Helpers allocated to the hosting household (GetHelperDetails In_EventId, In_HostId = the household's
      HouseholderId); absent: the household does not host. */
  helperAllocation?: { HostId: string; groups: readonly OrbitHelperGroup[] };
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** "yyyy-MM-ddTHH:mm:ssZ" of the UTC day `days` after `from` at hh:mm. */
const utcAt = (from: Date, days: number, hh: number, mm = 0): string => {
  const d = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate() + days, hh, mm));
  return d.toISOString().replace('.000Z', 'Z');
};

/** The first Friday at least a week after `today` (the meetings run Friday to Sunday). */
const meetingsFriday = (today: Date): Date => {
  const base = new Date(today.getTime() + 7 * DAY_MS);
  return new Date(base.getTime() + ((5 - base.getUTCDay() + 7) % 7) * DAY_MS);
};

/** The Orbit events of the mock world, built for `today` (default: now). */
export function orbitEvents(today: Date = new Date()): OrbitEvent[] {
  const fri = meetingsFriday(today);
  const hall = `${LOCALITY.name} Main Hall`;
  /* The Vitale home (directory.ts VITALE.address, street and city lines; the captured location has a double space
     between them, dom/default.html:282) and its householders, who host the guests (MilestoneHost). */
  const [street = '', city = ''] = VITALE.address.split('\n');
  const home = `${street}  ${city.replace(' Provincia de Buenos Aires', ', Buenos Aires')}`;
  const hosts: OrbitHostAllocation = {
    HostId: memberId('Julián'),
    MilestoneHost: `Mr ${VITALE.householder} & Mrs ${VITALE.spouse ?? ''} ${VITALE.surname}`,
    HostEmail: 'vitale.family@example.com',
  };
  return [
    {
      EventId: '7301',
      Title: 'Weekend Bible Conferences - Bahia and Azul',
      EventType: ORBIT_EVENT_TYPES.host,
      StartEventDate: utcAt(fri, 0, 9),
      EndEventDate: utcAt(fri, 2, 17),
      EventLocation: hall,
      SequenceNo: '1',
      attendees: [MOCK_USER_ID, memberId('Julián'), memberId('Fiorella')],
      /* The household hosts two visiting families for the Friday and Saturday nights; each conference day
         has its meeting (EventDetail dom/default.html:216-317: day 1 = Accommodation then a meeting at 11:59 PM,
         no location; the host allocation lists two accommodation nights, :129-170). */
      milestones: [
        {
          MilestoneId: '7301-1',
          OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPES.accommodationHost.Id,
          Title: 'Accommodation',
          MilestoneStartDateTime: utcAt(fri, 0, 18),
          MilestoneEndDateTime: utcAt(fri, 1, 9),
          Location: home,
          Seating: '',
          Description: 'The Herrera and Ramos families stay with the household for the conference nights.',
          host: hosts,
          rooms: ORBIT_HOSTED_ROOMS,
          SequenceNo: '1',
        },
        {
          MilestoneId: '7301-2',
          OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPES.meetingHost.Id,
          Title: 'Meeting',
          MilestoneStartDateTime: utcAt(fri, 0, 23, 59),
          MilestoneEndDateTime: utcAt(fri, 1, 1),
          Location: '',
          Seating: '',
          Description: 'Online welcome meeting for the hosting households.',
          SequenceNo: '2',
        },
        {
          MilestoneId: '7301-3',
          OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPES.accommodationHost.Id,
          Title: 'Accommodation',
          MilestoneStartDateTime: utcAt(fri, 1, 18),
          MilestoneEndDateTime: utcAt(fri, 2, 9),
          Location: home,
          Seating: '',
          Description: 'The Herrera and Ramos families stay with the household for the conference nights.',
          host: hosts,
          rooms: ORBIT_HOSTED_ROOMS,
          SequenceNo: '1',
        },
        {
          MilestoneId: '7301-4',
          OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPES.meetingHost.Id,
          Title: 'Conference Meeting',
          MilestoneStartDateTime: utcAt(fri, 1, 13),
          MilestoneEndDateTime: utcAt(fri, 1, 15),
          Location: hall,
          Seating: 'Section B, row 12',
          Description: '',
          SequenceNo: '2',
        },
        {
          MilestoneId: '7301-5',
          OrbitMilestoneTypeId: ORBIT_MILESTONE_TYPES.meetingHost.Id,
          Title: 'Closing Meeting',
          MilestoneStartDateTime: utcAt(fri, 2, 15),
          MilestoneEndDateTime: utcAt(fri, 2, 17),
          Location: hall,
          Seating: 'Section B, row 12',
          Description: '',
          SequenceNo: '1',
        },
      ],
      detail: {
        TypeOfEvent: 'Weekend Conference Program',
        IsBookletVisible: false,
        SetUpMeals: false,
        Meals: false,
        Accommodations: true,
        Helpers: true,
        Transport: false,
        GuestTransport: false,
        HostSurveyStatus: 'confirmed',
        HasDocuments: false,
        HasQRCode: false,
        HasScanned: false,
      },
      /* HelpersDetail/default (EventDetail → Host Allocation → Helper "View"): no helper allocated yet. */
      helperAllocation: { HostId: VITALE.id, groups: [] },
    },
  ];
}

/** The events a member is assigned to. */
export const orbitEventsOfMember = (id: string, today: Date = new Date()): OrbitEvent[] =>
  orbitEvents(today).filter((e) => e.attendees.includes(id));

/* ---- Host survey (HostSurvey route, DataActionGetHostSurvey of ScreenBlock_HostSurvey) ---- */

/** A room of the host survey (HostSurvey_RoomItem). Floor and GenderPreference are JSON_Names of the local entities
    LocalHouseFloor and LocalGenderPreference; Beds lists bed-size JSON_Names, one per bed. */
export interface OrbitSurveyRoom {
  Name: string;
  GenderPreference: string;
  Floor: string;
  Beds: readonly string[];
  HasEnsuite: boolean;
  HasToilet: boolean;
  HasShower: boolean;
  HasBasin: boolean;
  RoomNote: string;
}

/** A meal the household offers to cook (HostSurvey_MealItemInfo): the meal milestone, its day and the comfortable /
    stretch capacity (people). */
export interface OrbitSurveyMeal {
  Id: string;
  Name: string;
  MilestoneDescription: string;
  EventDate: string;
  SequenceNo: string;
  IsPreferred: boolean;
  ComfortableCapacity: string;
  StretchCapacity: string;
}

/** The host survey a household answered for an event (GetHostSurveyResponse in domain form). */
export interface OrbitHostSurvey {
  Id: string;
  EventId: string;
  /** HouseholderId of the hosting household (the survey's MemberId). */
  MemberId: string;
  /** JSON_Name of the survey status (ORBIT_SURVEY_STATUSES). */
  HostProfileSurveyStatus: string;
  AccommodationSurvey: boolean;
  AccommodationSurveyUpdate: boolean;
  MealSurvey: boolean;
  MealSurveyUpdate: boolean;
  HelperSurvey: boolean;
  VehicleSurvey: boolean;
  /** Notes of the event team shown above each step (admin notes) and the household's note for the event team. */
  AccommodationSurveyNote: string;
  MealSurveyNote: string;
  HelperSurveyNote: string;
  VehicleSurveyNote: string;
  HostSurveyNote: string;
  AccommodationNote: string;
  MealNote: string;
  rooms: readonly OrbitSurveyRoom[];
  meals: readonly OrbitSurveyMeal[];
}

const room = (
  Name: string,
  GenderPreference: string,
  Floor: string,
  Beds: readonly string[],
  HasEnsuite = false,
): OrbitSurveyRoom => ({
  Name,
  GenderPreference,
  Floor,
  Beds,
  HasEnsuite,
  HasToilet: false,
  HasShower: false,
  HasBasin: false,
  RoomNote: '',
});

/** The host surveys of the mock world. The Vitale household answered the survey of event 7301 and the event team
    confirmed it (EventDetail/default: status "Confirmed"; HostSurvey/default: Summary Review, read-only).
    Captured on TST (HostSurvey/default, dom/default.html:164-700): seven rooms (names "1-Master Guest", 7+5 letters,
    6 letters, "Guest 1", "Guest 2", "Guest 3", 5+1+6 letters; couple or single-guest preference, one bed digit, floor
    "Ground Floor", "Second Floor" or an 8-letter floor; an ensuite in the first two rooms) and two meals (6+4 letters
    and "Supper Meeting", a dd/MM/yyyy day, "CP 22, SCP 26" and "CP 15, SCP 20"); no helper or vehicle section, no note
    for the event team. Names and labels of the masked texts are fictional with the captured lengths. */
export function orbitHostSurveys(today: Date = new Date()): OrbitHostSurvey[] {
  const fri = meetingsFriday(today);
  return [
    {
      Id: '61842',
      EventId: '7301',
      MemberId: VITALE.id,
      HostProfileSurveyStatus: 'confirmed',
      AccommodationSurvey: true,
      AccommodationSurveyUpdate: true,
      MealSurvey: true,
      MealSurveyUpdate: true,
      HelperSurvey: false,
      VehicleSurvey: false,
      AccommodationSurveyNote: 'Please list every room you can offer for the two conference nights.',
      MealSurveyNote: 'Tick the meals you would prefer to prepare for the visiting families.',
      HelperSurveyNote: '',
      VehicleSurveyNote: '',
      HostSurveyNote: '',
      AccommodationNote: 'The basement rooms share the bathroom next to the laundry.',
      MealNote: 'We can seat up to 22 people at the dining table and the garden table.',
      rooms: [
        room('1-Master Guest', 'COUPLE', 'ground', ['QUEEN'], true),
        room('Sunrise Suite', 'FEMALE', 'second', ['SINGLE', 'SINGLE'], true),
        room('Studio', 'FEMALE', 'basement', ['SINGLE']),
        room('Guest 1', 'COUPLE', 'basement', ['DOUBLE']),
        room('Guest 2', 'FEMALE', 'basement', ['SINGLE', 'SINGLE']),
        room('Guest 3', 'MALE', 'basement', ['SINGLE']),
        room('Annex 2 Double', 'COUPLE', 'basement', ['DOUBLE']),
      ],
      meals: [
        {
          Id: '7301-M1',
          Name: 'Lunch',
          MilestoneDescription: 'Midday Meal',
          EventDate: utcAt(fri, 1, 0).slice(0, 10),
          SequenceNo: '1',
          IsPreferred: true,
          ComfortableCapacity: '22',
          StretchCapacity: '26',
        },
        {
          Id: '7301-M2',
          Name: 'Supper',
          MilestoneDescription: 'Supper Meeting',
          EventDate: utcAt(fri, 2, 0).slice(0, 10),
          SequenceNo: '2',
          IsPreferred: false,
          ComfortableCapacity: '15',
          StretchCapacity: '20',
        },
      ],
    },
  ];
}

/* ---- Event 7301 beyond EventDetail's capture: transport, documents and the event pass ----
   TransportDetail, ViewDocuments and QRCodeGenerate were not reachable on TST (no-capture.json, user 2026-10-16) and the
   EventDetail capture of event 7301 shows no transport milestone, no documents and no QR code entry (detail above:
   Transport, HasDocuments and HasQRCode false, kept as captured). The data below is what those three routes answer
   when opened directly (their route-spec.md review URLs); none of it is listed by EventDetail. Story: Matías (the
   signed-in user) flies home from his university term in Buenos Aires the evening before the conference and Julián
   collects him at the airport; the event team published four documents and issued his event pass. */

/** An OrbitMilestoneType record of a transport type as Get_TransportDetail returns it (Response.MilestoneType,
    Connect2_OrbitMobile_BL.OrbitMilestoneTypeRec). Not captured (TransportDetail Q2): the icon and header classes are
    the class names of the original theme (public/UBTConnect/css/Connect2_LegacyShared.OrbitTheme.css:
    orbit-icon-transportation-<type>[-departure|-arrival], orbit-transport-detail-<type>); headers fictional. */
export interface OrbitTransportMilestoneType {
  Id: string;
  Is_Active: boolean;
  Order: number;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
  CanHost: boolean;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string;
  IconTransportArrival: string;
  TransportHeaderClass: string;
  TravelInfoHeader: string;
  TravelInfoHeaderIcon: string;
}

const transportType = (type: 'flight' | 'vehicle', name: string, order: number, header: string) => ({
  Id: `transport-${type}`,
  Is_Active: true,
  Order: order,
  Type: 'Guest',
  Name: name,
  MainColorVar: 'green',
  MainIcon: `orbit-icon-transportation-${type}`,
  CanHost: false,
  IsTransportMilestone: true,
  IconTransportDeparture: `orbit-icon-transportation-${type}-departure`,
  IconTransportArrival: `orbit-icon-transportation-${type}-arrival`,
  TransportHeaderClass: `orbit-transport-detail-${type}`,
  TravelInfoHeader: header,
  TravelInfoHeaderIcon: '',
});

/** The transport milestone types of the itinerary (Ids = static entity Connect2_OrbitMobile_MUI.orbitMilestoneType). */
export const ORBIT_TRANSPORT_MILESTONE_TYPES: Readonly<Record<'flight' | 'vehicle', OrbitTransportMilestoneType>> = {
  flight: transportType('flight', 'Flight', 6, 'Flight Number'),
  vehicle: transportType('vehicle', 'Vehicle', 7, 'Number Plate'),
};

/** A place and time of a transport leg (TransportLocationRec); DateTime "" = no time. */
export interface OrbitTransportLocation {
  Location: string;
  Terminal: string;
  DateTime: string;
}

/** A transport leg of a member (GetTransportDetail_Response in domain form), by its milestone id. */
export interface OrbitTransportLeg {
  MilestoneId: string;
  EventId: string;
  /** MemberIds the leg belongs to. */
  memberIds: readonly string[];
  milestoneType: OrbitTransportMilestoneType;
  Title: string;
  Type: string;
  TransportType: string;
  Operator: string;
  TravelIdentifier: string;
  DepartureLocation: OrbitTransportLocation;
  ArrivalLocation: OrbitTransportLocation;
  /** Stopovers; StopDurationTime is a Time "HH:mm:ss". */
  Stops: readonly {
    Title: string;
    ArrivalLocation: OrbitTransportLocation;
    DepartureLocation: OrbitTransportLocation;
    StopDurationTime: string;
  }[];
  Seats: readonly { Departure: string; Arrival: string; SeatNumber: string }[];
  BaggageAllowance: { CarryOnBaggage: string; CheckedBaggage: string };
  /** Long Integers as text ("0" = none). */
  TripDuration: { TripDurationHours: string; TripDurationMinutes: string };
  TravelInfo: {
    BookingReference: string;
    Class: string;
    CodeShareFlight: string;
    CodeShareName: string;
    DriverName: string;
    FareType: string;
    OnboardMeal: string;
    VehicleName: string;
  };
  Notes: string;
}

const NO_TRAVEL_INFO: OrbitTransportLeg['TravelInfo'] = {
  BookingReference: '',
  Class: '',
  CodeShareFlight: '',
  CodeShareName: '',
  DriverName: '',
  FareType: '',
  OnboardMeal: '',
  VehicleName: '',
};

/** The itinerary of event 7301 (TransportDetail Q1): the flight 7301-T1 with its stop at Mar del Plata, then the
    pick-up 7301-T2 from the airport to the Vitale home, both the evening before the conference (Thursday). */
export function orbitTransportLegs(today: Date = new Date()): OrbitTransportLeg[] {
  const fri = meetingsFriday(today);
  const [street = '', city = ''] = VITALE.address.split('\n');
  const airport = 'Bahia Blanca Comandante Espora (BHI)';
  return [
    {
      MilestoneId: '7301-T1',
      EventId: '7301',
      memberIds: [MOCK_USER_ID],
      milestoneType: ORBIT_TRANSPORT_MILESTONE_TYPES.flight,
      Title: 'Flight to Bahia Blanca',
      Type: 'Flight',
      TransportType: 'Commercial flight',
      Operator: 'Pampa Air',
      TravelIdentifier: 'PQ 1554',
      DepartureLocation: {
        Location: 'Buenos Aires Aeroparque Jorge Newbery (AEP)',
        Terminal: 'Terminal A, gate 7',
        DateTime: utcAt(fri, -1, 18, 40),
      },
      ArrivalLocation: { Location: airport, Terminal: 'Main terminal', DateTime: utcAt(fri, -1, 21, 5) },
      Stops: [
        {
          Title: 'Mar del Plata (MDQ)',
          ArrivalLocation: { Location: '', Terminal: 'Main terminal', DateTime: utcAt(fri, -1, 19, 35) },
          DepartureLocation: { Location: '', Terminal: 'Main terminal, gate 2', DateTime: utcAt(fri, -1, 20, 5) },
          StopDurationTime: '00:30:00',
        },
      ],
      Seats: [
        { Departure: 'AEP', Arrival: 'MDQ', SeatNumber: '14C' },
        { Departure: 'MDQ', Arrival: 'BHI', SeatNumber: '14C' },
      ],
      BaggageAllowance: { CarryOnBaggage: '1 bag, 8 kg', CheckedBaggage: '1 suitcase, 15 kg' },
      TripDuration: { TripDurationHours: '2', TripDurationMinutes: '25' },
      TravelInfo: {
        ...NO_TRAVEL_INFO,
        BookingReference: 'QZK7PL',
        Class: 'Economy',
        CodeShareFlight: 'AC 3154',
        CodeShareName: 'Andes Connect',
        FareType: 'Promo',
        OnboardMeal: 'Snack',
      },
      Notes: 'Matías flies home from his university term in Buenos Aires for the conference weekend.',
    },
    {
      MilestoneId: '7301-T2',
      EventId: '7301',
      memberIds: [MOCK_USER_ID],
      milestoneType: ORBIT_TRANSPORT_MILESTONE_TYPES.vehicle,
      Title: 'Airport pick-up',
      Type: 'Vehicle',
      TransportType: 'Family car',
      Operator: '',
      TravelIdentifier: 'AE 512 KD',
      DepartureLocation: { Location: `${airport}, arrivals hall`, Terminal: '', DateTime: utcAt(fri, -1, 21, 30) },
      ArrivalLocation: { Location: `${street}, ${city}`, Terminal: '', DateTime: utcAt(fri, -1, 22, 5) },
      Stops: [],
      Seats: [],
      BaggageAllowance: { CarryOnBaggage: '', CheckedBaggage: '' },
      TripDuration: { TripDurationHours: '0', TripDurationMinutes: '0' },
      TravelInfo: { ...NO_TRAVEL_INFO, DriverName: 'Julián Vitale', VehicleName: 'Grey double-cab pick-up' },
      Notes: 'Julián waits at the arrivals hall exit; the car is in the short-stay car park, row C.',
    },
  ];
}

/** A document the event team published for an event (EventDocumentItemRec); LastUpdatedOn is a UTC wire DateTime. */
export interface OrbitEventDocument {
  EventId: string;
  DocumentName: string;
  DocumentURL: string;
  LastUpdatedBy: string;
  LastUpdatedOn: string;
}

/** The documents of event 7301 (ViewDocuments Q1): PDF links on example.com, names without the extension (the screen
    adds ".pdf" when it opens one, AddExtensionToFile). */
export function orbitEventDocuments(today: Date = new Date()): OrbitEventDocument[] {
  const fri = meetingsFriday(today);
  const doc = (name: string, file: string, daysBefore: number): OrbitEventDocument => ({
    EventId: '7301',
    DocumentName: name,
    DocumentURL: `https://example.com/orbit/events/7301/${file}.pdf`,
    LastUpdatedBy: 'Orbit Event Team',
    LastUpdatedOn: utcAt(fri, -daysBefore, 14, 30),
  });
  return [
    doc('Conference Programme', 'conference-programme', 12),
    doc('Hosting Guidelines', 'hosting-guidelines', 12),
    doc('Main Hall Map and Parking', 'main-hall-map-and-parking', 9),
    doc('Guest Arrival Schedule', 'guest-arrival-schedule', 3),
  ];
}

/** The event pass of a member (GetEventQRCodeResponse with the QR image the server renders, QRCodeAsBinary). */
export interface OrbitEventPass {
  EventId: string;
  MemberId: string;
  /** How the member takes part (GuestRole). */
  GuestRole: string;
  /** The GMP tag printed under the role ("GMP Tag: " + Tag). */
  Tag: string;
  /** Seat rows of the seated meetings (QRCodeSeatItem; the Seating "Section B, row 12" of 7301-4 and 7301-5). */
  Seats: readonly { MilestoneName: string; SeatAllocation: string }[];
  /** The text the QR code encodes (QrCodeImage; the screen does not read it). */
  payload: string;
  /** PNG of the QR code of `payload`, base64 (280 x 280 px, error correction M; rendered offline with macOS
      CoreImage CIQRCodeGenerator and decoded back to check it, QRCodeGenerate Q1). */
  qrCodePngBase64: string;
}

/** The event passes of the mock world (QRCodeGenerate Q1): Matías's pass for event 7301. */
export const ORBIT_EVENT_PASSES: readonly OrbitEventPass[] = [
  {
    EventId: '7301',
    MemberId: MOCK_USER_ID,
    GuestRole: 'Host',
    Tag: 'H-0417',
    Seats: [
      { MilestoneName: 'Conference Meeting', SeatAllocation: '12' },
      { MilestoneName: 'Closing Meeting', SeatAllocation: '12' },
    ],
    payload: 'UBTCONNECT-ORBIT|EVENT:7301|MEMBER:990001|PASS:H-0417',
    qrCodePngBase64:
      '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',
  },
];

/* ---- Guest arrangements of the visiting families (GuestArrangements route, DataActionGetGuestArrangements of
   ScreenBlock_GuestArrangements) ----
   GuestArrangements was not reachable on TST (no-capture.json, user 2026-10-16): built from the compiled code. The
   families of ORBIT_HOSTED_ROOMS (Herrera from San Nicolás, Ramos from Necochea) as the event team arranged their
   stay for event 7301: who needs special care, how and when they arrive, what they eat on each conference day and how
   they leave. The Herrera family comes by the overnight coach and has three members with special needs; the Ramos
   family drives down in their own car (no number plate recorded for the arrival) and has none. Dates are UTC wire
   DateTimes built for `today`, like orbitEvents. */

/** One special need of a member (Connect2_OrbitMobile_IS.SpecialNeedsRec). */
export interface OrbitSpecialNeed {
  Category: string;
  Type: string;
  Notes: string;
}

/** A transport milestone of a guest household's arrival or departure (MilestoneTransport_ScreenRec). */
export interface OrbitGuestTransport {
  milestoneType: OrbitTransportMilestoneType;
  Title: string;
  Type: string;
  /** Number plate or service number; "" = not recorded (the screen shows "Not available"). */
  TravelIdentifier: string;
  Notes: string;
  SequenceNo: number;
  DepartureLocation: string;
  ArrivalLocation: string;
  MilestoneStartDateTime: string;
  MilestoneEndDateTime: string;
}

/** The meals of one conference day (MealDetailItemRec). */
export interface OrbitGuestMealDay {
  MilestoneDateTime: string;
  MiddayMeal: string;
  EveningMeal: string;
}

/** The arrangements of a visiting household for an event. */
export interface OrbitGuestArrangement {
  EventId: string;
  household: OrbitGuestHousehold;
  /** Special needs per member id (members without one are left out). */
  specialNeeds: Readonly<Record<string, readonly OrbitSpecialNeed[]>>;
  arrivals: readonly OrbitGuestTransport[];
  meals: readonly OrbitGuestMealDay[];
  departures: readonly OrbitGuestTransport[];
}

/** The arrangements of the two families hosted by the Vitale household for event 7301. */
export function orbitGuestArrangements(today: Date = new Date()): OrbitGuestArrangement[] {
  const fri = meetingsFriday(today);
  const vehicle = ORBIT_TRANSPORT_MILESTONE_TYPES.vehicle;
  const busTerminal = 'Bahia Blanca bus terminal, Av. Brown 1700';
  const [street = '', city = ''] = VITALE.address.split('\n');
  const vitaleHome = `${street}, ${city}`;
  return [
    {
      EventId: '7301',
      household: HERRERA,
      specialNeeds: {
        '880102': [
          {
            Category: 'Mobility',
            Type: 'Ground floor room',
            Notes: 'Knee surgery in August; Laura cannot manage stairs yet.',
          },
        ],
        '880105': [
          {
            Category: 'Dietary',
            Type: 'Gluten free',
            Notes: 'Coeliac: no wheat, barley or rye, breakfast included.',
          },
        ],
        '880106': [{ Category: 'Allergy', Type: 'Peanut allergy', Notes: '' }],
      },
      arrivals: [
        {
          milestoneType: vehicle,
          Title: 'Overnight coach from San Nicolás',
          Type: 'Vehicle',
          TravelIdentifier: 'AF 207 TR',
          Notes: 'Julián meets the family at platform 4 with the double-cab pick-up.',
          SequenceNo: 1,
          DepartureLocation: 'San Nicolás bus terminal',
          ArrivalLocation: busTerminal,
          MilestoneStartDateTime: utcAt(fri, -1, 21, 0),
          MilestoneEndDateTime: utcAt(fri, 0, 9, 30),
        },
      ],
      meals: [
        {
          MilestoneDateTime: utcAt(fri, 0, 12, 30),
          MiddayMeal: 'Lunch at the Main Hall',
          EveningMeal: 'Dinner with the hosting household',
        },
        {
          MilestoneDateTime: utcAt(fri, 1, 12, 30),
          MiddayMeal: 'Packed lunch from the hosts',
          EveningMeal: 'Fellowship dinner at the Main Hall',
        },
        {
          MilestoneDateTime: utcAt(fri, 2, 12, 30),
          MiddayMeal: 'Lunch at the Main Hall',
          EveningMeal: 'Light supper before the coach',
        },
      ],
      departures: [
        {
          milestoneType: vehicle,
          Title: 'Overnight coach to San Nicolás',
          Type: 'Vehicle',
          TravelIdentifier: 'AF 207 TR',
          Notes: 'Julián drives the family to the terminal after the closing meeting.',
          SequenceNo: 1,
          DepartureLocation: busTerminal,
          ArrivalLocation: 'San Nicolás bus terminal',
          MilestoneStartDateTime: utcAt(fri, 2, 21, 0),
          MilestoneEndDateTime: utcAt(fri, 3, 9, 30),
        },
      ],
    },
    {
      EventId: '7301',
      household: RAMOS,
      specialNeeds: {},
      arrivals: [
        {
          milestoneType: vehicle,
          Title: 'Drive from Necochea',
          Type: 'Vehicle',
          TravelIdentifier: '',
          Notes: '',
          SequenceNo: 1,
          DepartureLocation: 'Necochea',
          ArrivalLocation: vitaleHome,
          MilestoneStartDateTime: utcAt(fri, 0, 6, 0),
          MilestoneEndDateTime: utcAt(fri, 0, 10, 15),
        },
      ],
      meals: [
        {
          MilestoneDateTime: utcAt(fri, 0, 12, 30),
          MiddayMeal: 'Lunch at the Main Hall',
          EveningMeal: 'Dinner with the hosting household',
        },
        {
          MilestoneDateTime: utcAt(fri, 1, 12, 30),
          MiddayMeal: 'Packed lunch from the hosts',
          EveningMeal: 'Fellowship dinner at the Main Hall',
        },
      ],
      departures: [
        {
          milestoneType: vehicle,
          Title: 'Drive home to Necochea',
          Type: 'Vehicle',
          TravelIdentifier: 'AC 948 LM',
          Notes: 'They leave straight after the closing meeting to be home before dark.',
          SequenceNo: 1,
          DepartureLocation: vitaleHome,
          ArrivalLocation: 'Necochea',
          MilestoneStartDateTime: utcAt(fri, 2, 17, 30),
          MilestoneEndDateTime: utcAt(fri, 2, 21, 45),
        },
      ],
    },
  ];
}

/* ---- Event booklet (EventBooklet route: Get_EventBookletFilters / Get_EventBookletGuests / Get_EventBookletHelpers of
   ScreenBlock_EventBooklet) ----
   EventBooklet was not reachable on TST (no-capture.json, user 2026-10-16): built from the compiled code. The booklet
   of event 7301 lists who comes to the conference and who helps. Its data actions answer only guests, helpers and the
   filter lists (event days, helper roles, countries with their localities): the booklet has no programme or transport
   part. Guests from other localities ("Invite List"): the Herrera and Ramos families hosted by the Vitale household
   (ORBIT_HOSTED_ROOMS), the Domínguez family from Montevideo hosted by the Pérez household, the Lucero couple from Tandil
   hosted by the Rojas household for the weekend, and Ezequiel Benavídez from Santa Rosa, who has no host and no days
   yet. Guests of the host locality ("Host Localities"): the Molina and Acosta households of Bahia Blanca. Helpers, per
   role (JSON_Name of ORBIT_HELPER_ROLES): the Suárez couple cooks, Pedro Gallardo and his son usher, Julián Vitale
   drives the guests, Patricia Flores gives first aid and Pedro Ramos (a guest) helps at the car park on Saturday.
   OrderNo is the server's sort key (GroupMembersByCountry sorts by it); Days are Dates ("yyyy-MM-dd"). */

/** A member of the booklet (Connect2_OrbitMobile_IS.EventBookletMembersRec in domain form). */
export interface OrbitBookletMember {
  MemberId: string;
  HouseholderId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  Age: string;
  Phone: string;
  IsHouseholder: boolean;
  Country: string;
  CountryCode: string;
  Locality: string;
  LocalityId: string;
  IsHostLocality: boolean;
  /** The hosting household as the booklet shows it; "" = no host allocated (the booklet shows "-"). */
  Host: string;
  HostHouseholderId: string;
  /** The days the member attends (guests) or helps (helpers); empty = none yet ("-"). */
  Days: readonly string[];
  /** JSON_Name of the helper role; "" for a guest. */
  Role: string;
  OrderNo: string;
}

/** The booklet of an event: event info, filter lists, guests and helpers. */
export interface OrbitEventBooklet {
  EventId: string;
  EventName: string;
  EventLocation: string;
  EventLocationId: string;
  EventCountry: string;
  EventCountryCode: string;
  EventStartDateTime: string;
  EventEndDateTime: string;
  /** Filters.EventDays (Dates). */
  eventDays: readonly string[];
  /** Filters.HelperRoles (JSON_Names). */
  helperRoles: readonly string[];
  /** Filters.Countries with their localities. */
  countries: readonly { CountryName: string; Localities: readonly string[] }[];
  guests: readonly OrbitBookletMember[];
  helpers: readonly OrbitBookletMember[];
}

/** The booklets of the mock world (event 7301), built for `today`. */
export function orbitEventBooklets(today: Date = new Date()): OrbitEventBooklet[] {
  const fri = meetingsFriday(today);
  const day = (n: number) => utcAt(fri, n, 0).slice(0, 10);
  const [friday, saturday, sunday] = [day(0), day(1), day(2)];
  const event = orbitEvents(today).find((e) => e.EventId === '7301');
  const hostName = (surname: string) => {
    const h = LOCALITY_HOUSEHOLDS.find((x) => x.surname === surname) as CastHousehold;
    return { Host: `Mr ${h.householder} & Mrs ${h.spouse ?? ''} ${h.surname}`, HostHouseholderId: h.id };
  };
  const NO_HOST = { Host: '', HostHouseholderId: '0' };
  let order = 0;
  /** Booklet rows of the members `memberIds` of a household (all when omitted). */
  const rows = (
    h: OrbitGuestHousehold,
    country: string,
    hostLocality: boolean,
    host: { Host: string; HostHouseholderId: string },
    days: readonly string[],
    role = '',
    memberIds?: readonly string[],
  ): OrbitBookletMember[] =>
    h.members
      .filter((m) => memberIds === undefined || memberIds.includes(m.MemberId))
      .map((m) => {
        order += 1;
        return {
          MemberId: m.MemberId,
          HouseholderId: h.HouseholderId,
          Title: m.Title,
          FirstName: m.FirstName,
          LastName: h.Surname,
          Age: m.Age,
          Phone: m.Phone,
          IsHouseholder: m.IsHouseholder,
          Country: country,
          CountryCode: h.CountryCode,
          Locality: h.Locality,
          LocalityId: h.LocalityId,
          IsHostLocality: hostLocality,
          Host: host.Host,
          HostHouseholderId: host.HostHouseholderId,
          Days: days,
          Role: role,
          OrderNo: String(order),
        };
      });
  const visiting = (
    HouseholderId: string,
    Surname: string,
    LocalityId: string,
    Locality: string,
    CountryCode: string,
    members: readonly [Title: string, FirstName: string, Age: string, Phone: string][],
  ): OrbitGuestHousehold => ({
    HouseholderId,
    Surname,
    LocalityId,
    Locality,
    CountryCode,
    members: members.map(([Title, FirstName, Age, Phone], k) => ({
      MemberId: `${HouseholderId.slice(0, -1)}${String(k + 1)}`,
      Title,
      FirstName,
      IsHouseholder: k === 0,
      IsSpouse: k === 1 && Title === 'Mrs',
      Age,
      Phone,
    })),
  });
  const dominguez = visiting('880301', 'Domínguez', '701', 'Montevideo', 'UY', [
    ['Mr', 'Andrés', '45', '+598 94 555 031'],
    ['Mrs', 'Lucía', '44', '+598 94 555 032'],
    ['Mr', 'Tomás', '16', ''],
  ]);
  const lucero = visiting('880401', 'Lucero', '613', 'Tandil', 'AR', [
    ['Mr', 'Gabriel', '38', '+54 249 555 0411'],
    ['Mrs', 'Marina', '36', '+54 249 555 0412'],
  ]);
  const benavidez = visiting('880501', 'Benavídez', '614', 'Santa Rosa', 'AR', [
    ['Mr', 'Ezequiel', '27', '+54 2954 55 0511'],
  ]);
  const vitale = hostName('Vitale');
  const guests = [
    ...rows(HERRERA, 'Argentina', false, vitale, [friday, saturday]),
    ...rows(RAMOS, 'Argentina', false, vitale, [friday, saturday]),
    ...rows(dominguez, 'Uruguay', false, hostName('Pérez'), [friday, saturday, sunday]),
    ...rows(lucero, 'Argentina', false, hostName('Rojas'), [saturday, sunday]),
    ...rows(benavidez, 'Argentina', false, NO_HOST, []),
    ...rows(localityHousehold('Molina', ['Miss', 'Mr', 'Mr', 'Miss'], today), 'Argentina', true, NO_HOST, [
      friday,
      saturday,
      sunday,
    ]),
    ...rows(localityHousehold('Acosta', [], today), 'Argentina', true, NO_HOST, [saturday, sunday]),
  ];
  order = 0;
  const suarez = localityHousehold('Suárez', ['Mr', 'Miss'], today);
  const gallardo = localityHousehold('Gallardo', ['Mr', 'Miss'], today);
  const flores = localityHousehold('Flores', ['Mr', 'Miss'], today);
  const vitaleHousehold = localityHousehold('Vitale', ['Mr', 'Miss', 'Mr'], today);
  const ids = (h: OrbitGuestHousehold, ...k: number[]) => k.map((i) => h.members[i]?.MemberId ?? '');
  const helpers = [
    ...rows(suarez, 'Argentina', true, NO_HOST, [friday, saturday, sunday], 'CATERING', ids(suarez, 0, 1)),
    ...rows(gallardo, 'Argentina', true, NO_HOST, [saturday, sunday], 'USHER', ids(gallardo, 0, 2)),
    ...rows(vitaleHousehold, 'Argentina', true, NO_HOST, [friday, sunday], 'VEHICLE_DRIVER', ids(vitaleHousehold, 0)),
    ...rows(flores, 'Argentina', true, NO_HOST, [friday, saturday, sunday], 'FIRST_AID', ids(flores, 1)),
    ...rows(RAMOS, 'Argentina', false, vitale, [saturday], 'CAR_PARKING', ['880201']),
  ];
  return [
    {
      EventId: '7301',
      EventName: event?.Title ?? '',
      EventLocation: event?.EventLocation ?? '',
      EventLocationId: LOCALITY.id,
      EventCountry: LOCALITY.country,
      EventCountryCode: LOCALITY.countryCode,
      EventStartDateTime: event?.StartEventDate ?? '',
      EventEndDateTime: event?.EndEventDate ?? '',
      eventDays: [friday, saturday, sunday],
      helperRoles: ['CATERING', 'USHER', 'VEHICLE_DRIVER', 'FIRST_AID', 'CAR_PARKING'],
      countries: [
        { CountryName: 'Argentina', Localities: ['Bahia Blanca', 'Necochea', 'San Nicolás', 'Santa Rosa', 'Tandil'] },
        { CountryName: 'Uruguay', Localities: ['Montevideo'] },
      ],
      guests,
      helpers,
    },
  ];
}

/* ---- Orbit contact recipients (EmailContact route, SendContactEmail of ScreenBlock_ContactForm) ----
   EmailContact was not reachable on TST (no-capture.json, user 2026-10-16): built from the compiled code. Who the
   server sends an Orbit contact e-mail to: the event's helpdesk (IsContactHelpdesk True) or the host the screen names
   (EmailInfo.HostEmail). Event 7301 has the Orbit Helpdesk address; its hosts are the households that host guests of
   the booklet (Vitale, Pérez, Rojas). An event without a helpdesk address makes the server answer IsSuccess False
   ("There is currently no helpdesk email associated with this event…"). Addresses on example.com, fictional. */

/** The recipients of the Orbit contact e-mails of an event. */
export interface OrbitContactRecipients {
  EventId: string;
  /** "" = no helpdesk e-mail for the event. */
  HelpdeskEmail: string;
  hosts: readonly { HostId: string; HostName: string; HostEmail: string }[];
}

/** The contact recipients of the mock world, per event. */
export function orbitContactRecipients(): OrbitContactRecipients[] {
  const host = (surname: string, email: string) => {
    const h = LOCALITY_HOUSEHOLDS.find((x) => x.surname === surname) as CastHousehold;
    return { HostId: h.id, HostName: `Mr ${h.householder} & Mrs ${h.spouse ?? ''} ${h.surname}`, HostEmail: email };
  };
  return [
    {
      EventId: '7301',
      HelpdeskEmail: ORBIT_HELPDESK_EMAIL,
      hosts: [
        host('Vitale', 'vitale.family@example.com'),
        host('Pérez', 'perez.family@example.com'),
        host('Rojas', 'rojas.family@example.com'),
      ],
    },
  ];
}
