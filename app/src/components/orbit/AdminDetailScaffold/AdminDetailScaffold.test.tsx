import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { AdminDetailRow, AdminDetailScaffold, type AdminDetailScaffoldState } from './AdminDetailScaffold';

/* The frame of the Orbit admin detail blocks, props only. A fictional harvest gathering in a lakeside hall. */
const FETCHED: AdminDetailScaffoldState = {
  isFetchingData: false,
  isDataFetched: true,
  isProcessingData: false,
  hasQRCode: true,
  qrCodePopupOpened: false,
  scanError: { IsShowErrorMessage: false, Message: '' },
};

function setup(state: AdminDetailScaffoldState) {
  const handlers = { onScanQrCodeClicked: vi.fn(), onErrorMessageOk: vi.fn() };
  const renderPopup = vi.fn((popupId: string) => <p>{`scan result ${popupId}`}</p>);
  const view = render(
    <MemoryRouter>
      <AdminDetailScaffold
        id="$b1"
        blockName="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail"
        title="Harvest Gathering"
        menuAction="Auto"
        bottomBar={<nav>bottom bar</nav>}
        state={state}
        rows={
          <AdminDetailRow className="flex-center-vertical margin-top-m" icon="orbit-icon-location">
            Lakeside Hall
          </AdminDetailRow>
        }
        renderPopup={renderPopup}
        {...handlers}
      />
    </MemoryRouter>,
  );
  return { ...view, handlers, renderPopup };
}

const block = (name: string) => document.querySelector(`[data-block="${name}"]`);
const scanButton = () => screen.queryByRole('button', { name: 'Scan QR Code' });

describe('AdminDetailScaffold', () => {
  it('names the block, shows the title and the bottom bar; while fetching only the skeleton', () => {
    setup({ ...FETCHED, isFetchingData: true, isDataFetched: false });
    expect(block('Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail')).not.toBeNull();
    expect(screen.getByText('Harvest Gathering')).toBeInTheDocument();
    expect(screen.getByText('bottom bar')).toBeInTheDocument();
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).not.toBeNull();
    expect(screen.queryByText('Lakeside Hall')).toBeNull();
  });

  it('fetched: the rows in the detail container, the Scan QR Code button and the popup ids', () => {
    const { handlers, renderPopup } = setup(FETCHED);
    const row = screen.getByText('Lakeside Hall');
    expect(row.className).toBe('margin-left-base');
    expect(row.parentElement?.className).toBe('flex-center-vertical margin-top-m');
    expect(row.previousElementSibling?.className).toBe('icon orbit-icon-location fa fa-flag fa-1x');
    expect(row.parentElement?.parentElement?.className).toBe('font-size-0-9em padding-x-m padding-y-m');
    expect(document.getElementById('b1-RootPlaceholder_QRCode')).not.toBeNull();
    expect(document.getElementById('b1-Root_QRCode')?.className).toBe('backwards-compatibility');
    expect(renderPopup).toHaveBeenCalledWith('b1-$b3');
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

  it('an open popup shows what renderPopup gives', () => {
    setup({ ...FETCHED, qrCodePopupOpened: true });
    expect(document.getElementById('b1-Popup_QRCode')?.textContent).toContain('scan result b1-$b3');
  });

  it('not fetched: NoInformation_Orbit; the error popup of an unreadable code with Ok', () => {
    const { handlers } = setup({
      ...FETCHED,
      isDataFetched: false,
      scanError: { IsShowErrorMessage: true, Message: 'Unable to read QR code, please try again.' },
    });
    expect(block('Orbit_Generic_Blocks.NoInformation_Orbit')).not.toBeNull();
    expect(screen.getByText('The Event is no longer available for you.')).toBeInTheDocument();
    expect(screen.getByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    expect(handlers.onErrorMessageOk).toHaveBeenCalledTimes(1);
  });
});
