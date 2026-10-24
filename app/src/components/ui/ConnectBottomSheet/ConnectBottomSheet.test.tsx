import { act, fireEvent, render as renderUi, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ConnectBottomSheet } from './ConnectBottomSheet';
import * as stories from './ConnectBottomSheet.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const find = (selector: string) => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) throw new Error(`no ${selector}`);
  return element;
};
/* OSLink (the top-bar links) navigates through the router. */
const render = (ui: ReactElement) => renderUi(ui, { wrapper: MemoryRouter });
const isOpen = () => find('.osui-bottom-sheet').classList.contains('osui-bottom-sheet--is-open');

describe('BottomSheet', () => {
  testCapturedVariants(stories, captures);

  it('opens by the Initialized id; the close link closes it and raises OnClose and OnToggle', () => {
    const onOnToggle = vi.fn();
    const onOnClose = vi.fn();
    let sheetId = '';
    render(
      <ConnectBottomSheet
        title="Sheet"
        onOnToggle={onOnToggle}
        onOnClose={onOnClose}
        onInitialized={(id) => {
          sheetId = id;
        }}
        content={<span>body</span>}
      />,
    );
    expect(find('.osui-bottom-sheet__header').dataset.dragToOpenBound).toBe('true');
    expect(document.querySelector('a.ubt-bottom-sheet--close-icon')).toBeNull();
    act(() => {
      bottomSheetOpen(sheetId);
    });
    expect(isOpen()).toBe(true);
    expect(onOnToggle).toHaveBeenLastCalledWith(true);
    const close = find('a.ubt-bottom-sheet--close-icon');
    expect(close.querySelector('.connect-icon-close')).toHaveClass('text-neutral-9', 'icon-medium');
    fireEvent.click(close);
    expect(isOpen()).toBe(false);
    expect(onOnClose).toHaveBeenCalledTimes(1);
    expect(onOnToggle).toHaveBeenLastCalledWith(false);
    expect(screen.getByText('body')).toBeInTheDocument();
  });

  it('ShowBackButton: the left link shows the back arrow and raises OnBack', () => {
    const onOnBack = vi.fn();
    render(<ConnectBottomSheet showBackButton onOnBack={onOnBack} />);
    const back = find('.ubt-columns--left a');
    expect(back.querySelector('.connect-icon-arrow_left_alt')).toHaveClass('text-neutral-9');
    fireEvent.click(back);
    expect(onOnBack).toHaveBeenCalledTimes(1);
  });

  it('CloseOnClickOutsite: an overlay click closes the open sheet', () => {
    let sheetId = '';
    render(
      <ConnectBottomSheet
        closeOnClickOutsite
        onInitialized={(id) => {
          sheetId = id;
        }}
      />,
    );
    act(() => {
      bottomSheetOpen(sheetId);
    });
    fireEvent.click(find('.osui-bottom-sheet-overlay'));
    expect(isOpen()).toBe(false);
  });

  it('IsHideContentWhenClosed: the content and footer go away when the sheet closes', () => {
    let sheetId = '';
    render(
      <ConnectBottomSheet
        isHideContentWhenClosed
        onInitialized={(id) => {
          sheetId = id;
        }}
        content={<span>body</span>}
      />,
    );
    act(() => {
      bottomSheetOpen(sheetId);
    });
    fireEvent.keyDown(find('.osui-bottom-sheet'), { key: 'Escape' });
    expect(screen.queryByText('body')).toBeNull();
    expect(document.querySelector('.ubt-bottom-sheet--footer')).toBeNull();
  });

  it('ShowHeader False, handler preview, transparent overlay and the handler offset', () => {
    render(
      <ConnectBottomSheet showHeader={false} showHandlerPreview isTransparentOverlay handlerPreviewOffset="24px" />,
    );
    expect(document.querySelector('.ubt-columns')).toBeNull();
    expect(find('.osui-bottom-sheet__header').dataset.dragToOpenBound).toBeUndefined();
    expect(find('.osui-bottom-sheet')).toHaveClass(
      'ubt-bottom-sheet',
      'ubt-bottom-sheet--handler-preview',
      'ubt-bottom-sheet--transparent-overlay',
    );
    expect(
      find('[data-block="Interaction.BottomSheet"]').style.getPropertyValue(
        '--ubt-bottomsheet-handler-preview--offset',
      ),
    ).toBe('24px');
  });
});
