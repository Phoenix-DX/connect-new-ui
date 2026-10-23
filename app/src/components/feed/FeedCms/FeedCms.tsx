/** @origin UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS */
// @os-block UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { log } from '@/platform/log/log';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { LazyImage } from '@/shared/UBTConnectLibrary/LazyImage';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { getIframeObject, getScrollContainer } from '@/shared/UBTConnect_EmbedFeed/lib/actions';
import { getFeedConfig, type FeedConfig } from './api';
import { embed } from './connect2Feed';

export interface FeedCmsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** One feed item (FeedItemDetail, MessageDetail) instead of the feed list. */
  feedItemId?: string;
  b2CTenant?: string;
  /** Event OnShare(ItemId, FeedItemTitle, FeedItemSubtitle, FeedItemImageURL). */
  onOnShare?: (itemId: string, feedItemTitle: string, feedItemSubtitle: string, feedItemImageURL: string) => void;
  /** Event OnDownloaded(URL, Filename). */
  onOnDownloaded?: (url: string, filename: string) => void;
  /** Event OnLoaded. */
  onOnLoaded?: () => void;
}

interface FeedActions {
  onFeedComplete: () => void;
  setListenerScroll: (listener: () => void) => void;
  /** Action_OnFeedShare → OnShare (Embedded_FeedCMS.mvc.js:579-604). */
  onFeedShare: (itemId: string, title: string, subtitle: string, imageURL: string) => void;
  /** Action_OnFeedDownload → OnDownloaded (Embedded_FeedCMS.mvc.js:504-527). */
  onFeedDownload: (url: string, filename: string) => void;
}

/** window.feedControl of the InitializeFeed JS node: the SDK callbacks call the latest block's actions. */
const feedControl: Partial<FeedActions> & { start?: number } = {};

/** InitializeFeed JS node (Embedded_FeedCMS.mvc.js:979-1110): registers the block's actions, configures the SDK once,
    then loads the feed list or the single item into the container. handleFeedScroll lets the iframe scroll by itself
    only once the container reaches the top (60 px threshold). */
function initializeFeed(
  p: { config: FeedConfig; b2CTenant: string; containerId: string; feedItemId: string },
  a: FeedActions,
) {
  feedControl.onFeedComplete = a.onFeedComplete;
  feedControl.setListenerScroll = a.setListenerScroll;
  feedControl.onFeedShare = a.onFeedShare;
  feedControl.onFeedDownload = a.onFeedDownload;
  function handleFeedScroll() {
    const container = document.getElementById(p.containerId);
    const iframe = getIframeObject(p.containerId);
    const scrollContainer = getScrollContainer();
    if (!iframe || !scrollContainer) return;
    let ticking = false;
    const threshold = 60;
    function setIframeScrolling(enabled: boolean) {
      if (!iframe) return;
      iframe.setAttribute('scrolling', enabled ? 'yes' : 'no');
      iframe.style.overflow = enabled ? 'auto' : 'hidden';
    }
    function updateScrollLock() {
      const rect = (container ?? iframe)?.getBoundingClientRect();
      setIframeScrolling(rect !== undefined && rect.top <= threshold);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollLock);
        ticking = true;
      }
    }
    feedControl.setListenerScroll?.(onScroll);
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    updateScrollLock();
  }
  feedControl.start = performance.now();
  if (!embed.isConfigured()) {
    void embed.configure({
      baseUrl: p.config.BaseURL,
      theme: 'light',
      limit: 10,
      channelId: '',
      containerId: p.containerId,
      height: 'auto',
      tokenType: p.config.TokenType,
      b2cTenants: p.b2CTenant,
      b2cClientIds: p.config.B2CClientId,
      b2cPolicy: p.config.B2CPolicy,
      idToken: p.config.Token,
      hideActions: false,
      onReady: () => undefined, // Action_OnFeedReady is empty
      onFeedsLoaded: () => feedControl.onFeedComplete?.(),
      onError: () => undefined, // JSUtils_Console_Log only
      onFeedClick: () => undefined, // JSUtils_Console_Log only
      onShare: (data) =>
        feedControl.onFeedShare?.(data.feedId ?? '', data.feedTitle ?? '', data.subtitle ?? '', data.image ?? ''),
      onDownload: (data) => feedControl.onFeedDownload?.(data.url ?? '', data.fileName ?? ''),
      onComplete: () => {
        feedControl.onFeedComplete?.();
        handleFeedScroll();
      },
    });
  }
  if (p.feedItemId !== '') embed.openFeedItem(p.feedItemId, p.containerId, { hideActions: false });
  else embed.loadFeeds({ containerId: p.containerId, height: '100%', hideActions: false });
}

