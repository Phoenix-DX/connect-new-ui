import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { AdminEventItem } from '@/api/event';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
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
  },
  {
    event: { EventId: '7302', Type: 'Admin', Title: 'Youth Day', EventInfo: { EventLocation: 'Azul Hall' } },
    typeFriendly: 'Youth Day',
  },
];

function renderView(props: Partial<AdminLandingViewProps> = {}) {
  const onEventCardClicked = vi.fn();
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
          {...props}
        />
      ),
    },
    PATH,
  );
  return { onEventCardClicked };
}

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

  it('puts the bottom bar in its placeholder, with the empty Menu and CommonUI_Elements', () => {
    renderView({ bottomBar: <nav id="bottom-bar-stand-in" /> });
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('bottom-bar-stand-in');
    expect(document.getElementById('b1-Menu')?.children).toHaveLength(0);
    expect(document.getElementById('b1-CommonUI_Elements')?.children).toHaveLength(0);
    expect(document.getElementById('b1-$b2')?.getAttribute('data-block')).toBeTruthy();
  });
});
