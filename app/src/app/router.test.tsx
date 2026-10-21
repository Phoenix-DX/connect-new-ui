import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { expect, test } from 'vitest';
import { NotMigrated } from './NotMigrated';

test('an unknown route shows the not-captured marker with its path', () => {
  const router = createMemoryRouter([{ path: '*', element: <NotMigrated route={null} /> }], {
    initialEntries: ['/nowhere?x=1'],
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText('Not captured: unknown route')).toBeInTheDocument();
  expect(screen.getByText('/nowhere?x=1')).toBeInTheDocument();
});
