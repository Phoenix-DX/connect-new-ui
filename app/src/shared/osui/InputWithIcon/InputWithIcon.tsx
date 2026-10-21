// @os-block OutSystemsUI_2_23.Interaction.InputWithIcon
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface InputWithIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  alignIconRight?: boolean;
  extendedClass?: string;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Input. */
  input?: ReactNode;
}

export function InputWithIcon({ id, alignIconRight = false, extendedClass = '', icon, input }: InputWithIconProps) {
  return (
    <OSBlock name="Interaction.InputWithIcon" id={id}>
      <div
        className={`input-with-icon${!alignIconRight ? '' : ' input-with-icon-right'} ${extendedClass}`}
        data-container=""
      >
        <div className="input-with-icon-content-icon center placeholder-empty">{icon}</div>
        <div className="input-with-icon-input">{input}</div>
      </div>
    </OSBlock>
  );
}
