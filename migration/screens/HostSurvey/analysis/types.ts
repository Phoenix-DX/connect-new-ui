// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface SurveyInfo {
  Id: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  EventId: string /* Long Integer as string */;
  EventName: string;
  EventStartDateTime: string /* ISO DateTime */;
  EventEndDateTime: string /* ISO DateTime */;
  LocalityName: string;
  CountryName: string;
  HostProfileSurveyStatus: string;
  AccommodationSurvey: boolean;
  MealSurvey: boolean;
  HelperSurvey: boolean;
  VehicleSurvey: boolean;
  AccommodationSurveyUpdate: boolean;
  MealSurveyUpdate: boolean;
  HostSurveyNote: string /* "" in capture */;
  AccommodationSurveyNote: string /* "" in capture */;
  MealSurveyNote: string /* "" in capture */;
  HelperSurveyNote: string /* "" in capture */;
  VehicleSurveyNote: string /* "" in capture */;
}

export interface HostSurvey_RoomItemItem {
  Name: string;
  GenderPreference: string;
  NumberOfBeds: string /* Long Integer as string */;
  Floor: string;
  HasBasin: boolean;
  HasEnsuite: boolean;
  HasToilet: boolean;
  HasShower: boolean;
  RoomNote: string /* "" in capture */;
  Beds: string[] /* wire: { List: [...] } */;
  IsEdit: boolean;
}

export interface Rooms {
  AccommodationNote: string;
  HostSurvey_RoomItem: HostSurvey_RoomItemItem[] /* wire: { List: [...] } */;
}

export interface MealItemInfoItem {
  Id: string /* Long Integer as string */;
  Name: string;
  MilestoneDescription: string;
  EventDate: string /* ISO DateTime */;
  IsPreferred: boolean;
  ComfortableCapacity: string /* Long Integer as string */;
  StretchCapacity: string /* Long Integer as string */;
  IsEdit: boolean;
  ResetMealData: boolean;
  SequenceNo: string /* Long Integer as string */;
}

export interface Meals {
  MealNote: string;
  MealItemInfo: MealItemInfoItem[] /* wire: { List: [...] } */;
}

export interface EmptyListItem {
  Id: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  HelperRole: string /* "" in capture */;
  HelperStatus: string /* "" in capture */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  LocalityName: string /* "" in capture */;
  CountryName: string /* "" in capture */;
  IsEdit: boolean;
}

export interface HelperItemInfo {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Helpers {
  HelperNote: string /* "" in capture */;
  HelperItemInfo: HelperItemInfo;
}

export interface VehicleItemInfo {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Vehicles {
  HasVehicles: boolean;
  VehicleItemInfo: VehicleItemInfo;
}

export interface Response {
  SurveyInfo: SurveyInfo;
  Rooms: Rooms;
  Meals: Meals;
  Helpers: Helpers;
  Vehicles: Vehicles;
}

export interface GetHostSurveyResponse {
  Response: Response;
  HasError: boolean;
}
