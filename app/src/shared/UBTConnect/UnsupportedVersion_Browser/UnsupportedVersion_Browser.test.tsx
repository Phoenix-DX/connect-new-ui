import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnsupportedVersion_Browser } from './UnsupportedVersion_Browser';

describe('UnsupportedVersion_Browser', () => {
  it('renders the browser message in the card without a button (compiled view)', () => {
    const { container } = render(<UnsupportedVersion_Browser />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'App_Common.UnsupportedVersion_Browser');
    expect(container.querySelector('.unsupported-card')).toHaveClass('unsupported-card--webview');
    expect(container.querySelector('.text-neutral-10 [data-expression]')?.textContent).toBe(
      'We have noticed you are using an unsupported browser version.\r\n\r\nWe recommend you upgrade to the latest version.',
    );
    expect(container.querySelector('[data-block="CW_Common.Button"]')).toBeNull();
  });
});
