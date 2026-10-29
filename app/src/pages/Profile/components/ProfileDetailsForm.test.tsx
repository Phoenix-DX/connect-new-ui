import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ValidationService, ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { EMPTY_ACCOUNT_FORM, withContact, withPersonal } from '@/pages/Profile/hooks/profileState';
import { ProfileDetailsForm, type ProfileDetailsFormProps } from './ProfileDetailsForm';

const original = {
  ...EMPTY_ACCOUNT_FORM,
  AccountForm_IdentificationInformation: { MemberId: '990001', AccountNumber: 'AR-204517' },
};
const form = withContact(withPersonal(original, { Username: 'matias.vitale', Email: 'matias@example.org' }), {
  HomeNumber: '+54 291 555 0100',
  MobileNumber: '+54 9 291 555 0101',
  ShowMobileNumber: true,
});

function renderForm(props: Partial<ProfileDetailsFormProps> = {}) {
  const handlers = {
    onCopyAccountNumber: vi.fn(),
    onPersonalChange: vi.fn(),
    onContactChange: vi.fn(),
    onShowAgeChange: vi.fn(),
  };
  const view = render(
    <ValidationServiceProvider service={new ValidationService()}>
      <ProfileDetailsForm
        accountForm={form}
        accountFormOriginal={original}
        isHouseholder={false}
        showContactSwitches={false}
        addressSection={<span>Address section</span>}
        {...handlers}
        {...props}
      />
    </ValidationServiceProvider>,
  );
  const input = (id: string) => view.container.querySelector<HTMLInputElement>(`#${id}`);
  return { ...view, ...handlers, input };
}

describe('ProfileDetailsForm', () => {
  it('shows the identification of the original form and the values of the form', () => {
    const { input } = renderForm();
    expect(screen.getByText('Identification')).toBeInTheDocument();
    expect(input('Input_ContactBaseId')).toHaveValue('990001');
    expect(input('Input_ContactBaseId')).toBeDisabled();
    expect(input('Input_UBTAccountNumber')).toHaveValue('AR-204517');
    expect(input('Input_Username')).toHaveValue('matias.vitale');
    expect(input('Input_Username')).toBeDisabled();
    expect(input('Input_Email')).toHaveValue('matias@example.org');
    expect(input('Input_Email')).toHaveAttribute('type', 'email');
    expect(input('HomeNumber2')).toHaveValue('+54 291 555 0100');
    expect(input('Input_MobileNumber')).toHaveAttribute('type', 'tel');
  });

  it('limits the e-mail and the username to 50 characters and the phone inputs to 15, with autocomplete off (Profile.mvc.js:993, 1065, 1843-1851, 2020-2028, 2241-2249)', () => {
    const { input } = renderForm({ isHouseholder: true, showContactSwitches: true });
    expect(input('Input_Username')).toHaveAttribute('maxlength', '50');
    expect(input('Input_Email')).toHaveAttribute('maxlength', '50');
    expect(input('Input_Email')).not.toHaveAttribute('autocomplete');
    for (const id of ['HomeNumber2', 'Input_MobileNumber', 'Input_WorkNumber']) {
      expect(input(id)).toHaveAttribute('maxlength', '15');
      expect(input(id)).toHaveAttribute('autocomplete', 'off');
    }
    // MaxLength 0 on the identification inputs: no attribute.
    expect(input('Input_ContactBaseId')).not.toHaveAttribute('maxlength');
    expect(input('Input_UBTAccountNumber')).not.toHaveAttribute('maxlength');
  });

  it('a member who is not the householder nor the spouse gets no switches, no address and a read-only home number', () => {
    const { input } = renderForm();
    expect(input('HomeNumber2')).toBeDisabled();
    expect(input('Switch2')).toBeNull();
    expect(input('Switch3')).toBeNull();
    expect(screen.queryByText('Display mobile number on your profile.')).toBeNull();
    expect(screen.queryByText('Address section')).toBeNull();
  });

  it('the householder gets the address section, the switches and the notes', () => {
    const { input } = renderForm({ isHouseholder: true, showContactSwitches: true });
    expect(screen.getByText('Address section')).toBeInTheDocument();
    expect(input('HomeNumber2')).toBeEnabled();
    expect(input('Switch2')).toBeChecked();
    expect(input('Switch3')).not.toBeChecked();
    expect(screen.getByText('Display mobile number on your profile.')).toBeInTheDocument();
    expect(screen.getByText('Hide work number on your profile.')).toBeInTheDocument();
  });

  it('raises the changes of the inputs and the switches with the attribute that changed', () => {
    const { input, onPersonalChange, onContactChange, onShowAgeChange } = renderForm({
      isHouseholder: true,
      showContactSwitches: true,
    });
    fireEvent.change(input('Input_Email') as HTMLInputElement, { target: { value: 'new@example.org' } });
    expect(onPersonalChange).toHaveBeenCalledWith({ Email: 'new@example.org' });
    fireEvent.change(input('Input_WorkNumber') as HTMLInputElement, { target: { value: '+54 291 555 0199' } });
    expect(onContactChange).toHaveBeenCalledWith({ WorkNumber: '+54 291 555 0199' });
    fireEvent.click(input('Switch3') as HTMLInputElement);
    expect(onContactChange).toHaveBeenCalledWith({ ShowWorkNumber: true });
    fireEvent.click(input('Switch1') as HTMLInputElement);
    expect(onShowAgeChange).toHaveBeenCalledWith(true);
  });

  it('the copy icon raises onCopyAccountNumber', () => {
    const { container, onCopyAccountNumber } = renderForm();
    fireEvent.click(container.querySelector('[id$="$b17"] > [data-container]') as HTMLElement);
    expect(onCopyAccountNumber).toHaveBeenCalledTimes(1);
  });
});
