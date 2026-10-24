import { render } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BACK_PRIORITY } from '@/platform/navigation';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { testCapturedVariants } from '@/test/capturedVariants';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { PreventBackNavigation } from './PreventBackNavigation';
import * as stories from './PreventBackNavigation.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const location: Location = { pathname: '/UBTConnect/PINRegister', search: '', hash: '', state: null, key: 'k' };

describe('PreventBackNavigation', () => {
  afterEach(resetBackQueue);
  testCapturedVariants(stories, captures);

  it('prevents back navigation above the modal priority and raises BackNavigationPrevented', () => {
    const prevented = vi.fn();
    const modal = vi.fn();
    const { unmount } = render(
      <>
        <BackNavigationHandler priority={BACK_PRIORITY.modal} onBackNavigation={modal} />
        <PreventBackNavigation onBackNavigationPrevented={prevented} />
      </>,
    );
    const event = createBackEvent(location, false, () => undefined);
    expect(runBackHandlers(event)).toBe(true);
    expect(prevented).toHaveBeenCalledWith(event);
    expect(modal).not.toHaveBeenCalled();
    unmount();
    expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(false);
  });
});
