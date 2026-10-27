import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { calledActions, freshPage } from '@/test/testSupport';
import { HostSurvey_AddHelper, type HostSurvey_AddHelperProps } from './HostSurvey_AddHelper';

/* HostSurvey_AddHelper (AH = HostSurvey_AddHelper.mvc.js) with the MSW mock of DataActionGetSurveyHelpers (mocks.ts:
   the householders of the mock world). */

const ROLES = [
  { Id: 6, Label: 'Helper', JSON_Name: 'HELPER', Order: 1, isReadOnly: false },
  { Id: 1, Label: 'Usher', JSON_Name: 'USHER', Order: 2, isReadOnly: false },
];
const STATUSES = [
  { Id: 3, Label: 'Approved', JSON_Name: 'approved' },
  { Id: 4, Label: 'Pending', JSON_Name: 'pending' },
];
const SEARCH = 'HostSurvey_AddHelper/DataActionGetSurveyHelpers';

function props(over: Partial<HostSurvey_AddHelperProps> = {}): HostSurvey_AddHelperProps {
  return {
    id: 'b2-$b16',
    inHelperRoles: ROLES,
    inEventId: '7301',
    inTrySave: false,
    inHelperStatus: STATUSES,
    inAlreadyAddedHelpers: [],
    onSaveFailed: vi.fn(),
    onSaveSuccessful: vi.fn(),
    onClickDelete: vi.fn(),
    ...over,
  };
}

const input = () => document.getElementById('b2-b16-Input_SearchTerm') as HTMLInputElement;

/** Types a search term and presses Enter in Input_SearchTerm. */
async function search(term: string) {
  fireEvent.change(input(), { target: { value: term } });
  fireEvent.keyUp(input(), { key: 'Enter' });
  await waitFor(() => {
    expect(document.querySelector('[data-block="Orbit_Blocks.Card_MemberInformation_Survey"]')).not.toBeNull();
  });
}

beforeEach(() => {
  freshPage();
});

describe('HostSurvey_AddHelper view', () => {
  it('shows the "Helper" item with Delete, "Search member", the Role dropdown and the sheet top bar', () => {
    const p = props();
    render(<HostSurvey_AddHelper {...p} />);
    expect(screen.getAllByText('Search Helpers')).toHaveLength(2);
    expect(document.getElementById('b2-b16-Div_SearchMember')?.textContent).toContain('Search member');
    expect(document.getElementById('b2-b16-Dropdown_HelperRoles')?.textContent).toContain('Select role');
    fireEvent.click(screen.getByText('Delete'));
    expect(p.onClickDelete).toHaveBeenCalledTimes(1);
  });
});

describe('HostSurvey_AddHelper search, pick and save', () => {
  it('Enter runs the search: "Top n results", then a member is picked and added as a pill', async () => {
    render(<HostSurvey_AddHelper {...props()} />);
    await search('Pérez');
    expect(calledActions()).toContain(SEARCH);
    expect(screen.getByText(/^Top \d+ results$/)).toBeInTheDocument();
    const card = document.querySelector('[data-block="Orbit_Blocks.Card_MemberInformation_Survey"] .member-info-name');
    const name = card?.textContent ?? '';
    fireEvent.click(card as Element);
    expect(document.querySelector('.member-info-cont.background-neutral-2')).not.toBeNull();
    fireEvent.click(screen.getByText('Add'));
    expect(document.getElementById('b2-b16-l1_0-Div_MemberPill')?.textContent).toBe(name);
  });

  it('a search without matches shows NoResults with the term', async () => {
    render(<HostSurvey_AddHelper {...props()} />);
    fireEvent.change(input(), { target: { value: 'Zzyzx' } });
    fireEvent.keyUp(input(), { key: 'Enter' });
    expect(await screen.findByText("No results for 'Zzyzx'.")).toBeInTheDocument();
  });

  it('TrySave with no helper and no role: "Role is required.", "Helper is required." and Save_Failed', async () => {
    const p = props();
    const { rerender } = render(<HostSurvey_AddHelper {...p} />);
    rerender(<HostSurvey_AddHelper {...p} inTrySave />);
    await waitFor(() => {
      expect(p.onSaveFailed).toHaveBeenCalledTimes(1);
    });
    expect(screen.getByText('Role is required.')).toBeInTheDocument();
    expect(screen.getByText('Helper is required.')).toBeInTheDocument();
    expect(document.getElementById('b2-b16-Div_SearchMember')?.className).toContain(
      'orbit-host-survey-helper-search-not-valid',
    );
  });

  it('TrySave with helpers and a role: Save_Successful with the role, the Pending status and IsEdit False', async () => {
    const p = props();
    const { rerender } = render(<HostSurvey_AddHelper {...p} />);
    await search('Pérez');
    fireEvent.click(document.querySelector('.member-info-name') as Element);
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(document.querySelector('#b2-b16-Dropdown_HelperRoles .dropdown-display') as Element);
    fireEvent.click(screen.getByText('Usher'));
    act(() => {
      rerender(<HostSurvey_AddHelper {...p} inTrySave />);
    });
    expect(p.onSaveSuccessful).toHaveBeenCalledTimes(1);
    const saved = vi.mocked(p.onSaveSuccessful).mock.calls[0]?.[0] ?? [];
    expect(saved).toHaveLength(1);
    expect(saved[0]).toMatchObject({ HelperRole: 'USHER', HelperStatus: 'pending', IsEdit: false });
  });

  it('a click on Icon_Delete removes the pill and sets IsNotValidInput when none is left', async () => {
    render(<HostSurvey_AddHelper {...props()} />);
    await search('Pérez');
    fireEvent.click(document.querySelector('.member-info-name') as Element);
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(document.getElementById('b2-b16-l1_0-Icon_Delete') as Element);
    expect(document.getElementById('b2-b16-l1_0-Div_MemberPill')).toBeNull();
    expect(screen.getByText('Helper is required.')).toBeInTheDocument();
  });
});
