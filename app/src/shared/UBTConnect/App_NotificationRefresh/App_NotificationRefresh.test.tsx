import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { App_NotificationRefresh } from './App_NotificationRefresh';
import * as stories from './App_NotificationRefresh.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('App_NotificationRefresh', () => {
  testCapturedVariants(stories, captures);

  it('triggers Updated when Datetime changes, not on the first render', () => {
    const onUpdated = vi.fn();
    const { rerender } = render(<App_NotificationRefresh datetime="2026-10-14T08:00:00" onUpdated={onUpdated} />);
    expect(onUpdated).not.toHaveBeenCalled();
    rerender(<App_NotificationRefresh datetime="2026-10-14T08:00:00" onUpdated={onUpdated} />);
    expect(onUpdated).not.toHaveBeenCalled();
    rerender(<App_NotificationRefresh datetime="2026-10-14T08:05:00" onUpdated={onUpdated} />);
    expect(onUpdated).toHaveBeenCalledTimes(1);
  });
});
