import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { confirmAction } from '@/platform/feedback/dialogs';
import { resetBackQueue } from '@/platform/navigation/backQueue';
import { SubmittedConfirmationDialog } from './SubmittedConfirmationDialog';

beforeEach(resetBackQueue);

describe('SubmittedConfirmationDialog', () => {
  it('closed: the Dialog_Information block with no dialog', () => {
    const { container } = render(<SubmittedConfirmationDialog />);
    const block = container.querySelector('#SubmittedConfirmation');
    expect(block).toHaveAttribute('data-block', 'App_Common_Blocks_PopupDialogs.Dialog_Information');
    expect(block?.querySelector('.connect-dialog-popup--information')).not.toBeNull();
    expect(document.getElementById('b19-b1-Root')).not.toBeNull();
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('ConfirmAction opens the thank-you text; Close answers True', async () => {
    render(<SubmittedConfirmationDialog />);
    let answer: Promise<boolean> = Promise.resolve(false);
    act(() => {
      answer = confirmAction('SubmittedConfirmation');
    });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(document.getElementById('b19-b1-DialogHeader')).toHaveTextContent('Thank you');
    expect(document.getElementById('b19-b1-DialogBody')).toHaveTextContent(
      'Your message has been sent. A member from our Customer Care Team will be in touch soon.',
    );
    expect(document.querySelector('.connect-icon-mail')).not.toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    await expect(answer).resolves.toBe(true);
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
