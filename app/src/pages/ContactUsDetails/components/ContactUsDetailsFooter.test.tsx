import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContactUsDetailsFooter } from './ContactUsDetailsFooter';

describe('ContactUsDetailsFooter', () => {
  it('Send raises onSend when it is enabled', () => {
    const onSend = vi.fn();
    render(
      <div>
        <div id="Content" />
        <ContactUsDetailsFooter contentContainerId="Content" isSubmiting={false} isDisabled={false} onSend={onSend} />
      </div>,
    );
    const send = screen.getByRole('button', { name: 'Send' });
    expect(send).not.toBeDisabled();
    fireEvent.click(send);
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it('Send is disabled while the form is not filled', () => {
    const onSend = vi.fn();
    render(<ContactUsDetailsFooter contentContainerId="Content" isSubmiting={false} isDisabled onSend={onSend} />);
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
  });
});
