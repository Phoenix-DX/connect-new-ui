import type { ReactNode } from 'react';
import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider, useNavigate, type Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { preventNavigation } from '@/lib/navigationEvent';
import { NavigationDialog } from '@/components/ui/Dialog';
import { addBackHandler, BACK_PRIORITY, type BackHandler } from './backQueue';
import { useBackHandler } from './hooks';
import { allowUpcomingNavigation } from './navigationGate';
import { NavigationHost } from './NavigationHost';
import { useNavigateBack, useOsNavigate } from './osNavigate';
import { ScreenTransitionGroup, type ScreenTransitionGroupProps } from './ScreenTransitionGroup';
import { transitionState } from './screenTransition';
import { renderRoutes, resetNavigation } from './testRouter';

/* The gate dispatches the NavigationHandler `dx-before-navigation` event before every navigation (NavigationEventsJS
   dispatchBeforeNavigation, NH:858-878, onBeforeNavigate NH:902-944): cancelable, detail location / replace / resume;
   resume = AllowUpcomingNavigation, then the navigation again. A history navigation is blocked while the app navigates
   away from a screen, or while the gate runs (NH:903-914). */

const events: CustomEvent[] = [];
const record = (event: Event) => {
  events.push(event as CustomEvent);
};

beforeEach(() => {
  resetNavigation();
  events.length = 0;
  window.addEventListener('dx-before-navigation', record);
  window.addEventListener('dx-navigation', record);
});
afterEach(() => {
  window.removeEventListener('dx-before-navigation', record);
  window.removeEventListener('dx-navigation', record);
});

function Other() {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go('/UBTConnect/Form');
      }}
    >
      to form
    </button>
  );
}

/** A screen that asks before leaving: its handler prevents every navigation, the dialog then shows. */
function Form() {
  const go = useOsNavigate();
  return (
    <div data-testid="form">
      <button
        type="button"
        onClick={() => {
          go('/UBTConnect/Other');
        }}
      >
        to other
      </button>
      <NavigationDialog onNavigation={preventNavigation} header="Leave?" confirmLabel="Yes" dismissLabel="No" />
    </div>
  );
}

const routes = { '/UBTConnect/Other': <Other />, '/UBTConnect/Form': <Form /> };

test('a forward navigation dispatches the cancelable event, then dx-navigation', async () => {
  const { at } = renderRoutes(routes, '/UBTConnect/Other');
  await userEvent.click(screen.getByText('to form'));

  expect(at()).toBe('/UBTConnect/Form');
  const before = events.find((e) => e.type === 'dx-before-navigation');
  expect(before?.cancelable).toBe(true);
  expect((before?.detail as { location: { pathname: string } }).location.pathname).toBe('/UBTConnect/Form');
  expect((before?.detail as { replace: boolean }).replace).toBe(false);
  expect(typeof (before?.detail as { resume: unknown }).resume).toBe('function');
  expect(events.map((e) => e.type)).toEqual(['dx-before-navigation', 'dx-navigation']);
});

