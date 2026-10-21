import { beforeEach, expect, test } from 'vitest';
import { setSignedInUser } from '../session';
import { memoryDatabase, type LocalDatabase } from './database';
import {
  LOCALSEARCHHISTORY,
  getFilteredUserSearchHistory,
  localSearchHistory_Update,
  localSearchHistorySchemas,
  setLocalSearchHistoryDatabase,
} from './localSearchHistory';

let db: LocalDatabase;
beforeEach(() => {
  db = memoryDatabase(localSearchHistorySchemas());
  setLocalSearchHistoryDatabase(db);
  setSignedInUser('7');
});

const T = LOCALSEARCHHISTORY.tableName;
/** A stored row as the runtime serializer writes it (UTC "yyyy-MM-dd HH:mm:ss", Long Integer as text). */
const put = (id: string, userId: number, searched: string, createdOnUtc: string, typeId = 'MyNotifications') =>
  db.transaction([T], 'readwrite', (tx) =>
    tx.put(T, {
      ID: id,
      USERID: userId,
      SEARCHEDSTRING: searched,
      CREATEDON: createdOnUtc,
      RECENTSEARCHTYPEID: typeId,
    }),
  );

test('table, key and columns of TST (Connect2_LegacyShared.entities.js:102-150)', () => {
  expect(localSearchHistorySchemas()[0]).toEqual({
    tableName: 'OSUSR_B3N_LOCALSEARCHHISTORY',
    keyPath: ['ID'],
    indexes: ['ID', 'USERID', 'SEARCHEDSTRING', 'CREATEDON', 'RECENTSEARCHTYPEID'],
  });
});

test('GetFilteredUserSearchHistory: user, type, like term, newest first, max 5 (aggregates.IDB.js:609-712)', async () => {
  for (let i = 1; i <= 7; i++) await put(String(i), 7, `term ${String(i)}`, `2026-01-0${String(i)} 10:00:00`);
  await put('8', 8, 'term other user', '2026-01-09 10:00:00');
  await put('9', 7, 'term other type', '2026-01-09 10:00:00', 'Directory');
  const list = await getFilteredUserSearchHistory('MyNotifications', 'TERM');
  expect(list.map((r) => r.Id)).toEqual(['7', '6', '5', '4', '3']);
  expect(list[0]).toMatchObject({ UserId: 7, SearchedString: 'term 7', RecentSearchTypeId: 'MyNotifications' });
});

test('ShowOnlyOnCorrectTerm: an empty SearchString matches nothing; off, every row of the type', async () => {
  await put('1', 7, 'alpha', '2026-01-01 10:00:00');
  await put('2', 7, 'beta', '2026-01-02 10:00:00');
  expect(await getFilteredUserSearchHistory('MyNotifications', '')).toEqual([]);
  expect(await getFilteredUserSearchHistory('MyNotifications', 'a_p')).toHaveLength(1);
  expect((await getFilteredUserSearchHistory('MyNotifications', '', false, 0)).map((r) => r.Id)).toEqual(['2', '1']);
});

test('LocalSearchHistory_Update sets CreatedOn to now; a missing id fails like the entity update', async () => {
  await put('1', 7, 'alpha', '2026-01-01 10:00:00');
  await put('2', 7, 'alpha beta', '2026-01-02 10:00:00');
  await localSearchHistory_Update('1');
  expect((await getFilteredUserSearchHistory('MyNotifications', 'alpha')).map((r) => r.Id)).toEqual(['1', '2']);
  await expect(localSearchHistory_Update('99')).rejects.toThrow('does not exist');
});
