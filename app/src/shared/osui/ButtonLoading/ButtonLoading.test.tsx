import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { ButtonLoading } from './ButtonLoading';
import * as stories from './ButtonLoading.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ButtonLoading', () => {
  testCapturedVariants(stories, captures);

  it('marks the loading state and raises Initialized once', () => {
    const onInitialized = vi.fn();
    const { container, rerender } = render(<ButtonLoading onInitialized={onInitialized} />);
    const pattern = container.querySelector('.osui-btn-loading');
    expect(pattern).toHaveAttribute('aria-busy', 'false');
    rerender(<ButtonLoading isLoading onInitialized={onInitialized} />);
    expect(pattern).toHaveAttribute('aria-busy', 'true');
    expect(pattern).toHaveClass('osui-btn-loading--is-loading', 'osui-btn-loading-show-spinner');
    expect(onInitialized).toHaveBeenCalledTimes(1);
  });
});
