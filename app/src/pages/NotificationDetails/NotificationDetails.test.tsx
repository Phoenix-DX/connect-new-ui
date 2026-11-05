import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { contractHandler } from '@/mocks/contract';
import { MOCK_USER } from '@/mocks/fictional/directory';
import { type MessageSeed } from '@/mocks/fictional/messages';
import { notificationRows, type MessageListItemRow } from '@/mocks/fictional/notifications';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { notificationMessage } from './mocks';
import NotificationDetails from './NotificationDetailsPage';

/* The screen with its flows (useNotificationDetail, live TST 2026-11-05) and the MSW mocks of the route
   (pages/NotificationDetails/mocks.ts: the notifications of the shared collection and the captured record 5496739), in
   the app frame on a memory router. The messages are fictional. */
const PATH = '/UBTConnect/NotificationDetails';
const HOME = '/UBTConnect/HomeFeed';
const GET_MESSAGE = 'NotificationDetails/DataActionGetMessageInstance';
const PARAMETERS = 'NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId';
const OPENED = 'ActionWrapper_NotificationOpened';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/Notifications': <p>Notifications screen</p>,
  '/UBTConnect/Login': <p>Login screen</p>,
  [PATH]: <NotificationDetails />,
};

/** Opens the screen after HomeFeed, so a navigation away has a previous screen. */
async function open(query: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const textOf = (selector: string) => document.querySelector(selector)?.textContent;
const headerTitle = () => textOf('#b1-Placeholder_Header_Title');
const title = () => textOf('[data-block="ConnectPatterns.IconText"]');
/** The container with the top border inside Notification_Content (ND:466-473). */
const bodyContainer = () => document.querySelector('#Notification_Content .margin-top-base');
const rowOf = (rowTitle: string): MessageListItemRow => {
  const row = (notificationRows().all() as unknown as MessageListItemRow[]).find((r) => r.Title === rowTitle);
  if (!row) throw new Error(`no notification ${rowTitle}`);
  return row;
};

/** A fictional message of id 7700 for the branches that the notification list has no row for. */
const seed = (fields: Partial<MessageSeed> = {}): MessageSeed => ({
  Id: '7700',
  Title: 'Hall cleaning roster for Saturday',
  DateTimeCreated: '2026-10-30T08:15:00',
  IsRead: true,
  IsClear: false,
  ProfileIconURL: '',
  CreatedByMemberId: '900108',
  MessageTemplateTypeId: 2,
  MessageTemplatePriorityId: 1,
  MessageInfoTypeId: 1,
  ...fields,
});

/** GetMessageInstance answers this message. */
function serve(message: MessageSeed | undefined, answer: { IsRetracted?: boolean; IsCleared?: boolean } = {}) {
  server.use(
    contractHandler('UBTConnect', GET_MESSAGE, () => ({
      Message: notificationMessage(message),
      IsRetracted: answer.IsRetracted ?? false,
      IsCleared: answer.IsCleared ?? false,
      PlaceholderDelimiters: {
        Delimiters: { Delimiter_Function: '@@', Delimiter_Parameter: '%%', Delimiter_Placeholder: '##' },
      },
    })),
  );
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', 0);
  sessionStorage.clear();
});

