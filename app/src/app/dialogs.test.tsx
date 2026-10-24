import { act, render } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, expect, test, vi } from 'vitest';
import { NavigationDialog } from '@/components/ui/Dialog';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { preventNavigation } from '@/shared/NavigationHandler/lib/actions';

/* connectDialogs (run by the test setup, as main.tsx does) joins the dialogs of components/ui/Dialog to the platform
   back-navigation queue. ConfirmDialog with ConfirmAction: platform/feedback/dialogs/useActionConfirmation.test. */
afterEach(resetBackQueue);

const location: Location = { pathname: '/UBTConnect/Profile', search: '', hash: '', state: null, key: 'k' };
const back = () => {
  let prevented = false;
  act(() => {
    prevented = runBackHandlers(createBackEvent(location, false, () => undefined));
  });
  return prevented;
};

test('NavigationDialog: a back navigation while shown is prevented and acts as No; closed, it goes on', () => {
  render(
    <NavigationDialog id="$b1" onNavigation={preventNavigation} header="Header" confirmLabel="Yes" dismissLabel="No" />,
  );
  expect(back()).toBe(false);
  const resume = vi.fn();
  const cancelled = vi.fn();
  window.addEventListener('dx-navigation-cancelled-by-user', cancelled);
  act(() => {
    window.dispatchEvent(
      new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume } }),
    );
  });
  expect(document.body.querySelector('.popup-dialog')).not.toBeNull();
  expect(back()).toBe(true);
  window.removeEventListener('dx-navigation-cancelled-by-user', cancelled);
  expect(document.body.querySelector('.popup-dialog')).toBeNull();
  expect(cancelled).toHaveBeenCalledTimes(1);
  expect(resume).not.toHaveBeenCalled();
  expect(back()).toBe(false);
});
