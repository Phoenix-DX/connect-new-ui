import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { UpdateItem } from '@/api/update';
import { FeedBlock_Updates, type FeedBlock_UpdatesProps } from './FeedBlock_Updates';

/* The view of FeedBlock_Updates from props: the skeleton, the cards (cyan when unread), the list keys of the capture,
   the error list and the callbacks. */
const item = (updateItemId: string, name: string, isRead: boolean, hasAccess = true): UpdateItem => ({
  updateItemId,
  updateItemTypeId: 'Marriage',
  householdId: '8102',
  memberId: '7102',
  name,
  date: '2026-10-03',
  genderId: 'Gender.MALE',
  locationString: 'Brisbane, Australia',
  parentsNames: '',
  birthType: '',
  isRead,
  hasAccess,
  hasShare: true,
});
const ITEMS = [item('9102', 'Michael & Hannah Booth', false), item('9103', 'Oscar & Emma Hughes', true)];

function renderBlock(props: Partial<FeedBlock_UpdatesProps> = {}) {
  const callbacks = {
    onItemClick: vi.fn(),
    onShare: vi.fn(),
    onSendGift: vi.fn(),
    onMarkAsRead: vi.fn(),
    onMarkAsUnread: vi.fn(),
    onClickUpgrade: vi.fn(),
  };
  const view = render(
    <FeedBlock_Updates
      id="$b9"
      items={ITEMS}
      hasData
      isLoading={false}
      hasFetchError={false}
      {...callbacks}
      {...props}
    />,
  );
  return { ...view, ...callbacks };
}
const byId = (id: string) => document.getElementById(id);

describe('FeedBlock_Updates', () => {
  it('shows each item in a card with the list keys of the data capture; an unread card is cyan', () => {
    const { container } = renderBlock();
    expect(byId('b9-l1-89_0-$b3')?.textContent).toContain('Michael & Hannah Booth');
    expect(byId('b9-l1-89_1-$b3')?.textContent).toContain('Oscar & Emma Hughes');
    expect(byId('b9-l1-89_0-$b2')?.innerHTML).toContain('background-cyan-lightest');
    expect(byId('b9-l1-89_1-$b2')?.innerHTML).not.toContain('background-cyan-lightest');
    expect(container.querySelector('.home-page--update-list')?.className).toBe(
      'list list-group home-page--update-list OSFillParent',
    );
    expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
  });

  it('the loading rows have the keys of the loading capture, in the skeleton; a failed fetch adds list-error', () => {
    const { container } = renderBlock({ hasData: false, isLoading: true });
    expect(byId('b9-l1-58_0-$b3')).not.toBeNull();
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
    renderBlock({ hasData: false, hasFetchError: true });
    expect(document.querySelectorAll('.list-error')).toHaveLength(1);
  });

  it('a click on an item raises Event_ListItemOnClick with the item', () => {
    const { onItemClick } = renderBlock();
    fireEvent.click(byId('b9-l1-89_1-$b3')?.querySelector('[data-container]') as Element);
    expect(onItemClick).toHaveBeenCalledExactlyOnceWith(ITEMS[1]);
  });

  it('an item without access has the upgrade banner (not captured), which raises the upgrade', () => {
    const { onClickUpgrade, getByText } = renderBlock({ items: [item('9104', 'Ada Lowell', true, false)] });
    fireEvent.click(getByText('Subscription upgrade required'));
    expect(onClickUpgrade).toHaveBeenCalledOnce();
  });

  it('the upgrade banner has the tree of #DoesntHaveAccess: centred containers, IconText and a lock icon (mvc.js:466-530)', () => {
    const { getByText, container } = renderBlock({ items: [item('9104', 'Ada Lowell', true, false)] });
    expect(container.querySelector('[data-not-captured]')).toBeNull();
    const text = getByText('Subscription upgrade required').closest('.text-blue-dark') as HTMLElement;
    expect(text.className).toContain('font-size-xs');
    expect(text.className).toContain('font-semi-bold');
    const inline = text.closest('.display-inline-block') as HTMLElement;
    expect(inline.style.textAlign).toBe('center');
    expect((inline.parentElement as HTMLElement).style.textAlign).toBe('center');
    const icon = inline.querySelector('.connect-icon-lock');
    expect(icon?.className).toContain('text-blue-dark');
    expect(icon?.className).toContain('icon-non-standard-16');
  });
});
