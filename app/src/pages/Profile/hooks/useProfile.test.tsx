import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { putCacheableObject } from '@/api/client/cache';
import { useCountryInfoQuery } from '@/api/country';
import { editMemberDetails } from '@/api/member';
import { CommunicationException, isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { mockDirectoryUser, mockUserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { jSUtils_CopyToClipboard } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { useProfile } from './useProfile';

vi.mock('@/api/member', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/member')>()),
  editMemberDetails: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/api/country', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/country')>()),
  useCountryInfoQuery: vi.fn(() => ({ data: undefined })),
}));
vi.mock('@/api/client/cache', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/client/cache')>()),
  putCacheableObject: vi.fn(),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: vi.fn(),
}));
vi.mock('@/legacy/os/exceptions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/legacy/os/exceptions')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));
vi.mock('@/components/ui/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/components/ui/lib/actions')>()),
  bottomSheetOpen: vi.fn(),
}));
vi.mock('@/shared/UBTJavaScriptUtils/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/UBTJavaScriptUtils/lib/actions')>()),
  jSUtils_CopyToClipboard: vi.fn(() => Promise.resolve()),
}));

/* The flows of the Profile screen with the calls, the dialogs, the cache and the clipboard replaced by spies. */
const toggles = { policies: false, expired: false, householder: false };
const user = mockDirectoryUser(toggles);
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

function renderProfile() {
  const view = renderHook(() => useProfile());
  act(() => {
    view.result.current.onUserInformation(user);
  });
  return view;
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getUserInformation).mockResolvedValue(mockUserInformation(toggles));
});

describe('useProfile', () => {
  it('starts without the user; the user information fills the form and requests GetCountryInfo', () => {
    const { result } = renderHook(() => useProfile());
    expect(result.current.isFetched).toBe(false);
    expect(vi.mocked(useCountryInfoQuery)).toHaveBeenLastCalledWith('', false);

    act(() => {
      result.current.onUserInformation(user);
    });
    expect(result.current.isFetched).toBe(true);
    expect(result.current.state.accountForm.AccountForm_PersonalInformation.Email).toBe(user.Email);
    expect(result.current.state.accountFormOriginal).toBe(result.current.state.accountForm);
    expect(result.current.showContactSwitches).toBe(false);
    expect(result.current.preview).toMatchObject({ HouseholdMemberId: user.MemberID, UsePreview: true });
    expect(vi.mocked(useCountryInfoQuery)).toHaveBeenLastCalledWith('AR', true);
  });

  it('a change sets HasChanges; the same value as the original clears it', () => {
    const { result } = renderProfile();
    act(() => {
      result.current.onPersonalChange({ Email: 'new@example.org' });
    });
    expect(result.current.state.hasChanges).toBe(true);
    act(() => {
      result.current.onPersonalChange({ Email: user.Email });
    });
    expect(result.current.state.hasChanges).toBe(false);
    act(() => {
      result.current.onContactChange({ ShowWorkNumber: true });
    });
    expect(result.current.state.hasChanges).toBe(true);
  });

  it('the age switch keeps its value when confirmed and turns back on Cancel', async () => {
    const { result } = renderProfile();
    vi.mocked(confirmAction).mockResolvedValueOnce(false);
    act(() => {
      result.current.onShowAgeChange(true);
    });
    expect(result.current.state.accountForm.AccountForm_PersonalInformation.ShowLifeCycleDates).toBe(true);
    await settle();
    expect(confirmAction).toHaveBeenCalledWith('AgeConfirmation_PopUp');
    expect(result.current.state.accountForm.AccountForm_PersonalInformation.ShowLifeCycleDates).toBe(false);
    expect(result.current.state.hasChanges).toBe(false);

    vi.mocked(confirmAction).mockResolvedValueOnce(true);
    act(() => {
      result.current.onShowAgeChange(true);
    });
    await settle();
    expect(result.current.state.accountForm.AccountForm_PersonalInformation.ShowLifeCycleDates).toBe(true);
    expect(result.current.state.hasChanges).toBe(true);
  });

  it('"Preview Household Profile" copies the form to the preview and opens the sheet', () => {
    const { result } = renderProfile();
    act(() => {
      result.current.onPreviewSheetInitialized('b60-$b1');
    });
    act(() => {
      result.current.onPersonalChange({ Email: 'preview@example.org' });
    });
    expect(result.current.preview.UI_AccountForm).toBe(result.current.state.accountFormViewPreview);
    expect(result.current.state.accountFormViewPreview.AccountForm_PersonalInformation.Email).toBe(user.Email);
    act(() => {
      result.current.onViewPreview();
    });
    expect(bottomSheetOpen).toHaveBeenCalledWith('b60-$b1');
    expect(result.current.preview.UI_AccountForm).toBe(result.current.state.accountForm);
    expect(result.current.state.accountFormViewPreview.AccountForm_PersonalInformation.Email).toBe(
      'preview@example.org',
    );
  });

  it('the copy icon copies the account number', () => {
    const { result } = renderProfile();
    act(() => {
      result.current.onCopyAccountNumber();
    });
    expect(jSUtils_CopyToClipboard).toHaveBeenCalledWith(user.AccountNumber);
  });

  it('Save sends the form, keeps it as the original, updates the cached visibility and shows the message', async () => {
    const { result } = renderProfile();
    act(() => {
      result.current.onPersonalChange({ Email: 'saved@example.org' });
    });
    act(() => {
      result.current.onSave();
    });
    expect(result.current.state.isLoadingSubmit).toBe(true);
    await settle();
    const form = result.current.state.accountForm;
    expect(editMemberDetails).toHaveBeenCalledWith(form, true);
    expect(result.current.state.isLoadingSubmit).toBe(false);
    expect(result.current.state.accountFormOriginal).toBe(form);
    expect(result.current.state.hasChanges).toBe(false);
    expect(putCacheableObject).toHaveBeenCalledTimes(1);
    expect(vi.mocked(putCacheableObject).mock.lastCall?.[1]).toMatchObject({
      Directory_UserCurrent: { Directory_UserCurrent_Visibility: { DisplayAge: false, DisplayMobilePhone: false } },
    });
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Your update request has been submitted.', messageType: 'success' }),
    );
  });

  it('Save with a form that is not valid sends nothing and clears HasChanges', async () => {
    const { result } = renderProfile();
    act(() => {
      result.current.onPersonalChange({ Email: 'not-valid' });
    });
    vi.spyOn(result.current.validation, 'isValid').mockReturnValue(false);
    act(() => {
      result.current.onSave();
    });
    await settle();
    expect(editMemberDetails).not.toHaveBeenCalled();
    expect(result.current.state.isLoadingSubmit).toBe(false);
    expect(result.current.state.hasChanges).toBe(false);
  });

  it('a failed save stops the loading state and raises a Bubble exception to the flow handler', async () => {
    const { result } = renderProfile();
    vi.mocked(editMemberDetails).mockRejectedValueOnce(new CommunicationException('offline'));
    act(() => {
      result.current.onPersonalChange({ Email: 'failed@example.org' });
    });
    act(() => {
      result.current.onSave();
    });
    await settle();
    expect(result.current.state.isLoadingSubmit).toBe(false);
    expect(result.current.state.hasChanges).toBe(true);
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(
      isUserException(vi.mocked(raiseToFlowHandler).mock.lastCall?.[0], 'UBTConnect.BubbleCommunicationException'),
    ).toBe(true);
  });
});
