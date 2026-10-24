import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { addLegacyBookmark, legacyBookmarksCollection } from '@/mocks/modules/Connect2_MyBookmarks_MUI/mocks';

/* The legacy bookmark writes of Connect2_Assemble_MUI ToggleBookmarkItem (CR-AssembleDetail-2; Connect2_Assemble_MUI
   .controller.js:1493-1686, ServerAction.AddBookmark :1687-1723, DeleteBookmarkByBookmarkId :1725-1749): never recorded
   (x-mock-source fictional), writes (P-MUTATION) on the mock user's legacy bookmarks, the collection MyBookmarks,
   BookmarksByGroup and the app start's device copy read (mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts), never the real
   server. The device copy itself (Connect2_LegacyShared.LocalBookmark) is written by the app (ToggleBookmarkItem →
   Create_LocalBookmark / Delete_LocalBookmarkByBookmarkId, shell/localEntities/localBookmarks.ts). */
export const handlers: RequestHandler[] = [
  /** AddBookmark (fictional): adds the row and answers Success with it (CreatedBookmarkResponse). */
  contractHandler('Connect2_Assemble_MUI', 'ActionAddBookmark', ({ ObjectType, ObjectId, Group, Note }) => ({
    Success: true,
    CreatedBookmarkResponse: addLegacyBookmark(Group, ObjectType, ObjectId, Note),
  })),
  /** DeleteBookmarkByBookmarkId (fictional): removes the row; Success tells whether it existed (as the
      Connect2_MyBookmarks_MUI delete mock). */
  contractHandler('Connect2_Assemble_MUI', 'ActionDeleteBookmarkByBookmarkId', ({ BookmarkId }) => {
    const bookmarks = legacyBookmarksCollection();
    const found = bookmarks.get(BookmarkId) !== undefined;
    bookmarks.remove(BookmarkId);
    return { Success: found };
  }),
];
