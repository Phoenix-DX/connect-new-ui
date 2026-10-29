import { describe, expect, it } from 'vitest';
import type { HostSurveyHelperMember } from '@/api/event';
import {
  EMPTY_HELPER,
  addSelectedHelpers,
  helperStatusPill,
  helpersToSave,
  memberPillName,
  mergeFoundHelpers,
} from './hostSurveyHelpers';

/* Pure parts of HostSurvey_HelperItem (HI), HostSurvey_AddHelper (AH) and the helper summary (HS). */

const member = (MemberId: string, FirstName: string, LastName: string): HostSurveyHelperMember => ({
  MemberId,
  FirstName,
  LastName,
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
  IsEventLocality: true,
  IsEventCountry: true,
  IsSelected: false,
  SortOrder: '1',
});
const helper = (MemberId: string, FirstName: string, LastName: string) => ({
  ...EMPTY_HELPER,
  MemberId,
  FirstName,
  LastName,
});

describe('helperStatusPill (HI view $b2, HS view #102)', () => {
  it('approved: green and the check icon; pending: orange and the circle warning; other: orange and the warning', () => {
    expect(helperStatusPill(3)).toEqual({
      extendedStyle: 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);\n',
      iconClass: 'orbit-icon-circle-check',
    });
    expect(helperStatusPill(4).iconClass).toBe('orbit-icon-circle-warning');
    expect(helperStatusPill(2)).toEqual({
      extendedStyle: 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);\n',
      iconClass: 'orbit-icon-warning',
    });
  });
});

describe('memberPillName (AH view #12)', () => {
  it('joins the names with one space, and keeps a single name alone', () => {
    expect(memberPillName(helper('1', 'Lucía', 'Benítez'))).toBe('Lucía Benítez');
    expect(memberPillName(helper('1', 'Lucía', ''))).toBe('Lucía');
    expect(memberPillName(helper('1', '', 'Benítez'))).toBe('Benítez');
  });
});

describe('mergeFoundHelpers (AH OnAfterFetch_GetSurveyHelpers)', () => {
  const page1 = [member('11', 'Lucía', 'Benítez')];
  it('selects the members already picked; a new search replaces the list', () => {
    const merged = mergeFoundHelpers(page1, [member('12', 'Tomás', 'Acosta')], [helper('12', 'Tomás', 'Acosta')], true);
    expect(merged.map((m) => [m.MemberId, m.IsSelected])).toEqual([['12', true]]);
  });
  it('a further page is appended', () => {
    const merged = mergeFoundHelpers(page1, [member('12', 'Tomás', 'Acosta')], [], false);
    expect(merged.map((m) => m.MemberId)).toEqual(['11', '12']);
  });
});

describe('addSelectedHelpers (AH OnClick_AddHelpers)', () => {
  it('appends the selected members that are not picked yet, as helper records', () => {
    const data = [
      { ...member('11', 'Lucía', 'Benítez'), IsSelected: true },
      { ...member('12', 'Tomás', 'Acosta'), IsSelected: true },
      member('13', 'Inés', 'Rojas'),
    ];
    const next = addSelectedHelpers([helper('11', 'Lucía', 'Benítez')], data);
    expect(next?.map((h) => h.MemberId)).toEqual(['11', '12']);
    expect(next?.[1]).toEqual({
      ...EMPTY_HELPER,
      MemberId: '12',
      FirstName: 'Tomás',
      LastName: 'Acosta',
      LocalityName: 'Bahia Blanca',
      CountryName: 'Argentina',
    });
  });
  it('does nothing without a selected member', () => {
    expect(addSelectedHelpers([], [member('11', 'Lucía', 'Benítez')])).toBeUndefined();
  });
});

describe('helpersToSave (AH OnHandle_Save)', () => {
  it('sets the role, the first Pending status and IsEdit False on every helper', () => {
    const statuses = [
      { Id: 3, Label: 'Approved', JSON_Name: 'approved' },
      { Id: 4, Label: 'Pending', JSON_Name: 'pending' },
    ];
    const saved = helpersToSave([{ ...helper('11', 'Lucía', 'Benítez'), IsEdit: true }], 'USHER', statuses);
    expect(saved[0]).toMatchObject({ HelperRole: 'USHER', HelperStatus: 'pending', IsEdit: false });
    expect(helpersToSave([helper('11', 'Lucía', 'Benítez')], 'USHER', [])[0]?.HelperStatus).toBe('');
  });
});
