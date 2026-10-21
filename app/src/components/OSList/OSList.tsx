import { Fragment, useEffect, useRef, type Key, type ReactNode } from 'react';

/* OutSystems platform List widget (OSWidgets.List), P-LIST reference implementation. Markup from the captures (README
   → Captures); behaviour from OutSystemsReactWidgets.js, cited as `W:<n>` in the readable copy
   migration/screens/MessageList/analysis/sources/pretty/OutSystemsReactWidgets.js. ListItem / ListItemAction:
   OSListItem.tsx. */

type ScrollHost = HTMLElement | Window;

/** ScrollExtensions.getScrollHostInfo of @outsystems/virtualized-list (OutSystemsReactView.js), called with the list's
    parent (OutSystems/ReactView/ScrollExtensions): the nearest ancestor whose overflow is auto/scroll and that has no
    `data-not-scrollable`; past an absolutely positioned element, static ancestors are skipped; else the window. */
function getScrollHost(el: Element | null, skipStatic = false): ScrollHost {
  if (!(el instanceof HTMLElement)) return window;
  const style = getComputedStyle(el);
  const absolute = skipStatic || style.position === 'absolute';
  if (
    (!absolute || style.position !== 'static') &&
    /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX) &&
    !el.hasAttribute('data-not-scrollable')
  )
    return el === document.documentElement ? window : el;
  return getScrollHost(el.parentElement, absolute);
}

/** ScrollExtensions.getScrollInfo (OutSystemsReactView.js). */
function getScrollInfo(host: ScrollHost) {
  if (host instanceof HTMLElement)
    return {
      x: host.scrollLeft,
      y: host.scrollTop,
      height: host.scrollHeight,
      width: host.scrollWidth,
      viewportHeight: host.clientHeight,
      viewportWidth: host.clientWidth,
    };
  const doc = document.documentElement;
  return {
    x: doc.scrollLeft,
    y: doc.scrollTop,
    height: doc.scrollHeight,
    width: doc.scrollWidth,
    viewportHeight: host.innerHeight,
    viewportWidth: host.innerWidth,
  };
}

/** Widget.executeAfterPaint (OutSystemsReactView.js `function T`): requestAnimationFrame, then setTimeout 1 ms. */
function executeAfterPaint(fn: () => void): void {
  requestAnimationFrame(() => setTimeout(fn, 1));
}

/** OS.Model.DataFetchStatus (OutSystems.js `Model.DataFetchStatus`): Fetching 0, Fetched 1, Error 2. A data action
    or aggregate starts at 0 (record default of `dataFetchStatusAttr`), callServerDataSource sets 0 when it calls, 1 on
    success and 2 on failure. A source that is not fetched data (a local variable or input) is Fetched. */
export const DataFetchStatus = { Fetching: 0, Fetched: 1, Error: 2 } as const;
export type DataFetchStatus = (typeof DataFetchStatus)[keyof typeof DataFetchStatus];

/** Class suffix of List `render` (W:1325-1334): ` list-loading` while Fetching, ` list-error` on Error. */
function fetchStatusClass(status: DataFetchStatus): string {
  if (status === DataFetchStatus.Fetching) return ' list-loading';
  if (status === DataFetchStatus.Error) return ' list-error';
  return '';
}

/** Default `infinite-scroll-threshold` in px (W:1195-1204). */
const INFINITE_SCROLL_THRESHOLD = 2000;

export interface OSListProps<T> {
  /** Source: one iteration per record. */
  source: readonly T[];
  /** Row key from the record's id (P-LIST rule "row keys from ids"), never the index alone. */
  keyOf: (item: T, index: number) => Key;
  /** Iterator content of one record. The List adds no wrapper: the content is a direct child of the list element
      (every capture). Return `null` for a record whose content is not visible. */
  children: (item: T, index: number) => ReactNode;
  /** Style Classes (compiled `style`, e.g. "list list-group"). The grid class `OSFillParent` (compiled
      `gridProperties.classes`, all 200 Lists of the survey) is appended. */
  className: string;
  /** Animate Items (compiled `animateItems`, always explicit in the survey): false renders `data-animation-disabled`
      (FeedBlock_Services.mvc.js:449/491, MessageListBlock.mvc.js:218 ↔ captures v1, v5). */
  animateItems: boolean;
  /** Extended property `disable-virtualization` = "True": renders `data-virtualization-disabled`
      (FeedBlock_Services.mvc.js:491, HorizontalTagList.mvc.js:219 ↔ captures v1, v3). */
  disableVirtualization?: boolean;
  /** Inline `position: relative` that the virtualized scroll viewer writes on the list element: List renders a
      VirtualizedScrollViewer unless `disable-virtualization` (W:1340-1363), and its `renderOffScreenBuffer` (run on
      every viewer update) writes it only when the rows stack vertically (OutSystemsReactView.js; a row of items gets
      direction None). Set it where the capture shows `style="position: relative;"`. */
  positionRelative?: boolean;
  /** OnScrollEnding (W:1235-1297): raised when the user scrolls the scroll host down (or right) to within
      `infiniteScrollThreshold` px of its end, and when the row count changes while it is already scrolled down. May
      return a Promise: no new event while it runs. */
  onScrollEnding?: () => unknown;
  /** Extended property `infinite-scroll-threshold` (W:1195-1204), default 2000. */
  infiniteScrollThreshold?: number;
  /** `source_dataFetchStatus` of the compiled view (`OS.Model.calculateDataFetchStatus(<data source status>)`):
      Fetching adds ` list-loading`, Error ` list-error` after the Style Classes (W:1325-1334); Fetching also keeps the
      row count unrecorded (storeListLength, W:1263-1267). Default Fetched. */
  sourceDataFetchStatus?: DataFetchStatus;
  /** Widget name as id: `<Name>` in a screen (Services "FavouriteList"), `<block prefix>-<Name>` in a block. */
  id?: string;
  /** Attributes other scripts write on the list element, as captured (SortableList: `data-deny-from`). */
  attributes?: Readonly<Record<`data-${string}`, string>>;
}

