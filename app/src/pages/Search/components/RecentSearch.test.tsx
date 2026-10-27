import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { ConnectSearch_RecentClickedResults } from '@/platform/storage/localEntities';
import { freshPage } from '@/test/testSupport';
import { RecentSearch } from './RecentSearch';

/* The recent clicked results gallery: UBT_LazyImage ImageSize Height ExtraSmall_32, Width Square for a Member, else
   NullTextIdentifier (ScreenBlock_Search.mvc.js:800-803). Fictional rows. */
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

describe('RecentSearch', () => {
  it('the recent gallery gives a Member avatar the square width, a household or a locality none', () => {
    freshPage();
    const noop = () => undefined;
    const { container } = render(
      <RecentSearch
        hasSearched={false}
        recentClicked={[
          recent('1', 'Member', 'Odile Fenwick'),
          recent('2', 'Household', 'Fenwick, Arlo and Tamsin'),
          recent('3', 'Locality', 'Bahia Blanca'),
        ]}
        recentTerms={[]}
        onRemoveAll={noop}
        onRecentResultClick={noop}
        onRecentSearchTerm={noop}
        onRecentSearchTermRemove={noop}
      />,
    );
    const images = [...container.querySelectorAll('[data-block="ConnectPatterns.LazyImage"]')];
    expect(images).toHaveLength(3);
    expect(images.map((i) => i.querySelector('.ubt-lazy-image--width-square') !== null)).toEqual([true, false, false]);
  });
});
