import { currentUserId } from '@/platform/session/session';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import { DATABASE_NAME, METADATA_TABLE, NULL_DATE_TIME, entityService, tableSchema, type EntityInfo } from './entities';

/* The device's local copy of the user's C2 bookmarks (client entity UBTConnect_Bookmarks_MCS.LocalBookmark) and its
   client actions, ported 1:1. BC = migration/runtime-sources/UBTConnect_Bookmarks_MCS.controller.js, BA =
   …aggregates.IDB.js, BE = …entities.js; UC = migration/runtime-sources/UBTConnect.controller.js.

   The actions follow the live module of 2026-11-05: every read, create and delete keys on the item (or bookmark) AND
   the bookmark category, so one ItemId may have a row per category.

   Who uses them in the original:
   - app start / sign-in: Connect_SetLoggedContext → SynchBookmarksC2(Sync_Info_Main.Bookmarks_C2), then
     Bookmarks_IsSynched = True (UC:1129-1136); Sync_Info_Main takes the rows from
     Sync_Info_GetMain.LocalEntities_App.LocalBookmarksC2. The sync replaces the whole copy;
   - UBTConnect_Utils ToggleBookmarkItem_C2 (UBTConnect_Utils.controller.js:5661-5770; lib/ubtConnectUtils/actions.ts):
     GetLocalBookmarkByObjectId, Create_LocalBookmark, Delete_LocalBookmarkByBookmarkId, each with the category;
   - Directory_EntityDetailsActions OnReady and Locality_Details GetLocal_Bookmark_C2: GetLocalBookmarkByObjectId with
     the category;
   - GetLocalBookmarksByObjectType (by category): Connect2_Assemble_MUI AssembleEventDetail_AttendeeSubdivision
     (Household) and GetLocalBookmarkedLocalityInformation (live Connect2_Assemble_MUI.controller.js:668-912).
   Not ported (no caller in the clone yet): Get_LocalDynamicBookmarkPills / _Years, GetBookmarkCategoryLabel and the
   empty AddBookmarkToCache / RemoveBookmarkFromCache (BC:3-28, :1313-1338).

   The legacy store Connect2_LegacyShared.LocalBookmark is not ported: the live app start does not sync it (there is no
   SynchBookmarks, UC:1129-1133) and nothing on live writes it, so its only live reader, GetLocal_Bookmark (UC:9237-9256,
   the C2NewBookmarks-off branch of Locality_Households_HouseholdList), always reads an empty table (user decision,
   2026-11-05). A browser that ran an older build keeps an orphan IndexedDB object store of that table; nothing reads
   it, and it is harmless. */

/** UBTConnect_Bookmarks_MCS.LocalBookmark (BE:4-58): idIsAutoNumber YesIfEmpty (BE:58). */
export const LOCAL_BOOKMARK: EntityInfo = {
  key: 'd8bbc5bd-997c-4686-a8a5-b4c5ce905b7c',
  moduleKey: 'edb98778-90f1-4e97-9def-fc0d37a768a3',
  name: 'LocalBookmark',
  tableName: 'OSUSR_HCR_LOCALBOOKMARK',
  hash: '08a41ac5-3907-282f-9419-b97651f611e8',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'BookmarkId', columnName: 'BOOKMARKID', type: 'LongInteger' },
    { name: 'BookmarkCategoryId', columnName: 'BOOKMARKCATEGORYID', type: 'Text' },
    { name: 'ItemId', columnName: 'ITEMID', type: 'LongInteger' },
    { name: 'CreatedAtDateUtc', columnName: 'CREATEDATDATEUTC', type: 'DateTime' },
  ],
};

/** UBTConnect_Bookmarks_MCS LocalBookmarkRec: Long Integers as text, DateTimes as "yyyy-MM-ddTHH:mm:ss". */
export interface LocalBookmark {
  Id: string;
  UserId: number;
  BookmarkId: string;
  BookmarkCategoryId: string;
  ItemId: string;
  CreatedAtDateUtc: string;
}

const EMPTY_LOCAL_BOOKMARK: LocalBookmark = {
  Id: '0',
  UserId: 0,
  BookmarkId: '0',
  BookmarkCategoryId: '',
  ItemId: '0',
  CreatedAtDateUtc: NULL_DATE_TIME,
};

const SCHEMAS = [tableSchema(LOCAL_BOOKMARK), METADATA_TABLE];
let database: LocalDatabase | null = null;

function defaultDatabase(): LocalDatabase {
  let factory: IDBFactory | undefined;
  try {
    factory = typeof indexedDB === 'undefined' ? undefined : indexedDB;
  } catch {
    factory = undefined; // blocked site data
  }
  return factory ? indexedDbDatabase(DATABASE_NAME, SCHEMAS, factory) : memoryDatabase(SCHEMAS);
}

/** The local database: IndexedDB in the browser, in memory where there is none (tests). */
export function localBookmarksDatabase(): LocalDatabase {
  database ??= defaultDatabase();
  return database;
}

/** Tests: an in-memory database (`memoryDatabase(localBookmarksSchemas())`), or null for the default again. */
export function setLocalBookmarksDatabase(next: LocalDatabase | null): void {
  database = next;
}

