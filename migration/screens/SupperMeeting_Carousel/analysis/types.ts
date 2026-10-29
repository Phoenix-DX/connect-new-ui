// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface Household_GalleryCard_ListItem {
  HouseholdId: string /* Long Integer as string */;
  HouseholdName: string;
  ChildrenNames: string;
}

export interface GetSubdivisionHouseholdsResponse {
  Household_GalleryCard_List: Household_GalleryCard_ListItem[] /* wire: { List: [...] } */;
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

export interface ContactPopupData {
  ImageURL: string /* "" in capture */;
  EntityTypeId: string /* "" in capture */;
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
  EntitySubtitle: string /* "" in capture */;
  EntityName: string;
}

export interface Subdivision_Card_Content {
  Name: string;
  BretherenCount: number;
  HouseholdCount: number;
  BrothersCount: number;
  SistersCount: number;
  Address: string;
}

export interface Subdivision_Card {
  SubdivisionId: string /* Long Integer as string */;
  Subdivision_Card_Content: Subdivision_Card_Content;
}

export interface Subdivision_Actions {
  HasBookmark: boolean;
  HasUnbookmark: boolean;
  HasNotes: boolean;
  HasGift: boolean;
  HasShare: boolean;
  HasCall: boolean;
  HasEmail: boolean;
  HasViewDetails: boolean;
}

export interface Subdivision {
  Subdivision_Card: Subdivision_Card;
  Subdivision_Actions: Subdivision_Actions;
}

export interface GetSubdivisionResponse {
  Subdivision: Subdivision;
}

export interface Results {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface GetSignedImagesInBulkResponse {
  Results: Results;
}
