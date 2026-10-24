import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Button } from './Button';
import * as stories from './Button.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Button', () => {
  testCapturedVariants(stories, captures);

  it('raises Event_OnClick only when enabled', () => {
    const onEventOnClick = vi.fn();
    const { rerender } = render(<Button onEventOnClick={onEventOnClick}>Go</Button>);
    fireEvent.click(screen.getByRole('button'));
    rerender(
      <Button onEventOnClick={onEventOnClick} inIsDisabled>
        Go
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onEventOnClick).toHaveBeenCalledTimes(1);
  });
});
