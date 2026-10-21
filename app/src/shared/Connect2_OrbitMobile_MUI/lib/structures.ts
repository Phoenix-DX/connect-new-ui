/* Structures of Connect2_OrbitMobile_MUI used by the shared blocks; fields named as in OutSystems, all optional =
   OutSystems default. */

/** DayFilter (record of DayFilterList, Connect2_OrbitMobile_BL.DayFilterRec): one day of the event date selector
    (migration/screens/EventDetail/analysis/types.ts:92-95 `DayFilterListItem`). DateGroup is an OutSystems Date
    ("yyyy-MM-dd"). */
export interface DayFilter {
  DateGroup?: string;
  IsSelected?: boolean;
}

/* ---- Wave 8, batch O-A2 (Card_Template, Card_Event, Card_Milestone) ----
   Structures of Connect2_OrbitMobile_BL / Connect2_OrbitMobile_IS (migration/runtime-sources/<module>.model.js).
   DateTime values travel as on the wire ("yyyy-MM-ddTHH:mm:ssZ", UTC); Date as "yyyy-MM-dd"; Long Integer as string. */

/** OrbitEventTypeRec (Connect2_OrbitMobile_BL.model.js:488-522): an event type with its card colour and icon. */
export interface OrbitEventTypeRecord {
  Id?: string;
  Is_Active?: boolean;
  Type?: string;
  Name?: string;
  MainColorVar?: string;
  MainIcon?: string;
}

/** EventInfoRec (Connect2_OrbitMobile_IS.model.js:2291-2316). */
export interface EventInfo {
  StartEventDate?: string;
  EndEventDate?: string;
  EventLocation?: string;
}

/** Event_ScreenRec (Connect2_OrbitMobile_BL.model.js:523-557): one event of the Orbit landing list. */
export interface Event_Screen {
  EventId?: string;
  Type?: string;
  Title?: string;
  DateTime?: string;
  OrbitEventType?: OrbitEventTypeRecord;
  EventInfo?: EventInfo;
}

/** OrbitMilestoneTypeRec (Connect2_OrbitMobile_BL.model.js:62-120): a milestone type with its colour, icons and
    transport labels. */
export interface OrbitMilestoneTypeRecord {
  Id?: string;
  Is_Active?: boolean;
  Order?: number;
  Type?: string;
  Name?: string;
  MainColorVar?: string;
  MainIcon?: string;
  CanHost?: boolean;
  IsTransportMilestone?: boolean;
  IconTransportDeparture?: string;
  IconTransportArrival?: string;
  TransportHeaderClass?: string;
  TravelInfoHeader?: string;
  TravelInfoHeaderIcon?: string;
}

/** MilestoneInfoRec (Connect2_OrbitMobile_IS.model.js:3639-3682). HostId is a Long Integer. */
export interface MilestoneInfo {
  HostId?: string;
  Location?: string;
  Seating?: string;
  MilestoneStartDateTime?: string;
  MilestoneEndDateTime?: string;
  DepartureLocation?: string;
  ArrivalLocation?: string;
  MilestoneHost?: string;
  Description?: string;
}

/** Milestone_ScreenRec (Connect2_OrbitMobile_BL.model.js:633-676): one milestone of an event. */
export interface Milestone_Screen {
  MilestoneId?: string;
  Type?: string;
  Title?: string;
  MilestoneDateTime?: string;
  TimeType?: string;
  SequenceNo?: string;
  DateForFilter?: string;
  OrbitMilestoneType?: OrbitMilestoneTypeRecord;
  MilestoneInfo?: MilestoneInfo;
}

/* ---- Wave 8, batch O-A2, part b (Card_MemberInformation, MilestoneHeader, HostSurvey_PillItem, EventDetail_SubSection) ---- */

/** MemberInformation (Connect2_OrbitMobile_IS.MemberInformationRec, runtime-sources/Connect2_OrbitMobile_IS.model.js:
    289-): the member row of Card_MemberInformation's In_MemberInformation. Long Integer travels as text. */
export interface MemberInformation {
  HouseholderId?: string;
  MemberId?: string;
  LocalityId?: string;
  Locality?: string;
  CountryCode?: string;
  FirstName?: string;
  LastName?: string;
  Title?: string;
  IsHouseholder?: boolean;
  IsSpouse?: boolean;
  Age?: string;
  Phone?: string;
  MiddayMeal?: string;
  EveningMeal?: string;
  HasGuestArrangements?: boolean;
  HasOrbitAdminRole?: boolean;
  SignedPhotoURL?: string;
}

/** LocalOrbitMilestoneType (Connect2_OrbitMobile_MUI.model.js:11771-, local entity of the module, record read by
    GetLocalOrbitMilestoneTypeById): the milestone type's header icon and label. */
export interface LocalOrbitMilestoneType {
  Id?: string;
  Order?: number;
  Type?: string;
  Name?: string;
  MainColorVar?: string;
  MainIcon?: string;
  CanHost?: boolean;
  IsTransportMilestone?: boolean;
  IconTransportDeparture?: string;
  IconTransportArrival?: string;
  TransportHeaderClass?: string;
  TravelInfoHeader?: string;
}
