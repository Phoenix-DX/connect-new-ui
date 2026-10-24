import type { PhotoURL } from '@/api/event';

/* Domain types of AssembleDetail (rule 9: components never see the wire shape). The meeting of
   DataActionGetAssembleEvent (Connect2_Assemble_CS: the summary, the invited localities, halls and guests) is a domain
   type of api/event; this module keeps the names that the screen uses. */
export type {
  AssembleAttendeeGuest,
  AssembleAttendeeSubdivision,
  AssembleEventResult as GetAssembleEventResult,
  AssembleLocalityDetails as LocalityDetails,
} from '@/api/event';

/** Route inputs (UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc.js:36-175): Start is a DateTime as
    "yyyy-MM-ddTHH:mm:ss" ("" = the null DateTime). */
export interface AssembleDetailInputs {
  EventId: string;
  SeriesId: string;
  Start: string;
  AssembleEventTypeTile: string;
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
