import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinCode, type PinCodeProps } from './PinCode';
import * as stories from './PinCode.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const setup = (props: PinCodeProps) => {
  const { container } = render(
    <MemoryRouter>
      <PinCode {...props} />
    </MemoryRouter>,
  );
  const keys = [...container.querySelectorAll<HTMLButtonElement>('.ubt-pincode__button')];
  const key = (digit: number) => {
    const button = keys.find((b) => b.textContent === String(digit));
    if (!button) throw new Error(`no key ${String(digit)}`);
    return button;
  };
  const erase = () => {
    const button = container.querySelector<HTMLButtonElement>('.ubt-pincode__button-erase');
    if (!button) throw new Error('no erase key');
    return button;
  };
  const press = async (button: HTMLButtonElement) => {
    await act(async () => {
      fireEvent.click(button);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };
  const selected = () => container.querySelectorAll('.selected-icon').length;
  return { container, keys, key, erase, press, selected };
};

describe('PinCode', () => {
  testCapturedVariants(stories, captures);

  it('lays the keys out in three columns (1 4 7 / 2 5 8 0 / 3 6 9) and shows Length empty pins', () => {
    const { container, keys } = setup({ length: 4 });
    expect(keys.map((b) => b.textContent).join('')).toBe('1472580369');
    expect(container.querySelectorAll('.ubt-pincode__pin .empty-icon')).toHaveLength(4);
  });

  it('fills a pin per digit, disables the keys when full, raises SetPin and clears after 500 ms', async () => {
    const order: string[] = [];
    const onSetPin = vi.fn();
    const { key, keys, erase, press, selected } = setup({
      length: 4,
      onKeyPressed: () => {
        order.push('key');
      },
      onPincodeChange: (n) => {
        order.push(`change ${String(n)}`);
      },
      onSetPin,
    });
    expect(erase()).toBeDisabled();
    await press(key(1));
    expect(selected()).toBe(1);
    expect(erase()).toBeEnabled();
    for (const d of [3, 5, 7]) await press(key(d));
    expect(onSetPin).toHaveBeenCalledWith('1357');
    expect(selected()).toBe(4);
    expect(keys.every((b) => b.disabled)).toBe(true);
    expect(order.slice(0, 4)).toEqual(['key', 'change 1', 'key', 'change 2']);
    await waitFor(() => {
      expect(selected()).toBe(0);
    });
    expect(keys.every((b) => !b.disabled)).toBe(true);
    expect(order.at(-1)).toBe('change 0');
  });

  it('erases the last digit', async () => {
    const onPincodeChange = vi.fn();
    const { key, erase, press, selected } = setup({ length: 4, onPincodeChange });
    await press(key(2));
    await press(key(4));
    await press(erase());
    expect(selected()).toBe(1);
    expect(onPincodeChange).toHaveBeenLastCalledWith(1);
  });

  it('Length 0: an OK key instead of the Option placeholder, one pin per digit, OK raises SetPin', async () => {
    const onSetPin = vi.fn();
    const { container, key, press, selected } = setup({ option: <span id="option" />, onSetPin });
    expect(container.querySelector('#option')).toBeNull();
    const ok = container.querySelector<HTMLButtonElement>('.ubt-pincode__button-confirm');
    if (!ok) throw new Error('no OK key');
    expect(ok.textContent).toBe('OK');
    await press(key(8));
    await press(key(9));
    expect(container.querySelectorAll('.ubt-pincode__pin')).toHaveLength(2);
    expect(selected()).toBe(2);
    await press(ok);
    expect(onSetPin).toHaveBeenCalledWith('89');
  });

  it('prevents back navigation unless In_AllowBackNavigation', () => {
    const blocks = (props: PinCodeProps) =>
      setup(props).container.querySelectorAll('[data-block="NavigationHandler.PreventBackNavigation"]').length;
    expect(blocks({ length: 4 })).toBe(1);
    expect(blocks({ length: 4, inAllowBackNavigation: true })).toBe(0);
  });
});
