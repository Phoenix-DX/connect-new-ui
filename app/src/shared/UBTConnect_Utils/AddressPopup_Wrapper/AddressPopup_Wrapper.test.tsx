import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { changeWindowLocation, jSUtils_CopyToClipboard } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { AddressPopup_Wrapper } from './AddressPopup_Wrapper';
import * as stories from './AddressPopup_Wrapper.stories';

vi.mock('@/shared/UBTJavaScriptUtils/lib/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/shared/UBTJavaScriptUtils/lib/actions')>()),
  changeWindowLocation: vi.fn(),
  jSUtils_CopyToClipboard: vi.fn(() => Promise.resolve()),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('AddressPopup_Wrapper', () => {
  testCapturedVariants(stories, captures);

  it('click opens "Open Location"; Open in Maps goes to Google Maps with the cleaned, encoded address', () => {
    render(<AddressPopup_Wrapper inAddress={'1 Harbour\nStreet'} />);
    fireEvent.click(screen.getByText('1 Harbour\nStreet', { normalizer: (t) => t }));
    expect(screen.getByText('Open Location')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Open in Maps'));
    expect(changeWindowLocation).toHaveBeenCalledWith('https://maps.google.com/maps?q=1%20Harbour%20Street');
  });

  it('coordinates in use: latitude,longitude; Copy Address copies the address, then closes the popup', async () => {
    render(
      <AddressPopup_Wrapper
        inAddress="Here"
        inCoordinates={{ UseCoordinates: true, Latitude: '1.5', Longitude: '2.5' }}
      />,
    );
    fireEvent.click(screen.getByText('Here'));
    fireEvent.click(screen.getByText('Open in Maps'));
    expect(changeWindowLocation).toHaveBeenCalledWith('https://maps.google.com/maps?q=1.5,2.5');
    fireEvent.click(screen.getByText('Copy Address'));
    expect(jSUtils_CopyToClipboard).toHaveBeenCalledWith('Here');
    await waitFor(() => {
      expect(screen.queryByText('Open Location')).toBeNull();
    });
  });

  it('disabled: Neutral7 text; no icon when IconVisible is False', () => {
    const { container } = render(<AddressPopup_Wrapper inAddress="Here" isEnabled={false} iconVisible={false} />);
    expect(container.querySelector('.text-neutral-7')).not.toBeNull();
    expect(container.querySelector('.connect-icon-location_on_fill')).toBeNull();
  });
});
