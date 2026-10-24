import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ContextMenu } from './ContextMenu';
import * as stories from './ContextMenu.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

async function openMenu() {
  const anchor = document.querySelector('.dx-popup-menu-anchor .ubt-icon');
  if (!anchor) throw new Error('anchor not rendered');
  fireEvent.click(anchor);
  await waitFor(() => {
    expect(document.querySelector('.dx-popup-menu')).toHaveClass('dx-popup-menu-open');
    // PopupMenu's open effect fixes the container and adds the click-outside listener together: wait for it, or a
    // click made right after the open render reaches no listener (flaky under load).
    expect(document.querySelector('.dx-popup-menu-container')).toHaveStyle({ position: 'fixed' });
  });
}
const items = () => [...document.querySelectorAll('[data-block="ConnectPatterns.ContextMenu_Item"]')];

describe('ContextMenu', () => {
  testCapturedVariants(stories, captures);

  it('shows the options in the compiled order and raises their events', async () => {
    const onEventDelete = vi.fn();
    const onEventSendGift = vi.fn();
    render(
      <ContextMenu
        inContextMenuOptions={{
          HasSendGift: true,
          HasMarkAsRead: true,
          HasMarkAsUnread: true,
          Edit: { HasEdit: true, Label: 'Edit note' },
          HasShare: true,
          Delete: { HasDelete: true, Label: 'Delete note' },
        }}
        onEventDelete={onEventDelete}
        onEventSendGift={onEventSendGift}
      />,
    );
    await openMenu();
    const menu = document.querySelector('.ubt-context-menu');
    expect(menu?.className).toBe(
      'ubt-custom-container ubt-context-menu background-neutral-0 shadow-xs border-radius-soft',
    );
    const labels = ['Send a Gift', 'Mark as Read', 'Mark as Unread', 'Edit note', 'Share', 'Delete note'];
    expect(items().map((item) => labels.find((label) => item.textContent.endsWith(label)))).toEqual(labels);
    const del = items()[5]?.parentElement;
    if (!del) throw new Error('delete option not rendered');
    expect(del).toHaveStyle({ cursor: 'pointer' });
    fireEvent.click(del);
    expect(onEventDelete).toHaveBeenCalledTimes(1);
    expect(onEventSendGift).not.toHaveBeenCalled();
    expect(document.querySelector('.dx-popup-menu')).not.toHaveClass('dx-popup-menu-open');
  });

  it('hides the options whose flag is off', async () => {
    render(<ContextMenu inContextMenuOptions={{ Edit: { Label: 'Edit note' } }} />);
    await openMenu();
    expect(items()).toHaveLength(0);
  });
});