describe('NotificationDetails page', () => {
  it('fetches GetMessageInstance at the start with the six screen variables and shows the captured record', async () => {
    const bodies = recordBodies(`UBTConnect/${GET_MESSAGE}`);
    const { container } = await open('?HardwareId=&MessageInstanceId=5496739&MessageTemplateId=47702');
    expect(container.querySelector('[data-block="Layouts.Layout_MainPages_Upgrade"]')).not.toBeNull();
    await waitFor(() => {
      expect(title()).toBe('Your Host on Wednesday');
    });
    // Sent as a user: the header is the name of the fictional author.
    expect(headerTitle()).toBe('Rebecca Lindsay');
    const calls = (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetMessageInstance');
    expect(calls).toHaveLength(1);
    expect(calls[0]?.module).toBe('UBTConnect');
    expect(calls[0]?.owner).toBe('NotificationDetails');
    expect(calls[0]?.inputNames).toEqual([
      'FeedItemId',
      'HardwareId',
      'IsLoading',
      'MessageInstanceId',
      'MessageTemplateId',
      'ShowAssembleAction',
    ]);
    expect(bodies[0]).toMatchObject({ MessageInstanceId: '5496739', MessageTemplateId: '47702', HardwareId: '' });
    expect(textOf('#Notification_Date')).toBe('Wed 28/10/2026 09:30 AM');
    const box = bodyContainer();
    expect(box instanceof HTMLElement && box.style).toMatchObject({
      borderColor: 'rgb(198, 198, 198)',
      borderStyle: 'solid',
      borderWidth: '2px 0px 0px',
      marginRight: '10px',
      marginTop: '10px',
      padding: '15px 0px 10px',
    });
    expect(textOf('.notification-detail-content')).toBe('');
    expect(container.querySelector('.connect-icon-calendar_busy.text-primary')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common_Blocks.SectionSeparator"]')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common.BottomBarMenu"]')?.id).toBe('$b13');
    expect(
      container.querySelector('[data-block="ConnectPatterns.Spinner"], [data-block="Reusable.Spinner"]'),
    ).toBeNull();
    // A read plain message: no Wrapper_NotificationOpened and no parameters.
    expect(calledActions()).not.toContain(OPENED);
    expect(calledActions()).not.toContain(PARAMETERS);
  });

  it('shows the default record while the data action runs', async () => {
    server.use(contractHandler('UBTConnect', GET_MESSAGE, () => new Promise(() => undefined)));
    await open('?MessageInstanceId=5496739');
    expect(headerTitle()).toBe('');
    expect(title()).toBe('');
    expect(textOf('#Notification_Date')).toBe('Mon 01/01/1900 00:00 AM');
  });

  it('shows the sender target as header', async () => {
    await open(`?MessageInstanceId=${rowOf('Test Noti 56').Id}`);
    await waitFor(() => {
      expect(title()).toBe('Test Noti 56');
    });
    expect(headerTitle()).toBe('Directory');
    expect(textOf('.notification-detail-content')).toBe('Test Noti 56');
  });

  it('shows "Meal Allocation" as header for a LordsDayMeal message', async () => {
    await open(`?MessageInstanceId=${rowOf('Your Host on Saturday').Id}`);
    await waitFor(() => {
      expect(headerTitle()).toBe('Meal Allocation');
    });
  });

  it('an unread notification: lowers the unread number, then Wrapper_NotificationOpened on the UBTConnect path', async () => {
    const row = rowOf('test');
    notificationRows().upsert({ ...row, IsRead: false });
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 3);
    const bodies = recordBodies(`UBTConnect/${OPENED}`);
    await open(`?HardwareId=&MessageInstanceId=${row.Id}&MessageTemplateId=${row.MessageTemplateId}`);
    await waitFor(() => {
      expect(calledActions()).toContain(OPENED);
    });
    expect((window.__osCalls ?? []).find((c) => c.action === OPENED)?.module).toBe('UBTConnect');
    await waitFor(() => {
      expect(bodies[0]).toEqual({ MessageInstanceId: row.Id });
    });
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(2);
    await waitFor(() => {
      expect(notificationRows().get(row.Id)?.IsRead).toBe(true);
    });
  });

  it('an unread retracted notification: "not available", then Notifications', async () => {
    serve(seed({ IsRead: false }));
    server.use(contractHandler('UBTConnect', OPENED, () => ({ IsRetracted: true })));
    const { at } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Notifications');
    });
    expect(getFeedbackMessage()?.message).toContain('Sorry, this message is not available anymore.');
  });

  it('a retracted message: "not available", then Notifications', async () => {
    serve(seed(), { IsRetracted: true });
    const { at } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Notifications');
    });
    expect(getFeedbackMessage()?.message).toContain('Sorry, this message is not available anymore.');
  });

  it('a cleared message: "not available", then Notifications', async () => {
    serve(seed(), { IsCleared: true });
    const { at } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Notifications');
    });
    expect(getFeedbackMessage()?.message).toContain('Sorry, this message is not available anymore.');
  });

  it('a message that is not found, signed in: "no access", then Notifications', async () => {
    const { at } = await open('?MessageInstanceId=424242');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Notifications');
    });
    expect(getFeedbackMessage()?.message).toContain("You don't have access to that message");
  });

  it('a message that is not found, signed out: Login', async () => {
    setSignedInUser(null);
    const { at } = await open('?MessageInstanceId=424242');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Login');
    });
    expect(getFeedbackMessage()).toBeNull();
  });

  it('a private message of another user: "no access", and the message still shows (loop break)', async () => {
    serve(seed({ MessageTemplateTypeId: 1 }));
    const { at } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toContain("You don't have access to that message");
    });
    expect(at()).toBe(`${PATH}?MessageInstanceId=7700`);
    expect(textOf('.notification-detail-content')).toBe('Hall cleaning roster for Saturday');
  });

  it('an Orbit message: the parameters, then the greeting with the first name', async () => {
    serve(
      seed({
        SenderTarget: { Id: 2, Name: 'Orbit' },
        ProfileIconURL: '/UBT_CW/img/UBT_CW.logo_connect.jpg',
        Content: '<p>Your stay starts on Friday.</p>',
      }),
    );
    await open('?MessageInstanceId=7700&MessageTemplateId=48001');
    await waitFor(() => {
      expect(textOf('.notification-detail-content')?.replace(/\s+/g, ' ')).toBe(
        `Hello ${MOCK_USER.firstName}, Your stay starts on Friday.`,
      );
    });
    expect(headerTitle()).toBe('Orbit');
    expect(calledActions()).toContain(PARAMETERS);
  });

  it('an Assemble message: the parameters, then BuildAssembleNotificationContent', async () => {
    serve(
      seed({
        SenderTarget: { Id: 21, Name: 'Assemble' },
        ProfileIconURL: '/UBT_CW/img/UBT_CW.logo_assemble.svg',
        Content: '<p>Dear ##@@FirstName@@%%%%##, the hall is ready.</p>',
      }),
    );
    await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(textOf('.notification-detail-content')).toBe(`Dear ${MOCK_USER.firstName}, the hall is ready.`);
    });
    expect(calledActions()).toContain(PARAMETERS);
  });

  it('a Sharing message: the parameters, and nothing in the body container', async () => {
    serve(seed({ MessageInfoTypeId: 3, Content: '<p>Shared with you</p>' }));
    await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(calledActions()).toContain(PARAMETERS);
    });
    expect(title()).toBe('Hall cleaning roster for Saturday');
    expect(bodyContainer()?.children).toHaveLength(0);
  });

  it('an adaptive card: the AdaptiveCardViewer instead of the HTML', async () => {
    const card = JSON.stringify({
      type: 'AdaptiveCard',
      version: '1.3',
      body: [{ type: 'TextBlock', text: 'Volunteers needed for Saturday' }],
    });
    serve(seed({ AdaptiveCardContent: card }));
    const { container } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(container.querySelector('[data-block="Widgets.AdaptiveCardViewer"]')?.id).toBe('$b9');
    });
    expect(container.querySelector('.notification-detail-content')).toBeNull();
  });

  it('sanitizes the HTML body with the allowed tags and attributes', async () => {
    serve(seed({ Content: '<p>Bring <em>a plate</em><script>alert(1)</script><img src="/x.png" onerror="x()"></p>' }));
    const { container } = await open('?MessageInstanceId=7700');
    await waitFor(() => {
      expect(container.querySelector('.notification-detail-content em')?.textContent).toBe('a plate');
    });
    const html = container.querySelector('.notification-detail-content')?.innerHTML ?? '';
    expect(html).not.toContain('script');
    expect(html).not.toContain('onerror');
    expect(container.querySelector('[data-block="HtmlSanitizer.SanitizedHtml"]')?.id).toBe('$b10');
  });
});
