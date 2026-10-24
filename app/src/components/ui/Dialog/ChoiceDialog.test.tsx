import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ChoiceDialog } from './ChoiceDialog';
import * as stories from './ChoiceDialog.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const renderLogout = (stackButtonsVertically?: boolean) =>
  render(
    <ChoiceDialog
      id="PopUp_Logout"
      scope="b15"
      stackButtonsVertically={stackButtonsVertically}
      header="Logout"
      body="Are you sure you wish to logout?"
      confirmLabel="Yes"
      dismissLabel="No"
    />,
  );

/** What `confirmAction(id)` does (platform/feedback/dialogs): `dx-show` with the resolve callback to the event hub of
    the dialog inside the block `id`. */
const confirmAction = (id: string) => {
  const resolve = vi.fn<(answer: boolean) => void>();
  act(() => {
    document
      .getElementById(id)
      ?.querySelector('[data-dx-event-hub]')
      ?.dispatchEvent(new CustomEvent('dx-show', { detail: { resolve } }));
  });
  return resolve;
};

describe('Dialog_CustomChoice', () => {
  testCapturedVariants(stories, captures);

  it('StackButtonsVertically adds connect-dialog-popup--vertical-buttons', () => {
    const { container } = renderLogout(true);
    expect(container.querySelector('[data-block] > div')?.className).toBe(
      'connect-dialog-popup connect-dialog-popup--custom-choice connect-dialog-popup--vertical-buttons',
    );
    expect(container.querySelector('#b15-\\$b1 #b15-b1-EventHub')).not.toBeNull();
  });

  it('ConfirmAction(id) opens it: header and body containers, labels; Yes → True, No → False', async () => {
    renderLogout();
    const yes = confirmAction('PopUp_Logout');
    const header = document.body.querySelector('.dx-dialog-header .ubt-custom-container');
    expect(header).toHaveClass('margin-bottom-base', 'text-neutral-10', 'font-semi-bold');
    expect(header?.querySelector(':scope > .text-align-center > div')).toHaveTextContent('Logout');
    const body = document.body.querySelector('.dx-dialog-body .ubt-custom-container');
    expect(body).toHaveClass('margin-bottom-m', 'text-neutral-10');
    expect(body).toHaveTextContent('Are you sure you wish to logout?');
    expect(document.body.querySelector('.portal-class')?.className).toBe(
      'portal-class connect-dialog-popup connect-dialog-popup--custom-choice',
    );
    await act(async () => {
      fireEvent.click(screen.getByText('Yes'));
      await Promise.resolve();
    });
    expect(yes).toHaveBeenCalledWith(true);

    const no = confirmAction('PopUp_Logout');
    fireEvent.click(screen.getByText('No'));
    expect(no).toHaveBeenCalledWith(false);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });
});
