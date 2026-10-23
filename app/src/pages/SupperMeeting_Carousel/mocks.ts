import type { RequestHandler } from 'msw';
import { registerMockPreload } from './api';

/* SupperMeeting_Carousel calls no action of its own (SupperMeeting_Carousel.mvc.js controller
   `dataFetchActionNames = []`): GetSubdivision, GetSubdivisionHouseholds, contact details and signed images are answered
   by the shared blocks' mocks. Scenarios `real`, `loading` and `error` come from those mocks.

   Q1 → A (pending answer): opened by URL without a preload, the route uses this fictional preload of supper meeting ids
   (PreloadedSupperMeetings). Captured: 3 slides, the start supper meeting first (slide 1 active, "1 of 3",
   dom/default.html:49); the other two ids are fictional. */
const OTHER_SUPPER_MEETINGS = ['9202', '9203', '9204'];

registerMockPreload((startingSupperMeetingId) => ({
  SupperMeetingIds: [
    startingSupperMeetingId,
    ...OTHER_SUPPER_MEETINGS.filter((id) => id !== startingSupperMeetingId),
  ].slice(0, 3),
}));

export const handlers: RequestHandler[] = [];
