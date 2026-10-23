import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { PATHS } from '@/platform/navigation/paths';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getShellState, isSignedIn, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import PINRegister from './PINRegisterPage';

/* The PINRegister page with its flows (usePINRegister) and the flows of its block (usePinRegisterContent): the
   layout, the user's name, the registration through the keypad and "Back to login". */

function renderPage() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const router = createMemoryRouter([{ path: '*', element: <PINRegister /> }], {
    initialEntries: ['/UBTConnect/PINRegister'],
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
  return { container, type, location, message };
}

describe('PINRegister page', () => {
  beforeEach(() => {
    freshPage();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
  });
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  });

  it('shows the back link, the registration keypad with the welcome name and the common UI', async () => {
    const { container, message } = renderPage();
    const blocks = Array.from(container.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));
    expect(blocks).toEqual(
      expect.arrayContaining([
        'Layouts.Layout_LoginFlow',
        'ConnectPatterns.IconText',
        'App_PIN.Block_PINRegister_ContentWrapper',
        'PIN.Pincode_Register',
        'App_Common.CommonUI_InsideLayout',
      ]),
    );
    expect(container.querySelector('.ubt-layout--login__header')?.textContent).toBe('Back to login');
    expect(container.querySelector('.ubt-pin-overlay')).not.toBeNull();
    await waitFor(() => {
      expect(message()).toBe('Welcome Matías VitaleRegister a PIN code');
    });
  });

  it('registers the PIN entered twice and opens HomeFeed', async () => {
    const { type, location, message } = renderPage();
    await type('1357');
    expect(message()).toContain('Confirm PIN code');
    await type('1357');
    expect(getShellState().hasLocalPin).toBe(true);
    expect(location()).toBe(PATHS.home);
  });

  it('Back to login: signs out and opens Login', async () => {
    const { container, location } = renderPage();
    const link = container.querySelector<HTMLAnchorElement>('.ubt-layout--login__header a');
    if (!link) throw new Error('no link');
    fireEvent.click(link);
    await waitFor(() => {
      expect(location()).toBe(PATHS.login);
    });
    expect(isSignedIn()).toBe(false);
  });
});
