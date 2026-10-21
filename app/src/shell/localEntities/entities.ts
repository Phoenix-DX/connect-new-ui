import type { KeyPart, LocalDatabase, LocalTransaction, Row, TableSchema } from './database';

/* Client entity metadata, row (de)serialisation and the entity service of the OutSystems runtime on IndexedDB.
   RS = migration/runtime-sources/; OutSystems.js is minified (line numbers only). */

/** Decimal: the clone's records carry it as decimal text; stored as the runtime's Serializer.serializeDecimal does
    (OutSystems.js:13 Common/Serializer: `decimals ? value.toFixed(decimals) : value.toString()`). */
type ColumnType = 'Text' | 'Integer' | 'LongInteger' | 'DateTime' | 'Decimal' | 'Boolean';

export interface AttributeInfo {
  /** Attribute name = the field of the clone's record. */
  name: string;
  columnName: string;
  type: ColumnType;
  isPrimaryKey?: boolean;
  /** Decimal places of a Decimal attribute (entity info `decimals`). */
  decimals?: number;
}

export interface EntityInfo {
  key: string;
  moduleKey: string;
  name: string;
  tableName: string;
  hash: string;
  attributes: readonly AttributeInfo[];
  /** idIsAutoNumber of the entity info: YesIfEmpty (default) or No (the id is always given, e.g. a Text id that
      references a static entity; LASTIDENTIFIER is not used). */
  idIsAutoNumber?: 'YesIfEmpty' | 'No';
}

/** UBTConnect_Notes_MCS.LocalNote (RS UBTConnect_Notes_MCS.entities.js:3-66): idIsAutoNumber YesIfEmpty (:62). There is
    no note text: the local copy only knows which notes exist, their category, item and dates. */
export const LOCAL_NOTE: EntityInfo = {
  key: '33971c5f-8dc6-4984-b811-3fdccecb57f5',
  moduleKey: 'e3738a74-cdb5-4644-82df-e10898ce0aad',
  name: 'LocalNote',
  tableName: 'OSUSR_18U_LOCALNOTE',
  hash: '422191e9-3dd5-db72-2f7a-e92548a44146',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'LongInteger', isPrimaryKey: true },
    { name: 'UserId', columnName: 'USERID', type: 'Integer' },
    { name: 'NoteId', columnName: 'NOTEID', type: 'LongInteger' },
    { name: 'NoteCategoryId', columnName: 'NOTECATEGORYID', type: 'Text' },
    { name: 'ItemId', columnName: 'ITEMID', type: 'Text' },
    { name: 'DateCreatedUtc', columnName: 'DATECREATEDUTC', type: 'DateTime' },
    { name: 'DateEditedUtc', columnName: 'DATEEDITEDUTC', type: 'DateTime' },
  ],
};

/** The runtime's metadata store OSSYS_ENTITY (OutSystems.js:11 TableInfoUtils.METADATA_TABLE_NAME; :12
    MetadataTableInfo: key Key + ModuleKey). Its row per entity keeps LASTIDENTIFIER, the last auto-number id. */
export const METADATA_TABLE: TableSchema = {
  tableName: 'OSSYS_ENTITY',
  keyPath: ['KEY', 'MODULEKEY'],
  indexes: ['KEY', 'MODULEKEY', 'UPGRADESTATUS', 'NAME', 'TABLENAME', 'HASH', 'EXTRAINFO'],
};

/** The IndexedDB database of the app on the web: EnvironmentKey + "-" + UserProviderName (OutSystems.js:16
    initializeDatabase, setDatabaseName; RS UBTConnect.appDefinition.js:4 environment "Testing", :8 "Users"). */
export const DATABASE_NAME = '143ff233-2884-4f1b-8a50-dc386fb3a50f-Users';

export function tableSchema(entity: EntityInfo): TableSchema {
  return {
    tableName: entity.tableName,
    keyPath: entity.attributes.filter((a) => a.isPrimaryKey).map((a) => a.columnName),
    indexes: entity.attributes.map((a) => a.columnName),
  };
}

/* ---- Serializer (OutSystems.js:13 Common/Serializer, IndexedDBSerializer; DateTimeRevamp off) ---- */

const NULL_DATE_IN_DB = '1900-01-01 00:00:00';
/** The OutSystems null DateTime in the clone's wire format. */
export const NULL_DATE_TIME = '1900-01-01T00:00:00';
const pad = (n: number, w = 2) => String(n).padStart(w, '0');

