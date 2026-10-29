import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import type { ContactEmailFormProps } from '@/components/contact/ContactEmailForm';
import { ApplicationEvents_Orbit_ContactHelpdesk, onApplicationEvent_ContactHelpdesk } from './actions';
import ContactByEmailOrbitHelpdesk from './ContactByEmailOrbitHelpdeskPage';

/* The submit flow was not captured (write blocked, CLAUDE.md rule 6): tested from the compiled Handler_SubmitForm.
   The shared form is replaced by a wrapper that keeps its props to raise Event_SubmitForm; the server action, the
   cached user, the back navigation, AllowUpcomingNavigation, the feedback message and the flow handler are spied. */
const spy = vi.hoisted(() => ({
  form: undefined as ContactEmailFormProps | undefined,
  send: vi.fn<(email: unknown) => Promise<boolean>>(),
  back: vi.fn(),
  allow: vi.fn(),
  feedback: vi.fn(),
  raise: vi.fn(),
}));
vi.mock('@/components/contact/ContactEmailForm', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    ContactEmailForm: (props: ContactEmailFormProps & { children?: ReactNode }) => {
      spy.form = props;
      return (
        <OSBlock name="ContactFlow.ContactByEmailForm" id={props.id}>
          {props.children}
        </OSBlock>
      );
    },
  };
});
vi.mock('./actions', async (original) => {
  const actual = await original<typeof import('./actions')>();
  return { ...actual, onApplicationEvent_ContactHelpdesk: vi.fn(actual.onApplicationEvent_ContactHelpdesk) };
});
vi.mock('@/api/message', async (original) => ({
  ...(await original<typeof import('@/api/message')>()),
  sendContactEmail: spy.send,
}));
vi.mock('@/platform/navigation', async (original) => ({
  ...(await original<typeof import('@/platform/navigation')>()),
  allowUpcomingNavigation: spy.allow,
  useNavigateBack: () => spy.back,
}));
vi.mock('@/platform/feedback', async (original) => ({
  ...(await original<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: spy.feedback,
}));
vi.mock('@/platform/feedback/flowErrors', async (original) => ({
  ...(await original<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: spy.raise,
}));
vi.mock('@/platform/session/cachedUserInfo', async (original) => ({
  ...(await original<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: () => ({ FirstName: 'Elena', LastName: 'Marsh' }),
}));

function renderScreen(search: string) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[`/UBTConnect/ContactByEmailOrbitHelpdesk${search}`]}>
        <Routes>
          <Route path="/UBTConnect/ContactByEmailOrbitHelpdesk" element={<ContactByEmailOrbitHelpdesk />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

const EVENT =
  '?In_EventId=4821&In_MilestoneId=MS-77&In_TargetMemberId=310&In_Subject=Question%20about%20Harbour%20Lights' +
  '&In_MilestoneTitle=Arrival&In_EventName=Harbour%20Lights%20Assembly&In_HostName=Rowan%20Price' +
  '&In_HostEmail=rowan.price%40example.test&In_FormattedDateTime=12%20Nov%202026%2C%2009%3A30';

const submit = async (subject: string, message: string) => {
  await act(async () => {
    spy.form?.onEventSubmitForm?.(subject, message);
    await Promise.resolve();
  });
};

describe('ContactByEmailOrbitHelpdesk (ContactByEmailOrbitHelpdesk.mvc.js)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    spy.send.mockResolvedValue(true);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
    spy.form = undefined;
  });

  it('renders the title "Email", the form inputs and the helpdesk header card', () => {
    const { container } = renderScreen(EVENT);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Orbit Helpdesk')).toBeInTheDocument();
    expect(container.querySelector('img.contact-by-email__header__img')?.getAttribute('src')).toMatch(
      /Connect2_OrbitMobile_MUI\.Orbit_Logo\.svg$/,
    );
    expect(container.querySelector('#\\$b5')).toBeNull();
    expect(spy.form).toMatchObject({
      id: '$b2',
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inSubject: 'Question about Harbour Lights',
      inUseDynamicTextAreaSubject: true,
      isLoading: false,
    });
  });

  it('Send: SendContactEmail to the helpdesk, the ContactHelpdesk event, the message after 500 ms, back', async () => {
    renderScreen(EVENT);
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    await submit('Question about Harbour Lights', 'We arrive at 10:15.');
    remove();
    expect(spy.send).toHaveBeenCalledWith({
      isContactHelpdesk: true,
      eventId: '4821',
      milestoneId: 'MS-77',
      targetMemberId: '310',
      subject: 'Question about Harbour Lights',
      userSubject: '',
      message: 'We arrive at 10:15.',
      emailInfo: {
        EventName: 'Harbour Lights Assembly',
        SenderFullName: 'Elena Marsh',
        HostName: 'Rowan Price',
        HostEmail: 'rowan.price@example.test',
        MilestoneName: 'Arrival',
        FormattedDateTime: '12 Nov 2026, 09:30',
      },
    });
    // The full AuditPayload_ContactHelpdesk (:564-570, ContactFlow Q1); the log keeps the event id only (U17).
    expect(onApplicationEvent_ContactHelpdesk).toHaveBeenCalledWith({
      EventId: '4821',
      EventTitle: 'Harbour Lights Assembly',
      Subject: 'Question about Harbour Lights',
      Message: 'We arrive at 10:15.',
    });
    expect(entries.map((e) => [e.message, e.data])).toEqual([
      ['ApplicationEvent', { EventId: ApplicationEvents_Orbit_ContactHelpdesk, OrbitEventId: '4821' }],
    ]);
    expect(spy.form?.isLoading).toBe(true);
    expect(spy.back).toHaveBeenCalledTimes(1);
    expect(spy.feedback).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.feedback).toHaveBeenCalledWith('Your message has been sent.', 1);
  });

  it('absent inputs: Long Integers are "0", texts are ""', async () => {
    renderScreen('');
    expect(spy.form?.inSubject).toBe('');
    await submit('Late arrival', 'A message');
    expect(spy.send).toHaveBeenCalledWith(
      expect.objectContaining({ eventId: '0', milestoneId: '', targetMemberId: '0', subject: 'Late arrival' }),
    );
  });

  it('OnClick_SubmitForm of the form: onBeforeSubmitForm is AllowUpcomingNavigation, before the send', async () => {
    renderScreen(EVENT);
    expect(spy.form?.onBeforeSubmitForm).toBe(spy.allow);
    await act(async () => {
      spy.form?.onBeforeSubmitForm?.();
      spy.form?.onEventSubmitForm?.('Question about Harbour Lights', 'A message');
      await Promise.resolve();
    });
    expect(spy.allow).toHaveBeenCalledTimes(1);
    expect(spy.allow.mock.invocationCallOrder[0]).toBeLessThan(spy.send.mock.invocationCallOrder[0] ?? 0);
  });

  it('an error goes to the flow handler; IsLoading stays True', async () => {
    const error = new Error('mock');
    spy.send.mockRejectedValue(error);
    renderScreen(EVENT);
    await submit('Question about Harbour Lights', 'A message');
    expect(spy.raise).toHaveBeenCalledWith(error);
    expect(spy.back).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.feedback).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
  });
});
