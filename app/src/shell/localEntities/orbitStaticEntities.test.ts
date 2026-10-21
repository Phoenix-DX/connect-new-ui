import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { components } from '../../api/schema';
import { setFlag } from '../../lib/flags';
import { DataBaseException } from '../../lib/os-exceptions';
import { memoryDatabase, type LocalDatabase } from './database';
import {
  HostSurveyStep,
  LOCAL_BED_SIZE,
  LOCAL_HELPER_ROLE,
  LOCAL_ORBIT_MILESTONE_TYPE,
  getLocalBedSizes,
  getLocalGenderPreferences,
  getLocalHelperRoles,
  getLocalHelperStatus,
  getLocalHostSurveySteps,
  getLocalHouseFloors,
  getLocalMealTypes,
  getLocalOrbitEventTypes,
  getLocalVehicleOwners,
  getLocalVehicleTypes,
  localHostSurveyStepsRead,
  getLocalOrbitMilestoneTypeById,
  getLocalOrbitMilestoneTypesById,
  getLocalSurveyStatusById,
  getLocalSurveyStatusByJSONName,
  loadOrbitStaticEntities,
  localOrbitMilestoneTypesRead,
  orbitStaticEntitiesSchemas,
  setOrbitStaticEntitiesDatabase,
  syncAllOrbitStaticEntities,
  syncOrbitMilestoneTypes,
  syncOrbitSurveyStatus,
  getOrbitStaticEntitiesVersion,
  subscribeOrbitStaticEntities,
} from './orbitStaticEntities';

type StaticEntities_Orbit = components['schemas']['Connect2_OrbitMobile_MUI__StaticEntities_Orbit'];

const empty = (): StaticEntities_Orbit => ({
  HelperRoles: { List: [] },
  HelperStatus: { List: [] },
  HostSurveyStep: { List: [] },
  MealType: { List: [] },
  OrbitBedSize: { List: [] },
  OrbitEventTypes: { List: [] },
  OrbitGenderPreference: { List: [] },
  OrbitHouseFloor: { List: [] },
  OrbitMilestoneTypes: { List: [] },
  OrbitVehicleOwner: { List: [] },
  OrbitVehicleType: { List: [] },
  SurveyStatus: { List: [] },
});
const status = (Id: number, Label: string, JSON_Name: string) => ({ Id, Label, JSON_Name, Is_Active: true, Order: Id });

let db: LocalDatabase;
beforeEach(() => {
  db = memoryDatabase(orbitStaticEntitiesSchemas());
  setOrbitStaticEntitiesDatabase(db);
});
afterEach(() => {
  setFlag('mobileOrbitHostSurvey', null);
  setOrbitStaticEntitiesDatabase(null);
});

/** A new page load on the same device: the mirror goes, the database stays. */
const reloadPage = () => {
  setOrbitStaticEntitiesDatabase(db);
};
const helperHost = { Id: 'helper-host', Type: 'Host', MainIcon: 'orbit-icon-person-wave', CanHost: true, Order: 5 };

describe('LocalSurveyStatus (SyncOrbitSurveyStatus C:7514-7550, aggregate GetLocalSurveyStatusByJSONName)', () => {
  it('replaces the table; the aggregate gives at most one record by JSON_Name; Entity.get of a missing id raises', async () => {
    await syncOrbitSurveyStatus([status(3, 'Sent', 'sent'), status(2, 'Confirmed', 'confirmed')]);
    expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([
      { Id: 2, Label: 'Confirmed', JSON_Name: 'confirmed' },
    ]);
    expect(getLocalSurveyStatusByJSONName('nope')).toEqual([]);
    expect(getLocalSurveyStatusById(3).Label).toBe('Sent');
    await syncOrbitSurveyStatus([status(1, 'Unable', 'unable')]);
    expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([]);
    expect(() => getLocalSurveyStatusById(3)).toThrow('OSUSR_HQ9_LOCALSURVEYSTATUS with id 3 was not found');
  });

  it('an Id 0 takes the next identifier (YesIfEmpty, LASTIDENTIFIER of the metadata row)', async () => {
    await syncOrbitSurveyStatus([status(7, 'A', 'a'), status(0, 'B', 'b')]);
    expect(getLocalSurveyStatusByJSONName('b')[0]?.Id).toBe(8);
  });
});

