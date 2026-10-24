import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ServicesPage } from '@/api/service';
import { stubCarouselLayout } from '@/components/ui/Carousel/testLayout';
import { EMPTY_POPUP_INFO, INITIAL_PAGES } from '@/pages/HomeFeed/hooks/feedServicesState';
import { FeedBlock_Services, type FeedBlock_ServicesProps } from './FeedBlock_Services';

/* The view of FeedBlock_Services from props: the skeleton page, the fetched pages with their runtime list keys, the
   settings button and the callbacks. The carousel has the captured HomeFeed width (342 px). */
beforeEach(() => {
  stubCarouselLayout(342);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

const PAGES: ServicesPage[] = [
  {
    pageNumber: 1,
    serviceItems: [
      { id: 'Orbit', iconId: 'connect-icon-orbit_text', name: 'Orbit', order: 1 },
      { id: 'HR100', iconId: 'SVG_HR100', name: 'HR100', order: 2 },
    ],
  },
  { pageNumber: 2, serviceItems: [{ id: 'MyNotes', iconId: 'connect-icon-tooltip', name: 'My Notes', order: 3 }] },
];

function renderBlock(props: Partial<FeedBlock_ServicesProps> = {}) {
  const callbacks = {
    onPopUpReady: vi.fn(),
    onClickServiceSettings: vi.fn(),
    onClickService: vi.fn(),
    onGoToExternalApp: vi.fn(),
  };
  const view = render(
    <FeedBlock_Services
      id="$b5"
      hasCustomEvents
      pages={PAGES}
      hasData
      isLoading={false}
      externalAppPopUpInfo={EMPTY_POPUP_INFO}
      {...callbacks}
      {...props}
    />,
  );
  return { ...view, ...callbacks };
}
const byId = (id: string) => document.getElementById(id);

describe('FeedBlock_Services', () => {
  it('shows the skeleton page with the list keys of the loading capture', () => {
    const { container } = renderBlock({ pages: INITIAL_PAGES, hasData: false, isLoading: true });
    expect(byId('b5-l2-52_0-l2-53_0-$b9')).not.toBeNull();
    expect(byId('b5-l2-52_0-l2-53_4-$b9')).not.toBeNull();
    expect(container.querySelectorAll('.ubt-skeleton-section')).toHaveLength(5);
  });

  it('shows the fetched pages with their list keys and the service names', () => {
    const { container } = renderBlock();
    expect(byId('b5-l2-53_1-l2-100_0-$b10')?.textContent).toBe('Orbit');
    expect(byId('b5-l2-53_1-l2-100_1-$b10')?.textContent).toBe('HR100');
    expect(byId('b5-l2-53_2-l2-100_0-$b10')?.textContent).toBe('My Notes');
    expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    expect(byId('b5-DIV_Services')?.firstElementChild?.className).toContain('ubt-services-carousel');
  });

  it('the settings button shows only with GetHasCustomEvents and raises OnClick_ServiceSettings', () => {
    const on = renderBlock();
    fireEvent.click(byId('b5-$b4')?.querySelector('[data-container]') as Element);
    expect(on.onClickServiceSettings).toHaveBeenCalledOnce();
    on.unmount();
    renderBlock({ hasCustomEvents: false });
    expect(byId('b5-$b4')).toBeNull();
  });

  it('a service raises OnClick_Service with its item', () => {
    const { onClickService } = renderBlock();
    fireEvent.click(byId('b5-l2-53_1-l2-100_1-$b10')?.firstElementChild as Element);
    expect(onClickService).toHaveBeenCalledExactlyOnceWith(PAGES[0]?.serviceItems[1]);
  });

  it('holds Dialog_GoExternalApp, which raises OnPopUpReady with the id of its popup', () => {
    const { onPopUpReady } = renderBlock();
    expect(byId('b5-$b12')).not.toBeNull();
    expect(onPopUpReady).toHaveBeenCalledWith('b5-b12-PopUp');
  });
});
