// @os-block OutSystemsUI_2_23.Navigation.BottomBarItem
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface BottomBarItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  extendedClass?: string;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Text. */
  text?: ReactNode;
}

/* Both placeholders are aligned Center in the model: OutSystems writes `text-align: center` on them (captured). */
export function BottomBarItem({ id, extendedClass = '', icon, text }: BottomBarItemProps) {
  return (
    <OSBlock name="Navigation.BottomBarItem" id={id}>
      <div className={`bottom-bar-item ${extendedClass}`} data-container="">
        <div className="placeholder-empty bottom-bar-item-icon" style={{ textAlign: 'center' }}>
          {icon}
        </div>
        <div className="placeholder-empty bottom-bar-item-text" style={{ textAlign: 'center' }}>
          {text}
        </div>
      </div>
    </OSBlock>
  );
}
