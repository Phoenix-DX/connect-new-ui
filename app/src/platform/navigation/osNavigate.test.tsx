import { useLayoutEffect } from 'react';
import { act, renderHook, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { OutOfContextException } from '@/legacy/os/os-exceptions';
import { useFlowState } from './flowState';
import {
  dateTimeParam,
  generateScreenURL,
  osNavigateTo,
  replaceOnUpcomingNavigation,
  resetReplaceOnUpcomingNavigation,
  screenUrl,
  useNavigateBack,
  useOsNavigate,
  type NavigationTarget,
  type OsParams,
  type ScreenCheck,
} from './osNavigate';
import { screenOf } from './paths';
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

/* R4 (item8-w23-errorpage.md §1): a navigation from a flow of a screen that is no longer active throws
   OutOfContextException (navigateTo → validateContext, Navigation module W221750; isOutOfContext W518580). */
describe('the context check of a navigation (R4, item 8 §2.4)', () => {
  const from: { go?: ReturnType<typeof useOsNavigate>; back?: ReturnType<typeof useNavigateBack> } = {};
  function ScreenA() {
    const go = useOsNavigate();
    const back = useNavigateBack();
    useLayoutEffect(() => {
      from.go = go;
      from.back = back;
    });
    return <p>screen A</p>;
  }
  const screens = {
    '/UBTConnect/A': <ScreenA />,
    '/UBTConnect/B': <p>screen B</p>,
    '/UBTConnect/C': <p>screen C</p>,
  };

  test('5. from the current entry the route changes; from a left entry: OutOfContextException, no route change', async () => {
    const { at } = renderRoutes(screens, '/UBTConnect/A');
    const { go, back } = from;

    act(() => {
      go?.('/UBTConnect/B');
    });
    expect(await screen.findByText('screen B')).toBeInTheDocument();

    expect(() => {
      go?.('/UBTConnect/C');
    }).toThrow(OutOfContextException);
    expect(() => {
      back?.();
    }).toThrow(OutOfContextException);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(at()).toBe('/UBTConnect/B');
    expect(screen.getByText('screen B')).toBeInTheDocument();
  });

  test('5. without a NavigationHost (no entry), the navigation goes through', async () => {
    const { result } = renderHook(() => ({ go: useOsNavigate(), location: useLocation() }), {
      wrapper: ({ children }) => <MemoryRouter initialEntries={['/UBTConnect/A']}>{children}</MemoryRouter>,
    });
    const { go } = result.current;

    act(() => {
      go('/UBTConnect/B');
    });
    await waitFor(() => {
      expect(result.current.location.pathname).toBe('/UBTConnect/B');
    });
    act(() => {
      go('/UBTConnect/C'); // the first function, after the location changed
    });
    await waitFor(() => {
      expect(result.current.location.pathname).toBe('/UBTConnect/C');
    });
  });

  /* Risk 1 of the design: NavigationHost records the entry in a layout effect, and a beforePaint OnReady runs in a
     layout effect too. */
  test.each([{ beforePaint: true }, { beforePaint: false }])(
    '6. an OnReady (beforePaint $beforePaint) that navigates at once on the first screen goes through',
    async ({ beforePaint }) => {
      function Redirecting() {
        const go = useOsNavigate();
        useFlowState({
          viewName: 'Redirecting',
          reducer: (state: null) => state,
          initial: null,
          parameters: {},
          beforePaint,
          onReady: () => {
            go('/UBTConnect/B', {}, { replace: true });
            return Promise.resolve();
          },
        });
        return <p>redirecting</p>;
      }
      const { at } = renderRoutes(
        { '/UBTConnect/R': <Redirecting />, '/UBTConnect/B': <p>screen B</p> },
        '/UBTConnect/R',
      );

      expect(await screen.findByText('screen B')).toBeInTheDocument();
      expect(at()).toBe('/UBTConnect/B');
    },
  );
});

/* D3 of item 9 (migration/clarify/review/item9-solution.md §4.3): TST's navigateTo treats a URL that matches no screen
   URL of the home module as external and changes the window location (N14: urlBelongsToCurrentApplication W229508,
   changeWindowLocation W224025). Observed P6: a full page load, then the server page "404 - File or directory not
   found.". The route table comes from the NavigationHost (AppFrame: app/screens.ts showsScreen). */
describe('a path that no screen has: a full page load (D3; N14, P6)', () => {
  const isScreen: ScreenCheck = ({ pathname }) => screenOf(pathname) !== null;
  let location: { href: string; assign: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    location = { href: 'http://localhost:3000/UBTConnect/HomeFeed', assign: vi.fn() };
    vi.stubGlobal('location', location);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const appRoutes = {
    '/UBTConnect/HomeFeed': (
      <>
        <button type="button" onClick={replaceOnUpcomingNavigation}>
          mark replace
        </button>
        <Go to="/UBTConnect/NoSuchScreen" params={{ a: 1 }} />
        <Go to="/UBTConnect/OldScreen" />
        <Go to="/UBTConnect/Menu?From=Home" />
        <Go to="/UBTConnect/Menu" />
      </>
    ),
    '/UBTConnect/Menu': <p>menu</p>,
  };

  test('useOsNavigate: location.assign(screen URL); the router location, the history and the replace mark stay', async () => {
    const { router, at } = renderRoutes(appRoutes, '/UBTConnect/HomeFeed', undefined, undefined, isScreen);
    await userEvent.click(screen.getByText('mark replace'));
    await userEvent.click(screen.getByText('go /UBTConnect/NoSuchScreen'));
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/NoSuchScreen?a=1');
    expect(at()).toBe('/UBTConnect/HomeFeed');
    expect(router.state.historyAction).toBe('POP'); // the first entry: no push, no replace

    // a known path: the router navigates, no full page load; the replace mark was not used by the unknown path
    await userEvent.click(screen.getByText('go /UBTConnect/Menu'));
    expect(at()).toBe('/UBTConnect/Menu');
    expect(router.state.historyAction).toBe('REPLACE');
    expect(location.assign).toHaveBeenCalledOnce();
  });

  test('a query in the path does not make a screen path unknown', async () => {
    const { at } = renderRoutes(appRoutes, '/UBTConnect/HomeFeed', undefined, undefined, isScreen);
    await userEvent.click(screen.getByText('go /UBTConnect/Menu?From=Home'));
    expect(at()).toBe('/UBTConnect/Menu?From=Home');
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('osNavigateTo through the host navigate does the same', async () => {
    const { at } = renderRoutes(appRoutes, '/UBTConnect/HomeFeed', undefined, undefined, isScreen);
    act(() => {
      osNavigateTo('/UBTConnect/NoSuchScreen', { a: 1 }, { transition: TransitionAnimation.Default });
    });
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/NoSuchScreen?a=1');
    act(() => {
      osNavigateTo('/UBTConnect/Menu');
    });
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Menu');
    });
    expect(location.assign).toHaveBeenCalledOnce();
  });

  test('the flag redirect runs first: a redirected target that is a screen navigates in the router', async () => {
    const redirect = (target: NavigationTarget): NavigationTarget =>
      target.path === '/UBTConnect/OldScreen' ? { path: '/UBTConnect/Menu', params: target.params } : target;
    const { at } = renderRoutes(appRoutes, '/UBTConnect/HomeFeed', undefined, redirect, isScreen);
    await userEvent.click(screen.getByText('go /UBTConnect/OldScreen'));
    expect(at()).toBe('/UBTConnect/Menu');
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('the R4 check comes first: from a left screen, OutOfContextException and no full page load', async () => {
    let go: ReturnType<typeof useOsNavigate> | undefined;
    function Home() {
      const navigate = useOsNavigate();
      useLayoutEffect(() => {
        go = navigate;
      });
      return <p>home</p>;
    }
    const screens = { '/UBTConnect/HomeFeed': <Home />, '/UBTConnect/Menu': <p>menu</p> };
    renderRoutes(screens, '/UBTConnect/HomeFeed', undefined, undefined, isScreen);
    const fromHome = go;
    act(() => {
      fromHome?.('/UBTConnect/Menu');
    });
    expect(await screen.findByText('menu')).toBeInTheDocument();
    expect(() => {
      fromHome?.('/UBTConnect/NoSuchScreen');
    }).toThrow(OutOfContextException);
    expect(location.assign).not.toHaveBeenCalled();
  });

  test('without the route table (a block rendered alone): the router gets every path, as before', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined); // React Router: no route matches
    const { at } = renderRoutes(appRoutes, '/UBTConnect/HomeFeed');
    await userEvent.click(screen.getByText('go /UBTConnect/NoSuchScreen'));
    expect(at()).toBe('/UBTConnect/NoSuchScreen?a=1');
    expect(location.assign).not.toHaveBeenCalled();
  });
});
