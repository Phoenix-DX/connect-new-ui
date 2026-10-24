import { fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { HelperData } from '@/api/event';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { HelperDetailsView, type HelperDetailsViewProps } from './HelperDetailsView';

/* The view from props, on a memory router in the app frame. Fictional helpers of an Orbit conference. */
const PATH = '/UBTConnect/HelpersDetail';

const NO_HELPERS: HelperData = {
  EventDetails: { Id: '7301', Name: '', Location: '', StartDate: '', EndDate: '' },
  Helpers: [],
};
const HELPERS: HelperData = {
  EventDetails: {
    Id: '7301',
    Name: 'Weekend Conference',
    Location: 'Mar del Plata',
    StartDate: '2026-03-13T09:00:00Z',
    EndDate: '2026-03-15T17:00:00Z',
  },
  Helpers: [
    {
      Role: 'CATERING',
      MemberInformation: [
        {
          HouseholderId: '91010',
          MemberId: '91011',
          FirstName: 'Lucía',
          LastName: 'Suárez',
          Phone: '+54 223 555 0101',
        },
        { HouseholderId: '91010', MemberId: '91012', FirstName: 'Tomás', LastName: 'Suárez', Phone: '' },
      ],
    },
    {
      Role: 'USHER',
      MemberInformation: [{ HouseholderId: '91020', MemberId: '91021', FirstName: 'Elena', LastName: 'Gallardo' }],
    },
  ],
};

function renderView(props: Partial<HelperDetailsViewProps> = {}) {
  const handlers = {
    onClickedMember: vi.fn(),
    onClickedMemberPhone: vi.fn(),
    onContactByPhoneCancel: vi.fn(),
    onCallClicked: vi.fn(),
    onContactHelpdesk: vi.fn(),
  };
  const view: HelperDetailsViewProps = {
    id: '$b1',
    preloadEventName: 'Weekend Conference',
    preloadMilestoneName: 'Helper',
    orbitMilestoneTypeId: 'helper-host',
    helperData: HELPERS,
    isFetchingData: false,
    isDataFetched: true,
    contactByPhoneData: {},
    getSignedImageURL: () => Promise.resolve(''),
    ...handlers,
    ...props,
  };
  const rendered = renderRoutes({ [PATH]: <HelperDetailsView {...view} /> }, PATH);
  return { ...rendered, handlers };
}

const skeleton = () => document.getElementById('b1-$b8');
const noInformation = () => document.getElementById('b1-$b7');
const footer = () => document.querySelector('.contact-helpdesk-footer');
const roles = () =>
  [...document.querySelectorAll('[data-block="Orbit_Generic_Blocks.Accordion_Orbit"] .section-expandable-title')].map(
    (title) => title.textContent,
  );

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('HelperDetailsView', () => {
  it('shows the helpers by role with their member cards and the helpdesk footer', () => {
    const { container } = renderView();
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_HelperDetails"]')?.id).toBe('$b1');
    expect(container.querySelector('.header.orbit-detail')).not.toBeNull();
    expect(roles()).toEqual(['Catering/s', 'Usher/s']);
    expect(container.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]')).toHaveLength(3);
    expect(footer()).not.toBeNull();
    expect(skeleton()).toBeNull();
    expect(noInformation()).toBeNull();
  });

  it('shows the skeleton of the milestone type while fetching, without the footer', () => {
    renderView({ isFetchingData: true, isDataFetched: false, helperData: NO_HELPERS });
    expect(skeleton()).not.toBeNull();
    expect(footer()).toBeNull();
    expect(noInformation()).toBeNull();
  });

  it('shows "There is no Helper available." once fetched without helpers', () => {
    renderView({ helperData: NO_HELPERS });
    expect(noInformation()?.textContent).toBe('There is no Helper available.');
    expect(footer()).toBeNull();
  });

  it('shows no content before the first answer', () => {
    renderView({ helperData: NO_HELPERS, isDataFetched: false });
    expect(skeleton()).toBeNull();
    expect(noInformation()).toBeNull();
  });

  it('raises the member, phone and helpdesk handlers', async () => {
    const { handlers } = renderView();
    fireEvent.click(document.querySelector('.member-info-text-cont') as Element);
    expect(handlers.onClickedMember).toHaveBeenCalledWith('91010');
    fireEvent.click(document.querySelector('.orbit-icon-phone') as Element);
    await waitFor(() => {
      expect(handlers.onClickedMemberPhone).toHaveBeenCalledTimes(1);
    });
    expect(handlers.onClickedMemberPhone.mock.calls[0]?.slice(0, 2)).toEqual(['+54 223 555 0101', 'Lucía Suárez']);
    fireEvent.click(footer() as Element);
    expect(handlers.onContactHelpdesk).toHaveBeenCalledTimes(1);
  });

  it('shows the call popup of ContactByPhoneData', () => {
    renderView({
      contactByPhoneData: {
        ContactPopupData: { Name: 'Lucía Suárez', ShowPopup: true, IsLoading: false, IsFetchingTimezone: false },
        MobilePhone: '+54 223 555 0101',
      },
    });
    expect(document.body.textContent).toContain('Lucía Suárez');
    expect(document.body.textContent).toContain('Mobile');
  });
});
