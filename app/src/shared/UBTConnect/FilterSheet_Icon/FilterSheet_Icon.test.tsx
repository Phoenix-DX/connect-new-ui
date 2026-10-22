import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as osuiActions from '@/shared/osui/lib/actions';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { FilterSheet_Icon } from './FilterSheet_Icon';
import * as stories from './FilterSheet_Icon.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FilterSheet_Icon', () => {
  testCapturedVariants(stories, captures);

  it('shows the tune icon as captured and the red dot when filters are applied', () => {
    const { container, rerender } = render(<FilterSheet_Icon isLoaded />);
    expect(container.querySelector('.connect-icon-tune')).toHaveClass('ubt-icon', 'text-neutral-0', 'icon-base');
    expect(container.querySelector('.header-filter-enabled')).toBeNull();
    rerender(<FilterSheet_Icon isLoaded haveFiltersApplied />);
    expect(container.querySelector('.header-filter-enabled')).toHaveClass(
      'connect-icon-error_fill',
      'text-red',
      'icon-non-standard-14',
    );
  });

  it('opens the bottom sheet only when loaded', () => {
    const open = vi.spyOn(osuiActions, 'bottomSheetOpen').mockImplementation(() => undefined);
    const { container, rerender } = render(<FilterSheet_Icon bottomSheetId="sheet" />);
    fireEvent.click(container.querySelector('.connect-icon-tune') as HTMLElement);
    expect(open).not.toHaveBeenCalled();
    rerender(<FilterSheet_Icon bottomSheetId="sheet" isLoaded />);
    fireEvent.click(container.querySelector('.connect-icon-tune') as HTMLElement);
    expect(open).toHaveBeenCalledWith('sheet');
    open.mockRestore();
  });
});
