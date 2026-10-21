import { log } from '../../lib/log';
import type { LocalDatabase, TableSchema } from './database';
import { localBookmarksDatabase, localBookmarksSchemas } from './localBookmarks';
import { localNotesDatabase, localNotesSchemas } from './localNotes';
import { localSearchHistoryDatabase, localSearchHistorySchemas } from './localSearchHistory';
import { orbitStaticEntitiesDatabase, orbitStaticEntitiesSchemas } from './orbitStaticEntities';
import { recentSearchDatabase, recentSearchSchemas } from './recentSearch';

/* Logout clears every client entity (ADR-10, P10: personal data at rest leaves the device with the user). Not in the
   original: AppManager_Logout keeps the IndexedDB rows (knowledge/auth.md); shell/auth.ts signOut calls this in
   addition to the original steps. Every store of the device database is emptied, the metadata rows (OSSYS_ENTITY)
   included, so the next app start sees "never synced" and re-syncs (orbitStaticEntities.ts readMirror).
   The Orbit static entities' in-page mirror stays: reference lists, the same for every user, that only the app start
   syncs (Sync_Info_GetMain isFromLogin = False, startup.ts); a new sign-in on this page keeps reading them. */

const DATABASES: readonly (readonly [() => LocalDatabase, () => readonly TableSchema[]])[] = [
  [localNotesDatabase, localNotesSchemas],
  [localBookmarksDatabase, localBookmarksSchemas],
  [localSearchHistoryDatabase, localSearchHistorySchemas],
  [recentSearchDatabase, recentSearchSchemas],
  [orbitStaticEntitiesDatabase, orbitStaticEntitiesSchemas],
];

/** Empties every local entity store; one failing database does not stop the others. Resolves false on a failure. */
export async function clearAllLocalEntities(): Promise<boolean> {
  let cleared = true;
  for (const [database, schemas] of DATABASES) {
    const tables = schemas().map((s) => s.tableName);
    try {
      await database().transaction(tables, 'readwrite', async (tx) => {
        for (const table of tables) await tx.clear(table);
      });
    } catch (error) {
      cleared = false;
      log.warn('Clearing the local entities failed', { tables, error: String(error) });
    }
  }
  return cleared;
}
