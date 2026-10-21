import type { components } from '../../../api/schema';
import {
  ORTIZ,
  VITALE,
  VITALE_PARENTS,
  WARD,
  WARD_SUPPER_MEETING,
  LOCALITY_HOUSEHOLDS,
  childrenText,
  householdName,
  supperMeetingName,
  type CastHousehold,
} from '../../../mocks/fictional/directory';

type Schemas = components['schemas'];
type WireHouseholdDetails = Schemas['Connect_Household_CS__UI_Screen_HouseholdDetails'];
type WireHouseholdMember = Schemas['Connect_Household_CS__UI_HouseholdMember'];

/* Fictional households (person data, P-MOCKS, migration/knowledge/mock-fixtures.md): the shared directory cast
   (src/mocks/fictional/directory.ts), whose names keep the word lengths the TST captures masked. Every wire field is
   present, with the OutSystems default where the capture says nothing. */

/** The household of HouseholdDetails/default (captured: 5 members, no married children, visible): the Vitale
    household 42438 (the route's id), card 1 of locality 252. Any unknown HouseholdId answers it too. */
export const HOUSEHOLD_DETAILS_ID = VITALE.id;
/** The household of Profile/default (Profile_HouseholdPreview; captured: 3 members, visible). */
export const PROFILE_HOUSEHOLD_ID = WARD.id;

const household = (h: CastHousehold, supperMeetingName = supperMeetingName_(h)): WireHouseholdDetails => ({
  HouseholdCard: {
    Id: h.id,
    Household_Card_Content: {
      Name: householdName(h),
      FamilyNames: childrenText(h.children),
      Surname: h.surname,
      Address: h.address,
      LocalityId: h.localityId,
      LocalityName: h.localityName,
      CountryName: h.countryName,
      SupperMeetingId: h.supperMeetingId,
      SupperMeetingName: supperMeetingName,
      // Argentina Time (UTC-3); the Ward household: US Central Time (UTC-6)
      TimezoneName: h.countryName === 'Argentina' ? 'ART' : 'CST',
      TimezoneOffset: h.countryName === 'Argentina' ? -3 : -6,
      DisplayOptions: { IsAncestry: false, IsDeceased: false, IsHidden: false },
    },
  },
  Household_Actions: {
    HasBookmark: true,
    HasCall: false,
    HasEmail: false,
    HasGift: true,
    HasNotes: true,
    HasShare: true,
    HasUnbookmark: false,
    HasViewDetails: false,
  },
});
function supperMeetingName_(h: CastHousehold): string {
  return h === WARD ? WARD_SUPPER_MEETING : supperMeetingName(h.supperMeetingId);
}

const EMPTY_MEMBER: WireHouseholdMember = {
  Age: 0,
  ContryCode: '',
  CountryName: '',
  DateOfBirth: '1900-01-01',
  DeceasedDate: '1900-01-01',
  Description: '',
  DescriptionHighlight: '',
  DisplayAge: false,
  Email: '',
  FirstName: '',
  FormattedLocality: '',
  HasCTAs: false,
  HasNavigation: false,
  HomePhone: '',
  HouseholdId: '0',
  Id: '0',
  Initials: '',
  IsDeceased: false,
  LastName: '',
  LifeCycleText: '',
  LifeCycleText_IsItallic: false,
  LocalityId: '0',
  LocalityName: '',
  MarriageHighlightText: '',
  MarriagePartnerTakenText: '',
  MarriageText: '',
  MemberRole: '',
  MobilePhone: '',
  Title: '',
  WorkPhone: '',
};

/** The members of a cast household: the first two are the parents (actions and navigation), the rest children.
    Title = the first name (the captured member titles have the first names' lengths). Ids from `firstId`. */
export function sampleHouseholdMembers(h: CastHousehold, firstId: number): WireHouseholdMember[] {
  return h.members.map((m, i) => ({
    ...EMPTY_MEMBER,
    Id: String(firstId + i),
    HouseholdId: h.id,
    Title: m.first,
    LifeCycleText: m.note ?? m.born,
    LifeCycleText_IsItallic: m.note !== undefined,
    MemberRole: i < 2 ? 'Householder' : 'Child',
    HasCTAs: i < 2,
    HasNavigation: i < 2,
  }));
}

