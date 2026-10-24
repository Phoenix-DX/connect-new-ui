import type { RequestHandler } from 'msw';
import { wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { LOCALITY, LOCALITY_HOUSEHOLDS, householdById, householdName } from '@/mocks/fictional/directory';

/* DataActionGetLocalityHouseholdIds: households are person data (migration/knowledge/mock-fixtures.md, P-MOCKS), so the
   mock is fictional with the captured structure and count: the 23 households of locality 252 "Bahia Blanca" in the
   directory cast (src/mocks/fictional/directory.ts), in card order, with the cast's ids (dom/default.html, slides
   "1 of 23" … "23 of 23", counter "1/23"). Their names keep the captured word lengths of the masked titles
   (Title_FamilyName spans, in order) and the locality the one captured length (5 + 6, all 23 the same). The route's
   captured In_HouseholdId 42438 is the first item, the Vitale household: the capture opened at position 0 (counter
   "1/23", slide 1 active). Images come from the shared GetSignedImagesInBulk mock (neutral landscape placeholder for
   Household, Q-W2C-1). */
export const MOCK_HOUSEHOLDS = LOCALITY_HOUSEHOLDS.map((h) => ({
  HouseholdId: h.id,
  HouseholdName: householdName(h),
  Locality: LOCALITY.name,
}));

/** The daughters of the cast households (caption sex marker "f"; sons "m"). */
const DAUGHTERS = new Set([
  'Valeria',
  'Victoria',
  'Isabel',
  'Camila',
  'Clara',
  'Eva',
  'Elena',
  'Inés',
  'Emilia',
  'Martina',
  'Julia',
  'Sofía',
  'Belén',
  'Gisela',
  'Lola',
  'Antonia',
  'Paz',
  'Josefina',
  'Ema',
  'Eugenia',
  'Micaela',
]);

/** Q3 (recommendation A, pending the orchestrator's answer): a fictional caption per household in the format of the
    skeleton caption (UBTConnect.controller.js GetSkeleton_UI_PhotobookCaption), built from the cast household (surname,
    householder, children with their sex marker) and its locality; LastFetchedHousehold echoes the requested household. */
function mockCaption(household: { HouseholdId: string; HouseholdName: string; Locality: string }): string {
  const cast = householdById(household.HouseholdId);
  const words = household.HouseholdName.split(' ');
  const surname = cast?.surname ?? words[words.length - 1] ?? '';
  const first = cast?.householder ?? words[0] ?? '';
  const children = (cast?.children ?? []).map((name) => `${name} ${DAUGHTERS.has(name) ? 'f' : 'm'}`).join(', ');
  const childrenPart = children ? ` ${children} (${household.Locality})` : '';
  return `${surname.toUpperCase()} (${first} - ${household.Locality}) ${household.HouseholdName} (${household.Locality})${childrenPart} Since 04/11, ${first}`;
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'Photobook/DataActionGetLocalityHouseholdIds', () => ({
    Out_LocalityHouseholdIds: wireList(MOCK_HOUSEHOLDS),
  })),
  contractHandler('UBTConnect', 'Photobook_Options_Left/DataActionGetHouseholdCaption', ({ In_CurrentHousehold }) => {
    const household = In_CurrentHousehold ?? { HouseholdId: '0', HouseholdName: '', Locality: '' };
    return { HouseholdCaption: mockCaption(household), LastFetchedHousehold: household };
  }),
];
