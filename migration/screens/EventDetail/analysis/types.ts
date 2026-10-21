// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface LocalConnectApplicationEvents {
  Id: string;
  Name: string;
}

export interface EventListItem {
  LocalConnectApplicationEvents: LocalConnectApplicationEvents;
}

export interface GetAllApplicationEventsResponse {
  EventList: EventListItem[] /* wire: { List: [...] } */;
}

export interface HostSurvey {
  Id: string /* "" in capture */;
  Description: string /* "" in capture */;
}

export interface OrbitEventType {
  Id: string;
  Is_Active: boolean;
  Type: string;
  Name: string /* "" in capture */;
  MainColorVar: string /* "" in capture */;
  MainIcon: string /* "" in capture */;
}

export interface OrbitMilestoneType {
  Id: string;
  Is_Active: boolean;
  Order: number;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
  CanHost: boolean;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string /* "" in capture */;
  IconTransportArrival: string /* "" in capture */;
  TransportHeaderClass: string /* "" in capture */;
  TravelInfoHeader: string /* "" in capture */;
  TravelInfoHeaderIcon: string /* "" in capture */;
}

export interface MilestoneInfo {
  HostId: string /* Long Integer as string */;
  Location: string;
  Seating: string /* "" in capture */;
  MilestoneStartDateTime: string /* "1900-01-01..." = no value */;
  MilestoneEndDateTime: string /* "1900-01-01..." = no value */;
  DepartureLocation: string /* "" in capture */;
  ArrivalLocation: string /* "" in capture */;
  MilestoneHost: string;
  Description: string /* "" in capture */;
}

export interface MilestonesItem {
  MilestoneId: string;
  Type: string;
  Title: string;
  MilestoneDateTime: string /* ISO DateTime */;
  TimeType: string;
  SequenceNo: string /* Long Integer as string */;
  DateForFilter: string /* Date */;
  OrbitMilestoneType: OrbitMilestoneType;
  MilestoneInfo: MilestoneInfo;
}

export interface Response {
  EventId: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  EventType: string;
  EventName: string;
  EventStartDate: string /* ISO DateTime */;
  EventEndDate: string /* ISO DateTime */;
  Location: string;
  TypeOfEvent: string;
  IsBookletVisible: boolean;
  SetUpMeals: boolean;
  Meals: boolean;
  Accommodations: boolean;
  Helpers: boolean;
  Transport: boolean;
  GuestTransport: boolean;
  HostSurvey: HostSurvey;
  OrbitEventType: OrbitEventType;
  Milestones: MilestonesItem[] /* wire: { List: [...] } */;
}

export interface DayFilterListItem {
  DateGroup: string /* Date */;
  IsSelected: boolean;
}

export interface Response_DateFilters {
  HasBefore: boolean;
  HasAfter: boolean;
  DayFilterList: DayFilterListItem[] /* wire: { List: [...] } */;
}

export interface Get_EventDetailsResponse {
  Response: Response;
  Response_DateFilters: Response_DateFilters;
  IsNullResponse: boolean;
}

export interface Get_HostSurveyStatusResponse {
  Response: Response;
}

export interface Get_HasDocumentsResponse {
  Response_HasDocuments: boolean;
}

export interface Get_HasQRCodeResponse {
  Response_HasQRCode: boolean;
  Response_HasScanned: boolean;
}
