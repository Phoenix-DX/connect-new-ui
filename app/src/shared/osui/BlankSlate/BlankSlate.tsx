// @os-block OutSystemsUI_2_23.Content.BlankSlate
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface BlankSlateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** FullHeight: adds `large` (default true). */
  fullHeight?: boolean;
  extendedClass?: string;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Actions. */
  actions?: ReactNode;
}

/** OutSystems UI BlankSlate (OutSystemsUI_2_23.Content.BlankSlate.mvc.js view, CommunityBusinessDetails_CoomingSoon
    copy): region `"blank-slate" + If(FullHeight, " large", "") + " " + ExtendedClass` with the icon, description
    (`role="status"`) and actions placeholders. */
export function BlankSlate({ id, fullHeight = true, extendedClass = '', icon, content, actions }: BlankSlateProps) {
  return (
    <OSBlock name="Content.BlankSlate" id={id}>
      <div className={`blank-slate${fullHeight ? ' large' : ''} ${extendedClass}`} data-container="" role="region">
        <div data-container="">
          <div className="placeholder-empty blank-slate-icon">{icon}</div>
          <div className="placeholder-empty blank-slate-description" role="status">
            {content}
          </div>
          <div className="placeholder-empty blank-slate-actions">{actions}</div>
        </div>
      </div>
    </OSBlock>
  );
}
