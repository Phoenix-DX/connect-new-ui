import { act, fireEvent, render, screen } from '@testing-library/react';
import { Profiler, StrictMode, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchEventEmailCoordinator, sendEventContactEmail, type EventEmailCoordinatorData } from '@/api/message';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import { preventNavigation } from '@/lib/navigationEvent';
import {
  addAuditEventDetailEvent,
  ApplicationEvents_LDM,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from '@/pages/LDM_Email_V2/components/actions';
import { LdmEventEmailView } from '@/pages/LDM_Email_V2/components/LdmEventEmailView';
import type { EventEmailInputs } from '@/pages/LDM_Email_V2/inputs';
import { emptyCoordinatorDetailsData, ldmEventEmailReducer } from './ldmEventEmailState';
import { useLdmEventEmail } from './useLdmEventEmail';

/* The flows of the LDM event e-mail block with its view. The data action, the server action, the cached user, the
   reducer, the flow handler, the feedback message, the navigation and the client actions are spies. The coordinator
   and the sender are fictional (src/mocks/fictional/ldm.ts). */
vi.mock('./ldmEventEmailState', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./ldmEventEmailState')>();
  return { ...actual, ldmEventEmailReducer: vi.fn(actual.ldmEventEmailReducer) };
});
vi.mock('@/api/message', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/message')>()),
  fetchEventEmailCoordinator: vi.fn(),
  sendEventContactEmail: vi.fn(),
}));
vi.mock('@/platform/session/cachedUserInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/cachedUserInfo')>()),
  appManager_GetCachedUserInfo: vi.fn(),
}));
/* useFlowState sends a rejected OnReady to this flow handler. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
const { navigateBack } = vi.hoisted(() => ({ navigateBack: vi.fn() }));
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  allowUpcomingNavigation: vi.fn(),
  useNavigateBack: () => navigateBack,
}));
vi.mock('@/lib/navigationEvent', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/navigationEvent')>()),
  preventNavigation: vi.fn(),
}));
vi.mock('@/pages/LDM_Email_V2/components/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/pages/LDM_Email_V2/components/actions')>()),
  addAuditEventDetailEvent: vi.fn(),
  zOnApplicationEvent_Wrapper: vi.fn(),
  scheduleFeedbackMessageAfterTransition: vi.fn(),
}));

const COORDINATOR: EventEmailCoordinatorData = {
  coordinatorDetails: {
    ...emptyCoordinatorDetailsData().coordinatorDetails,
    CoordinatorName: 'Rosa Medina',
    CoordinatorEmail: 'rosa.medina@example.test',
    CoordinatorPhoneNumber: '+54 291 555 0144',
    LocalityName: 'Bahia Blanca',
    CountryName: 'Argentina',
    Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
  },
  hasContent: true,
  eventName: 'Supper at the Medina home',
  eventDateText: '2026-10-03',
};
const USER: AppManager_CachedUserInfoRec = {
  isCommunityMember: true,
  ContactBaseId: '1',
  MemberId: '2',
  FirstName: 'Julián',
  LastName: 'Vitale',
  Locality: 'Bahia Blanca',
  Country: 'Argentina',
  CountryCode: 'AR',
  UserExternalId: '3',
  Username: 'jvitale',
  Email: 'julian.vitale@example.test',
  Phone: '+54 291 555 0101',
};
const INPUTS: EventEmailInputs = {
  In_EventHostId: '88231',
  In_EventId: '70415',
  In_IsMessageGuest: false,
  In_IsContactOrganiser: true,
  EventDate: '2026-10-03',
  EventLocality: 'Bahia Blanca',
};

/** The commits of the block: none may follow the unmount. */
let renders = 0;
const countRender = () => {
  renders += 1;
};
function Block({ inputs }: { inputs: EventEmailInputs }) {
  const flows = useLdmEventEmail('$b1', inputs);
  return <LdmEventEmailView id="$b1" {...flows} />;
}
function renderBlock({ strict = false, inputs = INPUTS } = {}) {
  const tree: ReactNode = (
    <MemoryRouter>
      <Profiler id="LdmEventEmail" onRender={countRender}>
        <Block inputs={inputs} />
      </Profiler>
    </MemoryRouter>
  );
  return render(strict ? <StrictMode>{tree}</StrictMode> : tree);
}
const settle = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** An answer that the test gives later. */
function deferred<T>() {
  let resolve: (value: T) => void = () => undefined;
  let reject: (error: unknown) => void = () => undefined;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
const messageArea = () => document.querySelector('#b1-TextArea_Message') as HTMLTextAreaElement;
const typeMessage = (text: string) => {
  fireEvent.change(messageArea(), { target: { value: text } });
};
const submit = async () => {
  fireEvent.click(screen.getByText('Submit'));
  await settle();
};

describe('useLdmEventEmail', () => {
  beforeEach(() => {
    renders = 0;
    vi.mocked(fetchEventEmailCoordinator).mockResolvedValue(COORDINATOR);
    vi.mocked(sendEventContactEmail).mockResolvedValue(undefined);
    vi.mocked(appManager_GetCachedUserInfo).mockReturnValue(USER);
    Object.defineProperty(navigator, 'onLine', { configurable: true, get: () => true });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('OnReady: GetCoordinatorDetails with the block inputs, then the form with the sender and the subject', async () => {
    renderBlock();
    expect(document.querySelector('#b1-MarkReadLoading')).not.toBeNull();
    await settle();
    expect(fetchEventEmailCoordinator).toHaveBeenCalledWith(INPUTS);
    expect(document.querySelector('#b1-Input_From')).toHaveValue('julian.vitale@example.test');
    expect(document.querySelector('#b1-Input_To')).toHaveValue('Rosa Medina');
    expect(document.querySelector('#b1-TextArea_Subject')).toHaveValue('Supper at the Medina home - 2026-10-03');
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('StrictMode: OnReady fetches once', async () => {
    renderBlock({ strict: true });
    await settle();
    expect(fetchEventEmailCoordinator).toHaveBeenCalledTimes(1);
    expect(document.querySelector('#b1-TextArea_Subject')).toHaveValue('Supper at the Medina home - 2026-10-03');
  });

  it('"Has null eventId?": no fetch, "No Event Organiser information."', async () => {
    renderBlock({ inputs: { ...INPUTS, In_EventHostId: '', In_EventId: '' } });
    await settle();
    expect(fetchEventEmailCoordinator).not.toHaveBeenCalled();
    expect(screen.getByText('No Event Organiser information.')).toBeInTheDocument();
  });

  it('a failed fetch: the network warning and the flow handler; TryAgain fetches again', async () => {
    const error = new Error('down');
    vi.mocked(fetchEventEmailCoordinator).mockRejectedValueOnce(error);
    renderBlock();
    await settle();
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
    expect(document.querySelector('[id="b1-$b5"]')).not.toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /try again/i }));
    await settle();
    expect(fetchEventEmailCoordinator).toHaveBeenCalledTimes(2);
    expect(document.querySelector('[id="b1-$b5"]')).toBeNull();
    // TryAgain does not assign UserInfo: the From field stays empty.
    expect(document.querySelector('#b1-Input_From')).toHaveValue('');
    expect(document.querySelector('#b1-TextArea_Subject')).toHaveValue('Supper at the Medina home - 2026-10-03');
  });

  it('Submit without a network: the Info message, no send', async () => {
    renderBlock();
    await settle();
    typeMessage('We bring dessert.');
    Object.defineProperty(navigator, 'onLine', { configurable: true, get: () => false });
    await submit();
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      'You cannot send emails without a network connection.',
      PLATFORM_MESSAGE_TYPE.info,
    );
    expect(sendEventContactEmail).not.toHaveBeenCalled();
  });

  it('Submit with a blank message: "Required Field!", the message cleared, no send', async () => {
    renderBlock();
    await settle();
    typeMessage('   ');
    await submit();
    expect(screen.getByText('Required Field!')).toBeInTheDocument();
    expect(messageArea()).toHaveValue('');
    expect(sendEventContactEmail).not.toHaveBeenCalled();
  });

  it('Submit: EventContact, the events, the success message, Message "", then the previous screen', async () => {
    renderBlock();
    await settle();
    typeMessage('We bring dessert.');
    await submit();
    expect(sendEventContactEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        EmailTo: 'rosa.medina@example.test',
        EmailFrom: 'julian.vitale@example.test',
        Subject: 'Supper at the Medina home - 2026-10-03',
        Message: 'We bring dessert.',
      }),
    );
    expect(addAuditEventDetailEvent).toHaveBeenCalledWith(
      ApplicationEvents_LDM.MyTimelineCoordinatorEmailed,
      '2026-10-03',
      'Bahia Blanca',
    );
    expect(zOnApplicationEvent_Wrapper).toHaveBeenCalledWith(
      ApplicationEvents_LDM.ContactEventOrganiser,
      JSON.stringify({ EmailTo: 'rosa.medina@example.test', NameOfSender: 'Vitale, Julián' }),
    );
    expect(scheduleFeedbackMessageAfterTransition).toHaveBeenCalledWith('Your message has been sent.');
    expect(messageArea()).toHaveValue('');
    expect(vi.mocked(allowUpcomingNavigation).mock.invocationCallOrder[0]).toBeLessThan(
      navigateBack.mock.invocationCallOrder[0] ?? 0,
    );
    expect(navigateBack).toHaveBeenCalledTimes(1);
  });

  it('"or Call us Directly": the call popup of the coordinator; without a phone number, the Info message', async () => {
    renderBlock();
    await settle();
    fireEvent.click(screen.getByText('or Call us Directly'));
    expect(document.body.querySelector('.ubt-contact-by-phone-popup')).not.toBeNull();
    expect(screen.getAllByText('+54 291 555 0144').length).toBeGreaterThan(0);
    vi.mocked(fetchEventEmailCoordinator).mockResolvedValueOnce({
      ...COORDINATOR,
      coordinatorDetails: { ...COORDINATOR.coordinatorDetails, CoordinatorPhoneNumber: '' },
    });
    renderBlock();
    await settle();
    fireEvent.click(screen.getAllByText('or Call us Directly')[1] as HTMLElement);
    expect(showFeedbackMessage).toHaveBeenCalledWith('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
  });

  it('a navigation is prevented while a message is typed', async () => {
    const { container } = renderBlock();
    await settle();
    const navigate = () => {
      const event = new CustomEvent('dx-before-navigation', {
        cancelable: true,
        detail: { replace: false, resume: vi.fn() },
      });
      act(() => {
        window.dispatchEvent(event);
      });
    };
    navigate();
    expect(preventNavigation).not.toHaveBeenCalled();
    typeMessage('Draft');
    navigate();
    expect(preventNavigation).toHaveBeenCalledTimes(1);
    expect(container).toBeTruthy();
  });

  it('W23: after the unmount, OnReady writes no state; GetCoordinatorDetails runs once', async () => {
    const answer = deferred<EventEmailCoordinatorData>();
    vi.mocked(fetchEventEmailCoordinator).mockReturnValue(answer.promise);
    const { unmount } = renderBlock({ strict: true });
    await settle();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(ldmEventEmailReducer).mockClear();
    answer.resolve(COORDINATOR);
    await settle();
    expect(fetchEventEmailCoordinator).toHaveBeenCalledTimes(1);
    expect(ldmEventEmailReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
  });

  it('W23: a failure after the unmount writes no state and still reaches the flow handler once', async () => {
    const answer = deferred<EventEmailCoordinatorData>();
    vi.mocked(fetchEventEmailCoordinator).mockReturnValue(answer.promise);
    const { unmount } = renderBlock({ strict: true });
    await settle();
    unmount();
    vi.mocked(ldmEventEmailReducer).mockClear();
    const error = new Error('down');
    answer.reject(error);
    await settle();
    expect(ldmEventEmailReducer).not.toHaveBeenCalled();
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error, expect.anything());
  });

  it('W23: a send that ends after the unmount still runs its events, message and navigation once', async () => {
    const sent = deferred<undefined>();
    vi.mocked(sendEventContactEmail).mockReturnValue(sent.promise);
    const { unmount } = renderBlock({ strict: true });
    await settle();
    typeMessage('We bring dessert.');
    await submit();
    unmount();
    const rendersAtUnmount = renders;
    vi.mocked(ldmEventEmailReducer).mockClear();
    sent.resolve(undefined);
    await settle();
    expect(sendEventContactEmail).toHaveBeenCalledTimes(1);
    expect(addAuditEventDetailEvent).toHaveBeenCalledTimes(1);
    expect(zOnApplicationEvent_Wrapper).toHaveBeenCalledTimes(1);
    expect(scheduleFeedbackMessageAfterTransition).toHaveBeenCalledTimes(1);
    expect(allowUpcomingNavigation).toHaveBeenCalledTimes(1);
    expect(navigateBack).toHaveBeenCalledTimes(1);
    expect(ldmEventEmailReducer).not.toHaveBeenCalled();
    expect(renders).toBe(rendersAtUnmount);
  });
});
