// @os-block UBTConnect.Home.Feed_Embeded
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar } from '@/platform/session/session';
import { Embedded_FeedCMS } from '../../UBTConnect_EmbedFeed/Embedded_FeedCMS';
import {
  getHasExtendedShare,
  getHasFeedEnabled,
  openInApp_TryOpenFileInApp,
  textToLongInteger,
} from '../../UBTConnect_Utils/lib/actions';
import { Connect_Entity } from '../../UBTConnect_Utils/lib/staticEntities';
import { SharePopup } from '../../UBTConnect_Utils/SharePopup';
import { Type_ShareObject } from '../lib/staticEntities';

export interface Feed_EmbededProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** FeedItemId: one feed item (FeedItemDetail, MessageDetail) instead of the feed list. */
  feedItemId?: string;
  /** Event Event_Share(ShareId, FeedItemTitle, FeedItemSubtitle, FeedItemImageURL): raised instead of the share popup
      when GetHasExtendedShare. */
  onEventShare?: (shareId: string, feedItemTitle: string, feedItemSubtitle: string, feedItemImageURL: string) => void;
}

/** Feed embed of the home screens (p:UBTConnect.Home.Feed_Embeded.mvc.js view from :155): the Feed CMS embed when
    GetHasFeedEnabled (:157), the share popup it opens, and the FileTransfer plugin's download handler (renders nothing).
    Local variables (:13-24): SharePopUp_Show, SharePopUp_Id, ShareFeedItem_Title (isLoadingDocument is only written by
    the download handlers, never read). */
export function Feed_Embeded({ id, feedItemId = '', onEventShare }: Feed_EmbededProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const navigate = useOsNavigate();
  const [sharePopUpShow, setSharePopUpShow] = useState(false);
  const [sharePopUpId, setSharePopUpId] = useState('');
  const [shareFeedItemTitle, setShareFeedItemTitle] = useState('');

  // Handle_Share (:381-405): SharePopUp_Show = In_isOpen.
  const handle_Share = (isOpen: boolean) => {
    setSharePopUpShow(isOpen);
  };

  /* Embedded_FeedCMSOnShare (:455-505): with the extended share, raise Event_Share; otherwise open the share popup for
     the item (the JSUtils_Console_Log(ShareId) call is not ported, as in Embedded_FeedCMS). */
  const embedded_FeedCMSOnShare = (
    shareId: string,
    feedItemTitle: string,
    feedItemSubtitle: string,
    feedItemImageURL: string,
  ) => {
    if (getHasExtendedShare()) {
      onEventShare?.(shareId, feedItemTitle, feedItemSubtitle, feedItemImageURL);
      return;
    }
    setSharePopUpId(shareId);
    setSharePopUpShow(true);
    setShareFeedItemTitle(feedItemTitle);
  };

  /* Handle_Download (:685-722), the handler of Embedded_FeedCMS OnDownloaded (:169-182):
     OpenInApp_TryOpenFileInApp(Filename, URL, "connect-feed-documents", "pdf"); its outputs are not used. */
  const handle_Download = (url: string, filename: string) => {
    openInApp_TryOpenFileInApp(filename, url, 'connect-feed-documents', 'pdf');
  };

  /* Handle_Share_Connect (:418-453): close the popup, yield (YieldJS :879-885: one resolved promise), then
     LegacyShareObject(In_ShareObjectTypeId Feed, In_CustomTitle, In_ObjectId) with the default transition. */
  const handle_Share_Connect = () => {
    handle_Share(false);
    void Promise.resolve().then(() => {
      navigate(`/${APP_ID}/LegacyShareObject`, {
        In_ShareObjectTypeId: Type_ShareObject.Feed,
        In_CustomTitle: shareFeedItemTitle,
        In_ObjectId: sharePopUpId,
      });
    });
  };

  return (
    <OSBlock name="Home.Feed_Embeded" id={id}>
      {getHasFeedEnabled() && (
        <Embedded_FeedCMS
          id={childId(1)}
          b2CTenant={getClientVar('UBTConnect.Embedd_B2CTenant')}
          feedItemId={feedItemId}
          onOnShare={embedded_FeedCMSOnShare}
          onOnDownloaded={handle_Download}
        />
      )}
      {/* In_ContactPopupData (:212-239): the record as built there; the other fields keep their defaults. */}
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
      {/* FileTransferPlugin.FileTransfer.HandleDownload (:296): a Cordova plugin block that renders nothing
          (captured with 0 nodes); its download events are not wired (README). */}
      <OSBlock name="FileTransfer.HandleDownload" id={childId(3)} />
    </OSBlock>
  );
}
