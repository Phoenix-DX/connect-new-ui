import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi, type MockInstance } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { DataFetchStatus, OSList } from './OSList';
import { OSListItem, OSListItemAction } from './OSListItem';
import * as stories from './OSList.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/** data-* attribute names of an element and its descendants, in document order, without the content of nested blocks
    (the DOM capture check ignores data-* other than data-block; the List markers are data-*). */
function dataAttributes(root: Element): string[] {
  const out: string[] = [];
  const walk = (el: Element, depth: number) => {
    const names = [...el.attributes].map((a) => a.name).filter((n) => n.startsWith('data-'));
    out.push(`${String(depth)} ${el.tagName.toLowerCase()} ${names.sort().join(' ')}`);
    if (depth > 0 && el.classList.contains('OSBlockWidget')) return;
    for (const child of el.children) walk(child, depth + 1);
  };
  walk(root, 0);
  return out;
}

const parse = (html: string) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.trim();
  const el = tpl.content.firstElementChild;
  if (!el) throw new Error('capture has no element');
  return el;
};

describe('OSList (captured lists)', () => {
  testCapturedVariants(stories, captures);

  for (const [name, Story] of Object.entries(composeStories(stories))) {
    it(`${name} has the captured data-* markers (data-list, data-animation-disabled, data-list-item…)`, () => {
      const html = captures[`./__captures__/${name.toLowerCase()}.html`];
      if (html === undefined) throw new Error(`no capture for ${name}`);
      const { container } = render(<Story />);
      const list = container.firstElementChild;
      if (!list) throw new Error('nothing rendered');
      expect(dataAttributes(list)).toEqual(dataAttributes(parse(html)));
    });
  }
});

