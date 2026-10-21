import { describe, expect, it } from 'vitest';
import { get_ContactUsMenuSections } from './actions';

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
