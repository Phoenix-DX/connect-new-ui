import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { log } from '@/platform/log/log';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import EmailContact from './EmailContactPage';

/* The page against the MSW mocks of SendContactEmail (mocks.ts): event 7301 of the fictional Orbit world has a
   helpdesk address; event 9999 has none. The back navigation (the previous screen) is spied. */
const spy = vi.hoisted(() => ({ back: vi.fn() }));
vi.mock('@/platform/navigation', async (original) => ({
  ...(await original<typeof import('@/platform/navigation')>()),
  useNavigateBack: () => spy.back,
}));

const PATH = '/UBTConnect/EmailContact';
const SEND = 'Connect2_OrbitMobile_MUI/ActionSendContactEmail';
const SUBJECT = 'Weekend Bible Conferences - Bahia and Azul: arrival on Friday evening';
const HELPDESK = `?In_IsContactHelpdesk=True&In_EventId=7301&In_MilestoneId=7301-1&In_Subject=${encodeURIComponent(SUBJECT)}&In_EventName=${encodeURIComponent('Weekend Bible Conferences - Bahia and Azul')}&In_MilestoneTitle=Accommodation`;
const HOST = `?In_IsContactHelpdesk=False&In_EventId=7301&In_MilestoneId=7301-1&In_HostName=${encodeURIComponent('Mr Hugo & Mrs María Vitale')}&In_HostEmail=${encodeURIComponent('vitale.family@example.com')}`;

function open(search: string) {
  const view = renderRoutes({ [PATH]: <EmailContact />, '/UBTConnect/HomeFeed': <div>Home feed</div> }, PATH + search);
  const message = view.container.querySelector('#b1-TextArea_Message') as HTMLTextAreaElement;
  return { ...view, message };
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  setFlags({});
});
afterEach(() => {
  vi.restoreAllMocks();
  resetFeedbackMessages();
  setFlags({});
  spy.back.mockReset();
});

describe('EmailContact page', () => {
  it('helpdesk: an empty message is required; a sent message goes back with the success message', async () => {
    const info = vi.spyOn(log, 'info');
    const bodies = recordBodies(SEND);
    const { container, message, at } = open(HELPDESK);
    expect(screen.getByText('Contact Orbit Helpdesk')).toBeInTheDocument();
    expect(container.querySelector<HTMLTextAreaElement>('#b1-TextArea_In_Subject')?.value).toBe(SUBJECT);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(screen.getByText('Required field!')).toBeInTheDocument();
    });
    expect(calledActions()).not.toContain('ActionSendContactEmail');

    fireEvent.change(message, { target: { value: 'Is there a bus from the airport to the conference hall?' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(spy.back).toHaveBeenCalledTimes(1);
    });
    expect(at()).toBe(PATH + HELPDESK);
    expect(message.value).toBe('');
    expect(bodies).toEqual([
      expect.objectContaining({
        IsContactHelpdesk: true,
        EventId: '7301',
        MilestoneId: '7301-1',
        TargetMemberId: '0',
        Subject: SUBJECT,
        UserSubject: '',
        Message: 'Is there a bus from the airport to the conference hall?',
        EmailInfo: expect.objectContaining({
          EventName: 'Weekend Bible Conferences - Bahia and Azul',
          MilestoneName: 'Accommodation',
          SenderEmail: '',
          TargetHelpdeskEmail: '',
        }) as unknown,
      }),
    ]);
    await waitFor(() => {
      expect(getFeedbackMessage()).toMatchObject({ message: 'Your email has been sent.', type: 1 });
    });
    expect(info).toHaveBeenCalledWith('ApplicationEvent', { Event: 'ContactHelpdesk', EventId: '7301' });
  });

  it('host: the subject and the message are required; the e-mail goes to the host', async () => {
    const info = vi.spyOn(log, 'info');
    const bodies = recordBodies(SEND);
    const { container, message } = open(HOST);
    expect(screen.getByText('Contact Host')).toBeInTheDocument();
    expect(screen.getByText('Mr Hugo & Mrs María Vitale')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Send Email' }));
    await waitFor(() => {
      expect(screen.getAllByText('Required field!')).toHaveLength(2);
    });

    fireEvent.change(container.querySelector('#b1-Input_Subject') as HTMLInputElement, {
      target: { value: 'Our arrival time' },
    });
    fireEvent.change(message, { target: { value: 'We arrive on Friday at 18:30 with two children.' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send Email' }));
    await waitFor(() => {
      expect(spy.back).toHaveBeenCalledTimes(1);
    });
    expect(bodies).toEqual([
      expect.objectContaining({
        IsContactHelpdesk: false,
        UserSubject: 'Our arrival time',
        EmailInfo: expect.objectContaining({ HostEmail: 'vitale.family@example.com' }) as unknown,
      }),
    ]);
    expect(info).toHaveBeenCalledWith('ApplicationEvent', {
      Event: 'EmailHost',
      MilestoneId: '7301-1',
      EventId: '7301',
    });
  });

  it('an event without a helpdesk address: the Info message, the form stays', async () => {
    const { message, at } = open('?In_IsContactHelpdesk=True&In_EventId=9999&In_Subject=Hello');
    fireEvent.change(message, { target: { value: 'Is there a bus from the airport?' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toMatch(/^There is currently no helpdesk email associated with this event/);
    });
    expect(getFeedbackMessage()?.type).toBe(0);
    expect(spy.back).not.toHaveBeenCalled();
    expect(at()).toBe(`${PATH}?In_IsContactHelpdesk=True&In_EventId=9999&In_Subject=Hello`);
    expect(message.value).toBe('Is there a bus from the airport?');
  });

  it('without Orbit access: HomeFeed, then the no-access message', async () => {
    setFlags({ mobileOrbitAccess: false });
    const { message, at } = open(HELPDESK);
    fireEvent.change(message, { target: { value: 'Is there a bus from the airport?' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HomeFeed');
    });
    expect(spy.back).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(getFeedbackMessage()).toMatchObject({
        message: "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
        type: 3,
      });
    });
  });

  it('a navigation with an unsent message asks to discard it', async () => {
    const { router, message, at } = open(HELPDESK);
    fireEvent.change(message, { target: { value: 'Is there a bus from the airport?' } });
    act(() => {
      void router.navigate('/UBTConnect/HomeFeed');
    });
    await waitFor(() => {
      expect(screen.getByText('Confirm Discard Changes')).toBeInTheDocument();
    });
    expect(screen.getByText('Are you sure you want to discard this message?')).toBeInTheDocument();
    expect(at()).toBe(PATH + HELPDESK);
  });
});
