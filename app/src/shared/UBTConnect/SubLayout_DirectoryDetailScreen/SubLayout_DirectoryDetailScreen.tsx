// @os-block UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface SubLayout_DirectoryDetailScreenProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HideActions: the call-to-action placeholder gets `display-none`. */
  hideActions?: boolean;
  /** Placeholder Placeholder_DetailCard. */
  placeholderDetailCard?: ReactNode;
  /** Placeholder Placeholder_CallToAction. */
  placeholderCallToAction?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
}

/** Directory detail screen sub-layout (UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js view, HouseholdCarousel
    copy): `directory-detail-screen` container with the detail card, call-to-action (style `display-none` when
    HideActions, else "") and content placeholders. */
export function SubLayout_DirectoryDetailScreen({
  id,
  hideActions = false,
  placeholderDetailCard,
  placeholderCallToAction,
  placeholderContent,
}: SubLayout_DirectoryDetailScreenProps) {
  return (
    <OSBlock name="SubLayout.SubLayout_DirectoryDetailScreen" id={id}>
      <div className="directory-detail-screen" data-container="">
        <div>{placeholderDetailCard}</div>
        <div className={hideActions ? 'display-none' : ''}>{placeholderCallToAction}</div>
        <div>{placeholderContent}</div>
      </div>
    </OSBlock>
  );
}
