import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import type { BookmarkDeleted, C2BookmarkAdded } from './types';

/* The outputs of each call, as the contract describes them. */
/** The service action AddBookmark2 of UBTConnect_Utils. */
export type C2BookmarkAddedWire = ActionOutputs<PathOf<'UBTConnect_Utils', 'ServiceAPIAddBookmark2'>>;

/** Success of a bookmark delete. */
export const toBookmarkDeleted = (wire: { Success: boolean }): BookmarkDeleted => ({ Success: wire.Success });

/** Success and the id and the creation time of the added C2 bookmark. */
export const toC2BookmarkAdded = (wire: C2BookmarkAddedWire): C2BookmarkAdded => ({
  Success: wire.Success,
  Bookmark_Added: { Id: wire.Bookmark_Added.Id, DateCreatedUtc: wire.Bookmark_Added.DateCreatedUtc },
});
