// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { ConnectBlankSlate } from '../../Connect2_LegacyShared/ConnectBlankSlate';

export interface NoBookmarksProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsToDisplay: shows the blank slate. */
  isToDisplay?: boolean;
  /** Placeholder TitlePlaceholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder TextPlaceholder. */
  textPlaceholder?: ReactNode;
}

/** Empty state of the bookmark lists (p:migration/blocks/sources/Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks
    .mvc.js, view :127-200): when IsToDisplay, ConnectBlankSlate with the static `bookmark_unavailable_icon.svg`
    (OSFillParent) and the caller's TitlePlaceholder / TextPlaceholder. No action. */
export function NoBookmarks({
  id,
  isToDisplay = false, // :12-14
  titlePlaceholder,
  textPlaceholder,
}: NoBookmarksProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="MyBookmarksFlow.NoBookmarks" id={id}>
      {isToDisplay && ( // :140
        <ConnectBlankSlate
          id={prefix === undefined ? undefined : `${prefix}-$b1`}
          image={
            <img
              className="OSFillParent"
              data-image=""
              src={osImage('img/Connect2_LegacyShared.bookmark_unavailable_icon.svg')} // :158-166
            />
          }
          title={<div>{titlePlaceholder}</div>}
          subtitle={<div>{textPlaceholder}</div>}
        />
      )}
    </OSBlock>
  );
}
