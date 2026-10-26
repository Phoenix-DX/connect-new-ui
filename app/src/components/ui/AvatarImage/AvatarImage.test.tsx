import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { AvatarImage } from './AvatarImage';
import * as stories from './AvatarImage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('AvatarImage', () => {
  testCapturedVariants(stories, captures);

  it('renders the initials before the SVG and the icon, and uses In_BorderRadius', () => {
    const { container } = render(
      <AvatarImage
        inBorderRadius="large"
        inAvatarImage={{ FallbackOptions: { Initials: 'AB', SVG: '<svg></svg>' } }}
      />,
    );
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('border-radius-large', 'font-size-base');
    expect(container.querySelector('.ubt-avatar-image__initials')).toHaveTextContent('AB');
    expect(container.querySelector('[data-block="ConnectPatterns.Icon"]')).toBeNull();
  });

  it('renders InlineSVG (without inputs, as compiled) for an SVG fallback', () => {
    const { container } = render(<AvatarImage inAvatarImage={{ FallbackOptions: { SVG: '<svg></svg>' } }} />);
    expect(container.querySelector('[data-block="Utilities.InlineSVG"]')).not.toBeNull();
    expect(container.querySelector('[data-block="ConnectPatterns.Icon"]')).toBeNull();
  });
});
