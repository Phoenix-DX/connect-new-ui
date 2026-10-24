import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CircleButton } from './CircleButton';
import * as stories from './CircleButton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CircleButton', () => {
  testCapturedVariants(stories, captures);

  it('adds the extended and loading classes, no size class without SizeId, and raises OnClick', () => {
    const onOnClick = vi.fn();
    const { container } = render(<CircleButton extendedClasses="x-extra" isProcessing onOnClick={onOnClick} />);
    const button = container.querySelector('[data-container]');
    if (!button) throw new Error('button not rendered');
    expect(button.className).toBe('ubt-icon-button x-extra inline-block ubt-icon-button--loading OSInline');
    expect(container.querySelector('.ubt-icon-button__icon-container')).not.toHaveClass('border-s');
    fireEvent.click(button);
    expect(onOnClick).toHaveBeenCalledTimes(1);
  });
});
