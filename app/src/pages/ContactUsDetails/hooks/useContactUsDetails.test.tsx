import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCountryNames, fetchLocalityTimezone, sendContactUsMessage } from '@/api/message';
import { SystemException, UserException } from '@/legacy/os/exceptions';
import type { ContactUsDetailsInputs } from '@/pages/ContactUsDetails/inputs';
import { Type_ContactSubject } from '@/pages/ContactUsDetails/staticEntities';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { MOCK_USER_ID, mockDirectoryUser } from '@/platform/session/mockUser';
import { pinCheck } from '@/platform/session/pin';
import { setSignedInUser } from '@/platform/session/session';
import type { NavigationEvent } from '@/lib/navigationEvent';
import { emptyCallPopupData } from './contactUsDetailsState';
import { useContactUsDetails } from './useContactUsDetails';

const navigateBack = vi.fn();

vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useNavigateBack: () => navigateBack,
}));
vi.mock('@/api/message', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/message')>()),
  fetchCountryNames: vi.fn(() => Promise.resolve([{ code: 'AR', name: 'Argentina' }])),
  fetchLocalityTimezone: vi.fn(() => Promise.resolve({ timezoneName: 'ART', timezoneOffset: -180 })),
  sendContactUsMessage: vi.fn(() => Promise.resolve({ out_ErrorMessage: '' })),
}));
vi.mock('@/platform/feedback/dialogs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/dialogs')>()),
  confirmAction: vi.fn(() => Promise.resolve(true)),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: vi.fn(),
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/session/pin', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/pin')>()),
  pinCheck: vi.fn(() => ({ needRegister: false, needUnlock: true })),
}));

/* The flows of the ContactUsDetails screen, with the calls, the dialogs, the feedback, the flow handler and the
   back navigation replaced by spies. */
const inputs: ContactUsDetailsInputs = {
  In_ContactSubjectId: Type_ContactSubject.SetupAUBTOneAccount,
  In_ContactSubjectTitle: 'UBT One',
  In_ListMenuOptionLabel: 'Set up a UBT One account',
};
const feedbackInputs = { ...inputs, In_ContactSubjectId: Type_ContactSubject.GeneralSuggestionsFeedbackRating };
const user = mockDirectoryUser({ policies: false, expired: false, householder: true });
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderFlows = (screenInputs: ContactUsDetailsInputs = inputs) =>
  renderHook(() => useContactUsDetails(screenInputs), { wrapper });
/** Lets the flows that started finish (their awaits resolve before the next task). */
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

