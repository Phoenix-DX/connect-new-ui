// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface DisplayOptions {
  IsHidden: boolean;
  IsDeceased: boolean;
  IsAncestry: boolean;
}

export interface Household_Card_Content {
  Name: string;
  FamilyNames: string;
  Address: string;
  LocalityName: string;
  CountryName: string;
  SupperMeetingId: string /* Long Integer as string */;
  SupperMeetingName: string;
  TimezoneName: string /* "" in capture */;
  TimezoneOffset: number /* 0 in capture */;
  LocalityId: string /* Long Integer as string */;
  Surname: string /* "" in capture */;
  DisplayOptions: DisplayOptions;
}

export interface HouseholdCard {
  Id: string /* Long Integer as string */;
  Household_Card_Content: Household_Card_Content;
}

export interface Household_Actions {
  HasBookmark: boolean;
  HasUnbookmark: boolean;
  HasNotes: boolean;
  HasGift: boolean;
  HasShare: boolean;
  HasCall: boolean;
  HasEmail: boolean;
  HasViewDetails: boolean;
}

export interface Household {
  HouseholdCard: HouseholdCard;
  Household_Actions: Household_Actions;
}

export interface Out_HouseholdMembersItem {
  Id: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  FirstName: string;
  LastName: string;
  Title: string;
  Initials: string;
  DateOfBirth: string /* Date */;
  IsDeceased: boolean;
  DeceasedDate: string /* "1900-01-01..." = no value */;
  DisplayAge: boolean;
  Description: string;
  DescriptionHighlight: string /* "" in capture */;
  MobilePhone: string;
  HomePhone: string;
  WorkPhone: string;
  Email: string;
  MemberRole: string;
  LifeCycleText: string;
  LifeCycleText_IsItallic: boolean;
  MarriageText: string /* "" in capture */;
  MarriageHighlightText: string /* "" in capture */;
  MarriagePartnerTakenText: string /* "" in capture */;
  ContryCode: string /* "" in capture */;
  LocalityId: string /* "" in capture */;
  LocalityName: string;
  CountryName: string;
  FormattedLocality: string;
  HasNavigation: boolean;
  HasCTAs: boolean;
  Age: number;
}

export interface EmptyListItem {
  Id: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  Title: string /* "" in capture */;
  Initials: string /* "" in capture */;
  DateOfBirth: string /* "1900-01-01..." = no value */;
  IsDeceased: boolean;
  DeceasedDate: string /* "1900-01-01..." = no value */;
  DisplayAge: boolean;
  Description: string /* "" in capture */;
  DescriptionHighlight: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  MemberRole: string /* "" in capture */;
  LifeCycleText: string /* "" in capture */;
  LifeCycleText_IsItallic: boolean;
  MarriageText: string /* "" in capture */;
  MarriageHighlightText: string /* "" in capture */;
  MarriagePartnerTakenText: string /* "" in capture */;
  ContryCode: string /* "" in capture */;
  LocalityId: string /* "" in capture */;
  LocalityName: string /* "" in capture */;
  CountryName: string /* "" in capture */;
  FormattedLocality: string /* "" in capture */;
  HasNavigation: boolean;
  HasCTAs: boolean;
  Age: number /* 0 in capture */;
}

export interface Out_NonHouseholdMembers {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface GetHouseholdResponse {
  Household: Household;
  Out_HouseholdMembers: Out_HouseholdMembersItem[] /* wire: { List: [...] } */;
  Out_NonHouseholdMembers: Out_NonHouseholdMembers;
  isVisible: boolean;
}

export interface ContactPopupData {
  ImageURL: string /* "" in capture */;
  EntityTypeId: string;
  EntityId: string /* Long Integer as string */;
  IsAvatarImage: boolean;
  ActionName: string /* "" in capture */;
  Name: string;
  Locality: string;
  TimezoneName: string;
  TimezoneOffset: number;
  ShowPopup: boolean;
  DisplayContactNumber: string /* "" in capture */;
  IsFetchingTimezone: boolean;
  IsLoading: boolean;
  ShowTimezone: boolean;
  ShowImage: boolean;
  CountryName: string;
  TitleTerminator: string /* "" in capture */;
}

export interface FetchContactDetailsResponse {
  ContactPopupData: ContactPopupData;
  Phone: string /* "" in capture */;
  MobilePhone: string /* "" in capture */;
  HomePhone: string /* "" in capture */;
  WorkPhone: string /* "" in capture */;
  Email: string /* "" in capture */;
  CountryName: string;
  LocalityId: string /* Long Integer as string */;
  LocalityName: string;
  EntitySubtitle: string;
  EntityName: string;
}

export interface HouseholdCoordinates {
  Longitude: string /* Decimal as string */;
  Latitude: string /* Decimal as string */;
  UseCoordinates: boolean;
}

export interface GetHousehold_CoordinatesResponse {
  HouseholdCoordinates: HouseholdCoordinates;
}

export interface ResultsItem {
  Id: string /* Long Integer as string */;
  Type: string;
  Size: string;
  SignedURL: string;
  Error: string /* "" in capture */;
}

export interface GetSignedImagesInBulkResponse {
  Results: ResultsItem[] /* wire: { List: [...] } */;
}
