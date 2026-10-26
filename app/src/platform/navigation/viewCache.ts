import { dehydrate, hydrate, type DehydratedState, type QueryClient } from '@tanstack/react-query';

/* View cache (decision U19, pattern P-BACK). The original runtime keeps a ScreenStateCache: going back restores the
   screen from it (`wasCurrentViewRestoredFromCache`, CUI:515-529, 700-701) and ExitConfirmationDialog empties it
   when it is ready (p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:683-691).
   Here one saved view per history entry (keyed by `location.key`) holds what the screen needs to come back as it was:
   the scroll offsets, the query data it showed, and its `useViewState` values. It is written when the entry is left
   and read when a back navigation returns to it. */

interface ScrollOffset {
  /** child indexes from the screen container down to the scrolled element */
  path: number[];
  top: number;
  left: number;
}

export interface SavedView {
  scroll: ScrollOffset[];
  windowScroll: { x: number; y: number };
  queries: DehydratedState | null;
  state: ReadonlyMap<string, unknown>;
}

const saved = new Map<string, SavedView>();
const liveState = new Map<string, () => unknown>();
let restoring: { key: string; view: SavedView | null } | null = null;

/** The element the screens render into (AppFrame), or the body when there is none (tests). */
const screenRoot = (): Element => document.querySelector('.active-screen') ?? document.body;

function pathTo(root: Element, element: Element): number[] {
  const path: number[] = [];
  for (let node: Element = element; node !== root;) {
    const parent = node.parentElement;
    if (!parent) break;
    path.unshift(Array.prototype.indexOf.call(parent.children, node));
    node = parent;
  }
  return path;
}

function elementAt(root: Element, path: readonly number[]): Element | null {
  let node: Element | null = root;
  for (const index of path) {
    if (!node) return null;
    node = node.children.item(index);
  }
  return node;
}

function readScroll(root: Element): ScrollOffset[] {
  return [...root.querySelectorAll('*')]
    .filter((element) => element.scrollTop !== 0 || element.scrollLeft !== 0)
    .map((element) => ({ path: pathTo(root, element), top: element.scrollTop, left: element.scrollLeft }));
}

function readQueries(queryClient: QueryClient | undefined): DehydratedState | null {
  if (!queryClient) return null;
  return dehydrate(queryClient, {
    shouldDehydrateQuery: (query) => query.state.status === 'success' && query.getObserversCount() > 0,
  });
}

/** Saves the entry being left, while its screen is still in the document. */
export function saveView(key: string, queryClient: QueryClient | undefined): void {
  saved.set(key, {
    scroll: readScroll(screenRoot()),
    windowScroll: { x: window.scrollX, y: window.scrollY },
    queries: readQueries(queryClient),
    state: new Map([...liveState].map(([name, read]) => [name, read()])),
  });
}

/**
 * Called before the router shows `key`. A back navigation to a saved entry puts its query data back in the client
 * first, so the screen renders with data (no loading state) and refreshes as its queries say.
 */
export function enterView(key: string, isBack: boolean, queryClient: QueryClient | undefined): void {
  const view = isBack ? (saved.get(key) ?? null) : null;
  if (view?.queries && queryClient) hydrate(queryClient, view.queries);
  restoring = { key, view };
}

/** The saved view the entry `key` is being restored from, if any. */
export const restoredView = (key: string): SavedView | null => (restoring?.key === key ? restoring.view : null);

/** Puts the scroll offsets back once the restored screen is in the document. */
export function restoreScroll(key: string): void {
  const view = restoredView(key);
  if (!view) return;
  const root = screenRoot();
  for (const offset of view.scroll) {
    const element = elementAt(root, offset.path);
    if (!element) continue;
    element.scrollTop = offset.top;
    element.scrollLeft = offset.left;
  }
  if (view.windowScroll.x !== 0 || view.windowScroll.y !== 0) window.scrollTo(view.windowScroll.x, view.windowScroll.y);
}

/** `useViewState` values of the mounted screen, read when its entry is saved. */
export function registerViewState(name: string, read: () => unknown): () => void {
  liveState.set(name, read);
  return () => {
    if (liveState.get(name) === read) liveState.delete(name);
  };
}

/** Entries that left the history (see historyStack.commitEntry). */
export function dropViews(keys: readonly string[]): void {
  for (const key of keys) saved.delete(key);
}

/** ClearScreenStateCache: forgets every saved view (the screen on show keeps what it was restored with). */
export function clearViewCache(): void {
  saved.clear();
}

export const savedViewCount = (): number => saved.size;

/** Test helper. */
export function resetViewCache(): void {
  saved.clear();
  liveState.clear();
  restoring = null;
}