beforeEach(() => {
  vi.clearAllMocks();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('useContactUsDetails', () => {
  it('signed in: OnInitialize sets the subject texts and the loading state; OnReady fetches no countries', async () => {
    const { result } = renderFlows();
    await settle();
    expect(result.current.state).toMatchObject({ isLogged: true, isLoadingMainData: true, ignorePolices: false });
    expect(result.current.state.messagePrompt).toContain('regarding Set up a UBT One account.');
    expect(result.current.isFeedbackSubject).toBe(false);
    expect(fetchCountryNames).not.toHaveBeenCalled();
  });

  it('signed in without a PIN: the policies are ignored', () => {
    vi.mocked(pinCheck).mockReturnValueOnce({ needRegister: true, needUnlock: false });
    const { result } = renderFlows();
    expect(result.current.state.ignorePolices).toBe(true);
  });

  it('signed out: OnReady fetches the countries once with the screen variables', async () => {
    setSignedInUser(null);
    const { result } = renderFlows();
    await settle();
    expect(pinCheck).not.toHaveBeenCalled();
    expect(fetchCountryNames).toHaveBeenCalledTimes(1);
    expect(fetchCountryNames).toHaveBeenCalledWith({
      isLogged: false,
      isLoadingMainData: false,
      IgnorePolices: true,
      ...inputs,
    });
    expect(result.current.state.countries).toEqual([{ code: 'AR', name: 'Argentina' }]);
  });

  it('the user information fills the form, then the locality time zone goes to the call popup', async () => {
    const { result } = renderFlows();
    act(() => {
      result.current.onUserInformation(user);
    });
    expect(result.current.state.isLoadingMainData).toBe(false);
    expect(result.current.state.contactUsForm.Country).toBe('Argentina');
    expect(fetchLocalityTimezone).toHaveBeenCalledWith(
      expect.objectContaining({ isLogged: true, CountryPhone: '+54 11 555 0100', CallPopupData: emptyCallPopupData() }),
    );
    await settle();
    expect(result.current.state.timezone).toEqual({ timezoneName: 'ART', timezoneOffset: -180 });
    expect(result.current.state.callPopupData.ContactPopupData).toMatchObject({
      TimezoneName: 'ART',
      TimezoneOffset: -180,
    });
  });

  it('a failed time zone call goes to the flow handler', async () => {
    const error = new Error('down');
    vi.mocked(fetchLocalityTimezone).mockRejectedValueOnce(error);
    const { result } = renderFlows();
    act(() => {
      result.current.onUserInformation(user);
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
  });

  it('the Support Team link opens the call popup; Cancel closes it', async () => {
    const { result } = renderFlows();
    act(() => {
      result.current.onUserInformation(user);
    });
    await settle();
    act(() => {
      result.current.onSupportTeam();
    });
    expect(result.current.state.callPopupData.ContactPopupData).toMatchObject({
      Name: 'Support Team',
      ShowPopup: true,
      DisplayContactNumber: '+54 11 555 0100',
    });
    expect(result.current.state.callPopupData.ContactPopupData.ImageURL).toContain('UbtLogo');
    act(() => {
      result.current.onCallPopupClose();
    });
    expect(result.current.state.callPopupData.ContactPopupData.ShowPopup).toBe(false);
  });

  it('the message change sets the filled flags; the feedback check box toggles', () => {
    const { result } = renderFlows(feedbackInputs);
    expect(result.current.isFeedbackSubject).toBe(true);
    expect(result.current.state.showRate).toBe(true);
    act(() => {
      result.current.onMessageChange('Hello');
    });
    expect(result.current.state).toMatchObject({ isFormFilled: true, isAnyFilled: true });
    act(() => {
      result.current.onWantToBeContactedToggle();
    });
    expect(result.current.state.userWantToBeContacted).toBe(true);
  });

  it('Send: the trimmed message is sent; the thank-you dialog confirmed resets the form and goes back', async () => {
    const { result } = renderFlows(feedbackInputs);
    act(() => {
      result.current.onUserInformation(user);
    });
    await settle();
    act(() => {
      result.current.onMessageChange('  Hello  ');
      result.current.onWantToBeContactedToggle();
    });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(sendContactUsMessage).toHaveBeenCalledWith(
      expect.objectContaining({ Message: 'Hello', Country: 'Argentina' }),
      Type_ContactSubject.GeneralSuggestionsFeedbackRating,
      0,
      true,
    );
    expect(confirmAction).toHaveBeenCalledWith('SubmittedConfirmation');
    expect(result.current.state).toMatchObject({ isSubmiting: false, isFormFilled: false, isAnyFilled: false });
    expect(result.current.state.contactUsForm.Message).toBe('');
    expect(navigateBack).toHaveBeenCalledTimes(1);
  });

  it('Send: the thank-you dialog closed without confirmation keeps the screen', async () => {
    vi.mocked(confirmAction).mockResolvedValueOnce(false);
    const { result } = renderFlows();
    act(() => {
      result.current.onMessageChange('Hello');
    });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(navigateBack).not.toHaveBeenCalled();
    expect(result.current.state).toMatchObject({ isSubmiting: false, isFormFilled: false, isAnyFilled: true });
  });

  it('Send: an error message of the server shows as an error feedback', async () => {
    vi.mocked(sendContactUsMessage).mockResolvedValueOnce({ out_ErrorMessage: 'Try again later' });
    const { result } = renderFlows();
    act(() => {
      result.current.onMessageChange('Hello');
    });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(confirmAction).not.toHaveBeenCalled();
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith({
      title: '',
      message: 'Try again later',
      messageType: 'error',
    });
    expect(result.current.state.isSubmiting).toBe(false);
  });

  it('Send: a user exception shows its message; a system exception goes to the flow handler', async () => {
    vi.mocked(sendContactUsMessage).mockRejectedValueOnce(new UserException('Not sent'));
    const { result } = renderFlows();
    act(() => {
      result.current.onMessageChange('Hello');
    });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith({ title: '', message: 'Not sent', messageType: 'error' });
    expect(result.current.state.isSubmiting).toBe(false);

    const system = new SystemException('Server down');
    vi.mocked(sendContactUsMessage).mockRejectedValueOnce(system);
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(system);
  });

  it('Send signed out: the invalid inputs keep Form_ContactUs invalid, so nothing is sent', async () => {
    setSignedInUser(null);
    const { result } = renderFlows();
    // Form_ContactUs and the unbuilt inputs of the signed-out form register, as the page renders them.
    const { validation } = result.current;
    validation.register({ id: 'Form_ContactUs', isValidationAggregator: true });
    for (const id of ['Input_FullName', 'Input_Email', 'Input_PhoneNumber']) {
      validation.register({ id, validationParentId: 'Form_ContactUs' });
    }
    act(() => {
      result.current.onMessageChange('Hello');
    });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(sendContactUsMessage).not.toHaveBeenCalled();
    expect(result.current.state.isSubmiting).toBe(false);
  });

  it('the leave confirmation prevents the back navigation', () => {
    const { result } = renderFlows();
    const event = new Event('navigation', { cancelable: true }) as NavigationEvent;
    result.current.onBackNavigation(event);
    expect(event.defaultPrevented).toBe(true);
  });
});
