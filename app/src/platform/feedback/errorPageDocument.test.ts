import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { SystemException } from '@/legacy/os/os-exceptions';
import { showErrorPage } from './errorPage';

/* Test 10 of migration/clarify/review/item8-solution.md §7.2: the static error page public/UBTConnect/_error.html
   (design B (a), user 2026-10-28), a port of TST UBTConnect._error.html and the runtime ErrorScreen module
   (OutSystems.js W536056-538400; facts P2-P5, P7 of item8-w23-errorpage.md §2). The file is loaded into this document
   as the browser would: the head and the body, then the inline script at the end of the body. */

// Vitest runs from app/ (jsdom: import.meta.url is not a file URL)
const html = readFileSync(resolve(process.cwd(), 'public/UBTConnect/_error.html'), 'utf8');

/** The runtime's StorageObject key: "$OS_" + the home module + "$" + the key (OutSystems.js W38048, W36295). */
const storageKey = (key: string) => `$OS_UBTConnect$${key}`;

const byId = (id: string): HTMLElement => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`#${id} is missing in _error.html`);
  return element;
};

function loadErrorPage(): void {
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  const scripts = [...parsed.querySelectorAll('script')];
  const code = scripts.map((script) => script.textContent).join('\n');
  for (const script of scripts) script.remove();
  document.head.innerHTML = parsed.head.innerHTML;
  document.body.innerHTML = parsed.body.innerHTML;
  // The page's own inline script, run in this window so that the test's location stub and fake timers apply.
  // eslint-disable-next-line @typescript-eslint/no-implied-eval -- the script text of the static page under test
  const run = new Function(code) as () => void;
  run();
}

let location: { assign: ReturnType<typeof vi.fn> };

beforeEach(() => {
  sessionStorage.clear();
  location = { assign: vi.fn() };
  vi.stubGlobal('location', location);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  sessionStorage.clear();
});

describe('10. the static error page _error.html', () => {
  test('the document has no runtime scripts and keeps the viewport meta of the original', () => {
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    expect(parsed.querySelectorAll('script[src]')).toHaveLength(0);
    expect(parsed.querySelectorAll('script')).toHaveLength(1);
    expect(parsed.querySelector('meta[name="viewport"]')?.getAttribute('content')).toBe(
      'viewport-fit=cover, width=device-width, initial-scale=1',
    );
  });

  test('no stored texts: the default message, no extra text, the RELOAD button; spinner and detail hidden (P4)', () => {
    loadErrorPage();

    expect(byId('error-screen-message-text')).toHaveTextContent('There was an error processing your request.');
    expect(byId('error-screen-message-text-extra')).toHaveTextContent(/^$/);
    expect(byId('error-screen-message-reload-button')).toHaveTextContent('RELOAD');
    expect(byId('error-screen-message-reload-button')).toBeVisible();
    expect(byId('error-screen-spinner')).not.toBeVisible();
    expect(byId('exception-detail')).not.toBeVisible();
    expect(byId('exception-detail-text')).toHaveAttribute('hidden');
  });

  test('RELOAD hides the button and shows the spinner, then loads /UBTConnect/ after 2000 ms (P5)', () => {
    vi.useFakeTimers();
    loadErrorPage();

    byId('error-screen-message-reload-button').click();

    expect(byId('error-screen-message-reload-button')).not.toBeVisible();
    expect(byId('error-screen-spinner')).toBeVisible();
    expect(byId('error-screen-spinner').style.display).toBe('inline-block');
    vi.advanceTimersByTime(1999);
    expect(location.assign).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(location.assign).toHaveBeenCalledWith('/UBTConnect/');
  });

  test('a stored message and extra message win over the defaults (P4)', () => {
    sessionStorage.setItem(storageKey('ErrorPageMessage'), JSON.stringify('This application is temporarily offline.'));
    sessionStorage.setItem(storageKey('ErrorPageExtraMessage'), JSON.stringify('Try again in a few minutes.'));
    loadErrorPage();

    expect(byId('error-screen-message-text')).toHaveTextContent('This application is temporarily offline.');
    expect(byId('error-screen-message-text-extra')).toHaveTextContent('Try again in a few minutes.');
  });

  test('after showErrorPage: the default message, the exception message only in the console (P7)', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    showErrorPage(new SystemException('The itinerary service is unavailable'));
    expect(location.assign).toHaveBeenCalledWith('/UBTConnect/_error.html');
    consoleError.mockClear();

    loadErrorPage();

    expect(byId('error-screen-message-text')).toHaveTextContent('There was an error processing your request.');
    expect(document.body).not.toHaveTextContent('The itinerary service is unavailable');
    expect(consoleError).toHaveBeenCalledWith('The itinerary service is unavailable');
  });

  test('unreadable stored values: the defaults', () => {
    sessionStorage.setItem(storageKey('ErrorPageMessage'), '{not json');
    sessionStorage.setItem(storageKey('ErrorPageExceptionInfo'), 'undefined');
    loadErrorPage();

    expect(byId('error-screen-message-text')).toHaveTextContent('There was an error processing your request.');
  });
});
