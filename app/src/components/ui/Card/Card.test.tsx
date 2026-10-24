import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Card } from './Card';
import * as stories from './Card.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Card', () => {
  testCapturedVariants(stories, captures);

  it('UsePadding False and ExtendedClass build the class verbatim (compiled Content.Style)', () => {
    const { container } = render(<Card usePadding={false} extendedClass="my-card" />);
    expect(container.querySelector('[data-block="Content.Card"] > div')?.className).toBe(
      'placeholder-empty card card-content padding-none  my-card',
    );
  });
});
