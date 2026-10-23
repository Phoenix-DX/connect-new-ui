import { describe, expect, it } from 'vitest';
import type { FeedServices, Service } from '@/api/service';
import { INITIAL_PAGES, toPages } from './feedServicesState';

/** A fictional service as the domain gives it. */
const service = (id: string, label: string, order: number): Service => ({
  id,
  label,
  order,
  isActive: false,
  iconId: `connect-icon-${id.toLowerCase()}`,
  isMandatory: false,
  startAsDefault: false,
});

const feedOf = (count: number): FeedServices => ({
  services: Array.from({ length: count }, (_, i) => service(`Service${i + 1}`, `Harbour app ${i + 1}`, i + 1)),
  externalLinksElGusto: '',
  externalPackagesCommunityTradelink: '',
  externalPackagesHR100: '',
  externalPackagesTrove: '',
});

describe('FeedBlock_Services state', () => {
  it('starts with one page of five empty services (the skeleton)', () => {
    expect(INITIAL_PAGES).toHaveLength(1);
    expect(INITIAL_PAGES[0]?.pageNumber).toBe(1);
    expect(INITIAL_PAGES[0]?.serviceItems).toEqual(Array(5).fill({ id: '', iconId: '', name: '', order: 0 }));
  });

  it('OnAfterFetch_GetServices cuts the services into pages of ItemPerPage items, with the label as the name', () => {
    const pages = toPages(feedOf(8), 6, false);
    expect(pages.map((p) => [p.pageNumber, p.serviceItems.length])).toEqual([
      [1, 6],
      [2, 2],
    ]);
    expect(pages[1]?.serviceItems[1]).toEqual({
      id: 'Service8',
      iconId: 'connect-icon-service8',
      name: 'Harbour app 8',
      order: 8,
    });
  });

  it('ForceAddService adds the "Add Service" item after the services', () => {
    const pages = toPages(feedOf(6), 6, true);
    expect(pages).toHaveLength(2);
    expect(pages[1]?.serviceItems).toEqual([{ id: '', iconId: '', name: 'Add Service', order: 7 }]);
  });

  it('no services and no "Add Service" item give no page', () => {
    expect(toPages(feedOf(0), 6, false)).toEqual([]);
  });
});
