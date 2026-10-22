import { currentUserId } from '@/platform/session/session';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import { DATABASE_NAME, METADATA_TABLE, NULL_DATE_TIME, entityService, tableSchema, type EntityInfo } from './entities';

/* The device's local copies of the user's bookmarks (client entities) and their client actions, ported 1:1. Two
   entities, as in TST:
   - UBTConnect_Bookmarks_MCS.LocalBookmark ("C2" bookmarks). BC = migration/runtime-sources/UBTConnect_Bookmarks_MCS
     .controller.js, BA = …aggregates.IDB.js, BE = …entities.js;
   - Connect2_LegacyShared.LocalBookmark (legacy bookmarks). LC = migration/runtime-sources/Connect2_LegacyShared
     .controller.js, LA = …aggregates.IDB.js, LE = …entities.js.
   UC = UBTConnect.controller.js (copy in migration/screens/BookmarksByGroup/analysis/sources/raw/).

   Who uses them in the original:
   - app start / sign-in: Connect_SetLoggedContext → SynchBookmarks(Sync_Info_Main.Bookmarks) then
     SynchBookmarksC2(Sync_Info_Main.Bookmarks_C2), then Bookmarks_IsSynched = True (UC:1135-1143); Sync_Info_Main takes
     them from Sync_Info_GetMain.LocalEntities_App.LocalBookmark / .LocalBookmarksC2 (UC:16576-16589). Each sync replaces
     the whole copy;
   - UBTConnect ToggleBookmarkItem_C2 (UC:17107-17225): GetLocalBookmarkByObjectId, Create_LocalBookmark,
     Delete_LocalBookmarkByBookmarkId;
   - Directory_EntityDetailsActions OnReady: GetLocalBookmarkByObjectId (C2NewBookmarks on) or the legacy
     Get_LocalBookmarkByObjectId (off, the TST value).
   - Connect2_Assemble_MUI ToggleBookmarkItem (AssembleDetail hall households, CR-AssembleDetail-2): the legacy
     Get_LocalBookmarkByObjectId, Create_LocalBookmark (legacyCreate_LocalBookmark) and Delete_LocalBookmarkByBookmarkId.
   Not ported (no caller in the clone yet): Get_LocalDynamicBookmarkPills / _Years, GetBookmarkCategoryLabel and the
   empty AddBookmarkToCache / RemoveBookmarkFromCache (BC:1-26, :1093-1118). */

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

/** Connect2_LegacyShared.LocalBookmark (LE:236-306): idIsAutoNumber YesIfEmpty (LE:302). */
export const LEGACY_LOCAL_BOOKMARK: EntityInfo = {
  key: 'e31d7357-1200-4637-8763-eb33045702bf',
  moduleKey: '3712370e-f7b5-4c2a-ade3-d8800219efd4',
  name: 'LocalBookmark',
  tableName: 'OSUSR_B3N_LOCALBOOKMARK',
  hash: '13ed8c05-caee-7c9e-4fa8-3f4b47c2fdff',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'BookmarkId', columnName: 'BOOKMARKID', type: 'LongInteger' },
    { name: 'ObjectType', columnName: 'OBJECTTYPE', type: 'Text' },
    { name: 'ObjectId', columnName: 'OBJECTID', type: 'LongInteger' },
    { name: 'Group', columnName: 'GROUP', type: 'Text' },
    { name: 'DateCreatedUtc', columnName: 'DATECREATEDUTC', type: 'DateTime' },
    { name: 'Note', columnName: 'NOTE', type: 'Text' },
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

/** Connect2_LegacyShared LocalBookmarkRec. */
export interface LegacyLocalBookmark {
  Id: string;
  UserId: number;
  BookmarkId: string;
  ObjectType: string;
  ObjectId: string;
  Group: string;
  DateCreatedUtc: string;
  Note: string;
}

const EMPTY_LOCAL_BOOKMARK: LocalBookmark = {
  Id: '0',
  UserId: 0,
  BookmarkId: '0',
  BookmarkCategoryId: '',
  ItemId: '0',
  CreatedAtDateUtc: NULL_DATE_TIME,
};

const EMPTY_LEGACY_LOCAL_BOOKMARK: LegacyLocalBookmark = {
  Id: '0',
  UserId: 0,
  BookmarkId: '0',
  ObjectType: '',
  ObjectId: '0',
  Group: '',
  DateCreatedUtc: NULL_DATE_TIME,
  Note: '',
};

const SCHEMAS = [tableSchema(LOCAL_BOOKMARK), tableSchema(LEGACY_LOCAL_BOOKMARK), METADATA_TABLE];
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

/* ---- UBTConnect_Bookmarks_MCS ---- */

/** GetLocalBookmarksByObjectId (BA:260-331): rows of index ITEMID = ItemId whose UserId = the user. */
async function localBookmarksByObjectId(userId: number, itemId: string): Promise<LocalBookmark[]> {
  const rows = await entities.getAllByIndex<LocalBookmark>(LOCAL_BOOKMARK, 'ItemId', itemId);
  return rows.filter((r) => r.UserId === userId);
}