describe('OSList', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  /** A scroll host (overflow auto) around the list, with the scroll metrics jsdom does not compute. */
  const scrollHost = (metrics: { scrollHeight: number; clientHeight: number }) => {
    const host = document.createElement('div');
    host.style.overflow = 'auto';
    Object.defineProperty(host, 'scrollHeight', { value: metrics.scrollHeight });
    Object.defineProperty(host, 'clientHeight', { value: metrics.clientHeight });
    host.appendChild(document.createElement('div'));
    document.body.appendChild(host);
    addListenerSpies.set(host, vi.spyOn(host, 'addEventListener'));
    return host;
  };
  const addListenerSpies = new WeakMap<HTMLElement, MockInstance<HTMLElement['addEventListener']>>();
  /** Waits until the List listens to the host's `scroll` (registered by executeAfterPaint: rAF, then 1 ms). Polls the
      registration instead of sleeping a fixed time, which the timers overrun when the full suite loads the machine. */
  const listening = (host: HTMLElement) =>
    vi.waitFor(
      () => {
        expect(addListenerSpies.get(host)?.mock.calls.some(([type]) => type === 'scroll')).toBe(true);
      },
      { timeout: 10_000, interval: 5 },
    );
  /** Render the list inside the host (the host itself must not be the React root). */
  const inside = (host: HTMLElement) => ({ container: host.firstElementChild as HTMLElement });
  const scrollTo = (host: HTMLElement, top: number) => {
    host.scrollTop = top;
    fireEvent.scroll(host);
  };
  const afterPaint = () =>
    act(async () => {
      await new Promise((r) => setTimeout(r, 5));
    });

  const list = (ids: string[], onScrollEnding?: () => unknown) => (
    <OSList
      source={ids.map((id) => ({ id }))}
      keyOf={(r) => r.id}
      className="list list-group"
      animateItems
      onScrollEnding={onScrollEnding}
    >
      {(r) => <div id={r.id}>{r.id}</div>}
    </OSList>
  );

  it('raises OnScrollEnding on a downward scroll within 2000 px of the end of the scroll host (W:1277-1290)', async () => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => setTimeout(cb, 0));
    const host = scrollHost({ scrollHeight: 5000, clientHeight: 800 });
    const onScrollEnding = vi.fn();
    render(list(['a', 'b', 'c'], onScrollEnding), inside(host));
    await listening(host);
    scrollTo(host, 100); // first event: only records the offset
    scrollTo(host, 1000); // 5000 > 1000 + 800 + 2000
    expect(onScrollEnding).not.toHaveBeenCalled();
    scrollTo(host, 900); // upward
    scrollTo(host, 2300); // 5000 <= 2300 + 800 + 2000
    await afterPaint();
    expect(onScrollEnding).toHaveBeenCalledTimes(1);
  });

  it('raises no new OnScrollEnding while the handler runs (W:1291-1297)', async () => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => setTimeout(cb, 0));
    const host = scrollHost({ scrollHeight: 2500, clientHeight: 800 });
    let finish: () => void = () => undefined;
    const onScrollEnding = vi.fn(() => new Promise<void>((r) => (finish = r)));
    render(list(['a'], onScrollEnding), inside(host));
    await listening(host);
    scrollTo(host, 10);
    scrollTo(host, 20);
    await afterPaint();
    scrollTo(host, 30);
    expect(onScrollEnding).toHaveBeenCalledTimes(1);
    finish();
    await afterPaint();
    scrollTo(host, 40);
    await afterPaint();
    expect(onScrollEnding).toHaveBeenCalledTimes(2);
  });

  it('listens to nothing without an OnScrollEnding handler', async () => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => setTimeout(cb, 0));
    const host = scrollHost({ scrollHeight: 1000, clientHeight: 800 });
    const add = vi.spyOn(host, 'addEventListener');
    render(list(['a']), inside(host));
    await afterPaint();
    expect(add.mock.calls.filter(([type]) => type === 'scroll')).toHaveLength(0);
  });

  it('adds list-loading while the source is Fetching and list-error on Error (W:1325-1334)', () => {
    const withStatus = (status: DataFetchStatus) => (
      <OSList source={[]} keyOf={String} className="list list--gap-s" animateItems sourceDataFetchStatus={status}>
        {() => null}
      </OSList>
    );
    const { container, rerender } = render(withStatus(DataFetchStatus.Fetching));
    expect(container.firstElementChild).toHaveAttribute('class', 'list list--gap-s list-loading OSFillParent');
    rerender(withStatus(DataFetchStatus.Error));
    expect(container.firstElementChild).toHaveAttribute('class', 'list list--gap-s list-error OSFillParent');
    rerender(withStatus(DataFetchStatus.Fetched));
    expect(container.firstElementChild).toHaveAttribute('class', 'list list--gap-s OSFillParent');
  });

  it('keys rows by id: a reorder moves the same DOM nodes', () => {
    const { container, rerender } = render(list(['a', 'b']));
    const a = container.querySelector('#a');
    rerender(list(['b', 'a']));
    expect(container.querySelector('#a')).toBe(a);
    expect(container.firstElementChild?.lastElementChild).toBe(a);
  });

  it('renders the content only, without a wrapper per row', () => {
    const { container } = render(list(['a', 'b']));
    expect([...(container.firstElementChild?.children ?? [])].map((c) => c.id)).toEqual(['a', 'b']);
    expect(container.firstElementChild).toHaveClass('list', 'list-group', 'OSFillParent');
    expect(container.firstElementChild).not.toHaveAttribute('data-animation-disabled');
    expect(container.firstElementChild).not.toHaveAttribute('data-virtualization-disabled');
    expect(container.firstElementChild).not.toHaveAttribute('style');
  });
});

