import type { components } from '../../api/schema';
import {
  LOCALITY_HOUSEHOLDS,
  ORTIZ,
  VITALE,
  VITALE_PARENTS,
  bookmarkTitle,
  exampleEmail,
  type CastHousehold,
} from './directory';

/* The fictional LDM (Lord's Day Meal) world of the mock app (user rule 2026-10-16, migration/knowledge/mock-fixtures.md
   "Fictional text must be meaningful"), shared by the LDM routes (LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2)
   and consistent with directory.ts: the signed-in user is Matías Vitale (household 42438, Bahia Blanca). His household
   shares the Lord's Day meal with other households: as guests in their homes, and as hosts in its own.

   Captured on TST (LDM_MyEvents_V2/default, a full-permission account): no upcoming event and five past events, one per
   month, each with a host (name and locality shown) and guests: 1, 2, 5, 4 and 4 guest households (the overlapping
   photos) for 4, 6, 18, 9 and 16 guests (the unmasked "N Guests" texts). The masked word lengths show the shapes of
   the texts: the event name is "<weekday> Meal at <host locality>" with "Lord's Day" for a Sunday (the weekday of the
   date line: Saturday, Wednesday, then three Sundays; TimeFormat.getWeekDay also names Sunday "Lord's Day Meal"), the
   host is "Surname, Householder & Spouse" (the household-name form FlipHouseholdName reverses) and the host locality is
   shown in brackets. The dates are relative to today, so that the five events stay "past" (within the default range
   of 24 months back) and fall in five different months. */

type Schemas = components['schemas'];
export type EventCalendar_V2Wire = Schemas['Connect2_OrbitMobile_IS__EventCalendar_V2'];
export type CalendarGuestItem_V2Wire = Schemas['Connect2_OrbitMobile_IS__CalendarGuestItem_V2'];
export type TimelineEventGroup_V2Wire = Schemas['Connect2_OrbitMobile_BL__TimelineEventGroup_V2'];
export type EventLocalitiesFilterWire = Schemas['Connect2_OrbitMobile_BL__EventLocalitiesFilter'];

/** A neutral, non-person photo shipped with the app (Person images in mocks, Q-W2C-1). */
const PHOTO = `${import.meta.env.BASE_URL}mock-images/placeholder-square.svg`;

/** Coordinates and time zone of the localities the LDM events use (real places; time zone of Argentina). */
const PLACES: Record<string, { latitude: string; longitude: string }> = {
  '252': { latitude: '-38.7196', longitude: '-62.2724' },
  '601': { latitude: '-32.9442', longitude: '-60.6505' },
  '602': { latitude: '-42.7692', longitude: '-65.0385' },
};
const ARGENTINA_TIME_ZONE = {
  TZName: 'America/Argentina/Buenos_Aires',
  WindowsName: 'Argentina Standard Time',
  OffsetSeconds: '-10800',
  Abbreviation: 'ART',
};

export interface LdmGuest {
  household: CastHousehold;
  /** The fictional mobile number of the householder (reserved 555 range). */
  mobilePhone: string;
}

export interface LdmEvent {
  eventId: string;
  /** The EventHost record of the host household for this meal. */
  eventHostId: string;
  host: CastHousehold;
  /** The signed-in user's household hosts the meal. */
  hosting: boolean;
  /** Days before the last Sunday before today (the meal's date). */
  daysBeforeLastSunday: number;
  /** "18:30": the meal's start time. */
  time: string;
  guests: LdmGuest[];
  /** People attending (the "N Guests" count, not the number of households). */
  guestCount: number;
}

const hh = (surname: string): CastHousehold => {
  const found = LOCALITY_HOUSEHOLDS.find((h) => h.surname === surname);
  if (!found) throw new Error(`No household ${surname} in directory.ts`);
  return found;
};

let phone = 120;
const guest = (household: CastHousehold): LdmGuest => ({
  household,
  mobilePhone: `+54 291 555 0${String((phone += 1))}`,
});

