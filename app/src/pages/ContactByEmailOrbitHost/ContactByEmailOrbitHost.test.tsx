import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContactEmailFormProps } from '@/components/contact/ContactEmailForm';
import type { OrbitContactEmail } from '@/api/message';
import ContactByEmailOrbitHost from './ContactByEmailOrbitHostPage';
import { readContactByEmailOrbitHostInputs } from './inputs';

/* The route was not captured (no-capture, user 2026-10-16) and the submit flow is a write: tested from the compiled
   Handler_SubmitForm. The shared form is replaced by a wrapper that keeps its props to raise Event_SubmitForm; the
   server action, the back navigation, AllowUpcomingNavigation, the feedback message and the flow handler are spied. */
const spy = vi.hoisted(() => ({
  form: undefined as ContactEmailFormProps | undefined,
  send: vi.fn<(email: OrbitContactEmail) => Promise<boolean>>(),
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

function renderScreen(search: string) {
  return render(
    <MemoryRouter initialEntries={[`/UBTConnect/ContactByEmailOrbitHost${search}`]}>
      <Routes>
        <Route path="/UBTConnect/ContactByEmailOrbitHost" element={<ContactByEmailOrbitHost />} />
      </Routes>
    </MemoryRouter>,
  );
}

const HOST =
  '?In_Subject=Supper%20booking&In_MilestoneTitle=Friday%20supper&In_EventName=Spring%20gathering' +
  '&In_HostName=Margaret%20Ellison&In_HostEmail=host%40example.com&In_FormattedDateTime=Fri%2012%20Apr%2018%3A30' +
  '&In_ContactLocality=Ashford&In_ContactCountry=United%20Kingdom&In_EntityId=12&In_Surname=Ellison';

const submit = async (subject: string, message: string) => {
  await act(async () => {
    spy.form?.onEventSubmitForm?.(subject, message);
    await Promise.resolve();
  });
};

describe('ContactByEmailOrbitHost (ContactByEmailOrbitHost.mvc.js)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    spy.send.mockResolvedValue(true);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
    spy.form = undefined;
  });

  it('renders the household title, the form inputs and the host card', () => {
    renderScreen(HOST);
    expect(screen.getByText('Contact the Ellison household')).toBeInTheDocument();
    expect(screen.getByText('Margaret Ellison')).toBeInTheDocument();
    expect(screen.getByText('Ashford, United Kingdom')).toBeInTheDocument();
    expect(spy.form).toMatchObject({
      id: '$b2',
      inSubjectPlaceholder: 'Add a subject',
      inMessagePlaceholder: 'Add a message',
      inUseDynamicTextAreaSubject: true,
      isLoading: false,
    });
    expect(spy.form?.inSubject).toBeUndefined();
  });

  it('locality line without separator when the locality is ""', () => {
    renderScreen('?In_HostName=Rafael%20Moreno&In_ContactCountry=Spain&In_Surname=Moreno');
    expect(screen.getByText('Spain')).toBeInTheDocument();
  });

  it('Send: SendContactEmail with In_Subject and the form texts, then the message after 500 ms and the previous screen', async () => {
    renderScreen(HOST);
    await submit('Hello', 'A message');
    expect(spy.send).toHaveBeenCalledWith({
      isContactHelpdesk: false,
      eventId: '0',
      milestoneId: '',
      targetMemberId: '0',
      subject: 'Supper booking',
      userSubject: 'Hello',
      message: 'A message',
      emailInfo: {
        EventName: 'Spring gathering',
        SenderFullName: '',
        HostName: 'Margaret Ellison',
        HostEmail: 'host@example.com',
        MilestoneName: 'Friday supper',
        FormattedDateTime: 'Fri 12 Apr 18:30',
      },
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
    renderScreen(HOST);
    expect(spy.form?.onBeforeSubmitForm).toBe(spy.allow);
    await act(async () => {
      spy.form?.onBeforeSubmitForm?.();
      spy.form?.onEventSubmitForm?.('Hello', 'A message');
      await Promise.resolve();
    });
    expect(spy.allow).toHaveBeenCalledTimes(1);
    expect(spy.allow.mock.invocationCallOrder[0]).toBeLessThan(spy.send.mock.invocationCallOrder[0] ?? 0);
  });

  it('an error goes to the flow handler; IsLoading stays True (Q3)', async () => {
    const error = new Error('mock');
    spy.send.mockRejectedValue(error);
    renderScreen(HOST);
    await submit('Hello', 'A message');
    expect(spy.raise).toHaveBeenCalledWith(error);
    expect(spy.back).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.feedback).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
  });

  it('inputs: the OutSystems defaults ("" for text, "0" for In_EntityId)', () => {
    expect(readContactByEmailOrbitHostInputs(new URLSearchParams('In_EntityId='))).toEqual({
      In_Subject: '',
      In_MilestoneTitle: '',
      In_EventName: '',
      In_HostName: '',
      In_HostEmail: '',
      In_FormattedDateTime: '',
      In_ContactLocality: '',
      In_ContactCountry: '',
      In_AvatarURL: '',
      In_EntityType: '',
      In_EntityId: '0',
      In_Surname: '',
    });
    expect(readContactByEmailOrbitHostInputs(new URLSearchParams('In_EntityId=345')).In_EntityId).toBe('345');
  });
});
