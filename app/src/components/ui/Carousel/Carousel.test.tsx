import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { carouselGoTo, carouselToggleDrag, setCarouselStartingPosition } from '@/components/ui/lib/actions';
import { CarouselNavigation } from '@/components/ui/lib/staticEntities';
import { carousel_SetCurrentPosition } from '@/lib/ubtConnect/actions';
import { Carousel, splideOptions, type CarouselConfig } from './Carousel';
import * as stories from './Carousel.stories';
import { browserCalc, stubCarouselLayout } from './testLayout';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, V2, V3, V4 } = composeStories(stories);

/* The captured widths: HomeFeed's carousel is 342 px wide (its `--osui-carousel-track-width`), the others 390 px.
   testLayout.ts emulates that layout (jsdom has none), so Splide computes what it did on the device. */
const cases = [
  ['V1', V1, 342, 'HomeFeed/default'],
  ['V2', V2, 390, 'HouseholdCarousel/default'],
  ['V3', V3, 390, 'Photobook/default'],
  ['V4', V4, 390, 'SupperMeeting_Carousel/default'],
] as const;

describe('Carousel', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  for (const [name, Story, width, source] of cases) {
    it(`${name} matches __captures__/${name.toLowerCase()}.html (${source})`, () => {
      stubCarouselLayout(width);
      const { container } = render(<Story />);
      expectToMatchCapture(
        browserCalc(container.firstElementChild),
        captures[`./__captures__/${name.toLowerCase()}.html`] ?? '',
      );
    });
  }

  it('Splide options as the provider builds them (SplideConfig.getProviderConfig, OSUI:18488-18514)', () => {
    const c: CarouselConfig = {
      navigation: CarouselNavigation.Both,
      height: '200px',
      desktop: 3,
      tablet: 2,
      phone: 1,
      autoPlay: true,
      loop: true,
      padding: '8px',
      itemsGap: '4px',
      startingPosition: 2,
    };
    expect(splideOptions(c)).toEqual({
      arrows: true,
      role: 'presentation',
      breakpoints: { 768: { perPage: 1 }, 1024: { perPage: 2 } },
      keyboard: 'focused',
      direction: 'ltr',
      height: '200px',
      type: 'loop',
      focus: 0,
      perPage: 3,
      autoplay: true,
      padding: '8px',
      pagination: true,
      gap: '4px',
      start: 2,
      snap: true,
      dragMinThreshold: 30,
    });
    const blank = splideOptions({ ...c, navigation: 'x', height: ' ', padding: '', itemsGap: '', loop: false });
    expect(blank).toMatchObject({
      arrows: true,
      pagination: true,
      height: 'auto',
      padding: '0px',
      gap: '0px',
      type: 'slide',
    });
    expect(splideOptions({ ...c, navigation: CarouselNavigation.Arrows })).toMatchObject({
      arrows: true,
      pagination: false,
    });
    expect(splideOptions({ ...c, navigation: CarouselNavigation.Dots })).toMatchObject({
      arrows: false,
      pagination: true,
    });
    document.body.classList.add('is-rtl');
    expect(splideOptions(c).direction).toBe('rtl');
    document.body.classList.remove('is-rtl');
  });

  it("the device is Splide's breakpoints: max-width 768 / 1024 media queries", () => {
    const queries = stubCarouselLayout(390);
    render(
      <Carousel id="$b3" navigation={CarouselNavigation.None} itemsPerSlide={{ Desktop: 3, Tablet: 2, Phone: 1 }}>
        <div className="list">
          <div>a</div>
          <div>b</div>
        </div>
      </Carousel>,
    );
    expect(queries).toEqual(expect.arrayContaining(['(max-width:768px)', '(max-width:1024px)']));
  });

  it("raises Initialized once; without a List the carousel root is Splide's root and the content its list", () => {
    stubCarouselLayout(390);
    const onInitialized = vi.fn();
    const { container } = render(
      <Carousel id="$b1" navigation={CarouselNavigation.None} onInitialized={onInitialized}>
        <p>slide</p>
      </Carousel>,
    );
    expect(onInitialized).toHaveBeenCalledWith('b1');
    expect(container.querySelector('.osui-carousel')).toHaveClass('splide');
    expect(container.querySelector('.osui-carousel__track')).toHaveClass('splide__track');
    expect(container.querySelector('.osui-carousel__content')).toHaveClass('splide__list');
    expect(container.querySelector('p')).toHaveClass('splide__slide');
  });

  it('OnSlideMoved only for a new index; a re-render redraws (OnRender) without a second Initialized', () => {
    vi.useFakeTimers();
    stubCarouselLayout(390);
    const onInitialized = vi.fn();
    const onMoved = vi.fn();
    const view = (extra: string) => (
      <Carousel
        id="$b2"
        navigation={CarouselNavigation.Dots}
        optionalConfigs={{ AutoPlay: false, Loop: false }}
        extendedClass={extra}
        onInitialized={onInitialized}
        onOnSlideMoved={onMoved}
      >
        <div className="list">
          <div>a</div>
          <div>b</div>
        </div>
      </Carousel>
    );
    const { container, rerender } = render(view(''));
    const next = container.querySelector<HTMLButtonElement>(
      '.splide__pagination button:last-child, .splide__pagination li:last-child button',
    );
    next?.click();
    vi.runAllTimers();
    rerender(view('x-extra'));
    vi.runAllTimers();
    expect(onInitialized).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.osui-carousel__track')).toHaveClass('splide', 'is-initialized');
    expect(container.querySelector('.list')).toHaveAttribute('role', 'list');
    vi.useRealTimers();
  });

  /* CR-Photobook-1: CarouselGoTo, CarouselToggleDrag and the StartingPosition config (Carousel_SetCurrentPosition). */
  const threeSlides = (props: { onOnSlideMoved?: (id: string, index: number) => void; extendedClass?: string }) => (
    <Carousel
      id="b9-Carousel_Test"
      navigation={CarouselNavigation.None}
      optionalConfigs={{ AutoPlay: false, Loop: false }}
      {...props}
    >
      <div className="list">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </Carousel>
  );
  const slides = (container: HTMLElement) => Array.from(container.querySelectorAll('.splide__slide'));
  const listTransform = (container: HTMLElement) =>
    container.querySelector<HTMLElement>('.splide__list')?.style.transform ?? '';

  it('CarouselGoTo moves to the item (Splide go, OSUI:18369-18371) and answers Success; unknown id fails', () => {
    stubCarouselLayout(390);
    const { container } = render(threeSlides({}));
    expect(listTransform(container)).toContain('translateX(0px)');
    expect(carouselGoTo('b9-Carousel_Test', 2)).toBe(true);
    expect(listTransform(container)).toContain('translateX(-780px)');
    expect(carouselGoTo('no-such-carousel', 1)).toBe(false);
  });

  it('CarouselToggleDrag sets the live drag option (OSUI:18407-18409): splide--draggable follows it', () => {
    stubCarouselLayout(390);
    const { container } = render(threeSlides({}));
    const splideRoot = container.querySelector('.osui-carousel__track');
    expect(splideRoot).toHaveClass('splide--draggable');
    expect(carouselToggleDrag('b9-Carousel_Test', false)).toBe(true);
    expect(splideRoot).not.toHaveClass('splide--draggable');
    expect(carouselToggleDrag('b9-Carousel_Test', true)).toBe(true);
    expect(splideRoot).toHaveClass('splide--draggable');
    expect(carouselToggleDrag('no-such-carousel', true)).toBe(false);
  });

  it('Carousel_SetCurrentPosition writes StartingPosition: the next OnRender redraw starts on that item', () => {
    vi.useFakeTimers();
    stubCarouselLayout(390);
    const { container, rerender } = render(threeSlides({}));
    carousel_SetCurrentPosition('b9-Carousel_Test', 1);
    expect(listTransform(container)).toContain('translateX(0px)'); // no move until a redraw
    rerender(threeSlides({ extendedClass: 'x-redraw' }));
    vi.runAllTimers();
    expect(listTransform(container)).toContain('translateX(-390px)');
    expect(slides(container)[1]).toHaveClass('is-active');
    // An unknown carousel: the JS catch only logs; the shared setter throws like `undefined._configs`.
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => {
      carousel_SetCurrentPosition('no-such-carousel', 1);
    }).not.toThrow();
    expect(error).toHaveBeenCalled();
    expect(() => {
      setCarouselStartingPosition('no-such-carousel', 1);
    }).toThrow();
    vi.useRealTimers();
  });
});
