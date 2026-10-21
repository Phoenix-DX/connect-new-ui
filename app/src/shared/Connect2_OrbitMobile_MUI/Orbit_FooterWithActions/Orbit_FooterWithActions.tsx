// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { styleFromCssText } from '../../lib/cssText';

export interface Orbit_FooterWithActionsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_HasSecondaryButton: shows the left (secondary) button (default false). */
  inHasSecondaryButton?: boolean;
  /** In_HasTopShadow: shadow above the footer (default true). */
  inHasTopShadow?: boolean;
  /** In_IsSmallButtons (default false). */
  inIsSmallButtons?: boolean;
  /** In_ExtendedStyle: inline style text appended to the footer's style (default ""). */
  inExtendedStyle?: string;
  /** In_ExtendedClass (default ""). */
  inExtendedClass?: string;
  /** In_ExtendedClass_Primary (default ""). */
  inExtendedClassPrimary?: string;
  /** In_ExtendedClass_Secondary (default ""). */
  inExtendedClassSecondary?: string;
  /** Placeholder Placeholder_Secondary (left button content). */
  placeholderSecondary?: ReactNode;
  /** Placeholder Placeholder_Primary (right button content). */
  placeholderPrimary?: ReactNode;
  /** Event Click_SecondaryButton. */
  onClickSecondaryButton?: () => void;
  /** Event Click_PrimaryButton. */
  onClickPrimaryButton?: () => void;
}

/** Orbit footer with one or two action buttons (Orbit_FooterWithActions.mvc.js view :206-326). Footer class
    `orbit-footer-with-buttons <In_ExtendedClass>`, style = (top shadow) + (`justify-content: flex-end; ` without a
    secondary button) + " " + In_ExtendedStyle (:222-235). Buttons `orbit-footer-with-buttons-btn
    orbit-footer-with-buttons-btn-left|right ` + (`orbit-footer-with-buttons-btn-small ` when small) + their
    extended class (:252-260, :294-302); a click raises Click_SecondaryButton / Click_PrimaryButton. The secondary
    button renders only with In_HasSecondaryButton. Never captured (built from the compiled view). */
export function Orbit_FooterWithActions({
  id,
  inHasSecondaryButton = false,
  inHasTopShadow = true,
  inIsSmallButtons = false,
  inExtendedStyle = '',
  inExtendedClass = '',
  inExtendedClassPrimary = '',
  inExtendedClassSecondary = '',
  placeholderSecondary,
  placeholderPrimary,
  onClickSecondaryButton,
  onClickPrimaryButton,
}: Orbit_FooterWithActionsProps) {
  const style =
    (inHasTopShadow ? 'box-shadow: 0px -2px 6px 0px rgba(0,0,0,10%); ' : '') +
    (!inHasSecondaryButton ? 'justify-content: flex-end; ' : '') +
    ' ' +
    inExtendedStyle;
  const small = inIsSmallButtons ? 'orbit-footer-with-buttons-btn-small ' : '';
  return (
    <OSBlock name="Orbit_Generic_Blocks.Orbit_FooterWithActions" id={id}>
      <div className={`orbit-footer-with-buttons ${inExtendedClass}`} data-container="" style={styleFromCssText(style)}>
        {inHasSecondaryButton && (
          <div
            className={`orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-left ${small}${inExtendedClassSecondary}`}
            data-container=""
            style={{ cursor: 'pointer' }}
            onClick={onClickSecondaryButton}
          >
            <div>{placeholderSecondary}</div>
          </div>
        )}
        <div
          className={`orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-right ${small}${inExtendedClassPrimary}`}
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickPrimaryButton}
        >
          <div>{placeholderPrimary}</div>
        </div>
      </div>
    </OSBlock>
  );
}
