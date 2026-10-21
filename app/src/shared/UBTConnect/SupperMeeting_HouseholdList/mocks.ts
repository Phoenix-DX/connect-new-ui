import type { RequestHandler } from 'msw';
import { wireList } from '../../../lib/os-wire';
import { contractHandler } from '../../../mocks/contract';
import { householdsOfSupperMeeting } from '../../../mocks/fictional/directory';
import { subdivisionHousehold } from '../Household_GalleryCard_List/mockData';

/* Never recorded (x-mock-source fictional; households are person data): the households of the supper meeting in the
   directory cast (src/mocks/fictional/directory.ts), whose names, children and empty subtitles (households without
   children) keep the captured shapes, by In_SubdivisionId:
   - 9202 / 9203, the 2nd and 3rd supper meetings of the SupperMeeting_Carousel mock preload
     (screens/SupperMeeting_Carousel/mocks.ts): seven (household 3 without children) and five (households 1 and 4),
     the captured slides 2 and 3 (SupperMeeting_Carousel dom/default.html `1164_1-…-l1-1260_0..6`,
     `1164_2-…-l1-1259_0..4`; CR-SupperMeeting_Carousel-1). Slides 2 and 3 also keep the captured word lengths of each
     card's name and children: their long subtitles wrap to two lines on TST (slide 2 card 2, slide 3 card 2), which
     makes the first gallery row taller there (grid-template-rows 193px then 178px, parity/default.json);
   - any other id: the eleven of 1210 "Zapiola (Main Meeting Room)", households 3, 6, 7 and 11 without children
     (SupperMeeting_Details/default, dom/default.html `l1-89_2`, `_5`, `_6`, `_10`; CR-SupperMeeting_Details-1 §2), as
     the first slide of SupperMeeting_Carousel. */
export const handlers: RequestHandler[] = [
  contractHandler(
    'UBTConnect',
    'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds',
    ({ In_SubdivisionId }) => {
      const id = String(In_SubdivisionId);
      const households = householdsOfSupperMeeting(id === '9202' || id === '9203' ? id : '1210');
      return { Household_GalleryCard_List: wireList(households.map(subdivisionHousehold)) };
    },
  ),
];
