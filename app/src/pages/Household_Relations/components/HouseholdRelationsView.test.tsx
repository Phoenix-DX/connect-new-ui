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
const FATHER = relative({ Id: '7301', Title: 'Rubén Acosta', LifeCycleText: 'Born 2 Mar 1950' });
const MOTHER = relative({ Id: '7302', Title: 'Silvia Medina', LifeCycleText: 'Born 8 Sep 1953' });
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
    formerSpousesFetchStatus: DataFetchStatus.Fetched,
    siblings: SIBLINGS,
    siblingsFetchStatus: DataFetchStatus.Fetched,
    notes: { Total: 0, Note_Item_List: [] },
    isNotesSheetOpen: false,
    ...handlers,
    ...props,
  };
  const rendered = renderRoutes({ [PATH]: <HouseholdRelationsView {...view} /> }, PATH);
  return { ...rendered, handlers };
}

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
    expect(screen.queryByText('No relation or household information avaialble.')).toBeNull();
    expect(skeletons()).toHaveLength(0);
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
    expect(screen.getByText('No relation or household information avaialble.')).toBeTruthy();
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
          formerSpousesFetchStatus={DataFetchStatus.Fetched}
          siblings={SIBLINGS}
          siblingsFetchStatus={DataFetchStatus.Fetched}
          notes={{ Total: 0, Note_Item_List: [] }}
          isNotesSheetOpen={open}
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
