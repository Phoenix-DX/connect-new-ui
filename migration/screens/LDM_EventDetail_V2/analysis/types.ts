// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface Out_CoordinatorDetails {
  GetCoordinatorDetailsResponse: GetCoordinatorDetailsResponse;
}

export interface GetCoordinatorDetailsResponse {
  Out_CoordinatorDetails: Out_CoordinatorDetails;
  Out_HasContent: boolean;
  EventName: string /* "" in capture */;
}

export interface Timezone {
  TimezoneLabel: string;
  OffsetSeconds: string /* Long Integer as string */;
}

export interface Host {
  IsPublished: boolean;
  Hosting: boolean;
  MemberId: string /* Long Integer as string */;
  HouseholderID: string /* Long Integer as string */;
  HouseholderName: string;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  LocalityId: string /* Long Integer as string */;
  Phone: string;
  Email: string;
  FormattedAddress: string;
  CountryName: string;
  Longitude: string /* "" in capture */;
  Latitude: string /* "" in capture */;
  CDNbucket: string /* "" in capture */;
  CDNPath: string /* "" in capture */;
  SignedURL: string;
  EventID: string /* Long Integer as string */;
  EventDate: string /* ISO DateTime */;
  EventLocalityID: string /* Long Integer as string */;
  EventLocalityName: string;
  HallPhotosCdnBucket: string /* "" in capture */;
  HallphotosCdnPath: string /* "" in capture */;
  SignedHallPhoto: string;
  MainHallName: string /* "" in capture */;
  MainHallFormattedAddress: string;
  MainHallUseLatLong: boolean;
  MainHallLongititude: string /* Decimal as string */;
  MainHallLatitude: string /* Decimal as string */;
  OrganiserName: string /* "" in capture */;
  OrganiserEmail: string /* "" in capture */;
  Adults: string /* Long Integer as string */;
  Children: string /* Long Integer as string */;
  RecordDisabled: boolean;
  HouseholdDisplay: boolean;
  EventName: string /* "" in capture */;
  Timezone: Timezone;
  HomePhone: string /* "" in capture */;
  HouseholderSignedImagePath: string /* "" in capture */;
  WorkPhone: string;
  MobilePhone: string;
}

export interface GuestsItem {
  EventGuestID: string /* Long Integer as string */;
  HouseholderName: string;
  HouseholderID: string /* Long Integer as string */;
  LocalityName: string;
  LocalityId: string /* Long Integer as string */;
  CdnBucket: string;
  Resize340CdnPath: string;
  SignedURL: string;
  NonAttending: string /* "" in capture */;
  Including: string /* "" in capture */;
  Adults: string /* Long Integer as string */;
  Children: string /* Long Integer as string */;
  RecordDisabled: boolean;
  HouseholdDisplay: boolean;
  MobilePhone: string;
  WorkPhone: string /* "" in capture */;
  Email: string;
  FormattedAddress: string /* "" in capture */;
  CountryName: string;
  Latitude: string /* Decimal as string */;
  Longitude: string /* Decimal as string */;
  Timezone: Timezone;
  HomePhone: string /* "" in capture */;
  HouseholderSignedImagePath: string /* "" in capture */;
  HouseholderFirstName: string;
}

export interface EmptyListItem {
  Type: string /* Long Integer as string */;
  Memberid: string /* Long Integer as string */;
  Name: string /* "" in capture */;
  Notes: string /* "" in capture */;
  Category: string /* "" in capture */;
  Eventid: string /* Long Integer as string */;
  Eventguestid: string /* Long Integer as string */;
  FullName: string /* "" in capture */;
  CdnBucket: string /* "" in capture */;
  CdnPath: string /* "" in capture */;
  SignedUrl: string /* "" in capture */;
}

export interface Mobility {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Diet {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Other {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface SpecialNeeds {
  Mobility: Mobility;
  Diet: Diet;
  Other: Other;
}

export interface EventResponse {
  Host: Host;
  Guests: GuestsItem[] /* wire: { List: [...] } */;
  SpecialNeeds: SpecialNeeds;
}

export interface GetEventByEventIdResponse {
  EventResponse: EventResponse;
  Out_HasContent: boolean;
}