describe('SyncAllOrbitStaticEntities (C:6638-6800)', () => {
  it('syncs non-empty milestone types and survey statuses (Name = Type, as compiled)', async () => {
    const all = empty();
    all.OrbitMilestoneTypes.List = [
      {
        Id: 'helper-host',
        Is_Active: true,
        Order: 5,
        Type: 'Host',
        Name: 'Helper',
        MainColorVar: 'orange',
        MainIcon: 'orbit-icon-person-wave',
        CanHost: false,
        IsTransportMilestone: false,
        IconTransportArrival: '',
        IconTransportDeparture: '',
        TransportHeaderClass: '',
        TravelInfoHeader: '',
        TravelInfoHeaderIcon: '',
      },
    ];
    all.SurveyStatus.List = [status(2, 'Confirmed', 'confirmed')];
    await syncAllOrbitStaticEntities(all);
    reloadPage();
    await loadOrbitStaticEntities();
    expect(getLocalOrbitMilestoneTypeById('helper-host')).toMatchObject({
      MainIcon: 'orbit-icon-person-wave',
      Name: 'Host',
    });
    expect(getLocalSurveyStatusByJSONName('confirmed')).toHaveLength(1);
  });

  it('empty lists keep the tables while GetHasOrbitHostSurvey is on; off, SurveyStatus is always synced', async () => {
    await syncOrbitMilestoneTypes([{ Id: 'helper-host', Type: 'Host' }]);
    await syncOrbitSurveyStatus([status(2, 'Confirmed', 'confirmed')]);
    await syncAllOrbitStaticEntities(empty());
    expect(getLocalOrbitMilestoneTypeById('helper-host').Type).toBe('Host');
    expect(getLocalSurveyStatusByJSONName('confirmed')).toHaveLength(1);
    setFlag('mobileOrbitHostSurvey', 'off');
    await syncAllOrbitStaticEntities(empty());
    expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([]);
    expect(getLocalOrbitMilestoneTypeById('helper-host').Type).toBe('Host');
  });
});

describe('device database (F12, CR-HelpersDetail-1)', () => {
  it('the rows survive a page load: the mirror is empty until loadOrbitStaticEntities reads the database', async () => {
    await syncOrbitMilestoneTypes([helperHost]);
    await syncOrbitSurveyStatus([status(2, 'Confirmed', 'confirmed')]);
    reloadPage();
    expect(localOrbitMilestoneTypesRead()).toBe(false);
    expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([]);
    expect(getLocalOrbitMilestoneTypesById('helper-host')).toEqual([]);
    await loadOrbitStaticEntities();
    expect(localOrbitMilestoneTypesRead()).toBe(true);
    expect(getLocalOrbitMilestoneTypeById('helper-host')).toEqual({
      Id: 'helper-host',
      Order: 5,
      Type: 'Host',
      Name: 'Host',
      MainColorVar: '',
      MainIcon: 'orbit-icon-person-wave',
      CanHost: true,
      IsTransportMilestone: false,
      IconTransportDeparture: '',
      IconTransportArrival: '',
      TransportHeaderClass: '',
      TravelInfoHeader: '',
    });
    expect(getLocalSurveyStatusByJSONName('confirmed')).toEqual([
      { Id: 2, Label: 'Confirmed', JSON_Name: 'confirmed' },
    ]);
  });

  it('stores the rows as the runtime: IndexedDB rows keyed by column names, Booleans as 1 / 0', async () => {
    await syncOrbitMilestoneTypes([helperHost]);
    const rows = await db.transaction([LOCAL_ORBIT_MILESTONE_TYPE.tableName], 'readonly', (tx) =>
      tx.getAll(LOCAL_ORBIT_MILESTONE_TYPE.tableName),
    );
    expect(rows).toEqual([
      expect.objectContaining({ ID: 'helper-host', TYPE: 'Host', CANHOST: 1, ISTRANSPORTMILESTONE: 0 }),
    ]);
  });

  it('Entity.get of a missing id raises DataBaseException; the aggregate gives an empty list', async () => {
    await syncOrbitMilestoneTypes([helperHost]);
    expect(() => getLocalOrbitMilestoneTypeById('meal-host')).toThrow(DataBaseException);
    expect(getLocalOrbitMilestoneTypesById('meal-host')).toEqual([]);
    expect(getLocalOrbitMilestoneTypesById('helper-host')).toHaveLength(1);
  });

  it('a failed sync keeps the stored rows and raises', async () => {
    await syncOrbitMilestoneTypes([helperHost]);
    const failing: LocalDatabase = {
      transaction: (tables, mode, body) =>
        mode === 'readwrite' ? Promise.reject(new Error('QuotaExceededError')) : db.transaction(tables, mode, body),
    };
    setOrbitStaticEntitiesDatabase(failing);
    await expect(syncOrbitMilestoneTypes([])).rejects.toThrow('QuotaExceededError');
    expect(getLocalOrbitMilestoneTypeById('helper-host').MainIcon).toBe('orbit-icon-person-wave');
  });

  it('a load that started before a sync does not overwrite the synced rows', async () => {
    reloadPage();
    const load = loadOrbitStaticEntities();
    const sync = syncOrbitMilestoneTypes([helperHost]);
    await Promise.all([load, sync]);
    expect(getLocalOrbitMilestoneTypeById('helper-host').Type).toBe('Host');
  });
});

