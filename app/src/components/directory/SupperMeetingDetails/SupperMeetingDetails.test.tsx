import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import * as stories from './SupperMeetingDetails.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V2, V3 } = composeStories(stories);
const detailCardSection = (root: Element | null) =>
  root?.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')?.firstElementChild;
const householdList = (root: Element | null) =>
  root?.querySelector('[data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList"]');

describe('SupperMeeting_DetailsBlock', () => {
  testCapturedVariants(stories, captures);

  it('shows the skeleton sections and four skeleton household rows until the data actions answered', () => {
    const { container } = render(<V3 />);
    const root = container.firstElementChild;
    expect(detailCardSection(root)?.classList.contains('ubt-skeleton-section')).toBe(true);
    expect(householdList(root)?.querySelectorAll('.ubt-image-card')).toHaveLength(4);
  });

  it('shows the supper meeting, the actions slot in the Actions section and the households once fetched', () => {
    const { container } = render(<V2 />);
    const root = container.firstElementChild;
    expect(detailCardSection(root)?.classList.contains('ubt-skeleton-section')).toBe(false);
    expect(screen.getByText('Zapiola (Main Meeting Room)')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(root?.querySelector('[data-block="Directory_CommonBlocks.Directory_EntityDetailsActions"]')).not.toBeNull();
    expect(householdList(root)?.querySelectorAll('.ubt-image-card')).toHaveLength(11);
  });

  it('puts the carousel tag placeholder in the image card of the supper meeting', () => {
    render(<V2 placeholderCarouselTag={<span>2 / 3</span>} />);
    expect(
      screen.getByText('2 / 3').closest('[data-block="ConnectCorePatterns.ImageCard_LazyLoading"]'),
    ).not.toBeNull();
  });

  it('raises Event_OnClick_Household of the household list with the id and every listed id', () => {
    const onHouseholdClick = vi.fn();
    const { container } = render(<V2 onHouseholdClick={onHouseholdClick} />);
    const second = householdList(container.firstElementChild)?.querySelectorAll('.ubt-image-card')[1];
    if (!second) throw new Error('no second card');
    fireEvent.click(second);
    expect(onHouseholdClick).toHaveBeenCalledTimes(1);
    const [householdId, householdIdList] = onHouseholdClick.mock.calls[0] as [string, string[]];
    expect(householdId).toBe('91004');
    expect(householdIdList).toHaveLength(11);
    expect(householdIdList[1]).toBe('91004');
  });
});
