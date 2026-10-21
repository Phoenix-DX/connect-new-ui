import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test, vi } from 'vitest';
import { BACK_PRIORITY } from './backQueue';
import { DialogExitConfirmation } from './DialogExitConfirmation';
import { exitApp } from './exitConfirmation';
import { useBackHandler } from './hooks';
import { useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';
import { savedViewCount } from './viewCache';

beforeEach(resetNavigation);

/* HF dom:935-943, whitespace removed */
const CAPTURED_CLOSED =
  '<div class="OSBlockWidget" data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" id="$b11">' +
  '<div class="connect-dialog-popup" data-container="">' +
  '<div class="OSBlockWidget" data-block="ConfirmationDialogs.ExitConfirmationDialog" id="b11-$b1">' +
  '<div class="dx-confirmation-dialog dx-exit-confirmation-dialog" data-container="" id="b11-b1-Root">' +
  '<div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b11-b1-$b2"></div>' +
  '</div></div></div></div>';

function Menu() {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go('/UBTConnect/HomeFeed');
      }}
    >
      home
    </button>
  );
}

function HomeFeed({ modalOpen = false }: { modalOpen?: boolean }) {
  const go = useOsNavigate();
  useBackHandler(
    BACK_PRIORITY.modal,
    (event) => {
      event.preventDefault();
    },
    modalOpen,
  );
  return (
    <div data-testid="home">
      <button
        type="button"
        onClick={() => {
          go('/UBTConnect/Menu');
        }}
      >
        menu
      </button>
      <DialogExitConfirmation />
    </div>
  );
}

async function homeAfterMenu(modalOpen = false) {
  const app = renderRoutes(
    { '/UBTConnect/Menu': <Menu />, '/UBTConnect/HomeFeed': <HomeFeed modalOpen={modalOpen} /> },
    '/UBTConnect/Menu',
  );
  await userEvent.click(screen.getByText('home'));
  return app;
}

test('closed, the dialog renders the captured markup', async () => {
  await homeAfterMenu();
  expect(screen.getByTestId('home').innerHTML).toContain(CAPTURED_CLOSED);
  expect(document.querySelector('.portal-class')).toBeNull();
});

test('back on HomeFeed (Force) stays and shows "Leave App"; No closes it', async () => {
  const { router, at } = await homeAfterMenu();

  await act(() => router.navigate(-1));

  expect(at()).toBe('/UBTConnect/HomeFeed');
  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveClass('popup-dialog');
  expect(dialog.closest('.portal-class')).toHaveClass('connect-dialog-popup');
  expect(dialog.closest('.portal-class > div')).toHaveClass('dx-confirmation-dialog', 'dx-exit-confirmation-dialog');
  expect(screen.getByText('Leave App')).toHaveClass('ubt-custom-container', 'text-neutral-10', 'font-size-base');
  expect(screen.getByText('Are you sure you wish to leave the Connect app?')).toBeInTheDocument();
  expect(document.getElementById('b11-b1-$b1')).toHaveAttribute(
    'data-block',
    'NavigationHandler.PreventBackNavigation',
  );

  await userEvent.click(screen.getByText('No'));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(at()).toBe('/UBTConnect/HomeFeed');
});

test('Yes closes the dialog and calls window.close() on the web (U15)', async () => {
  const close = vi.spyOn(window, 'close').mockImplementation(() => undefined);
  const { router } = await homeAfterMenu();
  await act(() => router.navigate(-1));

  await userEvent.click(screen.getByText('Yes'));

  expect(close).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('back while the dialog is open acts as No', async () => {
  const { router, at } = await homeAfterMenu();
  await act(() => router.navigate(-1));

  await act(() => router.navigate(-1));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(at()).toBe('/UBTConnect/HomeFeed');
});

test('a handler of higher priority (open modal) handles the back first: no dialog', async () => {
  const { router } = await homeAfterMenu(true);
  await act(() => router.navigate(-1));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('mounting HomeFeed (its exit dialog) empties the view cache (U19)', async () => {
  await homeAfterMenu();
  expect(savedViewCount()).toBe(0); // Menu was saved when left, then cleared by the dialog's OnReady
});

test('exitApp uses Cordova navigator.app.exitApp when present', () => {
  const exit = vi.fn();
  const close = vi.spyOn(window, 'close').mockImplementation(() => undefined);
  Object.defineProperty(navigator, 'app', { configurable: true, value: { exitApp: exit } });
  exitApp();
  Reflect.deleteProperty(navigator, 'app');
  expect(exit).toHaveBeenCalledTimes(1);
  expect(close).not.toHaveBeenCalled();
});
