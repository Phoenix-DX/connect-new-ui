import { render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { clearMemoryCache } from '@/api/client/cache';
import { FilterSheetContainer } from './FilterSheetContainer';

/* The MSW mocks of the test setup answer the cache blocks: the recorded country list of CacheControl_AllCountries and
   the mock user (a Global subscription) of CacheControl_UserInfo. */
describe('FilterSheetContainer', () => {
  afterEach(clearMemoryCache);

  it('a single place filter opens straight into its list, built from the recorded countries', async () => {
    // Moved from FilterSheet.test.tsx: the container now owns the cache blocks.
    const onLoaded = vi.fn();
    const { findAllByText, getAllByText } = render(
      <FilterSheetContainer inOptions={{ HasCountries: { Enable: true, Order: 1 } }} onLoaded={onLoaded} />,
    );
    await waitFor(() => {
      expect(onLoaded).toHaveBeenCalledWith(false);
    });
    expect((await findAllByText('Argentina')).length).toBeGreaterThan(0);
    expect(getAllByText('Country Filter').length).toBeGreaterThan(0);
  });

  it('renders the cache blocks of the enabled place filters and the BackNavigationHandler in the captured order', () => {
    const blocks = (inOptions: Parameters<typeof FilterSheetContainer>[0]['inOptions']) => {
      const { container, unmount } = render(<FilterSheetContainer id="$b28" inOptions={inOptions} />);
      const names = [...(container.firstElementChild?.children ?? [])].map((c) => c.getAttribute('data-block'));
      unmount();
      return names;
    };
    expect(blocks({ HasCountries: { Enable: true } })).toEqual([
      'ConnectPatterns.BottomSheet',
      'CacheControl.CacheControl_AllCountries',
      'App_Cache.CacheControl_UserInfo_Wrapper',
      'NavigationHandler.BackNavigationHandler',
    ]);
    expect(blocks({ HasCountries: { Enable: true }, HasLocalities: { Enable: true } })).toEqual([
      'ConnectPatterns.BottomSheet',
      'CacheControl.CacheControl_AllCountries',
      'CacheControl.CacheControl_AllLocalities',
      'App_Cache.CacheControl_UserInfo_Wrapper',
      'NavigationHandler.BackNavigationHandler',
    ]);
    expect(blocks({ HasSorting: { Enable: true } })).toEqual([
      'ConnectPatterns.BottomSheet',
      'NavigationHandler.BackNavigationHandler',
    ]);
  });
});
