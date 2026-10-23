import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import OneSchoolGlobalDetails from './OneSchoolGlobalDetailsPage';

/* The page with its variables and data action (useOneSchoolGlobalDetails) in the app frame on a memory router, with
   the MSW mocks: the recorded school card with the cast name of school 1430, "OneSchool Alem", and one business link. */
const PATH = '/UBTConnect/OneSchoolGlobalDetails';
const HOME = '/UBTConnect/HomeFeed';
const GET_DETAILS = 'OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <OneSchoolGlobalDetails />,
};

/** The skeleton of the detail card ($b4) and of the content ($b15); the photo and the actions menu have their own. */
const isSkeleton = () =>
  ['$b4', '$b15'].some((id) =>
    document.getElementById(id)?.firstElementChild?.classList.contains('ubt-skeleton-section'),
  );
const cardTitle = () => document.getElementById('$b7')?.querySelector('.image-card-content__title')?.textContent;
/** The business link list and its fetch-status class. */
const linkList = () => document.querySelector('.school-address + .list, .margin-top-s + .list');
const listStatus = () =>
  ['list-loading', 'list-error'].filter((name) => linkList()?.classList.contains(name)).join(' ') || 'none';
const detailsCalls = () => calledActions().filter((action) => action === GET_DETAILS);
const button = (id: string) => document.getElementById(id);

/** Opens the page after HomeFeed and waits for the school. */
async function open(search = '?In_OneSchoolGlobalId=1430') {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${search}`));
  await waitFor(() => {
    expect(isSkeleton()).toBe(false);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  setFlags({});
  sessionStorage.clear();
});

describe('OneSchoolGlobalDetails page', () => {
  it('shows the detail layout "OneSchool Global" with the school card, the content, the bottom bar and CommonUI', async () => {
    const { container } = await open();
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    expect(layout?.id).toBe('$b1');
    expect(layout?.querySelector('.header-title')?.textContent).toBe('OneSchool Global');
    expect(cardTitle()).toBe('OneSchool Alem');
    expect(container.textContent).toContain('Educating Students From:');
    expect(container.textContent).toContain('Bahia Blanca');
    expect(container.querySelector('.school-address')?.textContent).toContain('et Voluptate Sed Commodo Nostrud');
    expect([...container.querySelectorAll('.school-link-item')].map((item) => item.textContent)).toEqual(['tst']);
    expect(listStatus()).toBe('none');
    expect(container.textContent).toContain('Show student numbers');
    expect(button('ButtonGroupItem1')?.getAttribute('aria-checked')).toBe('true');
    expect(button('ButtonGroupItem2')?.getAttribute('aria-checked')).toBe('false');
    expect(container.querySelector('[data-block="App_Common.BottomBarMenu"]')?.id).toBe('$b27');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b28');
    expect(detailsCalls()).toHaveLength(1);
  });

  it('sends the screen variables in the recorded order', async () => {
    const bodies = recordBodies(`UBTConnect/${GET_DETAILS}`);
    await open();
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    const label = (singular: string, plural: string, icon = '') =>
      `{"Singular":"${singular}","Plural":"${plural}","Icon":"${icon}","Icon_Color":""}`;
    expect(JSON.stringify(bodies[0])).toBe(
      `{"LookupSections":{"Actions":${label('Action', 'Actions')},"Households":${label('Household', 'Households')},` +
        `"OneSchoolStatistitics":${label('Show student numbers', 'Show student numbers', 'connect-icon-school')}},` +
        '"Selected_OneschoolGlobal_SubsectionId":"Upcoming events",' +
        '"Type_OneschoolGlobal_SubsectionId":{"UpcomingEvents":"Upcoming events","AboutOurCampus":"About our campus"},' +
        '"LocalIsBookmarked":false,"In_OneSchoolGlobalId":"1430"}',
    );
  });

  it('sends In_OneSchoolGlobalId 0 when the query string has no school', async () => {
    const bodies = recordBodies(`UBTConnect/${GET_DETAILS}`);
    await open('');
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    expect(bodies[0]).toMatchObject({ In_OneSchoolGlobalId: '0' });
  });

  it('shows the skeleton card while GetOneSchoolGlobalDetails runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, `${PATH}?In_OneSchoolGlobalId=1430`);
    expect(isSkeleton()).toBe(true);
    expect(cardTitle()).toBe('OneSchool Global');
    expect(document.querySelector('.margin-top-s.margin-bottom-xs')?.textContent).toContain(
      '9 Park Ave, Aberfoyle  Park SA 5159',
    );
    expect(listStatus()).toBe('list-loading');
  });

  it('keeps the skeleton and shows the error message when GetOneSchoolGlobalDetails fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    renderRoutes(routes, `${PATH}?In_OneSchoolGlobalId=1430`);
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(isSkeleton()).toBe(true);
    expect(cardTitle()).toBe('OneSchool Global');
    await waitFor(() => {
      expect(listStatus()).toBe('list-error');
    });
  });

  it('hides the student numbers section when mobileStudentInformation is off', async () => {
    setFlags({ mobileStudentInformation: false });
    const { container } = await open();
    expect(container.textContent).not.toContain('Show student numbers');
    expect(button('ButtonGroupItem1')).not.toBeNull();
  });

  it('selects "About our campus" in the button group without a second call', async () => {
    await open();
    fireEvent.click(button('ButtonGroupItem2') as Element);
    expect(button('ButtonGroupItem2')?.getAttribute('aria-checked')).toBe('true');
    expect(button('ButtonGroupItem1')?.getAttribute('aria-checked')).toBe('false');
    expect(detailsCalls()).toHaveLength(1);
  });

  it('shows the same school and sub-section after a back navigation, without a second call', async () => {
    const view = await open();
    fireEvent.click(button('ButtonGroupItem2') as Element);
    await act(() => view.router.navigate(HOME));
    expect(view.at()).toBe(HOME);
    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(`${PATH}?In_OneSchoolGlobalId=1430`);
    expect(isSkeleton()).toBe(false);
    expect(cardTitle()).toBe('OneSchool Alem');
    expect(button('ButtonGroupItem2')?.getAttribute('aria-checked')).toBe('true');
    expect(detailsCalls()).toHaveLength(1);
  });
});