/** GetLocalBookmarksByUserId of GetLocalBookmarkByBookmarkId (BA:103-174) and of Create_LocalBookmark (BA:332-403):
    the user's rows (index USERID) whose `column` equals the value. */
async function localBookmarksOfUser(
  userId: number,
  column: 'BookmarkId' | 'ItemId',
  value: string,
): Promise<LocalBookmark[]> {
  const rows = await entities.getAllByIndex<LocalBookmark>(LOCAL_BOOKMARK, 'UserId', userId);
  return rows.filter((r) => r[column] === value);
}

/** GetLocalBookmarkByObjectId(ItemId) (BC:943-1091): List.Current of the aggregate (an empty record when none). */
export async function getLocalBookmarkByObjectId(itemId: string): Promise<LocalBookmark> {
  const [first] = await localBookmarksByObjectId(getUserId(), itemId);
  return first ?? EMPTY_LOCAL_BOOKMARK;
}

/** GetLocalBookmarkByBookmarkId(BookmarkId) (BC:792-941): List.Current of the aggregate (an empty record when none). */
export async function getLocalBookmarkByBookmarkId(bookmarkId: string): Promise<LocalBookmark> {
  const [first] = await localBookmarksOfUser(getUserId(), 'BookmarkId', bookmarkId);
  return first ?? EMPTY_LOCAL_BOOKMARK;
}

/** Create_LocalBookmark(In_ItemId, In_BookmarkCategoryId, In_BookmarkId, In_DateCreatedUtc) (BC:27-245): nothing when
    In_BookmarkCategoryId is empty (BC:49); the Id of the user's row of the item when there is one; else a new row
    (Id NullIdentifier → the next auto-number). Out: LocalBookmarkId ("0" when nothing was written). */
