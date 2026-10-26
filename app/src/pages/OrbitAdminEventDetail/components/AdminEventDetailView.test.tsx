import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import {
  EMPTY_SCANNED_USER,
  INITIAL_ADMIN_EVENT_DETAIL_STATE,
  type AdminEventDetailState,
} from '@/pages/OrbitAdminEventDetail/hooks/adminEventDetailState';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import { AdminEventDetailView } from './AdminEventDetailView';

/* The Orbit admin event detail, props only. A fictional youth day and a scanned guest. */
const INPUTS: AdminEventDetailInputs = {
  In_EventId: '7315',
  In_EventName: 'Youth Day - Azul',
  In_EventStartDate: '2026-11-14T13:00:00Z',
  In_EventEndDate: '2026-11-14T21:00:00Z',
  In_EventLocation: 'Azul Meeting Room',
  In_EventTypeFriendly: 'Youth Day',
};
const FETCHED: AdminEventDetailState = {
  ...INITIAL_ADMIN_EVENT_DETAIL_STATE,
  isDataFetched: true,
  hasQRCode: true,
  eventType: { Id: 'event-admin', Type: 'Admin' },
};
const SCANNED: AdminEventDetailState = {
  ...FETCHED,
  qrCodePopupOpened: true,
  scanResult: { Success: true, ErrorMessage: '' },
  scannedUser: {
    ...EMPTY_SCANNED_USER,
    Member: {
      Id: '9101',
      FirstName: 'Lucía',
      Lastname: 'Herrera',
      LocalityName: 'San Nicolás',
      CountryName: 'Argentina',
    },
    UserRole: 'Guest',
    Seats: [
      { MilestoneName: '', SeatAllocation: '3' },
      { MilestoneName: '', SeatAllocation: '5' },
    ],
  },
};

function setup(state: AdminEventDetailState) {
  const handlers = { onScanQrCodeClicked: vi.fn(), onScanEventDone: vi.fn(), onErrorMessageOk: vi.fn() };
  const view = render(
    <MemoryRouter>
      <AdminEventDetailView id="$b1" bottomBar={<nav>bottom bar</nav>} {...INPUTS} state={state} {...handlers} />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

const block = (name: string) => document.querySelector(`[data-block="${name}"]`);
const scanButton = () => screen.queryByRole('button', { name: 'Scan QR Code' });

describe('AdminEventDetailView', () => {
  it('while fetching: the title and the AdminEventDetails skeleton, no event rows', () => {
    setup({ ...INITIAL_ADMIN_EVENT_DETAIL_STATE, isFetchingData: true });
    expect(screen.getByText('Youth Day - Azul')).toBeInTheDocument();
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).not.toBeNull();
    expect(screen.queryByText('Azul Meeting Room')).toBeNull();
    expect(screen.getByText('bottom bar')).toBeInTheDocument();
  });

  it('fetched: the dates, the location, the event type, the kind of event and the Scan QR Code button', () => {
    const { handlers } = setup(FETCHED);
    expect(screen.getByText('Azul Meeting Room')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Youth Day')).toBeInTheDocument();
    expect(screen.getByText(/2026 - .*2026/)).toBeInTheDocument();
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toBeNull();
    fireEvent.click(scanButton() as HTMLElement);
    expect(handlers.onScanQrCodeClicked).toHaveBeenCalledTimes(1);
  });

  it('while a scan is processed: the Loading spinner and no button; without a QR code: no button', () => {
    const { unmount } = setup({ ...FETCHED, isProcessingData: true });
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(scanButton()).toBeNull();
    unmount();
    setup({ ...FETCHED, hasQRCode: false });
    expect(screen.queryByText('Loading')).toBeNull();
    expect(scanButton()).toBeNull();
  });

  it('not fetched: NoInformation_Orbit with "The Event is no longer available for you."', () => {
    setup(INITIAL_ADMIN_EVENT_DETAIL_STATE);
    expect(block('Orbit_Generic_Blocks.NoInformation_Orbit')).not.toBeNull();
    expect(screen.getByText('The Event is no longer available for you.')).toBeInTheDocument();
  });

  it('the result popup: the guest, the details, "Has Checked in" and Done', () => {
    const { handlers } = setup(SCANNED);
    const popup = document.getElementById('b1-Popup_QRCode');
    expect(popup).not.toBeNull();
    expect(popup?.textContent).toContain('Lucía Herrera');
    expect(popup?.textContent).toContain('Locality: San Nicolás');
    expect(popup?.textContent).toContain('Country: Argentina');
    expect(popup?.textContent).toContain('Role: Guest');
    expect(popup?.textContent).toContain('Row: 3 & 5');
    expect(popup?.textContent).toContain('Has Checked in');
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    expect(handlers.onScanEventDone).toHaveBeenCalledTimes(1);
  });

  it('a failed check-in shows the error of the answer; a closed popup renders nothing', () => {
    const { unmount } = setup({ ...SCANNED, scanResult: { Success: false, ErrorMessage: 'Already checked in.' } });
    expect(document.getElementById('b1-Popup_QRCode')?.textContent).toContain('Already checked in.');
    unmount();
    setup(FETCHED);
    expect(document.getElementById('b1-Popup_QRCode')).toBeNull();
  });

  it('the error popup of an unreadable code: the message and Ok', () => {
    const { handlers } = setup({
      ...FETCHED,
      scanError: { IsShowErrorMessage: true, Message: 'Unable to read QR code, please try again.' },
    });
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    expect(handlers.onErrorMessageOk).toHaveBeenCalledTimes(1);
  });
});
