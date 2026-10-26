import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { NetworkWarning } from './NetworkWarning';
import * as stories from './NetworkWarning.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NetworkWarning', () => {
  testCapturedVariants(stories, captures);

  it('Try again raises the TryAgain event', () => {
    const onTryAgain = vi.fn();
    render(<NetworkWarning onTryAgain={onTryAgain} />);
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(onTryAgain).toHaveBeenCalledTimes(1);
  });

  it('a click without a handler does nothing', () => {
    render(<NetworkWarning />);
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });

  it('the Animate gets the id <scope>-$b1 (capture v1: b1-b9-b5-$b1)', () => {
    const { container } = render(<NetworkWarning id="b1-b9-$b5" />);
    expect(container.querySelector('[data-block="Interaction.Animate"]')).toHaveAttribute('id', 'b1-b9-b5-$b1');
  });

  it('without an id the Animate has no id', () => {
    const { container } = render(<NetworkWarning />);
    expect(container.querySelector('[data-block="Interaction.Animate"]')).not.toHaveAttribute('id');
  });
});
