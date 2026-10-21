import type { AssembleEventSummary } from '../../shared/Connect2_Assemble_MUI/lib/structures';

/* Domain types of AssembleDetail (rule 9: components never see the wire shape; api.ts maps it). Field names are the
   Connect2_Assemble_CS attributes (contract schemas Connect2_Assemble_CS__*); Long Integers stay strings, counts are
   numbers. */

/** Route inputs (UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js:36-175): Start is a DateTime as
    "yyyy-MM-ddTHH:mm:ss" ("" = the null DateTime). */
export interface AssembleDetailInputs {
  EventId: string;
  SeriesId: string;
  Start: string;
  AssembleEventTypeTile: string;
}

/** APIDomain_Directory_IS PhotoURL (the fields the blocks read). */
export interface PhotoURL {
  Bucket: string;
  Path: string;
  Type: string;
  SignedURL: string;
}

/** AssembleAttendeeGuest: a household of a hall (Id = household id; Id "0" = a skeleton row of BuildSkeletonList). */
export interface AssembleAttendeeGuest {
  Id: string;
  Name: string;
  FamilyNames: string;
  Location: string;
  IsBookmarked: boolean;
  IsDisabled: boolean;
  AvatarURL: PhotoURL;
}

/** AssembleAttendeeSubdivision: an invited hall. */
export interface AssembleAttendeeSubdivision {
  Id: string;
  Name: string;
  HouseholdCount: number;
  LocalityId: string;
  SubdivisionHouseholdList: AssembleAttendeeGuest[];
}

/** LocalityDetails: an invited locality and its halls. */
export interface LocalityDetails {
  LocalityId: string;
  LocalityName: string;
  AssembleAttendeeSubdivisionList: AssembleAttendeeSubdivision[];
}

/** AssembleEventSummary with the ids the detail reads (EventId for the skeleton condition). */
export interface AssembleEventSummaryDetail extends AssembleEventSummary {
  EventId: string;
  DateTime: string;
  Notes: string;
}

/** AssembleEvent (Connect2_Assemble_CS AssembleEventRec). */
export interface AssembleEvent {
  AssembleEventSummary: AssembleEventSummaryDetail;
  AssembleAttendeeSubdivisionList: LocalityDetails[];
  AssembleSpecialAttendeeSubdivisionList: LocalityDetails[];
  AssembleAttendeeSpecialGuestList: AssembleAttendeeGuest[];
  GSMContactList: string[];
}

/** DataActionGetAssembleEvent output. */
export interface GetAssembleEventResult {
  AssembleEvent: AssembleEvent;
  IsNotFound: boolean;
}

/** AssembleEventContact (AssembleEventDetail_ContactList: MemberContactWithTimezone mapped field by field,
    sources/…ContactList.mvc.js:589-617). */
export interface AssembleEventContact {
  Email: string;
  CountryCode: string;
  LocalityId: string;
  HouseholdId: string;
  Timezone: { TimezoneLabel: string; OffsetSeconds: string };
  ContactDetails: {
    Id: string;
    Name: string;
    Location: string;
    IsDisabled: boolean;
    IsBookmarked: boolean;
    AvatarURL: PhotoURL;
  };
  MobilePhoneNumber: string;
  HomePhoneNumber: string;
  WorkPhoneNumber: string;
  LocalityName: string;
  CountryName: string;
}
