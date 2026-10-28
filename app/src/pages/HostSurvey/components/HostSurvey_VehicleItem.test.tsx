import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { HostSurveyVehicle } from '@/api/event';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import { HostSurvey_VehicleItem, type HostSurvey_VehicleItemProps } from './HostSurvey_VehicleItem';
import { HostSurvey_VehiclePills } from './HostSurvey_VehiclePills';

/* HostSurvey_VehicleItem and HostSurvey_VehiclePills (TST Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem
   .mvc.js, VI, and …HostSurvey_VehiclePills.mvc.js): the pills of a saved vehicle, the edit form with the two Custom
   dropdowns, the TrySave validation and the OnParametersChanged copy. Fictional van of a household in Mar del Plata. */

const ID = 'b2-l4-0_1-$b18';
const SCOPE = 'b2-l4-0_1-b18';
const OWNERS = [
  { Id: '2', Label: 'Host', JSON_Name: 'HOST', Order: 1 },
  { Id: '3', Label: 'Helper', JSON_Name: 'HELPER', Order: 3 },
];
const TYPES = [
  { Id: '5', Label: 'Car', JSON_Name: 'CAR', Order: 1 },
  { Id: '1', Label: 'Van', JSON_Name: 'VAN', Order: 3 },
];
const VAN: HostSurveyVehicle = {
  Id: '3307',
  VehicleId: '5521',
  OwnerType: 'HOST',
  VehicleType: 'VAN',
  VehicleMakeAndModel: 'Renault Trafic',
  RegistrationNumber: 'AB 512 KD',
  TotalSeats: '8',
  IsEdit: false,
};
const NEW_VEHICLE: HostSurveyVehicle = {
  Id: '0',
  VehicleId: '0',
  OwnerType: '',
  VehicleType: '',
  VehicleMakeAndModel: '',
  RegistrationNumber: '',
  TotalSeats: '0',
  IsEdit: true,
};
const STEP: StepProperties = { IsEdit: false, TrySave: false, HasData: true };

function setup(overrides: Partial<HostSurvey_VehicleItemProps> = {}) {
  const events = { onSaveFailed: vi.fn(), onSaveSuccessful: vi.fn(), onClickDelete: vi.fn(), onClickEdit: vi.fn() };
  const props: HostSurvey_VehicleItemProps = {
    id: ID,
    inStepProperties: STEP,
    inCurrentRowNumber: 1,
    inIsSurveyConfirmed: false,
    inVehicleType: TYPES,
    inHostSurvey_Vehicle: VAN,
    inOwnerType: OWNERS,
    ...events,
    ...overrides,
  };
  const view = render(<HostSurvey_VehicleItem {...props} />);
  const rerender = (next: Partial<HostSurvey_VehicleItemProps>) => {
    view.rerender(<HostSurvey_VehicleItem {...props} {...next} />);
  };
  return { ...view, events, rerender };
}

const byName = (name: string) => document.getElementById(`${SCOPE}-${name}`) as HTMLElement;
const inputOf = (name: string) => byName(name) as HTMLInputElement;
const choose = (dropdown: string, label: string) => {
  fireEvent.click(byName(dropdown).querySelector('.dropdown-display') as Element);
  const row = [...byName(dropdown).querySelectorAll('.dropdown-popup-row')].find((r) => r.textContent === label);
  fireEvent.click(row as Element);
};
const editing = {
  inHostSurvey_Vehicle: NEW_VEHICLE,
  inStepProperties: { IsEdit: true, TrySave: false, HasData: false },
};

