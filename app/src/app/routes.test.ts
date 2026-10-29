import { afterEach, describe, expect, test } from 'vitest';
import { setFlags } from '@/test/testSupport';
import { ROUTES as GENERATED_ROUTES } from './routes.generated';
import { NO_ROUTE_META, ROUTES, flagRedirectTarget, ignoresLockScreen, routeMetaOf, routeOf } from './routes';

test('the route table is the generated route list, in its order, each route with its meta', () => {
  expect(ROUTES).toMatchObject(GENERATED_ROUTES); // same length, each route keeps its generated fields
  expect(ROUTES.map((route) => route.path)).toEqual(GENERATED_ROUTES.map((route) => route.path));
});

test('access anonymous: the 9 screens without checkRegistered (shell-facts U1); every other route is member', () => {
  const anonymous = ROUTES.filter((route) => route.meta.access === 'anonymous').map((route) => route.screen);
  expect(anonymous.sort()).toEqual(
    [
      'Splash',
      'Login',
      'InvalidPermissions',
      'PINBiometricsMenu',
      'ContactUsMenu',
      'ContactUsDetails',
      'Locality_Details',
      'MessageList',
      'MessageDetail',
    ].sort(),
  );
});

test('lock ignore: the login flow and Splash (spec 9 "CommonUI gate"; CR-Splash-1); every other route enforces it', () => {
  const ignoring = ROUTES.filter((route) => route.meta.lock === 'ignore').map((route) => route.screen);
  expect(ignoring.sort()).toEqual(['Login', 'PINRegister', 'PINUnlock', 'Splash']);
});

test('the meta of a URL path: the screen it shows (module root: the default screen), else NO_ROUTE_META', () => {
  expect(routeOf('/UBTConnect/')?.screen).toBe('HomeFeed');
  expect(routeMetaOf('/UBTConnect/')).toEqual({ access: 'member', lock: 'enforce' });
  expect(routeMetaOf('/ubtconnect/login/')).toEqual({ access: 'anonymous', lock: 'ignore' });
  expect(routeMetaOf('/UBTConnect/PINUnlock')).toEqual({ access: 'member', lock: 'ignore' });
  expect(routeMetaOf('/UBTConnect/ContactUsMenu')).toEqual({ access: 'anonymous', lock: 'enforce' });
  expect(routeOf('/x')).toBeNull();
  expect(routeMetaOf('/x')).toBe(NO_ROUTE_META);
  expect(NO_ROUTE_META).toEqual({ access: 'anonymous', lock: 'enforce' });
});

test('ignoresLockScreen (LockHost): the screens with lock ignore only', () => {
  for (const screen of ['Login', 'PINUnlock', 'PINRegister', 'Splash'])
    expect(ignoresLockScreen(`/UBTConnect/${screen}`)).toBe(true);
  for (const path of ['/UBTConnect/Menu', '/UBTConnect/', '/UBTConnect/ContactUsMenu', '/x'])
    expect(ignoresLockScreen(path)).toBe(false);
});

describe('flag redirects (plan v2 §3.1 rule 2; knowledge/feature-flag-helpers.md)', () => {
  afterEach(() => {
    setFlags({});
  });

  const go = (path: string, params = {}) => flagRedirectTarget({ path, params });

  test('the routes whose screen a flag chooses have meta.flagRedirect; no other route has one', () => {
    const redirects = ROUTES.flatMap((route) =>
      route.meta.flagRedirect ? [[route.screen, route.meta.flagRedirect] as const] : [],
    );
    expect(Object.fromEntries(redirects)).toEqual({
      Notifications: { flag: 'C2NewNotifications', when: false, to: 'MessageList' },
      LDM_MyEvents_V2: { flag: 'C2NewLDM', when: false, to: 'LDM_MyEvents' },
      HouseholdCarousel: {
        flag: 'C2EnableCarousel',
        when: false,
        to: 'HouseholdDetails',
        inputs: { In_StartingHouseholdId: 'HouseholdId' },
      },
      SupperMeeting_Carousel: {
        flag: 'C2EnableCarousel',
        when: false,
        to: 'SupperMeeting_Details',
        inputs: { In_StartingSupperMeetingId: 'In_SubdivsionId' },
      },
    });
    expect(routeMetaOf('/UBTConnect/Notifications')).toEqual({
      access: 'member',
      lock: 'enforce',
      flagRedirect: { flag: 'C2NewNotifications', when: false, to: 'MessageList' },
    });
  });

  test('with the decided defaults: Notifications → MessageList; the others stay (Bookmarks has no redirect)', () => {
    expect(go('/UBTConnect/Notifications')).toEqual({ path: '/UBTConnect/MessageList', params: {} });
    expect(go('/UBTConnect/Bookmarks')).toEqual({ path: '/UBTConnect/Bookmarks', params: {} });
    expect(go('/UBTConnect/LDM_MyEvents_V2').path).toBe('/UBTConnect/LDM_MyEvents_V2');
    expect(go('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: '42' })).toEqual({
      path: '/UBTConnect/HouseholdCarousel',
      params: { In_StartingHouseholdId: '42' },
    });
    expect(go('/UBTConnect/Menu', { x: 1 })).toEqual({ path: '/UBTConnect/Menu', params: { x: 1 } });
    expect(go('/elsewhere')).toEqual({ path: '/elsewhere', params: {} });
  });

  test('the other flag values: the other screen, with its input names; Bookmarks stays for every flag', () => {
    setFlags({ C2NewNotifications: true, mobileDirectoryBookmarkNote: true, C2NewLDM: false, C2EnableCarousel: false });
    expect(go('/UBTConnect/Notifications').path).toBe('/UBTConnect/Notifications');
    expect(go('/UBTConnect/Bookmarks').path).toBe('/UBTConnect/Bookmarks');
    expect(go('/UBTConnect/LDM_MyEvents_V2').path).toBe('/UBTConnect/LDM_MyEvents');
    expect(go('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: '42' })).toEqual({
      path: '/UBTConnect/HouseholdDetails',
      params: { HouseholdId: '42' },
    });
    expect(go('/UBTConnect/SupperMeeting_Carousel', { In_StartingSupperMeetingId: '7' })).toEqual({
      path: '/UBTConnect/SupperMeeting_Details',
      params: { In_SubdivsionId: '7' },
    });
    setFlags({ C2NewBookmarks: true, mobileDirectoryBookmarkNote: true });
    expect(go('/UBTConnect/Bookmarks').path).toBe('/UBTConnect/Bookmarks');
  });
});
