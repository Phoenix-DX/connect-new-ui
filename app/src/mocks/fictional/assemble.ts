import type { components } from '../../api/schema';
import { wireList } from '../../lib/os-wire';

/* The fictional Assemble world of the mock app (user rule 2026-10-16, migration/knowledge/mock-fixtures.md "Fictional
   text must be meaningful"), shared by Assemble_BrowseByCountry, AssembleEvents and later AssembleDetail. It sits in the
   same world as the directory cast (./directory.ts): Argentina's localities are the ones of the Connect2_LegacyShared
   mocks (Bahia Blanca, Monte Hermoso, Córdoba, Neuquén).

   Countries: the 17 rows TST shows to the captured Global subscription (Assemble_BrowseByCountry and AssembleEvents
   dom/default.html, LocalityListDetail), in the captured order. TST masked most names; the names chosen keep the masked
   lengths and are the countries whose flags the app ships (UBT_CW.*.png, survey "image not captured" list; Ireland is
   the one flag without a row). Counts keep the rendered lengths (FormatCurrency groups thousands with ","); the counts
   TST left unmasked are kept. Map positions are the country centres. Region ids: 1 Americas, 2 Europe, 3 Oceania. */

type Schemas = components['schemas'];
export type CountryWithMapPositionWire = Schemas['Connect2_LegacyShared__CountryWithMapPosition'];

export interface AssembleCountry {
  code: string;
  name: string;
  regionId: string;
  members: number;
  householders: number;
  localities: number;
  latitude: string;
  longitude: string;
  zoom: number;
}

const country = (
  code: string,
  name: string,
  regionId: string,
  [members, householders, localities]: [number, number, number],
  [latitude, longitude, zoom]: [string, string, number],
): AssembleCountry => ({ code, name, regionId, members, householders, localities, latitude, longitude, zoom });

export const ASSEMBLE_COUNTRIES: readonly AssembleCountry[] = [
  country('AR', 'Argentina', '1', [268, 104, 4], ['-38.4161', '-63.6167', 4]),
  country('AU', 'Australia', '3', [12480, 4615, 82], ['-25.2744', '133.7751', 4]),
  country('BB', 'Barbados', '1', [312, 117, 2], ['13.1939', '-59.5432', 10]),
  country('CA', 'Canada', '1', [2914, 968, 20], ['56.1304', '-106.3468', 3]),
  country('DK', 'Denmark', '2', [95, 27, 3], ['56.2639', '9.5018', 6]),
  country('FR', 'France', '2', [1326, 452, 9], ['46.2276', '2.2137', 5]),
  country('DE', 'Germany', '2', [418, 151, 6], ['51.1657', '10.4515', 5]),
  country('IT', 'Italy', '2', [89, 28, 2], ['41.8719', '12.5674', 5]),
  country('JM', 'Jamaica', '1', [214, 72, 5], ['18.1096', '-77.2975', 8]),
  country('NL', 'Netherlands', '2', [107, 34, 3], ['52.1326', '5.2913', 7]),
  country('NZ', 'New Zealand', '3', [6284, 2107, 41], ['-40.9006', '174.886', 5]),
  country('VC', 'Saint Vincent', '1', [74, 27, 1], ['13.2528', '-61.1971', 10]),
  country('SE', 'Sweden', '2', [352, 118, 7], ['60.1282', '18.6435', 4]),
  country('CH', 'Switzerland', '2', [102, 33, 4], ['46.8182', '8.2275', 7]),
  country('TT', 'Trinidad', '1', [74, 20, 2], ['10.6918', '-61.2225', 9]),
  country('GB', 'United Kingdom', '2', [23560, 8742, 86], ['55.3781', '-3.436', 5]),
  country('US', 'United States', '1', [9871, 3405, 29], ['37.0902', '-95.7129', 3]),
];

/** A country as Connect2_LegacyShared CountryWithMapPosition (wire: Long Integers and Decimals as strings). */
export const countryWithMapPositionWire = (c: AssembleCountry): CountryWithMapPositionWire => ({
  Code: c.code,
  Name: c.name,
  RegionId: c.regionId,
  LocalitiesCount: String(c.localities),
  HouseholdersCount: String(c.householders),
  MembersCount: String(c.members),
  InitialLatitude: c.latitude,
  InitialLongitude: c.longitude,
  InitialZoom: c.zoom,
  WithinSubscription: true,
});

/** GetCountriesBySubscription(SubscriptionRegionId) output: the captured Global subscription sees every country (the
    17 rows of both captures), so every region id answers the whole list. */
export const countriesBySubscriptionOutput = () => ({
  Countries: wireList(ASSEMBLE_COUNTRIES.map(countryWithMapPositionWire)),
});

