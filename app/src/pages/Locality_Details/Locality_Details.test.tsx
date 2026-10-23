import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { usePreloadObject } from '@/platform/navigation/preload';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import Locality_Details from './Locality_DetailsPage';

/* The page with the flows of the screen and of its tag blocks, and the MSW mocks of the route (the fictional
   households of locality 252, its supper meetings, interchange and schools), in the app frame on a memory router. */
const PATH = '/UBTConnect/Locality_Details';
const QUERY = '?LocalityId=252&PreloadedLocalityLabel=Bahia%20Blanca%2C%20Argentina';
const HOME = '/UBTConnect/HomeFeed';
const stub = (name: string) => <p>{name} screen</p>;
/** HouseholdCarousel shows the preload object that it gets. */
function CarouselStub() {
  return <p data-testid="preload">{JSON.stringify(usePreloadObject())}</p>;
}
const routes = {
  [HOME]: stub('HomeFeed'),
  '/UBTConnect/HouseholdDetails': stub('HouseholdDetails'),
  '/UBTConnect/HouseholdCarousel': <CarouselStub />,
  '/UBTConnect/SupperMeeting_Carousel': stub('SupperMeeting_Carousel'),
  '/UBTConnect/SupperMeeting_Details': stub('SupperMeeting_Details'),
  '/UBTConnect/OneSchoolGlobalDetails': stub('OneSchoolGlobalDetails'),
  [PATH]: <Locality_Details />,
};
const GET_DETAILS = 'Locality_Details/DataActionGet_LocalityDetails';
const GET_HOUSEHOLDS = 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds';
const GET_MEMBERS = 'Household_Card/DataActionGetMembers';

/** Opens the page after HomeFeed, so a back navigation has a previous screen, and waits for the household cards. */
async function open(query = QUERY) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  await waitFor(() => {
    expect(calledActions().filter((a) => a === GET_MEMBERS)).toHaveLength(23);
  });
  return view;
}
const blocks = (name: string) => document.querySelectorAll(`[data-block="${name}"]`);
const cards = (block: string) => document.querySelectorAll(`[data-block="${block}"] .ubt-image-card`);
const clickTag = (text: string) => {
  fireEvent.click(screen.getByText(text));
};

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

describe('Locality_Details page', () => {
  it('shows the locality, its time zone, the tags and the 23 household cards', async () => {
    const details = recordBodies(`UBTConnect/${GET_DETAILS}`);
    await open();
    expect(document.getElementById('$b7')?.textContent).toBe('Bahia Blanca, Argentina');
    expect(blocks('Directory_Locality.Locality_DateTimeLabel')).toHaveLength(1);
    // The counts of the recorded Get_LocalityDetails fixture.
    expect(screen.getByText('95 Brethren')).toBeInTheDocument();
    expect(screen.getByText('25 Households')).toBeInTheDocument();
    expect(blocks('Directory_Household_Blocks.Household_Card')).toHaveLength(23);
    expect(calledActions().filter((a) => a === GET_DETAILS || a === GET_HOUSEHOLDS)).toEqual([
      GET_DETAILS,
      GET_HOUSEHOLDS,
    ]);
    expect(details).toEqual([
      expect.objectContaining({ LocalityId: '252', IsScreenInitialized: true, TagsList_SelectedTag: 'Households' }),
    ]);
    // Another locality than the user's (585): no My Household tag.
    expect(screen.queryByText('My Household')).toBeNull();
  });

  it('shows the blocks of the Supper Meetings, Interchange and OneSchool Global tags', async () => {
    await open();
    clickTag('Supper Meetings');
    await waitFor(() => {
      expect(document.getElementById('b19-l1-3598_10-$b4')).not.toBeNull();
    });
    expect(cards('Directory_Locality.Locality_Subdivisions')).toHaveLength(3);
    clickTag('Interchange');
    await waitFor(() => {
      expect(screen.getByText('Monte Hermoso')).toBeInTheDocument();
    });
    expect(blocks('Directory_Locality.Locality_Subdivisions')).toHaveLength(0);
    clickTag('OneSchool Global');
    await waitFor(() => {
      expect(document.getElementById('b21-b3-l1-3709_3-$b2')).not.toBeNull();
    });
    expect(cards('Directory_Locality.Locality_OneSchoolGlobal')).toHaveLength(2);
  });

  it('opens HouseholdCarousel at the clicked household with every household as the preload object', async () => {
    setFlags({ C2EnableCarousel: true });
    const view = await open();
    const first = cards('Directory_Household_Blocks.Household_Card')[0];
    if (first) fireEvent.click(first);
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=42438');
    });
    const preload = JSON.parse(screen.getByTestId('preload').textContent) as { CarouselHouseholdItem: unknown[] };
    expect(preload.CarouselHouseholdItem).toHaveLength(23);
    expect(preload.CarouselHouseholdItem[0]).toEqual({ Household: '42438' });
  });

  it('without the carousel, opens HouseholdDetails and SupperMeeting_Details', async () => {
    setFlags({ C2EnableCarousel: false });
    const view = await open();
    const household = cards('Directory_Household_Blocks.Household_Card')[0];
    if (household) fireEvent.click(household);
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=42438');
    });
    await act(() => view.router.navigate(-1));
    clickTag('Supper Meetings');
    await waitFor(() => {
      expect(cards('Directory_Locality.Locality_Subdivisions')).toHaveLength(3);
    });
    const meeting = cards('Directory_Locality.Locality_Subdivisions')[0];
    if (meeting) fireEvent.click(meeting);
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/SupperMeeting_Details?In_SubdivsionId=1210');
    });
  });

  it('a back navigation restores the screen and the selected tag without a call of the screen or its tags', async () => {
    setFlags({ C2EnableCarousel: true });
    const view = await open();
    clickTag('OneSchool Global');
    await waitFor(() => {
      expect(cards('Directory_Locality.Locality_OneSchoolGlobal')).toHaveLength(2);
    });
    const school = cards('Directory_Locality.Locality_OneSchoolGlobal')[0];
    if (school) fireEvent.click(school);
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/OneSchoolGlobalDetails?In_OneSchoolGlobalId=1430');
    });
    window.__osCalls = [];
    await act(() => view.router.navigate(-1));
    await waitFor(() => {
      expect(cards('Directory_Locality.Locality_OneSchoolGlobal')).toHaveLength(2);
    });
    expect(document.getElementById('$b7')?.textContent).toBe('Bahia Blanca, Argentina');
    // Only the actions menus of the restored cards fetch their contact details again (EntityDetailsActions).
    expect(calledActions().filter((a) => !a.startsWith('Directory_EntityDetailsActions/'))).toEqual([]);
  });

  it('without a LocalityId, opens the locality of the user with the My Household tag', async () => {
    const details = recordBodies(`UBTConnect/${GET_DETAILS}`);
    await open('');
    expect(screen.getByText('My Household')).toBeInTheDocument();
    expect(details).toEqual([expect.objectContaining({ LocalityId: '585', IsUserLocality: true })]);
  });
});
