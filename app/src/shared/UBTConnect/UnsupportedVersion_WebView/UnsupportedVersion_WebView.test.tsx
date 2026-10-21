import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnsupportedVersion_WebView } from './UnsupportedVersion_WebView';

describe('UnsupportedVersion_WebView', () => {
  it('renders its wrapper with a not-captured marker', () => {
    const { container } = render(<UnsupportedVersion_WebView />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'App_Common.UnsupportedVersion_WebView');
    expect(container.querySelector('[data-not-captured]')).not.toBeNull();
  });
});
