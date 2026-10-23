/** @origin UBTConnect.App_Common.BottomBarContent */
// @os-block UBTConnect.App_Common.BottomBarContent
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface BottomBarContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_BottomBarItems. */
  children?: ReactNode;
}

export function BottomBarContent({ id, children }: BottomBarContentProps) {
  return (
    <OSBlock name="App_Common.BottomBarContent" id={id}>
      <div className="bottom-bar-wrapper" data-container="">
        <div className="bottom-bar ph">{children}</div>
      </div>
    </OSBlock>
  );
}
