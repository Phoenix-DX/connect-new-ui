import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchResultItem } from './SearchResultItem';
import * as stories from './SearchResultItem.stories';

const { CompiledView, Locality, SubscriptionWarning } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view and OnInitialize
   (migration/blocks/sources/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js:234-683, 745-778). */
describe('SearchResult_Item', () => {
  it('member row: bordered connect-search-result, rounded square image, highlighted title, location', () => {
    const { container } = render(<CompiledView />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'CW_Search.SearchResult_Item');
    const row = container.querySelector('.ubt-custom-container');
    expect(row).toHaveClass('connect-search-result', 'padding-y-s', 'border-color-neutral-3', 'border-bottom-s');
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('border-radius-circle'); // UBT_LazyImage: a Member is always a circle
    expect(screen.getByText('Vitale', { selector: 'mark' }).parentElement).toHaveClass('text-primary', 'font-bold');
    expect(container.querySelector('.connect-icon-home_pin_fill')).toHaveClass(
      'icon-non-standard-16',
      'text-neutral-7',
    );
    expect(screen.getByText('Bahia Blanca, Argentina')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-checkbox_outline_blank')).not.toBeNull();
  });

  it('other entity: soft image by default, additional information shown', () => {
    const { container } = render(<Locality />);
    expect(container.querySelector('.ubt-lazy-image')).toHaveClass('border-radius-soft');
    expect(screen.getByText('23 households')).toBeInTheDocument();
  });

  it('subscription warning hides additional information and location', () => {
    const { container } = render(<SubscriptionWarning />);
    expect(screen.getByText('Subscription upgrade needed')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-info_fill')).toHaveClass('icon-non-standard-16');
    expect(screen.queryByText('Bahia Blanca, Argentina')).toBeNull();
  });

  it('a click raises OnClick with the search result', () => {
    const onOnClick = vi.fn();
    const result = { Id: '0', Name: 'Bahia Blanca' };
    const { container } = render(<SearchResultItem inSearchResult={result} onOnClick={onOnClick} />);
    const row = container.querySelector('.connect-search-result');
    if (!row) throw new Error('no row');
    fireEvent.click(row);
    expect(onOnClick).toHaveBeenCalledWith(result);
  });
});