/** The five past meals, newest first (TST order of the past events). */
export const LDM_PAST_EVENTS: LdmEvent[] = [
  {
    // Saturday supper with the Medina family: the Vitales are their guests.
    eventId: '70415',
    eventHostId: '88231',
    host: hh('Medina'),
    hosting: false,
    daysBeforeLastSunday: 1 + 2 * 7,
    time: '20:00',
    guests: [guest(VITALE)],
    guestCount: 4,
  },
  {
    // A midweek meal at home: the Vitales host the Pérez and Acosta households.
    eventId: '70388',
    eventHostId: '88197',
    host: VITALE,
    hosting: true,
    daysBeforeLastSunday: 4 + 9 * 7,
    time: '19:30',
    guests: [guest(hh('Pérez')), guest(hh('Acosta'))],
    guestCount: 6,
  },
  {
    // A large Lord's Day meal at the Castillo home after the morning service.
    eventId: '70342',
    eventHostId: '88154',
    host: hh('Castillo'),
    hosting: false,
    daysBeforeLastSunday: 18 * 7,
    time: '12:30',
    guests: [guest(VITALE), guest(hh('Molina')), guest(hh('Torres')), guest(hh('Correa')), guest(hh('Benítez'))],
    guestCount: 18,
  },
  {
    // Visiting Julián's parents in Puerto Madryn, with his sister's family from Rosario.
    eventId: '70296',
    eventHostId: '88102',
    host: VITALE_PARENTS,
    hosting: false,
    daysBeforeLastSunday: 31 * 7,
    time: '13:00',
    guests: [guest(VITALE), guest(ORTIZ), guest(hh('Silva')), guest(hh('Ortega'))],
    guestCount: 9,
  },
  {
    // The Ortiz household in Rosario hosts the families who travelled for the weekend.
    eventId: '70251',
    eventHostId: '88063',
    host: ORTIZ,
    hosting: false,
    daysBeforeLastSunday: 44 * 7,
    time: '12:30',
    guests: [guest(VITALE), guest(VITALE_PARENTS), guest(hh('Herrera')), guest(hh('Suárez'))],
    guestCount: 16,
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;
const pad = (n: number) => String(n).padStart(2, '0');

/** The meal's calendar date (local), "YYYY-MM-DD". */
export function ldmEventDay(e: LdmEvent, today: Date = new Date()): string {
  const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const lastSunday = new Date(midnight.getTime() - (midnight.getDay() === 0 ? 7 : midnight.getDay()) * DAY_MS);
  const d = new Date(lastSunday.getTime() - e.daysBeforeLastSunday * DAY_MS);
  return `${String(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** "Lord's Day Meal at Bahia Blanca", "Saturday Meal at Bahia Blanca". */
export function ldmEventName(e: LdmEvent, today: Date = new Date()): string {
  const [y, m, d] = ldmEventDay(e, today).split('-').map(Number);
  const weekday = new Date(y ?? 1900, (m ?? 1) - 1, d ?? 1).getDay();
  return `${weekday === 0 ? "Lord's Day" : (WEEKDAYS[weekday] ?? '')} Meal at ${e.host.localityName}`;
}

/** "September 2026": the month a past event is grouped under. */
export function ldmMonthLabel(day: string): string {
  const [y, m] = day.split('-').map(Number);
  return new Date(y ?? 1900, (m ?? 1) - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function calendarGuestItem(g: LdmGuest, eventGuestId: string): CalendarGuestItem_V2Wire {
  const h = g.household;
  const place = PLACES[h.localityId] ?? { latitude: '0', longitude: '0' };
  return {
    HouseholderId: h.id,
    EventGuestId: eventGuestId,
    HouseholderName: bookmarkTitle(h),
    LocalityId: h.localityId,
    LocalityName: h.localityName,
    MobilePhone: g.mobilePhone,
    Email: exampleEmail(h.householder, h.surname),
    WorkPhone: '',
    CountryCode: 'AR',
    SignedImagePath: PHOTO,
    RecordDisabled: false,
    HouseholdDisplay: true,
    Address: h.address.replace(/\n/g, ', '),
    CountryName: h.countryName,
    Longitude: place.longitude,
    Latitude: place.latitude,
    TimeZone: { ...ARGENTINA_TIME_ZONE },
    HomePhone: '',
    HouseholderSignedImagePath: PHOTO,
    HouseholderFirstName: h.householder,
  };
}

/** One EventCalendar_V2 record (GetEventsForMyTimeline, GetEventsForCalendar, the event detail). */
export function eventCalendarRecord(e: LdmEvent, today: Date = new Date()): EventCalendar_V2Wire {
  return {
    EventId: e.eventId,
    EventHostId: e.eventHostId,
    EventLocalityId: e.host.localityId,
    EventDate: `${ldmEventDay(e, today)}T${e.time}:00`,
    GuestCount: String(e.guestCount),
    EventName: ldmEventName(e, today),
    HostId: e.host.id,
    HostFullName: bookmarkTitle(e.host),
    HostLocality: e.host.localityName,
    Hosting: e.hosting,
    HouseholdDisplay: true,
    Guests: { List: e.guests.map((g, i) => calendarGuestItem(g, `${e.eventId}${String(i + 1)}`)) },
  };
}

/** Out_PastEvents: one group per month, newest first. */
export function pastEventGroups(today: Date = new Date()): TimelineEventGroup_V2Wire[] {
  const groups: TimelineEventGroup_V2Wire[] = [];
  for (const e of LDM_PAST_EVENTS) {
    const label = ldmMonthLabel(ldmEventDay(e, today));
    const last = groups[groups.length - 1];
    if (last && last.CurrentMonthDate === label) last.EventsCalendar.List.push(eventCalendarRecord(e, today));
    else groups.push({ CurrentMonthDate: label, EventsCalendar: { List: [eventCalendarRecord(e, today)] } });
  }
  return groups;
}

/** The localities of the user's LDM events (the timeline filter's choices). */
export function eventLocalities(): EventLocalitiesFilterWire[] {
  const seen = new Map<string, string>();
  for (const e of LDM_PAST_EVENTS) seen.set(e.host.localityId, e.host.localityName);
  return [...seen].map(([id, name]) => ({ IdAsText: id, Name: name, IsSelected: false }));
}

/** An LDM event by its EventHostId (LDM_EventDetail_V2 inputs EventId / EventHostId). */
export const ldmEventByHostId = (eventHostId: string): LdmEvent | undefined =>
  LDM_PAST_EVENTS.find((e) => e.eventHostId === eventHostId);

/* ---- LDM_EventDetail_V2: the detail of one meal (GetEventByEventId, GetCoordinatorDetails, GetHouseholdCoordinates) ----
   Captured on TST (LDM_EventDetail_V2/default, the first past event of LDM_MyEvents_V2): the user is a guest and the
   host allocation is not published (Host.IsPublished False: "Host Allocation Pending", blank host photo, no guest
   list), although the host's phone, email and address are sent; the coordinator is available ("Contact Coordinator"
   enabled). The mock mirrors that for the first meal (Q3) and publishes the allocation of the other four, so the
   compiled host / guest views (Q1) show meaningful data: who comes, how many adults and children, who is not
   attending, and the special needs the host has to plan for. */

export type Host_V2Wire = Schemas['Connect2_OrbitMobile_IS__Host_V2'];
export type DetailGuestItem_V2Wire = Schemas['Connect2_OrbitMobile_IS__DetailGuestItem_V2'];
export type SpecialNeedsItem_LDM_V2Wire = Schemas['Connect2_OrbitMobile_IS__SpecialNeedsItem_LDM_V2'];
export type EventCalendarDetail_V2Wire = Schemas['Connect2_OrbitMobile_IS__GetEventCalendarDetailResponse_V2'];
export type CoordinatorDetailsWire = Schemas['Connect2_OrbitMobile_IS__GetCoordinatorDetailsResponse'];
export type Directory_CoordinatesWire = Schemas['APIDomain_Directory_IS__Directory_Coordinates'];

/** A neutral landscape picture standing in for the main hall photo (SignedHallPhoto, the banner background). */
const HALL_PHOTO = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

/** The main hall of each locality the meals start from (Directions: from the hall to the host's home). */
const MAIN_HALLS: Record<string, string> = {
  '252': '1210 Calle Zapiola, Bahia Blanca Provincia de Buenos Aires',
  '601': '880 Calle Balcarce, Rosario Santa Fe',
  '602': '410 Calle Belgrano, Puerto Madryn Chubut',
};

/** The LDM coordinator of the user's locality (GetCoordinatorDetails). */
const COORDINATOR = { first: 'Gustavo', last: 'Ríos', phone: '+54 291 555 0199' };

interface LdmGuestDetail {
  adults: number;
  children: number;
  including?: string;
  nonAttending?: string;
}
interface LdmNeed {
  /** Index of the guest household in LdmEvent.guests. */
  guest: number;
  member: string;
  name: string;
  notes: string;
}
interface LdmEventDetail {
  allocationPublished: boolean;
  /** One entry per LdmEvent.guests item; the adults and children add up to LdmEvent.guestCount. */
  guests: LdmGuestDetail[];
  diet?: LdmNeed[];
  mobility?: LdmNeed[];
  other?: LdmNeed[];
}

const LDM_EVENT_DETAILS: Record<string, LdmEventDetail> = {
  // Saturday supper at the Medina home: as captured, the allocation is not published yet.
  '70415': { allocationPublished: false, guests: [{ adults: 3, children: 1, nonAttending: 'Matías' }] },
  // The Vitales host the Pérez household (with Nora's mother Elsa) and the Acostas with their nephew.
  '70388': {
    allocationPublished: true,
    guests: [
      { adults: 3, children: 0 },
      { adults: 2, children: 1, including: 'Tomás Acosta (nephew)' },
    ],
    diet: [{ guest: 0, member: 'Nora', name: 'Gluten free', notes: 'Coeliac: no wheat, barley or rye' }],
    mobility: [
      { guest: 0, member: 'Elsa', name: 'Wheelchair user', notes: 'Needs step-free access to the dining room' },
    ],
    other: [{ guest: 1, member: 'Diego', name: 'Arriving late', notes: 'Works until 19:30 and will join for dessert' }],
  },
  '70342': {
    allocationPublished: true,
    guests: [
      { adults: 4, children: 1 },
      { adults: 2, children: 2 },
      { adults: 2, children: 1 },
      { adults: 2, children: 2 },
      { adults: 2, children: 0 },
    ],
  },
  '70296': {
    allocationPublished: true,
    guests: [
      { adults: 2, children: 0, nonAttending: 'Matías, Valeria & Ignacio' },
      { adults: 2, children: 1 },
      { adults: 2, children: 0 },
      { adults: 2, children: 0 },
    ],
  },
  '70251': {
    allocationPublished: true,
    guests: [
      { adults: 4, children: 1 },
      { adults: 3, children: 0 },
      { adults: 2, children: 2, including: 'Lucía Herrera (visiting from Córdoba)' },
      { adults: 2, children: 2 },
    ],
  },
};

const timezone = () => ({
  TimezoneLabel: ARGENTINA_TIME_ZONE.Abbreviation,
  OffsetSeconds: ARGENTINA_TIME_ZONE.OffsetSeconds,
});
const householderPhone = (h: CastHousehold) => `+54 291 555 0${String(200 + (Number(h.id) % 700))}`;

/** An LDM event by its EventId (GetEventByEventId reads the inputs EventId and EventHostId). */
export const ldmEventById = (eventId: string): LdmEvent | undefined =>
  LDM_PAST_EVENTS.find((e) => e.eventId === eventId);

function detailGuest(e: LdmEvent, i: number): DetailGuestItem_V2Wire {
  const g = e.guests[i] as LdmGuest;
  const h = g.household;
  const d = LDM_EVENT_DETAILS[e.eventId]?.guests[i] ?? { adults: 0, children: 0 };
  const place = PLACES[h.localityId] ?? { latitude: '0', longitude: '0' };
  return {
    EventGuestID: `${e.eventId}${String(i + 1)}`,
    HouseholderName: bookmarkTitle(h),
    HouseholderID: h.id,
    LocalityName: h.localityName,
    LocalityId: h.localityId,
    CdnBucket: 'ldm-photos',
    Resize340CdnPath: `households/${h.id}/340.jpg`,
    SignedURL: PHOTO,
    NonAttending: d.nonAttending ?? '',
    Including: d.including ?? '',
    Adults: String(d.adults),
    Children: String(d.children),
    RecordDisabled: false,
    HouseholdDisplay: true,
    MobilePhone: g.mobilePhone,
    WorkPhone: '',
    Email: exampleEmail(h.householder, h.surname),
    FormattedAddress: '',
    CountryName: h.countryName,
    Latitude: place.latitude,
    Longitude: place.longitude,
    Timezone: timezone(),
    HomePhone: '',
    HouseholderSignedImagePath: '',
    HouseholderFirstName: h.householder,
  };
}

function specialNeeds(e: LdmEvent, needs: LdmNeed[] | undefined, type: string): SpecialNeedsItem_LDM_V2Wire[] {
  return (needs ?? []).map((n, i) => {
    const h = (e.guests[n.guest] as LdmGuest).household;
    return {
      Type: type,
      Memberid: `${h.id}${String(i + 1)}`,
      Name: n.name,
      Notes: n.notes,
      Category: '',
      Eventid: e.eventId,
      Eventguestid: `${e.eventId}${String(n.guest + 1)}`,
      FullName: `${n.member} ${h.surname}`,
      CdnBucket: '',
      CdnPath: '',
      SignedUrl: PHOTO,
    };
  });
}

/** GetEventByEventId.EventResponse of a meal: the host (with the meal's date, locality and hall) and the guests. */
export function eventCalendarDetail(e: LdmEvent, today: Date = new Date()): EventCalendarDetail_V2Wire {
  const detail = LDM_EVENT_DETAILS[e.eventId] ?? { allocationPublished: true, guests: [] };
  const h = e.host;
  const place = PLACES[h.localityId] ?? { latitude: '0', longitude: '0' };
  const sum = (k: 'adults' | 'children') => detail.guests.reduce((n, g) => n + g[k], 0);
  const phone = householderPhone(h);
  return {
    Host: {
      IsPublished: detail.allocationPublished,
      Hosting: e.hosting,
      MemberId: `${h.id}1`,
      HouseholderID: h.id,
      HouseholderName: bookmarkTitle(h),
      FirstName: '',
      LastName: '',
      LocalityId: h.localityId,
      Phone: phone,
      Email: exampleEmail(h.householder, h.surname),
      FormattedAddress: h.address.replace(/\n/g, ', '),
      CountryName: h.countryName,
      Longitude: '',
      Latitude: '',
      CDNbucket: '',
      CDNPath: '',
      SignedURL: PHOTO,
      EventID: e.eventId,
      EventDate: `${ldmEventDay(e, today)}T${e.time}:00`,
      EventLocalityID: h.localityId,
      EventLocalityName: h.localityName,
      HallPhotosCdnBucket: '',
      HallphotosCdnPath: '',
      SignedHallPhoto: HALL_PHOTO,
      MainHallName: '',
      MainHallFormattedAddress: MAIN_HALLS[h.localityId] ?? '',
      MainHallUseLatLong: true,
      MainHallLongititude: place.longitude,
      MainHallLatitude: place.latitude,
      OrganiserName: '',
      OrganiserEmail: '',
      Adults: String(sum('adults')),
      Children: String(sum('children')),
      RecordDisabled: false,
      HouseholdDisplay: true,
      EventName: '',
      Timezone: timezone(),
      HomePhone: '',
      HouseholderSignedImagePath: '',
      WorkPhone: `+54 291 555 0${String(100 + (Number(h.id) % 90))}`,
      MobilePhone: phone,
    },
    Guests: { List: e.guests.map((_, i) => detailGuest(e, i)) },
    SpecialNeeds: {
      Diet: { List: specialNeeds(e, detail.diet, '1') },
      Mobility: { List: specialNeeds(e, detail.mobility, '2') },
      Other: { List: specialNeeds(e, detail.other, '3') },
    },
  };
}

/** GetCoordinatorDetails of a meal: the LDM coordinator of the host's locality. */
export function coordinatorDetails(e: LdmEvent, today: Date = new Date()): CoordinatorDetailsWire {
  return {
    CoordinatorName: `${COORDINATOR.first} ${COORDINATOR.last}`,
    CoordinatorEmail: exampleEmail(COORDINATOR.first, COORDINATOR.last),
    CoordinatorPhoneNumber: COORDINATOR.phone,
    Latitude: '',
    Longitude: '',
    Address: '',
    LocalityName: e.host.localityName,
    LocalityId: e.host.localityId,
    CountryCode: '',
    CountryName: e.host.countryName,
    EventDate: `${ldmEventDay(e, today)}T${e.time}:00`,
    LDMEventName: ldmEventName(e, today),
    Timezone: timezone(),
  };
}

/** An empty GetCoordinatorDetailsResponse (the record defaults: '' / '0' / the null date), the answer for a meal the
    user has no coordinator for (LDM_Email_V2: Out_HasContent False). */
export function emptyCoordinatorDetails(): CoordinatorDetailsWire {
  return {
    CoordinatorName: '',
    CoordinatorEmail: '',
    CoordinatorPhoneNumber: '',
    Latitude: '',
    Longitude: '',
    Address: '',
    LocalityName: '',
    LocalityId: '0',
    CountryCode: '',
    CountryName: '',
    EventDate: '1900-01-01T00:00:00',
    LDMEventName: '',
    Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
  };
}

/** GetHouseholdCoordinates(HouseholdId): the coordinates of the household's locality. */
export function householdCoordinates(householdId: string): Directory_CoordinatesWire {
  const all = [
    ...LDM_PAST_EVENTS.map((e) => e.host),
    ...LDM_PAST_EVENTS.flatMap((e) => e.guests.map((g) => g.household)),
  ];
  const h = all.find((x) => x.id === householdId);
  const place = h ? PLACES[h.localityId] : undefined;
  return place
    ? { Latitude: place.latitude, Longitude: place.longitude, UseCoordinates: true }
    : { Latitude: '0', Longitude: '0', UseCoordinates: false };
}
