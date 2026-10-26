import { act, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { VITALE, childrenText, householdName } from '@/mocks/fictional/directory';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import LegacyShareObject from './LegacyShareObjectPage';

/* The screen with the MSW mocks of pages/LegacyShareObject/mocks.ts: the household of the directory cast, one fictional
   community business share card, the type label of a household as recorded (any other type answers its identifier)
   and one fictional user to share with. */
const PATH = '/UBTConnect/LegacyShareObject';
const text = (container: HTMLElement, id: string) => container.querySelector(`[id="${id}"]`)?.textContent;
const title = (container: HTMLElement) => container.querySelector('h1.header-title')?.textContent;
const shareIcons = (container: HTMLElement) => container.querySelectorAll('.fa-share-square-o');
const searchInput = (container: HTMLElement) =>
  container.querySelector<HTMLInputElement>('#b1-b8-Input_SearchFilter') as HTMLInputElement;

function renderScreen(query: string) {
  const view = renderRoutes(
    { [PATH]: <LegacyShareObject />, '/UBTConnect/HomeFeed': <div id="home" />, '/UBTConnect/Other': <div /> },
    '/UBTConnect/HomeFeed',
  );
  return { ...view, open: () => act(() => view.router.navigate(`${PATH}?${query}`)) };
}

describe('LegacyShareObject', () => {
  beforeEach(async () => {
    freshPage();
    resetNavigation();
    window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=unlocked');
    await applyTestSession();
  });

  it('a household: the loading card, then the household card, the title and the users to share with', async () => {
    sessionStorage.setItem('mock:latency', '200'); // the answers come after the first render
    const { container, open } = renderScreen('In_ShareObjectTypeId=Household&In_ObjectId=42438');
    await open();
    expect(container.querySelector('[id="b1-Household_List_Item"] .loading-item')).not.toBeNull();
    expect(text(container, 'b1-b8-b6-Message')).toBe('Searching');
    await waitFor(() => {
      expect(text(container, 'b1-Household_Title')).toBe(householdName(VITALE));
    });
    expect(text(container, 'b1-Household_Description')).toBe(childrenText(VITALE.children));
    expect(text(container, 'b1-Household_Tag')).toBe('Bahia Blanca, Argentina');
    await waitFor(() => {
      expect(title(container)).toBe('Share Household');
    });
    expect(container.querySelector('[id="b1-Household_List_Item"] .loading-item')).toBeNull();
    await waitFor(() => {
      expect(shareIcons(container)).toHaveLength(1);
    });
    expect(container.querySelector('#b1-b8-l1-39_0-b3-Contents')?.textContent).toBe('Alice Thornton');
    expect(text(container, 'b1-b8-l1-39_0-Household_Tag')).toBe('Las Cruces, United States');
    expect(container.querySelector('.share-with-input .text-bold')?.textContent).toBe('Contacts list');
  });

  it('the search: Enter highlights the words, no result shows the message, a share marks the row', async () => {
    const { container, open } = renderScreen('In_ShareObjectTypeId=Household&In_ObjectId=42438');
    await open();
    await waitFor(() => {
      expect(shareIcons(container)).toHaveLength(1);
    });
    fireEvent.change(searchInput(container), { target: { value: 'thorn' } });
    fireEvent.keyUp(searchInput(container), { key: 'Enter' });
    await waitFor(() => {
      expect(container.querySelector('#b1-b8-l1-39_0-b3-Contents mark')?.textContent).toBe('Thorn');
    });
    fireEvent.change(searchInput(container), { target: { value: 'Ngaio' } });
    fireEvent.keyUp(searchInput(container), { key: 'Enter' });
    await waitFor(() => {
      expect(text(container, 'b1-b8-b4-Message')).toBe("No results found for 'Ngaio'");
    });
    fireEvent.change(searchInput(container), { target: { value: '' } });
    await waitFor(() => {
      expect(shareIcons(container)).toHaveLength(1);
    });
    fireEvent.click(shareIcons(container)[0] as Element);
    await waitFor(() => {
      expect(container.querySelector('.fa-check-circle')).not.toBeNull();
    });
    expect(shareIcons(container)).toHaveLength(0);
  });

  it('a share that is not allowed opens the SubscriptionDenied dialog', async () => {
    window.history.replaceState(null, '', '/UBTConnect/HomeFeed?mocksession=unlocked&mockuser=expired');
    const { container, open } = renderScreen('In_ShareObjectTypeId=Household&In_ObjectId=42438');
    await open();
    await waitFor(() => {
      expect(shareIcons(container)).toHaveLength(1);
    });
    expect(container.querySelector('[id="SubscriptionDenied-b1-$b1"]')).toBeNull();
    fireEvent.click(shareIcons(container)[0] as Element);
    await waitFor(() => {
      expect(container.querySelector('[id="SubscriptionDenied-b1-$b1"]')).not.toBeNull();
    });
    expect(container.querySelector('.fa-check-circle')).toBeNull();
  });

  it('a Campus&Co business: the share card with the "photo coming soon" image', async () => {
    const { container, open } = renderScreen('In_ShareObjectTypeId=Campus%26Co&In_ObjectId=17');
    await open();
    await waitFor(() => {
      expect(text(container, 'b1-CommunityBusiness_Title')).toBe('OneSchool Global Bahia Blanca');
    });
    expect(text(container, 'b1-CommunityBusiness_Tag')).toBe('Bahia Blanca, Argentina');
    expect(container.querySelector('[id="b1-CommunityBusiness_List_Item"] img')?.getAttribute('src')).toContain(
      'CampusCo_PhotoComingSoon',
    );
    await waitFor(() => {
      expect(title(container)).toBe('Share Campus&Co');
    });
  });

  it('a feed item: the card with the custom title, no household card', async () => {
    const { container, open } = renderScreen(
      'In_ShareObjectTypeId=Feed&In_ObjectId=42&In_CustomTitle=Harvest%20festival',
    );
    await open();
    expect(text(container, 'b1-Feed_Title')).toBe('Harvest festival');
    expect(container.querySelector('[id="b1-Household_List_Item"]')).toBeNull();
    await waitFor(() => {
      expect(title(container)).toBe('Share Feed');
    });
  });

  it('a back navigation to the screen starts again from OnInitialize (no view cache)', async () => {
    const { container, open, router } = renderScreen('In_ShareObjectTypeId=Household&In_ObjectId=42438');
    await open();
    await waitFor(() => {
      expect(shareIcons(container)).toHaveLength(1);
    });
    fireEvent.change(searchInput(container), { target: { value: 'alice' } });
    sessionStorage.setItem('mock:latency', '200'); // the answers come after the first render
    await act(() => router.navigate('/UBTConnect/Other'));
    await act(() => router.navigate(-1));
    expect(searchInput(container).value).toBe('');
    expect(container.querySelector('[id="b1-Household_List_Item"] .loading-item')).not.toBeNull();
    await waitFor(() => {
      expect(text(container, 'b1-Household_Title')).toBe(householdName(VITALE));
    });
  });
});