describe('HostSurvey_VehicleItem view (VI :202-729)', () => {
  it('shows a saved vehicle as pills under "Vehicle <row + 1>", with Edit and Delete', () => {
    const { container, events } = setup();
    expect(container.querySelector('.orbit-host-survey-vehicle-item')).not.toBeNull();
    expect(screen.getByText('Vehicle 2')).toBeTruthy();
    for (const text of ['Host', 'Van', 'AB 512 KD', '8']) expect(screen.getByText(text)).toBeTruthy();
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.click(screen.getByText('Delete'));
    expect(events.onClickEdit).toHaveBeenCalledTimes(1);
    expect(events.onClickDelete).toHaveBeenCalledTimes(1);
  });

  it('hides Edit and Delete on a confirmed survey', () => {
    setup({ inIsSurveyConfirmed: true });
    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.queryByText('Delete')).toBeNull();
  });

  it('shows the five fields of a vehicle in edit, with the Custom dropdowns closed on their empty values', () => {
    setup(editing);
    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.getByText('Delete')).toBeTruthy();
    const owner = byName('Dropdown_OwnerType');
    expect(owner.className).toBe('dropdown-container dropdown');
    expect(owner.getAttribute('data-dropdown')).toBe('');
    expect(owner.querySelector('.dropdown-display-content')?.textContent).toBe('Select type');
    expect(owner.querySelector('.dropdown-list')).toBeNull();
    expect(byName('Dropdown_VehicleType').textContent).toBe('Select vehicle');
    expect(screen.getByText('Provide Model (Optional)').className).toBe('OSFillParent');
    expect(inputOf('Input_MakeModel').getAttribute('maxlength')).toBe('150');
    expect(inputOf('Input_VehicleNumber').placeholder).toBe('E.g. KDJ 976');
    const seats = inputOf('Input_TotalSeats');
    expect(seats.value).toBe('');
    expect(seats.type).toBe('text');
    expect(seats.getAttribute('maxlength')).toBe('2');
    expect(screen.getByText('Total Seats').className).toBe('mandatory OSFillParent');
  });

  it('opens a dropdown with the empty row and one row per option, and selects an option', () => {
    setup(editing);
    fireEvent.click(byName('Dropdown_OwnerType').querySelector('.dropdown-display') as Element);
    const rows = byName('Dropdown_OwnerType').querySelectorAll('.dropdown-popup-row');
    expect([...rows].map((r) => r.textContent)).toEqual(['Select type', 'Host', 'Helper']);
    expect(rows[0]?.className).toBe('dropdown-popup-row drowpdown-empty-value-row dropdown-popup-row-selected');
    expect(byName('Dropdown_OwnerType').querySelector('.dropdown-background-window')).not.toBeNull();
    fireEvent.click(rows[2] as Element);
    expect(byName('Dropdown_OwnerType').querySelector('.dropdown-list')).toBeNull();
    expect(byName('Dropdown_OwnerType').querySelector('.dropdown-display-content')?.textContent).toBe('Helper');
  });
});

