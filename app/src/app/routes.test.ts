import { expect, test } from 'vitest';
import { ROUTES as GENERATED_ROUTES } from './routes.generated';
import { NO_ROUTE_META, ROUTES, ignoresLockScreen, routeMetaOf, routeOf } from './routes';

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
