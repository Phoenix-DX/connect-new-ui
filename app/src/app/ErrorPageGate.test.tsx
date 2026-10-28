import { act, render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import { resetErrorPage, showErrorPage } from '@/platform/feedback/errorPage';
import { ErrorPageGate } from './ErrorPageGate';

/* The runtime's error page for a system exception that no flow handler takes (OS.ErrorHandling navigateToErrorPage:
   `_error.html`). _error.html is not captured: the review marker shows its place (item 2 D1 (b), user 2026-10-28). */

beforeEach(() => {
  resetErrorPage();
});

test('the app renders until the error page opens; then the marker with the message replaces it', () => {
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
  render(
    <ErrorPageGate>
      <p>app</p>
    </ErrorPageGate>,
  );
  expect(screen.getByText('app')).toBeInTheDocument();
  act(() => {
    showErrorPage(new Error('The system is unavailable'));
  });
  expect(screen.queryByText('app')).toBeNull();
  const marker = document.querySelector('[data-not-captured]');
  expect(marker?.getAttribute('data-not-captured')).toBe('error screen of the original app (_error.html)');
  expect(marker?.textContent).toContain('The system is unavailable');
});
