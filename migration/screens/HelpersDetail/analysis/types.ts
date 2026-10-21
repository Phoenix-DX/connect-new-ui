// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface OrbitMilestoneType {
  Id: string /* "" in capture */;
  Is_Active: boolean;
  Order: number /* 0 in capture */;
  Type: string /* "" in capture */;
  Name: string /* "" in capture */;
  MainColorVar: string /* "" in capture */;
  MainIcon: string /* "" in capture */;
  CanHost: boolean;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string /* "" in capture */;
  IconTransportArrival: string /* "" in capture */;
  TransportHeaderClass: string /* "" in capture */;
  TravelInfoHeader: string /* "" in capture */;
  TravelInfoHeaderIcon: string /* "" in capture */;
}

export interface EventDetails {
  Id: string /* Long Integer as string */;
  Name: string /* "" in capture */;
  Location: string /* "" in capture */;
  StartDate: string /* "1900-01-01..." = no value */;
  EndDate: string /* "1900-01-01..." = no value */;
}

export interface MemberInformation {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface EmptyListItem {
  Role: string /* "" in capture */;
  MemberInformation: MemberInformation;
}

export interface Helpers {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface GetHelperHost_Response {
  EventDetails: EventDetails;
  Helpers: Helpers;
}

export interface Response {
  OrbitMilestoneType: OrbitMilestoneType;
  GetHelperHost_Response: GetHelperHost_Response;
}

export interface GetHelperDetailsResponse {
  Response: Response;
}
