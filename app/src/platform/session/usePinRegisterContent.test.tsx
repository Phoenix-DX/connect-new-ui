import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { replaceOnUpcomingNavigation } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { freshPage } from '@/test/testSupport';
import { appManager_SetCachedUserInfo } from './cachedUserInfo';
import { MOCK_USER_ID, mockCachedUserInfo } from './mockUser';
import { setResumeLoginLink } from './resume';
import { getClientVar, setClientVar, setSignedInUser } from './session';
import { usePinRegisterContent, type PinRegisterContentOptions } from './usePinRegisterContent';

/* The flows of Block_PINRegister_ContentWrapper (moved from the tests of the block, components/auth/PinRegisterContent),
   inside a router on the PINRegister screen. */

const wrapper = ({ children }: { children: ReactNode }) => (
  <MemoryRouter initialEntries={['/UBTConnect/PINRegister']}>{children}</MemoryRouter>
);

const setup = (options: PinRegisterContentOptions) => {
  const hook = renderHook(
    ({ opts }: { opts: PinRegisterContentOptions }) => ({ flow: usePinRegisterContent(opts), at: useLocation() }),
    { wrapper, initialProps: { opts: options } },
  );
  /** One entry on the keypad: SetPin, then the 0 ms timeout of ShowConfirm. */
  const enter = async (pin: string) => {
    await act(async () => {
      await hook.result.current.flow.onSetPin(pin);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };
  const location = () => hook.result.current.at.pathname + hook.result.current.at.search;
  return { ...hook, enter, location };
};
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

describe('Block_PINRegister_ContentWrapper flows (usePinRegisterContent)', () => {
  beforeEach(() => {
    freshPage();
    resetFeedbackMessages();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
    appManager_SetCachedUserInfo(mockCachedUserInfo()); // the AppManager record that the mock sign-in writes
  });
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBTConnect.LastURL', '');
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  });

  it('shows the confirm text after the first entry and the rule message for a bad PIN', async () => {
    const { result, enter } = setup({});
    await enter('1111');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('PIN must not contain any 3 repeating numbers.');
    });
    expect(result.current.flow.isFirstUse).toBe(true);
    await enter('1357');
    expect(result.current.flow.isFirstUse).toBe(false);
  });

  it('registered: the resume link first, then LastURL, else HomeFeed', async () => {
    setResumeLoginLink('/UBTConnect/Notes');
    let view = setup({});
    await view.enter('1357');
    await view.enter('1357');
    expect(view.location()).toBe('/UBTConnect/Notes');
    expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(true);
    view.unmount();

    setClientVar('UBTConnect.LastURL', '/UBTConnect/Profile');
    view = setup({});
    await view.enter('2468');
    await view.enter('2468');
    expect(view.location()).toBe('/UBTConnect/Profile');
    view.unmount();

    setClientVar('UBTConnect.LastURL', '');
    view = setup({});
    await view.enter('1357');
    await view.enter('1357');
    expect(view.location()).toBe(PATHS.home);
    expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(false);
  });

  it('from the menu: success message and Menu', async () => {
    const { enter, location } = setup({ isFromMenu: true });
    await enter('1357');
    await enter('1357');
    expect(location()).toBe('/UBTConnect/Menu');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Your PIN has been changed.');
    });
  });

  it('EnableName: UserName is FirstName LastName of AppManager_GetCachedUserInfo at the first render, with no server call', async () => {
    const plain = setup({});
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(plain.result.current.flow.userName).toBe('');
    plain.unmount();

    const named = setup({ enableName: true });
    expect(named.result.current.flow.userName).toBe('Matías Vitale');
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(calls()).not.toContain('ActionGetUserInformation');
  });

  it('EnableName with an empty AppManager record: UserName is " " (FirstName + " " + LastName)', () => {
    setClientVar('UBT_AppManager.AppManager_UserExtended', '');
    const { result } = setup({ enableName: true });
    expect(result.current.flow.userName).toBe(' ');
  });

  it("passes on the keypad's before-SetPin event of Pincode_Register (ReplaceOnUpcomingNavigation)", () => {
    const { result } = setup({});
    expect(result.current.flow.onBeforeSetPin).toBe(replaceOnUpcomingNavigation);
  });

  it('enabled false: OnInitialize waits until the block is on the screen', async () => {
    const { result, rerender } = setup({ enableName: true, enabled: false });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(result.current.flow.userName).toBe('');
    rerender({ opts: { enableName: true, enabled: true } });
    expect(result.current.flow.userName).toBe('Matías Vitale');
  });
});
