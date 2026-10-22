// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner
import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';

/* LoadingSpinner (LS = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc.js: model
   :1-60, view :122-204, controller :205-280). No capture: markup from the compiled view and the platform Popup widget
   (portal in <body>: div > div > popup-backdrop > popup-dialog > popup-content, as the shared Popup port). */

export interface LoadingSpinnerProps {
  /** OutSystems instance id of the block. */
  id: string;
  IsProcessingData: boolean;
}

/** Container Root_LoadingSpinner > Popup Popup_LoadingSpinner (ShowPopup = IsProcessingData, Style "popup-dialog")
    > Container "orbit-spinner-cont" (visible IsProcessingData) > spinner Icon (2x) and the bold "Loading" text (LS
    :135-198). Root componentDidUpdate → CopyClassesAcrossPortal(Root_LoadingSpinner, Popup_LoadingSpinner) (LS
    :223-246; Connect2_LegacyShared.controller.js:1534-1553): the portal root gets the Root's classes, its parent
    "portal-class" + the classes of the Root's grandparent, and loses its inline style. */
export function LoadingSpinner({ id, IsProcessingData }: LoadingSpinnerProps) {
  const prefix = id.replace('$', '');
  usePopupWidget(IsProcessingData); // OSWidgets.Popup ShowPopup = IsProcessingData (LS :160-161)
  const rootRef = useRef<HTMLDivElement>(null);
  const portalParentRef = useRef<HTMLDivElement>(null);
  const portalRootRef = useRef<HTMLDivElement>(null);

  /* Root componentDidUpdate: on every update after the mount (not on the mount itself). */
  const mounted = useRef(false);
  useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const root = rootRef.current;
    const portalParent = portalParentRef.current;
    const portalRoot = portalRootRef.current;
    if (!root || !portalParent || !portalRoot) return;
    const rootParent = root.parentElement?.parentElement;
    portalRoot.className = root.className;
    portalParent.className = 'portal-class' + (rootParent?.className ? ` ${rootParent.className}` : '');
    portalParent.removeAttribute('style');
  });

  return (
    <OSBlock name="Orbit_Generic_Blocks.LoadingSpinner" id={id}>
      <div data-container="" id={`${prefix}-Root_LoadingSpinner`} ref={rootRef}>
        {IsProcessingData &&
          createPortal(
            <div className="portal-class" ref={portalParentRef} style={{ display: 'inline' }}>
              <div ref={portalRootRef}>
                <div className="popup-backdrop" data-popup-backdrop="">
                  <div
                    aria-modal="true"
                    className="popup-dialog popup-dialog"
                    data-popup=""
                    id={`${prefix}-Popup_LoadingSpinner`}
                    role="dialog"
                  >
                    <div className="popup-content">
                      <div className="orbit-spinner-cont" data-container="">
                        <i className="icon orbit-spinner-icon fa fa-spinner fa-2x" data-icon="" />
                        <span className="bold margin-top-base">Loading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </OSBlock>
  );
}
