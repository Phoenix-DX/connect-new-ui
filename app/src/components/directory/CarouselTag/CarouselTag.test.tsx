import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { CarouselTag } from './CarouselTag';
import * as stories from './CarouselTag.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('CarouselTag', () => {
  testCapturedVariants(stories, captures);
  it('shows the one-based index over the total', () => {
    expect(render(<CarouselTag inIndexCurrentItem={4} inTotalItems={9} />).getByText('5 / 9')).toBeInTheDocument();
  });
});
