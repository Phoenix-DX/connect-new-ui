/* The browser database behind the client entities (local storage entities of OutSystems), as the OutSystems runtime
   keeps them on the web: one IndexedDB database, one object store per entity table, rows keyed by the column names.
   Runtime evidence (migration/runtime-sources/OutSystems.js, minified, line:column):
   - store per table: createObjectStore(tableName, { autoIncrement: !pkColumns, keyPath: pkColumns }) and one index per
     attribute, named and keyed by its column name (11: IndexedDBTransactionWithoutObjectStores.createTable); pkColumns
     is the array of primary-key column names (11: TableInfoUtils.getIdentifierColumnNames), so keys are arrays;
   - insert = store.add, upsert = store.put, update = get then put (error when the row is missing), delete =
     store.delete (11: IndexedDBTransaction insertRecord / upsertRecord / updateRecord / removeRecord);
   - a missing store is created by reopening the database with version + 1 (12: IndexedDBDatabase).
   Which store, per the env params (runtime-sources/OutSystemsSettings.js: IndexedDBOffline = false, UseNewWebSQLImpl =
   false; the app is not a web app, UBTConnect.appDefinition.js isWeb: false):
   - with those values a browser would use WebSQL: initializeDatabase (16) opens SqlDbProvider.openDb when not native
     and not IndexedDBOffline, and UBTConnect_Notes_MCS.entities.js:161-163 binds LocalNote to webSQLStorageInstance.
     openDb (3) needs window.openDatabase; without it (Chrome 119+, Firefox) it alerts "Your app requires native access
     to a Local Storage database…" and fails with a SystemException, and every entity call then waits for a database
     that never opens (10: getDatabase);
   - but TST in Chrome 141 (no WebSQL) ran on IndexedDB: its runtime record lists the IndexedDB database
     "<environment key>-Users" (migration/screens/HomeFeed/capture/runtime-HomeFeed.json, environment.indexedDBNames),
     a name only the IndexedDB branch of initializeDatabase gives (16: setDatabaseName(env key + "-" + user provider)),
     and the compiled aggregates read IndexedDB in the browser (UBTConnect_Notes_MCS.controller.js:91-107).
   So this adapter keeps IndexedDB, as TST behaves; why the served IndexedDBOffline differs is an open question
   (setPlatformSettings, which overrides the env params, has no caller in the fetched scripts).
   DateTimes (entities.ts): DateTimeRevamp = false → the IndexedDBSerializer of 13; the null date is stored as
   "1900-01-01 00:00:00" (DbNullDatesTZAware = false: 10, 14). NullDatesTZAware = true is read only by
   DateTime.isDefaultDate (4).
   Screens and blocks never use this file: they call the module actions of ./localNotes.
   Eviction (ADR-10): when the browser deletes the database while a page has it open, the connection closes
   (versionchange) and the next transaction opens a new, empty one; the app start re-syncs it (startup.ts). */
import { requestPersistentStorage } from '@/pwa/persistStorage';

export type KeyPart = string | number;
export type Key = KeyPart | KeyPart[];
export type Row = Record<string, unknown>;

/** One object store: its name, key path (primary-key columns) and indexed columns. */
export interface TableSchema {
  tableName: string;
  keyPath: string[];
  indexes: string[];
}

/** The operations the runtime's IndexedDB transaction offers to the entity service. */
export interface LocalTransaction {
  get(table: string, key: KeyPart[]): Promise<Row | null>;
  /** store.add: fails when the key exists. */
  add(table: string, row: Row): Promise<void>;
  /** store.put. */
  put(table: string, row: Row): Promise<void>;
  /** store.delete: no error when the key is missing. */
  delete(table: string, key: KeyPart[]): Promise<void>;
  clear(table: string): Promise<void>;
  /** index(column).getAll(IDBKeyRange.only(value)): rows in primary-key order. */
  getAllByIndex(table: string, column: string, value: KeyPart): Promise<Row[]>;
  /** store.getAll(): every row, in primary-key order. */
  getAll(table: string): Promise<Row[]>;
}

export interface LocalDatabase {
  transaction<T>(tables: string[], mode: IDBTransactionMode, body: (tx: LocalTransaction) => Promise<T>): Promise<T>;
}

const rank = (key: Key) => (typeof key === 'number' ? 0 : typeof key === 'string' ? 1 : 2);

/** indexedDB.cmp for the key types used here: number < string < array; strings by code unit; arrays item by item. */
export function compareKeys(a: Key, b: Key): number {
  if (rank(a) !== rank(b)) return rank(a) - rank(b);
  if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      const c = compareKeys(a[i] as KeyPart, b[i] as KeyPart);
      if (c !== 0) return c;
    }
    return a.length - b.length;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

