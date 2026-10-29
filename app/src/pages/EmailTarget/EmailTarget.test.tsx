import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import EmailTarget from './EmailTargetPage';
import { ApplicationEvents_LDM } from './hooks/emailTargetState';
import { ApplicationEvents_Directory_EmailHousehold } from './hooks/householdEmailState';

/* The page with the flows of its block (useHouseholdEmail) in the app frame on a memory router. Fictional data. */
const PATH = '/UBTConnect/EmailTarget';
const HOME = '/UBTConnect/HomeFeed';
const NEXT = '/UBTConnect/Profile';
const ACTION = 'Connect2_LegacyShared/ActionUserContactUser';
const routes = { [HOME]: <p>HomeFeed screen</p>, [PATH]: <EmailTarget />, [NEXT]: <p>Profile screen</p> };

const query = (inputs: Record<string, string>) => `${PATH}?${new URLSearchParams(inputs).toString()}`;
const LDM_HOST = query({
  In_HouseholdFirstName: 'Mara',
  In_HouseholdFullName: 'Mara Lindqvist',
  EmailTo: 'mara.lindqvist@example.org',
  ContactBusinessType: '',
  InitialEmailSubject: 'Supper meeting on Sunday',
  EmailHost: 'True',
  IsFromLDM: 'True',
  EventDate: '2026-11-08T00:00:00',
  EventLocality: 'Uppsala',
});

const subjectInput = () => document.getElementById('b1-Email_Subject') as HTMLInputElement;
const messageInput = () => document.getElementById('b1-TextArea_Message') as HTMLTextAreaElement;
const sendButton = () => screen.getByRole('button', { name: 'send email' });

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(url: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(url));
  return view;
}

