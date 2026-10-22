// @os-block UBTConnectLibrary.ConnectPatterns.SkeletonSection
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getClasses_UBTSkeletonSection } from '../lib/actions';

export interface SkeletonSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inIsLoading?: boolean;
  inExtendedClass?: string;
  /** When true the section stays interactive while loading (no `inert`). */
  inIsActiveWhileLoading?: boolean;
  /** Placeholder Placeholder_LoadingSection. */
  children?: ReactNode;
}

export function SkeletonSection({
  id,
  inIsLoading = false,
  inExtendedClass = '',
  inIsActiveWhileLoading = false,
  children,
}: SkeletonSectionProps) {
  /* OnReady / OnParametersChanged toggle the `inert` attribute: on while loading unless active while loading
     (SkeletonSection.mvc.js, ScreenEvent_OnParametersChanged). */
  const inert = inIsLoading && !inIsActiveWhileLoading;
  return (
    <OSBlock name="ConnectPatterns.SkeletonSection" id={id}>
      <div className={`${inExtendedClass} ${inIsLoading ? getClasses_UBTSkeletonSection() : ''}`} inert={inert}>
        {children}
      </div>
    </OSBlock>
  );
}
