import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CardTextSkeleton } from './CardTextSkeleton';
import * as stories from './CardTextSkeleton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NC_Card_Item_Text__Skeleton', () => {
  testCapturedVariants(stories, captures);

  it('ExtendedClass is appended to the skeleton class', () => {
    const { container } = render(<CardTextSkeleton extendedClass="ThemeGrid_Width6" />);
    expect(container.querySelector('[data-container]')).toHaveClass('skeleton-item--text', 'ThemeGrid_Width6');
  });
});
