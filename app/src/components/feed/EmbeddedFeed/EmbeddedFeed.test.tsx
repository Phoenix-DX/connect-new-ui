import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { FeedCmsConfig, FeedCmsProps } from '@/components/feed/FeedCms';
import { testCapturedVariants } from '@/test/capturedVariants';
import { EmbeddedFeed, type EmbeddedFeedProps } from './EmbeddedFeed';
import * as stories from './EmbeddedFeed.stories';

/* The mock feed SDK raises no OnShare (Embedded_FeedCMS README, D8 b): the child is replaced by its root wrapper (the
   only part the capture compares for a nested block) and its props are kept so the tests can raise its events. */
const feed = vi.hoisted(() => ({ props: undefined as FeedCmsProps | undefined }));
vi.mock('@/components/feed/FeedCms', async () => {
  const { OSBlock } = await import('@/components/ui/os/OSBlock');
  return {
    FeedCms: (props: FeedCmsProps) => {
      feed.props = props;
      return <OSBlock name="Blocks.Embedded_FeedCMS" id={props.id} />;
    },
  };
});

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/** The block on HomeFeed with the TST values (feed and extended share on); the share popup's contact popup needs a
    router. */
function renderBlock(over: Partial<EmbeddedFeedProps> = {}) {
  return render(
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>
      <EmbeddedFeed
        isFeedEnabled
        hasExtendedShare
        b2CTenant=""
        onDownloaded={() => undefined}
        onShareToConnect={() => undefined}
        {...over}
      />
    </MemoryRouter>,
  );
}

function raiseOnShare() {
  act(() => {
    feed.props?.onOnShare?.('42', 'Item title', 'Item subtitle', 'https://example.test/item.png');
  });
}

afterEach(() => {
  feed.props = undefined;
});

/* The flows that use the platform (flags, the B2C tenant client variable, the feed configuration, the download and
   the LegacyShareObject navigation) are tested with useEmbeddedFeed (platform/session/useEmbeddedFeed.test.tsx). */
describe('Feed_Embeded', () => {
  testCapturedVariants(stories, captures);

  it('passes FeedItemId, B2CTenant and the feed configuration to Embedded_FeedCMS', () => {
    const feedConfig: FeedCmsConfig = {
      BaseURL: 'https://cms.example',
      Token: '',
      TokenType: '',
      B2CClientId: '',
      B2CPolicy: '',
    };
    renderBlock({ id: '$b3', feedItemId: '7', b2CTenant: 'tenant-a', feedConfig });
    expect(feed.props).toMatchObject({ id: 'b3-$b1', b2CTenant: 'tenant-a', feedItemId: '7', config: feedConfig });
  });

  it('GetHasFeedEnabled off: no feed embed; the share popup and download handler stay', () => {
    const { container } = renderBlock({ id: '$b10', isFeedEnabled: false });
    expect(feed.props).toBeUndefined();
    const blocks = [...container.querySelectorAll('[data-block]')].map((el) => el.getAttribute('data-block'));
    expect(blocks).not.toContain('Blocks.Embedded_FeedCMS');
    expect(blocks).toContain('CW_CTA_PopUps.SharePopup');
    expect(blocks).toContain('FileTransfer.HandleDownload');
  });

  it('OnDownloaded: raises onDownloaded (Handle_Download) with the URL and the file name', () => {
    const onDownloaded = vi.fn();
    renderBlock({ onDownloaded });
    act(() => {
      feed.props?.onOnDownloaded?.('https://example.test/doc.pdf', 'doc.pdf');
    });
    expect(onDownloaded).toHaveBeenCalledWith('https://example.test/doc.pdf', 'doc.pdf');
  });

  it('OnShare with the extended share (TST): raises Event_Share; the popup stays closed', () => {
    const onEventShare = vi.fn();
    renderBlock({ onEventShare });
    raiseOnShare();
    expect(onEventShare).toHaveBeenCalledWith('42', 'Item title', 'Item subtitle', 'https://example.test/item.png');
    expect(screen.queryByText('Share to Connect')).toBeNull();
  });

  it('OnShare without the extended share: the share popup; Share to Connect closes it and raises onShareToConnect', async () => {
    const onEventShare = vi.fn();
    const onShareToConnect = vi.fn();
    renderBlock({ hasExtendedShare: false, onEventShare, onShareToConnect });
    raiseOnShare();
    expect(onEventShare).not.toHaveBeenCalled();
    expect(document.body.textContent).toContain('Share Item title');
    fireEvent.click(screen.getByText('Share to Connect'));
    expect(onShareToConnect).toHaveBeenCalledWith('42', 'Item title');
    await waitFor(() => {
      expect(screen.queryByText('Share to Connect')).toBeNull();
    });
  });

  it('Cancel closes the share popup', async () => {
    renderBlock({ hasExtendedShare: false });
    raiseOnShare();
    fireEvent.click(screen.getByText('Cancel'));
    await waitFor(() => {
      expect(screen.queryByText('Share to Connect')).toBeNull();
    });
  });
});
