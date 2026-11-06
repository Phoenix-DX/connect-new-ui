// Generated from captured response shapes. Long Integer / Decimal travel as strings.

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

export interface Out_Notes {
  Total: number /* 0 in capture */;
  Note_Item_List: Note_Item_List;
}

export interface GetAssembleNotesResponse {
  Out_Notes: Out_Notes;
}

export interface AssembleEventType {
  Id: string;
  Title: string;
}

export interface AssembleEventSummary {
  EventId: string;
  SeriesId: string;
  DateTime: string /* ISO DateTime */;
  HostingSubdivisionId: string /* Long Integer as string */;
  HostingLocation: string;
  HostingSubdivisionFormattedAddress: string;
  HostingSubdivisionUseCoordinates: boolean;
  HostingSubdivisionLatitude: string /* Decimal as string */;
  HostingSubdivisionLongitude: string /* Decimal as string */;
  HostingSubdivisionHallPhotoSignedURL: string;
  AssembleEventType: AssembleEventType;
  RecurrenceTypeId: string;
  RecurrenceTypeLabel: string;
  IsCustomRecurrence: boolean;
  RecurrencyFirstDate: string /* "1900-01-01..." = no value */;
  IsAllDay: boolean;
  BrothersCount: string /* Long Integer as string */;
  SistersCount: string /* Long Integer as string */;
  IsVirtual: boolean;
  Notes: string;
  LocalityName: string;
  CountryName: string;
  VirtualMeetingTypeLabel: string /* "" in capture */;
  VirtualMeetingLink: string /* "" in capture */;
  VirtualMeetingId: string /* "" in capture */;
  VirtualMeetingPassword: string /* "" in capture */;
  IsPBCC: boolean;
  IsUnavailable: boolean;
}

export interface AssembleAttendeeSubdivisionListItem {
  LocalityId: string /* Long Integer as string */;
  LocalityName: string;
  AssembleAttendeeSubdivisionList: AssembleAttendeeSubdivisionListItem[] /* wire: { List: [...] } */;
}

export interface AssembleSpecialAttendeeSubdivisionListItem {
  LocalityId: string /* Long Integer as string */;
  LocalityName: string;
  AssembleAttendeeSubdivisionList: AssembleAttendeeSubdivisionListItem[] /* wire: { List: [...] } */;
}

export interface AssembleAttendeeSpecialGuestList {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface GSMContactList {
  List: number[];
  EmptyListItem: number /* 0 in capture */;
}

export interface AssembleEvent {
  AssembleEventSummary: AssembleEventSummary;
  AssembleAttendeeSubdivisionList: AssembleAttendeeSubdivisionListItem[] /* wire: { List: [...] } */;
  AssembleSpecialAttendeeSubdivisionList: AssembleSpecialAttendeeSubdivisionListItem[] /* wire: { List: [...] } */;
  AssembleAttendeeSpecialGuestList: AssembleAttendeeSpecialGuestList;
  GSMContactList: GSMContactList;
}

export interface GetAssembleEventResponse {
  AssembleEvent: AssembleEvent;
  IsNotFound: boolean;
}

export interface Timezone {
  TimezoneLabel: string;
  OffsetSeconds: string /* Long Integer as string */;
}

export interface AvatarURL {
  Bucket: string;
  Path: string;
  Type: string;
  CropX: string /* Long Integer as string */;
  CropY: string /* Long Integer as string */;
  CropW: string /* Long Integer as string */;
  CropH: string /* Long Integer as string */;
  SignedURL: string /* "" in capture */;
}

export interface ContactDetails {
  Id: string /* Long Integer as string */;
  Name: string;
  Location: string;
  IsDisabled: boolean;
  IsBookmarked: boolean;
  AvatarURL: AvatarURL;
}

export interface MemberContactListItem {
  MobilePhoneNumber: string;
  HomePhoneNumber: string;
  WorkPhoneNumber: string /* "" in capture */;
  Email: string;
  CountryCode: string;
  LocalityId: string /* Long Integer as string */;
  HouseholdId: string /* Long Integer as string */;
  Timezone: Timezone;
  ContactDetails: ContactDetails;
  LocalityName: string;
  CountryName: string;
}

export interface GetMemberContactByCacheKeyResponse {
  MemberContactList: MemberContactListItem[] /* wire: { List: [...] } */;
}

export interface ResultsItem {
  Bucket: string;
  Path: string;
  Type: string;
  SignedURL: string;
  Error: string /* "" in capture */;
}

export interface GetSignedPhotosInBulkResponse {
  Results: ResultsItem[] /* wire: { List: [...] } */;
}
