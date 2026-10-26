import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { AccommodationData } from '@/api/event';
import type { AccommodationHostInputs } from '@/pages/MilestoneDetail/hooks/accommodationHostState';
import { AccommodationHostView, type AccommodationHostViewProps } from './AccommodationHostView';

/* The view of ScreenBlock_AccommodationHost from props. Fictional event, host and guests. */
const INPUTS: AccommodationHostInputs = {
  In_MilestoneId: '5501-1',
  In_EventId: '5501',
  In_HostId: '770001',
  In_PreloadEventName: 'Spring Youth Weekend - Tandil',
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};
const EMPTY: AccommodationData = {
  MilestoneId: '',
  MilestoneType: '',
  MilestoneDateTime: '',
  MilestoneTitle: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  SpecialNeedsCount: 0,
  Helpers: [],
  Rooms: [],
};
const GUEST = {
  HouseholderId: '880100',
  MemberId: '880101',
  LocalityId: '310',
  FirstName: 'Lucía',
  LastName: 'Herrera',
  Title: 'Mrs',
  Age: '41',
  Phone: '+54 9 2983 41 1100',
  HasGuestArrangements: true,
};
const DATA: AccommodationData = {
  ...EMPTY,
  MilestoneId: '5501-1',
  MilestoneDateTime: '2026-11-13T18:00:00Z',
  MilestoneTitle: 'Hosted Nights',
  EventDetails: { Id: '5501', Name: 'Spring Youth Weekend', Location: 'Tandil Hall', StartDate: '', EndDate: '' },
  Helpers: [
    { Role: 'CATERING', MemberInformation: [{ ...GUEST, MemberId: '880102', FirstName: 'Mateo', MiddayMeal: 'Soup' }] },
  ],
  Rooms: [
    {
      RoomId: '6101',
      RoomName: 'Garden Room',
      RoomInformation: { Floor: 'Ground Floor', Type: 'Couple', Beds: '1' },
      Guests: [
        {
          HouseholderId: '880100',
          HouseholdName: '',
          LocalityId: '310',
          Locality: 'Tres Arroyos',
          CountryCode: 'AR',
          DisplayDot: true,
          MemberInformation: [GUEST],
        },
      ],
    },
    {
      RoomId: '6102',
      RoomName: 'Attic',
      RoomInformation: { Floor: '', Type: '', Beds: '0' },
      Guests: [],
    },
  ],
};

