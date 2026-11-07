import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { AdminEventItem } from '@/api/event';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { OrbitLandingFilter } from '@/pages/OrbitAdminLanding/staticEntities';
import { AdminLandingView, type AdminLandingViewProps } from './AdminLandingView';

/* The view from props, on a memory router (MenuIcon needs one). The admin and the events are fictional. */
const PATH = '/UBTConnect/OrbitAdminLanding';
const NO_EVENT =
  'There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk.';

const EVENTS: AdminEventItem[] = [
  {
    event: {
      EventId: '7301',
      Type: 'Admin',
      Title: 'Weekend Bible Conferences',
      OrbitEventType: { MainColorVar: 'purple', MainIcon: 'orbit-icon-meeting' },
      EventInfo: {
        StartEventDate: '2026-11-07T09:00:00Z',
        EndEventDate: '2026-11-08T17:00:00Z',
        EventLocation: 'Bahia Blanca Main Hall',
      },
    },
    typeFriendly: 'Weekend Conference Program',
    dateTime: '2026-11-07T09:00:00Z',
  },
  {
    event: { EventId: '7302', Type: 'Admin', Title: 'Youth Day', EventInfo: { EventLocation: 'Azul Hall' } },
    typeFriendly: 'Youth Day',
    dateTime: '2026-11-28T13:00:00Z',
  },
];

function renderView(props: Partial<AdminLandingViewProps> = {}) {
  const onEventCardClicked = vi.fn();
  const onToggleFilterPopup = vi.fn();
  const onToggleSortPopup = vi.fn();
  renderRoutes(
    {
      [PATH]: (
        <AdminLandingView
          id="$b1"
          userFirstName="Matías"
          isFetchingData={false}
          isDataFetched
          eventsSummary={EVENTS}
          onEventCardClicked={onEventCardClicked}
          eventFilter={OrbitLandingFilter.UpcomingEvents}
          popupFiltersOpened={false}
          popupSortByOpened={false}
          onToggleFilterPopup={onToggleFilterPopup}
          onToggleSortPopup={onToggleSortPopup}
          {...props}
        />
      ),
    },
    PATH,
  );
  return { onEventCardClicked, onToggleFilterPopup, onToggleSortPopup };
}

const filters = () => [...document.querySelectorAll('.orbit-landing-filters-cont > .orbit-landing-filters')];
const caretOf = (filter: Element | undefined) => filter?.querySelector('i')?.className;

