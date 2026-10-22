import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { SubLayout_HomePageSearch } from './SubLayout_HomePageSearch';
import * as stories from './SubLayout_HomePageSearch.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_HomePageSearch', () => {
  testCapturedVariants(stories, captures);

  it('a click on the input raises Clicked_Search', () => {
    const onClickedSearch = vi.fn();
    render(<SubLayout_HomePageSearch onClickedSearch={onClickedSearch} />);
    fireEvent.click(screen.getByText('Search for households. entities, news'));
    expect(onClickedSearch).toHaveBeenCalled();
  });
});
