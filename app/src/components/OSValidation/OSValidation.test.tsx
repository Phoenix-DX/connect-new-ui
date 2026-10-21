import { act, fireEvent, render, screen } from '@testing-library/react';
import { useRef, useState } from 'react';
import { describe, expect, it } from 'vitest';
import {
  OSForm,
  UnbuiltValidationWidget,
  useInputWithVariableValidation,
  useScreenValidationService,
  ValidationServiceProvider,
} from './OSValidation';
import {
  MessagesProvider,
  validateInputWithVariable,
  ValidationResult,
  ValidationService,
  type InputDataType,
  type ValidationService as Service,
} from './validationService';

/* Platform validation (OutSystems.js ValidationService, OutSystemsReactView.js ValidationWidget /
   InputWithVariableWidget, OutSystemsReactWidgets.js Input / Form) and the UBTConnect messages. */

describe('ValidationService', () => {
  it('UBTConnect messages override the platform defaults; unknown keys fall back to them', () => {
    const service = new ValidationService();
    expect(service.getMandatoryValueMessage()).toBe('This field is required.');
    expect(service.getInvalidValueMessage('Email')).toBe('Enter a valid email.');
    expect(service.getInvalidValueMessage('PhoneNumber')).toBe('Enter a valid phone number.');
    expect(service.getInvalidValueMessage('Text')).toBe('Enter a valid text.');
    const platform = new MessagesProvider({});
    expect(platform.getMandatoryValueMessage()).toBe('Required Value!');
    expect(platform.getInvalidValueMessage('Email')).toBe('Invalid Value!');
  });

  it('InputWithVariableWidget.validate: mandatory empty, white space, bad input, browser validity', () => {
    const service = new ValidationService();
    const valid = { valid: true, badInput: false };
    const check = (inputedValue: string, isMandatory: boolean, validity = valid, dataType: InputDataType = 'Text') =>
      validateInputWithVariable({ inputedValue, isMandatory, inputedValueValidity: validity, dataType }, service);
    expect(check('', true)).toEqual(new ValidationResult(false, 'This field is required.'));
    expect(check('   ', true)).toEqual(new ValidationResult(false, 'This field is required.'));
    expect(check('', false)).toEqual(new ValidationResult(true, ''));
    // An empty value with bad input is not empty: the invalid-value message of the data type.
    expect(check('', false, { valid: false, badInput: true })).toEqual(
      new ValidationResult(false, 'Enter a valid text.'),
    );
    expect(check('a@', false, { valid: false, badInput: false }, 'Email')).toEqual(
      new ValidationResult(false, 'Enter a valid email.'),
    );
    expect(check('x', true)).toEqual(new ValidationResult(true, ''));
  });

  it('validate(): children first, Form.Valid = conjunction; recalculation counts only registered widgets', () => {
    const service = new ValidationService();
    const results = {
      A: new ValidationResult(false, 'Bad A'),
      B: new ValidationResult(true),
    };
    service.register({ id: 'Form1', isValidationAggregator: true });
    service.register({ id: 'A', validationParentId: 'Form1', validate: () => results.A });
    service.register({ id: 'B', validationParentId: 'Form1', validate: () => results.B });
    service.register({ id: 'Outside', validate: () => new ValidationResult(true) });
    expect(service.isValid('Form1')).toBe(true);
    expect(service.validate()).toBe(false);
    expect(service.getWidgetRecord('A')).toEqual({ validAttr: false, validationMessageAttr: 'Bad A' });
    expect(service.getWidgetRecord('B')).toEqual({ validAttr: true, validationMessageAttr: '' });
    expect(service.isValid('Form1')).toBe(false);
    // The invalid widget leaves the view: the Form is recalculated from the widgets still rendered.
    service.unregister('A');
    expect(service.isValid('Form1')).toBe(true);
    // A Valid assigned by an action recalculates the Forms too.
    service.setWidgetValidity('B', false, 'Set by action');
    expect(service.isValid('Form1')).toBe(false);
    expect(service.getWidgetRecord('B').validationMessageAttr).toBe('Set by action');
  });

  it('validate(id): only that subtree is validated, then every Form is recalculated and the root state returned', () => {
    const service = new ValidationService();
    let calls = 0;
    service.register({ id: 'F1', isValidationAggregator: true });
    service.register({ id: 'F2', isValidationAggregator: true });
    service.register({ id: 'A', validationParentId: 'F1', validate: () => new ValidationResult(true) });
    service.register({
      id: 'B',
      validationParentId: 'F2',
      validate: () => {
        calls += 1;
        return new ValidationResult(false, 'B');
      },
    });
    service.validate();
    expect(calls).toBe(1);
    expect(service.validate('F1')).toBe(false);
    expect(calls).toBe(1);
    expect(service.isValid('F1')).toBe(true);
    expect(service.isValid('F2')).toBe(false);
  });

  it('a web block instance keeps its own valid flag and no record', () => {
    const service = new ValidationService();
    const block = {
      id: 'b1',
      validationParentId: 'F',
      isWebBlockInstance: true,
      valid: true as boolean | undefined,
      validate: () => new ValidationResult(false),
    };
    service.register({ id: 'F', isValidationAggregator: true });
    service.register(block);
    service.validate();
    expect(block.valid).toBe(false);
    expect(service.isValid('F')).toBe(false);
  });
});

