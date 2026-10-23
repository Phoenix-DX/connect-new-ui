import { act, fireEvent, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage } from '@/test/testSupport';
import ContactUsMenu from './ContactUsMenuPage';

/* The page with its flows (useContactUsMenu) in the app frame on a memory router. */
const PATH = '/UBTConnect/ContactUsMenu';
const DETAILS = '/UBTConnect/ContactUsDetails';
const routes = {
  '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
  '/UBTConnect/Menu': <p>Menu screen</p>,
  [PATH]: <ContactUsMenu />,
  [DETAILS]: <p>ContactUsDetails screen</p>,
};

const sectionIds = (root: ParentNode) =>
  [...root.querySelectorAll('[data-block="App_Menu.Menu_List"]')].map((list) => list.id);

beforeEach(() => {
  freshPage();
  resetNavigation();
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('ContactUsMenu page', () => {
  it('shows the primary detail layout "Contact Us" with the intro, three Menu_List sections and the separator', () => {
    setSignedInUser(MOCK_USER_ID);
    const { container } = renderRoutes(routes, PATH);
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    if (layout === null) throw new Error('layout not rendered');
    expect(layout.id).toBe('$b1');
    expect(layout.querySelector('.ubt-layout-detail.ubt-layout-detail--primary')).not.toBeNull();
    expect(layout.querySelector('.header-title.text-align-center')?.textContent).toBe('Contact Us');
    expect(screen.getByText(/Please select the most relevant category/)).toBeInTheDocument();

    const menu = layout.querySelector('.content-middle .contact-us-menu');
    if (menu === null) throw new Error('sections not rendered');
    expect(sectionIds(menu)).toEqual(['l1-37_0-$b3', 'l1-37_1-$b3', 'l1-37_2-$b3']);
    for (const title of ['User Account Management', 'Community Engagement', 'General Inquiries']) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
    expect(screen.getByText('General Suggestions, Feedback & Rating')).toBeInTheDocument();
    expect(screen.queryByText('General Questions or Suggestions')).not.toBeInTheDocument();
    expect(menu.nextElementSibling?.getAttribute('data-block')).toBe('App_Common_Blocks.SectionSeparator');
    expect(menu.nextElementSibling?.id).toBe('$b4');
    expect(calledActions()).toEqual([]);
  });

  it('signed out: General Inquiries holds General Questions or Suggestions only', () => {
    renderRoutes(routes, PATH);
    expect(screen.getByText('General Questions or Suggestions')).toBeInTheDocument();
    expect(screen.queryByText('General Suggestions, Feedback & Rating')).not.toBeInTheDocument();
  });

  it('a row opens ContactUsDetails with its inputs; back restores the cached sections', async () => {
    const { router, at } = renderRoutes(routes, PATH);
    fireEvent.click(screen.getByText('Log in with UBT One'));
    expect(await screen.findByText('ContactUsDetails screen')).toBeInTheDocument();
    const url = new URL(at(), 'http://localhost');
    expect(url.pathname).toBe(DETAILS);
    expect(Object.fromEntries(url.searchParams)).toEqual({
      In_ContactSubjectId: 'Log in with UBT One',
      In_ContactSubjectTitle: 'User Account Management',
      In_ListMenuOptionLabel: 'Log in with UBT One',
    });

    // A restored view keeps ContactUs_Menu: the signed-out rows stay after a sign-in.
    act(() => {
      setSignedInUser(MOCK_USER_ID);
    });
    await act(() => router.navigate(-1));
    expect(at()).toBe(PATH);
    expect(screen.getByText('General Questions or Suggestions')).toBeInTheDocument();
    expect(screen.queryByText('General Suggestions, Feedback & Rating')).not.toBeInTheDocument();
  });

  it('the back arrow goes to the previous screen', async () => {
    // HomeFeed first: a back to the first entry of the tab goes to HomeFeed (CommonUI_InsideLayout).
    const { router, at } = renderRoutes(routes, '/UBTConnect/HomeFeed');
    await act(() => router.navigate('/UBTConnect/Menu'));
    await act(() => router.navigate(PATH));
    // The back arrow: the Icon block b1-$b2 of the layout header.
    const back = document.getElementById('b1-$b2')?.firstElementChild;
    if (back == null) throw new Error('back arrow not rendered');
    fireEvent.click(back);
    expect(await screen.findByText('Menu screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/Menu');
  });
});
