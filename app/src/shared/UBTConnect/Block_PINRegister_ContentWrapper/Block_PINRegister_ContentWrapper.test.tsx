import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { HOME } from '../../../app/routes.generated';
import { setResumeLoginLink } from '@/platform/session/resume';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { testCapturedVariants } from '../../test/capturedVariants';
import {
  Block_PINRegister_ContentWrapper,
  type Block_PINRegister_ContentWrapperProps,
} from './Block_PINRegister_ContentWrapper';
import * as stories from './Block_PINRegister_ContentWrapper.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const setup = (props: Block_PINRegister_ContentWrapperProps) => {
  const router = createMemoryRouter([{ path: '*', element: <Block_PINRegister_ContentWrapper {...props} /> }], {
    initialEntries: ['/UBTConnect/PINRegister'],
  });
  const { container } = render(<RouterProvider router={router} />);
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
  const location = () => router.state.location.pathname + router.state.location.search;
  return { container, type, location };
};

describe('Block_PINRegister_ContentWrapper', () => {
  beforeEach(() => {
    freshPage();
    resetFeedbackMessages();
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Seconds', 1200);
    setSignedInUser(MOCK_USER_ID);
  });
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBTConnect.LastURL', '');
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
  });
  testCapturedVariants(stories, captures);

  it('shows the confirm text after the first entry and the rule message for a bad PIN', async () => {
    const { container, type } = setup({});
    await type('1111');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('PIN must not contain any 3 repeating numbers.');
    });
    expect(container.querySelector('.ubt-pincode__header__message')?.textContent).toBe('Register a PIN code');
    await type('1357');
    expect(container.querySelector('.ubt-pincode__header__message')?.textContent).toBe('Confirm PIN code');
  });

  it('registered: the resume link first, then LastURL, else HomeFeed', async () => {
    setResumeLoginLink('/UBTConnect/Notes');
    let view = setup({});
    await view.type('1357');
    await view.type('1357');
    expect(view.location()).toBe('/UBTConnect/Notes');
    expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(true);

    setClientVar('UBTConnect.LastURL', '/UBTConnect/Profile');
    view = setup({});
    await view.type('2468');
    await view.type('2468');
    expect(view.location()).toBe('/UBTConnect/Profile');

    setClientVar('UBTConnect.LastURL', '');
    view = setup({});
    await view.type('1357');
    await view.type('1357');
    expect(view.location()).toBe(HOME);
    expect(getClientVar('UBTConnect.IsNavigateToHomeOnBack')).toBe(false);
  });

  it('from the menu: success message and Menu, no "Need help?"', async () => {
    const { container, type, location } = setup({ isFromMenu: true });
    expect(container.querySelector('.text-neutral-10')).toBeNull();
    await type('1357');
    await type('1357');
    expect(location()).toBe('/UBTConnect/Menu');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Your PIN has been changed.');
    });
  });
});
