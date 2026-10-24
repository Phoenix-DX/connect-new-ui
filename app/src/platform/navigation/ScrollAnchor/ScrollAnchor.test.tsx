import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ScrollAnchor } from './ScrollAnchor';
import * as stories from './ScrollAnchor.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ScrollAnchor', () => {
  testCapturedVariants(stories, captures);

  it('writes the Id input to data-dx-scroll-anchor-id', () => {
    const { container } = render(<ScrollAnchor idIn="42" />);
    expect(container.querySelector('[data-dx-scroll-anchor-id="42"]')).not.toBeNull();
  });
});
