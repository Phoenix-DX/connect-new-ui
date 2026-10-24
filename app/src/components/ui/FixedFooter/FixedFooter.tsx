/** @origin UBTConnectLibrary.ConnectPatterns.FixedFooter */
// @os-block UBTConnectLibrary.ConnectPatterns.FixedFooter
import { useEffect, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { jSUtils_AddClass, jSUtils_SetStyleProperty } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { formatClasses } from '@/shared/UBTConnectLibrary/lib/actions';

export interface FixedFooterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  useBottomBar?: boolean;
  /** CSS length set as `--ubt-fixed-footer---footer-height` on the content container. */
  expectedFooterHeight?: string;
  /** Id of the screen's content element (the caller renders it with this id). */
  contentContainerId?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-fixed-footer';

/** Footer fixed at the bottom (p:UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js). OnReady: the footer height
    custom property and the class `ubt-fixed-footer--content` go on the caller's content container, by id. */
export function FixedFooter({
  id,
  useBottomBar = false,
  expectedFooterHeight = '',
  contentContainerId = '',
  children,
}: FixedFooterProps) {
  useEffect(() => {
    jSUtils_SetStyleProperty(contentContainerId, '--ubt-fixed-footer---footer-height', expectedFooterHeight);
    jSUtils_AddClass('ubt-fixed-footer--content', contentContainerId);
    // OnReady only (OutSystems runs it once)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OSBlock name="ConnectPatterns.FixedFooter" id={id}>
      <div
        className={formatClasses(MAIN_CONTAINER_CLASS, !useBottomBar ? `${MAIN_CONTAINER_CLASS}--no-bottom-bar` : '')}
        data-container=""
      >
        <div>{children}</div>
      </div>
    </OSBlock>
  );
}