describe('HostSurvey_VehicleItem flows (VI :730-1302)', () => {
  it('OnChange_Inputs: the empty value of a dropdown is "Owner type is required." (not-valid)', () => {
    setup(editing);
    choose('Dropdown_OwnerType', 'Host');
    choose('Dropdown_OwnerType', 'Select type');
    // D2 (decision O2, from the runtime's updateState, not checked on TST): the closed dropdown that shows its message
    // also gets the expanded classes (jsdom has no layout: "down").
    expect(byName('Dropdown_OwnerType').className).toBe(
      'dropdown-container dropdown not-valid dropdown-expanded dropdown-expanded-down',
    );
    expect(byName('Dropdown_OwnerType')).not.toHaveAttribute('aria-describedby');
    expect(screen.getByText('Owner type is required.')).toBeTruthy();
  });

  it('OnChange_Inputs on the seats: TST writes the message the other way round, so none shows', () => {
    setup(editing);
    fireEvent.change(inputOf('Input_TotalSeats'), { target: { value: '4' } });
    expect(inputOf('Input_TotalSeats').value).toBe('4');
    fireEvent.change(inputOf('Input_TotalSeats'), { target: { value: '' } });
    expect(inputOf('Input_TotalSeats').className).toBe('form-control OSFillParent');
    expect(screen.queryByText('Total seats are required.')).toBeNull();
  });

  it('VehicleForm_Validate on TrySave: missing types and seats fail the save with three messages', () => {
    const { events, rerender } = setup(editing);
    rerender({ ...editing, inStepProperties: { IsEdit: true, TrySave: true, HasData: false } });
    expect(events.onSaveFailed).toHaveBeenCalledTimes(1);
    for (const text of ['Owner type is required.', 'Vehicle type is required.', 'Total seats is required.']) {
      expect(screen.getByText(text)).toBeTruthy();
    }
  });

  it('VehicleForm_Validate on TrySave: a complete vehicle is saved as typed', () => {
    const { events, rerender } = setup(editing);
    choose('Dropdown_OwnerType', 'Helper');
    choose('Dropdown_VehicleType', 'Car');
    fireEvent.change(inputOf('Input_MakeModel'), { target: { value: 'Peugeot 308' } });
    fireEvent.change(inputOf('Input_VehicleNumber'), { target: { value: 'AF 204 TL' } });
    fireEvent.change(inputOf('Input_TotalSeats'), { target: { value: '5' } });
    rerender({ ...editing, inStepProperties: { IsEdit: true, TrySave: true, HasData: false } });
    expect(events.onSaveFailed).not.toHaveBeenCalled();
    expect(events.onSaveSuccessful).toHaveBeenCalledWith({
      ...NEW_VEHICLE,
      OwnerType: 'HELPER',
      VehicleType: 'CAR',
      VehicleMakeAndModel: 'Peugeot 308',
      RegistrationNumber: 'AF 204 TL',
      TotalSeats: '5',
    });
  });

  it('OnParametersChanged: the parent record replaces the local copy when it leaves edit', () => {
    const { rerender } = setup({ ...editing, inHostSurvey_Vehicle: { ...VAN, IsEdit: true } });
    fireEvent.change(inputOf('Input_VehicleNumber'), { target: { value: 'ZZ 999' } });
    rerender({ inHostSurvey_Vehicle: VAN, inStepProperties: STEP });
    expect(inputOf('Input_VehicleNumber')).toBeNull();
    expect(screen.getByText('AB 512 KD')).toBeTruthy();
  });

  it('OnKeyup_Inputs cuts the number to 10 characters; OnKeyup_NumericInput removes letters from the seats', () => {
    setup(editing);
    const number = inputOf('Input_VehicleNumber');
    number.value = 'ABCDEFGHIJKLM';
    fireEvent.keyUp(number);
    expect(number.value).toBe('ABCDEFGHIJ');
    fireEvent.change(inputOf('Input_TotalSeats'), { target: { value: '7' } });
    inputOf('Input_TotalSeats').value = '1x';
    fireEvent.keyUp(inputOf('Input_TotalSeats'));
    expect(inputOf('Input_TotalSeats').value).toBe('1');
  });
});

describe('HostSurvey_VehiclePills (view :170-327)', () => {
  it('shows only the set fields, with the owner and type labels, disabled when asked', () => {
    const { container } = render(
      <HostSurvey_VehiclePills
        id="b2-l8-0_0-$b34"
        inIsDisabled
        inVehicleOwners={OWNERS}
        inHostSurvey_Vehicle={{ ...VAN, RegistrationNumber: '', TotalSeats: '0' }}
        inVehicleTypes={TYPES}
      />,
    );
    const pills = container.querySelectorAll('.orbit-host-survey-pill');
    expect([...pills].map((p) => p.textContent)).toEqual(['Host', 'Van']);
    expect(pills[0]?.className).toBe('orbit-host-survey-pill orbit-host-survey-pill-disabled');
    expect(container.querySelector('.orbit-icon-transportation-vehicle')).not.toBeNull();
    expect(container.querySelector('#b2-l8-0_0-b34-\\$b2')).not.toBeNull();
  });
});