let logs: LogEntry[] = [];
let stopLogs: () => void = () => undefined;

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo({ FirstName: 'Ingrid', LastName: 'Holm', Email: 'ingrid.holm@example.org' });
  logs = [];
  stopLogs = addLogSink((entry) => logs.push(entry));
});
afterEach(() => {
  stopLogs();
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('EmailTarget page', () => {
  it('shows the legacy layout "Contact Member", the recipient, the first subject and an empty message', async () => {
    const { container } = await open(LDM_HOST);
    const block = container.querySelector('[data-block="Email.ScreenBlock_Household_Email"]');
    expect(block?.id).toBe('$b1');
    expect(block?.querySelector('[data-block="Layout.Layout"]')?.id).toBe('b1-$b1');
    expect(block?.querySelector('.header-title')?.textContent).toBe('Contact Member');
    expect(screen.getByText('To: Mara Lindqvist')).toBeInTheDocument();
    expect(subjectInput().value).toBe('Supper meeting on Sunday');
    expect(messageInput().value).toBe('');
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('$b2');
    expect(block?.nextElementSibling?.id).toBe('$b3');
    expect(calledActions()).not.toContain(ACTION);
  });

  it.each([
    ['OneSchool Global', 'Contact School'],
    ['Campus&Co', 'Contact Store'],
    ['Other', 'Contact Member'],
  ])('ContactBusinessType %s gives the title %s', async (contactBusinessType, title) => {
    const { container } = await open(query({ ContactBusinessType: contactBusinessType }));
    expect(container.querySelector('.header-title')?.textContent).toBe(title);
  });

  it('send with an empty message: "Required Field!" on the message, no call', async () => {
    const bodies = recordBodies(ACTION);
    await open(LDM_HOST);
    await act(async () => {
      fireEvent.click(sendButton());
      await Promise.resolve();
    });
    expect(messageInput().closest('span')?.textContent).toBe('Required Field!');
    expect(messageInput().className).toContain('field-error-border');
    expect(subjectInput().className).not.toContain('field-error-border');
    // Typing a message makes it valid again.
    fireEvent.change(messageInput(), { target: { value: 'See you there.' } });
    expect(messageInput().className).not.toContain('field-error-border');
    expect(bodies).toEqual([]);
  });

  it('send: UserContactUser with the request, the two events, back to the previous screen, then the message', async () => {
    const bodies = recordBodies(ACTION);
    const { at } = await open(LDM_HOST);
    fireEvent.change(messageInput(), { target: { value: 'We will bring the dessert.' } });
    await act(async () => {
      fireEvent.click(sendButton());
      await Promise.resolve();
    });
    await waitFor(() => {
      expect(at()).toBe(HOME);
    });
    expect(bodies).toEqual([
      {
        UserContactRequest: expect.objectContaining({
          EmailTo: 'mara.lindqvist@example.org',
          ContactMember: 'Mara',
          FirstNameSender: 'Ingrid',
          LastNameSender: 'Holm',
          Subject: 'Supper meeting on Sunday',
          Message: 'We will bring the dessert.',
          FirstName: 'Mara',
          EmailFrom: 'ingrid.holm@example.org',
          SenderPhone: '',
        }) as unknown,
      },
    ]);
    // EmailSubmitted first (the LDM host event), then the EmailHousehold application event of the block.
    expect(logs.filter((entry) => entry.message === 'ApplicationEvent').map((entry) => entry.data)).toEqual([
      { EventId: ApplicationEvents_LDM.MyTimelineHostEmailed, HasDate: true, HasLocality: true },
      { EventId: ApplicationEvents_Directory_EmailHousehold, HasAttachment: true },
    ]);
    await waitFor(() => {
      expect(getFeedbackMessage()).toMatchObject({ message: 'Your message has been sent.', type: 1 });
    });
  });

  it('send offline: the network message, no call, the button stops loading', async () => {
    const bodies = recordBodies(ACTION);
    const online = Object.getOwnPropertyDescriptor(Navigator.prototype, 'onLine');
    Object.defineProperty(navigator, 'onLine', { configurable: true, get: () => false });
    try {
      const { at } = await open(LDM_HOST);
      fireEvent.change(messageInput(), { target: { value: 'Hello' } });
      await act(async () => {
        fireEvent.click(sendButton());
        await Promise.resolve();
      });
      expect(getFeedbackMessage()).toMatchObject({
        message: 'You cannot send emails without a network connection.',
        type: 3,
      });
      expect(document.getElementById('b1-$b5')?.firstElementChild?.className).not.toContain('is--loading');
      expect(at()).toBe(LDM_HOST);
      expect(bodies).toEqual([]);
    } finally {
      if (online) Object.defineProperty(navigator, 'onLine', online);
      else Reflect.deleteProperty(navigator, 'onLine');
    }
  });

  it('a change asks before the back navigation (NavigationConfirmationDialog)', async () => {
    const { at } = await open(LDM_HOST);
    fireEvent.change(messageInput(), { target: { value: 'Draft' } });
    await act(async () => {
      document.getElementById('b1-$b2')?.querySelector<HTMLElement>('.menu-back')?.click();
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    expect(at()).toBe(LDM_HOST);
    expect(screen.getByText('Are you sure you want to discard the changes?')).toBeInTheDocument();
  });

  it('a view restored from the cache starts with an empty subject and message, and no change (OnReady)', async () => {
    const { router, at } = await open(LDM_HOST);
    expect(subjectInput().value).toBe('Supper meeting on Sunday');
    await act(() => router.navigate(NEXT));
    expect(await screen.findByText('Profile screen')).toBeInTheDocument();

    await act(() => router.navigate(-1));
    expect(at()).toBe(LDM_HOST);
    expect(subjectInput().value).toBe('');
    expect(messageInput().value).toBe('');
    // IsChange False: the back arrow goes to the previous screen at once.
    await act(async () => {
      document.getElementById('b1-$b2')?.querySelector<HTMLElement>('.menu-back')?.click();
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    expect(at()).toBe(HOME);
  });

  it('no change: the back arrow goes to the previous screen at once', async () => {
    const { at } = await open(LDM_HOST);
    await act(async () => {
      document.getElementById('b1-$b2')?.querySelector<HTMLElement>('.menu-back')?.click();
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    expect(at()).toBe(HOME);
  });
});