/** Same behaviour in memory: for tests and for browsers without IndexedDB. Writes of a failed transaction are dropped. */
export function memoryDatabase(schemas: readonly TableSchema[]): LocalDatabase {
  const tables = new Map(schemas.map((s) => [s.tableName, { schema: s, rows: new Map<string, Row>() }]));
  const table = (name: string) => {
    const t = tables.get(name);
    if (!t) throw new Error(`No object store '${name}'`);
    return t;
  };
  const keyOf = (schema: TableSchema, row: Row) => schema.keyPath.map((c) => row[c] as KeyPart);
  return {
    async transaction<T>(
      names: string[],
      _mode: IDBTransactionMode,
      body: (tx: LocalTransaction) => Promise<T>,
    ): Promise<T> {
      const snapshot = new Map(names.map((n) => [n, new Map(table(n).rows)]));
      const tx: LocalTransaction = {
        get: (name, key) => Promise.resolve(table(name).rows.get(JSON.stringify(key)) ?? null),
        add(name, row) {
          const t = table(name);
          const id = JSON.stringify(keyOf(t.schema, row));
          if (t.rows.has(id))
            return Promise.reject(new Error('ConstraintError: key already exists in the object store'));
          t.rows.set(id, structuredClone(row));
          return Promise.resolve();
        },
        put(name, row) {
          const t = table(name);
          t.rows.set(JSON.stringify(keyOf(t.schema, row)), structuredClone(row));
          return Promise.resolve();
        },
        delete(name, key) {
          table(name).rows.delete(JSON.stringify(key));
          return Promise.resolve();
        },
        clear(name) {
          table(name).rows.clear();
          return Promise.resolve();
        },
        getAllByIndex(name, column, value) {
          const t = table(name);
          const found = [...t.rows.values()]
            .filter((row) => row[column] === value)
            .sort((a, b) => compareKeys(keyOf(t.schema, a), keyOf(t.schema, b)));
          return Promise.resolve(found.map((row) => structuredClone(row)));
        },
        getAll(name) {
          const t = table(name);
          const rows = [...t.rows.values()].sort((a, b) => compareKeys(keyOf(t.schema, a), keyOf(t.schema, b)));
          return Promise.resolve(rows.map((row) => structuredClone(row)));
        },
      };
      try {
        return await body(tx);
      } catch (error) {
        for (const [n, rows] of snapshot) table(n).rows = rows;
        throw error;
      }
    },
  };
}

function request<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => {
      resolve(req.result);
    };
    req.onerror = (event) => {
      // markEventAsHandled (OutSystems.js:11): the caller decides, the transaction is aborted below
      event.preventDefault();
      event.stopPropagation();
      reject(req.error ?? new Error('IndexedDB request failed'));
    };
  });
}

/** The real database: `factory.open(name)`, then the missing stores are created with version + 1. */
export function indexedDbDatabase(name: string, schemas: readonly TableSchema[], factory: IDBFactory): LocalDatabase {
  let opening: Promise<IDBDatabase> | null = null;

  const openVersion = (version?: number) =>
    new Promise<IDBDatabase>((resolve, reject) => {
      const req = version === undefined ? factory.open(name) : factory.open(name, version);
      req.onupgradeneeded = () => {
        const db = req.result;
        for (const s of schemas) {
          if (db.objectStoreNames.contains(s.tableName)) continue;
          const store = db.createObjectStore(s.tableName, { autoIncrement: false, keyPath: s.keyPath });
          for (const column of s.indexes) store.createIndex(column, column);
        }
      };
      req.onsuccess = () => {
        resolve(req.result);
      };
      req.onerror = () => {
        reject(req.error ?? new Error(`Could not open database '${name}'`));
      };
    });

  const open = async () => {
    // ADR-10: an installed app asks to keep this storage, once per page load (src/pwa/persistStorage.ts); not awaited
    void requestPersistentStorage();
    let db = await openVersion();
    if (schemas.some((s) => !db.objectStoreNames.contains(s.tableName))) {
      const next = db.version + 1;
      db.close();
      db = await openVersion(next);
    }
    db.onversionchange = () => {
      db.close();
      opening = null;
    };
    return db;
  };

  return {
    async transaction<T>(
      tables: string[],
      mode: IDBTransactionMode,
      body: (tx: LocalTransaction) => Promise<T>,
    ): Promise<T> {
      opening ??= open().catch((error: unknown) => {
        opening = null;
        throw error;
      });
      const db = await opening;
      const tx = db.transaction(tables, mode);
      const done = new Promise<void>((resolve, reject) => {
        tx.oncomplete = () => {
          resolve();
        };
        tx.onabort = () => {
          reject(tx.error ?? new Error('Transaction aborted'));
        };
      });
      const store = (table: string) => tx.objectStore(table);
      const api: LocalTransaction = {
        get: async (table, key) => ((await request(store(table).get(key))) as Row | undefined) ?? null,
        add: async (table, row) => {
          await request(store(table).add(row));
        },
        put: async (table, row) => {
          await request(store(table).put(row));
        },
        delete: (table, key) => request(store(table).delete(key)),
        clear: (table) => request(store(table).clear()),
        getAllByIndex: async (table, column, value) =>
          (await request(store(table).index(column).getAll(IDBKeyRange.only(value)))) as Row[],
        getAll: async (table) => (await request(store(table).getAll())) as Row[],
      };
      let result: T;
      try {
        result = await body(api);
      } catch (error) {
        try {
          tx.abort();
        } catch {
          /* already finished */
        }
        done.catch(() => undefined);
        throw error;
      }
      await done;
      return result;
    },
  };
}