export async function create_LocalBookmark(
  in_ItemId: string,
  in_BookmarkCategoryId: string,
  in_BookmarkId: string,
  in_DateCreatedUtc: string = NULL_DATE_TIME,
): Promise<string> {
  if (in_BookmarkCategoryId === '') return '0';
  const [existing] = await localBookmarksOfUser(getUserId(), 'ItemId', in_ItemId);
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

/** Delete_LocalBookmarkById(LocalBookmarkId) (BC:302-349): DeleteLocalBookmark. */
export function delete_LocalBookmarkById(localBookmarkId: string): Promise<void> {
  return entities.delete(LOCAL_BOOKMARK, localBookmarkId);
}

/** Delete_LocalBookmarkByBookmarkId(BookmarkId) (BC:246-301): GetLocalBookmarkByBookmarkId, then
    Delete_LocalBookmarkById of its Id ("0", i.e. nothing, when there is none). */
export async function delete_LocalBookmarkByBookmarkId(bookmarkId: string): Promise<void> {
  const localBookmark = await getLocalBookmarkByBookmarkId(bookmarkId);
  await delete_LocalBookmarkById(localBookmark.Id);
}

/** SynchBookmarksC2(In_UpdateBookmarks) (BC:1119-1173): DeleteAllLocalBookmark, then CreateOrUpdateSomeLocalBookmark,
    in one transaction (see synchBookmarks). */
export async function synchBookmarksC2(in_UpdateBookmarks: readonly LocalBookmark[]): Promise<void> {
  await entities.replaceAll(LOCAL_BOOKMARK, in_UpdateBookmarks);
}

/* ---- Connect2_LegacyShared ---- */

/** Compare of the client aggregates (LA:13-18): texts case-insensitively. */
const compareText = (a: string, b: string) => {
  const x = a.toLocaleLowerCase();
  const y = b.toLocaleLowerCase();
  return x > y ? 1 : x < y ? -1 : 0;
};

/** Get_LocalBookmarkByObjectId(ObjectType, ObjectId) (LC:2342-2480; aggregate LA:19-131): the user's rows (index USERID)
    with that ObjectId and ObjectType, sorted by Note ascending (LA:106-110); List.Current (an empty record when none). */
export async function get_LocalBookmarkByObjectId(objectType: string, objectId: string): Promise<LegacyLocalBookmark> {
  const rows = await entities.getAllByIndex<LegacyLocalBookmark>(LEGACY_LOCAL_BOOKMARK, 'UserId', getUserId());
  const [first] = rows
    .filter((r) => r.ObjectId === objectId && r.ObjectType === objectType)
    .sort((a, b) => compareText(a.Note, b.Note));
  return first ?? EMPTY_LEGACY_LOCAL_BOOKMARK;
}

/** GetLocalBookmarksByObjectType(ObjectType) (LC:4964-5100; aggregate LA:314-420): the user's rows (index USERID)
    whose ObjectType equals the input (`===`, LA:356), sorted by Note ascending (LA:401-404); MyBookmarksList. Used by
    Connect2_Assemble_MUI GetLocalBookmarkedLocalityInformation. */
export async function getLocalBookmarksByObjectType(objectType: string): Promise<LegacyLocalBookmark[]> {
  const rows = await entities.getAllByIndex<LegacyLocalBookmark>(LEGACY_LOCAL_BOOKMARK, 'UserId', getUserId());
  return rows.filter((r) => r.ObjectType === objectType).sort((a, b) => compareText(a.Note, b.Note));
}

/** Get_LocalBookmarkByBookmarkId(BookmarkId) (LC:2190 ff.; aggregate GetLocalBookmarksByUserId LA:132 ff., sort LA:219-222): the user's
    rows (index USERID) whose BookmarkId equals the input, sorted by Note ascending; List.Current (an empty record when
    none). */
export async function get_LocalBookmarkByBookmarkId(bookmarkId: string): Promise<LegacyLocalBookmark> {
  const rows = await entities.getAllByIndex<LegacyLocalBookmark>(LEGACY_LOCAL_BOOKMARK, 'UserId', getUserId());
  const [first] = rows.filter((r) => r.BookmarkId === bookmarkId).sort((a, b) => compareText(a.Note, b.Note));
  return first ?? EMPTY_LEGACY_LOCAL_BOOKMARK;
}

/** CurrDateTime() as the clone writes DateTimes: local "yyyy-MM-ddTHH:mm:ss" (as localSearchHistory.ts). */
function currDateTime(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${String(d.getFullYear())}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

/** Connect2_LegacyShared Create_LocalBookmark(ObjectType, ObjectId, Group, BookmarkId, Note) (LC:1555-1720): aggregate
    CheckForRepeatRecord (IndexedDB LA:427-540: the user's rows (index USERID) with ObjectType `===`, ObjectId equal and
    Group `===` the inputs, sorted by Note ascending); none → CreateLocalBookmark (Id NullIdentifier → the next
    auto-number, UserId = GetUserId(), DateCreatedUtc = CurrDateTime(), LC:1683-1697) and LocalBookmarkId = its Id; else
    LocalBookmarkId = List.Current.Id (nothing written). Named with the `legacy` prefix: the C2 module has an action of
    the same name (create_LocalBookmark above). Called by Connect2_Assemble_MUI ToggleBookmarkItem (CR-AssembleDetail-2). */
export async function legacyCreate_LocalBookmark(
  objectType: string,
  objectId: string,
  group: string,
  bookmarkId: string,
  note: string,
): Promise<string> {
  const userId = getUserId();
  const rows = await entities.getAllByIndex<LegacyLocalBookmark>(LEGACY_LOCAL_BOOKMARK, 'UserId', userId);
  const [repeat] = rows
    .filter((r) => r.ObjectType === objectType && r.ObjectId === objectId && r.Group === group)
    .sort((a, b) => compareText(a.Note, b.Note));
  if (repeat) return repeat.Id;
  return entities.create(LEGACY_LOCAL_BOOKMARK, {
    Id: '0',
    UserId: userId,
    BookmarkId: bookmarkId,
    ObjectType: objectType,
    ObjectId: objectId,
    Group: group,
    DateCreatedUtc: currDateTime(),
    Note: note,
  });
}

/** Connect2_LegacyShared Delete_LocalBookmarkById(LocalBookmarkId) (LC:1977 ff.): DeleteLocalBookmark. Named with the
    `legacy` prefix: the C2 module has an action of the same name (delete_LocalBookmarkById above). */
export function legacyDelete_LocalBookmarkById(localBookmarkId: string): Promise<void> {
  return entities.delete(LEGACY_LOCAL_BOOKMARK, localBookmarkId);
}

/** Connect2_LegacyShared Delete_LocalBookmarkByBookmarkId(BookmarkId) (LC:1921-1976): Get_LocalBookmarkByBookmarkId,
    then Delete_LocalBookmarkById of its Id ("0", i.e. nothing, when there is none). Called by BookmarksByGroup
    OnHandle_BookmarkToggle after the server delete (ScreenBlock_BookmarkGroup.mvc.js:3169-3172). */
export async function legacyDelete_LocalBookmarkByBookmarkId(bookmarkId: string): Promise<void> {
  const localBookmark = await get_LocalBookmarkByBookmarkId(bookmarkId);
  await legacyDelete_LocalBookmarkById(localBookmark.Id);
}

/** SynchBookmarks(UpdatedBookmarks) (LC:7421-7476): DeleteAllLocalBookmark, then CreateOrUpdateSomeLocalBookmark. The
    original runs them as two IndexedDB transactions; the clone runs one (entityService.replaceAll), so the bookmarks
    read while the app start syncs are the old copy or the new one, never none. In TST the screens' OnReady reads come
    before the app start's sync (HouseholdDetails analysis/calls.json: GetHousehold 4270 ms, Sync_Info_GetMain 6172 ms);
    the clone's first screen loads after the app start's GetUserInformation step (userInfo.ts hold), i.e. while it
    syncs, and showed bookmarked households as not bookmarked (CR-HouseholdDetails-2 §2). */
export async function synchBookmarks(updatedBookmarks: readonly LegacyLocalBookmark[]): Promise<void> {
  await entities.replaceAll(LEGACY_LOCAL_BOOKMARK, updatedBookmarks);
}
