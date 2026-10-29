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
import { IgnorableSystemException } from '@/legacy/os/os-exceptions';
import { contactUsDetailsReducer, emptyCallPopupData } from './contactUsDetailsState';
import { useContactUsDetails } from './useContactUsDetails';

vi.mock('./contactUsDetailsState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./contactUsDetailsState')>();
  return { ...actual, contactUsDetailsReducer: vi.fn(actual.contactUsDetailsReducer) };
});

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
/** The second argument of a raise: the flow scope of the screen. */
const FLOW_SCOPE: unknown = expect.objectContaining({ alive: expect.any(Function) as unknown });
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
      expect.objectContaining({
        isLogged: true,
        CountryPhone: '+54 11 555 0100',
        CallPopupData: emptyCallPopupData(),
        // F3: the user record goes with the call; the server reads In_LocalityId from it.
        LocalCacheControl_UserInformation: { Directory_UserCurrent: user, isFetched: true },
        ContactUsForm: result.current.state.contactUsForm,
        Description: result.current.state.description,
        MessagePrompt: result.current.state.messagePrompt,
      }),
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
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
  });

  it('a failed countries call (signed out) goes to the flow handler with the flow scope', async () => {
    setSignedInUser(null);
    const error = new Error('down');
    vi.mocked(fetchCountryNames).mockRejectedValueOnce(error);
    renderFlows();
    await settle();
    expect(vi.mocked(raiseToFlowHandler).mock.calls).toEqual([[error, FLOW_SCOPE]]);
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

  it('Send signed out: valid fields send the form; OnChange_Email clears the message of Input_Email', async () => {
    setSignedInUser(null);
    const { result } = renderFlows();
    const { validation } = result.current;
    validation.register({ id: 'Form_ContactUs', isValidationAggregator: true });
    for (const id of ['Input_FullName', 'Input_Email', 'Input_PhoneNumber']) {
      validation.register({ id, validationParentId: 'Form_ContactUs' });
    }
    act(() => {
      result.current.onFieldChange('FullName', 'Lucia Ferreyra');
      result.current.onFieldChange('Email', 'not an e-mail');
      result.current.onFieldChange('PhoneNumber', '+54 291 555 0142');
      result.current.onCountryVariableChange('AR');
      result.current.onCountryChange();
      result.current.onFieldChange('Locality', 'Bahia Blanca');
      result.current.onMessageChange('I cannot sign in.');
    });
    expect(result.current.state.isFormFilled).toBe(true);
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(sendContactUsMessage).not.toHaveBeenCalled();
    expect(validation.getWidgetRecord('Input_Email')).toEqual({
      validAttr: false,
      validationMessageAttr: 'Invalid email!',
    });
    act(() => {
      result.current.onFieldChange('Email', 'lucia.ferreyra@example.com');
    });
    expect(validation.getWidgetRecord('Input_Email')).toEqual({ validAttr: true, validationMessageAttr: '' });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(sendContactUsMessage).toHaveBeenCalledWith(
      {
        FullName: 'Lucia Ferreyra',
        Email: 'lucia.ferreyra@example.com',
        PhoneNumber: '+54 291 555 0142',
        Country: 'AR',
        Locality: 'Bahia Blanca',
        Message: 'I cannot sign in.',
      },
      inputs.In_ContactSubjectId,
      0,
      false,
    );
  });

  it('the rate of the feedback subject enables Send and goes with the message (BR-UBTCON-968, 970)', async () => {
    const { result } = renderFlows(feedbackInputs);
    act(() => {
      result.current.onUserInformation(user);
    });
    await settle();
    act(() => {
      result.current.onRateSelected(9);
    });
    expect(result.current.state).toMatchObject({ selectedRate: 9, isFormFilled: true, isAnyFilled: false });
    act(() => {
      result.current.onSend();
    });
    await settle();
    expect(sendContactUsMessage).toHaveBeenCalledWith(
      expect.objectContaining({ Message: '' }),
      feedbackInputs.In_ContactSubjectId,
      9,
      false,
    );
  });

  it('the leave confirmation prevents the back navigation', () => {
    const { result } = renderFlows();
    const event = new Event('navigation', { cancelable: true }) as NavigationEvent;
    result.current.onBackNavigation(event);
    expect(event.defaultPrevented).toBe(true);
  });
});

/** A call that the test answers. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
/** The errors that reached the flow handler, without the ignorable ones (the handler drops them: R1). */
const raisedErrors = () =>
  vi
    .mocked(raiseToFlowHandler)
    .mock.calls.map(([error]) => error)
    .filter((error) => !(error instanceof IgnorableSystemException));

/* Flow scope (item 8, item8-S5a.md Q1 (a)): DataAction_GetLocalityTimezone and DataAction_GetCountriesNames are data
   actions (IDataAction on the MCP, R1). After the unmount their answer and their failure are dropped. */
describe('useContactUsDetails after an unmount (flow scope, item 8)', () => {
  it('R1: unmount while DataAction_GetLocalityTimezone is pending: no state write, no raise', async () => {
    const call = deferred<Awaited<ReturnType<typeof fetchLocalityTimezone>>>();
    vi.mocked(fetchLocalityTimezone).mockReturnValueOnce(call.promise);
    const { result, unmount } = renderFlows();
    act(() => {
      result.current.onUserInformation(user);
    });
    unmount();
    vi.mocked(contactUsDetailsReducer).mockClear();
    call.resolve({ timezoneName: 'ART', timezoneOffset: -180 });
    await settle();
    expect(contactUsDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });

  it('R1: signed out, unmount while DataAction_GetCountriesNames is pending: no state write; its failure is dropped', async () => {
    setSignedInUser(null);
    const call = deferred<Awaited<ReturnType<typeof fetchCountryNames>>>();
    vi.mocked(fetchCountryNames).mockReturnValueOnce(call.promise);
    const { unmount } = renderFlows();
    await settle();
    expect(fetchCountryNames).toHaveBeenCalledTimes(1);
    unmount();
    vi.mocked(contactUsDetailsReducer).mockClear();
    call.reject(new Error('down'));
    await settle();
    expect(contactUsDetailsReducer).not.toHaveBeenCalled();
    expect(raisedErrors()).toEqual([]);
  });
});
