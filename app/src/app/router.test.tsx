import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { beforeEach, expect, test, vi } from 'vitest';
import { setReviewMarkers } from '@/legacy/os/reviewMarkers';
import { log } from '@/platform/log/log';
import { UnknownPath } from './UnknownPath';

/* The `*` route (item 9 D3, migration/clarify/review/item9-solution.md §4.3). */

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

function renderAt(path: string) {
  const router = createMemoryRouter([{ path: '*', element: <UnknownPath /> }], { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}

test('a path that no route has renders nothing and logs "unknown path" (N5: the TST Root stays empty)', () => {
  setReviewMarkers(false);
  const error = vi.spyOn(log, 'error');
  const { container } = renderAt('/UBTConnect/NoSuchScreen?x=1');
  expect(container).toBeEmptyDOMElement();
  expect(error).toHaveBeenCalledExactlyOnceWith('unknown path', { path: '/UBTConnect/NoSuchScreen?x=1' });
});

test('dev server with ?review=1: the "unknown route" marker with the path', () => {
  setReviewMarkers(true);
  renderAt('/nowhere?x=1');
  expect(screen.getByText('Not captured: unknown route')).toBeInTheDocument();
  expect(screen.getByText('/nowhere?x=1')).toBeInTheDocument();
});
