import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { orbitEventBooklets } from '@/mocks/fictional/orbit';
import { useOsNavigate } from '@/platform/navigation';
import { createBackEvent, runBackHandlers } from '@/platform/navigation/backQueue';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { BOOKLET_MAX_ROWS } from '@/shared/Connect2_OrbitMobile_MUI/lib/mocks';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import EventBooklet from './EventBookletPage';

/* The page with its flows (useEventBooklet) in the app frame on a memory router, with the MSW mocks of the test
   setup: the fictional booklet of event 7301 (src/mocks/fictional/orbit.ts) and the fictional page sizes (10 guests,
   5 helpers). */
const PATH = '/UBTConnect/EventBooklet';
/** The data actions as the call log names them (Owner/Action); the request path adds the module. */
const FILTERS = 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters';
const GUESTS = 'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests';
const HELPERS = 'ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers';
const GUESTS_PATH = `Connect2_OrbitMobile_MUI/${GUESTS}`;
const booklet = orbitEventBooklets()[0];

function Stub({ name }: { name: string }) {
  const navigate = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(-1 as never);
      }}
    >
      back from {name}
    </button>
  );
}

const routes = {
  [PATH]: <EventBooklet />,
  '/UBTConnect/HouseholdDetails': <Stub name="HouseholdDetails" />,
};

const title = () => [...document.querySelectorAll('.header-title [data-container]')].map((e) => e.textContent);
const rows = () => [...document.querySelectorAll('.orbit-booklet-list-members-title')];
const skeleton = () => document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const button = (label: string) =>
  [...document.querySelectorAll('.orbit-double-button-btn')].find((e) => e.textContent === label) as Element;
const count = (action: string) => calledActions().filter((c) => c === action).length;
const loaded = async () => {
  await waitFor(() => {
    expect(rows().length).toBeGreaterThan(0);
  });
};
/** A hardware back on the booklet: true when a handler prevented the navigation. */
const back = (): boolean => {
  const location: Location = { pathname: PATH, search: '?In_EventId=7301', hash: '', state: null, key: 'k' };
  let prevented = false;
  act(() => {
    prevented = runBackHandlers(createBackEvent(location, false, () => undefined));
  });
  return prevented;
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('EventBooklet page', () => {
  it('OnReady: the page sizes, the filters and the first page of guests; the event name as the title', async () => {
    const bodies = recordBodies(GUESTS_PATH);
    renderRoutes(routes, `${PATH}?In_EventId=7301&In_EventName=Gathering`);
    expect(title()).toEqual(['Event Guest List', 'Gathering']);
    await loaded();
    expect(title()).toEqual(['Event Guest List', booklet?.EventName]);
    expect(rows()).toHaveLength(BOOKLET_MAX_ROWS.guests);
    expect(calledActions().slice(0, 4)).toEqual([
      'ActionGetBookletGuestsMaxRows',
      'ActionGetBookletHelpersMaxRows',
      FILTERS,
      GUESTS,
    ]);
    await waitFor(() => {
      expect(bodies[0]).toMatchObject({
        In_EventId: '7301',
        PaginationSettings: { Guest_MaxRows: BOOKLET_MAX_ROWS.guests, Guest_PageNumber: 1 },
      });
    });
    expect(skeleton()).toBeNull();
  });

  it('the Helpers button shows the helpers by role', async () => {
    renderRoutes(routes, `${PATH}?In_EventId=7301`);
    await loaded();
    fireEvent.click(button('Helpers'));
    await waitFor(() => {
      expect(count(HELPERS)).toBe(1);
    });
    await waitFor(() => {
      expect(rows()).toHaveLength(BOOKLET_MAX_ROWS.helpers);
    });
    expect(document.querySelector('.orbit-double-button-btn-active')?.textContent).toBe('Helpers');
  });

  it('a member opens HouseholdDetails; back restores the booklet without new calls', async () => {
    const { at } = renderRoutes(routes, `${PATH}?In_EventId=7301`);
    await loaded();
    const first = booklet?.guests.find((g) => !g.IsHostLocality);
    const shown = rows().length;
    fireEvent.click(rows()[0] as Element);
    await waitFor(() => {
      expect(at()).toBe(`/UBTConnect/HouseholdDetails?HouseholdId=${first?.HouseholderId ?? ''}`);
    });
    const calls = calledActions().length;
    // The booklet leaves the document after the screen transition (a timer). Wait for it: in a slow run the first
    // button was still one of the booklet and the back click did not reach the stub.
    const backButton = await screen.findByText('back from HouseholdDetails');
    await waitFor(() => {
      expect(rows()).toHaveLength(0);
    });
    fireEvent.click(backButton);
    await loaded();
    expect(at()).toBe(`${PATH}?In_EventId=7301`);
    expect(rows()).toHaveLength(shown);
    expect(calledActions()).toHaveLength(calls);
  });

  it('the search mode: Enter searches the guests; the back navigation leaves the search mode first', async () => {
    const bodies = recordBodies(GUESTS_PATH);
    const { at } = renderRoutes(routes, `${PATH}?In_EventId=7301`);
    await loaded();
    fireEvent.click(document.querySelector('.flex-center-all .orbit-icon-search') as Element);
    const input = document.getElementById('b1-Input_SearchTerm') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'zzz' } });
    fireEvent.keyUp(input, { key: 'Enter' });
    await waitFor(() => {
      expect(document.querySelector('.no-results-title')?.textContent).toBe("No results for 'zzz'.");
    });
    expect(bodies.at(-1)).toMatchObject({ SelectedFilters: { SearchTerm: 'zzz' } });
    expect(back()).toBe(true);
    expect(document.getElementById('b1-Input_SearchTerm')).toBeNull();
    expect(at()).toBe(`${PATH}?In_EventId=7301`);
  });

  it('an unknown event: no guests allocated', async () => {
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(document.querySelector('.no-results-message')?.textContent).toMatch(
        /^There are no guests allocated to this event\./,
      );
    });
    expect(title()).toEqual(['Event Guest List', '']);
  });
});
