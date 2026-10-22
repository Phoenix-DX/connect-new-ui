import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test } from 'vitest';
import { useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';
import type { NavigationTransitionDetail } from './transitionEvents';

type Recorded = [string, NavigationTransitionDetail];
let events: Recorded[] = [];
const record = (evt: Event) => {
  events.push([evt.type, (evt as CustomEvent<NavigationTransitionDetail>).detail]);
};

beforeEach(() => {
  resetNavigation();
  events = [];
  window.addEventListener('dx-navigation-transition-start', record);
  window.addEventListener('dx-navigation-transition-end', record);
});
afterEach(() => {
  window.removeEventListener('dx-navigation-transition-start', record);
  window.removeEventListener('dx-navigation-transition-end', record);
  document.getElementById('transitionContainer')?.remove();
});

function Home() {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go('/UBTConnect/Next');
      }}
    >
      next
    </button>
  );
}

test('first screen: start then end, from null to #transitionContainer.firstChild, duration 0 (NH:1461-1484)', async () => {
  const container = document.createElement('div');
  container.id = 'transitionContainer';
  const screenContainer = document.createElement('div');
  screenContainer.className = 'screen-container';
  container.appendChild(screenContainer);
  document.body.appendChild(container);
  renderRoutes({ '/UBTConnect/Home': <Home /> }, '/UBTConnect/Home');
  await act(async () => {
    await Promise.resolve();
  });
  expect(events).toEqual([
    ['dx-navigation-transition-start', { from: null, to: screenContainer, duration: 0 }],
    ['dx-navigation-transition-end', { from: null, to: screenContainer, duration: 0 }],
  ]);
});

test('a later screen raises nothing from ScreenFrame: its container raises the pair (ScreenTransitionGroup)', async () => {
  const container = document.createElement('div');
  container.id = 'transitionContainer';
  const screenContainer = document.createElement('div');
  screenContainer.className = 'screen-container';
  container.appendChild(screenContainer);
  document.body.appendChild(container);
  renderRoutes({ '/UBTConnect/Home': <Home />, '/UBTConnect/Next': <p>next screen</p> }, '/UBTConnect/Home');
  await act(async () => {
    await Promise.resolve();
  });
  expect(events.map(([type]) => type)).toEqual(['dx-navigation-transition-start', 'dx-navigation-transition-end']);
  events = [];
  await userEvent.click(screen.getByRole('button', { name: 'next' }));
  await screen.findByText('next screen');
  await act(async () => {
    await new Promise((r) => setTimeout(r, 0));
  });
  expect(events).toEqual([]);
});
