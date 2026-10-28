import { act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { startApp } from '@/platform/bootstrap/appStartSteps';
import { showExceptionMessage } from '@/platform/feedback';
import { resetFeedbackDebounce } from '@/platform/feedback/feedbackMessageAutoClose';
import { getFeedbackMessage, resetFeedbackMessages, subscribeFeedback } from '@/platform/feedback/feedbackStore';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { DEFAULT_TRANSITION, transitionState } from '@/platform/navigation/screenTransition';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { signIn, signOut, signedOutRemotely } from '@/platform/session/auth';
import { getSessionStatus, subscribeSessionStatus } from '@/platform/session/machine';
import { registerPin } from '@/platform/session/pin';
import { getClientVar, getShellState, readPin, setClientVar } from '@/platform/session/session';
import { calledActions, freshPage } from '@/test/testSupport';
import { getErrorPage, resetErrorPage } from '@/platform/feedback/errorPage';
import {
  CommunicationException,
  InvalidLoginException,
  NotRegisteredException,
  SecurityException,
  SystemException,
  UserException,
  raiseToFlowHandler,
} from './exceptions';
import { IgnorableSystemException, ViewHasChangedException } from './os-exceptions';

/* The App_Common flow handler (raiseToFlowHandler), App_Common OnException in
   migration/shell/sources/UBTConnect.App_Common.controller.js (ACF): the SecurityException branch (ACF:61-89, G1) and
   the branches around it. */

vi.mock('@/platform/feedback/pageRedirect', () => ({ pageRedirect: vi.fn() }));
// The real sign-out functions, wrapped so that a test sees which one ran.
vi.mock('@/platform/session/auth', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/session/auth')>();
  return { ...original, signOut: vi.fn(original.signOut), signedOutRemotely: vi.fn(original.signedOutRemotely) };
});

const MESSAGE = 'Access to this information is not allowed for your account.';

beforeEach(async () => {
  freshPage();
  resetNavigation();
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  vi.mocked(pageRedirect).mockReset();
  vi.mocked(signOut).mockClear();
  vi.mocked(signedOutRemotely).mockClear();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  resetErrorPage();
  await startApp(); // signed-out start
  window.__osCalls = [];
});

afterEach(() => {
  window.history.replaceState(null, '', '/');
});

/** A signed-in device with a local PIN; the calls of the sign-in are cleared. */
async function signedInDevice(): Promise<void> {
  await signIn();
  await registerPin('1357');
  window.__osCalls = [];
}

const storageOf = (storage: Storage) =>
  Object.fromEntries(
    Array.from({ length: storage.length }, (_, i) => storage.key(i) ?? '')
      .sort()
      .map((key) => [key, storage.getItem(key)]),
  );

/** What a forced logout leaves: the session, the PIN, both storages, the calls, the toast and the page load. */
async function endStateOf(run: () => unknown) {
  await signedInDevice();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  vi.mocked(pageRedirect).mockReset();
  await act(async () => {
    await run();
  });
  await vi.waitFor(() => {
    expect(pageRedirect).toHaveBeenCalled();
  });
  return {
    status: getSessionStatus(),
    shell: getShellState(),
    pin: readPin(),
    localStorage: storageOf(localStorage),
    sessionStorage: storageOf(sessionStorage),
    calls: calledActions(),
    toast: getFeedbackMessage()?.message ?? null,
    redirects: vi.mocked(pageRedirect).mock.calls,
  };
}

describe('SecurityException, signed-in user (Has User Id? True, ACF:66-75)', () => {
  test('the message as a toast, Connect_Logout through signedOutRemotely, then a full load of \\UBTConnect\\Login', async () => {
    await signedInDevice();
    const order: string[] = [];
    const stopFeedback = subscribeFeedback(() => order.push(`toast: ${getFeedbackMessage()?.message ?? ''}`));
    const stopStatus = subscribeSessionStatus(() => order.push(`status: ${getSessionStatus().status}`));
    vi.mocked(pageRedirect).mockImplementation((url) => order.push(`page load: ${url}`));

    act(() => {
      raiseToFlowHandler(new SecurityException(MESSAGE));
    });
    await vi.waitFor(() => {
      expect(pageRedirect).toHaveBeenCalled();
    });
    stopFeedback();
    stopStatus();

    expect(order).toEqual([`toast: ${MESSAGE}`, 'status: signedOut', 'page load: \\UBTConnect\\Login']);
    expect(pageRedirect).toHaveBeenCalledExactlyOnceWith('\\UBTConnect\\Login', true);
    expect(signedOutRemotely).toHaveBeenCalledOnce();
    expect(signOut).not.toHaveBeenCalled();
    expect(getShellState()).toMatchObject({ signedIn: false, userId: null, hasLocalPin: false });
    expect(readPin()).toBeNull();
    expect(calledActions()).toEqual(['ActionAppManager_SynchAppContext']);
  });

  test('ends in the same state and storage as ShowExceptionMessage(message, ForceLogout = True)', async () => {
    const byFlowHandler = await endStateOf(() => {
      raiseToFlowHandler(new SecurityException(MESSAGE));
    });
    // the same signed-in device again, then the forced-logout path itself
    const byForcedLogout = await endStateOf(() => showExceptionMessage(MESSAGE, true));

    expect(byFlowHandler).toEqual(byForcedLogout);
    expect(byFlowHandler).toMatchObject({
      status: { status: 'signedOut' },
      toast: MESSAGE,
      redirects: [['\\UBTConnect\\Login', true]],
    });
    expect(signedOutRemotely).toHaveBeenCalledTimes(2);
  });

  test('the subtypes InvalidLoginException and NotRegisteredException take the same branch (OutSystems.js:2)', async () => {
    for (const error of [new InvalidLoginException(MESSAGE), new NotRegisteredException(MESSAGE, 'NotRegistered')]) {
      const end = await endStateOf(() => {
        raiseToFlowHandler(error);
      });
      expect(end).toMatchObject({ status: { status: 'signedOut' }, toast: MESSAGE });
    }
    expect(signedOutRemotely).toHaveBeenCalledTimes(2);
  });
});

