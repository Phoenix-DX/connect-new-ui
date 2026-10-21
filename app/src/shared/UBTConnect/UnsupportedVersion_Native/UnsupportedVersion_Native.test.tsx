import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnsupportedVersion_Native } from './UnsupportedVersion_Native';

describe('UnsupportedVersion_Native', () => {
  it('renders its wrapper with a not-captured marker', () => {
    const { container } = render(<UnsupportedVersion_Native />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'App_Common.UnsupportedVersion_Native');
    expect(container.querySelector('[data-not-captured]')).not.toBeNull();
  });
});
