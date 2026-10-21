import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { IconText } from './IconText';
import * as stories from './IconText.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('IconText', () => {
  testCapturedVariants(stories, captures);

  it('renders the subtext only when set, and raises Clicked', () => {
    const onClicked = vi.fn();
    const { container, rerender } = render(<IconText text="Title" onClicked={onClicked} />);
    expect(container.querySelectorAll('[data-block="BasePatterns.CustomText"]')).toHaveLength(1);
    rerender(<IconText text="Title" inSubtext="Sub" subtextOptions={{ FontSize: 'xs' }} inJustifyText />);
    const texts = container.querySelectorAll('[data-block="BasePatterns.CustomText"] > div');
    expect(texts).toHaveLength(2);
    expect(texts[0]).toHaveClass('text-justify');
    expect(texts[1]).toHaveClass('font-size-xs');
    expect(texts[1]).toHaveTextContent('Sub');
    rerender(<IconText text="Title" onClicked={onClicked} />);
    const root = container.querySelector('[data-block="ConnectPatterns.IconText"] > div');
    if (!root) throw new Error('not rendered');
    fireEvent.click(root);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });
});
