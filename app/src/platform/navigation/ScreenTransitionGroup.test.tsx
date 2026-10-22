import { act, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, useLocation, type Location } from 'react-router';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { onApplicationReady_BottomBarSlider } from '@/shared/UBTConnectLibrary/lib/actions';
import { resetScreenTransition, setTransitionOverride, transitionState } from './screenTransition';
import { ScreenTransitionGroup, type ScreenTransitionGroupProps } from './ScreenTransitionGroup';
import { onceScreenTransitionEnd, resetTransitionEvents, type NavigationTransitionDetail } from './transitionEvents';

/* F18: the runtime TransitionGroup port (OutSystemsReactView.js Root render; NavigationHandler.controller.js:1336-1438). */

type Recorded = [string, NavigationTransitionDetail, string[]];
let events: Recorded[] = [];
const containers = () => [...document.querySelectorAll('#transitionContainer > .screen-container')];
const record = (evt: Event) => {
  const { detail } = evt as CustomEvent<NavigationTransitionDetail>;
  // the classes of every container at the moment of the event
  events.push([evt.type.replace('dx-navigation-transition-', ''), detail, containers().map((c) => c.className)]);
};

beforeEach(() => {
  vi.useFakeTimers();
  resetScreenTransition();
  resetTransitionEvents();
  events = [];
  window.addEventListener('dx-navigation-transition-start', record);
  window.addEventListener('dx-navigation-transition-end', record);
});
afterEach(() => {
  window.removeEventListener('dx-navigation-transition-start', record);
  window.removeEventListener('dx-navigation-transition-end', record);
  vi.useRealTimers();
});

function Screen({ name, activeItem }: { name: string; activeItem?: number }) {
  const { pathname } = useLocation();
  return (
    <div data-screen={name}>
      <span data-testid={`path-${name}`}>{pathname}</span>
      {activeItem !== undefined && (
        <div className="bottom-bar">
          <div className="list">
            {[0, 1, 2, 3, 4].map((i) => (
              <a key={i} className={i === activeItem ? 'active' : ''} href="#">
                {i}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function setup(path = '/A', props: ScreenTransitionGroupProps = {}) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <div id="transitionContainer">
            <ScreenTransitionGroup {...props} />
          </div>
        ),
        children: [
          { path: 'A', element: <Screen name="A" activeItem={0} /> },
          { path: 'B', element: <Screen name="B" activeItem={4} /> },
          { path: 'C', element: <Screen name="C" activeItem={2} /> },
          { path: 'X', element: <p>redirecting</p> },
        ],
      },
    ],
    { initialEntries: [path] },
  );
  const view = render(<RouterProvider router={router} />);
  const go = async (to: string | number, transition?: string) => {
    await act(async () => {
      await (typeof to === 'number'
        ? router.navigate(to)
        : router.navigate(to, transition === undefined ? {} : { state: transitionState(transition) }));
    });
  };
  const advance = async (ms: number) => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(ms);
    });
  };
  return { router, go, advance, ...view };
}

const screenOf = (el: Element | ChildNode | null | undefined) =>
  (el as Element | null)?.querySelector('[data-screen]')?.getAttribute('data-screen');

test('first screen: one container, active-screen screen-container, no transition class and no event', () => {
  setup();
  expect(containers().map((c) => c.className)).toEqual(['active-screen screen-container']);
  expect(events).toEqual([]);
});

test('push: enter/leave class sequence, start after -enter-active, end before the old container goes', async () => {
  const { go, advance } = setup();
  const a = containers()[0];
  await go('/B', 'slide-from-right');
  const [b, old] = containers();
  expect(old).toBe(a);
  expect(screenOf(b)).toBe('B');
  // start: the new container already has -enter-active, the old one -leave but not yet -leave-active
  expect(events).toEqual([
    [
      'start',
      { from: a, to: b, duration: 300 },
      [
        'active-screen screen-container slide-from-right-enter slide-from-right-enter-active',
        'screen-container slide-from-right-leave',
      ],
    ],
  ]);
  expect(containers().map((c) => c.className)).toEqual([
    'active-screen screen-container slide-from-right-enter slide-from-right-enter-active',
    'screen-container slide-from-right-leave slide-from-right-leave-active',
  ]);
  const ended = vi.fn();
  onceScreenTransitionEnd(ended);
  await advance(299);
  expect(containers()).toHaveLength(2);
  expect(events).toHaveLength(1);
  await advance(1);
  // end: from the old container to the new one, while both are in the document; the new one is entered first
  expect(events[1]).toEqual([
    'end',
    { from: a, to: b, duration: 300 },
    [
      'active-screen screen-container slide-from-right-enter-done',
      'screen-container slide-from-right-leave slide-from-right-leave-active',
    ],
  ]);
  expect(containers().map((c) => c.className)).toEqual(['active-screen screen-container slide-from-right-enter-done']);
  expect(a?.isConnected).toBe(false);
  expect(a?.className).toBe('screen-container slide-from-right-leave-done');
  await advance(1); // Root.onTransitionEnded: in a setTimeout
  expect(ended).toHaveBeenCalledTimes(1);
});

