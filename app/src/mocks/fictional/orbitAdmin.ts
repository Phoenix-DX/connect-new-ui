import { INTERCHANGE, LOCALITY, VITALE } from './directory';
import { ORBIT_HOSTED_ROOMS, ORBIT_MEMBERS, orbitEvents, type OrbitGuestHousehold } from './orbit';

/* The fictional Orbit admin world of the mock app (user rule 2026-10-16, migration/knowledge/mock-fixtures.md
   "Fictional text must be meaningful"), shared by the admin routes (OrbitAdminLanding, OrbitAdminEventDetail) and
   consistent with directory.ts / orbit.ts: the signed-in user (Matías Vitale) is an Orbit admin who scans the
   attendees' QR codes at the door of three events of his region.

   On TST the full-permission account has no admin event (OrbitAdminLanding/default shows NoInformation_Orbit "There are
   no events currently where QR scanning is required. …", ScreenBlock_AdminLanding.mvc.js view :413-417): the admin
   list ("events where QR scanning is required") is fictional; OrbitAdminLanding's scenario `noadminevents` reproduces
   the captured account (OrbitAdminLanding Q1).

   Values are domain data in OutSystems field names (AdminOrbitSummaryItemRec, Connect2_OrbitMobile_IS; OrbitEventType
   records of orbit.ts); each route maps them to its own wire shape in its mocks.ts. DateTimes are UTC wire values
   ("yyyy-MM-ddTHH:mm:ssZ"), relative to today so that the events stay upcoming whenever the mock runs. */

/** The OrbitEventType record of an admin's events ('event-admin', static entity Connect2_OrbitMobile_MUI.orbitEventType
    .eventAdmin; static-entities-tst.json). Its Sync_Info_GetMain record was not captured (the TST account has no admin
    event): Type / Name "Admin" by analogy with the captured Host record (orbit.ts ORBIT_EVENT_TYPES.host: Type "Host"),
    colour and icon as the other Orbit event cards (purple, meeting). OrbitAdminEventDetail shows Type in its host-guest
    row (ScreenBlock_AdminEventDetail.mvc.js view :446-454). */
export const ORBIT_ADMIN_EVENT_TYPE = {
  Id: 'event-admin',
  Is_Active: true,
  Type: 'Admin',
  Name: 'Admin',
  MainColorVar: 'purple',
  MainIcon: 'orbit-icon-meeting',
} as const;

/** An event the signed-in admin scans QR codes at (AdminOrbitSummaryItemRec + its OrbitEventType). */
export interface OrbitAdminEvent {
  EventId: string;
  Title: string;
  /** OrbitEventType.Type of the summary row (AdminOrbitSummaryItem.Type). */
  Type: string;
  /** AdminOrbitSummaryItem.TypeFriendly: the kind of event in words (OrbitAdminEventDetail's window icon row, as
      EventDetail's TypeOfEvent, orbit.ts OrbitEventDetail). */
  TypeFriendly: string;
  EventType: typeof ORBIT_ADMIN_EVENT_TYPE;
  StartEventDate: string;
  EndEventDate: string;
  EventLocation: string;
  /** SequenceNo of the summary row. */
  SequenceNo: string;
  /** Get_EventInformation.HasQRCode: the event uses QR codes, so the admin can scan them (Scan QR Code button). */
  HasQRCode: boolean;
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** "yyyy-MM-ddTHH:mm:ssZ" of the UTC day `days` after `from` at hh:mm. */
const utcAt = (from: Date, days: number, hh: number, mm = 0): string => {
  const d = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate() + days, hh, mm));
  return d.toISOString().replace('.000Z', 'Z');
};

/** The first Saturday at least `weeks` weeks after `today`. */
const saturdayAfter = (today: Date, weeks: number): Date => {
  const base = new Date(today.getTime() + weeks * 7 * DAY_MS);
  return new Date(base.getTime() + ((6 - base.getUTCDay() + 7) % 7) * DAY_MS);
};

/** The events the signed-in admin scans at, ordered by start (SequenceNo): the weekend conferences of his locality
    (event 7301 of orbit.ts, same title, dates and hall), a youth day at the neighbouring locality and a gospel
    meeting at his hall. */
