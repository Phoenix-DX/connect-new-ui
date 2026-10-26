import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { collection } from '@/mocks/store';
import { orbitStaticEntities } from '@/platform/bootstrap/mocks';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { useOsNavigate } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { setOrbitStaticEntitiesDatabase, syncAllOrbitStaticEntities } from '@/platform/storage/localEntities';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import HostSurvey from './HostSurveyPage';

/* The page with its block (useHostSurvey, HostSurveyView) in the app frame on a memory router, with the MSW mocks:
   event 7301 is the Vitale household's confirmed survey (seven rooms, two meals); the Orbit local entities are those
   of the Sync_Info_GetMain mock, as an earlier app start synced them. */
const PATH = '/UBTConnect/HostSurvey';
const EVENT = '/UBTConnect/EventDetail';
const HOME = '/UBTConnect/HomeFeed';
const GET = 'ScreenBlock_HostSurvey/DataActionGetHostSurvey';

/** A route that the page opens or comes from: its name, and a back link. */
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
  [HOME]: <Stub name="HomeFeed" />,
  [EVENT]: <Stub name="EventDetail" />,
  [PATH]: <HostSurvey />,
  '/UBTConnect/HelpersDetail': <Stub name="HelpersDetail" />,
};

const block = () => document.querySelector('[data-block="Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey"]');
const isSkeleton = () => document.getElementById('b2-$b36') !== null;
const items = () => [...document.querySelectorAll('[data-block="Orbit_Blocks.HostSurvey_Item"]')];
const surveyCalls = () => calledActions().filter((action) => action === GET);

/** Event 7302: the survey of event 7301 with the status Unable to Host, in the mock store of the surveys (mocks.ts). */
function storeUnableToHostSurvey(): void {
  const surveys = collection('HostSurvey.surveys', () => [], 'EventId');
  const survey = structuredClone(surveys.get('7301')?.Survey) as { SurveyInfo: Record<string, unknown> };
  survey.SurveyInfo = { ...survey.SurveyInfo, EventId: '7302', HostProfileSurveyStatus: 'unable_to_host' };
  surveys.upsert({ EventId: '7302', Survey: survey });
}

/** Opens the page from EventDetail and waits for the survey. */
async function open(search: string) {
  const view = renderRoutes(routes, EVENT);
  await act(() => view.router.navigate(`${PATH}${search}`));
  await waitFor(() => {
    expect(isSkeleton()).toBe(false);
  });
  return view;
}

beforeEach(async () => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
  await syncAllOrbitStaticEntities(orbitStaticEntities());
});
afterEach(() => {
  setSignedInUser(null);
  setOrbitStaticEntitiesDatabase(null);
  sessionStorage.clear();
});

describe('HostSurvey page', () => {
  it('shows the confirmed survey of event 7301: CommonUI, the header, the read-only summary', async () => {
    const { container } = await open('?In_EventId=7301');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b1');
    expect(block()?.id).toBe('$b2');
    expect(container.querySelector('.orbit-host-survey-header-title')?.textContent).toBe(
      'Weekend Bible Conferences - Bahia and Azul',
    );
    expect(container.querySelector('.orbit-host-survey-header-summary')?.textContent).toBe('Summary Review');
    expect(container.textContent).toContain(
      'If you require further updates to your Host Survey, please contact the Orbit Helpdesk.',
    );
    expect(items().map((item) => item.querySelector('.bold')?.textContent)).toEqual([
      'Room 1',
      'Room 2',
      'Room 3',
      'Room 4',
      'Room 5',
      'Room 6',
      'Room 7',
      'Midday Meal',
      'Supper Meeting',
    ]);
    expect(container.querySelectorAll('.orbit-icon-edit')).toHaveLength(0);
    expect(block()?.lastElementChild?.getAttribute('data-block')).toBe('NavigationHandler.BackNavigationHandler');
    expect(block()?.lastElementChild?.id).toBe('b2-$b43');
    expect(surveyCalls()).toHaveLength(1);
  });

  it('sends the block variables with the route inputs; a null input date travels as the null DateTime', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET}`);
    await open('?In_EventId=7301&In_MemberId=5120&In_EventName=Spring%20Visit&In_EventStartDate=2026-11-06T09:00:00Z');
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    expect(JSON.stringify(bodies[0])).toContain('"In_EventId":"7301"');
    expect(JSON.stringify(bodies[0])).toContain('"In_EventName":"Spring Visit"');
    expect(JSON.stringify(bodies[0])).toContain('"In_EventEndDate":"1900-01-01T00:00:00"');
    expect(JSON.stringify(bodies[0])).toContain('"IsFetchingData":true');
    expect(document.querySelector('.orbit-host-survey-header-title')?.textContent).toBe('Spring Visit');
  });

  it('an event without a survey: there is no setup', async () => {
    const { container } = await open('?In_EventId=999');
    expect(container.textContent).toContain('There is no setup for this household yet.');
    expect(container.querySelector('.orbit-host-survey-summary')).toBeNull();
  });

  it('a back navigation to the page restores it without a new call', async () => {
    const view = await open('?In_EventId=7301');
    await act(() => view.router.navigate('/UBTConnect/HelpersDetail'));
    fireEvent.click(await screen.findByText('back from HelpersDetail'));
    await waitFor(() => {
      expect(view.at()).toBe(`${PATH}?In_EventId=7301`);
    });
    expect(items()).toHaveLength(9);
    expect(isSkeleton()).toBe(false);
    expect(surveyCalls()).toHaveLength(1);
  });

  it('a failed call keeps the skeleton and shows no message (mock error)', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const view = renderRoutes(routes, EVENT);
    await act(() => view.router.navigate(`${PATH}?In_EventId=7301`));
    await waitFor(() => {
      expect(surveyCalls()).toHaveLength(1);
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 20)));
    expect(isSkeleton()).toBe(true);
    expect(getFeedbackMessage()).toBeNull();
  });

  describe('device back (BackNavigationHandler b2-$b43): HomeFeed → EventDetail → HostSurvey', () => {
    /** The navigations that went through (dx-navigation of the navigation gate). */
    const navigations: string[] = [];
    const record = (event: Event) => {
      navigations.push((event as CustomEvent<{ location: { pathname: string } }>).detail.location.pathname);
    };
    beforeEach(() => {
      navigations.length = 0;
      window.addEventListener('dx-navigation', record);
    });
    afterEach(() => {
      window.removeEventListener('dx-navigation', record);
    });

    async function openFromHome(search: string) {
      const view = renderRoutes(routes, HOME);
      await act(() => view.router.navigate(EVENT));
      await act(() => view.router.navigate(`${PATH}${search}`));
      await waitFor(() => {
        expect(isSkeleton()).toBe(false);
      });
      navigations.length = 0;
      return view;
    }

    it('Unable to Host: NavigateTo_Back without PreventNavigation gives one back, no recursion', async () => {
      storeUnableToHostSurvey();
      const view = await openFromHome('?In_EventId=7302');
      expect(view.container.textContent).toContain('This Survey is no longer available for you.');

      await act(() => view.router.navigate(-1));
      expect(view.at()).toBe(EVENT);
      expect(navigations).toEqual([EVENT]);

      await act(() => view.router.navigate(-1));
      expect(view.at()).toBe(HOME);
      expect(navigations).toEqual([EVENT, HOME]);
    });

    it('a confirmed survey: one normal back', async () => {
      const view = await openFromHome('?In_EventId=7301');
      await act(() => view.router.navigate(-1));
      expect(view.at()).toBe(EVENT);
      expect(navigations).toEqual([EVENT]);
    });
  });
});
