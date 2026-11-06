import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ItemOptionsMenu } from '@/components/bookmark/ItemOptionsMenu';

export interface ContextMenuProps {
  /** OutSystems instance id of the block. */
  id: string;
  isBookmarked?: boolean;
  isRecordAvailable?: boolean;
  showGift?: boolean;
  anchorPlaceHolder?: ReactNode;
  /** BookmarkButtonClicked(IsItemBookmarked). */
  onBookmarkButtonClicked?: (isItemBookmarked: boolean) => void;
  /** ShareProfileToConnect. */
  onShareProfileToConnect?: () => void;
}

/** ItemOptionsMenu (IsShareImplemented True) with the block's inputs and the AnchorPlaceHolder placeholder.
    BookmarkToggle → BookmarkButtonClicked, OnShareToConnect → ShareProfileToConnect. OnShareToOthers
    (ShareProfileToOthers) and OnSendGift are not raised: the shared ItemOptionsMenu has no such props.
    @origin Connect2_LegacyShared.Share.ContextMenu */
export function ContextMenu({
  id,
  isBookmarked = false,
  isRecordAvailable = true,
  showGift = false,
  anchorPlaceHolder,
  onBookmarkButtonClicked,
  onShareProfileToConnect,
}: ContextMenuProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="Share.ContextMenu" id={id}>
      <ItemOptionsMenu
        id={`${scope}-$b1`}
        isShareImplemented
        inIsBookmarked={isBookmarked}
        showGift={showGift}
        inIsRecordAvailable={isRecordAvailable}
        onBookmarkToggle={onBookmarkButtonClicked}
        onShareToConnect={onShareProfileToConnect}
        anchorPlaceholder={<div id={`${scope}-AnchorPlaceHolder`}>{anchorPlaceHolder}</div>}
      />
    </OSBlock>
  );
}
