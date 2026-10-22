import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isLocked, registerPin } from '@/platform/session/pin';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Pincode_Unlock, type Pincode_UnlockProps } from './Pincode_Unlock';
import * as stories from './Pincode_Unlock.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const setup = (props: Pincode_UnlockProps) => {
  const { container, rerender } = render(
    <MemoryRouter>
      <Pincode_Unlock inPinLength={4} {...props} />
    </MemoryRouter>,
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
  };
  const update = (next: Pincode_UnlockProps) => {
    rerender(
      <MemoryRouter>
        <Pincode_Unlock inPinLength={4} {...next} />
      </MemoryRouter>,
    );
  };
  return { container, type, update };
};

describe('Pincode_Unlock', () => {
  beforeEach(async () => {
    freshPage();
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

  it('shows the keypad while locked, and unlocks with the right PIN', async () => {
    setClientVar('UBT_AppManager.PIN_IsLocked', true);
    const onPinUnlockSuccess = vi.fn();
    const { container, type } = setup({ onPinUnlockSuccess });
    expect(container.querySelector('.pincode-unlock [data-block="PIN.PinCode"]')).not.toBeNull();
    await type('1357');
    await waitFor(() => {
      expect(onPinUnlockSuccess).toHaveBeenCalledTimes(1);
    });
    expect(isLocked()).toBe(false);
    expect(getClientVar('UBT_AppManager.PIN_HasUnlocked')).toBe(true);
    expect(container.querySelector('.pincode-unlock')).toBeNull();
    expect(container.querySelector('[data-block="PIN.InactivityTimer"]')).not.toBeNull();
  });

  it('raises PinUnlockError with the original text for a wrong PIN', async () => {
    setClientVar('UBT_AppManager.PIN_IsLocked', true);
    const onPinUnlockError = vi.fn();
    const { type } = setup({ onPinUnlockError });
    await type('2468');
    await waitFor(() => {
      expect(onPinUnlockError).toHaveBeenCalledWith('Pin does not match');
    });
    expect(isLocked()).toBe(true);
  });

  it('In_ForceVisible locks on initialize and when it turns on', () => {
    const { update } = setup({});
    expect(isLocked()).toBe(false);
    update({ inForceVisible: true });
    expect(isLocked()).toBe(true);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
    update({ inForceVisible: true });
    expect(isLocked()).toBe(false);
  });

  it('raises UserLoggedOut when nobody is signed in', () => {
    setSignedInUser(null);
    const onUserLoggedOut = vi.fn();
    setup({ inForceVisible: true, onUserLoggedOut });
    expect(onUserLoggedOut).toHaveBeenCalledTimes(1);
    expect(isLocked()).toBe(false);
  });
});
