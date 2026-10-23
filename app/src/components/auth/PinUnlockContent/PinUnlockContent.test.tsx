import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isLocked, registerPin } from '@/platform/session/pin';
import { setClientVar, setSignedInUser, writePin } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinUnlockContent, type PinUnlockContentProps } from './PinUnlockContent';
import * as stories from './PinUnlockContent.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const setup = (props: PinUnlockContentProps) => {
  const router = createMemoryRouter([{ path: '*', element: <PinUnlockContent inForceVisible {...props} /> }], {
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

describe('Block_PINUnlock_ContentWrapper', () => {
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
  testCapturedVariants(stories, captures);

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

  it('ShowNeedHelp: "Need help? Contact Us" instead of the policies; the plain logo without overlay', () => {
    const { container } = setup({ showNeedHelp: true, showPolicy: true, useOverlay: false });
    const help = container.querySelector('.ubt-custom-container.text-neutral-10');
    expect(help?.textContent).toBe('Need help? Contact Us');
    expect(help?.querySelector('a')).toHaveAttribute('href', '/UBTConnect/ContactUsMenu');
    expect(container.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')).toBeNull();
    expect(container.querySelector('.ubt-pincode')).toHaveClass('connect-pin-screen');
    expect(container.querySelector('.ubt-pincode')).not.toHaveClass('ubt-pin-overlay');
    expect(container.querySelector('img')?.getAttribute('src')).toMatch(/UBTConnect\.ConnectLogo\.svg$/);
  });
});
