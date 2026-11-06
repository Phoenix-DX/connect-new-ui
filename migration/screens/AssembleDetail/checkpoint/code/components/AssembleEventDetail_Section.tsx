import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CardTextSkeleton } from '@/components/ui/CardTextSkeleton';

export interface AssembleEventDetail_SectionProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** IsLoading: the header shows a text skeleton and Placeholder_Content__Loading replaces Placeholder_Content. */
  isLoading: boolean;
  /** IsVisible. */
  isVisible: boolean;
  header?: ReactNode;
  contentLoading?: ReactNode;
  content?: ReactNode;
}

/** AssembleDetailSection (visible when IsVisible) > Section_Header (`section-header margin-top-base`: a
    ThemeGrid_Width7 text skeleton while IsLoading, else Placeholder_Header), then Placeholder_Content__Loading or
    Placeholder_Content.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section */
export function AssembleEventDetail_Section({
  id,
  isLoading,
  isVisible,
  header,
  contentLoading,
  content,
}: AssembleEventDetail_SectionProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="Assemble.AssembleEventDetail_Section" id={id}>
      {isVisible && (
        <div data-container="" id={`${scope}-AssembleDetailSection`}>
          <div className="section-header margin-top-base" data-container="" id={`${scope}-Section_Header`}>
            {isLoading ? (
              <div className="ThemeGrid_Width7" data-container="">
                <CardTextSkeleton id={`${scope}-$b1`} />
              </div>
            ) : (
              <div id={`${scope}-Placeholder_Header`}>{header}</div>
            )}
          </div>
          {isLoading ? (
            <div id={`${scope}-Placeholder_Content__Loading`}>{contentLoading}</div>
          ) : (
            <div id={`${scope}-Placeholder_Content`}>{content}</div>
          )}
        </div>
      )}
    </OSBlock>
  );
}
