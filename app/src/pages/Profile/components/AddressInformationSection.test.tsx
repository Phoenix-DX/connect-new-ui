import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { DropdownSearchProps } from '@/components/ui/DropdownSearch';
import { ValidationService, ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { wireList } from '@/lib/os-wire';
import { EMPTY_ACCOUNT_FORM } from '@/pages/Profile/hooks/profileState';
import {
  AddressInformationSection,
  localityOptions,
  type AddressInformationSectionProps,
} from './AddressInformationSection';

/* The Virtual Select provider is not part of this test: the DropdownSearch stub keeps the inputs it gets. */
const dropdowns = new Map<string, DropdownSearchProps>();
vi.mock('@/components/ui/DropdownSearch', () => ({
  DropdownSearch: (props: DropdownSearchProps) => {
    dropdowns.set(props.id ?? '', props);
    return <div data-testid={props.id} />;
  },
}));

const item = (NumberRef: number, Label: string, Value: string, Required: boolean, IsValid = true) => ({
  NumberRef,
  Label,
  Value,
  Required,
  Visible: true,
  IsValid,
});

const address = {
  ...EMPTY_ACCOUNT_FORM.AccountForm_AddressInformation,
  Custom_Address_ItemList: wireList([
    item(1, 'Street Address', '120 Las Margaritas', true),
    item(2, 'Apartment, Suite or Floor', '', false, false),
  ]),
  LocalityId: '585',
  SubdivionId: '2820',
};

function renderSection(props: Partial<AddressInformationSectionProps> = {}) {
  const handlers = { onAddressItemChange: vi.fn(), onLocalityChange: vi.fn(), onSubdivisionChange: vi.fn() };
  const view = render(
    <ValidationServiceProvider service={new ValidationService()}>
      <AddressInformationSection
        address={address}
        isLoading={false}
        localityList={[{ LocalityId: '585', Name: 'Bahia Blanca', CountryName: 'Argentina', CountryCode: 'AR' }]}
        subdivisionFilteredList={[
          {
            SubdivisionId: '2820',
            SubdivisionName: 'Zapiola (Main Meeting Room)',
            LocalityId: '585',
            LocalityName: '',
          },
        ]}
        {...handlers}
        {...props}
      />
    </ValidationServiceProvider>,
  );
  return { ...view, ...handlers };
}

describe('AddressInformationSection (Profile.mvc.js:1288-1716)', () => {
  it('shows the title, one label and input per address item, and the Locality and Subdivision containers', () => {
    const { container } = renderSection();
    expect(screen.getByText('Address Information')).toBeInTheDocument();
    expect(container.querySelector('.list.list-group.OSFillParent[data-list]')).not.toBeNull();
    expect(screen.getByText('Street Address')).toBeInTheDocument();
    expect(screen.getByText('Apartment, Suite or Floor')).toBeInTheDocument();
    const first = container.querySelector<HTMLInputElement>('#l1-37_0-AddressInput');
    const second = container.querySelector<HTMLInputElement>('#l1-37_1-AddressInput');
    expect(first).toHaveValue('120 Las Margaritas');
    expect(first).toHaveAttribute('maxlength', '50');
    expect(first).toHaveAttribute('aria-required', 'true');
    expect(first?.className).toBe('form-control  OSFillParent');
    expect(second).toHaveAttribute('aria-required', 'false');
    expect(second?.className).toBe('form-control not-valid OSFillParent');
    expect(container.querySelector('#Locality #LocalityLabel')).toHaveTextContent('Locality');
    expect(container.querySelector('#Subdivion #SubdivisionLabel')).toHaveTextContent('Subdivision');
  });

  it('gives the dropdowns their options, the prompt "-", the starting selection and IsDisabled without a locality', () => {
    renderSection();
    const locality = dropdowns.get('LocalityDropdown');
    expect(locality?.prompt).toBe('-');
    expect(locality?.optionsList).toEqual([{ Value: '585', Label: 'Bahia Blanca, Argentina', GroupName: 'Argentina' }]);
    expect(locality?.startingSelection).toEqual([{ Value: '585', Label: '' }]);
    const subdivision = dropdowns.get('SubdivisionDropdown');
    expect(subdivision?.optionsList).toEqual([{ Value: '2820', Label: 'Zapiola (Main Meeting Room)' }]);
    expect(subdivision?.startingSelection).toEqual([{ Value: '2820', Label: '' }]);
    expect(subdivision?.optionalConfigs).toEqual({ IsDisabled: false });
    renderSection({ address: { ...address, LocalityId: '' } });
    expect(dropdowns.get('SubdivisionDropdown')?.optionalConfigs).toEqual({ IsDisabled: true });
  });

  it('the locality label is the name only when CountryName is ""', () => {
    expect(localityOptions([{ LocalityId: '1', Name: 'Zürich', CountryName: '', CountryCode: 'ch' }])).toEqual([
      { Value: '1', Label: 'Zürich', GroupName: '' },
    ]);
  });

  it('raises the row and the value of an input, and the selected options of each dropdown', () => {
    const { container, onAddressItemChange, onLocalityChange, onSubdivisionChange } = renderSection();
    const second = container.querySelector<HTMLInputElement>('#l1-37_1-AddressInput');
    if (second) fireEvent.change(second, { target: { value: 'Floor 2' } });
    expect(onAddressItemChange).toHaveBeenCalledWith(1, 'Floor 2');
    dropdowns.get('LocalityDropdown')?.onOnChanged?.('LocalityDropdown', [{ Value: '924' }]);
    expect(onLocalityChange).toHaveBeenCalledWith([{ Value: '924' }]);
    dropdowns.get('SubdivisionDropdown')?.onOnChanged?.('SubdivisionDropdown', [{ Value: '9241' }]);
    expect(onSubdivisionChange).toHaveBeenCalledWith([{ Value: '9241' }]);
  });

  it('an empty required line fails the platform validation of the form (Mandatory = Required)', () => {
    const service = new ValidationService();
    const { container } = render(
      <ValidationServiceProvider service={service}>
        <AddressInformationSection
          address={{ ...address, Custom_Address_ItemList: wireList([item(1, 'Street Address', '', true)]) }}
          isLoading={false}
          localityList={[]}
          subdivisionFilteredList={[]}
          onAddressItemChange={vi.fn()}
          onLocalityChange={vi.fn()}
          onSubdivisionChange={vi.fn()}
        />
      </ValidationServiceProvider>,
    );
    act(() => {
      service.validate();
    });
    expect(service.getWidgetRecord('l1-37_0-AddressInput').validAttr).toBe(false);
    expect(container.querySelector('#l1-37_0-AddressInput_DescribedBy')).toHaveTextContent('This field is required.');
  });
});
