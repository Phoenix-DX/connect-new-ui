import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { log } from '@/platform/log/log';
import { contractHandler } from '@/mocks/contract';
import { MOCK_USER_ID, mockUserInformation } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { server } from '@/test/setup';
import {
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarksC2,
  type LocalBookmark,
} from '@/platform/storage/localEntities';
import { defaultActionGetLocalityInformation_Output } from '@/mocks/modules/Connect2_LegacyShared/mockDefaults';
import {
  getAssembleEventSummaryHeaderLabel,
  getAssembleHostedAtComponents,
  getLocalBookmarkedLocalityInformation,
  getLocality,
  hasAccessToRegion,
  listFilterByName,
} from './actions';

describe('Connect2_Assemble_MUI actions', () => {
  it('GetAssembleEventSummaryHeaderLabel: type title and day label', () => {
    expect(
      getAssembleEventSummaryHeaderLabel({
        AssembleEventType: { Title: 'Prayer Meeting' },
        DateTime: '2026-11-10T19:00:00',
      }),
    ).toBe('Prayer Meeting - Tuesday');
    expect(
      getAssembleEventSummaryHeaderLabel({
        AssembleEventType: { Title: 'Gospel Preaching' },
        DateTime: '2026-11-08T18:00:00',
      }),
    ).toBe("Gospel Preaching - Lord's Day");
  });

  it('GetAssembleHostedAtComponents: unavailable, virtual and hall branches', () => {
    expect(getAssembleHostedAtComponents(false, 'Main Hall', 'Bahia Blanca', 'Argentina', true)).toEqual({
      SingleLine: 'Hosting details unavailable at the moment',
      FirstRow: 'Hosting details unavailable at the moment',
      SecondRow: '',
    });
    expect(getAssembleHostedAtComponents(true, 'Main Hall', 'Bahia Blanca', 'Argentina', false)).toEqual({
      FirstRow: 'Hosted Virtually by ',
      SingleLine: 'Online - Bahia Blanca, Argentina',
      SecondRow: 'Bahia Blanca, Argentina',
    });
    expect(getAssembleHostedAtComponents(false, 'Main Hall', 'Bahia Blanca', 'Argentina', false)).toEqual({
      FirstRow: 'Hosted at Main Hall',
      SingleLine: 'Main Hall, Bahia Blanca, Argentina',
      SecondRow: 'Bahia Blanca, Argentina',
    });
  });
});

describe('ListFilter by name (FilterLocalityByCountry mvc.js :823-850, FilterSubdivisionByLocality mvc.js :453-468)', () => {
  const items = [{ Name: 'Córdoba' }, { Name: '  Neuquén ' }, { Name: 'Bahia Blanca' }, {}];
  const names = (term: string) => listFilterByName(items, term).map((i) => i.Name);

  it('matches a substring, ignoring case, accents and the spaces around the term and the name', () => {
    expect(names('cordoba')).toEqual(['Córdoba']);
    expect(names('  NEUQUÉN  ')).toEqual(['  Neuquén ']);
    expect(names('blan')).toEqual(['Bahia Blanca']);
    expect(names('a b')).toEqual(['Bahia Blanca']);
  });

  it('an empty term keeps every item (Index of "" is 0), a missing Name counts as ""; no match gives []', () => {
    expect(listFilterByName(items, '')).toEqual(items);
    expect(names('zz')).toEqual([]);
  });
});

