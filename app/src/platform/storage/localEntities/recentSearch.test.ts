import { beforeEach, expect, test } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { memoryDatabase, type LocalDatabase } from './database';
import {
  CONNECTSEARCH_RECENTCLICKEDRESULTS,
  CONNECTSEARCH_RECENTSEARCHTERM,
  get_RecentClickedResults,
  get_RecentSearchTerms,
  recentSearchSchemas,
  saveRecentClickedResult,
  saveRecentSearchTerm,
  setRecentSearchDatabase,
} from './recentSearch';

let db: LocalDatabase;
beforeEach(() => {
  db = memoryDatabase(recentSearchSchemas());
  setRecentSearchDatabase(db);
  setSignedInUser('7');
});

const rows = (table: string) => db.transaction([table], 'readonly', (tx) => tx.getAllByIndex(table, 'USERID', 7));

test('stores rows under the TST table, column names and metadata (UBTConnect.entities.js:90-139, 319-427)', async () => {
  await saveRecentSearchTerm('', '  Example term ');
  const [term] = await rows(CONNECTSEARCH_RECENTSEARCHTERM.tableName);
  expect(CONNECTSEARCH_RECENTSEARCHTERM.tableName).toBe('OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM');
  expect(term).toMatchObject({ ID: '1', USERID: 7, SEARCHEDTERM: 'Example term', SEARCHTARGETID: '' });
  const meta = await db.transaction(['OSSYS_ENTITY'], 'readonly', (tx) =>
    tx.get('OSSYS_ENTITY', [CONNECTSEARCH_RECENTSEARCHTERM.key, CONNECTSEARCH_RECENTSEARCHTERM.moduleKey]),
  );
  expect(meta).toMatchObject({ HASH: 'd7eb77bc-435b-b8bb-74c9-50d032289bac', LASTIDENTIFIER: '1' });
});

test('Decimal(15, 5) as the runtime serializer stores it, read back as a Decimal text', async () => {
  const result = {
    id: '11',
    type: 'Household',
    householderId: '11',
    name: 'Julián & Fiorella Vitale',
    additionalInformation: '',
    location: 'Bahia Blanca',
    latitude: '12.5',
    longitude: '-3',
  };
  await saveRecentClickedResult('', result, 10);
  const [row] = await rows(CONNECTSEARCH_RECENTCLICKEDRESULTS.tableName);
  expect(row).toMatchObject({ LATITUDE: '12.50000', LONGITUDE: '-3.00000', ENTITYTYPE: 'Household' });
  const [read] = await get_RecentClickedResults('', 'BLANCA', 'All');
  expect(read).toMatchObject({ Latitude: '12.5', Longitude: '-3', Name: 'Julián & Fiorella Vitale' });
});

test('like is case-insensitive and treats % and _ as wildcards (OutSystems.js:8)', async () => {
  await saveRecentSearchTerm('', 'Alpha Beta');
  expect(await get_RecentSearchTerms('', 'ab', '')).toHaveLength(0);
  expect(await get_RecentSearchTerms('', 'A_B', '')).toHaveLength(1);
  expect(await get_RecentSearchTerms('', 'alpha%beta', '')).toHaveLength(1);
});