test('forward, prevented: the dialog opens; No stays, Yes resumes the navigation', async () => {
  const { at } = renderRoutes(routes, '/UBTConnect/Form');

  await userEvent.click(screen.getByText('to other'));
  expect(at()).toBe('/UBTConnect/Form');
  expect(screen.getByRole('dialog').textContent).toContain('Leave?');

  await userEvent.click(screen.getByText('No'));
  expect(at()).toBe('/UBTConnect/Form');
  expect(screen.queryByRole('dialog')).toBeNull();

  await userEvent.click(screen.getByText('to other'));
  await userEvent.click(screen.getByText('Yes'));
  expect(at()).toBe('/UBTConnect/Other');
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('back, prevented: the dialog opens; No stays, Yes goes back', async () => {
  const { router, at } = renderRoutes(routes, '/UBTConnect/Other');
  await userEvent.click(screen.getByText('to form'));
  expect(at()).toBe('/UBTConnect/Form');

  await act(() => router.navigate(-1));
  expect(at()).toBe('/UBTConnect/Form');
  expect(screen.getByRole('dialog')).not.toBeNull();
  await userEvent.click(screen.getByText('No'));
  expect(at()).toBe('/UBTConnect/Form');

  await act(() => router.navigate(-1));
  await userEvent.click(screen.getByText('Yes'));
  expect(at()).toBe('/UBTConnect/Other');
});

test('AllowUpcomingNavigation: the next navigation runs without the event', async () => {
  const { at } = renderRoutes(routes, '/UBTConnect/Form');
  allowUpcomingNavigation();
  await userEvent.click(screen.getByText('to other'));

  expect(at()).toBe('/UBTConnect/Other');
  expect(events.map((e) => e.type)).toEqual(['dx-navigation']);
});

/** A screen whose back handler navigates back itself and does not prevent the back navigation, as HostSurvey does on
    Unable to Host (OnHandle_BackNavigation → NavigateTo_Back, no PreventNavigation). */
function BacksItself({ onBack, later = false }: { onBack: () => void; later?: boolean }) {
  const back = useNavigateBack();
  const navigate = useNavigate();
  useBackHandler(0, () => {
    onBack();
    // later: a browser delivers the history back after the navigation that ran the handler (popstate). The context
    // check of back() runs at the call, while the screen is still the current one (R4, item 8 §2.4); only the history
    // back arrives later, so the late step is the router's own back.
    if (later)
      setTimeout(() => {
        void navigate(-1);
      }, 0);
    else back();
  });
  return <p>backs itself</p>;
}

test('a back handler that navigates back without preventing it: exactly one back, no recursion', async () => {
  const onBack = vi.fn();
  const { router, at } = renderRoutes(
    {
      '/UBTConnect/HomeFeed': <p>home</p>,
      '/UBTConnect/EventDetail': <p>event</p>,
      '/UBTConnect/HostSurvey': <BacksItself onBack={onBack} />,
    },
    '/UBTConnect/HomeFeed',
  );
  await act(() => router.navigate('/UBTConnect/EventDetail'));
  await act(() => router.navigate('/UBTConnect/HostSurvey'));
  events.length = 0;

  await act(() => router.navigate(-1));

  expect(at()).toBe('/UBTConnect/EventDetail');
  expect(onBack).toHaveBeenCalledTimes(1);
  expect(events.map((e) => e.type)).toEqual(['dx-before-navigation', 'dx-navigation']);
  // the history and the router agree: the next back is a normal one
  await act(() => router.navigate(-1));
  expect(at()).toBe('/UBTConnect/HomeFeed');
});

test('no active screen: a history navigation is blocked while the app frame shows no screen container', async () => {
  const { router, at } = renderRoutes({ '/A': <p>A</p>, '/B': <p>B</p> }, '/A');
  await act(() => router.navigate('/B'));
  const frame = document.body.appendChild(document.createElement('div'));
  frame.id = 'transitionContainer';
  try {
    await act(() => router.navigate(-1));
    expect(at()).toBe('/B');

    frame.append(Object.assign(document.createElement('div'), { className: 'screen-container' }));
    await act(() => router.navigate(-1));
    expect(at()).toBe('/A');
  } finally {
    frame.remove();
  }
});

describe('navigating away from a screen (NH:903-914), in the app frame', () => {
  const containers = () => [...document.querySelectorAll('#transitionContainer > .screen-container')];
  const SLIDE = transitionState('slide-from-right');

  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  /** NavigationHost and ScreenTransitionGroup in #transitionContainer, as AppFrame mounts them. */
  function renderFrame(
    screens: Record<string, ReactNode>,
    initialEntries = ['/A'],
    props: ScreenTransitionGroupProps = {},
  ) {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: (
            <div id="transitionContainer">
              <NavigationHost />
              <ScreenTransitionGroup {...props} />
            </div>
          ),
          children: Object.entries(screens).map(([path, element]) => ({ path, element })),
        },
      ],
      { initialEntries, initialIndex: initialEntries.length - 1 },
    );
    render(<RouterProvider router={router} />);
    const go = async (to: string, options: { replace?: boolean; state?: unknown } = { state: SLIDE }) => {
      await act(() => router.navigate(to, options));
    };
    const back = async () => {
      await act(() => router.navigate(-1));
    };
    const advance = async (ms: number) => {
      await act(() => vi.advanceTimersByTimeAsync(ms));
    };
    const at = () => router.state.location.pathname + router.state.location.search;
    return { router, go, back, advance, at };
  }

  const abc = { A: <p>A</p>, B: <p>B</p>, C: <p>C</p> };

  test('a back while the screen being left is in the document is blocked without the handlers; then it goes back', async () => {
    const handler = vi.fn<BackHandler>();
    addBackHandler(handler, BACK_PRIORITY.commonUi);
    const { go, back, advance, at } = renderFrame(abc);
    await go('/B');
    await advance(300);
    await go('/C');
    const [, b] = containers();
    events.length = 0;

    await back();
    expect(at()).toBe('/C');
    expect(handler).not.toHaveBeenCalled();
    expect(events).toEqual([]);

    await advance(299);
    await back();
    expect(at()).toBe('/C');
    await advance(1);
    expect(b?.isConnected).toBe(false);

    await back();
    expect(at()).toBe('/B');
    expect(handler).toHaveBeenCalledTimes(1);
    expect(events.map((e) => e.type)).toEqual(['dx-before-navigation', 'dx-navigation']);
  });

  test('a back handler that navigates back: one back, in memory-router and browser order', async () => {
    const onBack = vi.fn();
    const { go, back, advance, at } = renderFrame({
      ...abc,
      S: <BacksItself onBack={onBack} />,
      L: <BacksItself onBack={onBack} later />,
    });
    await go('/B');
    await advance(300);
    await go('/S');
    await advance(300);
    await back();
    expect(at()).toBe('/B');
    await advance(300);

    // browser order: the handler's history back arrives after the back that ran it, while S is still leaving
    await go('/L');
    await advance(300);
    await back();
    expect(at()).toBe('/B');
    await advance(1);
    expect(at()).toBe('/B');
    await advance(300);
    expect(onBack).toHaveBeenCalledTimes(2);

    await back();
    expect(at()).toBe('/A');
  });

  test('the first back of the page goes back at once (initial entry, no navigation yet)', async () => {
    const { back, at } = renderFrame(abc, ['/A', '/B']);
    await back();
    expect(at()).toBe('/A');
  });

  test('replace, and a new entry of the same screen with other parameters: blocked until the old container left', async () => {
    const { go, back, advance, at } = renderFrame(abc);
    await go('/B');
    await advance(300);
    await go('/B?x=2');
    await back();
    expect(at()).toBe('/B?x=2');
    await advance(300);

    await go('/C', { replace: true, state: SLIDE });
    await back();
    expect(at()).toBe('/C');
    await advance(300);
    await back();
    expect(at()).toBe('/B');
  });

  test('no transition (timeout 0): blocked until the old container is removed', async () => {
    const { go, back, advance, at } = renderFrame(abc);
    await go('/B', { state: transitionState('') });
    await back();
    expect(at()).toBe('/B');
    await advance(0);
    await back();
    expect(at()).toBe('/A');
  });

  test('a screen still loading: the old screen stays and the back waits for the transition', async () => {
    let loaded: () => void = () => undefined;
    const pending = new Promise<void>((resolve) => {
      loaded = resolve;
    });
    const prepare = (location: Location) => (location.pathname === '/B' ? pending : null);
    const { go, back, advance, at } = renderFrame(abc, ['/A'], { prepare });
    await go('/B');
    await back();
    expect(at()).toBe('/B');

    await act(async () => {
      loaded();
      await pending;
    });
    await advance(300);
    await back();
    expect(at()).toBe('/A');
  });

  test('AllowUpcomingNavigation: a blocked back leaves it for the next navigation', async () => {
    const handler = vi.fn<BackHandler>();
    addBackHandler(handler, BACK_PRIORITY.commonUi);
    const { go, back, advance, at } = renderFrame(abc);
    await go('/B');
    allowUpcomingNavigation();
    events.length = 0;
    await back();
    expect(at()).toBe('/B');
    await advance(300);

    await back();
    expect(at()).toBe('/A');
    expect(handler).not.toHaveBeenCalled();
    expect(events.map((e) => e.type)).toEqual(['dx-navigation']);
  });
});
