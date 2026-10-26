import type { RequestHandler } from 'msw';

/* SupperMeeting_Details calls no action of its own (controller `dataFetchActionNames = []`). DataActionGetSubdivision
   (recorded fixture, any id) and DataActionGetSubdivisionHouseholds (fictional, 11 households) are answered by the
   mocks of the supper meeting details container (containers/SupperMeetingDetails/mocks.ts); contact details, signed
   images and app-start calls by their own shared and platform mocks. Scenarios: `real`, `loading` (never answers:
   skeletons) and `error` (calls fail: skeletons stay). */
export const handlers: RequestHandler[] = [];
