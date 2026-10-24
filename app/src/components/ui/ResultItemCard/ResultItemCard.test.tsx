import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ResultItemCard } from './ResultItemCard';
import * as stories from './ResultItemCard.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NC_Result_Item__Card', () => {
  testCapturedVariants(stories, captures);

  it('CustomClass and HtmlDataItem on the card; a click anywhere raises OnClick_Item', () => {
    const onClick = vi.fn();
    const { container } = render(
      <ResultItemCard
        customClass="is-past"
        htmlDataItem="event-1204"
        placeholder2={<span>Bahia Blanca Assemble</span>}
        onOnClickItem={onClick}
      />,
    );
    const card = container.querySelector('.nc-result-item-card');
    expect(card).toHaveClass('is-past');
    expect(card?.getAttribute('data-item')).toBe('event-1204');
    fireEvent.click(screen.getByText('Bahia Blanca Assemble'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
