import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getHostConfigByConfigId, setAdaptiveCardsRuntime } from '@/components/widgets/AdaptiveCardViewer';
import type { AdaptiveCardInstance } from '@/components/widgets/AdaptiveCardViewer/runtime';
import { CommunicationException } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { NotificationDetailBlock, type NotificationDetailBlockProps } from './NotificationDetailBlock';

vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));

/* The card of one message from props. Fictional texts. */
function renderBlock(props: Partial<NotificationDetailBlockProps> = {}) {
  return render(
    <NotificationDetailBlock
      id="b1-NotificationDetailBlock"
      prefix="b1-b4"
      title="Choir practice moves to Thursday"
      profileIconURL="/UBT_CW/img/UBT_CW.directory_entity_logo.png"
      summary=""
      isUrgent={false}
      isAdaptiveCard={false}
      messageContent='<p>Practice starts at <a href="https://example.org/choir">7 pm</a>.</p>'
      adaptiveCardContent=""
      hostConfig={getHostConfigByConfigId(1)}
      dateTimeCreated="2026-10-14T10:20:00"
      showDetailsPlaceholder={false}
      forceNoIconBorder={false}
      hasActionButton={false}
      messageDetails={<p>shared object</p>}
      actionButton={<p>action button</p>}
      {...props}
    />,
  );
}

const icon = () => document.querySelector<HTMLImageElement>('.notification-detail-icon-badge img');
const iconClass = () => document.querySelector('.notification-detail-icon-badge')?.className;

afterEach(() => {
  vi.restoreAllMocks();
});

describe('NotificationDetailBlock', () => {
  it('shows the sender icon, the title, the sanitized content and the date of the message', () => {
    renderBlock();
    expect(document.getElementById('b1-b4-NotificationDetail')).not.toBeNull();
    expect(icon()?.getAttribute('src')).toBe('/UBT_CW/img/UBT_CW.directory_entity_logo.png');
    expect(iconClass()).toBe('notification-detail-icon-badge');
    expect(document.getElementById('b1-b4-TitleContainer')?.textContent).toBe('Choir practice moves to Thursday');
    expect(document.querySelector('.notification-detail-content')?.textContent).toBe('Practice starts at 7 pm.');
    expect(document.getElementById('b1-b4-Message_List_Item_Info')?.textContent).toBe('Wed 14/10/2026 10:20 am');
    expect(document.getElementById('b1-b4-Placeholder_ActionButton')).toBeNull();
  });

  it('shows the User_rectangle image without a border when the message has no sender icon', () => {
    renderBlock({ profileIconURL: '' });
    expect(icon()?.getAttribute('src')).toContain('User_rectangle');
    expect(iconClass()).toBe('notification-detail-icon-badge no-border');
  });

  it('shows "" for the null date', () => {
    renderBlock({ dateTimeCreated: null });
    expect(document.getElementById('b1-b4-Message_List_Item_Info')?.textContent).toBe('');
  });

  it('opens a link of the content in a new tab', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    renderBlock();
    fireEvent.click(screen.getByText('7 pm'));
    expect(open).toHaveBeenCalledWith('https://example.org/choir', '_blank');
  });

  it('shows the MessageDetails placeholder, the adaptive card viewer and the action button placeholder', () => {
    renderBlock({ showDetailsPlaceholder: true, hasActionButton: true });
    expect(document.getElementById('b1-b4-MessageDetails')?.textContent).toBe('shared object');
    expect(document.getElementById('b1-b4-Placeholder_ActionButton')?.textContent).toBe('action button');
    expect(document.querySelector('.notification-detail-content')).toBeNull();

    renderBlock({ isAdaptiveCard: true });
    expect(document.getElementById('b1-b4-$b2')?.dataset.block).toBe('Widgets.AdaptiveCardViewer');
    expect(document.getElementById('b1-b4-b2-AdaptiveCardContainer')).not.toBeNull();
  });

  it('raises AdaptiveCardEventExecuted for a card action; a CommunicationException shows the connection message', async () => {
    const cards: AdaptiveCardInstance[] = [];
    class StubCard implements AdaptiveCardInstance {
      onExecuteAction?: AdaptiveCardInstance['onExecuteAction'];
      parse() {}
      render() {
        cards.push(this);
        return document.createElement('div');
      }
    }
    setAdaptiveCardsRuntime({
      AdaptiveCard: StubCard,
      HostConfig: class {
        constructor(public config: unknown) {}
      },
      OpenUrlAction: class {
        url = '';
      },
    });
    const onAdaptiveCardEventExecuted = vi.fn().mockRejectedValueOnce(new CommunicationException('offline'));
    renderBlock({ isAdaptiveCard: true, adaptiveCardContent: '{"type":"AdaptiveCard"}', onAdaptiveCardEventExecuted });
    cards[0]?.onExecuteAction?.({ id: 'rsvp', data: { answer: 'yes' } });
    await vi.waitFor(() => {
      expect(showFeedbackMessage).toHaveBeenCalledWith('Please check your internet connection!', 0);
    });
    expect(onAdaptiveCardEventExecuted).toHaveBeenCalledWith('{"type":"AdaptiveCard"}', 'rsvp', '{"answer":"yes"}');
    setAdaptiveCardsRuntime(null);
  });

  it('shows the summary when the message has one, in SummaryContainer with its inline style (mvc.js:405-432)', () => {
    renderBlock({ summary: 'Bring your own music sheets' });
    const text = screen.getByText('Bring your own music sheets');
    expect(text.tagName).toBe('SPAN');
    expect(text.className).toBe('OSFillParent');
    expect(text.style.color).toBe('rgb(96, 95, 95)');
    expect(text.style.fontSize).toBe('14px');
    expect(text.parentElement?.id).toBe('b1-b4-SummaryContainer');
  });

  it('no summary: no SummaryContainer', () => {
    renderBlock();
    expect(document.getElementById('b1-b4-SummaryContainer')).toBeNull();
  });

  it('IsUrgent: the exclamation icon in its centred container (mvc.js:450-480); not urgent: nothing', () => {
    renderBlock();
    expect(document.getElementById('b1-b4-Message_List_Item_Icon')).toBeNull();
    renderBlock({ isUrgent: true });
    const urgent = document.getElementById('b1-b4-Message_List_Item_Icon') as HTMLElement;
    expect(urgent.className).toBe('icon alert-text fa-33 fa fa-exclamation fa-1x');
    expect(urgent.style.color).toBe('rgb(252, 0, 0)');
    expect(urgent.style.width).toBe('20px');
    const wrapper = urgent.parentElement as HTMLElement;
    expect(wrapper.style.marginBottom).toBe('5px');
    expect(wrapper.style.textAlign).toBe('center');
  });
});
