import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { resetBackQueue } from '@/platform/navigation/backQueue';
import { getClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { DialogAccessRestrictedAction } from './DialogAccessRestrictedAction';
import { showUpgradePopUp } from './subscription';

beforeEach(() => {
  freshPage();
  resetBackQueue();
});
afterEach(() => {
  vi.restoreAllMocks();
});

/* HF dom:1157-1165, whitespace removed */
const CAPTURED_CLOSED =
  '<div class="OSBlockWidget" data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" id="b13-$b4">' +
  '<div class="subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted" data-container="">' +
  '<div class="OSBlockWidget" data-block="ConfirmationDialogs.ActionConfirmationDialog" id="b13-b4-PopUp">' +
  '<div class="dx-confirmation-dialog" data-container="" id="b13-b4-b1-Root">' +
  '<div data-container="" data-dx-event-hub="True" id="b13-b4-b1-EventHub"></div>' +
  '</div></div></div></div>';

test('closed markup as captured; OnReady stores the dialog id in App_SubscriptionPopUp', () => {
  const { container } = render(<DialogAccessRestrictedAction />);
  expect(container.innerHTML).toBe(CAPTURED_CLOSED);
  expect(getClientVar('UBTConnect_Utils.App_SubscriptionPopUp')).toBe('b13-b4-PopUp');
});

test('App_Subscription_ShowUpgradePopUp opens it with the compiled texts; Close closes it', async () => {
  render(<DialogAccessRestrictedAction />);
  let done: Promise<void> = Promise.resolve();
  act(() => {
    done = showUpgradePopUp();
  });
  const dialog = screen.getByRole('dialog');
  expect(dialog.closest('.portal-class')?.className).toBe(
    'portal-class subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted',
  );
  expect(dialog).toHaveTextContent('Access Restricted');
  expect(dialog).toHaveTextContent(
    "It looks like this content isn't included in your current plan. Upgrade your subscription to access more features and detailed information.",
  );
  await userEvent.click(screen.getByRole('button', { name: 'Close' }));
  await done;
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('Upgrade Subscription opens the SubscriptionManageLink of the cached user in a new tab (U18)', async () => {
  setSignedInUser(MOCK_USER_ID);
  const open = vi.spyOn(window, 'open').mockReturnValue(null);
  render(<DialogAccessRestrictedAction />);
  act(() => {
    void showUpgradePopUp();
  });
  await userEvent.click(screen.getByRole('button', { name: /Upgrade Subscription/ }));
  await waitFor(() => {
    expect(open).toHaveBeenCalledWith('https://example.com/subscription', '_blank', 'noopener');
  });
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('without a stored dialog id nothing opens', async () => {
  await showUpgradePopUp();
  expect(screen.queryByRole('dialog')).toBeNull();
});
