import { beforeEach, describe, expect, it } from 'vitest';
import type { MessageDetail } from '@/api/message';
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

  it('shows the Orbit action button placeholder and no icon border for an Orbit message', () => {
    const orbit = message({ sentAs: MessageSenderTarget.Orbit, senderTargetId: MessageSenderTarget.Orbit });
    const { container } = renderView({ message: orbit });
    expect(document.getElementById('b1-b4-Placeholder_ActionButton')).not.toBeNull();
    expect(notCaptured(container)).toContain('Q1: button ViewOrbitEvent "View Event" / "Go to Host Survey"');
    expect(container.querySelector('.notification-detail-icon-badge')?.className).toBe(
      'notification-detail-icon-badge no-border',
    );
  });

  it('shows the Assemble action button placeholder for an Assemble message', () => {
    const assemble = message({ sentAs: MessageSenderTarget.Assemble, senderTargetId: MessageSenderTarget.Assemble });
    const { container } = renderView({ message: assemble });
    expect(notCaptured(container)).toContain(
      'Q1: button ViewAssembleEvent "View Meeting" and the Assemble content (BuildAssembleNotificationContent)',
    );
  });

  it('shows the MessageDetails placeholder instead of the content for a Sharing message', () => {
    const { container } = renderView({ message: message({ messageInfoTypeId: MessageInfoType.Sharing }) });
    expect(document.getElementById('b1-b4-MessageDetails')).not.toBeNull();
    expect(notCaptured(container)).toContain(
      'Q1: Share_UI.ShareObjectDetail / ShareObjectDetail_ExtendedShare (b1-$b5, b1-$b6)',
    );
    expect(container.querySelector('.notification-detail-content')).toBeNull();
  });

  it('marks an urgent message', () => {
    renderView({ message: message({ messageTemplatePriorityId: 2 }) });
    expect(document.getElementById('b1-b4-Message_List_Item_Icon')?.className).toContain('fa-exclamation');
  });
});
