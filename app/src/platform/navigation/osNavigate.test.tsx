import { act, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import {
  dateTimeParam,
  generateScreenURL,
  osNavigateTo,
  replaceOnUpcomingNavigation,
  resetReplaceOnUpcomingNavigation,
  screenUrl,
  useOsNavigate,
  type NavigationTarget,
  type OsParams,
} from './osNavigate';
import { DEFAULT_TRANSITION, TransitionAnimation, transitionState } from './screenTransition';
import { renderRoutes, resetNavigation } from './testRouter';

beforeEach(resetNavigation);

test('screen URLs keep the original parameter names; booleans are True/False, ids stay strings', () => {
  expect(screenUrl('/UBTConnect/Login', { In_IsFromInvalidPermissions: true })).toBe(
    '/UBTConnect/Login?In_IsFromInvalidPermissions=True',
  );
  expect(screenUrl('/UBTConnect/FeedItemDetail', { FeedItemId: '9007199254740993', Index: 2, Flag: false })).toBe(
    '/UBTConnect/FeedItemDetail?FeedItemId=9007199254740993&Index=2&Flag=False',
  );
  expect(screenUrl('/UBTConnect/Search', { Text: 'a b&c', Empty: null, Missing: undefined })).toBe(
    '/UBTConnect/Search?Text=a%20b%26c',
  );
  expect(screenUrl('/UBTConnect/HomeFeed')).toBe('/UBTConnect/HomeFeed');
});

function Go({ to, params, replace }: { to: string; params?: OsParams; replace?: boolean }) {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go(to, params, { replace });
      }}
    >
      go {to}
    </button>
  );
}

function Login() {
  return (
    <>
      <button type="button" onClick={replaceOnUpcomingNavigation}>
        mark replace
      </button>
      <button type="button" onClick={resetReplaceOnUpcomingNavigation}>
        reset replace
      </button>
      <Go to="/UBTConnect/HomeFeed" />
    </>
  );
}

const routes = {
  '/UBTConnect/Splash': <Go to="/UBTConnect/Login" params={{ In_IsFromResetPIN: true }} />,
  '/UBTConnect/Login': <Login />,
  '/UBTConnect/HomeFeed': <Go to="/UBTConnect/Menu" />,
  '/UBTConnect/Menu': <Go to="/UBTConnect/HomeFeed" replace />,
};

test('useOsNavigate pushes with the parameters, or replaces when asked', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/HomeFeed');
  await userEvent.click(screen.getByText('go /UBTConnect/Menu'));
  expect(at()).toBe('/UBTConnect/Menu');
  expect(router.state.historyAction).toBe('PUSH');

  await userEvent.click(screen.getByText('go /UBTConnect/HomeFeed'));
  expect(router.state.historyAction).toBe('REPLACE');
});

test('ReplaceOnUpcomingNavigation: the next navigation away from the marked screen replaces it, once', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/Splash');
  await userEvent.click(screen.getByText('go /UBTConnect/Login'));
  expect(at()).toBe('/UBTConnect/Login?In_IsFromResetPIN=True');

  await userEvent.click(screen.getByText('mark replace'));
  await userEvent.click(screen.getByText('go /UBTConnect/HomeFeed'));
  expect(router.state.historyAction).toBe('REPLACE');

  await userEvent.click(screen.getByText('go /UBTConnect/Menu'));
  expect(router.state.historyAction).toBe('PUSH');
});

test("a navigation goes where NavigationHost's redirect sends it (the flag redirects of the route table)", async () => {
  const redirect = (target: NavigationTarget): NavigationTarget =>
    target.path === '/UBTConnect/Menu'
      ? { path: '/UBTConnect/Login', params: { ...target.params, In_IsFromResetPIN: true } }
      : target;
  const { at, unmount } = renderRoutes(routes, '/UBTConnect/HomeFeed', undefined, redirect);
  await userEvent.click(screen.getByText('go /UBTConnect/Menu'));
  expect(at()).toBe('/UBTConnect/Login?In_IsFromResetPIN=True');
  unmount();
  // without a redirect (a block rendered alone) the navigation goes where it is sent
  const alone = renderRoutes(routes, '/UBTConnect/HomeFeed');
  await userEvent.click(screen.getByText('go /UBTConnect/Menu'));
  expect(alone.at()).toBe('/UBTConnect/Menu');
});

