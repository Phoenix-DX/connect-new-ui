import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './LdmEventEmailView.stories';

const { Default, Typed, Loading, Offline, NoContent, CallPopup } = composeStories(stories);

describe('LdmEventEmailView', () => {
  it('the form: the title, From, To, the read-only Subject, Message, the counter and both buttons', () => {
    const { container } = render(<Default />);
    expect(container.querySelector('[data-block="LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2"]')?.id).toBe('$b1');
    expect(screen.getByText('Contact Event Coordinator')).toBeInTheDocument();
    expect(container.querySelector('#b1-Input_From')).toHaveValue('julian.vitale@example.test');
    expect(container.querySelector('#b1-Input_To')).toHaveValue('Gustavo Ríos');
    const subject = container.querySelector<HTMLTextAreaElement>('#b1-TextArea_Subject');
    expect(subject?.value).toMatch(/ - \d{4}-\d{2}-\d{2}$/);
    expect(subject?.disabled).toBe(true);
    expect(screen.getByPlaceholderText('Your message here...')).toHaveAttribute('maxlength', '1000');
    expect(container.querySelectorAll('[data-block="Reusable.InputCounter"]')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByText('or Call us Directly')).toBeInTheDocument();
    expect(document.body.querySelector('.ubt-contact-by-phone-popup')).toBeNull();
  });

  it('a typed message', () => {
    render(<Typed />);
    expect(screen.getByPlaceholderText('Your message here...')).toHaveValue(
      'We will bring dessert and arrive at 20:00 with the children.',
    );
  });

  it('loading: the list-updating loader, no form', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('#b1-MarkReadLoading .list-updating')).not.toBeNull();
    expect(container.querySelector('#b1-ContactOrganiser_Form')).toBeNull();
  });

  it('offline: the network warning, and Try again calls its handler', () => {
    const onTryAgain = vi.fn();
    const { container } = render(<Offline onTryAgain={onTryAgain} />);
    expect(container.querySelector('[id="b1-$b5"]')).not.toBeNull();
    expect(container.querySelector('[id="b1-b5-$b1"]')?.getAttribute('data-block')).toBe('Interaction.Animate');
    expect(container.querySelector('#b1-MarkReadLoading')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /try again/i }));
    expect(onTryAgain).toHaveBeenCalledTimes(1);
  });

  it('no content: "No Event Organiser information."', () => {
    const { container } = render(<NoContent />);
    expect(screen.getByText('No Event Organiser information.')).toBeInTheDocument();
    expect(container.querySelector('#b1-ContactOrganiser_Form')).toBeNull();
  });

  it('the call popup shows the coordinator, and hides the navigation confirmation', () => {
    const { container } = render(<CallPopup />);
    expect(document.body.querySelector('.ubt-contact-by-phone-popup')).not.toBeNull();
    expect(screen.getAllByText('+54 291 555 0199').length).toBeGreaterThan(0);
    expect(container.querySelector('[id="b1-$b6"]')).toBeNull();
    const { container: closed } = render(<Default />);
    expect(closed.querySelector('[id="b1-$b6"]')).not.toBeNull();
  });

  it('the message, the buttons and the popup call their handlers', () => {
    const handlers = {
      onMessageChange: vi.fn(),
      onSubmitClick: vi.fn(),
      onCallClick: vi.fn(),
      onCallPopupClose: vi.fn(),
    };
    render(<CallPopup {...handlers} />);
    fireEvent.change(screen.getByPlaceholderText('Your message here...'), { target: { value: 'See you.' } });
    expect(handlers.onMessageChange).toHaveBeenCalledWith('See you.');
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(handlers.onSubmitClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('or Call us Directly'));
    expect(handlers.onCallClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Cancel'));
    expect(handlers.onCallPopupClose).toHaveBeenCalledTimes(1);
  });
});
