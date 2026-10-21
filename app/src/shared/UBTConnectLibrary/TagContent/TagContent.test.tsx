import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
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
});
