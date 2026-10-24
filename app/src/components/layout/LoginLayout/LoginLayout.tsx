/** @origin UBTConnectLibrary.Layouts.Layout_LoginFlow */
// @os-block UBTConnectLibrary.Layouts.Layout_LoginFlow
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { SvgBackgroundLogin } from '@/components/ui/SvgBackgroundLogin';

export interface LoginLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_HasOverlay: the curved background (SVG_Background_LoginWrapper). */
  inHasOverlay?: boolean;
  inExtendedClass?: string;
  /** In_IsCommonBlock: used inside another block (the lock container): no LayoutRuntime_Top. */
  inIsCommonBlock?: boolean;
  /** Placeholder Placeholder_Header. */
  placeholderHeader?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
  /** Placeholder Placeholder_CommonUI_Inside_Layout. */
  placeholderCommonUIInsideLayout?: ReactNode;
  /** Event OnPathCalculated (of the background). */
  onOnPathCalculated?: () => void;
  /** Event OnReady(MainId): the id of the Main container, once rendered. */
  onOnReady?: (mainId: string) => void;
}

/** Layout of the sign-in and PIN screens and of the lock container
    (p:UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js view; OnReady2 :301-330 raises OnReady with the Main id).
    Main is `ubt-layout--login ` + In_ExtendedClass. */
export function LoginLayout({
  id,
  inHasOverlay = false,
  inExtendedClass = '',
  inIsCommonBlock = false,
  placeholderHeader,
  placeholderContent,
  placeholderCommonUIInsideLayout,
  onOnPathCalculated,
  onOnReady,
}: LoginLayoutProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const mainId = prefix === undefined ? undefined : `${prefix}-Main`;
  const ready = useRef(onOnReady);
  useLayoutEffect(() => {
    ready.current = onOnReady;
  });
  useEffect(() => {
    ready.current?.(mainId ?? '');
  }, [mainId]);
  return (
    <OSBlock name="Layouts.Layout_LoginFlow" id={id}>
      {!inIsCommonBlock && <LayoutRuntimeTop id={childId(1)} />}
      <div className={`ubt-layout--login ${inExtendedClass}`} data-container="" id={mainId}>
        {inHasOverlay && (
          <div className="ubt-layout--login__svg" data-container="">
            <SvgBackgroundLogin id={childId(2)} onOnPathCalculated={onOnPathCalculated} />
          </div>
        )}
        <div className="ubt-layout--login__header">{placeholderHeader}</div>
        <div className="ubt-layout--login__content">{placeholderContent}</div>
        <div>{placeholderCommonUIInsideLayout}</div>
      </div>
    </OSBlock>
  );
}