describe('SecurityException, anonymous user (Has User Id? False, ACF:76-85)', () => {
  const routes = { '/UBTConnect/ContactUsDetails': <p>details</p>, '/UBTConnect/Login': <p>login</p> };

  test.each([
    ['SecurityException', new SecurityException(MESSAGE)],
    ['InvalidLoginException', new InvalidLoginException(MESSAGE)],
    ['NotRegisteredException', new NotRegisteredException(MESSAGE, 'NotRegistered')],
  ])(
    '%s: OutSystems_LastURL = the path, then Login?In_IsFromInvalidPermissions=True with the Default transition; no toast, no logout',
    async (_name, error) => {
      window.history.replaceState(null, '', '/UBTConnect/ContactUsDetails');
      const { router, at } = renderRoutes(routes, '/UBTConnect/ContactUsDetails');

      act(() => {
        raiseToFlowHandler(error);
      });
      await vi.waitFor(() => {
        expect(at()).toBe('/UBTConnect/Login?In_IsFromInvalidPermissions=True');
      });

      expect(router.state.historyAction).toBe('PUSH');
      expect(router.state.location.state).toEqual(transitionState(DEFAULT_TRANSITION));
      expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('/UBTConnect/ContactUsDetails');
      expect(getFeedbackMessage()).toBeNull();
      expect(signedOutRemotely).not.toHaveBeenCalled();
      expect(pageRedirect).not.toHaveBeenCalled();
      expect(getSessionStatus()).toEqual({ status: 'signedOut' });
      expect(calledActions()).toEqual([]);
    },
  );
});

describe('other exceptions keep their branches', () => {
  test('UserException, signed in: ShowExceptionMessage(message, False), the user stays signed in (ACF:91-105)', async () => {
    await signedInDevice();
    const { at } = renderRoutes({ '/UBTConnect/Menu': <p>menu</p> }, '/UBTConnect/Menu');
    act(() => {
      raiseToFlowHandler(new UserException('The note could not be saved'));
    });
    await vi.waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('The note could not be saved.');
    });
    expect(getShellState()).toMatchObject({ signedIn: true });
    expect(signedOutRemotely).not.toHaveBeenCalled();
    expect(pageRedirect).not.toHaveBeenCalled();
    expect(at()).toBe('/UBTConnect/Menu');
  });

  test('UserException, anonymous: the toast only, no navigation', async () => {
    const { at } = renderRoutes({ '/UBTConnect/ContactUsDetails': <p>details</p> }, '/UBTConnect/ContactUsDetails');
    act(() => {
      raiseToFlowHandler(new UserException('The message could not be sent'));
    });
    await vi.waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('The message could not be sent.');
    });
    expect(at()).toBe('/UBTConnect/ContactUsDetails');
    expect(getClientVar('UBT_AppManager.OutSystems_LastURL')).toBe('');
  });

  test('CommunicationException, signed in: ShowCommunicationExceptionMessage, the user stays signed in (ACF:46-59)', async () => {
    await signedInDevice();
    act(() => {
      raiseToFlowHandler(new CommunicationException('Request failed with status 401'));
    });
    expect(getFeedbackMessage()?.message).toContain("<div class='feedback-message--title'>Service Interruption</div>");
    expect(getShellState()).toMatchObject({ signedIn: true });
    expect(signedOutRemotely).not.toHaveBeenCalled();
    expect(pageRedirect).not.toHaveBeenCalled();
  });
});

