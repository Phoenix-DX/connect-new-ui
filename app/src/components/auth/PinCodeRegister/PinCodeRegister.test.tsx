import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinCodeRegister, type PinCodeRegisterProps } from './PinCodeRegister';
import * as stories from './PinCodeRegister.stories';

/* The view of Pincode_Register. Its flows (rules, confirmation, registration) are tested with usePinCodeRegister in
   platform/session/usePinCodeRegister.test.tsx. */

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const view = (props: PinCodeRegisterProps) => (
  <MemoryRouter>
    <PinCodeRegister
      inPinLength={4}
      registrationText={<span id="register" />}
      confirmationText={<span id="confirm" />}
      {...props}
    />
  </MemoryRouter>
);

const setup = (props: PinCodeRegisterProps) => {
  const { container, rerender } = render(view(props));
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
  const update = (next: PinCodeRegisterProps) => {
    rerender(view(next));
  };
  return { container, type, rerender: update };
};

describe('Pincode_Register', () => {
  beforeEach(() => {
    freshPage();
  });
  testCapturedVariants(stories, captures);

  it('shows the registration text on the first entry and the confirmation text on the second', () => {
    const { container, rerender } = setup({});
    expect(container.querySelector('#register')).not.toBeNull();
    expect(container.querySelector('#confirm')).toBeNull();
    rerender({ isFirstUse: false });
    expect(container.querySelector('#register')).toBeNull();
    expect(container.querySelector('#confirm')).not.toBeNull();
  });

  it('raises SetPin with the PIN entered on the keypad', async () => {
    const onSetPin = vi.fn();
    const { type } = setup({ onSetPin });
    await type('1357');
    expect(onSetPin).toHaveBeenCalledTimes(1);
    expect(onSetPin).toHaveBeenCalledWith('1357');
  });

  it('gives the keypad the PreventBackNavigation block and the before-SetPin event of the caller', async () => {
    const onBeforeSetPin = vi.fn();
    const renderPreventBackNavigation = vi.fn((id: string | undefined) => <span data-prevent={id} />);
    const { container, type } = setup({ id: 'b4-$b1', onBeforeSetPin, renderPreventBackNavigation });
    expect(container.querySelector('[data-prevent="b4-b1-b1-$b1"]')).not.toBeNull();
    await type('1357');
    expect(onBeforeSetPin).toHaveBeenCalledTimes(1);
  });

  it('puts the placeholders in their containers', () => {
    const { container } = setup({
      headerBar: <span id="header" />,
      optionPlaceholder: <span id="option" />,
      contentPlaceholder: <span id="content" />,
    });
    expect(container.querySelector('.pincode-registration')).toHaveStyle({ textAlign: 'center' });
    expect(container.querySelector('#header')?.parentElement?.parentElement).toHaveStyle({ textAlign: 'left' });
    expect(container.querySelector('.pincode-button #option')).not.toBeNull();
    expect(container.querySelector('.content-placeholder #content')).not.toBeNull();
  });
});
