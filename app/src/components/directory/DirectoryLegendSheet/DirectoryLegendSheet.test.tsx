import { act, fireEvent, render as renderUi } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { DirectoryLegendSheet, type PreventBackNavigationSlotProps } from './DirectoryLegendSheet';
import * as stories from './DirectoryLegendSheet.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* OSLink (the top-bar links) navigates through the router. */
const render = (ui: ReactElement) => renderUi(ui, { wrapper: MemoryRouter });
const sheet = () => document.querySelector('.osui-bottom-sheet');
const prevented = () => document.querySelector('[data-prevent]');
/** A stand-in for the PreventBackNavigation slot: its button raises BackNavigationPrevented. The page test of
    CountryList runs the real block with the back queue. */
const PreventBackNavigationStandIn = vi.fn(({ onBackNavigationPrevented }: PreventBackNavigationSlotProps) => (
  <button type="button" data-prevent="" onClick={onBackNavigationPrevented}>
    back
  </button>
));

describe('Directory_LegendBottomSheet', () => {
  testCapturedVariants(stories, captures);

  it('SheetInitialized gives the sheet id; while open, a prevented back navigation closes the sheet', () => {
    PreventBackNavigationStandIn.mockClear();
    const onSheetInitialized = vi.fn();
    render(
      <DirectoryLegendSheet
        onSheetInitialized={onSheetInitialized}
        preventBackNavigation={PreventBackNavigationStandIn}
      />,
    );
    expect(onSheetInitialized).toHaveBeenCalledTimes(1);
    const sheetId = String(onSheetInitialized.mock.calls[0]?.[0]);
    expect(prevented()).toBeNull();
    expect(PreventBackNavigationStandIn).not.toHaveBeenCalled();
    act(() => {
      bottomSheetOpen(sheetId);
    });
    expect(sheet()).toHaveClass('osui-bottom-sheet--is-open');
    const slot = prevented();
    if (!slot) throw new Error('no PreventBackNavigation slot');
    fireEvent.click(slot);
    expect(sheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(prevented()).toBeNull();
  });

  it('the close link closes the sheet and stops preventing back navigation', () => {
    let sheetId = '';
    render(
      <DirectoryLegendSheet
        onSheetInitialized={(id) => {
          sheetId = id;
        }}
        preventBackNavigation={PreventBackNavigationStandIn}
      />,
    );
    act(() => {
      bottomSheetOpen(sheetId);
    });
    expect(prevented()).not.toBeNull();
    const close = document.querySelector('a.ubt-bottom-sheet--close-icon');
    if (!close) throw new Error('no close link');
    fireEvent.click(close);
    expect(sheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(prevented()).toBeNull();
  });

  it('without the slot, the open sheet renders no PreventBackNavigation', () => {
    let sheetId = '';
    const { container } = render(
      <DirectoryLegendSheet
        onSheetInitialized={(id) => {
          sheetId = id;
        }}
      />,
    );
    const blockChildren = () => container.firstElementChild?.children.length;
    const closedCount = blockChildren();
    act(() => {
      bottomSheetOpen(sheetId);
    });
    expect(sheet()).toHaveClass('osui-bottom-sheet--is-open');
    expect(blockChildren()).toBe(closedCount);
  });
});