function TestInput({
  id,
  type,
  dataType,
  mandatory,
}: {
  id: string;
  type: string;
  dataType: InputDataType;
  mandatory: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const v = useInputWithVariableValidation({ id, mandatory, dataType, elementRef: ref });
  return (
    <span className={`input-${type}`}>
      <input
        ref={ref}
        aria-describedby={v.ariaDescribedBy}
        aria-required={mandatory ? 'true' : 'false'}
        className={v.className('form-control OSFillParent')}
        data-input=""
        id={id}
        required={mandatory}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {v.validationElement}
    </span>
  );
}

function Screen({ onService, showName = true }: { onService: (s: Service) => void; showName?: boolean }) {
  const service = useScreenValidationService();
  onService(service);
  return (
    <ValidationServiceProvider service={service}>
      <OSForm id="DetailsForm" style="form OSFillParent">
        {showName && <TestInput id="Input_Name" type="text" dataType="Text" mandatory />}
        <TestInput id="Input_Email" type="email" dataType="Email" mandatory={false} />
      </OSForm>
    </ValidationServiceProvider>
  );
}

describe('OSForm + input widgets (DOM)', () => {
  const input = (id: string) => document.getElementById(id) as HTMLInputElement;

  it('renders the Form widget markup and no validation markup before a validation', () => {
    let service!: Service;
    render(<Screen onService={(s) => (service = s)} />);
    const form = document.getElementById('DetailsForm') as HTMLFormElement;
    expect(form.tagName).toBe('FORM');
    expect(form).toHaveAttribute('data-form', '');
    expect(form).toHaveAttribute('novalidate');
    expect(form).toHaveClass('form', 'OSFillParent');
    expect(document.querySelector('.validation-message')).toBeNull();
    expect(document.querySelector('.not-valid')).toBeNull();
    expect(service.isValid('DetailsForm')).toBe(true);
  });

  it('ValidateWidgets: messages, " not-valid", aria-describedby, Form.Valid; typing keeps the message', () => {
    let service!: Service;
    render(<Screen onService={(s) => (service = s)} />);
    fireEvent.change(input('Input_Email'), { target: { value: 'not-an-email' } });
    act(() => {
      service.validate();
    });
    expect(service.isValid('DetailsForm')).toBe(false);
    const name = input('Input_Name');
    expect(name).toHaveClass('form-control', 'OSFillParent', 'not-valid');
    expect(name).toHaveAttribute('aria-describedby', 'Input_Name_DescribedBy');
    const nameMessage = name.nextElementSibling as HTMLElement;
    expect(nameMessage.outerHTML).toBe(
      '<span id="Input_Name_DescribedBy" class="validation-message">This field is required.</span>',
    );
    expect(name.parentElement).toHaveClass('input-text');
    const email = input('Input_Email');
    expect(email).toHaveClass('not-valid');
    expect(screen.getByText('Enter a valid email.')).toHaveAttribute('id', 'Input_Email_DescribedBy');
    // The form itself never shows a message.
    expect(document.getElementById('DetailsForm')).not.toHaveClass('not-valid');

    // Typing does not clear the message (only the next validation does).
    fireEvent.change(name, { target: { value: 'Ann' } });
    fireEvent.change(email, { target: { value: 'ann@example.com' } });
    expect(name).toHaveClass('not-valid');
    expect(screen.getByText('This field is required.')).toBeInTheDocument();

    act(() => {
      service.validate();
    });
    expect(service.isValid('DetailsForm')).toBe(true);
    expect(document.querySelector('.validation-message')).toBeNull();
    expect(name).not.toHaveClass('not-valid');
    expect(name).not.toHaveAttribute('aria-describedby');
  });

  it('Form.Valid counts only the rendered widgets (an invalid widget that unmounts no longer counts)', () => {
    let service!: Service;
    const { rerender } = render(<Screen onService={(s) => (service = s)} />);
    act(() => {
      service.validate();
    });
    expect(service.isValid('DetailsForm')).toBe(false);
    rerender(<Screen onService={(s) => (service = s)} showName={false} />);
    expect(service.isValid('DetailsForm')).toBe(true);
    expect(document.querySelector('.validation-message')).toBeNull();
  });

  it('outside a ValidationServiceProvider an input registers nowhere and stays valid', () => {
    render(
      <OSForm id="Lonely">
        <TestInput id="Input_Free" type="text" dataType="Text" mandatory />
      </OSForm>,
    );
    expect(input('Input_Free')).not.toHaveClass('not-valid');
  });
});

function ContactForm({
  onService,
  signedOut,
  validateName,
}: {
  onService: (s: Service) => void;
  signedOut: boolean;
  validateName?: () => ValidationResult;
}) {
  const service = useScreenValidationService();
  onService(service);
  return (
    <ValidationServiceProvider service={service}>
      <OSForm id="Form_ContactUs" style="form OSFillParent">
        {signedOut && <UnbuiltValidationWidget id="Input_FullName" validate={validateName} />}
        <TestInput id="Input_Message" type="text" dataType="Text" mandatory={false} />
      </OSForm>
    </ValidationServiceProvider>
  );
}

describe('UnbuiltValidationWidget (a widget whose markup is not built)', () => {
  it('renders nothing; the Valid an action assigns counts in the enclosing Form while it is mounted', () => {
    let service!: Service;
    const { container, rerender } = render(<ContactForm onService={(s) => (service = s)} signedOut />);
    const form = container.querySelector('form') as HTMLFormElement;
    expect(form.children).toHaveLength(1);
    expect(service.isRegistered('Input_FullName')).toBe(true);
    act(() => {
      service.setWidgetValidity('Input_FullName', false, 'This field cannot contain numeric values!');
    });
    expect(service.isValid('Form_ContactUs')).toBe(false);
    expect(document.querySelector('.not-valid')).toBeNull();
    act(() => {
      service.setWidgetValidity('Input_FullName', true, '');
    });
    expect(service.isValid('Form_ContactUs')).toBe(true);
    act(() => {
      service.setWidgetValidity('Input_FullName', false, 'Again');
    });
    // Unmounted (signed in): the Form is recalculated without it.
    rerender(<ContactForm onService={(s) => (service = s)} signedOut={false} />);
    expect(service.isRegistered('Input_FullName')).toBe(false);
    expect(service.isValid('Form_ContactUs')).toBe(true);
  });

  it('a Valid assigned to a widget that is not rendered keeps its record but the Form ignores it', () => {
    let service!: Service;
    render(<ContactForm onService={(s) => (service = s)} signedOut={false} />);
    act(() => {
      service.setWidgetValidity('Input_FullName', false, 'This field cannot contain numeric values!');
    });
    expect(service.getWidgetRecord('Input_FullName')).toEqual({
      validAttr: false,
      validationMessageAttr: 'This field cannot contain numeric values!',
    });
    expect(service.isValid('Form_ContactUs')).toBe(true);
  });

  it('validate: the base ValidationWidget.validate (valid) by default, else the given one', () => {
    let service!: Service;
    const { rerender } = render(<ContactForm onService={(s) => (service = s)} signedOut />);
    act(() => {
      service.setWidgetValidity('Input_FullName', false, 'Set by action');
    });
    act(() => {
      service.validate();
    });
    expect(service.getWidgetRecord('Input_FullName')).toEqual({ validAttr: true, validationMessageAttr: '' });
    rerender(
      <ContactForm
        onService={(s) => (service = s)}
        signedOut
        validateName={() => new ValidationResult(false, 'Required')}
      />,
    );
    act(() => {
      service.validate();
    });
    expect(service.getWidgetRecord('Input_FullName')).toEqual({ validAttr: false, validationMessageAttr: 'Required' });
    expect(service.isValid('Form_ContactUs')).toBe(false);
  });
});
