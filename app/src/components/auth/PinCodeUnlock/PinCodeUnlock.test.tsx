import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinCodeUnlock, type PinCodeUnlockProps } from './PinCodeUnlock';
import * as stories from './PinCodeUnlock.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* The flows of the block (initialize, In_ForceVisible, the PIN check, the timeout) are tested with their hook:
   src/platform/session/usePinCodeUnlock.test.tsx. */
const setup = (props: PinCodeUnlockProps) => {
  const { container } = render(
    <MemoryRouter>
      <PinCodeUnlock inPinLength={4} {...props} />
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
  return { container, type };
};

describe('Pincode_Unlock', () => {
  testCapturedVariants(stories, captures);

  it('shows the keypad when it is visible and passes the full PIN to SetPin', async () => {
    const onSetPin = vi.fn();
    const renderInactivityTimer = vi.fn(() => null);
    const { container, type } = setup({ isKeypadVisible: true, onSetPin, renderInactivityTimer });
    expect(container.querySelector('.pincode-unlock [data-block="PIN.PinCode"]')).not.toBeNull();
    expect(renderInactivityTimer).not.toHaveBeenCalled();
    await type('1357');
    expect(onSetPin).toHaveBeenCalledWith('1357');
  });

  it('shows the InactivityTimer with its instance id while the keypad is hidden', () => {
    const renderInactivityTimer = vi.fn((id: string | undefined) => <span data-timer={id} />);
    const { container } = setup({ id: 'b1-$b1', renderInactivityTimer });
    expect(container.querySelector('.pincode-unlock')).toBeNull();
    expect(renderInactivityTimer).toHaveBeenCalledWith('b1-b1-$b2');
    expect(container.querySelector('[data-timer="b1-b1-$b2"]')).not.toBeNull();
  });
});
