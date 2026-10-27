import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import type { ContactEmailFormProps } from '@/components/contact/ContactEmailForm';
import { onApplicationEvent_EmailHost } from './actions';
import ContactByEmailMember from './ContactByEmailMemberPage';
import {
  ApplicationEvents_Directory_EmailHousehold,
  ApplicationEvents_Orbit_EmailHost,
  OrbitApplicationEvent_EmailHost,
} from './staticEntities';

/* The submit flow was not captured (write blocked, Q1): tested from the compiled Handler_SubmitForm.
   The shared form is replaced by a wrapper that keeps its props to raise Event_SubmitForm; the server action, the back
   navigation, AllowUpcomingNavigation, the feedback message and the flow handler are spied. */
const spy = vi.hoisted(() => ({
  form: undefined as ContactEmailFormProps | undefined,
  send: vi.fn<(form: unknown) => Promise<void>>(),
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
  return { ...actual, onApplicationEvent_EmailHost: vi.fn(actual.onApplicationEvent_EmailHost) };
});
vi.mock('@/api/message', async (original) => ({
  ...(await original<typeof import('@/api/message')>()),
  sendContactMemberEmail: spy.send,
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

function renderScreen(search: string) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[`/UBTConnect/ContactByEmailMember${search}`]}>
        <Routes>
          <Route path="/UBTConnect/ContactByEmailMember" element={<ContactByEmailMember />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

const CAPTURE =
  '?In_AvatarURL=&In_ContactName=Test&In_ContactSurname=Member&In_ContactLocality=Test%20Locality' +
  '&In_ContactCountry=Test%20Country&In_EmailTo=member%40example.test&In_IsHousehold=False';

const submit = async (subject: string, message: string) => {
  await act(async () => {
    spy.form?.onEventSubmitForm?.(subject, message);
    await Promise.resolve();
  });
};

describe('ContactByEmailMember (ContactByEmailMember.mvc.js)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    spy.send.mockResolvedValue(undefined);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
    spy.form = undefined;
  });

  it('renders the title, the form inputs and the contact card (view :299-596)', () => {
    renderScreen(CAPTURE);
    expect(screen.getByText('Contact Member')).toBeInTheDocument();
    expect(screen.getByText('Test Member')).toBeInTheDocument();
    expect(screen.getByText('Test Locality, Test Country')).toBeInTheDocument();
    expect(spy.form).toMatchObject({
      id: '$b2',
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      isLoading: false,
    });
  });

  it('household title and locality without separator (:319-321, :533-535)', () => {
    renderScreen('?In_IsHousehold=True&In_HouseholdHeaderName=Doe&In_ContactCountry=Test%20Country');
    expect(screen.getByText('Contact the Doe household')).toBeInTheDocument();
    expect(screen.getByText('Test Country')).toBeInTheDocument();
  });

  it('Send: SendContactMemberEmail, then the message after 500 ms and the previous screen (:662-731)', async () => {
    renderScreen(CAPTURE);
    await submit('Hello', 'A message');
    expect(spy.send).toHaveBeenCalledWith({
      firstName: 'Test',
      contactMember: 'Test',
      emailTo: 'member@example.test',
      subject: 'Hello',
      message: 'A message',
    });
    expect(spy.form?.isLoading).toBe(true);
    expect(spy.back).toHaveBeenCalledTimes(1);
    expect(spy.feedback).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.feedback).toHaveBeenCalledWith('Your message has been sent.', 1);
  });

  it('EmailHost audit event: the flow ends after the event, no message, no navigation (:684-704)', async () => {
    renderScreen(
      `${CAPTURE}&In_AuditEventId=${OrbitApplicationEvent_EmailHost}&In_OrbitEventId=7301&In_OrbitMilestoneId=7301-1` +
        '&In_OrbitEventTitle=Weekend%20Bible%20Conferences',
    );
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    await submit('Hello', 'A message');
    remove();
    expect(spy.send).toHaveBeenCalledTimes(1);
    // The full AuditPayload_EmailHost (:689-697, ContactFlow Q1); the log keeps no subject or message (U17).
    expect(onApplicationEvent_EmailHost).toHaveBeenCalledWith({
      MilestoneId: '7301-1',
      EventId: '7301',
      EventTitle: 'Weekend Bible Conferences',
      HostName: 'Test',
      Subject: 'Hello',
      Message: 'A message',
    });
    expect(entries.map((e) => [e.message, e.data])).toEqual([
      ['ApplicationEvent', { EventId: ApplicationEvents_Orbit_EmailHost, HasAttachment: true }],
    ]);
    expect(JSON.stringify(entries)).not.toContain('A message');
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.back).not.toHaveBeenCalled();
    expect(spy.feedback).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
  });

  it('OnClick_SubmitForm of the form: onBeforeSubmitForm is AllowUpcomingNavigation, before the send', async () => {
    renderScreen(CAPTURE);
    expect(spy.form?.onBeforeSubmitForm).toBe(spy.allow);
    await act(async () => {
      spy.form?.onBeforeSubmitForm?.();
      spy.form?.onEventSubmitForm?.('Hello', 'A message');
      await Promise.resolve();
    });
    expect(spy.allow).toHaveBeenCalledTimes(1);
    expect(spy.allow.mock.invocationCallOrder[0]).toBeLessThan(spy.send.mock.invocationCallOrder[0] ?? 0);
  });

  it('LDM event locality: AddAuditEventDetailEvent, then the EmailHousehold event with the e-mail JSON', async () => {
    renderScreen(`${CAPTURE}&In_LDMEventLocality=Ashford`);
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    await submit('Hello', 'A message');
    remove();
    expect(entries.map((e) => [e.message, e.data])).toEqual([
      [
        'AddAuditEventDetailEvent (not ported, Q2)',
        { EventId: ApplicationEvents_Directory_EmailHousehold, HasDate: false, HasLocality: true },
      ],
      ['ApplicationEvent', { EventId: ApplicationEvents_Directory_EmailHousehold, HasAttachment: true }],
    ]);
    expect(spy.back).toHaveBeenCalledTimes(1);
  });

  it('an error goes to the flow handler; IsLoading stays True (:846-848, Q3)', async () => {
    const error = new Error('mock');
    spy.send.mockRejectedValue(error);
    renderScreen(CAPTURE);
    await submit('Hello', 'A message');
    expect(spy.raise).toHaveBeenCalledWith(error);
    expect(spy.back).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
  });
});
