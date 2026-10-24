import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ActionButton } from './ActionButton';
import * as stories from './ActionButton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Button (CW_Common)', () => {
  testCapturedVariants(stories, captures);

  it('raises ButtonOnClick, hides the icon and puts it on the right', () => {
    const onClick = vi.fn();
    const { container } = render(
      <ActionButton
        buttonText="Open"
        iconId="connect-icon-open_new"
        hideIcon
        isIconOnRight
        onButtonOnClick={onClick}
      />,
    );
    expect(container.querySelector('.connect-icon-open_new')).toBeNull();
    expect(container.querySelector('.ubt-columns')).toHaveClass(
      'ubt-columns-reduce-last',
      'flex-direction-row-reverse',
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
