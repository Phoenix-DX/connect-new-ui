import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import type { ContactEmailFormProps } from '@/components/contact/ContactEmailForm';
import { LDMApplicationEvent_MyTimelineCoordinatorEmailed } from './actions';
import ContactByEmailLDMCoordinator from './ContactByEmailLDMCoordinatorPage';

/* The route was not captured (no-capture, user 2026-10-16) and the submit flow is a write (blocked): tested from the
   compiled Handler_SubmitForm. The shared form is replaced by a wrapper that keeps its props to raise Event_SubmitForm;
   the server action, the back navigation, AllowUpcomingNavigation, the feedback message and the flow handler are
   spied. */
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
vi.mock('@/api/message', async (original) => ({
  ...(await original<typeof import('@/api/message')>()),
  sendContactLDMCoordinatorEmail: spy.send,
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
      <MemoryRouter initialEntries={[`/UBTConnect/ContactByEmailLDMCoordinator${search}`]}>
        <Routes>
          <Route path="/UBTConnect/ContactByEmailLDMCoordinator" element={<ContactByEmailLDMCoordinator />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

const INPUTS =
  '?In_AvatarURL=https%3A%2F%2Fexample.test%2Favatar.png&In_ContactName=Alder%20Whitcombe' +
  '&In_EmailTo=coordinator%40example.test&In_Subject=Spring%20meeting&In_EventDate=2026-04-18T00%3A00%3A00' +
  '&In_EventLocality=Ashford';

const submit = async (subject: string, message: string) => {
  await act(async () => {
    spy.form?.onEventSubmitForm?.(subject, message);
    await Promise.resolve();
  });
};

describe('ContactByEmailLDMCoordinator (ContactByEmailLDMCoordinator.mvc.js)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    spy.send.mockResolvedValue(undefined);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
    spy.form = undefined;
  });

  it('renders the title, the form inputs and the coordinator header card', () => {
    const { container } = renderScreen(INPUTS);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Alder Whitcombe')).toBeInTheDocument();
    expect(screen.getByText('LDM Event Coordinator')).toBeInTheDocument();
    expect(container.querySelector('.contact-by-email__header__img')).toHaveAttribute(
      'src',
      'https://example.test/avatar.png',
    );
    expect(spy.form).toMatchObject({
      id: '$b2',
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inSubject: 'Spring meeting',
      isLoading: false,
    });
    expect(spy.form?.inUseDynamicTextAreaSubject).toBeUndefined();
  });

  it('no In_AvatarURL: the header image has no src attribute', () => {
    const { container } = renderScreen('?In_ContactName=Alder%20Whitcombe');
    expect(container.querySelector('.contact-by-email__header__img')).not.toHaveAttribute('src');
  });

  it('Send: SendContactLDMCoordinatorEmail, then the message after 500 ms and the previous screen', async () => {
    renderScreen(INPUTS);
    await submit('Spring meeting', 'A message');
    expect(spy.send).toHaveBeenCalledWith({
      firstName: 'Alder Whitcombe',
      contactMember: 'Alder Whitcombe',
      emailTo: 'coordinator@example.test',
      subject: 'Spring meeting',
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

  it('OnClick_SubmitForm of the form: onBeforeSubmitForm is AllowUpcomingNavigation, before the send', async () => {
    renderScreen(INPUTS);
    expect(spy.form?.onBeforeSubmitForm).toBe(spy.allow);
    await act(async () => {
      spy.form?.onBeforeSubmitForm?.();
      spy.form?.onEventSubmitForm?.('Spring meeting', 'A message');
      await Promise.resolve();
    });
    expect(spy.allow).toHaveBeenCalledTimes(1);
    expect(spy.allow.mock.invocationCallOrder[0]).toBeLessThan(spy.send.mock.invocationCallOrder[0] ?? 0);
  });

  it('AddAuditEventDetailEvent, then the MyTimelineCoordinatorEmailed event with the e-mail JSON', async () => {
    renderScreen(INPUTS);
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    await submit('Spring meeting', 'A message');
    remove();
    expect(entries.map((e) => [e.message, e.data])).toEqual([
      [
        'ApplicationEvent',
        { EventId: LDMApplicationEvent_MyTimelineCoordinatorEmailed, HasDate: true, HasLocality: true },
      ],
      ['ApplicationEvent', { EventId: LDMApplicationEvent_MyTimelineCoordinatorEmailed, HasAttachment: true }],
    ]);
  });

  it('the null date 1900-01-01 is no event date', async () => {
    renderScreen('?In_ContactName=Alder%20Whitcombe&In_EventDate=1900-01-01T00%3A00%3A00');
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    await submit('Spring meeting', 'A message');
    remove();
    expect(entries[0]?.data).toEqual({
      EventId: LDMApplicationEvent_MyTimelineCoordinatorEmailed,
      HasDate: false,
      HasLocality: false,
    });
  });

  it('an error goes to the flow handler; IsLoading stays True (Q3)', async () => {
    const error = new Error('mock');
    spy.send.mockRejectedValue(error);
    renderScreen(INPUTS);
    await submit('Spring meeting', 'A message');
    expect(spy.raise).toHaveBeenCalledWith(error);
    expect(spy.back).not.toHaveBeenCalled();
    expect(spy.feedback).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
  });
});
