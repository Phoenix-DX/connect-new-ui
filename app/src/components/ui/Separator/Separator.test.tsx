import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders the horizontal line with the defaults (compiled view)', () => {
    const { container } = render(<Separator extendedClass="extra" />);
    const block = container.querySelector('[data-block="Utilities.Separator"]');
    expect(block?.firstElementChild).toHaveClass('padding-top-base', 'padding-bottom-base');
    expect(block?.firstElementChild?.firstElementChild).toHaveClass(
      'separator',
      'separator-horizontal',
      'background-neutral-4',
      'extra',
    );
  });

  it('renders the vertical line', () => {
    const { container } = render(<Separator isVertical space="s" color="primary" />);
    const wrapper = container.querySelector('[data-block="Utilities.Separator"] > div');
    expect(wrapper).toHaveClass('separator-wrapper', 'full-height', 'padding-right-s', 'padding-left-s');
    expect(wrapper?.firstElementChild).toHaveClass('separator', 'separator-vertical', 'background-primary');
  });
});