/* ---- Meetings (AssembleEvents, later AssembleDetail) ----
   TST's test account had no meeting (AssembleEvents dom/default.html: NC_ErrorScreen), so every value below is
   fictional. Halls are the supper meetings of the directory world (./directory.ts SUPPER_MEETINGS, INTERCHANGE and the
   Connect2_LegacyShared mocks' Córdoba / Neuquén halls), with invented street addresses. Each hall keeps a weekly
   programme from 5 weeks before to 8 weeks after today; DateTime is the hall's wall-clock time "yyyy-MM-ddTHH:mm:ss"
   (OffsetDateTimeByUserUTCOffset shows it unchanged, see AssembleEvents components/actions.ts). Virtual meetings use
   example.com links. */

export const ASSEMBLE_EVENT_TYPES = [
  { Id: '1', Title: "Lord's Supper" },
  { Id: '2', Title: 'Reading Meeting' },
  { Id: '3', Title: 'Gospel Preaching' },
  { Id: '4', Title: 'Prayer Meeting' },
  { Id: '5', Title: 'Ministry Meeting' },
] as const;

export interface AssembleHall {
  id: string;
  name: string;
  locality: string;
  country: string;
  address: string;
  latitude: string;
  longitude: string;
  brothers: number;
  sisters: number;
}

export const ASSEMBLE_HALLS: readonly AssembleHall[] = [
  {
    id: '1210',
    name: 'Zapiola (Main Meeting Room)',
    locality: 'Bahia Blanca',
    country: 'Argentina',
    address: 'Zapiola 1450, Bahia Blanca, Buenos Aires',
    latitude: '-38.7105',
    longitude: '-62.2668',
    brothers: 46,
    sisters: 51,
  },
  {
    id: '9202',
    name: 'Patagonia',
    locality: 'Bahia Blanca',
    country: 'Argentina',
    address: 'Avenida Cabrera 3820, Bahia Blanca, Buenos Aires',
    latitude: '-38.6929',
    longitude: '-62.2551',
    brothers: 22,
    sisters: 25,
  },
  {
    id: '9203',
    name: 'Ingeniero White',
    locality: 'Bahia Blanca',
    country: 'Argentina',
    address: 'Guillermo Torres 4210, Ingeniero White, Buenos Aires',
    latitude: '-38.7808',
    longitude: '-62.2689',
    brothers: 14,
    sisters: 17,
  },
  {
    id: '9301',
    name: 'Monte Hermoso (Main Meeting Room)',
    locality: 'Monte Hermoso',
    country: 'Argentina',
    address: 'Avenida Argentina 640, Monte Hermoso, Buenos Aires',
    latitude: '-38.9832',
    longitude: '-61.2952',
    brothers: 9,
    sisters: 11,
  },
  {
    id: '9401',
    name: 'Alta Córdoba (Main Meeting Room)',
    locality: 'Córdoba',
    country: 'Argentina',
    address: 'Jerónimo Luis de Cabrera 980, Córdoba',
    latitude: '-31.3936',
    longitude: '-64.1803',
    brothers: 31,
    sisters: 34,
  },
  {
    id: '9501',
    name: 'Neuquén Centro (Main Meeting Room)',
    locality: 'Neuquén',
    country: 'Argentina',
    address: 'Avenida Argentina 1320, Neuquén',
    latitude: '-38.9516',
    longitude: '-68.0591',
    brothers: 12,
    sisters: 15,
  },
];

/** The signed-in user's hall: Zapiola (the mock user's main hall, src/shell/mockUser.ts). */
export const USER_HALL_ID = '1210';

/** The weekly programme of every hall: day of week (0 = Lord's Day), time, event type; the prayer meeting is held by
    video call. */
const PROGRAMME = [
  { day: 0, time: '06:00', type: ASSEMBLE_EVENT_TYPES[0], virtual: false },
  { day: 0, time: '12:00', type: ASSEMBLE_EVENT_TYPES[1], virtual: false },
  { day: 0, time: '18:00', type: ASSEMBLE_EVENT_TYPES[2], virtual: false },
  { day: 2, time: '19:30', type: ASSEMBLE_EVENT_TYPES[3], virtual: true },
  { day: 4, time: '19:30', type: ASSEMBLE_EVENT_TYPES[4], virtual: false },
] as const;

export type AssembleEventSummaryWire = Schemas['Connect2_Assemble_CS__AssembleEventSummary'];

