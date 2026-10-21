import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Badge } from './Badge';
import * as stories from './Badge.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Badge', () => {
  testCapturedVariants(stories, captures);

  it('shows the number up to MaxNumber, then MaxNumber + "+"', () => {
    const { rerender } = render(<Badge number="9" />);
    expect(screen.getByText('9')).toBeInTheDocument();
    rerender(<Badge number="10" />);
    expect(screen.getByText('9+')).toBeInTheDocument();
    rerender(<Badge number="120" maxNumber={99} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('IsLight: lightest background and darker text of the colour (not captured)', () => {
    const { container } = render(<Badge number="1" color="red" isLight extendedClass="extra" />);
    expect(container.querySelector('.badge')).toHaveClass('background-red-lightest', 'text-red-darker', 'extra');
    expect(container.querySelector('.badge')).not.toHaveClass('background-red');
  });
});
