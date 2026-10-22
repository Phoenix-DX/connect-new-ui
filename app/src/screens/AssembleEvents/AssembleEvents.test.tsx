import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ASSEMBLE_MEETINGS, USER_HALL_ID } from '@/mocks/fictional/assemble';
import { resetNavigation, renderRoutes } from '@/platform/navigation/testRouter';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import AssembleEvents from './index';

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
const NOW_DAY = `${NOW.getFullYear()}-${pad(NOW.getMonth() + 1)}-${pad(NOW.getDate())}`;
const PATH = '/UBTConnect/AssembleEvents';
const cards = (container: HTMLElement) =>
  container.querySelectorAll('#b2-b4-List_AssembleSummaryCards > [data-container]');

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
      (m) => m.DateTime >= NOW_DAY,
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
});
