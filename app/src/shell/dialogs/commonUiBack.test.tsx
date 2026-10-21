import { act, screen } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest';
import { renderRoutes, resetNavigation } from '../navigation/testRouter';
import { getClientVar, setClientVar } from '../session';
import { freshPage } from '../testSupport';
import { useCommonUiBackHandler } from './commonUiBack';

beforeEach(() => {
  freshPage();
  resetNavigation();
});

/** A screen with its CommonUI back handler. */
function Screen({ name }: { name: string }) {
  useCommonUiBackHandler();
  return <p>{name}</p>;
}

// keys: each screen mounts its own CommonUI (CommonUiHost remounts it on every navigation)
const routes = {
  '/UBTConnect/Menu': <Screen key="Menu" name="Menu" />,
  '/UBTConnect/Notes': <Screen key="Notes" name="Notes" />,
  '/UBTConnect/Contacts': <Screen key="Contacts" name="Contacts" />,
  '/UBTConnect/HomeFeed': <p>HomeFeed</p>,
};
const tick = () => act(() => new Promise((resolve) => setTimeout(resolve, 0)));

test('IsNavigateToHomeOnBack: read once and cleared; back is prevented and goes to HomeFeed', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/Menu');
  act(() => {
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', true);
  });
  await act(() => router.navigate('/UBTConnect/Notes'));
  expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(false);
  await act(() => router.navigate(-1));
  await tick();
  expect(at()).toBe('/UBTConnect/HomeFeed');
});

test('a back that does not reach the first entry goes on', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/Menu');
  await act(() => router.navigate('/UBTConnect/Notes'));
  await act(() => router.navigate('/UBTConnect/Contacts'));
  await act(() => router.navigate(-1));
  await tick();
  expect(at()).toBe('/UBTConnect/Notes');
  expect(screen.getByText('Notes')).toBeInTheDocument();
});

test('a back reaching the first entry is prevented, then Action_RedirectHome goes to HomeFeed (0 ms timeout)', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/Menu');
  await act(() => router.navigate('/UBTConnect/Notes'));
  await act(() => router.navigate(-1)); // prevented: Menu is never shown
  await tick();
  expect(at()).toBe('/UBTConnect/HomeFeed');
  expect(screen.queryByText('Menu')).toBeNull();
  await act(() => router.navigate(-1));
  expect(at()).toBe('/UBTConnect/Notes'); // the redirect pushed HomeFeed after Notes
});
