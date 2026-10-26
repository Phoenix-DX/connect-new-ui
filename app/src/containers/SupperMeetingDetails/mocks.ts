import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { subdivisionHousehold } from '@/components/household/HouseholdGalleryCardList/mockData';

/* The supper meeting details (this container, used by SupperMeeting_Details and SupperMeeting_Carousel) call
   DataActionGetSubdivision and DataActionGetSubdivisionHouseholds, answered here. Scenarios: `real`, `loading` (never
   answers: skeletons) and `error` (calls fail: skeletons stay).

   DataActionGetSubdivision: recorded (non-person: a supper meeting card), answered for any In_SubdivsionId.

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
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', { matchInputs: false }),
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