const block = (name: string) => document.querySelectorAll(`[data-block="${name}"]`);
const cards = () => [...block('Orbit_Blocks.Card_Event')];

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('AdminLandingView', () => {
  it('shows the admin first name and the card of each event', () => {
    renderView();
    const view = document.getElementById('$b1');
    expect(view?.getAttribute('data-block')).toBe('Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding');
    expect(document.querySelector('.orbit-admin-header-text')?.textContent).toBe('Matías');
    expect(cards().map((card) => card.id)).toEqual(['b1-l1-7_0-$b3', 'b1-l1-7_1-$b3']);
    expect(screen.getByText('Weekend Bible Conferences')).toBeInTheDocument();
    expect(screen.getByText('Azul Hall')).toBeInTheDocument();
    expect(document.querySelector('.list.list-group.orbit-card-list')).not.toBeNull();
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toHaveLength(0);
    expect(screen.queryByText(NO_EVENT)).toBeNull();
  });

  it('a card click gives the event and the TypeFriendly of its row', () => {
    const { onEventCardClicked } = renderView();
    const second = cards()[1]?.querySelector('.orbit-card-cont');
    if (!second) throw new Error('no card');
    fireEvent.click(second);
    expect(onEventCardClicked).toHaveBeenCalledTimes(1);
    expect(onEventCardClicked).toHaveBeenCalledWith(EVENTS[1]?.event, 'Youth Day');
  });

  it('shows the OrbitLanding skeleton while fetching', () => {
    renderView({ isFetchingData: true, isDataFetched: false, eventsSummary: [] });
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')[0]?.id).toBe('b1-$b5');
    expect(cards()).toHaveLength(0);
  });

  it('shows the skeleton, not the list, while a refresh runs after a fetch', () => {
    renderView({ isFetchingData: true, isDataFetched: true });
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toHaveLength(1);
    expect(cards()).toHaveLength(0);
  });

  it('shows NoInformation_Orbit when the admin has no event', () => {
    renderView({ eventsSummary: [] });
    expect(block('Orbit_Generic_Blocks.NoInformation_Orbit')[0]?.id).toBe('b1-$b4');
    expect(screen.getByText(NO_EVENT)).toBeInTheDocument();
  });

  it('shows no content before the first fetch', () => {
    renderView({ isDataFetched: false, eventsSummary: [] });
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toHaveLength(0);
    expect(block('Orbit_Generic_Blocks.NoInformation_Orbit')).toHaveLength(0);
    expect(cards()).toHaveLength(0);
  });

  it('shows the filter and sort headers after the first name, closed: Upcoming Events, Sort By, carets down', () => {
    renderView();
    // b1-b1-HeaderContent: the placeholder div inside BaseLayout's header content
    const headerContent = document.querySelector('.header-top-content > div');
    expect([...(headerContent?.children ?? [])].map((child) => child.className)).toEqual([
      'orbit-admin-header-cont',
      'orbit-landing-filters-cont',
    ]);
    const [filter, sort] = filters();
    expect(filter?.className).toBe('orbit-landing-filters justify-content-flex-start');
    expect(filter?.textContent).toBe('Upcoming Events');
    expect(filter?.querySelector('span')?.hasAttribute('data-expression')).toBe(true);
    expect(caretOf(filter)).toBe('icon fa fa-caret-down fa-1x');
    expect(sort?.className).toBe('orbit-landing-filters justify-content-flex-end');
    expect(sort?.textContent).toBe('Sort By');
    expect(sort?.querySelector('span')?.hasAttribute('data-expression')).toBe(false);
    expect(caretOf(sort)).toBe('icon fa fa-caret-down fa-1x');
  });

  it('the filter label is Past Events for PastEvents and Upcoming Events for the null identifier', () => {
    renderView({ eventFilter: OrbitLandingFilter.PastEvents });
    expect(filters()[0]?.textContent).toBe('Past Events');
  });

  it('an open popup turns its caret up', () => {
    renderView({ popupFiltersOpened: true, popupSortByOpened: true });
    const [filter, sort] = filters();
    expect(caretOf(filter)).toBe('icon fa fa-caret-up fa-1x');
    expect(caretOf(sort)).toBe('icon fa fa-caret-up fa-1x');
  });

  it('the header clicks toggle the filter and the sort popups', () => {
    const { onToggleFilterPopup, onToggleSortPopup } = renderView();
    const [filter, sort] = filters();
    if (!filter || !sort) throw new Error('no filter header');
    fireEvent.click(filter);
    expect(onToggleFilterPopup).toHaveBeenCalledTimes(1);
    expect(onToggleSortPopup).not.toHaveBeenCalled();
    fireEvent.click(sort);
    expect(onToggleSortPopup).toHaveBeenCalledTimes(1);
  });

  it('puts the empty popup roots after the content (closed popups render nothing)', () => {
    renderView({ eventsSummary: [] });
    // b1-b1-Content: the placeholder div inside BaseLayout's content-middle
    const content = document.querySelector('.content-middle > div');
    expect([...(content?.children ?? [])].map((child) => child.id)).toEqual([
      'b1-$b4',
      'b1-RootPlaceholder_Filters',
      'b1-RootPlaceholder_Sort',
    ]);
    for (const name of ['Filters', 'Sort']) {
      const root = document.getElementById(`b1-Root_${name}`);
      expect(root?.className).toBe('backwards-compatibility orbit-landing-filters__popup-backdrop');
      expect(root?.parentElement?.id).toBe(`b1-RootPlaceholder_${name}`);
      expect(root?.children).toHaveLength(0);
    }
  });

  it('the popup roots stay after the skeleton while fetching', () => {
    renderView({ isFetchingData: true, isDataFetched: false, eventsSummary: [] });
    // b1-b1-Content: the placeholder div inside BaseLayout's content-middle
    const content = document.querySelector('.content-middle > div');
    expect([...(content?.children ?? [])].map((child) => child.id)).toEqual([
      'b1-$b5',
      'b1-RootPlaceholder_Filters',
      'b1-RootPlaceholder_Sort',
    ]);
  });

  it('puts the bottom bar in its placeholder, with the empty Menu and CommonUI_Elements', () => {
    renderView({ bottomBar: <nav id="bottom-bar-stand-in" /> });
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('bottom-bar-stand-in');
    expect(document.getElementById('b1-Menu')?.children).toHaveLength(0);
    expect(document.getElementById('b1-CommonUI_Elements')?.children).toHaveLength(0);
    expect(document.getElementById('b1-$b2')?.getAttribute('data-block')).toBeTruthy();
  });
});
