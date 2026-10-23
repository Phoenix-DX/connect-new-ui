import { useSyncExternalStore } from 'react';
import type { components } from '@/api/schema';
import { isOn } from '@/platform/flags/flags';
import { DataBaseException } from '@/legacy/os/os-exceptions';
import type {
  LocalOrbitMilestoneType,
  OrbitMilestoneTypeRecord,
} from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { indexedDbDatabase, memoryDatabase, type LocalDatabase } from './database';
import {
  DATABASE_NAME,
  METADATA_TABLE,
  deserializeRecord,
  entityService,
  tableSchema,
  type EntityInfo,
} from './entities';

/* The Orbit local entities of Connect2_OrbitMobile_MUI that the app start fills (CR-EventDetail-1), ported 1:1 from
   C = migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js, E = …Connect2_OrbitMobile_MUI.entities.js.

   Who uses them in the original:
   - writes: UBTConnect Sync_Info_Main (UBTConnect.controller.js:16579-16584): after Sync_Info_GetMain, when not from
     the login, SyncAllOrbitStaticEntities(Sync_Info_GetMain.OrbitStaticEntities) (C:6638-6800). From the login
     (Connect_SetLoggedContext → Sync_Info_Main(True)) nothing is synced: the device keeps what the last app start wrote;
   - reads: ScreenBlock_EventDetail aggregate GetLocalSurveyStatusByJSONName (host survey row, Host Allocation),
     HostAllocation_HelperItem aggregate GetLocalOrbitMilestoneTypeHelper, MilestoneHeader GetLocalOrbitMilestoneTypeById,
     ScreenBlock_HostSurvey aggregates GetLocalHostSurveySteps, GetLocalHouseFloors, GetLocalGenderPreferences, … (HS =
     migration/screens/HostSurvey/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.
     ScreenBlock_HostSurvey.mvc.js; CR-HostSurvey-1).

   Storage (F12, CR-HelpersDetail-1, CR-HostSurvey-1): as the original, the rows live in the device database, one
   IndexedDB store per local entity of the module (OSUSR_HQ9_LOCALSURVEYSTATUS E:1446-1480,
   OSUSR_HQ9_LOCALORBITMILESTONETYPE E:1229-1334 and the ten below) in the app database (./database.ts, as notes and
   bookmarks), so a page load whose Sync_Info_GetMain fails or never answers keeps the
   rows of the earlier app starts. Each sync replaces the rows in the database.
   Reads: the screens read at their first render, synchronously (MilestoneHeader, HostAllocation_HelperItem,
   ScreenBlock_EventDetail), where the original's reads are asynchronous IndexedDB reads. So the module keeps an
   in-memory mirror of the two stores:
   - filled from the database at app start (loadOrbitStaticEntities, called by appStartSteps.ts runAppStart, as the
     runtime opens the device database before OnApplicationReady), and re-read after each sync's transaction, so it holds the
     stored rows (ids given by the database included), in primary-key order as the IndexedDB store returns them;
   - a sync also writes its rows to the mirror when it is called, before its transaction (write-through), and re-reads
     the table if the transaction fails: readers see the new rows a few milliseconds early (the original's readers see
     the old rows, or none between its DeleteAll and CreateOrUpdate transactions);
   - a table not read yet reads as empty; `localOrbitMilestoneTypesRead()` / `localHostSurveyStepsRead()` tell the
     readers whether it was.
   Readers and the app start (CR-MilestoneDetail-4): in the original a screen's OnReady reads rows that earlier app
   starts left in the device database. Here a page opened by URL can render its first screen before the mirror is
   loaded, or before Sync_Info_Main has synced: each change of the mirror bumps a version and notifies its subscribers
   (subscribeOrbitStaticEntities / useOrbitStaticEntitiesVersion), and the blocks that read at their first render read
   again when it changes. */

/** LocalSurveyStatus (E:1446-1480): Id Integer (identifier of the static entity SurveyStatus), idIsAutoNumber
    YesIfEmpty. */
export const LOCAL_SURVEY_STATUS: EntityInfo = {
  key: 'ea64deda-3c5c-4dbf-b5e0-9ae85f5f143b',
  moduleKey: '9be6ccac-528f-40c3-ac29-97356c967d0d',
  name: 'LocalSurveyStatus',
  tableName: 'OSUSR_HQ9_LOCALSURVEYSTATUS',
  hash: 'b4efad82-5867-539f-5f91-fc73c44c981a',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'Integer', isPrimaryKey: true },
    { name: 'Label', columnName: 'LABEL', type: 'Text' },
    { name: 'JSON_Name', columnName: 'JSON_NAME', type: 'Text' },
  ],
};

/** LocalOrbitMilestoneType (E:1229-1334): Id Text (identifier of the static entity OrbitMilestoneType), idIsAutoNumber
    No. */
