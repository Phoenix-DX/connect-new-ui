import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { NetworkStatusChanged } from './NetworkStatusChanged';
import * as stories from './NetworkStatusChanged.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NetworkStatusChanged', () => {
  testCapturedVariants(stories, captures);

  it('raises NetworkStatusChanged only when the status changes', () => {
    const changed = vi.fn();
    const { unmount } = render(<NetworkStatusChanged onNetworkStatusChanged={changed} />);
    expect(changed).not.toHaveBeenCalled(); // online at start: IsOnline is already True
    act(() => {
      window.dispatchEvent(new Event('offline'));
      window.dispatchEvent(new Event('offline'));
      window.dispatchEvent(new Event('online'));
    });
    expect(changed.mock.calls).toEqual([[false], [true]]);
    unmount();
    window.dispatchEvent(new Event('offline'));
    expect(changed).toHaveBeenCalledTimes(2);
  });

  it('raises the event at start when the browser is offline', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    const changed = vi.fn();
    render(<NetworkStatusChanged onNetworkStatusChanged={changed} />);
    expect(changed).toHaveBeenCalledWith(false);
  });
});
