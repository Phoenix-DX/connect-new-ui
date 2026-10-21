import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FingerprintScanner } from './FingerprintScanner';

describe('FingerprintScanner', () => {
  it('renders its wrapper with the not-captured marker and the icon placeholder', () => {
    const { container } = render(
      <FingerprintScanner id="b1-b4-b1-$b2">
        <span id="icon" />
      </FingerprintScanner>,
    );
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'Fingerprint.FingerprintScanner');
    expect(root?.querySelector('[data-not-captured]')).not.toBeNull();
    expect(root?.querySelector('#icon')).not.toBeNull();
  });
});
