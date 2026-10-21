import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { NC_Card_Item_Text__Skeleton } from './NC_Card_Item_Text__Skeleton';
import * as stories from './NC_Card_Item_Text__Skeleton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NC_Card_Item_Text__Skeleton', () => {
  testCapturedVariants(stories, captures);

  it('ExtendedClass is appended to the skeleton class', () => {
    const { container } = render(<NC_Card_Item_Text__Skeleton extendedClass="ThemeGrid_Width6" />);
    expect(container.querySelector('[data-container]')).toHaveClass('skeleton-item--text', 'ThemeGrid_Width6');
  });
});
