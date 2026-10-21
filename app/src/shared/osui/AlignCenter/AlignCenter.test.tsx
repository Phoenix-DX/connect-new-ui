import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AlignCenter } from './AlignCenter';

describe('AlignCenter', () => {
  it('builds the class of the compiled view (no capture)', () => {
    const { container, rerender } = render(<AlignCenter />);
    const content = () => container.querySelector('[data-block="Utilities.AlignCenter"] > div') as HTMLElement;
    expect(content().className).toBe('vertical-align flex-direction-row');
    rerender(<AlignCenter isHorizontal={false} extendedClass="extra" />);
    expect(content().className).toBe('vertical-align flex-direction-column extra');
  });
});
