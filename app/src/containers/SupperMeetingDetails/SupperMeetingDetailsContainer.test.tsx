import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { SupperMeetingDetailsContainer } from './SupperMeetingDetailsContainer';
import type { SupperMeetingDetailsFlags } from './hooks/useSupperMeetingDetails';

/* The container in the app frame on a memory router, with the MSW mocks of the test setup (mocks.ts: the recorded
   supper meeting for any id and the eleven fictional households of supper meeting 1210). */
const PATH = '/UBTConnect/Host';
const routes = (flags: SupperMeetingDetailsFlags) => ({
  [PATH]: (
    <SupperMeetingDetailsContainer id="$b3" subdivisionId="2820" flags={flags} carouselTag={<span>1 / 3</span>} />
  ),
  '/UBTConnect/HouseholdCarousel': <p>household carousel</p>,
  '/UBTConnect/HouseholdDetails': <p>household details</p>,
});

const block = (container: HTMLElement) =>
  container.querySelector('[data-block="Directory_SupperMeetings.SupperMeeting_DetailsBlock"]');
const detailCardIsSkeleton = (container: HTMLElement) =>
  block(container)
    ?.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')
    ?.firstElementChild?.classList.contains('ubt-skeleton-section');
const householdCards = (container: HTMLElement) =>
  container.querySelectorAll('[data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList"] .ubt-image-card');
const calls = () => (window.__osCalls ?? []).map((c) => `${c.owner ?? ''}/${c.action} ${c.inputNames.join(',')}`);

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('SupperMeetingDetailsContainer', () => {
  it('shows the skeletons, then the fetched supper meeting and its households; one call of each data action', async () => {
    const { container } = renderRoutes(routes({ hasCarouselEnabled: true }), PATH);
    expect(block(container)?.id).toBe('$b3');
    expect(detailCardIsSkeleton(container)).toBe(true);
    expect(householdCards(container)).toHaveLength(4);
    await waitFor(() => {
      expect(detailCardIsSkeleton(container)).toBe(false);
      expect(householdCards(container)).toHaveLength(11);
    });
    expect(screen.getByText('Zapiola (Main Meeting Room)')).toBeInTheDocument();
    expect(calls().filter((c) => c.includes('DataActionGetSubdivision'))).toEqual([
      'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds In_SubdivisionId',
      'SupperMeeting_DetailsBlock/DataActionGetSubdivision In_SubdivsionId',
    ]);
  });

  it('fills the Actions section with Directory_EntityDetailsActions and the image tag with the carousel tag', async () => {
    const { container } = renderRoutes(routes({ hasCarouselEnabled: true }), PATH);
    await waitFor(() => {
      expect(detailCardIsSkeleton(container)).toBe(false);
    });
    const actions = block(container)?.querySelector(
      '[data-block="Directory_CommonBlocks.Directory_EntityDetailsActions"]',
    );
    expect(actions?.closest('[data-block="SubLayout.SubLayout_DirectoryDetailScreen_Section"]')).not.toBeNull();
    expect(
      screen.getByText('1 / 3').closest('[data-block="ConnectCorePatterns.ImageCard_LazyLoading"]'),
    ).not.toBeNull();
  });

  it('a household click opens HouseholdCarousel with the carousel flag, HouseholdDetails without it', async () => {
    const withCarousel = renderRoutes(routes({ hasCarouselEnabled: true }), PATH);
    await waitFor(() => {
      expect(householdCards(withCarousel.container)).toHaveLength(11);
    });
    const second = householdCards(withCarousel.container)[1];
    if (!second) throw new Error('no second card');
    act(() => {
      fireEvent.click(second);
    });
    await waitFor(() => {
      expect(withCarousel.at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=91004');
    });
    withCarousel.unmount();
    resetNavigation();

    const without = renderRoutes(routes({ hasCarouselEnabled: false }), PATH);
    await waitFor(() => {
      expect(householdCards(without.container)).toHaveLength(11);
    });
    const first = householdCards(without.container)[0];
    if (!first) throw new Error('no first card');
    act(() => {
      fireEvent.click(first);
    });
    await waitFor(() => {
      expect(without.at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=42438');
    });
  });
});
