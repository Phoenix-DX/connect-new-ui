import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { setClientVar } from '@/platform/session/session';
import type { Embedded_FeedCMSProps } from '../../UBTConnect_EmbedFeed/Embedded_FeedCMS';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Feed_Embeded } from './Feed_Embeded';
import * as stories from './Feed_Embeded.stories';

/* The mock feed SDK raises no OnShare (Embedded_FeedCMS README, D8 b): the child is replaced by its root wrapper (the
   only part the capture compares for a nested block) and its props are kept so the tests can raise its events. */
const feed = vi.hoisted(() => ({ props: undefined as Embedded_FeedCMSProps | undefined }));
vi.mock('../../UBTConnect_EmbedFeed/Embedded_FeedCMS', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    Embedded_FeedCMS: (props: Embedded_FeedCMSProps) => {
      feed.props = props;
      return <OSBlock name="Blocks.Embedded_FeedCMS" id={props.id} />;
    },
  };
});

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

function Location() {
  const location = useLocation();
  return <p data-testid="location">{location.pathname + location.search}</p>;
}

function renderOnHomeFeed(ui: ReactElement) {
  return render(
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>
      <Routes>
        <Route path="/UBTConnect/HomeFeed" element={ui} />
        <Route path="*" element={<Location />} />
      </Routes>
    </MemoryRouter>,
  );
}

function raiseOnShare() {
  act(() => {
    feed.props?.onOnShare?.('42', 'Item title', 'Item subtitle', 'https://example.test/item.png');
  });
}

afterEach(() => {
  setFlag('C2ExtendedShare', null);
  setFlag('C2EnableFeed', null);
  setClientVar('UBTConnect.Embedd_B2CTenant', '');
  feed.props = undefined;
});

describe('Feed_Embeded', () => {
  testCapturedVariants(stories, captures);

  it('passes FeedItemId and the Embedd_B2CTenant client variable to Embedded_FeedCMS', () => {
    setClientVar('UBTConnect.Embedd_B2CTenant', 'tenant-a');
    renderOnHomeFeed(<Feed_Embeded id="$b3" feedItemId="7" />);
    expect(feed.props).toMatchObject({ id: 'b3-$b1', b2CTenant: 'tenant-a', feedItemId: '7' });
  });

  it('GetHasFeedEnabled off: no feed embed; the share popup and download handler stay', () => {
    setFlag('C2EnableFeed', 'off');
    const { container } = renderOnHomeFeed(<Feed_Embeded id="$b10" />);
    expect(feed.props).toBeUndefined();
    const blocks = [...container.querySelectorAll('[data-block]')].map((el) => el.getAttribute('data-block'));
    expect(blocks).not.toContain('Blocks.Embedded_FeedCMS');
    expect(blocks).toContain('CW_CTA_PopUps.SharePopup');
    expect(blocks).toContain('FileTransfer.HandleDownload');
  });

  it('OnDownloaded: Handle_Download opens the file through OpenInApp_TryOpenFileInApp (web fallback: a new tab)', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    renderOnHomeFeed(<Feed_Embeded />);
    act(() => {
      feed.props?.onOnDownloaded?.('https://example.test/doc.pdf', 'doc.pdf');
    });
    expect(open).toHaveBeenCalledWith('https://example.test/doc.pdf', '_blank', 'noopener');
    open.mockRestore();
  });

  it('OnShare with the extended share (TST): raises Event_Share; the popup stays closed', () => {
    const onEventShare = vi.fn();
    renderOnHomeFeed(<Feed_Embeded onEventShare={onEventShare} />);
    raiseOnShare();
    expect(onEventShare).toHaveBeenCalledWith('42', 'Item title', 'Item subtitle', 'https://example.test/item.png');
    expect(screen.queryByText('Share to Connect')).toBeNull();
  });

  it('OnShare without the extended share: the share popup; Share to Connect closes it and opens LegacyShareObject', async () => {
    setFlag('C2ExtendedShare', 'off');
    const onEventShare = vi.fn();
    renderOnHomeFeed(<Feed_Embeded onEventShare={onEventShare} />);
    raiseOnShare();
    expect(onEventShare).not.toHaveBeenCalled();
    expect(document.body.textContent).toContain('Share Item title');
    fireEvent.click(screen.getByText('Share to Connect'));
    await waitFor(() => {
      expect(screen.getByTestId('location').textContent).toBe(
        '/UBTConnect/LegacyShareObject?In_ShareObjectTypeId=Feed&In_CustomTitle=Item%20title&In_ObjectId=42',
      );
    });
  });

  it('Cancel closes the share popup', async () => {
    setFlag('C2ExtendedShare', 'off');
    renderOnHomeFeed(<Feed_Embeded />);
    raiseOnShare();
    fireEvent.click(screen.getByText('Cancel'));
    await waitFor(() => {
      expect(screen.queryByText('Share to Connect')).toBeNull();
    });
  });
});
