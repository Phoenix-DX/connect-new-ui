import type { RequestHandler } from 'msw';

/* SupperMeeting_Details calls no action of its own (SupperMeeting_Details.mvc.js:259-261). DataActionGetSubdivision
   (recorded fixture, any id) and DataActionGetSubdivisionHouseholds (fictional, 11 households) are answered by the
   shared SupperMeeting_DetailsBlock / SupperMeeting_HouseholdList mocks; contact details, signed images and app-start
   calls by their own shared/shell mocks. Scenarios: `real`, `loading` (never answers: skeletons) and `error` (calls
   fail: skeletons stay). */
export const handlers: RequestHandler[] = [];
