import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { confirmAction } from '@/platform/feedback/dialogs';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Dialog_CustomChoice } from './Dialog_CustomChoice';
import * as stories from './Dialog_CustomChoice.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const renderLogout = (stackButtonsVertically?: boolean) =>
  render(
    <Dialog_CustomChoice
      id="PopUp_Logout"
      scope="b15"
      stackButtonsVertically={stackButtonsVertically}
      placeholderHeader="Logout"
      placeholderBody="Are you sure you wish to logout?"
      placeholderButtonLabel="Yes"
      placeholderDismissButtonLabe="No"
    />,
  );

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
    let answer: Promise<boolean> = Promise.resolve(false);
    act(() => {
      answer = confirmAction('PopUp_Logout');
    });
    const header = document.body.querySelector('.dx-dialog-header .ubt-custom-container');
    expect(header).toHaveClass('margin-bottom-base', 'text-neutral-10', 'font-semi-bold');
    expect(header?.querySelector(':scope > .text-align-center > div')).toHaveTextContent('Logout');
    const body = document.body.querySelector('.dx-dialog-body .ubt-custom-container');
    expect(body).toHaveClass('margin-bottom-m', 'text-neutral-10');
    expect(body).toHaveTextContent('Are you sure you wish to logout?');
    expect(document.body.querySelector('.portal-class')?.className).toBe(
      'portal-class connect-dialog-popup connect-dialog-popup--custom-choice',
    );
    fireEvent.click(screen.getByText('Yes'));
    await expect(answer).resolves.toBe(true);

    act(() => {
      answer = confirmAction('PopUp_Logout');
    });
    fireEvent.click(screen.getByText('No'));
    await expect(answer).resolves.toBe(false);
    expect(document.body.querySelector('.popup-dialog')).toBeNull();
  });
});
