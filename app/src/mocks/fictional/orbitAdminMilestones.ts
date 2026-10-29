import { LOCALITY } from './directory';

/* The fictional milestones that the Orbit admin (Matías Vitale, orbitAdmin.ts) scans QR codes at, per milestone
   (OrbitAdminMilestones, OrbitAdminMilestoneDetail; user decision I10-3 (a), 2026-10-29). Not captured: the TST test
   account has no admin event.

   The server lists only the milestones of yesterday, today and tomorrow (NoInformation_Orbit message of
   ScreenBlock_AdminMilestones.mvc.js:350). So the weekend conferences (event 7301) have their preparation and arrival
   milestones around today, and the youth day (7315) and the gospel meeting (7322), weeks away, have none.

   Values in OutSystems field names: AdminMilestoneRec (Connect2_OrbitMobile_IS.model.js:3842-3905) and the
   OrbitMilestoneType record. The type Ids are the live TST values of the six Admin* records (moduleinfo version
   15682, entity 3cdbee62…; adminMeal is "meeting-meal" there). Their other attributes come from the app start sync
   (Sync_Info_GetMain), which was not captured for them. Name, Type and Order are the MCP (DEV) facts of the static
   entity OrbitMilestoneType of Connect2_OrbitMobile_BL (migration/clarify/review/mcp-session-2026-10-29.md row 7):
   Name "Admin" for all six, Type AdminMeeting … AdminBreak, Order 17 … 22. Colours, icons and IsTransportMilestone are MCP facts too (see the types below). DateTimes
   are UTC wire values ("yyyy-MM-ddTHH:mm:ssZ"), relative to today; Bahia Blanca is UTC-3. */

/** An OrbitMilestoneType record of an admin milestone. */
export interface OrbitAdminMilestoneType {
  Id: string;
  Is_Active: boolean;
  Order: number;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
  CanHost: boolean;
  IsTransportMilestone: boolean;
}

/** An admin type: Name "Admin" for all six (MCP row 7); Type and Order per record. */
const adminType = (
  Id: string,
  Order: number,
  Type: string,
  MainColorVar: string,
  MainIcon: string,
  IsTransportMilestone = false,
): OrbitAdminMilestoneType => ({
  Id,
  Is_Active: true,
  Order,
  Type,
  Name: 'Admin',
  MainColorVar,
  MainIcon,
  CanHost: false,
  IsTransportMilestone,
});

/** The six Admin* milestone types (static entity Connect2_OrbitMobile_MUI.orbitMilestoneType). Every attribute is the
    MCP fact (DEV, Connect2_OrbitMobile_BL static entity OrbitMilestoneType, 2026-10-29; ids equal TST moduleinfo 15682):
    MainColorVar Green for all six, IsTransportMilestone False for all six (so the transport card has no departure and
    arrival rows), MainIcon per record (transport-vehicle-admin uses the meeting icon on TST). Auto decision row 23. */
const ORBIT_ADMIN_MILESTONE_TYPES = {
  adminMeeting: adminType('meeting-admin', 17, 'AdminMeeting', 'green', 'orbit-icon-meeting'),
  adminMeal: adminType('meeting-meal', 18, 'AdminMeal', 'green', 'orbit-icon-meal'),
  adminMealAtHall: adminType('meal-at-hall-admin', 19, 'AdminMealAtHall', 'green', 'orbit-icon-meal'),
  adminAccommodation: adminType('accommodation-admin', 20, 'AdminAccommodation', 'green', 'orbit-icon-accommodation'),
  adminTransportVehicle: adminType(
    'transport-vehicle-admin',
    21,
    'AdminTransportVehicle',
    'green',
    'orbit-icon-meeting',
  ),
  adminBreak: adminType('break-admin', 22, 'AdminBreak', 'green', 'orbit-icon-date-time'),
} as const;

/** A milestone of an admin event (AdminMilestoneRec) and its type. */
export interface OrbitAdminMilestone {
  MilestoneId: string;
  MilestoneRef: string;
  EventId: string;
  MilestoneName: string;
  Description: string;
  EventDate: string;
  StartDate: string;
  EndDate: string;
  SequenceNo: string;
  LocalityId: string;
  LocalityName: string;
  type: OrbitAdminMilestoneType;
}

/** "yyyy-MM-ddTHH:mm:ssZ" of the UTC day `days` after `from` at hh:mm. */
const utcAt = (from: Date, days: number, hh: number, mm = 0): string =>
  new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate() + days, hh, mm))
    .toISOString()
    .replace('.000Z', 'Z');

/** The milestones of one admin event, ordered by start (SequenceNo). Empty for an event without a milestone around
    today. */
export function orbitAdminMilestones(eventId: string, today: Date = new Date()): OrbitAdminMilestone[] {
  if (eventId !== '7301') return [];
  const T = ORBIT_ADMIN_MILESTONE_TYPES;
  const rows: [string, string, OrbitAdminMilestoneType, number, number, number, number, number][] = [
    // name, description, type, day, start hh, start mm, end hh, end mm (UTC)
    [
      "Helpers' Briefing",
      'Door and car park helpers meet in the side room before the conferences.',
      T.adminMeeting,
      -1,
      22,
      0,
      23,
      0,
    ],
    [
      'Coach from Azul',
      'The coach leaves Azul at 08:00 and stops at the hall car park.',
      T.adminTransportVehicle,
      0,
      11,
      0,
      15,
      0,
    ],
    [
      'Arrival of the Visiting Families',
      'Visiting families collect their room keys at the hall entrance.',
      T.adminAccommodation,
      0,
      15,
      30,
      18,
      0,
    ],
    [
      'Lunch for the Kitchen Team',
      'Lunch in the hall annex for the helpers of the kitchen.',
      T.adminMeal,
      0,
      16,
      0,
      17,
      0,
    ],
    ['Afternoon Break', 'Tea and coffee in the hall foyer.', T.adminBreak, 0, 19, 0, 19, 30],
    ['Supper at the Hall', 'Supper for the visitors and the local households.', T.adminMealAtHall, 0, 23, 0, 24, 30],
    [
      'Opening Meeting',
      `First meeting of the conferences at the ${LOCALITY.name} Main Hall.`,
      T.adminMeeting,
      1,
      12,
      0,
      14,
      0,
    ],
  ];
  return rows.map(([name, description, type, day, sh, sm, eh, em], i) => {
    const start = utcAt(today, day, sh, sm);
    return {
      MilestoneId: String(930101 + i),
      MilestoneRef: `MS-7301-${String(i + 1).padStart(2, '0')}`,
      EventId: eventId,
      MilestoneName: name,
      Description: description,
      EventDate: start,
      StartDate: start,
      EndDate: utcAt(today, day, eh, em),
      SequenceNo: String(i + 1),
      LocalityId: LOCALITY.id,
      LocalityName: LOCALITY.name,
      type,
    };
  });
}
