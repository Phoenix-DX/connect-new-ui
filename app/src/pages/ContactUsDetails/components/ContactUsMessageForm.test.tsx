import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { ContactUsForm } from '@/api/message';
import { ContactUsMessageForm, type ContactUsMessageFormProps } from './ContactUsMessageForm';

const EMPTY_FORM: ContactUsForm = { FullName: '', Email: '', PhoneNumber: '', Country: '', Locality: '', Message: '' };
const COUNTRIES = [
  { code: 'AR', name: 'Argentina' },
  { code: 'NZ', name: 'New Zealand' },
];

function renderForm(props: Partial<ContactUsMessageFormProps> = {}, message = '') {
  const handlers = {
    onMessageChange: vi.fn(),
    onWantToBeContactedToggle: vi.fn(),
    onFieldChange: vi.fn(),
    onCountryVariableChange: vi.fn(),
    onCountryChange: vi.fn(),
    onRateSelected: vi.fn(),
  };
  const view = render(
    <ContactUsMessageForm
      isLogged
      isFeedbackSubject={false}
      showRate={false}
      selectedRate={0}
      isLoading={false}
      isSubmiting={false}
      form={{ ...EMPTY_FORM, Message: message }}
      countries={COUNTRIES}
      messagePrompt="To help us assist you better, please provide your question."
      wantToBeContacted={false}
      {...handlers}
      {...props}
    />,
  );
  const textArea = view.container.querySelector<HTMLTextAreaElement>('#TextArea_Message');
  const section = view.container.querySelector('[data-block="ConnectPatterns.SkeletonSection"] > div');
  return { ...view, ...handlers, textArea, section };
}

