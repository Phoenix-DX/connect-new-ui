import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { CircleButtonIconPrimary } from './CircleButtonIconPrimary';
import * as stories from './CircleButtonIconPrimary.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CircleButton_IconPrimary', () => {
  testCapturedVariants(stories, captures);

  it('passes its colours and ExtendedClasses, and raises OnClick', () => {
    const onOnClick = vi.fn();
    const { container } = render(
      <CircleButtonIconPrimary
        iconId="connect-icon-share"
        iconBackgroundColorId="primary"
        iconColorId="neutral-0"
        extendedClasses="x-extra"
        onOnClick={onOnClick}
      />,
    );
    expect(container.querySelector('.ubt-icon-button__icon-container')).toHaveClass('background-primary');
    expect(container.querySelector('.ubt-icon')).toHaveClass('connect-icon-share', 'text-neutral-0');
    const outer = container.querySelector('[data-block="ConnectPatterns.CircleButton_WithLabel"] > div');
    if (!outer) throw new Error('button not rendered');
    expect(outer).toHaveClass('x-extra');
    fireEvent.click(outer);
    expect(onOnClick).toHaveBeenCalledTimes(1);
  });
});
