import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { EMPTY_ADMIN_MILESTONE_TYPE } from '@/api/event';
import {
  EMPTY_SCANNED_USER,
  INITIAL_ADMIN_MILESTONE_DETAIL_STATE,
  type AdminMilestoneDetailState,
} from '@/pages/OrbitAdminMilestoneDetail/hooks/adminMilestoneDetailState';
import type { AdminMilestoneDetailInputs } from '@/pages/OrbitAdminMilestoneDetail/inputs';
import { AdminMilestoneDetailView } from './AdminMilestoneDetailView';

/* The Orbit admin milestone detail, props only. A fictional conference meeting and a scanned guest. */
const INPUTS: AdminMilestoneDetailInputs = {
  In_EventId: '7301',
  In_MilestoneId: '730104',
  In_MilestoneName: 'Conference Meeting',
  In_MilestoneDate: '2026-11-14T13:00:00Z',
  In_MilestoneStartDate: '2026-11-14T13:00:00Z',
  In_MilestoneEndDate: '2026-11-14T15:00:00Z',
  In_MilestoneDescription: 'Saturday afternoon session of the conferences in the main hall.',
};
const FETCHED: AdminMilestoneDetailState = {
  ...INITIAL_ADMIN_MILESTONE_DETAIL_STATE,
  isDataFetched: true,
  hasQRCode: true,
  milestoneType: { ...EMPTY_ADMIN_MILESTONE_TYPE, Id: 'meeting-admin', Name: 'Meeting' },
};
const SCANNED: AdminMilestoneDetailState = {
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
    Tag: 'Visitor',
    RowAllocation: '14',
    SeatingPlan: 'Bahia Main Hall',
    MilestoneDescription: INPUTS.In_MilestoneDescription,
  },
};

function view(state: AdminMilestoneDetailState, inputs: AdminMilestoneDetailInputs = INPUTS) {
  const handlers = { onScanQrCodeClicked: vi.fn(), onScanMilestoneDone: vi.fn(), onErrorMessageOk: vi.fn() };
  render(
    <MemoryRouter>
      <AdminMilestoneDetailView id="$b1" {...inputs} state={state} {...handlers} />
    </MemoryRouter>,
  );
  return handlers;
}

describe('AdminMilestoneDetailView', () => {
  it('while fetching: the title and the skeleton, no rows', () => {
    view({ ...INITIAL_ADMIN_MILESTONE_DETAIL_STATE, isFetchingData: true });
    expect(screen.getByText('Conference Meeting')).toBeInTheDocument();
    expect(document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).not.toBeNull();
    expect(screen.queryByRole('button', { name: 'Scan QR Code' })).toBeNull();
  });

  it('fetched: the date, type and description rows and the Scan QR Code button', () => {
    const { onScanQrCodeClicked } = view(FETCHED);
    expect(screen.getByText(/2026 \d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M$/)).toBeInTheDocument();
    expect(screen.getByText('Meeting').parentElement).toHaveClass('flex-center-vertical', 'margin-top-m');
    expect(screen.getByText(INPUTS.In_MilestoneDescription).parentElement).toHaveClass('margin-top-m');
    fireEvent.click(screen.getByRole('button', { name: 'Scan QR Code' }));
    expect(onScanQrCodeClicked).toHaveBeenCalledOnce();
  });

  it('no date and no type: only the description row, without margin', () => {
    view(
      { ...FETCHED, milestoneType: EMPTY_ADMIN_MILESTONE_TYPE },
      { ...INPUTS, In_MilestoneDate: '1900-01-01T00:00:00' },
    );
    expect(document.querySelector('.orbit-icon-date-time')).toBeNull();
    expect(document.querySelector('.orbit-icon-host-guest')).toBeNull();
    expect(screen.getByText(INPUTS.In_MilestoneDescription).parentElement).toHaveAttribute(
      'class',
      'flex-center-vertical',
    );
  });

  it('processing: the spinner instead of the button; no QR code: no button', () => {
    view({ ...FETCHED, isProcessingData: true });
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Scan QR Code' })).toBeNull();
  });

  it('not fetched: NoInformation_Orbit', () => {
    view(INITIAL_ADMIN_MILESTONE_DETAIL_STATE);
    expect(screen.getByText('The Event is no longer available for you.')).toBeInTheDocument();
  });

  it('the scan popup: name, milestone, description, row, venue, tag and Has Checked in; Done', () => {
    const { onScanMilestoneDone } = view(SCANNED);
    const popup = document.getElementById('b1-Popup_QRCode');
    expect(popup).not.toBeNull();
    const text = popup?.textContent ?? '';
    for (const part of [
      'Lucía Herrera',
      'Conference Meeting',
      `Description: ${INPUTS.In_MilestoneDescription}`,
      'Locality: San Nicolás',
      'Country: Argentina',
      'Role: Guest',
      'Row: 14',
      'Venue: Bahia Main Hall',
      'GMP Tag: Visitor',
      'Has Checked in',
    ])
      expect(text).toContain(part);
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    expect(onScanMilestoneDone).toHaveBeenCalledOnce();
  });

  it('a failed check-in: the error message with the cross, "Participant" without names', () => {
    view({
      ...SCANNED,
      scanResult: { Success: false, ErrorMessage: 'Guest is not allocated to this event.' },
      scannedUser: EMPTY_SCANNED_USER,
    });
    const popup = document.getElementById('b1-Popup_QRCode');
    expect(popup?.textContent).toContain('Participant');
    expect(popup?.textContent).toContain('Guest is not allocated to this event.');
    expect(popup?.textContent).not.toContain('Has Checked in');
    expect(popup?.querySelector('.orbit-icon-circle-cross')).not.toBeNull();
  });

  it('the OrbitErrorMessage popup and its Ok', () => {
    const { onErrorMessageOk } = view({
      ...FETCHED,
      scanError: { IsShowErrorMessage: true, Message: 'Unable to read QR code, please try again.' },
    });
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    expect(onErrorMessageOk).toHaveBeenCalledOnce();
  });
});
