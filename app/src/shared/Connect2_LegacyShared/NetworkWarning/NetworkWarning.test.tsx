import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
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
});