export const LOCAL_ORBIT_MILESTONE_TYPE: EntityInfo = {
  key: 'de744672-4c15-4953-88e6-a924d90d3500',
  moduleKey: '9be6ccac-528f-40c3-ac29-97356c967d0d',
  name: 'LocalOrbitMilestoneType',
  tableName: 'OSUSR_HQ9_LOCALORBITMILESTONETYPE',
  hash: 'ea5da0cc-d8ef-c6c8-f25c-10fdeb6c3fd9',
  idIsAutoNumber: 'No',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'Text', isPrimaryKey: true },
    { name: 'Order', columnName: 'ORDER', type: 'Integer' },
    { name: 'Type', columnName: 'TYPE', type: 'Text' },
    { name: 'Name', columnName: 'NAME', type: 'Text' },
    { name: 'MainColorVar', columnName: 'MAINCOLORVAR', type: 'Text' },
    { name: 'MainIcon', columnName: 'MAINICON', type: 'Text' },
    { name: 'CanHost', columnName: 'CANHOST', type: 'Boolean' },
    { name: 'IsTransportMilestone', columnName: 'ISTRANSPORTMILESTONE', type: 'Boolean' },
    { name: 'IconTransportDeparture', columnName: 'ICONTRANSPORTDEPARTURE', type: 'Text' },
    { name: 'IconTransportArrival', columnName: 'ICONTRANSPORTARRIVAL', type: 'Text' },
    { name: 'TransportHeaderClass', columnName: 'TRANSPORTHEADERCLASS', type: 'Text' },
    { name: 'TravelInfoHeader', columnName: 'TRAVELINFOHEADER', type: 'Text' },
  ],
};

const MODULE_KEY = '9be6ccac-528f-40c3-ac29-97356c967d0d';
const labelled = (idType: 'Integer' | 'LongInteger', order: 'before' | 'after' | 'none') =>
  [
    { name: 'Id', columnName: 'ID', type: idType, isPrimaryKey: true },
    { name: 'Label', columnName: 'LABEL', type: 'Text' },
    ...(order === 'before' ? [{ name: 'Order', columnName: 'ORDER', type: 'Integer' } as const] : []),
    { name: 'JSON_Name', columnName: 'JSON_NAME', type: 'Text' },
    ...(order === 'after' ? [{ name: 'Order', columnName: 'ORDER', type: 'Integer' } as const] : []),
  ] as const;

/** LocalOrbitEventType (E:862-913): Id Text (static entity OrbitEventType), idIsAutoNumber No. */
export const LOCAL_ORBIT_EVENT_TYPE: EntityInfo = {
  key: '5226d8d9-65b0-4c58-ad8e-c79268d38411',
  moduleKey: MODULE_KEY,
  name: 'LocalOrbitEventType',
  tableName: 'OSUSR_HQ9_LOCALORBITEVENTTYPE',
  hash: 'e985fd4a-638c-fbf7-078f-0a3f8574fe36',
  idIsAutoNumber: 'No',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'Text', isPrimaryKey: true },
    { name: 'Type', columnName: 'TYPE', type: 'Text' },
    { name: 'Name', columnName: 'NAME', type: 'Text' },
    { name: 'MainColorVar', columnName: 'MAINCOLORVAR', type: 'Text' },
    { name: 'MainIcon', columnName: 'MAINICON', type: 'Text' },
  ],
};

/** LocalHostSurveyStep (E:730-777): Id Integer (static entity HostSurveyStep), idIsAutoNumber YesIfEmpty. */
export const LOCAL_HOST_SURVEY_STEP: EntityInfo = {
  key: '4790655c-0f3a-4a66-b421-5ca86b492eef',
  moduleKey: MODULE_KEY,
  name: 'LocalHostSurveyStep',
  tableName: 'OSUSR_HQ9_LOCALHOSTSURVEYSTEP',
  hash: '570ab0f2-2691-972e-7a67-5505e02f9333',
  attributes: [
    { name: 'Id', columnName: 'ID', type: 'Integer', isPrimaryKey: true },
    { name: 'HeaderLabel', columnName: 'HEADERLABEL', type: 'Text' },
    { name: 'AddLabel', columnName: 'ADDLABEL', type: 'Text' },
    { name: 'Order', columnName: 'ORDER', type: 'Integer' },
    { name: 'IsDataStep', columnName: 'ISDATASTEP', type: 'Boolean' },
  ],
};

/** LocalBedSize (E:4-44): Id Long Integer (static entity BedSize), Label, JSON_Name, Order; YesIfEmpty. */
export const LOCAL_BED_SIZE: EntityInfo = {
  key: '09eba2e8-9d0e-46d1-b547-8ac59b49ba69',
  moduleKey: MODULE_KEY,
  name: 'LocalBedSize',
  tableName: 'OSUSR_HQ9_LOCALBEDSIZE',
  hash: '846dc6df-f8f0-2c47-31a7-6e5bd11ae7a6',
  attributes: labelled('LongInteger', 'after'),
};

/** LocalGenderPreference (E:477-517): Id Integer, Label, JSON_Name, Order; YesIfEmpty. */
export const LOCAL_GENDER_PREFERENCE: EntityInfo = {
  key: '2d7daecb-87b1-45d7-bb2c-c902057bdef9',
  moduleKey: MODULE_KEY,
  name: 'LocalGenderPreference',
  tableName: 'OSUSR_HQ9_LOCALGENDERPREFERENCE',
  hash: 'e81d407f-48a2-4853-3024-5007277cc2e2',
  attributes: labelled('Integer', 'after'),
};

