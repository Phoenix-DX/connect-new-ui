import { useSearchParams } from 'react-router';
import { EmbeddedFeed } from '@/components/feed/EmbeddedFeed';
import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { useNavigateBack } from '@/platform/navigation';
import { useEmbeddedFeed } from '@/platform/session/useEmbeddedFeed';
import { useFeedItemDetail } from './hooks/useFeedItemDetail';
import { readFeedItemDetailInputs } from './inputs';

/** In_UpdateDate of the ShareSheet: NullDate() in the view. */
const NULL_DATE = '1900-01-01';

/** @origin UBTConnect.Home.FeedItemDetail
    The feed item route: the detail layout (default inputs) titled "Feed Item", with Feed_Embeded (the FeedItemId
    input) as content and CommonUI_InsideLayout, then the ShareSheet with ShareableObject_Generic. The screen has no
    lifecycle event and no call of its own. The flows of Feed_Embeded are in useEmbeddedFeed, the screen variables and
    handlers in useFeedItemDetail. */
export default function FeedItemDetail() {
  const [params] = useSearchParams();
  const { FeedItemId } = readFeedItemDetailInputs(params);
  const navigateBack = useNavigateBack();
  const embeddedFeed = useEmbeddedFeed(FeedItemId);
  const share = useFeedItemDetail();

  return (
    <>
      <DetailLayout
        id="$b1"
        onBack={navigateBack}
        headerTitle="Feed Item"
        content={<EmbeddedFeed id="$b2" feedItemId={FeedItemId} {...embeddedFeed} onEventShare={share.onShareFeed} />}
        commonUI={<CommonUiLayout id="$b3" />}
      />
      <ShareSheetContainer
        id="$b4"
        inShareableObjectId={share.shareableObjectId}
        inUpdateType=""
        inShareObjectTypeId={share.shareObjectTypeId}
        inUpdateDate={NULL_DATE}
        inIsOpen={share.isShareOpen}
        onEventClosedShareSheet={share.onCloseShareSheet}
      >
        <ShareableObject id="$b5" inShareableObject={share.shareableFeedItem} />
      </ShareSheetContainer>
    </>
  );
}