test('the leaving screen keeps its own location until it has left', async () => {
  const { go, advance, getByTestId } = setup();
  await go('/B', 'fade');
  expect(getByTestId('path-A').textContent).toBe('/A');
  expect(getByTestId('path-B').textContent).toBe('/B');
  await advance(300);
  expect(document.querySelector('[data-testid="path-A"]')).toBeNull();
});

test('back (POP) reverses the transition the left screen was entered with; the enter-done class is replaced', async () => {
  const { go, advance } = setup();
  await go('/B', 'slide-from-right');
  await advance(300);
  const b = containers()[0];
  await go(-1);
  const [a, left] = containers();
  expect(left).toBe(b);
  expect(screenOf(a)).toBe('A');
  expect(a?.className).toBe('active-screen screen-container slide-from-left-enter slide-from-left-enter-active');
  // slide-from-right-enter-done (applied when B entered) is removed by onExit
  expect(b?.className).toBe('screen-container slide-from-left-leave slide-from-left-leave-active');
  await advance(300);
  expect(containers().map((c) => c.className)).toEqual(['active-screen screen-container slide-from-left-enter-done']);
});

test('no transition (None, or a back with an override): "-enter" classes, timeout 0, events with duration 0', async () => {
  const { go, advance } = setup();
  await go('/B', '');
  expect(containers().map((c) => c.className)).toEqual([
    'active-screen screen-container -enter -enter-active',
    'screen-container -leave -leave-active',
  ]);
  expect(events[0]?.[1].duration).toBe(0);
  await advance(0);
  expect(containers().map((c) => c.className)).toEqual(['active-screen screen-container -enter-done']);
  expect(events.map((e) => e[0])).toEqual(['start', 'end']);
  // navigateBack(createTransition(None)): the override replaces the reversed transition
  setTransitionOverride('');
  await go(-1);
  expect(containers()[0]?.className).toBe('active-screen screen-container -enter -enter-active');
});

test('a navigation during a transition: the newest container first, the older ones after it in order', async () => {
  const { go, advance } = setup();
  await go('/B', 'slide-from-right');
  await advance(100);
  await go('/C', 'slide-from-right');
  expect(containers().map(screenOf)).toEqual(['C', 'B', 'A']);
  // B was still entering: its enter classes are dropped for the new leave classes
  expect(containers()[1]?.className).toBe('screen-container slide-from-right-leave slide-from-right-leave-active');
  await advance(200);
  expect(containers().map(screenOf)).toEqual(['C', 'B']);
  await advance(100);
  expect(containers().map(screenOf)).toEqual(['C']);
});

test('prepare: the transition starts once the screen can render; the old screen stays current until then', async () => {
  let resolve: () => void = () => undefined;
  const pending = new Promise<void>((r) => {
    resolve = r;
  });
  const prepare = vi.fn((location: Location) => (location.pathname === '/B' ? pending : null));
  const { go } = setup('/A', { prepare });
  await go('/B', 'slide-from-right');
  expect(containers().map(screenOf)).toEqual(['A']);
  expect(events).toEqual([]);
  await act(async () => {
    resolve();
    await pending;
  });
  expect(containers().map(screenOf)).toEqual(['B', 'A']);
  expect(events.map((e) => e[0])).toEqual(['start']);
});

test('a first location that shows no screen is replaced without a transition', async () => {
  const { go } = setup('/X', { isScreen: (l) => l.pathname !== '/X' });
  await go('/A');
  expect(containers().map((c) => c.className)).toEqual(['active-screen screen-container']);
  expect(events).toEqual([]);
});

test('bottom bar slider: start detail.to is the entering screen; moving left sets the reverse direction', async () => {
  const { go, advance } = setup();
  onApplicationReady_BottomBarSlider();
  const slider = document.querySelector<HTMLElement>('.dx-bottom-bar-slider');
  await go('/B', 'slide-from-right');
  const container = document.getElementById('transitionContainer');
  expect(slider?.style.getPropertyValue('--dx-bottom-bar-active-item')).toBe('4');
  expect(slider?.style.getPropertyValue('--dx-bottom-bar-transition-duration')).toBe('300ms');
  expect(container?.classList.contains('dx-bottom-bar-slider-reverse-direction')).toBe(false);
  await advance(300);
  await go('/C', 'slide-from-right');
  expect(slider?.style.getPropertyValue('--dx-bottom-bar-active-item')).toBe('2');
  expect(container?.classList.contains('dx-bottom-bar-slider-reverse-direction')).toBe(true);
  // the slider stays after the screen containers (`.screen-container.slide-from-*-enter-active ~ .dx-bottom-bar-slider`)
  expect(container?.lastElementChild).toBe(slider);
});
