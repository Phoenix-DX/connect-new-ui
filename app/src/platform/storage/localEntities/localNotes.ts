import { currentUserId } from '@/platform/session/session';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import { DATABASE_NAME, LOCAL_NOTE, METADATA_TABLE, NULL_DATE_TIME, entityService, tableSchema } from './entities';

/* UBTConnect_Notes_MCS: the device's local copy of the user's notes (client entity LocalNote) and its client actions,
   ported 1:1. C = migration/runtime-sources/UBTConnect_Notes_MCS.controller.js, A = …aggregates.IDB.js.

   Who uses it in the original:
   - writes: CW_Notes.NotesSheet add (CreateOrUpdate_LocalNote), CW_Notes.NoteListActions edit (CreateOrUpdate_LocalNote;
     Delete_LocalNoteByNoteId when the server no longer has the note) and delete (Delete_LocalNoteByNoteId);
     UBTConnect Connect_SetLoggedContext → SyncNotes(Sync_Info_GetMain.LocalEntities_App.LocalNotes) at sign-in / app
     start (UBTConnect.controller.js:1146, :16591), which replaces the whole copy;
   - reads: UBTConnect GetNotes_FilterYear → Get_Note_DynamicFilter_YearOptions (UBTConnect.controller.js:10128) and
     GetNotes_Pills → Get_Note_DynamicPills (:10194). Offline: the year options come from the local copy only, so they
     work offline; the pills read the local category ids, then call the server action Get_NotePills_ByNoteCategoryIds
     (C:745-754), so they need the network. LocalNote has no note text: the notes themselves are never read offline. */

/** LocalNoteRec (C:120-150): Long Integers as text, DateTimes as "yyyy-MM-ddTHH:mm:ss". */
export interface LocalNote {
  Id: string;
  UserId: number;
  NoteId: string;
  NoteCategoryId: string;
  ItemId: string;
  DateCreatedUtc: string;
  DateEditedUtc: string;
}

const EMPTY_LOCAL_NOTE: LocalNote = {
  Id: '0',
  UserId: 0,
  NoteId: '0',
  NoteCategoryId: '',
  ItemId: '',
  DateCreatedUtc: NULL_DATE_TIME,
  DateEditedUtc: NULL_DATE_TIME,
};

const SCHEMAS = [tableSchema(LOCAL_NOTE), METADATA_TABLE];
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
export function localNotesDatabase(): LocalDatabase {
  database ??= defaultDatabase();
  return database;
}

/** Tests: an in-memory database (`memoryDatabase(localNotesSchemas())`), or null for the default again. */
export function setLocalNotesDatabase(next: LocalDatabase | null): void {
  database = next;
}

export const localNotesSchemas = () => SCHEMAS;

const entities = entityService(localNotesDatabase);

/** GetUserId(): the signed-in user, 0 when nobody is (User Identifier, an Integer). */
const getUserId = () => Number(currentUserId() ?? 0);

/* ---- Client aggregates (A) ---- */

/** GetLocalNotesByNoteId (A:19-90, A:91-162): the user's rows (index USERID) whose NoteId = NoteId. */
export async function getLocalNotesByNoteId(userId: number, noteId: string): Promise<LocalNote[]> {
  const rows = await entities.getAllByIndex<LocalNote>(LOCAL_NOTE, 'UserId', userId);
  return rows.filter((r) => r.NoteId === noteId);
}

/** GetLocalNotesCategoryIds_ByUserId (A:163-249): distinct non-empty NoteCategoryId, in row order. */
export async function getLocalNotesCategoryIds_ByUserId(userId: number): Promise<string[]> {
  const rows = await entities.getAllByIndex<LocalNote>(LOCAL_NOTE, 'UserId', userId);
  return [...new Set(rows.map((r) => r.NoteCategoryId).filter((id) => id !== ''))];
}

/** GetLocalNotesByUserId (A:250-334): distinct GroupByYear = Year(DateCreatedUtc) when DateEditedUtc is the null date,
    else Year(DateEditedUtc), in row order. */
export async function getLocalNotesByUserId(userId: number): Promise<number[]> {
  const rows = await entities.getAllByIndex<LocalNote>(LOCAL_NOTE, 'UserId', userId);
  const year = (r: LocalNote) =>
    Number((r.DateEditedUtc === NULL_DATE_TIME ? r.DateCreatedUtc : r.DateEditedUtc).slice(0, 4));
  return [...new Set(rows.map(year))];
}

/* ---- Client actions (C) ---- */

/** CreateOrUpdate_LocalNote (C:3-183): nothing when In_NoteCategoryId is empty (C:24-25); else the user's row of the
    note is updated (UserId and NoteId kept) or a new row is created. Out: LocalNoteId ("0" when nothing was written). */
export async function createOrUpdate_LocalNote(
  in_NoteId: string,
  in_NoteCategoryId: string,
  in_ItemId: string,
  in_DateCreatedUtc: string,
  in_DateEditedUtc: string,
): Promise<string> {
  if (in_NoteCategoryId === '') return '0';
  const [existing] = await getLocalNotesByNoteId(getUserId(), in_NoteId);
  const values = {
    NoteCategoryId: in_NoteCategoryId,
    ItemId: in_ItemId,
    DateCreatedUtc: in_DateCreatedUtc,
    DateEditedUtc: in_DateEditedUtc,
  };
  if (existing) {
    // UpdateLocalNote (C:118-136)
    await entities.update(LOCAL_NOTE, { ...existing, ...values });
    return existing.Id;
  }
  // CreateLocalNote (C:141-161): Id NullIdentifier → the next auto-number
  return entities.create(LOCAL_NOTE, { Id: '0', UserId: getUserId(), NoteId: in_NoteId, ...values });
}

/** Get_LocalNoteByNoteId (C:355-466): List.Current of the aggregate (an empty record when there is none). */
export async function get_LocalNoteByNoteId(noteId: string): Promise<LocalNote> {
  const [first] = await getLocalNotesByNoteId(getUserId(), noteId);
  return first ?? EMPTY_LOCAL_NOTE;
}

/** Delete_LocalNoteById (C:251-278): DeleteLocalNote. */
export function delete_LocalNoteById(localNoteId: string): Promise<void> {
  return entities.delete(LOCAL_NOTE, localNoteId);
}

/** Delete_LocalNoteByNoteId (C:299-334): Get_LocalNoteByNoteId, then Delete_LocalNoteById of its Id. */
export async function delete_LocalNoteByNoteId(noteId: string): Promise<void> {
  const localNote = await get_LocalNoteByNoteId(noteId);
  await delete_LocalNoteById(localNote.Id);
}

/** SyncNotes (C:793-837): DeleteAllLocalNote, then CreateOrUpdateSomeLocalNote(In_Notes). */
export async function syncNotes(in_Notes: readonly LocalNote[]): Promise<void> {
  await entities.deleteAll(LOCAL_NOTE);
  await entities.createOrUpdateAll(LOCAL_NOTE, in_Notes);
}

/** Get_Note_DynamicFilter_YearOptions (C:506-622): Years = the year groups as text. */
export async function get_Note_DynamicFilter_YearOptions(): Promise<string[]> {
  return (await getLocalNotesByUserId(getUserId())).map(String);
}
