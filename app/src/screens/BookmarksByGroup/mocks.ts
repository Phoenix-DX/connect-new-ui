import { http, HttpResponse, type RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { mockDelay, scenario } from '@/mocks/scenario';
import { legacyBookmarksOfGroup } from '@/shared/Connect2_MyBookmarks_MUI/mocks';
import type { BookmarkItemWire } from './types';

/* DataActionGetAllBookmarksByGroup was not recorded (bookmarks are person data, knowledge/mock-fixtures.md): it answers
   the group's rows of the shared collection of the mock user's legacy bookmarks (src/shared/Connect2_MyBookmarks_MUI/
   mocks.ts, CR-BookmarksByGroup-2 / CR-MyBookmarks-2), most recent first. Contacts = the 7 captured households
   (analysis/dom/default.html:66-462) in the captured order, with the captured photo pattern, children and tag lengths;
   Locations = the 4 of the MyBookmarks capture (this list was not captured); Entities = none (MyBookmarks capture).
   The module's server actions (GetBookmarkById, New_GetBookmarkById, DeleteBookmarkByBookmarkId,
   New_UpdateBookmarkNote) are mocked once, in the shared module, on the same collection (P-MUTATION), never the real
   server. Scenarios: real, empty (no bookmark: NoBookmarks), error (offline state: the request fails), loading (no
   answer: the timeout of the loading state). */

export const handlers: RequestHandler[] = [
  /* error scenario = the captured offline state: the request fails (fetch rejects, CommunicationException "Request
     failed with an error", src/lib/api.ts:15), not a server answer; other scenarios fall through to the next handler. */
  http.post('/api/Connect2_MyBookmarks_MUI/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup', async () => {
    if (scenario() !== 'error') return undefined;
    await mockDelay();
    return HttpResponse.error();
  }),
  contractHandler(
    'Connect2_MyBookmarks_MUI',
    'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup',
    ({ BookmarkGroup }) => {
      const results: BookmarkItemWire[] = legacyBookmarksOfGroup(BookmarkGroup ?? '');
      return {
        GetBookmarksGroupResponse: { Results: { List: results }, Total: String(results.length) },
        WasSearched: false,
      };
    },
  ),
];
