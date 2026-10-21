import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { preventNavigation } from '../../NavigationHandler/lib/actions';
import { Dialog_Navigation } from './Dialog_Navigation';

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js:141-330). */
const navigate = (resume = vi.fn()) => {
  const event = new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume } });
  act(() => {
    window.dispatchEvent(event);
  });
  return event;
};

describe('Dialog_Navigation', () => {
  it('closed: connect-dialog-popup container around NavigationConfirmationDialog', () => {
    const { container } = render(<Dialog_Navigation id="$b23" />);
    const root = container.firstElementChild;
    expect(root?.getAttribute('data-block')).toBe('App_Common_Blocks_PopupDialogs.Dialog_Navigation');
    const popup = root?.firstElementChild;
    expect(popup?.className).toBe('connect-dialog-popup connect-dialog-popup--navigation');
    expect(popup?.firstElementChild?.getAttribute('data-block')).toBe(
      'ConfirmationDialogs.NavigationConfirmationDialog',
    );
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('Event_OnBackNavigation gets the navigation; prevented → header, body and default labels Yes / No', () => {
    const onBack = vi.fn(preventNavigation);
    render(<Dialog_Navigation onEventOnBackNavigation={onBack} placeholderHeader="Header" placeholderBody="Body" />);
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
    render(<Dialog_Navigation onEventOnBackNavigation={preventNavigation} confirmLabel="Leave" dIsmissLabel="Stay" />);
    const resume = vi.fn();
    navigate(resume);
    expect(screen.getByText('Stay').closest('button')?.className).toBe('btn');
    fireEvent.click(screen.getByText('Leave'));
    expect(resume).toHaveBeenCalledTimes(1);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });

  it('the caller does not prevent: no dialog', () => {
    render(<Dialog_Navigation onEventOnBackNavigation={() => undefined} />);
    navigate();
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });
});