/** LocalHouseFloor (E:998-1038): Id Integer, Label, JSON_Name, Order; YesIfEmpty. */
export const LOCAL_HOUSE_FLOOR: EntityInfo = {
  key: '6c838b7b-1274-46db-8b29-a4c68e2cd3dd',
  moduleKey: MODULE_KEY,
  name: 'LocalHouseFloor',
  tableName: 'OSUSR_HQ9_LOCALHOUSEFLOOR',
  hash: 'bb82d4e0-4ce1-8b08-17e5-18ce437ea438',
  attributes: labelled('Integer', 'after'),
};

/** LocalVehicleOwner (E:125-165): Id Long Integer, Label, Order, JSON_Name; YesIfEmpty. */
export const LOCAL_VEHICLE_OWNER: EntityInfo = {
  key: '0f4cf5ca-f8fe-459f-b3a7-0b06f90504f9',
  moduleKey: MODULE_KEY,
  name: 'LocalVehicleOwner',
  tableName: 'OSUSR_HQ9_LOCALVEHICLEOWNER',
  hash: '3087f1ad-6ea1-a27a-2ce2-62f83e4ca7c2',
  attributes: labelled('LongInteger', 'before'),
};

/** LocalVehicleType (E:356-396): Id Long Integer, Label, Order, JSON_Name; YesIfEmpty. */
export const LOCAL_VEHICLE_TYPE: EntityInfo = {
  key: '29d797e6-79c3-4479-8998-5e2bdf684870',
  moduleKey: MODULE_KEY,
  name: 'LocalVehicleType',
  tableName: 'OSUSR_HQ9_LOCALVEHICLETYPE',
  hash: '9a3fd083-8101-59c9-37dc-4222546e71de',
  attributes: labelled('LongInteger', 'before'),
};

/** LocalHelperStatus (E:246-279): Id Integer, Label, JSON_Name; YesIfEmpty. */
export const LOCAL_HELPER_STATUS: EntityInfo = {
  key: '24520b9b-b56a-4a6a-8953-499e4f5baeba',
  moduleKey: MODULE_KEY,
  name: 'LocalHelperStatus',
  tableName: 'OSUSR_HQ9_LOCALHELPERSTATUS',
  hash: 'cbaf9695-294f-b566-1c5c-73c0dd44a85c',
  attributes: labelled('Integer', 'none'),
};

/** LocalMealType (E:1119-1152): Id Integer, Label, JSON_Name; YesIfEmpty. */
export const LOCAL_MEAL_TYPE: EntityInfo = {
  key: 'b9a9de01-25c3-4b39-adc3-afaa9d0391be',
  moduleKey: MODULE_KEY,
  name: 'LocalMealType',
  tableName: 'OSUSR_HQ9_LOCALMEALTYPE',
  hash: 'b431c5b1-b9d6-3e8c-5218-d3ec7c97f99b',
  attributes: labelled('Integer', 'none'),
};

/** LocalHelperRole (E:598-645): Id Integer, Label, Order, JSON_Name, isReadOnly Boolean; YesIfEmpty. */
export const LOCAL_HELPER_ROLE: EntityInfo = {
  key: '3b5a4778-45a2-4423-8df4-bddc01873eac',
  moduleKey: MODULE_KEY,
  name: 'LocalHelperRole',
  tableName: 'OSUSR_HQ9_LOCALHELPERROLE',
  hash: '24c69e86-b5f0-923b-0dc1-9d6bb050318c',
  attributes: [...labelled('Integer', 'before'), { name: 'isReadOnly', columnName: 'ISREADONLY', type: 'Boolean' }],
};

type Schemas = components['schemas'];
type StaticEntities_Orbit = Schemas['Connect2_OrbitMobile_MUI__StaticEntities_Orbit'];
type SurveyStatusRecord = Schemas['Connect2_OrbitMobile_BL__SurveyStatus'];

/** LocalSurveyStatus (LocalSurveyStatusRec Connect2_OrbitMobile_MUI.model.js:902-923): Id Integer, Label and
    JSON_Name Text. */
export interface LocalSurveyStatus {
  Id: number;
  Label: string;
  JSON_Name: string;
}

/** LocalOrbitEventType (LocalOrbitEventTypeRec, model.js:8300). */
export interface LocalOrbitEventType {
  Id: string;
  Type: string;
  Name: string;
  MainColorVar: string;
  MainIcon: string;
}

/** LocalHostSurveyStep (LocalHostSurveyStepRec, model.js:801). */
export interface LocalHostSurveyStep {
  Id: number;
  HeaderLabel: string;
  AddLabel: string;
  Order: number;
  IsDataStep: boolean;
}

/** LocalGenderPreference (model.js:8372) and LocalHouseFloor (model.js:1331): Id Integer, Label, JSON_Name, Order. */
export interface LocalLabelledRecord {
  Id: number;
  Label: string;
  JSON_Name: string;
  Order: number;
}
export type LocalGenderPreference = LocalLabelledRecord;
export type LocalHouseFloor = LocalLabelledRecord;

/** LocalBedSize (model.js:7273), LocalVehicleOwner (model.js:6962), LocalVehicleType (model.js:11106): Id Long
    Integer (text), Label, JSON_Name, Order. */