describe('HasAccessToRegion of Connect2_Assemble_MUI (controller.js:1140-1254)', () => {
  // the mock user: Country_Code AR, Locality_Id 585 (shell/mockUser.ts); Connect2_LegacyShared GetUserInformation
  // subscribes AR (Connect2_LegacyShared/lib/mocks.ts)
  const withPlan = (plan: string) => {
    server.use(
      contractHandler('UBTConnect_Utils', 'ActionGetUserInformation', () => {
        const info = mockUserInformation();
        info.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = plan;
        return { UserInformation: info };
      }),
    );
  };
  const audits = (spy: { mock: { calls: unknown[][] } }) => spy.mock.calls.filter(([m]) => m === 'ApplicationEvent');
  const audit = (localityId: string, countryCode: string) => [
    'ApplicationEvent',
    { EventId: 'SubscriptionRequired', LocalityId: localityId, HouseholdId: '0', CountryCode: countryCode },
  ];
  const legacyUserInfoCalls = () =>
    (window.__osCalls ?? []).filter(
      (c) => c.module === 'Connect2_LegacyShared' && c.action === 'ActionGetUserInformation',
    );

  beforeEach(() => {
    freshPage();
    setSignedInUser(MOCK_USER_ID);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Global (neither Free nor Regional): access everywhere, no audit, no GetCacheableUserInfo', async () => {
    const info = vi.spyOn(log, 'info');
    withPlan('Global');
    expect(await hasAccessToRegion('BR', '999')).toBe(true);
    expect(audits(info)).toEqual([]);
    expect(legacyUserInfoCalls()).toEqual([]);
  });

  it('Regional: access to a subscribed country only; otherwise SubscriptionRequired is audited', async () => {
    const info = vi.spyOn(log, 'info');
    withPlan('Regional');
    expect(await hasAccessToRegion('AR', '999')).toBe(true);
    expect(audits(info)).toEqual([]);
    expect(await hasAccessToRegion('BR', '0')).toBe(false);
    expect(audits(info)).toEqual([audit('0', 'BR')]);
    expect(legacyUserInfoCalls()).toHaveLength(1);
  });

  it("Free: the user's own country with LocalityId 0 or the user's locality; otherwise audited", async () => {
    const info = vi.spyOn(log, 'info');
    withPlan('Free');
    expect(await hasAccessToRegion('AR', '0')).toBe(true);
    expect(await hasAccessToRegion('AR', '585')).toBe(true);
    expect(audits(info)).toEqual([]);
    expect(await hasAccessToRegion('AR', '254')).toBe(false);
    expect(await hasAccessToRegion('BR', '0')).toBe(false);
    expect(audits(info)).toEqual([audit('254', 'AR'), audit('0', 'BR')]);
    expect(legacyUserInfoCalls()).toEqual([]);
  });
});