describe('OSListItem', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  const actions = (onClear: () => void, onRead: () => void) => ({
    leftActions: (
      <button data-list-item-action="" style={{ maxWidth: '80px' }} onClick={onClear}>
        Clear
      </button>
    ),
    rightActions: (
      <OSListItemAction className="list-item-action" onClick={onRead}>
        Mark as Read
      </OSListItemAction>
    ),
  });

  it('without actions renders ListItemBasic: the OnClick on the item, "active" while it runs (W:1519-1540)', async () => {
    let finish: () => void = () => undefined;
    const onClick = vi.fn(() => new Promise<void>((r) => (finish = r)));
    const { container } = render(
      <OSListItem id="i" className="list-item" onClick={onClick}>
        <span>row</span>
      </OSListItem>,
    );
    const item = container.querySelector('#i');
    expect(item).toHaveAttribute('data-list-item');
    expect(item).toHaveClass('list-item');
    expect(container.querySelector('.list-item-container')).toBeNull();
    fireEvent.click(item as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(item).toHaveClass('active');
    await act(async () => {
      finish();
      await Promise.resolve();
    });
    expect(item).not.toHaveClass('active');
  });

  it('with actions: empty action containers at rest, OnClick from the content only (W:1607-1612, 1787-1800)', () => {
    const onClick = vi.fn();
    const { container } = render(
      <OSListItem className="list-item" onClick={onClick} {...actions(vi.fn(), vi.fn())}>
        <span>row</span>
      </OSListItem>,
    );
    expect(container.querySelector('.list-item-left-actions')?.childElementCount).toBe(0);
    expect(container.querySelector('.list-item-right-actions')?.childElementCount).toBe(0);
    fireEvent.click(container.querySelector('[data-list-item-content]') as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(container.querySelector('.list-item-left-actions') as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  const swipe = (content: Element, from: number, moves: number[]) => {
    const at = (x: number) => [{ clientX: x, clientY: 100 }];
    fireEvent.touchStart(content, { touches: at(from), changedTouches: at(from) });
    for (const x of moves) fireEvent.touchMove(content, { touches: at(x), changedTouches: at(x) });
    const end = moves.at(-1) ?? from;
    fireEvent.touchEnd(content, { touches: [], changedTouches: at(end) });
  };

  it('a full swipe right clicks the first left action after the 400 ms animation (W:1577-1583, 1718-1730)', () => {
    vi.useFakeTimers();
    const onClear = vi.fn();
    const { container } = render(
      <OSListItem className="list-item" triggerActionOnFullSwipeRight {...actions(onClear, vi.fn())}>
        <span>row</span>
      </OSListItem>,
    );
    const content = container.querySelector('[data-list-item-content]') as Element;
    // The first move renders the actions; the second measures them: 250 > 80 * (1 + 0.75).
    swipe(content, 50, [80, 300]);
    expect(container.querySelector('.list-item-container')).toHaveClass('list-item-full-swipe', 'list-item-animating');
    expect(onClear).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('a short swipe left shows the right actions until the next touch (W:1571-1573, 1549-1551)', () => {
    vi.useFakeTimers();
    const { container } = render(
      <OSListItem className="list-item" {...actions(vi.fn(), vi.fn())}>
        <span>row</span>
      </OSListItem>,
    );
    const content = container.querySelector('[data-list-item-content]') as Element;
    swipe(content, 300, [280, 240]);
    const box = container.querySelector('.list-item-container');
    expect(box).toHaveClass('list-item-show-right-buttons', 'list-item-float-right');
    expect(container.querySelector('.list-item-right-actions [data-list-item-action]')).toHaveTextContent(
      'Mark as Read',
    );
    act(() => {
      window.dispatchEvent(new Event('touchstart'));
      vi.advanceTimersByTime(400);
    });
    expect(box).not.toHaveClass('list-item-show-right-buttons');
  });
});

describe('OSListItemAction', () => {
  it('renders nothing when not visible and ignores a second click (W:1956-1973)', () => {
    const onClick = vi.fn();
    const { container, rerender } = render(
      <OSListItemAction className="list-item-action" visible={false} onClick={onClick}>
        Mark as Read
      </OSListItemAction>,
    );
    expect(container.firstChild).toBeNull();
    rerender(
      <OSListItemAction className="list-item-action" onClick={onClick}>
        Mark as Read
      </OSListItemAction>,
    );
    const button = container.querySelector('button[data-list-item-action].list-item-action') as Element;
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
