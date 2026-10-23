// @os-block UBTConnectLibrary.ConnectPatterns.StopPropagationHelper
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { STOP_PROPAGATION_HELPER_CLASS } from './actions';

export interface StopPropagationHelperProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** ConnectPatterns.StopPropagationHelper (p:migration/screens/Locality_Details/analysis/sources/pretty/
    UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc.js view :120-160): the Content placeholder with the
    class of StopPropagationHelper_GetClass ("helper-stop-propagation"); a parent click handler asks
    StopPropagationHelper_Check whether the click started inside it. */
export function StopPropagationHelper({ id, children }: StopPropagationHelperProps) {
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="ConnectPatterns.StopPropagationHelper" id={id}>
      <div className={STOP_PROPAGATION_HELPER_CLASS} id={`${b}-Content`}>
        {children}
      </div>
    </OSBlock>
  );
}