describe('GetLocalBookmarkedLocalityInformation (live controller.js:668-912) and GetLocality', () => {
  let nextId = 1;
  const bookmark = (BookmarkCategoryId: string, ItemId: string): LocalBookmark => ({
    Id: String(nextId++),
    UserId: Number(MOCK_USER_ID),
    BookmarkId: '0',
    BookmarkCategoryId,
    ItemId,
    CreatedAtDateUtc: '1900-01-01T00:00:00',
  });
  const flags = (list: { List: { IsBookmarked: boolean }[] }) => list.List.map((i) => i.IsBookmarked);
  /** List items over the generated EmptyListItem (every attribute at its default, mockDefaults.ts). */
  const items = <T>(list: { EmptyListItem?: T }, fields: Partial<T>[]): T[] =>
    fields.map((f) => ({ ...(list.EmptyListItem as T), ...f }));

  beforeEach(() => {
    freshPage();
    setSignedInUser(MOCK_USER_ID);
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
  });

  /** A locality with two items in each list. */
  const twoOfEach = () => {
    const info = defaultActionGetLocalityInformation_Output().CacheableLocalityInformation;
    info.LocalityInterchanges.List = items(info.LocalityInterchanges, [
      { InterchangeLocalityId: '253' },
      { InterchangeLocalityId: '300' },
    ]);
    info.LocalityHouseholdsList.List = items(info.LocalityHouseholdsList, [{ Id: '11' }, { Id: '12' }]);
    info.LocalitySubdivisionsList.List = items(info.LocalitySubdivisionsList, [{ Id: '9202' }, { Id: '9203' }]);
    info.LocalitySchools.List = items(info.LocalitySchools, [
      { CommunityBusinessID: '21' },
      { CommunityBusinessID: '22' },
    ]);
    info.LocalityStores.List = items(info.LocalityStores, [
      { CommunityBusinessID: '31' },
      { CommunityBusinessID: '32' },
    ]);
    return info;
  };

  it('Locality (:705-737): the locality and each interchange through the same Locality set', async () => {
    await synchBookmarksC2([bookmark('Locality', '252'), bookmark('Locality', '300')]);
    const out = await getLocalBookmarkedLocalityInformation('252', twoOfEach());
    expect(out.IsBookmarked).toBe(true);
    expect(flags(out.LocalityInterchanges)).toEqual([false, true]);
    expect(flags(out.LocalityHouseholdsList)).toEqual([false, false]);
  });

  it('Household (:741-766): the households by Id', async () => {
    await synchBookmarksC2([bookmark('Household', '12')]);
    const out = await getLocalBookmarkedLocalityInformation('252', twoOfEach());
    expect(out.IsBookmarked).toBe(false);
    expect(flags(out.LocalityHouseholdsList)).toEqual([false, true]);
  });

  it('Supper Meeting (:772-797): the supper meetings by Id', async () => {
    await synchBookmarksC2([bookmark('Supper Meeting', '9202')]);
    const out = await getLocalBookmarkedLocalityInformation('252', twoOfEach());
    expect(flags(out.LocalitySubdivisionsList)).toEqual([true, false]);
  });

  it('OneSchool Global (:803-860): the schools, and the stores with a second read of the same category', async () => {
    await synchBookmarksC2([bookmark('OneSchool Global', '22'), bookmark('OneSchool Global', '31')]);
    const out = await getLocalBookmarkedLocalityInformation('252', twoOfEach());
    expect(flags(out.LocalitySchools)).toEqual([false, true]);
    expect(flags(out.LocalityStores)).toEqual([true, false]);
  });

  it('rows of another category, or of another user, are ignored', async () => {
    await synchBookmarksC2([
      bookmark('Household', '252'), // not a Locality row
      bookmark('Interchange', '253'), // interchanges match through Locality rows only
      bookmark('Household', '9202'), // not a Supper Meeting row
      bookmark('Member', '21'),
      { ...bookmark('Household', '11'), UserId: Number(MOCK_USER_ID) + 1 },
    ]);
    const out = await getLocalBookmarkedLocalityInformation('252', twoOfEach());
    expect(out.IsBookmarked).toBe(false);
    expect(flags(out.LocalityInterchanges)).toEqual([false, false]);
    expect(flags(out.LocalityHouseholdsList)).toEqual([false, false]);
    expect(flags(out.LocalitySubdivisionsList)).toEqual([false, false]);
    expect(flags(out.LocalitySchools)).toEqual([false, false]);
    expect(flags(out.LocalityStores)).toEqual([false, false]);
  });

  it('In_LocalityInformation is cloned (:673): the input keeps its values', async () => {
    const info = twoOfEach();
    info.IsBookmarked = true; // overwritten on the copy: the locality is not bookmarked
    info.LocalityHouseholdsList.List = items(info.LocalityHouseholdsList, [
      { Id: '11', IsBookmarked: true },
      { Id: '12', IsBookmarked: true },
    ]);
    await synchBookmarksC2([bookmark('Household', '12')]);
    const out = await getLocalBookmarkedLocalityInformation('252', info);
    expect(out).not.toBe(info);
    expect(out.IsBookmarked).toBe(false);
    expect(flags(out.LocalityHouseholdsList)).toEqual([false, true]);
    expect(info.IsBookmarked).toBe(true);
    expect(flags(info.LocalityHouseholdsList)).toEqual([true, true]);
  });

  it("GetLocality: the cached locality with the device's bookmarks of each read, the cache left untouched", async () => {
    await synchBookmarksC2([bookmark('Locality', '252'), bookmark('Supper Meeting', '9202')]);
    const first = await getLocality('252');
    expect(first.IsBookmarked).toBe(true);
    expect(flags(first.LocalitySubdivisionsList)).toEqual([false, true, false]);
    await synchBookmarksC2([]);
    const second = await getLocality('252');
    expect(second.IsBookmarked).toBe(false);
    expect(flags(second.LocalitySubdivisionsList)).toEqual([false, false, false]);
    expect((window.__osCalls ?? []).filter((c) => c.action === 'ActionGetLocalityInformation')).toHaveLength(1);
  });
});
