import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import type { ConnectSearch_RecentClickedResults } from '@/platform/storage/localEntities';
import { freshPage } from '@/test/testSupport';
import { RecentSearch, type RecentSearchProps } from './RecentSearch';

/* The recent search container against the TST view (ScreenBlock_Search.mvc.js:530-983 of the capture of 2026-10-29).
   No capture has recent clicks, so these tests check the markup (drift D-Q2 (a)). Fictional rows. */
const recent = (Id: string, EntityType: string, Name: string): ConnectSearch_RecentClickedResults => ({
  Id,
  UserId: 990001,
  EntityId: `81${Id}`,
  EntityType,
  HouseholderId: '',
  Name,
  AdditionalInformation: '',
  Location: '',
  SearchedOn: '2026-10-20T09:00:00',
  Latitude: '0',
  Longitude: '0',
  SearchTargetId: 'Global',
});
const ROWS = [
  recent('1', 'Member', 'Odile Fenwick'),
  recent('2', 'Household', 'Fenwick, Arlo and Tamsin'),
  recent('3', 'Locality', 'Bahia Blanca'),
];
const noop = () => undefined;

/* The real UBT_LazyImage, spied on for its inputs. */
vi.mock('@/components/ui/EntityLazyImage', async (importOriginal) => {
  const real = await importOriginal<typeof import('@/components/ui/EntityLazyImage')>();
  return { ...real, EntityLazyImage: vi.fn(real.EntityLazyImage) };
});

function renderRecent(props: Partial<RecentSearchProps> = {}) {
  freshPage();
  return render(
    <RecentSearch
      hasSearched={false}
      recentClicked={ROWS}
      filteredRecentClicked={ROWS}
      isRecentClickedLoading={false}
      recentTerms={[]}
      onRemoveAll={noop}
      onRecentResultClick={noop}
      onRecentSearchTerm={noop}
      onRecentSearchTermRemove={noop}
      {...props}
    />,
  );
}

describe('RecentSearch', () => {
  it('the recent list gives a Member avatar the square width, a household or a locality none (S:822-829)', () => {
    const { container } = renderRecent();
    const images = [...container.querySelectorAll('[data-block="ConnectPatterns.LazyImage"]')];
    expect(images).toHaveLength(3);
    expect(images.map((i) => i.querySelector('.ubt-lazy-image--width-square') !== null)).toEqual([true, false, false]);
  });

  it('the recent clicked results are the list recent-search-list in a SkeletonSection, no gallery (S:738-809)', () => {
    const { container } = renderRecent();
    const section = container.querySelector('#b1-Recent_SearchResults [data-block="ConnectPatterns.SkeletonSection"]');
    expect(section?.id).toBe('b1-$b13');
    const list = section?.querySelector('[data-list]');
    expect(list?.className).toBe('list list-group recent-search-list OSFillParent');
    const items = [...(list?.children ?? [])];
    expect(items.map((i) => i.className)).toEqual(Array(3).fill('recent-search-item overflow-wrap-anywhere'));
    expect(items.map((i) => i.textContent.trim())).toEqual([
      'Odile Fenwick',
      'Fenwick, Arlo and Tamsin',
      'Bahia Blanca',
    ]);
    expect(container.querySelector('.gallery')).toBeNull();
  });

  it('UBT_LazyImage gets In_ForceLoadingState = not Get_FilteredRecentClickedResults.IsDataFetched (S:832)', () => {
    const forced = () => vi.mocked(EntityLazyImage).mock.calls.map(([props]) => props.inForceLoadingState);
    vi.mocked(EntityLazyImage).mockClear();
    renderRecent({ isRecentClickedLoading: true }).unmount();
    expect(new Set(forced())).toEqual(new Set([true]));
    vi.mocked(EntityLazyImage).mockClear();
    renderRecent();
    expect(new Set(forced())).toEqual(new Set([false]));
  });

  it('a recent term text has IsOverflowEllipsis: class ubt-custom-text-ellipsis (S:979-983)', () => {
    const term = {
      Id: 't1',
      UserId: 990001,
      SearchedTerm: 'Fenwick',
      SearchedOn: '2026-10-20T09:00:00',
      SearchTargetId: 'Global',
    };
    const { container } = renderRecent({ recentTerms: [term] });
    const text = container.querySelector('#b1-Recent_SearchTerms [data-block="BasePatterns.CustomText"] > div');
    expect(text).toHaveClass('text-neutral-9', 'font-regular', 'font-size-xs', 'ubt-custom-text-ellipsis');
    expect(text).toHaveTextContent('Fenwick');
  });

  it('the list has the skeleton look until Get_FilteredRecentClickedResults has data (S:740)', () => {
    // The section's own div; UBT_LazyImage has a skeleton of its own while the image loads.
    const sectionDiv = (container: HTMLElement) => container.querySelector('[id="b1-$b13"] > div');
    const loading = renderRecent({ isRecentClickedLoading: true });
    expect(sectionDiv(loading.container)?.classList.contains('ubt-skeleton-section')).toBe(true);
    expect(sectionDiv(loading.container)?.querySelector(':scope > [data-list]')).not.toBeNull();
    loading.unmount();
    const loaded = renderRecent();
    expect(sectionDiv(loaded.container)?.classList.contains('ubt-skeleton-section')).toBe(false);
  });

  it('the show condition reads Out_RecentClickedResults, not the local rows (S:562, S:642)', () => {
    const { container } = renderRecent({ filteredRecentClicked: [] });
    expect(container.querySelector('[data-list]')).toBeNull();
    expect(container.textContent).toBe('Please search for a Household, Member or a Place to get started.');
  });
});
