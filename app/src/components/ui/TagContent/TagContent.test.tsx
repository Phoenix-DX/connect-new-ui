import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { TagContent } from './TagContent';
import * as stories from './TagContent.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('TagContent', () => {
  testCapturedVariants(stories, captures);

  it('appends ExtendedClasses and raises Clicked', () => {
    const onClicked = vi.fn();
    const { container } = render(<TagContent text="x" extendedClasses="x-extra" onClicked={onClicked} />);
    const tag = container.querySelector('.ubt-tag--content');
    if (!tag) throw new Error('tag not rendered');
    expect(tag).toHaveClass('inline-block', 'x-extra');
    fireEvent.click(tag);
    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('builds the padding and the radius from In_VerticalPaddingSizeId, In_HorizontalPaddingSizeId and In_ShapeId', () => {
    // The defaults (live TagContent.mvc.js:39-56) are the values the October block had fixed.
    const { container: defaults } = render(<TagContent text="x" />);
    const { container: explicit } = render(
      <TagContent text="x" inVerticalPaddingSizeId="xs" inHorizontalPaddingSizeId="s" inShapeId="rounded" />,
    );
    expect(explicit.innerHTML).toBe(defaults.innerHTML);
    const { container } = render(
      <TagContent text="x" inVerticalPaddingSizeId="xs" inHorizontalPaddingSizeId="xs" inShapeId="soft" />,
    );
    const tag = container.querySelector('.ubt-tag--content');
    expect(tag).toHaveClass('padding-x-xs', 'padding-y-xs', 'border-radius-soft');
    expect(tag).not.toHaveClass('padding-x-s');
    expect(tag).not.toHaveClass('border-radius-rounded');
  });
});
