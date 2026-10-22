import type { RequestHandler } from 'msw';
import { LOCALITY_HOUSEHOLDS } from '@/mocks/fictional/directory';
import { registerMockPreload } from './api';

/* HouseholdCarousel calls no action of its own (HouseholdCarousel.mvc.js :371): GetHousehold, _Coordinates, contact
   details and signed images are answered by the shared blocks' mocks (fictional households, captured counts).
   Scenarios: `real`, `loading` (never answers: skeletons) and `error` (calls fail: skeletons stay).

   Q1 → A (pending answer): opened by URL without a preload, the route uses this fictional preload, the shape
   Locality_Households_HouseholdList hands over (Household_CardEvent_OnClickHousehold: one item per household of the
   locality, the clicked one as In_StartingHouseholdId, no swipe action). Captured: 23 slides, the start household
   first (slides 1-4 rendered with 5, 3, 6, 6 members): the start household (42438 answers the Vitale household, card
   1), then the other 22 households of locality 252 in the directory cast's card order (src/mocks/fictional/
   directory.ts): 91002 (3 members and a non-member row), 91003 and 91004 (6 members), with the captured member shapes
   (CR-HouseholdCarousel-2, src/pages/HouseholdDetails/mockData.ts). */
const OTHER_HOUSEHOLDS = LOCALITY_HOUSEHOLDS.slice(1).map((h) => h.id);

registerMockPreload((startingHouseholdId) => ({
  CarouselHouseholdItem: [startingHouseholdId, ...OTHER_HOUSEHOLDS.filter((id) => id !== startingHouseholdId)]
    .slice(0, 23)
    .map((Household) => ({ Household, SwipeAction: { ActionId: '', Parameters: '' } })),
}));

export const handlers: RequestHandler[] = [];
