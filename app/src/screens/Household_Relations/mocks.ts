import type { RequestHandler } from 'msw';
import { wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '@/mocks/contract';
import { VITALE, VITALE_PARENTS } from '@/mocks/fictional/directory';

/* Never recorded (members and relations are person data, migration/knowledge/mock-fixtures.md): the relations of
   Julián Vitale, householder of the route's household 42438 (the Vitale household of the directory cast,
   src/mocks/fictional/directory.ts), with the captured shapes, counts and about the captured word lengths
   (dom/default.html): member name 6+6, family name 3+7, father and mother with a locality and a link, no previous
   spouse, 4 siblings (1 single, 3 married, every one with a link). Ids from 7101 (members); every relation links to
   his parents' household (Hugo & María Vitale, Puerto Madryn). Any MemberId answers the same member.
   Scenarios: `real`; `empty` (no previous spouse, no sibling); `loading` (never answers: skeleton, dom/loading.html);
   `error` (calls fail: skeleton stays, dom/offline.html). */

/** UI_HouseholdMember with the structure defaults (Connect_Household_CS.model.js UI_HouseholdMemberRec). */
const MEMBER_DEFAULTS = {
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
  HasNavigation: true,
  HomePhone: '',
  HouseholdId: '0',
  Id: '0',
  Initials: '',
  IsDeceased: false,
  LastName: '',
  LifeCycleText: '',
  LifeCycleText_IsItallic: false,
  LocalityId: '',
  LocalityName: '',
  MarriageHighlightText: '',
  MarriagePartnerTakenText: '',
  MarriageText: '',
  MemberRole: '',
  MobilePhone: '',
  Title: '',
  WorkPhone: '',
};

const PARENTS_HOUSEHOLD_ID = VITALE_PARENTS.id;
const PARENTS_LOCALITY = { LocalityName: VITALE_PARENTS.localityName, CountryName: VITALE_PARENTS.countryName };

/** Father and mother: name, a life-cycle text (not shown: not deceased) and a formatted locality (captured). */
const parent = (id: string, title: string, lifeCycle: string) => ({
  ...MEMBER_DEFAULTS,
  ...PARENTS_LOCALITY,
  Id: id,
  HouseholdId: PARENTS_HOUSEHOLD_ID,
  Title: title,
  LifeCycleText: lifeCycle,
  FormattedLocality: `${VITALE_PARENTS.localityName}, ${VITALE_PARENTS.countryName}`,
});

/** A sibling: name, and for a married one the caption with the partner's name highlighted (captured HighlightSearch). */
const sibling = (id: string, title: string, partner = '', rest = '') => ({
  ...MEMBER_DEFAULTS,
  ...PARENTS_LOCALITY,
  Id: id,
  HouseholdId: PARENTS_HOUSEHOLD_ID,
  Title: title,
  MarriageText: partner !== '' ? `Married to ${partner} ${rest}` : '',
  MarriageHighlightText: partner,
});

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'HouseholdRelations_Block/DataActionGet_MemberDetails', () => ({
    MemberName: `${VITALE.householder} ${VITALE.surname}`,
    FamilyName: 'The Vitales',
    Father: parent('7101', VITALE_PARENTS.householder, VITALE_PARENTS.members[0]?.born ?? ''),
    Mother: parent('7102', 'María Ana Fernández', VITALE_PARENTS.members[1]?.born ?? ''),
    FormerSpouses: wireList([]),
    ParentHouseholdId: PARENTS_HOUSEHOLD_ID,
  })),
  contractHandler('UBTConnect', 'HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails', () => ({
    Out_siblingRelations: wireList([
      sibling('7103', VITALE_PARENTS.children[0] ?? ''),
      sibling('7104', 'Valentina', 'Carlos Ríos', 'of Neuquén'),
      sibling('7105', 'Raquel', 'Esteban Paz', 'of Mendoza'),
      sibling('7106', 'Sofía Vitale de Ortega', 'Ernesto Ortega', 'and lives in Tres Arroyos'),
    ]),
  })),
];
