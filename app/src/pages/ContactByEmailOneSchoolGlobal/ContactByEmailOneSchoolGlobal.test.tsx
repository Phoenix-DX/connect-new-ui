import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ContactByEmailOneSchoolGlobal from './ContactByEmailOneSchoolGlobalPage';

/* The sending state, the success path and the error branch were not captured (compiled controller only, :471-529). */
const spy = vi.hoisted(() => ({
  send: vi.fn<(form: unknown) => Promise<void>>(),
  back: vi.fn(),
  allow: vi.fn(),
  message: vi.fn(),
  raise: vi.fn(),
}));
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
  showFeedbackMessage: spy.message,
}));
vi.mock('@/platform/feedback/flowErrors', async (original) => ({
  ...(await original<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: spy.raise,
}));

function renderScreen() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter
        initialEntries={[
          '/UBTConnect/ContactByEmailOneSchoolGlobal?In_EmailTo=school%40example.test&In_ContactName=Test%20School',
        ]}
      >
        <Routes>
          <Route path="/UBTConnect/ContactByEmailOneSchoolGlobal" element={<ContactByEmailOneSchoolGlobal />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

function fillAndSend(container: HTMLElement) {
  const subject = container.querySelector<HTMLTextAreaElement>('textarea[maxlength="100"]');
  const message = container.querySelector<HTMLTextAreaElement>('textarea[maxlength="1000"]');
  if (!subject || !message) throw new Error('form fields not rendered');
  fireEvent.change(subject, { target: { value: 'Hello' } });
  fireEvent.change(message, { target: { value: 'A message' } });
  const send = screen.getByText('Send').closest('button');
  if (!send) throw new Error('Send button not rendered');
  fireEvent.click(send);
  return { subject, message };
}

describe('ContactByEmailOneSchoolGlobal (ContactByEmailOneSchoolGlobal.mvc.js)', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('renders the contact card: logo, In_ContactName and the empty line (view :226-392)', () => {
    const { container } = renderScreen();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Test School').closest('.ubt-custom-container')).toHaveClass(
      'text-neutral-10',
      'font-bold',
      'font-size-base',
      'padding-top-xs',
    );
    expect(container.querySelector('.contact-by-email__header')).toHaveClass(
      'background-neutral-2',
      'padding-y-xs',
      'margin-bottom-base',
    );
    expect(container.querySelector('img.contact-by-email__header__img')?.getAttribute('src')).toContain(
      'UBTConnectLibrary.OneSchoolGlobal.svg',
    );
  });

  it('sends the form record, then the message after 500 ms and back (Handler_SubmitForm :471-529)', async () => {
    spy.send.mockResolvedValue(undefined);
    const { container } = renderScreen();
    fillAndSend(container);
    await act(async () => {
      await Promise.resolve();
    });
    expect(spy.send).toHaveBeenCalledWith({
      contactMember: 'Test School',
      emailTo: 'school@example.test',
      firstName: 'Test School',
      subject: 'Hello',
      message: 'A message',
    });
    expect(spy.back).toHaveBeenCalledTimes(1);
    expect(spy.message).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(spy.message).toHaveBeenCalledWith('Your message has been sent.', 1);
  });

  it('OnClick_SubmitForm of the form: AllowUpcomingNavigation runs once, before the send', async () => {
    spy.send.mockResolvedValue(undefined);
    const { container } = renderScreen();
    fillAndSend(container);
    await act(async () => {
      await Promise.resolve();
    });
    expect(spy.allow).toHaveBeenCalledTimes(1);
    expect(spy.allow.mock.invocationCallOrder[0]).toBeLessThan(spy.send.mock.invocationCallOrder[0] ?? 0);
  });

  it('on a send error keeps IsLoading True and raises to the flow handler (Q2 → A)', async () => {
    const error = new Error('mock error');
    spy.send.mockRejectedValue(error);
    const { container } = renderScreen();
    const { message } = fillAndSend(container);
    await act(async () => {
      await Promise.resolve();
    });
    expect(spy.raise).toHaveBeenCalledWith(error);
    expect(spy.back).not.toHaveBeenCalled();
    expect(message).toBeDisabled();
  });
});
