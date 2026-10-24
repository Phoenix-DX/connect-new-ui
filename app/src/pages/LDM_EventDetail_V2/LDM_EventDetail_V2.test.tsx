import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { ldmEventById } from '@/mocks/fictional/ldm';
import { usePreloadObject } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import LDM_EventDetail_V2 from './LDM_EventDetail_V2Page';

/* The page with the flows of its block (useLdmEventDetail) and the MSW mocks of the route, in the app frame on a
   memory router. The meals are the fictional LDM meals of src/mocks/fictional/ldm.ts: 70415 (a guest, the host
   allocation pending, as captured), 70342 (a guest of the Castillos, published) and 70388 (the Vitales host). */
const PATH = '/UBTConnect/LDM_EventDetail_V2';
const HOME = '/UBTConnect/HomeFeed';
const GET_EVENT = 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId';
const GET_COORDINATOR = 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails';
/** The carousel screen shows the preload object that it receives. */
function CarouselProbe() {
  const preload = usePreloadObject();
  return <p id="carousel-preload">{JSON.stringify(preload)}</p>;
}
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/HouseholdCarousel': <CarouselProbe />,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  '/UBTConnect/ContactByEmailLDMCoordinator': <p>ContactByEmailLDMCoordinator screen</p>,
  [PATH]: <LDM_EventDetail_V2 />,
};
const query = (eventId: string, eventHostId: string) => `?EventHostId=${eventHostId}&EventId=${eventId}`;

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(search: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${search}`));
  await waitFor(() => {
    expect(document.querySelector('.list-updating-cont')).toBeNull();
  });
  return view;
}

const title = () => document.querySelector('.header-title')?.textContent;
const sectionTitles = () =>
  [...document.querySelectorAll('.event-detail-section-title')].map((element) => element.textContent);
const eventCalls = () => calledActions().filter((action) => action === GET_EVENT);
const coordinatorCalls = () => calledActions().filter((action) => action === GET_COORDINATOR);
const popupButton = (text: string) =>
  [...document.querySelectorAll('.popup-dialog button')].find((button) => button.textContent.trim() === text);
const DATE_TITLE = /^\d{1,2}(st|nd|rd|th) [A-Z][a-z]+ \d{4}$/;

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  setFlags({});
  sessionStorage.clear();
});

describe('LDM_EventDetail_V2 page', () => {
  it('shows a guest meal with the host allocation pending, the bottom bar and CommonUI', async () => {
    const { container } = await open(query('70415', '88231'));
    expect(container.querySelector('[data-block="LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2"]')?.id).toBe('$b1');
    expect(title()).toMatch(DATE_TITLE);
    expect(container.querySelector('.event-detail-banner-text')?.textContent).toContain('Guest');
    expect(container.querySelector('.event-detail-hostcard-content-info-name')?.textContent).toBe(
      'Host Allocation Pending',
    );
    expect(container.querySelector('.event-detail-hostcard-address')).toBeNull();
    expect(sectionTitles()).toEqual([]);
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('$b2');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b3');
    expect(coordinatorCalls()).toHaveLength(1);
    expect(eventCalls()).toHaveLength(1);
  });

  it('sends the inputs EventHostId and EventId to both data actions', async () => {
    const eventBodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_EVENT}`);
    const coordinatorBodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_COORDINATOR}`);
    await open(query('70342', '88154'));
    await waitFor(() => {
      expect(eventBodies[0]).toBeDefined();
      expect(coordinatorBodies[0]).toBeDefined();
    });
    expect(eventBodies[0]).toEqual({ EventHostId: '88154', EventId: '70342' });
    expect(coordinatorBodies[0]).toEqual({ EventHostId: '88154', EventId: '70342' });
  });

  it('shows the special needs and the guest households to the host, without the host card', async () => {
    const { container } = await open(query('70388', '88197'));
    expect(container.querySelector('.event-detail-banner-text')?.textContent).toContain('Host');
    expect(container.querySelector('.event-detail-hostcard')).toBeNull();
    expect(sectionTitles()).toEqual(['Special Needs', 'Guest Households']);
    expect(container.querySelectorAll('.event-detail-list-item')).toHaveLength(2);
    expect(container.textContent).toContain('Gluten free');
    expect(container.textContent).toContain('Wheelchair user');
  });

  it('shows "No event information." and "No Event Available" for an unknown meal', async () => {
    const { container } = await open(query('1', '2'));
    expect(title()).toBe('No Event Available');
    expect(container.textContent).toContain('No event information.');
  });

  it('shows the list-updating loader and an empty title while GetEventByEventId runs', async () => {
    sessionStorage.setItem('mock:mock', 'loading');
    const view = renderRoutes(routes, HOME);
    await act(() => view.router.navigate(`${PATH}${query('70342', '88154')}`));
    expect(document.querySelector('.list-updating-cont')).not.toBeNull();
    expect(title()).toBe('');
  });

  it('shows the error screen and the flow handler message when GetEventByEventId fails (IsFetching stays True)', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { container } = await open(query('70342', '88154'));
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(title()).toBe('');
    expect(container.textContent).toContain('No event information.');
  });

  it('emails the coordinator, and a back navigation shows the meal again without a call and the popup closed', async () => {
    const view = await open(query('70342', '88154'));
    fireEvent.click(document.querySelector('.event-detail-banner-text button') as Element);
    expect(document.querySelector('.popup-dialog')?.textContent).toContain('Gustavo Ríos');
    fireEvent.click(popupButton('Email') as Element);
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/ContactByEmailLDMCoordinator');
    });
    const params = new URLSearchParams(view.router.state.location.search);
    expect(params.get('In_ContactName')).toBe('Gustavo Ríos');
    expect(params.get('In_Subject')).toMatch(/ - \d{4}-\d{2}-\d{2}$/);

    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(`${PATH}${query('70342', '88154')}`);
    expect(title()).toMatch(DATE_TITLE);
    expect(document.querySelector('.popup-dialog')).toBeNull();
    expect(eventCalls()).toHaveLength(1);
    expect(coordinatorCalls()).toHaveLength(1);
  });

  it('fetches again after a back navigation to a view that was left while loading', async () => {
    sessionStorage.setItem('mock:mock', 'loading');
    const view = renderRoutes(routes, HOME);
    await act(() => view.router.navigate(`${PATH}${query('70342', '88154')}`));
    await act(() => view.router.navigate(HOME));
    sessionStorage.removeItem('mock:mock');
    await act(() => view.router.navigate(-1));
    await waitFor(() => {
      expect(title()).toMatch(DATE_TITLE);
    });
    expect(eventCalls()).toHaveLength(2);
  });

  it('opens the household carousel from a guest household, with every guest preloaded', async () => {
    const view = await open(query('70342', '88154'));
    const guests = (ldmEventById('70342')?.guests ?? []).map((guest) => guest.household.id);
    fireEvent.click(document.querySelectorAll('.event-detail-list-item-main')[1] as Element);
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/HouseholdCarousel');
    });
    expect(new URLSearchParams(view.router.state.location.search).get('In_StartingHouseholdId')).toBe(guests[1]);
    expect(JSON.parse(document.getElementById('carousel-preload')?.textContent ?? 'null')).toEqual({
      CarouselHouseholdItem: guests.map((id) => ({ Household: id })),
    });
  });

  it('opens HouseholdDetails from a guest household when C2EnableCarousel is off', async () => {
    setFlags({ C2EnableCarousel: false });
    const view = await open(query('70342', '88154'));
    fireEvent.click(document.querySelectorAll('.event-detail-list-item-main')[0] as Element);
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/HouseholdDetails');
    });
  });
});
