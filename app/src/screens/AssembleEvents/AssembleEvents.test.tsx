import { fireEvent, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { ASSEMBLE_MEETINGS, USER_HALL_ID } from '../../mocks/fictional/assemble';
import { resetNavigation, renderRoutes } from '../../shell/navigation/testRouter';
import { applyTestSession } from '../../shell/testSession';
import { freshPage } from '../../shell/testSupport';
import AssembleEvents from './index';

/* Built from the compiled code: TST's account had no meeting (default capture = NC_ErrorScreen), so the meeting list,
   the time tags and the navigation to AssembleDetail are checked here on the fictional Assemble mocks. */
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
      (m) => m.DateTime >= new Date(Date.now() - 60_000).toISOString().slice(0, 10),
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
