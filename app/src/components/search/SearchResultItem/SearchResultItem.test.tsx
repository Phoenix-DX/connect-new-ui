import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { formatConnectDate_WithYear } from '@/lib/ubtConnectLibrary/actions';
import { SearchResultItem } from './SearchResultItem';
import * as stories from './SearchResultItem.stories';

vi.mock('@/components/ui/EntityLazyImage', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/ui/EntityLazyImage')>();
  return { ...actual, EntityLazyImage: vi.fn(actual.EntityLazyImage) };
});

const { AssembleEvent, CompiledView, Locality, OrbitEvent, SubscriptionWarning } = composeStories(stories);

/** The props of the last UBT_LazyImage the row rendered. */
const lazyImageProps = () => vi.mocked(EntityLazyImage).mock.lastCall?.[0];

/* No captured DOM exists for this block: the checks follow the compiled view and OnInitialize
   (migration/sources/survey/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js:234-683, 745-778). */
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

  it('a click on the warning runs OnClick_UpgradeSubscription (App_Subscription_NavigateToUpgrade, TST :702-735)', () => {
    const onClickUpgradeSubscription = vi.fn();
    render(
      <SearchResultItem
        inSearchResult={{ Id: '9301', Name: 'Rosalind Ashcombe' }}
        inShowSubscriptionWarning
        onClickUpgradeSubscription={onClickUpgradeSubscription}
      />,
    );
    fireEvent.click(screen.getByText('Subscription upgrade needed'));
    expect(onClickUpgradeSubscription).toHaveBeenCalledTimes(1);
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

  // live SearchResult_Item.mvc.js:699-830: an event row shows its source tag and the start date under the location.
  it('event row: the source tag (CyanLighter, Primary, Soft, ExtraSmall padding) and the start date with the year', () => {
    const { container } = render(<AssembleEvent />);
    const tag = container.querySelector('[data-block="ConnectPatterns.TagContent"] .ubt-tag--content');
    expect(tag).toHaveClass(
      'inline-block',
      'background-cyan-lighter',
      'text-primary',
      'border-radius-soft',
      'padding-y-xs',
      'padding-x-xs',
    );
    expect(tag).toHaveTextContent('Assemble');
    const date = screen.getByText(formatConnectDate_WithYear('2026-11-01').LongLabel);
    expect(date.closest('.font-size-xs')).not.toBeNull();
    expect(tag?.closest('.ubt-custom-container.margin-top-xs')).not.toBeNull();
  });

  // OnInitialize (live SearchResult_Item.mvc.js:918-939): the hall of an Assemble meeting, the host of an LDM event.
  it('event row: the image shows the hall of an Assemble meeting, the host household of an LDM event', () => {
    render(
      <SearchResultItem
        inSearchResult={{ Id: '1210-20261101-1', Type: '', Event_Source: 'Assemble', Event_HostSubdivisionId: '1210' }}
      />,
    );
    expect(lazyImageProps()).toMatchObject({
      entityType: 'Supper Meetings',
      entityId: '1210',
      inBorderRadius: 'soft',
      imageSize: { Height: 'auto', Width: 'list-thumbnail' },
    });
    render(<SearchResultItem inSearchResult={{ Id: '70415', Event_Source: 'LDM', Event_HostHouseholderId: '7400' }} />);
    expect(lazyImageProps()).toMatchObject({ entityType: 'Household', entityId: '7400' });
  });

  // live SearchResult_Item.mvc.js:363-382, 945-954: an Orbit event has the avatar with the transport plane icon.
  it('Orbit event row: AvatarImage with the transport plane fallback instead of UBT_LazyImage', () => {
    vi.mocked(EntityLazyImage).mockClear();
    const { container } = render(<OrbitEvent />);
    const avatar = container.querySelector('[data-block="ConnectPatterns.AvatarImage"] .ubt-avatar-image');
    expect(avatar).toHaveClass('ubt-avatar-image-m', 'border-color-neutral-3', 'border-s', 'border-radius-circle');
    expect(avatar?.querySelector('.connect-icon-transport_plane')).toHaveClass('text-primary');
    expect(EntityLazyImage).not.toHaveBeenCalled();
    expect(screen.getByText('Orbit')).toBeInTheDocument();
  });

  it('a row that is not an event renders as before: no tag, no date, its own Type and Id for the image', () => {
    const { container } = render(<Locality />);
    expect(container.querySelector('[data-block="ConnectPatterns.TagContent"]')).toBeNull();
    expect(container.querySelector('[data-block="ConnectPatterns.AvatarImage"]')).toBeNull();
    expect(lazyImageProps()).toMatchObject({ entityType: 'Locality', entityId: '0' });
  });
});
