import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { SystemException } from '@/legacy/os/os-exceptions';
import { showErrorPage } from './errorPage';

/* showErrorPage: the runtime's navigateToErrorPage (OutSystems.js ErrorHandling W322831, facts P1 and P7 of
   migration/clarify/review/item8-w23-errorpage.md §2): log, three sessionStorage keys, then a full window change to
   the static page `_error.html` (item8-solution.md §3.1, design B (a), user 2026-10-28). */

let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  sessionStorage.clear();
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  vi.unstubAllGlobals();
  sessionStorage.clear();
});

describe('showErrorPage (navigateToErrorPage)', () => {
  test('writes the keys in the runtime format (StorageObject: "$OS_UBTConnect$<key>", JSON), then opens _error.html', () => {
    const error = new SystemException('The system is unavailable');
    showErrorPage(error);

    // P7: handleError passes no message, so the stored message and extra message are empty
    expect(sessionStorage.getItem('$OS_UBTConnect$ErrorPageMessage')).toBe('""');
    expect(sessionStorage.getItem('$OS_UBTConnect$ErrorPageExtraMessage')).toBe('""');
    expect(JSON.parse(sessionStorage.getItem('$OS_UBTConnect$ErrorPageExceptionInfo') ?? 'null')).toEqual({
      name: error.name,
      message: 'The system is unavailable',
    });
    expect(location.assign).toHaveBeenCalledExactlyOnceWith('/UBTConnect/_error.html');
  });

  test('logs the error before it leaves the page (P1, P6)', () => {
    showErrorPage(new SystemException('The system is unavailable'));

    expect(console.error).toHaveBeenCalled();
    const [logCall] = vi.mocked(console.error).mock.invocationCallOrder;
    const [assignCall] = location.assign.mock.invocationCallOrder;
    expect(logCall).toBeLessThan(assignCall ?? 0);
  });

  test('a value that is not an Error: its text as the message, no name (getExceptionInfo, getMessage)', () => {
    showErrorPage('Timeout');

    expect(JSON.parse(sessionStorage.getItem('$OS_UBTConnect$ErrorPageExceptionInfo') ?? 'null')).toEqual({
      message: 'Timeout',
    });
  });

  test('no session storage (private mode, quota): the page still opens', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
    });

    showErrorPage(new SystemException('The system is unavailable'));

    expect(location.assign).toHaveBeenCalledWith('/UBTConnect/_error.html');
  });
});
