import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { testCapturedVariants } from '@/test/capturedVariants';
import { ItemOptionsMenu } from './ItemOptionsMenu';
import * as stories from './ItemOptionsMenu.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const menuLabels = () =>
  [...document.body.querySelectorAll('.dx-popup-menu-content .context-menu-item')].map((i) => i.textContent);

/** Opens the popup through its anchor and waits for the open class (the PopupMenu opens on the next frame). */
async function open() {
  fireEvent.click(screen.getByText('anchor'));
  await waitFor(() => {
    expect(document.body.querySelector(':scope > .dx-popup-menu-container')).toHaveClass('dx-popup-menu-open');
  });
}

/* Behaviour from Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc.js (BookmarksByGroup pretty sources): view
   :179-490, controller :493-655. */
describe('ItemOptionsMenu', () => {
  afterEach(() => {
    for (const f of ['C2ExtendedShare', 'WalletAccess'] as const) setFlag(f, null);
  });

  testCapturedVariants(stories, captures);

  it('In_IsRecordAvailable False renders no popup', () => {
    const { container } = render(<ItemOptionsMenu id="b1-$b5" inIsRecordAvailable={false} />);
    expect(container.querySelector('[data-block="Utility.ItemOptionsMenu"]')?.childElementCount).toBe(0);
  });

  it('bookmark item: "Unmark" when bookmarked, else "Bookmark"; a click raises BookmarkToggle(In_IsBookmarked)', async () => {
    const onBookmarkToggle = vi.fn();
    const { rerender } = render(
      <ItemOptionsMenu id="b1-$b5" inIsBookmarked onBookmarkToggle={onBookmarkToggle} anchorPlaceholder="anchor" />,
    );
    await open();
    expect(menuLabels()).toEqual(['Unmark']);
    fireEvent.click(screen.getByText('Unmark'));
    expect(onBookmarkToggle).toHaveBeenCalledWith(true);
    // OnParametersChanged: IsBookmarked follows the input
    rerender(<ItemOptionsMenu id="b1-$b5" onBookmarkToggle={onBookmarkToggle} anchorPlaceholder="anchor" />);
    expect(menuLabels()).toEqual(['Bookmark']);
  });

  it('share: "Share" with C2ExtendedShare on, else "Share to Connect" (never "Share to others..." on the web)', async () => {
    const onShareToConnect = vi.fn();
    setFlag('C2ExtendedShare', 'on');
    const { unmount } = render(
      <ItemOptionsMenu id="b1-$b5" isShareImplemented onShareToConnect={onShareToConnect} anchorPlaceholder="anchor" />,
    );
    await open();
    expect(menuLabels()).toEqual(['Bookmark', 'Share']);
    fireEvent.click(screen.getByText('Share'));
    expect(onShareToConnect).toHaveBeenCalledTimes(1);
    unmount();
    setFlag('C2ExtendedShare', 'off');
    render(<ItemOptionsMenu id="b1-$b6" isShareImplemented anchorPlaceholder="anchor" />);
    await open();
    expect(menuLabels()).toEqual(['Bookmark', 'Share to Connect']);
  });

  it('"Send a gift" only when ShowGift and WalletAccess are on; a click raises SendGift', async () => {
    const onSendGift = vi.fn();
    setFlag('WalletAccess', 'on');
    render(<ItemOptionsMenu id="b1-$b5" showGift onSendGift={onSendGift} anchorPlaceholder="anchor" />);
    await open();
    expect(menuLabels()).toEqual(['Bookmark', 'Send a gift']);
    fireEvent.click(screen.getByText('Send a gift'));
    expect(onSendGift).toHaveBeenCalledTimes(1);
    setFlag('WalletAccess', 'off');
    await waitFor(() => {
      expect(menuLabels()).toEqual(['Bookmark']);
    });
  });
});
