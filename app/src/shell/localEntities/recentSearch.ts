import { currentUserId } from '../session';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import { DATABASE_NAME, METADATA_TABLE, NULL_DATE_TIME, entityService, tableSchema, type EntityInfo } from './entities';

/* UBTConnect client entities ConnectSearch_RecentSearchTerm and ConnectSearch_RecentClickedResults (CR-Search-1): the
   recent search terms and recently clicked results of Directory_Search.ScreenBlock_Search, with the local aggregates
   and entity actions that block runs, ported 1:1.
   S = migration/screens/Search/analysis/sources/pretty/UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js (flows);
   E = migration/runtime-sources/UBTConnect.entities.js (entity metadata); A = …/UBTConnect.aggregates.IDB.js (the
   IndexedDB aggregates TST runs: index USERID, getAll(only(UserId)), then the filter in JS, sort, max records).
   Records: UBTConnect.model.js ConnectSearch_RecentSearchTermRec / ConnectSearch_RecentClickedResultsRec.
   Storage: IndexedDB as TST and the notes cache (database.ts, localNotes.ts): one object store per entity table in the
   app database, keyed by the primary-key column, one index per column; memory where there is no IndexedDB (tests). */

/** UBTConnect module key (E:3). */
const UBTCONNECT_MODULE_KEY = '0811ae64-4efe-4b74-a7b5-8236551a7004';

/** E:90-139: idIsAutoNumber YesIfEmpty (:133). */
export const CONNECTSEARCH_RECENTSEARCHTERM: EntityInfo = {
  key: 'b992bfa1-e231-4566-8b7a-a282933b94bd',
  moduleKey: UBTCONNECT_MODULE_KEY,
  name: 'ConnectSearch_RecentSearchTerm',
  tableName: 'OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM',
  hash: 'd7eb77bc-435b-b8bb-74c9-50d032289bac',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'SearchedTerm', columnName: 'SEARCHEDTERM', type: 'Text' },
    { name: 'SearchedOn', columnName: 'SEARCHEDON', type: 'DateTime' },
    { name: 'SearchTargetId', columnName: 'SEARCHTARGETID', type: 'Text' },
  ],
};

/** E:319-427: idIsAutoNumber YesIfEmpty; Latitude / Longitude Decimal(15, 5). */
export const CONNECTSEARCH_RECENTCLICKEDRESULTS: EntityInfo = {
  key: 'ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb',
  moduleKey: UBTCONNECT_MODULE_KEY,
  name: 'ConnectSearch_RecentClickedResults',
  tableName: 'OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS',
  hash: '62b7c947-31e2-ac57-8d17-692ac1fb9fcb',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'EntityId', columnName: 'ENTITYID', type: 'Text' },
    { name: 'EntityType', columnName: 'ENTITYTYPE', type: 'Text' },
    { name: 'HouseholderId', columnName: 'HOUSEHOLDERID', type: 'Text' },
    { name: 'Name', columnName: 'NAME', type: 'Text' },
    { name: 'AdditionalInformation', columnName: 'ADDITIONALINFORMATION', type: 'Text' },
    { name: 'Location', columnName: 'LOCATION', type: 'Text' },
    { name: 'SearchedOn', columnName: 'SEARCHEDON', type: 'DateTime' },
    { name: 'Latitude', columnName: 'LATITUDE', type: 'Decimal', decimals: 5 },
    { name: 'Longitude', columnName: 'LONGITUDE', type: 'Decimal', decimals: 5 },
    { name: 'SearchTargetId', columnName: 'SEARCHTARGETID', type: 'Text' },
  ],
};

export interface ConnectSearch_RecentSearchTerm {
  Id: string;
  UserId: number;
  SearchedTerm: string;
  /** Local "yyyy-MM-ddTHH:mm:ss". */
  SearchedOn: string;
  SearchTargetId: string;
}

export interface ConnectSearch_RecentClickedResults {
  Id: string;
  UserId: number;
  EntityId: string;
  EntityType: string;
  HouseholderId: string;
  Name: string;
  AdditionalInformation: string;
  Location: string;
  SearchedOn: string;
  Latitude: string;
  Longitude: string;
  SearchTargetId: string;
}

/** The SearchResult fields a click stores (S:2813-2844). */
export interface ClickedSearchResult {
  id: string;
  type: string;
  householderId: string;
  name: string;
  additionalInformation: string;
  location: string;
  latitude: string;
  longitude: string;
}

