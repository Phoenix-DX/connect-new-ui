import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import * as stories from './LabelWithCopyIcon.stories';

const { Default } = composeStories(stories);

/* Never captured: the markup follows the compiled view (LabelWithCopyIcon.mvc.js :127-230). */
describe('LabelWithCopyIcon', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the label and icon in an AlignCenter row, then the value', () => {
    const { container } = render(<Default />);
    const root = container.querySelector('[data-block="Utility.LabelWithCopyIcon"] > .font-size-s');
    const row = root?.querySelector('[data-block="Utilities.AlignCenter"] > .vertical-align.flex-direction-row');
    expect([...(row?.children ?? [])].map((c) => c.className)).toEqual([
      'font-semi-bold OSInline',
      'margin-left-s line-height-1 OSInline',
    ]);
    expect(row?.children[1]).toHaveStyle({ cursor: 'pointer' });
    expect(root?.lastElementChild?.textContent).toBe('845 2210 6631');
  });

  it('Placeholder_IconOnClick copies AttributeValue to the clipboard', () => {
    const writeText = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigator', { clipboard: { writeText } });
    const { container } = render(<Default />);
    fireEvent.click(container.querySelector('.connect-icon-copy') as Element);
    expect(writeText).toHaveBeenCalledWith('845 2210 6631');
  });
});