export interface LocalLongLabelledRecord {
  Id: string;
  Label: string;
  JSON_Name: string;
  Order: number;
}
export type LocalBedSize = LocalLongLabelledRecord;
export type LocalVehicleOwner = LocalLongLabelledRecord;
export type LocalVehicleType = LocalLongLabelledRecord;

/** LocalHelperStatus (model.js:4750) and LocalMealType (model.js:12395): Id Integer, Label, JSON_Name. */
export interface LocalHelperStatus {
  Id: number;
  Label: string;
  JSON_Name: string;
}
export type LocalMealType = LocalHelperStatus;

/** LocalHelperRole (LocalHelperRoleRec, model.js:10245). */
export interface LocalHelperRole {
  Id: number;
  Label: string;
  Order: number;
  JSON_Name: string;
  isReadOnly: boolean;
}

/* ---- Mirror of the stored rows (see above) ---- */

const ENTITIES: readonly EntityInfo[] = [
  LOCAL_SURVEY_STATUS,
  LOCAL_ORBIT_MILESTONE_TYPE,
  LOCAL_ORBIT_EVENT_TYPE,
  LOCAL_HOST_SURVEY_STEP,
  LOCAL_BED_SIZE,
  LOCAL_GENDER_PREFERENCE,
  LOCAL_HOUSE_FLOOR,
  LOCAL_VEHICLE_OWNER,
  LOCAL_VEHICLE_TYPE,
  LOCAL_HELPER_STATUS,
  LOCAL_MEAL_TYPE,
  LOCAL_HELPER_ROLE,
];

interface Mirror {
  /** Rows in primary-key order, as the IndexedDB store returns them; null until read from the database. */
  rows: Record<string, unknown>[] | null;
  /** Mirror writes: a read started before a later write does not overwrite it. */
  writes: number;
}
const mirrors = new Map<string, Mirror>(ENTITIES.map((e) => [e.name, { rows: null, writes: 0 }]));
const mirrorOf = (entity: EntityInfo): Mirror => {
  let found = mirrors.get(entity.name);
  if (!found) {
    found = { rows: null, writes: 0 };
    mirrors.set(entity.name, found);
  }
  return found;
};
/** The mirrored rows of a table (copies); a table not read yet is empty. */
const rowsOf = <R>(entity: EntityInfo): R[] => (mirrorOf(entity).rows ?? []).map((r) => ({ ...r }) as R);

let version = 0;
const listeners = new Set<() => void>();

function notifyChanged(): void {
  version += 1;
  for (const listener of [...listeners]) listener();
}

/* ---- Database ---- */

const SCHEMAS = [...ENTITIES.map(tableSchema), METADATA_TABLE];
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
export function orbitStaticEntitiesDatabase(): LocalDatabase {
  database ??= defaultDatabase();
  return database;
}

/** Tests: an in-memory database (`memoryDatabase(orbitStaticEntitiesSchemas())`), or null for the default again. The
    mirror is forgotten, as on a new page load. */
export function setOrbitStaticEntitiesDatabase(next: LocalDatabase | null): void {
  database = next;
  for (const mirror of mirrors.values()) {
    mirror.rows = null;
    mirror.writes += 1;
  }
  notifyChanged();
}

export const orbitStaticEntitiesSchemas = () => SCHEMAS;

const entities = entityService(orbitStaticEntitiesDatabase);