const pad = (n: number) => String(n).padStart(2, '0');
const dateKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function meetingsOf(hall: AssembleHall, today: Date): AssembleEventSummaryWire[] {
  const out: AssembleEventSummaryWire[] = [];
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 35);
  for (let i = 0; i <= 35 + 56; i++) {
    const day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    for (const p of PROGRAMME) {
      if (day.getDay() !== p.day) continue;
      const key = dateKey(day);
      out.push({
        EventId: `${hall.id}-${key.replaceAll('-', '')}-${p.type.Id}`,
        SeriesId: `${hall.id}-series-${p.type.Id}`,
        DateTime: `${key}T${p.time}:00`,
        HostingSubdivisionId: hall.id,
        HostingLocation: hall.name,
        HostingSubdivisionFormattedAddress: hall.address,
        HostingSubdivisionUseCoordinates: false,
        HostingSubdivisionLatitude: hall.latitude,
        HostingSubdivisionLongitude: hall.longitude,
        HostingSubdivisionHallPhotoSignedURL: '',
        AssembleEventType: { Id: p.type.Id, Title: p.type.Title },
        RecurrenceTypeId: 'weekly',
        RecurrenceTypeLabel: 'Weekly',
        IsCustomRecurrence: false,
        RecurrencyFirstDate: '2019-03-03',
        IsAllDay: false,
        BrothersCount: String(hall.brothers),
        SistersCount: String(hall.sisters),
        IsVirtual: p.virtual,
        Notes: p.virtual ? 'Join by video call; the hall stays open for those without internet access.' : '',
        LocalityName: hall.locality,
        CountryName: hall.country,
        VirtualMeetingTypeLabel: p.virtual ? 'Video call' : '',
        VirtualMeetingLink: p.virtual ? `https://example.com/assemble/${slug(hall.name)}/prayer` : '',
        VirtualMeetingId: p.virtual ? `${hall.id} 4417 2208` : '',
        VirtualMeetingPassword: p.virtual ? 'pray-together' : '',
        IsPBCC: true,
        IsUnavailable: false,
      });
    }
  }
  return out;
}

/** Every hall's meetings, oldest first (computed once per page load, relative to the day the mock starts). */
export const ASSEMBLE_MEETINGS: readonly AssembleEventSummaryWire[] = ASSEMBLE_HALLS.flatMap((h) =>
  meetingsOf(h, new Date()),
);

export const hallName = (subdivisionId: string): string =>
  ASSEMBLE_HALLS.find((h) => h.id === subdivisionId)?.name ?? '';

/* ---- Meeting details (AssembleDetail: Connect2_Assemble_MUI AssembleEventDetail DataActionGetAssembleEvent) ----
   Who is invited to a meeting: the halls of the hosting locality (Bahia Blanca 252, Monte Hermoso 253, Córdoba 254,
   Neuquén 255: the Connect2_LegacyShared mocks' locality ids), and for the gospel preaching and the ministry meeting
   the interchange locality (Bahia Blanca ↔ Monte Hermoso, directory.ts INTERCHANGE). HouseholdCount is the number of
   households of that hall in the directory cast (./directory.ts), at least 4. The hall's household rows themselves come
   from GetCacheableSubdivision_V2 (CR-AssembleDetail-1), so the event sends none. GMS local contacts: two members of
   the Herrera household of the Orbit cast (./orbit.ts, ids the Connect2_LegacyShared member-contact mock resolves),
   for the Bahia Blanca halls only. */

const HALL_LOCALITY_IDS: Readonly<Record<string, string>> = {
  'Bahia Blanca': '252',
  'Monte Hermoso': '253',
  Córdoba: '254',
  Neuquén: '255',
};
const INTERCHANGE_LOCALITY: Readonly<Record<string, string>> = {
  'Bahia Blanca': 'Monte Hermoso',
  'Monte Hermoso': 'Bahia Blanca',
};
/** Event types with interchange guests: Gospel Preaching (3), Ministry Meeting (5). */
const INTERCHANGE_EVENT_TYPES = new Set(['3', '5']);
export const ASSEMBLE_GMS_CONTACT_IDS = ['880101', '880102'] as const;

export type AssembleEventWire = Schemas['Connect2_Assemble_CS__AssembleEvent'];
type LocalityDetailsWire = Schemas['Connect2_Assemble_CS__LocalityDetails'];

function localityDetails(locality: string, householdCount: (hallId: string) => number): LocalityDetailsWire {
  const localityId = HALL_LOCALITY_IDS[locality] ?? '0';
  return {
    LocalityId: localityId,
    LocalityName: locality,
    AssembleAttendeeSubdivisionList: wireList(
      ASSEMBLE_HALLS.filter((h) => h.locality === locality).map((h) => ({
        Id: h.id,
        Name: h.name,
        HouseholdCount: String(Math.max(4, householdCount(h.id))),
        LocalityId: localityId,
        SubdivisionHouseholdList: wireList([]),
      })),
    ),
  };
}

/** GetAssembleEvent output for an EventId of ASSEMBLE_MEETINGS (undefined when there is no such meeting). */
export function assembleEventOf(
  eventId: string,
  householdCount: (hallId: string) => number,
): AssembleEventWire | undefined {
  const summary = ASSEMBLE_MEETINGS.find((m) => m.EventId === eventId);
  if (!summary) return undefined;
  const interchange = INTERCHANGE_EVENT_TYPES.has(summary.AssembleEventType.Id)
    ? INTERCHANGE_LOCALITY[summary.LocalityName]
    : undefined;
  return {
    AssembleEventSummary: summary,
    AssembleAttendeeSubdivisionList: wireList([localityDetails(summary.LocalityName, householdCount)]),
    AssembleSpecialAttendeeSubdivisionList: wireList(
      interchange === undefined ? [] : [localityDetails(interchange, householdCount)],
    ),
    AssembleAttendeeSpecialGuestList: wireList([]),
    GSMContactList: wireList(summary.LocalityName === 'Bahia Blanca' ? [...ASSEMBLE_GMS_CONTACT_IDS] : []),
  };
}
