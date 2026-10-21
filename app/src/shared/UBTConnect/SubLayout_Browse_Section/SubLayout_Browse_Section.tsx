// @os-block UBTConnect.SubLayout.SubLayout_Browse_Section
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface SubLayout_Browse_SectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_TopSection. */
  placeholderTopSection?: ReactNode;
  /** Placeholder Placeholder_BottomSection. */
  placeholderBottomSection?: ReactNode;
}

/** Browse sub-layout (UBTConnect.SubLayout.SubLayout_Browse_Section.mvc.js view, BrowseDirectory copy):
    `directory-detail-screen` container with the top and bottom section placeholders. */
export function SubLayout_Browse_Section({
  id,
  placeholderTopSection,
  placeholderBottomSection,
}: SubLayout_Browse_SectionProps) {
  return (
    <OSBlock name="SubLayout.SubLayout_Browse_Section" id={id}>
      <div className="directory-detail-screen" data-container="">
        <div>{placeholderTopSection}</div>
        <div>{placeholderBottomSection}</div>
      </div>
    </OSBlock>
  );
}
