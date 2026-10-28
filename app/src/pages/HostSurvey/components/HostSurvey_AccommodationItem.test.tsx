import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { HostSurveyRoom } from '@/api/event';
import { HostSurvey_AccommodationItem, type HostSurvey_AccommodationItemProps } from './HostSurvey_AccommodationItem';

const prefs = [
  { Id: 3, Label: 'Male', JSON_Name: 'MALE', Order: 1 },
  { Id: 4, Label: 'Female', JSON_Name: 'FEMALE', Order: 2 },
  { Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 3 },
  { Id: 1, Label: 'Either', JSON_Name: 'EITHER', Order: 4 },
];
const floors = [
  { Id: 5, Label: 'Ground Floor', JSON_Name: 'ground', Order: 2 },
  { Id: 6, Label: 'First Floor', JSON_Name: 'first', Order: 3 },
];
const bedSizes = [
  { Id: '3', Label: 'Single', JSON_Name: 'SINGLE', Order: 1 },
  { Id: '1', Label: 'Queen', JSON_Name: 'QUEEN', Order: 4 },
];
const newRoom: HostSurveyRoom = {
  Name: '',
  GenderPreference: '',
  Floor: '',
  NumberOfBeds: '0',
  Beds: [],
  HasEnsuite: false,
  HasToilet: false,
  HasShower: false,
  HasBasin: false,
  RoomNote: '',
  IsEdit: true,
};
const props = (patch: Partial<HostSurvey_AccommodationItemProps> = {}): HostSurvey_AccommodationItemProps => ({
  id: 'b2-l1_1-$b9',
  inCurrentRowNumber: 1,
  inGenderPreferences: prefs,
  inIsSurveyConfirmed: false,
  inRoomNames: ['Sunrise Suite', ''],
  inHostSurvey_Room: newRoom,
  inHouseFloors: floors,
  inBedSize: bedSizes,
  inStepProperties: { IsEdit: true, TrySave: false, HasData: false },
  onSaveFailed: vi.fn(),
  onClickEdit: vi.fn(),
  onSaveSuccessful: vi.fn(),
  onClickDelete: vi.fn(),
  ...patch,
});

describe('HostSurvey_AccommodationItem', () => {
  it('a room out of edit shows "Room <n>", Edit and Delete, and its pills', () => {
    const p = props({
      inHostSurvey_Room: { ...newRoom, Name: 'Garden Room', IsEdit: false },
      inStepProperties: { IsEdit: false, TrySave: false, HasData: true },
    });
    render(<HostSurvey_AccommodationItem {...p} />);
    expect(screen.getByText('Room 2')).toBeInTheDocument();
    expect(screen.getByText('Garden Room')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.click(screen.getByText('Delete'));
    expect(p.onClickEdit).toHaveBeenCalledTimes(1);
    expect(p.onClickDelete).toHaveBeenCalledTimes(1);
  });

  it('a room in edit shows the form; TrySave with empty fields raises Save_Failed with the messages', () => {
    const p = props();
    const { rerender, container } = render(<HostSurvey_AccommodationItem {...p} />);
    expect(screen.getByPlaceholderText('Provide a room name')).toHaveAttribute('maxlength', '250');
    expect(screen.getAllByRole('radio').map((b) => b.textContent)).toEqual(['Male', 'Female', 'Couple', 'Either']);
    expect(screen.getByText('Select number of beds')).toBeInTheDocument();
    rerender(
      <HostSurvey_AccommodationItem {...p} inStepProperties={{ IsEdit: true, TrySave: true, HasData: false }} />,
    );
    expect(p.onSaveFailed).toHaveBeenCalledWith(false);
    expect(screen.getByText('Room name is required.')).toBeInTheDocument();
    expect(screen.getByText('Sleeping Arrangements are required.')).toBeInTheDocument();
    expect(screen.getByText('Number of beds is required.')).toBeInTheDocument();
    expect(screen.getByText('Floor is required.')).toBeInTheDocument();
    expect(container.querySelector('#b2-l1_1-b9-Input_RoomName')).toHaveClass('not-valid');
  });

  it('a complete room raises Save_Successful with the edited copy; a same name raises Save_Failed(True)', () => {
    const filled = {
      ...newRoom,
      Name: 'Garden Room',
      GenderPreference: 'MALE',
      Floor: 'ground',
      NumberOfBeds: '1',
      Beds: ['SINGLE'],
    };
    const p = props({ inHostSurvey_Room: filled });
    const { rerender } = render(<HostSurvey_AccommodationItem {...p} />);
    rerender(
      <HostSurvey_AccommodationItem {...p} inStepProperties={{ IsEdit: true, TrySave: true, HasData: false }} />,
    );
    expect(p.onSaveSuccessful).toHaveBeenCalledWith(filled);

    const q = props({ inHostSurvey_Room: { ...filled, Name: 'sunrise suite' } });
    const r2 = render(<HostSurvey_AccommodationItem {...q} />);
    r2.rerender(
      <HostSurvey_AccommodationItem {...q} inStepProperties={{ IsEdit: true, TrySave: true, HasData: false }} />,
    );
    expect(q.onSaveFailed).toHaveBeenCalledWith(true);
  });

  it('choosing the number of beds adds one Bed Type dropdown per bed', () => {
    render(<HostSurvey_AccommodationItem {...props()} />);
    fireEvent.click(screen.getByText('Select number of beds'));
    fireEvent.click(screen.getByText('2'));
    expect(screen.getAllByText('Bed Type')).toHaveLength(2);
    expect(screen.getAllByText('Select bed type')).toHaveLength(2);
  });

  it('a Bed Type dropdown sets its bed, then OnChange_BedSize checks it: the empty row shows "Bed type is required."', () => {
    render(<HostSurvey_AccommodationItem {...props()} />);
    fireEvent.click(screen.getByText('Select number of beds'));
    fireEvent.click(screen.getByText('2'));
    const bed = () =>
      document.querySelectorAll<HTMLElement>('.orbit-host-survey-beds .dropdown-container')[0] as HTMLElement;
    fireEvent.click(bed().querySelector('.dropdown-display') as Element);
    fireEvent.click(screen.getByText('Queen'));
    expect(bed().querySelector('.dropdown-display-content')?.textContent).toBe('Queen');
    expect(screen.queryByText('Bed type is required.')).toBeNull();
    fireEvent.click(bed().querySelector('.dropdown-display') as Element);
    fireEvent.click(bed().querySelector('.drowpdown-empty-value-row') as Element);
    expect(bed().querySelector('.dropdown-display-content')?.textContent).toBe('Select bed type');
    expect(bed().className).toContain('not-valid');
    expect(screen.getByText('Bed type is required.')).toBeInTheDocument();
  });

  it('D6: the Floor empty row while the floor is empty raises OnChange_Inputs: "Floor is required."', () => {
    render(<HostSurvey_AccommodationItem {...props()} />);
    fireEvent.click(screen.getByText('Select floor'));
    fireEvent.click(document.querySelector('.dropdown-list .drowpdown-empty-value-row') as Element);
    expect(screen.getByText('Floor is required.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Select floor'));
    fireEvent.click(screen.getByText('First Floor'));
    expect(screen.queryByText('Floor is required.')).toBeNull();
  });

  it('a confirmed survey hides Edit and Delete', () => {
    render(
      <HostSurvey_AccommodationItem
        {...props({ inIsSurveyConfirmed: true, inHostSurvey_Room: { ...newRoom, Name: 'Studio', IsEdit: false } })}
      />,
    );
    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.queryByText('Delete')).toBeNull();
  });
});
