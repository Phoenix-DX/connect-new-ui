import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CommunityPopulation } from './CommunityPopulation';
import * as stories from './CommunityPopulation.stories';

/* Stories compared by the shared helper; the others have their own test below. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2, Loading } = composeStories(stories);

describe('FeedBlock_CommunityPopulation', () => {
  testCapturedVariants(capturedStories, captures);

  it('V2 matches __captures__/v2.html (HomeFeed/default, once the count is fetched)', () => {
    const { container } = render(<V2 />);
    expect(screen.getByText('54461')).toBeInTheDocument();
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v2.html'] ?? '');
  });

  it('shows 00000 while loading, 0 after an error; a click raises onClick (the caller opens Updates_SingleList)', () => {
    const { unmount } = render(<Loading />);
    expect(screen.getByText('00000')).toBeInTheDocument();
    unmount();
    const onClick = vi.fn();
    render(<CommunityPopulation isLoading={false} total="0" onClick={onClick} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Community Population'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
