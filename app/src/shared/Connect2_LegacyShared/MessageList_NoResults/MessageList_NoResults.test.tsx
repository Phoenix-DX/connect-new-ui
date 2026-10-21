import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './MessageList_NoResults.stories';

const { CompiledView } = composeStories(stories);

describe('MessageList_NoResults (not captured: compiled view)', () => {
  it('renders the centred message, the suggestions title and three placeholder rows', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    if (!root) throw new Error('nothing rendered');
    expect(root.getAttribute('data-block')).toBe('Reusable.MessageList_NoResults');
    const rows = [...root.children];
    expect(rows.map((row) => row.className)).toEqual([
      'bold margin15 margin-left-xl margin-top-xxl',
      'bold margin15 margin-left-xl',
      'margin15 margin-left-xl',
      'margin15 margin-left-xl',
      'margin15 margin-left-xl',
    ]);
    expect(rows[0]?.querySelector('[data-block="Utilities.AlignCenter"]')).not.toBeNull();
    expect(rows[0]?.querySelector('.text-red.mirror.margin-right5.OSInline > i.fa-search-minus.fa-2x')).not.toBeNull();
    expect(rows[0]?.textContent).toContain('No results are found.');
    expect(rows[1]?.textContent).toBe('Suggestions:');
    expect(rows[2]?.textContent).toBe('Suggestion one');
    expect(rows[4]?.textContent).toBe('Suggestion three');
  });
});
