import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { AddressPopup } from './AddressPopup';
import * as stories from './AddressPopup.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('AddressPopup', () => {
  testCapturedVariants(stories, captures);

  it('buttons Maps and Copy (Google Maps only with ShowGoogleMaps); each raises its event', () => {
    const onMaps = vi.fn();
    const onCopy = vi.fn();
    const onGoogle = vi.fn();
    const { rerender } = render(
      <AddressPopup
        inContactPopupData={{ ShowPopup: true, ActionName: 'Open Location' }}
        onEventOpenInMaps={onMaps}
        onEventCopyAddress={onCopy}
        onEventOpenInGoogleMaps={onGoogle}
      />,
    );
    expect(screen.queryByText('Open in Google Maps')).toBeNull();
    fireEvent.click(screen.getByText('Open in Maps'));
    fireEvent.click(screen.getByText('Copy Address'));
    expect(onMaps).toHaveBeenCalledTimes(1);
    expect(onCopy).toHaveBeenCalledTimes(1);
    rerender(
      <AddressPopup inContactPopupData={{ ShowPopup: true }} showGoogleMaps onEventOpenInGoogleMaps={onGoogle} />,
    );
    fireEvent.click(screen.getByText('Open in Google Maps'));
    expect(onGoogle).toHaveBeenCalledTimes(1);
  });
});
