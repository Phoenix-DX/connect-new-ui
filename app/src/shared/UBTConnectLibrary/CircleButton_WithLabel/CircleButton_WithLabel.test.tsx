import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { CircleButton_WithLabel } from './CircleButton_WithLabel';
import * as stories from './CircleButton_WithLabel.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CircleButton_WithLabel', () => {
  testCapturedVariants(stories, captures);

  it('raises OnClick once from the outer button, also when the inner circle is clicked', () => {
    const onOnClick = vi.fn();
    const { container } = render(<CircleButton_WithLabel extendedClasses="x-extra" onOnClick={onOnClick} />);
    const outer = container.querySelector('[data-block="ConnectPatterns.CircleButton_WithLabel"] > div');
    expect(outer?.className).toBe('ubt-icon-button x-extra inline-block OSInline');
    const inner = container.querySelector('[data-block="ConnectPatterns.CircleButton"] > div');
    if (!inner) throw new Error('circle not rendered');
    fireEvent.click(inner);
    expect(onOnClick).toHaveBeenCalledTimes(1);
  });
});
