import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { addLogSink } from '@/platform/log/log';
import { ErrorBoundary } from './ErrorBoundary';

function Broken(): never {
  throw new Error('boom');
}

test('a render error is logged and shows the not-captured marker', () => {
  const seen = vi.fn();
  const remove = addLogSink(seen);
  vi.spyOn(console, 'error').mockImplementation(() => undefined); // React reports the error too
  render(
    <ErrorBoundary>
      <Broken />
    </ErrorBoundary>,
  );
  expect(screen.getByText('Not captured: error screen of the original app (render error)')).toBeInTheDocument();
  expect(seen).toHaveBeenCalledWith(expect.objectContaining({ level: 'error', message: 'render error' }));
  remove();
});
