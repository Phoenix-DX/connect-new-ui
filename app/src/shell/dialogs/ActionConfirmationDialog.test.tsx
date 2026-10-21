import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test, vi } from 'vitest';
import { createBackEvent, resetBackQueue, runBackHandlers } from '../navigation/backQueue';
import { ActionConfirmationDialog } from './ActionConfirmationDialog';
import { confirmAction } from './confirmAction';

beforeEach(resetBackQueue);

function renderDialog(onConfirmed = vi.fn()) {
  render(
    <div className="my-wrapper">
      <ActionConfirmationDialog
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
  let answer: Promise<boolean> = Promise.resolve(false);
  act(() => {
    answer = confirmAction('b9-PopUp');
  });
  return answer;
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

test('ConfirmAction opens it in a body portal with the classes copied across the portal; Yes → Confirmed, then True', async () => {
  const onConfirmed = renderDialog();
  const answer = open();
  const dialog = screen.getByRole('dialog');
  const portalRoot = dialog.parentElement?.parentElement;
  expect(portalRoot).toHaveClass('dx-confirmation-dialog');
  expect(portalRoot?.parentElement?.className).toBe('portal-class my-wrapper');
  expect(portalRoot?.parentElement?.parentElement).toBe(document.body);
  expect(document.getElementById('b9-b1-DialogHeader')).toHaveTextContent('Title');
  expect(document.getElementById('b9-b1-DialogBody')).toHaveTextContent('Question?');
  await userEvent.click(screen.getByRole('button', { name: 'Yes' }));
  await expect(answer).resolves.toBe(true);
  expect(onConfirmed).toHaveBeenCalledOnce();
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('No resolves False; a back navigation while open is prevented and acts as No', async () => {
  const onConfirmed = renderDialog();
  const first = open();
  await userEvent.click(screen.getByRole('button', { name: 'No' }));
  await expect(first).resolves.toBe(false);

  const second = open();
  const event = createBackEvent({ pathname: '/', search: '', hash: '', state: null, key: 'k' }, false, vi.fn());
  act(() => {
    runBackHandlers(event);
  });
  expect(event.defaultPrevented).toBe(true);
  await expect(second).resolves.toBe(false);
  expect(onConfirmed).not.toHaveBeenCalled();
});

test('ConfirmAction without such a dialog resolves False at once', async () => {
  await expect(confirmAction('missing')).resolves.toBe(false);
});
