import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './AssembleSummaryCardRow.stories';

const { TimeRow } = composeStories(stories);

/* Never captured: the markup follows the compiled view (AssembleSummary_Card_Row.mvc.js :107-168). */
describe('AssembleSummary_Card_Row', () => {
  it('renders the three inline placeholders in the row container', () => {
    const { container } = render(<TimeRow />);
    const row = container.querySelector(
      '[data-block="Assemble.AssembleSummary_Card_Row"] > .assemble-summary-row.text-neutral-7',
    );
    expect([...(row?.children ?? [])].map((c) => c.className)).toEqual([
      'assemble-summary-row__icon-placeholder OSInline',
      'assemble-summary-row__content-placeholder OSInline',
      'assemble-summary-row__icon-placeholder--right OSInline',
    ]);
    expect(row?.children[1]?.textContent).toBe('7:30 PM on Tuesday, 10 November 2026');
    expect(row?.children[2]?.childElementCount).toBe(0);
  });
});
