import { fireEvent, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { HouseholdMember } from '@/api/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { MEMBER_DEFAULTS } from '@/pages/Household_Relations/hooks/householdRelationsState';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { HouseholdRelationsView, type HouseholdRelationsViewProps } from './HouseholdRelationsView';

/* The view from props, on a memory router in the app frame (the photos are fetched from the MSW mocks). Fictional
   relatives. */
const PATH = '/UBTConnect/Household_Relations';

const relative = (patch: Partial<HouseholdMember>): HouseholdMember => ({
  ...MEMBER_DEFAULTS,
  HouseholdId: '7300',
  LocalityName: 'Mendoza',
  CountryName: 'Argentina',
  FormattedLocality: 'Mendoza, Argentina',
  ...patch,
});
const FATHER = relative({ Id: '7301', Title: 'Rubén Acosta', Description: 'Father', LifeCycleText: 'Born 2 Mar 1950' });
const MOTHER = relative({
  Id: '7302',
  Title: 'Silvia Medina',
  Description: 'Mother',
  LifeCycleText: 'Born 8 Sep 1953',
});
const NO_AWAY_PARENTS = { Title: '', HouseholdId: '0', LocalityName: '', CountryName: '' };
const SIBLINGS = [
  relative({ Id: '7303', Title: 'Florencia' }),
  relative({
    Id: '7304',
    Title: 'Gonzalo',
    MarriageText: 'Married to Paula Ibáñez of Córdoba',
    MarriageHighlightText: 'Paula Ibáñez',
    HasNavigation: false,
  }),
];

function renderView(props: Partial<HouseholdRelationsViewProps> = {}) {
  const handlers = {
    onClickMember: vi.fn(),
    onAddNotes: vi.fn(),
    onClickBookmark: vi.fn(),
    onNotesSheetClosed: vi.fn(),
    onNotesChanged: vi.fn(),
    onNoteDeleted: vi.fn(),
  };
  const view: HouseholdRelationsViewProps = {
    id: '$b3',
    memberId: '7300',
    isMemberDetailsLoading: false,
    isLoading: false,
    memberName: 'Diego Acosta',
    father: FATHER,
    mother: MOTHER,
    formerSpouses: [],
    parentHouseholdId: '7300',
    awayParents: NO_AWAY_PARENTS,
    noDisplaySiblings: [],
    formerSpousesFetchStatus: DataFetchStatus.Fetched,
    siblings: SIBLINGS,
    siblingsFetchStatus: DataFetchStatus.Fetched,
    notes: { Total: 0, Note_Item_List: [] },
    isNotesSheetOpen: false,
    isBookmarked: false,
    ...handlers,
    ...props,
  };
  const rendered = renderRoutes({ [PATH]: <HouseholdRelationsView {...view} /> }, PATH);
  return { ...rendered, handlers };
}

/** The button of the right column of b3-Buttons (Bookmark). */
const bookmarkButton = () => screen.getByText('Bookmark').closest('button');

const sectionText = (id: string) => document.getElementById(id)?.textContent ?? null;
/** The two skeleton sections of the block that are loading (not those of the photos). */
const skeletons = () =>
  document.querySelectorAll(
    '[data-block="Directory_Household.HouseholdRelations_Block"] > [data-block="ConnectPatterns.SkeletonSection"] > [inert]',
  );

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('HouseholdRelationsView', () => {
  it('shows the member, the buttons, the parents and the siblings', () => {
    const { container } = renderView();
    expect(container.querySelector('[data-block="Directory_Household.HouseholdRelations_Block"]')?.id).toBe('$b3');
    expect(screen.getByText('Diego Acosta')).toBeTruthy();
    expect(sectionText('b3-Buttons')).toContain('Notes');
    expect(sectionText('b3-Buttons')).toContain('Bookmark');
    const relations = sectionText('b3-Relations') ?? '';
    expect(relations).toContain('Relations');
    expect(relations).toContain('Rubén AcostaFather');
    expect(relations).toContain('Silvia MedinaMother');
    expect(relations).toContain('Mendoza, Argentina');
    const household = sectionText('b3-Household') ?? '';
    expect(household).toContain('Household');
    expect(household).toContain('Florencia');
    expect(household).toContain('Married to Paula Ibáñez of Córdoba');
    expect(screen.queryByText('No relation or household information available.')).toBeNull();
    expect(skeletons()).toHaveLength(0);
  });

  it('takes the relation text of a parent from its Description', () => {
    renderView({ father: { ...FATHER, Description: 'Stepfather' } });
    expect(sectionText('b3-Relations')).toContain('Rubén AcostaStepfather');
  });

  it('shows one away-parents row in place of the father and the mother; its name opens the away household', () => {
    const { handlers } = renderView({
      awayParents: {
        Title: 'Rubén & Silvia Acosta',
        HouseholdId: '7310',
        LocalityName: 'Mendoza',
        CountryName: 'Argentina',
      },
    });
    const relations = sectionText('b3-Relations') ?? '';
    expect(relations).toContain('Rubén & Silvia Acosta');
    expect(relations).not.toContain('Silvia Medina');
    expect(relations).not.toContain('Father');
    // the chevron of the row is the one of the father (live TST)
    expect(document.querySelectorAll('#b3-Relations .connect-icon-chevron_right')).toHaveLength(1);
    fireEvent.click(screen.getByText('Rubén & Silvia Acosta'));
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(
      expect.objectContaining({ HouseholdId: '7310', LocalityName: 'Mendoza', CountryName: 'Argentina' }),
    );
    const chevron = document.querySelector('#b3-Relations .connect-icon-chevron_right');
    if (chevron) fireEvent.click(chevron);
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(FATHER);
  });

  it('shows the NoDisplaySiblings in a second list; its chevron is the one of the current sibling row', () => {
    const extra = relative({ Id: '7307', Title: 'Lucía Acosta' });
    const { handlers } = renderView({ noDisplaySiblings: [extra] });
    expect(document.querySelectorAll('#b3-Household [data-list]')).toHaveLength(2);
    expect(sectionText('b3-Household')).toContain('Lucía Acosta');
    fireEvent.click(screen.getByText('Lucía Acosta'));
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(extra);
    const chevrons = document.querySelectorAll('#b3-Household .connect-icon-chevron_right');
    const last = chevrons[chevrons.length - 1];
    if (last) fireEvent.click(last);
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(SIBLINGS[0]);
  });

  it('shows the household section with only NoDisplaySiblings', () => {
    renderView({ siblings: [], noDisplaySiblings: [relative({ Id: '7307', Title: 'Lucía Acosta' })] });
    expect(document.querySelectorAll('#b3-Household [data-list]')).toHaveLength(1);
    expect(sectionText('b3-Household')).toContain('Lucía Acosta');
  });

  it('hides the relations section when ParentHouseholdId is "" (live TST); the household section stays', () => {
    renderView({ parentHouseholdId: '' });
    expect(document.getElementById('b3-Relations')).toBeNull();
    expect(sectionText('b3-Household')).toContain('Florencia');
  });

  it('shows a chevron for each relative with navigation', () => {
    renderView();
    expect(document.querySelectorAll('#b3-Relations .connect-icon-chevron_right')).toHaveLength(2);
    // Gonzalo has no navigation.
    expect(document.querySelectorAll('#b3-Household .connect-icon-chevron_right')).toHaveLength(1);
  });

  it('shows the skeletons while loading', () => {
    renderView({ isMemberDetailsLoading: true, isLoading: true });
    expect(skeletons()).toHaveLength(2);
  });

  it('shows the "no relation" text when there is no relative and nothing loads', () => {
    renderView({
      father: MEMBER_DEFAULTS,
      mother: MEMBER_DEFAULTS,
      siblings: [],
    });
    expect(screen.getByText('No relation or household information available.')).toBeTruthy();
    expect(document.getElementById('b3-Relations')).toBeNull();
    expect(document.getElementById('b3-Household')).toBeNull();
  });

  it('keeps the relations section while loading, also without a relative', () => {
    renderView({ father: MEMBER_DEFAULTS, mother: MEMBER_DEFAULTS, siblings: [], isLoading: true });
    expect(document.getElementById('b3-Relations')).not.toBeNull();
    expect(document.getElementById('b3-Household')).toBeNull();
  });

  it('shows the deceased caption of a deceased parent instead of the locality', () => {
    renderView({ father: { ...FATHER, IsDeceased: true, LifeCycleText: 'Died 4 Jan 2019' } });
    const relations = sectionText('b3-Relations') ?? '';
    expect(relations).toContain('Died 4 Jan 2019');
    expect(relations.match(/Mendoza, Argentina/g)).toHaveLength(1);
  });

  it('shows previous spouses, with a chevron only for one with a household', () => {
    renderView({
      formerSpouses: [
        relative({ Id: '7305', Title: 'Romina Paz' }),
        relative({ Id: '7306', Title: 'Natalia Gil', HouseholdId: '0' }),
      ],
    });
    const spouses = document.getElementById('b3-PreviousSpouses');
    expect(spouses?.textContent).toContain('Romina PazPrevious spouse');
    expect(spouses?.textContent).toContain('Natalia GilPrevious spouse');
    expect(spouses?.querySelectorAll('.connect-icon-chevron_right')).toHaveLength(1);
  });

  it('raises OnClick_Member from the chevron and the name of a relative', () => {
    const { handlers } = renderView();
    const chevron = document.querySelector('#b3-Household .connect-icon-chevron_right');
    if (chevron) fireEvent.click(chevron);
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(SIBLINGS[0]);
    fireEvent.click(screen.getByText('Rubén Acosta'));
    expect(handlers.onClickMember).toHaveBeenLastCalledWith(FATHER);
  });

  it('Bookmark: Secondary and enabled while not bookmarked; a click raises OnClick_Bookmark', () => {
    const { handlers } = renderView();
    const button = bookmarkButton();
    expect(button?.className).toContain('secondary');
    expect(button?.className).not.toContain('primary');
    expect(button?.disabled).toBe(false);
    fireEvent.click(screen.getByText('Bookmark'));
    expect(handlers.onClickBookmark).toHaveBeenCalledTimes(1);
  });

  it('Bookmark: Primary while bookmarked', () => {
    renderView({ isBookmarked: true });
    const button = bookmarkButton();
    expect(button?.className).toContain('primary');
    expect(button?.className).not.toContain('secondary');
    expect(button?.disabled).toBe(false);
  });

  it('raises the Notes handler; the notes sheet stays closed', () => {
    const { handlers } = renderView();
    fireEvent.click(screen.getByText('Notes'));
    expect(handlers.onAddNotes).toHaveBeenCalledTimes(1);
    expect(document.querySelector('[data-block="CW_Notes.NotesSheet"]')).not.toBeNull();
    expect(document.querySelector('.osui-bottom-sheet--is-open')).toBeNull();
  });

  it('opens the notes sheet when isNotesSheetOpen turns true', async () => {
    function Toggle() {
      const [open, setOpen] = useState(false);
      return (
        <HouseholdRelationsView
          memberId="7300"
          isMemberDetailsLoading={false}
          isLoading={false}
          memberName="Diego Acosta"
          father={FATHER}
          mother={MOTHER}
          formerSpouses={[]}
          parentHouseholdId="7300"
          awayParents={NO_AWAY_PARENTS}
          noDisplaySiblings={[]}
          formerSpousesFetchStatus={DataFetchStatus.Fetched}
          siblings={SIBLINGS}
          siblingsFetchStatus={DataFetchStatus.Fetched}
          notes={{ Total: 0, Note_Item_List: [] }}
          isNotesSheetOpen={open}
          isBookmarked={false}
          onClickBookmark={vi.fn()}
          onClickMember={vi.fn()}
          onAddNotes={() => {
            setOpen(true);
          }}
          onNotesSheetClosed={vi.fn()}
          onNotesChanged={vi.fn()}
          onNoteDeleted={vi.fn()}
        />
      );
    }
    renderRoutes({ [PATH]: <Toggle /> }, PATH);
    fireEvent.click(screen.getByText('Notes'));
    await waitFor(() => {
      expect(document.querySelector('.osui-bottom-sheet--is-open')).not.toBeNull();
    });
  });
});
