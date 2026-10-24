import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { ConfirmDialog } from './ConfirmDialog';

/* ConfirmDialog with its trigger (the platform hook that the test setup connects, as app/ does). `confirmAction(id)`
   sends `dx-show` with its resolve callback to the event hub of the dialog: the test sends the same event. ConfirmAction
   itself and the back navigation are tested with the trigger (platform/feedback/dialogs/useActionConfirmation.test). */
function renderDialog(onConfirmed = vi.fn()) {
  render(
    <div className="my-wrapper">
      <ConfirmDialog
        widgetId="b9-PopUp"
        scope="b9-b1"
        header="Title"
        body="Question?"
        confirmLabel="Yes"
        dismissLabel="No"
        onConfirmed={onConfirmed}
      />
    </div>,
  );
  return onConfirmed;
}

const open = () => {
  const resolve = vi.fn<(answer: boolean) => void>();
  const hub = document.getElementById('b9-PopUp')?.querySelector('[data-dx-event-hub]');
  act(() => {
    hub?.dispatchEvent(new CustomEvent('dx-show', { detail: { resolve } }));
  });
  return resolve;
};

test('closed: Root > EventHub only, as captured (HF dom:1159-1163)', () => {
  renderDialog();
  const block = document.getElementById('b9-PopUp');
  expect(block).toHaveAttribute('data-block', 'ConfirmationDialogs.ActionConfirmationDialog');
  expect(block?.innerHTML).toBe(
    '<div class="dx-confirmation-dialog" data-container="" id="b9-b1-Root"><div data-container="" data-dx-event-hub="True" id="b9-b1-EventHub"></div></div>',
  );
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('dx-show opens it in a body portal with the classes copied across the portal and the PreventBackNavigation block; Yes → Confirmed, then True', async () => {
  const onConfirmed = renderDialog();
  const resolve = open();
  const dialog = screen.getByRole('dialog');
  const portalRoot = dialog.parentElement?.parentElement;
  expect(portalRoot).toHaveClass('dx-confirmation-dialog');
  expect(portalRoot?.parentElement?.className).toBe('portal-class my-wrapper');
  expect(portalRoot?.parentElement?.parentElement).toBe(document.body);
  expect(document.getElementById('b9-b1-DialogHeader')).toHaveTextContent('Title');
  expect(document.getElementById('b9-b1-DialogBody')).toHaveTextContent('Question?');
  expect(document.getElementById('b9-b1-Root')?.lastElementChild?.outerHTML).toBe(
    '<div class="OSBlockWidget" data-block="NavigationHandler.PreventBackNavigation" id="b9-b1-$b1">' +
      '<div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b9-b1-b1-$b1"></div></div>',
  );
  await userEvent.click(screen.getByRole('button', { name: 'Yes' }));
  expect(onConfirmed).toHaveBeenCalledOnce();
  expect(resolve).toHaveBeenCalledWith(true);
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(document.getElementById('b9-b1-Root')?.children).toHaveLength(1);
});

test('No answers False without Confirmed', async () => {
  const onConfirmed = renderDialog();
  const resolve = open();
  await userEvent.click(screen.getByRole('button', { name: 'No' }));
  expect(resolve).toHaveBeenCalledWith(false);
  expect(onConfirmed).not.toHaveBeenCalled();
  expect(screen.queryByRole('dialog')).toBeNull();
});
