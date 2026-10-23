import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PinCodeUnlock } from '@/components/auth/PinCodeUnlock';
import { InactivityTimer } from '@/platform/session/InactivityTimer';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isLocked, registerPin } from '@/platform/session/pin';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { usePinCodeUnlock, type PinCodeUnlockEvents } from './usePinCodeUnlock';

type HarnessProps = PinCodeUnlockEvents & { inForceVisible?: boolean };

/** Pincode_Unlock as its callers render it: the hook and the component. */
function Harness({ inForceVisible = false, ...events }: HarnessProps) {
  const unlock = usePinCodeUnlock(inForceVisible, events);
  return (
    <PinCodeUnlock
      inPinLength={4}
      isKeypadVisible={unlock.isKeypadVisible}
      onSetPin={unlock.onSetPin}
      renderInactivityTimer={(id) => <InactivityTimer id={id} onTimeout={() => void unlock.onTimeout()} />}
    />
  );
}

const setup = (props: HarnessProps) => {
  const { container, rerender } = render(
    <MemoryRouter>
      <Harness {...props} />
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
  const update = (next: HarnessProps) => {
    rerender(
      <MemoryRouter>
        <Harness {...next} />
      </MemoryRouter>,
    );
  };
  return { container, type, update };
};

describe('usePinCodeUnlock (Pincode_Unlock)', () => {
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
