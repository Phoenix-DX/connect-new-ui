import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { IconBadge } from './IconBadge';
import * as stories from './IconBadge.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('IconBadge', () => {
  testCapturedVariants(stories, captures);

  it('passes Number, MaxNumber, Color and IsLight to the badge, ExtendedClass to its container', () => {
    const { container } = render(<IconBadge number="25" maxNumber={20} color="red" isLight extendedClass="extra" />);
    expect(container.querySelector('.icon-badge')).toHaveClass('extra');
    expect(container.querySelector('.badge')).toHaveClass('background-red-lightest', 'border-radius-rounded');
    expect(container.querySelector('.badge')).toHaveTextContent('20+');
  });
});
