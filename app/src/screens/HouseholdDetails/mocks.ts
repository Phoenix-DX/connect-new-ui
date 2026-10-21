import type { RequestHandler } from 'msw';

/* HouseholdDetails calls no action of its own (HouseholdDetails.mvc.js:290-292). DataActionGetHousehold and
   DataActionGetHousehold_Coordinates are answered by the shared HouseholdDetails_Block mocks (fictional household,
   captured counts), the contact details, signed images and bottom-bar calls by their own shared/shell mocks.
   Scenarios: `real`, `loading` (never answers: skeleton) and `error` (calls fail: skeleton stays). */
export const handlers: RequestHandler[] = [];
