import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { preventNavigation } from '@/lib/navigationEvent';
import { NavigationDialog } from './NavigationDialog';

/* No captured DOM exists for these blocks: the checks follow the compiled views and controller
   (migration/blocks/sources/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js and
   UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js). The back-navigation queue is the platform
   hook that the test setup connects, as app/ does; the back navigation while shown is tested in app/dialogs.test. */
const navigate = (resume = vi.fn()) => {
  const event = new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume } });
  act(() => {
    window.dispatchEvent(event);
  });
  return event;
};
/* NavigationConfirmationDialog (the plain variant) in the frame of a caller. */
function renderPlain(onNavigation: (event: Event) => void = preventNavigation) {
  return render(
    <div className="connect-dialog-popup connect-dialog-popup--navigation">
      <NavigationDialog
        id="$b1"
        onNavigation={onNavigation}
        header={<span>Header</span>}
        body={<span>Body</span>}
        confirmLabel="Yes"
        dismissLabel="No"
      />
    </div>,
  );
}

describe('NavigationConfirmationDialog (variant plain)', () => {
  it('closed: Root container with the NavigationHandler only, no popup', () => {
    const { container } = renderPlain();
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
    renderPlain(onNavigation);
    const event = navigate();
    expect(onNavigation).toHaveBeenCalledWith(event);
    expect(event.defaultPrevented).toBe(false);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('a navigation already prevented: Navigation not raised', () => {
    const onNavigation = vi.fn();
    renderPlain(onNavigation);
    const event = new CustomEvent('dx-before-navigation', { cancelable: true });
    event.preventDefault();
    act(() => {
      window.dispatchEvent(event);
    });
    expect(onNavigation).not.toHaveBeenCalled();
  });

  it('caller prevents: popup in <body> with the placeholders, portal classes copied, PreventBackNavigation', () => {
    const { container } = renderPlain();
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
    renderPlain();
    const resume = vi.fn();
    navigate(resume);
    fireEvent.click(screen.getByText('Yes'));
    expect(resume).toHaveBeenCalledTimes(1);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
    expect(document.documentElement).not.toHaveClass('popup-disable-scroll');
  });

  it('unmounted, it no longer listens for navigations', () => {
    const onNavigation = vi.fn();
    const { unmount } = renderPlain(onNavigation);
    unmount();
    navigate();
    expect(onNavigation).not.toHaveBeenCalled();
  });

  it('No: closes, does not resume, dispatches dx-navigation-cancelled-by-user', () => {
    renderPlain();
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
});

describe('Dialog_Navigation (variant connect)', () => {
  it('closed: connect-dialog-popup container around NavigationConfirmationDialog', () => {
    const { container } = render(<NavigationDialog variant="connect" id="$b23" />);
    const root = container.firstElementChild;
    expect(root?.getAttribute('data-block')).toBe('App_Common_Blocks_PopupDialogs.Dialog_Navigation');
    expect(root?.id).toBe('$b23');
    const popup = root?.firstElementChild;
    expect(popup?.className).toBe('connect-dialog-popup connect-dialog-popup--navigation');
    expect(popup?.firstElementChild?.getAttribute('data-block')).toBe(
      'ConfirmationDialogs.NavigationConfirmationDialog',
    );
    expect(popup?.firstElementChild?.hasAttribute('id')).toBe(false);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('Event_OnBackNavigation gets the navigation; prevented → header, body and default labels Yes / No', () => {
    const onBack = vi.fn(preventNavigation);
    render(<NavigationDialog variant="connect" onNavigation={onBack} header="Header" body="Body" />);
    const event = navigate();
    expect(onBack).toHaveBeenCalledWith(event);
    const portalParent = document.body.querySelector('.portal-class');
    expect(portalParent?.className).toBe('portal-class connect-dialog-popup connect-dialog-popup--navigation');
    const header = document.body.querySelector('.dx-dialog-header .ubt-custom-container');
    expect(header).toHaveClass('margin-bottom-base', 'text-neutral-10', 'font-semi-bold');
    expect(header?.querySelector(':scope > .text-align-center > div')).toHaveTextContent('Header');
    const body = document.body.querySelector('.dx-dialog-body .ubt-custom-container');
    expect(body).toHaveClass('margin-bottom-m', 'text-neutral-10');
    expect(body).not.toHaveClass('font-semi-bold');
    expect(body?.querySelector(':scope > div')).toHaveTextContent('Body');
    expect(screen.getByText('Yes')).toHaveAttribute('data-expression');
    expect(screen.getByText('Yes').closest('button')).toHaveClass('btn-primary');
    expect(screen.getByText('No').closest('button')?.className).toBe('btn');
  });

  it('ConfirmLabel / DIsmissLabel; Yes resumes the navigation', () => {
    render(
      <NavigationDialog variant="connect" onNavigation={preventNavigation} confirmLabel="Leave" dismissLabel="Stay" />,
    );
    const resume = vi.fn();
    navigate(resume);
    expect(screen.getByText('Stay').closest('button')?.className).toBe('btn');
    fireEvent.click(screen.getByText('Leave'));
    expect(resume).toHaveBeenCalledTimes(1);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('the caller does not prevent: no dialog', () => {
    render(<NavigationDialog variant="connect" onNavigation={() => undefined} />);
    navigate();
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });
});
