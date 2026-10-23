import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnsupportedVersionNative } from './UnsupportedVersionNative';

describe('UnsupportedVersion_Native', () => {
  it('renders its wrapper with a not-captured marker', () => {
    const { container } = render(<UnsupportedVersionNative />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'App_Common.UnsupportedVersion_Native');
    expect(container.querySelector('[data-not-captured]')).not.toBeNull();
  });
});
