import { render } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { BackNavigationHandler } from './BackNavigationHandler';
import * as stories from './BackNavigationHandler.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const location: Location = { pathname: '/UBTConnect/Menu', search: '', hash: '', state: null, key: 'k' };
const back = () => runBackHandlers(createBackEvent(location, false, () => undefined));

describe('BackNavigationHandler', () => {
  afterEach(resetBackQueue);
  testCapturedVariants(stories, captures);

  it('runs its BackNavigation event by priority while mounted', () => {
    const order: string[] = [];
    const { unmount } = render(
      <>
        <BackNavigationHandler priority={1} onBackNavigation={() => order.push('low')} />
        <BackNavigationHandler
          priority={10}
          onBackNavigation={(event) => {
            order.push('high');
            event.preventDefault();
          }}
        />
      </>,
    );
    expect(back()).toBe(true);
    expect(order).toEqual(['high']);
    unmount();
    expect(back()).toBe(false);
  });

  it('does not prevent when the event is not handled', () => {
    const handler = vi.fn();
    render(<BackNavigationHandler priority={5} onBackNavigation={handler} />);
    expect(back()).toBe(false);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
