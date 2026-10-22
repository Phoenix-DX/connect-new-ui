import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { browserCalc, stubCarouselLayout } from '@/shared/osui/Carousel/testLayout';
import { Gallery } from './Gallery';
import * as stories from './Gallery.stories';

/* Stories compared synchronously; the others have their own test below. */
const capturedStories = { default: stories.default, V3: stories.V3, V4: stories.V4 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, V2 } = composeStories(stories);

describe('Gallery', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  testCapturedVariants(capturedStories, captures);

  /* HomeFeed: the gallery is the slide of FeedBlock_Services' carousel, which adds the Splide slide attributes. */
  for (const [name, Story, source] of [
    ['V1', V1, 'HomeFeed/default'],
    ['V2', V2, 'HomeFeed/loading'],
  ] as const) {
    it(`${name} matches __captures__/${name.toLowerCase()}.html (${source}, inside the carousel)`, () => {
      stubCarouselLayout(342);
      const { container } = render(<Story />);
      const gallery = browserCalc(container.querySelector('[data-block="Adaptive.Gallery"]'));
      expectToMatchCapture(gallery, captures[`./__captures__/${name.toLowerCase()}.html`] ?? '');
    });
  }

  it('defaults: 4 / 3 / 1 items, base gap; raises Initialized with its id', () => {
    const onInitialized = vi.fn();
    const { container } = render(<Gallery id="$b4" onInitialized={onInitialized} />);
    const el = container.querySelector('.osui-gallery');
    expect(el?.getAttribute('style')).toContain('--gallery-desktop-items: 4');
    expect(el?.getAttribute('style')).toContain('--gallery-phone-items: 1');
    expect(el?.getAttribute('style')).toContain('--gallery-gap: var(--space-base)');
    expect(onInitialized).toHaveBeenCalledWith('b4');
  });
});
