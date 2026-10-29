import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { fixtureData } from '@/mocks/fixtures';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { subdivisionHousehold } from '@/components/household/HouseholdGalleryCardList/mockData';

/* The supper meeting details (this container, used by SupperMeeting_Details and SupperMeeting_Carousel) call
   DataActionGetSubdivision and DataActionGetSubdivisionHouseholds, answered here. Scenarios: `real`, `loading` (never
   answers: skeletons) and `error` (calls fail: skeletons stay).

   DataActionGetSubdivision: recorded (non-person: a supper meeting card), answered for any In_SubdivsionId, except the
   2nd and 3rd supper meetings of the SupperMeeting_Carousel mock preload, which get their own fictional cards with the
   counts of the TST capture of 2026-10-29 (drift wave, household R7; dom/default.html slides 2 and 3): 9202
   "Patagonia", 29 brethren (15 brothers, 14 sisters), 7 households; 9203 "Ingeniero White", 19 brethren (10 brothers,
   9 sisters), 5 households. Names and addresses keep the captured word lengths.

   DataActionGetSubdivisionHouseholds: never recorded (x-mock-source fictional; households are person data): the
   households of the supper meeting in the directory cast (src/mocks/fictional/directory.ts), whose names, children and
   empty subtitles (households without children) keep the captured shapes, by In_SubdivisionId:
   - 9202 / 9203, the 2nd and 3rd supper meetings of the SupperMeeting_Carousel mock preload
     (pages/SupperMeeting_Carousel/mocks.ts): seven (household 3 without children) and five (households 1 and 4),
     the captured slides 2 and 3 (SupperMeeting_Carousel dom/default.html `1164_1-…-l1-1260_0..6`,
     `1164_2-…-l1-1259_0..4`; CR-SupperMeeting_Carousel-1). Slides 2 and 3 also keep the captured word lengths of each
     card's name and children: their long subtitles wrap to two lines on TST (slide 2 card 2, slide 3 card 2), which
     makes the first gallery row taller there (grid-template-rows 193px then 178px, parity/default.json);
   - any other id: the eleven of 1210 "Zapiola (Main Meeting Room)", households 3, 6, 7 and 11 without children
     (SupperMeeting_Details/default, dom/default.html `l1-89_2`, `_5`, `_6`, `_10`; CR-SupperMeeting_Details-1 §2), as
     the first slide of SupperMeeting_Carousel. */
type SubdivisionOutput = ActionOutputs<PathOf<'UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision'>>;

/** The fictional supper meeting cards by SubdivisionId: name, brothers, sisters, households, address. */
const SUBDIVISION_CARDS: Record<string, [string, number, number, number, string]> = {
  '9202': ['Patagonia', 15, 14, 7, 'Pje. 1840 Vieytes Gorriti 22 Bahia Blanca Provincia de Buenos Aires B8000ABC'],
  '9203': ['Ingeniero White', 10, 9, 5, 'Brandsen 64 Ingeniero Wte Bahia Blanca Buenos Aires B8103'],
};

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', ({ In_SubdivsionId }) => {
    const recorded = fixtureData(
      'UBTConnect',
      'SupperMeeting_DetailsBlock/DataActionGetSubdivision',
    ) as SubdivisionOutput;
    const id = String(In_SubdivsionId);
    const card = SUBDIVISION_CARDS[id];
    if (!card) return recorded;
    const [Name, BrothersCount, SistersCount, HouseholdCount, Address] = card;
    return {
      Subdivision: {
        ...recorded.Subdivision,
        Subdivision_Card: {
          SubdivisionId: id,
          Subdivision_Card_Content: {
            Name,
            BretherenCount: BrothersCount + SistersCount,
            HouseholdCount,
            BrothersCount,
            SistersCount,
            Address,
          },
        },
      },
    };
  }),
  contractHandler(
    'UBTConnect',
    'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds',
    ({ In_SubdivisionId }) => {
      const id = String(In_SubdivisionId);
      const households = householdsOfSupperMeeting(id === '9202' || id === '9203' ? id : '1210');
      // An OutSystems list on the wire: { List: [...] }.
      return { Household_GalleryCard_List: { List: households.map(subdivisionHousehold) } };
    },
  ),
];
