import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import Services from './ServicesPage';

/* The page with its flows (useServices) in the app frame on a memory router, with the MSW mocks: the recorded TST
   services (six favourites, three suggestions). A save changes the in-memory collections of the mocks for the rest of
   this file, so the save test runs last. */
const PATH = '/UBTConnect/Services';
const HOME = '/UBTConnect/HomeFeed';
const MENU = '/UBTConnect/Menu';
const SAVE = 'UBTConnect/ServiceAPIService_ConnectServices_ChangeOrder_Bulk';
const routes = { [HOME]: <p>HomeFeed screen</p>, [MENU]: <p>Menu screen</p>, [PATH]: <Services /> };

const rowLabels = (listId: string) =>
  [...(document.getElementById(listId)?.children ?? [])].map((row) => row.textContent);
const icon = (blockId: string) => document.getElementById(blockId)?.querySelector('div[data-container]') as Element;
const saveButton = () => screen.getByRole('button', { name: 'Save changes' });

/** Opens the page after HomeFeed and Menu, and waits for the lists. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(MENU));
  await act(() => view.router.navigate(PATH));
  await waitFor(() => {
    expect(rowLabels('FavouriteList')).toHaveLength(6);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Services page', () => {
  it('shows the detail layout "Manage Services" with the favourites, the suggestions and the save button', async () => {
    const { container } = await open();
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    expect(layout?.id).toBe('$b1');
    expect(layout?.querySelector('.header-title')?.textContent).toBe('Manage Services');
    expect(rowLabels('FavouriteList')).toEqual([
      'Orbit',
      "Lord's Day Meal",
      'Assemble',
      'Trove',
      'My Entertaining',
      'My Notes',
    ]);
    expect(rowLabels('SuggestionList')).toEqual(['HR100', 'El Gusto', 'Community Tradelink']);
    expect(document.getElementById('ContentWrapper')?.classList).toContain('ubt-fixed-footer--content');
    expect(document.querySelector('.ubt-skeleton-section')).toBeNull();
    expect(saveButton()).not.toBeDisabled();
    expect(calledActions()).toEqual(['Services/DataActionGetServices']);
  });

  it('shows the skeleton and the loading lists while GetServices runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, PATH);
    expect(document.querySelector('.ubt-skeleton-section')).not.toBeNull();
    expect(document.getElementById('FavouriteList')?.className).toBe('list list-group list-loading OSFillParent');
    expect(document.getElementById('SuggestionList')).toBeNull();
  });

  it('shows the empty lists with the error class when GetServices fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(document.getElementById('FavouriteList')?.className).toBe('list list-group list-error OSFillParent');
    });
    expect(document.querySelector('.ubt-skeleton-section')).toBeNull();
    expect(rowLabels('FavouriteList')).toEqual([]);
  });

  it('the remove icon moves a favourite to the top of the suggestions; mandatory favourites have none', async () => {
    await open();
    expect(document.getElementById('l1-38_0-$b14')).toBeNull();
    fireEvent.click(icon('l1-38_3-$b14'));
    expect(rowLabels('FavouriteList')).toEqual(['Orbit', "Lord's Day Meal", 'Assemble', 'My Entertaining', 'My Notes']);
    expect(rowLabels('SuggestionList')).toEqual(['Trove', 'HR100', 'El Gusto', 'Community Tradelink']);
  });

  it('"Save changes" without a change calls nothing', async () => {
    await open();
    fireEvent.click(saveButton());
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calledActions()).toEqual(['Services/DataActionGetServices']);
    expect(getFeedbackMessage()).toBeNull();
  });

  it('a failed save keeps the skeleton and the loading button, as the original', async () => {
    await open();
    fireEvent.click(icon('l2-37_0-$b26'));
    sessionStorage.setItem('mock:mock', 'error');
    await act(async () => {
      fireEvent.click(saveButton());
      await new Promise((resolve) => setTimeout(resolve, 20));
    });
    expect(calledActions()).toEqual([
      'Services/DataActionGetServices',
      'ServiceAPIService_ConnectServices_ChangeOrder_Bulk',
    ]);
    expect(document.querySelector('.ubt-skeleton-section')).not.toBeNull();
    expect(saveButton()).toBeDisabled();
    expect(getFeedbackMessage()?.message).not.toBe('Your changes were saved.');
  });

  it('the back arrow goes to the previous screen', async () => {
    const { at } = await open();
    fireEvent.click(document.getElementById('b1-$b2')?.firstElementChild as Element);
    expect(await screen.findByText('Menu screen')).toBeInTheDocument();
    expect(at()).toBe(MENU);
  });

  it('the add icon adds a suggestion at the end; "Save changes" saves the whole list and shows the message', async () => {
    await open();
    const bodies = recordBodies(SAVE);
    fireEvent.click(icon('l2-37_1-$b26'));
    expect(rowLabels('FavouriteList')).toHaveLength(7);
    expect(rowLabels('FavouriteList')[6]).toBe('El Gusto');
    expect(rowLabels('SuggestionList')).toEqual(['HR100', 'Community Tradelink']);
    fireEvent.click(saveButton());
    // Wait for the outcome (not a fixed delay): under the full suite the save answers later than 20 ms.
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Your changes were saved.');
    });
    expect(calledActions()).toEqual([
      'Services/DataActionGetServices',
      'ServiceAPIService_ConnectServices_ChangeOrder_Bulk',
    ]);
    const sent = (bodies[0] as { CurrentServices: { List: { Connect_Service_User: Record<string, unknown> }[] } })
      .CurrentServices.List;
    expect(sent.map((r) => r.Connect_Service_User.Order)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(sent[6]?.Connect_Service_User).toEqual({
      Id: '0',
      ConnectServiceId: 'ElGusto',
      UserId: Number(MOCK_USER_ID),
      Order: 7,
      LastChangedOn: '1900-01-01T00:00:00',
    });
    expect(getFeedbackMessage()?.message).toBe('Your changes were saved.');
    expect(document.querySelector('.ubt-skeleton-section')).toBeNull();
    expect(saveButton()).not.toBeDisabled();
    // HasChanges is False again: a second click calls nothing
    fireEvent.click(saveButton());
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(calledActions()).toHaveLength(2);
  });
});
