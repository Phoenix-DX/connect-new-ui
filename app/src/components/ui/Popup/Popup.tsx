/** @origin UBTConnectLibrary.ConnectPatterns.Popup */
// @os-block UBTConnectLibrary.ConnectPatterns.Popup
import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { formatClasses } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface PopupProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** isOpen: ShowPopup of the OutSystems Popup widget. */
  isOpen?: boolean;
  /** Title. */
  title?: string;
  /** ExtendedClasses: added to the popup class. */
  extendedClasses?: string;
  /** In_HasTopHeader: shows the TopHeader placeholder. */
  inHasTopHeader?: boolean;
  /** Event OnWidgetInitialize(WidgetId): the id of the popup widget, on ready. */
  onOnWidgetInitialize?: (widgetId: string) => void;
  /** Event OnClose: raised when the parameters change while isOpen is False. */
  onOnClose?: () => void;
  /** Placeholder TopHeader. */
  topHeader?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Footer. */
  footer?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-pop-up';

/** Dialog of the notes (UBTConnectLibrary.ConnectPatterns.Popup.mvc.js: view :185-330, controller :343-425). The
    OutSystems Popup widget renders in <body> with the popup markup captured on HouseholdDetails/default
    (dom:1392-1398, see ContactPopup): portal-class > div > popup-backdrop > popup-dialog > popup-content. */
export function Popup({
  id,
  isOpen = false,
  title = '',
  extendedClasses = '',
  inHasTopHeader = false,
  onOnWidgetInitialize,
  onOnClose,
  topHeader,
  content,
  footer,
}: PopupProps) {
  const widgetId = `${useId()}popup`;
  usePopupWidget(isOpen); // OSWidgets.Popup ShowPopup = isOpen
  const latest = useRef({ onOnWidgetInitialize, onOnClose });
  useEffect(() => {
    latest.current = { onOnWidgetInitialize, onOnClose };
  });

  // OnReady (:379-407): OnWidgetInitialize(popup id).
  useEffect(() => {
    latest.current.onOnWidgetInitialize?.(widgetId);
  }, [widgetId]);

  // OnParametersChanged (:343-377): not isOpen → OnClose.
  const parameters = JSON.stringify([isOpen, title, extendedClasses, inHasTopHeader]);
  const previousParameters = useRef(parameters);
  useEffect(() => {
    if (previousParameters.current === parameters) return;
    previousParameters.current = parameters;
    if (!isOpen) latest.current.onOnClose?.();
  }, [parameters, isOpen]);

  // popup.Style = FormatClasses(FormatClasses(MainContainerClass, ExtendedClasses), "popup-dialog"); the widget adds
  // its own "popup-dialog" in front.
  const popupClass =
    'popup-dialog ' + formatClasses(formatClasses(MAIN_CONTAINER_CLASS, extendedClasses), 'popup-dialog');
  return (
    <OSBlock name="ConnectPatterns.Popup" id={id}>
      {isOpen &&
        createPortal(
          <div className="portal-class" style={{ display: 'inline' }}>
            <div>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div aria-modal="true" className={popupClass} data-popup="" role="dialog">
                  <div className="popup-content">
                    {inHasTopHeader && (
                      <div className="text-align-center" data-container="">
                        {topHeader}
                      </div>
                    )}
                    <div className={`${MAIN_CONTAINER_CLASS}--title`} data-container="" style={{ textAlign: 'center' }}>
                      <CustomText
                        inText={title}
                        inTextOptions={{
                          Color: UBT_Color.Neutral10,
                          FontSize: UBT_FontSize.Base,
                          FontWeight: UBT_FontWeight.SemiBold,
                        }}
                      />
                    </div>
                    <CustomContainer
                      options={{ MarginSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Medium } }}
                    >
                      <div className={`${MAIN_CONTAINER_CLASS}--content`}>{content}</div>
                    </CustomContainer>
                    <div className={`${MAIN_CONTAINER_CLASS}--footer`}>{footer}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </OSBlock>
  );
}
