import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ASSEMBLE_MEETINGS, USER_HALL_ID } from '@/mocks/fictional/assemble';
import { resetNavigation, renderRoutes } from '@/platform/navigation/testRouter';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import AssembleEvents from './AssembleEventsPage';

/* Built from the compiled code: TST's account had no meeting (default capture = NC_ErrorScreen), so the meeting list,
   the time tags and the navigation to AssembleDetail are checked here on the fictional Assemble mocks. */
/* The meeting programme (ASSEMBLE_MEETINGS) is built from the real day when the mock module loads (the test setup
   imports it before this file), from 5 weeks before to 8 weeks after. The screen asks for the range from "now". So the
   clock is frozen at noon of that same day: the range no longer depends on the time of day, and the expected meeting
   is computed from the data at that fixed instant. Only Date is faked: timers and waitFor keep working. */
const NOW = vi.hoisted(() => {
  const t = new Date();
  const noon = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 12, 0, 0);
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(noon);
  return noon;
});
const pad = (n: number) => String(n).padStart(2, '0');
/* The screen asks for meetings from "now" (noon), so the meetings of today before noon are not in the list. */
const NOW_STAMP = `${NOW.getFullYear()}-${pad(NOW.getMonth() + 1)}-${pad(NOW.getDate())}T12:00:00`;
const PATH = '/UBTConnect/AssembleEvents';
const cards = (container: HTMLElement) =>
  container.querySelectorAll('#b2-b4-List_AssembleSummaryCards > [data-container]');
/** The data actions of the screen in the call log. */
const assembleCalls = () => (window.__osCalls ?? []).map((c) => c.action).filter((a) => a.startsWith('DataActionGet'));
const settle = (ms: number) =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
  });

function renderScreen(search = '') {
  return renderRoutes(
    { [PATH]: <AssembleEvents />, '/UBTConnect/AssembleDetail': <div id="assemble-detail" /> },
    `${PATH}${search}`,
  );
}

describe('AssembleEvents', () => {
  beforeEach(async () => {
    freshPage();
    resetNavigation();
    window.history.replaceState(null, '', `${PATH}?mocksession=unlocked`);
    await applyTestSession();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("the user's hall: title, the first page of upcoming meetings, the From header; a card opens AssembleDetail", async () => {
    const { container, at } = renderScreen();
    expect(container.querySelector('[data-block="AssembleSkeleton.AssembleSummary_SkeletonList"]')).not.toBeNull();
    await waitFor(() => {
      expect(cards(container)).toHaveLength(10);
    });
    expect(container.querySelector('#b2-DIV_SMName')).toHaveTextContent('Zapiola (Main Meeting Room)');
    expect(container.querySelector('#b2-b4-b3-DIV_ListHeader')?.textContent).toMatch(/^From [A-Z][a-z]+ \d{4}$/);
    expect(container.querySelector('#b2-b4-b3-DIV_Filter')).toHaveTextContent('All Meeting Types');
    const first = cards(container)[0];
    if (!(first instanceof HTMLElement)) throw new Error('no card');
    fireEvent.click(first);
    const next = ASSEMBLE_MEETINGS.filter((m) => m.HostingSubdivisionId === USER_HALL_ID).find(
      (m) => m.DateTime >= NOW_STAMP,
    );
    await waitFor(() => {
      expect(at()).toContain('/UBTConnect/AssembleDetail?Start=');
    });
    expect(at()).toContain(`SeriesId=${next?.SeriesId ?? ''}`);
  });

  it('Past Meetings shows the newest past meeting first under "Since"', async () => {
    const { container } = renderScreen();
    await waitFor(() => {
      expect(cards(container)).toHaveLength(10);
    });
    fireEvent.click(screen.getByText('Past Meetings'));
    await waitFor(() => {
      expect(container.querySelector('#b2-b4-b3-DIV_ListHeader')?.textContent).toMatch(/^Since /);
    });
    expect(container.querySelector('.connect-tag-active')).toHaveTextContent('Past Meetings');
  });

  it('back from AssembleDetail: the view cache restores the title and the list on the first render, with no new call', async () => {
    const { container, at, router } = renderScreen();
    await waitFor(() => {
      expect(cards(container)).toHaveLength(10);
    });
    fireEvent.click(screen.getByText('Past Meetings'));
    await waitFor(() => {
      expect(container.querySelector('#b2-b4-b3-DIV_ListHeader')?.textContent).toMatch(/^Since /);
    });
    fireEvent.click(cards(container)[0] as HTMLElement);
    await waitFor(() => {
      expect(at()).toContain('/UBTConnect/AssembleDetail?');
    });
    window.__osCalls = [];
    await act(() => router.navigate(-1));
    expect(cards(container)).toHaveLength(10);
    expect(container.querySelector('.connect-tag-active')).toHaveTextContent('Past Meetings');
    expect(container.querySelector('#b2-DIV_SMName')).toHaveTextContent('Zapiola (Main Meeting Room)');
    await settle(20);
    expect(assembleCalls()).toEqual([]);
  });

  it('flow scope (item 8, R3): a navigation away while OnReady waits for the user starts no refresh and no FetchCountries', async () => {
    sessionStorage.setItem('mock:latency', '40');
    const { container, router } = renderRoutes(
      { [PATH]: <AssembleEvents />, '/UBTConnect/HomeFeed': <div id="home" /> },
      '/UBTConnect/HomeFeed',
    );
    window.__osCalls = [];
    await act(() => router.navigate(PATH));
    await settle(5);
    await act(() => router.navigate(-1));
    await settle(200);
    expect(container.querySelector('[data-block="Assemble.ScreenBlock_AssembleEvents"]')).toBeNull();
    // GetCacheableUserInfo is a module action: it runs once. The refreshes of AssembleSummary_List and FetchCountries
    // of Assemble_FilterSheet are own client actions of the left blocks (R3): they do not start.
    const watched = [
      'Connect2_LegacyShared/ActionGetUserInformation',
      'Connect2_Assemble_MUI/DataActionGetAssembleEventTypes',
      'Connect2_Assemble_MUI/DataActionGetAssembleMeetingSummaryList',
      'Connect2_LegacyShared/ActionGetCountriesBySubscription',
    ];
    const calls = (window.__osCalls ?? []).map((c) => `${c.module}/${c.action}`).filter((a) => watched.includes(a));
    expect(calls).toEqual(['Connect2_LegacyShared/ActionGetUserInformation']);
  });
});
