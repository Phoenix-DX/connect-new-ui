import { act, render, renderHook, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test, vi } from 'vitest';
import { ConfirmDialog } from '@/components/ui/Dialog';
import { createBackEvent, resetBackQueue, runBackHandlers } from '@/platform/navigation/backQueue';
import { confirmAction } from './confirmAction';
import { useActionConfirmation } from './useActionConfirmation';

/* The trigger of ActionConfirmationDialog with the dialog that renders it (components/ui/Dialog ConfirmDialog; the
   test setup connects the two as app/dialogs.ts does). */
beforeEach(resetBackQueue);

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
  let answer: Promise<boolean> = Promise.resolve(false);
  act(() => {
    answer = confirmAction('b9-PopUp');
  });
  return answer;
};

test('closed until ConfirmAction; the event hub ref is free for the dialog', () => {
  const { result } = renderHook(() => useActionConfirmation());
  expect(result.current.open).toBe(false);
  expect(result.current.eventHubRef.current).toBeNull();
});

test('ConfirmAction opens it in a body portal with the classes copied across the portal; Yes → Confirmed, then True', async () => {
  const onConfirmed = renderDialog();
  const answer = open();
  const dialog = screen.getByRole('dialog');
  const portalRoot = dialog.parentElement?.parentElement;
  expect(portalRoot).toHaveClass('dx-confirmation-dialog');
  expect(portalRoot?.parentElement?.className).toBe('portal-class my-wrapper');
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
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('closed, a back navigation goes on', () => {
  renderDialog();
  const event = createBackEvent({ pathname: '/', search: '', hash: '', state: null, key: 'k' }, false, vi.fn());
  act(() => {
    runBackHandlers(event);
  });
  expect(event.defaultPrevented).toBe(false);
});

test('ConfirmAction without such a dialog resolves False at once', async () => {
  await expect(confirmAction('missing')).resolves.toBe(false);
});
