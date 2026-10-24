import { vi } from 'vitest';

/* Tests only: jsdom has no layout and no matchMedia, which Splide needs. This emulates the captured viewport: the
   carousel is `width` px wide, the track shows one slide at a time and slide i sits at i × width. */
export function stubCarouselLayout(width: number, viewport = 390) {
  const queries: string[] = [];
  // Splide's breakpoints are `(max-width:<n>px)` queries (Splide 4.1.3 Media); the captures are phone-sized.
  const maxWidth = (query: string) => /max-width:\s*(\d+)px/.exec(query)?.[1];
  vi.stubGlobal('matchMedia', (query: string) => {
    queries.push(query);
    const limit = maxWidth(query);
    return {
      matches: limit !== undefined && viewport <= Number(limit),
      media: query,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
    };
  });
  const rect = (left: number, w: number) =>
    ({ left, right: left + w, width: w, top: 0, bottom: 0, height: 0, x: left, y: 0, toJSON: () => ({}) }) as DOMRect;
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(function (this: HTMLElement) {
    return this.classList.contains('osui-carousel') ? width : 0;
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (this: Element) {
    if (this.classList.contains('splide__slide')) {
      const index = Array.from(this.parentElement?.children ?? []).indexOf(this);
      return rect(index * width, width);
    }
    if (
      this.classList.contains('splide__list') ||
      this.classList.contains('splide__track') ||
      this.classList.contains('splide')
    )
      return rect(0, width);
    return rect(0, 0);
  });
  return queries;
}

/** jsdom serializes Splide's slide width `calc((100% + 0px)/1 - 0px)` as `calc(-0px + 1 * (100% + 0px))`; a browser
    (the capture) as `calc(100% + 0px)`. Same value: rewrite it the browser's way before comparing. */
export function browserCalc(root: Element | null) {
  for (const el of root ? [root, ...Array.from(root.querySelectorAll('[style]'))] : []) {
    const css = el.getAttribute('style') ?? '';
    if (css.includes('calc(-0px + 1 * (100% + 0px))'))
      el.setAttribute('style', css.replaceAll('calc(-0px + 1 * (100% + 0px))', 'calc(100% + 0px)'));
  }
  return root;
}