const SCHEMAS = [
  tableSchema(CONNECTSEARCH_RECENTSEARCHTERM),
  tableSchema(CONNECTSEARCH_RECENTCLICKEDRESULTS),
  METADATA_TABLE,
];
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
export function recentSearchDatabase(): LocalDatabase {
  database ??= defaultDatabase();
  return database;
}
const entities = entityService(recentSearchDatabase);

export const recentSearchSchemas = () => SCHEMAS;

/** Tests: an in-memory database (`memoryDatabase(recentSearchSchemas())`), or null for the default again. */
export function setRecentSearchDatabase(next: LocalDatabase | null): void {
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

/** OS.BuiltinFunctions.like (OutSystems.js:8 `function j`), as A:762 and A:649 call it with "%" + term + "%": an
    empty pattern is false; regex characters escaped, % → .*, _ → .; whole value, case-insensitive. */
function likeContains(value: string, term: string): boolean {
  const pattern = `%${term}%`;
  const source = pattern
    .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    .replace(/%/g, '.*')
    .replace(/_/g, '.');
  return new RegExp(`^${source}$`, 'i').test(value);
}

/** Target filter `SearchTargetId === :SearchTargetId` (A:53, 125, 649, 762). Its second disjunct
    `SearchTargetId === Type_SearchTarget.Global && SearchTargetId === NullTextIdentifier()` can never hold, so the
    target filter is just this. */
const sameText = (value: string, param: string) => value === param;

const bySearchedOnDesc = <R extends { SearchedOn: string }>(a: R, b: R) =>
  a.SearchedOn < b.SearchedOn ? 1 : a.SearchedOn > b.SearchedOn ? -1 : 0;

const termsOf = (userId: number) =>
  entities.getAllByIndex<ConnectSearch_RecentSearchTerm>(CONNECTSEARCH_RECENTSEARCHTERM, 'UserId', userId);
const clickedOf = (userId: number) =>
  entities.getAllByIndex<ConnectSearch_RecentClickedResults>(CONNECTSEARCH_RECENTCLICKEDRESULTS, 'UserId', userId);

/** Get_RecentSearchTerms (S:1994-2098, max 10): the user's terms of this target containing SearchKey_Current, except
    SearchKey_LastSearched, newest first. */
export async function get_RecentSearchTerms(
  searchTargetId: string,
  searchKeyCurrent: string,
  searchKeyLastSearched: string,
): Promise<ConnectSearch_RecentSearchTerm[]> {
  const rows = await termsOf(getUserId());
  return rows
    .filter(
      (r) =>
        (searchKeyCurrent === '' || likeContains(r.SearchedTerm, searchKeyCurrent)) &&
        r.SearchedTerm !== searchKeyLastSearched &&
        sameText(r.SearchTargetId, searchTargetId),
    )
    .sort(bySearchedOnDesc)
    .slice(0, 10);
}

/** Get_RecentClickedResults (S:1830-1990, max 5): the user's clicked results of this target in the selected category
    (All, or Households/People/Places → Household/Member/Locality, S:1869-1926) whose Name, AdditionalInformation or
    Location contains SearchKey_Current (S:1927), newest first. */
export async function get_RecentClickedResults(
  searchTargetId: string,
  searchKeyCurrent: string,
  selectedCategory: string,
): Promise<ConnectSearch_RecentClickedResults[]> {
  const inCategory = (type: string) =>
    selectedCategory === 'All' ||
    (selectedCategory === 'Households' && type === 'Household') ||
    (selectedCategory === 'People' && type === 'Member') ||
    (selectedCategory === 'Places' && type === 'Locality');
  const rows = await clickedOf(getUserId());
  return rows
    .filter(
      (r) =>
        inCategory(r.EntityType) &&
        (searchKeyCurrent === '' ||
          likeContains(r.Name, searchKeyCurrent) ||
          likeContains(r.AdditionalInformation, searchKeyCurrent) ||
          likeContains(r.Location, searchKeyCurrent)) &&
        sameText(r.SearchTargetId, searchTargetId),
    )
    .sort(bySearchedOnDesc)
    .slice(0, 5);
}

/** Action_RefreshSearch (S:2340-2445): CheckIfSearchtermAlreadyExist (Trim(SearchedTerm) = Trim(SearchKey_Current),
    this target, by SearchedTerm, max 1), its Current (or an empty record) gets UserId, Trim(term), CurrDateTime and
    the target, then CreateOrUpdateConnectSearch_RecentSearchTerm. */
export async function saveRecentSearchTerm(searchTargetId: string, searchKeyCurrent: string): Promise<void> {
  const userId = getUserId();
  const term = searchKeyCurrent.trim();
  const found = (await termsOf(userId))
    .filter((r) => r.SearchedTerm.trim() === term && sameText(r.SearchTargetId, searchTargetId))
    .sort((a, b) => (a.SearchedTerm < b.SearchedTerm ? -1 : a.SearchedTerm > b.SearchedTerm ? 1 : 0))[0];
  const record: ConnectSearch_RecentSearchTerm = {
    ...(found ?? { Id: '0', UserId: 0, SearchedTerm: '', SearchedOn: NULL_DATE_TIME, SearchTargetId: '' }),
    UserId: userId,
    SearchedTerm: term,
    SearchedOn: currDateTime(),
    SearchTargetId: searchTargetId,
  };
  await entities.createOrUpdateAll(CONNECTSEARCH_RECENTSEARCHTERM, [record]);
}

const ofType = (rows: ConnectSearch_RecentClickedResults[], searchTargetId: string, entityType: string) =>
  rows.filter((r) => r.EntityType === entityType && sameText(r.SearchTargetId, searchTargetId)).sort(bySearchedOnDesc);

/** Event_SectionOnItemClick (S:2720-2975): GetConnectSearchRecentClickedResultsByUserId (EntityId, EntityType, target)
    Current gets the result's fields and CurrDateTime (S:2813-2844), CreateOrUpdate (S:2846); then AllRecenctClickedResults
    of that type (newest first) beyond Search_RecenctClickedResultsLimit are deleted (S:2957-2972). */
export async function saveRecentClickedResult(
  searchTargetId: string,
  result: ClickedSearchResult,
  recentClickedResultsLimit: number,
): Promise<void> {
  const userId = getUserId();
  const found = (await clickedOf(userId)).find(
    (r) => r.EntityId === result.id && r.EntityType === result.type && sameText(r.SearchTargetId, searchTargetId),
  );
  const record: ConnectSearch_RecentClickedResults = {
    Id: found?.Id ?? '0',
    UserId: userId,
    EntityId: result.id,
    EntityType: result.type,
    HouseholderId: result.householderId,
    Name: result.name,
    AdditionalInformation: result.additionalInformation,
    Location: result.location,
    SearchedOn: currDateTime(),
    Latitude: result.latitude,
    Longitude: result.longitude,
    SearchTargetId: searchTargetId,
  };
  await entities.createOrUpdateAll(CONNECTSEARCH_RECENTCLICKEDRESULTS, [record]);
  const all = ofType(await clickedOf(userId), searchTargetId, result.type);
  if (all.length > recentClickedResultsLimit)
    for (const r of all.slice(recentClickedResultsLimit))
      await entities.delete(CONNECTSEARCH_RECENTCLICKEDRESULTS, r.Id);
}

/** GetAllSearchRecentClickedResultsByUserId (S:3000-3090): the user's clicked results of one type, newest first. */
export async function getAllSearchRecentClickedResultsByUserId(
  searchTargetId: string,
  entityType: string,
): Promise<ConnectSearch_RecentClickedResults[]> {
  return ofType(await clickedOf(getUserId()), searchTargetId, entityType);
}

/** OnClick_RecentSearchTerm_Remove (S:3774-3792): DeleteConnectSearch_RecentSearchTerm of the row. */
export function deleteConnectSearch_RecentSearchTerm(id: string): Promise<void> {
  return entities.delete(CONNECTSEARCH_RECENTSEARCHTERM, id);
}

/** OnClick_RecentSearch_RemoveAll (S:3359-3615): delete the user's terms, then clicked results, of this target. */
export async function removeAllRecentSearch(searchTargetId: string): Promise<void> {
  const userId = getUserId();
  for (const r of (await termsOf(userId)).filter((t) => sameText(t.SearchTargetId, searchTargetId)))
    await entities.delete(CONNECTSEARCH_RECENTSEARCHTERM, r.Id);
  for (const r of (await clickedOf(userId)).filter((c) => sameText(c.SearchTargetId, searchTargetId)))
    await entities.delete(CONNECTSEARCH_RECENTCLICKEDRESULTS, r.Id);
}
