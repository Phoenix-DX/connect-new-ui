import { act, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { beforeEach, expect, test } from 'vitest';
import { ScreenFrame } from './ScreenFrame';
import { resetNavigation } from './testRouter';

/* The document title of the screens: OutSystemsReactView.componentDidMount writes `document.title = this.title` (View.title
   is the screen name, TST OutSystemsReactView.js:2008); a path that shows no screen writes nothing. */

function renderTitled() {
  const router = createMemoryRouter(
    [
      { path: '/UBTConnect/Services', element: <ScreenFrame title="Services">Services</ScreenFrame> },
      { path: '/UBTConnect/MyBookmarks', element: <ScreenFrame title="MyBookmarks">MyBookmarks</ScreenFrame> },
      { path: '*', element: <p>no screen</p> },
    ],
    { initialEntries: ['/UBTConnect/Services'] },
  );
  render(<RouterProvider router={router} />);
  return router;
}

beforeEach(() => {
  resetNavigation();
  document.title = 'UBTConnect';
});

test('a screen writes its title to the document title when it mounts and on each route change', async () => {
  const router = renderTitled();
  expect(document.title).toBe('Services');
  await act(() => router.navigate('/UBTConnect/MyBookmarks'));
  expect(document.title).toBe('MyBookmarks');
  await act(() => router.navigate(-1));
  expect(document.title).toBe('Services');
});

test('a path that shows no screen keeps the document title', async () => {
  const router = renderTitled();
  await act(() => router.navigate('/UBTConnect/Nowhere'));
  expect(document.title).toBe('Services');
});

test('a ScreenFrame without a title does not change the document title', () => {
  const router = createMemoryRouter([{ path: '/x', element: <ScreenFrame>x</ScreenFrame> }], {
    initialEntries: ['/x'],
  });
  render(<RouterProvider router={router} />);
  expect(document.title).toBe('UBTConnect');
});
