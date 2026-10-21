// @os-block Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { NC_Result_Item__Card } from '../../Connect2_LegacyShared/NC_Result_Item__Card';

export interface AssembleSummaryDetailHeader_SkeletonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_Image (card visual). */
  placeholderImage?: ReactNode;
  /** Placeholder Placeholder_SubtitleTop (Placeholder_1). */
  placeholderSubtitleTop?: ReactNode;
  /** Placeholder Placeholder_Title (Placeholder_2). */
  placeholderTitle?: ReactNode;
  /** Placeholder Placeholder_Subtitle_Bottom (Placeholder_3). */
  placeholderSubtitleBottom?: ReactNode;
  /** Placeholder Placeholder_Right. */
  placeholderRight?: ReactNode;
  /** Placeholder Placeholder_Location. */
  placeholderLocation?: ReactNode;
}

/** Loading card (p:migration/blocks/sources/Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc.js;
    view :112-214): NC_Result_Item__Card (no inputs, no event) whose placeholders each hold one of this block's
    placeholders (Placeholder widget = a plain div): Card_Visual ← Image, 1 ← SubtitleTop, 2 ← Title,
    3 ← Subtitle_Bottom, 4-6 empty, Right ← Right, Location ← Location. No actions. */
export function AssembleSummaryDetailHeader_Skeleton({
  id,
  placeholderImage,
  placeholderSubtitleTop,
  placeholderTitle,
  placeholderSubtitleBottom,
  placeholderRight,
  placeholderLocation,
}: AssembleSummaryDetailHeader_SkeletonProps) {
  return (
    <OSBlock name="AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton" id={id}>
      <NC_Result_Item__Card
        cardVisual={<div>{placeholderImage}</div>}
        placeholder1={<div>{placeholderSubtitleTop}</div>}
        placeholder2={<div>{placeholderTitle}</div>}
        placeholder3={<div>{placeholderSubtitleBottom}</div>}
        placeholderRight={<div>{placeholderRight}</div>}
        placeholderLocation={<div>{placeholderLocation}</div>}
      />
    </OSBlock>
  );
}
