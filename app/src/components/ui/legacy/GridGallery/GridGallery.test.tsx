import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { GridGallery } from './GridGallery';
import * as stories from './GridGallery.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('DEPRECATED_GalleryV2', () => {
  testCapturedVariants(stories, captures);

  it('input defaults: 4 / 3 / "1" columns, gap Base, list counts + 1', () => {
    const { container } = render(<GridGallery />);
    const gallery = container.querySelector<HTMLElement>('.grid-gallery');
    const v = (name: string) => gallery?.style.getPropertyValue(name);
    expect([v('--grid-desktop'), v('--grid-tablet'), v('--grid-phone'), v('--grid-gap')]).toEqual([
      '4',
      '3',
      '1',
      'var(--space-base)',
    ]);
    expect([v('--grid-list-desktop'), v('--grid-list-tablet'), v('--grid-list-phone')]).toEqual(['5', '4', '2']);
  });

  it('OnParametersChanged reruns the script', () => {
    const { container, rerender } = render(<GridGallery itemsInDesktop={2} />);
    rerender(<GridGallery itemsInDesktop={3} />);
    expect(container.querySelector<HTMLElement>('.grid-gallery')?.style.getPropertyValue('--grid-list-desktop')).toBe(
      '4',
    );
  });
});
