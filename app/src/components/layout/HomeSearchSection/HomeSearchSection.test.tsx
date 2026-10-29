import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { HomeSearchSection } from './HomeSearchSection';
import * as stories from './HomeSearchSection.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_HomePageSearch', () => {
  testCapturedVariants(stories, captures);

  it('a click on the input raises Clicked_Search', () => {
    const onClickedSearch = vi.fn();
    render(<HomeSearchSection onClickedSearch={onClickedSearch} />);
    fireEvent.click(screen.getByText('Search for households, members or places.'));
    expect(onClickedSearch).toHaveBeenCalled();
  });
});