function setup(props: Partial<AccommodationHostViewProps> = {}) {
  const handlers = {
    getSignedImageURL: vi.fn(() => Promise.resolve('')),
    onClickOpenDocument: vi.fn(),
    onClickGuestArrangements: vi.fn(),
    onClickedMember: vi.fn(),
    onClickedMemberPhone: vi.fn(),
    onContactByPhoneCancel: vi.fn(),
    onCallClicked: vi.fn(),
    onContactHelpdesk: vi.fn(),
  };
  const view = render(
    <MemoryRouter>
      <AccommodationHostView
        id="b1-$b5"
        inputs={INPUTS}
        accommodationData={DATA}
        isFetchingData={false}
        isDataFetched
        hasData
        hasDocument={false}
        contactByPhoneData={{}}
        {...handlers}
        {...props}
      />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

const block = () => document.getElementById('b1-$b5');
const skeleton = () => document.getElementById('b1-b5-$b16');
const footer = () => document.querySelector('.contact-helpdesk-footer');
const documentIcon = () => document.querySelector('.orbit-icon-file-doc');

describe('AccommodationHostView', () => {
  it('shows the skeleton while fetching, with the preloaded names in the header and no footer', () => {
    setup({ accommodationData: EMPTY, isFetchingData: true, isDataFetched: false, hasData: false });
    expect(skeleton()).not.toBeNull();
    expect(block()?.textContent).toContain('Spring Youth Weekend - Tandil');
    expect(footer()).toBeNull();
  });

  it('shows nothing in the content before the first answer', () => {
    setup({ accommodationData: EMPTY, isDataFetched: false, hasData: false });
    expect(skeleton()).toBeNull();
    expect(block()?.textContent).not.toContain('Accommodation Allocation');
    expect(block()?.textContent).not.toContain('Please check again later');
  });

  it('without data: the "being organised" message and no footer', () => {
    setup({ accommodationData: EMPTY, hasData: false });
    expect(screen.getByText(/This accommodation milestone is still being organised/)).toBeInTheDocument();
    expect(footer()).toBeNull();
  });

  it('with data but no rooms or helpers: the "no guests" message and the footer', () => {
    setup({ accommodationData: { ...DATA, Rooms: [], Helpers: [] } });
    expect(screen.getByText(/No guests have been allocated to this milestone yet/)).toBeInTheDocument();
    expect(footer()).not.toBeNull();
  });

  it('with rooms: the title, the helpers, one accordion item per room and the guests', () => {
    setup();
    const text = block()?.textContent ?? '';
    expect(text).toContain('Spring Youth Weekend');
    expect(text).toContain('Hosted Nights');
    expect(text).toContain('Accommodation Allocation');
    expect(text).toContain('Helper/s');
    expect(text).toContain('Catering/s');
    expect(text).toContain('Midday Meal: Soup');
    expect(text).toContain('Room: Garden Room');
    expect(text).toContain('Room: Attic');
    expect(document.querySelectorAll('.room-info-cont')).toHaveLength(1);
    expect(text).toContain('Ground Floor');
    expect(document.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]')).toHaveLength(2);
    expect(text).toContain('Guest Arrangements');
  });

  it('with helpers only: the title and the helpers', () => {
    setup({ accommodationData: { ...DATA, Rooms: [] } });
    const text = block()?.textContent ?? '';
    expect(text).toContain('Accommodation Allocation');
    expect(text).toContain('Catering/s');
    expect(text).not.toContain('Room:');
  });

  it('shows the document icon with rooms and a document, and raises its click', () => {
    const { handlers } = setup({ hasDocument: true });
    fireEvent.click(documentIcon()?.parentElement as Element);
    expect(handlers.onClickOpenDocument).toHaveBeenCalledTimes(1);
  });

  it('hides the document icon without a document, while fetching or without rooms', () => {
    setup({ hasDocument: false });
    expect(documentIcon()).toBeNull();
  });

  it('raises the events of the footer, the member cards and the guest arrangements link', () => {
    const { handlers } = setup();
    fireEvent.click(footer() as Element);
    expect(handlers.onContactHelpdesk).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Guest Arrangements'));
    expect(handlers.onClickGuestArrangements).toHaveBeenCalledWith('880101', true);
    const roomCard = document.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]')[1];
    fireEvent.click(roomCard?.querySelector('.member-info-text-cont') as Element);
    expect(handlers.onClickedMember).toHaveBeenCalledWith('880100');
    fireEvent.click(roomCard?.querySelector('.orbit-icon-phone') as Element);
    // A guest's phone passes the LocalityId of the guest household.
    expect(handlers.onClickedMemberPhone).toHaveBeenCalledWith(
      '+54 9 2983 41 1100',
      'Lucía Herrera',
      '310',
      '880101',
      '',
    );
  });

  it('shows the call popup from its data', () => {
    const popup = {
      Phone: '+54 9 2983 41 2200',
      ContactPopupData: { Name: 'Bruno Ferreyra', ShowPopup: true, IsLoading: false, IsFetchingTimezone: false },
    };
    const { unmount } = setup({
      contactByPhoneData: { ...popup, ContactPopupData: { ...popup.ContactPopupData, ShowPopup: false } },
    });
    expect(document.body.textContent).not.toContain('Bruno Ferreyra');
    unmount();
    setup({ contactByPhoneData: popup });
    expect(document.body.textContent).toContain('Bruno Ferreyra');
  });
});
