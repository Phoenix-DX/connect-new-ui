import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './ShareSheetSection.stories';

const { CompiledView } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js:134-150). */
describe('ShareSheet_Section', () => {
  it('renders the title placeholder, then the content placeholder', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'CW_Share.ShareSheet_Section');
    const [title, content] = [...(root?.children ?? [])];
    expect(root?.children).toHaveLength(2);
    expect(title?.querySelector('[data-block="CW_Share.ShareSheet_SectionTitle"]')).toHaveTextContent('Shared To');
    expect(content).toHaveTextContent('Content');
  });
});
