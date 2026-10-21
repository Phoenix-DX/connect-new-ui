import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test, vi } from 'vitest';
import { addBackHandler, BACK_PRIORITY, createBackEvent, runBackHandlers, type BackHandler } from './backQueue';
import { useBackHandler, usePreventBackNavigation } from './hooks';
import { useNavigateBack, useOsNavigate } from './osNavigate';
import { renderRoutes, resetNavigation } from './testRouter';

beforeEach(resetNavigation);

const location = { pathname: '/', search: '', hash: '', state: null, key: 'k' };

test('handlers run by descending priority, same priority in order of adding, until one prevents', () => {
  const calls: string[] = [];
  const log =
    (name: string, prevent = false): BackHandler =>
    (event) => {
      calls.push(name);
      if (prevent) event.preventDefault();
    };
  addBackHandler(log('commonUi'), BACK_PRIORITY.commonUi);
  addBackHandler(log('drawer'), BACK_PRIORITY.drawer);
  addBackHandler(log('modal-1'), BACK_PRIORITY.modal);
  addBackHandler(log('modal-2', true), BACK_PRIORITY.modal);
  addBackHandler(log('exit'), BACK_PRIORITY.exitDialog);

  const prevented = runBackHandlers(createBackEvent(location, false, vi.fn()));

  expect(prevented).toBe(true);
  expect(calls).toEqual(['modal-1', 'modal-2']);
});

test('a removed handler no longer runs; nothing prevented lets the navigation go on', () => {
  const handler = vi.fn();
  const remove = addBackHandler(handler, BACK_PRIORITY.lockScreen);
  remove();
  expect(runBackHandlers(createBackEvent(location, true, vi.fn()))).toBe(false);
  expect(handler).not.toHaveBeenCalled();
});

function Home() {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        go('/UBTConnect/Menu');
      }}
    >
      open menu
    </button>
  );
}

function Menu({ prevent, onBack }: { prevent: boolean; onBack: BackHandler }) {
  const back = useNavigateBack();
  useBackHandler(BACK_PRIORITY.drawer, onBack);
  usePreventBackNavigation(prevent);
  return (
    <button
      type="button"
      onClick={() => {
        back();
      }}
    >
      menu back
    </button>
  );
}

function renderMenu(prevent: boolean, onBack: BackHandler = vi.fn()) {
  return renderRoutes(
    {
      '/UBTConnect/HomeFeed': <Home />,
      '/UBTConnect/Menu': <Menu prevent={prevent} onBack={onBack} />,
    },
    '/UBTConnect/HomeFeed',
  );
}

test('browser back runs the queue: a prevented back keeps the screen and skips lower handlers', async () => {
  const onBack = vi.fn();
  const { router, at } = renderMenu(true, onBack);
  await userEvent.click(screen.getByText('open menu'));
  expect(at()).toBe('/UBTConnect/Menu');

  await act(() => router.navigate(-1));

  expect(at()).toBe('/UBTConnect/Menu');
  expect(onBack).not.toHaveBeenCalled();
  expect(router.state.blockers.size === 0 || [...router.state.blockers.values()][0]?.state === 'unblocked').toBe(true);
});

test("the shell's back action goes back when no handler prevents; the handler sees the target entry", async () => {
  const onBack = vi.fn<BackHandler>();
  const { at } = renderMenu(false, onBack);
  await userEvent.click(screen.getByText('open menu'));

  await userEvent.click(screen.getByText('menu back'));

  expect(at()).toBe('/UBTConnect/HomeFeed');
  expect(onBack).toHaveBeenCalledTimes(1);
  const event = onBack.mock.calls[0]?.[0];
  expect(event?.location.pathname).toBe('/UBTConnect/HomeFeed');
  expect(event?.isInitialLocation()).toBe(true);
});

test('resume() goes back later without running the handlers again', async () => {
  let resume: (() => void) | undefined;
  const onBack = vi.fn<BackHandler>((event) => {
    event.preventDefault();
    resume = () => {
      event.resume();
    };
  });
  const { router, at } = renderMenu(false, onBack);
  await userEvent.click(screen.getByText('open menu'));
  await act(() => router.navigate(-1));
  expect(at()).toBe('/UBTConnect/Menu');

  await act(async () => {
    resume?.();
    await Promise.resolve();
  });

  expect(at()).toBe('/UBTConnect/HomeFeed');
  expect(onBack).toHaveBeenCalledTimes(1);
});

test('a forward history navigation does not run the back handlers', async () => {
  const { router, at } = renderMenu(false);
  await userEvent.click(screen.getByText('open menu'));
  await act(() => router.navigate(-1));
  const global = vi.fn<BackHandler>();
  addBackHandler(global, 0);

  await act(() => router.navigate(1));
  expect(at()).toBe('/UBTConnect/Menu');
  expect(global).not.toHaveBeenCalled();

  await act(() => router.navigate(-1));
  expect(global).toHaveBeenCalledTimes(1);
});
