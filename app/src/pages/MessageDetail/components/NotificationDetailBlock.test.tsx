import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NotificationDetailBlock, type NotificationDetailBlockProps } from './NotificationDetailBlock';

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

  it('shows the MessageDetails placeholder, the adaptive card marker and the action button placeholder', () => {
    renderBlock({ showDetailsPlaceholder: true, hasActionButton: true });
    expect(document.getElementById('b1-b4-MessageDetails')?.textContent).toBe('shared object');
    expect(document.getElementById('b1-b4-Placeholder_ActionButton')?.textContent).toBe('action button');
    expect(document.querySelector('.notification-detail-content')).toBeNull();

    renderBlock({ isAdaptiveCard: true });
    expect(document.querySelector('[data-not-captured="Q1: Widgets.AdaptiveCardViewer (b1-b4-$b2)"]')).not.toBeNull();
  });

  it('shows the summary when the message has one', () => {
    renderBlock({ summary: 'Bring your own music sheets' });
    expect(screen.getByText('Bring your own music sheets')).toBeInTheDocument();
  });
});
