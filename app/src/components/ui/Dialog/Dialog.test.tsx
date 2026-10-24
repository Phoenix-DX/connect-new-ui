import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Dialog, type DialogProps } from './Dialog';

/* The shared markup of the confirmation dialogs, from props: the block > Root > children, and the popup in a <body>
   portal while open (the OSUI popup markup captured on HouseholdDetails; CopyClassesAcrossPortal). */
function renderDialog(props: Partial<DialogProps> = {}) {
  const onConfirm = vi.fn();
  const onDismiss = vi.fn();
  const view = render(
    <div className="my-wrapper">
      <Dialog
        blockName="ConfirmationDialogs.ActionConfirmationDialog"
        blockId="b9-PopUp"
        idPrefix="b9-b1"
        open={false}
        header="Title"
        body="Question?"
        confirmLabel="Yes"
        dismissLabel="No"
        onConfirm={onConfirm}
        onDismiss={onDismiss}
        {...props}
      >
        <div data-testid="hub" />
      </Dialog>
    </div>,
  );
  return { ...view, onConfirm, onDismiss };
}

describe('Dialog', () => {
  it('closed: the block > Root (with its id) > the children, no popup', () => {
    const { container } = renderDialog();
    const block = container.querySelector('#b9-PopUp');
    expect(block).toHaveAttribute('data-block', 'ConfirmationDialogs.ActionConfirmationDialog');
    expect(block?.innerHTML).toBe(
      '<div class="dx-confirmation-dialog" data-container="" id="b9-b1-Root"><div data-testid="hub"></div></div>',
    );
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.documentElement).not.toHaveClass('popup-disable-scroll');
  });

  it('open: the popup in a <body> portal with the ids, the classes copied across the portal and the buttons', () => {
    const { onConfirm, onDismiss } = renderDialog({ open: true });
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('id', 'b9-b1-Popup');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog.className).toBe('popup-dialog popup-dialog');
    expect(dialog.parentElement?.className).toBe('popup-backdrop');
    const portalRoot = dialog.parentElement?.parentElement;
    expect(portalRoot?.className).toBe('dx-confirmation-dialog');
    expect(portalRoot?.parentElement?.className).toBe('portal-class my-wrapper');
    expect(portalRoot?.parentElement).toHaveStyle({ display: 'contents' });
    expect(portalRoot?.parentElement?.parentElement).toBe(document.body);
    expect(document.getElementById('b9-b1-DialogHeader')).toHaveTextContent('Title');
    expect(document.getElementById('b9-b1-DialogBody')).toHaveTextContent('Question?');
    expect(document.getElementById('b9-b1-ButtonLabel_Confirm')?.parentElement?.className).toBe('btn btn-primary');
    expect(document.getElementById('b9-b1-ButtonLabel_Dismiss')?.parentElement?.className).toBe('btn');
    expect(document.documentElement).toHaveClass('popup-disable-scroll');
    fireEvent.click(screen.getByRole('button', { name: 'Yes' }));
    expect(onConfirm).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'No' }));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it('without idPrefix no element of its own has an id; rootClassName follows dx-confirmation-dialog', () => {
    const { container } = renderDialog({
      open: true,
      idPrefix: undefined,
      rootClassName: 'dx-exit-confirmation-dialog',
    });
    expect(container.querySelector('.dx-confirmation-dialog')?.className).toBe(
      'dx-confirmation-dialog dx-exit-confirmation-dialog',
    );
    expect(container.querySelector('.dx-confirmation-dialog')?.hasAttribute('id')).toBe(false);
    const portal = document.body.querySelector('.portal-class');
    expect(portal?.firstElementChild?.className).toBe('dx-confirmation-dialog dx-exit-confirmation-dialog');
    expect(portal?.querySelectorAll('[id]')).toHaveLength(0);
  });
});
