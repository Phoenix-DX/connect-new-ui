import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './AssembleSummaryCardHeader.stories';

const { Default } = composeStories(stories);

/* Never captured: the markup follows the compiled view (AssembleSummaryCard__Header.mvc.js :122-146). */
describe('AssembleSummaryCard__Header', () => {
  it('renders HeaderLabel as a bold h6 expression', () => {
    const { container } = render(<Default />);
    const label = container.querySelector(
      '[data-block="Assemble.AssembleSummaryCard__Header"] > span[data-expression]',
    );
    expect(label?.className).toBe('bold font-size-h6 margin-y-s');
    expect(label?.textContent).toBe('Prayer Meeting - Tuesday');
  });
});
