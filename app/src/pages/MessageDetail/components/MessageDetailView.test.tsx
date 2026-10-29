import { cleanup, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MessageDetail, MessageParameter } from '@/api/message';
import { MessageInfoType, MessageSenderTarget, MessageType } from '@/pages/MessageDetail/staticEntities';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { MessageDetailView, type MessageDetailViewProps } from './MessageDetailView';

/* The view from props, on a memory router (the back MenuIcon needs one). Fictional messages. */
const PATH = '/UBTConnect/MessageDetail';

const message = (patch: Partial<MessageDetail> = {}): MessageDetail => ({
  messageInstanceId: '81014',
  messageInstanceUserId: 0,
  isRead: true,
  dateTimeCreated: '2026-10-09T14:50:00',
  title: 'Choir practice moves to Thursday',
  summary: '',
  isAdaptiveCard: false,
  messageTemplateTypeId: MessageType.Public,
  messageTemplatePriorityId: 1,
  messageInfoTypeId: MessageInfoType.GeneralInformation,
  sentAs: MessageSenderTarget.Directory,
  senderTargetId: MessageSenderTarget.Directory,
  senderTargetName: 'Directory',
  profileIconURL: '/UBT_CW/img/UBT_CW.directory_entity_logo.png',
  messageContent: '<p>Choir practice moves to Thursday</p>',
  adaptiveCardContent: '',
  userName: '',
  createdByMemberId: '0',
  ...patch,
});

function renderView(props: Partial<MessageDetailViewProps> = {}) {
  return renderRoutes(
    {
      [PATH]: (
        <MessageDetailView
          id="$b1"
          isLoading={false}
          message={message()}
          bottomBar={<p>bottom bar</p>}
          commonUIElements={<p>common UI</p>}
          {...props}
        />
      ),
    },
    PATH,
  );
}

const block = (container: HTMLElement) =>
  container.querySelector('[data-block="MyNotifications.ScreenBlock_MessageDetail"]');