test('ResetReplaceOnUpcomingNavigation cancels the mark', async () => {
  const { router } = renderRoutes(routes, '/UBTConnect/Login');
  await userEvent.click(screen.getByText('mark replace'));
  await userEvent.click(screen.getByText('reset replace'));
  await userEvent.click(screen.getByText('go /UBTConnect/HomeFeed'));
  expect(router.state.historyAction).toBe('PUSH');
});

describe('osNavigateTo (OS.Navigation.navigateTo outside a component: the App_Common flow handler, G1)', () => {
  test("navigates as useOsNavigate through the NavigationHost's router: transition, push, ReplaceOnUpcomingNavigation", async () => {
    const { router, at } = renderRoutes(routes, '/UBTConnect/HomeFeed');
    act(() => {
      osNavigateTo(
        '/UBTConnect/Login',
        { In_IsFromInvalidPermissions: true },
        { transition: TransitionAnimation.Default },
      );
    });
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
    });
    expect(router.state.historyAction).toBe('PUSH');
    expect(router.state.location.state).toEqual(transitionState(DEFAULT_TRANSITION));

    await userEvent.click(screen.getByText('mark replace'));
    act(() => {
      osNavigateTo('/UBTConnect/Menu', undefined, { transition: TransitionAnimation.Fade });
    });
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Menu');
    });
    expect(router.state.historyAction).toBe('REPLACE');
    expect(router.state.location.state).toEqual(transitionState('fade'));
  });

  test("goes where NavigationHost's redirect sends it", async () => {
    const redirect = (target: NavigationTarget): NavigationTarget =>
      target.path === '/UBTConnect/Menu' ? { path: '/UBTConnect/Login', params: { In_IsFromResetPIN: true } } : target;
    const { at } = renderRoutes(routes, '/UBTConnect/HomeFeed', undefined, redirect);
    act(() => {
      osNavigateTo('/UBTConnect/Menu');
    });
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Login?In_IsFromResetPIN=True');
    });
  });

  test('without a NavigationHost (no router, or it unmounted): location.href = the screen URL (changeWindowLocation)', () => {
    const { unmount } = renderRoutes(routes, '/UBTConnect/HomeFeed');
    unmount();
    const location = { href: 'http://localhost:3000/UBTConnect/HomeFeed' };
    vi.stubGlobal('location', location);
    try {
      osNavigateTo(
        '/UBTConnect/Login',
        { In_IsFromInvalidPermissions: true },
        { transition: TransitionAnimation.Default },
      );
    } finally {
      vi.unstubAllGlobals();
    }
    expect(location.href).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
  });
});

describe('generateScreenURL (OS.Navigation, CR-LDM_EventDetail_V2-1)', () => {
  test('appends the encoded pairs after "?", even after an existing query; nothing without pairs', () => {
    expect(generateScreenURL('https://www.google.com/maps/dir/?api=1', { api: '1', query: 'Calle 1 & 2' })).toBe(
      'https://www.google.com/maps/dir/?api=1?api=1&query=Calle%201%20%26%202',
    );
    expect(generateScreenURL('geo:0,0', {})).toBe('geo:0,0');
  });
});

describe('dateTimeParam (ServerDataConverter.asString(DateTime), AssembleEvents Q2)', () => {
  test('a DateTime is its UTC ISO text with milliseconds; the null DateTime is 1900-01-01T00:00:00', () => {
    expect(dateTimeParam('2026-10-18T19:30:00')).toBe(new Date(2026, 9, 18, 19, 30, 0).toISOString());
    expect(dateTimeParam('2026-10-18T19:30:00')).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.000Z$/);
    expect(dateTimeParam('')).toBe('1900-01-01T00:00:00');
    expect(dateTimeParam('1900-01-01T00:00:00')).toBe('1900-01-01T00:00:00');
  });

  test('in a screen URL the colons are encoded, as generateScreenURL does', () => {
    const start = dateTimeParam('2026-10-18T19:30:00');
    expect(screenUrl('/UBTConnect/AssembleDetail', { Start: start, EventId: 'e1', SeriesId: 's1' })).toBe(
      `/UBTConnect/AssembleDetail?Start=${start.replaceAll(':', '%3A')}&EventId=e1&SeriesId=s1`,
    );
  });
});
