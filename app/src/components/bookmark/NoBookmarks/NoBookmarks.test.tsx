import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { NoBookmarks } from './NoBookmarks';
import * as stories from './NoBookmarks.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NoBookmarks', () => {
  testCapturedVariants(stories, captures);

  it('IsToDisplay False (default): empty wrapper', () => {
    const { container } = render(<NoBookmarks id="b1-$b21" titlePlaceholder="Title" />);
    expect(container.firstElementChild?.childElementCount).toBe(0);
  });

  it('IsToDisplay: blank slate with the bookmark image and the placeholders in their own wrappers', () => {
    const { container } = render(
      <NoBookmarks id="b1-$b21" isToDisplay titlePlaceholder="Title" textPlaceholder="Text" />,
    );
    const slate = container.querySelector('#b1-b21-\\$b1 .connect-blank-slate-container');
    const img = slate?.querySelector(':scope > div > img');
    expect(img).toHaveClass('OSFillParent');
    expect(img?.getAttribute('src')).toMatch(/Connect2_LegacyShared\.bookmark_unavailable_icon\.svg$/);
    expect(slate?.querySelector('.connect-blank-slate-title > div')).toHaveTextContent('Title');
    expect(slate?.querySelector('.connect-blank-slate-sub-title > div')).toHaveTextContent('Text');
  });
});
