import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { HostSurveyHelper } from '@/api/event';
import { orbitStaticEntities } from '@/platform/bootstrap/mocks';
import { setOrbitStaticEntitiesDatabase, syncAllOrbitStaticEntities } from '@/platform/storage/localEntities';
import { HostSurvey_HelperItem, type HostSurvey_HelperItemProps } from './HostSurvey_HelperItem';
import { EMPTY_HELPER } from './hostSurveyHelpers';

/* HostSurvey_HelperItem (HI = HostSurvey_HelperItem.mvc.js): view, OnParametersChanged and OnChange_HelperRoles. */

const ROLES = [
  { Id: 6, Label: 'Helper', JSON_Name: 'HELPER', Order: 1, isReadOnly: false },
  { Id: 1, Label: 'Usher', JSON_Name: 'USHER', Order: 2, isReadOnly: false },
];
const SAVED: HostSurveyHelper = {
  ...EMPTY_HELPER,
  Id: '501',
  MemberId: '91002',
  FirstName: 'Nora',
  LastName: 'Pérez',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
  HelperRole: 'USHER',
  HelperStatus: 'approved',
};
const STEP = { IsEdit: false, TrySave: false, HasData: true };

function props(over: Partial<HostSurvey_HelperItemProps> = {}): HostSurvey_HelperItemProps {
  return {
    id: 'b2-l3_0-$b15',
    inIsSurveyConfirmed: false,
    inFilteredHelperRoles: ROLES,
    inCurrentRowNumber: 0,
    inHelperRoles: ROLES,
    inHostSurvey_Helper: SAVED,
    inStepProperties: STEP,
    onSaveFailed: vi.fn(),
    onClickEdit: vi.fn(),
    onClickDelete: vi.fn(),
    onSaveSuccessful: vi.fn(),
    ...over,
  };
}

beforeEach(async () => {
  setOrbitStaticEntitiesDatabase(null);
  await syncAllOrbitStaticEntities(orbitStaticEntities());
});

describe('HostSurvey_HelperItem view', () => {
  it('a saved helper: "Helper 1", Edit and Delete, the status pill and the helper pills', () => {
    const p = props();
    render(<HostSurvey_HelperItem {...p} />);
    expect(screen.getByText('Helper 1')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(document.querySelector('[data-block="Orbit_Blocks.HostSurvey_HelperPills"]')).not.toBeNull();
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.click(screen.getByText('Delete'));
    expect(p.onClickEdit).toHaveBeenCalledTimes(1);
    expect(p.onClickDelete).toHaveBeenCalledTimes(1);
  });

  it('a confirmed survey hides Edit and Delete; a step in edit hides Edit', () => {
    const { rerender } = render(<HostSurvey_HelperItem {...props({ inIsSurveyConfirmed: true })} />);
    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.queryByText('Delete')).toBeNull();
    rerender(<HostSurvey_HelperItem {...props({ inStepProperties: { ...STEP, IsEdit: true } })} />);
    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('a helper in edit: the member card, the mandatory Role label and Dropdown_HelperRoles; no status pill', () => {
    render(<HostSurvey_HelperItem {...props({ inHostSurvey_Helper: { ...SAVED, IsEdit: true } })} />);
    expect(document.querySelector('[data-block="Orbit_Blocks.Card_MemberInformation_Survey"]')).not.toBeNull();
    expect(document.querySelector('label.mandatory')?.getAttribute('for')).toBe('b2-l3_0-b15-Dropdown_HelperRoles');
    expect(document.getElementById('b2-l3_0-b15-Dropdown_HelperRoles')?.textContent).toContain('Usher');
    expect(screen.queryByText('Approved')).toBeNull();
  });
});

describe('HostSurvey_HelperItem OnParametersChanged', () => {
  it('TrySave with a role: Save_Successful(Edit_HostSurvey_Helper)', () => {
    const p = props({ inHostSurvey_Helper: { ...SAVED, IsEdit: true } });
    const { rerender } = render(<HostSurvey_HelperItem {...p} />);
    rerender(<HostSurvey_HelperItem {...p} inStepProperties={{ ...STEP, IsEdit: true, TrySave: true }} />);
    expect(p.onSaveSuccessful).toHaveBeenCalledWith({ ...SAVED, IsEdit: true });
  });

  it('TrySave without a role: the dropdown is not valid with "Helper role is required." and Save_Failed', () => {
    const p = props({ inHostSurvey_Helper: { ...SAVED, IsEdit: true, HelperRole: '' } });
    const { rerender } = render(<HostSurvey_HelperItem {...p} />);
    rerender(<HostSurvey_HelperItem {...p} inStepProperties={{ ...STEP, IsEdit: true, TrySave: true }} />);
    expect(p.onSaveFailed).toHaveBeenCalledTimes(1);
    expect(p.onSaveSuccessful).not.toHaveBeenCalled();
    expect(screen.getByText('Helper role is required.')).toBeInTheDocument();
    expect(document.getElementById('b2-l3_0-b15-Dropdown_HelperRoles')?.className).toContain('not-valid');
  });

  it('without TrySave the helper of the parent replaces the edit copy when IsEdit differs', () => {
    const p = props();
    const { rerender } = render(<HostSurvey_HelperItem {...p} />);
    rerender(<HostSurvey_HelperItem {...p} inHostSurvey_Helper={{ ...SAVED, IsEdit: true }} />);
    expect(document.querySelector('[data-block="Orbit_Blocks.Card_MemberInformation_Survey"]')).not.toBeNull();
  });

  it('a confirmed survey does nothing', () => {
    const p = props({ inIsSurveyConfirmed: true, inHostSurvey_Helper: { ...SAVED, IsEdit: true } });
    const { rerender } = render(<HostSurvey_HelperItem {...p} />);
    rerender(<HostSurvey_HelperItem {...p} inStepProperties={{ ...STEP, TrySave: true }} />);
    expect(p.onSaveSuccessful).not.toHaveBeenCalled();
    expect(p.onSaveFailed).not.toHaveBeenCalled();
  });
});