export function orbitAdminEvents(today: Date = new Date()): OrbitAdminEvent[] {
  const conferences = orbitEvents(today).find((e) => e.EventId === '7301');
  const hall = `${LOCALITY.name} Main Hall`;
  const youthDay = saturdayAfter(today, 3);
  const gospel = saturdayAfter(today, 5);
  return [
    {
      EventId: '7301',
      Title: conferences?.Title ?? 'Weekend Bible Conferences - Bahia and Azul',
      Type: ORBIT_ADMIN_EVENT_TYPE.Type,
      TypeFriendly: 'Weekend Conference Program',
      EventType: ORBIT_ADMIN_EVENT_TYPE,
      StartEventDate: conferences?.StartEventDate ?? utcAt(today, 7, 9),
      EndEventDate: conferences?.EndEventDate ?? utcAt(today, 9, 17),
      EventLocation: conferences?.EventLocation ?? hall,
      SequenceNo: '1',
      HasQRCode: true,
    },
    {
      EventId: '7315',
      Title: `Youth Day - ${INTERCHANGE.name}`,
      Type: ORBIT_ADMIN_EVENT_TYPE.Type,
      TypeFriendly: 'Youth Day',
      EventType: ORBIT_ADMIN_EVENT_TYPE,
      StartEventDate: utcAt(youthDay, 0, 13),
      EndEventDate: utcAt(youthDay, 0, 21),
      EventLocation: `${INTERCHANGE.name} Meeting Room`,
      SequenceNo: '2',
      HasQRCode: true,
    },
    {
      EventId: '7322',
      Title: `Gospel Meeting - ${LOCALITY.name}`,
      Type: ORBIT_ADMIN_EVENT_TYPE.Type,
      TypeFriendly: 'Gospel Meeting',
      EventType: ORBIT_ADMIN_EVENT_TYPE,
      StartEventDate: utcAt(gospel, 1, 18),
      EndEventDate: utcAt(gospel, 1, 20),
      EventLocation: hall,
      SequenceNo: '3',
      HasQRCode: true,
    },
  ];
}

/* ---- Attendees the admin scans (OrbitAdminEventDetail) ----
   Each attendee carries a member QR code (QRCodeInformationRec serialized: "eventid", "id", "milestoneid",
   Connect2_OrbitMobile_MUI.model.js:7896-7902). Scanning it at the event's door gives the member
   (GetMemberByMemberId: Directory_MemberById) and the check-in answer (GetScanEventQRCode: UserRole, Seats, Tag,
   GuestRole, Status). Attendees: the signed-in household (Vitale, hosts of event 7301, orbit.ts) and the two families
   it hosts (Herrera of San Nicolás, Ramos of Necochea; orbit.ts ORBIT_HOSTED_ROOMS). */

/** A member as GetMemberByMemberId returns it (APIDomain_Directory_IS Directory_MemberById). */
export interface OrbitAdminMember {
  Id: string;
  FirstName: string;
  Lastname: string;
  LocalityName: string;
  CountryName: string;
}

/** An attendee of an admin event and the check-in data GetScanEventQRCode returns for it. */
export interface OrbitAdminAttendee {
  member: OrbitAdminMember;
  /** Response.UserRole ("Role: …" of the scan popup). */
  UserRole: string;
  /** Response.GuestRole (not shown by the popup). */
  GuestRole: string;
  /** Response.Tag ("GMP Tag: …"; "" = no tag row). */
  Tag: string;
  /** Response.Seats[].SeatAllocation ("Row: 14 & 22"; none = no row line). */
  rows: readonly string[];
}

const COUNTRY_NAMES: Readonly<Record<string, string>> = { AR: 'Argentina' };

/** The households the Vitale family hosts (unique, in room order). */
const hostedHouseholds = (): OrbitGuestHousehold[] => {
  const seen = new Map<string, OrbitGuestHousehold>();
  for (const room of ORBIT_HOSTED_ROOMS)
    for (const g of room.guests)
      if (!seen.has(g.household.HouseholderId)) seen.set(g.household.HouseholderId, g.household);
  return [...seen.values()];
};

/** The attendees of an admin event, in scanning order: the visiting families first, then the signed-in household.
    Event 7301 (the weekend conferences): the visitors are guests with a "Visitor" tag and a row for each conference
    day, the Vitale household are the hosts; the youth day and the gospel meeting: everyone is a guest with one row. */
export function orbitAdminAttendees(eventId: string): OrbitAdminAttendee[] {
  const conferences = eventId === '7301';
  const visitors = hostedHouseholds().flatMap((h, hi) =>
    h.members.map((m, mi) => ({
      member: {
        Id: m.MemberId,
        FirstName: m.FirstName,
        Lastname: h.Surname,
        LocalityName: h.Locality,
        CountryName: COUNTRY_NAMES[h.CountryCode] ?? '',
      },
      UserRole: 'Guest',
      GuestRole: '',
      Tag: conferences ? 'Visitor' : '',
      rows: conferences ? [String(14 + hi), String(22 + hi)] : [String(3 + hi * 2 + Math.floor(mi / 4))],
    })),
  );
  const household = ORBIT_MEMBERS.map((m) => ({
    member: {
      Id: m.MemberId,
      FirstName: m.FirstName,
      Lastname: VITALE.surname,
      LocalityName: LOCALITY.name,
      CountryName: LOCALITY.country,
    },
    UserRole: conferences ? 'Host' : 'Guest',
    GuestRole: '',
    Tag: '',
    rows: conferences ? ['8'] : ['9'],
  }));
  return [...visitors, ...household];
}

/** Every member the admin can scan (GetMemberByMemberId answers any of them). */
export const orbitAdminMember = (memberId: string): OrbitAdminMember | undefined =>
  orbitAdminAttendees('7301').find((a) => a.member.Id === memberId)?.member;

/** The text of a member's QR code for an event, as the QR code generator serializes QRCodeInformationRec. */
export const orbitAdminQRCode = (eventId: string, memberId: string): string =>
  JSON.stringify({ eventid: Number(eventId), id: Number(memberId), milestoneid: '' });
