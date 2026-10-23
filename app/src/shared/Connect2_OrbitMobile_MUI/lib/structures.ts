/* Structures of Connect2_OrbitMobile_MUI used by the shared blocks; fields named as in OutSystems, all optional =
   OutSystems default. */

/* Structures of Connect2_OrbitMobile_BL / Connect2_OrbitMobile_IS that the Orbit calls answer (Card_Template,
   Card_Event, Card_Milestone, Card_MemberInformation, the day selector): domain types of api/event. DateTime values
   travel as on the wire ("yyyy-MM-ddTHH:mm:ssZ", UTC); Date as "yyyy-MM-dd"; Long Integer as string.
   - DayFilter (DayFilterRec): one day of the event date selector.
   - OrbitEventTypeRecord (OrbitEventTypeRec), EventInfo (EventInfoRec), Event_Screen (Event_ScreenRec): an event.
   - OrbitMilestoneTypeRecord (OrbitMilestoneTypeRec), MilestoneInfo (MilestoneInfoRec), Milestone_Screen
     (Milestone_ScreenRec): a milestone of an event.
   - MemberInformation (MemberInformationRec): the member row of Card_MemberInformation. */
export type {
  DayFilter,
  EventInfo,
  Event_Screen,
  MemberInformation,
  MilestoneInfo,
  Milestone_Screen,
  OrbitEventTypeRecord,
  OrbitMilestoneTypeRecord,
} from '@/api/event';

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
