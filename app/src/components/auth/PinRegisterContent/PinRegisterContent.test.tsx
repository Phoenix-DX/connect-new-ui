import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { freshPage } from '@/test/testSupport';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinRegisterContent, type PinRegisterContentProps } from './PinRegisterContent';
import * as stories from './PinRegisterContent.stories';

/* The view of Block_PINRegister_ContentWrapper. Its flows (the user's name, the errors and the three success routes)
   are tested with usePinRegisterContent in platform/session/usePinRegisterContent.test.tsx. */

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const view = (props: PinRegisterContentProps) => (
  <MemoryRouter initialEntries={['/UBTConnect/PINRegister']}>
    <PinRegisterContent {...props} />
  </MemoryRouter>
);

const setup = (props: PinRegisterContentProps) => {
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
    await act(() => new Promise((resolve) => setTimeout(resolve, 600)));
  };
  const message = () => container.querySelector('.ubt-pincode__header__message')?.textContent;
  const update = (next: PinRegisterContentProps) => {
    rerender(view(next));
  };
  return { container, type, message, rerender: update };
};

describe('Block_PINRegister_ContentWrapper', () => {
  beforeEach(() => {
    freshPage();
  });
  testCapturedVariants(stories, captures);

  it('shows the register text on the first entry and the confirm text on the second', () => {
    const { message, rerender } = setup({});
    expect(message()).toBe('Register a PIN code');
    rerender({ isFirstUse: false });
    expect(message()).toBe('Confirm PIN code');
    rerender({ isFirstUse: false, confirmText: 'Confirm new PIN' });
    expect(message()).toBe('Confirm new PIN');
  });

  it('EnableName: "Welcome <UserName>" above the text, which turns regular', () => {
    const { container, message } = setup({ enableName: true, userName: 'Matías Vitale' });
    expect(message()).toBe('Welcome Matías VitaleRegister a PIN code');
    const texts = container.querySelectorAll(
      '.ubt-pincode__header__message [data-block="BasePatterns.CustomText"] > div',
    );
    expect(texts[0]).toHaveClass('font-semi-bold');
    expect(texts[1]).toHaveClass('font-regular');
  });

  it('raises SetPin with the PIN entered on the keypad', async () => {
    const onSetPin = vi.fn();
    const { type } = setup({ onSetPin });
    await type('1357');
    expect(onSetPin).toHaveBeenCalledWith('1357');
  });

  it('"Need help?" and the white logo with the overlay; none from the menu, the dark logo without the overlay', () => {
    const { container, rerender } = setup({});
    expect(container.querySelector('.text-neutral-10')?.textContent).toBe('Need help? Contact Us');
    expect(container.querySelector('.ubt-pin-overlay')).not.toBeNull();
    expect(container.querySelector('img')?.getAttribute('src')).toContain('ConnectLogoWhite.svg');
    rerender({ isFromMenu: true, useOverlay: false });
    expect(container.querySelector('.text-neutral-10')).toBeNull();
    expect(container.querySelector('.ubt-pin-overlay')).toBeNull();
    expect(container.querySelector('img')?.getAttribute('src')).toContain('ConnectLogo.svg');
  });
});
