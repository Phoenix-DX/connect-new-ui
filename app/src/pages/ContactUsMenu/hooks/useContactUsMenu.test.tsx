import type { ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { get_ContactUsMenuSections } from './contactUsMenuState';
import { useContactUsMenu } from './useContactUsMenu';

const navigate = vi.fn();

vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

/* The flows of the Contact Us menu with the navigation and the flow handler replaced by spies. useViewState needs a
   router. */
function Router({ children }: { children: ReactNode }) {
  return <MemoryRouter initialEntries={['/UBTConnect/ContactUsMenu']}>{children}</MemoryRouter>;
}

const renderMenu = () => renderHook(() => useContactUsMenu(), { wrapper: Router });

beforeEach(() => {
  freshPage();
  vi.clearAllMocks();
});
afterEach(() => {
  setSignedInUser(null);
});

describe('useContactUsMenu', () => {
  it('signed out: the signed-out sections; IgnorePolices only', () => {
    const { result } = renderMenu();
    expect(result.current.contactUsMenu).toEqual(get_ContactUsMenuSections(false));
    expect(result.current.ignore).toEqual({ polices: true, lockedScreen: false });
  });

  it('signed in without a PIN to register: the signed-in sections; nothing ignored', () => {
    setSignedInUser(MOCK_USER_ID);
    const { result } = renderMenu();
    expect(result.current.contactUsMenu).toEqual(get_ContactUsMenuSections(true));
    expect(result.current.ignore).toEqual({ polices: false, lockedScreen: false });
  });

  it('signed in with PIN_Use and no local PIN (NeedRegister): policies and lock screen ignored', () => {
    setSignedInUser(MOCK_USER_ID);
    setClientVar('UBT_AppManager.PIN_Use', true);
    const { result } = renderMenu();
    expect(result.current.ignore).toEqual({ polices: true, lockedScreen: true });
  });

  it('keeps the same sections and ignore records on a new render', () => {
    const { result, rerender } = renderMenu();
    const { contactUsMenu, ignore } = result.current;
    rerender();
    expect(result.current.contactUsMenu).toBe(contactUsMenu);
    expect(result.current.ignore).toBe(ignore);
  });

  it('a row opens ContactUsDetails with its Id, the section title and its Label', () => {
    setSignedInUser(MOCK_USER_ID);
    const { result } = renderMenu();
    const general = result.current.contactUsMenu[2];
    const option = general?.MenuOptions?.[1];
    if (general === undefined || option === undefined) throw new Error('no General Inquiries row');
    result.current.onClickMenuOption(general, option);
    expect(navigate.mock.calls).toEqual([
      [
        '/UBTConnect/ContactUsDetails',
        {
          In_ContactSubjectId: 'General Suggestions, Feedback & Rating',
          In_ContactSubjectTitle: 'General Inquiries',
          In_ListMenuOptionLabel: 'General Suggestions, Feedback & Rating',
        },
      ],
    ]);
  });

  it('a failed navigation goes to the flow handler', () => {
    const failure = new Error('navigation failed');
    navigate.mockImplementationOnce(() => {
      throw failure;
    });
    const { result } = renderMenu();
    const section = result.current.contactUsMenu[1];
    const option = section?.MenuOptions?.[0];
    if (section === undefined || option === undefined) throw new Error('no Community Engagement row');
    result.current.onClickMenuOption(section, option);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(failure);
  });
});
