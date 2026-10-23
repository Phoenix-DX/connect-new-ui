import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinUnlockMobile } from './PinUnlockMobile';
import * as stories from './PinUnlockMobile.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('PinUnlock_MobileWrapper', () => {
  testCapturedVariants(stories, captures);

  it('never shows the fingerprint scanner on the web, even with In_HideFingerprint false (U13)', () => {
    const { container } = render(
      <MemoryRouter>
        <PinUnlockMobile inPinLength={4} isKeypadVisible placeholderFingerprintIcon={<span id="fp" />} />
      </MemoryRouter>,
    );
    expect(container.querySelector('.pincode-unlock')).not.toBeNull();
    expect(container.querySelector('[data-block="Fingerprint.FingerprintScanner"]')).toBeNull();
    expect(container.querySelector('#fp')).toBeNull();
  });
});