/** Feed CMS embed (p:UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc.js view): a skeleton while loading, then the
    `connect2feeds` container the feed SDK fills with its iframe (D8 b: a mock page). OnInitialize builds the skeleton
    list (5 items, 1 for a single item); OnReady shows it; GetFeedConfig → InitializeFeed; OnFeedComplete hides it and
    raises OnLoaded; OnDestroy removes the scroll listener. OnShare / OnDownloaded come from the SDK's `feed:share` /
    `feed:download` messages (connect2Feed.ts). */
export function FeedCms({ id, feedItemId = '', b2CTenant = '', onOnShare, onOnDownloaded, onOnLoaded }: FeedCmsProps) {
  const prefix = id?.replace('$', '');
  const fallbackId = useId();
  const containerId = prefix === undefined ? `connect2feeds${fallbackId}` : `${prefix}-connect2feeds`;
  /* OnReady sets isLoading True right after the first render; starting True renders that state without a cascading
     render. */
  const [isLoading, setIsLoading] = useState(true);
  const [loadingList] = useState(() =>
    Array.from({ length: feedItemId !== '' ? 1 : 5 }, (_, i) => `Loading ${String(i + 1)}`),
  );
  const loaded = useRef(onOnLoaded);
  const blockEvents = useRef({ onOnShare, onOnDownloaded });
  useLayoutEffect(() => {
    loaded.current = onOnLoaded;
    blockEvents.current = { onOnShare, onOnDownloaded };
  });

  useEffect(() => {
    let scrollListener: (() => void) | null = null;
    let alive = true;
    getFeedConfig({ FeedItemId: feedItemId, B2CTenant: b2CTenant })
      .then((config) => {
        if (!alive) return;
        initializeFeed(
          { config, b2CTenant, containerId, feedItemId },
          {
            onFeedComplete: () => {
              if (!alive) return;
              setIsLoading(false);
              loaded.current?.();
            },
            setListenerScroll: (listener) => {
              scrollListener = listener;
            },
            onFeedShare: (itemId, title, subtitle, imageURL) => {
              if (alive) blockEvents.current.onOnShare?.(itemId, title, subtitle, imageURL);
            },
            onFeedDownload: (url, filename) => {
              if (alive) blockEvents.current.onOnDownloaded?.(url, filename);
            },
          },
        );
      })
      .catch((e: unknown) => {
        log.warn('DataActionGetFeedConfig failed', e);
      });
    return () => {
      alive = false;
      if (scrollListener) getScrollContainer()?.removeEventListener('scroll', scrollListener);
    };
  }, [feedItemId, b2CTenant, containerId]);

  return (
    <OSBlock name="Blocks.Embedded_FeedCMS" id={id}>
      {isLoading && (
        <SkeletonSection id={prefix === undefined ? undefined : `${prefix}-$b1`} inIsLoading>
          <CustomContainer options={{ Background: { BackgroundColor: UBT_Color.Neutral0 } }}>
            <div className="list list-group OSFillParent" data-list="">
              {loadingList.map((item) => (
                <CustomContainer key={item} options={{ MarginSize: { GeneralSizeId: UBT_Size.Base } }}>
                  <LazyImage
                    fallbackPadding={{ GeneralSizeId: UBT_Size.DoubleExtraLarge }}
                    inBorderOptions={{ BorderRadius: UBT_Shape.Soft }}
                    inImageSize={{ Width: UBT_ImageSize.FullWidth_100_Percent }}
                    fallbackOptions={{ IconId: UBT_Icons.WidgetsFill, FontSize: UBT_FontSize.Display }}
                  />
                </CustomContainer>
              ))}
            </div>
          </CustomContainer>
        </SkeletonSection>
      )}
      <div
        className={`overflow-hidden ${isLoading ? 'display-none' : ''}${feedItemId !== '' ? ' feed--single-item' : ''}`}
        data-container=""
        id={containerId}
      />
    </OSBlock>
  );
}
