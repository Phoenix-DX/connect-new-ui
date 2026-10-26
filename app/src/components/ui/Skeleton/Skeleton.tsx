/** @origin UBTConnectLibrary.ConnectPatterns.SkeletonSection */
// @os-block UBTConnectLibrary.ConnectPatterns.SkeletonSection
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getClasses_UBTSkeletonSection } from '@/lib/ubtConnectLibrary/actions';

export interface SkeletonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Shows the skeleton look (input In_IsLoading). */
  isLoading?: boolean;
  /** Classes before the skeleton class (input In_ExtendedClass). */
  extendedClass?: string;
  /** Keeps the section interactive while loading: no `inert` (input In_IsActiveWhileLoading). */
  isActiveWhileLoading?: boolean;
  /** The section content (placeholder Placeholder_LoadingSection). */
  children?: ReactNode;
}

/** A section that shows its content with the skeleton look while it loads. The base skeleton of `components/ui`.
    The other skeleton blocks of the app (CardTextSkeleton, OrbitSkeleton, AssembleSummarySkeleton and the result-item
    skeletons) have their own markup and stay separate components (`docs/refactor/duplicates.md`, group 3).
    Class: `extendedClass + " " + (isLoading ? "ubt-skeleton-section" : "")`, as compiled. OnReady and
    OnParametersChanged toggle the `inert` attribute: on while loading, unless active while loading. */
export function Skeleton({
  id,
  isLoading = false,
  extendedClass = '',
  isActiveWhileLoading = false,
  children,
}: SkeletonProps) {
  const inert = isLoading && !isActiveWhileLoading;
  return (
    <OSBlock name="ConnectPatterns.SkeletonSection" id={id}>
      <div className={`${extendedClass} ${isLoading ? getClasses_UBTSkeletonSection() : ''}`} inert={inert}>
        {children}
      </div>
    </OSBlock>
  );
}
