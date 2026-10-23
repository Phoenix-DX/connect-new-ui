import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { registerPin, verifyPin } from '@/platform/session/pin';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import PINChange from './PINChangePage';

/* The PINChange page with its flows (usePINChange) and the flows of its blocks: the current PIN on the unlock block,
   then the new PIN, entered twice, on the register block; and the back link. */

function renderPage() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const router = createMemoryRouter([{ path: '*', element: <PINChange /> }], {
    initialEntries: ['/UBTConnect/Menu', '/UBTConnect/PINChange'],
  });
  const { container } = render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
  const type = async (pin: string) => {
    for (const digit of pin) {
      const key = [...container.querySelectorAll<HTMLButtonElement>('.ubt-pincode__button')].find(
        (b) => b.textContent === digit,
      );
      if (!key) throw new Error(`no key ${digit}`);
      await act(async () => {
        fireEvent.click(key);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });
    }
    await act(() => new Promise((resolve) => setTimeout(resolve, 600))); // keypad reset (500 ms)
  };
  const location = () => router.state.location.pathname + router.state.location.search;
  const message = () => container.querySelector('.ubt-pincode__header__message')?.textContent;
  const has = (block: string) => container.querySelector(`[data-block="${block}"]`) !== null;
  return { container, type, location, message, has };
}

describe('PINChange page', () => {
  beforeEach(async () => {
    freshPage();
    resetFeedbackMessages();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('1357');
  });
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
  });

  it('asks for the current PIN on the lock screen, with back navigation allowed', () => {
    const { container, message, has } = renderPage();
    expect(container.querySelector('.ubt-layout--login__header')?.textContent).toBe('Change PIN');
    expect(container.querySelector('.ubt-lock-screen')).not.toBeNull();
    expect(has('App_PIN.Block_PINUnlock_ContentWrapper')).toBe(true);
    expect(has('App_PIN.Block_PINRegister_ContentWrapper')).toBe(false);
    expect(message()).toBe('Enter your current PIN');
    expect(has('NavigationHandler.PreventBackNavigation')).toBe(false);
  });

  it('the current PIN unlocks the screen; the new PIN entered twice is saved and Menu opens', async () => {
    const { container, type, location, message, has } = renderPage();
    await type('1357');
    await waitFor(() => {
      expect(has('App_PIN.Block_PINRegister_ContentWrapper')).toBe(true);
    });
    expect(getFeedbackMessage()?.message).toBe('Please provide a new PIN.'); // FeedbackMessage_AutoClose adds the "."
    expect(container.querySelector('.ubt-lock-screen')).toBeNull();
    expect(has('App_PIN.Block_PINUnlock_ContentWrapper')).toBe(false);
    expect(message()).toBe('Enter new PIN');
    expect(has('NavigationHandler.PreventBackNavigation')).toBe(false);
    await type('2468');
    expect(message()).toBe('Confirm new PIN');
    await type('2468');
    await waitFor(() => {
      expect(location()).toBe('/UBTConnect/Menu');
    });
    expect(getFeedbackMessage()?.message).toBe('Your PIN has been changed.');
    expect((await verifyPin('2468')).status).toBe('unlocked');
  });

  it('the back link opens Menu', async () => {
    const { container, location } = renderPage();
    const link = container.querySelector<HTMLAnchorElement>('.ubt-layout--login__header a');
    if (!link) throw new Error('no link');
    fireEvent.click(link);
    await waitFor(() => {
      expect(location()).toBe('/UBTConnect/Menu');
    });
  });
});
