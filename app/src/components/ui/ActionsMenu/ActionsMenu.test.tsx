import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ActionsMenu } from './ActionsMenu';
import * as stories from './ActionsMenu.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('ActionsMenu', () => {
  testCapturedVariants(stories, captures);

  it('buttons in the compiled order with the lookup labels and icons; click raises the event', () => {
    const onCall = vi.fn();
    const { container } = render(
      <ActionsMenu
        inActionsMenuOptions={{ HasEmail: true, HasCall: true, HasViewDetails: true, HasUnbookmark: true }}
        onEventClickCall={onCall}
      />,
    );
    expect(container.querySelector('.ubt-actions-menu')).toHaveClass('display-flex', 'justify-content-space-between');
    const labels = [...container.querySelectorAll('[data-block="ConnectPatterns.CircleButton_IconPrimary"]')].map(
      (b) => b.textContent,
    );
    expect(labels).toEqual(['Unmark', 'Call', 'Email', 'View details']);
    expect(container.querySelector('.connect-icon-arrow_outward')).not.toBeNull();
    fireEvent.click(screen.getByText('Call'));
    expect(onCall).toHaveBeenCalledTimes(1);
  });

  it('InShowLabels False: no label text', () => {
    const { container } = render(<ActionsMenu inActionsMenuOptions={{ HasShare: true }} inShowLabels={false} />);
    expect(container.querySelector('[data-block="ConnectPatterns.CircleButton_IconPrimary"]')?.textContent).toBe('');
  });
});
