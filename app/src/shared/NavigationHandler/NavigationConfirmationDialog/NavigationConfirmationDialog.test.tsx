import { act, fireEvent, render, screen } from '@testing-library/react';
import type { Location } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { preventNavigation } from '@/shared/NavigationHandler/lib/actions';
import { NavigationConfirmationDialog } from './NavigationConfirmationDialog';

/* No captured DOM exists for this block: the checks follow the compiled view and controller
   (migration/blocks/sources/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js:119-613). */
const navigate = (resume = vi.fn()) => {
  const event = new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume } });
  act(() => {
    window.dispatchEvent(event);
  });
  return event;
};
const location: Location = { pathname: '/UBTConnect/Profile', search: '', hash: '', state: null, key: 'k' };

function renderDialog(onNavigation: (event: Event) => void = preventNavigation) {
  return render(
    <div className="connect-dialog-popup connect-dialog-popup--navigation">
      <NavigationConfirmationDialog
        id="$b1"
        onNavigation={onNavigation}
        dialogHeader={<span>Header</span>}
        dialogBody={<span>Body</span>}
        buttonLabelConfirm="Yes"
        buttonLabelDismiss="No"
      />
    </div>,
  );
}

describe('NavigationConfirmationDialog', () => {
  afterEach(resetBackQueue);

  it('closed: Root container with the NavigationHandler only, no popup', () => {
    const { container } = renderDialog();
    const root = container.querySelector('[data-block="ConfirmationDialogs.NavigationConfirmationDialog"]');
    expect(root?.id).toBe('$b1');
    const dialogRoot = root?.firstElementChild;
    expect(dialogRoot?.className).toBe('dx-confirmation-dialog');
    expect([...(dialogRoot?.children ?? [])].map((c) => c.getAttribute('data-block'))).toEqual([
      'NavigationHandler.NavigationHandler',
    ]);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('a navigation the caller lets through: Navigation raised, no dialog', () => {
    const onNavigation = vi.fn();
    renderDialog(onNavigation);
    const event = navigate();
    expect(onNavigation).toHaveBeenCalledWith(event);
    expect(event.defaultPrevented).toBe(false);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('a navigation already prevented: Navigation not raised', () => {
    const onNavigation = vi.fn();
    renderDialog(onNavigation);
    const event = new CustomEvent('dx-before-navigation', { cancelable: true });
    event.preventDefault();
    act(() => {
      window.dispatchEvent(event);
    });
    expect(onNavigation).not.toHaveBeenCalled();
  });

  it('caller prevents: popup in <body> with the placeholders, portal classes copied, PreventBackNavigation', () => {
    const { container } = renderDialog();
    navigate();
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog?.className).toBe('popup-dialog popup-dialog');
    const portalRoot = dialog?.parentElement?.parentElement;
    expect(portalRoot?.className).toBe('dx-confirmation-dialog');
    expect(portalRoot?.parentElement?.className).toBe(
      'portal-class connect-dialog-popup connect-dialog-popup--navigation',
    );
    expect(portalRoot?.parentElement).toHaveStyle({ display: 'contents' });
    const content = dialog?.querySelector('.popup-content > div');
    expect([...(content?.children ?? [])].map((c) => c.className)).toEqual([
      'dx-dialog-header',
      'dx-dialog-body',
      'dx-dialog-footer',
    ]);
    expect(content?.querySelector('.dx-dialog-header')).toHaveTextContent('Header');
    expect(content?.querySelector('.dx-dialog-body')).toHaveTextContent('Body');
    expect(screen.getByText('Yes').closest('button')).toHaveClass('btn', 'btn-primary');
    expect(screen.getByText('No').closest('button')?.className).toBe('btn');
    expect(document.documentElement).toHaveClass('popup-disable-scroll');
    const blocks = container.querySelectorAll('.dx-confirmation-dialog > [data-block]');
    expect([...blocks].map((b) => b.getAttribute('data-block'))).toEqual([
      'NavigationHandler.PreventBackNavigation',
      'NavigationHandler.NavigationHandler',
    ]);
  });

  it('Yes: closes and resumes the kept navigation', () => {
    renderDialog();
    const resume = vi.fn();
    navigate(resume);
    fireEvent.click(screen.getByText('Yes'));
    expect(resume).toHaveBeenCalledTimes(1);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
    expect(document.documentElement).not.toHaveClass('popup-disable-scroll');
  });

  it('No: closes, does not resume, dispatches dx-navigation-cancelled-by-user', () => {
    renderDialog();
    const resume = vi.fn();
    const cancelled = vi.fn();
    window.addEventListener('dx-navigation-cancelled-by-user', cancelled);
    navigate(resume);
    fireEvent.click(screen.getByText('No'));
    window.removeEventListener('dx-navigation-cancelled-by-user', cancelled);
    expect(cancelled).toHaveBeenCalledTimes(1);
    expect(resume).not.toHaveBeenCalled();
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('back navigation while shown: prevented, then No', () => {
    renderDialog();
    const resume = vi.fn();
    navigate(resume);
    let prevented = false;
    act(() => {
      prevented = runBackHandlers(createBackEvent(location, false, () => undefined));
    });
    expect(prevented).toBe(true);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
    expect(resume).not.toHaveBeenCalled();
  });
});
