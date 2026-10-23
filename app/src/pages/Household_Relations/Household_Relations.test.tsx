import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { VITALE, VITALE_PARENTS } from '@/mocks/fictional/directory';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import Household_Relations from './Household_RelationsPage';

/* The page with the flows of its block (useHouseholdRelations) and the MSW mocks of the route, in the app frame on a
   memory router. The relations are the fictional Vitale family (src/mocks/fictional/directory.ts). */
const PATH = '/UBTConnect/Household_Relations';
const HOME = '/UBTConnect/HomeFeed';
const OTHER = '/UBTConnect/Search';
const MEMBER_DETAILS = 'HouseholdRelations_Block/DataActionGet_MemberDetails';
const SIBLINGS = 'HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails';
const QUERY = `?HouseholdId=${VITALE.id}&MemberId=7100`;
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [OTHER]: <p>Search screen</p>,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  [PATH]: <Household_Relations />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(query = QUERY) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const title = () => document.getElementById('$b2')?.textContent;
const relationsCalls = () => calledActions().filter((a) => a === MEMBER_DETAILS || a === SIBLINGS);
/** The two skeleton sections of the block that are loading (not those of the photos). */
const loadingSections = () =>
  document.querySelectorAll(
    '[data-block="Directory_Household.HouseholdRelations_Block"] > [data-block="ConnectPatterns.SkeletonSection"] > [inert]',
  );
/** Lets the screen transition and the photo calls end. */
const settle = () => act(() => new Promise((resolve) => setTimeout(resolve, 50)));

beforeEach(() => {
  freshPage();
  resetNavigation();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('Household_Relations page', () => {
  it('shows the family name as title, the member, the parents and the four siblings', async () => {
    const memberBodies = recordBodies(`UBTConnect/${MEMBER_DETAILS}`);
    const { container } = await open();
    expect(container.querySelector('[data-block="Directory_Household.HouseholdRelations_Block"]')?.id).toBe('$b3');
    await waitFor(() => {
      expect(loadingSections()).toHaveLength(0);
    });
    expect(title()).toBe('The Vitales');
    expect(container.textContent).toContain(`${VITALE.householder} ${VITALE.surname}`);
    const relations = document.getElementById('b3-Relations')?.textContent ?? '';
    expect(relations).toContain(`${VITALE_PARENTS.householder}Father`);
    expect(relations).toContain('María Ana FernándezMother');
    expect(relations).toContain(`${VITALE_PARENTS.localityName}, ${VITALE_PARENTS.countryName}`);
    expect(
      document.querySelectorAll('#b3-Household [data-block="ConnectCorePatterns.NonMember_ListItem"]'),
    ).toHaveLength(4);
    expect(relationsCalls()).toEqual([MEMBER_DETAILS, SIBLINGS]);
    expect(memberBodies).toEqual([
      expect.objectContaining({
        HouseholdId: VITALE.id,
        MemberId: '7100',
        UserAge_Visibility: false,
        isLoading: true,
        ShowNotesSheet: false,
      }),
    ]);
    expect(loadingSections()).toHaveLength(0);
    expect(document.getElementById('$b4')?.dataset.block).toBe('App_Common.BottomBarMenu');
    expect(document.getElementById('$b5')).not.toBeNull();
  });

  it('shows the parents without a household section in the empty scenario (no sibling)', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    await open();
    await waitFor(() => {
      expect(loadingSections()).toHaveLength(0);
    });
    expect(document.getElementById('b3-Relations')?.textContent).toContain(`${VITALE_PARENTS.householder}Father`);
    expect(document.getElementById('b3-Household')).toBeNull();
    expect(relationsCalls()).toEqual([MEMBER_DETAILS, SIBLINGS]);
  });

  it('keeps the skeletons when the calls fail', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open();
    await settle();
    expect(relationsCalls()).toEqual([]);
    expect(loadingSections()).toHaveLength(2);
    expect(title()).toBe('');
  });

  it('a back navigation restores the view without new calls', async () => {
    const { router } = await open();
    await waitFor(() => {
      expect(title()).toBe('The Vitales');
    });
    await act(() => router.navigate(OTHER));
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(document.getElementById('b3-Household')).not.toBeNull();
    });
    expect(title()).toBe('The Vitales');
    expect(relationsCalls()).toEqual([MEMBER_DETAILS, SIBLINGS]);
  });

  it('opens the household of the parents from the chevron of the father', async () => {
    const { router, at } = await open();
    await waitFor(() => {
      expect(document.querySelector('#b3-Relations .connect-icon-chevron_right')).not.toBeNull();
    });
    await settle();
    await act(async () => {
      (document.querySelector('#b3-Relations .connect-icon-chevron_right') as HTMLElement).click();
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/UBTConnect/HouseholdDetails');
    });
    expect(at()).toBe(`/UBTConnect/HouseholdDetails?HouseholdId=${VITALE_PARENTS.id}`);
  });
});
