import { useFeedConfigQuery, type FeedConfig } from '@/api/feed';
import { flagValue } from '@/platform/flags';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { openInApp_TryOpenFileInApp } from '@/lib/ubtConnectUtils/actions';
import { getClientVar } from './session';

/** What Feed_Embeded needs from the platform: its flags, the B2C tenant and the feed configuration of the nested
    Embedded_FeedCMS, and the handlers that open a file or a page. */
export interface EmbeddedFeedFlow {
  /** GetHasFeedEnabled (flag C2EnableFeed). */
  isFeedEnabled: boolean;
  /** GetHasExtendedShare (flag C2ExtendedShare). */
  hasExtendedShare: boolean;
  /** The client variable UBTConnect.Embedd_B2CTenant. */
  b2CTenant: string;
  /** The answer of DataActionGetFeedConfig; undefined while it loads or after it failed. */
  feedConfig: FeedConfig | undefined;
  /** Handle_Download. */
  onDownloaded: (url: string, filename: string) => void;
  /** The steps of Handle_Share_Connect after the popup closed. */
  onShareToConnect: (shareId: string, feedItemTitle: string) => void;
}

/** The flows of Feed_Embeded that use the platform (HomeFeed, FeedItemDetail). The flags and the client variable are
    read on render, as the block read them.
    - Embedded_FeedCMS gets B2CTenant = UBTConnect.Embedd_B2CTenant. Its DataActionGetFeedConfig (inputs FeedItemId and
      B2CTenant) runs only when GetHasFeedEnabled: the block does not render Embedded_FeedCMS otherwise.
    - Handle_Download (Embedded_FeedCMS OnDownloaded): OpenInApp_TryOpenFileInApp(Filename, URL,
      "connect-feed-documents", "pdf"); its outputs are not used.
    - Handle_Share_Connect, after the block closed the share popup: yield (YieldJS: one resolved promise), then
      LegacyShareObject(In_ShareObjectTypeId Feed, In_CustomTitle, In_ObjectId) with the default transition.
    The page calls this hook and gives the result to EmbeddedFeed with the inputs and the events of the block.
    @origin UBTConnect.Home.Feed_Embeded */
export function useEmbeddedFeed(feedItemId = ''): EmbeddedFeedFlow {
  const navigate = useOsNavigate();
  const isFeedEnabled = flagValue('C2EnableFeed');
  const b2CTenant = getClientVar('UBTConnect.Embedd_B2CTenant');
  const feedConfig = useFeedConfigQuery({ FeedItemId: feedItemId, B2CTenant: b2CTenant }, isFeedEnabled);
  return {
    isFeedEnabled,
    hasExtendedShare: flagValue('C2ExtendedShare'),
    b2CTenant,
    feedConfig: feedConfig.data,
    onDownloaded: (url, filename) => {
      openInApp_TryOpenFileInApp(filename, url, 'connect-feed-documents', 'pdf');
    },
    onShareToConnect: (shareId, feedItemTitle) => {
      void Promise.resolve().then(() => {
        navigate(`/${APP_ID}/LegacyShareObject`, {
          In_ShareObjectTypeId: Type_ShareObject.Feed,
          In_CustomTitle: feedItemTitle,
          In_ObjectId: shareId,
        });
      });
    },
  };
}
