import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { ControllerDisposedException, OutOfContextException, SystemException } from '@/legacy/os/os-exceptions';
import { installIgnorableErrorFilter } from './ignorableErrors';

/* The top-level ignore filter: TST ignores an IgnorableSystemException at the top (OS.ErrorHandling.ignoreError
   W324172). Item 8 §2.4: a navigation of a left screen throws OutOfContextException, also from a click handler that
   has no `.catch`. */

let uninstall: () => void = () => undefined;
beforeEach(() => {
  uninstall = installIgnorableErrorFilter();
});
afterEach(() => {
  uninstall();
});

test('11. an OutOfContextException from a click handler does not reach console.error', async () => {
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  render(
    <button
      type="button"
      onClick={() => {
        throw new OutOfContextException();
      }}
    >
      go
    </button>,
  );

  await userEvent.click(screen.getByText('go'));

  expect(consoleError).not.toHaveBeenCalled();
});

/** An `unhandledrejection` event as the browser sends it (jsdom has no PromiseRejectionEvent). */
function rejectionEvent(reason: unknown): Event {
  const event = new Event('unhandledrejection', { cancelable: true });
  Object.defineProperty(event, 'reason', { value: reason });
  return event;
}

test('an unhandled rejection with an IgnorableSystemException is ignored; another one is not', () => {
  const ignorable = rejectionEvent(new ControllerDisposedException());
  const other = rejectionEvent(new SystemException('The system is unavailable'));

  window.dispatchEvent(ignorable);
  window.dispatchEvent(other);

  expect(ignorable.defaultPrevented).toBe(true);
  expect(other.defaultPrevented).toBe(false);
});

test('an error event of another error is not ignored, and the uninstall removes the filter', () => {
  const other = new ErrorEvent('error', { cancelable: true, error: new Error('render failed') });
  window.dispatchEvent(other);
  expect(other.defaultPrevented).toBe(false);

  uninstall();
  // A rejection event: Vitest turns an `error` event that no listener of the test takes into an unhandled error.
  const ignorable = rejectionEvent(new OutOfContextException());
  window.dispatchEvent(ignorable);
  expect(ignorable.defaultPrevented).toBe(false);
});
