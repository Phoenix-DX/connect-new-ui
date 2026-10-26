import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as osuiActions from '@/components/ui/lib/actions';
import { testCapturedVariants } from '@/test/capturedVariants';
import { FilterSheetIcon } from './FilterSheetIcon';
import * as stories from './FilterSheetIcon.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FilterSheet_Icon', () => {
  testCapturedVariants(stories, captures);

  it('shows the tune icon as captured and the red dot when filters are applied', () => {
    const { container, rerender } = render(<FilterSheetIcon isLoaded />);
    expect(container.querySelector('.connect-icon-tune')).toHaveClass('ubt-icon', 'text-neutral-0', 'icon-base');
    expect(container.querySelector('.header-filter-enabled')).toBeNull();
    rerender(<FilterSheetIcon isLoaded haveFiltersApplied />);
    expect(container.querySelector('.header-filter-enabled')).toHaveClass(
      'connect-icon-error_fill',
      'text-red',
      'icon-non-standard-14',
    );
  });

  it('opens the bottom sheet only when loaded', () => {
    const open = vi.spyOn(osuiActions, 'bottomSheetOpen').mockImplementation(() => undefined);
    const { container, rerender } = render(<FilterSheetIcon bottomSheetId="sheet" />);
    fireEvent.click(container.querySelector('.connect-icon-tune') as HTMLElement);
    expect(open).not.toHaveBeenCalled();
    rerender(<FilterSheetIcon bottomSheetId="sheet" isLoaded />);
    fireEvent.click(container.querySelector('.connect-icon-tune') as HTMLElement);
    expect(open).toHaveBeenCalledWith('sheet');
    open.mockRestore();
  });

  it('opens the upgrade popup of the caller instead of the sheet when ShowSubscriptionOnClick', () => {
    const open = vi.spyOn(osuiActions, 'bottomSheetOpen').mockImplementation(() => undefined);
    const onShowUpgradePopUp = vi.fn();
    const { container } = render(
      <FilterSheetIcon
        bottomSheetId="sheet"
        isLoaded
        showSubscriptionOnClick
        onShowUpgradePopUp={onShowUpgradePopUp}
      />,
    );
    fireEvent.click(container.querySelector('.connect-icon-tune') as HTMLElement);
    expect(onShowUpgradePopUp).toHaveBeenCalledTimes(1);
    expect(open).not.toHaveBeenCalled();
    open.mockRestore();
  });
});
