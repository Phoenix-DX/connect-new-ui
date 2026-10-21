import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MOCK_USER_ID } from '../../../shell/mockUser';
import { verifyPin } from '../../../shell/pin';
import { getShellState, setClientVar, setSignedInUser } from '../../../shell/session';
import { freshPage } from '../../../shell/testSupport';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Pincode_Register, type Pincode_RegisterProps } from './Pincode_Register';
import * as stories from './Pincode_Register.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const setup = (props: Pincode_RegisterProps) => {
  const { container } = render(
    <MemoryRouter>
      <Pincode_Register
        inPinLength={4}
        registrationText={<span id="register" />}
        confirmationText={<span id="confirm" />}
        {...props}
      />
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
    await act(() => new Promise((resolve) => setTimeout(resolve, 600))); // keypad reset (500 ms)
  };
  return { container, type };
};

describe('Pincode_Register', () => {
  beforeEach(() => {
    freshPage();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
  });
  afterEach(() => {
    setSignedInUser(null);
  });
  testCapturedVariants(stories, captures);

  it('registers after the same PIN is entered twice', async () => {
    const onPinRegistrationSuccess = vi.fn();
    const { container, type } = setup({ onPinRegistrationSuccess });
    expect(container.querySelector('#register')).not.toBeNull();
    await type('1357');
    expect(container.querySelector('#confirm')).not.toBeNull();
    expect(getShellState().hasLocalPin).toBe(false);
    await type('1357');
    expect(onPinRegistrationSuccess).toHaveBeenCalledTimes(1);
    expect(getShellState().hasLocalPin).toBe(true);
    expect((await verifyPin('1357')).status).toBe('unlocked');
  });

  it('rejects a PIN that breaks a rule, then a confirmation that differs', async () => {
    const onPinRegistrationError = vi.fn();
    const { container, type } = setup({ onPinRegistrationError });
    await type('1234');
    expect(onPinRegistrationError).toHaveBeenLastCalledWith('PIN must not contain any 3 consecutive numbers.');
    expect(container.querySelector('#register')).not.toBeNull();
    await type('1357');
    await type('2468');
    expect(onPinRegistrationError).toHaveBeenLastCalledWith('Confirm PIN does not match Register PIN!');
    expect(getShellState().hasLocalPin).toBe(false);
  });

  it('raises PinRegistrationError when nobody is signed in', () => {
    setSignedInUser(null);
    const onPinRegistrationError = vi.fn();
    setup({ onPinRegistrationError });
    expect(onPinRegistrationError).toHaveBeenCalledWith('User not logged in.');
  });
});
