/** @origin UBTConnect.SubLayout.SubLayout_Browse_Section */
// @os-block UBTConnect.SubLayout.SubLayout_Browse_Section
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface BrowseSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_TopSection. */
  placeholderTopSection?: ReactNode;
  /** Placeholder Placeholder_BottomSection. */
  placeholderBottomSection?: ReactNode;
}

/** Browse sub-layout (UBTConnect.SubLayout.SubLayout_Browse_Section.mvc.js view, BrowseDirectory copy):
    `directory-detail-screen` container with the top and bottom section placeholders. */
export function BrowseSection({ id, placeholderTopSection, placeholderBottomSection }: BrowseSectionProps) {
  return (
    <OSBlock name="SubLayout.SubLayout_Browse_Section" id={id}>
      <div className="directory-detail-screen" data-container="">
        <div>{placeholderTopSection}</div>
        <div>{placeholderBottomSection}</div>
      </div>
    </OSBlock>
  );
}
