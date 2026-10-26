import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './OrbitContactFormView.stories';

const { Default, Host, Submitting } = composeStories(stories);

describe('OrbitContactFormView', () => {
  it('helpdesk form: the title, the read-only subject in LineCount rows, "Your inquiry" and Submit', () => {
    const { container } = render(<Default />);
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_ContactForm"]')?.id).toBe('$b1');
    expect(screen.getByText('Contact Orbit Helpdesk')).toBeInTheDocument();
    const subject = container.querySelector<HTMLTextAreaElement>('#b1-TextArea_In_Subject');
    expect(subject?.value).toBe('Weekend Bible Conferences - Bahia and Azul: arrival on Friday evening');
    expect(subject?.disabled).toBe(true);
    expect(subject?.rows).toBe(2);
    expect(container.querySelector('#b1-Input_Subject')).toBeNull();
    expect(screen.getByText('Your inquiry')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell us how we can help you')).toHaveAttribute('maxlength', '1000');
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(container.querySelector('.osui-deprecated.is--loading')).toBeNull();
  });

  it('host form: "To: <host>", the mandatory subject with its counter, "Message" and Send Email', () => {
    const { container } = render(<Host />);
    expect(screen.getByText('Contact Host')).toBeInTheDocument();
    expect(screen.getByText('To:').nextElementSibling?.textContent).toMatch(/^Mr .+ & Mrs .+$/);
    expect(container.querySelector('#b1-TextArea_In_Subject')).toBeNull();
    expect(container.querySelector<HTMLInputElement>('#b1-Input_Subject')?.value).toBe('Our arrival time');
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type message here...')).toHaveValue(
      'We arrive on Friday at 18:30 with two children.',
    );
    expect(screen.getByRole('button', { name: 'Send Email' })).toBeInTheDocument();
    expect(container.querySelectorAll('[data-block="Reusable.InputCounter"]')).toHaveLength(2);
  });

  it('while submitting, the button shows its loading state', () => {
    const { container } = render(<Submitting />);
    expect(container.querySelector('.osui-deprecated.is--loading')).not.toBeNull();
  });

  it('the fields and the button call their handlers', () => {
    const handlers = {
      onUserSubjectChange: vi.fn(),
      onUserSubjectBlur: vi.fn(),
      onMessageChange: vi.fn(),
      onMessageBlur: vi.fn(),
      onMessageKeyDown: vi.fn(),
      onMessageKeyUp: vi.fn(),
      onSubmitClick: vi.fn(),
    };
    const { container } = render(<Host {...handlers} />);
    const subject = container.querySelector('#b1-Input_Subject') as HTMLInputElement;
    fireEvent.change(subject, { target: { value: 'Our arrival' } });
    fireEvent.blur(subject);
    const message = container.querySelector('#b1-TextArea_Message') as HTMLTextAreaElement;
    fireEvent.keyDown(message);
    fireEvent.change(message, { target: { value: 'See you on Friday.' } });
    fireEvent.keyUp(message);
    fireEvent.blur(message);
    fireEvent.click(screen.getByRole('button', { name: 'Send Email' }));
    expect(handlers.onUserSubjectChange).toHaveBeenCalledWith('Our arrival');
    expect(handlers.onUserSubjectBlur).toHaveBeenCalledTimes(1);
    expect(handlers.onMessageChange).toHaveBeenCalledWith('See you on Friday.');
    expect(handlers.onMessageKeyDown).toHaveBeenCalledTimes(1);
    expect(handlers.onMessageKeyUp).toHaveBeenCalledTimes(1);
    expect(handlers.onMessageBlur).toHaveBeenCalledTimes(1);
    expect(handlers.onSubmitClick).toHaveBeenCalledTimes(1);
  });
});