export interface MockHousehold {
  household: WireHouseholdDetails;
  cast: CastHousehold;
  /** Id of the first member. */
  firstMemberId: number;
  /** Captured per-member shapes, by member index (fields of the wire member). */
  memberShapes?: Record<number, Partial<WireHouseholdMember>>;
  /** Member indexes whose avatar showed the fallback icon on TST (no photo: empty signed URL, `markNoPhoto`). */
  noPhoto?: number[];
  /** Member indexes whose actions menu showed only Call or only Email on TST (`markContactOnly`). */
  contactOnly?: Record<number, 'Call' | 'Email'>;
  /** Out_NonHouseholdMembers (NonMember_ListItem rows). */
  nonMembers?: WireHouseholdMember[];
}

/** The members of a mock household: the cast members with the captured per-member shapes. */
export function membersOf(_id: string, sample: MockHousehold): WireHouseholdMember[] {
  return sampleHouseholdMembers(sample.cast, sample.firstMemberId).map((member, i) => ({
    ...member,
    ...sample.memberShapes?.[i],
  }));
}

const mock = (h: CastHousehold, firstMemberId: number, shapes: Partial<MockHousehold> = {}): MockHousehold => ({
  household: household(h),
  cast: h,
  firstMemberId,
  ...shapes,
});

/** Every cast household (member ids from 7601 by tens unless captured shapes need their own). */
export const sampleHouseholds: Record<string, MockHousehold | undefined> = Object.fromEntries(
  [...LOCALITY_HOUSEHOLDS, ORTIZ, VITALE_PARENTS].map((h, i) => [h.id, mock(h, 7601 + i * 10)]),
);

Object.assign(sampleHouseholds, {
  // HouseholdDetails/default: title "Locality, Country" 5 / 7 / 9 letters (dom/default.html:23); the address has the
  // captured word lengths and line breaks (3 3 10 / 5 6 9 2 6 5 / 4, dom/default.html:136-138), so it wraps to two
  // lines as in default.expected.png (CR-HouseholdDetails-2 §3).
  [VITALE.id]: mock(VITALE, 7001),
  // The third member (a child) also has CTAs, Call only, no navigation (Profile dom/default.html:1613-1760,
  // `b60-b2-b39-l1-276_2-$b7`, one CircleButton `connect-icon-call`; CR-Profile-1).
  [WARD.id]: mock(WARD, 7201, { memberShapes: { 2: { HasCTAs: true } }, contactOnly: { 2: 'Call' } }),
  // Slides 2-4 of HouseholdCarousel/default (the route's mock preload: start id, then cards 2, 3, 4 of the locality).
  // Captured shapes, migration/screens/HouseholdCarousel/analysis/dom/default.html (CR-HouseholdCarousel-2).
  // Slide 2 (`b3-l1-1152_1`): no family names (no Block_Subtitle); 3 Member_ListItem: the first with Email and no Call
  // (`b39-l1-1334_0-b7`, one CircleButton `connect-icon-letter`), the second Call and Email, the third without photo
  // (`ubt-lazy-image--no-image`) and an italic life-cycle line (`b39-l1-1334_2-b4-$b3`, class `italic`); one
  // NonMember_ListItem (`b39-l2-1335_0-$b11`): the married daughter, "Married to" + the highlighted partner, chevron.
  [LOCALITY_HOUSEHOLDS[1]?.id ?? '']: mock(LOCALITY_HOUSEHOLDS[1] as CastHousehold, 7501, {
    noPhoto: [2],
    contactOnly: { 0: 'Email' },
    nonMembers: [
      {
        ...EMPTY_MEMBER,
        Id: '7591',
        HouseholdId: ORTIZ.id,
        Title: 'Ana',
        LifeCycleText: '',
        MarriageText: 'Married to Pablo Ortiz and recently moved to Rosario',
        MarriageHighlightText: 'Pablo Ortiz',
        LocalityId: ORTIZ.localityId,
        LocalityName: ORTIZ.localityName,
        CountryName: ORTIZ.countryName,
        HasNavigation: true,
      },
    ],
  }),
  // Slide 3 (`b3-l1-1152_2`): 6 members, the first with an empty life-cycle line (`b39-l1-1371_0-b4-$b3`, empty span),
  // the sixth without photo (`b39-l1-1371_5`).
  [LOCALITY_HOUSEHOLDS[2]?.id ?? '']: mock(LOCALITY_HOUSEHOLDS[2] as CastHousehold, 7301, { noPhoto: [5] }),
  // Slide 4 (`b3-l1-1152_3`): 6 members, all with photos.
  [LOCALITY_HOUSEHOLDS[3]?.id ?? '']: mock(LOCALITY_HOUSEHOLDS[3] as CastHousehold, 7401),
});
