import type { UI_ShareableObject_Generic } from '@/components/share/ShareableObject';
import { useViewState } from '@/platform/navigation';
import { Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';

/** The screen variables of FeedItemDetail that the ShareSheet reads, and the two handlers of the screen. */
export interface FeedItemDetailShare {
  /** [IsShareOpen] In_IsOpen of the ShareSheet. */
  isShareOpen: boolean;
  /** [ShareableObjectId] In_ShareableObjectId of the ShareSheet. */
  shareableObjectId: string;
  /** [ShareObjectTypeId] In_ShareObjectTypeId of the ShareSheet. */
  shareObjectTypeId: string;
  /** [ShareableFeedItem] In_ShareableObject of ShareableObject_Generic, in the ShareSheet. */
  shareableFeedItem: UI_ShareableObject_Generic;
  /** Handler_ShareFeed, on the Event_Share of Feed_Embeded. */
  onShareFeed: (shareId: string, title: string, subtitle: string, imageUrl: string) => void;
  /** Handler_CloseShareSheet, on the Event_ClosedShareSheet of the ShareSheet. */
  onCloseShareSheet: () => void;
}

/** The variables and the handlers of the feed item screen. The screen has no lifecycle event and no call of its own.
    - The four variables are kept by the view cache with their original names (P-BACK).
    - Handler_ShareFeed: ShareObjectTypeId = Feed, ShareableObjectId = the share id, IsShareOpen = True, then four
      fields of ShareableFeedItem (ConnectEntityTypeId FeedItem, SignedURL, Title, Subtitle). The other fields of
      ShareableFeedItem keep their values.
    - Handler_CloseShareSheet: IsShareOpen = False. The other variables keep their values.
    The page calls this hook.
    @origin UBTConnect.Home.FeedItemDetail */
export function useFeedItemDetail(): FeedItemDetailShare {
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId, setShareableObjectId] = useViewState('ShareableObjectId', '');
  const [shareObjectTypeId, setShareObjectTypeId] = useViewState('ShareObjectTypeId', '');
  const [shareableFeedItem, setShareableFeedItem] = useViewState<UI_ShareableObject_Generic>('ShareableFeedItem', {});

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

  const onCloseShareSheet = () => {
    setIsShareOpen(false);
  };

  return {
    isShareOpen,
    shareableObjectId,
    shareObjectTypeId,
    shareableFeedItem,
    onShareFeed,
    onCloseShareSheet,
  };
}
