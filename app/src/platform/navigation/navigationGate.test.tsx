import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test } from 'vitest';
import { preventNavigation } from '@/shared/NavigationHandler/lib/actions';
import { NavigationConfirmationDialog } from '@/shared/NavigationHandler/NavigationConfirmationDialog';
import { allowUpcomingNavigation } from './navigationGate';
import { useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';

/* The gate dispatches the NavigationHandler `dx-before-navigation` event before every navigation (NavigationEventsJS
   dispatchBeforeNavigation, NH:858-878, onBeforeNavigate NH:902-944): cancelable, detail location / replace / resume;
   resume = AllowUpcomingNavigation, then the navigation again. */

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
      <NavigationConfirmationDialog
        onNavigation={preventNavigation}
        dialogHeader="Leave?"
        buttonLabelConfirm="Yes"
        buttonLabelDismiss="No"
      />
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
