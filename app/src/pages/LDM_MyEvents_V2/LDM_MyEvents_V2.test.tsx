import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { delay, http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { usePreloadObject } from '@/platform/navigation/preload';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import LDM_MyEvents_V2 from './LDM_MyEvents_V2Page';

/* The page with the flows of the block and the MSW mocks of the route (the five past LDM meals of the fictional
   household 42438, src/mocks/fictional/ldm.ts), in the app frame on a memory router. */
const PATH = '/UBTConnect/LDM_MyEvents_V2';
const HOME = '/UBTConnect/HomeFeed';
const GET_TIMELINE = 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline';
const GET_LOCALITIES = 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter';
const stub = (name: string) => <p>{name} screen</p>;
/** HouseholdCarousel shows the preload object that it gets. */
function CarouselStub() {
  return <p data-testid="preload">{JSON.stringify(usePreloadObject())}</p>;
}
const routes = {
  [HOME]: stub('HomeFeed'),
  '/UBTConnect/LDM_EventDetail_V2': stub('LDM_EventDetail_V2'),
  '/UBTConnect/HouseholdDetails': stub('HouseholdDetails'),
  '/UBTConnect/HouseholdCarousel': <CarouselStub />,
  '/UBTConnect/MyEntertaining': stub('MyEntertaining'),
  '/UBTConnect/ContactByEmailMember': stub('ContactByEmailMember'),
  [PATH]: <LDM_MyEvents_V2 />,
};
const cards = () => document.querySelectorAll('[data-block="LDM_Blocks_V2.EventCard_V2"]');
const guestToggles = () =>
  document.querySelectorAll<HTMLElement>('[data-block="LDM_Blocks.EventCard_Guests"] .flex-center-all');
const guestRowArrows = () =>
  document.querySelectorAll<HTMLElement>('[data-block="LDM_Blocks.EventCard_Guests"] .fa-angle-right');
const timelineCalls = () => calledActions().filter((a) => a === GET_TIMELINE);
const query = (at: string) => Object.fromEntries(new URL(at, 'http://localhost').searchParams);
const click = (element: Element | undefined | null) => {
  if (!element) throw new Error('no element to click');
  fireEvent.click(element);
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen, and waits for the five cards. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(PATH));
  await waitFor(() => {
    expect(cards()).toHaveLength(5);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  setFlags({});
});

describe('LDM_MyEvents_V2 page', () => {
  it('shows the five past meals by month, after one call of each data action', async () => {
    const timeline = recordBodies(`Connect2_OrbitMobile_MUI/${GET_TIMELINE}`);
    await open();
    expect(screen.getByText('My Timeline')).toBeInTheDocument();
    expect(screen.getByText('Past Events')).toBeInTheDocument();
    expect(screen.queryByText(/^Upcoming/)).toBeNull();
    expect(document.querySelectorAll('.past-event-cont')).toHaveLength(5);
    expect(screen.getByText('18 Guests')).toBeInTheDocument();
    // The filter icon is active after the load; the loader is gone.
    expect(document.querySelector('.fa-filter')?.classList.contains('text-neutral-6')).toBe(false);
    expect(document.querySelector('.list-updating')).toBeNull();
    await waitFor(() => {
      expect(calledActions().filter((a) => a === GET_LOCALITIES)).toHaveLength(1);
    });
    expect(timelineCalls()).toHaveLength(1);
    expect(timeline).toEqual([
      expect.objectContaining({ CurrentEventView: 1, DefaultDateRangeInMonths: 24, IsFetchingMyTimeline: true }),
    ]);
  });

  it('shows the loader and a greyed filter icon while the timeline loads', async () => {
    server.use(
      http.post(`/api/Connect2_OrbitMobile_MUI/${GET_TIMELINE}`, async () => {
        await delay('infinite');
        return HttpResponse.json({});
      }),
    );
    const view = renderRoutes(routes, HOME);
    await act(() => view.router.navigate(PATH));
    await waitFor(() => {
      expect(document.querySelector('.list-updating')).not.toBeNull();
    });
    expect(document.querySelector('.fa-filter')?.classList.contains('text-neutral-6')).toBe(true);
    expect(cards()).toHaveLength(0);
  });

  it('a card opens LDM_EventDetail_V2 with its EventId and EventHostId', async () => {
    const view = await open();
    click(document.querySelectorAll('.event-card-info-cont')[2]);
    await screen.findByText('LDM_EventDetail_V2 screen');
    expect(view.at()).toBe('/UBTConnect/LDM_EventDetail_V2?EventId=70342&EventHostId=88154');
  });

  it('a guest household opens the carousel with every guest of the meal', async () => {
    setFlags({ C2EnableCarousel: true });
    const view = await open();
    click(guestToggles()[2]);
    expect(guestRowArrows()).toHaveLength(5);
    click(guestRowArrows()[1]);
    await screen.findByTestId('preload');
    expect(view.at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=91004');
    const preload = JSON.parse(screen.getByTestId('preload').textContent) as {
      CarouselHouseholdItem: { Household: string }[];
    };
    expect(preload.CarouselHouseholdItem).toHaveLength(5);
    expect(preload.CarouselHouseholdItem[1]).toEqual({ Household: '91004' });
  });

  it('without the carousel, a guest household opens HouseholdDetails', async () => {
    setFlags({ C2EnableCarousel: false });
    const view = await open();
    click(guestToggles()[3]);
    click(guestRowArrows()[0]);
    await screen.findByText('HouseholdDetails screen');
    expect(view.at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=42438');
  });

  it('the email of a guest opens the message popup, and its Email option opens ContactByEmailMember', async () => {
    const view = await open();
    click(guestToggles()[1]);
    click(document.querySelector('[data-block="Reusable.Person_Contact_Options"] .fa-envelope'));
    const email = [...document.querySelectorAll('span, div, a, button')].filter((e) => e.textContent === 'Email');
    click(email.pop());
    await screen.findByText('ContactByEmailMember screen');
    expect(query(view.at())).toMatchObject({
      In_ContactCountry: 'Argentina',
      In_IsHousehold: 'True',
      In_HouseholdHeaderName: 'Pérez',
      In_ContactSurname: 'Pérez',
      In_ContactLocality: 'Bahia Blanca',
      In_EmailTo: 'jorge.perez@example.com',
    });
  });

  it('the My calendar flag opens MyEntertaining with the LDM event source', async () => {
    const view = await open();
    click(document.querySelector('.menu-icon-my-calendar'));
    await screen.findByText('MyEntertaining screen');
    expect(view.at()).toBe('/UBTConnect/MyEntertaining?MyCalendarEventSourceId=event-ldm');
  });

  it('a failed fetch shows the network warning; Try again loads the meals', async () => {
    server.use(
      http.post(
        `/api/Connect2_OrbitMobile_MUI/${GET_TIMELINE}`,
        () => HttpResponse.json({ error: 'mock error' }, { status: 500 }),
        { once: true },
      ),
    );
    const view = renderRoutes(routes, HOME);
    await act(() => view.router.navigate(PATH));
    await screen.findByText('Try again');
    expect(document.querySelector('.list-updating')).toBeNull();
    fireEvent.click(screen.getByText('Try again'));
    await waitFor(() => {
      expect(cards()).toHaveLength(5);
    });
    expect(timelineCalls()).toHaveLength(2);
  });

  it('a back navigation shows the meals again without a new timeline call, with the phone popup closed', async () => {
    const view = await open();
    click(guestToggles()[1]);
    click(document.querySelector('[data-block="Reusable.Person_Contact_Options"] .fa-phone'));
    await screen.findByText('Mobile');
    click(document.querySelectorAll('.event-card-info-cont')[0]);
    await screen.findByText('LDM_EventDetail_V2 screen');
    await act(() => view.router.navigate(-1));
    await waitFor(() => {
      expect(cards()).toHaveLength(5);
    });
    expect(timelineCalls()).toHaveLength(1);
    expect(screen.queryByText('Mobile')).toBeNull();
  });
});
