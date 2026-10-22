import { composeStories } from '@storybook/react-vite';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import * as stories from './SupperMeeting_DetailsBlock.stories';

/* V1 and V3 are compared on the first render (skeleton); V2 once the data action answered. */
const capturedStories = { default: stories.default, V1: stories.V1, V3: stories.V3 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2 } = composeStories(stories);
const detailCardSection = (root: Element) =>
  root.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')?.firstElementChild;

describe('SupperMeeting_DetailsBlock', () => {
  testCapturedVariants(capturedStories, captures);

  it('V2 matches __captures__/v2.html (SupperMeeting_Details/default, once the subdivision is fetched)', async () => {
    const { container } = render(<V2 />);
    const root = container.firstElementChild;
    if (!root) throw new Error('nothing rendered');
    expect(detailCardSection(root)?.classList.contains('ubt-skeleton-section')).toBe(true);
    await waitFor(() => {
      expect(detailCardSection(root)?.classList.contains('ubt-skeleton-section')).toBe(false);
    });
    expectToMatchCapture(root, captures['./__captures__/v2.html'] ?? '');
  });
});
