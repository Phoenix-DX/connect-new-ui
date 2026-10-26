import { describe, expect, it } from 'vitest';
import { contactUsDetailsParams, get_ContactUsMenuSections, initialIgnore } from './contactUsMenuState';

describe('Get_ContactUsMenuSections', () => {
  it('signed in: three sections with 4 / 1 / 2 rows as captured (dom/default.html:44-418)', () => {
    const sections = get_ContactUsMenuSections(true);
    expect(sections.map((s) => s.SectionTitle)).toEqual([
      'User Account Management',
      'Community Engagement',
      'General Inquiries',
    ]);
    expect(sections.map((s) => s.MenuOptions?.length)).toEqual([4, 1, 2]);
    expect(sections[2]?.MenuOptions?.map((o) => [o.Id, o.Label, o.IconId])).toEqual([
      ['General Questions ', 'General Questions ', 'connect-icon-book_open'],
      ['General Suggestions, Feedback & Rating', 'General Suggestions, Feedback & Rating', 'connect-icon-tooltip'],
    ]);
  });

  it('signed out: General Inquiries holds only General Questions or Suggestions (compiled branch, Q1)', () => {
    const sections = get_ContactUsMenuSections(false);
    expect(sections.map((s) => s.MenuOptions?.length)).toEqual([4, 1, 1]);
    expect(sections[2]?.MenuOptions?.[0]).toEqual({
      Id: 'General Questions or Suggestions',
      Label: 'General Questions or Suggestions',
      IconId: 'connect-icon-book_open',
    });
  });
});

describe('ScreenEvent_OnInitialize ignore variables', () => {
  it('signed out: IgnorePolices only, whatever NeedRegister is', () => {
    expect(initialIgnore(false, false)).toEqual({ polices: true, lockedScreen: false });
    expect(initialIgnore(false, true)).toEqual({ polices: true, lockedScreen: false });
  });

  it('signed in: both follow PIN_Check.NeedRegister', () => {
    expect(initialIgnore(true, false)).toEqual({ polices: false, lockedScreen: false });
    expect(initialIgnore(true, true)).toEqual({ polices: true, lockedScreen: true });
  });
});

describe('OnClick_MenuOption inputs of ContactUsDetails', () => {
  const [accountSection] = get_ContactUsMenuSections(true);
  if (accountSection === undefined) throw new Error('no section');

  it('the row with the event Id: its Id, the section title and its Label', () => {
    expect(contactUsDetailsParams(accountSection, 'Log in with UBT One')).toEqual({
      In_ContactSubjectId: 'Log in with UBT One',
      In_ContactSubjectTitle: 'User Account Management',
      In_ListMenuOptionLabel: 'Log in with UBT One',
    });
  });

  it('an Id that is not in the section: the section title and empty row texts', () => {
    expect(contactUsDetailsParams(accountSection, 'Community Events')).toEqual({
      In_ContactSubjectId: '',
      In_ContactSubjectTitle: 'User Account Management',
      In_ListMenuOptionLabel: '',
    });
  });

  it('a section without rows or title: every input is empty', () => {
    expect(contactUsDetailsParams({}, '')).toEqual({
      In_ContactSubjectId: '',
      In_ContactSubjectTitle: '',
      In_ListMenuOptionLabel: '',
    });
  });
});
