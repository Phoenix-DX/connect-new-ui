import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isLocked, registerPin } from '@/platform/session/pin';
import { setClientVar, setSignedInUser, writePin } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { PinUnlockContentContainer, type PinUnlockContentContainerProps } from './PinUnlockContentContainer';

const setup = (props: PinUnlockContentContainerProps) => {
  const router = createMemoryRouter([{ path: '*', element: <PinUnlockContentContainer inForceVisible {...props} /> }], {
    initialEntries: ['/UBTConnect/PINUnlock'],
  });
  const { container } = render(<RouterProvider router={router} />);
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
  };
  return { container, router, type };
};

describe('PinUnlockContentContainer (Block_PINUnlock_ContentWrapper with its flows)', () => {
  beforeEach(async () => {
    freshPage();
    resetFeedbackMessages();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
    await registerPin('1357');
  });
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
  });

  it('raises Unlock for the right PIN', async () => {
    const onUnlock = vi.fn();
    const { type } = setup({ onUnlock });
    await type('1357');
    await waitFor(() => {
      expect(onUnlock).toHaveBeenCalledTimes(1);
    });
    expect(isLocked()).toBe(false);
  });

  it('maps "Pin does not match" to its message', async () => {
    const { type } = setup({});
    await type('2468');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Your current PIN is not correct!');
    });
  });

  it('"User not found": message and NavigateTo_PINRegister', async () => {
    writePin(null);
    const onNavigateToPINRegister = vi.fn();
    const { type } = setup({ onNavigateToPINRegister });
    await type('1357');
    await waitFor(() => {
      expect(onNavigateToPINRegister).toHaveBeenCalledTimes(1);
    });
    expect(getFeedbackMessage()?.message).toBe('No matching user. Please Register a PIN.');
  });

  it('Forgot PIN opens Login with In_IsFromResetPIN', () => {
    const { container, router } = setup({ showForgotPIN: true });
    const link = container.querySelector('.border-bottom-s.OSInline a');
    if (!link) throw new Error('no Forgot PIN link');
    fireEvent.click(link);
    expect(router.state.location.pathname + router.state.location.search).toBe(
      '/UBTConnect/Login?In_IsFromResetPIN=True',
    );
  });

  it('ShowPolicy: each policy link runs OpenPolicy with its cached policy (web: a new tab)', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { container } = setup({ showPolicy: true });
    let links: HTMLAnchorElement[] = [];
    await waitFor(() => {
      links = [...container.querySelectorAll<HTMLAnchorElement>('[data-block="BasePatterns.Columns_Two"] a')];
      expect(links).toHaveLength(2);
    });
    expect(container.querySelector('[data-block="CacheControl.CacheControl_Policies"]')).not.toBeNull();
    fireEvent.click(links[0] as HTMLAnchorElement);
    fireEvent.click(links[1] as HTMLAnchorElement);
    expect(open).toHaveBeenCalledTimes(2);
    for (const call of open.mock.calls) {
      expect(call[0]).toMatch(/^https?:/);
      expect(call[1]).toBe('_blank');
    }
    expect(open.mock.calls[0]?.[0]).not.toBe(open.mock.calls[1]?.[0]);
    open.mockRestore();
  });

  it('not locked and not forced: the InactivityTimer instead of the keypad', () => {
    const { container } = setup({ id: 'b13-b2-$b4', inForceVisible: false });
    expect(container.querySelector('.pincode-unlock')).toBeNull();
    expect(container.querySelector('[data-block="PIN.Pincode_Unlock"]')?.innerHTML).toBe(
      '<div class="OSBlockWidget" data-block="PIN.InactivityTimer" id="b13-b2-b4-b1-b1-$b2"></div>',
    );
  });

  it('isFromMenu: back navigation allowed (no PreventBackNavigation)', () => {
    const { container } = setup({ isFromMenu: true });
    expect(container.querySelector('.pincode-unlock')).not.toBeNull();
    expect(container.querySelector('[data-block="NavigationHandler.PreventBackNavigation"]')).toBeNull();
  });
});
