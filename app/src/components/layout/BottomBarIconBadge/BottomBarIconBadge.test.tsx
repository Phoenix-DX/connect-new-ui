import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { BottomBarIconBadge } from './BottomBarIconBadge';
import * as stories from './BottomBarIconBadge.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('App_IconBadge', () => {
  testCapturedVariants(stories, captures);

  it('BadgeNumber 0: the icon alone, its click triggers OnClick (not captured)', () => {
    const onOnClick = vi.fn();
    const { container } = render(<BottomBarIconBadge iconId="connect-icon-list_alt" onOnClick={onOnClick} />);
    expect(container.querySelector('[data-block="OutSystemsUIOverrides.IconBadge"]')).toBeNull();
    const icon = container.querySelector('.connect-icon-list_alt');
    if (!icon) throw new Error('no icon');
    fireEvent.click(icon);
    expect(onOnClick).toHaveBeenCalledTimes(1);
  });

  it('a badge number: the link triggers OnClick; -1 shows the skeleton', () => {
    const onOnClick = vi.fn();
    const { container, rerender } = render(
      <MemoryRouter>
        <BottomBarIconBadge badgeNumber="4" onOnClick={onOnClick} />
      </MemoryRouter>,
    );
    const link = container.querySelector('a');
    if (!link) throw new Error('no link');
    fireEvent.click(link);
    expect(onOnClick).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    rerender(
      <MemoryRouter>
        <BottomBarIconBadge badgeNumber="-1" />
      </MemoryRouter>,
    );
    expect(container.querySelector('.ubt-skeleton-section')).not.toBeNull();
  });
});
