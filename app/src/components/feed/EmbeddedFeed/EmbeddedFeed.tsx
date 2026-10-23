/** @origin UBTConnect.Home.Feed_Embeded */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { FeedCms, type FeedCmsConfig } from '@/components/feed/FeedCms';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { SharePopup } from '@/components/share/SharePopup';

export interface EmbeddedFeedProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** FeedItemId: one feed item (FeedItemDetail, MessageDetail) instead of the feed list. */
  feedItemId?: string;
  /** GetHasFeedEnabled: the Feed CMS embed is shown. */
  isFeedEnabled: boolean;
  /** GetHasExtendedShare: a share of the feed raises Event_Share instead of opening the share popup. */
  hasExtendedShare: boolean;
  /** The client variable UBTConnect.Embedd_B2CTenant, the B2CTenant input of Embedded_FeedCMS. */
  b2CTenant: string;
  /** The answer of DataActionGetFeedConfig of Embedded_FeedCMS; undefined while it loads or after it failed. */
  feedConfig?: FeedCmsConfig;
  /** Handle_Download: the handler of Embedded_FeedCMS OnDownloaded (opens the file). */
  onDownloaded: (url: string, filename: string) => void;
  /** Handle_Share_Connect after the popup closed: the caller opens LegacyShareObject for the feed item. */
  onShareToConnect: (shareId: string, feedItemTitle: string) => void;
  /** Event Event_Share(ShareId, FeedItemTitle, FeedItemSubtitle, FeedItemImageURL): raised instead of the share popup
      when GetHasExtendedShare. */
  onEventShare?: (shareId: string, feedItemTitle: string, feedItemSubtitle: string, feedItemImageURL: string) => void;
}

/** Feed embed of the home screens: the Feed CMS embed when GetHasFeedEnabled, the share popup it opens, and the
    FileTransfer plugin's download handler (renders nothing). The local variables SharePopUp_Show, SharePopUp_Id and
    ShareFeedItem_Title are the popup state (isLoadingDocument is only written by the download handlers, never read).
    The flows that use the platform (flags, client variable, feed configuration, download, navigation) come from the
    caller (`useEmbeddedFeed` of `platform/session`). */
export function EmbeddedFeed({
  id,
  feedItemId = '',
  isFeedEnabled,
  hasExtendedShare,
  b2CTenant,
  feedConfig,
  onDownloaded,
  onShareToConnect,
  onEventShare,
}: EmbeddedFeedProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const [sharePopUpShow, setSharePopUpShow] = useState(false);
  const [sharePopUpId, setSharePopUpId] = useState('');
  const [shareFeedItemTitle, setShareFeedItemTitle] = useState('');

  // Handle_Share: SharePopUp_Show = In_isOpen.
  const handle_Share = (isOpen: boolean) => {
    setSharePopUpShow(isOpen);
  };

  /* Embedded_FeedCMSOnShare: with the extended share, raise Event_Share; otherwise open the share popup for the item
     (the JSUtils_Console_Log(ShareId) call is not ported, as in Embedded_FeedCMS). */
  const embedded_FeedCMSOnShare = (
    shareId: string,
    feedItemTitle: string,
    feedItemSubtitle: string,
    feedItemImageURL: string,
  ) => {
    if (hasExtendedShare) {
      onEventShare?.(shareId, feedItemTitle, feedItemSubtitle, feedItemImageURL);
      return;
    }
    setSharePopUpId(shareId);
    setSharePopUpShow(true);
    setShareFeedItemTitle(feedItemTitle);
  };

  // Handle_Share_Connect: close the popup, then the caller's step (YieldJS, LegacyShareObject).
  const handle_Share_Connect = () => {
    handle_Share(false);
    onShareToConnect(sharePopUpId, shareFeedItemTitle);
  };

  return (
    <OSBlock name="Home.Feed_Embeded" id={id}>
      {isFeedEnabled && (
        <FeedCms
          id={childId(1)}
          b2CTenant={b2CTenant}
          feedItemId={feedItemId}
          config={feedConfig}
          onOnShare={embedded_FeedCMSOnShare}
          onOnDownloaded={onDownloaded}
        />
      )}
      {/* In_ContactPopupData: the record as the block builds it; the other fields keep their defaults. */}
      <SharePopup
        id={childId(2)}
        inContactPopupData={{
          EntityTypeId: Connect_Entity.FeedItem,
          EntityId: textToLongInteger(sharePopUpId),
          IsAvatarImage: false,
          ActionName: 'Share ' + shareFeedItemTitle,
          Name: '',
          Locality: '',
          TimezoneName: '',
          TimezoneOffset: 0,
          ShowPopup: sharePopUpShow,
          IsFetchingTimezone: false,
          IsLoading: false,
          ShowTimezone: false,
          ShowImage: false,
        }}
        onEventCancel={() => {
          handle_Share(false);
        }}
        onEventShareToConnect={handle_Share_Connect}
      />
      {/* FileTransferPlugin.FileTransfer.HandleDownload: a Cordova plugin block that renders nothing (captured with 0
          nodes); its download events are not wired (README). */}
      <OSBlock name="FileTransfer.HandleDownload" id={childId(3)} />
    </OSBlock>
  );
}
