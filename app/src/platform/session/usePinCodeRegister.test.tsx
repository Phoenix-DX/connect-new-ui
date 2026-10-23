import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { MOCK_USER_ID } from './mockUser';
import { verifyPin } from './pin';
import { getShellState, setClientVar, setSignedInUser } from './session';
import { usePinCodeRegister, type PinCodeRegisterEvents } from './usePinCodeRegister';

/* The flows of Pincode_Register (moved from the tests of the block, components/auth/PinCodeRegister). */

const setup = (events: PinCodeRegisterEvents, enabled = true) => {
  const hook = renderHook(({ on }: { on: boolean }) => usePinCodeRegister(events, on), {
    initialProps: { on: enabled },
  });
  /** One entry on the keypad: SetPin, then the 0 ms timeout of ShowConfirm (DelayChangeJS). */
  const enter = async (pin: string) => {
    await act(async () => {
      await hook.result.current.onSetPin(pin);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };
  return { ...hook, enter };
};

describe('Pincode_Register flows (usePinCodeRegister)', () => {
  beforeEach(() => {
    freshPage();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
  });
  afterEach(() => {
    setSignedInUser(null);
    vi.restoreAllMocks();
  });

  it('registers after the same PIN is entered twice', async () => {
    const onPinRegistrationSuccess = vi.fn();
    const { result, enter } = setup({ onPinRegistrationSuccess });
    expect(result.current.isFirstUse).toBe(true);
    await enter('1357');
    expect(result.current.isFirstUse).toBe(false);
    expect(getShellState().hasLocalPin).toBe(false);
    await enter('1357');
    expect(onPinRegistrationSuccess).toHaveBeenCalledTimes(1);
    expect(getShellState().hasLocalPin).toBe(true);
    expect((await verifyPin('1357')).status).toBe('unlocked');
  });

  it('rejects a PIN that breaks a rule, then a confirmation that differs', async () => {
    const onPinRegistrationError = vi.fn();
    const { result, enter } = setup({ onPinRegistrationError });
    await enter('1234');
    expect(onPinRegistrationError).toHaveBeenLastCalledWith('PIN must not contain any 3 consecutive numbers.');
    expect(result.current.isFirstUse).toBe(true);
    await enter('1357');
    await enter('2468');
    expect(onPinRegistrationError).toHaveBeenLastCalledWith('Confirm PIN does not match Register PIN!');
    expect(result.current.isFirstUse).toBe(false);
    expect(getShellState().hasLocalPin).toBe(false);
  });

  it('raises PinRegistrationError when nobody is signed in', () => {
    setSignedInUser(null);
    const onPinRegistrationError = vi.fn();
    setup({ onPinRegistrationError });
    expect(onPinRegistrationError).toHaveBeenCalledWith('User not logged in.');
  });

  it('runs OnInitialize only when enabled turns true (PINChange shows the block after the unlock)', () => {
    setSignedInUser(null);
    const onPinRegistrationError = vi.fn();
    const { rerender } = setup({ onPinRegistrationError }, false);
    expect(onPinRegistrationError).not.toHaveBeenCalled();
    rerender({ on: true });
    expect(onPinRegistrationError).toHaveBeenCalledTimes(1);
    expect(onPinRegistrationError).toHaveBeenCalledWith('User not logged in.');
  });

  it('OnDestroy clears the pending switch to the confirmation', () => {
    const { result, unmount } = setup({});
    const set = vi.spyOn(window, 'setTimeout');
    const clear = vi.spyOn(window, 'clearTimeout');
    act(() => {
      void result.current.onSetPin('1357');
    });
    const index = set.mock.calls.findIndex(([, delay]) => delay === 0);
    expect(index).toBeGreaterThanOrEqual(0);
    unmount();
    expect(clear).toHaveBeenCalledWith(set.mock.results[index]?.value);
  });
});
