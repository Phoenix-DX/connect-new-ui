import { act, render } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import { MOCK_USER_ID } from '../mockUser';
import { registerPin } from '../pin';
import { getShellState, setClientVar, setSignedInUser } from '../session';
import { freshPage } from '../testSupport';
import { showCommunicationExceptionMessage, showExceptionMessage } from './exceptionMessages';
import { resetFeedbackDebounce } from './feedbackMessageAutoClose';
import { FeedbackMessageHost } from './FeedbackMessageHost';
import { resetFeedbackMessages } from './feedbackStore';
import { pageRedirect } from './pageRedirect';

vi.mock('./pageRedirect', () => ({ pageRedirect: vi.fn() }));

beforeEach(() => {
  freshPage();
  vi.mocked(pageRedirect).mockClear();
  resetFeedbackMessages();
  resetFeedbackDebounce();
  render(<FeedbackMessageHost />);
});

const shown = () => document.querySelector('#feedbackMessageContainer > *');
const text = () => shown()?.querySelector('.feedback-message-text');
const show = async (msg: string, forceLogout = false) => {
  await act(async () => {
    await showExceptionMessage(msg, forceLogout);
  });
};

test('communication message: online → info "Service Interruption"; offline → error "No internet connection…"', () => {
  act(showCommunicationExceptionMessage);
  expect(shown()).toHaveClass('feedback-message-info');
  expect(text()?.querySelector('.feedback-message--title')?.textContent).toBe('Service Interruption');
  // shown as HTML: the parser turns the raw \r\n into \n
  expect(text()?.querySelector('.feedback-message--body')?.textContent).toContain(
    'We’re currently experiencing unusually high traffic, which may affect access to some services.\n\nOur team',
  );
  act(() => {
    setClientVar('UBTConnect.App_NetworkStatus_IsOnline_IsPersistent', false);
  });
  act(showCommunicationExceptionMessage);
  expect(shown()).toHaveClass('feedback-message-error');
  expect(text()?.textContent).toBe('No internet connection. Please check your network settings and try again.');
});

test('server texts are mapped to title and message', async () => {
  await show('Error executing query: timeout in SQL');
  expect(text()?.innerHTML).toBe(
    '<div class="feedback-message--title">Temporarily Unavailable</div><div class="feedback-message--body">Something went wrong, please try again later.</div>',
  );
  resetFeedbackDebounce();
  await show('An error has occurred.');
  expect(shown()).toHaveClass('feedback-message-info');
  expect(text()?.querySelector('.feedback-message--title')?.textContent).toBe('Service Interruption');
});

test('anything else: the message itself as an error, debounced for 5 s', async () => {
  vi.useFakeTimers({ toFake: ['Date'] });
  await show('Something odd');
  expect(shown()).toHaveClass('feedback-message-error');
  expect(text()?.textContent).toBe('Something odd.');
  vi.advanceTimersByTime(4_000);
  await show('Second error within 5 s');
  expect(text()?.textContent).toBe('Something odd.');
  vi.useRealTimers();
});

test('timeouts and failed requests show the communication message; "No role validation found" shows nothing', async () => {
  await show('No role validation found');
  expect(shown()).toBeNull();
  await show('Request failed with 404 Not Found');
  expect(shown()).toHaveClass('feedback-message-info');
  expect(text()?.querySelector('.feedback-message--title')?.textContent).toBe('Service Interruption');
});

test('Authorization denied: delayed toast (500 ms), logout, then a full page load of \\UBTConnect\\Login', async () => {
  setSignedInUser(MOCK_USER_ID);
  await registerPin('2468');
  await show('Authorization has been denied for this request.');
  expect(getShellState().signedIn).toBe(false);
  expect(getShellState().hasLocalPin).toBe(false);
  expect(pageRedirect).toHaveBeenCalledWith('\\UBTConnect\\Login', true);
  expect(shown()).toBeNull();
  await act(() => new Promise((resolve) => setTimeout(resolve, 520)));
  // B1: the delayed toast gets type 500 - 1 (the real page load would normally have replaced the page by then)
  expect(shown()?.getAttribute('data-not-captured')).toBe('Feedback message of type 499 (runtime, not captured)');
  expect(text()?.textContent).toBe(
    'Please make sure you have an active Connect plan. For further details, please refer to your regional helpdesk.',
  );
});

test('ForceLogout from the caller (App_Common SecurityException, signed in)', async () => {
  setSignedInUser(MOCK_USER_ID);
  await show('Not allowed', true);
  expect(text()?.textContent).toBe('Not allowed.');
  expect(getShellState().signedIn).toBe(false);
  expect(pageRedirect).toHaveBeenCalledOnce();
});
