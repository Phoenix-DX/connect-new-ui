// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DoubleAction
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

/* DoubleAction (DA = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DoubleAction.mvc.js, view
   :122-172). Its stylesheet Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DoubleAction.css comes with the route
   (StylesheetHost, routes.css.generated.ts). No capture: markup from the compiled view. */

export interface DoubleActionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ExtendedClass (default ""). */
  extendedClass?: string;
  /** Placeholder Placeholder_Left. */
  placeholderLeft?: ReactNode;
  /** Placeholder Placeholder_Right. */
  placeholderRight?: ReactNode;
}

/** Two actions on one row (DA :122-170): `orbit-double-action-cont` [+ " " + ExtendedClass] with the left and right
    placeholders (Style "content-placeholder"). */
export function DoubleAction({ id, extendedClass = '', placeholderLeft, placeholderRight }: DoubleActionProps) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.DoubleAction" id={id}>
      <div className={`orbit-double-action-cont${extendedClass !== '' ? ` ${extendedClass}` : ''}`} data-container="">
        <div className="content-placeholder">{placeholderLeft}</div>
        <div className="content-placeholder">{placeholderRight}</div>
      </div>
    </OSBlock>
  );
}
