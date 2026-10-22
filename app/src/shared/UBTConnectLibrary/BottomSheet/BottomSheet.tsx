// @os-block UBTConnectLibrary.ConnectPatterns.BottomSheet
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/shared/lib/OSLink';
import { BottomSheet as OSUIBottomSheet } from '@/shared/osui/BottomSheet';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { jSUtils_SetStyleProperty } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { formatClasses, getClass_BackgroundColor, getSpacingOptions } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  Shape,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_IconSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SpacingOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  addTransitionListener,
  bindDragToOpen,
  closeOnClick as closeOnOverlayClick,
  delaySetHideWhenClosed,
  removeInert,
} from './jsNodes';

export interface BottomSheetProps {
  /** OutSystems instance id of the block. */
  id?: string;
  title?: string;
  showHandlerPreview?: boolean;
  /** HandlerPreviewOffset: `--ubt-bottomsheet-handler-preview--offset` on the sheet block. */
  handlerPreviewOffset?: string;
  showHeader?: boolean;
  /** Content_BackgroundColorId: UBT_Color identifier. */
  contentBackgroundColorId?: string;
  /** Content_Padding. */
  contentPadding?: SpacingOptions;
  /** FooterHeight: `--bottom-sheet--footer-height` on the sheet block. */
  footerHeight?: string;
  extendedClasses?: string;
  isTransparentOverlay?: boolean;
  /** CloseOnClickOutsite: a click on the overlay closes the sheet. */
  closeOnClickOutsite?: boolean;
  showBackButton?: boolean;
  isNotInertWhenClosed?: boolean;
  isHideContentWhenClosed?: boolean;
  /** Event OnToggle(IsOpen). */
  onOnToggle?: (isOpen: boolean) => void;
  /** Event Initialized(BottomSheetId): the id BottomSheetOpen / BottomSheetClose take. */
  onInitialized?: (bottomSheetId: string) => void;
  /** Event OnClose (the top-bar close link). */
  onOnClose?: () => void;
  /** Event OnBack (the top-bar back link). */
  onOnBack?: () => void;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Footer. */
  footer?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-bottom-sheet';

/** UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js (CountryDetails copy): view :311-650, controller :655-1083. */
export function BottomSheet({
  id,
  title = '',
  showHandlerPreview = false,
  handlerPreviewOffset = '',
  showHeader = true,
  contentBackgroundColorId = '',
  contentPadding = {},
  footerHeight = '0px',
  extendedClasses = '',
  isTransparentOverlay = false,
  closeOnClickOutsite = false,
  showBackButton = false,
  isNotInertWhenClosed = false,
  isHideContentWhenClosed = false,
  onOnToggle,
  onInitialized,
  onOnClose,
  onOnBack,
  content,
  footer,
}: BottomSheetProps) {
  const internalId = `${useId()}BottomSheet_Internal`;
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const [hideContentWhenClosed, setHideContentWhenClosed] = useState(false);
  // RemoveInert runs its JS after the block's next render: each request bumps this counter.
  const [inertRequests, setInertRequests] = useState(0);
  const requestRemoveInert = () => {
    setInertRequests((n) => n + 1);
  };
  const props = useRef({ isHideContentWhenClosed, isNotInertWhenClosed, showHeader, onOnToggle, onInitialized });
  useEffect(() => {
    props.current = { isHideContentWhenClosed, isNotInertWhenClosed, showHeader, onOnToggle, onInitialized };
  });

  // OnReady (:756-800), with the inputs of the first render.
  const onReady = useRef(() => {
    jSUtils_SetStyleProperty(internalId, '--bottom-sheet--footer-height', footerHeight);
    jSUtils_SetStyleProperty(internalId, '--ubt-bottomsheet-handler-preview--offset', handlerPreviewOffset);
    if (closeOnClickOutsite) closeOnOverlayClick(internalId, bottomSheetClose);
    if (isNotInertWhenClosed) addTransitionListener(internalId, requestRemoveInert);
  });
  useEffect(() => {
    onReady.current();
  }, []);
  useEffect(() => {
    if (inertRequests > 0) removeInert(internalId);
  }, [inertRequests, internalId]);

  // BottomSheet_InternalOnToggle (:700-745).
  const onInternalToggle = (_bottomSheetId: string, isOpen: boolean) => {
    setLocalIsOpen(isOpen);
    props.current.onOnToggle?.(isOpen);
    setHideContentWhenClosed(isOpen ? false : props.current.isHideContentWhenClosed);
    if (props.current.isNotInertWhenClosed && !isOpen) requestRemoveInert();
  };
  // BottomSheet_InternalInitialized (:920-950): drag-to-open when the header shows, then Initialized.
  const onInternalInitialized = (bottomSheetId: string) => {
    if (props.current.showHeader) bindDragToOpen(bottomSheetId, bottomSheetOpen);
    props.current.onInitialized?.(bottomSheetId);
  };
  // CloseOnClick (:880-915): the top-bar close link.
  const closeOnClick = () => {
    if (isHideContentWhenClosed) delaySetHideWhenClosed(internalId, setHideContentWhenClosed);
    bottomSheetClose(internalId);
    onOnClose?.();
    if (isNotInertWhenClosed) requestRemoveInert();
  };

  const padding = getSpacingOptions('padding', contentPadding);
  const extendedClass = formatClasses(
    formatClasses(
      formatClasses(
        formatClasses(
          formatClasses(MAIN_CONTAINER_CLASS, showHandlerPreview ? `${MAIN_CONTAINER_CLASS}--handler-preview` : ''),
          getClass_BackgroundColor(contentBackgroundColorId),
        ),
        padding !== '' ? 'custom-padding' : '',
      ),
      extendedClasses,
    ),
    isTransparentOverlay ? `${MAIN_CONTAINER_CLASS}--transparent-overlay` : '',
  );
  const closedIcon = (
    <Icon inColorId={UBT_Color.Transparent} inSizeId={UBT_IconSize.Medium_20} inIconId={UBT_Icons.Close} />
  );
  const topBar = showHeader && (
    <Columns_Three
      columnOptions={{
        ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
        SpacingSize: UBT_Size.None,
        VerticalAlign: UBT_VerticalAlign.Center,
      }}
      left={
        showBackButton ? (
          <OSLink onClick={onOnBack}>
            <Icon
              inIconId={UBT_Icons.ArrowLeftAlt}
              inColorId={
                UBT_Color.Neutral9
              } /* If(ShowBackButton, Neutral9, Transparent), inside the ShowBackButton branch */
              inSizeId={UBT_IconSize.Medium_20}
            />
          </OSLink>
        ) : (
          closedIcon
        )
      }
      middle={
        <CustomText
          inTextOptions={{
            Color: UBT_Color.Neutral10,
            FontSize: UBT_FontSize.Small,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
          inText={title}
        />
      }
      right={
        localIsOpen ? (
          <OSLink className={`${MAIN_CONTAINER_CLASS}--close-icon`} onClick={closeOnClick}>
            <Icon inSizeId={UBT_IconSize.Medium_20} inIconId={UBT_Icons.Close} />
          </OSLink>
        ) : (
          closedIcon
        )
      }
    />
  );
  return (
    <OSBlock name="ConnectPatterns.BottomSheet" id={id}>
      <OSUIBottomSheet
        id={internalId}
        shape={Shape.Rounded}
        extendedClass={extendedClass}
        onOnToggle={onInternalToggle}
        onInitialized={onInternalInitialized}
        topBar={topBar}
        content={
          !hideContentWhenClosed && (
            <>
              <div className={`${MAIN_CONTAINER_CLASS}--content ${padding}`}>{content}</div>
              <div className={`${MAIN_CONTAINER_CLASS}--footer`}>{footer}</div>
            </>
          )
        }
      />
    </OSBlock>
  );
}
