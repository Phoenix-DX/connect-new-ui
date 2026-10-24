import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Skeleton } from './Skeleton';
import * as stories from './Skeleton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Skeleton', () => {
  testCapturedVariants(stories, captures);

  it('is inert while loading unless active while loading', () => {
    const section = (props: Parameters<typeof Skeleton>[0]) =>
      render(<Skeleton {...props} />).container.querySelector('[data-block] > div');
    expect(section({ isLoading: true })).toHaveAttribute('inert');
    expect(section({ isLoading: true, isActiveWhileLoading: true })).not.toHaveAttribute('inert');
    expect(section({ isLoading: false })).not.toHaveAttribute('inert');
  });

  it('keeps the compiled class string: extended class, a space, then the skeleton class while loading', () => {
    const className = (props: Parameters<typeof Skeleton>[0]) =>
      render(<Skeleton {...props} />)
        .container.querySelector('[data-block] > div')
        ?.getAttribute('class');
    expect(className({})).toBe(' ');
    expect(className({ isLoading: true })).toBe(' ubt-skeleton-section');
    expect(className({ extendedClass: 'button-group' })).toBe('button-group ');
    expect(className({ extendedClass: 'button-group', isLoading: true })).toBe('button-group ubt-skeleton-section');
  });
});