/** Calls `listener` after every change of the mirror (load, sync); returns the unsubscribe function. */
export function subscribeOrbitStaticEntities(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** The number of changes so far (changes whenever the rows may have changed). */
export const getOrbitStaticEntitiesVersion = (): number => version;

/** React hook: the store version; the calling component renders again after every load or sync. */
export function useOrbitStaticEntitiesVersion(): number {
  return useSyncExternalStore(subscribeOrbitStaticEntities, getOrbitStaticEntitiesVersion);
}

/** Whether the LocalOrbitMilestoneType rows were read from the database (or written by a sync) on this page. */
export const localOrbitMilestoneTypesRead = (): boolean => mirrorOf(LOCAL_ORBIT_MILESTONE_TYPE).rows !== null;

/** Whether the LocalHostSurveyStep rows were read from the database (or written by a sync) on this page: the load of
    the app start reads every table in one transaction, so the other HostSurvey tables are then read too. */
export const localHostSurveyStepsRead = (): boolean => mirrorOf(LOCAL_HOST_SURVEY_STEP).rows !== null;

const byId = <R extends Record<string, unknown>>(a: R, b: R) => {
  const x = a.Id as string | number;
  const y = b.Id as string | number;
  return x < y ? -1 : x > y ? 1 : 0;
};

/** Reads the stores into the mirror, one readonly transaction; a table written to the mirror meanwhile keeps that.
    An empty table without its metadata row (OSSYS_ENTITY, written by every sync) was never synced on this device
    since the database was created: first visit, eviction or logout (ADR-10). Its mirror is left as it is (not read
    yet) so readers wait for the app start's sync instead of raising "not found" (MilestoneHeader, HostSurvey). */
async function readMirror(tables: readonly EntityInfo[]): Promise<void> {
  const at = tables.map((e) => mirrorOf(e).writes);
  const read = await orbitStaticEntitiesDatabase().transaction(
    [...tables.map((e) => e.tableName), METADATA_TABLE.tableName],
    'readonly',
    async (tx) => {
      const all = [];
      for (const e of tables) {
        const rows = await tx.getAll(e.tableName);
        const synced = rows.length > 0 || (await tx.get(METADATA_TABLE.tableName, [e.key, e.moduleKey])) !== null;
        all.push({ rows, synced });
      }
      return all;
    },
  );
  let changed = false;
  for (const [i, e] of tables.entries()) {
    const mirror = mirrorOf(e);
    const found = read[i];
    if (at[i] !== mirror.writes || !found?.synced) continue;
    mirror.rows = found.rows.map((r) => deserializeRecord(e, r));
    changed = true;
  }
  if (changed) notifyChanged();
}

/** App start: fills the mirror with the rows that earlier app starts stored. */
export function loadOrbitStaticEntities(): Promise<void> {
  return readMirror(ENTITIES);
}

/** A sync's rows: written to the mirror now, then replaced in the database (DeleteAll + CreateOrUpdate, one
    transaction as entityService.replaceAll), then read back (ids the database gave); on a failed transaction the
    table is read again and the error raised. */
async function replaceRows(entity: EntityInfo, rows: readonly object[]): Promise<void> {
  const mirror = mirrorOf(entity);
  mirror.writes += 1;
  mirror.rows = rows.map((r) => ({ ...r })).sort(byId);
  notifyChanged();
  try {
    await entities.replaceAll(entity, rows);
  } catch (error) {
    await readMirror([entity]).catch(() => undefined);
    throw error;
  }
  await readMirror([entity]);
}

/* ---- Sync actions (C) ---- */

/** SyncOrbitSurveyStatus(HostSurveyStatus) (C:7514-7550): DeleteAllLocalSurveyStatus, then CreateOrUpdateSome with Id,
    Label and JSON_Name (C:7531-7535). Id 0 takes LASTIDENTIFIER + 1 (YesIfEmpty, metadata row OSSYS_ENTITY), a larger
    id moves it. */
export function syncOrbitSurveyStatus(hostSurveyStatus: readonly Partial<SurveyStatusRecord>[]): Promise<void> {
  return replaceRows(
    LOCAL_SURVEY_STATUS,
    hostSurveyStatus.map((source) => ({
      Id: source.Id ?? 0,
      Label: source.Label ?? '',
      JSON_Name: source.JSON_Name ?? '',
    })),
  );
}

/** SyncOrbitMilestoneTypes(OrbitMilestoneTypes) (C:7447-7490): DeleteAll, then CreateOrUpdateAll with the fields
    mapped one by one (C:7465-7476); Name takes the source Type (C:7468, as compiled), Is_Active and
    TravelInfoHeaderIcon are not copied. */
export function syncOrbitMilestoneTypes(orbitMilestoneTypes: readonly OrbitMilestoneTypeRecord[]): Promise<void> {
  return replaceRows(
    LOCAL_ORBIT_MILESTONE_TYPE,
    orbitMilestoneTypes.map((source) => ({
      Id: source.Id ?? '',
      Order: source.Order ?? 0,
      Type: source.Type ?? '',
      Name: source.Type ?? '',
      MainColorVar: source.MainColorVar ?? '',
      MainIcon: source.MainIcon ?? '',
      CanHost: source.CanHost ?? false,
      IsTransportMilestone: source.IsTransportMilestone ?? false,
      IconTransportDeparture: source.IconTransportDeparture ?? '',
      IconTransportArrival: source.IconTransportArrival ?? '',
      TransportHeaderClass: source.TransportHeaderClass ?? '',
      TravelInfoHeader: source.TravelInfoHeader ?? '',
    })),
  );
}

/** SyncOrbitEventTypes(OrbitEventTypes) (C:6949-7008): DeleteAll, then CreateOrUpdateAll with Id, Type, Name,
    MainColorVar and MainIcon (C:6967-6971); Is_Active is not copied. */
export function syncOrbitEventTypes(
  orbitEventTypes: readonly Partial<Schemas['Connect2_OrbitMobile_BL__OrbitEventType']>[],
) {
  return replaceRows(
    LOCAL_ORBIT_EVENT_TYPE,
    orbitEventTypes.map((source) => ({
      Id: source.Id ?? '',
      Type: source.Type ?? '',
      Name: source.Name ?? '',
      MainColorVar: source.MainColorVar ?? '',
      MainIcon: source.MainIcon ?? '',
    })),
  );
}

/** SyncOrbitSurveyStep(SurveyStep) (C:7615-7674): DeleteAll, then CreateOrUpdateAll with Id, HeaderLabel, AddLabel,
    Order and IsDataStep (C:7633-7637). */
export function syncOrbitSurveyStep(
  surveyStep: readonly Partial<Schemas['Connect2_OrbitMobile_MUI__HostSurveyStep']>[],
) {
  return replaceRows(
    LOCAL_HOST_SURVEY_STEP,
    surveyStep.map((source) => ({
      Id: source.Id ?? 0,
      HeaderLabel: source.HeaderLabel ?? '',
      AddLabel: source.AddLabel ?? '',
      Order: source.Order ?? 0,
      IsDataStep: source.IsDataStep ?? false,
    })),
  );
}

type LabelledSource = { Id?: number | string; Label?: string; JSON_Name?: string; Order?: number };
const labelledRows = (list: readonly LabelledSource[], idDefault: number | string, withOrder: boolean) =>
  list.map((source) => ({
    Id: source.Id ?? idDefault,
    Label: source.Label ?? '',
    JSON_Name: source.JSON_Name ?? '',
    ...(withOrder ? { Order: source.Order ?? 0 } : {}),
  }));

/** SyncOrbitBedSize(OrbitBedSize) (C:6829-6887): DeleteAll, then CreateOrUpdateAll with Id, Label, JSON_Name and
    Order (C:6847-6850). */
export const syncOrbitBedSize = (orbitBedSize: readonly Partial<Schemas['Connect2_OrbitMobile_BL__BedSize']>[]) =>
  replaceRows(LOCAL_BED_SIZE, labelledRows(orbitBedSize, '0', true));

/** SyncOrbitGenderPreference(OrbitGenderPreference) (C:7009-7067): Id, Label, JSON_Name, Order (C:7027-7030);
    Is_Active is not copied. */
export const syncOrbitGenderPreference = (
  orbitGenderPreference: readonly Partial<Schemas['Connect2_OrbitMobile_BL__GenderPreference']>[],
) => replaceRows(LOCAL_GENDER_PREFERENCE, labelledRows(orbitGenderPreference, 0, true));

/** SyncOrbitHouseFloor(OrbitHouseFloor) (C:7330-7388): Id, Label, JSON_Name, Order (C:7348-7351). */
export const syncOrbitHouseFloor = (
  orbitHouseFloor: readonly Partial<Schemas['Connect2_OrbitMobile_BL__HouseFloor']>[],
) => replaceRows(LOCAL_HOUSE_FLOOR, labelledRows(orbitHouseFloor, 0, true));

/** SyncOrbitVehicleOwner(OrbitVehicleOwner) (C:7675-7733): Id, Label, Order, JSON_Name (C:7693-7696). */
export const syncOrbitVehicleOwner = (
  orbitVehicleOwner: readonly Partial<Schemas['Connect2_OrbitMobile_BL__VehicleOwner']>[],
) => replaceRows(LOCAL_VEHICLE_OWNER, labelledRows(orbitVehicleOwner, '0', true));

/** SyncOrbitVehicleType(OrbitVehicleType) (C:7734-7792): Id, Label, Order, JSON_Name (C:7752-7755). */
export const syncOrbitVehicleType = (
  orbitVehicleType: readonly Partial<Schemas['Connect2_OrbitMobile_BL__VehicleType']>[],
) => replaceRows(LOCAL_VEHICLE_TYPE, labelledRows(orbitVehicleType, '0', true));

/** SyncOrbitHelperStatus(HelperStatus) (C:7124-7181): Id, Label, JSON_Name (C:7142-7144); Order and Is_Active are
    not copied. */
export const syncOrbitHelperStatus = (
  helperStatus: readonly Partial<Schemas['Connect2_OrbitMobile_BL__HelperStatus']>[],
) => replaceRows(LOCAL_HELPER_STATUS, labelledRows(helperStatus, 0, false));

/** SyncOrbitMealType(MealType) (C:7389-7446): Id, Label, JSON_Name (C:7407-7409); Order and Is_Active are not
    copied. */
export const syncOrbitMealType = (mealType: readonly Partial<Schemas['Connect2_OrbitMobile_BL__MealType']>[]) =>
  replaceRows(LOCAL_MEAL_TYPE, labelledRows(mealType, 0, false));

/** SyncOrbitHelperRoles(HelperRoles: LocalHelperRole List) (C:7068-7123): DeleteAll, then CreateOrUpdateAll of
    LocalHelperRoleRecord.fromStructure (C:7085-7088). SyncAllOrbitStaticEntities converts the HelperRole list first:
    Id, Label, Order, JSON_Name, isReadOnly (C:6771-6779); Is_Active is not copied. */
export const syncOrbitHelperRoles = (helperRoles: readonly Partial<Schemas['Connect2_OrbitMobile_BL__HelperRole']>[]) =>
  replaceRows(
    LOCAL_HELPER_ROLE,
    helperRoles.map((source) => ({
      Id: source.Id ?? 0,
      Label: source.Label ?? '',
      Order: source.Order ?? 0,
      JSON_Name: source.JSON_Name ?? '',
      isReadOnly: source.isReadOnly ?? false,
    })),
  );

/** SyncAllOrbitStaticEntities(OrbitStaticEntities) (C:6638-6800), in its order, each list synced only when not empty
    ("Has … ?"): OrbitEventTypes (C:6652-6658), OrbitMilestoneTypes (C:6661-6667); then GetHasOrbitHostSurvey
    (UBTConnect_Utils; the decided flag mobileOrbitHostSurvey, C:6672-6676). With it: HostSurveyStep (C:6677-6683),
    OrbitBedSize (:6686-6692), OrbitGenderPreference (:6696-6702), OrbitHouseFloor (:6706-6712), OrbitVehicleOwner
    (:6716-6722), OrbitVehicleType (:6726-6732), HelperStatus (:6736-6742), SurveyStatus (:6746-6752), MealType
    (:6756-6762), HelperRoles (:6766-6785). Without it: SurveyStatus always (SyncOrbitSurveyStatus2, C:6787-6791, so an
    empty list empties the table) and nothing else. Errors are raised to the caller (Sync_Info_Main's AllExceptions). */
export async function syncAllOrbitStaticEntities(orbitStaticEntities: StaticEntities_Orbit): Promise<void> {
  const o = orbitStaticEntities;
  if (o.OrbitEventTypes.List.length > 0) await syncOrbitEventTypes(o.OrbitEventTypes.List);
  if (o.OrbitMilestoneTypes.List.length > 0) await syncOrbitMilestoneTypes(o.OrbitMilestoneTypes.List);
  if (!isOn('mobileOrbitHostSurvey')) {
    await syncOrbitSurveyStatus(o.SurveyStatus.List);
    return;
  }
  if (o.HostSurveyStep.List.length > 0) await syncOrbitSurveyStep(o.HostSurveyStep.List);
  if (o.OrbitBedSize.List.length > 0) await syncOrbitBedSize(o.OrbitBedSize.List);
  if (o.OrbitGenderPreference.List.length > 0) await syncOrbitGenderPreference(o.OrbitGenderPreference.List);
  if (o.OrbitHouseFloor.List.length > 0) await syncOrbitHouseFloor(o.OrbitHouseFloor.List);
  if (o.OrbitVehicleOwner.List.length > 0) await syncOrbitVehicleOwner(o.OrbitVehicleOwner.List);
  if (o.OrbitVehicleType.List.length > 0) await syncOrbitVehicleType(o.OrbitVehicleType.List);
  if (o.HelperStatus.List.length > 0) await syncOrbitHelperStatus(o.HelperStatus.List);
  if (o.SurveyStatus.List.length > 0) await syncOrbitSurveyStatus(o.SurveyStatus.List);
  if (o.MealType.List.length > 0) await syncOrbitMealType(o.MealType.List);
  if (o.HelperRoles.List.length > 0) await syncOrbitHelperRoles(o.HelperRoles.List);
}

/* ---- Reads ---- */

/** Entity.get of the IndexedDB entity service (OutSystems.js:13 IndexedDBEntityService get): no row raises
    DataBaseException("<table> with id <id> was not found"). */
function notFound(entity: EntityInfo, id: string | number): DataBaseException {
  return new DataBaseException(`${entity.tableName} with id ${String(id)} was not found`);
}

/** Aggregate GetLocalSurveyStatusByJSONName of ScreenBlock_EventDetail (ScreenBlock_EventDetail.mvc.js :1502-1595):
    LocalSurveyStatus where JSON_Name = jsonName, at most 1 record (Max. Records 1). */
export function getLocalSurveyStatusByJSONName(jsonName: string): LocalSurveyStatus[] {
  return rowsOf<LocalSurveyStatus>(LOCAL_SURVEY_STATUS)
    .filter((s) => s.JSON_Name === jsonName)
    .slice(0, 1);
}

/** LocalSurveyStatus.get(Id) (Entity.get): the record; raises DataBaseException when there is none. */
export function getLocalSurveyStatusById(id: number): LocalSurveyStatus {
  const found = rowsOf<LocalSurveyStatus>(LOCAL_SURVEY_STATUS).find((s) => s.Id === id);
  if (!found) throw notFound(LOCAL_SURVEY_STATUS, id);
  return found;
}

/** GetLocalOrbitMilestoneTypeById(OrbitMilestoneTypeId) → LocalOrbitMilestoneType (C:4104-4140):
    LocalOrbitMilestoneType.get(Id) (Entity.get); raises DataBaseException when there is no row with that Id. Callers
    that read at their first render check localOrbitMilestoneTypesRead() first (the original waits for the database). */
export function getLocalOrbitMilestoneTypeById(orbitMilestoneTypeId: string): LocalOrbitMilestoneType {
  const found = rowsOf<LocalOrbitMilestoneType>(LOCAL_ORBIT_MILESTONE_TYPE).find((t) => t.Id === orbitMilestoneTypeId);
  if (!found) throw notFound(LOCAL_ORBIT_MILESTONE_TYPE, orbitMilestoneTypeId);
  return found;
}

/** A client aggregate on LocalOrbitMilestoneType where Id = orbitMilestoneTypeId, Max. Records 1, e.g.
    HostAllocation_HelperItem GetLocalOrbitMilestoneTypeHelper (HostAllocation_HelperItem.mvc.js :241-283): no row
    gives an empty list (List.Current is then the empty record). */
export function getLocalOrbitMilestoneTypesById(orbitMilestoneTypeId: string): LocalOrbitMilestoneType[] {
  return rowsOf<LocalOrbitMilestoneType>(LOCAL_ORBIT_MILESTONE_TYPE)
    .filter((t) => t.Id === orbitMilestoneTypeId)
    .slice(0, 1);
}

/** Every LocalOrbitEventType row (primary-key order). */
export const getLocalOrbitEventTypes = (): LocalOrbitEventType[] => rowsOf(LOCAL_ORBIT_EVENT_TYPE);

/** ORDER BY Order ASC (a stable sort of the rows in primary-key order), then Max. Records (0 = no limit). */
const byOrder = <R extends { Order: number }>(rows: R[], maxRecords: number): R[] => {
  const sorted = [...rows].sort((a, b) => a.Order - b.Order);
  return maxRecords > 0 ? sorted.slice(0, maxRecords) : sorted;
};
const firstRecords = <R>(rows: R[], maxRecords: number): R[] => (maxRecords > 0 ? rows.slice(0, maxRecords) : rows);

/** Static entity HostSurveyStep of Connect2_OrbitMobile_MUI (TST ids, migration/knowledge/static-entities-tst.json). */
export const HostSurveyStep = { vehicle: 1, meal: 2, summary: 3, navigation: 4, accommodation: 5, helper: 6 } as const;

/** The survey flags GetLocalHostSurveySteps filters on (GetHostSurvey.Response.SurveyInfo and IsConfirmedSurvey). */
export interface HostSurveyStepFilter {
  isConfirmedSurvey: boolean;
  accommodationSurvey: boolean;
  accommodationSurveyUpdate: boolean;
  mealSurvey: boolean;
  mealSurveyUpdate: boolean;
  helperSurvey: boolean;
  vehicleSurvey: boolean;
}

/** Aggregate GetLocalHostSurveySteps of ScreenBlock_HostSurvey (HS :4118-4170, Max. Records 10, ORDER BY Order): a
    confirmed survey keeps the summary step only; otherwise the accommodation step needs AccommodationSurvey and
    AccommodationSurveyUpdate, the meal step MealSurvey and MealSurveyUpdate, the helper step HelperSurvey, the vehicle
    step VehicleSurvey. */
export function getLocalHostSurveySteps(f: HostSurveyStepFilter, maxRecords = 10): LocalHostSurveyStep[] {
  const rows = rowsOf<LocalHostSurveyStep>(LOCAL_HOST_SURVEY_STEP).filter((s) => {
    if (f.isConfirmedSurvey) return s.Id === HostSurveyStep.summary;
    if (s.Id === HostSurveyStep.accommodation) return f.accommodationSurvey && f.accommodationSurveyUpdate;
    if (s.Id === HostSurveyStep.meal) return f.mealSurvey && f.mealSurveyUpdate;
    if (s.Id === HostSurveyStep.helper) return f.helperSurvey;
    if (s.Id === HostSurveyStep.vehicle) return f.vehicleSurvey;
    return true;
  });
  return byOrder(rows, maxRecords);
}

/** Aggregate GetLocalHouseFloors (HS :3580-3616): ORDER BY Order, Max. Records 4 (RefreshStaticEntities :5604-5776). */
export const getLocalHouseFloors = (maxRecords = 4): LocalHouseFloor[] =>
  byOrder(rowsOf<LocalHouseFloor>(LOCAL_HOUSE_FLOOR), maxRecords);

/** Aggregate GetLocalGenderPreferences (HS :4430-4463): ORDER BY Order, Max. Records 4. */
export const getLocalGenderPreferences = (maxRecords = 4): LocalGenderPreference[] =>
  byOrder(rowsOf<LocalGenderPreference>(LOCAL_GENDER_PREFERENCE), maxRecords);

/** Aggregate GetLocalBedSizes (HS :3669-3705): ORDER BY Order, Max. Records 5. */
export const getLocalBedSizes = (maxRecords = 5): LocalBedSize[] =>
  byOrder(rowsOf<LocalBedSize>(LOCAL_BED_SIZE), maxRecords);

/** Aggregate GetLocalMealTypes (HS :4030-4066): no ORDER BY (primary-key order), Max. Records 10. */
export const getLocalMealTypes = (maxRecords = 10): LocalMealType[] =>
  firstRecords(rowsOf<LocalMealType>(LOCAL_MEAL_TYPE), maxRecords);

/** Aggregate GetLocalHelperStatus (HS :3853-3888): no ORDER BY (primary-key order), Max. Records 10. */
export const getLocalHelperStatus = (maxRecords = 10): LocalHelperStatus[] =>
  firstRecords(rowsOf<LocalHelperStatus>(LOCAL_HELPER_STATUS), maxRecords);

/** Aggregate GetLocalHelperRoles (HS :4248-4290): ORDER BY Order, Max. Records 20. */
export const getLocalHelperRoles = (maxRecords = 20): LocalHelperRole[] =>
  byOrder(rowsOf<LocalHelperRole>(LOCAL_HELPER_ROLE), maxRecords);

/** Aggregate GetLocalVehicleOwners (HS :3941-3977): ORDER BY Order, Max. Records 4. */
export const getLocalVehicleOwners = (maxRecords = 4): LocalVehicleOwner[] =>
  byOrder(rowsOf<LocalVehicleOwner>(LOCAL_VEHICLE_OWNER), maxRecords);

/** Aggregate GetLocalVehicleTypes (HS :4341-4380): ORDER BY Order, Max. Records 8. */
export const getLocalVehicleTypes = (maxRecords = 8): LocalVehicleType[] =>
  byOrder(rowsOf<LocalVehicleType>(LOCAL_VEHICLE_TYPE), maxRecords);
