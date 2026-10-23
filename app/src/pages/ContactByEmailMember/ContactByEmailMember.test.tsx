import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContactByEmailFormProps } from '@/shared/UBTConnect/ContactByEmailForm';
import ContactByEmailMember from './ContactByEmailMemberPage';
import { OrbitApplicationEvent_EmailHost } from './components/staticEntities';

/* The submit flow was not captured (write blocked, Q1): tested from the compiled Handler_SubmitForm (mvc.js:641-747).
   The shared form is replaced by a wrapper that keeps its props to raise Event_SubmitForm; the server action, the back
   navigation, the feedback message and the flow handler are spied. */
const spy = vi.hoisted(() => ({
  form: undefined as ContactByEmailFormProps | undefined,
  send: vi.fn<(form: unknown) => Promise<void>>(),
  back: vi.fn(),
  feedback: vi.fn(),
  raise: vi.fn(),
}));
vi.mock('@/shared/UBTConnect/ContactByEmailForm', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    ContactByEmailForm: (props: ContactByEmailFormProps & { children?: ReactNode }) => {
      spy.form = props;
      return (
        <OSBlock name="ContactFlow.ContactByEmailForm" id={props.id}>
          {props.children}
        </OSBlock>
      );
    },
  };
});
vi.mock('./api', async (original) => ({
  ...(await original<typeof import('./api')>()),
  sendContactMemberEmail: spy.send,
}));
vi.mock('@/platform/navigation', async (original) => ({
  ...(await original<typeof import('@/platform/navigation')>()),
  useNavigateBack: () => spy.back,
}));
vi.mock('@/platform/feedback', async (original) => ({
  ...(await original<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: spy.feedback,
}));
vi.mock('@/legacy/os/exceptions', async (original) => ({
  ...(await original<typeof import('@/legacy/os/exceptions')>()),
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
    renderScreen(`${CAPTURE}&In_AuditEventId=${OrbitApplicationEvent_EmailHost}`);
    await submit('Hello', 'A message');
    expect(spy.send).toHaveBeenCalledTimes(1);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.back).not.toHaveBeenCalled();
    expect(spy.feedback).not.toHaveBeenCalled();
    expect(spy.form?.isLoading).toBe(true);
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