const title = (container: HTMLElement) => container.querySelector('.notification-detail-title-overflow')?.textContent;
const notCaptured = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-not-captured]')].map((e) => e.getAttribute('data-not-captured'));

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('MessageDetailView', () => {
  it('renders the layout with the back icon, the sender as title, the card and the two placeholders', () => {
    const { container } = renderView();
    expect(block(container)?.id).toBe('$b1');
    expect(block(container)?.querySelector('[data-block="Layout.Layout"]')?.id).toBe('b1-$b1');
    expect(container.querySelector('[data-block="Layout.MenuIcon_Back"]')?.id).toBe('b1-$b2');
    expect(title(container)).toBe('Directory');
    expect(container.querySelector('[data-block="Widgets.NotificationDetailBlock"]')?.id).toBe(
      'b1-NotificationDetailBlock',
    );
    expect(document.getElementById('b1-b4-TitleContainer')?.textContent).toBe('Choir practice moves to Thursday');
    expect(document.getElementById('b1-BottomBar')?.textContent).toBe('bottom bar');
    expect(document.getElementById('b1-CommonUI_Elements')?.textContent).toBe('common UI');
    expect(container.querySelector('[data-block="Reusable.Spinner"]')).toBeNull();
    expect(document.getElementById('b1-b4-Placeholder_ActionButton')).toBeNull();
  });

  it.each([
    ['loading', { isLoading: true }],
    ['before the first answer', { isLoading: false, message: null }],
  ])('shows the Spinner %s', (_name, props) => {
    const { container } = renderView(props);
    expect(container.querySelector('[data-block="Reusable.Spinner"]')?.id).toBe('b1-$b3');
    expect(container.querySelector('.list-updating-cont')).not.toBeNull();
    expect(container.querySelector('[data-block="Widgets.NotificationDetailBlock"]')).toBeNull();
  });

  it('keeps the title of a message that is still loading, and "" before the first answer', () => {
    expect(title(renderView({ isLoading: true }).container)).toBe('Directory');
    expect(title(renderView({ message: null }).container)).toBe('');
  });

  it('titles a LordsDayMeal message "Meal Allocation"', () => {
    const meal = message({
      sentAs: MessageSenderTarget.LordsDayMeal,
      senderTargetId: MessageSenderTarget.LordsDayMeal,
    });
    expect(title(renderView({ message: meal }).container)).toBe('Meal Allocation');
  });

  it('titles a message sent as a user by the user name', () => {
    const fromUser = message({ sentAs: null, senderTargetId: 0, userName: 'Mara Lindqvist' });
    expect(title(renderView({ message: fromUser }).container)).toBe('Mara Lindqvist');
  });

  const parameter = (parameterNameId: number, parameterValue: string): MessageParameter => ({
    id: parameterValue,
    messageTemplateId: '31',
    parameterNameId,
    parameterValue,
    tenantId: 1,
  });

  it('shows ViewOrbitEvent "View Event" for an Orbit message with parameters, and no icon border (SBMD:600-640)', () => {
    const orbit = message({ sentAs: MessageSenderTarget.Orbit, senderTargetId: MessageSenderTarget.Orbit });
    const onClickViewOrbitEvent = vi.fn();
    const { container } = renderView({ message: orbit, parameters: [parameter(2, '7301')], onClickViewOrbitEvent });
    const button = document.getElementById('b1-ViewOrbitEvent');
    expect(button?.className).toBe('btn btn-primary full-width ignore-cap');
    expect(button?.textContent).toBe('View Event');
    expect(button?.parentElement?.id).toBe('b1-b4-Placeholder_ActionButton');
    fireEvent.click(button as HTMLElement);
    expect(onClickViewOrbitEvent).toHaveBeenCalledWith(MessageSenderTarget.Orbit);
    expect(container.querySelector('.notification-detail-icon-badge')?.className).toBe(
      'notification-detail-icon-badge no-border',
    );
  });

  it('shows "Go to Host Survey" for a host survey message; no button before the parameters or without any', () => {
    const survey = message({ sentAs: 20, senderTargetId: MessageSenderTarget.OrbitHostSurvey });
    renderView({ message: survey, parameters: [parameter(2, '7301')] });
    expect(document.getElementById('b1-ViewOrbitEvent')?.textContent).toBe('Go to Host Survey');
    cleanup();
    renderView({ message: survey, parameters: null });
    expect(document.getElementById('b1-ViewOrbitEvent')).toBeNull();
    cleanup();
    renderView({ message: survey, parameters: [] });
    expect(document.getElementById('b1-ViewOrbitEvent')).toBeNull();
  });

  it('shows ViewAssembleEvent "View Meeting" with GetHasAssemble, the parameters and ShowAssembleAction (SBMD:566-598)', () => {
    const assemble = message({ sentAs: MessageSenderTarget.Assemble, senderTargetId: MessageSenderTarget.Assemble });
    const onClickViewAssembleEvent = vi.fn();
    renderView({
      message: assemble,
      parameters: [],
      showAssembleAction: true,
      hasAssemble: true,
      onClickViewAssembleEvent,
    });
    const button = document.getElementById('b1-ViewAssembleEvent');
    expect(button?.textContent).toBe('View Meeting');
    fireEvent.click(button as HTMLElement);
    expect(onClickViewAssembleEvent).toHaveBeenCalledWith(MessageSenderTarget.Assemble);
    cleanup();
    renderView({ message: assemble, parameters: [], showAssembleAction: false, hasAssemble: true });
    expect(document.getElementById('b1-ViewAssembleEvent')).toBeNull();
    cleanup();
    renderView({ message: assemble, parameters: [], showAssembleAction: true, hasAssemble: false });
    expect(document.getElementById('b1-ViewAssembleEvent')).toBeNull();
  });

  it('shows the Share_UI block in the MessageDetails placeholder instead of the content for a Sharing message', () => {
    const { container } = renderView({
      message: message({ messageInfoTypeId: MessageInfoType.Sharing }),
      shareObjectDetail: <p>shared household</p>,
    });
    expect(document.getElementById('b1-b4-MessageDetails')?.textContent).toBe('shared household');
    expect(notCaptured(container)).toEqual([]);
    expect(container.querySelector('.notification-detail-content')).toBeNull();
  });

  it('marks an urgent message', () => {
    renderView({ message: message({ messageTemplatePriorityId: 2 }) });
    expect(document.getElementById('b1-b4-Message_List_Item_Icon')?.className).toContain('fa-exclamation');
  });
});
