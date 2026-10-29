import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ItemCard_WithNotes } from './ItemCard_WithNotes';

/* Checks from the live TST block (UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js, extracted on
   2026-10-29 to migration/screens/Bookmarks/sources/) and the Bookmarks capture (dom/default.html, card 0). */
const byId = (id: string) => document.getElementById(id);
const totalNotes = () => byId('b1-$b10')?.querySelector('[data-block="BasePatterns.CustomText"] span');
const totalNotesText = () => totalNotes()?.textContent ?? null;

describe('ItemCard_WithNotes', () => {
  it('the total-notes text is empty for 0, the total for 1 to 9 and "9+" above 9 (mvc.js:612-614)', () => {
    const { rerender } = render(<ItemCard_WithNotes id="$b1" inTotalNotes="0" />);
    expect(totalNotesText()).toBe('');
    rerender(<ItemCard_WithNotes id="$b1" inTotalNotes="3" />);
    expect(totalNotesText()).toBe('3');
    rerender(<ItemCard_WithNotes id="$b1" inTotalNotes="12" />);
    expect(totalNotesText()).toBe('9+');
  });

  it('the title container is $b16 with margin-top-s; title $b17, subtitle $b18, notes $b20, actions $b21', () => {
    render(
      <ItemCard_WithNotes
        id="$b1"
        inTitle="Marsh J & K Hartwell"
        inSubtitle="Northbrook Lane Locality"
        notes={<span>notes</span>}
        actions={<span>actions</span>}
      />,
    );
    expect(byId('b1-$b16')?.firstElementChild).toHaveClass('margin-top-s', 'ubt-custom-container');
    expect(byId('b1-$b16')?.querySelector('[id="b1-$b17"]')).toHaveTextContent('Marsh J & K Hartwell');
    expect(byId('b1-$b16')?.querySelector('[id="b1-$b18"]')).toHaveTextContent('Northbrook Lane Locality');
    expect(byId('b1-$b20')?.querySelector('#b1-Notes')).toHaveTextContent('notes');
    expect(byId('b1-$b21')?.querySelector('#b1-Actions')).toHaveTextContent('actions');
  });

  /* Channel row (mvc.js:692-870): Columns_Two $b12 (reduce-first, base gutter, vertical align center, margin-top-s),
     LazyImage $b13 of the logo (height base_52, width full height, ubt-avatar-image), CustomText $b14 of the channel
     name (small, semi-bold, highlight) and CustomText $b15 of PreetyFormatDate(PublishedAt) (neutral-7, extra small). */
  const channel = {
    inChannelName: 'Westvale Gazette',
    inChannelLogo: '/img/westvale-gazette.svg',
    inPublishedAt: '2026-10-26T08:30:00',
  };

  it('the channel row shows only with a channel name, a channel logo and a PublishedAt other than NullDate (:692)', () => {
    const { rerender } = render(<ItemCard_WithNotes id="$b1" />);
    expect(byId('b1-$b12')).toBeNull();
    rerender(<ItemCard_WithNotes id="$b1" {...channel} inChannelName="" />);
    expect(byId('b1-$b12')).toBeNull();
    rerender(<ItemCard_WithNotes id="$b1" {...channel} inChannelLogo="" />);
    expect(byId('b1-$b12')).toBeNull();
    rerender(<ItemCard_WithNotes id="$b1" {...channel} inPublishedAt="1900-01-01T00:00:00" />);
    expect(byId('b1-$b12')).toBeNull();
    rerender(<ItemCard_WithNotes id="$b1" {...channel} />);
    expect(byId('b1-$b12')).not.toBeNull();
  });

  it('the channel row is Columns_Two $b12 between the header $b5 and the title container $b16', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2026, 9, 29, 12, 0, 0));
    render(<ItemCard_WithNotes id="$b1" {...channel} inSearchString="West" />);
    vi.useRealTimers();
    const row = byId('b1-$b12');
    if (!row) throw new Error('no channel row');
    expect(row).toHaveAttribute('data-block', 'BasePatterns.Columns_Two');
    expect(row.querySelector('.ubt-columns')).toHaveClass(
      'margin-top-s',
      'ubt-columns--two-columns',
      'ubt-columns-reduce-first',
    );
    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    expect(byId('b1-$b5')?.compareDocumentPosition(row)).toBe(following);
    expect(row.compareDocumentPosition(byId('b1-$b16') as Node)).toBe(following);
    const logo = byId('b1-$b13');
    expect(logo).toHaveAttribute('data-block', 'ConnectPatterns.LazyImage');
    expect(logo?.querySelector('img')).toHaveAttribute('src', '/img/westvale-gazette.svg');
    expect(logo?.querySelector('.ubt-avatar-image')).not.toBeNull();
    expect(byId('b1-$b14')).toHaveTextContent('Westvale Gazette');
    expect(byId('b1-$b14')?.querySelector('.text-primary')).toHaveTextContent('West');
    expect(byId('b1-$b15')).toHaveTextContent('3 days ago');
    expect(byId('b1-$b15')?.querySelector('.text-neutral-7')).not.toBeNull();
  });

  it('the channel name and the published date raise OnClickItemCard', () => {
    const onOnClickItemCard = vi.fn();
    render(<ItemCard_WithNotes id="$b1" {...channel} onOnClickItemCard={onOnClickItemCard} />);
    for (const alias of ['b1-$b14', 'b1-$b15']) {
      const text = byId(alias)?.querySelector('[data-container]');
      if (!text) throw new Error(`no ${alias}`);
      fireEvent.click(text);
    }
    expect(onOnClickItemCard).toHaveBeenCalledTimes(2);
  });

  it('title and subtitle raise OnClickItemCard; the total-notes IconText raises OnClickTotalNotesIcon', () => {
    const onOnClickItemCard = vi.fn();
    const onOnClickTotalNotesIcon = vi.fn();
    render(
      <ItemCard_WithNotes
        id="$b1"
        inTitle="Fenwick Household"
        inTotalNotes="2"
        onOnClickItemCard={onOnClickItemCard}
        onOnClickTotalNotesIcon={onOnClickTotalNotesIcon}
      />,
    );
    const title = byId('b1-$b17')?.querySelector('[data-container]');
    if (!title) throw new Error('no title');
    fireEvent.click(title);
    expect(onOnClickItemCard).toHaveBeenCalledTimes(1);
    const iconText = totalNotes();
    if (!iconText) throw new Error('no IconText');
    fireEvent.click(iconText);
    expect(onOnClickTotalNotesIcon).toHaveBeenCalledTimes(1);
  });
});
