import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { QRCodeScanResult, ScanDetailLine, type QRCodeScanResultProps } from './QRCodeScanResult';

/* The frame of the QR code scan result popups, props only. A fictional guest of a harvest gathering. */
const GUEST: QRCodeScanResultProps['scannedUser'] = {
  Member: { FirstName: 'Tomás', Lastname: 'Ferreira' },
  SignedURL: '/mock-images/guest-photo.jpg',
};

function setup(props: Partial<QRCodeScanResultProps> = {}) {
  const onDone = vi.fn();
  const view = render(
    <QRCodeScanResult
      id="b1-$b3"
      blockName="Orbit_Blocks.Popup_QRCodeScan"
      scannedUser={GUEST}
      scanResult={{ Success: true, ErrorMessage: '' }}
      details={<ScanDetailLine value="Lisbon" text="Locality: Lisbon" />}
      onDone={onDone}
      {...props}
    />,
  );
  return { ...view, onDone };
}

describe('QRCodeScanResult', () => {
  it('names the block; the name, the signed photo, the bold details, "Has Checked in" and Done', () => {
    const { container, onDone } = setup();
    expect(container.querySelector('[data-block="Orbit_Blocks.Popup_QRCodeScan"]')).not.toBeNull();
    expect(screen.getByText('Tomás Ferreira')).toBeInTheDocument();
    const photo = container.querySelector('img.orbit-member-photo');
    expect(photo?.getAttribute('src')).toBe('/mock-images/guest-photo.jpg');
    expect(photo?.hasAttribute('data-error-placeholder-src')).toBe(true);
    const details = screen.getByText('Locality: Lisbon').parentElement?.parentElement;
    expect(details?.getAttribute('style')).toContain('font-weight: bold');
    expect(screen.getByText('Has Checked in')).toBeInTheDocument();
    expect(container.querySelector('.fa-check-circle')).not.toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('without both names "Participant"; without a signed URL the placeholder; a failure shows its message', () => {
    const { container } = setup({
      scannedUser: { Member: { FirstName: 'Tomás', Lastname: '' }, SignedURL: '' },
      scanResult: { Success: false, ErrorMessage: 'Guest is not allocated to this event.' },
    });
    expect(screen.getByText('Participant')).toBeInTheDocument();
    const photo = container.querySelector('img.orbit-member-photo');
    expect(photo?.getAttribute('src')).not.toBe('');
    expect(photo?.hasAttribute('data-error-placeholder-src')).toBe(false);
    expect(screen.getByText('Guest is not allocated to this event.')).toBeInTheDocument();
    expect(container.querySelector('.orbit-qrcode-scan-cross-cont .fa-times')).not.toBeNull();
    expect(screen.queryByText('Has Checked in')).toBeNull();
  });
});

describe('ScanDetailLine', () => {
  it('a line with its classes when the value is set, nothing when it is empty', () => {
    const { container } = render(
      <>
        <ScanDetailLine value="Guest" text="Role: Guest" className="bold" textClassName="white-space-nowrap" />
        <ScanDetailLine value="" text="Tag: " />
      </>,
    );
    expect(container.innerHTML).toBe(
      '<div class="bold" data-container=""><span class="white-space-nowrap" data-expression="">Role: Guest</span></div>',
    );
  });
});