describe('change notification (CR-MilestoneDetail-4)', () => {
  it('each sync bumps the version and calls the subscribers until they unsubscribe', async () => {
    await loadOrbitStaticEntities();
    let calls = 0;
    const unsubscribe = subscribeOrbitStaticEntities(() => {
      calls += 1;
    });
    const before = getOrbitStaticEntitiesVersion();
    await syncOrbitMilestoneTypes([]);
    await syncOrbitSurveyStatus([]);
    expect(getOrbitStaticEntitiesVersion()).toBeGreaterThanOrEqual(before + 2);
    expect(calls).toBe(getOrbitStaticEntitiesVersion() - before);
    unsubscribe();
    await syncOrbitMilestoneTypes([]);
    expect(calls).toBe(getOrbitStaticEntitiesVersion() - before - 2);
  });
});

describe('host survey lists (CR-HostSurvey-1: SyncAllOrbitStaticEntities C:6677-6785, HostSurvey aggregates)', () => {
  const step = (Id: number, Order: number, IsDataStep: boolean) => ({
    Id,
    HeaderLabel: `S${Id}`,
    AddLabel: '',
    Order,
    IsDataStep,
  });
  const labelled = (Id: number, Order: number, JSON_Name: string) => ({
    Id,
    Label: JSON_Name,
    JSON_Name,
    Order,
    Is_Active: true,
  });
  const all = (): StaticEntities_Orbit => ({
    ...empty(),
    OrbitEventTypes: {
      List: [{ Id: 'event-host', Is_Active: true, Type: 'Host', Name: 'Host', MainColorVar: 'purple', MainIcon: 'i' }],
    },
    HostSurveyStep: {
      List: [
        step(HostSurveyStep.summary, 6, false),
        step(HostSurveyStep.navigation, 1, false),
        step(HostSurveyStep.accommodation, 2, true),
        step(HostSurveyStep.meal, 3, true),
        step(HostSurveyStep.helper, 4, true),
        step(HostSurveyStep.vehicle, 5, true),
      ],
    },
    OrbitBedSize: {
      List: [
        { Id: '5', Label: 'Double', JSON_Name: 'DOUBLE', Order: 2 },
        { Id: '3', Label: 'Single', JSON_Name: 'SINGLE', Order: 1 },
      ],
    },
    OrbitGenderPreference: { List: [4, 3, 2, 1, 5].map((id) => labelled(id, id, `G${id}`)) },
    OrbitHouseFloor: { List: [7, 6, 5, 4, 3, 2, 1].map((id) => labelled(id, 8 - id, `F${id}`)) },
    OrbitVehicleOwner: { List: [{ Id: '2', Label: 'Host', JSON_Name: 'HOST', Order: 1 }] },
    OrbitVehicleType: { List: [{ Id: '5', Label: 'Car', JSON_Name: 'CAR', Order: 1, Is_Active: true }] },
    HelperStatus: { List: [labelled(4, 1, 'pending'), labelled(3, 2, 'approved')] },
    MealType: { List: [labelled(2, 1, 'EVENING'), labelled(1, 2, 'MIDDAY')] },
    HelperRoles: {
      List: [
        { ...labelled(6, 2, 'HELPER'), isReadOnly: true },
        { ...labelled(1, 1, 'USHER'), isReadOnly: false },
      ],
    },
  });
  const flags = {
    accommodationSurvey: true,
    accommodationSurveyUpdate: true,
    mealSurvey: true,
    mealSurveyUpdate: true,
    helperSurvey: true,
    vehicleSurvey: true,
  };

  it('syncs every non-empty list; the aggregates filter, order by Order and keep Max. Records', async () => {
    await syncAllOrbitStaticEntities(all());
    expect(getLocalOrbitEventTypes()).toEqual([
      { Id: 'event-host', Type: 'Host', Name: 'Host', MainColorVar: 'purple', MainIcon: 'i' },
    ]);
    expect(getLocalHostSurveySteps({ ...flags, isConfirmedSurvey: true }).map((s) => s.Id)).toEqual([
      HostSurveyStep.summary,
    ]);
    expect(getLocalHostSurveySteps({ ...flags, isConfirmedSurvey: false }).map((s) => s.Order)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(
      getLocalHostSurveySteps({
        ...flags,
        isConfirmedSurvey: false,
        accommodationSurveyUpdate: false,
        mealSurvey: false,
        helperSurvey: false,
        vehicleSurvey: false,
      }).map((s) => s.Id),
    ).toEqual([HostSurveyStep.navigation, HostSurveyStep.summary]);
    expect(getLocalHouseFloors().map((f) => f.Id)).toEqual([7, 6, 5, 4]);
    expect(getLocalGenderPreferences().map((g) => g.Id)).toEqual([1, 2, 3, 4]);
    expect(getLocalBedSizes()).toEqual([
      { Id: '3', Label: 'Single', JSON_Name: 'SINGLE', Order: 1 },
      { Id: '5', Label: 'Double', JSON_Name: 'DOUBLE', Order: 2 },
    ]);
    expect(getLocalMealTypes()).toEqual([
      { Id: 1, Label: 'MIDDAY', JSON_Name: 'MIDDAY' },
      { Id: 2, Label: 'EVENING', JSON_Name: 'EVENING' },
    ]);
    expect(getLocalHelperStatus().map((h) => h.Id)).toEqual([3, 4]);
    expect(getLocalHelperRoles().map((r) => [r.Id, r.isReadOnly])).toEqual([
      [1, false],
      [6, true],
    ]);
    expect(getLocalVehicleOwners()).toEqual([{ Id: '2', Label: 'Host', Order: 1, JSON_Name: 'HOST' }]);
    expect(getLocalVehicleTypes()).toHaveLength(1);
  });

  it('stores Long Integer ids as text and Booleans as 1 / 0; the rows survive a page load', async () => {
    await syncAllOrbitStaticEntities(all());
    const [beds, roles] = await db.transaction(
      [LOCAL_BED_SIZE.tableName, LOCAL_HELPER_ROLE.tableName],
      'readonly',
      async (tx) => [await tx.getAll(LOCAL_BED_SIZE.tableName), await tx.getAll(LOCAL_HELPER_ROLE.tableName)],
    );
    expect(beds.map((r) => r.ID)).toEqual(['3', '5']);
    expect(roles.map((r) => r.ISREADONLY)).toEqual([0, 1]);
    reloadPage();
    expect(localHostSurveyStepsRead()).toBe(false);
    expect(getLocalHouseFloors()).toEqual([]);
    await loadOrbitStaticEntities();
    expect(localHostSurveyStepsRead()).toBe(true);
    expect(getLocalHouseFloors()).toHaveLength(4);
  });

  it('empty lists keep the tables; without GetHasOrbitHostSurvey the host-survey lists are not synced', async () => {
    await syncAllOrbitStaticEntities(all());
    await syncAllOrbitStaticEntities(empty());
    expect(getLocalGenderPreferences()).toHaveLength(4);
    setFlag('mobileOrbitHostSurvey', 'off');
    setOrbitStaticEntitiesDatabase(memoryDatabase(orbitStaticEntitiesSchemas()));
    await syncAllOrbitStaticEntities(all());
    expect(getLocalOrbitEventTypes()).toHaveLength(1);
    expect(localHostSurveyStepsRead()).toBe(false);
    expect(getLocalHostSurveySteps({ ...flags, isConfirmedSurvey: true })).toEqual([]);
  });
});

describe('eviction recovery (ADR-10)', () => {
  afterEach(() => {
    setOrbitStaticEntitiesDatabase(null);
  });

  it('an emptied database (eviction, logout) is "not read" until the sync, so readers wait instead of raising', async () => {
    setOrbitStaticEntitiesDatabase(memoryDatabase(orbitStaticEntitiesSchemas()));
    await loadOrbitStaticEntities();
    expect(localOrbitMilestoneTypesRead()).toBe(false);
    expect(localHostSurveyStepsRead()).toBe(false);
    await syncOrbitMilestoneTypes([{ Id: 'mt-1', Type: 'Arrival', MainIcon: 'icon-plane' }]);
    expect(localOrbitMilestoneTypesRead()).toBe(true);
    expect(getLocalOrbitMilestoneTypeById('mt-1')).toMatchObject({ Type: 'Arrival' });
  });

  it('a table synced empty (metadata row written) counts as read: the original raises "not found" then', async () => {
    const db = memoryDatabase(orbitStaticEntitiesSchemas());
    setOrbitStaticEntitiesDatabase(db);
    await syncOrbitMilestoneTypes([]);
    setOrbitStaticEntitiesDatabase(db); // a new page load on the same database
    await loadOrbitStaticEntities();
    expect(localOrbitMilestoneTypesRead()).toBe(true);
    expect(() => getLocalOrbitMilestoneTypeById('mt-1')).toThrow(DataBaseException);
  });
});
