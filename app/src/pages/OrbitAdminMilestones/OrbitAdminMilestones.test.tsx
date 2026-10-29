import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { dateTimeToDate, toAdminMilestones } from '@/api/event';
import { EMPTY_ADMIN_MILESTONE_TYPE } from '@/api/event/adminMilestoneDetail';
import { orbitAdminMilestones } from '@/mocks/fictional/orbitAdminMilestones';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { adminMilestoneRow } from './mocks';
import { milestoneDetailParams, missingDataOf } from './hooks/adminMilestonesState';
import OrbitAdminMilestones from './OrbitAdminMilestonesPage';

/* The page with its flows (useAdminMilestones, useNavigateToMilestoneDetail) in the app frame on a memory router, with
   the MSW mocks: the seven fictional milestones of event 7301 (src/mocks/fictional/orbitAdminMilestones.ts). */
const HOME = '/UBTConnect/HomeFeed';
const PATH = '/UBTConnect/OrbitAdminMilestones';
const FETCH = 'ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList';
const SCAN_FF = 'ActionGetMilestoneScanFF';
const NO_MILESTONE =
  'There are no event milestones available for QR scanning. Only milestones from yesterday, today or tomorrow are shown. If you have any questions, please contact your regional Orbit helpdesk.';

const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <OrbitAdminMilestones />,
  '/UBTConnect/OrbitAdminLanding': <p>OrbitAdminLanding screen</p>,
  '/UBTConnect/OrbitAdminMilestoneDetail': <p>OrbitAdminMilestoneDetail screen</p>,
};

async function open(eventId = '7301') {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}?EventId=${eventId}`));
  return view;
}

const cards = () => [...document.querySelectorAll('[data-block="Orbit_Blocks.Card_Milestone"]')];
const skeleton = () => document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const count = (action: string) => calledActions().filter((a) => a === action).length;
const loaded = async () => {
  await waitFor(() => {
    expect(cards()).toHaveLength(7);
  });
};
const clickCard = (index: number) => {
  const card = cards()[index]?.querySelector('.orbit-card-cont');
  if (!card) throw new Error(`no card ${String(index)}`);
  fireEvent.click(card);
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo({ FirstName: 'Matías', MemberId: '20517', CountryCode: 'AR' });
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
  vi.restoreAllMocks();
});

describe('OrbitAdminMilestones page', () => {
  it('OnReady: the skeleton with the first name, then the milestone cards; one call with the block variables', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${FETCH}`);
    await open();
    expect(document.getElementById('$b1')?.getAttribute('data-block')).toBe(
      'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones',
    );
    expect(skeleton()?.id).toBe('b1-$b5');
    expect(document.querySelector('.orbit-admin-header-text')?.textContent).toBe('Matías');
    await loaded();
    expect(skeleton()).toBeNull();
    for (const m of orbitAdminMilestones('7301')) expect(screen.getByText(m.MilestoneName)).toBeTruthy();
    expect(count(FETCH)).toBe(1);
    expect(count(SCAN_FF)).toBe(0);
    expect(bodies).toEqual([{ IsFetchingData: true, UserFirstName: 'Matías', UserMemberId: '20517', EventId: '7301' }]);
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('$b2');
    expect(document.getElementById('$b3')).not.toBeNull();
  });

  it('an event without milestones shows NoInformation_Orbit', async () => {
    await open('7322');
    await waitFor(() => {
      expect(screen.getByText(NO_MILESTONE)).toBeTruthy();
    });
    expect(cards()).toHaveLength(0);
  });

  it('a card with IsScanPerMilestone false (TST) calls GetMilestoneScanFF and opens OrbitAdminLanding', async () => {
    const { at } = await open();
    await loaded();
    clickCard(0);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/OrbitAdminLanding');
    });
    expect(count(SCAN_FF)).toBe(1);
  });

  it('a card with IsScanPerMilestone true opens OrbitAdminMilestoneDetail with the 7 inputs in the original order', async () => {
    sessionStorage.setItem('mock:mock', 'scanpermilestone');
    const { at } = await open();
    await loaded();
    clickCard(1);
    await waitFor(() => {
      expect(at()).toMatch(/^\/UBTConnect\/OrbitAdminMilestoneDetail\?/);
    });
    const query = new URLSearchParams(at().split('?')[1]);
    const m = orbitAdminMilestones('7301')[1];
    if (!m) throw new Error('no milestone');
    expect([...query.keys()]).toEqual([
      'In_MilestoneDate',
      'In_MilestoneEndDate',
      'In_MilestoneName',
      'In_MilestoneId',
      'In_MilestoneDescription',
      'In_EventId',
      'In_MilestoneStartDate',
    ]);
    expect(Object.fromEntries(query)).toEqual({
      In_MilestoneDate: new Date(m.EventDate).toISOString(),
      In_MilestoneEndDate: new Date(m.EndDate).toISOString(),
      In_MilestoneName: m.MilestoneName,
      In_MilestoneId: m.MilestoneRef,
      In_MilestoneDescription: m.Description,
      In_EventId: '7301',
      In_MilestoneStartDate: new Date(m.StartDate).toISOString(),
    });
  });

  it('flow scope (R1): unmounted while Get_AdminMilestoneList is pending, nothing runs after the answer', async () => {
    sessionStorage.setItem('mock:latency', '200');
    const { router } = await open();
    expect(skeleton()).not.toBeNull();
    await act(() => router.navigate(HOME));
    await act(() => new Promise((resolve) => setTimeout(resolve, 400)));
    expect(screen.getByText('HomeFeed screen')).toBeTruthy();
    expect(cards()).toHaveLength(0);
    expect(getFeedbackMessage()).toBeNull();
  });
});

