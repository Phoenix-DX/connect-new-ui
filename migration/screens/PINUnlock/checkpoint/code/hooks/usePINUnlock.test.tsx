import { act, fireEvent, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as navigation from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';
import { setResumeLoginLink } from '@/platform/session/resume';
import { setClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { usePINUnlock } from './usePINUnlock';

vi.mock('@/platform/navigation', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/navigation')>();
  return { ...original, replaceOnUpcomingNavigation: vi.fn(original.replaceOnUpcomingNavigation) };
});

/** The Unlock event of the screen's Block_PINUnlock, raised by a button. */
function Unlock() {
  const { onUnlock } = usePINUnlock();
  return (
    <button type="button" onClick={onUnlock}>
      unlock
    </button>
  );
}

const unlock = () => {
  const router = createMemoryRouter([{ path: '*', element: <Unlock /> }], {
    initialEntries: ['/UBTConnect/Menu', '/UBTConnect/PINUnlock'],
  });
  const { getByText } = render(<RouterProvider router={router} />);
  act(() => {
    fireEvent.click(getByText('unlock'));
  });
  return router;
};
const at = (router: ReturnType<typeof unlock>) => router.state.location.pathname + router.state.location.search;

beforeEach(() => {
  freshPage();
  setClientVar('UBTConnect.LastURL', '');
  vi.mocked(navigation.replaceOnUpcomingNavigation).mockClear();
});

describe('usePINUnlock (Block_PINUnlockUnlock)', () => {
  it('goes to the resume login link first, in place of the PIN screen', () => {
    setResumeLoginLink('/UBTConnect/Bookmarks?Tab=2');
    setClientVar('UBTConnect.LastURL', '/UBTConnect/Menu');
    const router = unlock();
    expect(at(router)).toBe('/UBTConnect/Bookmarks?Tab=2');
    expect(router.state.historyAction).toBe('REPLACE');
    expect(navigation.replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
  });

  it('else goes back to LastURL, in place of the PIN screen', () => {
    setClientVar('UBTConnect.LastURL', '/UBTConnect/Menu');
    const router = unlock();
    expect(at(router)).toBe('/UBTConnect/Menu');
    expect(router.state.historyAction).toBe('REPLACE');
  });

  it('else goes to HomeFeed, in place of the PIN screen', () => {
    const router = unlock();
    expect(at(router)).toBe(PATHS.home);
    expect(router.state.historyAction).toBe('REPLACE');
    expect(navigation.replaceOnUpcomingNavigation).toHaveBeenCalledTimes(1);
  });
});
