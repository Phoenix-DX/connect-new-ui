import { act, fireEvent, render as renderUi } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter, type Location } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { bottomSheetOpen } from '../../osui/lib/actions';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Directory_LegendBottomSheet } from './Directory_LegendBottomSheet';
import * as stories from './Directory_LegendBottomSheet.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* OSLink (the top-bar links) navigates through the router. */
const render = (ui: ReactElement) => renderUi(ui, { wrapper: MemoryRouter });
const location: Location = { pathname: '/UBTConnect/CountryDetails', search: '', hash: '', state: null, key: 'k' };
const sheet = () => document.querySelector('.osui-bottom-sheet');
const prevented = () => document.querySelector('[data-block="NavigationHandler.PreventBackNavigation"]');

describe('Directory_LegendBottomSheet', () => {
  afterEach(resetBackQueue);
  testCapturedVariants(stories, captures);

  it('SheetInitialized gives the sheet id; while open, back navigation closes the sheet', () => {
    const onSheetInitialized = vi.fn();
    render(<Directory_LegendBottomSheet onSheetInitialized={onSheetInitialized} />);
    expect(onSheetInitialized).toHaveBeenCalledTimes(1);
    const sheetId = String(onSheetInitialized.mock.calls[0]?.[0]);
    expect(prevented()).toBeNull();
    act(() => {
      bottomSheetOpen(sheetId);
    });
    expect(sheet()).toHaveClass('osui-bottom-sheet--is-open');
    expect(prevented()).not.toBeNull();
    act(() => {
      expect(runBackHandlers(createBackEvent(location, false, () => undefined))).toBe(true);
    });
    expect(sheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(prevented()).toBeNull();
  });

  it('the close link closes the sheet and stops preventing back navigation', () => {
    let sheetId = '';
    render(
      <Directory_LegendBottomSheet
        onSheetInitialized={(id) => {
          sheetId = id;
        }}
      />,
    );
    act(() => {
      bottomSheetOpen(sheetId);
    });
    const close = document.querySelector('a.ubt-bottom-sheet--close-icon');
    if (!close) throw new Error('no close link');
    fireEvent.click(close);
    expect(sheet()).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(prevented()).toBeNull();
  });
});
