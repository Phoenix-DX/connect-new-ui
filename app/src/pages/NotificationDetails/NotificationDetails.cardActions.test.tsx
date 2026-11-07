import { act, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { contractHandler } from '@/mocks/contract';
import { type MessageSeed } from '@/mocks/fictional/messages';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { setFlag } from '@/platform/flags/flags';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { adaptiveCardResponses, notificationMessage } from './mocks';
import NotificationDetails from './NotificationDetailsPage';

/* AdaptiveCardViewerOnExecuteAction of NotificationDetails (TST re-capture 2026-11-07,
   NotificationDetails.mvc@6445b6d0.js = ND7:1990-2100) and the audit handlers (ND7:2196-2320), with the MSW mocks of
   the route. The AdaptiveCardViewer is a stub that keeps the handler, so the test can run the three submit kinds
   without the Adaptive Cards renderer (its own tests cover the payloads). The card and the ids are fictional. */
const viewer = vi.hoisted(() => ({
  onExecuteAction: undefined as undefined | ((cardPayload: string, actionId: string, formPayload: string) => unknown),
}));
vi.mock('@/components/widgets/AdaptiveCardViewer', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/widgets/AdaptiveCardViewer')>();
  return {
    ...actual,
    AdaptiveCardViewer: ({
      id,
      onExecuteAction,
    }: {
      id?: string;
      onExecuteAction?: (cardPayload: string, actionId: string, formPayload: string) => unknown;
    }) => {
      viewer.onExecuteAction = onExecuteAction;
      return <div data-block="Widgets.AdaptiveCardViewer" id={id} />;
    },
  };
});

const PATH = '/UBTConnect/NotificationDetails';
const HOME = '/UBTConnect/HomeFeed';
const GET_MESSAGE = 'NotificationDetails/DataActionGetMessageInstance';
const STORE = 'ActionStoreAdaptiveCardResponses';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/LDM_Email_V2': <p>LDM_Email_V2 screen</p>,
  '/UBTConnect/LDM_Email': <p>LDM_Email screen</p>,
  '/UBTConnect/LDM_EventDetail_V2': <p>LDM_EventDetail_V2 screen</p>,
  '/UBTConnect/LDM_EventDetail': <p>LDM_EventDetail screen</p>,
  [PATH]: <NotificationDetails />,
};

/** A card whose "View Event" action carries the event 5520 of the host 880 (the texts that the Substring node
    searches). */
const CARD =
  '{"type":"AdaptiveCard","version":"1.3","body":[{"type":"TextBlock","text":"Harvest supper"}],"actions":[{"type":"Action.Submit","title":"View Event","data":{"submitType":"view_event","eventId":5520,"id":880},"style":"positive"}],"spacing":"medium"}';

const seed: MessageSeed = {
  Id: '7701',
  Title: 'Harvest supper on Saturday',
  DateTimeCreated: '2026-11-02T18:00:00',
  IsRead: true,
  IsClear: false,
  ProfileIconURL: '',
  CreatedByMemberId: '900108',
  MessageTemplateTypeId: 2,
  MessageTemplatePriorityId: 1,
  MessageInfoTypeId: 1,
  AdaptiveCardContent: CARD,
};

function serve() {
  server.use(
    contractHandler('UBTConnect', GET_MESSAGE, () => ({
      Message: notificationMessage(seed),
      IsRetracted: false,
      IsCleared: false,
      PlaceholderDelimiters: {
        Delimiters: { Delimiter_Function: '@@', Delimiter_Parameter: '%%', Delimiter_Placeholder: '##' },
      },
    })),
  );
}

/** Opens the screen after HomeFeed and waits for the card. */
async function open() {
  serve();
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}?MessageInstanceId=7701`));
  await waitFor(() => {
    expect(viewer.onExecuteAction).toBeDefined();
  });
  return view;
}

const submit = (actionId: string, formPayload: string) =>
  act(async () => {
    await viewer.onExecuteAction?.(CARD, actionId, formPayload);
  });

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  viewer.onExecuteAction = undefined;
});
afterEach(() => {
  setSignedInUser(null);
  setFlag('C2NewLDM', null);
});

describe('NotificationDetails AdaptiveCardViewerOnExecuteAction', () => {
  it('send_email opens LDM_Email_V2 with the ids of the submit', async () => {
    const { at } = await open();
    await submit('email', '{"submitType":"send_email","eventId":5521,"id":881}');
    expect(at()).toBe(
      '/UBTConnect/LDM_Email_V2?EventHostId=881&In_IsContactOrganiser=False&In_IsMessageGuest=True&In_EventId=5521',
    );
  });

  it('send_email without an event id takes the ids of the "View Event" action; LDM_Email without C2NewLDM', async () => {
    setFlag('C2NewLDM', 'off');
    const { at } = await open();
    await submit('email', '{"submitType":"send_email"}');
    expect(at()).toBe(
      '/UBTConnect/LDM_Email?In_IsContactOrganiser=False&EventHostId=880&In_EventId=5520&In_IsMessageGuest=True',
    );
  });

  it('view_event opens LDM_EventDetail_V2', async () => {
    const { at } = await open();
    await submit('view', '{"submitType":"view_event","eventId":5520,"id":880}');
    expect(at()).toBe('/UBTConnect/LDM_EventDetail_V2?EventHostId=880&EventId=5520');
  });

  it('view_event without ids: "Event is not accessible", and the screen stays', async () => {
    const { at } = await open();
    await submit('view', '{"submitType":"view_event"}');
    expect(getFeedbackMessage()?.message).toContain('Event is not accessible');
    expect(at()).toBe(`${PATH}?MessageInstanceId=7701`);
  });

  it('any other submit: StoreAdaptiveCardResponses, the refresh of GetMessageInstance, then the thanks', async () => {
    const bodies = recordBodies(`UBTConnect/${STORE}`);
    await open();
    const fetchesBefore = (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetMessageInstance').length;
    await submit('rsvp', '{"answer":"yes"}');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toContain('Thanks for filling out our form!');
    });
    expect(calledActions()).toContain(STORE);
    expect((window.__osCalls ?? []).find((c) => c.action === STORE)?.module).toBe('UBTConnect');
    expect(bodies[0]).toEqual({
      DeviceHardwareId: '',
      AdaptiveCardPayloadJSON: CARD,
      ActionTaken: 'rsvp',
      FormDataJSON: '{"answer":"yes"}',
      MessageInstanceId: '7701',
    });
    expect((window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetMessageInstance')).toHaveLength(
      fetchesBefore + 1,
    );
    // P-MUTATION: the mock keeps the response.
    expect(
      adaptiveCardResponses()
        .all()
        .some((r) => r.ActionTaken === 'rsvp' && r.MessageInstanceId === '7701'),
    ).toBe(true);
  });

  it('a CommunicationException: "Please check your internet connection!"', async () => {
    // No answer: callAction raises a CommunicationException.
    server.use(http.post(`/api/UBTConnect/${STORE}`, () => HttpResponse.error()));
    await open();
    await submit('rsvp', '{"answer":"yes"}');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toContain('Please check your internet connection!');
    });
  });
});
