/** @origin UBTConnect.Home.FeedItemDetail */
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { EmbeddedFeed } from '@/components/feed/EmbeddedFeed';
import { Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { UI_ShareableObject_Generic } from '@/shared/UBTConnect_Utils/lib/structures';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { useViewState } from '@/platform/navigation';
import { NULL_DATE, readFeedItemDetailInputs } from './api';

/** UBTConnect.Home.FeedItemDetail (FeedItemDetail.mvc.js: model :1-164, view :165-478, controller :479-797):
    Layout_DetailPage "Feed Item" with Feed_Embeded (FeedItemId) and CommonUI_InsideLayout, then the ShareSheet with
    ShareableObject_Generic. No screen lifecycle events and no call of its own (:512-516, :774-778). */
export default function FeedItemDetail() {
  const [params] = useSearchParams();
  const { FeedItemId } = readFeedItemDetailInputs(params);
  // Screen variables (:25-82), kept by the view cache (P-BACK).
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId, setShareableObjectId] = useViewState('ShareableObjectId', '');
  const [shareObjectTypeId, setShareObjectTypeId] = useViewState('ShareObjectTypeId', '');
  const [shareableFeedItem, setShareableFeedItem] = useViewState<UI_ShareableObject_Generic>('ShareableFeedItem', {});

  // Handler_ShareFeed (:563-674): field-by-field assignments, the other fields of ShareableFeedItem are kept.
  const onShareFeed = (shareId: string, title: string, subtitle: string, imageUrl: string) => {
    setShareObjectTypeId(Type_ShareObject.Feed);
    setShareableObjectId(shareId);
    setIsShareOpen(true);
    setShareableFeedItem((f) => ({
      ...f,
      ConnectEntityTypeId: Connect_Entity.FeedItem,
      SignedURL: imageUrl,
      Title: title,
      Subtitle: subtitle,
    }));
  };

  return (
    <>
      <Layout_DetailPage
        id="$b1"
        placeholderHeaderTitle="Feed Item"
        content={<EmbeddedFeed id="$b2" feedItemId={FeedItemId} onEventShare={onShareFeed} />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b3" />}
      />
      <ShareSheetContainer
        id="$b4"
        inShareableObjectId={shareableObjectId}
        inUpdateType=""
        inShareObjectTypeId={shareObjectTypeId}
        inUpdateDate={NULL_DATE}
        inIsOpen={isShareOpen}
        onEventClosedShareSheet={() => {
          setIsShareOpen(false);
        }} // Handler_CloseShareSheet (:518-562)
      >
        <ShareableObject id="$b5" inShareableObject={shareableFeedItem} />
      </ShareSheetContainer>
    </>
  );
}
