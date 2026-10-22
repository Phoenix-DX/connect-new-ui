import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';
import { server } from '@/test/setup';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { FeedBlock_CommunityPopulation } from './FeedBlock_CommunityPopulation';
import * as stories from './FeedBlock_CommunityPopulation.stories';

/* Stories compared synchronously; the others have their own test below. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);

function Where() {
  return <p data-testid="where">{useLocation().pathname}</p>;
}

describe('FeedBlock_CommunityPopulation', () => {
  testCapturedVariants(capturedStories, captures);

  it('V2 matches __captures__/v2.html (HomeFeed/default, once the count is fetched)', async () => {
    const { container } = render(<V2 />);
    await screen.findByText('54461');
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v2.html'] ?? '');
  });

  it('shows 00000 while loading, 0 after an error; a click opens Updates_SingleList', async () => {
    server.use(
      http.post('/api/UBTConnect/FeedBlock_CommunityPopulation/DataActionFetchCount', () =>
        HttpResponse.json({ message: 'down' }, { status: 500 }),
      ),
    );
    render(
      <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <FeedBlock_CommunityPopulation />
                <Where />
              </>
            }
          />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('00000')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('0')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Community Population'));
    expect(screen.getByTestId('where').textContent).toBe('/UBTConnect/Updates_SingleList');
  });
});