export const localBookmarksSchemas = () => SCHEMAS;

const entities = entityService(localBookmarksDatabase);

/** GetUserId(): the signed-in user, 0 when nobody is (User Identifier, an Integer). */
const getUserId = () => Number(currentUserId() ?? 0);

/** The user's rows (index USERID) that match `keep` (the aggregates GetLocalBookmarksByUserId of the live module). */
async function localBookmarksOfUser(keep: (r: LocalBookmark) => boolean): Promise<LocalBookmark[]> {
  const rows = await entities.getAllByIndex<LocalBookmark>(LOCAL_BOOKMARK, 'UserId', getUserId());
  return rows.filter(keep);
}

/** GetLocalBookmarkByObjectId(ItemId, In_BookmarkCategoryId) (BC:986-1140; aggregate GetLocalBookmarksByObjectId
    BA:381-415: rows of index ITEMID = ItemId whose UserId is the user and BookmarkCategoryId equals the input):
    List.Current (an empty record when none). */
export async function getLocalBookmarkByObjectId(itemId: string, categoryId: string): Promise<LocalBookmark> {
  const userId = getUserId();
  const rows = await entities.getAllByIndex<LocalBookmark>(LOCAL_BOOKMARK, 'ItemId', itemId);
  const [first] = rows.filter((r) => r.UserId === userId && r.BookmarkCategoryId === categoryId);
  return first ?? EMPTY_LOCAL_BOOKMARK;
}

/** GetLocalBookmarkByBookmarkId(BookmarkId, In_BookmarkCategoryId) (BC:818-972; aggregate BA:152-186: the user's rows
    with that BookmarkId and BookmarkCategoryId): List.Current (an empty record when none). */
export async function getLocalBookmarkByBookmarkId(bookmarkId: string, categoryId: string): Promise<LocalBookmark> {
  const [first] = await localBookmarksOfUser((r) => r.BookmarkId === bookmarkId && r.BookmarkCategoryId === categoryId);
  return first ?? EMPTY_LOCAL_BOOKMARK;
}

/** GetLocalBookmarksByObjectType(BookmarkCategoryId) (BC:1154-1300; aggregate BA:309-343): the user's rows whose
    BookmarkCategoryId equals the input (`===`), in store order (no sort). */
export function getLocalBookmarksByObjectType(bookmarkCategoryId: string): Promise<LocalBookmark[]> {
  return localBookmarksOfUser((r) => r.BookmarkCategoryId === bookmarkCategoryId);
}

/** Create_LocalBookmark(In_ItemId, In_BookmarkCategoryId, In_BookmarkId, In_DateCreatedUtc) (BC:29-239): nothing when
    In_BookmarkCategoryId is empty (BC:49); the Id of the user's row of that item and category when there is one
    (aggregate BA:450-487); else a new row (Id NullIdentifier → the next auto-number). Out: LocalBookmarkId ("0" when
    nothing was written). */
export async function create_LocalBookmark(
  in_ItemId: string,
  in_BookmarkCategoryId: string,
  in_BookmarkId: string,
  in_DateCreatedUtc: string = NULL_DATE_TIME,
): Promise<string> {
  if (in_BookmarkCategoryId === '') return '0';
  const [existing] = await localBookmarksOfUser(
    (r) => r.ItemId === in_ItemId && r.BookmarkCategoryId === in_BookmarkCategoryId,
  );
  if (existing) return existing.Id;
  return entities.create(LOCAL_BOOKMARK, {
    Id: '0',
    UserId: getUserId(),
    BookmarkId: in_BookmarkId,
    BookmarkCategoryId: in_BookmarkCategoryId,
    ItemId: in_ItemId,
    CreatedAtDateUtc: in_DateCreatedUtc,
  });
}

/** Delete_LocalBookmarkById(LocalBookmarkId) (BC:321-358): DeleteLocalBookmark. */
export function delete_LocalBookmarkById(localBookmarkId: string): Promise<void> {
  return entities.delete(LOCAL_BOOKMARK, localBookmarkId);
}

/** Delete_LocalBookmarkByBookmarkId(BookmarkId, In_BookmarkCategoryId) (BC:255-309): GetLocalBookmarkByBookmarkId
    with the category, then Delete_LocalBookmarkById of its Id (BC:275; "0", i.e. nothing, when there is none). */
export async function delete_LocalBookmarkByBookmarkId(bookmarkId: string, categoryId: string): Promise<void> {
  const localBookmark = await getLocalBookmarkByBookmarkId(bookmarkId, categoryId);
  await delete_LocalBookmarkById(localBookmark.Id);
}

/** SynchBookmarksC2(In_UpdateBookmarks) (BC:1339-1384): DeleteAllLocalBookmark, then CreateOrUpdateSomeLocalBookmark.
    The original runs them as two IndexedDB transactions; the clone runs one (entityService.replaceAll), so the
    bookmarks read while the app start syncs are the old copy or the new one, never none (the first screen's OnReady
    reads can come while the app start syncs; CR-HouseholdDetails-2 §2). */
export async function synchBookmarksC2(in_UpdateBookmarks: readonly LocalBookmark[]): Promise<void> {
  await entities.replaceAll(LOCAL_BOOKMARK, in_UpdateBookmarks);
}
