import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { GenerateQrCodeView, type GenerateQrCodeViewProps } from './GenerateQrCodeView';

/* The view of ScreenBlock_GenerateQRCode with props only. Fictional pass of the mock world: event 7301, member
   990001. */
const PASS: GenerateQrCodeViewProps['pass'] = {
  GuestRole: 'Host',
  QrCodeImage: 'UBTCONNECT-ORBIT|EVENT:7301|MEMBER:990001|PASS:H-0417',
  Seats: [
    { MilestoneName: 'Conference Meeting', SeatAllocation: '12' },
    { MilestoneName: 'Closing Meeting', SeatAllocation: '14' },
  ],
  Tag: 'H-0417',
};
const PROPS: GenerateQrCodeViewProps = {
  id: '$b1',
  eventName: 'Rosario Conference',
  isFetchingData: false,
  hasPass: true,
  userName: 'Matías Vitale',
  userLocation: 'Rosario, Argentina',
  userSignedURL: '/mock-images/placeholder-square.svg',
  pass: PASS,
  qrCodeImageURL: 'blob:qr-code',
  onContactHelpdesk: () => undefined,
};

const renderView = (props: Partial<GenerateQrCodeViewProps> = {}) =>
  render(
    <MemoryRouter>
      <GenerateQrCodeView {...PROPS} {...props} />
    </MemoryRouter>,
  );
const footer = () => document.querySelector('.contact-helpdesk-footer');
const memberCard = () => document.querySelector('.orbit-qrcode-member-cont');
const skeleton = () => document.getElementById('b1-$b4');
const noInformation = () => document.getElementById('b1-$b3');

describe('GenerateQrCodeView', () => {
  it('shows the Orbit layout with the event name, the back icon and the empty placeholders', () => {
    const { container } = renderView();
    const block = container.querySelector('[data-block="Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode"]');
    expect(block?.id).toBe('$b1');
    expect(container.textContent).toContain('Rosario Conference');
    expect(document.getElementById('b1-$b2')?.querySelector('.app-menu-icon')).not.toBeNull();
    expect(document.getElementById('b1-Menu')?.childElementCount).toBe(0);
    expect(document.getElementById('b1-CommonUI_Elements')?.childElementCount).toBe(0);
  });

  it('shows the member card with the role, the seat rows, the tag and the QR image', () => {
    renderView();
    const card = memberCard();
    expect(card?.querySelector('.orbit-member-photo')?.getAttribute('src')).toBe('/mock-images/placeholder-square.svg');
    expect(card?.textContent).toContain('Matías Vitale');
    expect(card?.textContent).toContain('Rosario, Argentina');
    expect(card?.textContent).toContain('Host');
    expect(card?.querySelector('.display-flex')?.textContent).toBe('Row: 12 & 14');
    expect(card?.textContent).toContain('GMP Tag: H-0417');
    expect(card?.textContent).toContain('Check into Event');
    expect(card?.querySelector('.orbit-qrcode-code')?.getAttribute('src')).toBe('blob:qr-code');
    expect(skeleton()).toBeNull();
    expect(noInformation()).toBeNull();
    expect(footer()).not.toBeNull();
  });

  it('leaves out an empty role, the seat row, an empty tag and the QR image; an empty photo URL gives src=""', () => {
    renderView({ userSignedURL: '', pass: { ...PASS, GuestRole: '', Seats: [], Tag: '' }, qrCodeImageURL: '' });
    const card = memberCard();
    expect(card?.querySelector('.orbit-member-photo')?.getAttribute('src')).toBe('');
    expect(card?.textContent).not.toContain('Row:');
    expect(card?.textContent).not.toContain('GMP Tag');
    expect(card?.textContent).not.toContain('Check into Event');
    expect(card?.querySelectorAll('.white-space-nowrap')).toHaveLength(0);
  });

  it('the photo follows a URL that becomes empty and back: src="" for the empty URL', () => {
    const view = renderView();
    const photo = () => memberCard()?.querySelector('.orbit-member-photo');
    view.rerender(
      <MemoryRouter>
        <GenerateQrCodeView {...PROPS} userSignedURL="" />
      </MemoryRouter>,
    );
    expect(photo()?.getAttribute('src')).toBe('');
    view.rerender(
      <MemoryRouter>
        <GenerateQrCodeView {...PROPS} />
      </MemoryRouter>,
    );
    expect(photo()?.getAttribute('src')).toBe('/mock-images/placeholder-square.svg');
  });

  it('shows the MemberQRCode skeleton and no footer while fetching', () => {
    renderView({ isFetchingData: true, hasPass: false });
    expect(skeleton()).not.toBeNull();
    expect(memberCard()).toBeNull();
    expect(noInformation()).toBeNull();
    expect(footer()).toBeNull();
  });

  it('shows the NoInformation message without a pass', () => {
    renderView({ hasPass: false });
    expect(noInformation()?.textContent).toBe(
      "Unfortunately the QR Code couldn't be generated. Please try again later.",
    );
    expect(memberCard()).toBeNull();
    expect(footer()).not.toBeNull();
  });

  it('calls onContactHelpdesk on a footer click', () => {
    const onContactHelpdesk = vi.fn();
    renderView({ onContactHelpdesk });
    fireEvent.click(footer() as Element);
    expect(onContactHelpdesk).toHaveBeenCalledTimes(1);
  });
});
