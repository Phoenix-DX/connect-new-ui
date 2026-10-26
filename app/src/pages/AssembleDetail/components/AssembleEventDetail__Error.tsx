import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface AssembleEventDetail__ErrorProps {
  /** OutSystems instance id of the block. */
  id: string;
  title: string;
  subtitle: string;
  /** The Icon placeholder. */
  icon?: ReactNode;
}

/** DIV_CustomErrorScreen (`nc-error-screen-info text-align-center assemble-details-error`) > the Icon placeholder
    (`assemble-details-error__icon`, OSInline), the Title (`heading3`) and the Subtitle (`font-size-s`,
    `padding-x-base`).
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error */
export function AssembleEventDetail__Error({ id, title, subtitle, icon }: AssembleEventDetail__ErrorProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="Assemble.AssembleEventDetail__Error" id={id}>
      <div
        className="nc-error-screen-info text-align-center assemble-details-error"
        data-container=""
        id={`${scope}-DIV_CustomErrorScreen`}
      >
        <div className="text-align-center" data-container="">
          <div className="assemble-details-error__icon OSInline" id={`${scope}-Icon`}>
            {icon}
          </div>
        </div>
        <div className="assemble-details-error__title" data-container="">
          <span className="heading3" data-expression="">
            {title}
          </span>
        </div>
        <div className="assemble-details-error__subtitle padding-x-base" data-container="">
          <span className="font-size-s" data-expression="">
            {subtitle}
          </span>
        </div>
      </div>
    </OSBlock>
  );
}