describe('UBTConnect.BubbleCommunicationException, the first branch (ACF:31-44, App_Common F1)', () => {
  const bubbled = (message: string) => new UserException(message, 'UBTConnect.BubbleCommunicationException');

  test('online: ShowCommunicationExceptionMessage ("Service Interruption"), not the raw message of the request', async () => {
    await signedInDevice();
    act(() => {
      raiseToFlowHandler(bubbled('Request failed with status 503'));
    });
    const toast = getFeedbackMessage()?.message ?? '';
    expect(toast).toContain("<div class='feedback-message--title'>Service Interruption</div>");
    expect(toast).not.toContain('Request failed with status 503');
    expect(getShellState()).toMatchObject({ signedIn: true });
    expect(signedOutRemotely).not.toHaveBeenCalled();
    expect(pageRedirect).not.toHaveBeenCalled();
  });

  test('offline: the "No internet connection" message of ShowCommunicationExceptionMessage (UC:16085-16101)', () => {
    setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
    act(() => {
      raiseToFlowHandler(bubbled('Request failed with status 503'));
    });
    expect(getFeedbackMessage()?.message).toBe(
      'No internet connection. Please check your network settings and try again.',
    );
  });

  test('UBTConnect.BubbleGenericException keeps the AllExceptions branch: ShowExceptionMessage(message, False)', async () => {
    act(() => {
      raiseToFlowHandler(new UserException('The order could not be saved', 'UBTConnect.BubbleGenericException'));
    });
    await vi.waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('The order could not be saved.');
    });
  });
});

/* Item 2 (migration/clarify/review/item2-fetch-errors.md E4–E6, design approved by the user 2026-10-28):
   App_Common OnException in the compiled order. MCP (DEV) OnException of App_Common has the same nodes. */
describe('the ignore step comes first (ACF:24-26, OS.ErrorHandling.ignoreError; D1)', () => {
  test('an IgnorableSystemException, such as ViewHasChangedException, shows nothing and opens no error page', () => {
    act(() => {
      raiseToFlowHandler(new ViewHasChangedException());
      raiseToFlowHandler(new IgnorableSystemException('ignored'));
    });
    expect(getFeedbackMessage()).toBeNull();
    expect(getErrorPage()).toBeNull();
  });
});

describe('AllExceptions: the "NoteCommunicationError" test (ACF:98-110; D3)', () => {
  test('a message that contains "NoteCommunicationError" shows ShowCommunicationExceptionMessage', () => {
    act(() => {
      // NotesSheet Handler_OnSubmitNote raises it for a CommunicationException (E8)
      raiseToFlowHandler(new UserException('NoteCommunicationError', 'UBTConnect_Utils.CommunicationError'));
    });
    expect(getFeedbackMessage()?.message).toContain("<div class='feedback-message--title'>Service Interruption</div>");
  });

  test('the test is case sensitive (Index, ignoreCase False): another message keeps ShowExceptionMessage', async () => {
    act(() => {
      raiseToFlowHandler(new UserException('The notecommunicationerror text'));
    });
    await vi.waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('The notecommunicationerror text.');
    });
  });
});

describe('a system exception that is not ignorable (ACF:119 `throw ex`, runtime navigateToErrorPage; D1 (b))', () => {
  test('no message: the error page with the message of the exception', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    act(() => {
      raiseToFlowHandler(new SystemException('The system is unavailable'));
    });
    expect(getFeedbackMessage()).toBeNull();
    expect(getErrorPage()).toEqual({ message: 'The system is unavailable' });
    expect(error).toHaveBeenCalled();
    error.mockRestore();
  });
});

/* R6 (item8-w23-errorpage.md §1): navigateToErrorPage returns when the context is out of context (ErrorHandling
   W322831, `isValidContext`). The flow scope of the screen or block gives the context (item 8 §3.3). */
describe('9. the error page opens only from an active flow scope (R6)', () => {
  const inactive = { active: () => false };
  const active = { active: () => true };

  test('a system exception of a left screen: the log only, no error page', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    act(() => {
      raiseToFlowHandler(new SystemException('The system is unavailable'), inactive);
    });
    expect(getErrorPage()).toBeNull();
    expect(getFeedbackMessage()).toBeNull();
    expect(error).toHaveBeenCalledWith(expect.stringContaining('out of context'), expect.anything());
  });

  test('an active scope or no scope: the error page', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    act(() => {
      raiseToFlowHandler(new SystemException('The system is unavailable'), active);
    });
    expect(getErrorPage()).toEqual({ message: 'The system is unavailable' });

    resetErrorPage();
    act(() => {
      raiseToFlowHandler(new SystemException('The database is unavailable'));
    });
    expect(getErrorPage()).toEqual({ message: 'The database is unavailable' });
  });

  test('the other branches do not check the scope: a user exception of a left screen still shows its toast (R5)', async () => {
    act(() => {
      raiseToFlowHandler(new UserException('The note could not be saved'), inactive);
    });
    await vi.waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('The note could not be saved.');
    });
  });
});
