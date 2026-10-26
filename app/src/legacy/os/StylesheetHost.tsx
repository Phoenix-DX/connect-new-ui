import { useLayoutEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { DEFAULT_CSS_SCREEN, ROUTE_CSS } from '@/app/routes.css.generated';
import { onceScreenTransitionEnd } from '@/platform/navigation/transitionEvents';
import { screenOf } from '@/platform/navigation/paths';

/* The original keeps in <head> exactly the stylesheets of the current screen (the screen's and its blocks'
   getCssDependencies, `_Basic.css` first), in a stable order: css_observe.cjs on TST, HomeFeed ⇄ MessageList.
   The clone does the same with the original files, unchanged, served from public/UBTConnect/css. Their relative
   url()s (../<font>, ../img/<image>) resolve to public/UBTConnect/. Sets per route: routes.css.generated.ts
   (migration/tools/css_sets.py).
   On a navigation the new screen's files are added at once and the others stay until the screen transition has ended,
   so the leaving screen keeps its styles while it leaves: BaseWebScreen.loadResources → CSSHelper.scheduleCSSPreparation
   (OutSystemsReactView.js offsets 181383, 200146) removes them on the runtime TransitionEnd, only when no newer
   preparation started since.
   Each file goes into the `legacy` cascade layer (styles/layers.css), so the CSS of the clone (`app` layer) wins over
   it whatever the specificity. The files stay unchanged: each <link> loads a data: stylesheet that only imports its
   file with `layer(legacy)`. A <link> and not a <style>: it keeps the load event (fired once the import has loaded)
   and the stylesheet links that parity_check.cjs copies into the reference page. The import URL is absolute because a
   data: URL is no base for a relative URL; inside the imported file, url()s still resolve against the file. */

/** URL folder of the original stylesheets (public/UBTConnect/css). */
export const CSS_PATH = '/UBTConnect/css/';

/** The cascade layer of the original stylesheets (styles/layers.css). */
const LEGACY_LAYER = 'legacy';

/** The href of the link that loads an original stylesheet into the legacy layer; `base` resolves CSS_PATH. */
export function legacyHref(file: string, base: string): string {
  const url = new URL(CSS_PATH + file, base).href;
  return `data:text/css;charset=utf-8,${encodeURIComponent(`@import url("${url}") layer(${LEGACY_LAYER});`)}`;
}

/** The ordered stylesheet files of the screen a URL path shows; unknown paths get the default screen's set. */
export function stylesheetsOf(pathname: string): readonly string[] {
  const screen = screenOf(pathname);
  return (screen === null ? undefined : ROUTE_CSS[screen]) ?? ROUTE_CSS[DEFAULT_CSS_SCREEN] ?? [];
}

/** Settles when a link added by syncStylesheets has loaded (or failed: the original shows the screen then too). */
const loading = new WeakMap<HTMLLinkElement, Promise<void>>();

/** The original file of a link that syncStylesheets added (`data-legacy-css`), else null. */
function fileOf(link: HTMLLinkElement): string | null {
  return link.rel === 'stylesheet' ? (link.dataset.legacyCss ?? null) : null;
}

function createLink(doc: Document, file: string): HTMLLinkElement {
  const link = doc.createElement('link');
  link.rel = 'stylesheet';
  link.dataset.legacyCss = file;
  link.href = legacyHref(file, doc.baseURI);
  loading.set(
    link,
    new Promise<void>((resolve) => {
      link.addEventListener('load', () => {
        resolve();
      });
      link.addEventListener('error', () => {
        resolve();
      });
    }),
  );
  return link;
}

/** Where the first original stylesheet goes when none is present: before the clone's own styles, as index.html had it. */
function firstSlot(head: HTMLHeadElement): ChildNode | null {
  return head.querySelector('link[rel="stylesheet"], style');
}

/**
 * Makes the original stylesheets in `head` exactly `files`, in that order. Links already present stay where they are
 * (no reload) unless they are out of order; missing ones are inserted at their position; the others are removed, or
 * kept with `retainOthers` (removed later by a sync without it). Returns the links of the set, in order.
 */
export function syncStylesheets(
  head: HTMLHeadElement,
  files: readonly string[],
  { retainOthers = false }: { retainOthers?: boolean } = {},
): HTMLLinkElement[] {
  const wanted = new Set(files);
  const present = new Map<string, HTMLLinkElement>();
  for (const link of head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')) {
    const file = fileOf(link);
    if (file === null) continue;
    if (wanted.has(file) && !present.has(file)) present.set(file, link);
    else if (!retainOthers || wanted.has(file)) link.remove();
  }
  const links: HTMLLinkElement[] = [];
  let anchor: HTMLLinkElement | null = null;
  for (const file of files) {
    const existing = present.get(file);
    const link = existing ?? createLink(head.ownerDocument, file);
    if (anchor === null) {
      // the first file goes before every other original stylesheet still present
      const first = [...present.values()].find((l) => l !== link);
      const inPlace = existing !== undefined && (first === undefined || precedes(link, first));
      if (!inPlace) head.insertBefore(link, first ?? firstSlot(head));
    } else if (existing === undefined || !precedes(anchor, link)) {
      anchor.after(link);
    }
    anchor = link;
    links.push(link);
  }
  return links;
}

function precedes(a: Node, b: Node): boolean {
  return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
}

/** Settles once every link of the set has loaded or failed. Links the host did not add count as loaded. */
export function whenLoaded(links: readonly HTMLLinkElement[]): Promise<void> {
  return Promise.all(links.map((l) => loading.get(l) ?? Promise.resolve())).then(() => undefined);
}

/**
 * Syncs <head> to the current route's original stylesheets on every route change. On the first load the content
 * renders only after the set has loaded, so no screen (and no parity screenshot) shows half-styled.
 */
export function StylesheetHost({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const files = stylesheetsOf(pathname);
    const links = syncStylesheets(document.head, files, { retainOthers: ready });
    // the previous preparation's removal is dropped (CSSHelper: `v === T`)
    if (ready) return onceScreenTransitionEnd(() => syncStylesheets(document.head, files));
    let live = true;
    void whenLoaded(links).then(() => {
      if (live) setReady(true);
    });
    return () => {
      live = false;
    };
  }, [pathname, ready]);

  return ready ? children : null;
}
