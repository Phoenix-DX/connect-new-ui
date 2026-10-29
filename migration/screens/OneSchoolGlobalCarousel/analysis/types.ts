// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface ContactPopupData {
  ImageURL: string /* "" in capture */;
  EntityTypeId: string;
  EntityId: string /* Long Integer as string */;
  IsAvatarImage: boolean;
  ActionName: string /* "" in capture */;
  Name: string /* "" in capture */;
  Locality: string /* "" in capture */;
  TimezoneName: string /* "" in capture */;
  TimezoneOffset: number /* 0 in capture */;
  ShowPopup: boolean;
  DisplayContactNumber: string /* "" in capture */;
  IsFetchingTimezone: boolean;
  IsLoading: boolean;
  ShowTimezone: boolean;
  ShowImage: boolean;
  CountryName: string /* "" in capture */;
  TitleTerminator: string;
}

export interface FetchContactDetailsResponse {
  ContactPopupData: ContactPopupData;
  Phone: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  CountryName: string /* "" in capture */;
  LocalityId: string /* Long Integer as string */;
  LocalityName: string /* "" in capture */;
  EntitySubtitle: string /* "" in capture */;
  EntityName: string /* "" in capture */;
}

export interface EmptyListItem {
  Id: string /* Long Integer as string */;
  Note: string /* "" in capture */;
  DateCreatedUtc: string /* "1900-01-01..." = no value */;
  DateEditedUtc: string /* "1900-01-01..." = no value */;
}

export interface Note_Item_List {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Notes {
  Total: number /* 0 in capture */;
  Note_Item_List: Note_Item_List;
}

export interface FetchNotesResponse {
  Notes: Notes;
}

export interface OneSchoolGlobal_LocalitiesList {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface UI_OneSchool_Card_Content {
  Name: string /* "" in capture */;
  LocalityName: string /* "" in capture */;
  LocalityId: string /* Long Integer as string */;
  CountryName: string /* "" in capture */;
  CountryCode: string /* "" in capture */;
  Phone: string /* "" in capture */;
  Email: string /* "" in capture */;
}

export interface BusinesLinks {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface OneSchoolGlobal__DetailCard_Content {
  Address: string /* "" in capture */;
  AreasServed: string /* "" in capture */;
  BusinesLinks: BusinesLinks;
}

export interface OneSchoolGlobal_DetailCard {
  CommunityBusinessId: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
  UI_OneSchool_Card_Content: UI_OneSchool_Card_Content;
  OneSchoolGlobal__DetailCard_Content: OneSchoolGlobal__DetailCard_Content;
}

export interface Out_OneSchoolGlobal {
  OneSchoolGlobal_About: string /* "" in capture */;
  OneSchoolGlobal_LocalitiesList: OneSchoolGlobal_LocalitiesList;
  OneSchoolGlobal_DetailCard: OneSchoolGlobal_DetailCard;
}

export interface HouseholdCoordinates {
  Longitude: string /* Decimal as string */;
  Latitude: string /* Decimal as string */;
  UseCoordinates: boolean;
}

export interface UI_Timezone {
  TimezoneName: string /* "" in capture */;
  TimezoneOffset: string /* Long Integer as string */;
}

export interface GetOneSchoolGlobalDetailsResponse {
  Out_OneSchoolGlobal: Out_OneSchoolGlobal;
  HouseholdCoordinates: HouseholdCoordinates;
  UI_Timezone: UI_Timezone;
}
