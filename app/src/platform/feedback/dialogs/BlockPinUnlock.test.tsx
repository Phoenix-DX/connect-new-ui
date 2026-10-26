import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { LockHost } from '@/platform/navigation/LockHost';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { isLocked, lock, registerPin } from '@/platform/session/pin';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { BlockPinUnlock } from './BlockPinUnlock';

beforeEach(async () => {
  freshPage();
  resetBackQueue();
  setClientVar('UBT_AppManager.PIN_Use', true);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
  // TST value (shell-observed U2): the default 0 would let the inactivity timer lock the tab during a slow run
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
  setSignedInUser(MOCK_USER_ID);
  await registerPin('1357');
});

afterEach(() => {
  sessionStorage.removeItem('mock:mock');
  window.history.replaceState(null, '', '/');
});

const back = () => {
  const event = createBackEvent({ pathname: '/', search: '', hash: '', state: null, key: 'k' }, false, vi.fn());
  runBackHandlers(event);
  return event.defaultPrevented;
};

test('unlocked: the captured lock container with the InactivityTimer (HF dom:1110-1153)', () => {
  const { container } = render(
    <MemoryRouter>
      <BlockPinUnlock inIsCommonBlock />
    </MemoryRouter>,
  );
  expect(container.querySelector('[data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top"]')).toBeNull();
  const main = container.querySelector('#b13-b2-b1-Main');
  expect(main?.className).toBe('ubt-layout--login ubt-lock-screen connect-legacy-compatibily-containter');
  expect(container.querySelector('#b13-b2-b1-b2-b1-b1-SVG path')).toHaveAttribute(
    'd',
    'M0,0 H100 V160 Q50,181 0,160 Z',
  );
  expect(container.querySelector('[data-block="PIN.Pincode_Unlock"]')?.innerHTML).toBe(
    '<div class="OSBlockWidget" data-block="PIN.InactivityTimer" id="b13-b2-b4-b1-b1-$b2"></div>',
  );
  expect(container.querySelector('.pincode-unlock')).toBeNull();
  expect(
    container.querySelector(
      '#b13-b2-b1-Placeholder_CommonUI_Inside_Layout > #b13-b2-Placeholder_CommonUI_Inside_Layout',
    ),
  ).not.toBeNull();
});

test('LockHost: container mounted while unlocked; locked → the PIN keypad, back prevented (100000); the right PIN unlocks', async () => {
  const router = createMemoryRouter([{ path: '*', element: <LockHost /> }], { initialEntries: ['/UBTConnect/Menu'] });
  const { container } = render(<RouterProvider router={router} />);
  expect(container.querySelector('.ubt-lock-screen')).not.toBeNull();
  expect(container.querySelector('.pincode-unlock')).toBeNull();
  expect(back()).toBe(false);

  act(() => {
    lock();
  });
  const keypad = container.querySelector(
    '.ubt-lock-screen [data-block="App_PIN.Block_PINUnlock_ContentWrapper"] .pincode-unlock',
  );
  expect(
    keypad?.querySelector('[data-block="PIN.PinCode"] .ubt-pincode.connect-pin-screen.ubt-pin-overlay'),
  ).not.toBeNull();
  expect(keypad?.querySelector('.ubt-pincode__header__message')?.textContent).toBe('Enter your PIN code');
  expect(back()).toBe(true);

  for (const digit of '1357') {
    const key = [...container.querySelectorAll<HTMLButtonElement>('.ubt-pincode__button')].find(
      (b) => b.textContent === digit,
    );
    if (!key) throw new Error(`no key ${digit}`);
    await act(async () => {
      fireEvent.click(key);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }
  await waitFor(() => {
    expect(container.querySelector('.pincode-unlock')).toBeNull();
  });
  expect(isLocked()).toBe(false);
  expect(container.querySelector('.ubt-lock-screen')).not.toBeNull();
  expect(back()).toBe(false);
});

test('PINUnlock instance: LayoutRuntime_Top, keypad forced visible, the compiled background, the placeholder, Unlock (PINUnlock dom:5-305)', async () => {
  const onUnlock = vi.fn();
  expect(isLocked()).toBe(false); // the keypad below shows because of In_ForceVisible
  const { container } = render(
    <MemoryRouter>
      <BlockPinUnlock
        id="$b1"
        inForceVisible
        onUnlock={onUnlock}
        placeholderCommonUIInsideLayout={<span id="caller-content" />}
      />
    </MemoryRouter>,
  );
  const layout = container.querySelector('[data-block="Layouts.Layout_LoginFlow"]');
  expect(layout?.id).toBe('b1-$b1');
  expect(layout?.firstElementChild).toHaveAttribute('data-block', 'LayoutRuntime_NavigationHandler.LayoutRuntime_Top');
  expect(layout?.firstElementChild?.id).toBe('b1-b1-$b1');
  expect(container.querySelector('#b1-b1-Main')?.className).toBe(
    'ubt-layout--login ubt-lock-screen connect-legacy-compatibily-containter',
  );
  expect(container.querySelector('.ubt-header-svg svg')).toHaveAttribute('preserveAspectRatio', 'none');
  expect(container.querySelector('#b1-b1-Placeholder_Header')?.childElementCount).toBe(0);
  expect(
    container.querySelector('#b1-b1-Placeholder_Content > [data-block="App_PIN.Block_PINUnlock_ContentWrapper"]')?.id,
  ).toBe('b1-$b4');
  expect(container.querySelector('.ubt-layout--login__content__unsupported-card')).toBeNull();
  expect(
    container.querySelector(
      '#b1-b1-Placeholder_CommonUI_Inside_Layout > #b1-Placeholder_CommonUI_Inside_Layout > #caller-content',
    ),
  ).not.toBeNull();
  expect(container.querySelector('.pincode-unlock')).not.toBeNull();

  for (const digit of '1357') {
    const key = [...container.querySelectorAll<HTMLButtonElement>('.ubt-pincode__button')].find(
      (b) => b.textContent === digit,
    );
    if (!key) throw new Error(`no key ${digit}`);
    await act(async () => {
      fireEvent.click(key);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }
  await waitFor(() => {
    expect(onUnlock).toHaveBeenCalledTimes(1);
  });
});

test('unsupported system (U16 `?mock=unsupported-browser`): the unsupported card instead of the keypad (Block_PINUnlock:186-270)', () => {
  window.history.replaceState(null, '', '/UBTConnect/PINUnlock?mock=unsupported-browser');
  const { container } = render(
    <MemoryRouter>
      <BlockPinUnlock id="$b1" inForceVisible />
    </MemoryRouter>,
  );
  const card = container.querySelector('#b1-b1-Placeholder_Content > .ubt-layout--login__content__unsupported-card');
  expect(card).toHaveAttribute('data-container', '');
  const custom = card?.querySelector(':scope > [data-block="BasePatterns.CustomContainer"]');
  expect(custom?.id).toBe('b1-$b2');
  expect(custom?.firstElementChild).toHaveClass(
    'ubt-custom-container',
    'background-neutral-0',
    'padding-x-xl',
    'margin-x-base',
    'border-radius-large',
  );
  expect(custom?.querySelector('[data-block="App_Common.UnsupportedVersion_Wrapper"]')?.id).toBe('b1-$b3');
  expect(card?.querySelector('.unsupported-card--webview')).not.toBeNull();
  expect(container.querySelector('[data-block="App_PIN.Block_PINUnlock_ContentWrapper"]')).toBeNull();
});
