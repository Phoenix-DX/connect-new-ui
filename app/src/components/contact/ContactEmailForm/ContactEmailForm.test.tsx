import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ContactEmailForm } from './ContactEmailForm';
import * as stories from './ContactEmailForm.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1, OneSchoolGlobal } = composeStories(stories);
/** The captured story only (V1). */
const captured = { default: stories.default, V1: stories.V1 };
const capture = (name: string) => captures[`./__captures__/${name}.html`] ?? '';

describe('ContactByEmailForm', () => {
  testCapturedVariants(captured, captures);

  it('form of ContactByEmailMember/default (input subject)', () => {
    const { container } = render(<V1 />);
    expectToMatchCapture(container.querySelector('form'), capture('form-member'));
  });

  it('form of ContactByEmailOneSchoolGlobal/default (DynamicTextArea subject)', () => {
    const { container } = render(<OneSchoolGlobal />);
    expectToMatchCapture(container.querySelector('form'), capture('form-oneschoolglobal'));
  });

  it('Send is enabled once Subject and Message are filled; OnClick_SubmitForm runs onBeforeSubmitForm (AllowUpcomingNavigation), then raises Event_SubmitForm', async () => {
    const calls: string[] = [];
    const onBefore = vi.fn(() => calls.push('before'));
    const onSubmit = vi.fn(() => calls.push('submit'));
    render(
      <ContactEmailForm
        onBeforeSubmitForm={onBefore}
        onEventSubmitForm={onSubmit}
        inMessagePlaceholder="Add a message"
      />,
    );
    const send = screen.getByRole('button');
    expect(send).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox', { name: 'Subject' }), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByPlaceholderText('Add a message'), { target: { value: 'A message' } });
    expect(send).toBeEnabled();
    await act(async () => {
      fireEvent.click(send);
      await Promise.resolve();
    });
    expect(onBefore).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith('Hello', 'A message');
    expect(calls).toEqual(['before', 'submit']);
  });

  it('without onBeforeSubmitForm, Send still raises Event_SubmitForm', () => {
    const onSubmit = vi.fn();
    render(<ContactEmailForm inSubject="Fixed" onEventSubmitForm={onSubmit} inMessagePlaceholder="Add a message" />);
    fireEvent.change(screen.getByPlaceholderText('Add a message'), { target: { value: 'A message' } });
    fireEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalledWith('Fixed', 'A message');
  });

  it('In_Subject set: Subject starts with it, the field is disabled and has no counter; IsLoading disables the message', () => {
    const { container } = render(<ContactEmailForm inSubject="Fixed" isLoading />);
    const input = container.querySelector('input');
    expect(input).toHaveValue('Fixed');
    expect(input).toBeDisabled();
    expect(container.querySelector('form > div:first-child [data-block="ConnectPatterns.InputCounter"]')).toBeNull();
    expect(container.querySelector('textarea')).toBeDisabled();
  });

  it('Dialog_Navigation only while the form is dirty (Subject <> In_Subject or Trim(Message) <> "")', () => {
    const { container } = render(<ContactEmailForm />);
    const dialog = () => container.querySelector('[data-block="App_Common_Blocks_PopupDialogs.Dialog_Navigation"]');
    expect(dialog()).toBeNull();
    const message = container.querySelector('textarea');
    if (!message) throw new Error('no message');
    fireEvent.change(message, { target: { value: '   ' } });
    expect(dialog()).toBeNull();
    fireEvent.change(message, { target: { value: 'x' } });
    expect(dialog()).not.toBeNull();
  });

  it('FixedFooter writes its class and height on Div_Content', () => {
    const { container } = render(<V1 />);
    const content = container.querySelector('[data-block="ContactFlow.ContactByEmailForm"] > div');
    expect(content).toHaveClass('ubt-fixed-footer--content');
    expect((content as HTMLElement).style.getPropertyValue('--ubt-fixed-footer---footer-height')).toBe(
      'calc(2 * var(--space-base) + var(--ubt-button-height-m))',
    );
  });
});
