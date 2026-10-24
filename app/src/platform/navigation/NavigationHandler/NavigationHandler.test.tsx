import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { NavigationHandler } from './NavigationHandler';
import * as stories from './NavigationHandler.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const navigate = () => window.dispatchEvent(new CustomEvent('dx-before-navigation', { cancelable: true }));

describe('NavigationHandler', () => {
  testCapturedVariants(stories, captures);

  it('raises Navigation for dx-before-navigation while mounted', () => {
    const onNavigation = vi.fn();
    const { unmount } = render(<NavigationHandler onNavigation={onNavigation} />);
    navigate();
    expect(onNavigation).toHaveBeenCalledTimes(1);
    expect(onNavigation.mock.calls[0]?.[0]).toBeInstanceOf(CustomEvent);
    unmount();
    navigate();
    expect(onNavigation).toHaveBeenCalledTimes(1);
  });
});
