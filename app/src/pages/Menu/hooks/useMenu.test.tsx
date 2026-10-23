import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { requestPhotoUpdate } from '@/api/member';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { TransitionAnimation } from '@/platform/navigation';
import { signOut } from '@/platform/session/auth';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import { openInApp_OpenExternalLink } from '@/shared/UBTConnect_Utils/lib/actions';
import { useMenu } from './useMenu';

const navigate = vi.fn();

vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/session/auth', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/auth')>()),
  signOut: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/api/member', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/member')>()),
  requestPhotoUpdate: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/shared/UBTConnect_Utils/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/UBTConnect_Utils/lib/actions')>()),
  openInApp_OpenExternalLink: vi.fn(),
}));

/* The flows of the Menu screen with the platform, the call and the in-app browser replaced by spies. */
const user = mockDirectoryUser({ policies: false, expired: false, householder: true });
const option = (id: string) => ({ Id: id });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useMenu', () => {
  it('starts with the rows of Menu_GetList and no user; the user information fills the state', () => {
    const { result } = renderHook(() => useMenu());
    const before = result.current.menuSection;
    expect(result.current.state.isFetched).toBe(false);
    expect(before.MenuOptions).toHaveLength(6);

    act(() => {
      result.current.onUserInformation(user);
    });
    expect(result.current.state.isFetched).toBe(true);
    expect(result.current.state.user).toBe(user);
    expect(result.current.menuSection).not.toBe(before);
  });

  it('keeps the same In_MenuSection record while MenuOptionList does not change', () => {
    const { result, rerender } = renderHook(() => useMenu());
    const before = result.current.menuSection;
    rerender();
    expect(result.current.menuSection).toBe(before);
  });

  it('"Edit your account" opens Profile only once the user information has come', () => {
    const { result } = renderHook(() => useMenu());
    result.current.onEditYourAccount();
    expect(navigate).not.toHaveBeenCalled();

    act(() => {
      result.current.onUserInformation(user);
    });
    result.current.onEditYourAccount();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Profile');
  });

  it('the rows Contact Us, Terms & Policies and PIN & Biometrics open their screens', async () => {
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Contact Us'));
    result.current.onMenuOption(option('Terms & Policies'));
    result.current.onMenuOption(option('PIN & Biometrics'));
    await settle();
    expect(navigate.mock.calls).toEqual([
      ['/UBTConnect/ContactUsMenu'],
      ['/UBTConnect/TermsAndPoliciesMenu'],
      ['/UBTConnect/PINBiometricsMenu'],
    ]);
  });

  it('Log out: confirmed, it signs out and opens HomeFeed with the fade transition', async () => {
    vi.mocked(confirmAction).mockResolvedValue(true);
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Log out'));
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('PopUp_Logout');
    expect(signOut).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HomeFeed', undefined, {
      transition: TransitionAnimation.Fade,
    });
  });

  it('Log out: dismissed, it does nothing', async () => {
    vi.mocked(confirmAction).mockResolvedValue(false);
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Log out'));
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('PopUp_Logout');
    expect(signOut).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it('Subscription and Payments opens the manage link in the app browser once the user information has come', async () => {
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Subscription and Payments'));
    await settle();
    expect(openInApp_OpenExternalLink).not.toHaveBeenCalled();

    act(() => {
      result.current.onUserInformation(user);
    });
    result.current.onMenuOption(option('Subscription and Payments'));
    await settle();
    expect(openInApp_OpenExternalLink).toHaveBeenCalledWith(
      user.Directory_UserCurrent_Subscription.SubscriptionManageLink,
      true,
    );
  });

  it('Request Photo Update: confirmed, it sends the request and shows the success message', async () => {
    vi.mocked(confirmAction).mockResolvedValue(true);
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Request Photo Update'));
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('Popup_SubmitPhotoRequest');
    expect(requestPhotoUpdate).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'Your update photo request has been submitted.',
      PLATFORM_MESSAGE_TYPE.success,
    );
  });

  it('Request Photo Update: dismissed, it sends nothing', async () => {
    vi.mocked(confirmAction).mockResolvedValue(false);
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Request Photo Update'));
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('Popup_SubmitPhotoRequest');
    expect(requestPhotoUpdate).not.toHaveBeenCalled();
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('another row shows "Go to <Id>"; a failed flow goes to the flow handler', async () => {
    const { result } = renderHook(() => useMenu());
    result.current.onMenuOption(option('Notifications'));
    await settle();
    expect(showFeedbackMessage).toHaveBeenCalledWith('Go to Notifications', PLATFORM_MESSAGE_TYPE.info);

    const error = new Error('Request failed with status 500');
    vi.mocked(confirmAction).mockResolvedValue(true);
    vi.mocked(requestPhotoUpdate).mockRejectedValueOnce(error);
    result.current.onMenuOption(option('Request Photo Update'));
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    });
  });
});