describe('ContactUsMessageForm', () => {
  it('signed in: asks how we can help, with the message and its prompt', () => {
    const { textArea, container } = renderForm({}, 'My login fails');
    expect(screen.getByText('How can we help you?')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(textArea?.value).toBe('My login fails');
    expect(textArea?.placeholder).toBe('To help us assist you better, please provide your question.');
    expect(textArea).not.toBeDisabled();
    expect(screen.queryByText('All fields are required.')).toBeNull();
    expect(container.querySelector('#Input_FullName')).toBeNull();
    expect(container.querySelector('[data-block="App_Menu_ContactUs.ContactUs_Rate"]')).toBeNull();
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
        selectedRate={0}
        isLoading={false}
        isSubmiting
        form={{ ...EMPTY_FORM, Message: 'Hello' }}
        countries={[]}
        messagePrompt=""
        wantToBeContacted={false}
        onMessageChange={onMessageChange}
        onFieldChange={vi.fn()}
        onCountryVariableChange={vi.fn()}
        onCountryChange={vi.fn()}
        onRateSelected={vi.fn()}
        onWantToBeContactedToggle={vi.fn()}
      />,
    );
    expect(textArea).toBeDisabled();
  });

  it('the feedback subject asks for suggestions, and its check box raises the toggle', () => {
    const { container, onWantToBeContactedToggle } = renderForm({ isFeedbackSubject: true, showRate: true });
    expect(screen.getByText('Please provide your suggestions and feedback')).toBeInTheDocument();
    // Rate_ShowRate: ContactUs_Rate ($b8) first, then the title.
    const rate = container.querySelector('[data-block="App_Menu_ContactUs.ContactUs_Rate"]');
    expect(rate?.id).toBe('$b8');
    expect(screen.getByText('How would you rate your current experience with Connect?')).toBeInTheDocument();
    expect(container.querySelector('.connect-icon-checkbox_outline_blank')).not.toBeNull();
    fireEvent.click(screen.getByText('I would like to be contacted about my feedback.', { exact: false }));
    expect(onWantToBeContactedToggle).toHaveBeenCalledTimes(1);
  });

  it('shows the checked box when the user wants to be contacted', () => {
    const { container } = renderForm({ isFeedbackSubject: true, showRate: true, wantToBeContacted: true });
    expect(container.querySelector('.connect-icon-checkbox')).not.toBeNull();
    expect(container.querySelector('.connect-icon-checkbox_outline_blank')).toBeNull();
  });

  it('signed out: all fields are required, then the five sender fields before the message (TST :712-1030)', () => {
    const { container } = renderForm({ isLogged: false });
    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
    expect(screen.queryByText('How can we help you?')).toBeNull();
    const form = container.querySelector('#Form_ContactUs');
    const labels = [...(form?.querySelectorAll('label') ?? [])].map((l) => [l.textContent, l.getAttribute('for')]);
    expect(labels).toEqual([
      ['Full Name', 'Input_FullName'],
      ['Email', 'Input_Email'],
      ['Phone Number', 'Input_PhoneNumber'],
      ['Country', 'Dropdown_Country'],
      ['Locality', 'Input_Locality'],
      ['Message', 'TextArea_Message'],
    ]);
    const inputs = [...(form?.querySelectorAll('input') ?? [])].map((i) => [
      i.id,
      i.type,
      i.placeholder,
      i.maxLength,
      i.required,
      i.parentElement?.className,
    ]);
    expect(inputs).toEqual([
      ['Input_FullName', 'text', 'Enter Full Name', 50, true, 'input-text'],
      ['Input_Email', 'email', 'Enter Your Email Address', 50, true, 'input-email'],
      ['Input_PhoneNumber', 'tel', 'Enter Phone Number', 50, true, 'input-tel'],
      ['Input_Locality', 'text', 'Enter Your Locality', 50, true, 'input-text'],
    ]);
    const dropdown = container.querySelector('#Dropdown_Country');
    expect(dropdown?.className).toBe('dropdown-container dropdown');
    expect(dropdown?.querySelector('.dropdown-display-content')?.textContent).toBe('Select Your Country');
  });

  it('signed out: an input raises onFieldChange with its field; the inputs are disabled while sending', () => {
    const { container, onFieldChange, rerender } = renderForm({ isLogged: false });
    const email = container.querySelector<HTMLInputElement>('#Input_Email');
    if (!email) throw new Error('no email');
    fireEvent.change(email, { target: { value: 'ana.sosa@example.com' } });
    expect(onFieldChange).toHaveBeenCalledWith('Email', 'ana.sosa@example.com');
    rerender(
      <ContactUsMessageForm
        isLogged={false}
        isFeedbackSubject={false}
        showRate={false}
        selectedRate={0}
        isLoading={false}
        isSubmiting
        form={EMPTY_FORM}
        countries={COUNTRIES}
        messagePrompt=""
        wantToBeContacted={false}
        onMessageChange={vi.fn()}
        onFieldChange={onFieldChange}
        onCountryVariableChange={vi.fn()}
        onCountryChange={vi.fn()}
        onRateSelected={vi.fn()}
        onWantToBeContactedToggle={vi.fn()}
      />,
    );
    expect(email).toBeDisabled();
    expect(container.querySelector('.dropdown-display')?.className).toBe('dropdown-display dropdown-disabled');
  });

  it('signed out: the Country list sets the Code, then raises OnChange', () => {
    const { container, onCountryVariableChange, onCountryChange } = renderForm({ isLogged: false });
    const display = container.querySelector('.dropdown-display');
    if (!display) throw new Error('no display');
    fireEvent.click(display);
    const rows = [...container.querySelectorAll('.dropdown-popup-row')];
    expect(rows.map((r) => [r.className, r.textContent])).toEqual([
      ['dropdown-popup-row drowpdown-empty-value-row dropdown-popup-row-selected', 'Select Your Country'],
      ['dropdown-popup-row', 'Argentina'],
      ['dropdown-popup-row', 'New Zealand'],
    ]);
    expect(container.querySelector('.dropdown-background-window')).not.toBeNull();
    const newZealand = rows[2];
    if (!newZealand) throw new Error('no row');
    fireEvent.click(newZealand);
    expect(onCountryVariableChange).toHaveBeenCalledWith('NZ');
    expect(onCountryChange).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.dropdown-list')).toBeNull();
  });

  it('signed out: the selected Country shows its name', () => {
    const { container } = renderForm({ isLogged: false, form: { ...EMPTY_FORM, Country: 'AR' } });
    expect(container.querySelector('.dropdown-display-content')?.textContent).toBe('Argentina');
  });

  it('is an inert skeleton while the user information has not come', () => {
    const { section } = renderForm({ isLoading: true });
    expect(section).toHaveAttribute('inert');
    expect(section?.className).toContain('skeleton');
  });
});
