import type { RequestHandler } from 'msw';
import { wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import {
  INTERCHANGE,
  LOCALITY,
  LOCALITY_HOUSEHOLDS,
  SCHOOLS,
  SUPPER_MEETINGS,
  childrenText,
  householdName,
} from '@/mocks/fictional/directory';
import { markNoPhoto } from '@/components/ui/EntityLazyImage/mocks';

/* DataActionGet_LocalityDetails: the recorded fixture (UBTConnect/DataActionGet_LocalityDetails/01-a5fd3a96.json:
   counts, main hall coordinates, locality/country names and time zone, no person data). Its LocalityId was remapped by
   the anonymisation (585) while the captured route uses 252, so the single recording is served without input matching.
   DataActionGetLocalityHouseholds and DataActionGetMembers were never recorded (households and members are person
   data): fictional values with the captured counts and text lengths (dom/default.html: 23 cards; a subtitle on 17;
   2 member avatars per card, 1 on cards 12 and 13; location "Bahia Blanca, Argentina", the TST locality label).
   Scenarios: `real`, `empty` (no households: Directory_EmptyState), `error` (HTTP 500), `loading` (never answers). */

/* The 23 households of locality 252 in the directory cast (src/mocks/fictional/directory.ts), in the captured card
   order, whose names and children keep the captured word lengths; member avatars: 2 per card, 1 for the two single
   householders (cards 13 and 14). Card 1 is household 42438 (decision A, 2026-10-16), the captured bookmarked first card (bookmark row 4, shell
   mockLocalBookmarks). */
export const sampleHouseholds = LOCALITY_HOUSEHOLDS.map((h) => ({
  HouseholdId: h.id,
  HouseholdName: householdName(h),
  ChildrenNames: childrenText(h.children),
  IsBookmarked: false,
  LocalityName: LOCALITY.name,
  CountryName: LOCALITY.country,
}));

const membersOf = (id: string | undefined) => {
  const index = LOCALITY_HOUSEHOLDS.findIndex((h) => h.id === id);
  const count = LOCALITY_HOUSEHOLDS[index]?.spouse === undefined && index >= 0 ? 1 : 2;
  return Array.from({ length: count }, (_m, m) => ({
    ImageURL: '',
    EntityId: String(92001 + Math.max(index, 0) * 10 + m),
    EntityType: 'Member',
  }));
};

/* Tags (feedback F1, capture-tags-2026-10-16): never recorded, fictional values with the captured counts and text
   lengths (dom/tag-*.html; migration/knowledge/mock-fixtures.md). Captured statistics that were not masked (counts,
   labels) are kept; masked names come from the directory cast; "Bahia Blanca" is the TST locality label. */
const LANDSCAPE_PHOTO = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

/* Supper Meetings (dom/tag-suppermeetings.html, `l1-3598_10..12`): the cast's three supper meetings (name lengths
   7 5 7 5 / 9 / 9 5 as captured), the captured statistics. Ids reuse the SupperMeeting_Details / SupperMeeting_Carousel
   mock ids (1210 and the carousel's 9202, 9203), so a click opens screens that have data. The third card showed
   "Sorry, no photo available": no photo. */
const STATISTICS: Record<string, [number, number, number, number]> = {
  '1210': [39, 24, 15, 11],
  '9202': [30, 15, 15, 8],
  '9203': [26, 14, 12, 6],
};
const SUBDIVISIONS = SUPPER_MEETINGS.map(({ id, name }) => [id, name, ...(STATISTICS[id] ?? [0, 0, 0, 0])] as const);
markNoPhoto('Subdivision', '9203');
export const sampleSubdivisions = SUBDIVISIONS.map(([id, name, brethren, brothers, sisters, households]) => ({
  SubdivisionId: id,
  Subdivision_Card_Content: {
    Name: name,
    BretherenCount: brethren,
    BrothersCount: brothers,
    SistersCount: sisters,
    HouseholdCount: households,
    Address: '',
  },
}));

/* Interchange (dom/tag-interchange.html, `l1-3679_0`): one locality (the cast's Monte Hermoso), empty subtitle, the
   captured statistics in their order (Brethren and Supper Meetings were masked: 3 and 1 digits; Distance 3 + 2). */
const statistic = (Name: string, Value: string) => ({ Name, Value, IconColorId: '', IconId: '' });
export const sampleInterchanges = [
  {
    InterchangeLocalityId: INTERCHANGE.id,
    InterchangeLocalityName: INTERCHANGE.name,
    InterchangeCountryName: INTERCHANGE.country,
    InterchangeDistance: INTERCHANGE.distance,
    IsBookmarked: false,
    InterchangeStatistics: {
      Title: INTERCHANGE.name,
      Subtitle: '',
      AvatarURL: '',
      Statistics: wireList([
        statistic('Brethren', '163'),
        statistic('Households', '53'),
        statistic('Supper Meetings', '4'),
        statistic('Brothers', '82'),
        statistic('Sisters', '81'),
        statistic('Distance', INTERCHANGE.distance),
      ]),
    },
  },
];

/* OneSchool Global (dom/tag-oneschoolglobal.html, `l1-3709_3`, `_4`): the cast's two schools with photos (the neutral
   landscape placeholder, Q-W2C-1), names of 9 4 and 9 5 6 letters, locality "Bahia Blanca". The first reuses the
   OneSchoolGlobalDetails route id 1430. Phone and Email are not shown by the card (contact details come from
   FetchContactDetails): empty. */
export const sampleOneSchools = SCHOOLS.map(({ id, name }) => ({
  CommunityBusinessId: id,
  SignedURL: LANDSCAPE_PHOTO,
  OneSchool_Card_Content: {
    Name: name,
    LocalityName: 'Bahia Blanca',
    LocalityId: '252',
    CountryName: 'Argentina',
    CountryCode: 'AR',
    Phone: '',
    Email: '',
  },
}));

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails', { matchInputs: false }),
  contractHandler('UBTConnect', 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds', () => ({
    LocalityHouseholds: wireList(sampleHouseholds),
  })),
  contractHandler('UBTConnect', 'Household_Card/DataActionGetMembers', ({ Household }) => ({
    HouseholdMembers: wireList(membersOf(Household?.HouseholdId)),
    VisibleAvatars: 5,
  })),
  contractHandler('UBTConnect', 'Locality_Subdivisions/DataActionGet_Subdivision_List', () => ({
    Out_Subdivision_Card_List: wireList(sampleSubdivisions),
  })),
  contractHandler('UBTConnect', 'Locality_Interchange/DataActionGetInterchangesByLocalityId', () => ({
    Out_InterchangeList: wireList(sampleInterchanges),
  })),
  contractHandler('UBTConnect', 'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List', () => ({
    Out_OneSchoolGlobal_List: wireList(sampleOneSchools),
  })),
];