describe('ScreenBlock_AdminMilestones pure parts', () => {
  const today = new Date(Date.UTC(2026, 9, 29, 12));
  const [first] = orbitAdminMilestones('7301', today);
  if (!first) throw new Error('no milestone');

  it('OnAfterFetch maps GetAdminOrbitMilestone_Screen to Milestone_Screen', () => {
    const [milestone] = toAdminMilestones({ Response: { List: [adminMilestoneRow(first)] } });
    expect(milestone).toEqual({
      MilestoneId: first.MilestoneRef,
      // OrbitMilestoneType.Type of the first milestone's type (MCP row 7, mcp-session-2026-10-29.md).
      Type: 'AdminMeeting',
      Title: first.MilestoneName,
      MilestoneDateTime: first.EventDate,
      SequenceNo: '1',
      DateForFilter: dateTimeToDate(first.EventDate),
      OrbitMilestoneType: { ...EMPTY_ADMIN_MILESTONE_TYPE, ...first.type },
      MilestoneInfo: {
        MilestoneStartDateTime: first.StartDate,
        MilestoneEndDateTime: first.EndDate,
        Description: first.Description,
      },
    });
    expect(dateTimeToDate('1900-01-01T00:00:00Z')).toBe('1900-01-01');
  });

  it('Handler_ClickedMilestone: an empty MilestoneId is the missing data "Identifier"', () => {
    expect(missingDataOf({ MilestoneId: '' })).toBe('Identifier');
    expect(missingDataOf({ MilestoneId: 'MS-7301-01' })).toBe('');
  });

  it('the null DateTime goes in the URL as "1900-01-01T00:00:00"', () => {
    const params = milestoneDetailParams({
      eventId: '7301',
      milestoneId: 'MS-7301-01',
      milestoneName: 'Coach from Azul',
      milestoneDate: '',
      milestoneDescription: '',
      milestoneStartDate: '1900-01-01T00:00:00Z',
      milestoneEndDate: '2026-10-29T15:00:00Z',
    });
    expect(params.In_MilestoneDate).toBe('1900-01-01T00:00:00');
    expect(params.In_MilestoneStartDate).toBe('1900-01-01T00:00:00');
    expect(params.In_MilestoneEndDate).toBe('2026-10-29T15:00:00.000Z');
  });
});
