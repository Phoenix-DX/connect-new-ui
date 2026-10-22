import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '../../test/capturedVariants';
import { PinUnlock_MobileWrapper } from './PinUnlock_MobileWrapper';
import * as stories from './PinUnlock_MobileWrapper.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('PinUnlock_MobileWrapper', () => {
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
  });
  testCapturedVariants(stories, captures);

  it('never shows the fingerprint scanner on the web, even with In_HideFingerprint false (U13)', () => {
    setSignedInUser(MOCK_USER_ID);
    const { container } = render(
      <MemoryRouter>
        <PinUnlock_MobileWrapper inPinLength={4} inForceVisible placeholderFingerprintIcon={<span id="fp" />} />
      </MemoryRouter>,
    );
    expect(container.querySelector('.pincode-unlock')).not.toBeNull();
    expect(container.querySelector('[data-block="Fingerprint.FingerprintScanner"]')).toBeNull();
    expect(container.querySelector('#fp')).toBeNull();
  });
});
