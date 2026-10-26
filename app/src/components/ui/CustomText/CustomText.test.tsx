import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { CustomText } from './CustomText';
import * as stories from './CustomText.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CustomText', () => {
  testCapturedVariants(stories, captures);

  it('adds the flag classes and raises Clicked', () => {
    const onClicked = vi.fn();
    const { container } = render(<CustomText inText="x" fitContent inJustifyText noWrap onClicked={onClicked} />);
    const text = container.querySelector('[data-container]');
    if (!text) throw new Error('text not rendered');
    expect(text).toHaveClass('ubt-with-fit-content', 'text-justify', 'text-no-wrap');
    fireEvent.click(text);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });
});
