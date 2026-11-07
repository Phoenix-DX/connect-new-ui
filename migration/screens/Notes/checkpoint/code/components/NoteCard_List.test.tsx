import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { NoteCardItem } from '@/api/note';
import { NoteCard_List } from './NoteCard_List';

/* The OnScrollEnding of the List of NoteCard_List (NoteCard_List.mvc.js:343-351): the OSWidgets List rule
   (OutSystemsReactWidgets.js tryFireScrollEndingEvent) raises OnLoadMore on a downward scroll within 2000 px of the
   end of the scroll host, and not while the last OnLoadMore runs. The card itself is not under test. */
vi.mock('./NoteCard_Item', () => ({
  NoteCard_Item: ({ noteCardItem }: { noteCardItem: NoteCardItem }) => <div>{noteCardItem.title}</div>,
}));

const card = (id: string, title: string): NoteCardItem => ({
  id: `Household-${id}`,
  itemId: id,
  itemId2: '0',
  hasDetailAccess: true,
  noteCategoryId: 'Household',
  title,
  subtitle: 'Northbrook',
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: 'Household' },
  notes: { Total: 1, Note_Item_List: [{ Id: `5${id}`, Note: 'Bring the picnic blanket' }] },
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
});
const NOTES = [card('1', 'Fenwick Household'), card('2', 'Ashdown Household')];

/** A scroll host (overflow auto) around the block, with the scroll metrics that jsdom does not compute. */
function scrollHost(scrollHeight: number, clientHeight: number) {
  const host = document.createElement('div');
  host.style.overflow = 'auto';
  Object.defineProperty(host, 'scrollHeight', { value: scrollHeight });
  Object.defineProperty(host, 'clientHeight', { value: clientHeight });
  host.appendChild(document.createElement('div'));
  document.body.appendChild(host);
  return { host, add: vi.spyOn(host, 'addEventListener') };
}
const scrollTo = (host: HTMLElement, top: number) => {
  host.scrollTop = top;
  fireEvent.scroll(host);
};
const afterPaint = () =>
  act(async () => {
    await new Promise((r) => setTimeout(r, 5));
  });

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
});

describe('NoteCard_List OnScrollEnding', () => {
  it('raises OnLoadMore on a downward scroll near the end, and not again while OnLoadMore runs', async () => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => setTimeout(cb, 0));
    const { host, add } = scrollHost(5000, 800);
    let finish: () => void = () => undefined;
    const onLoadMore = vi.fn(() => new Promise<void>((r) => (finish = r)));
    render(<NoteCard_List id="$b8" inNotes={NOTES} onOnLoadMore={onLoadMore} />, {
      container: host.firstElementChild as HTMLElement,
    });
    await vi.waitFor(() => {
      expect(add.mock.calls.some(([type]) => type === 'scroll')).toBe(true);
    });
    scrollTo(host, 100); // the first event only records the offset
    scrollTo(host, 1000); // 5000 > 1000 + 800 + 2000: not near the end
    scrollTo(host, 900); // upward
    scrollTo(host, 2300); // downward, 5000 <= 2300 + 800 + 2000
    await afterPaint();
    expect(onLoadMore).toHaveBeenCalledTimes(1);
    scrollTo(host, 2400); // OnLoadMore still runs (the page fetch)
    await afterPaint();
    expect(onLoadMore).toHaveBeenCalledTimes(1);
    finish();
    await afterPaint();
    scrollTo(host, 2200); // upward from 2300, the last offset recorded (none is recorded while OnLoadMore runs)
    await afterPaint();
    expect(onLoadMore).toHaveBeenCalledTimes(1);
    scrollTo(host, 2500);
    await afterPaint();
    expect(onLoadMore).toHaveBeenCalledTimes(2);
  });

  it('keeps the markup of the List: list list-group list--gap-s, position relative', () => {
    const { container } = render(<NoteCard_List id="$b8" inNotes={NOTES} />);
    const list = container.querySelector('[data-list]');
    expect(list?.className).toBe('list list-group list--gap-s OSFillParent');
    expect(list?.getAttribute('style')).toBe('position: relative;');
    expect(list?.hasAttribute('data-animation-disabled')).toBe(false);
    expect([...(list?.children ?? [])].map((c) => c.textContent)).toEqual(['Fenwick Household', 'Ashdown Household']);
  });
});
