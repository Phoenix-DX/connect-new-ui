import { currentUserId } from '../session';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import { DATABASE_NAME, METADATA_TABLE, NULL_DATE_TIME, entityService, tableSchema, type EntityInfo } from './entities';

/* Connect2_LegacyShared client entity LocalSearchHistory (CR-MessageList-3): the local search history of
   UtilityFlow.MessageSearchHistory, with the client aggregate that block runs and the client action
   LocalSearchHistory_Update, ported 1:1.
   E = migration/runtime-sources/Connect2_LegacyShared.entities.js (entity metadata);
   A = migration/runtime-sources/Connect2_LegacyShared.aggregates.IDB.js (the IndexedDB aggregates TST runs: index
   USERID or ID, getAll(only(value)), then the filter in JS, sort, max records);
   B = migration/screens/MessageList/analysis/sources/pretty/Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc.js;
   C = migration/screens/MessageList/analysis/sources/raw/Connect2_LegacyShared.controller.js.
   Storage: IndexedDB as TST and the other client entities (database.ts, recentSearch.ts): one object store per entity
   table in the app database, keyed by the primary-key column, one index per column; memory where there is none. */

/** E:3 moduleKey; E:102-160 infoLocalSearchHistory: idIsAutoNumber YesIfEmpty (:146), hash (:150). */
export const LOCALSEARCHHISTORY: EntityInfo = {
  key: '748f5a30-7632-461d-a01f-f53bb13dbffc',
  moduleKey: '3712370e-f7b5-4c2a-ade3-d8800219efd4',
  name: 'LocalSearchHistory',
  tableName: 'OSUSR_B3N_LOCALSEARCHHISTORY',
  hash: 'e2a5ca48-c198-16de-3891-ac8c141bbc3c',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'SearchedString', columnName: 'SEARCHEDSTRING', type: 'Text' },
    { name: 'CreatedOn', columnName: 'CREATEDON', type: 'DateTime' },
    { name: 'RecentSearchTypeId', columnName: 'RECENTSEARCHTYPEID', type: 'Text' },
  ],
};

/** Connect2_LegacyShared.model LocalSearchHistoryRec. */
export interface LocalSearchHistory {
  Id: string;
  UserId: number;
  SearchedString: string;
  /** Local "yyyy-MM-ddTHH:mm:ss". */
  CreatedOn: string;
  RecentSearchTypeId: string;
}

const SCHEMAS = [tableSchema(LOCALSEARCHHISTORY), METADATA_TABLE];
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
export function localSearchHistoryDatabase(): LocalDatabase {
  database ??= defaultDatabase();
  return database;
}
const entities = entityService(localSearchHistoryDatabase);

export const localSearchHistorySchemas = () => SCHEMAS;

/** Tests: an in-memory database (`memoryDatabase(localSearchHistorySchemas())`), or null for the default again. */
export function setLocalSearchHistoryDatabase(next: LocalDatabase | null): void {
  database = next;
}

/** GetUserId(): the signed-in user, 0 when nobody is. */
const getUserId = () => Number(currentUserId() ?? 0);

/** CurrDateTime() as the clone writes DateTimes: local "yyyy-MM-ddTHH:mm:ss". */
function currDateTime(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${String(d.getFullYear())}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

/** OS.BuiltinFunctions.like (OutSystems.js:8), as A:643 calls it with "%" + SearchString + "%": regex characters
    escaped, % → .*, _ → .; whole value, case-insensitive. */
function likeContains(value: string, term: string): boolean {
  const source = `%${term}%`
    .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    .replace(/%/g, '.*')
    .replace(/_/g, '.');
  return new RegExp(`^${source}$`, 'i').test(value);
}

/** GetFilteredUserSearchHistory (B:494-600 → A:609-712; B inputs ShowOnlyOnCorrectTerm default True, MaxRecords 5):
    the signed-in user's rows (index USERID) of this RecentSearchTypeId whose SearchedString contains SearchString
    when ShowOnlyOnCorrectTerm (an empty SearchString then matches nothing), CreatedOn descending, at most MaxRecords
    (0 = all, A:709). */
export async function getFilteredUserSearchHistory(
  recentSearchTypeId: string,
  searchString: string,
  showOnlyOnCorrectTerm = true,
  maxRecords = 5,
): Promise<LocalSearchHistory[]> {
  const rows = await entities.getAllByIndex<LocalSearchHistory>(LOCALSEARCHHISTORY, 'UserId', getUserId());
  const found = rows
    .filter(
      (r) =>
        (!showOnlyOnCorrectTerm || (likeContains(r.SearchedString, searchString) && searchString !== '')) &&
        r.RecentSearchTypeId === recentSearchTypeId,
    )
    .sort((a, b) => (a.CreatedOn < b.CreatedOn ? 1 : a.CreatedOn > b.CreatedOn ? -1 : 0));
  return maxRecords ? found.slice(0, maxRecords) : found;
}

const EMPTY: LocalSearchHistory = {
  Id: '0',
  UserId: 0,
  SearchedString: '',
  CreatedOn: NULL_DATE_TIME,
  RecentSearchTypeId: '',
};

/** LocalSearchHistory_Update (C:5973-6090): GetLocalSearchHistoryById (A:245-312: index ID, getAll(only(Id))), its
    Current gets CreatedOn = CurrDateTime, then UpdateLocalSearchHistory (entity update: the row must exist, so a
    missing id fails as in the runtime, with the empty Current of an empty list). */
export async function localSearchHistory_Update(localSearchHistoryId: string): Promise<void> {
  const [current] = await entities.getAllByIndex<LocalSearchHistory>(LOCALSEARCHHISTORY, 'Id', localSearchHistoryId);
  await entities.update(LOCALSEARCHHISTORY, { ...(current ?? EMPTY), CreatedOn: currDateTime() });
}
