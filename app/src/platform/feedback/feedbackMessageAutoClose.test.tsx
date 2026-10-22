import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { feedbackMessageAutoClose, resetFeedbackDebounce } from './feedbackMessageAutoClose';
import { FeedbackMessageHost } from './FeedbackMessageHost';
import { resetFeedbackMessages, showFeedbackMessage } from './feedbackStore';

beforeEach(() => {
  resetFeedbackMessages();
  resetFeedbackDebounce();
  render(<FeedbackMessageHost />);
});
afterEach(() => {
  vi.useRealTimers();
});

const show = (input: Parameters<typeof feedbackMessageAutoClose>[0]) => {
  act(() => {
    feedbackMessageAutoClose(input);
  });
};
const message = () => document.querySelector('#feedbackMessageContainer > .feedback-message');

test('titled message: captured markup, classes twice, title and body as HTML, "." appended', () => {
  show({ title: 'Service Interruption', message: 'We are <b>busy</b>', messageType: 'info' });

  const container = document.getElementById('feedbackMessageContainer');
  expect(container).toHaveClass('feedback-message-wrapper');
  expect(container?.nextElementSibling).toBe(document.getElementById('reactContainer'));
  expect(message()?.className).toBe(
    'feedback-message feedback-message-info feedback-message-autoclose feedback-message-autoclose',
  );
  expect(message()).toHaveAttribute('role', 'alert');
  expect(message()).toHaveAttribute('tabindex', '0');
  expect(message()?.querySelector(':scope > i')).not.toBeNull();
  expect(message()?.querySelector('.feedback-message-text')?.innerHTML).toBe(
    '<div class="feedback-message--title">Service Interruption</div><div class="feedback-message--body">We are <b>busy</b>.</div>',
  );
});

test('without a title the text stays encoded; Error is the default type; ! and ? end a sentence too', () => {
  show({ message: 'Use <b> tags!' });
  expect(message()).toHaveClass('feedback-message-error');
  expect(screen.getByText('Use <b> tags!')).toHaveClass('feedback-message-text');
  show({ message: 'Done', messageType: 'success', extendedClass: 'x' });
  expect(message()?.className).toBe(
    'feedback-message feedback-message-success x feedback-message-autoclose x feedback-message-autoclose',
  );
  expect(screen.getByText('Done.')).toBeInTheDocument();
});

test('a click closes the message; no timer removes it (the CSS animation hides it)', async () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout'] });
  show({ message: 'Saved.', messageType: 'success' });
  act(() => {
    vi.advanceTimersByTime(60_000);
  });
  expect(message()).not.toBeNull();
  vi.useRealTimers();
  await userEvent.click(screen.getByRole('alert'));
  expect(message()).toBeNull();
});

test('debounce: a debounced message within 5 s of the last shown one is dropped', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout'] });
  show({ message: 'First', useDebounce: true }); // the first call always passes (last = now)
  act(() => {
    vi.advanceTimersByTime(4_999);
  });
  show({ message: 'Second', useDebounce: true });
  expect(screen.getByText('First.')).toBeInTheDocument();
  act(() => {
    vi.advanceTimersByTime(1);
  });
  show({ message: 'Third', useDebounce: true });
  expect(screen.getByText('Third.')).toBeInTheDocument();
  show({ message: 'Not debounced' }); // shows, and resets the window
  act(() => {
    vi.advanceTimersByTime(3_000);
  });
  show({ message: 'Dropped', useDebounce: true });
  expect(screen.getByText('Not debounced.')).toBeInTheDocument();
});

test('B1: a delayed message shows after DelayMs with type DelayMs - 1 (runtime rendering not captured)', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout'] });
  show({ message: 'Later', messageType: 'info', delayMs: 500 });
  expect(screen.queryByText('Later.')).toBeNull();
  act(() => {
    vi.advanceTimersByTime(500);
  });
  expect(screen.getByText('Not captured: Feedback message of type 499 (runtime, not captured)')).toBeInTheDocument();
  expect(screen.getByText('Later.')).toHaveClass('feedback-message-text');
});

test('B2: a delayed titled message is wrapped twice, with "." after the inner body div', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout'] });
  show({ title: 'T', message: 'M', delayMs: 500 });
  act(() => {
    vi.advanceTimersByTime(500);
  });
  expect(document.querySelector('#feedbackMessageContainer .feedback-message-text')?.innerHTML).toBe(
    '<div class="feedback-message--title">T</div><div class="feedback-message--body">' +
      '<div class="feedback-message--title">T</div><div class="feedback-message--body">M.</div>.</div>',
  );
});

test('platform message (no title, no autoclose class), as BookmarksByGroup dom[offline]', () => {
  act(() => {
    showFeedbackMessage('Request failed with an error', 3);
  });
  expect(message()?.className).toBe('feedback-message feedback-message-error');
  expect(screen.getByText('Request failed with an error')).toHaveClass('feedback-message-text');
});
