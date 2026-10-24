import { act, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage } from '@/test/testSupport';
import ConnectShare from './ConnectSharePage';

/* The page with its flows (useConnectShare) in the app frame on a memory router, with the MSW mocks of the page:
   fictional shares by ShareId (mocks.ts), and a server exception for any other ShareId. */
const HOME = '/UBTConnect/HomeFeed';
const PATH = '/UBTConnect/ConnectShare';
const OTHER = '/UBTConnect/Search';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <ConnectShare />,
  [OTHER]: <p>Search screen</p>,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
};
const shareId = (n: number): string => `00000000-0000-0000-0000-${String(n).padStart(12, '0')}`;
const shareDetail = () => document.querySelector('[data-block="Share_UI.ScreenBlock_ShareDetail"]');
const shareCalls = () => calledActions().filter((a) => a === 'ActionGet_ShareDetails');

/** Opens HomeFeed, then the share link, as an external link opens the app. */
async function openShare(id: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}?ShareId=${id}`));
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('ConnectShare page', () => {
  it('shows the message of an unknown share in the share detail, after one Get_ShareDetails and the audit', async () => {
    renderRoutes(routes, `${PATH}?ShareId=${shareId(0)}`);
    expect(shareDetail()).toBeNull();
    await screen.findByText('Share not found (mock message)');
    expect(screen.getByText('Connect Share')).toBeTruthy();
    expect(shareCalls()).toHaveLength(1);
    expect(calledActions()).toContain('ActionGetUserInformation');
  });

  it('goes to the shared household and replaces the ConnectShare entry', async () => {
    const view = await openShare(shareId(4));
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=42438');
    });
    expect(shareDetail()).toBeNull();
    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(HOME);
  });

  it('keeps the access message after a back navigation, without a second Get_ShareDetails', async () => {
    const view = await openShare(shareId(3));
    await screen.findByText("You don't have access to shared item");
    await act(() => view.router.navigate(OTHER));
    expect(view.at()).toBe(OTHER);
    await act(() => view.router.navigate(-1));
    await screen.findByText("You don't have access to shared item");
    expect(view.at()).toBe(`${PATH}?ShareId=${shareId(3)}`);
    expect(shareCalls()).toHaveLength(1);
  });

  it('a restored share detail without a message and without the alert goes back', async () => {
    const view = await openShare(shareId(9));
    await waitFor(() => {
      expect(shareDetail()).not.toBeNull();
    });
    await act(() => view.router.navigate(OTHER));
    await act(() => view.router.navigate(-1));
    await waitFor(() => {
      expect(view.at()).toBe(HOME);
    });
    expect(shareCalls()).toHaveLength(1);
  });
});