/** serializeDateTime: the null date as is, any other value (a local date and time) in UTC "yyyy-MM-dd HH:mm:ss". */
function serializeDateTime(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  if (!m || value.startsWith('1900-01-01')) return NULL_DATE_IN_DB;
  const [, y, mo, d, h = '0', mi = '0', s = '0'] = m;
  const date = new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s));
  return `${pad(date.getUTCFullYear(), 4)}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ${pad(
    date.getUTCHours(),
  )}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
}

/** deserializeDateTime: the stored UTC value back to a local "yyyy-MM-ddTHH:mm:ss". */
function deserializeDateTime(value: unknown): string {
  const m = typeof value === 'string' ? /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(value) : null;
  if (!m || value === NULL_DATE_IN_DB) return NULL_DATE_TIME;
  const [, y, mo, d, h, mi, s] = m.map(Number);
  const date = new Date(Date.UTC(y ?? 1900, (mo ?? 1) - 1, d ?? 1, h ?? 0, mi ?? 0, s ?? 0));
  return `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(
    date.getMinutes(),
  )}:${pad(date.getSeconds())}`;
}

/** Long Integer is stored as text ("0" when empty), Integer as a number, Text as is, Decimal as fixed-point text,
    Boolean as 1 or 0 (serializeBoolean: `e ? 1 : 0`). */
function serializeValue(type: ColumnType, value: unknown, decimals?: number): KeyPart {
  switch (type) {
    case 'Boolean':
      return value ? 1 : 0;
    case 'LongInteger':
      return typeof value === 'number' || (typeof value === 'string' && value !== '') ? String(value) : '0';
    case 'Integer':
      return typeof value === 'number' ? value : Number(value ?? 0);
    case 'DateTime':
      return serializeDateTime(typeof value === 'string' ? value : '');
    case 'Decimal': {
      const n = typeof value === 'number' ? value : typeof value === 'string' && value !== '' ? Number(value) : 0;
      return decimals ? n.toFixed(decimals) : String(n);
    }
    default:
      return typeof value === 'string' ? value : '';
  }
}

function deserializeValue(type: ColumnType, value: unknown): string | number | boolean {
  switch (type) {
    case 'Boolean': // deserializeBoolean: `0 !== e`
      return value !== 0;
    case 'LongInteger':
      return typeof value === 'number' || typeof value === 'string' ? String(value) : '0';
    case 'Integer':
      return typeof value === 'number' ? value : 0;
    case 'DateTime':
      return deserializeDateTime(value);
    case 'Decimal': // deserializeDecimal: a runtime Decimal, whose text drops the trailing zeros
      return typeof value === 'number' || (typeof value === 'string' && value !== '') ? String(Number(value)) : '0';
    default:
      return typeof value === 'string' ? value : '';
  }
}

export function serializeRecord(entity: EntityInfo, record: object): Row {
  const fields = record as Record<string, unknown>;
  return Object.fromEntries(
    entity.attributes.map((a) => [a.columnName, serializeValue(a.type, fields[a.name], a.decimals)]),
  );
}

/** A stored row back to the clone's record (field = attribute name). */
export function deserializeRecord(entity: EntityInfo, row: Row): Record<string, string | number | boolean> {
  return Object.fromEntries(entity.attributes.map((a) => [a.name, deserializeValue(a.type, row[a.columnName])]));
}

/* ---- Entity service (OutSystems.js:13 IndexedDBEntityService) ---- */

function identifier(entity: EntityInfo): AttributeInfo {
  const id = entity.attributes.find((a) => a.isPrimaryKey);
  if (!id) throw new Error(`Entity ${entity.name} has no identifier`);
  return id;
}

/** getMetadataRecord: the runtime writes this row when it initialises the data model at app start; the clone writes it
    on first use, with the entity's key, module key, name, table and hash. */
async function metadataRecord(tx: LocalTransaction, entity: EntityInfo): Promise<Row> {
  return (
    (await tx.get(METADATA_TABLE.tableName, [entity.key, entity.moduleKey])) ?? {
      KEY: entity.key,
      MODULEKEY: entity.moduleKey,
      NAME: entity.name,
      TABLENAME: entity.tableName,
      HASH: entity.hash,
    }
  );
}

/** getRecordIdAndUpdateLastIdentifier (YesIfEmpty): an empty id takes LASTIDENTIFIER + 1; a larger given id moves it.
    idIsAutoNumber No: the given id as is. */
function recordIdAndUpdateLastIdentifier(meta: Row, id: string, entity?: EntityInfo): string {
  if (entity?.idIsAutoNumber === 'No') return id;
  const last = BigInt(typeof meta.LASTIDENTIFIER === 'string' ? meta.LASTIDENTIFIER : '0');
  if (id === '' || id === '0') {
    const next = String(last + 1n);
    meta.LASTIDENTIFIER = next;
    return next;
  }
  if (BigInt(id) > last) meta.LASTIDENTIFIER = id;
  return id;
}

const idOf = (record: object, idAttr: AttributeInfo) => {
  const id = (record as Record<string, unknown>)[idAttr.name];
  return typeof id === 'string' || typeof id === 'number' ? String(id) : '';
};

const tables = (entity: EntityInfo) => [entity.tableName, METADATA_TABLE.tableName];

/** innerCreateOrUpdateAll inside a transaction: ids as in create, then store.put of every row. */
async function putAll(tx: LocalTransaction, entity: EntityInfo, records: readonly object[]): Promise<void> {
  const idAttr = identifier(entity);
  const meta = await metadataRecord(tx, entity);
  const rows = records.map((r) =>
    serializeRecord(entity, { ...r, [idAttr.name]: recordIdAndUpdateLastIdentifier(meta, idOf(r, idAttr), entity) }),
  );
  await tx.put(METADATA_TABLE.tableName, meta);
  for (const row of rows) await tx.put(entity.tableName, row);
}

export function entityService(database: () => LocalDatabase) {
  return {
    /** innerCreate: new id from the metadata row, then store.add. Returns the id. */
    create(entity: EntityInfo, record: object): Promise<string> {
      const idAttr = identifier(entity);
      return database().transaction(tables(entity), 'readwrite', async (tx) => {
        const meta = await metadataRecord(tx, entity);
        const id = recordIdAndUpdateLastIdentifier(meta, idOf(record, idAttr), entity);
        await tx.put(METADATA_TABLE.tableName, meta);
        await tx.add(entity.tableName, serializeRecord(entity, { ...record, [idAttr.name]: id }));
        return id;
      });
    },
    /** updateRecord: the row must exist, then store.put. */
    update(entity: EntityInfo, record: object): Promise<void> {
      const row = serializeRecord(entity, record);
      const key = tableSchema(entity).keyPath.map((c) => row[c] as KeyPart);
      return database().transaction([entity.tableName], 'readwrite', async (tx) => {
        if (!(await tx.get(entity.tableName, key)))
          throw new Error(`Record to update does not exist on table '${entity.tableName}'`);
        await tx.put(entity.tableName, row);
      });
    },
    /** removeRecord: store.delete of the id (nothing happens when it is missing). */
    delete(entity: EntityInfo, id: string): Promise<void> {
      return database().transaction([entity.tableName], 'readwrite', (tx) =>
        tx.delete(entity.tableName, [serializeValue(identifier(entity).type, id)]),
      );
    },
    deleteAll(entity: EntityInfo): Promise<void> {
      return database().transaction([entity.tableName], 'readwrite', (tx) => tx.clear(entity.tableName));
    },
    /** innerCreateOrUpdateAll: ids as in create, then store.put of every row. */
    createOrUpdateAll(entity: EntityInfo, records: readonly object[]): Promise<void> {
      return database().transaction(tables(entity), 'readwrite', (tx) => putAll(tx, entity, records));
    },
    /** deleteAll then createOrUpdateAll in one transaction (the original runs two, OutSystems.js deleteAll →
        executeTransaction): a reader never sees the empty table in between. */
    replaceAll(entity: EntityInfo, records: readonly object[]): Promise<void> {
      return database().transaction(tables(entity), 'readwrite', async (tx) => {
        await tx.clear(entity.tableName);
        await putAll(tx, entity, records);
      });
    },
    /** Every row of the entity's store (store.getAll, primary-key order), deserialised. */
    getAll<R extends object>(entity: EntityInfo): Promise<R[]> {
      return database().transaction([entity.tableName], 'readonly', async (tx) =>
        (await tx.getAll(entity.tableName)).map((row) => deserializeRecord(entity, row) as R),
      );
    },
    /** A client aggregate's read: index(column).getAll(only(value)), deserialised. */
    getAllByIndex<R extends object>(entity: EntityInfo, attribute: string, value: unknown): Promise<R[]> {
      const attr = entity.attributes.find((a) => a.name === attribute);
      if (!attr) throw new Error(`Entity ${entity.name} has no attribute ${attribute}`);
      return database().transaction([entity.tableName], 'readonly', async (tx) =>
        (await tx.getAllByIndex(entity.tableName, attr.columnName, serializeValue(attr.type, value))).map(
          (row) => deserializeRecord(entity, row) as R,
        ),
      );
    },
  };
}
