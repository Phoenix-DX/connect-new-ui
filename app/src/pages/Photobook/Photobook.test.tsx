import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LOCALITY_HOUSEHOLDS, VITALE, householdName } from '@/mocks/fictional/directory';
import { resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { usePreloadObject } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { stubCarouselLayout } from '@/components/ui/Carousel/testLayout';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import Photobook from './PhotobookPage';

/* The page with its flows (usePhotobook, useHouseholdCaption) and the MSW mocks of the route, in the app frame on a
   memory router: the 23 fictional households of the locality "Bahia Blanca", the Vitale household (42438) first. */
const PATH = '/UBTConnect/Photobook';
const HOME = '/UBTConnect/HomeFeed';
const GET_HOUSEHOLDS = 'Photobook/DataActionGetLocalityHouseholdIds';
const GET_CAPTION = 'Photobook_Options_Left/DataActionGetHouseholdCaption';
/** The third household of the list. */
const THIRD = LOCALITY_HOUSEHOLDS[2]?.id ?? '';

/** HouseholdCarousel shows the preload object that it reads at mount. */
function CarouselProbe() {
  return <p data-testid="preload">{JSON.stringify(usePreloadObject())}</p>;
}
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/HouseholdCarousel': <CarouselProbe />,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  '/UBTConnect/Search': <p>Search screen</p>,
  [PATH]: <Photobook />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(query: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const counter = () => document.getElementById('b4-b6-b2-Photobook_Options_Bottom')?.textContent;
const slideTitle = (row: number) => document.getElementById(`b4-l1-37_${String(row)}-b2-Title_FamilyName`)?.textContent;
const slides = () => document.querySelectorAll('[data-block="Directory_Photobook.Photobook_Item"]').length;
const loading = () => document.getElementById('$b5');
/** Clicks a CustomContainer: its block element holds the clickable container. */
const clickContainer = (id: string) => {
  const container = document.getElementById(id)?.firstElementChild;
  if (!container) throw new Error(`No container ${id}`);
  fireEvent.click(container);
};
const fetchCalls = () => calledActions().filter((a) => a === GET_HOUSEHOLDS).length;
const wait = (ms: number) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));

/* jsdom has no layout, no matchMedia (Splide needs them: stubCarouselLayout emulates the phone viewport) and no
   Element.scroll (the thumbnail strip scrolls the selected thumbnail into position). */
const scroll = vi.fn();

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  stubCarouselLayout(390);
  Element.prototype.scroll = scroll;
});
afterEach(() => {
  setFlags({});
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  Reflect.deleteProperty(Element.prototype, 'scroll');
});

describe('Photobook page', () => {
  it('shows the loading container, then the carousel of the 23 households at the household of the route', async () => {
    const bodies = recordBodies(`UBTConnect/${GET_HOUSEHOLDS}`);
    await open('?In_HouseholdId=42438&In_LocalityId=252');
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
    expect(slides()).toBe(23);
    expect(slideTitle(0)).toBe(householdName(VITALE));
    expect(loading()).toBeNull();
    expect(fetchCalls()).toBe(1);
    expect(bodies).toEqual([
      {
        IsLoading: true,
        SelectedHousehold: { Id: '42438', Position: 0 },
        In_HouseholdId: '42438',
        In_LocalityId: '252',
      },
    ]);
  });

  it('selects the position of In_HouseholdId', async () => {
    await open(`?In_HouseholdId=${THIRD}&In_LocalityId=252`);
    await waitFor(() => {
      expect(counter()).toBe('3/23');
    });
  });

  it('shows the first household for a household out of the list', async () => {
    await open('?In_HouseholdId=123&In_LocalityId=252');
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
  });

  it('keeps the loading container when the call fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open('?In_HouseholdId=42438&In_LocalityId=252');
    await waitFor(() => {
      expect(fetchCalls()).toBe(1);
    });
    expect(loading()).not.toBeNull();
    expect(slides()).toBe(0);
  });

  it('closes to HouseholdCarousel with every household preloaded (C2EnableCarousel on)', async () => {
    const { at } = await open('?In_HouseholdId=42438&In_LocalityId=252');
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
    clickContainer('b4-b4-Photobook_Options_Top_Close');
    const preload = await screen.findByTestId('preload');
    expect(at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=42438');
    expect(JSON.parse(preload.textContent)).toEqual({
      CarouselHouseholdItem: LOCALITY_HOUSEHOLDS.map((h) => ({ Household: h.id })),
    });
  });

  it('closes to HouseholdDetails when C2EnableCarousel is off', async () => {
    setFlags({ C2EnableCarousel: false });
    const { at } = await open('?In_HouseholdId=42438&In_LocalityId=252');
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
    clickContainer('b4-b4-Photobook_Options_Top_Close');
    expect(await screen.findByText('HouseholdDetails screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=42438');
  });

  it('fetches the caption of the current household when the info button is clicked', async () => {
    await open('?In_HouseholdId=42438&In_LocalityId=252');
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
    clickContainer('b4-b3-Photobook_Options_Top_Left');
    await waitFor(() => {
      expect(calledActions()).toContain(GET_CAPTION);
    });
    await waitFor(() => {
      expect(document.getElementById('b4-b3-BottomSheet_Info')?.textContent).toContain(
        `${VITALE.surname.toUpperCase()} (`,
      );
    });
  });

  it('a restored view shows its saved households at once and does not call again', async () => {
    const { router } = await open(`?In_HouseholdId=${THIRD}&In_LocalityId=252`);
    await waitFor(() => {
      expect(counter()).toBe('3/23');
    });
    await act(() => router.navigate('/UBTConnect/Search'));
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    await wait(400);
    await act(() => router.navigate(-1));
    expect(counter()).toBe('3/23');
    expect(slides()).toBe(23);
    expect(loading()).toBeNull();
    await wait(50);
    expect(fetchCalls()).toBe(1);
  });

  it('a view left before the answer calls again on its return, with its saved variables', async () => {
    sessionStorage.setItem('mock:latency', '150');
    const bodies = recordBodies(`UBTConnect/${GET_HOUSEHOLDS}`);
    const { router } = await open('?In_HouseholdId=42438&In_LocalityId=252');
    await act(() => router.navigate('/UBTConnect/Search'));
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    await wait(400);
    sessionStorage.setItem('mock:latency', '0');
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(counter()).toBe('1/23');
    });
    expect(fetchCalls()).toBe(2);
    const body = {
      IsLoading: true,
      SelectedHousehold: { Id: '42438', Position: 0 },
      In_HouseholdId: '42438',
      In_LocalityId: '252',
    };
    expect(bodies).toEqual([body, body]);
  });
});
