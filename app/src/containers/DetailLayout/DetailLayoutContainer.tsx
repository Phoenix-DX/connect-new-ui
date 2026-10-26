/** @origin UBTConnectLibrary.Layouts.Layout_DetailPage */
// @os-block UBTConnectLibrary.Layouts.Layout_DetailPage
import type { ReactNode } from 'react';
import { DetailLayout } from '@/components/layout';
import { useNavigateBack } from '@/platform/navigation';

export interface DetailLayoutContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inAlignTitleLeft?: boolean;
  /** Primary-coloured header (`ubt-layout-detail--primary`, default true). */
  inIsPrimaryColor?: boolean;
  inExtendedClass?: string;
  inEnableAccessibilityFeatures?: boolean;
  /** Renders LayoutRuntime_Top (default true). */
  inInitializeNavigationHandler?: boolean;
  /** Placeholder Placeholder_Header_Title. */
  placeholderHeaderTitle?: ReactNode;
  /** Placeholder Placeholder_Header_Right. */
  placeholderHeaderRight?: ReactNode;
  /** Placeholder HeaderContent. */
  headerContent?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Bottom (the screen's bottom bar). */
  bottom?: ReactNode;
  /** Placeholder Placeholder_CommonUI_Inside_Layout (the screen's CommonUI_InsideLayout). */
  placeholderCommonUIInsideLayout?: ReactNode;
  /** Event OnReadyEvent(LayoutWrapperId). */
  onOnReadyEvent?: (layoutWrapperId: string) => void;
}

/** Detail layout of the screens that are not pages yet: a thin adapter that renders `components/layout` DetailLayout
    with the OutSystems input names, and with OnClick_BackNavigation (the previous screen) as its back arrow
    (refactor plan v2, move-map: the adapter stays until the routes of the layout move). */
export function DetailLayoutContainer({
  id,
  inAlignTitleLeft,
  inIsPrimaryColor,
  inExtendedClass,
  inEnableAccessibilityFeatures,
  inInitializeNavigationHandler,
  placeholderHeaderTitle,
  placeholderHeaderRight,
  headerContent,
  content,
  bottom,
  placeholderCommonUIInsideLayout,
  onOnReadyEvent,
}: DetailLayoutContainerProps) {
  const navigateBack = useNavigateBack();
  return (
    <DetailLayout
      id={id}
      alignTitleLeft={inAlignTitleLeft}
      isPrimaryColor={inIsPrimaryColor}
      extendedClass={inExtendedClass}
      enableAccessibilityFeatures={inEnableAccessibilityFeatures}
      initializeNavigationHandler={inInitializeNavigationHandler}
      headerTitle={placeholderHeaderTitle}
      headerRight={placeholderHeaderRight}
      headerContent={headerContent}
      content={content}
      bottom={bottom}
      commonUI={placeholderCommonUIInsideLayout}
      onBack={navigateBack}
      onReady={onOnReadyEvent}
    />
  );
}
