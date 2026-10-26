import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './OrbitNoResults.stories';

const { Default } = composeStories(stories);

/* Never captured: the markup follows the compiled view (NoResults.mvc.js :107-170). */
describe('NoResults', () => {
  it('renders the icon box, then the title and message placeholders in their containers', () => {
    const { container } = render(<Default />);
    const root = container.querySelector('[data-block="Orbit_Generic_Blocks.NoResults"] > .no-results-cont');
    expect([...(root?.children ?? [])].map((c) => c.className)).toEqual([
      'no-results-icon-cont',
      'no-results-title',
      'no-results-message',
    ]);
    expect(root?.querySelector('.no-results-icon-cont > i')).toHaveClass('icon', 'no-results-icon', 'fa', 'fa-search');
    expect(root?.querySelector('.no-results-title')?.textContent).toBe('No results found');
  });
});
