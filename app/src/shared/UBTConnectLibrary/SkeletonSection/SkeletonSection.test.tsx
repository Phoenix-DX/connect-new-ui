import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { SkeletonSection } from './SkeletonSection';
import * as stories from './SkeletonSection.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SkeletonSection', () => {
  testCapturedVariants(stories, captures);

  it('is inert while loading unless active while loading', () => {
    const section = (props: Parameters<typeof SkeletonSection>[0]) =>
      render(<SkeletonSection {...props} />).container.querySelector('[data-block] > div');
    expect(section({ inIsLoading: true })).toHaveAttribute('inert');
    expect(section({ inIsLoading: true, inIsActiveWhileLoading: true })).not.toHaveAttribute('inert');
    expect(section({ inIsLoading: false })).not.toHaveAttribute('inert');
  });
});
