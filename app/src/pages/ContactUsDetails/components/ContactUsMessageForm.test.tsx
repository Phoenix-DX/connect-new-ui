import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContactUsMessageForm, type ContactUsMessageFormProps } from './ContactUsMessageForm';

function renderForm(props: Partial<ContactUsMessageFormProps> = {}) {
  const onMessageChange = vi.fn();
  const onWantToBeContactedToggle = vi.fn();
  const view = render(
    <ContactUsMessageForm
      isLogged
      isFeedbackSubject={false}
      showRate={false}
      isLoading={false}
      isSubmiting={false}
      message=""
      messagePrompt="To help us assist you better, please provide your question."
      wantToBeContacted={false}
      onMessageChange={onMessageChange}
      onWantToBeContactedToggle={onWantToBeContactedToggle}
      {...props}
    />,
  );
  const textArea = view.container.querySelector<HTMLTextAreaElement>('#TextArea_Message');
  const section = view.container.querySelector('[data-block="ConnectPatterns.SkeletonSection"] > div');
  return { ...view, onMessageChange, onWantToBeContactedToggle, textArea, section };
}

describe('ContactUsMessageForm', () => {
  it('signed in: asks how we can help, with the message and its prompt', () => {
    const { textArea } = renderForm({ message: 'My login fails' });
    expect(screen.getByText('How can we help you?')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(textArea?.value).toBe('My login fails');
    expect(textArea?.placeholder).toBe('To help us assist you better, please provide your question.');
    expect(textArea).not.toBeDisabled();
    expect(screen.queryByText('All fields are required.')).toBeNull();
  });

  it('a typed message raises onMessageChange; the message is disabled while it is sent', () => {
    const { textArea, onMessageChange, rerender } = renderForm();
    if (!textArea) throw new Error('no text area');
    fireEvent.change(textArea, { target: { value: 'Hello' } });
    expect(onMessageChange).toHaveBeenCalledWith('Hello');
    rerender(
      <ContactUsMessageForm
        isLogged
        isFeedbackSubject={false}
        showRate={false}
        isLoading={false}
        isSubmiting
        message="Hello"
        messagePrompt=""
        wantToBeContacted={false}
        onMessageChange={onMessageChange}
        onWantToBeContactedToggle={vi.fn()}
      />,
    );
    expect(textArea).toBeDisabled();
  });

  it('the feedback subject asks for suggestions, and its check box raises the toggle', () => {
    const { container, onWantToBeContactedToggle } = renderForm({ isFeedbackSubject: true, showRate: true });
    expect(screen.getByText('Please provide your suggestions and feedback')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-checkbox_outline_blank')).not.toBeNull();
    fireEvent.click(screen.getByText('I would like to be contacted about my feedback.', { exact: false }));
    expect(onWantToBeContactedToggle).toHaveBeenCalledTimes(1);
  });

  it('shows the checked box when the user wants to be contacted', () => {
    const { container } = renderForm({ isFeedbackSubject: true, showRate: true, wantToBeContacted: true });
    expect(container.querySelector('.connect-icon-checkbox')).not.toBeNull();
    expect(container.querySelector('.connect-icon-checkbox_outline_blank')).toBeNull();
  });

  it('signed out: all fields are required, and the other fields are not built', () => {
    renderForm({ isLogged: false });
    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
    expect(screen.queryByText('How can we help you?')).toBeNull();
    expect(screen.getByText(/ContactUsDetails signed-out fields/)).toBeInTheDocument();
  });

  it('is an inert skeleton while the user information has not come', () => {
    const { section } = renderForm({ isLoading: true });
    expect(section).toHaveAttribute('inert');
    expect(section?.className).toContain('skeleton');
  });
});
