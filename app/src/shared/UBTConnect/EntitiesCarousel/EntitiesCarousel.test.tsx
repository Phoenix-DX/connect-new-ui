import { composeStories } from '@storybook/react-vite';
import { act, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { stubCarouselLayout } from '../../osui/Carousel/testLayout';
import * as osuiActions from '../../osui/lib/actions';
import type { SplideEventHandler } from '../../osui/lib/actions';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './EntitiesCarousel.stories';

/* The real OutSystems UI actions, spied on; SetSplideEvent also records the handlers it binds. */
const bound = vi.hoisted(() => new Map<string, (...args: number[]) => void>());
vi.mock('../../osui/lib/actions', async (importOriginal) => {
  const real = await importOriginal<typeof import('../../osui/lib/actions')>();
  return {
    ...real,
    carouselDisableOnRender: vi.fn(real.carouselDisableOnRender),
    setSplideConfigs: vi.fn(real.setSplideConfigs),
    unsetSplideEvent: vi.fn(real.unsetSplideEvent),
    setSplideEvent: vi.fn((widgetId: string, eventName: string, handler: SplideEventHandler) => {
      bound.set(eventName, handler);
      return real.setSplideEvent(widgetId, eventName, handler);
    }),
  };
});

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);
const WIDGET = 'b3-EntitiesCarousel';
/** Indexes of the elements whose content is rendered. */
const renderedElements = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('[data-block="Directory_Caroussel.EntitiesCarousel_Element"]')).flatMap(
    (element, index) => (element.childElementCount > 0 ? [index] : []),
  );

describe('EntitiesCarousel', () => {
  beforeEach(() => {
    stubCarouselLayout(390);
    bound.clear();
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  testCapturedVariants(stories, captures);

  it('renders the elements within RenderBuffer 3 of the starting position (next active still -1)', () => {
    const { container } = render(<V1 />);
    expect(renderedElements(container)).toEqual([0, 1, 2, 3]);
    const { container: later } = render(<V1 inStartingPosition={10} />);
    expect(renderedElements(later)).toEqual([0, 1, 2, 7, 8, 9, 10, 11, 12, 13]);
  });

  it('Initialized: disables OnRender, sets the Splide configs, tries to unset resize / resized, binds moved', async () => {
    const { container } = render(<V1 />);
    expect(osuiActions.carouselDisableOnRender).toHaveBeenCalledWith(WIDGET);
    expect(osuiActions.setSplideConfigs).toHaveBeenCalledWith(WIDGET, {
      speed: 0,
      fixedHeight: 'var(--carousel-slide-custom-height)',
      perMove: 1,
      flickPower: 100,
      flickMaxPages: 1,
      waitForTransition: 'true',
    });
    expect(vi.mocked(osuiActions.unsetSplideEvent).mock.calls).toEqual([
      [WIDGET, 'resize'],
      [WIDGET, 'resized'],
    ]);
    expect(vi.mocked(osuiActions.unsetSplideEvent).mock.results.map((r) => r.value as boolean)).toEqual([false, false]);
    expect([...bound.keys()]).toEqual(['moved']);
    // After the redraw the extended options apply: the fixed slide height of the capture.
    await waitFor(() => {
      expect(container.querySelector('.splide__slide')?.getAttribute('style')).toContain(
        'height: var(--carousel-slide-custom-height)',
      );
    });
  });

  it('moved: both indexes follow, Event_Moved is raised and the new elements render', () => {
    const onEventMoved = vi.fn();
    const { container } = render(<V1 onEventMoved={onEventMoved} />);
    act(() => {
      bound.get('moved')?.(8, 0, 8);
    });
    expect(onEventMoved).toHaveBeenCalledWith(8);
    expect(renderedElements(container)).toEqual([0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('Event_SetHeader: the header of the active element once its household is fetched, then on every move', async () => {
    const onEventSetHeader = vi.fn();
    render(<V1 onEventSetHeader={onEventSetHeader} />);
    await waitFor(
      () => {
        expect(onEventSetHeader).toHaveBeenLastCalledWith('Bahia Blanca, Argentina');
      },
      { timeout: 4000 },
    );
    act(() => {
      bound.get('moved')?.(20, 0, 20);
    });
    expect(onEventSetHeader).toHaveBeenLastCalledWith('');
  });
});

describe('OutSystems UI Carousel actions', () => {
  it('SetSplideConfigs sends only the fields that differ from the record default, "true" / "false" as booleans', () => {
    expect(
      osuiActions.splideProviderConfigs({
        speed: 0,
        fixedHeight: 'var(--h)',
        perMove: 1,
        waitForTransition: ' TRUE ',
        rewind: 'unset',
        label: undefined,
      }),
    ).toEqual({ fixedHeight: 'var(--h)', perMove: 1, waitForTransition: true });
  });

  it('answers Success False for an unknown widget', () => {
    expect(osuiActions.carouselDisableOnRender('nowhere')).toBe(false);
    expect(osuiActions.setSplideEvent('nowhere', 'moved', () => undefined)).toEqual({
      SplideEventId: '',
      Success: false,
    });
  });
});
