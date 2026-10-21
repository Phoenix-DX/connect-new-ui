// @os-block Connect2_LegacyShared.Utility.ItemOptionsMenu
import { useState, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { useFlagOn } from '../../../lib/flags';
import { PopupMenu } from '../PopupMenu';

export interface ItemOptionsMenuProps {
  /** OutSystems instance id of the block (`b1-l1-57_0-$b5`). */
  id: string;
  inIsBookmarked?: boolean;
  isShareImplemented?: boolean;
  inIsRecordAvailable?: boolean;
  showGift?: boolean;
  /** Event BookmarkToggle(IsItemBookmarked). */
  onBookmarkToggle?: (isItemBookmarked: boolean) => void;
  onShareToConnect?: () => void;
  onSendGift?: () => void;
  /** Placeholder Anchor_Placeholder. */
  anchorPlaceholder?: ReactNode;
}

/** Connect2_LegacyShared Utility.ItemOptionsMenu (migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Utility.ItemOptionsMenu
    .mvc.js: model :1-122, view :179-490, controller :493-655). When In_IsRecordAvailable, a Widgets.PopupMenu
    (ExtendedClass "backwards-compatibility") with Anchor_Placeholder as anchor and, as menu: the bookmark item
    ("Unmark" when IsBookmarked, else "Bookmark"); when IsShareImplemented, "Share" (GetHasExtendedShare, TST on) or
    "Share to Connect" plus "Share to others..." (IsShareToOThersAvailable); "Send a gift" when ShowGift and
    GetHasWalletAccess. OnReady: IsShareToOThersAvailable = CheckSocialSharingPlugin.IsAvailable (the plugin does not
    exist on the web: False), IsBookmarked = In_IsBookmarked; OnParametersChanged: IsBookmarked = In_IsBookmarked. */
export function ItemOptionsMenu({
  id,
  inIsBookmarked = false,
  isShareImplemented = false,
  inIsRecordAvailable = true,
  showGift = false,
  onBookmarkToggle,
  onShareToConnect,
  onSendGift,
  anchorPlaceholder,
}: ItemOptionsMenuProps) {
  const scope = id.replace('$', '');
  const hasExtendedShare = useFlagOn('C2ExtendedShare');
  const hasWalletAccess = useFlagOn('WalletAccess');
  // OnReady / OnParametersChanged: IsBookmarked = In_IsBookmarked.
  const [isBookmarked, setIsBookmarked] = useState(inIsBookmarked);
  const [lastInput, setLastInput] = useState(inIsBookmarked);
  if (lastInput !== inIsBookmarked) {
    setLastInput(inIsBookmarked);
    setIsBookmarked(inIsBookmarked);
  }

  const shareItem = (label: string, onClick?: () => void) => (
    <div className="context-menu-item" data-container="" onClick={onClick}>
      <i className="icon icon-ch-Share fa fa-share fa-1x" data-icon="" />
      <span className="margin-left-base">{label}</span>
    </div>
  );

  const popupMenu = (
    <>
      <div className="context-menu-item" data-container="" onClick={() => onBookmarkToggle?.(inIsBookmarked)}>
        <i className="icon bookmark-icon-style fa fa-bookmark fa-1x" data-icon="" />
        <span className="margin-left-base">{isBookmarked ? 'Unmark' : 'Bookmark'}</span>
      </div>
      {isShareImplemented &&
        (hasExtendedShare
          ? shareItem('Share', onShareToConnect)
          : // "Share to others..." (OnShareToOthers) needs IsShareToOThersAvailable = CheckSocialSharingPlugin.IsAvailable:
            // the Cordova plugin does not exist on the web, so it is never shown.
            shareItem('Share to Connect', onShareToConnect))}
      {showGift && hasWalletAccess && (
        <div className="context-menu-item" data-container="" onClick={onSendGift}>
          <i className="icon wallet-icon-heart-full-canvas fa fa-share fa-1x" data-icon="" />
          <span className="margin-left-base">Send a gift</span>
        </div>
      )}
    </>
  );

  return (
    <OSBlock name="Utility.ItemOptionsMenu" id={id}>
      {inIsRecordAvailable && (
        <PopupMenu
          id={`${scope}-$b1`}
          extendedClass="backwards-compatibility"
          anchor={<div id={`${scope}-Anchor_Placeholder`}>{anchorPlaceholder}</div>}
          popupMenu={popupMenu}
        />
      )}
    </OSBlock>
  );
}