/** OutSystems List: `<div class="<Style Classes> OSFillParent" data-list>` with the iterator content inside. */
export function OSList<T>({
  source,
  keyOf,
  children,
  className,
  animateItems,
  disableVirtualization = false,
  positionRelative = false,
  onScrollEnding,
  infiniteScrollThreshold = INFINITE_SCROLL_THRESHOLD,
  sourceDataFetchStatus = DataFetchStatus.Fetched,
  id,
  attributes,
}: OSListProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);
  const latest = useRef({ onScrollEnding, infiniteScrollThreshold, length: source.length, sourceDataFetchStatus });
  useEffect(() => {
    latest.current = { onScrollEnding, infiniteScrollThreshold, length: source.length, sourceDataFetchStatus };
  });
  const scroll = useRef({
    host: null as ScrollHost | null,
    running: false,
    lastScrollTop: undefined as number | undefined,
    lastScrollLeft: undefined as number | undefined,
    previousListLength: 0,
    mounted: false,
  });

  /** executeScrollEndingEventHandler (W:1291-1297): OS.Flow.tryFinally, so no new event until the handler settles. */
  const executeScrollEnding = () => {
    scroll.current.running = true;
    void Promise.resolve()
      .then(() => latest.current.onScrollEnding?.())
      .finally(() => {
        scroll.current.running = false;
      });
  };
  /** tryFireScrollEndingEvent (W:1277-1290). The last offsets start undefined: the first scroll event only records. */
  const tryFireScrollEnding = (force = false) => {
    const st = scroll.current;
    if (st.running) return;
    const host = (st.host ??= getScrollHost(listRef.current?.parentElement ?? null));
    const threshold = latest.current.infiniteScrollThreshold;
    const n = getScrollInfo(host);
    if ((n.y > 0 && st.lastScrollTop !== undefined && n.y > st.lastScrollTop) || force) {
      if (n.height <= n.y + n.viewportHeight + threshold) executeScrollEnding();
    } else if (
      // `|| force` of the compiled else branch (W:1284) is always false here.

      n.x > 0 &&
      st.lastScrollLeft !== undefined &&
      n.x > st.lastScrollLeft &&
      n.width <= n.x + n.viewportWidth + threshold
    )
      executeScrollEnding();
    st.lastScrollTop = n.y;
    st.lastScrollLeft = n.x;
  };
  /** storeListLength (W:1263-1267): not while the source is Fetching. */
  const storeListLength = () => {
    const { length, sourceDataFetchStatus: status } = latest.current;
    if (status !== DataFetchStatus.Fetching && length > 0) scroll.current.previousListLength = length;
  };

  // componentDidMount / componentWillUnmount (W:1235-1253, 1268-1276): scroll and resize of the scroll host, and
  // orientationchange of the window (forced), registered after paint.
  const listensToScrollEnding = onScrollEnding !== undefined;
  useEffect(() => {
    const st = scroll.current;
    let disposed = false;
    let host: ScrollHost | null = null;
    const onScroll = () => {
      tryFireScrollEnding();
    };
    const onOrientationChange = () => {
      tryFireScrollEnding(true);
    };
    if (listensToScrollEnding)
      executeAfterPaint(() => {
        if (disposed) return;
        host = st.host ??= getScrollHost(listRef.current?.parentElement ?? null);
        host.addEventListener('scroll', onScroll);
        host.addEventListener('resize', onScroll);
        window.addEventListener('orientationchange', onOrientationChange);
      });
    storeListLength();
    return () => {
      disposed = true;
      host?.removeEventListener('scroll', onScroll);
      host?.removeEventListener('resize', onScroll);
      window.removeEventListener('orientationchange', onOrientationChange);
      st.host = null;
    };
    // Mount and unmount only, as the class component.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listensToScrollEnding]);

  // componentDidUpdate (W:1254-1259): a new row count tries the event (not forced).
  useEffect(() => {
    if (!scroll.current.mounted) {
      scroll.current.mounted = true;
      return;
    }
    if (latest.current.onScrollEnding && scroll.current.previousListLength !== latest.current.length)
      tryFireScrollEnding();
    storeListLength();
  });

  return (
    <div
      {...attributes}
      ref={listRef}
      id={id}
      className={`${className}${fetchStatusClass(sourceDataFetchStatus)} OSFillParent`}
      data-animation-disabled={animateItems ? undefined : ''}
      data-list=""
      data-virtualization-disabled={disableVirtualization ? '' : undefined}
      style={positionRelative ? { position: 'relative' } : undefined}
    >
      {source.map((item, index) => (
        <Fragment key={keyOf(item, index)}>{children(item, index)}</Fragment>
      ))}
    </div>
  );
}
